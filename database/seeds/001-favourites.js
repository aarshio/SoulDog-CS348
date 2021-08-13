const faker = require("faker");
const uuid = require("uuid");

const getRandomIndex = (n) => {
  return Math.floor(Math.random() * n); // between 0 to n-1
};

const generateRandomFavourites = (cb) => {
  const fakeFavourites = [];
  const NUM_FAVOURITES = 20;
  const user_ids = [
    "e73df93c-5e54-4dc6-96bf-80f2cde1ecc1",
    "c8717f1d-35a2-4369-bdb5-e17c2e2dceda",
    "b1916a0b-340c-4e7e-83ad-7466d6d1a8c8",
    "a9885902-9640-428a-91cc-d79870f697ed",
    "7a3e36b2-2d71-4dd5-9a1c-3daee339fe93",
    "7a2a8de6-9da0-4cb1-933c-4ad4eda189f4",
    "75c0aada-1b04-485f-b419-a2f973dcbfcd",
    "4b62ae74-1857-40b0-a945-34d6e2324aed",
    "36078bcf-d947-4ebf-9a27-1ed0bce3af7c",
    "2444c60c-912d-414e-b785-b4f08e4fbfed",
  ];
  const post_ids = [
    '1a3830c1-cddc-4583-86f8-1eee9aa8d522',
    '3e0106a5-45ed-4d4d-bb9d-4b18cc383c3e',
    '7670bd0a-046e-4092-8b99-f99af187fb42',
    '8ca150ed-f6d4-4f87-a64c-0bd2345e68fb',
    'e7d9536c-b79c-4c52-bf9a-c8227a54b5dc',
    'eeff15ef-cb05-4c86-a7fb-6edfc5a92510',
    'f74ac8ec-593b-4caa-96dc-b883c7a09eb8',  
  ];
  for (let i = 0; i < NUM_FAVOURITES; ++i) {
    const favourite = {
      id: uuid.v4(),
      user_id: user_ids[getRandomIndex(10)],
      post_id: post_ids[getRandomIndex(7)],
    };
    fakeFavourites.push(favourite);
  }
  return cb(fakeFavourites);
};

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("favourites")
    .del()
    .then(function () {
      // Inserts seed entries
      return generateRandomFavourites((fakeFavourites) =>
        knex("favourites").insert(fakeFavourites)
      );
    });
};
