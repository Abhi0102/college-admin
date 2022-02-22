"use strict";

var mongoose = require("mongoose");

var constantSchema = new mongoose.Schema({
  constDetail: {
    type: String,
    required: true,
    unique: true
  },
  data: {
    // type: Array,
    type: JSON,
    required: true
  }
});
var Constant = mongoose.model("Constant", constantSchema);
module.exports = Constant;