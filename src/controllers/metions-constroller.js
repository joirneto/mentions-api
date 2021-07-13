const mongoose = require('mongoose');
const Metions = mongoose.model('Metions');

//list
exports.listMetions = async (req, res) => {
  try {
    const data = await Metions.find({});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as menções.'});
  }
};

//create
exports.createMetions = async (req, res) => {
  try {
    const metion = new Metions ({
      friend: req.body.friend,
      metion: req.body.metion
    });
    console.log(metion);

    await metion.save();
    
    res.status(201).send({message: 'Menção cadastrada com sucesso.'})
  }catch(e){
    res.status(500).send({message: 'Falha ao cadastrar a menção.'})
  }
};