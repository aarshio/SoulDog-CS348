const express = require("express");
const app = express();
const port = 3000;
const db = require("./database/db-config");

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Soul Dogs </h1>");
});

app.get("/getAllUsers", async (req, res) => {
  try {
    const users = await db.allUsers();
    return res.status(200).json(users);
  } catch (err) {
    console.log("ERROR: ", err);
    return res.status(400).json(err);
  }
});

app.listen(port, () => {
  console.log(`Soul Dogs listening at http://localhost:${port}`);
});
