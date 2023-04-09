import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import swal from 'sweetalert';



function SignUp() {

        const [FirstName, setfirstname] = useState("");
        const [SecondName, setsecondname] = useState("");
        const [Email, setemail] = useState("");
        const [Password, setpassword] = useState("")
        const [showPassword, setShowPassword] = useState(false);

        const history = useNavigate();
      
        
        const handlefirstname = (event) => {
          setfirstname(event.target.value);
        };
        const handlesecondname = (event) => {
            setsecondname(event.target.value);
          };
        const handleemail = (event) => {
          setemail(event.target.value);
        };
        const handlePassword = (event) => {
          setpassword(event.target.value);
        };
        const isPasswordValid = (password) => {
          return password.length >= 8;
        };
      
      
        const handleSubmit = async(event) => {
          event.preventDefault();
          const display=await axios.post('http://localhost:4000/signup',{FirstName,SecondName,Email,Password})
          console.log(display.data);
          localStorage.setItem('userinfo',JSON.stringify(display.data))
          swal({
            title: "Thank you for signing up!",
            text:"Please log in to access your account",
            icon: "success",
          });
          history('/Login.js')
       };
       const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
      };
      const handleClose = () => {
        history(`/`)
      };
    
    
  return (
    <section className="vh-100" style={{backgroundImage:"url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2FAmazing-Laptop-Wallpapers-Free-Download.jpg&f=1&nofb=1&ipt=e65b693839eb0c8351c0014d146c3fc1a77822b24bc6036eba628975f8a3d0af&ipo=images')",backgroundSize:"cover"}}>
         <Card className=" card border  mx-auto mt-1" style={{backgroundImage:
          "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwonderfulengineering.com%2Fwp-content%2Fuploads%2F2016%2F01%2Fblack-wallpaper-23.jpg&f=1&nofb=1&ipt=57ba4646c5f479442d5247242bab05a9ecddd5d841cf4074d779007bb57797fe&ipo=images')", backgroundSize: "contain"}}>
         <Card.Body className="d-flex flex-column align-items-left">
         <div className="text-center mb-4">
        <h3 style={{ fontFamily: "Roboto" }} className="card-title">Sign Up</h3>
        <p className="" style={{color:"white"}}>Please enter your credentials</p>
      </div>
        
          <Form>
            <Form.Group className="mb-3" controlId="formBasicfirstname">
              <Form.Label style={{color:"white"}}>First Name </Form.Label>
              <Form.Control className="form-control-lg  border-0 shadow-sm px-4"
                type="text"
                placeholder="Enter Your First Name"
                value={FirstName}
                onChange={handlefirstname}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicsecondname">
              <Form.Label style={{color:"white"}}>Second Name </Form.Label>
              <Form.Control className="form-control-lg  border-0 shadow-sm px-4"
                type="text"
                placeholder="Enter Your Second Name"
                value={SecondName}
                onChange={handlesecondname}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicemail">
              <Form.Label style={{color:"white"}}>Email </Form.Label>
              <Form.Control className="form-control-lg border-0 shadow-sm px-4"
                type="email"
                placeholder="Enter Your Email Id"
                value={Email}
                onChange={handleemail}
                required
              />
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
      {showPassword ? <FaEye className="bi bi-eye-slash-fill"/> : <FaEyeSlash className="bi bi-eye-fill"/>}
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
              variant="light"
              type="submit"
              className="btn-lg btn-block  mt-4"
              onClick={handleSubmit}
                  >
              SignUp
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
        
      </section>
  )
}

export default SignUp