import {
  Container,
  Typography,
  Card,
  Stack,
  Grid,
  CssBaseline,
  CircularProgress,
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
import { Box } from "@mui/system";
import NoDataFound from "../../NoDataFound";

const useStyles = makeStyles({
  card: {
    position: "sticky",
    maxHeight: "200px",
    top: "20px",
  },
  progress: {
    width: "100%",
    alignItems: "center",
    textAlign: "center",
  },
});

function StudentProfile(props) {
  const classes = useStyles();
  const params = useParams();
  const [studentData, setStudentData] = useState();
  const { student, error } = useSelector((state) => state.fetchStudents);

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

        {error ? (
          <NoDataFound error={error} />
        ) : Object.keys(student).length ? (
          <StudentForm student={student} />
        ) : (
          <Box className={classes.progress}>
            <CircularProgress color="primary" size={40} sx={{ mt: 8 }} />
          </Box>
        )}

        {/* {Object.keys(student).length === 0 ? (
          <Box className={classes.progress}>
            <CircularProgress color="primary" size={40} sx={{ mt: 8 }} />
          </Box>
        ) : (
          <StudentForm student={student} />
        )} */}
      </Container>
    </>
  );
}

export default StudentProfile;
