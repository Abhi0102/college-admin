import {
  Container,
  Typography,
  Card,
  Stack,
  Grid,
  CssBaseline,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import StudentForm from "./StudentForm";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchStudentById,
  removeFetchStudentByID,
} from "../../../actions/fetchStudent";

const useStyles = makeStyles({
  card: {
    position: "sticky",
    maxHeight: "200px",
    top: "20px",
  },
});

function StudentProfile(props) {
  const classes = useStyles();
  const params = useParams();
  const [studentData, setStudentData] = useState();
  const { student } = useSelector((state) => state.fetchStudents);
  //   console.log(Object.keys(student).length);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStudentById(params.id));
    return dispatch(removeFetchStudentByID());
  }, []);
  return (
    <>
      <CssBaseline />
      <Container>
        <Typography variant="h4" gutterBottom>
          Student Profile
        </Typography>
        {Object.keys(student).length !== 0                      && <StudentForm student={student} />}
      </Container>
    </>
  );
}

export default StudentProfile;
