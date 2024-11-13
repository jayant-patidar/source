import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography, Avatar, Paper, Chip } from "@mui/material";
import profileImage from "../../assets/images/profileImage.png";
import Grid from "@mui/material/Grid2";
import "./index.css";

const UserProfile = () => {
  const { _id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.post(`/users/getUserByIdWithoutPassword`, {
          seekerId: _id,
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUserDetails();
  }, [_id]);

  if (!user) {
    return (
      <Typography variant="h6" align="center">
        Loading...
      </Typography>
    );
  }

  return (
    <Grid container justifyContent="center">
      <Grid xs={12} sm={8} md={6}>
        <Paper elevation={6} className="userProfilePaper">
          <div className="userProfileImage">
            <Avatar
              src={profileImage}
              alt={user.name}
              className="profileAvatar"
            />
          </div>
          <div className="userFullName">
            <Typography variant="h4">{user.name}</Typography>
          </div>
          <div>
            <Typography variant="body2" color="textSecondary">
              User Since:{" "}
              {new Date(user.createdAt).toLocaleDateString("default", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </Typography>
            <Chip
              label={`Seeker Rating: ${user.seekerRating || "N/A"} ★`}
              className="ratingChip"
            />
            <Chip
              label={`Provider Rating: ${user.providerRating || "N/A"} ★`}
              className="ratingChip"
            />
          </div>
          <div className="aboutSection">
            <Typography variant="body1" className="userDescription">
              About: {user.about || "No bio available"}
            </Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
