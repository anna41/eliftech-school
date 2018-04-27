const express = require("express");
const passport = require("passport");
const router = express();

const SecretController = require("../controllers/secret");
const passportJWT = passport.authenticate("jwtWithJWT", { session: false });

// router.route("/").get(passportJWT, SecretController.secret);
router.get("/", (req, res) => {
  console.log(req);
});

module.exports = router;
