const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const config = require("../configuration");
const User = require("../models_").User;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook");

// JSON WEB TOKENS STRATEGY
passport.use(
  "jwtWithJWT",
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: config.JWT_SECRET
    },
    async (payload, done) => {
      try {
        // Find the user specified in token
        const user = await User.findOne({
          where: {
            id: payload.sub
          },
          raw: true
        });
        console.log(user, "user_23");

        // If user doesn't exists, handle it
        if (!user) {
          console.log("You are not authorized");
          return done(null, false);
        }
        // Return the user
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

passport.use(
  "facebookToken",
  new FacebookStrategy(
    {
      clientID: config.oauth.facebook.clientID,
      clientSecret: config.oauth.facebook.clientSecret,
      callbackURL: "/users/auth/facebook/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log("profile", profile);
        console.log("accessToken", accessToken);
        console.log("refreshToken", refreshToken);

        const existingUser = await User.findOne({
          where: {
            facebookId: profile.id
          },
          raw: true
        });
        if (existingUser) {
          return done(null, existingUser);
        }

        const newUser = await User.create({
          facebookId: profile.id,
          name: profile.displayName,
          phone: "6515",
          email: "sacaascas@gmail.com"
        });

        done(null, newUser);
      } catch (error) {
        done(error, false, error.message);
      }
    }
  )
);

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: config.oauth.google.clientID,
      clientSecret: config.oauth.google.clientSecret,
      callbackURL: "/users/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("passport");
      try {
        console.log("accessToken", accessToken);
        console.log(User);
        const existingUser = await User.findOne({
          where: {
            googleId: profile.id
          },
          raw: true
        });
        if (existingUser) {
          console.log(existingUser, "existingUser");
          return done(null, existingUser);
        }

        const newUser = await User.create({
          googleId: profile.id,
          email: profile.emails[0].value,
          name: profile.displayName,
          imageUrl: profile.photos[0].value,
          phone: "1234556"
        });

        done(null, newUser);
      } catch (error) {
        console.log("error");
        done(error, false, error.message);
      }
    }
  )
);
