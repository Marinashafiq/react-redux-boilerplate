import { call, put } from "redux-saga/effects";
import API_HOME from "../../network/apis/Home";
import * as ACTIONS_HOME from "../actions/Home";
import { dispatchError } from "../../utils/Shared";

export function* HomeVacanciesRequest({payload}) {
  try {
    const response = yield call(API_HOME.homeRequest,payload);
    yield put(ACTIONS_HOME.homeVacanciesReceive(response.data));
  } catch (err) {
    console.log(err)
  }
}
