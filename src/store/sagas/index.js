import { takeLatest } from "redux-saga/effects";
import * as TYPES_HOME from "../types/Home";
import * as SAGAS_HOME from "./Home";

export function* watchAll() {
  yield takeLatest(TYPES_AUTH.TYPES, SAGAS_AUTH.REQUEST_API);
}
