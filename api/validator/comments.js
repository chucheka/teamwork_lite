import validator from 'validator';
import isEmpty from './isEmpty';

const validateEditCommentInput = (data) => {
	let error = {};
	let { comment } = data;

	comment = !isEmpty(comment) ? comment : ' ';

	if (validator.matches(comment, /fuck|stupid|sex/gi)) {
		error.comment = 'Foul words are forbidden';
		return error;
	}

	if (!validator.isLength(article, { max: 500 })) {
		error.article = 'Comment must contain maximum 500 characters';
		return error;
	}
};

export default validateEditCommentInput;
