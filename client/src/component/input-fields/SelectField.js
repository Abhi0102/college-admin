import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
} from "@mui/material";
import React from "react";
import { useField } from "formik";

function SelectField(props) {
  const { label, data, isDisabled, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  // console.log(rest.fullWidth);
  const { touched, error } = meta;
  const isError = touched && error && true;
  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  const inputPr = { readOnly: isDisabled };

  return (
    <FormControl {...rest} error={isError}>
      <InputLabel>{label}</InputLabel>
      <Select
        {...field}
        value={selectedValue ? selectedValue : ""}
        label={label}
        inputProps={inputPr}
      >
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {_renderHelperText()}
    </FormControl>
  );
}

export default SelectField;
