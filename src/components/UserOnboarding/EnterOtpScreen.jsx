import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/SignInMethodPage.css";
import { Container, Form, Button } from "react-bootstrap";

const EnterOtpScreen = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(2);
  const totalSteps = 10;
  const progressPercentage = (step / totalSteps) * 100;
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(20);

  // Start countdown on mount
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  // Autofocus on first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
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
    // alert("OTP Submitted: " + otp.join(""));
    // window.location.href = "/phoneNumberSignin";
    navigate("/CreatePassword");
  };

  const checkDisablility = otp.some((digit) => digit === "");

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 👈 goes back to the previous page in history
  };

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center p-4"
      style={{ maxWidth: "500px" }}
    >
      <div className="w-100" style={{ maxWidth: "500px" }}>
        {/* Header with Back and Progress */}
        <div className="navigation-section">
          <span className="back" onClick={goBack}>
            <ArrowLeft strokeWidth={1} absoluteStrokeWidth />
          </span>
          <span className="step-indicator">{`${step}/${totalSteps}`}</span>
        </div>
        <div className="navigation">
          <div className="progress-container">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Title and Subtitle */}
        <h4 className="fw-bold text-center">Verify Your Email</h4>
        <p className="text-muted text-center mb-4">
          We’ve sent a code to your email. Enter it below
        </p>

        {/* OTP Input */}
        <Form onSubmit={handleSubmit} className="w-100">
          <div className="d-flex justify-content-between mb-3">
            {otp.map((digit, index) => (
              <Form.Control
                key={index}
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength="1"
                className="text-center mx-1"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  fontSize: "20px",
                  border: "1px solid #ccc",
                }}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(ref) => (inputRefs.current[index] = ref)}
              />
            ))}
          </div>

          {/* Resend and Timer */}
          <div className="d-flex justify-content-between align-items-center mb-3 px-2">
            <Button
              variant="link"
              onClick={handleResend}
              disabled={timer !== 0}
              className="p-0"
            >
              Send a new code
            </Button>
            <span className="text-muted">
              {`00:${timer.toString().padStart(2, "0")}`}
            </span>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            variant="primary"
            className="w-100"
            style={{ borderRadius: "10px" }}
            disabled={checkDisablility}
          >
            Verify Email
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default EnterOtpScreen;
