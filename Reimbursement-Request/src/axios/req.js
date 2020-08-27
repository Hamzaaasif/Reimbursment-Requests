import axios from 'axios';

// Post Request
export const postReq = reqt =>{
    return axios.post(`http://localhost:8080/postreq`, reqt)
    .then((response) => {
        return response.data;
    }, (error) => {
        return error.response.data;
    });
};

// Get Request
export const getReq = () =>{
    return axios.get(`http://localhost:8080/getreq`)
    .then((response) => {
        return response.data;
    }, (error) => {
        return error.response.data;
    });
};

// Get Request By Id
export const getReqById = id =>{
  
    return axios.get(`http://localhost:8080/getreqbyid/${id}`)
    .then((response) => {
        return response.data;
    }, (error) => {
        return error.response.data;
    });
};

// Update Request By Id
export const putReq = (id, reqt) =>{
    axios.put(`http://localhost:8080/updatereq/${id}`, reqt)
    .then((response) => {
        return response.data;
    }, (error) => {
        return error.response.data;
    });
};

// Delete Request By Id
export const deleteReq = id =>{
    axios.delete(`http://localhost:8080/deletereq/${id}`)
    .then((response) => {
        return response.data;
    }, (error) => {
        return error.response.data;
    });
};

// Delete User By Id
export const deleteUser = id =>{
    axios.delete(`http://localhost:8080/deleteuser/${id}`)
    .then((response) => {
        return response.data;
    }, (error) => {
        return error.response.data;
    });
};

// Update Status Manager
export const UpdateStatus = reqt =>{
    return axios.post(`http://localhost:8080/updatestatus`, reqt)
    .then((response) => {
        return response;
    }, (error) => {
        return error.response;
    });
};