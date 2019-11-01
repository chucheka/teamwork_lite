class gifController {
	static getGifById(req, res, next) {
		res.status(201).json({
			message: 'Get a gif by its Id'
		});
	}

	static postGif(req, res, next) {
		res.status(201).json({
			message: 'Gif post route'
		});
	}

	static deleteGif(req, res, next) {
		res.status(201).json({
			message: 'Gif delete route'
		});
	}
	static postComment(req, res, next) {
		res.status(201).json({
			message: 'Comment posted!!'
		});
	}
}

export default gifController;
