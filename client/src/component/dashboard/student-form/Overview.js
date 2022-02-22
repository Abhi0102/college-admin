import { Typography, Grid, Box } from "@mui/material";
import React from "react";
import { model } from "../student-profile/FormModel";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  bold: {
    fontWeight: 800,
  },
});
function Overview({ values }) {
  const classes = useStyles();
  const { formField } = model;

  //   console.log(formField);
  //   console.log(values);

  return (
    <>
      <Grid container mt={4} spacing={2} my={4}>
        {Object.keys(formField).map((element) => {
          return element === "qualification" ? (
            <React.Fragment key={element}>
              <Grid item md={12} sm={12} xs={12}>
                <Typography variant="subtitle2" className={classes.bold}>
                  {formField[element].label}
                </Typography>
              </Grid>
              <Grid item sm={2} xs={2} md={2}>
                <Typography variant="subtitle2" className={classes.bold}>
                  S.No.
                </Typography>
              </Grid>
              {Object.keys(formField[element].data).map((ele) => {
                // console.log(ele);
                return (
                  <Grid item key={ele} sm={2} xs={2} md={2}>
                    <Typography variant="subtitle2" className={classes.bold}>
                      {formField[element].data[ele].label}
                    </Typography>
                  </Grid>
                );
              })}

              {values[element].map((ele) => {
                return (
                  <React.Fragment key={values[element].indexOf(ele)}>
                    <Grid item sm={2} md={2} xs={2}>
                      <Typography variant="subtitle2" className={classes.bold}>
                        {values[element].indexOf(ele) + 1}
                      </Typography>
                    </Grid>
                    {Object.keys(ele).map((field) => {
                      //   console.log(values[ele]);
                      return (
                        <Grid item key={field} sm={2} md={2} xs={2}>
                          <Typography variant="subtitle2">
                            {ele[field]}
                          </Typography>
                        </Grid>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </React.Fragment>
          ) : (
            <React.Fragment key={element}>
              <Grid item md={3} sm={6} xs={6}>
                <Typography variant="subtitle2" className={classes.bold}>
                  {formField[element].label}
                </Typography>
              </Grid>

              <Grid item md={3} sm={6} xs={6}>
                <Typography variant="subtitle2">
                  : &nbsp;{" "}
                  {element === "dateOfBirth" || element === "admDate"
                    ? new Date(values[element]).toLocaleDateString("en-GB")
                    : values[element]}
                </Typography>
              </Grid>
            </React.Fragment>
          );
        })}
      </Grid>
      {/* <Grid container mt={4}>
        {Object.keys(formField).map((element) => {
          return element === "qualification" ? (
            <Grid container md={6} sm={12} xs={12} key={element}>
              <Typography variant="subtitle2">
                {formField[element].label}
              </Typography>
              {Object.keys(formField[element].data).map((element) => {
                <Grid item key={element}>
                  {element.label}
                </Grid>;
              })}
            </Grid>
          ) : (
            <Grid key={element} container md={6} sm={12} xs={12}>
              <Grid item md={3} sm={6} xs={6}>
                <Typography variant="subtitle2">
                  {formField[element].label}
                </Typography>
              </Grid>
              <Grid item md={3} mx={4}>
                <Typography variant="subtitle2" mb={3}>
                  : &nbsp;{" "}
                  {element === "dateOfBirth"
                    ? new Date(values[element]).toLocaleDateString()
                    : values[element]}
                </Typography>
              </Grid>
            </Grid>
          ); */}
      {/* // <Grid key={element} container md={6} sm={12} xs={12}>
          //   <Grid item md={3} sm={6} xs={6}>
          //     <Typography variant="subtitle2" mb={3}>
          //       {formField[element].label}
          //     </Typography>
          //   </Grid>
          //   <Grid item md={3} mx={4}>
          //     <Typography variant="subtitle2" mb={3}>
          //       : &nbsp;
          //       {element === "dateOfBirth" */}
      {/* //         ? new Date(values[element]).toLocaleDateString()
          //         : element !== "qualification"
          //         ? values[element]
          //         : null}
          //       {}
          //     </Typography> */}
      {/* //   </Grid> */}
      {/* // </Grid> */}
      {/* //     })} */}
      {/* //   </Grid> */}
    </>
  );

  //   Object.keys(formField).map((element) => {
  //     return <Typography>{formField[element].label}</Typography>;
  //   });
}

export default Overview;
