import React, { useState } from "react";
import "./Style/SignInMethodPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SignInMethodPage = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const totalSteps = 10;
  const progressPercentage = (step / totalSteps) * 100;

  const handleContinue = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Continue with: ${email}`);
      window.location.href = "/enterotp";
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100 bg-white">
      <div className="p-4 w-100" style={{ maxWidth: "500px" }}>
        {/* Back arrow and Progress */}
        <div className="navigation">
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
        <h5 className="fw-bold">Hi there👋, Let’s get you started</h5>
        <p className="text-muted mb-4" style={{ fontSize: "0.9rem" }}>
          Enter the email you’d like to use to register with Vehiculr
        </p>

        {/* Email Form */}
        <form onSubmit={handleContinue}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-medium">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mb-3"
            disabled={!email}
          >
            Continue
          </button>

          {/* Terms */}
          <p className="text-muted" style={{ fontSize: "0.75rem" }}>
            By proceeding, you agree to our{" "}
            <a
              href="/terms"
              className="text-dark text-decoration-underline fw-semibold"
            >
              Terms and conditions
            </a>{" "}
            and our{" "}
            <a
              href="/privacy"
              className="text-dark text-decoration-underline fw-semibold"
            >
              Privacy policy
            </a>
          </p>
        </form>

        {/* Divider */}
        <div className="d-flex align-items-center my-4">
          <hr className="flex-grow-1" />
          <span
            className="mx-2 text-muted"
            style={{ fontSize: "0.85rem", whiteSpace: "nowrap" }}
          >
            Or sign in with
          </span>
          <hr className="flex-grow-1" />
        </div>

        {/* Sign in Buttons */}
        <div className="d-grid gap-2">
          <button className="btn btn-outline-dark">
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              alt="Google"
              className="me-2"
            />
            Sign in with Google
          </button>
          <button className="btn btn-outline-dark">
            <i className="bi bi-telephone me-2"></i>
            Sign in with Phone
          </button>
        </div>

        {/* Bottom Text */}
        <p className="text-center mt-3" style={{ fontSize: "0.85rem" }}>
          Don’t have an account? <strong>Create an account</strong>
        </p>
      </div>
    </div>
  );
};

export default SignInMethodPage;
