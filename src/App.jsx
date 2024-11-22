import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Tours from "./components/Tours";
import FilteredResults from "./components/FilteredResults";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div
        style={{
          flex: "1",
          minHeight: "90vh",
        }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<Aboutus />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/tours" element={<Tours />} />
          <Route path="/filtered-results" element={<FilteredResults />} />
        </Routes>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "7vh",
        }}>
        <span
          style={{
            fontWeight: "600",
            fontSize: "16px",
            color: "rgba(0, 0, 0, 0.256)",
          }}>
          copyright © 2024 all rights reserved
        </span>
      </div>
    </Router>
  );
}

export default App;
