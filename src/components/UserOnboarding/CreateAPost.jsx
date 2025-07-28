import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, ProgressBar } from "react-bootstrap";
// import { PencilSquare } from "react-bootstrap-icons";

const CreateAPost = () => {
  const handleCreate = () => {
    alert("Navigating to Create Post Page...");
  };

  const handleSkip = () => {
    alert("Post creation skipped.");
  };

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center p-4"
      style={{ maxWidth: "600px" }}
    >
      {/* Header: Back + Progress */}
      <div className="d-flex align-items-center justify-content-between w-100 mb-4">
        <span className="text-primary fw-bold">&larr; Back</span>
        <div className="flex-grow-1 mx-2">
          <ProgressBar now={25} style={{ height: "4px", borderRadius: "5px" }} />
        </div>
        <div className="px-2 bg-primary text-white rounded">1/4</div>
      </div>

      {/* Title */}
      <h4 className="fw-bold text-center">Add a New Post to start Your Journey with Vehiculr</h4>
      <p className="text-muted text-center mb-4">
        Create a new post to start with vehiculr
      </p>

      {/* Card Area */}
      <div className="bg-light p-4 rounded shadow-sm text-center w-100">
        {/* Orange icon */}
        <div
          className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-4"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#f97316",
          }}
        >
          {/* <PencilSquare color="white" size={40} /> */}
        </div>

        {/* Create Post Button */}
        <Button
          variant="primary"
          className="w-100 mb-2"
          style={{ borderRadius: "10px" }}
          onClick={handleCreate}
        >
          Create a Post
        </Button>

        {/* Skip Option */}
        <p
          className="text-center mt-2"
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={handleSkip}
        >
          Skip this Part
        </p>
      </div>
    </Container>
  );
};

export default CreateAPost;
