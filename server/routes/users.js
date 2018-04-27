const express = require("express");
const passport = require("passport");
const passportConf = require("../services/passport");
const router = express();
const User = require("../models_").User;
const UsersController = require("../controllers/users");
const passportJWT = passport.authenticate("jwtWithJWT", { session: false });

router.get(
  "/auth/facebook",
  passport.authenticate("facebookToken"),
  UsersController.facebookOAuth
);

router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebookToken", { session: false }),
  UsersController.facebookOAuth,
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

router.get(
  "/google",
  passport.authenticate("google", {
    session: false,
    scope: ["profile", "email"]
  }),
  UsersController.googleOAuth
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  UsersController.googleOAuth,
  (req, res) => {
    console.log("callback");
  }
);

// router.get("/", (req, res) => {
//   User.destroy({
//     where: {
//       email: "nazariy.mural@eliftech.com"
//     }
//   }).then(user => {
//     console.log("deleted");
//   });
// });

module.exports = router;
