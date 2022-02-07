const { Knex } = require("knex");

exports.up = function ( /** @type {Knex} */knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments()
    tbl.string("name")
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
