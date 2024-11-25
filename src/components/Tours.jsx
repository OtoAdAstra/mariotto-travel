import "../index.css";
import Cards from "./Cards";
import Loading from "./Loading";
import { useState, useEffect } from "react";

// Dynamically import images using import.meta.glob
const images = import.meta.glob("../assets/*", { eager: true });

// Function to load tours data asynchronously
export async function fetchToursData() {
  // Export the function
  try {
    const data = await import("../tours.json");

    // Map data to include resolved image paths
    return data.default.map((tour) => ({
      ...tour,
      img:
        images[`../assets/${tour.img}`]?.default ||
        images[`../assets/${tour.img}`],
    }));
  } catch (error) {
    console.error("Failed to load tours data:", error);
    throw error;
  }
}

export default function Tours() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTours = async () => {
      try {
        const updatedTours = await fetchToursData();
        setTours(updatedTours);
      } catch (error) {
        console.error("Error loading tours:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTours();
  }, []);

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
