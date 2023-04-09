import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./EditBookForm.css";
import swal from "sweetalert";

function EditCustomer() {
  const [customerData, setcustomerdata] = useState([]);
  const { _id } = useParams();
  const history = useNavigate();
  useEffect(() => {
    axios.post(`http://localhost:4000/defaultcustomerform/${_id}`).then((res) => {
      setcustomerdata(res.data);
    });
  }, []);
  console.log(customerData);

  const [Name, setName] = useState(customerData.Name);
  const [Email, setEmail] = useState(customerData.Email);
  const [Address, setAddress] = useState(customerData.Address);
  const [City, setCity] = useState(customerData.City);
  const [PinCode, setPinCode] = useState(customerData.PinCode);
  const [State, setState] = useState(customerData.State);
  const [Country, setCountry] = useState(customerData.Country);





 

  function handleSubmit() {
    axios
      .put(`http://localhost:4000/updatecustomer/${_id}`, {
        Name,Email,Address,City,State,PinCode,Country
      })
      .then((res) => {
        console.log(`Customer with ID ${_id} updated`);
      });
    history("/CustomerTable.js");
    swal({
        title: "The customer details has been updated successfully!",
        icon: "success",
      });
  }
  
  const handleClose = () => {
    history(`/Customerable.js`)
  };

  return (
    <div>
      <Card className="card border-secondary mx-auto mt-3 ">
        <Card.Body className="d-flex flex-column align-items-center">
          <div className="text-center mb-4">
            <h1 className="card-title">EDIT</h1>
            <p className="" style={{ color: "white" }}>
              Please enter your updates
            </p>
          </div>
          <Form className="w-100">
            <Form.Group controlId="formBasicName">
              <Form.Label style={{ color: "white" }}>Name</Form.Label>
              <Form.Control
                type="text"
                Value={customerData.Name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ color: "white" }}>Email</Form.Label>
              <Form.Control
                type="email"
                name="Email"
                Value={customerData.Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            {/* <Form.Group controlId="formBasicAddress">
              <Form.Label style={{ color: "white" }}>Address</Form.Label>
              <Form.Control
                type="text"
                name="Address"
                Value={customerData.Address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </Form.Group> */}

      <Form.Group controlId="exampleFormControlTextarea1">
        <Form.Label>Address</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Address"
            value={customerData.Address}
            onChange={(e) => setAddress(e.target.value)}
            required />
      </Form.Group>

            <Form.Group controlId="formBasicCity">
              <Form.Label style={{ color: "white" }}>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                Value={customerData.City}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicpincode">
              <Form.Label style={{ color: "white" }}>Pin Code</Form.Label>
              <Form.Control
                type="text"
                name="pincode"
                Value={customerData.PinCode}
                onChange={(e) => {
                  setPinCode(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicstate">
              <Form.Label style={{ color: "white" }}>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                Value={customerData.State}
                onChange={(e) => {
                  setState(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasiccountry">
              <Form.Label style={{ color: "white" }}>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                Value={customerData.Country}
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              />
            </Form.Group>

            <Button
              className="btn-lg btn-block rounded-pill mt-4"
              variant="light"
              onClick={handleSubmit}
            >
              Update
            </Button>{" "}
            <Button
             className="btn-lg btn-block rounded-pill mt-4"
             variant="light"
              onClick={handleClose}
            >Cancel</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
export default EditCustomer;
