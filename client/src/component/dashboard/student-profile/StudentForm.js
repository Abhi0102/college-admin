import { Avatar, Button, Card, Grid, Stack } from "@mui/material";
import React, { useState } from "react";
// import PersonalDetail from "./PersonalDetail";
import { Form, Formik } from "formik";
import { initialValues, filledInitialValues, model } from "./FormModel";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// import FamilyDetails from "./FamilyDetails";
// import AddressForm from "./AddressForm";
// import EducationForm from "./EducationForm";
import EducationHistory from "./EducationHistory";
import validationSchema from "./FormValidations";
import { formDetail } from "./Constants";
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
  const dispatch = useDispatch();
  const filledValues = filledInitialValues(student);
  const initials = initialValues();
  const [isDisabled, setisDisabled] = useState(true);
  console.log(student.qualification ? "Hey" : "Nah");
  // console.log("Filled Values", filledValues);
  const _handleSubmit = (values, action) => {
    setisDisabled(!isDisabled);
    const changedField = {};
    for (let i in values) {
      // console.log(i);
      if (values[i] !== student[i]) {
        changedField[i] = values[i];
      }
    }
    const changedField2 = JSON.stringify(changedField);
    console.log(changedField2);
    console.log(params);

    dispatch(updateStudentDetail(params.id, changedField2));

    // console.log(student.qualification);
    // console.log(values, action);
  };

  const handleEdit = () => {
    setisDisabled(!isDisabled);
    // console.log(validationSchema);
  };
  return (
    <>
      <Formik
        initialValues={filledValues}
        validationSchema={validationSchema[0]}
        onSubmit={_handleSubmit}
      >
        {({ values, errors }) => (
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
                    <Button
                      type="submit"
                      variant="contained"
                      // size="small"
                      color="success"
                    >
                      Submit
                    </Button>
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
