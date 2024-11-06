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
import { Link } from "react-router-dom";
import axios from "axios";
import profileImage from "../../assets/images/profileImage.png";
import "./index.css";

const PostJobBox = () => {
  return (
    <Link className="box-link" to="/post-new-job">
      {" "}
      <Card
        className="job-post-box"
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          marginBottom: "10px",
          cursor: "pointer",
        }}
      >
        <Avatar
          alt="User Avatar"
          src={profileImage}
          style={{ marginRight: "10px" }}
        />{" "}
        <CardContent style={{ flexGrow: 1, padding: "0" }}>
          <TextField
            className="postjob-textfield"
            fullWidth
            multiline
            rows={1}
            variant="outlined"
            placeholder="Source it..."
            style={{ marginRight: "10px" }}
          />
        </CardContent>
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "10px" }}
        >
          Post Job
        </Button>
      </Card>
    </Link>
  );
};

export default PostJobBox;
