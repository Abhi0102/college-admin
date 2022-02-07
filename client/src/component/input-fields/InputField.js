import { TextField } from "@mui/material";
import React from "react";
import { useField } from "formik";

function InputField(props) {
  const { errorText, ...rest } = props;
  //   console.log(props);
  const [field, meta] = useField(props);

  function _renderHelperText() {
    const { touched, error } = meta;
    // console.log(touched, error);
    if (touched && error) {
      return error;
    }
  }
  //   console.log(field);
  return (
    <TextField
      {...field}
      {...rest}
      error={meta.touched && meta.error && true}
      helperText={_renderHelperText()}
    />
  );
}

export default InputField;
