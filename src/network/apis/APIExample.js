import {axiosInstance} from './index';
let handlerEnabled = true;

// Replace endpoint and change api name
const apiExampleRequest = async () =>{
    return await axiosInstance.get(`ENDPOINT` ,{handlerEnabled})
}

export default {
    apiExampleRequest
};