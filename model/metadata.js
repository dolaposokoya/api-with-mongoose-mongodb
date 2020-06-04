var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var metadataSchema = new Schema({
  // gender: {
  //   type: Array,
  //   required: false,
  //   unique: false,
  // },
  bloodgroup: {
    type: Array,
    required: false,
    unique: false,
  },
  state: {
    type: Array,
    required: false,
    unique: false,
  },
});

module.exports = mongoose.model("metadata", metadataSchema);