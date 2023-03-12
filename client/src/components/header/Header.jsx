import React, { useContext, useEffect, useState } from "react";
import "./header.css";

//Axios
import axios from "axios";

//CONTEXT IMPORT
import { AuthContext } from "../../context/AuthContext";

// React Router
import { Link } from "react-router-dom";

//COMPONENTS IMPORT
import { Logo } from "../logo/Logo";

//ICONS IMPORT MATERIAL UI
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Avatar } from "@mui/material";
import { Box } from "@mui/system";

export const Header = ({ handleOpen }) => {
  const { user: currentUser } = useContext(AuthContext);

  const [users, setUsers] = useState();
  const [search, setSearch] = useState("");
  const [userFilter, setUserFilter] = useState([]);

  useEffect(() => {
    const getUserList = async () => {
      const res = await axios.get("/users/list");
      setUsers(res.data);
    };
    getUserList();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setUserFilter(
      users.filter((user) => user.username.includes(e.target.value))
    );
    console.log(userFilter);
  };

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="header">
          <Logo />
          <Box sx={{ position: "relative" }}>
            <div className="search">
              <SearchIcon className="search-icon" />
              <input type="text" placeholder="Search" onChange={handleSearch} />
              <div className="search-result-wrapper">
                <div className="search-result">
                  <Link
                    className="search-result-link"
                    to="/profile/gokhansule1"
                  >
                    <Avatar
                      sx={{ width: 28, height: 28 }}
                      alt="Remy Sharp"
                      src={
                        currentUser.profilePicture &&
                        PF + currentUser.profilePicture
                      }
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        lineHeight: "1",
                        fontSize: "12",
                      }}
                    >
                      <b>{currentUser.username}</b>
                      <span>{currentUser.fullName}</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Box>

          <div className="header-links">
            <Link to="/">
              <HomeOutlinedIcon className="icon" />
            </Link>
            <Link to="/messenger">
              <ChatOutlinedIcon className="icon" />
            </Link>

            <AddBoxOutlinedIcon className="icon" onClick={handleOpen} />

            <Link to="/profile/gokhansule1">
              <Avatar
                alt="Remy Sharp"
                src="https://avatars.githubusercontent.com/u/111647989?v=4"
                sx={{ width: 28, height: 28 }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
