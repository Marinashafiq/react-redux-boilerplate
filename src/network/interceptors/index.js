import store from "../../store";
import { loader } from "../../store/actions/Loader";
import Auth from "../../utils/Auth";
import { getDecodedAccessToken } from './../../utils/Shared';
import History from './../../routes/History';

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = request => {
  if (isHandlerEnabled(request)) {
    document.body.classList.add("loading-indicator");
    store.dispatch(loader(true));
    const token = localStorage.getItem("token");
    request.headers["Accept-Language"] =
      localStorage.getItem("lang") === "ar" ? "ar-SA" : "en-US";
    request.headers["Content-Type"] = "application/json";
    const domain = localStorage.getItem("domain");
    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`;
      const decode_token = getDecodedAccessToken(token);
      if (decode_token.domain !== domain) {
        History.push('/notFound')
      }
    }

   
     


    request.headers["domain"] = localStorage.getItem("domain");
  }
  return request;
};

export const successHandler = response => {
  if (isHandlerEnabled(response)) {
    store.dispatch(loader(false));
    document.body.classList.remove("loading-indicator");
  }
  return response;
};

export const errorHandler = error => {
  if (isHandlerEnabled(error.config)) {
    store.dispatch(loader(false));
    document.body.classList.remove("loading-indicator");
    if (error.response.status === 401) {
      Auth.signOut();
      History.push("/login");
    }
    else if(error.response.status === 404 || error.response.status === 500){
      History.push("/notFound");
    }
  }
  return Promise.reject({ ...error });
};