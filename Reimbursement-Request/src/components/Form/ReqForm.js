import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBInput, MDBCardHeader } from 'mdbreact';


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

          </MDBCardHeader>

          <MDBModalBody>

            <MDBInput 
                    label="Reason "  
                    group type="textarea" 
                    validate error="wrong"
                    success="right" 
                    rows="4"
                    onChange={props.OnChange}
                    value={props.reason}
                    />

                  <MDBInput 
                    label="Comment "
                    group type="textarea"
                    rows="4"
                    validate error="wrong"
                    success="right"
                    onChange={props.OnChange}
                    value={props.comment}
                    />

                  <MDBInput 
                    label="Money "
                    group type="number"
                    validate error="wrong"
                    success="right"
                    onChange={props.OnChange}
                    value={props.money}
                    />
          </MDBModalBody>
          <div className="btn-block z-depth-1a d-flex justify-content-center">
            <br/>
            <MDBBtn color="secondary" onClick={props.toggle}>Close</MDBBtn>
            <MDBBtn color="primary" onClick={props.Onsave}>Save changes</MDBBtn>
          </div>
          <br/>
        </MDBModal>
        
      </MDBContainer>
    );
  }

export default Form;