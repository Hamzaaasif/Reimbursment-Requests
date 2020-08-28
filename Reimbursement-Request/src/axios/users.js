import axios from 'axios'

// Delete User By Id
export const deleteUser = id =>{
  axios.delete(`http://localhost:8080/deleteuser/${id}`)
  .then((response) => {
      return response.data;
  }, (error) => {
      return error.response.data;
  });
};

//get all users
export const getUsers = () =>{
  return axios.get(`http://localhost:8080/getusers`)
  .then((response) => {
      return response.data;
  }, (error) => {
      return error.response.data;
  });
};