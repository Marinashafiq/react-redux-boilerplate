import { takeLatest } from "redux-saga/effects";
import * as TYPES_HOME from "../types/TypesExample";
import * as SAGAS_HOME from "./SagasExample";

export function* watchAll() {
  yield takeLatest(TYPES_HOME.GET_DATA_REQUEST, SAGAS_HOME.homeSagaRequest);
}
