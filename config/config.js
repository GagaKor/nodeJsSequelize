"use strict";

exports.port = "3000";
exports.secret = process.env.DB_USER;
// mariaDB;
exports.development = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "mariadb",
  dialectOptions: {
    timezone: process.env.db_timezone,
  },
  logging: false,
  query: { raw: true },
};
