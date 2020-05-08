import { saga1 } from './Feature1Sagas';
import { fork, all } from "redux-saga/effects";

export function* watchSagas() {
  //Combine sagas with 
  yield all([saga1()]);
  // OR
  // yield all([fork(saga1)]);
}
