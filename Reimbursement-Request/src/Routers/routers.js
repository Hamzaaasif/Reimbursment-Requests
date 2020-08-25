import React from 'react'
import {Route , Switch} from 'react-router-dom'
import userHome from '../containers/UserHome/UserHome'
import Signin from '../containers/Signin/SignIn'
import Adduser from '../containers/AddUsers/AddUsers'
import UserManager from '../containers/UserHome/UserHomeManager'
import PrivateRoutes from '../Routers/PrivateRoutes'


const MainRouter = ()=>(
  
    <Switch>
      <Route exact path="/signin" component = {Signin}></Route>

      <PrivateRoutes exact path="/" component = {userHome}/>
      <PrivateRoutes exact path="/adduser" component = {Adduser}/>
      <PrivateRoutes exact path="/usermanager" component = {UserManager}/>

    </Switch>

)

export default MainRouter;