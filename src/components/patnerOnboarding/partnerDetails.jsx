import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const PartnerDetails = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
      const [step, setStep] = useState(3);
      const totalSteps = 10;
      const progressPercentage = (step / totalSteps) * 100;

  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    shopLocation: "",
    phone: "+91",
    expertise: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContinue = (e) => {
    e.preventDefault();
    console.log(formData); 
     navigate("/VerifyPartnerNumber");// Replace with actual logic
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


        {/* Heading */}
        <h5 className="fw-bold">Enter your Details</h5>
        <p className="text-muted">
          Fill in the required details to get started with vehiculr
        </p>

        {/* Form */}
        <Form onSubmit={handleContinue} className="shadow-sm p-4 rounded bg-white">
          <Form.Group className="mb-3">
            <Form.Label className="fw-medium">Full Name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Full name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-medium">Business Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Shop name"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-medium">Shop Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Shop Location"
              name="shopLocation"
              value={formData.shopLocation}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-medium">Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-medium">Select Your Expertise</Form.Label>
            <Form.Select
              name="expertise"
              value={formData.expertise}
              onChange={handleChange}
            >
              <option value="">Select Expertise</option>
              <option>Off-road</option>
              <option>Vintage</option>
              <option>Luxury Automobiles</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit" className="w-100 bg-primary"
         >
            Continue
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default PartnerDetails;
