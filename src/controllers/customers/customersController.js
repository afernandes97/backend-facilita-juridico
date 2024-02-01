const customerModule = require("../../models/customers/customersModule");

/**
 * @name createCustomer
 * @description Faz a chamada da função createCustomer no model para persistencia no banco
 * @param user_id pega o id do usuario enviado via route params
 * @param req object request
 * @param res object response
 */
const createCustomer = async (user_id, req) => {
  try {
    const result = await customerModule.createCustomer(user_id, req.body); // send user_id and req body to user module
    return result; // return the created user as JSON
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
    createCustomer,
};
