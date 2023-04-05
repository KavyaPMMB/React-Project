import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiEye } from "react-icons/hi";
import "./ClientTable.css";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import SideBar from "./SideBar";

function ClientTable() {
  const [client, setclient] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const history = useNavigate();
  const { _id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:4000/getclient")
      .then((res) => {
        setclient(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
 
  const handleDelete = (_id) => {
    setDeleteId(_id);
    setShowModal(true);
  };

  const deleteClient = () => {
    axios
      .delete(`http://localhost:4000/deleteclient/${deleteId}`)
      .then((res) => {
        setclient(client.filter((del) => del._id !== deleteId));
        console.log(`Client with ID ${deleteId} deleted`);
        setShowModal(false);
      });
  };

  const handleView = (_id) => {
    history(`/ViewClient.js/${_id}`);
    console.log(`View client with ID ${_id}`);
  };

  const handleEdit = (_id) => {
    history(`/EditClientForm.js/${_id}`);
    console.log(`Edit  client with ID ${_id}`);
  };

  return (
    <div style={{ display: "flex" }}>
      <SideBar style={{ position: "fixed" }}/>
      <div className="container" style={{ overflow: "auto" ,width:"auto"}}>
      <div className="d-flex justify-content-end mb-3">
      <table className="table table-bordered table-hover mt-5 table-responsive">
        <thead>
          <tr class="table-dark">
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Signed Status</th>
            <th>Role</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody class="table-dark">
          {client.map((data) => (
            <tr key={data._id}>
              <td>{data.Name}</td>
              <td>{data.UserName}</td>
              <td>{data.Email}</td>
              <td>{data.SignedStatus ? "Sign In" : "Not Sign In"}</td>
              <td>{data.Role}</td>
              <td>{data.PhoneNumber}</td>
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
        <Modal.Body>Are you sure you want to delete this client?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteClient}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
    </div>
  );
}

export default ClientTable;
