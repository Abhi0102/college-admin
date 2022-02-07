import React from "react";
import { Grid, TextField, Typography } from "@mui/material";
import InputField from "./InputField";
import SelectField from "./SelectField";
import DatePickerField from "../../input-fields/DatePickerField";
import { familyFields } from "./Constants";

function FamilyDetails(props) {
  const { isDisabled } = props;
  const formData = { ...props.formField };
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Family Details
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {familyFields.map((field) => {
          const fieldData = formData[field.field];
          //   console.log(field);
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
      {/* <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item md={6}>
          <TextField label="Father's Name" fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Mother's Name" fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Gaurdian Name" fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Relationship" fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Annual Income" fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Gaurdian Mobile No." fullWidth />
        </Grid>
      </Grid> */}
    </>
  );
}

export default FamilyDetails;
