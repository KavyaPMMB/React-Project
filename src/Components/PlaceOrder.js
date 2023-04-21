import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
// import SideBar from "./Components/SideBar";
import swal from "sweetalert";

function PlaceOrder()
{ 
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [ProductNumber, setProductNumber] = useState("");
  const [Date, setDate] = useState('');
  

  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      FirstName: FirstName,
      LastName: LastName,
      ProductNumber: ProductNumber,
      Date: Date,
    
    };
    history('/OrderTable.js');
    swal({
        title: "The order has been placed successfully!",
        icon: "success",
      });
  

    
    axios
      .post("http://localhost:4000/createorder", order)
      .then((res) => {
        setFirstName("");
        setLastName("");
        setProductNumber("");
        setDate("");
        
      })
      .catch((err) => console.log(err));
  };
  const handleClose = () => {
    history(`/OrderTable.js`)
  };

  return (
    <div style={{display:"flex"}}>
      <SideBar/>
      <Card className="card border-secondary mx-auto mt-3 " style={{width:"80%"}}>
        <Card.Body className="d-flex flex-column align-items-center">
          <div className="text-center mb-4">
            <h1 className="card-title">Place Order</h1>
            <p className="" style={{ color: "white" }}>
               ___Place an order here..___
            </p>
          </div>
      <Form className="w-100">
        <Form.Group controlId="Name">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter  first name"
            value={FirstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="Last Name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter  Last name"
            value={LastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="Productnumber">
          <Form.Label>Product Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product number"
            value={ProductNumber}
            onChange={(event) => setProductNumber(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter Date"
            value={Date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </Form.Group>




                
          
    

        <Button variant="light"
              type="submit"
              className="btn-lg btn-block  mt-4" onClick={handleSubmit}>
          Submit
        </Button>{" "}
        <Button
              variant="danger"
              type="submit"
              className="btn-lg btn-block  mt-4"
              onClick={handleClose}
            >
              Cancel
            </Button>
      </Form>
      </Card.Body>
      </Card>
    </div>
  );
}

export default PlaceOrder;
