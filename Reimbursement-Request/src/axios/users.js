import axios from 'axios'

// Delete User By Id
export const deleteUser = id =>{
  axios.delete(`${process.env.REACT_APP_API_URL}/deleteuser/${id}`)
  .then((response) => {
      return response.data;
  }, (error) => {
      return error.response.data;
  });
};

//get all users
export const getUsers = () =>{
  return axios.get(`${process.env.REACT_APP_API_URL}/getusers`)
  .then((response) => {
      return response.data;
  }, (error) => {
      return error.response.data;
  });
};