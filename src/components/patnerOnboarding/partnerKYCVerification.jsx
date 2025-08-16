import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FaChevronLeft } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const PartnerKYCVerification = () => {
  const [documentType, setDocumentType] = useState("");
 const [step, setStep] = useState(5);
     const totalSteps = 10;
     const progressPercentage = (step / totalSteps) * 100;

  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    if (!documentType) {
      alert("Please select a document type");
      return;
    }
    navigate("/PartnerKYCDetails"); // Change to actual next route
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="w-100" style={{ maxWidth: "500px" }}>
        {/* Back & Progress */}
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
          <p className="text-muted">
            Kindly fill your kyc details to get started with vehiculr
          </p>
        </div>

        {/* Form Box */}
        <div className="bg-white shadow-sm p-4 rounded">
          <Form onSubmit={handleContinue}>
            <Form.Group className="mb-4">
              <Form.Label className="fw-medium">Type of Document</Form.Label>
              <Form.Select
                value={documentType}
                onChange={(e) => setDocumentType(e.target.value)}
              >
                <option value="">Select From the Drop down</option>
                <option value="Aadhar">Aadhar Card</option>
                <option value="Pan">PAN Card</option>
                <option value="DL">Driving License</option>
                <option value="Passport">Passport</option>
              </Form.Select>
            </Form.Group>
            <Button type="submit" className="w-100 bg-primary">
              Continue
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PartnerKYCVerification;
