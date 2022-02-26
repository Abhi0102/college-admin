import React from "react";
import { Container, Typography, Card, CardHeader } from "@mui/material";
import { Box } from "@mui/system";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

function getOptions(data) {
  const keys = Object.keys(data);
  const values = Object.values(data);

  let options = {
    //   tooltip: { marker: { show: false } },
    series: [
      {
        data: values,
      },
    ],
    chart: {
      type: "bar",
      // height: 350,
    },
    grid: {
      strokeDashArray: 3,
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        barHeight: "28%",
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: keys,
    },
  };

  return options;
}

function DashboardClasswise(props) {
  const selector = useSelector(
    (state) => state.constants.classwiseStudentStats
  );

  const options = getOptions(selector);
  const sum = Object.values(selector).reduce((a, b) => a + b, 0);
  return (
    <Card sx={{ borderRadius: 8 }} elevation={4}>
      <CardHeader title="Class Wise" subheader={`Total Students - ${sum}`} />
      <Box sx={{ mx: 3 }} dir="ltr">
        <Chart
          options={options}
          series={options.series}
          type="bar"
          height={300}
        />
      </Box>
    </Card>
  );
}

export default DashboardClasswise;
