const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  seq: {
    type: Number,
    required: true,
  },
});

const Counter = mongoose.model("counter", counterSchema);

module.exports = Counter;
