import React from 'react'
import {Route , Switch} from 'react-router-dom'
import userHome from '../containers/UserHome/UserHome'
import Signin from '../containers/Signin/SignIn'
import Adduser from '../containers/AddUsers/AddUsers'
import UserManager from '../containers/UserHome/UserHomeManager'


const MainRouter = ()=>(
  
    <Switch>
      <Route exact path="/" component = {Signin}></Route>
      <Route exact path="/userhome" component = {userHome}></Route>
      <Route exact path="/adduser" component = {Adduser}></Route>
      <Route exact path="/usermanager" component = {UserManager}></Route>

    </Switch>

)

export default MainRouter;