import React, { useState } from "react";

// CSS
import "./share.css";

// material UI
import { Avatar, Box, Button, Modal, Typography } from "@mui/material";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ShortTextIcon from "@mui/icons-material/ShortText";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

export const Share = ({ open, handleClose }) => {
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
            <Typography variant="span"> crate new poast</Typography>
          </div>
          <form className="modal-body">
            <div className="modal-body-top">
              <Avatar
                alt="Remy Sharp"
                src="https://avatars.githubusercontent.com/u/111647989?v=4"
                sx={{ width: 28, height: 28 }}
              />
              <input
                className="modal-text-input"
                type="text"
                placeholder="Write a post"
              />
              <Button type="submit" variant="contained" height="10px">
                Paylaş
              </Button>
            </div>
            <div className="modal-buttons">
              <button>
                <AddAPhotoOutlinedIcon /> <a>Video</a>
              </button>
              <button>
                <VideoLibraryOutlinedIcon /> <a>Video</a>
              </button>
              <button>
                <CalendarMonthOutlinedIcon /> <a>Video</a>
              </button>
              <button>
                <ShortTextIcon /> <a>Video</a>
              </button>
            </div>
            <div className="share-img-wrapper">
              <img
                className="share-img"
                src="https://i.pinimg.com/564x/e6/1c/40/e61c4070a2f8d41f23be253575913833.jpg"
                alt=""
              />
              <CancelOutlinedIcon className="cancel-icon" color="error" />
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};
