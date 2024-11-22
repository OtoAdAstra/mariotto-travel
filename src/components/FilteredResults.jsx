import { useLocation } from "react-router-dom";
import data from "../tours.json";
import Cards from "./Cards";
import "../index.css";

// Dynamically import images using import.meta.glob
const images = import.meta.glob("../assets/*", { eager: true });

export default function FilteredResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Get query params
  const minPrice = queryParams.get("minPrice");
  const maxPrice = queryParams.get("maxPrice");
  const city = queryParams.get("city");

  // Filter the data
  const filteredData = data.filter((item) => {
    const price = parseInt(item.price, 10);

    // Match price range and selected city
    const matchesPrice =
      (!minPrice || price >= parseInt(minPrice, 10)) &&
      (!maxPrice || price <= parseInt(maxPrice, 10));

    const matchesCity = city
      ? item.value.toLowerCase() === city.toLowerCase()
      : true;

    return matchesPrice && matchesCity;
  });

  // Map filtered data to include resolved image paths
  const updatedFilteredData = filteredData.map((item) => ({
    ...item,
    img:
      images[`../assets/${item.img}`]?.default ||
      images[`../assets/${item.img}`],
  }));

  return (
    <div className="flex w-full mt-[100px] justify-center">
      <div className="flex justify-center flex-wrap gap-14 max-w-[1600px]">
        {updatedFilteredData.length > 0 ? (
          updatedFilteredData.map((item, index) => (
            <Cards
              key={index}
              img={item.img}
              place={item.place}
              price={item.price}
              days={item.days}
            />
          ))
        ) : (
          <p className="text-3xl font-extrabold">შედეგი არ მოიძებნა :(</p>
        )}
      </div>
    </div>
  );
}
