export function getFormBody(params) {
  let formBody = [];
  // console.log(params);
  for (let property in params) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(params[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  return formBody.join('&');
}

export function getAuthToken() {
  return localStorage.getItem('token');
}

export function getHeaderWithAuth() {
  return {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${getAuthToken()}`,
  };
}

// export const headerWithoutAuth = {
//   'Content-Type': 'application/x-www-form-urlencoded',
// };

// export const headerWithAuth = {
// 'Content-Type': 'application/x-www-form-urlencoded',
// Authorization: `Bearer ${getAuthToken()}`,
// };

// export const headerWithAuthJSON = {
//   'Content-Type': 'application/json',
//   Authorization: `Bearer ${getAuthToken()}`,
// };
