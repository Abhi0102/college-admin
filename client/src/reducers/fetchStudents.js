import {
  FETCH_STUDENT_SUCCESS,
  FETCH_SINGLE_STUDENT,
  REMOVE_SINGLE_STUDENT,
  UPDATE_STUDENT_DETAILS_SUCCESS,
  FETCH_STUDENT_FAIL,
  FETCH_SINGLE_STUDENT_FAILED,
} from "../actions/actionType";

const initialStudentDetailsState = {
  studentList: [],
  student: {},
  error: null,
};

export default function fetchStudents(
  state = initialStudentDetailsState,
  action
) {
  switch (action.type) {
    case FETCH_STUDENT_SUCCESS:
      return { ...state, studentList: action.studentList, error: null };
    case FETCH_SINGLE_STUDENT:
    case UPDATE_STUDENT_DETAILS_SUCCESS:
      return { ...state, student: action.student, error: null };
    case REMOVE_SINGLE_STUDENT:
      return { ...state, student: {}, error: null };
    case FETCH_STUDENT_FAIL:
    case FETCH_SINGLE_STUDENT_FAILED:
      return { studentList: [], student: {}, error: action.error };
    default:
      return state;
  }
}
