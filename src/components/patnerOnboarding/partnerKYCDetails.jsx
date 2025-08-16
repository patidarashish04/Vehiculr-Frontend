import React, { useState, useRef, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PartnerKYCDetails = () => {

      const [step, setStep] = useState(6);
      const totalSteps = 10;
      const progressPercentage = (step / totalSteps) * 100;

   

  const [formData, setFormData] = useState({
    fullName: "",
    aadharNumber: "",
    address: "",
  });

  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission or validation here
    console.log("KYC Data:", formData);
    window.location.href='/OTPAfterKYC'
  };


  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <div className="w-100" style={{ maxWidth: "600px" }}>
        {/* Header */}
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

        {/* Title */}
        <div className="text-center mb-4">
          <h4 className="fw-bold">KYC Verification</h4>
          <p className="text-muted">Kindly fill your kyc details to get started with vehiculr</p>
        </div>

        {/* Card Form */}
        <div className="bg-white p-4 rounded shadow-sm">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-medium">Full Name as in your Aadhar</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Enter your Full name as per aadhar"
                value={formData.fullName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-medium">Aadhar Number</Form.Label>
              <Form.Control
                type="text"
                name="aadharNumber"
                placeholder="Enter your Aadhar Number"
                value={formData.aadharNumber}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-medium">Address As per Aadhar</Form.Label>
              <Form.Control
                as="textarea"
                name="address"
                rows={2}
                placeholder="Enter your address as per aadhar"
                value={formData.address}
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              type="submit"
              className="w-100 bg-primary border-0 py-2 fw-bold"
            >
              Continue
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PartnerKYCDetails;
