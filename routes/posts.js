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

app.post("/addPost", (req, res) => {
  const input = req.body;
  db.getPostByPetIdAndUserId(input.user_id, input.pet_id).then( async(isInDB) => {
    if (isInDB) {
      res.send("Post exists already");
    } else {
      const newPost = {
        user_id: input.user_id,
        pet_id: input.pet_id,
        title: input.title,
        content: input.content,
        name: input.name,
        age: input.age,
      };
      console.log(newPost);
      await db.addPosts(newPost);
      res.send(newPost);
    }
  });
});

app.post("/updatePost", (req, res) => {
  const input = req.body;
  db.getPostById(input.id).then( async(isIDInDB) => {
    if (isIDInDB) {
      if (input.title) { await db.updatePostTitle(input.id, input.title); }
      if (input.content) { await db.updatePostContent(input.id, input.content); }
      res.status(200).send("Updating post successful");
    } else {
      res.status(500).send("Attempting to update non-existent post id");
    }
  });
});

app.post("/removePost", (req, res) => {
  const input = req.body;
  db.getPostById(input.id).then( async(isIDInDB) => {
    if (isIDInDB) {
      await db.deletePost(input.id);
      res.status(200).send("Deleted post successful");
    } else {
      res.status(500).send("Attempting to delete non-existent post id");
    }
  });
});

module.exports = app;
