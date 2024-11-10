import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <span
        style={{
          position: "absolute",
          bottom: "30px",
          fontWeight: "600",
          fontSize: "16px",
          left: "50%",
          transform: "translateX(-50%)",
        }}>
        copyright © 2024 all rights reserved
      </span>
    </>
  );
}

export default App;
