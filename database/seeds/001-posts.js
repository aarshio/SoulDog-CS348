exports.seed = function (knex) {
  // Deletes ALL existing entries
  return (
    knex("posts")
      // .del()
      .then(function () {
        // Inserts seed entries
        return knex("posts").insert([
          {
            id: 1,
            title: "Dog1",
            user_id: "00a5cec6-d0a4-4865-babb-390d232fb756",
          },
        ]);
      })
  );
};
