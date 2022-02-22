const mongoose = require("mongoose");

const constantSchema = new mongoose.Schema({
  constDetail: {
    type: String,
    required: true,
    unique: true,
  },
  data: {
    // type: Array,
    type: JSON,
    required: true,
  },
});

const Constant = mongoose.model("Constant", constantSchema);

module.exports = Constant;
