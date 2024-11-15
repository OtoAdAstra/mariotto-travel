import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div
        style={{
          flex: "1",
          minHeight: "95vh",
        }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<Aboutus />} />
        </Routes>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <span
          style={{
            fontWeight: "600",
            fontSize: "16px",
            color: "rgba(0, 0, 0, 0.416)",
          }}>
          copyright © 2024 all rights reserved
        </span>
      </div>
    </Router>
  );
}

export default App;
