import pool from '../../config/pool';
import { createGifsQuery, searchGifById, deleteGifById, flagGifQuery } from '../../models/gifs/sql';
import { commentsByGifId, createCommentQuery } from '../../models/comments/sql';
import validateGifInput from '../../validator/gif';
import isEmpty from '../../validator/isEmpty';
class gifController {
	static getGifById(req, res, next) {
		// Get the gifId from the request params
		// Use it as a value in the query text
		// Search for gif with the ID

		const gifId = parseInt(req.params.gifId, 10);
		pool
			.query(searchGifById, [ gifId ])
			.then((result) => {
				if (result.rows.length > 0) {
					const { gifId, createdOn, title, imageUrl } = result.rows[0];

					pool
						.query(commentsByGifId, [ gifId ])
						.then((resultCom) => {
							return res.status(200).json({
								status: 'success',
								data: {
									id: gifId,
									createdOn,
									title,
									imageUrl,
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
						error: `Gif with Id ${gifId} not found`
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	static postGif(req, res, next) {
		// Validate user input
		const { image, title } = req.body;
		const error = validateGifInput(req.body);
		const isValid = isEmpty(error);
		if (!isValid) {
			return res.status(400).json({
				status: 'error',
				error: Object.values(error)[0]
			});
		}

		pool
			.query(createGifsQuery.createGif, [ title, image ])
			.then((result) => {
				if (result.rowCount == 1) {
					const { gifId, createdOn, title, imageUrl } = result.rows[0];
					return res.status(201).json({
						status: 'success',
						data: {
							message: 'Gif successfully posted',
							gifId,
							createdOn,
							title,
							imageUrl
						}
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	static deleteGif(req, res, next) {
		// Get the Id of gif in params
		// Search for it in the database and delete it
		// Return a 201 response if deleted
		// and a 404 response if gif doesnt exist
		const gifId = parseInt(req.params.gifId, 10);
		pool
			.query(deleteGifById, [ gifId ])
			.then((result) => {
				if (result.rows.length > 0) {
					console.log(result.rows[0]);
					return res.status(201).json({
						status: 'success',
						data: {
							message: 'Gif successfully deleted'
						}
					});
				} else {
					return res.status(404).json({
						status: 'error',
						error: 'Gif not found'
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}
	static postComment(req, res, next) {
		// GET gif ID from params
		// Fetch gif with the given ID
		// Use the Id to create a comment on comment table
		// Refactor validate comment inut
		const gifId = parseInt(req.params.gifId, 10);
		// Get ID of logged in user that wants to comment on the gif
		const { userId } = req.user;
		// Search for the gif with gifId
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
			.query(searchGifById, [ gifId ])
			.then((result) => {
				if (result.rows.length > 0) {
					const { createdOn, imageUrl, title } = result.rows[0];
					// Create the comment and attach it to the response body
					pool.query(createCommentQuery.createComment, [ userId, , gifId, comment ]).then((commentRow) => {
						if (commentRow.rows.length > 0) {
							const { comment } = commentRow.rows[0];
							return res.status(201).json({
								status: 'success',
								data: {
									message: 'Comment successfully created',
									createdOn: createdOn,
									gifTitle: title,
									imageUrl: imageUrl,
									comment: comment
								}
							});
						}
					});
				} else {
					return res.status(404).json({
						status: 'error',
						error: 'Gif not found'
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}
	static flagGif(req, res, next) {
		// GET THE ID of the gif to mark
		const gifId = parseInt(req.params.gifId, 10);
		// Search for the gif to see if it exists
		pool
			.query(searchGifById, [ gifId ])
			.then((result) => {
				if (result.rows.length > 0) {
					pool
						.query(flagGifQuery)
						.then((flaggedGif) => {
							if (flaggedGif.rows.length > 0) {
								return res.status(201).json({
									status: 'success',
									data: {
										message: 'Gif has been flagged'
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
						error: 'Gif not found'
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}
}

export default gifController;
