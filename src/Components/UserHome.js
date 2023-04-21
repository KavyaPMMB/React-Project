import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';

function UserHome() {
    const [books, setBooks] = useState([]);
    

    const {_id}=useParams()
    const history=useNavigate()

    useEffect(() => {
        axios
          .get("http://localhost:4000/getbook")
          .then((res) => {
            setBooks(res.data);
          })
          .catch((err) => console.log(err));
      }, []);

      const handleView = (_id) => {
        history(`/UserOrderDetails.js/${_id}`);
        console.log(`View book with ID ${_id}`);
      };
     
    

  return (
    <div className='row' style={{justifyContent:"center"}}>
        {books.map((res)=>(
    <Card style={{ width: '18rem' ,float:'left',margin:"15px"}}>
      <Card.Body>
        <Card.Title>{res.BookName}</Card.Title>
        <Card.Text>Author :{res.Author}</Card.Text>
        <Card.Text>Publications :{res.PublicationsName}</Card.Text>
        <Card.Text>Availability :{res.Availability}</Card.Text>


        <Button variant="outline-light" onClick={() => handleView(res._id)}>Add To Cart</Button>
      </Card.Body>
    </Card>
    ))}
    </div>
  )
}

export default UserHome;