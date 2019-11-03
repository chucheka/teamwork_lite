import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../../config/pool';
import { createUserQuery, checkEmail } from '../../models/users/sql';
import validateUserInput from '../../validator/user';
import validateSignInInput from '../../validator/signin';
import isEmpty from '../../validator/isEmpty';
class userController {
	static createAccount(req, res, next) {
		// Validate user input
		const error = validateUserInput(req.body);
		const isValid = isEmpty(error);
		if (!isValid) {
			return res.status(400).json({
				status: 'error',
				error: Object.values(error)[0]
			});
		}
		const { firstName, lastName, email, password, gender, jobRole, department, address } = req.body;
		//Check if email is already taken
		pool
			.query(checkEmail, [ email ])
			.then((result) => {
				if (result.rowCount >= 1) {
					return res.status(400).json({
						status: 'error',
						error: 'Email already taken!!'
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
		//Hash Password of user and generate token
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(password, salt, (err, hash) => {
				if (err) throw err;
				const values = [ firstName, lastName, email, hash, gender, jobRole, department, address ];
				pool
					.query(createUserQuery.createUser, values)
					.then((result) => {
						if (result.rowCount === 1) {
							const { userId, firstName, lastName, email } = result.rows[0];
							const payload = {
								userId,
								firstName,
								lastName,
								email
							};
							jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '7d' }, (err, token) => {
								res.status(201).json({
									status: 'success',
									data: {
										message: 'User account successfully created',
										token,
										userId
									}
								});
							});
						}
					})
					.catch((err) => {
						console.log(err.stack);
					});
			});
		});
	}

	static signInUser(req, res, next) {
		//Get user details
		//validate user details
		//check if there is a user with such email
		// decode the password of user returned
		// if match , generate token

		// Validate user input
		const error = validateSignInInput(req.body);
		const isValid = isEmpty(error);
		if (!isValid) {
			return res.status(400).json({
				status: 'error',
				error: Object.values(error)[0]
			});
		}
		const { email, password } = req.body;

		pool
			.query(checkEmail, [ email ])
			.then((result) => {
				if (result.rows.length >= 1) {
					const user = result.rows[0];
					bcrypt.compare(password, user.password, (err, isMatch) => {
						if (err) throw err;
						if (isMatch) {
							const { userId, firstName, lastName, email } = user;
							const payload = {
								userId,
								firstName,
								lastName,
								email
							};
							jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '7d' }, (err, token) => {
								if (err) throw err;
								return res.status(200).json({
									status: 'success',
									data: {
										message: 'User successfully signin',
										token,
										userId
									}
								});
							});
						} else {
							return res.status(400).json({
								status: 'error',
								error: 'Invalid credentials'
							});
						}
					});
				} else {
					return res.status(400).json({
						status: 'error',
						error: 'Invalid credentials'
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}
}

export default userController;
