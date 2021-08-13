const express = require("express");
const app = express.Router();
const db = require("../database/db-config");

app.get("/getAllFavs", async (req, res) => {
  try {
    const favs = await db.getAllFavs();
    res.header("Content-Type", "application/json");
    return res.send(JSON.stringify(favs, null, 4));
  } catch (err) {
    console.log("ERROR: ", err);
    return res.status(400).send(err);
  }
});

app.get("/getFavById/:id", async (req, res) => {
  try {
    const favs = await db.getFavById(req.params.id);
    res.header("Content-Type", "application/json");
    return res.send(JSON.stringify(favs, null, 4));
  } catch (err) {
    console.log("ERROR: ", err);
    return res.status(400).send(err);
  }
});

app.get("/getFavByUserId/:id", async (req, res) => {
  try {
    const favs = await db.getFavByUserId(req.params.id);
    let arr = [];
    for (let fav of favs) {
      const post = await db.getPostById(fav.post_id);
      // console.log(post);
      arr.push(post);
    }
    res.header("Content-Type", "application/json");
    return res.send(JSON.stringify(arr, null, 4));
  } catch (err) {
    console.log("ERROR: ", err);
    return res.status(400).send(err);
  }
});

app.post("/getFavByUserIdAndPostId", (req, res) => {
  const input = req.body;
  db.getFavByUserIdAndPostId(input.user_id, input.post_id).then(
    async (isInDB) => {
      // console.log(isInDB);
      if (isInDB) {
        res.send(isInDB);
      }
    }
  );
});

app.get("/getFavByPostId/:id", async (req, res) => {
  try {
    const favs = await db.getFavByPostId(req.params.id);
    res.header("Content-Type", "application/json");
    return res.send(JSON.stringify(favs, null, 4));
  } catch (err) {
    console.log("ERROR: ", err);
    return res.status(400).send(err);
  }
});

// will need to add more routes probably
app.post("/addFav", (req, res) => {
  const input = req.body;
  db.getFavByUserIdAndPostId(input.user_id, input.post_id).then(
    async (isInDB) => {
      // console.log(72, isInDB);
      if (isInDB) {
        res.send("Favourite exists already");
      } else {
        const newFav = {
          user_id: input.user_id,
          post_id: input.post_id,
        };
        // console.log(80, newFav);
        await db.addFavs(newFav);
        res.send(newFav);
      }
    }
  );
});

app.post("/removeFav", (req, res) => {
  const input = req.body;
  db.getFavByUserIdAndPostId(input.user_id, input.post_id).then(
    async (isIDInDB) => {
      if (isIDInDB) {
        await db.deleteFav(input.user_id, input.post_id);
        res.status(200).send("Deleted favourite successful");
      } else {
        res.status(500).send("Attempting to delete non-existent favourite id");
      }
    }
  );
});

module.exports = app;
