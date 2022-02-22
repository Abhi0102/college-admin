import { combineReducers } from "redux";
import auth from "./auth";
// import studentForm from './studentForm';
import constants from "./constants";
import fetchStudents from "./fetchStudents";
export default combineReducers({ auth, fetchStudents, constants });
