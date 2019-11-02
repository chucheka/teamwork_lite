import validator from 'validator';
import isEmpty from './isEmpty';

const validateSignInInput = (data) => {
	let error = {};
	let { email, password } = data;
	email = !isEmpty(email) ? email : ' ';
	password = !isEmpty(password) ? password : ' ';

	if (validator.isEmpty(email)) {
		error.email = 'Email field field is required';
		return error;
	}
	if (validator.isEmpty(password)) {
		error.password = 'Password field is required';
		return error;
	}
	if (!validator.isEmail(email)) {
		error.email = 'Email is invalid';
		return error;
	}
};

export default validateSignInInput;
