import pool from '../../config/pool';
import { createArticleQuery, searchArticleById, updateArticleById, deleteArticleById } from '../../models/articles/sql';
import { commentsByArticleId } from '../../models/comments/sql';
import validateArticleInput from '../../validator/articles';
import validateEditArticleInput from '../../validator/editArticle';
import isEmpty from '../../validator/isEmpty';

class articlesController {
	static postArticle(req, res, next) {
		// Validate user input
		const error = validateArticleInput(req.body);
		const isValid = isEmpty(error);
		if (!isValid) {
			return res.status(400).json({
				status: 'error',
				error: Object.values(error)[0]
			});
		}
		const { article, title } = req.body;
		pool
			.query(createArticleQuery.createArticle, [ article, title ])
			.then((result) => {
				if (result.rowCount == 1) {
					const { articleId, createdOn, title } = result.rows[0];
					return res.status(201).json({
						status: 'success',
						data: {
							message: 'Article successfully posted',
							articleId,
							createdOn,
							title,
							article
						}
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}
	static getArticleById(req, res, next) {
		// Get the articleId from the request params
		// Use it as a value in the query text
		// Search for article with the ID

		const articleId = parseInt(req.params.articleId, 10);
		pool
			.query(searchArticleById, [ articleId ])
			.then((result) => {
				if (result.rowCount == 1) {
					const { articleId, createdOn, title, article } = result.rows[0];

					pool
						.query(commentsByArticleId, [ articleId ])
						.then((resultCom) => {
							return res.status(200).json({
								status: 'success',
								data: {
									id: articleId,
									createdOn,
									title,
									article,
									comments: resultCom.rows
								}
							});
						})
						.catch((err) => {
							console.log(err);
						});
				} else {
					return res.status(404).json({
						status: 'error',
						error: ` Article with Id ${articleId} not found`
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}
	static editArticle(req, res, next) {
		// Get the articleId from params
		// FIND THE ARTICLE WITH THE ID
		// ASSIGN THE VALUES TO ARTICLE OBJECT
		// Validate user input
		const error = validateEditArticleInput(req.body);
		const isValid = isEmpty(error);
		if (!isValid) {
			return res.status(400).json({
				status: 'error',
				error: Object.values(error)[0]
			});
		}
		const articleId = parseInt(req.params.articleId, 10);
		let { article, title } = req.body;
		pool
			.query(searchArticleById, [ articleId ])
			.then((result) => {
				if (result.rowCount == 1) {
					const storedArticle = result.rows[0];
					article = isEmpty(article) ? storedArticle.article : article;
					title = isEmpty(title) ? storedArticle.title : title;

					pool
						.query(updateArticleById, [ article, title, articleId ])
						.then((updateArticle) => {
							res.status(201).json({
								status: 'success',
								data: {
									message: 'Article successfully updated',
									title: updateArticle.title,
									article: updateArticle.article
								}
							});
						})
						.catch((err) => {
							console.log(err);
						});
				} else {
					return res.status(404).json({
						status: 'error',
						error: 'Article not found'
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}
	static deleteArticle(req, res, next) {
		// Get the Id of article in params
		// Search for it in the database and delete it
		// Return a 201 response if deleted
		// and a 404 response if article doesnt exist
		const articleId = parseInt(req.params.articleId, 10);
		pool
			.query(deleteArticleById, [ articleId ])
			.then((result) => {
				if (result.rowCount == 1) {
					console.log(result.rows[0]);
					return res.status(201).json({
						status: 'success',
						data: {
							message: 'Article successfully deleted'
						}
					});
				} else {
					return res.status(404).json({
						status: 'error',
						error: 'Article not found'
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}
	static postComment(req, res, next) {
		res.status(201).json({
			message: 'Comment posted!!'
		});
	}
}

export default articlesController;
