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

app.get("/getLikeByUserIdAndPostId/:uid/:pid", async (req, res) => {
  try {
    const likes = await db.getLikeByUserIdAndPostId(req.params.uid, req.params.pid);
    res.header("Content-Type", "application/json");
    return res.send(JSON.stringify(likes, null, 4));
  } catch (err) {
    console.log("ERROR: ", err);
    return res.status(400).send(err);
  }
});

// will need to add more routes probably

app.post("/addLike", (req, res) => {
  const input = req.body;
  db.getLikeByUserIdAndPostId(input.user_id, input.post_id).then( async(isInDB) => {
    if (isInDB) {
      res.send("Like exists already");
    } else {
      const newLike = {
        user_id: input.user_id,
        post_id: input.post_id,
      };
      console.log(newLike);
      const answer = await db.addLikes(newLike);
      res.send(answer);
    }
  });
});

app.post("/removeLike", (req, res) => {
  const input = req.body;
  db.getLikeById(input.id).then( async(isIDInDB) => {
    if (isIDInDB) {
      await db.deleteLike(input.id);
      res.status(200).send("Deleted like successful");
    } else {
      res.status(500).send("Attempting to delete non-existent like id");
    }
  });
});

module.exports = app;
