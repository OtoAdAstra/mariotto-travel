import { render, screen } from "@testing-library/react";
import Aboutus from "../components/Aboutus";

describe("Aboutus Component", () => {
  test("renders the Aboutus component without crashing", () => {
    render(<Aboutus />);
    const aboutText = screen.getByText(/Mariotto არის ტურისტული კომპანია/i);
    expect(aboutText).toBeInTheDocument();
  });

  test("applies the correct inline styles", () => {
    render(<Aboutus />);
    const aboutDiv = screen.getByText(
      /Mariotto არის ტურისტული კომპანია/i
    ).parentElement;
    expect(aboutDiv).toHaveStyle({
      padding: "100px 10%",
      margin: "0 0 20px 0",
      color: "grey",
      textAlign: "center",
    });
  });

  test("renders a span with the correct text content", () => {
    render(<Aboutus />);
    const span = screen.getByText(/Mariotto არის ტურისტული კომპანია/i);
    expect(span.tagName).toBe("SPAN");
    expect(span).toHaveTextContent(/ტურისტული კომპანია/i);
  });
});
