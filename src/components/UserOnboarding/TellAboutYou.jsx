import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TellAboutYou = () => {
  const [email, setEmail] = useState("");
      const [step, setStep] = useState(6);
      const totalSteps = 10;
      const progressPercentage = (step / totalSteps) * 100;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${firstName} ${lastName}`);
    window.location.href = "/SelectTopicsYouLove"
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100 bg-white">
      <div className="w-100" style={{ maxWidth: "500px" }}>
        {/* Header */}
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

        {/* Title */}
        <h5 className="fw-bold">Tell us about yourself</h5>
        <p className="text-muted" style={{ fontSize: "0.9rem" }}>
          Let's us know about you so we can connect you to the world of vehiculr
        </p>

        {/* Profile Image Upload */}
        <div className="d-flex justify-content-center mb-4 position-relative">
          <label htmlFor="upload-photo" className="position-relative" style={{ cursor: "pointer" }}>
           <img
  src={"https://www.w3schools.com/howto/img_avatar.png"}
  alt="Profile"
  className="rounded-circle"
  style={{ width: "80px", height: "80px", objectFit: "cover" }}
/>
            <span
              className="position-absolute bg-white border rounded-circle d-flex align-items-center justify-content-center"
              style={{
                bottom: 0,
                right: 0,
                width: "24px",
                height: "24px",
              }}
            >
              <img
                src="https://img.icons8.com/fluency-systems-filled/16/000000/camera.png"
                alt="Upload"
              />
            </span>
            <input
              type="file"
              accept="image/*"
              id="upload-photo"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </label>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold small">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold small">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ borderRadius: "10px" }}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default TellAboutYou;
