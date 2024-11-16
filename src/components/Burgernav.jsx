import "./components-css/Burgernav.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Burgernav({ setOpen }) {
  return (
    <nav className="burger-nav">
      <ul>
        <li className="burger-link">
          <Link
            to="/tours"
            className="burger-link"
            onClick={() => setOpen(false)}>
            ტურები
          </Link>
        </li>
        <li className="burger-link">
          <Link
            to="/about-us"
            className="burger-link"
            onClick={() => setOpen(false)}>
            ჩვენს შესახებ
          </Link>
        </li>

        <li className="burger-link">
          <Link
            to="/contact"
            className="burger-link"
            onClick={() => setOpen(false)}>
            კონტაქტი
          </Link>
        </li>
      </ul>
    </nav>
  );
}
