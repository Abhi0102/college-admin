import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import ViewStudentFilters from "./ViewStudentFilters";
import StudentTable from "./StudentTable";

function ViewStudent(props) {
  const { studentList } = useSelector((state) => state.fetchStudents);
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        View Students
      </Typography>

      <ViewStudentFilters />

      {studentList.length !== 0 && <StudentTable studentList={studentList} />}
    </Container>
  );
}

export default ViewStudent;
