// middleware/users.js

const jwt = require('jsonwebtoken');

module.exports = {
	isLoggedIn: (req, res, next) => {
		try {
			const token = req.headers.authorization.split(' ')[1];
			req.userData = jwt.verify(
				token,
				process.env.JWT_SECRET
			);
			next();
		} catch (err) {
			return res.status(403).json({message: 'Forbidden'});
		}
	},
	login: (req, res, next) => {
		if(req.body.username !== process.env.USERNAME || req.body.password !== process.env.PASSWORD) {
			return res.status(401).send({
				message: 'Authentication failed',
			});
		}
		const token = jwt.sign(	{ username: req.body.username}, process.env.JWT_SECRET, {expiresIn: '7d'});
		return res.status(200).json({
			message: 'Logged in',
			token,
			username: req.body.username
		});
	}
};
