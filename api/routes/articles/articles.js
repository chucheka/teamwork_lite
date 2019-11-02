import express from 'express';
import verifyToken from '../../config/verifyToken';
import articleController from '../../controller/articles/articles';
const router = express.Router();

//@ route POST /api/v1/articles
//@ desc User can post articles
// @ access private
router.post('/articles', verifyToken, articleController.postArticle);
//@ route PATCH /api/v1/articles/:articleId
//@ desc User can edit article
// @ access private
router.patch('/articles/:articleId', verifyToken, articleController.editArticle);
//@ route GET /api/v1/articles/:articleId
//@ desc User can get article
// @ access private
router.get('/articles/:articleId', verifyToken, articleController.getArticleById);

//@ route DELETE /api/v1/articles/:articleId
//@ desc User can delete article
// @ access private
router.delete('/articles/:articleId', verifyToken, articleController.deleteArticle);
//@ route POST /api/v1/articles/:articleId/comment
//@ desc User can comment on an article
// @ access private
router.post('/articles/:articleId/comment', verifyToken, articleController.postComment);

export default router;