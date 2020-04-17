import store from "../../store";
import { loader } from "../../store/actions/Loader";
import Auth from "../../utils/Auth";

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = request => {
  if (isHandlerEnabled(request)) {
    const token = localStorage.getItem("token");
    store.dispatch(loader(true));
    request.headers["Accept-Language"] =
      localStorage.getItem("lang") === "ar" ? "ar-SA" : "en-US";
    request.headers["Content-Type"] = "application/json";
    token && (request.headers["Authorization"] = `Bearer ${token}`);
  }
  return request;
};

export const successHandler = response => {
  if (isHandlerEnabled(response)) {
    store.dispatch(loader(false));
  }
  return response;
};

export const errorHandler = error => {
  if (isHandlerEnabled(error.config)) {
    store.dispatch(loader(false));
    if (error.response.status === 401) {
      Auth.signOut();
    }
  }
  return Promise.reject({ ...error });
};
