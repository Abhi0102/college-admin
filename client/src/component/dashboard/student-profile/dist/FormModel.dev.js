"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filledInitialValues = exports.initialValues = exports.model = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var model = {
  formId: "studentForm",
  formField: {
    appNo: {
      name: "appNo",
      label: "App No.",
      errorMessage: "Field is Required"
    },
    admDate: {
      name: "admDate",
      label: "Admission Date",
      errorMessage: "Field is Required"
    },
    studentName: {
      name: "studentName",
      label: "Student Name",
      errorMessage: "Field is Required"
    },
    studentClass: {
      name: "studentClass",
      label: "Student Class",
      errorMessage: "Field is Required"
    },
    gender: {
      name: "gender",
      label: "Gender",
      errorMessage: "Field is Required"
    },
    dateOfBirth: {
      name: "dateOfBirth",
      label: "Date of Birth",
      errorMessage: "Field is Required"
    },
    category: {
      name: "category",
      label: "Category",
      errorMessage: "Field is Required"
    },
    subCategory: {
      name: "subCategory",
      label: "Sub Category" // errorMessage: "Field is Required",

    },
    emailId: {
      name: "emailId",
      label: "Email Id",
      errorMessage: "Field is Required",
      invalidMessage: "It must be a valid email"
    },
    mobileNumber: {
      name: "mobileNumber",
      label: "Mobile Number",
      errorMessage: "Field is Required",
      invalidMessage: "Mobile Number should be of 10 digits",
      invalidMessage2: "Mobile Number should contains only numbers"
    },
    religion: {
      name: "religion",
      label: "Religion",
      errorMessage: "Field is Required"
    },
    documentCompleted: {
      name: "documentCompleted",
      label: "Document Completed?",
      errorMessage: "Field is Required"
    },
    aadhaarNumber: {
      name: "aadhaarNumber",
      label: "Aadhaar Number",
      errorMessage: "Field is Required"
    },
    vatsalyaYojana: {
      name: "vatsalyaYojana",
      label: "Vatsalya Yojana",
      errorMessage: "Field is Required"
    },
    fatherName: {
      name: "fatherName",
      label: "Father's Name",
      errorMessage: "Field is Required"
    },
    motherName: {
      name: "motherName",
      label: "Mother's Name",
      errorMessage: "Field is Required"
    },
    gaurdianName: {
      name: "gaurdianName",
      label: "Gaurdian's Name",
      errorMessage: "Field is Required"
    },
    gaurdianRelationship: {
      name: "gaurdianRelationship",
      label: "Relationship with Gaurdian",
      errorMessage: "Field is Required"
    },
    annualIncome: {
      name: "annualIncome",
      label: "Annual Income",
      errorMessage: "Field is Required",
      invalidMessage: "Should contain numbers only"
    },
    gaurdianMobileNumber: {
      name: "gaurdianMobileNumber",
      label: "Gaurdian Mobile Number",
      errorMessage: "Field is Required",
      invalidMessage: "Mobile Number should be of 10 digits"
    },
    permanentAddress: {
      name: "permanentAddress",
      label: "Permanent Address",
      errorMessage: "Field is Required"
    },
    state: {
      name: "state",
      label: "State",
      errorMessage: "Field is Required"
    },
    gaurdianAddress: {
      name: "gaurdianAddress",
      label: "Gaurdian Address",
      errorMessage: "Field is Required"
    },
    residanceRegion: {
      name: "residanceRegion",
      label: "Residance Region",
      errorMessage: "Field is Required"
    },
    durationOfResidance: {
      name: "durationOfResidance",
      label: "Duration of Residance",
      errorMessage: "Field is Required"
    },
    residanceOfUK: {
      name: "residanceOfUK",
      label: "Residance of UK?",
      errorMessage: "Field is Required"
    },
    instituteRegion: {
      name: "instituteRegion",
      label: "Institute Region",
      errorMessage: "Field is Required"
    },
    examinationPassed: {
      name: "examinationPassed",
      label: "Examination Passed",
      errorMessage: "Field is Required"
    },
    lastAttended: {
      name: "lastAttended",
      label: "Institute Last Attended",
      errorMessage: "Field is Required"
    },
    subject1: {
      name: "subject1",
      label: "Subject 1",
      errorMessage: "Field is Required"
    },
    subject2: {
      name: "subject2",
      label: "Subject 2",
      errorMessage: "Field is Required"
    },
    subject3: {
      name: "subject3",
      label: "Subject 3",
      errorMessage: "Field is Required"
    },
    qualification: {
      name: "qualification",
      label: "Qualification",
      errorMessage: "qualification",
      data: {
        examination: {
          name: "examination",
          label: "Examination",
          errorMessage: "Field is Required"
        },
        year: {
          name: "year",
          label: "Year",
          errorMessage: "Field is Required"
        },
        board: {
          name: "board",
          label: "Board",
          errorMessage: "Field is Required"
        },
        marks: {
          name: "marks",
          label: "Marks",
          errorMessage: "Field is Required"
        },
        subjects: {
          name: "subjects",
          label: "Subjects",
          errorMessage: "Field is Required"
        }
      }
    } // qualification: {
    //   name: "qualification",
    //   label: "Qualification",
    //   errorMessage: "qualification",
    // data: {
    //   examination: {
    //     name: "examination",
    //     label: "Examination",
    //     errorMessage: "Field is Required",
    //   },
    //   year: {
    //     name: "year",
    //     label: "Year",
    //     errorMessage: "Field is Required",
    //   },
    //   board: {
    //     name: "board",
    //     label: "Board",
    //     errorMessage: "Field is Required",
    //   },
    //   marks: {
    //     name: "marks",
    //     label: "Marks",
    //     errorMessage: "Field is Required",
    //   },
    //   subjects: {
    //     name: "subjects",
    //     label: "Subjects",
    //     errorMessage: "Field is Required",
    //   },
    // },
    // },
    // qualification: [
    // {
    //   examination: {
    //     name: "examination",
    //     label: "Examination",
    //     errorMessage: "Field is Required",
    //   },
    //   year: {
    //     name: "year",
    //     label: "Year",
    //     errorMessage: "Field is Required",
    //   },
    //   board: {
    //     name: "board",
    //     label: "Board",
    //     errorMessage: "Field is Required",
    //   },
    //   marks: {
    //     name: "marks",
    //     label: "Marks",
    //     errorMessage: "Field is Required",
    //   },
    //   subjects: {
    //     name: "subjects",
    //     label: "Subjects",
    //     errorMessage: "Field is Required",
    //   },
    // },
    // ],

  }
};
exports.model = model;
var _model$formField = model.formField,
    appNo = _model$formField.appNo,
    admDate = _model$formField.admDate,
    studentName = _model$formField.studentName,
    studentClass = _model$formField.studentClass,
    gender = _model$formField.gender,
    dateOfBirth = _model$formField.dateOfBirth,
    category = _model$formField.category,
    subCategory = _model$formField.subCategory,
    emailId = _model$formField.emailId,
    mobileNumber = _model$formField.mobileNumber,
    religion = _model$formField.religion,
    documentCompleted = _model$formField.documentCompleted,
    aadhaarNumber = _model$formField.aadhaarNumber,
    vatsalyaYojana = _model$formField.vatsalyaYojana,
    fatherName = _model$formField.fatherName,
    motherName = _model$formField.motherName,
    gaurdianName = _model$formField.gaurdianName,
    gaurdianRelationship = _model$formField.gaurdianRelationship,
    annualIncome = _model$formField.annualIncome,
    gaurdianMobileNumber = _model$formField.gaurdianMobileNumber,
    permanentAddress = _model$formField.permanentAddress,
    state = _model$formField.state,
    gaurdianAddress = _model$formField.gaurdianAddress,
    residanceRegion = _model$formField.residanceRegion,
    durationOfResidance = _model$formField.durationOfResidance,
    residanceOfUK = _model$formField.residanceOfUK,
    instituteRegion = _model$formField.instituteRegion,
    examinationPassed = _model$formField.examinationPassed,
    lastAttended = _model$formField.lastAttended,
    qualification = _model$formField.qualification,
    subject1 = _model$formField.subject1,
    subject2 = _model$formField.subject2,
    subject3 = _model$formField.subject3;

