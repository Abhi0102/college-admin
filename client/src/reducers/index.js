import { combineReducers } from "redux";
import auth from "./auth";
// import studentForm from './studentForm';
import fetchStudents from "./fetchStudents";
export default combineReducers({ auth, fetchStudents });
