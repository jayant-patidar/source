import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Link,
  Chip,
  CircularProgress,
  Avatar,
  Button, // Import Button component
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";

import LoopIcon from "@mui/icons-material/Loop";
import SendIcon from "@mui/icons-material/Send";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios";
import "../../../src/App.css";
import UserProfileBox from "../UserProfileBox";
import RecommendedJobsBox from "../RecommendedJobsBox";
import RecentJobsBox from "../RecentJobBox";
import JobPostForm from "../PostJobBox";
import profileImage from "../../assets/images/profileImage.png";
import "./index.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  if (loading) {
    return <CircularProgress color="primary" />;
  }

  return (
    <div className="posts-page-layout">
      <Grid container spacing={2}>
        {/* Left Sidebar: User Profile */}
        <Grid size={{ xs: 12, sm: 4, md: 3, lg: 3 }}>
          <UserProfileBox />
        </Grid>

        {/* Main Content: Posts */}
        <Grid size={{ xs: 12, sm: 8, md: 6 }}>
          <JobPostForm />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px 0",
            }}
          >
            <FormControl
              variant="outlined"
              size="small"
              style={{ width: "48%" }}
            >
              <InputLabel id="sort-label">Sort By</InputLabel>
              <Select labelId="sort-label" id="sort" label="Sort By">
                <MenuItem value="date">Posted Date</MenuItem>
                <MenuItem value="date">Job Date</MenuItem>
                <MenuItem value="pay">Pay</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              size="small"
              style={{ width: "48%" }}
            >
              <InputLabel id="filter-label">Filter By</InputLabel>
              <Select labelId="filter-label" id="filter" label="Filter By">
                <MenuItem value="full-time">Location</MenuItem>
                <MenuItem value="part-time">Type</MenuItem>
                <MenuItem value="remote">Pay Range</MenuItem>
                <MenuItem value="pay">Nagotiable</MenuItem>
              </Select>
            </FormControl>
          </div>

          {posts.map((post, index) => (
            <Card key={index} className="post-card">
              <CardContent className="post-card-content">
                {/* Profile image on top left */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Avatar alt={post.seekerId.name} src={profileImage} />
                    <div style={{ marginLeft: "10px" }}>
                      <Typography variant="body1" color="black">
                        {post.seekerId.name}
                      </Typography>
                      <Typography variant="caption" color="gray">
                        Posted:{" "}
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

                  {/* Seeker Rating */}
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ fontWeight: "bold" }}
                  >
                    Seeker Rating: {post.seekerId.seekerRating || "N/A"} ★
                  </Typography>
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
                  <Link
                    component="button"
                    onClick={() => {
                      navigate(`/job/${post._id}`);
                    }}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Typography
                      variant="h5"
                      gutterBottom
                      color="black"
                      style={{
                        textAlign: "left",
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      {post.title}
                    </Typography>
                  </Link>
                  <div className="jobPayContainer">
                    <Chip label={`Pay: $${post.pay}`} className="jobPay" />
                    <Chip
                      label={post.type}
                      color="primary"
                      className="jobType"
                    />
                  </div>
                </div>
                {/* Description */}
                <Typography variant="h6" gutterBottom>
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
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <IconButton
                    className="icon-btn"
                    style={{ flexDirection: "column" }}
                  >
                    <LoopIcon style={{ color: "#000" }} />
                    <Typography variant="caption">Negotiate</Typography>
                  </IconButton>

                  <IconButton
                    className="icon-btn"
                    style={{ flexDirection: "column" }}
                  >
                    <ShareLocationIcon style={{ color: "#000" }} />
                    <Typography variant="caption">Locate</Typography>
                  </IconButton>

                  <IconButton
                    className="icon-btn"
                    style={{ flexDirection: "column" }}
                  >
                    <SendIcon style={{ color: "#000" }} />
                    <Typography variant="caption">Share</Typography>
                  </IconButton>

                  <IconButton
                    className="icon-btn"
                    style={{ flexDirection: "column" }}
                  >
                    <BookmarkBorderIcon style={{ color: "#000" }} />
                    <Typography variant="caption">Save</Typography>
                  </IconButton>
                </div>

                {/* "Interested" Button */}
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    fontWeight: "bold",
                    alignSelf: "flex-end",
                  }}
                  fullWidth
                >
                  Interested
                </Button>
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
