import "./components-css/Search.css";
import SelectInput from "./SelectInput";
import { useState } from "react";
import { IoSearchCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./components-css/Loader.css";

export default function Search() {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [selectedCity, setSelectedCity] = useState(""); // Correct placement

  const navigate = useNavigate();

  const handleSearch = () => {
    // Validate inputs
    if (!minValue && !maxValue && !selectedCity) {
      alert("აირჩიეთ ერთი პარამეტრი მაინც");
      return;
    }
    // Navigate to the new page and pass filter parameters as query params
    const queryParams = new URLSearchParams({
      minPrice: minValue.replace(" ₾", ""),
      maxPrice: maxValue.replace(" ₾", ""),
      city: selectedCity,
    }).toString();

    navigate(`/filtered-results?${queryParams}`);
  };

  const handleChange = (e, setFunction) => {
    // Remove any non-digit characters
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setFunction(numericValue ? `${numericValue} ₾` : ""); // Append the currency symbol
  };

  return (
    <>
      <div className="search-div">
        <div className="search-bar-div">
          <img id="search-img" alt="" />
          <div className="search-bar-div-two">
            <SelectInput
              onChange={(option) => setSelectedCity(option ? option.value : "")}
            />

            <div className="search-price-div">
              <input
                type="text"
                onChange={(e) => handleChange(e, setMinValue)}
                value={minValue}
                placeholder="მინ. ₾"
                className="numbers"></input>
              <span id="tire">-</span>
              <input
                type="text"
                onChange={(e) => handleChange(e, setMaxValue)}
                value={maxValue}
                placeholder="მაქს. ₾"
                className="numbers"></input>
            </div>
            <IoSearchCircle className="search-button" onClick={handleSearch} />
          </div>
        </div>
      </div>
    </>
  );
}
