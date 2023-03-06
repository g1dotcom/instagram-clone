import React from "react";

// Icons
import { Avatar, Button } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

// CSS
import "./rightBox.css";

export const RightBox = () => {
  return (
    <div className="right-box">
      <div className="account">
        <a>
          <Avatar
            src="https://avatars.githubusercontent.com/u/111647989?v=4"
            sx={{ width: 56, height: 56 }}
          />
        </a>
        <div className="account-titles" href="/">
          <a href="/">
            <span>Gökhan Süle</span>
          </a>
        </div>
      </div>
      <span className="friends-title"> My Friends </span>
      <ul className="friends-list">
        <li className="friend-item">
          <div className="friend-item-left">
            <a href="/">
              <Avatar
                src=" https://pbs.twimg.com/profile_images/1602033083154415617/O-222CRA_400x400.jpg"
                sx={{ width: 56, height: 56 }}
              />
            </a>
            <div className="friend-username">
              <a href="/"> Erdem Özdemir</a>
              <span> erdmozdmr</span>
            </div>
          </div>
          <div className="friend-item-right">
            <Button variant="contained" endIcon={<ArrowCircleRightIcon />}>
              Profile Git
            </Button>
          </div>
        </li>
      </ul>
    </div>
  );
};
