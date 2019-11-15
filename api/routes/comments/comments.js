import express from 'express';
import verifyToken from '../../config/verifyToken';
import commentsController from '../../controller/comments/comments';

const router = express.Router();

//@ route POST /api/v1/articles/:articleId/comment
//@ desc User can comment on an article
// @ access private
router.patch('/comments/:commentId', verifyToken, commentsController.editComment);
//@ route PATCH /api/v1/comments/:commentId/flag
//@ desc User can flag comment(s) has inapropriate
// @ access private
router.patch('/comments/:commentId/flag', verifyToken, commentsController.flagComment);

//@ route DELETE /api/v1/comments/:commentId/flag
//@ desc Admin can delete comment(s) flagged as inappropriate
//@ access private
router.delete('/comments/:commentId/flag', verifyToken, commentsController.deleteFlaggedComment);

export default router;
