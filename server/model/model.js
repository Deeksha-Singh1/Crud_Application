const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name:{
    type: String,
    require:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  gender: String,
  status:String
})

const UserDb = mongoose.model('userDb',schema);

module.exports = UserDb;