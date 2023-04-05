import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import './ViewClient.css'

function ViewClient() {
  const [client, setclient] = useState([]);
  const { _id } = useParams();
  const history = useNavigate();


  useEffect(() => {
    
    axios
      .get(`http://localhost:4000/viewclient/${_id}`)
      .then((res) => setclient(res.data))
      .catch((err) => console.log(err));
      console.log('fetching client data for ID', _id)
  },[]);

  console.log(client)
  
  const handleClose = () => {
    history(`/ClientTable.js`)
  };

  return (
    client.map((res)=>
    <div className="container h-100" >
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-8 mx-auto" >
          <Card className="card border-dark mx-auto mt-5" >
            <Card.Body className="h-100">
              <h3>View Client Details_______</h3>
              <Card.Title>Name : {res.Name}</Card.Title>
              <Card.Text >User Name: {res.UserName}</Card.Text>
              <Card.Text>Email :{res.Email}</Card.Text>
              <Card.Text>Signed Status:{res.SignedStatus ? "Sign In" : "Not Sign In"}</Card.Text>
              <Card.Text>Role :{res.Role }</Card.Text>
              <Card.Text>Phone Number :{res.PhoneNumber}</Card.Text>
            </Card.Body>
            <Button variant="light"  className="btn-lg btn-block  mt-4" onClick={() => handleClose()}>
            Close  </Button>
          </Card>
        </div>
      </div>
    </div>
   ) );
}

export default ViewClient;
