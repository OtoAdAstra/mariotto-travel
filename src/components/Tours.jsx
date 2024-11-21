import "../index.css";
import Cards from "./Cards";
import Loading from "./Loading";
import { useState, useEffect } from "react";

// Dynamically import images using import.meta.glob
const images = import.meta.glob("../assets/*", { eager: true });

export default function Tours() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  // Function to load tours data asynchronously
  const fetchToursData = async () => {
    try {
      // Dynamically import the tours.json
      const data = await import("../tours.json");

      // Map data to include resolved image paths
      const updatedTours = data.default.map((tour) => ({
        ...tour,
        img:
          images[`../assets/${tour.img}`]?.default ||
          images[`../assets/${tour.img}`],
      }));

      setTours(updatedTours);
    } catch (error) {
      console.error("Failed to load tours data:", error);
    } finally {
      setIsLoading(false); // Stop loading once data is fetched
    }
  };

  // Use useEffect to fetch data on component mount
  useEffect(() => {
    fetchToursData();
  }, []);

  // If loading, display the Loading component
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex w-full mt-[100px] justify-center">
      <div className="flex justify-center flex-wrap gap-14 max-w-[1600px]">
        {tours.map((tour, index) => (
          <Cards
            key={index}
            img={tour.img}
            place={tour.place}
            price={tour.price}
            days={tour.days}
          />
        ))}
      </div>
    </div>
  );
}
