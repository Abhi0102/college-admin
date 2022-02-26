import {
  Avatar,
  Button,
  Card,
  Grid,
  Stack,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
// import PersonalDetail from "./PersonalDetail";
import { Form, Formik } from "formik";
import { initialValues, filledInitialValues, model } from "./FormModel";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import FamilyDetails from "./FamilyDetails";
// import AddressForm from "./AddressForm";
// import EducationForm from "./EducationForm";
import EducationHistory from "./EducationHistory";
import validationSchema from "./FormValidations";
// import { formDetail } from "./Constants";
import GlobalForm from "./GlobalForm";
import { compareAsc } from "date-fns";
import { updateStudentDetail } from "../../../actions/fetchStudent";

// const formDetail = [
//   { title: "Personal Details", data: personalFields },
//   { title: "Family Details", data: familyFields },
//   { title: "Address Details", data: addressFields },
//   { title: "Education Qualification", data: educationFields },
// ];

function StudentForm(props) {
  const { student } = props;
  const params = useParams();
  const selector = useSelector((state) => state.constants);
  const formDetail = [...selector.fields];
  const dispatch = useDispatch();
  const filledValues = filledInitialValues(student);
  const initials = initialValues();

  const [isDisabled, setisDisabled] = useState(true);

  // console.log("Filled Values", filledValues);
  const _handleSubmit = async (values, action) => {
    setisDisabled(!isDisabled);
    const changedField = {};
    for (let i in values) {
      // console.log(i);
      if (values[i] !== student[i]) {
        changedField[i] = values[i];
      }
    }
    const changedField2 = JSON.stringify(changedField);

    await dispatch(updateStudentDetail(params.id, changedField2));

    // console.log(student.qualification);
    // console.log(values, action);
  };

  const handleEdit = () => {
    setisDisabled(!isDisabled);
    // console.log(validationSchema);
  };

  const handleBack = (resetForm) => {
    resetForm();
    setisDisabled(!isDisabled);
  };
  return (
    <>
      <Formik
        initialValues={filledValues}
        validationSchema={validationSchema[0]}
        onSubmit={_handleSubmit}
      >
        {({ resetForm, values, errors, isSubmitting }) => (
          <Form id={model.formId}>
            <Grid container spacing={2}>
              <Grid item md={8}>
                <Stack spacing={4}>
                  {formDetail.map((detail) => (
                    <Card
                      sx={{ px: 4, py: 4, borderRadius: 4 }}
                      elevation={4}
                      key={detail.title}
                    >
                      <GlobalForm
                        formField={model.formField}
                        isDisabled={isDisabled}
                        formDetail={detail}
                        isNewStudent={false}
                      />
                    </Card>
                  ))}
                </Stack>
              </Grid>
              <Grid item md={4}>
                <Stack spacing={2} sx={{ position: "sticky", top: 100 }}>
                  {/* <pre>{JSON.stringify({ values, errors }, null, 4)}</pre> */}
                  <Card
                    sx={{
                      px: 4,
                      py: 4,
                      borderRadius: 4,
                      // width: "100%",
                    }}
                    elevation={4}
                  >
                    <Avatar sx={{ mx: "40%", my: "20%" }} />
                  </Card>
                  {isDisabled && (
                    <Button
                      variant="contained"
                      // size="small"
                      onClick={handleEdit}
                    >
                      Edit
                    </Button>
                  )}
                  {!isDisabled && (
                    <>
                      <Button
                        fullWidth
                        variant="outlined"
                        color="warning"
                        onClick={() => handleBack(resetForm)}
                      >
                        Back
                      </Button>

                      <Button
                        type="submit"
                        variant="contained"
                        // size="small"
                        color="success"
                        disabled={isSubmitting}
                        fullWidth
                      >
                        {isSubmitting ? (
                          <>
                            <CircularProgress color="secondary" size={24} />
                            &nbsp; Submitting...
                          </>
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    </>
                  )}
                </Stack>
              </Grid>
              <Grid item>
                <Card sx={{ px: 4, py: 4, borderRadius: 4 }} elevation={4}>
                  <EducationHistory
                    formField={model.formField}
                    isDisabled={isDisabled}
                    values={values}
                    isNewStudent={false}
                  />
                </Card>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default StudentForm;
