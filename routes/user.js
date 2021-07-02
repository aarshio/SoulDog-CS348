const express = require("express");
const app = express.Router();
const db = require("../database/db-config");
const _ = require("lodash");
const passport = require("passport");
const bcrypt = require("bcrypt");

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
  db.getUserByEmail(req.body.email).then(async (user) => {
    if (user) res.send("User exists");
    if (!user) {
      const newUser = {
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 1),
      };
      console.log(newUser);
      await db.addUser(newUser);
      res.send(_.omit(newUser, "password"));
    }
  });
});

app.get("/logout", (req, res) => {
  req.logout();
  res.status(200).send("Logged out successful");
});

app.post("/updateUser", (req, res) => {
  const input = req.body;
  db.getUserById(input.id).then( async(isIDInDB) => {
    if (isIDInDB) {
      if (input.bio) { await db.updateUserBio(input.id, input.bio); }
      if (input.profile_pic) { await db.updateUserProfilePic(input.id, input.profile_pic); }
      if (input.free_time) { await db.updateUserFreeTime(input.id, input.free_time); }
      if (input.strength) { await db.updateUserStength(input.id, input.strength); }
      if (input.energy) { await db.updateUserEnergy(input.id, input.energy); }
      if (input.backyard) { await db.updateUserBackyard(input.id, input.backyard); }
      if (input.last_name) { await db.updateUserLastName(input.id, input.last_name); }
      if (input.first_name) { await db.updateUserFirstName(input.id, input.first_name); }
      db.getUserById(input.id).then( updated_res => res.status(200).send(updated_res) )
    } else {
      res.status(500).send("Attempting to update non-existent User id");
    }
  });
});

app.post("/removeUser", (req, res) => {
  const input = req.body;
  db.getUserById(input.id).then( async(isIDInDB) => {
    if (isIDInDB) {
      await db.deleteUser(input.id);
      res.status(200).send("Deleted user successful");
    } else {
      res.status(500).send("Attempting to delete non-existent user id");
    }
  });
});

module.exports = app;
