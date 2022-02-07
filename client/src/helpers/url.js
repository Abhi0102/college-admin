const baseUrl = ``;
export const APIUrls = {
  login: () => `${baseUrl}/api/user/login`,
  signup: () => `${baseUrl}/api/user/register`,
  checkAuthentication: () => `${baseUrl}/api/user/authenticate`,
  addStudentForm: () => `${baseUrl}/api/student/submitForm`,
  fetchStudents: (query) =>
    `${baseUrl}/api/student/fetchStudents?gender=${query.gender}&category=${query.category}&studentClass=${query.class}`,
  fetchStudentById: (id) => `${baseUrl}/api/student/fetchStudentById?id=${id}`,
  updateStudentDetail: () => `${baseUrl}/api/student/patchStudent`,
  getIdCards: () => `${baseUrl}/api/student/generateIdCard`,
};

// ${baseUrl}/api/user/register

// http://localhost:8000/api/v1
