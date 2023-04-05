import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./SideBar";
import swal from "sweetalert";

function AddClient()
{ 
  const [Name, setName] = useState("");
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [SignedStatus, setSignedStatus] = useState("");
  const [Role, setRole] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState("");

  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const client = {
      Name: Name,
      UserName: UserName,
      Email: Email,
      SignedStatus: SignedStatus,
    Role: Role,
    PhoneNumber:PhoneNumber,
    };
    history('/ClientTable.js');
    swal({
      title: "The client has been added successfully!",
      icon: "success",
    });

    
    axios
      .post("http://localhost:4000/createclient", client)
      .then((res) => {
        setName("");
        setUserName("");
        setEmail("");
        setSignedStatus("");
        setRole("");
        setPhoneNumber("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{display:"flex"}}>
      <Sidebar/>
      <Card className="card border-secondary mx-auto mt-3 " style={{width:"80%"}}>
        <Card.Body className="d-flex flex-column align-items-center">
          <div className="text-center mb-4">
            <h1 className="card-title">Add Client</h1>
            <p className="" style={{ color: "white" }}>
               ___Add Clients___
            </p>
          </div>
      
      <Form  className="w-100">
        <Form.Group controlId="Name">
          <Form.Label> Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter  name"
            value={Name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="username">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter user name"
            value={UserName}
            onChange={(event) => setUserName(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            value={Email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicSignedstatus">
  <Form.Label style={{ color: "white" }}>Signed Status</Form.Label>
  <div>
    <Form.Check
      inline
      label="Sign In"
      type="radio"
      name="radio"
      id="sign-in"
      value="true"
      checked={SignedStatus ==="true"}
      onChange={(e) => {
        setSignedStatus(e.target.value);
      }}
    />
    <Form.Check
      inline
      label="Not Sign In"
      type="radio"
      name="radio"
      id="not-sign-in"
      value="false"
      checked={SignedStatus === "false"}
      onChange={(e) => {
        setSignedStatus(e.target.value);
      }}
    />
  </div>
</Form.Group>


<Form.Group controlId="formBasicrole">
  <Form.Label style={{ color: "white" }}>Role</Form.Label>
  <Form.Control as="select" value={Role} onChange={(e) => setRole(e.target.value)}>
  <option value="">Select  a Role</option>
  <option value="Super Admin"> Super Admin</option>
    <option value="Only By Admin">Only By Admin</option>
  </Form.Control>
</Form.Group>


        <Form.Group controlId="phonenumber">
          <Form.Label>PhoneNumber</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phonenumber"
            value={PhoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            required
          />
        </Form.Group>

        <Button variant="light"
              type="submit"
              className="btn-lg btn-block  mt-4" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      </Card.Body>
      </Card>
    </div>
  );
}

export default AddClient;
