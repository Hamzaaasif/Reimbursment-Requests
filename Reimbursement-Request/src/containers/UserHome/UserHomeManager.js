import React,{Component} from 'react';
import Tables from '../../components/Tables/Tables';
import NavBar from '../../components/NavBar/NavBar';
import {MDBContainer , MDBCard } from 'mdbreact'

class userhomeManager extends Component{

  state = {
    columns :[
      {
        label: '#',
        field: 'id',
        sort: 'asc'
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc'
      },
      {
        label: 'Employee',
        field: 'name',
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
        label: 'Approved/Denied',
        field: 'status',
        sort: 'asc'
      }
    ],

    rows : [
      {
        'id': 1,
        'name':'Jack',
        'reason': 'Need to update a computer',
        'comments': 'Not fulfil our needs',
        'money': '$200',
        'status':<div><i class="far fa-thumbs-up far ml-3 fa-2x" ></i> <i class="ml-3 far fa-thumbs-down fa-2x"></i></div>,
        'date':'12-jan-2020'
      },
      {
        'id': 2,
        'name':'Tom',
        'reason': 'Expenses for development',
        'comments': 'Requiremnts for further work',
        'money': '$200',
        'status':<div><i class="far fa-thumbs-up far ml-3 fa-2x" ></i> <i class="ml-3 far fa-thumbs-down fa-2x"></i></div>,
        'date':'12-jan-2020'
      },
      {
        'id': 3,
        'name':'Hamza',
        'reason': 'New Furniture Required',
        'comments': 'We need the most',
        'money': '$200',
        'status':<div><i class="far fa-thumbs-up far ml-3 fa-2x" ></i> <i class="ml-3 far fa-thumbs-down fa-2x"></i></div>,
        'date':'12-jan-2020'
      },
      {
        'id': 4,
        'name':'King',
        'reason': 'Need to update a computer',
        'comments': 'Not fulfil our needs',
        'money': '$200',
        'status':<div><i class="far fa-thumbs-up far ml-3 fa-2x" ></i> <i class="ml-3 far fa-thumbs-down fa-2x"></i></div>,
        'date':'12-jan-2020'
      },
      {
        'id': 5,
        'name':'Kate',
        'reason': 'Need to update a computer',
        'comments': 'Not fulfil our needs',
        'money': '$50',
        'status':<div><i class="far fa-thumbs-up far ml-3 fa-2x" ></i> <i class="ml-3 far fa-thumbs-down fa-2x"></i></div>,
        'date':'12-jan-2020'
      },
      {
        'id': 6,
        'name':'Jack',
        'reason': 'Need to update a computer',
        'comments': 'Not fulfil our needs',
        'money': '$100',
        'status':<div><i class="far fa-thumbs-up far ml-3 fa-2x" ></i> <i class="ml-3 far fa-thumbs-down fa-2x"></i></div>,
        'date':'12-jan-2020'
      },
      {
        'id': 7,
        'name':'Jack',
        'reason': 'Need to update a computer',
        'comments': 'Not fulfil our needs',
        'money': '$700',
        'status':<div><i class="far fa-thumbs-up far ml-3 fa-2x" ></i> <i class="ml-3 far fa-thumbs-down fa-2x"></i></div>,
        'date':'12-feb-2020'
      },
      {
        'id': 8,
        'name':'Jack',
        'reason': 'Need to update a computer',
        'comments': 'Not fulfil our needs',
        'money': '$15311',
        'status':<div><i class="far fa-thumbs-up far ml-3 fa-2x" ></i> <i class="ml-3 far fa-thumbs-down fa-2x"></i></div>,
        'date':'12-aug-2020'
      },
      {
        'id': 9,
        'name':'Jack',
        'reason': 'Need to update a computer  ' ,
        'comments': 'Not fulfil our needs  ',
        'money': '$1241',
        'status':<div><i class="far fa-thumbs-up far ml-3 fa-2x" ></i> <i class="ml-3 far fa-thumbs-down fa-2x"></i></div>,
        'date':'12-july-2020'
      },
      {
        'id': 10,
        'name':'Jack',
        'reason': 'Need to update a computer',
        'comments': 'Not fulfil our needs',
        'money': '$1000',
        'status':<div><i class="far fa-thumbs-up far ml-3 fa-2x" ></i> <i class="ml-3 far fa-thumbs-down fa-2x"></i></div>,
        'date':'12-jan-2020'
      },
      {
        'id': 11,
        'name':'Jack',
        'reason': 'Need to update a computer',
        'comments': 'Not fulfil our needs',
        'money': '$400',
        'status':<div><i class="far fa-thumbs-up far ml-3 fa-2x" ></i> <i class="ml-3 far fa-thumbs-down fa-2x"></i></div>,
        'date':'12-jan-2020'
      }
    ],


  }


 
  render ()
  {
    return(
      
      <MDBContainer fluid >
       
       <NavBar 
        first={"Home"}
        firstRef= {"userhome"}
        second = {"Add Users"}
        secondRef = {"adduser"}
        third = {"Sign Out"}
        thirdRef = {""}
        Username = {"User (Manager)"}
        empId = {120969}
        />

        <br/><br/>
        <MDBContainer>
        <MDBCard>
        
        <Tables 
        Mainheading = {"REIMBURSEMENT REQUESTS"}
        formRef = {"userform"}
        data = {this.state}
        />

        </MDBCard>
        </MDBContainer>
      </MDBContainer>
    
    );
  }
  
}
export default userhomeManager;