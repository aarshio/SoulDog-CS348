const express = require("express");
const app = express.Router();
const db = require("../database/db-config");
const _ = require("lodash");
const passport = require("passport");

app.get("/getAllUsers", async (req, res) => {
  try {
    const users = await db.allUsers();
    res.header("Content-Type", "application/json");
    return res.send(JSON.stringify(users, null, 4));
  } catch (err) {
    console.log("ERROR: ", err);
    return res.status(400).send(err);
  }
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No user exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.status(200).send(_.omit(req.user, "password"));
      });
    }
  })(req, res, next);
});

app.post("/register", (req, res) => {
  db.getUserByEmail(req.body.email, async (user) => {
    if (user) res.send("User exists");
    if (!user) {
      const newUser = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
      };
      await db.addUser(newUser);
      res.send(_.omit(newUser, "password"));
    }
  });
});

app.get("/logout", (req, res) => {
  req.logout();
  res.status(200).send("Logged out successful");
});

module.exports = app;
