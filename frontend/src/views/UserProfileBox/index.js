import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  CircularProgress,
  Link,
} from "@mui/material";
import axios from "axios";
import profileImage from "../../assets/images/profileImage.png";
import coverImage from "../../assets/images/coverImage.png";
import "./index.css";

const UserProfileBox = () => {
  const [user, setUser] = useState(null);
  const userId = "66a68718bc989c0a422db2d6";
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const response = await axios.post("/users/getUserById", {
        seekerId: userId,
      });
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!user) {
    return <CircularProgress color="primary" />;
  }

  return (
    <Card className="user-profile-card">
      <div>
        <div className="cover-photo">
          <img src={coverImage} alt="Cover" className="cover-photo-img" />
        </div>
        <Avatar alt="User Image" src={profileImage} className="user-avatar" />
      </div>
      <CardContent>
        <div style={{ marginTop: "-50px" }}>
          <Typography variant="h4" align="center">
            {user.name}
          </Typography>
          <hr className="profile-divider" />
          <Typography variant="h6" align="center">
            {user.email}
          </Typography>
          <hr className="profile-divider" />
          <Typography variant="body1" align="center">
            Seeker Rating: {user.seekerRating}/5{" "}
          </Typography>
          <hr className="profile-divider" />
          <Typography variant="body1" align="center">
            Provider Rating: {user.providerRating}/5{" "}
          </Typography>
          <hr className="profile-divider" />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{
              marginTop: "10px",
              backgroundColor: "#000",
              color: "#fff",
            }}
          >
            View Profile
          </Button>

          <div>
            <a href="/todo">TODO</a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileBox;
