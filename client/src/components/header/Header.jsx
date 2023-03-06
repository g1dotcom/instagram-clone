import React from "react";
import "./header.css";

//COMPONENTS IMPORT
import { Logo } from "../Logo/Logo";
import { Share } from "../share/Share";

//ICONS IMPORT
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Avatar } from "@mui/material";

export const Header = ({ handleOpen }) => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="header">
          <Logo />
          <Share />
          <div className="search">
            <SearchIcon className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="header-links">
            <a href="/">
              <HomeOutlinedIcon className="icon" />
            </a>
            <a href="/">
              <ChatOutlinedIcon className="icon" />
            </a>

            <AddBoxOutlinedIcon className="icon" onClick={handleOpen} />

            <a href="/">
              <Avatar
                alt="Remy Sharp"
                src="https://avatars.githubusercontent.com/u/111647989?v=4"
                sx={{ width: 28, height: 28 }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
