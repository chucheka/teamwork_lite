import validator from 'validator';
import isEmpty from './isEmpty';

const validateArticleInput = (data) => {
	let error = {};
	let { article, title } = data;

	article = !isEmpty(article) ? article : ' ';
	title = !isEmpty(title) ? title : ' ';

	if (validator.matches(article, /fuck|stupid|sex/gi)) {
		error.article = 'Foul words are forbidden';
		return error;
	}

	if (!validator.isLength(article, { min: 4, max: 500 })) {
		error.article = 'Article must contain maximum 500 characters';
		return error;
	}
	if (validator.isEmpty(article)) {
		error.article = 'Article field is required';
		return error;
	}
	if (!validator.isLength(title, { min: 4, max: 500 })) {
		error.title = 'Title must contain maximum of 100 characters';
		return error;
	}
	if (validator.isEmpty(title)) {
		error.title = 'Title field is required';
		return error;
	}
};

export default validateArticleInput;
