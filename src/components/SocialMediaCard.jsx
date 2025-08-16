import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ServicesPage.css";
import storyProfile from "../assets/storyProfile.png";
import storyLike from "../assets/storyLike.png";
import storyMessage from "../assets/storyMessage.png";
import storySend from "../assets/storySend.png";
import storyShare from "../assets/storyShare.png";
import storyFilter from "../assets/storyFilter.png";
import "bootstrap/dist/css/bootstrap.min.css";

const SocialMediaCard = () => {
  const [feeds, setFeeds] = useState([]); 
  const [expanded, setExpanded] = useState({});

  // Fetch feeds
  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const res = await axios.get("http://localhost:9002/api/feed");

        // ✅ Extract the actual feed array from GET response
        const apiFeeds = res.data?.data?.data || [];
        setFeeds(apiFeeds);
      } catch (err) {
        console.error("Error fetching feed:", err);
      }
    };

    fetchFeeds();
  }, []);

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleLike = (index) => {
    setFeeds((prevFeeds) =>
      prevFeeds.map((feed, i) =>
        i === index
          ? {
              ...feed,
              engagement: {
                ...feed.engagement,
                likes: (feed.engagement?.likes || 0) + 1,
              },
            }
          : feed
      )
    );
  };

  return (
    <div className="social-media-feed">
      {feeds.length === 0 ? (
        <p className="text-center mt-3">Loading feed...</p>
      ) : (
        feeds.map((feed, index) => (
          <div key={feed._id || index} className="social-media-card service-button mb-4">

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center w-100 px-3 py-2 border-bottom">
              <h4 className="fw-bold mb-0">Feed</h4>
              <h5
                className="fw-bold mb-0 d-flex align-items-center text-primary"
                style={{ cursor: "pointer" }}
              >
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

            {/* Profile Info */}
            <div className="card-body d-flex align-items-center w-100">
              <img
                src={storyProfile}
                alt="Profile"
                className="rounded-circle me-2"
                width="40"
                height="40"
              />
              <div className="flex-grow-1 text-start">
                <h6 className="mb-0">{feed.user || "Unknown User"}</h6>
                <small className="text-muted d-block lh-1">{feed.metrics?.views || 0} Views</small>
                <small className="text-muted d-block lh-1">
                  • {new Date(feed.createdAt).toLocaleDateString()}
                </small>
              </div>

              <div className="btn btn-sm btn-light">⋮</div>
            </div>

            {/* Content */}
            <div className="px-3 pb-3 text-start w-100">
              <p className="mb-0">
                {expanded[index]
                  ? (feed.content?.text || "")
                  : (feed.content?.text || "").slice(0, 100)}

                {(feed.content?.text?.length || 0) > 100 && (
                  <span
                    className="text-primary"
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleExpand(index)}
                  >
                    {expanded[index] ? " See less" : " See more"}
                  </span>
                )}
              </p>

              {(feed.content?.hashtags || []).length > 0 && (
                <p className="mb-2 text-primary">
                  {(feed.content?.hashtags || []).map((tag, i) => `#${tag} `)}
                </p>
              )}
            </div>

            {/* Reactions */}
            <div className="px-3 py-2 border-top text-muted d-flex justify-content-between w-100">
              <span>👍 {feed.engagement?.likes || 0}</span>
              <span>💬 {feed.engagement?.comments || 0} Comments</span>
            </div>

            {/* Action Buttons */}
            <div className="d-flex justify-content-evenly border-top py-2 w-100">
              <button
                className="btn btn-link text-secondary fw-semibold d-flex align-items-center gap-1 p-1 text-decoration-none fs-5"
                onClick={() => toggleLike(index)}
              >
                <img src={storyLike} alt="Like" width="26" height="26" className="me-1" />
                Like
              </button>

              <button className="btn btn-link text-secondary fw-semibold d-flex align-items-center gap-1 p-1 text-decoration-none fs-5">
                <img src={storyMessage} alt="Comment" width="26" height="26" className="me-1" />
                Comment
              </button>

              <button className="btn btn-link text-secondary fw-semibold d-flex align-items-center gap-1 p-1 text-decoration-none fs-5">
                <img src={storyShare} alt="Share" width="26" height="26" className="me-1" />
                Share
              </button>

              <button className="btn btn-link text-secondary fw-semibold d-flex align-items-center gap-1 p-1 text-decoration-none fs-5">
                <img src={storySend} alt="Send" width="26" height="26" className="me-1" />
                Send
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SocialMediaCard;
