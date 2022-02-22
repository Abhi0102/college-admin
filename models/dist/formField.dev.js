"use strict";

var mongoose = require("mongoose");

var formFieldSchema = new mongoose.Schema({
  fieldDetail: {
    type: String,
    required: true
  },
  data: {
    type: Array,
    required: true
  }
});
var FormField = mongoose.model("FormFields", formFieldSchema);
module.exports = FormField;