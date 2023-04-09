import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import SideBar from './SideBar'

function AddTeam() {
    const [Name, setName] = useState()
    const [Email, setEmail] = useState()
    const [DateOfBirth, setDateOfBirth] = useState()
    const [Gender, setGender] = useState()
    const [Description, setDescription] = useState()
    const [Role, setRole] = useState()
    const [PhoneNumber, setPhoneNumber] = useState()
    const [ProfilePicture, setProfilePicture] = useState()

     const history=useNavigate()



    const AddTeam=async()=>{
        const addteammem=await axios.post('http://localhost:4000/createteam',{Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber,ProfilePicture})
        console.log(addteammem.data);
     history('/TeamTable.js')
    }

    const handleClose = () => {
        history(`/TeamTable.js`)
      };
      
  return (
    <div style={{display:"flex"}}>
    <SideBar/>
    
    <Card className="card border-secondary mx-auto mt-3 " style={{width:"80%"}}>
      <Card.Body className="d-flex flex-column align-items-center">
        <div className="text-center mb-4">
          <h1 className="card-title">Add Team Members</h1>
          <p className="" style={{ color: "white" }}>
             ___enter team members___
          </p>
        </div>
    <Form className="w-100">
      <Form.Group controlId="Name">
        <Form.Label> Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Member Name"
          value={Name}
          onChange={(e)=>setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={Email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="dob">
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter Date Of Birth"
          value={DateOfBirth}
          onChange={(event) => setDateOfBirth(event.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicSignedstatus">
  <Form.Label style={{ color: "white" }}>Gender</Form.Label>
  <div>
    <Form.Check
      inline
      label="male"
      type="radio"
      name="radio"
      id="male"
      value="true"
      checked={Gender ==="true"}
      onChange={(e) => {
        setGender(e.target.value);
      }}
    />
    <Form.Check
      inline
      label="female"
      type="radio"
      name="radio"
      id="female"
      value="false"
      checked={Gender === "false"}
      onChange={(e) => {
        setGender(e.target.value);
      }}
    />
  </div>
</Form.Group>
<Form.Group controlId="formBasicrole">
  <Form.Label style={{ color: "white" }}>Role</Form.Label>
  <Form.Control as="select" value={Role} onChange={(e) => setRole(e.target.value)}>
  <option value="">Select  a Role</option>
  <option value="Super Admin"> Super Admin</option>
    <option value="Only By Admin">Only By Admin</option>
  </Form.Control>
</Form.Group>



      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Description"
          value={Description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Phone Number"
          value={PhoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formBasicPicture">
  <Form.Label style={{ color: "white" }}>Profile Picture</Form.Label>
  <Form.Control
    type="file"
    accept="image/*"
    onChange={(e) => {
      setProfilePicture(e.target.files[0]);
    }}
  />
</Form.Group>


      <Button variant="light"
            type="submit"
            className="btn-lg btn-block  mt-4" onClick={AddTeam}>
        Submit
      </Button>{" "}
      <Button
            variant="danger"
            type="submit"
            className="btn-lg btn-block  mt-4"
            onClick={handleClose}
          >Cancel</Button>
    </Form>
    </Card.Body>
    </Card>
    </div>
  )
}

export default AddTeam