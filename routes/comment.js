const express = require("express");
const app = express.Router();
const db = require("../database/db-config");

app.get("/getAllComments", async (req, res) => {
    try {
      const comments = await db.getAllComments();
      res.header("Content-Type", "application/json");
      return res.send(JSON.stringify(comments, null, 4));
    } catch (err) {
      console.log("ERROR: ", err);
      return res.status(400).send(err);
    }
});

app.get("/getCommentsById/:id", async (req, res) => {
  try {
    const comments = await db.getCommentsById(req.params.id);
    res.header("Content-Type", "application/json");
    return res.send(JSON.stringify(comments, null, 4));
  } catch (err) {
    console.log("ERROR: ", err);
    return res.status(400).send(err);
  }
});

app.get("/getCommentsByUserId/:id", async (req, res) => {
  try {
    const comments = await db.getCommentsByUserId(req.params.id);
    res.header("Content-Type", "application/json");
    return res.send(JSON.stringify(comments, null, 4));
  } catch (err) {
    console.log("ERROR: ", err);
    return res.status(400).send(err);
  }
});

app.get("/getCommentsByPostId/:id", async (req, res) => {
  try {
    const comments = await db.getCommentsByPostId(req.params.id);
    res.header("Content-Type", "application/json");
    return res.send(JSON.stringify(comments, null, 4));
  } catch (err) {
    console.log("ERROR: ", err);
    return res.status(400).send(err);
  }
});

// will need to add more routes probably

module.exports = app;
