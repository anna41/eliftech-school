const JWT = require("jsonwebtoken");
const User = require("../models_/user");
const { JWT_SECRET } = require("../configuration");

signToken = user => {
  return JWT.sign(
    {
      iss: "eliftech",
      sub: user.id,
      iat: new Date().getTime(), // current time
      exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
    },
    JWT_SECRET
  );
};

module.exports = {
  googleOAuth: async (req, res, next) => {
    // Generate token
    const token = signToken(req.user);
    const string = encodeURIComponent(token);

    res.redirect("/" + string);
    // res.status(200).json({ token });

    next({ string });
  },
  facebookOAuth: async (req, res, next) => {
    // Generate token
    const token = signToken(req.user);
    const string = encodeURIComponent(token);
    res.redirect("/" + string);

    // res.status(200).json({ token });
  }
};
