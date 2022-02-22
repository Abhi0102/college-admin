const mongoose = require("mongoose");

const optionsSchema = new mongoose.Schema({
  optionDetail: {
    type: String,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
});

const Options = mongoose.model("options", optionsSchema);

module.exports = Options;
