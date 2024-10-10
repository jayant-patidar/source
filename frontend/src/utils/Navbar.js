import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  InputBase,
  Avatar,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WorkIcon from "@mui/icons-material/Work";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Importing the Arrow icon
import "../App.css"; // Import your CSS for styling
import logo from "../assets/images/logo.png";
import profileImage from "../assets/images/profileImage.png";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar className="navbar-toolbar">
        {/* Left side: Logo and App name */}
        <div className="navbar-left">
          <Typography variant="h6" className="navbar-logo">
            <img src={logo} alt="Logo" className="navbar-logo-image" />
          </Typography>

          {/* Search Bar */}
          <div className="navbar-search">
            <div className="search-icon">
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              className="navbar-search-input"
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </div>

        {/* Right side: Navigation links and user dropdown */}
        <div className="navbar-links">
          <Button color="inherit" className="navbar-link">
            <HomeIcon />
            <Typography variant="caption">Home</Typography>
          </Button>
          <Button color="inherit" className="navbar-link">
            <WorkIcon />
            <Typography variant="caption">Jobs</Typography>
          </Button>
          <Button color="inherit" className="navbar-link">
            <MessageIcon />
            <Typography variant="caption">Messages</Typography>
          </Button>
          <Button color="inherit" className="navbar-link">
            <NotificationsIcon />
            <Typography variant="caption">Notifications</Typography>
          </Button>
          <Button color="inherit" className="navbar-link">
            {/* User dropdown with Arrow icon */}
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <Avatar
                alt="User Image"
                src={profileImage} // Add user image path
                className="navbar-user-avatar"
              />

              <ArrowDropDownIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              keepMounted
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
