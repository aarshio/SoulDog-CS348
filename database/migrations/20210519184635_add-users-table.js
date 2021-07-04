const e = require("express");

exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.uuid("id").notNullable().primary();
    table.string("username", 50).notNullable();
    table.string("password", 50).notNullable();
    table.string("email", 50).notNullable();
    table.string("first_name", 50);
    table.string("last_name", 50);
    table.string("profile_pic");
    table.integer("age").unsigned();
    table.text("bio");
    table.string("energy");
    table.string("strength");
    table.string("free_time");
    table.string("backyard");
    table.timestamp("created_at").defaultTo(knex.fn.now());

    table.unique(["email", "username"]);

    table.index(["username", "password"], "UserIndex");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
