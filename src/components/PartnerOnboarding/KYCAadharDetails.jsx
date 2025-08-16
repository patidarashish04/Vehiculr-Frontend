import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, ProgressBar } from "react-bootstrap";

const KYCAadharDetails = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    aadharNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleContinue = () => {
    console.log("Submitted Data:", formData);
    // Navigate to next step or API call
  };

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center p-4"
      style={{ maxWidth: "500px" }}
    >
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between w-100 mb-4">
        <span className="text-primary fw-bold">&larr;</span>
        <div className="flex-grow-1 mx-2">
          <ProgressBar now={25} style={{ height: "4px", borderRadius: "5px" }} />
        </div>
        <div className="px-2 bg-primary text-white rounded">1/4</div>
      </div>

      {/* Title */}
      <h5 className="fw-bold text-start w-100">KYC Verification</h5>
      <p className="text-muted text-start w-100">
        Kindly fill your kyc details to get started with vehiculr
      </p>

      {/* Form Fields */}
      <Form className="w-100 mb-4">
        <Form.Group className="mb-3">
          <Form.Label>Full Name as in your Aadhar</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Aadhar Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Aadhar Number"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Address As per Aadhar</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>

      {/* Continue Button */}
      <Button
        variant="primary"
        className="w-100"
        style={{ borderRadius: "10px" }}
        onClick={handleContinue}
      >
        Continue
      </Button>
    </Container>
  );
};

export default KYCAadharDetails;
