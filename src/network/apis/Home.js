import {axiosInstance} from './index';
import qs from 'qs';
let handlerEnabled = true;

const homeRequest = async (params) =>{
    return await axiosInstance.get(`/candidate_job_request/get` , {params,paramsSerializer: params => {
        return qs.stringify(params)
      } ,handlerEnabled})
}

export default {
    homeRequest
};