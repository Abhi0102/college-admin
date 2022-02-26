import { Card, CardHeader } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Chart from "react-apexcharts";
import { useTheme, styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

// ************************  Initial Ideal to show data using radar chart  ************************

// const CHART_HEIGHT = 392;
// const LEGEND_HEIGHT = 72;

// const ChartWrapperStyle = styled("div")(({ theme }) => ({
//   height: CHART_HEIGHT,
//   marginTop: theme.spacing(2),
//   "& .apexcharts-canvas svg": {
//     height: CHART_HEIGHT,
//   },
//   "& .apexcharts-canvas svg,.apexcharts-canvas foreignObject": {
//     overflow: "visible",
//   },
//   "& .apexcharts-legend": {
//     height: LEGEND_HEIGHT,
//     alignContent: "center",
//     position: "relative !important",
//     borderTop: `solid 1px ${theme.palette.divider}`,
//     top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
//   },
// }));

// const CHART_DATA = [{ name: "Student", data: [44, 76, 78, 13, 43] }];

// function DashboardCategorywise(props) {
//   const theme = useTheme();
//   const selector = useSelector(
//     (state) => state.constants.categorywiseStudentStats
//   );
//   const keys = Object.keys(selector);
//   const values = Object.values(selector);
//   const chartData = [{ name: "Students", data: values }];
//   const chartOptions = {
//     stroke: { width: 2 },
//     fill: { opacity: 0.48 },
//     legend: { floating: true, horizontalAlign: "center" },
//     xaxis: {
//       categories: keys,
//       labels: {
//         style: {
//           colors: [
//             theme.palette.text.secondary,
//             theme.palette.text.secondary,
//             theme.palette.text.secondary,
//             theme.palette.text.secondary,
//             theme.palette.text.secondary,
//             theme.palette.text.secondary,
//           ],
//         },
//       },
//     },
//   };

//   return (
//     <Card sx={{ borderRadius: 8 }} elevation={4}>
//       <CardHeader title="Category Wise" />
//       <Box sx={{ mx: 3 }} dir="ltr">
//         <ChartWrapperStyle>
//           <Chart
//             type="radar"
//             series={chartData}
//             height={340}
//             options={chartOptions}
//           />
//         </ChartWrapperStyle>
//       </Box>
//     </Card>
//   );
// }

const CHART_HEIGHT = 300;
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

function DashboardCategorywise(props) {
  const theme = useTheme();
  const selector = useSelector(
    (state) => state.constants.categorywiseStudentStats
  );

  const options = getOptions(theme, selector);

  return (
    <Card sx={{ borderRadius: 8 }} elevation={4}>
      <CardHeader title="Category Wise" />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ChartWrapperStyle>
          <Chart
            type="pie"
            series={options.chartData}
            options={options.chartOptions}
            height="80%"
          />
        </ChartWrapperStyle>
      </Box>
    </Card>
  );
}

export default DashboardCategorywise;
