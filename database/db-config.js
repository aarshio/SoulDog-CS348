const knex = require("knex");
const config = require("../knexfile.js");
const uuid = require("uuid");
const faker = require("faker");

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

const scale_level = ["Low", "Medium", "High"];
const scale_size = ["Small", "Medium", "Large"];
const getRandomIndex = (n) => {
  return Math.floor(Math.random() * n); // between 0 to n-1
};

const addUser = async (user) => {
  const add = {
    id: uuid.v4(),
    first_name: user.first,
    last_name: user.last,
    profile_pic: faker.internet.avatar(),
    email: user.email,
    username: user.username,
    password: user.password,
    username: user.username,
    // energy: scale_level[getRandomIndex(3)],
    // strength: scale_level[getRandomIndex(3)],
    // free_time: scale_level[getRandomIndex(3)],
    // backyard: scale_size[getRandomIndex(3)],
  };
  await db.insert([add]).into("users");
  return add;
};

const updateUserBio = (id, bio) => {
  // UPDATE users SET bio = params.bio WHERE id = params.id
  return db("users").where({ id: id }).update({
    bio: bio,
  });
};

const updateUserFirstName = (id, first_name) => {
  // UPDATE users SET first_name = params.first_name WHERE id = params.id
  return db("users").where({ id: id }).update({
    first_name: first_name,
  });
};

const updateUserLastName = (id, last_name) => {
  // UPDATE users SET last_name = params.last_name WHERE id = params.id
  return db("users").where({ id: id }).update({
    last_name: last_name,
  });
};

const updateUserProfilePic = (id, profile_pic) => {
  // UPDATE users SET profile_pic = params.profile_pic WHERE id = params.id
  return db("users").where({ id: id }).update({
    profile_pic: profile_pic,
  });
};

const updateUserEnergy = (id, energy) => {
  // UPDATE users SET energy = params.energy WHERE id = params.id
  return db("users").where({ id: id }).update({
    energy: energy,
  });
};

const updateUserStength = (id, strength) => {
  // UPDATE users SET strength = params.strength WHERE id = params.id
  return db("users").where({ id: id }).update({
    strength: strength,
  });
};

const updateUserFreeTime = (id, free_time) => {
  // UPDATE users SET free_time = params.free_time WHERE id = params.id
  return db("users").where({ id: id }).update({
    free_time: free_time,
  });
};

const updateUserBackyard = (id, backyard) => {
  // UPDATE users SET backyard = params.backyard WHERE id = params.id
  return db("users").where({ id: id }).update({
    backyard: backyard,
  });
};

