import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';

class NavigBar extends Component {
  render() {
    return (
      <div>

        <Navbar className="navbar-dark fixed-top" style={{backgroundColor:'black',height:"80px"}} expand="lg">
          <Navbar.Brand className="container fs-1" href="/" style={{fontSize:30}}>SPORTIN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="" id="basic-navbar-nav">
            <Nav className="ms-auto mb-2 mb-lg-0" >
              
              <NavDropdown  title={<span className="text-light">Explore</span>} id="basic-nav-dropdown" >
                
                {/* <NavDropdown.Item href="#" >Leisure</NavDropdown.Item> */}
                <NavDropdown  title={<span className="text-dark">Leisure</span>} id="basic-nav-dropdown" >
                
                    <NavDropdown.Item href="/arcade" >Arcade</NavDropdown.Item>
                    <NavDropdown.Item href="#">VR</NavDropdown.Item>
                    <NavDropdown.Item href="#" >Simulator</NavDropdown.Item>
                    <NavDropdown.Item href="#">Trampoline Park</NavDropdown.Item>
                    <NavDropdown.Item href="#" >Soft Play</NavDropdown.Item>
                    <NavDropdown.Item href="#">Video Games</NavDropdown.Item>
                
                </NavDropdown>
                <NavDropdown.Item href="#">Sports</NavDropdown.Item>
                
              </NavDropdown>

              <NavDropdown  title={<span className="text-light">Support</span>} id="basic-nav-dropdown" >
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="nav-item" href="/build" style={{color:'white'}} id="basic-nav-dropdown">Build</Nav.Link>
              
              <Nav.Link className="nav-item" href="/profile" style={{color:'white'}} id="basic-nav-dropdown" >Account</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
        

      </div>

      
    );
  }
}

export default NavigBar;
