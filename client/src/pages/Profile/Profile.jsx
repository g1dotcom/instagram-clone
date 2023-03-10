// react and hooks
import React, { useContext, useState, useEffect } from "react";

// context
import { AuthContext } from "../../context/AuthContext";

// CSS
import "./profile.css";

// react-router-dom
import { useParams } from "react-router-dom";

// Axios
import axios from "axios";

// Components
import { Post } from "../../components/post/Post";

//material-ui icons
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import GridOnOutlinedIcon from "@mui/icons-material/GridOnOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Avatar, Button } from "@mui/material";

/////////// Main Component //////////////////

export const Profile = () => {
  //use params
  const username = useParams().username;

  // usestate for user
  const [user, setUser] = useState([]);
  // usestate for posts
  const [posts, setPosts] = useState([]);

  // PF = Public Folder
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // context
  const { user: currentUser, dispatch } = useContext(AuthContext);

  // axios get request for user
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("/users?username=" + username);
      setUser(res.data);
    };
    getUser();
  }, [username]);

  // axios get request for posts
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("/posts/profile/" + username);
      setPosts(res.data);
    };
    getPosts();
  }, [username]);

  // handle logout
  const handleOutClick = () => {
    if (window.confirm("Are you sure  want to logout?")) {
      dispatch({ type: "LOGOUT" });
    }
  };

  return (
    <div className="container">
      <div className="profile-page">
        <div className="profile-head">
          <div className="head-left">
            <Avatar
              src={user.profilePicture && PF + user.profilePicture}
              sx={{ width: 150, height: 150 }}
            />
          </div>
          <div className="head-right">
            <div className="head-right-top">
              <span className="profile-page-username">{user.username}</span>
              <div className="profile-page-buttons">
                {user._id === currentUser._id && (
                  <Button
                    className="profile-page-buttons"
                    variant="contained"
                    size="small"
                  >
                    D??zenle
                  </Button>
                )}
                {user._id === currentUser._id && (
                  <button>
                    <SettingsOutlinedIcon />{" "}
                  </button>
                )}
                {user._id === currentUser._id && (
                  <button onClick={handleOutClick}>
                    {" "}
                    <LogoutOutlinedIcon color="error" />{" "}
                  </button>
                )}
              </div>
            </div>
            <div className="head-right-center">
              <div className="post-count">
                <b>{posts.length}</b>
                <span>posts</span>
              </div>
              <div className="follower-count">
                <b>{user.followers && user.followers.length}</b>
                <span>followers</span>
              </div>
              <div className="following-count">
                <b>{user.followings && user.followings.length}</b>
                <span>followings</span>
              </div>
            </div>
            <div className="head-right-bottom">
              <b>{user.fullName}</b>
              <span>{user.bio && user.bio}</span>
            </div>
          </div>
        </div>
        <div className="profile-body">
          <div className="profile-nav-tabs">
            <button className="active">
              <GridOnOutlinedIcon />
              <span>POSTS</span>
            </button>
            <button>
              <VideoLibraryOutlinedIcon />
              <span>VIDEOS</span>
            </button>
            <button>
              <BookmarkAddOutlinedIcon />
              <span>SAVE</span>
            </button>
            <button>
              <AccountBoxOutlinedIcon />
              <span>TAGGED</span>
            </button>
          </div>
          <div className="profile-post-grid">
            {posts.map((post) => (
              <div className="grid-post" key={post._id}>
                <Post post={post} />;
                <div className="like-icon-wrapper">
                  <FavoriteIcon className="like-icon" />
                  {post.likes && post.likes.length}
                  <b>1</b>
                </div>
              </div>
            ))}
            ;
          </div>
        </div>
      </div>
    </div>
  );
};
