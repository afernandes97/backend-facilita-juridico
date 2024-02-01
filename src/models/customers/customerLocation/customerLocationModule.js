const pool = require('../../config/database');

/**
 * @name createCustomerLocation
 * @description Cria uma localização atrelada a um cliente
 * @param client_id id do cliente
 */
const createCustomerLocation = async (client_id,client) => {
    const { name } = client;
    const { address } = client;
    const { position_x } = client;
    const { position_y } = client;


    //UTC Date
    const dateUTC = new Date(Date.now());
  
    //query to persist on database
    const queryBD =
      'INSERT INTO "LOCATION" (client_id,create_time,name,address,position_x,position_y) VALUES ($1, $2, $3, $4, $5, $6)';
  
    try {
      // Execute query and pass params
      const result = await pool.query(queryBD, [client_id, dateUTC, name, address, position_x, position_y]);
      return result;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error; // Rethrow the error for proper error handling in the controller
    }
  };

  module.exports = {
    createCustomerLocation
  };