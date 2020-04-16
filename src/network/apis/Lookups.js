import { axiosInstance } from "./index";

let handlerEnabled = true;

const collegeLookupRequest = async () => {
  return await axiosInstance.get("/lookup/college/get", { handlerEnabled });
};
const degreeLookupRequest = async () => {
  return await axiosInstance.get("/lookup/degree/get", { handlerEnabled });
};
const jobTitleLookupRequest = async () => {
  return await axiosInstance.get("/admin/job_title/lookup", { handlerEnabled });
};
const jobTitleFilterCategoryLookupRequest = async category_id => {
  const params = { category_id };
  return await axiosInstance.get(`/admin/job_title/lookup/category`, {
    params,
    handlerEnabled
  });
};
const jobTitleCategoryLookupRequest = async () => {
  return await axiosInstance.get("/admin/job_title/categories/lookup", {
    handlerEnabled
  });
};

const residenciesLookupRequest = async () => {
  return await axiosInstance.get(`/lookup/residency/get`, { handlerEnabled });
};

const languagesWithOutEnglish = async () => {
  return await axiosInstance.get(`/lookup/language/without_english`, { handlerEnabled });
};

const jobCategoryLookupRequest = async () => {
  return await axiosInstance.get(`/candidate_job_request/job_category`, { handlerEnabled });
};

const jobContractTypeLookupRequest = async () => {
  return await axiosInstance.get(`/candidate_job_request/contract_type`, { handlerEnabled });
};

const countriesLookupsRequest = async () => {
  return await axiosInstance.get(`/lookup/country/get`, { handlerEnabled });
};

const citiesLookupsRequest = async (countryId) => {
  return await axiosInstance.get(`/lookup/city/get/${countryId}`, { handlerEnabled });
};

const skillsLookupsRequest = async () => {
  return await axiosInstance.get(`/lookup/competencies/get`,{ handlerEnabled });
};

export default {
  collegeLookupRequest,
  degreeLookupRequest,
  jobTitleLookupRequest,
  jobTitleCategoryLookupRequest,
  jobTitleFilterCategoryLookupRequest,
  residenciesLookupRequest,
  languagesWithOutEnglish,
  jobCategoryLookupRequest,
  jobContractTypeLookupRequest,
  countriesLookupsRequest,
  citiesLookupsRequest,
  skillsLookupsRequest
};
