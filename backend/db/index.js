const { Pool } = require("pg");

const pool = new Pool({
  user: "greydonokeefe", // REPLACE WITH YOUR NAME
  password: "pgadmin",
  host: "localhost",
  port: 5432,
  database: "greydonokeefe" // REPLACE WITH YOUR NAME
});

module.exports = {
  query: (text, params) => {
    return pool.query(text, params)
  }
};