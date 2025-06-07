import React, { useState } from "react";
import axios from "axios";
import "../styles/newLoginPage.css";
import { GoogleLogin } from '@react-oauth/google';

const Login = ({ onLoginSuccess, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setMessage("All fields are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:9002/api/users/login", formData);
      if (response.data.token) {
        const user = { 
          email: formData.email, 
          token: response.data.token 
        };
        localStorage.setItem("user", JSON.stringify(user));
        setMessage("Login successful!");

        if (onLoginSuccess) onLoginSuccess(user);
      } else {
        setMessage(response.data.message || "Invalid credentials.");
      }
    } catch (err) {
      setMessage("Error logging in. Please try again.");
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    // Here you would typically send the credential to your backend for verification
    // and handle the user creation/login process
  };

  const handleGoogleError = () => {
    console.log('Google Login Failed');
  };

  return (
    <div className="new-login-container">
      <div className="new-login-box">
        <h2 className="welcome-back">Welcome Back</h2>
        <p className="new-login-subtitle">Login to explore vehicuir once again</p>

        {message && (
          <p className={message.includes("successful") ? "success-message" : "error-message"}>
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="new-login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <button type="submit" className="new-login-button">Log In</button>
        </form>

        <div className="alternative-options">
          <a href="#" className="forgot-password">Forgot Password?</a>
          <div className="sign-up-link">Don't have an account? <a href="#">Sign Up</a></div>
        </div>

        <div className="social-new-login">
          <div className="divider">Or sign in with</div>
          <div className="social-buttons">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              useOneTap
              theme="filled_blue"
              size="large"
              text="signin_with"
              shape="rectangular"
              width="300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;