var initialValues = function initialValues() {
  var _ref;

  return _ref = {}, _defineProperty(_ref, appNo.name, ""), _defineProperty(_ref, admDate.name, ""), _defineProperty(_ref, studentName.name, ""), _defineProperty(_ref, studentClass.name, ""), _defineProperty(_ref, gender.name, ""), _defineProperty(_ref, dateOfBirth.name, ""), _defineProperty(_ref, category.name, ""), _defineProperty(_ref, subCategory.name, ""), _defineProperty(_ref, emailId.name, ""), _defineProperty(_ref, mobileNumber.name, ""), _defineProperty(_ref, religion.name, ""), _defineProperty(_ref, documentCompleted.name, ""), _defineProperty(_ref, aadhaarNumber.name, ""), _defineProperty(_ref, vatsalyaYojana.name, ""), _defineProperty(_ref, fatherName.name, ""), _defineProperty(_ref, motherName.name, ""), _defineProperty(_ref, gaurdianName.name, ""), _defineProperty(_ref, gaurdianRelationship.name, ""), _defineProperty(_ref, annualIncome.name, ""), _defineProperty(_ref, gaurdianMobileNumber.name, ""), _defineProperty(_ref, permanentAddress.name, ""), _defineProperty(_ref, state.name, ""), _defineProperty(_ref, gaurdianAddress.name, ""), _defineProperty(_ref, residanceRegion.name, ""), _defineProperty(_ref, durationOfResidance.name, ""), _defineProperty(_ref, residanceOfUK.name, ""), _defineProperty(_ref, instituteRegion.name, ""), _defineProperty(_ref, examinationPassed.name, ""), _defineProperty(_ref, lastAttended.name, ""), _defineProperty(_ref, subject1.name, ""), _defineProperty(_ref, subject2.name, ""), _defineProperty(_ref, subject3.name, ""), _ref;
};

