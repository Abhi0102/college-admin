import { getAuthToken } from './utils';

export const headerWithoutAuth = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

export const headerWithAuth = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Authorization: `Bearer ${getAuthToken()}`,
};

export const headerWithAuthJSON = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getAuthToken()}`,
};

export const indianState = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttarakhand',
  'Uttar Pradesh',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli',
  'Daman and Diu',
  'Delhi',
  'Lakshadweep',
  'Puducherry',
];

export const gender = ['Male', 'Female', 'Others'];

export const category = ['General', 'SC', 'ST', 'OBC', 'EWS'];

export const subCategory = [
  'Physically Handicapped',
  'Ward of Freedom Figter',
  'Ward of Ex/Active Defence Personal',
];

export const yesNo = ['Yes', 'No'];

export const religion = ['Hindu', 'Muslim', 'Sikh', 'Christian', 'Jain'];

export const region = ['Urban', 'Rural'];

export const offeredClass = ['B.Com. I'];

export const studentTable = [
  { title: 'App. No', data: 'appNo' },
  { title: 'Name', data: 'studentName' },
  { title: 'Class', data: 'studentClass' },
  { title: "Father's Name", data: 'fatherName' },
  { title: 'Date Of Birth', data: 'dateOfBirth' },
  { title: 'Gender', data: 'gender' },
  { title: 'Category', data: 'category' },
  { title: 'Mobile Number', data: 'mobileNumber' },
];
