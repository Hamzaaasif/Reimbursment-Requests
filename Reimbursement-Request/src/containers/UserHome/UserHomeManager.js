import React,{Component} from 'react';
import Tables from '../../components/Tables/Tables';
import NavBar from '../../components/NavBar/NavBar';
import {MDBContainer , MDBCard } from 'mdbreact'
import ReqForm from '../../components/Form/ReqForm'

import {getReq} from '../../axios/req.js'
import {getReqById} from '../../axios/req.js'
import {postReq} from '../../axios/req.js'
import {isAutheticated , Signout} from '../../axios/auth'
import { MDBTable, MDBIcon, MDBCardBody ,MDBCardHeader ,MDBTableBody,MDBTableHead ,MDBBtn  } from 'mdbreact';

class userhome extends Component{

  state = {
    columns :[
      {
        label: '#',
        field: 'employeeid',
        sort: 'asc'
      },
      {
        label: 'Reason',
        field: 'reasons',
        sort: 'asc'
      },
      {
        label: 'Comments',
        field: 'comment',
        sort: 'asc'
      },
      {
        label: 'Money',
        field: 'money',
        sort: 'asc'
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc'
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc'
      },
      {
        label: 'Approved/Denied',
        field: 'button',
        sort: 'asc'
      }
    ],

    rows : [],

    modal14: false,

    
      reasons : "",
      comment :"",
      money : "",
      open : "",
      error : "",
   

    username : "",
    userid:"",
    ismanager:false
  }

  componentDidMount(){
    this.fetchData()

  }

  fetchData (){

    const usernameOnline = isAutheticated().user.fname
    const useridOnline = isAutheticated().user.employeeid
    const userroleOnline = isAutheticated().user.userrole
    this.setState({username :usernameOnline , userid : useridOnline})
    
    
    if(userroleOnline === "manager"){
      this.setState({ismanager:true})
        getReq().then( data => {
        if(data.error)
        {
          this.setState({error:data.error})
        }
        else{
          this.setState({rows: data})
        }
      })
    }
    else{
        getReqById(isAutheticated().user.employeeid).then( data => {
        if(data.error)
        {
          this.setState({error: data.error})
        }
        else{
          this.setState({rows: data})
        }
      })
    }
    
  }


  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
    
  }

  OnSaveForm = ()=>{
    const {
      reasons,
      comment,
      money
    } = this.state

    const req = {reasons, comment, money , employeeid:isAutheticated().user.employeeid, status:"Pending"}
    postReq(req).then( data => {
      if(data.error)
      {
        this.setState({error:data.error})
      }
      else{
        

        this.setState({

          
          reasons : "",
          comment :"",
          money : "",
          open : "Inserted",
          error : ""
          
          
  
        })
        this.fetchData()

      }

    })

    
      
  }

  OnhandleChange = (Name)=>(event)=>{

    this.setState({ error:"", open:""})
    this.setState({ 
      
        [Name]:event.target.value
      
    })
}

deleteItem(index) {
  console.log(index)
  let temprow = this.state.rows;
  temprow.splice(index, 1);
  this.setState({rows: temprow });
  
}


 
render() {    
  const {ismanager ,rows} = this.state
  this.state.rows = rows.map((row,index ) => {
    return (
      
      <tr key={index}>
          <td>{row.id}</td>
          <td>{row.comment}</td>
          <td>{row.reasons}</td>
          <td>{row.money}</td>
          <td>
            <MDBIcon icon="angle-double-right fa-2x" onClick={() => this.deleteItem(row.id)} />
          </td>
        </tr>
    )
  });
  

  
  return (
    // <div>
    //   <div style={{ textAlign: "center" }}>
    //     <h1>Editable Bootstrap Modal In React</h1>
    //     <h6>Bootstrap 4.0.0-beta.3</h6>
    //   </div>
    //   <table className="table table-striped">
    //     <tbody>
    //       {newRows}
    //     </tbody>
    //   </table>
      
    // </div>

    <MDBContainer>
    <MDBCard>
      <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-3 mx-4 mb-3  ">

    <div>
     
      <MDBBtn onine rounded size="sm" color="white" className="px-2">
      <i href="#win" className="fa fa-th-large mt-0"></i>
      </MDBBtn>

      <MDBBtn outline rounded size="sm" color="white" className="px-2">
      <i className="fa fa-columns mt-0"></i>
      </MDBBtn>

    </div>

  <h4><b>Manager Home</b></h4>

    <div>


      <MDBBtn outline rounded size="sm" color="white" className="px-2 py-2">
      <i  onClick ={"props.toggle"} className="fas fa-plus mt-0"> User MAnager</i>
      </MDBBtn>

    </div>

</MDBCardHeader>
    
    <MDBCardBody cascade>
      <MDBTable>
    <MDBTableHead>
      <tr>
        <th>employeeid</th>
        <th>Comment</th>
        <th>Reason</th>
        <th>Money</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>

      {this.state.rows}
    </MDBTableBody>
  </MDBTable>
        </MDBCardBody>

  </MDBCard>
  </MDBContainer>

  );
}
  
}
export default userhome;

