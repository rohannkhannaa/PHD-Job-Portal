const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: String, required: true },
  contactEmail: { type: String, required: true },
  college: {type:String,requires:true},
  link:{type:String}
});

module.exports = mongoose.model('Job', jobSchema);
