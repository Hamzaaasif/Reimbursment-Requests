import axios from 'axios';

export const postReq = request =>{
    return axios.post(`http://localhost:8080/postreq`, request)
    .then((response) => {
        return response.data;
    }, (error) => {
        return error.response.data;
    });
};

export const getReq = () =>{
    return axios.get(`http://localhost:8080/getreq`)
    .then((response) => {
        return response.data;
    }, (error) => {
        return error.response.data;
    });
};

export const getReqById = id =>{
    console.log("idddd", id)
    return axios.get(`http://localhost:8080/getreqbyid/${id}`)
    .then((response) => {
        return response.data;
    }, (error) => {
        return error.response.data;
    });
};

export const putReq = id =>{
    axios.put(`http://localhost:8080/updatereq/${id}`)
    .then((response) => {
        console.log(response);
    }, (error) => {
    console.log(error);
    });
};