import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, ProgressBar } from "react-bootstrap";

const AadharOtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);

  const handleKeyPress = (value) => {
    const nextEmptyIndex = otp.findIndex((digit) => digit === "");
    if (nextEmptyIndex !== -1) {
      const updatedOtp = [...otp];
      updatedOtp[nextEmptyIndex] = value;
      setOtp(updatedOtp);
    }
  };

  const handleBackspace = () => {
    const lastFilledIndex = [...otp].reverse().findIndex((digit) => digit !== "");
    if (lastFilledIndex !== -1) {
      const indexToClear = otp.length - 1 - lastFilledIndex;
      const updatedOtp = [...otp];
      updatedOtp[indexToClear] = "";
      setOtp(updatedOtp);
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");
    console.log("Verifying OTP:", enteredOtp);
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
        <span className="text-primary fw-bold">&larr;</span>
        <div className="flex-grow-1 mx-2">
          <ProgressBar now={50} style={{ height: "4px", borderRadius: "5px" }} />
        </div>
        <div className="px-2 bg-primary text-white rounded">2/4</div>
      </div>

      {/* Title */}
      <h5 className="fw-bold text-start w-100">Enter the OTP</h5>
      <p className="text-muted text-start w-100">
        We've sent a code to your Message. Enter it below
      </p>

      {/* OTP Boxes */}
      <div className="d-flex justify-content-between w-100 mb-3" style={{ maxWidth: "300px" }}>
        {otp.map((digit, index) => (
          <div
            key={index}
            className="border rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "48px",
              height: "48px",
              fontSize: "20px",
              borderColor: digit ? "#000" : "#ccc",
            }}
          >
            {digit}
          </div>
        ))}
      </div>

      {/* Resend & Timer */}
      <div className="d-flex justify-content-between w-100 mb-3" style={{ maxWidth: "300px" }}>
        <span className="text-primary fw-semibold" style={{ cursor: "pointer" }}>
          Send a new code
        </span>
        <span className="text-muted">00:20</span>
      </div>

      {/* Verify Button */}
      <Button
        variant="primary"
        className="w-100 mb-4"
        style={{ borderRadius: "10px" }}
        onClick={handleVerify}
      >
        Verify Aadhar
      </Button>

      {/* Numeric Keypad */}
      <div
        className="w-100"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px",
          maxWidth: "300px",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "←"].map((item, index) => (
          <div
            key={index}
            className="border rounded d-flex align-items-center justify-content-center"
            style={{ height: "50px", fontSize: "20px", cursor: "pointer" }}
            onClick={() => (item === "←" ? handleBackspace() : handleKeyPress(item.toString()))}
          >
            {item === "←" ? (
              <i className="bi bi-backspace" /> // Bootstrap Icons or use Unicode ⌫
            ) : (
              item
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AadharOtpVerification;
