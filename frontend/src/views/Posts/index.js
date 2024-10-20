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
  FormControl, // For sorting and filtering
  InputLabel, // Label for the dropdowns
  Select, // Dropdown itself
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Grid2"; // Import Grid2 component
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
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

          {/* Sort and Filter Options */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px 0",
            }}
          >
            {/* Sort Dropdown */}
            <FormControl variant="outlined" size="small">
              <InputLabel id="sort-label">Sort By</InputLabel>
              <Select labelId="sort-label" id="sort" label="Sort By">
                <MenuItem value="date">Date Posted</MenuItem>
                <MenuItem value="pay">Pay</MenuItem>
                <MenuItem value="location">Location</MenuItem>
              </Select>
            </FormControl>

            {/* Filter Dropdown */}
            <FormControl variant="outlined" size="small">
              <InputLabel id="filter-label">Filter By</InputLabel>
              <Select labelId="filter-label" id="filter" label="Filter By">
                <MenuItem value="full-time">Full-Time</MenuItem>
                <MenuItem value="part-time">Part-Time</MenuItem>
                <MenuItem value="remote">Remote</MenuItem>
              </Select>
            </FormControl>
          </div>
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

                    <Typography variant="caption" color="gray">
                      Posted:
                      {new Date(post.createdAt).toLocaleString("default", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </Typography>
                  </div>
                </div>
                {/* Horizontal line */}
                <hr className="postcard-section-divider" />

                {/* Title and Pay on the same line */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5" gutterBottom color="black">
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body"
                    style={{ color: "#ff9800", fontWeight: "bold" }}
                  >
                    ${post.pay || "N/A"} : {post.type || "N/A"}
                  </Typography>
                </div>
                {/* Description */}
                <Typography variant="body1" color="gray" gutterBottom>
                  {post.description}
                </Typography>

                {/* Location with pin icon */}
                <Typography
                  variant="body2"
                  style={{
                    color: "gray",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <LocationOnIcon
                    fontSize="small"
                    style={{ marginRight: "4px" }}
                  />
                  {post.location || "N/A"}
                </Typography>
                {/* Horizontal Line */}
                <hr className="postcard-section-divider" />

                {/* Action Buttons Section */}
                <div
                  className="post-actions"
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div style={{ textAlign: "center" }}>
                    <IconButton className="icon-btn">
                      <ThumbUpOffAltIcon style={{ color: "#000" }} />
                    </IconButton>
                    <Typography variant="caption" color="textSecondary">
                      Like
                    </Typography>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <IconButton className="icon-btn">
                      <CommentIcon style={{ color: "#000" }} />
                    </IconButton>
                    <Typography variant="caption" color="textSecondary">
                      Comment
                    </Typography>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <IconButton className="icon-btn">
                      <SendIcon style={{ color: "#000" }} />
                    </IconButton>
                    <Typography variant="caption" color="textSecondary">
                      Share
                    </Typography>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <IconButton className="icon-btn">
                      <BookmarkBorderIcon style={{ color: "#000" }} />
                    </IconButton>
                    <Typography variant="caption" color="textSecondary">
                      Save
                    </Typography>
                  </div>
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
