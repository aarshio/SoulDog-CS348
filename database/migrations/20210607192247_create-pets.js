exports.up = function (knex) {
  return knex.schema.createTable("pets", function (table) {
    table.uuid("id").notNullable().primary();
    table.string("maintenance");
    table.string("breed");
    table.string("aggression");
    table.string("energy");
    table.timestamp("created_at").defaultTo(knex.fn.now());

    table.unique(["breed"]);

    table.index(["maintenance", "aggression", "energy"], "PetAttributeIndex");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("pets");
};