const deleteUser = (id) => {
  // delete from users where id = params.id
  return db("users").where({ id: id }).del();
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

const addPets = async (pet) => {
  const pet_id = uuid.v4();
  await db
    .insert([
      {
        id: pet_id,
        breed: pet.breed,
        maintenance: pet.maintenance,
        aggression: pet.aggression,
        energy: pet.energy,
      },
    ])
    .into("pets");
  return pet_id;
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
    .where({ aggression: aggression, energy: energy, maintenance: maintenance })
    .then((pet) => pet[0]);
};

const deletePet = (id) => {
  // delete from pets where id = params.id
  return db("pets").where({ id: id }).del();
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
    .then((fav) => fav);
};

const getFavByPostId = (pid) => {
  // SELECT * FROM favourites WHERE post_id = params.pid
  return db("favourites")
    .select()
    .where({ post_id: pid })
    .then((fav) => fav[0]);
};

const getFavByUserIdAndPostId = (uid, pid) => {
  // SELECT * FROM favourites WHERE post_id = params.pid and user_id = params.uid
  return db("favourites")
    .select()
    .where({ user_id: uid, post_id: pid })
    .then((fav) => fav[0]);
};

const addFavs = (fav) => {
  return db
    .insert([{ id: uuid.v4(), user_id: fav.user_id, post_id: fav.post_id }])
    .into("favourites");
};

const deleteFav = (user_id, post_id) => {
  // delete from favourites where id = params.id
  return db("favourites").where({ user_id: user_id, post_id: post_id }).del();
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
    .then((like) => like);
};

const getLikeByPostId = (pid) => {
  // SELECT * FROM likes WHERE post_id = params.pid
  return db("likes")
    .select()
    .where({ post_id: pid })
    .then((like) => like);
};

const getLikeByUserIdAndPostId = (uid, pid) => {
  // SELECT * FROM likes WHERE post_id = params.pid and user_id = params.uid
  return db("likes")
    .select()
    .where({ user_id: uid, post_id: pid })
    .then((like) => like[0]);
};

const addLikes = async (like) => {
  const like_id = uuid.v4();
  await db
    .insert([{ id: like_id, user_id: like.user_id, post_id: like.post_id }])
    .into("likes");
  return like_id;
};

const deleteLike = (id) => {
  // delete from likes where id = params.id
  return db("likes").where({ id: id }).del();
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
    .then((comment) => comment);
};

const getCommentsByUserIdAndPostId = (uid, pid) => {
  // SELECT * FROM comments WHERE post_id = params.pid and user_id = params.uid
  return db("comments")
    .select()
    .where({ user_id: uid, post_id: pid })
    .then((comment) => comment[0]);
};

const addComments = (comment) => {
  return db
    .insert(
      [
        {
          id: uuid.v4(),
          user_id: comment.user_id,
          post_id: comment.post_id,
          text: comment.text,
        },
      ],
      ["id"]
    )
    .into("comments");
};

const deleteComment = (id) => {
  // delete from comments where id = params.id
  return db("comments").where({ id: id }).del();
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
    .then((post) => post);
};

const getPostByPetId = (pid) => {
  // SELECT * FROM posts WHERE pet_id = params.pid
  return db("posts")
    .select()
    .where({ pet_id: pid })
    .then((post) => post[0]);
};

const getPostByPetIdAndUserId = (uid, pid) => {
  // SELECT * FROM posts WHERE pet_id = params.pid and user_id = params.uid
  return db("posts")
    .select()
    .where({ user_id: uid, pet_id: pid })
    .then((post) => post[0]);
};

const addPosts = (post) => {
  return db
    .insert(
      [
        {
          id: uuid.v4(),
          user_id: post.user_id,
          pet_id: post.pet_id,
          title: post.title,
          content: post.content,
          name: post.name,
          age: post.age,
        },
      ],
      ["id"]
    )
    .into("posts");
};

const updatePostTitle = (id, title) => {
  // UPDATE posts SET title = params.title WHERE id = params.id
  return db("posts").where({ id: id }).update({
    title: title,
  });
};

const updatePostContent = (id, content) => {
  // UPDATE posts SET content = params.content  WHERE id = params.id
  return db("posts").where({ id: id }).update({
    content: content,
  });
};

const deletePost = (id) => {
  // delete from posts where id = params.id
  return db("posts").where({ id: id }).del();
};

module.exports = {
  allUsers,
  addUser,
  getUserById,
  getUserByUsername,
  getUserByEmail,
  deleteUser,
  updateUserBio,
  updateUserProfilePic,
  updateUserFreeTime,
  updateUserStength,
  updateUserEnergy,
  updateUserLastName,
  updateUserFirstName,
  updateUserBackyard,

  getAllPets,
  getPetById,
  addPets,
  getPetsByBreed,
  getPetsByFeature,
  deletePet,

  getAllFavs,
  getFavById,
  getFavByUserId,
  getFavByPostId,
  getFavByUserIdAndPostId,
  addFavs,
  deleteFav,

  getAllLikes,
  getLikeById,
  getLikeByUserId,
  getLikeByPostId,
  getLikeByUserIdAndPostId,
  addLikes,
  deleteLike,

  getAllComments,
  getCommentsById,
  getCommentsByUserId,
  getCommentsByPostId,
  addComments,
  deleteComment,
  getCommentsByUserIdAndPostId,

  getAllPosts,
  getPostById,
  getPostsByUserId,
  getPostByPetId,
  getPostByPetIdAndUserId,
  addPosts,
  updatePostTitle,
  updatePostContent,
  deletePost,
};
