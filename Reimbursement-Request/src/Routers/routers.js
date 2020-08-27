import React from 'react'
import {Route , Switch} from 'react-router-dom'
import userHome from '../containers/UserHome/UserHome'
import Signin from '../containers/Signin/SignIn'
import Adduser from '../containers/AddUsers/AddUsers'
import PrivateRoutes from '../Routers/PrivateRoutes'
import Allusers from '../containers/AddUsers/Allusers'


const MainRouter = ()=>(
  
    <Switch>
      <Route exact path="/signin" component = {Signin}></Route>

      <PrivateRoutes exact path="/" component = {userHome}/>
      <PrivateRoutes exact path="/adduser" component = {Adduser}/>
      <PrivateRoutes exact path="/allusers" component = {Allusers}/>

    </Switch>

)

export default MainRouter;