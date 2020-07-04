import { all } from "redux-saga/effects";
import { authSagas } from "./auth";

export function* watchSagas() {
  yield all([authSagas()]);
}
