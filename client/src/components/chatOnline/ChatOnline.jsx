import React from "react";

// Material UI İcons
import { Avatar } from "@mui/material";

// CSS
import "./chatOnline.css";

export const ChatOnline = () => {
  return (
    <div className="chat-online">
      <div className="chat-online-friend">
        <div className="chat-online-img-container">
          <Avatar
            src=" https://pbs.twimg.com/profile_images/1602033083154415617/O-222CRA_400x400.jpg"
            sx={{ width: 32, height: 32 }}
          />
          <span className="chat-online-badge"></span>
        </div>
        <div className="chat-online-name">Erdem Özdemir</div>
      </div>
    </div>
  );
};
