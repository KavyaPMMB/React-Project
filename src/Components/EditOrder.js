import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./EditBookForm.css";
import swal from "sweetalert";

function EditOrder() {
  const [orderData, setorderdata] = useState([]);
  const { _id } = useParams();
  const history = useNavigate();
  useEffect(() => {
    axios.post(`http://localhost:4000/defaultorder/${_id}`).then((res) => {
      setorderdata(res.data);
    });
  }, []);
  console.log(orderData);

  const [FirstName, setFirstName] = useState(orderData.FirstName);
  const [LastName, setLastName] = useState(orderData.LastName);
  const [ProductNumber, setProductNumber] = useState(orderData.ProductNumber);
  const [Date, setDate] = useState(orderData.Date);
  




 

  function handleSubmit() {
    axios
      .put(`http://localhost:4000/updateorder/${_id}`, {
        FirstName,LastName,ProductNumber,Date
      })
      .then((res) => {
        console.log(`order with ID ${_id} updated`);
      });
    history("/OrderTable.js");
    swal({
        title: "The order details has been updated successfully!",
        icon: "success",
      });
  }
  
  const handleClose = () => {
    history(`/OrderTable.js`)
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
              <Form.Label style={{ color: "white" }}> First Name</Form.Label>
              <Form.Control
                type="text"
                Value={orderData.FirstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasiclasslastName">
              <Form.Label style={{ color: "white" }}> Last Name</Form.Label>
              <Form.Control
                type="text"
                Value={orderData.LastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicproductnumber">
              <Form.Label style={{ color: "white" }}>Product Number</Form.Label>
              <Form.Control
                type="text"
                Value={orderData.ProductNumber}
                onChange={(e) => {
                  setProductNumber(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicdate">
              <Form.Label style={{ color: "white" }}>Date</Form.Label>
              <Form.Control
                type="text"
                Value={orderData.Date}
                onChange={(e) => {
                  setDate(e.target.value);
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
export default EditOrder;
