import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function ViewTeam() {
    const [Teams, setTeam] = useState([]);
    const {_id}=useParams();
    const history=useNavigate()
    useEffect(() => {
axios.post(`http://localhost:4000/viewteam/${_id}`).then((res)=>{
    setTeam(res.data)
})
    }, [_id])
    console.log(Teams);


    const handleClose=()=>{
history('/TeamTable.js')
    }
    
  return (
    Teams.map((res)=>
    <div className="container h-100" >
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-8 mx-auto" >
          <Card className="card border-dark mx-auto mt-5" >
            <Card.Body className="h-100">
              <h3>View Customer Details_______</h3>
              <Card.Title>Name : {res.Name}</Card.Title>
              <Card.Text >Email: {res.Email}</Card.Text>
              <Card.Text>Date Of Birth :{res.DateOfBirth}</Card.Text>
              <Card.Text>Gender:{res.Gender}</Card.Text>
              <Card.Text>Description:{res.Description }</Card.Text>
              <Card.Text>Role :{res.Role}</Card.Text>
              <Card.Text>Phone Number :{res.PhoneNumber}</Card.Text>
              <Card.Text>Profile Picture:
              <img src={res.ProfilePicture} />
              </Card.Text>

            </Card.Body>
            <Button variant="light"  className="btn-lg btn-block  mt-4" onClick={() => handleClose()}>
            Close  </Button>
          </Card>
        </div>
      </div>
    </div>
   ) );
  
}

export default ViewTeam