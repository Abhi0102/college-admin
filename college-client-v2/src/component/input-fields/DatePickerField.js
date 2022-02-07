import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import React, { useEffect, useState } from "react";
import { useField } from "formik";
import { TextField, FormHelperText } from "@mui/material";

function DatePickerField(props) {
  const [field, meta, helper] = useField(props);
  const { touched, error } = meta;
  const { setValue } = helper;
  const isError = touched && error && true;
  const { value } = field;
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (value) {
      const date = new Date(value);
      setSelectedDate(date);
    }
  }, [value]);

  function _onChange(date) {
    if (date) {
      setSelectedDate(date);
      try {
        const ISODateString = date.toISOString();
        setValue(ISODateString);
      } catch (error) {
        setValue(date);
      }
    } else {
      setValue(date);
    }
  }

  //   console.log(field);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        {...field}
        {...props}
        value={selectedDate}
        onChange={_onChange}
        error={isError}
        invalidDateMessage={isError && error}
        helperText={isError && error}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            helperText={params?.inputProps?.placeholder}
          />
        )}
      />
    </LocalizationProvider>
  );
}

export default DatePickerField;
