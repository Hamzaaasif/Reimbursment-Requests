import React,{Component} from 'react'
import axios from 'axios';

export const postReq = request =>{
    axios.post(`http://localhost:8080/postreq`, request)
    .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
    });
};

export const getReq = () =>{
    axios.get(`http://localhost:8080/getreq`)
    .then((response) => {
        console.log(response);
    }, (error) => {
    console.log(error);
    });
};

export const getReq = id =>{
    axios.get(`http://localhost:8080/getreqbyid/:${id}`)
    .then((response) => {
        console.log(response);
    }, (error) => {
    console.log(error);
    });
};

export const putReq = id =>{
    axios.put(`http://localhost:8080/updatereq/:${id}`)
    .then((response) => {
        console.log(response);
    }, (error) => {
    console.log(error);
    });
};