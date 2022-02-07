import {
  Container,
  Typography,
  Card,
  Stepper,
  Step,
  StepLabel,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { Form, Formik } from "formik";
import { TextField } from "formik-mui";
import React, { useState } from "react";
import GlobalForm from "../student-profile/GlobalForm";

import { formDetail } from "../student-profile/Constants";
import { initialValues, model } from "../student-profile/FormModel";
import EducationHistory from "../student-profile/EducationHistory";
import { makeStyles } from "@mui/styles";

const steps = [...formDetail, { title: "Education History" }];

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

function renderStepForm(step, values) {
  const { title } = steps[step];
  switch (title) {
    case "Personal Details":
    case "Family Details":
    case "Address Details":
    case "Education Qualification":
      return (
        <GlobalForm
          formDetail={steps[step]}
          formField={model.formField}
          isNewStudent={true}
        />
      );
    case "Education History":
      if (!values.qualification) {
        values["qualification"] = [
          { examination: "", year: "", board: "", marks: "", subject: "" },
        ];
      }
      return (
        <EducationHistory
          formField={steps[step]}
          values={values}
          isNewStudent={true}
        />
      );
    default:
      return null;
  }
  // if (title === "Education History") {
  //   if (!values.qualification) {
  //     values["qualification"] = [
  //       { examination: "", year: "", board: "", marks: "", subject: "" },
  //     ];
  //   }
  //   return (
  //     <EducationHistory
  //       formField={steps[step]}
  //       values={values}
  //       isNewStudent={true}
  //     />
  //   );
  // }
  // return (
  //   <GlobalForm
  //     formDetail={steps[step]}
  //     formField={model.formField}
  //     isNewStudent={true}
  //   />
  // );

  // return steps[step].title;
}

function StudentForm(props) {
  const [activeStep, setactiveStep] = useState(0);
  const classes = useStyles();

  const isLastStep = activeStep === steps.length - 1;
  const handleBack = () => {
    setactiveStep(activeStep - 1);
  };

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const _submitForm = async (values, actions) => {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setactiveStep(activeStep + 1);
  };
  const _handleSubmit = (values, actions) => {
    if (isLastStep) {
      console.log(values);
    } else {
      setactiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
      console.log(values);
    }
  };
  return (
    <>
      <Container>
        <Typography variant="h4" gutterBottom>
          Student Form
        </Typography>
        <Card sx={{ px: 4, py: 4, borderRadius: 4 }} elevation={4}>
          <Stepper activeStep={activeStep}>
            {steps.map((element) => (
              <Step key={element.title}>
                <StepLabel>{element.title}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Formik onSubmit={_handleSubmit} initialValues={initialValues}>
            {({ values, isSubmitting }) => (
              <Form id={model.formId}>
                {renderStepForm(activeStep, values)}

                <Box className={classes.buttons} mt={3}>
                  {activeStep !== 0 && (
                    <Button
                      onClick={handleBack}
                      color="error"
                      variant="outlined"
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    type="submit"
                    variant="contained"
                    color="info"
                    sx={{ marginLeft: 2 }}
                  >
                    Next
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Card>
      </Container>
    </>
  );
}

export default StudentForm;
