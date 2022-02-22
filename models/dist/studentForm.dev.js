"use strict";

var mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
  appNo: {
    type: Number,
    required: true,
    unique: true
  },
  admDate: {
    type: Date,
    required: true
  },
  studentName: {
    type: String,
    required: true
  },
  studentClass: {
    type: String,
    required: true
  },
  fatherName: {
    type: String,
    required: true
  },
  motherName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subCategory: {
    type: String
  },
  vatsalyaYojana: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  emailId: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  permanentAddress: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  gaurdianName: {
    type: String,
    required: true
  },
  gaurdianRelationship: {
    type: String,
    required: true
  },
  gaurdianMobileNumber: {
    type: String,
    required: true
  },
  gaurdianAddress: {
    type: String,
    required: true
  },
  annualIncome: {
    type: String,
    required: true
  },
  religion: {
    type: String,
    required: true
  },
  lastAttended: {
    type: String,
    required: true
  },
  instituteRegion: {
    type: String,
    required: true
  },
  durationOfResidance: {
    type: String,
    required: true
  },
  residanceRegion: {
    type: String,
    required: true
  },
  documentCompleted: {
    type: String,
    required: true
  },
  examinationPassed: {
    type: String,
    required: true
  },
  residanceOfUK: {
    type: String,
    required: true
  },
  aadhaarNumber: {
    type: String,
    required: true
  },
  qualification: {
    type: Array,
    required: true // required: true,

  },
  subject1: {
    type: String,
    required: true
  },
  subject2: {
    type: String
  },
  subject3: {
    type: String
  }
}, {
  timestamps: true
});
var Student = mongoose.model("Student", studentSchema);
module.exports = Student;