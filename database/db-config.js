const knex = require("knex");
const config = require("../knexfile.js");

const db = knex(config.development); // our sqlite3 db

const allUsers = () => {
  return db("users");
};

const addUser = (user) => {
  return db("users")
    .insert(user)
    .then((ids) => ({ id: id[0] }));
};

module.exports = {
  allUsers,
  addUser,
};
