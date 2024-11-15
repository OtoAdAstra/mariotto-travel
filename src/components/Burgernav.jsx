import "./components-css/Burgernav.css";
import language from "../language.json";
import LangChanger from "../LangChanger";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Burgernav({ setOpen }) {
  const { lang, langToEng, langToGe } = LangChanger();
  return (
    <nav className="burger-nav">
      <ul>
        <li className="burger-link">
          <Link to="" className="burger-link" onClick={() => setOpen(false)}>
            {language[lang].nav.tours}
          </Link>
        </li>
        <li className="burger-link">
          <Link
            to="/about-us"
            className="burger-link"
            onClick={() => setOpen(false)}>
            {language[lang].nav.about}
          </Link>
        </li>

        <li className="burger-link">
          <Link to="" className="burger-link" onClick={() => setOpen(false)}>
            {language[lang].nav.contact}
          </Link>
        </li>
        <li className="language-switch">
          <span onClick={langToGe}>GE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          |
          <span onClick={langToEng}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ENG
          </span>
        </li>
      </ul>
    </nav>
  );
}
