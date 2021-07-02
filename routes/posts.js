const express = require("express");
const app = express.Router();
const db = require("../database/db-config");

app.get("/getAllPosts", async (req, res) => {
    try {
      const posts = await db.getAllPosts();
      res.header("Content-Type", "application/json");
      return res.send(JSON.stringify(posts, null, 4));
    } catch (err) {
      console.log("ERROR: ", err);
      return res.status(400).send(err);
    }
});

app.get("/getPostById/:id", async (req, res) => {
  try {
    const posts = await db.getPostById(req.params.id);
    res.header("Content-Type", "application/json");
    return res.send(JSON.stringify(posts, null, 4));
  } catch (err) {
    console.log("ERROR: ", err);
    return res.status(400).send(err);
  }
});

app.get("/getPostsByUserId/:id", async (req, res) => {
  try {
    const posts = await db.getPostsByUserId(req.params.id);
    res.header("Content-Type", "application/json");
    return res.send(JSON.stringify(posts, null, 4));
  } catch (err) {
    console.log("ERROR: ", err);
    return res.status(400).send(err);
  }
});

app.get("/getPostByPetId/:id", async (req, res) => {
  try {
    const posts = await db.getPostByPetId(req.params.id);
    res.header("Content-Type", "application/json");
    return res.send(JSON.stringify(posts, null, 4));
  } catch (err) {
    console.log("ERROR: ", err);
    return res.status(400).send(err);
  }
});

// will need to add more routes probably

module.exports = app;
