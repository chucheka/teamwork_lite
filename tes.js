export const postEmployee = async (req, res, next) => {
	try {
		let query = 'SELECT email FROM employees WHERE email = $1';
		let go = await pool.query(query, [ 'ssss' ]);
		if (go.rows.length > 0) {
			return res.status(400).json({
				status: 'error',
				data: {
					message: 'User already registered'
				}
			});
		} else {
			const querys = 'INSERT ..........';
		}
	} catch (error) {
		console.log(error);
	}
};
