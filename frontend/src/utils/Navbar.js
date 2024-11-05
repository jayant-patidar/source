import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  InputBase,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WorkIcon from "@mui/icons-material/Work";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "../App.css"; // Import your CSS for styling
import logo from "../assets/images/logo.png";
import profileImage from "../assets/images/profileImage.png";
import "./NavbarStyle.css";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Jobs" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MessageIcon />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="fixed" className="navbar">
        <Toolbar className="navbar-toolbar">
          {/* Left side: Logo */}
          <div className="navbar-left">
            {isMobile && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                className="navbar-menu-icon"
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" className="navbar-logo">
              <img src={logo} alt="Logo" className="navbar-logo-image" />
            </Typography>
          </div>

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

          {/* Right side: Show links only on larger screens */}
          {!isMobile && (
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
              <IconButton color="inherit" onClick={handleMenuOpen}>
                <Avatar
                  alt="User Image"
                  src={profileImage}
                  className="navbar-user-avatar"
                />
                <ArrowDropDownIcon />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>

      {/* Dropdown Menu for User Avatar */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
