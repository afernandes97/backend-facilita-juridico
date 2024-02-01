const customerLocationModule = require("../../../models/customers/customerLocation/customerLocationModule");

/**
 * @name createCustomerLocation
 * @description Faz a chamada da função createCustomerLocation no model para persistencia no banco
 * @param client_id pega o id do cliente enviado via route params
 * @param req object request
 * @param res object response
 */
const createCustomerLocation = async (client_id, req) => {
    console.log(client_id);
  try {
    const result = await customerLocationModule.createCustomerLocation(Number(client_id), req.body); // send user_id and req body to user module
    return result; // return the created user as JSON
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
    createCustomerLocation,
};
