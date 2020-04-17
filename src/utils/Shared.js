import store from "../store";
// import { showSuccessSnackbar } from "../store/actions/Snackbar";

export function dispatchError(data) {
  if (data) {
    const errorMsg = data.error.message;
    // store.dispatch(showSuccessSnackbar(errorMsg, "error"));
  }
}
