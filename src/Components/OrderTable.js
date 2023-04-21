import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiEye } from "react-icons/hi";
import "./ClientTable.css";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Modal, Table } from "react-bootstrap";
import SideBar from "./SideBar";
import ReactPaginate from "react-paginate";

function OrderTable() {
  const [order, setorder] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const history = useNavigate();
  const { _id } = useParams();
  const [PageNumber, setPageNumber] = useState(0)
    const perpage=5;
    const pageclick=PageNumber*perpage;
    const countpage=Math.ceil(order.length/perpage);
  useEffect(() => {
    axios
      .get("http://localhost:4000/getorder")
      .then((res) => {
        setorder(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
 
  const handleDelete = (_id) => {
    setDeleteId(_id);
    setShowModal(true);
  };

  const deleteOrder = () => {
    axios
      .delete(`http://localhost:4000/deleteorder/${deleteId}`)
      .then((res) => {
        setorder(order.filter((del) => del._id !== deleteId));
        console.log(`order with ID ${deleteId} deleted`);
        setShowModal(false);
      });
  };

//   const handleView = (_id) => {
//     history(`/ViewClient.js/${_id}`);
//     console.log(`View client with ID ${_id}`);
//   };

  const handleEdit = (_id) => {
    history(`/EditOrder.js/${_id}`);
    console.log(`Edit  order with ID ${_id}`);
  };

  const changepage=({selected})=>{
    setPageNumber(selected);

   }

  return (
    <div style={{ display: "flex" }}>
      <SideBar style={{ position: "fixed" }}/>
      <div className="container" style={{ overflow: "auto" ,width:"auto"}}>
      <div className="d-flex justify-content-end mb-3"></div>
      <Table className="table table-bordered table-hover mt-5 table-responsive">
        <thead>
          <tr class="table-dark">
            <th>Product Id</th>
            <th> First Name</th>
            <th>Last Name</th>
            <th>Product Number</th>
            <th>Date</th>
            <th>Actions</th>
           
          </tr>
        </thead>
        <tbody class="table-light">
    
            {order.slice(pageclick,pageclick+perpage).map((data,index)=>(
              <tr key={index}>
                <td>{data._id}</td>
              <td>{data.FirstName}</td>
              <td>{data.LastName}</td>
              <td>{data.ProductNumber}</td>
               <td>{data.Date}</td>
              <td>
                {/* <HiEye
                  style={{ cursor: "pointer", marginRight: "18px" }}
                  onClick={() => handleView(data._id)}
                />{" "} */}
                <FaUserEdit
                  style={{
                    cursor: "pointer",
                    marginRight: "18px",
                    color: "black",
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
          <Modal.Title>Delete Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this Order?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteOrder}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
    
  );
}

export default OrderTable;
