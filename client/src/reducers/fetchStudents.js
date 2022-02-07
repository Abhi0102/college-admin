import {
  FETCH_STUDENT_SUCCESS,
  FETCH_SINGLE_STUDENT,
  REMOVE_SINGLE_STUDENT,
  UPDATE_STUDENT_DETAILS_SUCCESS,
} from "../actions/actionType";

const initialStudentDetailsState = {
  studentList: [],
  student: {},
};

export default function fetchStudents(
  state = initialStudentDetailsState,
  action
) {
  switch (action.type) {
    case FETCH_STUDENT_SUCCESS:
      return { ...state, studentList: action.studentList };
    case FETCH_SINGLE_STUDENT:
    case UPDATE_STUDENT_DETAILS_SUCCESS:
      return { ...state, student: action.student };
    case REMOVE_SINGLE_STUDENT:
      return { ...state, student: {} };
    default:
      return state;
  }
}
