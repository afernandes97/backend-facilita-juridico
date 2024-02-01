const express = require('express');
const cors = require('cors'); // módulo cors para habilitar o suporte a Cross-Origin Resource Sharing (CORS)

/**
 * @name app.js
 * @description responsável por 
 */
const app = express();

const routes = require('./routes/routes'); // Importa as rotas do diretório ./routes

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors()); // middleware CORS para permitir solicitações de origens diferentes
app.use(routes);

module.exports = app;