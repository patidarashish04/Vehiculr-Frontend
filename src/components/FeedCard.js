import React, { useState, useEffect } from 'react';
import '../styles/FeedCard.css';

const FeedCard = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [reactionCount, setReactionCount] = useState(88);
  const [commentCount, setCommentCount] = useState(4);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('https://api.example.com/posts/1');
        const data = await response.json();
        
        setPost({
          username: data.user.name,
          avatar: data.user.avatar,
          followers: data.user.followers,
          timePosted: formatTime(data.createdAt),
          title: data.title,
          content: data.content,
          hashtags: data.tags.map(tag => `#${tag}`),
          relatedArticle: {
            title: data.relatedContent.title,
            url: data.relatedContent.url,
            readTime: data.relatedContent.readTime
          }
        });
        setReactionCount(data.reactions);
        setCommentCount(data.comments);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        // Fallback to dummy data if API fails
        setPost({
          username: "OverleafTalks",
          avatar: "https://example.com/avatar.jpg",
          followers: 326,
          timePosted: "20 h",
          title: "New Car, First Service Done!",
          content: "Loving my new hyundai 120 N-line—smooth ride & packed with features! Just completed the first service: quick, efficient, and hassle-free. Ready for many more miles ahead! 💬💬💬...see more",
          hashtags: ["#NewCar", "#FirstService", "#SmoothDrive", "#fascinating"],
          relatedArticle: {
            title: "Top 10 facts about hyundai 120 N-line",
            url: "www",
            readTime: "10 min read"
          }
        });
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  const formatTime = (timestamp) => {
    // Implement your time formatting logic
    return "20 h";
  };

  const handleReaction = () => {
    setLiked(!liked);
    setReactionCount(liked ? reactionCount - 1 : reactionCount + 1);
  };

  return (
    <div className="feed-card-container">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="feed-card">
          <div className="card-header">
            <div className="user-info">
              <img 
                src={post.avatar} 
                alt={post.username} 
                className="avatar" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/40";
                }}
              />
              <div>
                <h3>{post.username}</h3>
                <p>{post.followers} Followers • {post.timePosted}</p>
              </div>
            </div>
          </div>

          <div className="card-content">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="hashtags">
              {post.hashtags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="related-article">
            <p>See translation</p>
            <div className="article-preview">
              <h4>{post.relatedArticle.title}</h4>
              <p>{post.relatedArticle.url} • {post.relatedArticle.readTime}</p>
            </div>
          </div>

          {/* Reactions Section */}
          <div className="reactions">
            <div className="emojis">
              <span onClick={handleReaction}>🧊</span>
              <span onClick={handleReaction}>🥬</span>
              <span onClick={handleReaction}>❤️</span>
              <span onClick={handleReaction}>🙃</span>
              <span onClick={handleReaction}>🧠</span>
              <span onClick={handleReaction}>✋</span>
            </div>
            <div className="reaction-count">
              {reactionCount} • {commentCount} Comments
            </div>
          </div>

          {/* Actions Section */}
          <div className="feed-actions">
            <button onClick={handleReaction}>
              <span role="img" aria-label="Like">👍</span> Like
            </button>
            <button>
              <span role="img" aria-label="Comment">💬</span> Comment
            </button>
            <button>
              <span role="img" aria-label="Share">↪️</span> Share
            </button>
            <button>
              <span role="img" aria-label="Send">📨</span> Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedCard;