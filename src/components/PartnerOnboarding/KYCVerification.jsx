import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, ProgressBar } from "react-bootstrap";

const KYCVerification = () => {
  const [selectedDoc, setSelectedDoc] = useState("");

  const documentTypes = ["Aadhar", "PAN", "Driving License"];

  const handleContinue = () => {
    if (selectedDoc) {
      alert(`Selected Document: ${selectedDoc}`);
    } else {
      alert("Please select a document type.");
    }
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

      {/* Dropdown */}
      <Form className="w-100 mb-4">
        <Form.Group controlId="documentType">
          <Form.Label>Type of Document</Form.Label>
          <Form.Select
            value={selectedDoc}
            onChange={(e) => setSelectedDoc(e.target.value)}
          >
            <option value="">Select From the Drop down</option>
            {documentTypes.map((doc, idx) => (
              <option key={idx} value={doc}>
                {doc}
              </option>
            ))}
          </Form.Select>
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

export default KYCVerification;
