const faker = require("faker");
const uuid = require("uuid");

const getRandomIndex = (n) => {
  return Math.floor(Math.random() * n); // between 0 to n-1
}

const generateRandomPets = (cb) => {
  const fakePets = [];
  const NUM_PETS = 7;
  const scale = ['Low', 'Medium', 'High'];
  for (let i = 0; i < NUM_PETS; ++i) {
    const pet = {
      id: uuid.v4(),
      maintenance: scale[getRandomIndex(3)],
      aggression: scale[getRandomIndex(3)],
      energy: scale[getRandomIndex(3)],
      breed: faker.animal.dog(),
    }
    fakePets.push(pet);
  }
  return cb(fakePets);
};

exports.seed = function(knex) {
  // return knex('pets')
  //   //.del()   // Deletes ALL existing entries

  //   .then(function () {
  //     // Inserts seed entries
  //     return generateRandomPets((fakePets) =>
  //       knex("pets").insert(fakePets)
  //     );
  //   });
};
