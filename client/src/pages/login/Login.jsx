import React from "react";

// Material UI
import { Button, TextField } from "@mui/material";

// CSS
import "./login.css";

export const Login = () => {
  return (
    <div className="auth-page">
      <h1>Login</h1>
      <form className="form">
        <h2>Register</h2>

        <div className="form-input">
          <TextField required type="email" label="Email" variant="outlined" />
        </div>
        <div className="form-input">
          <TextField
            required
            type="password"
            label="Password"
            variant="outlined"
          />
        </div>

        <a href="/" className="auth-link">
          Go to Register
        </a>
        <Button type="submit" variant="contained" color="success">
          Login
        </Button>
      </form>
    </div>
  );
};
