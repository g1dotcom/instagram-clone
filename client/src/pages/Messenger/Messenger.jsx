import React from "react";

// Material UI
import { Button } from "@mui/material";

// Components
import { Conversation } from "../../components/conversation/Conversation";
import { Message } from "../../components/message/Message";
import { ChatOnline } from "../../components/chatOnline/ChatOnline";

// CSS
import "./messenger.css";

export const Messenger = () => {
  return (
    <div className="messenger">
      <div className="chat-menu">
        <div className="chat-menu-wrapper">
          <input
            placeholder="Search for friends"
            className="chat-menu-input"
            type="text"
          />
          <div className="">
            <Conversation />
          </div>
        </div>
      </div>
      <form className="chat-box">
        <div className="chat-box-wrapper">
          <div className="chat-box-top">
            <div>
              <Message />
            </div>
          </div>
          <div className="chat-box-bottom">
            <textarea
              className="chat-message-input"
              placeholder="Write something..."
            ></textarea>
            <Button
              color="success"
              variant="contained"
              className="chat-submit-button"
              type="submit"
            >
              Send
            </Button>
          </div>
        </div>
      </form>
      <div className="chat-online">
        <div className="chat-online-wrapper">
          <h4>Online Users</h4>
          <ChatOnline />
        </div>
      </div>
    </div>
  );
};
