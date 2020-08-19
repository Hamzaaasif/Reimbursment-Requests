  
import React from 'react'
import {isAutheticated} from '../axios/auth'
import {Route , Redirect} from 'react-router-dom'

const PrivateRoute = ({component : Component , ...rest}) =>(
  <Route
  exact
  {...rest}

  render ={ props=>
    isAutheticated() ? (
      <Component {...props}/>
    ) :
  
    <Redirect to ={{
      pathname :"/signin",
      state:{from:props.location}
    }}
    />
  }
  />
);

export default PrivateRoute;