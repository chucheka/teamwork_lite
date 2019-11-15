import express from 'express';
import verifyToken from '../../config/verifyToken';
import gifController from '../../controller/gifs/gifs';
import uploads from '../../middlewares/multer';
const router = express.Router();

//@ route POST /api/v1/gifs
//@ desc User can post gifs
// @ access private
router.post('/gifs', verifyToken, uploads.single('image'), gifController.postGif);
//@ route DELETE /api/v1/gifs/:gifId
//@ desc User can delete gif
// @ access private
router.delete('/gifs/:gifId', verifyToken, gifController.deleteGif);
//@ route GET /api/v1/gifs/:gifId
//@ desc User can GET gif with gifId
// @ access private
router.get('/gifs/:gifId', verifyToken, gifController.getGifById);
//@ route POST /api/v1/gifs/:gifId/comment
//@ desc User can comment on  gif with gifId
// @ access private
router.post('/gifs/:gifId/comment', verifyToken, gifController.postComment);
//@ route PATCH /api/v1/gifs/:gifId/flag
//@ desc User can flag gif(s) has inapropriate
// @ access private
router.patch('/gifs/:gifId/flag', verifyToken, gifController.flagGif);
//@ route DELETE /api/v1/gifs/:gifId/flag
//@ desc Admin can delete flagged gif
// @ access private
router.delete('/gifs/:gifId/flag', verifyToken, gifController.deleteFlaggedGif);
export default router;
