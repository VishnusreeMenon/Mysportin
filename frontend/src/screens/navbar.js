import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';

class NavigBar extends Component {
  state = {
    innerWidth: window.innerWidth
  }

  componentDidMount() {
      window.addEventListener("resize", this.resize.bind(this))
      this.resize()
  }

  resize() {
      this.setState({innerWidth: window.innerWidth})
  }

  getColor(innerWidth) {
      if (innerWidth <= 770) return "black"
      return ""
  }
  render() {
    return (
      <div>

        <Navbar className="navbar-dark fixed-top" style={{backgroundColor:'black',height:"100px"}} expand="md">
          <Navbar.Brand className="fs-1" href="/" style={{fontSize:30}}>SPORTIN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="" id="basic-navbar-nav">
            <div className="m-auto">
                
            </div>
            <Nav className="mb-2 mb-lg-0" >
              
              <NavDropdown  title={<span className="text-light">Explore</span>} style={{color:"white",backgroundColor:this.getColor(this.state.innerWidth),width:"100%"}} id="basic-nav-dropdown"  >
                
                {/* <NavDropdown.Item href="#" >Leisure</NavDropdown.Item> */}
                <NavDropdown  title={<span className="text-dark">Leisure</span>} id="basic-nav-dropdown" >
                
                    <NavDropdown.Item href="/arcade" >Arcade</NavDropdown.Item>
                    <NavDropdown.Item href="#">VR</NavDropdown.Item>
                    <NavDropdown.Item href="#" >Simulator</NavDropdown.Item>
                    <NavDropdown.Item href="#">Trampoline Park</NavDropdown.Item>
                    <NavDropdown.Item href="#" >Soft Play</NavDropdown.Item>
                    <NavDropdown.Item href="#">Video Games</NavDropdown.Item>
                
                </NavDropdown>
                <NavDropdown title={<span className="text-dark">Sports</span>} href="#">Sports</NavDropdown>
                
              </NavDropdown>

              <NavDropdown  title={<span className="text-light">Support</span>} id="basic-nav-dropdown" style={{color:"white",backgroundColor:this.getColor(this.state.innerWidth),width:"100%"}}>
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="nav-item" href="/build" style={{color:"white",backgroundColor:this.getColor(this.state.innerWidth),width:"100%"}} id="basic-nav-dropdown" >Build</Nav.Link>
              
              <Nav.Link className="nav-item" href="/profile" style={{color:"white",backgroundColor:this.getColor(this.state.innerWidth),width:"100%"}} id="basic-nav-dropdown" >Account</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
        

      </div>

      
    );
  }
}

export default NavigBar;
