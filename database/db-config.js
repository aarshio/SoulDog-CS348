const knex = require("knex");
const config = require("../knexfile.js");

const db = knex(config.development); // our sqlite3 db

const allUsers = () => {
  return db("users");
};

const getUserById = (id) => {
  // SELECT * FROM users WHERE id = params.id
  return db("users")
    .select()
    .where({ id: id })
    .then((user) => user[0]);
};

const getUserByUsername = (username) => {
  // SELECT * FROM users WHERE username = params.username
  return db("users")
    .select()
    .where({ username: username })
    .then((user) => user[0]);
};

const getUserByEmail = (username) => {
  // SELECT * FROM users WHERE username = params.username
  return db("users")
    .select()
    .where({ email: email })
    .then((user) => user[0]);
};

const addUser = (user) => {
  return db
    .insert(
      [{ email: user.email, username: user.username, password: user.password }],
      ["id"]
    )
    .into("users");
};

module.exports = {
  allUsers,
  addUser,
  getUserById,
  getUserByUsername,
  getUserByEmail,
};
