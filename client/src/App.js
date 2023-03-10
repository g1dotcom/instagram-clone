import { useContext, useState } from "react";

// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//components and pages
import { Header } from "./components/header/Header";
import { Share } from "./components/share/Share";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/login/Login";
import { Messenger } from "./pages/Messenger/Messenger";
import { Profile } from "./pages/Profile/Profile";
import { Register } from "./pages/register/Register";

// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// context
import { AuthContext } from "./context/AuthContext";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <Share open={open} handleClose={handleClose} />
      <ToastContainer />
      <Router>
        {user && <Header handleOpen={handleOpen} />}
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route
            path="/profile/:username"
            element={user ? <Profile /> : <Login />}
          />
          <Route path="/messenger" element={user ? <Messenger /> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
