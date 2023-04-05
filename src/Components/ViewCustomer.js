import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import './ViewClient.css'

function ViewCustomer() {
  const [customer, setcustomer] = useState([]);
  const { _id } = useParams();
  const history = useNavigate();


  useEffect(() => {
    
    axios
      .get(`http://localhost:4000/viewcustomer/${_id}`)
      .then((res) => setcustomer(res.data))
      .catch((err) => console.log(err));
      console.log('fetching customer data for ID', _id)
  },[]);

  console.log(customer)
  
  const handleClose = () => {
    history(`/CustomerTable.js`)
  };

  return (
    customer.map((res)=>
    <div className="container h-100" >
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-8 mx-auto" >
          <Card className="card border-dark mx-auto mt-5" >
            <Card.Body className="h-100">
              <h3>View Customer Details_______</h3>
              <Card.Title>Name : {res.Name}</Card.Title>
              <Card.Text >Email: {res.Email}</Card.Text>
              <Card.Text>Address :{res.Address}</Card.Text>
              <Card.Text>City:{res.City}</Card.Text>
              <Card.Text>PinCode:{res.PinCode }</Card.Text>
              <Card.Text>Country :{res.Country}</Card.Text>
            </Card.Body>
            <Button variant="light"  className="btn-lg btn-block  mt-4" onClick={() => handleClose()}>
            Close  </Button>
          </Card>
        </div>
      </div>
    </div>
   ) );
}

export default ViewCustomer;
