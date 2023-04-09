import React, { useState } from 'react'
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import './NavBar.css'
import { FaBookOpen } from 'react-icons/fa'


function NavBar() {
  // const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <Navbar variant='dark' bg='dark' collapseOnSelect expand="lg" style={{backgroundColor:"#548dc2"}}>
      <Container>
       <Navbar.Brand><h1 style={{color: "white",fontFamily: 'Montserrat', fontSize: "30px", fontWeight:"700", letterSpacing:' 2px', textTransform: "uppercase", textShadow: "2px 2px #000000"}}>
       <FaBookOpen style={{ marginRight: '10px',color:"greenyellow" }} />Book Avenue</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav>
            <Nav.Link href="/SignUp.jsx"><h5>Sign Up</h5></Nav.Link>
            <Nav.Link eventKey={2} href="/Login.js">
            <h5>Log In</h5>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}

export default NavBar