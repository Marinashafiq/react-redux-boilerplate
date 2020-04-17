import React from "react";
import { injectIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert as AlertMaterial } from "@material-ui/lab";
import { clearSnackbar } from "../../store/actions/Snackbar";

function Alert(props) {
  return <AlertMaterial elevation={6} variant="filled" {...props} />;
}

export function SnackbarMaterial(props) {
  const {
    successSnackbarMessage,
    successSnackbarOpen,
    snacknarType
  } = useSelector(state => state.snackbar);
  const dispatch = useDispatch();
  const { messages } = props.intl;
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(clearSnackbar());
  };
  return (
    <Snackbar
      open={successSnackbarOpen}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      key={`bottom,center`}
      onClose={() => dispatch(clearSnackbar())}
    >
      <Alert
        onClose={handleClose}
        severity={snacknarType}
        className="medium_font"
      >
        {snacknarType === "success" &&
          successSnackbarMessage === "success" &&
          messages.shared.done}
        {snacknarType === "success" &&
          successSnackbarMessage === "saved" &&
          messages.shared.savedSuccessfuly}
        {snacknarType === "success" &&
          successSnackbarMessage === "successApply" &&
          messages.snackbar.successApply}
        {snacknarType === "error" && successSnackbarMessage}
      </Alert>
    </Snackbar>
  );
}

const SnackbarMaterialComponent = injectIntl(SnackbarMaterial);

export default SnackbarMaterialComponent;
