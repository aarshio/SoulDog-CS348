exports.up = function (knex) {
    return knex.schema.createTable("favourites", function (table) {
      table.uuid("id").notNullable().primary();
      table.uuid("user_id").notNullable();
      table.foreign("user_id").references("users.id");
      table.uuid("post_id").notNullable();
      table.foreign("post_id").references("posts.id").onDelete('CASCADE');
      table.timestamp("created_at").defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("favourites");
  };
  