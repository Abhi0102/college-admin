import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_START,
  LOGIN_SUCCESS,
  SUCCESS_AUTHENTICATE,
  LOG_OUT,
  AUTHENTICATION_PROGRESS,
} from "./actionType";
import { APIUrls } from "../helpers/url";
import { headerWithoutAuth, headerWithAuth } from "../helpers/costants";
import { getFormBody } from "../helpers/utils";
import { LOGIN_FAIL, LOGIN_START } from "./actionType";
import { fetchConstants } from "./fetchConstants";

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAIL,
    error: errorMessage,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function login(userName, password) {
  return async (dispatch) => {
    dispatch(startLogin());
    const url = APIUrls.login();
    const response = await fetch(url, {
      method: "POST",
      headers: headerWithoutAuth,
      body: getFormBody({ userName, password }),
    });
    if (response.status === 404) {
      dispatch(loginFailed(response.status + " " + response.statusText));
    }
    // console.log(response.status);
    const data = await response.json();

    if (!data.data.success) {
      dispatch(loginFailed(data.data.message));
    }
    if (data.data.success) {
      localStorage.setItem("token", data.data.token);
      dispatch(loginSuccess(data.data.user));
      dispatch(fetchConstants());
      // console.log(data.data.token);
    }
    // if (data.success) {
    // some success code

    //   return;
    // } else {
    //   dispatch(loginFailed(data.message));
    // }
    // console.log(response);
    // console.log('Hey', userName, password);
  };
}

export function startSignup() {
  return {
    type: SIGNUP_START,
  };
}

export function signupFailed(errorMessage) {
  return {
    type: SIGNUP_FAIL,
    error: errorMessage,
  };
}

export function signupSuccess(message) {
  return {
    type: SIGNUP_SUCCESS,
    successMessage: message,
  };
}

export function signup(name, userName, password, confirmPassword) {
  return async (dispatch) => {
    dispatch(startSignup());
    const url = APIUrls.signup();
    const response = await fetch(url, {
      method: "POST",
      headers: headerWithoutAuth,
      body: getFormBody({ name, userName, password, confirmPassword }),
    });
    if (response.status === 404) {
      dispatch(signupFailed(response.status + " " + response.statusText));
    }
    // console.log(response.status);
    const data = await response.json();
    if (!data.data.success) {
      dispatch(signupFailed(data.data.message));
    }
    if (data.data.success) {
      dispatch(signupSuccess(data.data.message));
    }
  };
}

export function successAuthentication(user) {
  return {
    type: SUCCESS_AUTHENTICATE,
    user,
  };
}

export function logout() {
  localStorage.removeItem("token");
  return {
    type: LOG_OUT,
  };
}

export function authenticationProgress() {
  return {
    type: AUTHENTICATION_PROGRESS,
  };
}

export function authenticateUser(user) {
  return async (dispatch) => {
    dispatch(authenticationProgress());
    try {
      const url = APIUrls.checkAuthentication();
      const response = await fetch(url, {
        method: "GET",
        headers: headerWithAuth,
      });
      const data = await response.json();
      if (data.data.success) {
        // console.log;
        dispatch(successAuthentication(user));
        dispatch(fetchConstants());
      } else {
        dispatch(logout());
      }
    } catch (err) {
      console.log("Error in authentication", err);
      dispatch(logout());
    }
  };
}
