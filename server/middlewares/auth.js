// const jwt = require('jsonwebtoken');

// const userService = require('app/services/user');
// const authConfig = require('app/config').auth;
// const messages = require('app/messages');

// const checkAuth = function(options = {}) {
//  	return function(req, res, next){
// 		var token = req.headers['authtoken'];

// 		if (!token){
// 			if (options.allowAll){
// 				return next();
// 			}

// 			return res.status(403).send({ success: false, message: messages.auth.noToken });
// 		}

// 		jwt.verify(token, authConfig.jwtSecret, (err, decoded) => {
// 			if (err){
// 				return res.status(403).send({ success: false, message: messages.auth.tokenIsNotValid });
// 			}

// 	    	req.user = {
// 				phone: decoded.phone,
// 				id: decoded.id
// 			};

// 			userService.getUserById(req.user.id)
// 			.then(user => {
// 				if (!user)
// 					return res.status(403).send({ success: false, message: messages.auth.tokenIsNotValid });

// 				return  next();;
// 			});
// 		});
// 	}
// }

// module.exports = checkAuth;
