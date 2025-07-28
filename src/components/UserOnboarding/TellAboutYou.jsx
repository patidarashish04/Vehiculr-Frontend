import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, ProgressBar } from "react-bootstrap";
// import { CameraFill } from "react-bootstrap-icons";

const TellAboutYou = () => {
  const [profilePic, setProfilePic] = useState(null);

  const handleImageUpload = (e) => {
    if (e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted");
  };

  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center p-4" style={{ maxWidth: "500px" }}>
      {/* Header with Progress */}
      <div className="d-flex align-items-center justify-content-between w-100 mb-4">
        <span className="text-primary fw-bold">&larr; Back</span>
        <div className="flex-grow-1 mx-2">
          <ProgressBar now={25} style={{ height: "4px", borderRadius: "5px" }} />
        </div>
        <div className="px-2 bg-primary text-white rounded">1/4</div>
      </div>

      {/* Heading */}
      <h3 className="fw-bold text-center">Tell us About Yourself</h3>
      <p className="text-muted text-center mb-4">
        Let's us know about you so we can connect you to the world of vehiculr
      </p>

      {/* Form Card */}
      <Form onSubmit={handleSubmit} className="w-100">
        <div className="p-4 rounded shadow-sm bg-light mb-3 text-center">
          {/* Profile Pic Upload */}
          <div className="position-relative mb-4 mx-auto" style={{ width: "120px", height: "120px" }}>
            <img
              src={profilePic || "https://via.placeholder.com/120x120?text=+"}
              alt="Profile"
              className="rounded-circle w-100 h-100 object-fit-cover"
              style={{ background: "#f2f2f2" }}
            />
            <label
              htmlFor="profileUpload"
              className="position-absolute bottom-0 end-0 bg-white rounded-circle p-1"
              style={{ cursor: "pointer", border: "2px solid #f97316" }}
            >
              {/* <CameraFill color="#f97316" /> */}
            </label>
            <input
              type="file"
              id="profileUpload"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </div>

          {/* First Name */}
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your first name" required />
          </Form.Group>

          {/* Last Name */}
          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="text" placeholder="Enter your last name" required />
          </Form.Group>
        </div>

        {/* Submit */}
        <Button type="submit" variant="primary" className="w-100" style={{ borderRadius: "10px" }}>
          Continue
        </Button>
      </Form>
    </Container>
  );
};

export default TellAboutYou;
