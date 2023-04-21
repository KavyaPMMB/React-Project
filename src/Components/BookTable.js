import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./SideBar";
import "./ClientTable.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import ReactPaginate from 'react-paginate'
  import { Pagination } from 'react-bootstrap';
  

function BookTable({}) {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const { _id } = useParams();
  const [PageNumber, setPageNumber] = useState(0)
    const perpage=5;
    const pageclick=PageNumber*perpage;
    const countpage=Math.ceil(books.length/perpage);

  const history = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:4000/getbook")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (_id) => {
    setDeleteId(_id);
    setShowModal(true);
  };

  const deleteBook = () => {
    axios
      .delete(`http://localhost:4000/deletebook/${deleteId}`)
      .then((res) => {
        setBooks(books.filter((del) => del._id !== deleteId));
        console.log(`Book with ID ${deleteId} deleted`);
        setShowModal(false);
      });
  };

  const handleView = (_id) => {
    history(`/ViewBook.js/${_id}`);
    console.log(`View book with ID ${_id}`);
  };

  const handleEdit = (_id) => {
    history(`/EditBookForm.js/${_id}`);
    console.log(`Edit book with ID ${_id}`);
    toast.success('🦄 Wow book edited!')
    

  };

  const filteredBooks = books.filter((book) =>
    book.BookName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const changepage=({selected})=>{
    setPageNumber(selected);

   }
  

  return (
    <div style={{ display: "flex" }}>
      <Sidebar style={{ position: "fixed" }}/>
      <div className="container" style={{ overflow: "auto" ,width:"auto"}}>
      <div className="d-flex justify-content-end mb-3 mt-5">
          <Form.Control
            type="text"
            placeholder="Search by book name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          </div>
        <Table className='table table-bordered justify-content-end table-hover mt-5 table-responsive' style={{}}>
          <thead>
            <tr class="table-dark">
              <th>Book Name   </th>
              <th>Author</th>
              <th>Publications</th>
              <th>Year</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody class="table-light">
          {/* {filteredBooks.map((book) => ( */}
          {filteredBooks.slice(pageclick,pageclick+perpage).map((book,index)=>(
              <tr key={index}>
                <td>{book.BookName}</td>
                <td>{book.Author}</td>
                <td>{book.PublicationsName}</td>
                <td>{book.Year}</td>
                <td>{book.Availability}</td>
                <td>
                  <FaEye
                    style={{ cursor: "pointer", marginRight: "18px" }}
                    onClick={() => handleView(book._id)}
                  />
                  {"  "}
                  <FaEdit
                    style={{
                      cursor: "pointer",
                      color: "black",
                      marginRight: "18px",
                    }}
                    onClick={() => handleEdit(book._id)}
                  />{" "}
                  <FaTrash
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() => handleDelete(book._id)}
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
          <Modal.Title>Delete Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this book ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteBook}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  );
}

export default BookTable;
