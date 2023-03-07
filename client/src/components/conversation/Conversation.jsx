import React from "react";

// Material UI İcons
import { Avatar } from "@mui/material";

// CSS
import "./conversation.css";

export const Conversation = () => {
  return (
    <div className="conversation">
      <Avatar
        className="conversation-img"
        src="https://avatars.githubusercontent.com/u/111647989?v=4"
        sx={{ width: 32, height: 32 }}
      />
      <div className="conversation-name">Gökhan Süle</div>
    </div>
  );
};
