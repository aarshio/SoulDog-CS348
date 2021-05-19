exports.up = function (knex) {
  return knex.schema.createTableIfNotExists("users", function (table) {
    table.increments();
    table.string("username");
    table.string("password");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
