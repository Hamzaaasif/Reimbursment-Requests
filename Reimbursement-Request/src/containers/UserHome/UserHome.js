import React,{Component} from 'react';
import Tables from '../../components/Tables/Tables';
import NavBar from '../../components/NavBar/NavBar';
import {MDBContainer , MDBCard } from 'mdbreact'
import ReqForm from '../../components/Form/ReqForm'

class userhome extends Component{

  state = {
    columns :[
      {
        label: '#',
        field: 'id',
        sort: 'asc'
      },
      {
        label: 'Reason',
        field: 'reason',
        sort: 'asc'
      },
      {
        label: 'Comments',
        field: 'comments',
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

    rows : [
      {
        'id': 1,
        'reason': 'Need to update a computer',
        'comments': 'Not fulfil our needs',
        'money': '$200',
        'status':'Pending',
        'date':'12-jan-2020'
      },
      {
        'id': 2,
        'reason': 'Expenses for development',
        'comments': 'Requiremnts for further work',
        'money': '$200',
        'status':'Declined',
        'date':'12-jan-2020'
      },
      {
        'id': 3,
        'reason': 'New Furniture Required',
        'comments': 'We need the most',
        'money': '$200',
        'status':'Approved',
        'date':'12-jan-2020'
      },
      {
        'id': 4,
        'reason': 'Need to update a computer',
        'comments': 'Not fulfil our needs',
        'money': '$200',
        'status':'Approved',
        'date':'12-jan-2020'
      },
      {
        'id': 5,
        'reason': 'Need to update a computer',
        'comments': 'Not fulfil our needs',
        'money': '$200',
        'status':'Declined',
        'date':'12-jan-2020'
      },
      {
        'id': 6,
        'reason': 'Need to update a computer',
        'comments': 'Not fulfil our needs',
        'money': '$200',
        'status':'Pending',
        'date':'12-jan-2020'
      },
      {
        'id': 7,
        'reason': 'Need to update a computer',
        'comments': 'Not fulfil our needs',
        'money': '$200',
        'status':'Approved',
        'date':'12-feb-2020'
      },
      {
        'id': 8,
        'reason': 'Need to update a computer',
        'comments': 'Not fulfil our needs',
        'money': '$200',
        'status':'Pending',
        'date':'12-aug-2020'
      },
      {
        'id': 9,
        'reason': 'Need to update a computer  ' ,
        'comments': 'Not fulfil our needs  ',
        'money': '$200',
        'status':'Approved',
        'date':'12-july-2020'
      },
      {
        'id': 10,
        'reason': 'Need to update a computer',
        'comments': 'Not fulfil our needs',
        'money': '$200',
        'status':'Declined',
        'date':'12-jan-2020'
      },
      {
        'id': 11,
        'reason': 'Need to update a computer',
        'comments': 'Not fulfil our needs',
        'money': '$400',
        'status':'Declined',
        'date':'12-jan-2020'
      },
      {
        'id': 12,
        'reason': 'Need to update a computer',
        'comments': 'Not fulfil our needs',
        'money': '$200',
        'status': 'Declined',
        'date':'12-jan-2020'
      }
    ],

    modal14: false,

    formVariables : {
      reason : "",
      comment :"",
      money : "",
      open : "",
      error : ""
    }
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
        second = {"Sign out"}
        secondRef = {""}
        Username = {"User (Employee)"}
        empId = {678651}
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