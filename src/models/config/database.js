const { Pool } = require('pg');
require('dotenv').config(); 

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DB,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});
module.exports = {
  query: (text, params) => pool.query(text, params),
};