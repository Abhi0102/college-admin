import { Icon } from "@iconify/react";

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

export const openIcon = getIcon("carbon:folder-open");

export const TABLE_HEAD = [
  { id: "appNo", label: "App. No", alignRight: false },
  { id: "studentName", label: "Name", alignRight: false },
  { id: "studentClass", label: "Class", alignRight: false },
  { id: "fatherName", label: "Father's Name", alignRight: false },
  { id: "dateOfBirth", label: "Date of Birth", alignRight: false },
  { id: "gender", label: "Gender", alignRight: false },
  { id: "category", label: "Category", alignRight: false },
  { id: "mobileNumber", label: "Mobile Number", alignRight: false },
  { id: "" },
];
