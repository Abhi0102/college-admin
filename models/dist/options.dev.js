"use strict";

var mongoose = require("mongoose");

var optionsSchema = new mongoose.Schema({
  optionDetail: {
    type: String,
    required: true
  },
  data: {
    type: Array,
    required: true
  }
});
var Options = mongoose.model("options", optionsSchema);
module.exports = Options;