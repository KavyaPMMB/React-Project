import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./EditBookForm.css";
import swal from "sweetalert";

function EditBookForm() {
  const [bookData, setBookData] = useState([]);
  const { _id } = useParams();
  const history = useNavigate();
  useEffect(() => {
    axios.post(`http://localhost:4000/defaultform/${_id}`).then((res) => {
      setBookData(res.data);
    });
  }, []);
  console.log(bookData);

  const [BookName, setBookName] = useState(bookData.BookName);
  const [Author, setAuthor] = useState(bookData.Author);
  const [PublicationsName, setPublicationsName] = useState(
    bookData.PublicationsName
  );
  const [Year, setYear] = useState(bookData.Year);
  const [Availability, setAvailability] = useState(bookData.Availability);

 

  function handleSubmit() {
    axios
      .put(`http://localhost:4000/updatebook/${_id}`, {
        BookName,
        Author,
        PublicationsName,
        Year,
        Availability,
      })
      .then((res) => {
        console.log(`Book with ID ${_id} updated`);
      });
    history("/BookTable.js");
    swal({
      title: "The book has been updated successfully!",
      icon: "success",
    });

  }

  const handleClose = () => {
    history(`/BookTable.js`)
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
            <Form.Group controlId="formBasicBookName">
              <Form.Label style={{ color: "white" }}>Book Name</Form.Label>
              <Form.Control
                type="text"
                Value={bookData.BookName}
                onChange={(e) => {
                  setBookName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicAuthor">
              <Form.Label style={{ color: "white" }}>Author</Form.Label>
              <Form.Control
                type="text"
                name="Author"
                Value={bookData.Author}
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPublicationsName">
              <Form.Label style={{ color: "white" }}>
                Publications Name
              </Form.Label>
              <Form.Control
                type="text"
                name="PublicationsName"
                Value={bookData.PublicationsName}
                onChange={(e) => {
                  setPublicationsName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicYear">
              <Form.Label style={{ color: "white" }}>Year</Form.Label>
              <Form.Control
                type="number"
                name="Year"
                Value={bookData.Year}
                onChange={(e) => {
                  setYear(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicAvailability">
              <Form.Label style={{ color: "white" }}>Availability</Form.Label>
              <Form.Control
                type="text"
                name="Availability"
                Value={bookData.Availability}
                onChange={(e) => {
                  setAvailability(e.target.value);
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
            >
              Cancel
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
export default EditBookForm;
