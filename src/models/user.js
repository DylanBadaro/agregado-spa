const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  pass:{
    type: String,
    required: true
  },
  rePass: {
    type: String,
    required: true
  },
  dni: {
    type: Number,
    required: false
  },
  tel: {
    type: Number,
    required: false
  }
});
//exporto el modelo de datos de   usuario
module.exports = mongoose.model('User', userSchema);