require('dotenv').config();
/**
 * @name server.js
 * @description responsável por toda a configuração e execução da aplicação
 */
const app = require('./app');
const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log('Aplicação executando na porta ', port);
});