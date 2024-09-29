const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PG_PORT,
  database: process.env.DATABASE
});

module.exports = {
  query: (text, params) => {
    return pool.query(text, params)
  }
};