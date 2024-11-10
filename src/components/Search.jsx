import "./components-css/Search.css";
import searchImg from "../assets/maldives-search.jpg";
import SelectInput from "./SelectInput";
import { useState } from "react";
import { IoSearchCircle } from "react-icons/io5";

export default function Search() {
  //   const [loaded, setLoaded] = useState(false);
  const [value, setValue] = useState("");

  //   const handleImageLoad = () => {
  //     setLoaded(false);
  //   };
  const handleChange = (e) => {
    // Remove any non-digit characters
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setValue(numericValue ? `${numericValue} ₾` : ""); // Append the currency symbol
  };
  return (
    <div className="search-div">
      <div className="search-bar-div">
        <img src={searchImg} id="search-img" />
        <div className="search-bar-div-two">
          <SelectInput />
          <div className="search-price-div">
            <input
              type="text"
              onChange={handleChange}
              value={value}
              placeholder="Min. ₾"
              className="numbers"></input>
            <span id="tire">-</span>
            <input
              type="text"
              onChange={handleChange}
              value={value}
              placeholder="Max. ₾"
              className="numbers"></input>
          </div>
          <IoSearchCircle className="search-button" />
        </div>
      </div>
    </div>
  );
}
