import { axiosInstance } from "./index";

let handlerEnabled = true;

const updatePersonalInfo = async data => {
  return await axiosInstance.put(`/candidate/profile/personal_data`, data, {
    handlerEnabled
  });
};
const uploadCvReqeust = async (data) =>{
    return await axiosInstance.put(`/candidate/profile/cv` , data ,{handlerEnabled})
}

const uploadImageReqeust = async (data) =>{
    return await axiosInstance.put(`/candidate/profile/picture` , data ,{handlerEnabled})
}

const getUserProfile = async () => {
  return await axiosInstance.get(`/candidate/profile`, { handlerEnabled });
};

const saveEducationInfoRequest = async data => {
  return await axiosInstance.post(`/candidate/profile/education`, data, {
    handlerEnabled
  });
};
const deleteEducationInfoRequest = async id => {
  return await axiosInstance.delete(`/candidate/profile/education/${id}`, {
    handlerEnabled
  });
};
const saveWorkExperienceInfoRequest = async data => {
  return await axiosInstance.post(`/candidate/profile/work_experience`, data, {
    handlerEnabled
  });
};
const deleteWorkExperienceInfoRequest = async id => {
  return await axiosInstance.delete(`/candidate/profile/work_experience/${id}`, {
    handlerEnabled
  });
};

const saveSkillsInfoRequest = async data => {
  return await axiosInstance.put(`/candidate/profile/skills`, data, {
    handlerEnabled
  });
};
export default {
  uploadCvReqeust,
  uploadImageReqeust,
  getUserProfile,
  saveEducationInfoRequest,
  deleteEducationInfoRequest,
  saveWorkExperienceInfoRequest,
  deleteWorkExperienceInfoRequest,
  updatePersonalInfo,
  saveSkillsInfoRequest
};
