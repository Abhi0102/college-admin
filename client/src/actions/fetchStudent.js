import { APIUrls } from "../helpers/url";
import { getFormBody, getHeaderWithAuth } from "../helpers/utils";
import {
  FETCH_STUDENT_SUCCESS,
  FETCH_SINGLE_STUDENT,
  FORM_SUBMIT_FAILED,
  FORM_SUBMIT_START,
  FETCH_SINGLE_STUDENT_FAILED,
  FETCH_STUDENT_FAIL,
  UPDATE_STUDENT_DETAILS_SUCCESS,
  REMOVE_SINGLE_STUDENT,
} from "./actionType";
import axios from "axios";
export function fetchStudent(query) {
  return async (dispatch) => {
    try {
      const url = APIUrls.fetchStudents(query);
      const response = await fetch(url, {
        method: "GET",
        headers: getHeaderWithAuth(),
      });
      const data = await response.json();
      if (data.data.success) {
        dispatch(fetchStudentSuccess(data.data.studentList));
      } else {
        dispatch(fetchStudentFailed(data.data.error));
      }
    } catch (err) {
      console.log(err);
    }
  };
}

export function fetchStudentSuccess(studentList) {
  return {
    type: FETCH_STUDENT_SUCCESS,
    studentList,
  };
}

function fetchStudentFailed(error) {
  return {
    type: FETCH_STUDENT_FAIL,
    error,
  };
}

export function fetchStudentById(id) {
  return async (dispatch) => {
    try {
      const url = APIUrls.fetchStudentById(id);
      const response = await fetch(url, {
        method: "GET",
        headers: getHeaderWithAuth(),
      });
      const data = await response.json();
      if (data.success) {
        dispatch(fetchStudentByIdSuccess(data.student[0]));
      } else {
        dispatch(fetchStudentByIdFailed(data.error));
      }
    } catch (err) {
      dispatch(fetchStudentByIdFailed(err));
    }
  };
}

export function fetchStudentByIdSuccess(student) {
  // console.log(student[0]);
  return {
    type: FETCH_SINGLE_STUDENT,
    student,
  };
}

function fetchStudentByIdFailed(error) {
  return {
    type: FETCH_SINGLE_STUDENT_FAILED,
    error,
  };
}

export function removeFetchStudentByID() {
  return {
    type: REMOVE_SINGLE_STUDENT,
  };
}

export function updateStudentDetail(id, detail) {
  return async (dispatch) => {
    try {
      const url = APIUrls.updateStudentDetail();
      const response = await fetch(url, {
        method: "PATCH",
        headers: getHeaderWithAuth(),
        body: getFormBody({ id, detail }),
      });
      const data = await response.json();
      if (data.success) {
        dispatch(updateStudentDetailSuccess(data.student));
      } else {
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
}

function updateStudentDetailSuccess(student) {
  return {
    type: UPDATE_STUDENT_DETAILS_SUCCESS,
    student,
  };
}

export function addStudent(formInput) {
  return async (dispatch) => {
    try {
      // dispatch()
      const url = APIUrls.addStudentForm();
      const response = await fetch(url, {
        method: "POST",
        headers: getHeaderWithAuth(),
        body: getFormBody(formInput),
      });
      const data = await response.json();
      return data;
      // axios
      //   .post(url, getFormBody(formInput), { headers: getHeaderWithAuth() })
      //   .then((res) => console.log(res));
    } catch (err) {
      console.log(err);
      return {
        data: {
          success: false,
          message: "Some Error Occured While Receiving the data",
        },
      };
      // return err;
    }
  };
}
