import { call, put } from "redux-saga/effects";
import API from "../../network/apis/APIExample";
import * as ACTIONS from "../actions/Feature1";
import { dispatchSnackbarError } from "../../utils/Shared";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "../types/Feature1Types";

// Replace with your sagas
export function* feature1Saga() {
  try {
    const response = yield call(API.apiExampleRequest);
    yield put(ACTIONS.feature1ActionReceive(response.data));
  } catch (err) {
    dispatchSnackbarError(err.response.data);
  }
}



export function* saga1() {
  yield takeLatest(TYPES.GET_DATA_REQUEST, feature1Saga);
}
