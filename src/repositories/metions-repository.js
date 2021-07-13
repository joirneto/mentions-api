const mongoose = require('mongoose');
const Metions = mongoose.model('Metions');

exports.listMetions = async () => {
  const res = await Metions.find({}, 'friend metion -_id');
  return res;
};

exports.createMetions = async data => {
  const metion = new Metions(data);
  await metion.save();
};

//Update
exports.updateMetion = async (id, data) => {
  await Metions.findByIdAndUpdate(id,{
    $set: data
  });
}

//Delete
exports.deleteMetion = async id =>{
  await Metions.findByIdAndDelete(id);
}