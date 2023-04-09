import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import SideBar from './SideBar'
import { HiEye } from 'react-icons/hi'
import { FaTrashAlt, FaUserEdit } from 'react-icons/fa'

function TeamTable() {
    const [Team, setTeam] = useState([])
    const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
    const {_id}=useParams()
    const history=useNavigate()
    useEffect(() => {
    axios.get('http://localhost:4000/getteam').then((team)=>{
        setTeam(team.data)
    })
    },[])

    const handleView=(_id)=>{
        history(`/ViewTeam.js/${_id}`)
        console.log(`View member with ID ${_id}`);
    }

    const handleDelete = (_id) => {
      setDeleteId(_id);
      setShowModal(true);
    };
  
    const deleteMember = () => {
      axios
        .delete(`http://localhost:4000/deleteteam/${deleteId}`)
        .then((res) => {
          setTeam(Team.filter((del) => del._id !== deleteId));
          console.log(`member with ID ${deleteId} deleted`);
          setShowModal(false);
        });
    };

    const handleEdit=(_id)=>{
        history(`/EditTeam.js/${_id}`)
        console.log(`Edit member with ID ${_id}`);
    }

    
  return (
    <div style={{ display: "flex" }}>
      <SideBar style={{ position: "fixed" }}/>
      <div className="container" style={{ overflow: "auto" ,width:"auto"}}>
      <div className="d-flex justify-content-end mb-3">
      <table className="table table-bordered table-hover mt-5 table-responsive">
        <thead>
          <tr class="table-dark">
            <th>Name</th>
            <th>Email</th>
            <th>Date Of Birth</th>
            <th>Gender</th>
            <th>Description</th>
            <th>Role</th>
            <th>Phone Number</th>
            <th>Profile Picture</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody class="table-dark">
          {Team.map((data) => (
            <tr key={data._id}>
              <td>{data.Name}</td>
              <td>{data.Email}</td>
              <td>{data.DateOfBirth}</td>
              <td>{data.Gender ? "male" : "female"}</td>
              <td>{data.Description}</td>
              <td>{data.Role}</td>
              <td>{data.PhoneNumber}</td>
              <td><img src={data.ProfilePicture} /></td>


              <td>
                <HiEye
                  style={{ cursor: "pointer", marginRight: "18px" }}
                  onClick={() => handleView(data._id)}
                />{" "}
                <FaUserEdit
                  style={{
                    cursor: "pointer",
                    marginRight: "18px",
                    color: "pink",
                  }}
                  onClick={() => handleEdit(data._id)}
                />{" "}
                <FaTrashAlt
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={() => handleDelete(data._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this member?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteMember}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal> 
    </div>
    </div>
    </div>
  )
}

export default TeamTable