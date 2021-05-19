exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "username1", password: "password1" },
        { id: 2, username: "username2", password: "password2" },
        { id: 3, username: "username3", password: "password3" },
      ]);
    });
};
