import React from 'react';
import {Redirect} from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter , MDBCardHeader } from 'mdbreact';
import {Signin , auththenticate} from '../../axios/auth'


class signin extends React.Component {
  state = {
    userid:"",
    password:"",
    loading : false,
    redirectToRefer : false,
    error : ""
  }

  handleChange = Name => event=>{
    this.setState({ error : ""})
    this.setState({[Name] : event.target.value})
    console.log(event.target.value)
  }


  ClickSubmit= event =>{
    event.preventDefault();
    this.setState({loading:true})
    const {userid , password} = this.state;

    const user = {
      userid,
      password
    };

    Signin(user).then(data=>{
      if(data.error)
      {
        this.setState({error:data.error , loading:false})
      }
      else{
        console.log(data)
        auththenticate(data , ()=>{ 
          this.setState({redirectToRefer:true  , loading:false})
        })
      }
    })
  }



  render() {
    const smallStyle = { fontSize: '0.8rem'}
    const {userid,password , redirectToRefer ,  loading , error} = this.state

    if(redirectToRefer)
    {
      return <Redirect to ="/userhome"/>
    }

    return (
      <MDBContainer>
        <br/><br/>

        <MDBRow>
          <MDBCol md="9" lg="7" xl="5 " className="mx-auto mt-3">
            <MDBCard>

              {/* validation input */}
  
              <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
                  {error}
             </div>

             {loading ?(
               <div>
                 <h2>Loading...</h2>
               </div>
             ) : (""
             )}

             <MDBCardBody className="mx-5">
              
                <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mb-3  ">
                 <h5>SIGN IN</h5>
                    </MDBCardHeader>
                <br/><br/>

                <MDBInput label="Employee ID" group type="email" validate error="wrong" success="right" value={userid}
                onChange={this.handleChange("userid")}
                />
                
                <MDBInput label="Password" group type="password" validate containerClass="mb-0"
                value={password}
                onChange={this.handleChange("password")}
                />
                <br/>
                <div className="text-center pt-3 mb-3">
                  <MDBBtn href="/userhome" type="button" gradient="blue" rounded className="btn-block z-depth-1a" onClick = {this.ClickSubmit} >Sign in</MDBBtn>
                </div>
              </MDBCardBody>

              <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="grey-text d-flex justify-content-end" style={smallStyle}>Not a member ? <a href="#!" className="blue-text ml-1"> Contact to manager</a></p>
              </MDBModalFooter>

            </MDBCard>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
    );
  }
}

export default signin;