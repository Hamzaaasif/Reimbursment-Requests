import React , {Component} from 'react'

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn ,MDBCard, MDBCardHeader,MDBFormInline , MDBCardBody } from 'mdbreact';
import NavBar from '../../components/NavBar/NavBar'

import {Adduser} from '../../axios/auth'


class adduser extends Component {
  state = {
    fname : "",
    lname:"",
    password:"",
    userrole:"manager",
    employeeid:"",
    error : "",
    open : "",
    radio: 1
  }

  handleChange = Name =>(event)=>
  {
    this.setState({error : ""})
    this.setState({[Name]: event.target.value});
    
}


  onClick = nr => () => {
    this.setState({
      radio: nr
    });
    if(nr ===1)
    {

      this.setState({userrole :"manager"})
    }
    else{
      this.setState({userrole:"employee"})
    }
    
  }

  onSave = event =>{
    event.preventDefault()
    const {fname , lname , password ,userrole , employeeid} = this.state
    const user = {fname , lname,password,userrole,employeeid}
    Adduser(user).then(data=>{
    
      if(data.error)
      {
        this.setState({error:data.error , open:false})
      }
      else{
        this.setState({
          error:"",
          fname:"",
          lname:"",
          password:"",
          userrole:"manager",
          employeeid:"",
          open:true

        })
      }
    })
  }

  render(){

    const {fname,lname,password , employeeid ,error , open} = this.state
    return (
      <div>

      <NavBar 
        first={"Home"}
        firstRef= {"usermanager"}
        second = {"Add Users"}
        secondRef = {"adduser"}
        third = {"Sign Out"}
        thirdRef = {""}
        Username = {"User (Manager)"}
        empId = {120969}
        />

      <MDBContainer>
        
        <MDBRow>
          <MDBCol md="9" lg="7" xl="7 " className="mx-auto mt-3">
            <MDBCard>
              

              {/* validation input */}
             <div className="alert alert-info" style={{display: open ? "" : "none"}}>
                      Inserted Successfully
              </div>
              <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
                  {error}
             </div>

             <MDBCardBody className="mx-5">
              
                <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mb-4  ">
                 <h5>ADD USER</h5>
                    </MDBCardHeader>

                    <br/>

                <MDBInput label="Employee ID" onChange={this.handleChange("employeeid")} 
                group type="text" validate error="wrong" success="right"
                value={employeeid}
                />

                <MDBInput label="First Name" onChange={this.handleChange("fname")} group type="text" validate containerClass="mb-0"
                value={fname}
                />
                <MDBInput label="Last Name" onChange={this.handleChange("lname")} group type="text" validate containerClass="mb-0"
                value={lname}
                />

                <MDBInput label="Password" onChange={this.handleChange("password")} group type="password" validate containerClass="mb-0"
                value={password}
                />

              

                <MDBFormInline  className=" d-flex justify-content-center ">
                  <div size ="lg" className="ml-3">

                <MDBInput  onClick={this.onClick(1)} checked={this.state.radio===1 ? true : false}        label="Management" type="radio" id="radio1" size="lg"
              
                />
                </div>
                <div size ="lg" className ="ml-3 ">
                <MDBInput onClick={this.onClick(2)} checked={this.state.radio===2 ? true : false} label="Non Management" type="radio" id="radio2" 
                
                />
                </div>
                
                </MDBFormInline>

                <div className="text-center pt-3 mb-3">
                <MDBBtn type="button" gradient="blue" onClick={this.onSave} rounded className="btn-block z-depth-1a">Save</MDBBtn>
                </div>
                

              </MDBCardBody>


            </MDBCard>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
        </div>
    );
  }

}

export default adduser;