// const gender = [
//   { value: "", label: "Choose..." },
//   { value: "Male", label: "Male" },
//   { value: "Female", label: "Female" },
//   { value: "Others", label: "Others" },
// ];
// const indianState = [
//   { value: "Andhra Pradesh", label: "Andhra Pradesh" },
//   { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
//   { value: "Assam", label: "Assam" },
//   { value: "Bihar", label: "Bihar" },
//   { value: "Chhattisgarh", label: "Chhattisgarh" },
//   { value: "Goa", label: "Goa" },
//   { value: "Gujarat", label: "Gujarat" },
//   { value: "Haryana", label: "Haryana" },
//   { value: "Himachal Pradesh", label: "Himachal Pradesh" },
//   { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
//   { value: "Jharkhand", label: "Jharkhand" },
//   { value: "Karnataka", label: "Karnataka" },
//   { value: "Kerala", label: "Kerala" },
//   { value: "Madhya Pradesh", label: "Madhya Pradesh" },
//   { value: "Maharashtra", label: "Maharashtra" },
//   { value: "Manipur", label: "Manipur" },
//   { value: "Meghalaya", label: "Meghalaya" },
//   { value: "Mizoram", label: "Mizoram" },
//   { value: "Nagaland", label: "Nagaland" },
//   { value: "Odisha", label: "Odisha" },
//   { value: "Punjab", label: "Punjab" },
//   { value: "Rajasthan", label: "Rajasthan" },
//   { value: "Sikkim", label: "Sikkim" },
//   { value: "Tamil Nadu", label: "Tamil Nadu" },
//   { value: "Telangana", label: "Telangana" },
//   { value: "Tripura", label: "Tripura" },
//   { value: "Uttarakhand", label: "Uttarakhand" },
//   { value: "Uttar Pradesh", label: "Uttar Pradesh" },
//   { value: "West Bengal", label: "West Bengal" },
//   {
//     value: "Andaman and Nicobar Islands",
//     label: "Andaman and Nicobar Islands",
//   },
//   { value: "Chandigarh", label: "Chandigarh" },
//   { value: "Dadra and Nagar Haveli", label: "Dadra and Nagar Haveli" },
//   { value: "Daman and Diu", label: "Daman and Diu" },
//   { value: "Delhi", label: "Delhi" },
//   { value: "Lakshadweep", label: "Lakshadweep" },
//   { value: "Puducherry", label: "Puducherry" },
// ];
// const category = [
//   { value: "", label: "Choose..." },
//   { value: "General", label: "General" },
//   { value: "SC", label: "SC" },
//   { value: "ST", label: "ST" },
//   { value: "OBC", label: "OBC" },
//   { value: "EWS", label: "EWS" },
// ];
// const subCategory = [
//   { value: "", label: "Choose..." },
//   { value: "Physically Handicapped", label: "Physically Handicapped" },
//   { value: "Ward of Freedom Fighter", label: "Ward of Freedom Fighter" },
//   {
//     value: "Ward of Ex/Active Defence Personal",
//     label: "Ward of Ex/Active Defence Personal",
//   },
// ];
// const yesNo = [
//   { value: "", label: "Choose..." },
//   { value: "Yes", label: "Yes" },
//   { value: "No", label: "No" },
// ];
// const religion = [
//   { value: "", label: "Choose..." },
//   { value: "Hindu", label: "Hindu" },
//   { value: "Muslim", label: "Muslim" },
//   { value: "Sikh", label: "Sikh" },
//   { value: "Christian", label: "Christian" },
//   { value: "Jain", label: "Jain" },
// ];
// const region = [
//   { value: "", label: "Choose..." },
//   { value: "Urban", label: "Urban" },
//   { value: "Rural", label: "Rural" },
// ];
// const studentClass = [
//   { value: "", label: "Choose..." },
//   { value: "B.Com. I", label: "B.Com. I" },
// ];
// export const personalFields = [
//   { field: "appNo", type: "text" },
//   { field: "studentName", type: "text" },
//   { field: "studentClass", type: "select", option: studentClass },
//   { field: "gender", type: "select", option: gender },
//   { field: "dateOfBirth", type: "date" },
//   { field: "category", type: "select", option: category },
//   { field: "subCategory", type: "select", option: subCategory },
//   { field: "emailId", type: "text" },
//   { field: "mobileNumber", type: "text" },
//   { field: "religion", type: "select", option: religion },
//   { field: "documentCompleted", type: "select", option: yesNo },
//   { field: "aadhaarNumber", type: "text" },
//   { field: "vatsalyaYojana", type: "select", option: yesNo },
// ];
// export const familyFields = [
//   { field: "fatherName", type: "text" },
//   { field: "motherName", type: "text" },
//   { field: "gaurdianName", type: "text" },
//   { field: "gaurdianRelationship", type: "text" },
//   { field: "annualIncome", type: "text" },
//   { field: "gaurdianMobileNumber", type: "text" },
// ];
// export const addressFields = [
//   { field: "permanentAddress", type: "text" },
//   { field: "state", type: "select", option: indianState },
//   { field: "gaurdianAddress", type: "text" },
//   { field: "residanceRegion", type: "select", option: region },
//   { field: "durationOfResidance", type: "text" },
//   { field: "residanceOfUK", type: "select", option: yesNo },
// ];
// export const educationFields = [
//   { field: "lastAttended", type: "text" },
//   { field: "instituteRegion", type: "select", option: region },
//   { field: "examinationPassed", type: "text" },
//   //   { field: "residanceRegion", type: "select", option: region },
//   //   { field: "durationOfResidance", type: "text" },
//   //   { field: "residanceOfUK", type: "select", option: yesNo },
// ];
// export const educationHistoryFields = [
//   { field: "examination", type: "text" },
//   { field: "year", type: "select" },
//   { field: "board", type: "text" },
//   { field: "marks", type: "text" },
//   { field: "subjects", type: "text" },
//   //   { field: "residanceRegion", type: "select", option: region },
//   //   { field: "durationOfResidance", type: "text" },
//   //   { field: "residanceOfUK", type: "select", option: yesNo },
// ];
// export const formDetail = [
//   { title: "Personal Details", data: personalFields },
//   { title: "Family Details", data: familyFields },
//   { title: "Address Details", data: addressFields },
//   { title: "Education Qualification", data: educationFields },
// ];
"use strict";