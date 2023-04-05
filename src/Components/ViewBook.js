import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './ViewClient.css'
import { Button, Card } from 'react-bootstrap';

function ViewBook() {
  const [book, setBook] = useState([]);
  const { _id } = useParams();
  const history=useNavigate()

  useEffect(() => {
    
    axios
      .get(`http://localhost:4000/viewbook/${_id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
       //console.log(res.data);
      console.log('fetching book data for ID', _id)
  },[]);
  console.log(book);

  const handleClose = () => {
    history(`/BookTable.js`)
  };
  return (
    book.map((res)=>
    
    <div className="container h-100" >
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-8 mx-auto" >
          <Card className="card border-dark mx-auto mt-5" >
            <Card.Body className="h-100">
              <h3>View Book Details_______</h3>
              <Card.Title> Book Name : {res.BookName}</Card.Title>
              <Card.Text >Author : {res.Author}</Card.Text>
              <Card.Text>Publications Name:{res.PublicationsName}</Card.Text>
              <Card.Text>Year :{res.Year}</Card.Text>
              <Card.Text>Role :{res.Availability }</Card.Text>
            </Card.Body>
            <Button variant="light"  className="btn-lg btn-block  mt-4" onClick={() => handleClose()}>
            Close  </Button>
          </Card>
        </div>
      </div>
    </div>
   ) );
}

export default ViewBook;
