import store from "../../store";
import { loader } from "../../store/actions/Loader";
import Auth from "../../utils/Auth";

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

// you can edit requests through this handler.
export const requestHandler = request => {
  if (isHandlerEnabled(request)) {
    store.dispatch(loader(true));
    const token = localStorage.getItem("token");
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
    // You can decide what you need to do to handle errors.
    // here's example for unautherized user to log them out .
    if (error.response.status === 401) {
      Auth.signOut();
    }
  }
  return Promise.reject({ ...error });
};
