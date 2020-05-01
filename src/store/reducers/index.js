import { combineReducers } from "redux";
import locale from "./Lang";
import loader from "./Loader";
import snackbar from "./Snackbar";
import ReducerExample from "./ReducerExample";

export default combineReducers({
  locale,
  loader,
  snackbar,
  ReducerExample
});
