import React, { useState } from "react";
import "../styles/ServicesPage.css";
import storyImage from "../assets/StoryFrame.png";
import storyProfile from "../assets/storyProfile.png";
import storyLike from "../assets/storyLike.png";
import storyMessage from "../assets/storyMessage.png";
import storySend from "../assets/storySend.png";
import storyShare from "../assets/storyShare.png";
import storyFilter from "../assets/storyFilter.png";
import "bootstrap/dist/css/bootstrap.min.css";

const SocialMediaCard = () => {
  const [likes, setLikes] = useState(88);
  const [expanded, setExpanded] = useState(false);

  const toggleLike = () => setLikes(likes + 1);
  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className="social-media-card service-button">
     <div className="d-flex justify-content-between align-items-center w-100 px-3 py-2 border-bottom">
  {/* Left side: Feed */}
  <h4 className="fw-bold mb-0">Feed</h4>

  {/* Right side: All Posts with icon */}
  <h5 className="fw-bold mb-0 d-flex align-items-center text-primary" style={{ cursor: "pointer" }}>
    All Posts
    <img 
  src={storyFilter}
      alt="All Posts Icon" 
      width="20" 
      height="20" 
      className="ms-2"
    />
  </h5>
</div>

      {/* Header */}
      <div className="card-body d-flex align-items-center w-100 mt=5">
        <img
          src={storyProfile}
          alt="Profile"
          className="rounded-circle me-2"
          width="40"
          height="40"
        />
        <div className="flex-grow-1 text-start">
          <h6 className="mb-0">OwnerTalks</h6>
          <small className="text-muted d-block lh-1">326 Followers</small>
          <small className="text-muted d-block lh-1">• 20h</small>
        </div>

        <button className="btn btn-sm btn-light">⋮</button>
      </div>

      {/* Content */}
      <div className="px-3 pb-3 text-start align-self-start w-100">
        <p className="mb-0">
          🚗 New Car, First Service Done! 🚗
          <br />
          Loving my new Hyundai i20 N-line—smooth ride & packed with features!
          {expanded && (
            <>
              {" "}
              Just completed the first service: quick, efficient, and
              hassle-free. Ready for many more miles ahead! ✨
            </>
          )}
          {!expanded && (
            <span
              className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={toggleExpand}
            >
              {" "}
              See more
            </span>
          )}
        </p>
        <p className="mb-2 text-primary">
          #NewCar #FirstService #SmoothDrive #fascinating
        </p>
      </div>

      <div className="See-translation w-100 px-3">
        <h5 className="text-primary text-start ">See translation</h5>
      </div>

      {/* Image */}
      <img
        src={storyImage}
        className="card-img-top mb-2"
        alt="Hyundai i20 N-line"
      />

      {/* Reactions */}
      <div className="px-3 py-2 border-top text-muted d-flex justify-content-between w-100">
        <span>👍 {likes}</span>
        <span>💬 4 Comments</span>
      </div>

      {/* Action Buttons */}
      <div className="d-flex justify-content-evenly border-top py-2 w-100">
        <button
          className="btn btn-link text-secondary fw-semibold d-flex align-items-center gap-1 p-1 text-decoration-none fs-5"
          onClick={toggleLike}
        >
          <img
            src={storyLike}
            alt="Like"
            width="26"
            height="26"
            className="me-1"
          />
          Like
        </button>

        <button className="btn btn-link text-secondary fw-semibold d-flex align-items-center gap-1 p-1 text-decoration-none fs-5">
          <img
            src={storyMessage}
            alt="Comment"
            width="26"
            height="26"
            className="me-1"
          />
          Comment
        </button>

        <button className="btn btn-link text-secondary fw-semibold d-flex align-items-center gap-1 p-1 text-decoration-none fs-5">
          <img
            src={storyShare}
            alt="Share"
            width="26"
            height="26"
            className="me-1"
          />
          Share
        </button>

        <button className="btn btn-link text-secondary fw-semibold d-flex align-items-center gap-1 p-1 text-decoration-none fs-5">
          <img
            src={storySend}
            alt="Send"
            width="26"
            height="26"
            className="me-1"
          />
          Send
        </button>
      </div>
    </div>
  );
};

export default SocialMediaCard;
