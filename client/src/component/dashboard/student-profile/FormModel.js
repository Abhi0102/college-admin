export const model = {
  formId: "studentForm",
  formField: {
    appNo: {
      name: "appNo",
      label: "App No.",
      errorMessage: "Field is Required",
    },

    admDate: {
      name: "admDate",
      label: "Admission Date",
      errorMessage: "Field is Required",
    },

    studentName: {
      name: "studentName",
      label: "Student Name",
      errorMessage: "Field is Required",
    },
    studentClass: {
      name: "studentClass",
      label: "Student Class",
      errorMessage: "Field is Required",
    },
    gender: {
      name: "gender",
      label: "Gender",
      errorMessage: "Field is Required",
    },
    dateOfBirth: {
      name: "dateOfBirth",
      label: "Date of Birth",
      errorMessage: "Field is Required",
    },
    category: {
      name: "category",
      label: "Category",
      errorMessage: "Field is Required",
    },
    subCategory: {
      name: "subCategory",
      label: "Sub Category",
      // errorMessage: "Field is Required",
    },
    emailId: {
      name: "emailId",
      label: "Email Id",
      errorMessage: "Field is Required",
      invalidMessage: "It must be a valid email",
    },
    mobileNumber: {
      name: "mobileNumber",
      label: "Mobile Number",
      errorMessage: "Field is Required",
      invalidMessage: "Mobile Number should be of 10 digits",
      invalidMessage2: "Mobile Number should contains only numbers",
    },
    religion: {
      name: "religion",
      label: "Religion",
      errorMessage: "Field is Required",
    },
    documentCompleted: {
      name: "documentCompleted",
      label: "Document Completed?",
      errorMessage: "Field is Required",
    },
    aadhaarNumber: {
      name: "aadhaarNumber",
      label: "Aadhaar Number",
      errorMessage: "Field is Required",
    },
    vatsalyaYojana: {
      name: "vatsalyaYojana",
      label: "Vatsalya Yojana",
      errorMessage: "Field is Required",
    },
    fatherName: {
      name: "fatherName",
      label: "Father's Name",
      errorMessage: "Field is Required",
    },
    motherName: {
      name: "motherName",
      label: "Mother's Name",
      errorMessage: "Field is Required",
    },
    gaurdianName: {
      name: "gaurdianName",
      label: "Gaurdian's Name",
      errorMessage: "Field is Required",
    },
    gaurdianRelationship: {
      name: "gaurdianRelationship",
      label: "Relationship with Gaurdian",
      errorMessage: "Field is Required",
    },
    annualIncome: {
      name: "annualIncome",
      label: "Annual Income",
      errorMessage: "Field is Required",
      invalidMessage: "Should contain numbers only",
    },
    gaurdianMobileNumber: {
      name: "gaurdianMobileNumber",
      label: "Gaurdian Mobile Number",
      errorMessage: "Field is Required",
      invalidMessage: "Mobile Number should be of 10 digits",
    },
    permanentAddress: {
      name: "permanentAddress",
      label: "Permanent Address",
      errorMessage: "Field is Required",
    },
    state: {
      name: "state",
      label: "State",
      errorMessage: "Field is Required",
    },
    gaurdianAddress: {
      name: "gaurdianAddress",
      label: "Gaurdian Address",
      errorMessage: "Field is Required",
    },
    residanceRegion: {
      name: "residanceRegion",
      label: "Residance Region",
      errorMessage: "Field is Required",
    },
    durationOfResidance: {
      name: "durationOfResidance",
      label: "Duration of Residance",
      errorMessage: "Field is Required",
    },
    residanceOfUK: {
      name: "residanceOfUK",
      label: "Residance of UK?",
      errorMessage: "Field is Required",
    },
    instituteRegion: {
      name: "instituteRegion",
      label: "Institute Region",
      errorMessage: "Field is Required",
    },
    examinationPassed: {
      name: "examinationPassed",
      label: "Examination Passed",
      errorMessage: "Field is Required",
    },
    lastAttended: {
      name: "lastAttended",
      label: "Institute Last Attended",
      errorMessage: "Field is Required",
    },
    subject1: {
      name: "subject1",
      label: "Subject 1",
      errorMessage: "Field is Required",
    },
    subject2: {
      name: "subject2",
      label: "Subject 2",
      errorMessage: "Field is Required",
    },
    subject3: {
      name: "subject3",
      label: "Subject 3",
      errorMessage: "Field is Required",
    },
    qualification: {
      name: "qualification",
      label: "Qualification",
      errorMessage: "qualification",
      data: {
        examination: {
          name: "examination",
          label: "Examination",
          errorMessage: "Field is Required",
        },
        year: {
          name: "year",
          label: "Year",
          errorMessage: "Field is Required",
        },
        board: {
          name: "board",
          label: "Board",
          errorMessage: "Field is Required",
        },
        marks: {
          name: "marks",
          label: "Marks",
          errorMessage: "Field is Required",
        },
        subjects: {
          name: "subjects",
          label: "Subjects",
          errorMessage: "Field is Required",
        },
      },
    },

    // qualification: {
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
  },
};

