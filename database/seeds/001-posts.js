
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, title: 'Dog1'},
        {id: 2, title: 'Dog2'},
        {id: 3, title: 'Dog3'}
      ]);
    });
};
