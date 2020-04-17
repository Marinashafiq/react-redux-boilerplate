import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "../interceptors";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

// Handle request process
axiosInstance.interceptors.request.use(request => requestHandler(request));
// Handle response process
axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);
