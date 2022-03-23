import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Toolbar, Button, Typography, CircularProgress } from "@mui/material";
import { getFormBody, getHeaderWithAuth } from "../../../helpers/utils";
import { saveAs } from "file-saver";
import axios from "axios";
import { APIUrls } from "../../../helpers/url";

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: "flex",
  justifyContent: "space-between",
  //   justifyContent: "flex-end",
  padding: theme.spacing(0, 1, 0, 3),
}));

function TableToolbar({ numSelected, selected }) {
  const [generating, setGenerating] = useState(false);
  const handleGenIDCard = () => {
    setGenerating(true);
    // setTimeout(() => {
    //   setGenerating(false);
    // }, 5000);
    axios
      .post(APIUrls.getIdCards(), getFormBody(selected), {
        headers: getHeaderWithAuth(),
      })
      .then(() =>
        axios.get(APIUrls.getIdCards(), {
          responseType: "blob",
          headers: getHeaderWithAuth(),
        })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "IdentityCard.pdf");
        setGenerating(false);
      })
      .catch((err) => {
        console.log("Error - ", err.response.data);
        setGenerating(false);
      });
  };
  return (
    <RootStyle>
      <Typography component="div" variant="subtitle1">
        {numSelected} selected
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        disabled={numSelected === 0 || generating}
        onClick={(e) => handleGenIDCard(e)}
      >
        {generating ? (
          <>
            <CircularProgress color="secondary" size={24} />
            &nbsp; Genrating...
          </>
        ) : (
          "Generate ID Card"
        )}
      </Button>
    </RootStyle>
  );
}
export default TableToolbar;
