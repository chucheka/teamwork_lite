import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../../config/pool';
import { createUserQuery, checkEmail } from '../../models/users/sql';
import validateUserInput from '../../validator/user';
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
		res.status(200).json({
			message: 'User sign in route'
		});
	}
}

export default userController;
