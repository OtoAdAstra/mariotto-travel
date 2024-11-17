import "./components-css/Navbar.css";
import { React, useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import Burgernav from "./Burgernav";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);

  //Mobile settings
  function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowWidth;
  }

  const windowWidth = useWindowWidth();
  const isSmall = windowWidth <= 985;

  return (
    <>
      <nav>
        <div className="first-nav">
          <Link to="/">
            <span className="logo-text">
              Mari
              <span
                style={{
                  color: "red",
                }}>
                otto&nbsp;
              </span>
              travel
            </span>
          </Link>
        </div>
        {isSmall ? (
          <div className={`hamburger-container ${isOpen ? "open" : ""}`}>
            <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
          </div>
        ) : (
          <div className="second-nav">
            <ul>
              <li
                className={` ${
                  location.pathname === "/tours" ? "no-hover" : "nav-a-hover"
                }`}
                style={{
                  paddingBottom: "8px",
                  borderBottom:
                    location.pathname === "/tours"
                      ? "2px solid var(--black)"
                      : "none",
                }}>
                <Link to="/tours" href="">
                  ტურები
                </Link>
              </li>
              <li
                className={` ${
                  location.pathname === "/about-us" ? "no-hover" : "nav-a-hover"
                }`}
                style={{
                  paddingBottom: "8px",
                  borderBottom:
                    location.pathname === "/about-us"
                      ? "2px solid var(--black)"
                      : "none",
                }}>
                <Link to="/about-us" href="">
                  ჩვენს შესახებ
                </Link>
              </li>
              <li
                className={` ${
                  location.pathname === "/contact" ? "no-hover" : "nav-a-hover"
                }`}
                style={{
                  paddingBottom: "8px",
                  borderBottom:
                    location.pathname === "/contact"
                      ? "2px solid var(--black)"
                      : "none",
                }}>
                <Link to="/contact" href="">
                  კონტაქტი
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      {isOpen && <Burgernav setOpen={setOpen} />}
    </>
  );
}
