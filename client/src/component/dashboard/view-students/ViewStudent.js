import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import ViewStudentFilters from "./ViewStudentFilters";
import StudentTable from "./StudentTable";

import NoDataFound from "../../NoDataFound";

function ViewStudent(props) {
  const { studentList, error } = useSelector((state) => state.fetchStudents);
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        View Students
      </Typography>

      <ViewStudentFilters />

      {error && <NoDataFound error={error} />}
      {studentList.length !== 0 && <StudentTable studentList={studentList} />}
    </Container>
  );
}

export default ViewStudent;
