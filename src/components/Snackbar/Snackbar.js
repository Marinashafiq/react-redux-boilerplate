import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useSelector, useDispatch } from "react-redux";
import { clearSnackbar } from "../../store/actions/snackbar";
import { injectIntl } from "react-intl";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function SnackbarMaterial(props) {
  const { isOpen, message, type } = useSelector(state => state.snackbar);
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(clearSnackbar());
  };
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      key={`bottom,center`}
      onClose={() => dispatch(clearSnackbar())}
    >
      <Alert onClose={handleClose} severity={type} className="medium_font">
        {message}
      </Alert>
    </Snackbar>
  );
}
