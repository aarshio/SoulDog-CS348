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
            user_id: "8d5a5d1f-a441-42cf-af6f-788bbb0db145",
          },
        ]);
      })
  );
};
