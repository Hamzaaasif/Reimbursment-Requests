import axios from 'axios';

// Post Request
export const postReq = reqt =>{
    return axios.post(`${process.env.REACT_APP_API_URL}/postreq`, reqt)
    .then((response) => {
        return response.data;
    }, (error) => {
        return error.response.data;
    });
};

// Get Request
export const getReq = () =>{
    return axios.get(`${process.env.REACT_APP_API_URL}/getreq`)
    .then((response) => {
        return response.data;
    }, (error) => {
        return error.response.data;
    });
};

// Get Request By Id
export const getReqById = id =>{
  
    return axios.get(`${process.env.REACT_APP_API_URL}/getreqbyid/${id}`)
    .then((response) => {
        return response.data;
    }, (error) => {
        return error.response.data;
    });
};



// Update Status Manager
export const UpdateStatus = reqt =>{
    return axios.post(`${process.env.REACT_APP_API_URL}/updatestatus`, reqt)
    .then((response) => {
        return response;
    }, (error) => {
        return error.response;
    });
};