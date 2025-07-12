import React from "react";
import "./Style/SignInMethodPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, Card, ProgressBar } from "react-bootstrap";

const SignInMethodPage = () => {
  return (
    <Container fluid className="p-3" style={{ maxWidth: "500px" }}>
      {/* Back + Progress Bar */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <span className="text-primary fw-bold">&larr; Back</span>
        <div className="flex-grow-1 mx-2">
          <ProgressBar now={25} style={{ height: "4px", borderRadius: "5px" }} />
        </div>
        <div className="px-2 bg-primary text-white rounded">1/4</div>
      </div>

      {/* Heading */}
      <h3 className="fw-bold">
        Hi there <span role="img" aria-label="wave">👋</span>, Let’s get you started
      </h3>
      <p className="text-muted">
        Enter the email you’d like to use to register with Vehiculr
      </p>

      {/* Email Form */}
      <Card className="p-3 mb-4">
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mt-3" style={{ borderRadius: "10px" }}>
            Continue
          </Button>
          <p className="text-muted mt-2 mb-0" style={{ fontSize: "0.85rem" }}>
            By proceeding, you agree to our <a href="#">Terms and conditions</a> and our <a href="#">Privacy policy</a>
          </p>
        </Form>
      </Card>

      {/* OR Divider */}
      <div className="d-flex align-items-center my-3">
        <hr className="flex-grow-1" />
        <span className="mx-2 text-muted">Or sign in with</span>
        <hr className="flex-grow-1" />
      </div>

      {/* Google & Phone Sign In */}
      <Card className="p-3 mb-4">
        <Button variant="outline-primary" className="w-100 mb-2 d-flex align-items-center justify-content-center gap-2">
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" style={{ width: "20px" }} />
          Sign in with Google
        </Button>
        <Button variant="outline-primary" className="w-100 d-flex align-items-center justify-content-center gap-2">
          <i className="bi bi-telephone-fill"></i>
          Sign in with Phone
        </Button>
      </Card>

      {/* Footer */}
      <p className="text-center text-muted" style={{ fontSize: "0.9rem" }}>
        Don’t have an account? <a href="#"><strong>Create an account</strong></a>
      </p>
    </Container>
  );
};

export default SignInMethodPage;
