import React,{Component} from 'react';
import Tables from '../../components/Tables/Tables';
import NavBar from '../../components/NavBar/NavBar';
import {MDBContainer , MDBCard } from 'mdbreact'
import ReqForm from '../../components/Form/ReqForm'

import {getReq} from '../../axios/req.js'
import {getReqById} from '../../axios/req.js'
import {postReq} from '../../axios/req.js'
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
 
  render ()
  {
    const {ismanager} = this.state
    return(
      
      <MDBContainer fluid >
       
       {ismanager ?(
        <NavBar 
        first={"Home"}
        firstRef= {"userhome"}
        second = {"Add Users"}
        secondRef = {"adduser"}
        third = {"Sign Out"}
        thirdRef = {""}
        Username = {this.state.username}
        empId = {this.state.userid}
        Signout = {Signout}
        />

       ):(

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
)}

        <br/><br/>
        <MDBContainer>
        <MDBCard>
        
        {ismanager ?(

       <Tables 
       Mainheading = {"REIMBURSEMENT REQUESTS"}
       formRef = {"userform"}
       data = {this.state}
       />

       ):(

        <>
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
        error={this.state.error}
        open={this.state.open}

        reasons={this.state.reasons}
        money={this.state.money}
        comment={this.state.comment}

        
        OnChange = {this.OnhandleChange}
        Onsave = {this.OnSaveForm}
        />
        </>
)}



        

        </MDBCard>
        </MDBContainer>
      </MDBContainer>
    
    );
  }
  
}
export default userhome;