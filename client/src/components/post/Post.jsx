// hooks , react  and react-router-dom
import React, { useContext, useEffect, useState } from "react";
// react-router-dom
import { Link } from "react-router-dom";

// Material UI
import { Avatar, IconButton } from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
// material-ui menu

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

//react-timeago
import TimeAgo from "react-timeago";
import turkishStrings from "react-timeago/lib/language-strings/tr";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

// CSS
import "./post.css";

// Axios
import axios from "axios";

// Toastify
import { toast } from "react-toastify";

// Context
import { AuthContext } from "../../context/AuthContext";

///////////// Main Component //////////////////
//////////////////////////////////////////////
export const Post = ({ top, bottom, post }) => {
  // usestate for user
  const [user, setUser] = useState([]);

  // material-ui menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // context
  const { user: currentUser } = useContext(AuthContext);

  // usestate for likes
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  // PF = Public Folder
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  //react-timeago
  const formatter = buildFormatter(turkishStrings);

  // useEffect for user&post
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("/users?userId=" + post.userId);
      setUser(res.data);
    };
    getUser();
  }, [post.userId]);

  // useEffect for likes
  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  // like handler
  const likeHandler = async () => {
    try {
      await axios.put("/posts/" + post._id + "/like", {
        userId: currentUser._id,
      });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  // delete handler
  const deleteHandler = async () => {
    try {
      if (window.confirm("Are you sure?")) {
        const res = await axios.delete("/posts/" + post._id, {
          data: {
            userId: currentUser._id,
          },
        });
        if (res.status === 200) {
          toast.success(res.data);
          window.location.reload();
        }
      }
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

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
            <button onClick={handleClick}>
              <MoreHorizOutlinedIcon />
            </button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>
                <IconButton color="error" onClick={deleteHandler}>
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </MenuItem>
            </Menu>
          </div>
        </div>
      )}
      <div className="post-image">
        <img src={post && PF + post.img} alt="Post Img" />
      </div>
      {bottom && (
        <div className="post-bottom">
          <div className="post-like">
            <button onClick={likeHandler}>
              <FavoriteIcon
                className={`post-like-icon ${isLiked && "active"}`}
              />
            </button>
          </div>
          <span className="post-like-count">
            {like} {""}
            {like > 1 ? "likes" : "like"}
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
