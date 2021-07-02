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
    res.header("Content-Type", "application/json");
    return res.send(JSON.stringify(favs, null, 4));
  } catch (err) {
    console.log("ERROR: ", err);
    return res.status(400).send(err);
  }
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

module.exports = app;
