import { Box, Card, CardHeader } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";
import { useTheme, styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

const CHART_HEIGHT = 320;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled("div")(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(2),

  "& .apexcharts-canvas svg": { height: CHART_HEIGHT },
  "& .apexcharts-canvas svg,.apexcharts-canvas foreignObject": {
    overflow: "visible",
  },

  "& .apexcharts-legend": {
    height: LEGEND_HEIGHT,
    alignContent: "center",
    // flexDirection: "row",
    position: "relative !important",

    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

function getOptions(theme, data) {
  const keys = Object.keys(data);
  const values = Object.values(data);

  const options = {
    chartData: values,
    chartOptions: {
      labels: keys,
      stroke: { colors: [theme.palette.background.paper] },
      legend: {
        floating: true,
        horizontalAlign: "center",
        position: "top",
        markers: {
          radius: 12,
        },
        fontWeight: 500,
        itemMargin: { horizontal: 12 },
      },
      dataLabels: { enabled: true, dropShadow: { enabled: false } },
      tooltip: {
        fillSeriesColor: false,
      },
      plotOptions: {
        pie: { donut: { labels: { show: false } } },
      },
    },
  };

  return options;
}

function DashboardGenderwise(props) {
  const selector = useSelector(
    (state) => state.constants.genderwiseStudentStats
  );
  const theme = useTheme();
  const options = getOptions(theme, selector);

  return (
    <Card sx={{ borderRadius: 8 }} elevation={4}>
      <CardHeader title="Gender Wise" />
      {/* <Box sx={{ mx: 3 }} dir="ltr"> */}
      <ChartWrapperStyle dir="ltr">
        <Chart
          type="pie"
          series={options.chartData}
          options={options.chartOptions}
          height="80%"
        />
      </ChartWrapperStyle>
      {/* </Box> */}
    </Card>
  );
}

export default DashboardGenderwise;
