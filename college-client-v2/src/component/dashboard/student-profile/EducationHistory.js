import { Grid, IconButton, Typography } from "@mui/material";
import { Field, FieldArray } from "formik";
import { TextField } from "formik-mui";

// import { TextField } from "@material-ui/core/TextField";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";

function EducationHistory(props) {
  const { values, isDisabled, isNewStudent } = props;

  return (
    <>
      {!isNewStudent && (
        <Typography variant="h5" gutterBottom>
          Education History
        </Typography>
      )}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item md={12}>
          <FieldArray name="qualification">
            {({ push, remove }) => (
              <>
                {/* <Grid item>
                  <Typography> Hey there</Typography>
                </Grid> */}

                {values.qualification.map((v, index) => (
                  <Grid container spacing={2} sx={{ mb: 2 }} key={index}>
                    {/* {console.log(v)} */}
                    <Grid item md={2} sm={6}>
                      <Field
                        component={TextField}
                        name={`qualification[${index}].examination`}
                        label="Examination"
                        disabled={false}
                        inputProps={{ readOnly: isDisabled }}
                      />
                    </Grid>
                    <Grid item md={1} sm={6}>
                      <Field
                        name={`qualification[${index}].year`}
                        component={TextField}
                        label="Year"
                        disabled={false}
                        inputProps={{ readOnly: isDisabled }}
                      />
                    </Grid>
                    <Grid item md={2} sm={6}>
                      <Field
                        name={`qualification[${index}].board`}
                        component={TextField}
                        label="Board"
                        disabled={false}
                        inputProps={{ readOnly: isDisabled }}
                      />
                    </Grid>
                    <Grid item md={1} sm={6}>
                      <Field
                        name={`qualification[${index}].marks`}
                        label="Marks"
                        component={TextField}
                        disabled={false}
                        inputProps={{ readOnly: isDisabled }}
                      />
                    </Grid>
                    <Grid item md={5} sm={12}>
                      <Field
                        name={`qualification[${index}].subjects`}
                        label="Subjects"
                        component={TextField}
                        fullWidth
                        disabled={false}
                        inputProps={{ readOnly: isDisabled }}
                      />
                    </Grid>
                    {values.qualification.length !== 1 && (
                      <Grid item md={1}>
                        <IconButton
                          onClick={() => remove(index)}
                          aria-label="delete"
                          size="large"
                          color="error"
                          disabled={isDisabled}
                          //   inputProps={{ readOnly: isDisabled }}
                          // disabled
                        >
                          {/* <Button onClick={() => remove(index)} color="error"> */}
                          <RemoveCircleOutlineOutlinedIcon fontSize="inherit" />
                          {/* </Button> */}
                        </IconButton>
                      </Grid>
                    )}
                  </Grid>
                ))}
                <Grid item>
                  <IconButton
                    onClick={() =>
                      push({
                        examination: "",
                        year: "",
                        board: "",
                        marks: "",
                        subjects: "",
                      })
                    }
                    aria-label="add"
                    size="large"
                    color="primary"
                    disabled={isDisabled}
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                </Grid>
              </>
            )}
          </FieldArray>
        </Grid>
      </Grid>
    </>
  );
}

export default EducationHistory;
