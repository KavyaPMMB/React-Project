import React, { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import "./SideBar.css";
import ClientTable from "./ClientTable";
import {} from "react-icons";
import {
  FaBook,
  FaClipboardList,
  FaPlus,
  FaUser,
  FaUsers,
} from "react-icons/fa";

function SideBar() {
  
  const [show, setShow] = useState(false);



  return (
    <div className={`sidebar${show ? " active" : ""}`}>
      <div className="sidebar-header">
        <h3>MENU</h3>
        
      </div>
      <Nav className="flex-column">
        <Nav.Link href="/BookTable.js">
          <FaBook className="sidebar-icon" />
          <span className="sidebar-text">BOOKS</span>
        </Nav.Link>
        <Nav.Link href="/AddBookForm.js">
          <FaPlus className="sidebar-icon" />
          <span className="sidebar-text">Add Book</span>
        </Nav.Link>
        <h1>___________</h1>
        
        <Nav.Link href="/ClientTable.js">
          <FaUser className="sidebar-icon" />
          <span className="sidebar-text">CLIENTS</span>
        </Nav.Link>
        <Nav.Link href="/AddClient.js">
          <FaPlus className="sidebar-icon" />
          <span className="sidebar-text">Add Client</span>
        </Nav.Link>
        <h1>___________</h1>

        <Nav.Link href="/CustomerTable.js">
          <FaUsers className="sidebar-icon" />
          <span className="sidebar-text">CUSTOMERS</span>
        </Nav.Link>
        <Nav.Link href="/AddCustomer.js">
          <FaPlus className="sidebar-icon" />
          <span className="sidebar-text">Add Customer</span>
        </Nav.Link>
        <h1>___________</h1>

        <Nav.Link href="/TeamTable.js">
          <FaUsers className="sidebar-icon" />
          <span className="sidebar-text">TEAM MEMBERS</span>
        </Nav.Link>
        <Nav.Link href="/AddTeam.js">
          <FaPlus className="sidebar-icon" />
          <span className="sidebar-text">Add Team Member</span>
        </Nav.Link>
        <h2>___________</h2>

        <Nav.Link href="/OrderTable.js">
          <FaClipboardList className="sidebar-icon" />
          <span className="sidebar-text">ORDERS</span>
        </Nav.Link>
        <Nav.Link href="/PlaceOrder.js">
          <FaPlus className="sidebar-icon" />
          <span className="sidebar-text">Place Order</span>
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default SideBar;
