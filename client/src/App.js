import { useState } from "react";

//components and pages
import { Header } from "./components/header/Header";
import { Share } from "./components/share/Share";
import { Home } from "./pages/Home";

//material-ui

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <Header handleOpen={handleOpen} />
      <Share open={open} handleClose={handleClose} />
      <Home />
    </div>
  );
}

export default App;
