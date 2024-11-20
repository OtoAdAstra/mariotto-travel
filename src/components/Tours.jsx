import "../index.css";
import Cards from "./Cards";
import toursData from "../tours.json";

// Adjusted path to match your directory structure
const images = import.meta.glob("../assets/*", { eager: true });

export default function Tours() {
  return (
    <div className="flex w-full mt-[100px] justify-center">
      <div className="flex justify-center flex-wrap gap-10 max-w-[1600px]">
        {toursData.map((tour, index) => {
          // Use the correct JSON key and path
          const imagePath =
            images[`../assets/${tour.img}`]?.default ||
            images[`../assets/${tour.img}`];
          return (
            <Cards
              img={imagePath}
              place={tour.place}
              price={tour.price}
              days={tour.days}
            />
          );
        })}
      </div>
    </div>
  );
}
