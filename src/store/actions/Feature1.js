import * as types from "../types/Feature1Types";

//Replace action name and update action types
export const feature1ActionRequest = () => ({
  type: types.GET_DATA_REQUEST
});

export const feature1ActionReceive = payload => ({
  type: types.GET_DATA_REQUEST,
  payload
});
