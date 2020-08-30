import React,{Component} from 'react';
import Tables from '../../components/Tables/Tables';
import NavBar from '../../components/NavBar/NavBar';
import {MDBContainer , MDBCard } from 'mdbreact'
import {getUsers} from '../../axios/users'
import {isAutheticated , Signout} from '../../axios/auth'
import {MDBIcon  } from 'mdbreact';
import axios from 'axios'
import Modal from '../../components/Form/Modal'

class userhome extends Component{

  state = {
    rows : [],

    modal14: false,
    modalheading:"",
    line:"",
    ispass: false,
    password:"",
    isdel:false,

    search:"",

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

    if(userroleOnline === "manager")
    {
      this.setState({ismanager:true})
    }
      
      getUsers().then( data => {
        if(data.error)
        {
          this.setState({error:data.error})
        }
        else{
          this.setState({rows: data})
        }
      })
  
    
  }


  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
    [modalNumber]: !this.state[modalNumber] , error:"",open:"", ispass:false , password:"",isdel:false,id:""
  });
    
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

  this.setState({modal14:true , line:"ARE YOU SURE YOU WANT TO DELETE ?",modalheading  :"CONFIRMATION" , isdel:true,id:req.id , error:"" , open:""})
    
}

onSave =()=>{
  if(this.state.isdel)
  {
    axios.delete(`${process.env.REACT_APP_API_URL}/deleteuser/${this.state.id}`)
    .then((response) => {
      this.setState({
        error : "",
        id:"",
        open:"",
        modal14:false
  
      })
       this.fetchData()
    }, (error) => {

      this.setState({

        error : error.response.data,  
      })
    });

  }

  if(this.state.ispass)
  {
    const {id , password } = this.state
    const reqst = {id , password}


    axios.put(`${process.env.REACT_APP_API_URL}/updatepass`, reqst)
    .then((response) => {

      this.setState({

        ispass : "",
        id :"",
        error :"",
        open:"",
        modal14:false,
        password:""

      })
        this.fetchData()
    }, (error) => {

      this.setState({
        error : error.response.data.error

      })
    });
  }
}

handlearrow(index) {
    
  this.setState({
    modal14: !this.state.modal14 , modalheading:"CHANGE PASSWORD",line:"PLEASE ENTER NEW PASSWORD" , ispass:true , id:index.id,open:"",error:""
  });
  
}
  render ()
  {
    const {ismanager  ,search } = this.state
    
    const appendRow = this.state.rows.map((row,index ) => {
      
      if(search!=="" && row.id.toString().indexOf(search) === -1 && row.employeeid.toLowerCase().indexOf(search.toLowerCase()) === -1 && row.fname.toLowerCase().indexOf(search.toLowerCase()) && row.lname.toLowerCase().indexOf(search.toLowerCase()) && row.userrole.toLowerCase().indexOf(search.toLowerCase()) ) 
      {
      return null
      }
      return (

        
        
        <tr key={index}>
            <td>{row.id}</td>
            <td>{row.employeeid}</td>
            <td>{row.fname}</td>
            <td>{row.lname}</td>
            <td>{row.userrole}</td>
            <td>
              <MDBIcon icon="angle-double-right fa-2x ml-3" onClick={() => this.handlearrow(row)} style={{color:"green"}}/>
              <i className="fas fa-trash ml-4 fa-2x" style={{color:"red"}} onClick={()=> this.deletereq(row) }></i>
              
              
            </td>
          </tr>
      )
    });

    return(
      
      <MDBContainer fluid >
       
       {ismanager ?(
         <>
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
        allusers={"All Users"}
        alluserRef={"allusers"}

        />

        </>

       ):(

        <h2>Permission Denied ..</h2>
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
       ID={"ID"}
       Date = {"Employee ID "}
       Reason={"First Name"}
       Comments={"Last Name"}
       money={"User Role"}
       Status={"Actions"}

       />

      <Modal 

        modal14 = {this.state.modal14}
        MainHeading = {this.state.modalheading}
        error={this.state.error}
        open={this.state.open}
        line={this.state.line}
        pass={this.state.ispass}
        password={this.state.password}
        OnChange = {this.OnhandleChange}
        btn1={"Close"}
        btn1action = {this.toggle(14)}

        btn2={"Save"}
        btn2action = {this.onSave}
        close={this.toggle(14)}
        />
        </>
       ):(
         ""
)}
        

        </MDBCard>
        </MDBContainer>
      </MDBContainer>
    
    );
  }
  
}
export default userhome;