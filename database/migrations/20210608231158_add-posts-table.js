exports.up = function (knex) {
  return knex.schema.createTable("posts", function (table) {
    table.uuid("id").notNullable().primary();
    table.string("title");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.uuid("user_id").notNullable();
    table.foreign("user_id").references("users.id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("posts");
};
