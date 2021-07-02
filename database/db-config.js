const knex = require("knex");
const config = require("../knexfile.js");

const db = knex(config.development); // our sqlite3 db

/* USERS */

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

const getUserByEmail = (email) => {
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

/* PETS */

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
    .into("pets");
};

const getPetsByBreed = (breed) => {
  // SELECT * FROM pets WHERE breed = params.breed
  return db("pets")
    .select()
    .where({ breed: breed })
    .then((pet) => pet[0]);
};

const getPetsByFeature = (aggression, energy, maintenance) => {
  // SELECT * FROM pets WHERE aggression = aggression.breed and energy = energy.breed and maintenance = maintenance.breed
  return db("pets")
    .select()
    .where({ aggression: aggression, energy: energy, maintenance: maintenance, })
    .then((pet) => pet[0]);
};

/* FAVOURITES */

const getAllFavs = () => {
  // SELECT * FROM favourites 
  return db("favourites");
};

const getFavById = (id) => {
  // SELECT * FROM favourites WHERE id = params.id
  return db("favourites")
    .select()
    .where({ id: id })
    .then((fav) => fav[0]);
};

const getFavByUserId = (uid) => {
  // SELECT * FROM favourites WHERE user_id = params.uid
  return db("favourites")
    .select()
    .where({ user_id: uid })
    .then((fav) => fav[0]);
};

const getFavByPostId = (pid) => {
  // SELECT * FROM favourites WHERE post_id = params.pid
  return db("favourites")
    .select()
    .where({ post_id: pid })
    .then((fav) => fav[0]);
};

const addFavs = (fav) => {
  return db
    .insert(
      [{ user_id: fav.user_id, post_id: fav.post_id }],
      ["id"]
    )
    .into("favourites");
};

/* LIKES */

const getAllLikes = () => {
  // SELECT * FROM likes 
  return db("likes");
};

const getLikeById = (id) => {
  // SELECT * FROM likes WHERE id = params.id
  return db("likes")
    .select()
    .where({ id: id })
    .then((like) => like[0]);
};

const getLikeByUserId = (uid) => {
  // SELECT * FROM likes WHERE user_id = params.uid
  return db("likes")
    .select()
    .where({ user_id: uid })
    .then((like) => like[0]);
};

const getLikeByPostId = (pid) => {
  // SELECT * FROM likes WHERE post_id = params.pid
  return db("likes")
    .select()
    .where({ post_id: pid })
    .then((like) => like[0]);
};

const addLikes = (like) => {
  return db
    .insert(
      [{ user_id: like.user_id, post_id: like.post_id }],
      ["id"]
    )
    .into("likes");
};

/* COMMENTS */

const getAllComments = () => {
  // SELECT * FROM comments 
  return db("comments");
};

const getCommentsById = (id) => {
  // SELECT * FROM comments WHERE id = params.id
  return db("comments")
    .select()
    .where({ id: id })
    .then((comment) => comment[0]);
};

const getCommentsByUserId = (uid) => {
  // SELECT * FROM comments WHERE user_id = params.uid
  return db("comments")
    .select()
    .where({ user_id: uid })
    .then((comment) => comment[0]);
};

const getCommentsByPostId = (pid) => {
  // SELECT * FROM comments WHERE post_id = params.pid
  return db("comments")
    .select()
    .where({ post_id: pid })
    .then((comment) => comment[0]);
};

const addComments = (comment) => {
  return db
    .insert(
      [{ user_id: comment.user_id, post_id: comment.post_id, text: comment.text }],
      ["id"]
    )
    .into("comments");
};

/* POSTS */

const getAllPosts = () => {
  // SELECT * FROM posts 
  return db("posts");
};

const getPostById = (id) => {
  // SELECT * FROM posts WHERE id = params.id
  return db("posts")
    .select()
    .where({ id: id })
    .then((post) => post[0]);
};

const getPostsByUserId = (uid) => {
  // SELECT * FROM posts WHERE user_id = params.uid
  return db("posts")
    .select()
    .where({ user_id: uid })
    .then((post) => post[0]);
};

const getPostByPetId = (pid) => {
  // SELECT * FROM posts WHERE pet_id = params.pid
  return db("posts")
    .select()
    .where({ pet_id: pid })
    .then((post) => post[0]);
};

const addPosts = (post) => {
  return db
    .insert(
      [{ user_id: post.user_id,
         pet_id: post.pet_id,
         title: post.title,
         content: post.content, 
         name: post.name,
         age: post.age,
      }],
      ["id"]
    )
    .into("posts");
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
  getPetsByFeature,

  getAllFavs,
  getFavById,
  getFavByUserId,
  getFavByPostId,
  addFavs,

  getAllLikes,
  getLikeById,
  getLikeByUserId,
  getLikeByPostId,
  addLikes,

  getAllComments,
  getCommentsById,
  getCommentsByUserId,
  getCommentsByPostId,
  addComments,

  getAllPosts,
  getPostById,
  getPostsByUserId,
  getPostByPetId,
  addPosts,

};
