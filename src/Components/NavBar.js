import React, { useState } from 'react'
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import './NavBar.css'

function NavBar() {
  // const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <Navbar variant='dark' bg='dark' collapseOnSelect expand="lg" style={{backgroundColor:"#548dc2"}}>
      <Container>
       <Navbar.Brand>BOOKS</Navbar.Brand>
        {/* <Navbar.Brand onClick={() => setShowSidebar(true)} >BOOKS</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           {/* {<Nav.Link href="#features">Features</Nav.Link>} */}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown"> */}
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
              {/* <NavDropdown.Item href="#action/3.2"> */}
                {/* Another action */}
              {/* </NavDropdown.Item> */}
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4"> */}
                {/* Separated link */}
              {/* </NavDropdown.Item> */}
            {/* </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="/SignUp.jsx">Sign Up</Nav.Link>
            <Nav.Link eventKey={2} href="/Login.js">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}

export default NavBar