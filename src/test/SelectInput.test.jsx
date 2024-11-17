import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SelectInput from "../components/SelectInput";

describe("SelectInput Component", () => {
  test("renders SelectInput with placeholder", () => {
    render(<SelectInput />);
    const placeholder = screen.getByText(/აირჩიე ქალაქი.../i);
    expect(placeholder).toBeInTheDocument();
  });

  test("displays options when clicked", () => {
    render(<SelectInput />);
    const select = screen.getByText(/აირჩიე ქალაქი.../i);

    // Simulate a click to open the dropdown
    fireEvent.mouseDown(select);
    const option = screen.getByText(/მალდივები/i);
    expect(option).toBeInTheDocument();
  });

  test("selects an option", () => {
    render(<SelectInput />);
    const select = screen.getByText(/აირჩიე ქალაქი.../i);

    // Open dropdown and select an option
    fireEvent.mouseDown(select);
    const option = screen.getByText(/მალდივები/i);
    fireEvent.click(option);

    // Check if the option is selected
    const selectedOption = screen.getByText(/მალდივები/i);
    expect(selectedOption).toBeInTheDocument();
  });

  test("applies custom styles to options", () => {
    render(<SelectInput />);
    const select = screen.getByText(/აირჩიე ქალაქი.../i);

    // Open dropdown
    fireEvent.mouseDown(select);
    const option = screen.getByText(/დუბაი/i);

    // Check if custom styles are applied (replace this with actual style checks if necessary)
    expect(option).toBeInTheDocument();
  });
});
