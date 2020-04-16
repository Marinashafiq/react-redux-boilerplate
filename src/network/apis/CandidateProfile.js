import { axiosInstance } from "./index";

let handlerEnabled = true;

const saveEducationInfoRequest = async data => {
  return await axiosInstance.post(`/candidate/reset_password/`, data, {
    handlerEnabled
  });
};

export default {
  saveEducationInfoRequest
};
