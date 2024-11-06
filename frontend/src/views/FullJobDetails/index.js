import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  Avatar,
  Paper,
  Link,
  Chip,
  IconButton,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoopIcon from "@mui/icons-material/Loop";
import SendIcon from "@mui/icons-material/Send";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import profileImage from "../../assets/images/profileImage.png";
import "./index.css";

const FullJobDetails = () => {
  const { _id } = useParams();
  const [job, setJob] = useState(null);
  const [poster, setPoster] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobDetails = async () => {
      const response = await axios.post(`/posts/getPostsWithSeekerByPostId`, {
        postId: _id,
      });
      setJob(response.data);
      setPoster(response.data.seekerId);
    };
    fetchJobDetails();
  }, [_id]);

  if (!job || !poster) {
    return (
      <Typography variant="h6" align="center">
        Loading...
      </Typography>
    );
  }

  return (
    <div className="job-details-page-layout">
      <Grid container justifyContent="center">
        <Grid xs={12} sm={8} md={6}>
          <Paper elevation={3} className="fullJobDetailsPaper">
            {/* Back Arrow Button */}
            <IconButton
              onClick={() => navigate(-1)}
              style={{
                color: "#000",
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <div className="jobHeader">
              <Typography variant="h4" className="jobTitle">
                {job.title}
              </Typography>
              <div className="jobPayContainer">
                <Chip label={`Pay: $${job.pay}`} className="jobPay" />
                <Chip label={job.type} color="primary" className="jobType" />
              </div>
            </div>

            <Chip label={`Category: ${job.category}`} className="jobCategory" />

            <Typography variant="body1" className="jobDescription">
              {job.description}
            </Typography>

            <div className="jobDetailsSection">
              <Typography variant="body2" className="jobDetail">
                Date:{" "}
                {new Date(job.createdAt).toLocaleString("default", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </Typography>
              <Typography variant="body2" className="jobDetail">
                Time: {job.jobTime}
              </Typography>
              <Typography variant="body2" className="jobDetail">
                Prerequisite: {job.preRequisite}
              </Typography>
            </div>

            <Typography variant="body2" className="jobLocation">
              <LocationOnIcon fontSize="small" className="jobLocationIcon" />
              {job.location}
            </Typography>

            {/* Action Buttons */}
            <div
              className="job-action-buttons"
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px",
              }}
            >
              <IconButton
                className="icon-btn"
                style={{ flexDirection: "column" }}
              >
                <LoopIcon />
                <Typography variant="caption">Negotiate</Typography>
              </IconButton>
              <IconButton
                className="icon-btn"
                style={{ flexDirection: "column" }}
              >
                <ShareLocationIcon />
                <Typography variant="caption">Locate</Typography>
              </IconButton>
              <IconButton
                className="icon-btn"
                style={{ flexDirection: "column" }}
              >
                <SendIcon />
                <Typography variant="caption">Share</Typography>
              </IconButton>
              <IconButton
                className="icon-btn"
                style={{ flexDirection: "column" }}
              >
                <BookmarkBorderIcon />
                <Typography variant="caption">Save</Typography>
              </IconButton>
            </div>

            <Button
              variant="contained"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                fontWeight: "bold",
                alignSelf: "flex-end",
                margin: "10px",
              }}
              fullWidth
            >
              Interested
            </Button>

            <div className="posterSection">
              <Typography variant="h5" className="jobPosterTitle">
                Job Poster:
              </Typography>
              <div className="posterDetails">
                <Avatar
                  className="job-poster-image"
                  src={profileImage}
                  alt={poster.name}
                />
                <div className="posterInfo">
                  <Link
                    component="button"
                    onClick={() => {
                      navigate(`/user/`);
                    }}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <Typography variant="body1" className="posterName">
                      {poster.name}
                    </Typography>
                  </Link>
                  <Typography variant="caption" className="posterRating">
                    Seeker Rating: {poster.seekerRating || "N/A"} ★
                  </Typography>
                  <Typography variant="caption" className="posterRating">
                    Provider Rating: {poster.providerRating || "N/A"} ★
                  </Typography>
                  <Typography variant="caption" className="posterSince">
                    User Since:{" "}
                    {new Date(job.seekerId.createdAt).toLocaleString(
                      "default",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </Typography>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default FullJobDetails;
