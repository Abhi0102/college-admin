import { Grid, Typography } from "@mui/material";
import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import DatePickerField from "../../input-fields/DatePickerField";
import { personalFields } from "./Constants";

function PersonalDetail(props) {
  //   console.log(props.formField);
  const { isDisabled } = props;
  const formData = { ...props.formField };
  //   console.log(formData);
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Personal Details
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {personalFields.map((field) => {
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
    </>
  );
}

export default PersonalDetail;
