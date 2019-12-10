import validator from 'validator';
import isEmpty from './isEmpty';

const validateArticleInput = (data) => {
	let error = {};
	let { article, title, tag } = data;
	const titleLen = title.split(' ');
	const articleLen = article.split(' ');
	article = !isEmpty(article) ? article : ' ';
	title = !isEmpty(title) ? title : ' ';
	tag = !isEmpty(tag) ? tag : ' ';

	if (validator.matches(article, /fuck|stupid|sex/gi)) {
		error.article = 'Foul words are forbidden';
		return error;
	}

	if (articleLen.length > 2500) {
		error.article = 'Article too long,should contain at most 2500 words';
		return error;
	}
	if (validator.isEmpty(article)) {
		error.article = 'Article field is required';
		return error;
	}

	if (titleLen.length > 16) {
		error.title = 'Title should contain at most 16 words';
		return error;
	}
	if (validator.isEmpty(title)) {
		error.title = 'Title field is required';
		return error;
	}
	// if (!validator.isLength(tag, { min: 4, max: 50 })) {
	// 	error.tag = 'tag must contain maximum of 50 characters';
	// 	return error;
	// }
	// if (validator.isEmpty(tag)) {
	// 	error.tag = 'tag field is required';
	// 	return error;
	// }
};

export default validateArticleInput;
