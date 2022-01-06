const mongoose = require("mongoose");

const studentQualificationSchema = new mongoose.Schema(
  {
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    qualification: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const StudentQualification = mongoose.model(
  "StudentQualification",
  studentQualificationSchema
);

module.exports = StudentQualification;
