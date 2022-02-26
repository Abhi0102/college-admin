import { Container, Typography, Grid } from "@mui/material";
import React from "react";
import DashboardCategorywise from "./DashboardCategorywise";

import DashboardClasswise from "./DashboardClasswise";
import DashboardGenderwise from "./DashboardGenderwise";

function DashboardHome(props) {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={2}>
        <Grid item md={8} sm={12} xs={12}>
          <DashboardClasswise />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <DashboardGenderwise />
        </Grid>
        <Grid item md={5} sm={12} xs={12}>
          <DashboardCategorywise />
        </Grid>
      </Grid>
      {/* <Card>
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          width="500"
        />
      </Card> */}
    </Container>
  );
}

export default DashboardHome;
