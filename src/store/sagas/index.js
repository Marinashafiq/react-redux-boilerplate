import { saga1 } from './SagasExample';
import { fork, all } from "redux-saga/effects";

export function* watchSagas() {
  //Combine sagas with 
  yield all([saga1()]);
  // OR
  // yield all([fork(saga1)]);
}
