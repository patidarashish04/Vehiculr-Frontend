import React from 'react';
import '../styles/DesktopOnboarding.css';


const DesktopOnboarding = () => {
  return (
    <div className="onboarding-container">
      <div className="onboarding-box">
        <div className="onboarding-back">← Back</div>
        <div className="onboarding-progress-bar">
          <div className="onboarding-progress"></div>
        </div>
        <div className="onboarding-heading">
          Hi there👋, Let’s get you started
        </div>
        <div className="onboarding-subtext">
          Enter the email you’d like to use to register with Vehiculr
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="onboarding-input"
        />
        <button className="onboarding-button">Continue</button>
        <div className="onboarding-terms">
          By proceeding, you agree to our <strong>Terms and conditions</strong> and our <strong>Privacy policy</strong>.
        </div>
        <div className="onboarding-divider">Or sign in with</div>
        <button className="onboarding-signin-btn">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="google"
            className="onboarding-icon"
            width="18"
          />
          Sign in with Google
        </button>
        <button className="onboarding-signin-btn">
          <span className="onboarding-icon">📞</span> Sign in with Phone
        </button>
        <div className="onboarding-footer-text">
          Don't have an account?
          <span className="onboarding-link"> Create an account</span>
        </div>
      </div>
    </div>
  );
};

export default DesktopOnboarding;
