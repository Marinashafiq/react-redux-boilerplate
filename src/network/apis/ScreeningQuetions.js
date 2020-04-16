import {axiosInstance} from './index';

let handlerEnabled = true;

const jobScreeningQuestions = async (JobPostId) =>{
    return await axiosInstance.get(`/candidate_screening_question/get/${JobPostId}` , {handlerEnabled})
}

const applyJobRequest = async (data) =>{
    return await axiosInstance.post(`/candidate/application/apply`, data , {handlerEnabled})
}

export default {
    jobScreeningQuestions,
    applyJobRequest
};