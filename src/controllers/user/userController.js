const userModule = require("../../models/user/userModule");

/**
 * @name createUser
 * @description Faz a chamada da função createUser no model para persistencia no banco
 * @param req object request
 * @param res object response
 */
const createUser = async (req, res) => {
    console.log(req.body);
  try {
    await userModule.createUser(req.body); // send req body to user module
    return res.status(201).json({message: "Usuário adicionado com sucesso"}); // return the created user as JSON
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createUser,
};
