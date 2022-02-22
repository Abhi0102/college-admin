const mongoose = require("mongoose");

const formFieldSchema = new mongoose.Schema({
  fieldDetail: {
    type: String,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
});

const FormField = mongoose.model("FormFields", formFieldSchema);

module.exports = FormField;
