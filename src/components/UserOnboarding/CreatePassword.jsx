import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft,Eye,EyeOff } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Form,
  Button,
  ProgressBar,
  InputGroup,
} from "react-bootstrap";
// import { Eye, EyeSlash } from "react-bootstrap-icons";

const CreatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(3);
  const totalSteps = 10;
  const progressPercentage = (step / totalSteps) * 100;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const toggleConfirmVisibility = () => setConfirmVisible(!confirmVisible);

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate and submit password
    // alert("Password submitted");
    // window.location.href = "/TellAboutYou"
    navigate("/TellAboutYou");
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 👈 goes back to the previous page in history
  };

  const isPasswordMissMatched = !(password != '' && confirmPassword != '' && password.length >= 8 && password === confirmPassword); // Placeholder for password match logic

  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  }

  const handleChangeConfirmPassword = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
  }

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center p-4"
      style={{ maxWidth: "500px" }}
    >
      <div className="w-100" style={{ maxWidth: "500px" }}>
        {/* Header with Back + Progress */}
        <div className="navigation-section">
          <span className="back" onClick={goBack}>
            <ArrowLeft strokeWidth={1} absoluteStrokeWidth />
          </span>
          <span className="step-indicator">{`${step}/${totalSteps}`}</span>
        </div>
        <div className="navigation">
          <div className="progress-container">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
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
            Create Password
              <InputGroup>
                <Form.Control
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter Password"
                  style={{ marginBottom: "0px" }}
                  value={password}
                  onChange={handleChangePassword}
                  required
                />
                <InputGroup.Text
                  onClick={togglePasswordVisibility}
                  style={{ cursor: "pointer", color: "black", marginBottom: "0px" }}
                >
                  {passwordVisible ? <EyeOff /> : <Eye />}
                </InputGroup.Text>
              </InputGroup>
              <small
                className="text-muted d-block mt-2"
                style={{ fontSize: "0.85rem", color: "#666" }}
              >
                Your password needs to be at least 8 characters long. Includes
                some words and phrases to make it even safer
              </small>
            </Form.Group>

            {/* Confirm Password Field */}
            <Form.Group controlId="confirmPassword" className="mb-3">
              Confirm Password
              <InputGroup>
                <Form.Control
                  type={confirmVisible ? "text" : "password"}
                  placeholder="Re-Enter Password"
                  style={{ marginBottom: "0px" }}
                  value={confirmPassword}
                  onChange={handleChangeConfirmPassword}
                  required
                />
                <InputGroup.Text
                  onClick={toggleConfirmVisibility}
                  style={{ cursor: "pointer", color: "black", marginBottom: "0px"}}
                >
                  {confirmVisible ? <EyeOff /> : <Eye />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            className="w-100"
            style={{ borderRadius: "10px" }}
            disabled={isPasswordMissMatched}
          >
            Continue
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default CreatePassword;
