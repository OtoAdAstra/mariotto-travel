import "./components-css/Search.css";
import SelectInput from "./SelectInput";
import { useState } from "react";
import { IoSearchCircle } from "react-icons/io5";
import "./components-css/Loader.css";

export default function Search() {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");

  const handleChange = (e, setFunction) => {
    // Remove any non-digit characters
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setFunction(numericValue ? `${numericValue} ₾` : ""); // Append the currency symbol
  };

  return (
    <>
      <div className="search-div">
        <div className="search-bar-div">
          <img id="search-img" />
          <div className="search-bar-div-two">
            <SelectInput />
            <div className="search-price-div">
              <input
                type="text"
                onChange={(e) => handleChange(e, setMinValue)}
                value={minValue}
                placeholder="Min. ₾"
                className="numbers"></input>
              <span id="tire">-</span>
              <input
                type="text"
                onChange={(e) => handleChange(e, setMaxValue)}
                value={maxValue}
                placeholder="Max. ₾"
                className="numbers"></input>
            </div>
            <IoSearchCircle className="search-button" />
          </div>
        </div>
      </div>
    </>
  );
}
