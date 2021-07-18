const mongoose = require('mongoose');
const mentions = mongoose.model('mentions');

exports.listmentions = async () => {
  const res = await mentions.find({}, 'friend mention -_id');
  return res;
};

exports.creatementions = async data => {
  const mention = new mentions(data);
  await mention.save();
};

//Update
exports.updatemention = async (id, data) => {
  await mentions.findByIdAndUpdate(id, {
    $set: data
  });
}

//Delete
exports.deletemention = async id => {
  await mentions.findByIdAndDelete(id);
}