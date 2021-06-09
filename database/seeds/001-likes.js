const faker = require("faker");
const uuid = require("uuid");

const getRandomIndex = (n) => {
  return Math.floor(Math.random() * n); // between 0 to n-1
}

const generateRandomLikes = (cb) => {
  const fakeLikes = [];
  const NUM_LIKES = 35;
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
  const post_ids = [
    '12ecd697-45d1-46e7-9bd4-4e7e083391fe',
    '6ccc7e5c-561b-4d5c-8639-e3c12841ffc1',
    '91ffeda8-3829-4c4d-97dc-f89c1198c24a',
    'a06ccd1b-8fd4-4a39-86b7-229f0ea4ab44',
    'dc9facc6-da6d-4204-b2f5-1e05703ceaeb',
    'e09ba141-e521-4de0-8659-834620ae8ed1',
    'eb88dce3-ce4e-4225-b3f7-7f1f1c526a36'
    ];
  for (let i = 0; i < NUM_LIKES; ++i) {
    const like = {
      id: uuid.v4(),
      user_id: user_ids[getRandomIndex(10)],
      post_id: post_ids[getRandomIndex(7)]
    }
    fakeLikes.push(like);
  }
  return cb(fakeLikes);
};

exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex("likes")
  //   // .del()
  //   .then(function () {
  //     // Inserts seed entries
  //     return generateRandomLikes((fakeLikes) =>
  //       knex("likes").insert(fakeLikes)
  //     );
  //   });
};
