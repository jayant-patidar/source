// JobPostForm.js
import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Avatar,
  Typography,
} from "@mui/material";
import axios from "axios";
import profileImage from "../../assets/images/profileImage.png";

const PostJobBox = () => {
  const [jobDescription, setJobDescription] = useState("");

  const handlePostJob = async () => {
    if (!jobDescription.trim()) {
      alert("Please enter a job description");
      return;
    }

    try {
      const response = await axios.post("/posts/createJobPost", {
        description: jobDescription,
      });
      // Handle response (e.g., reset input field or show success message)
      setJobDescription("");
      alert("Job posted successfully!");
    } catch (error) {
      console.error("Error posting job", error);
      alert("Failed to post job. Please try again.");
    }
  };

  return (
    <Card
      className="job-post-card"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <Avatar
        alt="User Avatar"
        src={profileImage}
        style={{ marginRight: "10px" }}
      />{" "}
      {/* Change this to actual user profile pic */}
      <CardContent style={{ flexGrow: 1, padding: "0" }}>
        <TextField
          fullWidth
          multiline
          rows={1}
          variant="outlined"
          placeholder="Describe the job you want to post..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          style={{ marginRight: "10px" }}
        />
      </CardContent>
      <Button
        variant="contained"
        color="primary"
        onClick={handlePostJob}
        style={{ marginLeft: "10px" }}
      >
        Post Job
      </Button>
    </Card>
  );
};

export default PostJobBox;
