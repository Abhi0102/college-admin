import React from "react";
import { Grid, TextField, Typography } from "@mui/material";
import InputField from "./InputField";
import SelectField from "./SelectField";
import DatePickerField from "../../input-fields/DatePickerField";
import { educationFields } from "./Constants";
import { FieldArray } from "formik";

function EducationForm(props) {
  const { isDisabled } = props;
  const formData = { ...props.formField };
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Education Qualification
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {educationFields.map((field) => {
          const fieldData = formData[field.field];
          // console.log(field);
          return (
            <Grid item md={6} key={field.field}>
              {field.type === "text" ? (
                <InputField
                  name={fieldData.name}
                  label={fieldData.label}
                  fullWidth
                  type="text"
                  inputProps={{ readOnly: isDisabled }}
                />
              ) : field.type === "date" ? (
                <DatePickerField
                  name={fieldData.name}
                  label={fieldData.label}
                  format="dd/mm/yyyy"
                  views={["year", "month", "day"]}
                  maxDate={new Date()}
                  fullWidth
                  readOnly={isDisabled}
                />
              ) : (
                <SelectField
                  name={fieldData.name}
                  label={fieldData.label}
                  data={field.option}
                  fullWidth
                  isDisabled={isDisabled}
                />
              )}
            </Grid>
          );
        })}
      </Grid>

      <Grid>
        <FieldArray></FieldArray>
      </Grid>

      {/* <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item md={4}>
          <TextField label="Institute Last Attended" fullWidth />
        </Grid>
        <Grid item md={4}>
          <TextField label="Institute Last Attended" fullWidth />
        </Grid>
        <Grid item md={4}>
          <TextField label="Institute Last Attended" fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Institute Last Attended" fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Institute Region" fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Examination Passed" fullWidth />
        </Grid>
        <Grid item md={12}>
          <TextField label="Qualification" fullWidth />
        </Grid>
      </Grid> */}
    </>
  );
}

export default EducationForm;
