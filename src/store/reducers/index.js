import { combineReducers } from "redux";
import lang from "./Lang";
import loader from "./Loader";
import snackbar from "./Snackbar";
import ReducerExample from "./ReducerExample";

export default combineReducers({
  lang,
  loader,
  snackbar,
  ReducerExample
});
