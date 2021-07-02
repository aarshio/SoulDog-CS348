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

//post requests
app.post("/addPet", (req, res) => {
  const input = req.body;
  db.getPetsByBreed(input.breed).then( async(isBreedInDB) => {
    if (isBreedInDB) {
      res.send("Pet breed exists");
    } else {
      const newPet = {
        breed: input.breed,
        maintenance: input.maintenance,
        aggression: input.aggression,
        energy: input.energy,
      };
      console.log(newPet);

      await db.addPets(newPet);
      res.send(newPet);
    }
  });
});

app.post("/removePet", (req, res) => {
  const input = req.body;
  db.getPetById(input.id).then( async(isIDInDB) => {
    if (isIDInDB) {
      await db.deletePet(input.id);
      res.status(200).send("Deleted pet successful");
    } else {
      res.status(500).send("Attempting to delete non-existent pet id");
    }
  });
});

module.exports = app;
