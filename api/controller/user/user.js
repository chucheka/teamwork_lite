class userController {
	static createAccount(req, res, next) {
		res.status(200).json({
			message: 'Create user account'
		});
	}

	static signInUser(req, res, next) {
		res.status(200).json({
			message: 'User sign in route'
		});
	}
}

export default userController;
