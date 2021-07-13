const { validationResult } = require('express-validator');
const repository = require('../repositories/metions-repository');


//list
exports.listMetions = async (req, res) => {
  try {
    const data = await repository.listMetions();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as menções.'});
  }
};

//create
exports.createMetions = async (req, res) => {
  const {errors} = validationResult(req);

  if(errors.length >0) {
    return res.status(400).send({message: errors});
  }

  try {
    const metion = repository.createMetions ({
      friend: req.body.friend,
      metion: req.body.metion
    });   
    res.status(201).send({message: 'Menção cadastrada com sucesso.'})
  }catch(e){
    res.status(500).send({message: 'Falha ao cadastrar a menção.'})
  }
};

//Update
exports.updateMetion = async (req, res) => {
  const {errors} = validationResult(req);

  if(errors.length >0) {
    return res.status(400).send({message: errors});
  }
  
  try {
    await repository.updateMetion(req.params.id, req.body);
    res.status(200).send({
      message: 'Menção atualizada com sucesso!'
    })
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao atualizar a menção.'
    })
  }
}

//Delete
exports.deleteMetion = async (req, res) => {
  try {
    await repository.deleteMetion(req.params.id);
    res.status(200).send({
      message: 'Menção removida com sucesso!'
    })
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao remover a menção!'
    })
  }
}