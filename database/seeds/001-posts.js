const faker = require("faker");
const uuid = require("uuid");

const getRandomIndex = (n) => {
  return Math.floor(Math.random() * n); // between 0 to n-1
}

const generateRandomPosts = (cb) => {
  const fakePosts = [];
  const NUM_POSTS = 7;
  const user_ids = [
    '1419fcef-2749-4523-b9ef-eadbc4aff1f3',
    '7d8c1c57-2cd5-4e0b-bea8-7b4daa352187',
    '3947318b-6a18-49d6-9bfe-bcc28586358e',
    '26c4c582-d55e-4c57-934b-68b06eba71dd',
    '1d20d4c2-9bbb-4b49-80a6-adb52fb517bb',
    '42118300-8182-46aa-95c7-1aa2061ca758',
    '69526044-05f6-4ecd-b598-65e29cdd4c53',
    '6d8f6e74-7e96-4126-9a16-c4f5e704fc07',
    '7170c4f2-74f7-4534-807e-cb31fdef8ac8',
    '21ef2d5a-02c2-43ec-8e38-dcc6aaa9ec0d'  
    ];
  const pet_ids = [
    '240a0573-2847-45dd-bff5-7a1be4897b0c',
    '6c97fcd3-6af8-432e-a755-71b39f3cd85a',
    'a66c5371-7cb6-48da-a2bf-8cef23275ef6',
    'ca793749-dfcd-4cfb-babb-2e2ea2371d23',
    'cf480757-9a7a-4ab9-a742-033dd89f7de3',
    'd21065ba-a9bf-4c58-87fd-ec5bd75c9438',
    'dcd64261-eff0-4928-8488-24ead51f3fce'
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
  return knex("posts")
    // .del()
    .then(function () {
      // Inserts seed entries
      return generateRandomPosts((fakePosts) =>
        knex("posts").insert(fakePosts)
      );
    });
};
