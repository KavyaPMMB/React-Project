import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./EditBookForm.css";
import swal from "sweetalert";

function EditTeam() {
  const [teamData, setTeamData] = useState([]);
  const { _id } = useParams();
  const history = useNavigate();
  useEffect(() => {
    axios.post(`http://localhost:4000/default/${_id}`).then((res) => {
      setTeamData(res.data);
    });
  }, []);
  console.log(teamData);

  const [Name, setName] = useState(teamData.Name)
    const [Email, setEmail] = useState(teamData.Email)
    const [DateOfBirth, setDateOfBirth] = useState(teamData.DateOfBirth)
    const [Gender, setGender] = useState(teamData.Gender)
    const [Description, setDescription] = useState(teamData.Description)
    const [Role, setRole] = useState(teamData.Role)
    const [PhoneNumber, setPhoneNumber] = useState(teamData.PhoneNumber)
    const [ProfilePicture, setProfilePicture] = useState(teamData.ProfilePicture)

 

  function handleSubmit() {
    axios
      .put(`http://localhost:4000/updateteam/${_id}`, {
        Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber,ProfilePicture
      })
      .then((res) => {
        console.log(`team with ID ${_id} updated`);
      });
    history("/TeamTable.js");
    swal({
      title: "The team details has been updated successfully!",
      icon: "success",
    });
  }
  const handleClose = () => {
    history(`/TeamTable.js`)
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
                Value={teamData.Name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicusername">
              <Form.Label style={{ color: "white" }}>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                Value={teamData.Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ color: "white" }}>
                Date Of Birth
              </Form.Label>
              <Form.Control
                type="date"
                name="dob"
                Value={teamData.DateOfBirth}
                onChange={(e) => {
                  setDateOfBirth(e.target.value);
                }}
              />
              </Form.Group>

              <Form.Group controlId="formgender">
  <Form.Label style={{ color: "white" }}>Gender</Form.Label>
  <div>
    <Form.Check
      inline
      label="male"
      type="radio"
      name="radio"
      id="true"
      value='true'
  
      defaultChecked={teamData.Gender}
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
      value='false'
      defaultChecked={teamData.Gender}
      onChange={(e) => {
        setGender(e.target.value);
      }}
    />
  </div>
</Form.Group>

        
<Form.Group controlId="formBasicrole">
  <Form.Label style={{ color: "white" }}>Role</Form.Label>
  <Form.Control as="select" onChange={(e) => setRole(e.target.value)}>
  <option value=''>Select  a Role</option>
    <option selected={teamData.Role =='Super Admin'} value="Super Admin">Super Admin</option>
    <option selected={teamData.Role == 'Only By Admin'} value="Only By Admin">Only By Admin</option>
  </Form.Control>
</Form.Group>

<Form.Group controlId="formBasicName">
              <Form.Label style={{ color: "white" }}>Description</Form.Label>
              <Form.Control
                type="text"
                Value={teamData.Description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Form.Group>

               <Form.Group controlId="formBasicnumber">
              <Form.Label style={{ color: "white" }}>PhoneNumber</Form.Label>
              <Form.Control
                type="number"
                name="phonenumber"
                Value={teamData.PhoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
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
export default EditTeam;
