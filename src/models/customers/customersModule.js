const pool = require('../config/database');

/**
 * @name createUser
 * @description Cria novo usuario no banco de dados
 * @param user_id id do usuario autenticado
 */
const createCustomer = async (user_id,customer) => {
    const { name } = customer;
    const { email } = customer;
    const { phone } = customer;

    //UTC Date
    const dateUTC = new Date(Date.now());
  
    //query to persist on database
    const queryBD =
      'INSERT INTO "CLIENT" (user_id,create_time,name,email,phone) VALUES ($1, $2, $3, $4, $5)';
  
    try {
      // Execute query and pass params
      const result = await pool.query(queryBD, [user_id, dateUTC, name, email, phone]);
      console.log(result);
      return result;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error; // Rethrow the error for proper error handling in the controller
    }
  };

  module.exports = {
    createCustomer
  };