import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export function CheckboxComponent({ isChecked , disabled , content, handleChange , name }) {
  return (
    <div>
      <Checkbox
        disabled={disabled}
        edge="start"
        name={name}
        checked={isChecked}
        disableRipple
        onChange={e => handleChange(e)}
      />
      <label className="medium_font">{content}</label>
    </div>
  );
}
