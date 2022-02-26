import { Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Icon } from "@iconify/react";
const useStyles = makeStyles({
  error: {
    color: "gray",
    textTransform: "capitalize",
    fontSize: "2rem",
    marginTop: "10%",
    // "&::before": {
    // content: '"  "', // "''" will also work.
    // },
  },
});

function NoDataFound({ error }) {
  const classes = useStyles();
  return (
    <Typography className={classes.error}>
      <Icon icon="fluent:emoji-sad-slight-20-regular" inline={true} />
      &nbsp;
      {error}
    </Typography>
  );
}

export default NoDataFound;
