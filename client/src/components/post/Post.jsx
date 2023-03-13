// hooks , react  and react-router-dom
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Material UI
import { Avatar } from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

//react-timeago
import TimeAgo from "react-timeago";
import turkishStrings from "react-timeago/lib/language-strings/tr";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

// CSS
import "./post.css";

// Axios
import axios from "axios";

export const Post = ({ top, bottom, post }) => {
  const [user, setUser] = useState([]);

  // PF = Public Folder
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  //react-timeago
  const formatter = buildFormatter(turkishStrings);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("/users?userId=" + post.userId);
      setUser(res.data);
    };
    getUser();
  }, [post.userId]);

  console.log(user);

  return (
    <div className="post-wrapper">
      {top && (
        <div className="post-header">
          <div className="post-header-left">
            <Link to={"/profile/" + user.username}>
              <Avatar
                src={user.profilePicture && PF + user.profilePicture}
                sx={{ width: 32, height: 32 }}
              />
            </Link>
            <Link className="profile-username" to={"/profile/" + user.username}>
              {user.username}
            </Link>
          </div>
          <div className="post-header-right">
            <button>
              <MoreHorizOutlinedIcon />
            </button>
          </div>
        </div>
      )}
      <div className="post-image">
        <img src="/images/post/1.png" alt="Post Img" />
      </div>
      {bottom && (
        <div className="post-bottom">
          <div className="post-like">
            <button>
              <FavoriteIcon className="post-like-icon active" />
            </button>
          </div>
          <span className="post-like-count">
            {post.likes.length}
            {post.likes.length > 1 ? "likes" : "like"}
          </span>
          <div className="post-content">
            <Link to={"/profile/" + user.username} className="profile-username">
              {user.username}
            </Link>

            <span className="post-text">{post.desc}</span>
          </div>

          <div className="post-time">
            <TimeAgo date={post.createdAt} formatter={formatter} />
          </div>
        </div>
      )}
    </div>
  );
};
