import "./components-css/Burgernav.css";
import language from "../language.json";

// eslint-disable-next-line react/prop-types
export default function Burgernav({ lang, langToEng, langToGe }) {
  return (
    <nav className="burger-nav">
      <ul>
        <li className="burger-link">{language[lang].nav.tours}</li>
        <li className="burger-link">{language[lang].nav.about}</li>
        <li className="burger-link">{language[lang].nav.contact}</li>
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
