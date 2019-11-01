class articlesController {
	static postArticle(req, res, next) {
		res.status(201).json({
			message: 'Article post route'
		});
	}
	static getArticleById(req, res, next) {
		res.status(200).json({
			message: 'Get article with ID'
		});
	}
	static editArticle(req, res, next) {
		res.status(201).json({
			message: 'Article edit route'
		});
	}
	static deleteArticle(req, res, next) {
		res.status(201).json({
			message: 'Article delete route'
		});
	}
	static postComment(req, res, next) {
		res.status(201).json({
			message: 'Comment posted!!'
		});
	}
}

export default articlesController;
