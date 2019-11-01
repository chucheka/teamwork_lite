class feedController {
	static getFeeds(req, res, next) {
		res.status(200).json({
			message: ' feed routes'
		});
	}
}

export default feedController;
