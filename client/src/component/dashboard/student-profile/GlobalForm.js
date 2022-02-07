import { Grid, Typography } from "@mui/material";
import React from "react";
import InputField from "../../input-fields/InputField";
import SelectField from "../../input-fields/SelectField";
import DatePickerField from "../../input-fields/DatePickerField";

function GlobalForm(props) {
  console.log();
  const { isDisabled, formDetail, isNewStudent } = props;
  const formData = { ...props.formField };

  return (
    <>
      {!isNewStudent && (
        <Typography variant="h5" gutterBottom>
          {formDetail.title}
        </Typography>
      )}

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {formDetail.data.map((field) => {
          const fieldData = formData[field.field];
          // console.log(field);
          return (
            <Grid item md={6} sm={12} key={field.field}>
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

export default GlobalForm;
