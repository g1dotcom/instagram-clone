// react and hooks
import React, { useContext, useRef, useState } from "react";

// context
import { AuthContext } from "../../context/AuthContext";

// CSS
import "./share.css";

// material UI
import { Avatar, Box, Button, Modal, Typography } from "@mui/material";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ShortTextIcon from "@mui/icons-material/ShortText";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

//axios
import axios from "axios";
import { toast } from "react-toastify";

export const Share = ({ open, handleClose }) => {
  //usestate for file
  const [file, setFile] = useState(null);

  // Pf = public folder
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  //context
  const { user } = useContext(AuthContext);
  //useref
  const desc = useRef();

  //submıt handler
  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axios.post("/posts/", newPost);
      if (res.status === 200) {
        toast.success(res.data);
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Modal open={open} onClose={handleClose} className="modal">
        <Box className="modal-box">
          <div className="modal-head">
            <Typography variant="span">Create New Post</Typography>
          </div>
          <form className="modal-body" onSubmit={submitHandler}>
            <div className="modal-body-top">
              <Avatar
                alt="Remy Sharp"
                src={user && PF + user.profilePicture}
                sx={{ width: 46, height: 46 }}
              />
              <input
                className="modal-text-input"
                type="text"
                placeholder="Write a post."
                ref={desc}
              />
              <Button type="submit" variant="contained" height="10px">
                Paylaş
              </Button>
            </div>
            <div className="modal-buttons">
              <label htmlFor="inputFile" style={{ cursor: "pointer" }}>
                <button type="button" style={{ pointerEvents: "none" }}>
                  <AddAPhotoOutlinedIcon />
                  <b>Fotoğraf</b>
                </button>
              </label>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                id="inputFile"
                style={{ display: "none" }}
              />
              <button>
                <VideoLibraryOutlinedIcon />
                <b>Video</b>
              </button>
              <button>
                <CalendarMonthOutlinedIcon />
                <b>Etkinlik</b>
              </button>
              <button>
                <ShortTextIcon />
                <b>Yazı Yaz</b>
              </button>
            </div>
            {file && (
              <div className="share-img-wrapper">
                <img
                  className="share-img"
                  src={URL.createObjectURL(file)}
                  alt=""
                />
                <CancelOutlinedIcon
                  onClick={() => setFile(null)}
                  className="cancel-icon"
                  color="error"
                />
              </div>
            )}
          </form>
        </Box>
      </Modal>
    </>
  );
};
