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
import { useDispatch, useSelector } from "react-redux";
// import { formDetail } from "../student-profile/Constants";
import { initialValues, model } from "../student-profile/FormModel";
import EducationHistory from "../student-profile/EducationHistory";
import { makeStyles } from "@mui/styles";
import validationSchema from "./ValidationSchema";
import Overview from "./Overview";
import { addStudent } from "../../../actions/fetchStudent";

// const init = {
//   aadhaarNumber: "329652318465",
//   admDate: "2021-12-27T13:28:03.000Z",
//   annualIncome: "400000",
//   appNo: "84",
//   category: "General",
//   dateOfBirth: "2001-03-16T13:28:40.000Z",
//   documentCompleted: "Yes",
//   durationOfResidance: "20",
//   emailId: "xyz@gmail.com",
//   examinationPassed: "Intermediate",
//   fatherName: "Vinod Kumar",
//   gaurdianAddress: "Hill Bypass Road, Kharkhari, Haridwar",
//   gaurdianMobileNumber: "6399041731",
//   gaurdianName: "Vinod Kumar",
//   gaurdianRelationship: "Father",
//   gender: "Male",
//   instituteRegion: "Urban",
//   lastAttended: "S.H.S.D Inter College",
//   mobileNumber: "6399041731",
//   motherName: "Babita",
//   permanentAddress: "Hill Bypass Road, Kharkhari, Haridwar",
//   qualification: [
//     ,
//     {
//       examination: "High School",
//       year: "2019",
//       board: "U.K. Board",
//       marks: "42.4%",
//       subjects:
//         "Hindi, Sanskrit, Mathematics, Science, Social Science, English",
//     },
//     {
//       examination: "Intermediate",
//       year: "2021",
//       board: "U.K. Board",
//       marks: "52.4",
//       subjects: "Hindi, Sanskrit, Political Science, Psychology, Sociology",
//     },
//   ],
//   religion: "Hindu",
//   residanceOfUK: "Yes",
//   residanceRegion: "Urban",
//   state: "Uttarakhand",
//   studentClass: "B.A. I",
//   studentName: "Priyanshu",
//   subCategory: "",
//   subject1: "Hindi",
//   subject2: "Political Science",
//   subject3: "Sanskrit",
//   vatsalyaYojana: "No",
// };

function getSteps(formDetail) {
  const steps = [
    ...formDetail,
    { title: "Education History" },
    { title: "Overview" },
  ];
  return steps;
}

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

function renderStepForm(step, values, formDetail) {
  const steps = getSteps(formDetail);
  const { title } = steps[step];
  // return <Overview values={values} />;
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
          { examination: "", year: "", board: "", marks: "", subjects: "" },
        ];
      }
      return (
        <EducationHistory
          formField={steps[step]}
          values={values}
          isNewStudent={true}
        />
      );
    case "Overview":
      return <Overview values={values} />;

    default:
      return null;
  }
}

function StudentForm(props) {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.constants);
  const [activeStep, setactiveStep] = useState(0);
  const [response, setResponse] = useState({});
  const classes = useStyles();
  const initials = initialValues();
  const formDetail = [...selector.fields];
  const steps = getSteps(formDetail);
  const isLastStep = activeStep === steps.length - 1;
  const handleBack = () => {
    setactiveStep(activeStep - 1);
    setResponse({});
  };

  const _submitForm = async (values, actions) => {
    let data = { ...values };

    data.qualification = JSON.stringify(values.qualification);

    const res = await dispatch(addStudent(data));
    setResponse(res);
  };
  const _handleSubmit = (values, actions) => {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setactiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const handleAddMore = (resetForm) => {
    resetForm();
    setactiveStep(0);
    setResponse({});
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
          <Formik
            onSubmit={_handleSubmit}
            initialValues={initials}
            validationSchema={validationSchema[steps[activeStep].title]}
          >
            {({ values, errors, isSubmitting, resetForm }) => (
              <Form id={model.formId}>
                {renderStepForm(activeStep, values, formDetail)}

                {response.data && (
                  <Typography
                    color={response.data.success ? "success.light" : "error"}
                  >
                    * {response.data.message}
                  </Typography>
                )}

                {!response.data || !response.data.success ? (
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
                      color={isLastStep ? "success" : "info"}
                      sx={{ marginLeft: 2 }}
                    >
                      {isLastStep ? "Finish" : "Next"}
                    </Button>
                  </Box>
                ) : (
                  <Box className={classes.buttons} mt={3}>
                    <Button
                      variant="outlined"
                      color="warning"
                      onClick={() => handleAddMore(resetForm)}
                    >
                      Add More
                    </Button>
                  </Box>
                )}
                {/* <pre>{JSON.stringify(values)}</pre> */}
              </Form>
            )}
          </Formik>
        </Card>
      </Container>
    </>
  );
}

export default StudentForm;
