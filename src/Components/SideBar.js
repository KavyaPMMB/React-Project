import React, { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import './SideBar.css';
import ClientTable from './ClientTable';
import {} from 'react-icons'

function SideBar() {
  const [show, setShow] = useState(true);


  return (
    <div className={`sidebar${show ? ' active' : ''}`}>
      <div className="sidebar-header">
        <h3>MENU</h3>
        
      </div>
      <Nav className="flex-column">
        
        <Nav.Link href="/BookTable.js" style={{color:"white",fontWeight:"900",fontSize:"20px"}}>Books</Nav.Link>
        <Nav.Link href="/AddBookForm.js"style={{color:"white",fontWeight:"700",fontSize:"15px"}}>Add Book</Nav.Link>
      
        <Nav.Link href="/ClientTable.js"style={{color:"white",fontWeight:"900",fontSize:"20px"}}>Clients</Nav.Link>
        <Nav.Link href="/AddClient.js"style={{color:"white",fontWeight:"700",fontSize:"15px"}}>Add Clients</Nav.Link>
    
        <Nav.Link href="/CustomerTable.js"style={{color:"white",fontWeight:"900",fontSize:"20px"}}>Customers</Nav.Link>
        <Nav.Link href="/AddCustomer.js"style={{color:"white",fontWeight:"700",fontSize:"15px"}}>Add Customer</Nav.Link>
    
        <Nav.Link href="/TeamTable.js"style={{color:"white",fontWeight:"900",fontSize:"20px"}}>Team Members</Nav.Link>
        <Nav.Link href="/AddTeam.js"style={{color:"white",fontWeight:"700",fontSize:"15px"}}>Add Team Members</Nav.Link>
      </Nav>
    </div>
  );
}

export default SideBar;

