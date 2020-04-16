import { axiosInstance } from "./index";
import qs from 'qs';
let handlerEnabled = true;
const myApplicationsRequest = async params => {
    return await axiosInstance.get(`/candidate_job_request/list/applied`, 
     {params,paramsSerializer: params => {
      return qs.stringify(params)
    } ,handlerEnabled})
  };
  export default {
    myApplicationsRequest
};