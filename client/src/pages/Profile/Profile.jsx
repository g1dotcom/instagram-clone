import { Avatar, Button } from "@mui/material";
import React from "react";

// CSS
import "./profile.css";

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

export const Profile = () => {
  return (
    <div className="container">
      <div className="profile-page">
        <div className="profile-head">
          <div className="head-left">
            <Avatar
              src="https://avatars.githubusercontent.com/u/111647989?v=4"
              sx={{ width: 150, height: 150 }}
            />
          </div>
          <div className="head-right">
            <div className="head-right-top">
              <span className="profile-page-username">gokhansule1</span>
              <div className="profile-page-buttons">
                <Button
                  className="profile-page-buttons"
                  variant="contained"
                  size="small"
                >
                  Düzenle
                </Button>
                <button>
                  {" "}
                  <SettingsOutlinedIcon />{" "}
                </button>
                <button>
                  {" "}
                  <LogoutOutlinedIcon color="error" />{" "}
                </button>
              </div>
            </div>
            <div className="head-right-center">
              <div className="post-count">
                <b>1</b>
                <span>posts</span>
              </div>
              <div className="follower-count">
                <b>1</b>
                <span>followers</span>
              </div>
              <div className="following-count">
                <b>1</b>
                <span>followings</span>
              </div>
            </div>
            <div className="head-right-bottom">
              <b>Gokhan Sule</b>
              <span>Full-Stack Web Dev.</span>
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
            <div className="grid-post">
              <Post />
              <div className="like-icon-wrapper">
                <FavoriteIcon className="like-icon" />
                <b>1</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
