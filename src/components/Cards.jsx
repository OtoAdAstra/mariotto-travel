import { Link } from "react-router-dom";
import "./components-css/Cards.css";
import { IoIosCall } from "react-icons/io";

export default function Cards({ img, place, price, days }) {
  return (
    <div className="card-div">
      <div className="img-div">
        <img src={img} className="card-image" />
      </div>
      <h3 className="card-place">{place}</h3>
      <h4 className="card-days">({days} დღე)</h4>
      <h5 className="card-price">{price} ₾</h5>
      <Link to="/contact">
        <IoIosCall className="call" />
      </Link>
    </div>
  );
}
