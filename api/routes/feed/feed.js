import express from 'express';
import verifyToken from '../../config/verifyToken';
import feedController from '../../controller/feed/feed';
const router = express.Router();
//@ route GET /api/v1/feeds
//@ desc User can GET feeds
// @ access private
router.get('/feeds', verifyToken, feedController.getFeeds);

export default router;
