exports.up = function (knex) {
  return knex.schema.table("users", function (table) {
    table.string("current_dog").defaultTo("No");
  });
};

exports.down = function (knex) {
  return knex.schema.table("users", function (table) {
    table.dropColumn("current_dog");
  });
};
