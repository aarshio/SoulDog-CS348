exports.up = function (knex) {
  return knex.schema.createTable("posts", function (table) {
    table.uuid("id").notNullable().primary();
    table.uuid("user_id").notNullable();
    table.foreign("user_id").references("users.id");
    table.uuid("pet_id").notNullable();
    table.foreign("pet_id").references("pets.id").onDelete('CASCADE');
    table.string("title");
    table.text("content");
    table.string("name");
    table.integer("age");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("posts");
};
