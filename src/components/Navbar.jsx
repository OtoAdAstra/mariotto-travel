import { GiIsland } from "react-icons/gi";
import "./components-css/Navbar.css";
import language from "../language.json";
import { HiChevronDown } from "react-icons/hi";
import { useState, useEffect } from "react";
import Flag from "react-flagkit";
import Hamburger from "hamburger-react";
import Burgernav from "./Burgernav";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  //Language settings
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [lang, setLang] = useState("ge");

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const langToEng = () => {
    setLang("en");
  };

  const langToGe = () => {
    setLang("ge");
  };

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
  const isSmall = windowWidth <= 900;

  return (
    <>
      <nav>
        <div className="first-nav">
          <GiIsland className="logo-icon" />
          <span className="logo-text">Mariotto</span>
        </div>
        {isSmall ? (
          <div className={`hamburger-container ${isOpen ? "open" : ""}`}>
            <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
          </div>
        ) : (
          <div className="second-nav">
            <ul>
              <li className="nav-a-hover">
                <a href="">{language[lang].nav.tours}</a>
              </li>
              <li className="nav-a-hover">
                <a href="">{language[lang].nav.about}</a>
              </li>
              <li className="nav-a-hover">
                <a href="">{language[lang].nav.contact}</a>
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
      {isOpen && (
        <Burgernav lang={lang} langToEng={langToEng} langToGe={langToGe} />
      )}
    </>
  );
}
