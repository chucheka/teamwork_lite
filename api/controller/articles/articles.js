import pool from '../../config/pool';
import {
	createArticleQuery,
	searchArticleById,
	updateArticleById,
	deleteArticleById,
	flagArticleQuery,
	deleteFlaggedArticleById
} from '../../models/articles/sql';
import {
	commentsByArticleId,
	createCommentQuery,
	searchCommentById,
	flagCommentQuery
} from '../../models/comments/sql';
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
		const { article, title, tag } = req.body;
		pool
			.query(createArticleQuery.createArticle, [ article, title, tag ])
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
				if (result.rows.length > 0) {
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
		let { article, title, tag } = req.body;

		pool
			.query(searchArticleById, [ articleId ])
			.then((result) => {
				if (result.rows.length > 0) {
					const storedArticle = result.rows[0];
					article = isEmpty(article) ? storedArticle.article : article;
					title = isEmpty(title) ? storedArticle.title : title;
					tag = isEmpty(tag) ? storedArticle.tag : tag;

					pool
						.query(updateArticleById, [ article, title, tag, articleId ])
						.then((updateArticle) => {
							const { article, title } = updateArticle.rows[0];
							res.status(201).json({
								status: 'success',
								data: {
									message: 'Article successfully updated',
									title: title,
									article: article
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
				if (result.rows.length > 0) {
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
		// GET article ID from params
		// Fetch article with the given ID
		// Use the id to create a comment on comment table
		// Refactor validate comment inut
		const articleId = parseInt(req.params.articleId, 10);
		// Get ID of logged in user that wants to comment on the article
		const { userId } = req.user;
		// Search for the article with articleId
		const comment = req.body.comment;
		if (isEmpty(comment)) {
			return res.status(400).json({
				status: 'error',
				error: 'comment field cannot be empty'
			});
		}
		if (comment.length > 300) {
			return res.status(400).json({
				status: 'error',
				error: 'comment too lengthy'
			});
		}
		pool
			.query(searchArticleById, [ articleId ])
			.then((result) => {
				if (result.rows.length > 0) {
					const { createdOn, article, title } = result.rows[0];
					// Create the comment and attach it to the response body
					pool
						.query(createCommentQuery.createComment, [ userId, articleId, , comment ])
						.then((commentRow) => {
							if (commentRow.rows.length > 0) {
								const { comment } = commentRow.rows[0];
								return res.status(201).json({
									status: 'success',
									data: {
										message: 'Comment successfully created',
										createdOn: createdOn,
										articleTitle: title,
										article: article,
										comment: comment
									}
								});
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
	static flagArticle(req, res, next) {
		// GET THE ID of the article to mark
		const articleId = parseInt(req.params.articleId, 10);
		// Search for the article to see if it exists
		pool
			.query(searchArticleById, [ articleId ])
			.then((result) => {
				if (result.rows.length > 0) {
					pool
						.query(flagArticleQuery)
						.then((flaggedArt) => {
							if (flaggedArt.rows.length > 0) {
								return res.status(201).json({
									status: 'success',
									data: {
										message: 'article has been flagged as inappropriate'
									}
								});
							}
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

	static deleteFlaggedArticle(req, res, next) {
		const articleId = parseInt(req.params.articleId, 10);

		const { userName } = req.body;

		if (userName === 'Admin') {
			pool
				.query(deleteFlaggedArticleById, [ articleId ])
				.then((result) => {
					if (result.rows.length > 0) {
						return res.status(201).json({
							status: 'success',
							data: {
								message: 'Article successfully deleted'
							}
						});
					} else {
						return res.status(404).json({
							status: 'error',
							error: 'Article not found or not flagged'
						});
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			return res.status(401).json({
				status: 'error',
				error: 'Only admin can delete flagged articles'
			});
		}
	}
	static flagComment(req, res, next) {
		const commentId = parseInt(req.params.commentId, 10);
		pool
			.query(searchCommentById, [ commentId ])
			.then((result) => {
				if (result.rows.length > 0) {
					pool
						.query(flagCommentQuery)
						.then((flaggedComment) => {
							if (flaggedComment.rows.length > 0) {
								return res.status(201).json({
									status: 'success',
									data: {
										message: 'comment has been flagged as inappropriate'
									}
								});
							}
						})
						.catch((err) => {
							console.log(err);
						});
				} else {
					return res.status(404).json({
						status: 'error',
						error: 'Comment not found'
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}
	static async getArticleByTagName(req, res) {
		const { tag } = req.query;
		const query = {
			text: `SELECT * FROM articles WHERE tag = ${tag}`
		};
		try {
			const result = await pool.query(query);
			if (result.rows.length > 0) {
				res.status(200).json({
					status: 'success',
					data: result.rows
				});
			} else {
				res.status(404).json({
					status: 'error',
					error: 'No articles in this category'
				});
			}
		} catch (error) {
			res.status(500).json({
				status: 'error',
				error: error.message
			});
		}
	}
}

export default articlesController;
