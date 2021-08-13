const faker = require("faker");
const uuid = require("uuid");

const getRandomIndex = (n) => {
  return Math.floor(Math.random() * n); // between 0 to n-1
}

const generateRandomPosts = (cb) => {
  const fakePosts = [];
  const NUM_POSTS = 7;
  const user_ids = [
    'e73df93c-5e54-4dc6-96bf-80f2cde1ecc1',
    'c8717f1d-35a2-4369-bdb5-e17c2e2dceda',
    'b1916a0b-340c-4e7e-83ad-7466d6d1a8c8',
    'a9885902-9640-428a-91cc-d79870f697ed',
    '7a3e36b2-2d71-4dd5-9a1c-3daee339fe93',
    '7a2a8de6-9da0-4cb1-933c-4ad4eda189f4',
    '75c0aada-1b04-485f-b419-a2f973dcbfcd',
    '4b62ae74-1857-40b0-a945-34d6e2324aed',
    '36078bcf-d947-4ebf-9a27-1ed0bce3af7c',
    '2444c60c-912d-414e-b785-b4f08e4fbfed'
	];
  const pet_ids = [
    'abd8491b-f85c-48a1-ab6f-50706e6917e9',
    'a7bce8b7-512d-47d5-9ba1-4c546ce28501',
    '99b80972-d473-452e-a6ac-d52966a327bb',
    '71490d31-76cc-431c-b7ef-97f21ca39cea',
    '704882f6-36b4-427a-b794-eee9e3780cd3',
    '668167b9-bb16-4c3d-9877-139b0b01329c',
    '5e1a52e2-b456-4552-810f-085061c46a68'
  ]
  for (let i = 0; i < NUM_POSTS; ++i) {
    const post = {
      id: uuid.v4(),
      user_id: user_ids[getRandomIndex(10)],
      pet_id: pet_ids[getRandomIndex(7)],
      title: faker.lorem.words(),
      content: faker.lorem.sentence(),
      name: faker.name.firstName(),
      age: faker.datatype.number({min:1, max:15})
    }
    fakePosts.push(post);
  }
  return cb(fakePosts);
};

exports.seed = function (knex) {
  // Deletes ALL existing entries
//   return knex("posts")
//     .del()
//     .then(function () {
//       // Inserts seed entries
//       return generateRandomPosts((fakePosts) =>
//         knex("posts").insert(fakePosts)
//       );
//     });
// };
