import validator from 'validator';
import isEmpty from './isEmpty';

const validateUserInput = (data) => {
	let error = {};
	let { firstName, lastName, email, password, password2, gender, jobRole, department, address } = data;
	data = !isEmpty(data) ? data : ' ';
	firstName = !isEmpty(firstName) ? firstName : ' ';
	lastName = !isEmpty(lastName) ? lastName : ' ';
	jobRole = !isEmpty(jobRole) ? jobRole : ' ';
	department = !isEmpty(department) ? department : ' ';
	address = !isEmpty(address) ? address : ' ';
	gender = !isEmpty(gender) ? gender : ' ';
	email = !isEmpty(email) ? email : ' ';
	password = !isEmpty(password) ? password : ' ';
	password2 = !isEmpty(password2) ? password2 : ' ';

	// if (validator.isEmpty(data)) {
	// 	error.data = 'Please fill out the form';
	// 	return error;
	// }
	if (!validator.isLength(firstName, { min: 2, max: 30 })) {
		error.firstName = 'Name must be between 2 and 30 characters';
		return error;
	}
	if (validator.isEmpty(firstName)) {
		error.firstName = 'Name field is required';
		return error;
	}
	if (validator.isEmpty(lastName)) {
		error.lastName = 'lastName field is required';
		return error;
	}
	if (validator.isEmpty(email)) {
		error.email = 'Email field field is required';
		return error;
	}
	if (validator.isEmpty(password)) {
		error.password = 'Password field is required';
		return error;
	}
	if (validator.isEmpty(password2)) {
		error.password2 = 'Confirm password field is required';
		return error;
	}
	if (validator.isEmpty(gender)) {
		error.gender = 'Gender field is required';
		return error;
	}
	if (validator.isEmpty(department)) {
		error.department = 'Please state department';
		return error;
	}
	if (validator.isEmpty(address)) {
		error.address = 'Address field is required';
		return error;
	}
	if (!validator.isEmail(email)) {
		error.email = 'Email is invalid';
		return error;
	}
	if (!validator.isLength(password, { min: 6, max: 30 })) {
		error.password = 'Password must be between 6 to 30 characters';
		return error;
	}

	if (!validator.equals(password, password2)) {
		error.password2 = "Passwords don't match!!";
		return error;
	}
};

export default validateUserInput;
