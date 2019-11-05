import validator from 'validator';
import isEmpty from './isEmpty';

const validateGifInput = (data) => {
	let error = {};
	let { title } = data;

	title = !isEmpty(title) ? title : ' ';
	if (validator.isEmpty(title)) {
		error.title = 'Title field is required';
		return error;
	}
	if (!validator.isLength(title, { min: 1, max: 100 })) {
		error.title = 'Title must contain maximum of 100 characters';
		return error;
	}
};

export default validateGifInput;
