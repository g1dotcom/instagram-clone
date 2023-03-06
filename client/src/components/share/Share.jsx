import React, { useState } from "react";

// CSS
import "./share.css";

// material UI
import { Avatar, Box, Modal, Typography } from "@mui/material";

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
            </div>
            <div className="modal-buttons"></div>
            <div className="share-img-wrapper"></div>
          </form>
        </Box>
      </Modal>
    </>
  );
};
