import { render } from "@testing-library/react";
import Tours from "../components/Tours";

test("renders the Loading component initially", () => {
  render(<Tours />);
  expect(document.querySelector(".loader-position")).toBeInTheDocument();
});
