import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { Route} from 'react-router-dom';

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {

  return (
    <Route >

      <MDBNavbar color=" gradient-card-header blue-gradient " dark expand="md">

        <MDBNavbarBrand>
        <i className="fas fa-comments-dollar fa-2x"></i>
        </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.toggleCollapse} />
        
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

          <MDBNavbarNav left>

            <MDBNavItem >
              <MDBNavLink link to={"./"+this.props.firstRef} className="text-white px-2"><h4><b>{this.props.first}</b></h4></MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
            <MDBNavLink to={"/"+this.props.secondRef } className="text-white px-2"><h4><b> {this.props.second}</b></h4></MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
            <MDBNavLink active to={"/"+this.props.alluserRef }  className="text-white px-2"><h4><b> {this.props.allusers} </b></h4></MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
            <MDBNavLink active to={"/"+this.props.thirdRef } onClick={this.props.Signout} className="text-white px-2"><h4><b> {this.props.third} </b></h4></MDBNavLink>
            </MDBNavItem>


          </MDBNavbarNav>

          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown className ="px-5 ">
                <MDBDropdownToggle nav  > 
                  <MDBIcon icon="fas fa-user-circle fa-2x " /> 
                </MDBDropdownToggle>
                <MDBDropdownMenu className=" waves-effect waves-light dropdown-default">
                  <MDBDropdownItem href="#!">{this.props.Username}</MDBDropdownItem>
                  <MDBDropdownItem href="/">ID - {this.props.empId}</MDBDropdownItem>
                  <MDBDropdownItem href="/" onClick={this.props.Signout}>Sign out</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Route>
    );
  }
}

export default Navbar;