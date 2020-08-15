import React,{Component} from 'react';
import Tables from '../../components/Tables/Tables';
import NavBar from '../../components/NavBar/NavBar';
import {MDBContainer , MDBCard } from 'mdbreact'
import ReqForm from '../../components/Form/ReqForm'

import {getReq} from '../../axios/req.js'
import {getReqById} from '../../axios/req.js'

import {isAutheticated , Signout} from '../../axios/auth'


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
      }
    ],

    rows : [],

    modal14: false,

    formVariables : {
      reason : "",
      comment :"",
      money : "",
      open : "",
      error : ""
    },
    username : "",
    userid:""
  }

  componentDidMount(){
    const usernameOnline = isAutheticated().user.fname
    const useridOnline = isAutheticated().user.employeeid
    this.setState({username :usernameOnline , userid : useridOnline})
    
     // getReq().then( data => {
    //   // console.log("Error :",data)
    //   if(data.error)
    //   {
    //     this.setState({error:data.error})
    //   }
    //   else{
    //     // this.setState({rows: data})
    //   }
    // })
    
    getReqById('zain').then( data => {
      // console.log("Error :",data)
      if(data.error)
      {
        this.setState({error: data.error})
      }
      else{
        this.setState({rows: data})
      }
    })

  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
    
  }

  OnSaveForm = ()=>{

      this.setState({

        formVariables :{
        reason : "",
        comment :"",
        money : "",
        open : "Inserted",
        error : ""
          
        }

      })
  }

  OnhandleChange = ()=>{

    this.setState({

      formVariables :{
      reason : "",
      comment :"",
      money : "",
      open : "",
      error : ""
        
      }

    })
}
 
  render ()
  {
    return(
      
      <MDBContainer fluid >
       
        <NavBar 
        first={"Home"}
        firstRef= {"userhome"}
        second = {""}
        secondRef = {""}
        third = {"Sign out"}
        thirdRef = {""}
        Username = {this.state.username}
        Signout = {Signout}
        empId = {this.state.userid}
        />
        <br/><br/>
        <MDBContainer>
        <MDBCard>
        
        <Tables 
        Mainheading = {"REIMBURSEMENT REQUESTS"}
        formheading= {"SUBMIT REQUEST"}
        formRef = {"userform"}
        toggle = {this.toggle(14)}
        data = {this.state}
        />

         <ReqForm 
        toggle = {this.toggle(14)}
        modal14 = {this.state.modal14}
        MainHeading = {"SUBMIT REQUEST"}
        error={this.state.formVariables.error}
        open={this.state.formVariables.open}
        Onsave = {this.OnSaveForm}
        OnChange = {this.OnhandleChange}
        />

        </MDBCard>
        </MDBContainer>
      </MDBContainer>
    
    );
  }
  
}
export default userhome;