import React from "react";

// react router
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" style={{ diplay: "flex" }}>
      <img
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="logo"
      />
    </Link>
  );
};
