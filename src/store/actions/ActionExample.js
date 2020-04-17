import * as types from "../types/TypesExample";

export const actionRequest = () => ({
  type: types.GET_DATA_REQUEST
});
export const actionReceive = payload => ({
  type: types.GET_DATA_RECEIVE,
  payload
});
