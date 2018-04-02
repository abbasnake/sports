
const mongoose = require("mongoose"); // using mongoose for mongoDB

mongoose.connect("mongodb://registry:registry@ds231529.mlab.com:31529/registry"); // connecting to mLab database

const registrySchema = new mongoose.Schema({
  date: {type: Date, required: [true, 'Date must be added!']},
  score: {
    A: {type: Number, default: 0},
    R: {type: Number, default: 0}
  },
  comments: {
    A: {type: String, default: "-"},
    R: {type: String, default: "-"}
  },
  created: {type: Date, default: Date.now}
});

const Registry = mongoose.model("Registry", registrySchema);

module.exports = Registry;