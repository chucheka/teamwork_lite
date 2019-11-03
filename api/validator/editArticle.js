import validator from 'validator';
import isEmpty from './isEmpty';

const validateEditArticleInput = (data) => {
	let error = {};
	let { article, title } = data;

	article = !isEmpty(article) ? article : ' ';
	title = !isEmpty(title) ? title : ' ';

	if (validator.matches(article, /fuck|stupid|sex/gi)) {
		error.article = 'Foul words are forbidden';
		return error;
	}
	if (validator.matches(title, /fuck|stupid|sex/gi)) {
		error.title = 'Foul words are forbidden';
		return error;
	}

	if (!validator.isLength(article, { max: 500 })) {
		error.article = 'Article must contain maximum 500 characters';
		return error;
	}

	if (!validator.isLength(title, { max: 100 })) {
		error.title = 'Title must contain maximum of 100 characters';
		return error;
	}
};

export default validateEditArticleInput;
