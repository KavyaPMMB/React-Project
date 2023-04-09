import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./SideBar";
import "./ClientTable.css"
import SideBar from "./SideBar";
import ReactPaginate from "react-paginate";

function CustomerTable({}) {
  const [customers, setcustomers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const { _id } = useParams();
  const [PageNumber, setPageNumber] = useState(0)
  const perpage=5;
  const pageclick=PageNumber*perpage;
  const countpage=Math.ceil(customers.length/perpage);
  const history = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:4000/getcustomer")
      .then((res) => {
        setcustomers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (_id) => {
    setDeleteId(_id);
    setShowModal(true);
  };

  const deletecustomer = () => {
    axios
      .delete(`http://localhost:4000/deletecustomer/${deleteId}`)
      .then((res) => {
        setcustomers(customers.filter((del) => del._id !== deleteId));
        console.log(`Customer with ID ${deleteId} deleted`);
        setShowModal(false);
      });
  };

  const handleView = (_id) => {
    history(`/ViewCustomer.js/${_id}`);
    console.log(`View Customer with ID ${_id}`);
  };

  const handleEdit = (_id) => {
    history(`/EditCustomer.js/${_id}`);
    console.log(`Edit customer with ID ${_id}`);
  };
  const changepage=({selected})=>{
    setPageNumber(selected);

   }

  

  return (
    <div style={{ display: "flex" }}>
      
      <SideBar style={{ position: "fixed" }}/>
      <div className="container" style={{ overflow: "auto" ,width:"auto"}}>
      <div className="d-flex justify-content-end mb-3"></div>
          
        <Table className='table table-bordered table-hover mt-5 table-responsive' style={{}}>
          <thead>
            <tr class="table-dark">
              <th>Name </th>
              <th>Email</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Pin Code</th>
              <th>Country</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody class="table-dark">
            {/* {customers.map((data) => (
              <tr key={data._id}> */}
              {customers.slice(pageclick,pageclick+perpage).map((data,index)=>(
              <tr key={index}>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td>{data.Address}</td>
                <td>{data.City}</td>
                <td>{data.State}</td>
                <td>{data.PinCode}</td>
                <td>{data.Country}</td>

                <td>
                  <FaEye
                    style={{ cursor: "pointer", marginRight: "18px" }}
                    onClick={() => handleView(data._id)}
                  />
                  {"  "}
                  <FaEdit
                    style={{
                      cursor: "pointer",
                      color: "yellow",
                      marginRight: "18px",
                    }}
                    onClick={() => handleEdit(data._id)}
                  />{" "}
                  <FaTrash
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() => handleDelete(data._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ReactPaginate
  previousLabel={"<<"} 
  nextLabel={">>"}
  pageCount={countpage}
  onPageChange={changepage}
  containerClassName={"pagination justify-content-center paginationBttns"}
  previousLinkClassName={"previousBttn"}
  nextLinkClassName={"nextBttn"}
  activeClassName={"paginationActive"}
  disabledClassName={"paginationDisabled "}
/> 
        <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this customer?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deletecustomer}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
    
  );
}

export default CustomerTable;
