"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _material = require("@mui/material");

var _system = require("@mui/system");

var _react = _interopRequireDefault(require("react"));

var _reactApexcharts = _interopRequireDefault(require("react-apexcharts"));

var _styles = require("@mui/material/styles");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
var _default = DashboardCategorywise;
exports["default"] = _default;