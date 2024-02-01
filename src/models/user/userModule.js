const pool = require('../config/database');

/**
 * @name createUser
 * @description Cria novo usuario no banco de dados
 * @param task object task reviced from tasks controller
 */
const createUser = async (user) => {
    console.log(user);
    const { name } = user;
    const { role } = user;
    const { email } = user;
    const { password } = user;
    const { phone } = user;

    //UTC Date
    const dateUTC = new Date(Date.now());
  
    //query to persist on database
    const queryBD =
      'INSERT INTO "USER" (create_time,name,role,email,password,phone) VALUES ($1, $2, $3, $4, $5, $6)';
  
    try {
      // Execute query and pass params
      const result = await pool.query(queryBD, [dateUTC, name, role, email,password, phone]);

      return result;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error; // Rethrow the error for proper error handling in the controller
    }
  };

  module.exports = {
    createUser
  };