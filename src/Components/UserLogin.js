import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import swal from "sweetalert";

function UserLogin() {
  const [Email, setemail] = useState("");
  const [Password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const history = useNavigate();

  const isEmailValid = (email) => {
    const emailval = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailval.test(Email);
  };

  const isPasswordValid = (Password) => {
    return Password.length >= 8;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const display = await axios.post("http://localhost:4000/login", {
      Email,
      Password,
    });
    console.log(display.data);
    localStorage.setItem("userinfo", JSON.stringify(display.data));
    if (display.data.Token) {
      swal({
        title: "Login Successful..!",
        icon: "success",
      });
      history("/UserHome.js");
    } else {
      swal({
        title: "Login failed...",
        text: "Please check your credentials and try again",
        icon: "error",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleClose = () => {
    history(`/`);
  };

  return (
    <section
      className="vh-100"
      style={{
        backgroundImage:
          "url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2FAmazing-Laptop-Wallpapers-Free-Download.jpg&f=1&nofb=1&ipt=e65b693839eb0c8351c0014d146c3fc1a77822b24bc6036eba628975f8a3d0af&ipo=images')",
        backgroundSize: "cover",
      }}
    >
      <Card
        className="card border  mx-auto  "
        style={{
          backgroundImage:
            "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwonderfulengineering.com%2Fwp-content%2Fuploads%2F2016%2F01%2Fblack-wallpaper-23.jpg&f=1&nofb=1&ipt=57ba4646c5f479442d5247242bab05a9ecddd5d841cf4074d779007bb57797fe&ipo=images')",
          backgroundSize: "contain",
        }}
      >
        <Card.Body className="d-flex flex-column align-items-center">
          <div className="text-center mb-4">
            <h3 style={{ fontFamily: "Roboto" }} className="card-title">
              Login
            </h3>
            <p style={{ fontFamily: "Raleway", color: "white" }} className="">
              Please enter your credentials
            </p>
          </div>
          <Form className="w-100">
            <Form.Group controlId="formEmail">
              <Form.Label style={{ color: "white" }}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                value={Email}
                onChange={(event) => setemail(event.target.value)}
                required
                className="form-control-lg  border-0 shadow-sm px-4"
              />
              <Form.Control.Feedback
                type="invalid"
                className="invalid-feedback"
              >
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label style={{ color: "white" }}>Password</Form.Label>
              <div className="input-group">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={Password}
                  onChange={(event) => setpassword(event.target.value)}
                  className="form-control-lg  border-0 shadow-sm px-4"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEye className="bi bi-eye-slash-fill" />
                  ) : (
                    <FaEyeSlash className="bi bi-eye-fill" />
                  )}
                </button>
                <Form.Control.Feedback
                  type="invalid"
                  className="invalid-feedback"
                >
                  Password must be at least 8 characters long.
                </Form.Control.Feedback>
              </div>
            </Form.Group>
            <Button
              variant="success"
              type="submit"
              className="btn-lg btn-block  mt-4"
              onClick={handleSubmit}
            >
              Login
            </Button>{" "}
            <Button
              variant="danger"
              type="submit"
              className="btn-lg btn-block  mt-4"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Form>
        </Card.Body>
      </Card>
      {/* <ToastContainer
position="top-center"
autoClose={4000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/> */}
      <ToastContainer />
    </section>
  );
}

export default UserLogin;
