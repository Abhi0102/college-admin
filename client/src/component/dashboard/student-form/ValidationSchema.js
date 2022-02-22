import * as Yup from "yup";
// import { array } from "yup";
import { model } from "../student-profile/FormModel";

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

export default {
  "Personal Details": Yup.object().shape({
    [appNo.name]: Yup.string().required(`${appNo.errorMessage}`),
    [admDate.name]: Yup.date().required(`${admDate.errorMessage}`),
    [studentName.name]: Yup.string().required(`${studentName.errorMessage}`),
    [studentClass.name]: Yup.string().required(`${studentClass.errorMessage}`),
    [gender.name]: Yup.string().required(`${gender.errorMessage}`),
    [dateOfBirth.name]: Yup.date().required(`${dateOfBirth.errorMessage}`),
    [category.name]: Yup.string().required(`${category.errorMessage}`),
    [subCategory.name]: Yup.string(),
    [emailId.name]: Yup.string()
      .email(`${emailId.invalidMessage}`)
      .required(`${emailId.errorMessage}`),
    [mobileNumber.name]: Yup.string()
      .required(`${mobileNumber.errorMessage}`)
      .test(
        "len",
        `${mobileNumber.invalidMessage}`,
        (val) => val && val.length === 10
      ),
    [religion.name]: Yup.string().required(`${religion.errorMessage}`),
    [documentCompleted.name]: Yup.string().required(
      `${documentCompleted.errorMessage}`
    ),
    [aadhaarNumber.name]: Yup.string().required(
      `${aadhaarNumber.errorMessage}`
    ),
    [vatsalyaYojana.name]: Yup.string().required(
      `${vatsalyaYojana.errorMessage}`
    ),
  }),
  "Family Details": Yup.object().shape({
    [fatherName.name]: Yup.string().required(`${fatherName.errorMessage}`),
    [motherName.name]: Yup.string().required(`${motherName.errorMessage}`),
    [gaurdianName.name]: Yup.string().required(`${gaurdianName.errorMessage}`),
    [gaurdianRelationship.name]: Yup.string().required(
      `${gaurdianRelationship.errorMessage}`
    ),
    [annualIncome.name]: Yup.number(`${annualIncome.invalidMessage}`).required(
      `${annualIncome.errorMessage}`
    ),
    [gaurdianMobileNumber.name]: Yup.string()
      .required(`${gaurdianMobileNumber.errorMessage}`)
      .test(
        "len",
        `${gaurdianMobileNumber.invalidMessage}`,
        (val) => val && val.length === 10
      ),
  }),
  "Address Details": Yup.object().shape({
    [permanentAddress.name]: Yup.string().required(
      `${permanentAddress.errorMessage}`
    ),
    [state.name]: Yup.string().required(`${state.errorMessage}`),
    [gaurdianAddress.name]: Yup.string().required(
      `${gaurdianAddress.errorMessage}`
    ),
    [residanceRegion.name]: Yup.string().required(
      `${residanceRegion.errorMessage}`
    ),
    [durationOfResidance.name]: Yup.string().required(
      `${durationOfResidance.errorMessage}`
    ),
    [residanceOfUK.name]: Yup.string().required(
      `${residanceOfUK.errorMessage}`
    ),
  }),
  "Education Qualification": Yup.object().shape({
    [instituteRegion.name]: Yup.string().required(
      `${instituteRegion.errorMessage}`
    ),
    [examinationPassed.name]: Yup.string().required(
      `${examinationPassed.errorMessage}`
    ),
    [lastAttended.name]: Yup.string().required(`${lastAttended.errorMessage}`),
    [subject1.name]: Yup.string().required(`${subject1.errorMessage}`),
    [subject2.name]: Yup.string(),
    [subject3.name]: Yup.string(),
  }),
  "Education History": Yup.object().shape({
    [qualification.name]: Yup.array(
      Yup.object({
        examination: Yup.string().required(`${studentName.errorMessage}`),
        year: Yup.string().required(`${studentName.errorMessage}`),
        board: Yup.string().required(`${studentName.errorMessage}`),
        marks: Yup.string().required(`${studentName.errorMessage}`),
        subjects: Yup.string().required(`${studentName.errorMessage}`),
      })
    ).min(1),
  }),
};
