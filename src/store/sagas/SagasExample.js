import { call, put } from "redux-saga/effects";
import API from "../../network/apis/APIExample";
import * as ACTIONS from "../actions/ActionExample";
import { dispatchSnackbarError } from "../../utils/Shared";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "../types/TypesExample";

// Replace with your sagas
export function* sagasRequestExample() {
  try {
    const response = yield call(API.apiExampleRequest);
    yield put(ACTIONS.actionReceive(response.data));
  } catch (err) {
    dispatchSnackbarError(err.response.data);
  }
}



export function* saga1() {
  yield takeLatest(TYPES.GET_DATA_REQUEST, sagasRequestExample);
}
