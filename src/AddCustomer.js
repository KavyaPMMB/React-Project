import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import SideBar from "./SideBar";
import SideBar from "./Components/SideBar";
import swal from "sweetalert";

function AddCustomer()
{ 
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState('');
  const [State, setState] = useState("");
  const [PinCode, setPinCode] = useState('')
  const [Country, setCountry] = useState('')

  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const customer = {
      Name: Name,
      Email: Email,
      Address: Address,
      City: City,
    State: State,
    PinCode:PinCode,
    Country:Country,
    };
    history('/CustomerTable.js');
    swal({
        title: "The customer has been added successfully!",
        icon: "success",
      });
  

    
    axios
      .post("http://localhost:4000/createcustomer", customer)
      .then((res) => {
        setName("");
        setEmail("");
        setAddress("");
        setCity("");
        setState("");
        setPinCode("");
        setCountry("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{display:"flex"}}>
      <SideBar/>
      <Card className="card border-secondary mx-auto mt-3 " style={{width:"80%"}}>
        <Card.Body className="d-flex flex-column align-items-center">
          <div className="text-center mb-4">
            <h1 className="card-title">Add Customer</h1>
            <p className="" style={{ color: "white" }}>
               ___Add Customers___
            </p>
          </div>
      <Form className="w-100">
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

        <Form.Group controlId="exampleFormControlTextarea1">
        <Form.Label>Address</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Address"
            value={Address}
            onChange={(event) => setAddress(event.target.value)}
            required />
      </Form.Group>
      
         {/* <Form.Group controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address"
            value={Address}
            onChange={(event) => setAddress(event.target.value)}
            required
          />
        </Form.Group> */}

        <Form.Group controlId="Address">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            value={City}
            onChange={(event) => setCity(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="State">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="State"
            value={State}
            onChange={(event) => setState(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="PinCode">
          <Form.Label>Pin Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Pin Code"
            value={PinCode}
            onChange={(event) => setPinCode(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="Address">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Country"
            value={Country}
            onChange={(event) => setCountry(event.target.value)}
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

export default AddCustomer;
