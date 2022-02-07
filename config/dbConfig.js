/// <reference path="../typings/index.d.ts"/>

const knex = require("knex");
const knexConfig = require("../knexfile");

const environment = process.env.DB_ENV || "development";

module.exports = knex.default(knexConfig[environment]);