exports.initialValues = initialValues;

var filledInitialValues = function filledInitialValues(data) {
  var _ref2;

  //   console.log(data.studentName);
  return _ref2 = {}, _defineProperty(_ref2, appNo.name, data.appNo), _defineProperty(_ref2, admDate.name, data.admDate), _defineProperty(_ref2, studentName.name, data.studentName), _defineProperty(_ref2, studentClass.name, data.studentClass), _defineProperty(_ref2, gender.name, data.gender), _defineProperty(_ref2, dateOfBirth.name, data.dateOfBirth), _defineProperty(_ref2, category.name, data.category), _defineProperty(_ref2, subCategory.name, data.subCategory), _defineProperty(_ref2, emailId.name, data.emailId), _defineProperty(_ref2, mobileNumber.name, data.mobileNumber), _defineProperty(_ref2, religion.name, data.religion), _defineProperty(_ref2, documentCompleted.name, data.documentCompleted), _defineProperty(_ref2, aadhaarNumber.name, data.aadhaarNumber), _defineProperty(_ref2, vatsalyaYojana.name, data.vatsalyaYojana), _defineProperty(_ref2, fatherName.name, data.fatherName), _defineProperty(_ref2, motherName.name, data.motherName), _defineProperty(_ref2, gaurdianName.name, data.gaurdianName), _defineProperty(_ref2, gaurdianRelationship.name, data.gaurdianRelationship), _defineProperty(_ref2, annualIncome.name, data.annualIncome), _defineProperty(_ref2, gaurdianMobileNumber.name, data.gaurdianMobileNumber), _defineProperty(_ref2, permanentAddress.name, data.permanentAddress), _defineProperty(_ref2, state.name, data.state), _defineProperty(_ref2, gaurdianAddress.name, data.gaurdianAddress), _defineProperty(_ref2, residanceRegion.name, data.residanceRegion), _defineProperty(_ref2, durationOfResidance.name, data.durationOfResidance), _defineProperty(_ref2, residanceOfUK.name, data.residanceOfUK), _defineProperty(_ref2, instituteRegion.name, data.instituteRegion), _defineProperty(_ref2, examinationPassed.name, data.examinationPassed), _defineProperty(_ref2, lastAttended.name, data.lastAttended), _defineProperty(_ref2, subject1.name, data.subject1), _defineProperty(_ref2, subject2.name, data.subject2), _defineProperty(_ref2, subject3.name, data.subject3), _defineProperty(_ref2, qualification.name, data.qualification ? data.qualification : [{
    examination: "",
    year: "",
    board: "",
    marks: "",
    subjects: ""
  }]), _ref2;
}; // export const initialValues = {
//   [appNo.name]: "Hey",
//   [studentName.name]: "",
//   [studentClass.name]: "",
//   [gender.name]: "",
// };


exports.filledInitialValues = filledInitialValues;