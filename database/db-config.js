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

const getAllPets = () => {
  // SELECT * FROM pets 
  return db("pets");
};

const getPetById = (id) => {
  // SELECT * FROM pets WHERE id = params.id
  return db("pets")
    .select()
    .where({ id: id })
    .then((pet) => pet[0]);
};

const addPets = (pet) => {
  return db
    .insert(
      [{ breed: pet.breed, maintenance: pet.maintenance, aggression: pet.aggression, energy: pet.energy }],
      ["id"]
    )
    .into("users");
};

const getPetsByBreed = (breed) => {
  // SELECT * FROM users WHERE breed = params.breed
  return db("pets")
    .select()
    .where({ breed: breed })
    .then((pet) => pet[0]);
};

module.exports = {
  allUsers,
  addUser,
  getUserById,
  getUserByUsername,
  getUserByEmail,

  getAllPets,
  getPetById,
  addPets,
  getPetsByBreed,
};
