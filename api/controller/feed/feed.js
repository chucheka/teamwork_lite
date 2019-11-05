import pool from '../../config/pool';
import { getAllArticles, getAllGifs } from '../../models/feed/feed';
class feedController {
	static async getFeeds(req, res, next) {
		try {
			let articles = await pool.query(getAllArticles);
			let gifs = await pool.query(getAllGifs);
			const feed = [ ...articles.rows, ...gifs.rows ].sort((a, b) => {
				return Date.parse(b.createdOn) - Date.parse(a.createdOn);
			});

			if (feed.length > 0) {
				return res.status(200).json({
					status: 'success',
					data: feed
				});
			} else {
				return res.status(404).json({
					status: 'error',
					error: 'There are no posted articles or gifs'
				});
			}
		} catch (err) {
			console.log(err);
		}
	}
}

export default feedController;
