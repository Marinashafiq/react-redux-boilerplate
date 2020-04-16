import {axiosInstance} from './index';

let handlerEnabled = true;

const signupRequest = async (data) => {
    return await axiosInstance.post('/candidate/signUp', data , { handlerEnabled });
}
const sendEmailAgainRequest = async (data) => {
    return await axiosInstance.post('/candidate/ResendConfirmEmail', data , { handlerEnabled });
}
const confirmEmailRequest = async (data) => {
    return await axiosInstance.post('/candidate/confirmEmail', data , { handlerEnabled });
}
const signinRequest = async (data) => {
    return await axiosInstance.post('/candidate/login', data , { handlerEnabled });
}

const validateDomain = async (domain) => {
    return await axiosInstance.get(`/admin/auth/company/${domain}`, { handlerEnabled });
}


const forgetPasswordRequest = async (data) =>{
    return await axiosInstance.post('/candidate/forget_password' , data , {handlerEnabled})
}

const resetPasswordRequest = async (data) =>{
    return await axiosInstance.post('/candidate/reset_password' , data , {handlerEnabled})
}

export default {
    signupRequest ,
    forgetPasswordRequest,
    sendEmailAgainRequest,
    confirmEmailRequest,
    resetPasswordRequest,
    signinRequest,
    validateDomain
};