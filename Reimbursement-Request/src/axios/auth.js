
export const Signin = user =>{
  console.log(JSON.stringify(user))
  return fetch(`${process.env.REACT_APP_API_URL}/signin`,{
    method:"POST",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
    },
    body: JSON.stringify(user)
  })
  .then(response =>{
    return response.json();
  })
   .catch(err => console.log("Error ",err))
};

export const auththenticate = (jwt , next)=>{
  if (typeof window != "undefined")
  {
    localStorage.setItem("jwt", JSON.stringify(jwt))
    next()
  }
}

export const Signout = () =>{
  if(typeof window != "undefined")
  {
    localStorage.removeItem("jwt")
  }
    
    return fetch(`${process.env.REACT_APP_API_URL}/signout`,{
      method:"GET"
    })
    .then(response =>{
    
      return response.json()
    })
    .catch(err=>console.log(err))
  
}

export const isAutheticated = ()=>{
  if(typeof window =="undefined")
  {
    return false
  }
  if(localStorage.getItem("jwt"))
  {
    return JSON.parse(localStorage.getItem("jwt"))
  }
  else{
    return false;
  }
}


export const Adduser = user =>{

  return fetch(`${process.env.REACT_APP_API_URL}/signup`,{
    method:"POST",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
    },
    body:JSON.stringify(user)
  })
  .then(response =>{
    return response.json();
  })
  .catch(err =>console.log(err))
}