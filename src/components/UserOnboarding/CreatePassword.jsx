import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, ProgressBar, InputGroup } from "react-bootstrap";
// import { Eye, EyeSlash } from "react-bootstrap-icons";

const CreatePassword = () => {
    const [email, setEmail] = useState("");
    const [step, setStep] = useState(5);
    const totalSteps = 10;
    const progressPercentage = (step / totalSteps) * 100;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const toggleConfirmVisibility = () => setConfirmVisible(!confirmVisible);

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate and submit password
    alert("Password submitted");
    window.location.href = "/TellAboutYou"
  };

  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center p-4" style={{ maxWidth: "500px" }}>
      {/* Header with Back + Progress */}
       <div className="navigation w-100">
        <span className="back">← Back</span>
        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <span className="step-indicator">{`${step}/${totalSteps}`}</span>
        </div>
      </div>
      {/* Heading */}
      <h3 className="fw-bold text-center">Create a Password</h3>
      <p className="text-muted text-center mb-4">
        Create a new password that you’d like to use for Vehiculr
      </p>

      {/* Form */}
      <Form onSubmit={handleSubmit} className="w-100">
        <div className="p-4 rounded shadow-sm bg-light mb-3">
          {/* Password Field */}
          <Form.Group controlId="createPassword" className="mb-3">
            <Form.Label>Create Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter Password"
                required
              />
              <InputGroup.Text onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}>
                {/* {passwordVisible ? <EyeSlash /> : <Eye />} */}
              </InputGroup.Text>
            </InputGroup>
            <small className="text-muted d-block mt-2" style={{ fontSize: "0.85rem", color: "#666" }}>
              Your password needs to be at least 8 characters long. Includes some words and phrases to make it even safer
            </small>
          </Form.Group>

          {/* Confirm Password Field */}
          <Form.Group controlId="confirmPassword" className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={confirmVisible ? "text" : "password"}
                placeholder="Re-Enter Password"
                required
              />
              <InputGroup.Text onClick={toggleConfirmVisibility} style={{ cursor: "pointer" }}>
                {/* {confirmVisible ? <EyeSlash /> : <Eye />} */}
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </div>

        {/* Submit Button */}
        <Button type="submit" variant="primary" className="w-100" style={{ borderRadius: "10px" }}>
          Continue
        </Button>
      </Form>
    </Container>
  );
};

export default CreatePassword;
