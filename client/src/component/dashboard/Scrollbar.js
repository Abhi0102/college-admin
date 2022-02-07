// import PropTypes from "prop-types";
// import SimpleBarReact from "simplebar-react";
// // material
// import { alpha, styled } from "@mui/material/styles";
// import { Box } from "@mui/material";

// // ----------------------------------------------------------------------

// const RootStyle = styled("div")({
//   flexGrow: 1,
//   height: "100%",
//   overflow: "hidden",
// });

// // const styles = theme => ({
// //     paper: {
// //       width: '100%',
// //       marginTop: theme.spacing.unit * 3,
// //       overflowX: 'auto',
// //     },
// //   });

// const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
//   maxHeight: "100%",
//   "& .simplebar-scrollbar": {
//     "&:before": {
//       backgroundColor: alpha(theme.palette.grey[600], 0.48),
//     },
//     "&.simplebar-visible:before": {
//       opacity: 1,
//     },
//   },
//   "& .simplebar-track.simplebar-vertical": {
//     width: 10,
//   },
//   "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
//     height: 6,
//   },
//   "& .simplebar-mask": {
//     zIndex: "inherit",
//   },
// }));

// // ----------------------------------------------------------------------

// Scrollbar.propTypes = {
//   children: PropTypes.node.isRequired,
//   sx: PropTypes.object,
// };

// export default function Scrollbar({ children, sx, ...other }) {
//   const isMobile =
//     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//       navigator.userAgent
//     );

//   if (isMobile) {
//     return (
//       <Box sx={{ overflowX: "auto", ...sx }} {...other}>
//         {children}
//       </Box>
//     );
//   }

//   return (
//     <RootStyle>
//       <SimpleBarStyle timeout={500} clickOnTrack={false} sx={sx} {...other}>
//         {children}
//       </SimpleBarStyle>
//     </RootStyle>
//   );
// }
import React from "react";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")({
  //   flexGrow: 1,
  //   height: "100%",
  overflowX: "auto",
  border: "2px solid blue",
});

function Scrollbar({ children, sx, ...other }) {
  return <RootStyle>{children}</RootStyle>;
}

export default Scrollbar;
