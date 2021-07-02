const express = require("express");
const app = express.Router();
const db = require("../database/db-config");

app.get("/getAllPets", async (req, res) => {
    try {
      const pets = await db.getAllPets();
      res.header("Content-Type", "application/json");
      return res.send(JSON.stringify(pets, null, 4));
    } catch (err) {
      console.log("ERROR: ", err);
      return res.status(400).send(err);
    }
});

app.get("/getPetByBreed/:breed", async (req, res) => {
  try {
    const pets = await db.getPetsByBreed(req.params.breed);
    res.header("Content-Type", "application/json");
    return res.send(JSON.stringify(pets, null, 4));
  } catch (err) {
    console.log("ERROR: ", err);
    return res.status(400).send(err);
  }
});

app.get("/getPetByID/:id", async (req, res) => {
  try {
    const pets = await db.getPetById(req.params.id);
    res.header("Content-Type", "application/json");
    return res.send(JSON.stringify(pets, null, 4));
  } catch (err) {
    console.log("ERROR: ", err);
    return res.status(400).send(err);
  }
});

app.get("/getPetsByFeature/:aggression/:energy/:maintenance", async (req, res) => {
  try {
    const pets = await db.getPetsByFeature(req.params.aggression, req.params.energy, req.params.maintenance);
    res.header("Content-Type", "application/json");
    return res.send(JSON.stringify(pets, null, 4));
  } catch (err) {
    console.log("ERROR: ", err);
    return res.status(400).send(err);
  }
});

// will need to add more routes probably

module.exports = app;
