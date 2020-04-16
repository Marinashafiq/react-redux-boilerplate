import store from "../store";
import { showSuccessSnackbar } from "../store/actions/Snackbar";
import * as jwt_decode from "jwt-decode";
import History from "./../routes/History";
import { stageUrlConfig } from "./Constants";
export function dispatchError(data) {
  if (data) {
    const errorMsg = data.error.message;
    store.dispatch(showSuccessSnackbar(errorMsg, "error"));
  }
}

export function getDecodedAccessToken(token) {
  try {
    return jwt_decode(token);
  } catch (Error) {
    return null;
  }
}

export function pushToUrlNewParam(page) {
  History.push({
    search: `?page=${page}`,
  });
}

export function getDomain() {
  let host = window.location.host;
  let parts = host.split(".");
  let domain = parts[0].split(`-${process.env.REACT_APP_URL_CONFIG}`)[0];
  const domain_name = process.env.REACT_APP_DOMAIN ? process.env.REACT_APP_DOMAIN : domain;
  localStorage.setItem("domain", domain_name);
  return domain_name;
}

export const getYesterdayDate = () => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday;
};

export function getURLParams(paramName) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(paramName);
}
