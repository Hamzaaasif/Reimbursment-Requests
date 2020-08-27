import React,{Component} from 'react';
import Tables from '../../components/Tables/Tables';
import NavBar from '../../components/NavBar/NavBar';
import {MDBContainer , MDBCard } from 'mdbreact'
import ReqForm from '../../components/Form/ReqForm'

import {getReq} from '../../axios/req.js'
import {getReqById , UpdateStatus } from '../../axios/req.js'
import {postReq } from '../../axios/req.js'
import {isAutheticated , Signout} from '../../axios/auth'
import {MDBIcon  } from 'mdbreact';
import axios from 'axios'


class userhome extends Component{

  state = {
    rows : [],

    modal14: false,
    search:"",

      reasons : "",
      comment :"",
      money : "",
      open : "",
      error : "",
      id:"",
   

    username : "",
    userid:"",
    ismanager:false
  }

  componentDidMount(){
    this.fetchData()

  }

  fetchData (){
    const usernameOnline = isAutheticated().user.fname +' ' +isAutheticated().user.lname
    const userroleOnline = isAutheticated().user.userrole
    const useridOnline = isAutheticated().user.employeeid + ' ('+userroleOnline+')'
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
          this.setState({error:data.error})
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
    [modalNumber]: !this.state[modalNumber] , error:"",open:"", comment:"",money:"",reasons:"", id:""
  });
    
  }


  OnApprove = ()=>{
    
    const status = "Approved"
    const id = this.state.id
    const reqt = {status , id}
    console.log("Reqst " ,reqt )

    UpdateStatus(reqt).then( data => {  
      if(data.error)
      {
        this.setState({error:data.error, open: "" })
      }
      else{
        
        this.setState({

          reasons : "",
          comment :"",
          money : "",
          open : "Status Updated..",
          error : "",
          id:"",
          modal14: false
  
        })
        
        this.fetchData()
      }

    })
  }


  OnDeny = ()=>{
    
    const status = "Denied"
    const id = this.state.id
    const reqt = {status , id}
    console.log("Reqst " ,reqt )

    UpdateStatus(reqt).then( data => {  
      if(data.error)
      {
        this.setState({error:data.error, open: "" })
      }
      else{
        
        this.setState({

          reasons : "",
          comment :"",
          money : "",
          open : "Status Updated..",
          error : "",
          id:"",
          modal14: false
  
        })
        
        this.fetchData()
      }

    })
  }

  OnSaveForm = ()=>{

    if(this.state.id === "")
    {
    const {
      reasons,
      comment,
      money
    } = this.state

    const req = {reasons, comment, money , employeeid:isAutheticated().user.employeeid, status:"Pending"}
    postReq(req).then( data => {
      if(data.error)
      {
        this.setState({error:data.error, open: ""})
      }
      else{
        
        this.setState({

          reasons : "",
          comment :"",
          money : "",
          open : "Inserted",
          error : "",
  
        })
        this.fetchData()

      }

    })

  }
  else{

    const {id , reasons , comment , money } = this.state
    const reqst = {id , reasons , comment , money}


    axios.put(`http://localhost:8080/updatereq`, reqst)
    .then((response) => {

      this.setState({

        reasons : "",
        comment :"",
        money : "",
        open : "",
        error : "",
        id:""

      })
        this.fetchData()
    }, (error) => {

      this.setState({
        id:"",
        error : error.response.data.error

      })
    });

  } 
}

  OnhandleChange = (Name)=>(event)=>{

    this.setState({ error:"", open:""})
    this.setState({ 
      
        [Name]:event.target.value
      
    })


}

search =()=> event =>{
  this.setState({search:event.target.value})
}


deletereq(req){

  axios.delete(`http://localhost:8080/deletereq/${req.id}`)
    .then((response) => {
      console.log("Response for delete : ", response.data)
      this.setState({

        reasons : "",
        comment :"",
        money : "",
        open : "",
        error : "",
        id:""
  
      })
       this.fetchData()
    }, (error) => {

      this.setState({

        reasons : "",
        comment :"",
        money : "",
        open : "",
        error : error.response.data,
        id:""
  
      })
    });

    
}

handlearrow(index) {
    
  this.setState({
    modal14: !this.state.modal14,reasons:index.reasons,comment:index.comment , money:index.money , id:index.id,open:"",error:""
  });
  
}
  render ()
  {
    const {ismanager  ,search } = this.state
    
    const appendRow = this.state.rows.map((row,index ) => {
      
      if(search!=="" && row.employeeid.toString().indexOf(search) === -1 && row.reasons.toLowerCase().indexOf(search.toLowerCase()) === -1 && row.status.toLowerCase().indexOf(search.toLowerCase()) && row.date.toLowerCase().indexOf(search.toLowerCase()) && row.comment.toLowerCase().indexOf(search.toLowerCase()) && row.money.toString().indexOf(search) === -1 ) 
      {
      return null
      }
      return (
        
        <tr key={index}>
            <td>{row.employeeid}</td>
            <td>{row.date}</td>
            <td>{row.reasons}</td>
            <td>{row.comment}</td>
            <td>{row.money}</td>
            <td>{row.status}</td>
            <td>
              <MDBIcon icon="angle-double-right fa-2x ml-3" onClick={() => this.handlearrow(row)} style={{color:"green"}}/>
              {ismanager ? (
                <i className="fas fa-trash ml-4 fa-2x" style={{color:"red"}} onClick={()=> this.deletereq(row) }></i>
              ):("")}
              
            </td>
          </tr>
      )
    });

    return(
      
      <MDBContainer fluid >
       
       {ismanager ?(
        <NavBar 
        first={"Home"}
        firstRef= {""}
        second = {"Add Users"}
        secondRef = {"adduser"}
        third = {"Sign Out"}
        thirdRef = {"signin"}
        Username = {this.state.username}
        empId = {this.state.userid}
        Signout = {Signout}
        />

       ):(

      <NavBar 
      first={"Home"}
      firstRef= {""}
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
        <>
       <Tables 
       Mainheading = {"REIMBURSEMENT REQUESTS"}
       formRef = {"userform"}
       data = {appendRow}
       search={this.search()}
       />

       <ReqForm 
        
        modal14 = {this.state.modal14}
        MainHeading = {"REQUEST"}
        error={this.state.error}
        open={this.state.open}
        reasons={this.state.reasons}
        money={this.state.money}
        comment={this.state.comment}
        OnChange = {this.OnhandleChange}

        btn1={"Approve"}
        btn1action = {this.OnApprove}
        btn2={"Deny"}
        btn2action = {this.OnDeny}
        close={this.toggle(14)}
        />
        </>
       ):(

        <>
        <Tables 
        Mainheading = {"REIMBURSEMENT REQUESTS"}
        formheading= {"SUBMIT REQUEST"}
        formRef = {"userform"}
        toggle = {this.toggle(14)}
        data = {appendRow}
        search={this.search()}
        
        
        />

         <ReqForm 
        btn1={"Cancel"}
        btn1action = {this.toggle(14)}
        modal14 = {this.state.modal14}
        MainHeading = {"SUBMIT REQUEST"}
        error={this.state.error}
        open={this.state.open}

        reasons={this.state.reasons}
        money={this.state.money}
        comment={this.state.comment}

        
        OnChange = {this.OnhandleChange}
        btn2={"Save"}
        btn2action = {this.OnSaveForm}
        close={this.toggle(14)}
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