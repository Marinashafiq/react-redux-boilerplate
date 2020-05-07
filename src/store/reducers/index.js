import { combineReducers } from "redux";
import locale from "../Lang/LangReducer";
import loader from "../Loader/LoaderReducer";
import snackbar from "../Snackbar/SnackbarReducer";
import Feature1 from "../Feature1/FeatureReducer";

export default combineReducers({
  locale,
  loader,
  snackbar,
  Feature1
});
