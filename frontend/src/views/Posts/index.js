import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  CircularProgress,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2"; // Import Grid2 component
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import axios from "axios";
import "../../../src/App.css";
import UserProfileBox from "../UserProfileBox";
import RecommendedJobsBox from "../RecommendedJobsBox";
import RecentJobsBox from "../RecentJobBox";
import JobPostForm from "../PostJobBox";
import profileImage from "../../assets/images/profileImage.png";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("/posts/getAllPostsWithSeeker");
      if (Array.isArray(response.data)) {
        setPosts(response.data);
      } else {
        console.error("Error fetching posts", response);
      }
    } catch (error) {
      console.error("Error fetching posts", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Optional: For handling conditional rendering based on screen size
  const isMobile = useMediaQuery("(max-width:600px)");

  if (loading) {
    return <CircularProgress color="primary" />;
  }

  return (
    <div className="posts-page-layout">
      <Grid container spacing={2}>
        {/* Left Sidebar: User Profile */}
        <Grid size={{ xs: 12, sm: 4, md: 3 }}>
          <UserProfileBox />
        </Grid>

        {/* Main Content: Posts */}
        <Grid size={{ xs: 12, sm: 8, md: 6 }}>
          <JobPostForm />
          {posts.map((post, index) => (
            <Card key={index} className="post-card">
              <CardContent>
                {/* Profile image on top left */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Avatar alt={post.seekerId.name} src={profileImage} />
                  <div style={{ marginLeft: "10px" }}>
                    <Typography variant="body1" color="black">
                      {post.seekerId.name}
                    </Typography>
                    <Typography variant="body2" color="gray">
                      {new Date(post.createdAt).toLocaleString()}
                    </Typography>
                  </div>
                </div>
                {/* Horizontal line */}
                <hr className="post-divider" />

                <Typography variant="h5" gutterBottom color="black">
                  {post.title}
                </Typography>
                <Typography variant="body1" color="gray" gutterBottom>
                  {post.description}
                </Typography>
                <Typography variant="body2" color="gray">
                  Location: {post.location || "N/A"}
                </Typography>
                <Typography variant="body2" color="gray">
                  Pay: ${post.pay || "N/A"}
                </Typography>
                <Typography variant="body2" color="gray">
                  Type: {post.type || "N/A"}
                </Typography>
                <div style={{ marginTop: "10px" }}>
                  {post.tags &&
                    post.tags.map((tag, i) => (
                      <Button
                        key={i}
                        variant="outlined"
                        size="small"
                        className="btn"
                        color="default"
                      >
                        {tag}
                      </Button>
                    ))}
                </div>

                {/* Horizontal Line */}
                <hr className="post-divider" />

                {/* Action Buttons Section */}
                <div className="post-actions">
                  <IconButton className="icon-btn">
                    <ThumbUpOffAltIcon style={{ color: "#000" }} />
                  </IconButton>
                  <IconButton className="icon-btn">
                    <CommentIcon style={{ color: "#000" }} />
                  </IconButton>
                  <IconButton className="icon-btn">
                    <SendIcon style={{ color: "#000" }} />
                  </IconButton>
                  <IconButton className="icon-btn">
                    <BookmarkBorderIcon style={{ color: "#000" }} />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          ))}
        </Grid>

        {/* Right Sidebar: Recommended and Recent Jobs */}
        <Grid size={{ xs: 12, sm: 12, md: 3 }}>
          <div className="sidebar-right-box">
            <RecommendedJobsBox />
          </div>
          <div className="sidebar-right-box">
            <RecentJobsBox />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Posts;
