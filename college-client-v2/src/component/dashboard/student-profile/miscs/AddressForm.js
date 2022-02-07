import React from "react";
import { Typography, Grid } from "@mui/material";
import InputField from "./InputField";
import SelectField from "./SelectField";
import DatePickerField from "../../../input-fields/DatePickerField";
import { addressFields } from "../Constants";
function AddressForm(props) {
  const { isDisabled } = props;
  const formData = { ...props.formField };
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Address Details
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {addressFields.map((field) => {
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
          <TextField label="Permanent Address" fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="State" fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Gaurdian's Address" fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Residance Region" fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Duration of Residance" fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Citizen of UK" fullWidth />
        </Grid>
      </Grid> */}
    </>
  );
}

export default AddressForm;
