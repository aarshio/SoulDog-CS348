const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const db = require("../database/db-config");
const bcrypt = require("bcrypt");

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  db.getUserById(id).then((user) => {
    cb(null, user);
  });
});

passport.use(
  new passportLocal((email, password, done) => {
    db.getUserByEmail(email)
      .then((user) => {
        console.log(user);
        if (!user) return done(null, false);
        bcrypt
          .compare(password, user.password)
          .then((res) => {
            if (res) {
              return done(null, user);
            }
            return done(null, false);
          })
          .catch((err) => {
            return done(null, false);
          });
      })
      .catch((err) => {
        throw err;
      });
  })
);
