import * as types from "../types";

export const action = payload => ({
  type: types.FETCH_DATA,
  payload
});