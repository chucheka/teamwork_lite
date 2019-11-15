import pool from '../../config/pool';
import {
	searchCommentById,
	flagCommentQuery,
	deleteFlaggedCommentById,
	updateCommentById
} from '../../models/comments/sql';
import validateEditCommentInput from '../../validator/editArticle';
import isEmpty from '../../validator/isEmpty';

class commentsController {
	// @ Edit posted comment

	static editComment(req, res, next) {
		// Validate user input
		// Get the commentId from params
		// FIND THE COMMENT WITH THE ID
		// ASSIGN THE VALUES TO COMMENT OBJECT

		const error = validateEditCommentInput(req.body);
		const isValid = isEmpty(error);
		if (!isValid) {
			return res.status(400).json({
				status: 'error',
				error: Object.values(error)[0]
			});
		}
		const commentId = parseInt(req.params.commentId, 10);
		let { comment } = req.body;

		pool
			.query(searchCommentById, [ commentId ])
			.then((result) => {
				if (result.rows.length > 0) {
					const storedComment = result.rows[0];
					comment = isEmpty(comment) ? storedComment.comment : comment;
					pool
						.query(updateCommentById, [ comment, commentId ])
						.then((updatedComment) => {
							const { comment } = updatedComment.rows[0];
							return res.status(201).json({
								status: 'success',
								data: {
									message: 'Comment successfully editted',
									comment
								}
							});
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
	// @ Flag a comment as inappropriate
	static flagComment(req, res, next) {
		const commentId = parseInt(req.params.commentId, 10);
		pool
			.query(searchCommentById, [ commentId ])
			.then((result) => {
				if (result.rows.length > 0) {
					pool
						.query(flagCommentQuery, [ commentId ])
						.then((flaggedComment) => {
							if (flaggedComment.rows.length > 0) {
								return res.status(201).json({
									status: 'success',
									data: {
										message: 'Comment has been flagged as inappropriate'
									}
								});
							} else {
								return res.status(500).json({
									status: 'error',
									error: 'Internal server error'
								});
							}
						})
						.catch((err) => {
							return res.status(500).json({
								status: 'error',
								error: 'Internal server error'
							});
						});
				} else {
					return res.status(404).json({
						status: 'error',
						error: 'Comment not found'
					});
				}
			})
			.catch((err) => {
				return res.status(500).json({
					status: 'error',
					error: 'Internal server error'
				});
			});
	}
	// @ Delete flagged comment
	static deleteFlaggedComment(req, res, next) {
		const commentId = parseInt(req.params.commentId, 10);

		const { userName } = req.user;
		console.log(`This ${userName} is the user trying to delete comment`);
		if (userName === 'Admin') {
			pool
				.query(deleteFlaggedCommentById, [ commentId ])
				.then((result) => {
					if (result.rows.length > 0) {
						return res.status(201).json({
							status: 'success',
							data: {
								message: 'Comment successfully deleted'
							}
						});
					} else {
						return res.status(404).json({
							status: 'error',
							error: 'Comment not found or not flagged'
						});
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			return res.status(401).json({
				status: 'error',
				error: 'Only admin can delete flagged comments'
			});
		}
	}
}

export default commentsController;
