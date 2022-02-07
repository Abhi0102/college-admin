import React from "react";
// import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { Button, TextField, Grid, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";

import { fetchStudent } from "../../../actions/fetchStudent";

const gen = [
  { title: "Choose...", value: "" },
  { title: "Male", value: "Male" },
  { title: "Female", value: "Female" },
  { title: "Others", value: "Others" },
];

const cat = [
  { title: "Choose...", value: "" },
  { title: "General", value: "General" },
  { title: "SC", value: "SC" },
  { title: "ST", value: "ST" },
  { title: "OBC", value: "OBC" },
  { title: "EWS", value: "EWS" },
];

const offeredClass = [
  { title: "Choose...", value: "" },
  { title: "B.Com. I", value: "B.Com. I" },
];

const queryParams = [
  { label: "Gender", attr: "gender", data: gen },
  { label: "Category", attr: "category", data: cat },
  { label: "Class", attr: "class", data: offeredClass },
];

function ViewStudentFilters(props) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      gender: "",
      class: "",
      category: "",
    },
    onSubmit: () => {
      console.log("Hey");
      dispatch(fetchStudent(formik.values));
      console.log(formik.values);
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
                      <MenuItem key={option.title} value={option.value}>
                        {option.title}
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
              >
                Fetch
              </Button>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
    </>
  );
}

export default ViewStudentFilters;
