import { call, put } from "redux-saga/effects";
import API from "../../network/apis/APIExample";
import * as ACTIONS from "../actions/ActionExample";
import { dispatchError } from "../../utils/Shared";

export function* homeSagaRequest() {
  try {
    const response = yield call(API.apiExampleRequest);
    yield put(ACTIONS.actionReceive(response.data));
  } catch (err) {
    dispatchError(err.response.data);
  }
}
