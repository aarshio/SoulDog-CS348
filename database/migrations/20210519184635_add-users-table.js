exports.up = function (knex) {
  return knex.schema.createTableIfNotExists("users", function (table) {
    table.increments();
    table.string("username");
    table.string("password");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("nothing");
};
