import React from "react";
import DateTimePicker from "@mui/lab/DateTimePicker";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default (props) => {
  const {value, setValue, use12Hours, readonly, placeholder, dateFormat, timeFormat, valueFormat, customProps} = props;

  const formatSingleValue = (value) => {
    return value && value.isValid() ? value.format(valueFormat) : undefined;
  };

  const handleChange = (value) => {
    setValue(formatSingleValue(value));
  };

  const dateTimeFormat = dateFormat + " " + timeFormat;
  
  return (
    <FormControl>
      <DateTimePicker
        readOnly={readonly}
        disabled={readonly}
        ampm={!!use12Hours}
        toolbarPlaceholder={!readonly ? placeholder : ""}
        inputFormat={dateTimeFormat}
        value={value || null}
        onChange={handleChange}
        renderInput={(props) => <TextField size="small" {...props} />}
        {...customProps}
      />
    </FormControl>
  );
};