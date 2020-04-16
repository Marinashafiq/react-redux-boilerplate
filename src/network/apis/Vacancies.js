import {axiosInstance} from './index';

let handlerEnabled = true;

const vacancyInnerDetailsRequest = async (id) =>{
    return await axiosInstance.get(`/candidate_job_request/${id}` , {handlerEnabled})
}

export default {
    vacancyInnerDetailsRequest
};