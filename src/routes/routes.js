const express = require('express');
const router = express.Router();
const userController = require('../controllers/user/userController');
const customerController = require('../controllers/customers/customersController');
const customerLocationController = require('../controllers/customers/customerLocation/customerLocationController');



router.post('/user/create-user', userController.createUser); //call createTask function from tasks controller
router.post('/customers/:user_id/create-costumer', async (req,res) => {
  try{
    const { user_id } = req.params;
    await customerController.createCustomer(user_id, req);
    return res.status(201).json({message: "Cliente adicionado ao usuário com sucesso"}); // return the created user as JSON
  }catch(error){
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}); //call createTask function from tasks controller
router.post('/customers/:client_id/add-costumer-location', async (req,res) => {
  try{
    const { client_id } = req.params;
    await customerLocationController.createCustomerLocation(client_id, req);
    return res.status(201).json({message: "Localização adicionado ao cliente com sucesso"}); // return the created user as JSON
  }catch(error){
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}); //call createTask function from tasks controller

module.exports = router;