const express = require("express");
const app = express();
const _ = require("lodash");
const dotenv = require("dotenv");
var morgan = require("morgan");

dotenv.config();
const PORT = process.env.PORT || 5000;

// Our modules
const middleware = require("./middleware/session");
const userRoutes = require("./routes/user");
const petRoutes = require("./routes/pet");
const favRoutes = require("./routes/favs");
const likeRoutes = require("./routes/likes");
const commentRoutes = require("./routes/comment");
const postRoutes = require("./routes/posts");

// Middleware
app.use(middleware);
app.use(morgan("combined"));

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
app.use("/api/pet", petRoutes);
app.use("/api/fav", favRoutes);
app.use("/api/like", likeRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/post", postRoutes);

// Run server
app.listen(PORT, () => {
  console.log(`SoulDog listening at http://localhost:${PORT}`);
});
