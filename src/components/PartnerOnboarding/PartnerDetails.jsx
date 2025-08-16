import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, ProgressBar } from "react-bootstrap";

const expertiseOptions = [
  "Off-road",
  "Vintage",
  "Luxury Automobiles",
  "Two-Wheelers",
  "Electric Vehicles",
  "Engine Repair",
  "Body Work",
];

const PartnerDetails = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    shopLocation: "",
    phone: "",
    expertise: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContinue = () => {
    alert(`Details Submitted:\n${JSON.stringify(formData, null, 2)}`);
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
      <h5 className="fw-bold text-start w-100">Details</h5>
      <p className="text-muted text-start w-100">
        Select your services to get started with vehiculr
      </p>

      {/* Form */}
      <Form className="w-100">
        <Form.Group className="mb-3" controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="businessName">
          <Form.Label>Business Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Shop name"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="shopLocation">
          <Form.Label>Shop Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Shop Location"
            name="shopLocation"
            value={formData.shopLocation}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            placeholder="+91"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="expertise">
          <Form.Label>Select Your Expertise</Form.Label>
          <Form.Select
            name="expertise"
            value={formData.expertise}
            onChange={handleChange}
          >
            <option value="">Select Expertise</option>
            {expertiseOptions.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        {/* Continue Button */}
        <Button
          variant="primary"
          className="w-100"
          style={{ borderRadius: "10px" }}
          onClick={handleContinue}
        >
          Continue
        </Button>
      </Form>
    </Container>
  );
};

export default PartnerDetails;
