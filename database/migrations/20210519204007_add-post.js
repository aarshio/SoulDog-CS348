
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists("posts", function (table) {
        table.increments();
        table.string("title");
        table.timestamp("created_at").defaultTo(knex.fn.now());
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("posts");
};
