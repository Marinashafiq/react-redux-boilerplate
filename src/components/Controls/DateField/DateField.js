import React from "react";
import enLocale from "date-fns/locale/en-US";
import arLocale from "date-fns/locale/ar-SA";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import { useSelector } from "react-redux";

export const DateField = ({
  value,
  label,
  handleChange,
  name,
  error,
  helperText,
  disableFuture,
  disablePast,
  minDate,
  invalidDateMessage,
  isRequired
}) => {
  const lang = useSelector(state => state.lang);
  return (
    <MuiPickersUtilsProvider
      utils={DateFnsUtils}
      locale={lang === "en" ? enLocale : arLocale}
    >
      <KeyboardDatePicker
        disableToolbar
        disableFuture={disableFuture}
        disablePast={disablePast}
        autoOk
        className="w-100 my-3"
        orientation="portrait"
        value={value}
        inputVariant="outlined"
        variant="inline"
        format="dd/MM/yyyy"
        label={isRequired ? label + "*" : label}
        InputAdornmentProps={{ position: "end" }}
        onChange={date => handleChange(date, name )}
        invalidDateMessage={invalidDateMessage}
        minDate={minDate}
      />
    </MuiPickersUtilsProvider>
  );
};
