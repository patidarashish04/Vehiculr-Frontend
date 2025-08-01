import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/PhoneNumberSignIn.css";

const countries = [
  {
    code: "IN",
    name: "India",
    dialCode: "+91",
    flag: "https://flagcdn.com/w40/in.png",
  },
  {
    code: "GB",
    name: "United Kingdom",
    dialCode: "+44",
    flag: "https://flagcdn.com/w40/gb.png",
  },
  {
    code: "US",
    name: "United States",
    dialCode: "+1",
    flag: "https://flagcdn.com/w40/us.png",
  },
];

const PhoneNumberSignIn = () => {
  const [email, setEmail] = useState("");
    const [step, setStep] = useState(3);
    const totalSteps = 10;
    const progressPercentage = (step / totalSteps) * 100;
  const [selectedCountry] = useState(countries[0]); // default fixed country
  const [phone, setPhone] = useState("");

  const handleSendCode = (e) => {
    e.preventDefault();
    alert(`Sending code to: ${selectedCountry.dialCode} ${phone}`);
    window.location.href = "/VerifyNumberOtp"
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100 bg-white">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        {/* Back and Step */}
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

        <h5 className="fw-bold">Enter your phone number</h5>
        <p className="text-muted" style={{ fontSize: "0.9rem" }}>
          We use your mobile number to identify your account
        </p>

        <form onSubmit={handleSendCode}>
          <label className="form-label fw-medium small mb-1">Phone number</label>
          <div className="d-flex mb-4 ">
            {/* Country Code Box */}
            <div className="input-group-text bg-white d-flex align-items-center pe-3" style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0,height:"60px" }}>
              <img
                src={selectedCountry.flag}
                alt={selectedCountry.code}
                style={{ width: "20px", height: "20px", marginRight: "8px" }}
              />
              <span>{selectedCountry.dialCode}</span>
            </div>

            {/* Phone Number Box */}
            <input
              type="tel"
              pattern="[0-9]*"
              inputMode="numeric"
              className="form-control"
              placeholder="1234567890"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              required
              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 rounded-3 mb-3"
            disabled={!phone.trim()}
          >
            Send Code
          </button>
        </form>

        {/* Divider */}
        <div className="d-flex align-items-center my-3">
          <hr className="flex-grow-1" />
          <span className="mx-2 text-muted small">Or sign in with</span>
          <hr className="flex-grow-1" />
        </div>

        {/* Google Sign-In */}
        <button className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center gap-2 mb-3">
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            alt="Google"
          />
          <span>Sign in with Google</span>
        </button>

        <p className="text-center small">
          Don’t have an account?{" "}
          <strong style={{ cursor: "pointer" }}>Create an account</strong>
        </p>
      </div>
    </div>
  );
};

export default PhoneNumberSignIn;