const {
  formField: {
    appNo,
    admDate,
    studentName,
    studentClass,
    gender,
    dateOfBirth,
    category,
    subCategory,
    emailId,
    mobileNumber,
    religion,
    documentCompleted,
    aadhaarNumber,
    vatsalyaYojana,
    fatherName,
    motherName,
    gaurdianName,
    gaurdianRelationship,
    annualIncome,
    gaurdianMobileNumber,
    permanentAddress,
    state,
    gaurdianAddress,
    residanceRegion,
    durationOfResidance,
    residanceOfUK,
    instituteRegion,
    examinationPassed,
    lastAttended,
    qualification,
    subject1,
    subject2,
    subject3,
  },
} = model;

export const initialValues = () => {
  return {
    [appNo.name]: "",
    [admDate.name]: "",
    [studentName.name]: "",
    [studentClass.name]: "",
    [gender.name]: "",
    [dateOfBirth.name]: "",
    [category.name]: "",
    [subCategory.name]: "",
    [emailId.name]: "",
    [mobileNumber.name]: "",
    [religion.name]: "",
    [documentCompleted.name]: "",
    [aadhaarNumber.name]: "",
    [vatsalyaYojana.name]: "",
    [fatherName.name]: "",
    [motherName.name]: "",
    [gaurdianName.name]: "",
    [gaurdianRelationship.name]: "",
    [annualIncome.name]: "",
    [gaurdianMobileNumber.name]: "",
    [permanentAddress.name]: "",
    [state.name]: "",
    [gaurdianAddress.name]: "",
    [residanceRegion.name]: "",
    [durationOfResidance.name]: "",
    [residanceOfUK.name]: "",
    [instituteRegion.name]: "",
    [examinationPassed.name]: "",
    [lastAttended.name]: "",
    [subject1.name]: "",
    [subject2.name]: "",
    [subject3.name]: "",
    // [qualification.name]: [
    //   { examination: "", year: "", board: "", marks: "", subjects: "" },
    // ],
    // [qualification]
  };
};

export const filledInitialValues = (data) => {
  //   console.log(data.studentName);
  return {
    [appNo.name]: data.appNo,
    [admDate.name]: data.admDate,  
    [studentName.name]: data.studentName,
    [studentClass.name]: data.studentClass,
    [gender.name]: data.gender,
    [dateOfBirth.name]: data.dateOfBirth,
    [category.name]: data.category,
    [subCategory.name]: data.subCategory,
    [emailId.name]: data.emailId,
    [mobileNumber.name]: data.mobileNumber,
    [religion.name]: data.religion,
    [documentCompleted.name]: data.documentCompleted,
    [aadhaarNumber.name]: data.aadhaarNumber,
    [vatsalyaYojana.name]: data.vatsalyaYojana,
    [fatherName.name]: data.fatherName,
    [motherName.name]: data.motherName,
    [gaurdianName.name]: data.gaurdianName,
    [gaurdianRelationship.name]: data.gaurdianRelationship,
    [annualIncome.name]: data.annualIncome,
    [gaurdianMobileNumber.name]: data.gaurdianMobileNumber,
    [permanentAddress.name]: data.permanentAddress,
    [state.name]: data.state,
    [gaurdianAddress.name]: data.gaurdianAddress,
    [residanceRegion.name]: data.residanceRegion,
    [durationOfResidance.name]: data.durationOfResidance,
    [residanceOfUK.name]: data.residanceOfUK,
    [instituteRegion.name]: data.instituteRegion,
    [examinationPassed.name]: data.examinationPassed,
    [lastAttended.name]: data.lastAttended,
    [subject1.name]: data.subject1,
    [subject2.name]: data.subject2,
    [subject3.name]: data.subject3,
    [qualification.name]: data.qualification
      ? data.qualification
      : [{ examination: "", year: "", board: "", marks: "", subjects: "" }],
  };
};

// export const initialValues = {
//   [appNo.name]: "Hey",
//   [studentName.name]: "",
//   [studentClass.name]: "",
//   [gender.name]: "",
// };
