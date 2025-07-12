import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, ProgressBar } from "react-bootstrap";

const EnterOtpScreen = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputRefs = useRef([]);

  const [timer, setTimer] = useState(20);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    setOtp(["", "", "", "", ""]);
    setTimer(20);
    inputRefs.current[0].focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("OTP Submitted: " + otp.join(""));
  };

  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center p-4" style={{ maxWidth: "500px" }}>
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between w-100 mb-4">
        <span className="text-primary fw-bold">&larr; Back</span>
        <div className="flex-grow-1 mx-2">
          <ProgressBar now={100} style={{ height: "4px", borderRadius: "5px" }} />
        </div>
        <div className="px-2 bg-primary text-white rounded">4/4</div>
      </div>

      {/* Title and subtitle */}
      <h4 className="fw-bold text-center">Verify Your Email</h4>
      <p className="text-muted text-center mb-4">We’ve sent a code to your email. Enter it below</p>

      {/* OTP Input */}
      <Form onSubmit={handleSubmit} className="w-100">
        <div className="d-flex justify-content-between mb-3">
          {otp.map((digit, index) => (
            <Form.Control
              key={index}
              type="text"
              maxLength="1"
              className="text-center mx-1"
              style={{ width: "50px", height: "50px", borderRadius: "50%", fontSize: "20px", border: "1px solid #ccc" }}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(ref) => (inputRefs.current[index] = ref)}
              inputMode="numeric"
            />
          ))}
        </div>

        {/* Resend and Timer */}
        <div className="d-flex justify-content-between align-items-center mb-3 px-2">
          <Button variant="link" onClick={handleResend} disabled={timer !== 0} className="p-0">
            Send a new code
          </Button>
          <span className="text-muted">{`00:${timer.toString().padStart(2, "0")}`}</span>
        </div>

        {/* Submit */}
        <Button type="submit" variant="primary" className="w-100" style={{ borderRadius: "10px" }}>
          Verify Email
        </Button>
      </Form>
    </Container>
  );
};

export default EnterOtpScreen;
