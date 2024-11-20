import "../index.css";
import Cards from "./Cards";
import Maldives from "../assets/cards-maldives.jpg";

export default function Tours() {
  return (
    <div className="flex w-full mt-[100px] justify-center">
      <div className="flex justify-center flex-wrap">
        <Cards
          img={Maldives}
          place={"მალდივები"}
          days={"7"}
          price={"2700-3000₾"}
        />
        <Cards
          img={Maldives}
          place={"მალდივები"}
          days={"7"}
          price={"2700-3000₾"}
        />
        <Cards
          img={Maldives}
          place={"მალდივები"}
          days={"7"}
          price={"2700-3000₾"}
        />
        <Cards
          img={Maldives}
          place={"მალდივები"}
          days={"7"}
          price={"2700-3000₾"}
        />
      </div>
    </div>
  );
}
