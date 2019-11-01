import jwt from 'jsonwebtoken';

const verifyToken = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
		const payload = await jwt.verify(token, process.env.JWT_KEY);
		req.user = payload;
		next();
	} catch (error) {
		return res.status(403).json({
			status: 'error',
			error: 'Invalid token supplied'
		});
	}
};

export default verifyToken;
