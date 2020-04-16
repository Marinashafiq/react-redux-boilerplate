import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

export default function Navbar() {

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">
            News
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
