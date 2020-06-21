import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function SelectComponent({
  list,
  name,
  value,
  label,
  handleChange,
  isMultiple,
  isRequired,
  className
}) {
  const classes = useStyles();
  const renderMenuList = () => {
    return list.map((item, index) => {
      return (
        <MenuItem key={index} value={item.value}>
          {item.content}
        </MenuItem>
      );
    });
  };

  return (
      <div>
      <FormControl variant="outlined" className={`my-3 ${classes.formControl} ${className ? className : ""}`}>
        <InputLabel>{label}{isRequired && '*'}</InputLabel>
        <Select
          name={name}
          value={value}
          onChange={handleChange}
          label={label}
          multiple={isMultiple}
          fullWidth
        >
          {renderMenuList()}
        </Select>
      </FormControl>
    </div>
  );
}
