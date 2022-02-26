import React from "react";
// import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import {
  Button,
  TextField,
  Grid,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { fetchStudent } from "../../../actions/fetchStudent";

// const gen = [
//   { title: "Choose...", value: "" },
//   { title: "Male", value: "Male" },
//   { title: "Female", value: "Female" },
//   { title: "Others", value: "Others" },
// ];

// const cat = [
//   { title: "Choose...", value: "" },
//   { title: "General", value: "General" },
//   { title: "SC", value: "SC" },
//   { title: "ST", value: "ST" },
//   { title: "OBC", value: "OBC" },
//   { title: "EWS", value: "EWS" },
// ];

function ViewStudentFilters(props) {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.constants.options);

  let offeredClass = [];
  let cat = [];
  let gen = [];
  for (let i of selector) {
    if (i.optionDetail === "category") {
      cat = i.data;
    } else if (i.optionDetail === "studentClass") {
      offeredClass = i.data;
    } else if (i.optionDetail === "gender") {
      gen = i.data;
    }
  }

  const queryParams = [
    { label: "Gender", attr: "gender", data: gen },
    { label: "Category", attr: "category", data: cat },
    { label: "Class", attr: "class", data: offeredClass },
  ];

  const formik = useFormik({
    initialValues: {
      gender: "",
      class: "",
      category: "",
    },
    onSubmit: async (values, actions) => {
      await dispatch(fetchStudent(values));
    },
  });

  const { handleSubmit, getFieldProps } = formik;
  return (
    <>
      {/* <Card> */}
      <FormikProvider value={formik}>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={3} my={3}>
            {queryParams.map((params) => {
              const { data, attr } = params;
              return (
                <Grid item md={2} sm={6} xs={6} key={params.attr}>
                  {" "}
                  <TextField
                    autoComplete={params.attr}
                    select
                    fullWidth
                    label={params.label}
                    {...getFieldProps(attr)}
                  >
                    {data.map((option) => (
                      <MenuItem key={option.label} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              );
            })}
            <Grid item md={4}>
              <TextField label="Search" fullWidth />
            </Grid>
            <Grid item md={2}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ height: "100%" }}
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? (
                  <>
                    <CircularProgress color="primary" size={24} /> &nbsp;
                    Fetching...
                  </>
                ) : (
                  `Fetch`
                )}
              </Button>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
    </>
  );
}

export default ViewStudentFilters;
