import store from "../store";
import { showSnackbarAction } from "../store/actions/snackbar";
import messages from '../assets/Local/messages';

// To show error message that returned from backend
export function dispatchSnackbarError(data) {
  if (data) {
    const errorMsg = data.error.message;
    store.dispatch(showSnackbarAction(errorMsg, "error"));
  }
}
// To show success message after any success request if needed
export function dispatchSnackbarSuccess(message) {
  const lang = store.getState().locale.lang;
  store.dispatch(
    showSnackbarAction(messages[lang].snackbar[message], "success")
  );
}

