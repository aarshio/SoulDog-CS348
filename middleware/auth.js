const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const db = require("../database/db-config");

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  db.getUserById(id).then((user) => {
    cb(null, user);
  });
});

passport.use(
  new passportLocal((username, password, done) => {
    db.getUserByUsername(username)
      .then((user) => {
        if (!user) return done(null, false);
        if (user && user.password == password) return done(null, user);
        else return done(null, false);
      })
      .catch((err) => {
        throw err;
      });
  })
);
