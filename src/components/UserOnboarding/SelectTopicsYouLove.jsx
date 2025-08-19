import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, ProgressBar } from "react-bootstrap";

const allTopics = [
  "Car Modification",
  "Bike Touring",
  "DIY Repairs",
  "EV",
  "Garage Reviews",
  "Vehicle Accessories",
  "Off-roading",
  "Classic Cars/Bikes",
  "Car Loans",
  "Buying & Selling Info",
  "Detailing & Cleaning",
  "Road Safety",
  "Mileage Hacks",
  "Insurance Tips",
  "New Car Launches",
  "Motor Sport Events",
  "Vehicle Rentals",
  "Spare Parts",
  "Local Garage",
];

const SelectTopicsYouLove = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(5);
  const totalSteps = 10;
  const progressPercentage = (step / totalSteps) * 100;
  const [selectedTopics, setSelectedTopics] = useState([]);

  const toggleTopic = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else if (selectedTopics.length < 3) {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleContinue = () => {
    alert("Selected topics: " + selectedTopics.join(", "));
  };

  const handleSkip = () => {
    alert("Skipped topic selection");
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 👈 goes back to the previous page in history
  };

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center p-4"
      style={{ maxWidth: "600px" }}
    >
      <div className="w-100" style={{ maxWidth: "500px" }}>
        {/* Header */}
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

        {/* Heading */}
        <h3 className="fw-bold text-center">
          Select Topics you’ll love to see
        </h3>
        <p className="text-muted text-center mb-4">
          Choose 3 topics that interest you so we can tailor your Feed
        </p>

        {/* Topic Grid */}
        <div className="bg-light p-4 rounded shadow-sm w-100 mb-3">
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {allTopics.map((topic, index) => {
              const isSelected = selectedTopics.includes(topic);
              return (
                <Button
                  key={index}
                  variant={isSelected ? "dark" : "light"}
                  className="rounded-pill px-3 py-2"
                  onClick={() => toggleTopic(topic)}
                >
                  {topic}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Continue Button */}
        <Button
          variant="primary"
          className="w-100 mb-2"
          style={{ borderRadius: "10px" }}
          onClick={handleContinue}
          disabled={selectedTopics.length < 3}
        >
          Continue
        </Button>

        {/* Skip Link */}
        <p
          className="text-center mt-1"
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={handleSkip}
        >
          Skip this Part
        </p>
      </div>
    </Container>
  );
};

export default SelectTopicsYouLove;
