const Counter = require("../models/appGenerator");

module.exports.getNextSequence = async function (name) {
  const res = await Counter.findOneAndUpdate(
    { _id: name },
    { $inc: { seq: 1 } }
  );
  console.log(res.seq);
  return res.seq;
};
