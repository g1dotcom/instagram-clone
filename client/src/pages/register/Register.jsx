import React, { useState } from "react";

// Material UI
import { Button, TextField } from "@mui/material";

// CSS
import "./register.css";

// React Router
import { Link } from "react-router-dom";

export const Register = () => {
  // User State
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [bio, setBio] = useState("");

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordAgain) {
      alert("Passwords do not match");
    } else {
      const user = {
        fullName,
        username,
        email,
        password,

        bio,
      };
      if (profilePicture) {
        const data = new FormData();
        const filename = Date.now() + profilePicture.name;
        data.append("name", filename);
        data.append("file", profilePicture);
        user.profilePicture = filename;
        try {
        } catch (err) {}
      }
    }
  };

  return (
    <div className="auth-page">
      <h1>Welcome to Social Media App</h1>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-input">
          <TextField
            required
            label="Full Name"
            variant="outlined"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-input">
          <TextField
            required
            type="text"
            label="Username"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-input">
          <TextField
            required
            type="email"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-input">
          <TextField
            required
            type="password"
            label="Password"
            variant="outlined"
            onchange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-input">
          <TextField
            required
            type="password"
            label="Password Again"
            variant="outlined"
            onChange={(e) => setPasswordAgain(e.target.value)}
          />
        </div>
        <div className="form-input">
          <TextField required type="file" variant="outlined" />
        </div>
        <div className="form-input">
          <TextField
            required
            type="text"
            label="Biography"
            variant="outlined"
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <Link to="/login" href="/" className="auth-link">
          Back to Login
        </Link>
        <Button type="submit" variant="contained" color="success">
          Register
        </Button>
      </form>
    </div>
  );
};
