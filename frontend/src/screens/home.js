import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import Navigbar from './navbar.js';
import '../index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className='parallax'>
        <Navigbar/>

        <div className = "container mt-5" style = {{color:"White",textAlign:'left'}}>
          <br/>
          <br/>
          
          <h3 style={{color:"white"}}>Trampoline Park & Ticket Redemption Games </h3>
          <h3>
              <Nav.Link href="/build" style={{color:"white"}}>Build Now?</Nav.Link>
          </h3>
        </div>

      

    </div>
        
  )
    
}

export default Home;
