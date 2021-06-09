const faker = require("faker");
const bcrypt = require("bcrypt");
const uuid = require("uuid");

const myPlaintextPassword = "password";

const scale_level = ['Low', 'Medium', 'High'];
const scale_size = ['Small', 'Medium', 'Large'];
const getRandomIndex = (n) => {
  return Math.floor(Math.random() * n); // between 0 to n-1
}

const getRandomUser = (hashed_password) => ({
  id: uuid.v4(),
  email: faker.internet.email(),
  username: faker.internet.userName(),
  password: hashed_password,
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  profile_pic: faker.internet.avatar(),
  age: Math.max(16, Math.round(Math.random() * 100)),
  bio: faker.lorem.paragraph(),
  energy: scale_level[getRandomIndex(3)],
  strength: scale_level[getRandomIndex(3)],
  free_time: scale_level[getRandomIndex(3)],
  backyard: scale_size[getRandomIndex(3)],
});

const generateRandomUsers = async (cb) => {
  const fakeUsers = [];
  const NUM_USERS = 10;
  for (let i = 0; i < NUM_USERS; ++i) {
    await bcrypt.hash(myPlaintextPassword, 1).then(function (hash) {
      const user = getRandomUser(hash);
      fakeUsers.push(user);
    });
  }
  return cb(fakeUsers);
};

exports.seed = function (knex) {
  // return (
  //   knex("users")
  //     // Deletes ALL existing entries
  //     // .del()
  //     .then(function () {
  //       return generateRandomUsers((fakeUsers) =>
  //         knex("users").insert(fakeUsers)
  //       );
  //     })
  // );
};
