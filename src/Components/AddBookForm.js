import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./SideBar";
import swal from 'sweetalert'

function AddBookForm() {
  const [books, setBooks] = useState([]);
  const [BookName, setBookName] = useState("");
  const [Author, setAuthor] = useState("");
  const [PublicationsName, setPublicationsName] = useState("");
  const [Year, setYear] = useState("");
  const [Availability, setAvailability] = useState("");
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const book = {
      BookName: BookName,
      Author: Author,
      PublicationsName: PublicationsName,
      Year: Year,
      Availability: Availability,
    };
    history('/BookTable.js');
    swal({
      title: "The book has been added successfully!",
      icon: "success",
    });

    
    axios
      .post("http://localhost:4000/createbook", book)
      .then((res) => {
        setBookName("");
        setAuthor("");
        setPublicationsName("");
        setYear("");
        setAvailability("");
      })
      .catch((err) => console.log(err));
  };
  const handleClose = () => {
    history(`/BookTable.js`)
  };


  return (
    <div style={{display:"flex"}}>
      <Sidebar/>
      
      <Card className="card border-secondary mx-auto mt-3 " style={{width:"80%"}}>
        <Card.Body className="d-flex flex-column align-items-center">
          <div className="text-center mb-4">
            <h1 className="card-title">Add Books</h1>
            <p className="" style={{ color: "white" }}>
               ___enter books___
            </p>
          </div>
      <Form className="w-100">
        <Form.Group controlId="bookName">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book name"
            value={BookName}
            onChange={(event) => setBookName(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="author">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter author name"
            value={Author}
            onChange={(event) => setAuthor(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="publicationsName">
          <Form.Label>Publications Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter publications name"
            value={PublicationsName}
            onChange={(event) => setPublicationsName(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="year">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter year"
            value={Year}
            onChange={(event) => setYear(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="availability">
          <Form.Label>Availability</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter availability"
            value={Availability}
            onChange={(event) => setAvailability(event.target.value)}
            required
          />
        </Form.Group>

        <Button variant="light"
              type="submit"
              className="btn-lg btn-block  mt-4" onClick={handleSubmit}>
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

  );
}

export default AddBookForm;
