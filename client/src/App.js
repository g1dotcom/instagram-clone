import { useState } from "react";

//components and pages
import { Header } from "./components/header/Header";
import { Share } from "./components/share/Share";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/login/Login";
import { Messenger } from "./pages/Messenger/Messenger";
import { Profile } from "./pages/Profile/Profile";
import { Register } from "./pages/register/Register";

//material-ui

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <Header handleOpen={handleOpen} />
      <Share open={open} handleClose={handleClose} />
      {/*   <Home />
      <Profile />
      <Messenger /> */}
      {/* <Register /> */}
      <Login />
    </div>
  );
}

export default App;
