import React from "react";

// Material UI İcons
import { Avatar } from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

// CSS
import "./post.css";

export const Post = () => {
  return (
    <div className="post-wrapper">
      <div className="post-header">
        <div className="post-header-left">
          <a href="/">
            <Avatar
              src="https://avatars.githubusercontent.com/u/111647989?v=4"
              sx={{ width: 32, height: 32 }}
            />
          </a>
          <a className="profile-username" href="/">
            {" "}
            Gökhan Süle{" "}
          </a>
        </div>
        <div className="post-header-right">
          <button>
            <MoreHorizOutlinedIcon />
          </button>
        </div>
      </div>
      <div className="post-image">
        <img src="/images/post/1.png" alt="Post Img" />
      </div>
      <div className="post-bottom">
        <div className="post-like">
          <button>
            <FavoriteIcon className="post-like-icon active" />
          </button>
        </div>
        <span className="post-like-count">0 like</span>
        <div className="post-content">
          <a href="/" className="profile-username">
            Gökhan Süle
          </a>

          <span className="post-text">
            {"   "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            perferendis, atque laudantium at doloribus cumque. Necessitatibus
            incidunt aperiam alias ad.{" "}
          </span>
        </div>

        <div className="post-time">1 dakika önce</div>
      </div>
    </div>
  );
};
