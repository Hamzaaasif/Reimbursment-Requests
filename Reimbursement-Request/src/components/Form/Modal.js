import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBInput, MDBCardHeader , MDBIcon} from 'mdbreact';


const Form = (props)=>{
 const error = props.error
 const open = props.open

  return (
      <MDBContainer>
        <MDBModal isOpen={props.modal14}  centered>

        <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
          {error}
        </div>
                
        <div className="alert alert-info" style={{display: open ? "" : "none"}}>
           Inserted Successfully
        </div>
        
          <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3 ">
          <h4><b>{props.MainHeading}</b></h4>
          <MDBIcon onClick ={props.close} icon="times fa-2x" style={{color:"white"}}/>

          </MDBCardHeader>

          <MDBModalBody>
            {props.line}
            <br/><br/>
            {props.pass ?(

                <MDBInput 
                label="New Password "  
                group type="password" 
                validate error="wrong"
                success="right" 
                rows="4"
                onChange={props.OnChange("password")}
                value={props.password}
                />
            ):("")}
          </MDBModalBody>
          <div className="btn-block z-depth-1a d-flex justify-content-center">
            <br/>
            <MDBBtn color="secondary" onClick={props.btn1action}>{props.btn1}</MDBBtn>
            <MDBBtn color="primary" onClick={props.btn2action}>{props.btn2}</MDBBtn>

          </div>
          <br/>
        </MDBModal>
        
      </MDBContainer>
    );
  }

export default Form;