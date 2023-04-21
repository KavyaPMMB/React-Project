import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './ViewClient.css'
import { Button, Card, Table } from 'react-bootstrap';

function UserOrderDetails() {
  const [book, setBook] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);

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

//   const handleClose = () => {
//     history(`/UserHome.js`)
//   };
  return (
    
    
    <div className="container h-100" >
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-8 mx-auto" >
        <Table striped bordered hover>
      <thead class="table-dark">
        <tr>
          <th>BookName</th>
        </tr>
      </thead>
      <tbody class="table-light">
        {book.map((res)=>(
        <tr key={res._id}>
          <td>{res.BookName}</td>
        </tr>
        
        ))}
      </tbody>
    </Table>
        </div>
      </div>
    </div>
   ) 
}

export default UserOrderDetails;
