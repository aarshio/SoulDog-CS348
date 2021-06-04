const faker = require("faker");
const bcrypt = require("bcrypt");
const uuid = require("uuid");

const myPlaintextPassword = "password";

const getRandomUser = (hashed_password) => ({
  id: uuid.v4(),
  email: faker.internet.email(),
  username: faker.internet.userName(),
  password: hashed_password,
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  profile_pic: faker.internet.avatar(),
  age: Math.max(16, Math.round(Math.random() * 100)),
});

const generateRandomUsers = async (cb) => {
  const fakeUsers = [];
  const NUM_USERS = 100;
  for (let i = 0; i < NUM_USERS; ++i) {
    await bcrypt.hash(myPlaintextPassword, 1).then(function (hash) {
      const user = getRandomUser(hash);
      fakeUsers.push(user);
    });
  }
  return cb(fakeUsers);
};

exports.seed = function (knex) {
  return (
    knex("users")
      // Deletes ALL existing entries
      // .del()
      .then(function () {
        return generateRandomUsers((fakeUsers) =>
          knex("users").insert(fakeUsers)
        );
      })
  );
};
