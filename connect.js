const { Pool } = require("pg");

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '123456789',
  port: '5432',
  database: 'db_react_node',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

module.exports = pool;