import React from "react";

// Components
import { Conversation } from "../../components/conversation/Conversation";
import { Message } from "../../components/message/Message";

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
      <div className="chat-box">
        <div className="chat-box-wrapper">
          <div className="chat-box-top"></div>
          <div>
            <Message />
          </div>
        </div>
      </div>
      <div className="chat-online"></div>
    </div>
  );
};
