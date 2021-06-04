const express = require("express");
const app = express();
const _ = require("lodash");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 5000;

// Our modules
const middleware = require("./middleware/session");
const userRoutes = require("./routes/user");

// Middleware
app.use(middleware);

const isLoggedIn = (req, res, next) => {
  if (req.user) next();
  else res.sendStatus(401);
};

// Routes
app.get(["/", "/api"], (req, res) => {
  res.send("<h1>Welcome to SoulDog API</h1>");
});

app.get("/api/auth", isLoggedIn, (req, res) => {
  res.send(_.omit(req.user, "password"));
});

app.use("/api/user", userRoutes);

// Run server
app.listen(PORT, () => {
  console.log(`SoulDog listening at http://localhost:${PORT}`);
});
