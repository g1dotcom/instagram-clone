import React from "react";
import "./header.css";

// React Router
import { Link } from "react-router-dom";

//COMPONENTS IMPORT
import { Logo } from "../logo/Logo";

//ICONS IMPORT MATERIAL UI
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Avatar } from "@mui/material";
import { Box } from "@mui/system";

export const Header = ({ handleOpen }) => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="header">
          <Logo />
          <Box>
            <div className="search">
              <SearchIcon className="search-icon" />
              <input type="text" placeholder="Search" />
            </div>
          </Box>

          <div className="header-links">
            <Link to="/">
              <HomeOutlinedIcon className="icon" />
            </Link>
            <Link to="/messenger">
              <ChatOutlinedIcon className="icon" />
            </Link>

            <AddBoxOutlinedIcon className="icon" onClick={handleOpen} />

            <Link to="/profile/gokhansule1">
              <Avatar
                alt="Remy Sharp"
                src="https://avatars.githubusercontent.com/u/111647989?v=4"
                sx={{ width: 28, height: 28 }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
