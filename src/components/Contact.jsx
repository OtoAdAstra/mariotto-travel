import "./components-css/Contact.css";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaViber } from "react-icons/fa";

export default function Contact() {
  const styles = {
    padding: "100px 10%",
    margin: "0 0 20px 0",
    color: "grey",
  };

  return (
    <div style={styles}>
      <div className="mobile contact">
        <IoIosCall className="black" />
      </div>
      <div className="whatsapp contact">
        <FaWhatsapp className="black" />
      </div>
      <div className="viber contact">
        <FaViber className="black" />
      </div>
      <div className="socials"></div>
    </div>
  );
}
