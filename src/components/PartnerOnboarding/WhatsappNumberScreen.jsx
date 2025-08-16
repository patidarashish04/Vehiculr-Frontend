import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, ProgressBar, Form } from "react-bootstrap";

const WhatsappNumberScreen = () => {
  const [phone, setPhone] = useState("");

  const handleContinue = () => {
    console.log("Whatsapp Number:", phone);
    // API call logic here
  };

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center p-4"
      style={{ maxWidth: "500px" }}
    >
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between w-100 mb-4">
        <span className="text-primary fw-bold" style={{ cursor: "pointer" }}>&larr;</span>
        <div className="flex-grow-1 mx-2">
          <ProgressBar now={25} style={{ height: "4px", borderRadius: "5px" }} />
        </div>
        <div className="px-2 bg-primary text-white rounded">1/4</div>
      </div>

      {/* Title & Subtitle */}
      <h5 className="fw-bold text-start w-100">
        Add a Whatsapp Number to get notifications and Leads
      </h5>
      <p className="text-muted text-start w-100 mb-4">
        Register a Whatsapp account so that you never miss any notifications from Customers
      </p>

      {/* Phone Input */}
      <Form.Control
        type="tel"
        placeholder="+91"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="mb-4"
        style={{
          backgroundColor: "#f5f5f5",
          border: "none",
          height: "50px",
          fontSize: "16px",
        }}
      />

      {/* Continue Button */}
      <Button
        variant="primary"
        className="w-100"
        style={{ borderRadius: "10px", height: "50px" }}
        onClick={handleContinue}
      >
        Continue
      </Button>
    </Container>
  );
};

export default WhatsappNumberScreen;
