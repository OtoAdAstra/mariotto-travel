import "./components-css/Navbar.css";
import language from "../language.json";
import { HiChevronDown } from "react-icons/hi";
import { useState, useEffect } from "react";
import Flag from "react-flagkit";
import Hamburger from "hamburger-react";
import Burgernav from "./Burgernav";
import LangChanger from "../LangChanger";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);
  //Language settings
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const { lang, langToEng, langToGe } = LangChanger();

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
                otto
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
                  borderBottom:
                    location.pathname === "/tours"
                      ? "2px solid var(--black)"
                      : "none",
                }}>
                <Link to="/" href="">
                  {language[lang].nav.tours}
                </Link>
              </li>
              <li
                className={` ${
                  location.pathname === "/about-us" ? "no-hover" : "nav-a-hover"
                }`}
                style={{
                  borderBottom:
                    location.pathname === "/about-us"
                      ? "2px solid var(--black)"
                      : "none",
                }}>
                <Link to="/about-us" href="">
                  {language[lang].nav.about}
                </Link>
              </li>
              <li
                className={` ${
                  location.pathname === "/contact" ? "no-hover" : "nav-a-hover"
                }`}
                style={{
                  borderBottom:
                    location.pathname === "/contact"
                      ? "2px solid var(--black)"
                      : "none",
                }}>
                <Link to="/" href="">
                  {language[lang].nav.contact}
                </Link>
              </li>

              <li
                className="lang-changer-div"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}>
                <span className="lang-changer">
                  {language[lang].nav.language}
                  <HiChevronDown />
                </span>
                {isDropdownVisible && (
                  <div className="dropdown-menu">
                    <div className="flag">
                      <Flag country="US" className="flag-icon" />
                      <span onClick={langToEng} id="lang-one">
                        {language[lang].nav.eng}
                      </span>
                    </div>
                    <div className="flag">
                      <Flag country="GE" className="flag-icon" />
                      <span onClick={langToGe} id="lang-two">
                        {language[lang].nav.ge}
                      </span>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
      {isOpen && <Burgernav setOpen={setOpen} />}
    </>
  );
}
