import {axiosInstance} from './index';
let handlerEnabled = true;

const apiExampleRequest = async () =>{
    return await axiosInstance.get(`ENDPOINT` ,{handlerEnabled})
}

export default {
    apiExampleRequest
};