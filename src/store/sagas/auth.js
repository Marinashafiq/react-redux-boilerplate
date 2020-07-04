import { call, put , takeLatest } from "redux-saga/effects";
import API from "../../network/apis/auth";
import * as ACTIONS from "../actions/auth";
import { dispatchSnackbarError } from "../../utils/Shared";
import * as TYPES from "../types/auth";

// Replace with your sagas
export function* feature1Saga() {
  try {
    const response = yield call(API.apiExampleRequest);
    yield put(ACTIONS.feature1ActionReceive(response.data));
  } catch (err) {
    dispatchSnackbarError(err.response.data);
  }
}



export function* authSagas() {
  yield takeLatest(TYPES.GET_DATA_REQUEST, feature1Saga);
}
