const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
  friend:{
    type: String,
    required: true,
    trim:true
  },
  metion:{
    type: String,
    required: true
  }
});

module.exposts = mongoose.model('Metions', schema);