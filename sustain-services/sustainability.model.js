const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Sustainability = new Schema({
  firstname:{
    type: String
  },
  lastname: {
    type: String
  },
  postcode: {
    type: String
  },
  emailid: {
    type: String
  }
});

module.exports = mongoose.model('Sustainability', Sustainability);
