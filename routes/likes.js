const express = require("express");
const app = express.Router();
const db = require("../database/db-config");

app.get("/getAllLikes", async (req, res) => {
    try {
      const likes = await db.getAllLikes();
      res.header("Content-Type", "application/json");
      return res.send(JSON.stringify(likes, null, 4));
    } catch (err) {
      console.log("ERROR: ", err);
      return res.status(400).send(err);
    }
});

app.get("/getLikeById/:id", async (req, res) => {
  try {
    const likes = await db.getLikeById(req.params.id);
    res.header("Content-Type", "application/json");
    return res.send(JSON.stringify(likes, null, 4));
  } catch (err) {
    console.log("ERROR: ", err);
    return res.status(400).send(err);
  }
});

app.get("/getLikeByUserId/:id", async (req, res) => {
  try {
    const likes = await db.getLikeByUserId(req.params.id);
    res.header("Content-Type", "application/json");
    return res.send(JSON.stringify(likes, null, 4));
  } catch (err) {
    console.log("ERROR: ", err);
    return res.status(400).send(err);
  }
});

app.get("/getLikeByPostId/:id", async (req, res) => {
  try {
    const likes = await db.getLikeByPostId(req.params.id);
    res.header("Content-Type", "application/json");
    return res.send(JSON.stringify(likes, null, 4));
  } catch (err) {
    console.log("ERROR: ", err);
    return res.status(400).send(err);
  }
});

// will need to add more routes probably

module.exports = app;
