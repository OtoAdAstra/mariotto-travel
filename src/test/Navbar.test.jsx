import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";

describe("Navbar Component", () => {
  // Mock window.innerWidth
  const resizeWindow = (width) => {
    window.innerWidth = width;
    window.dispatchEvent(new Event("resize"));
  };

  it("renders the desktop navigation links", () => {
    resizeWindow(1024); // Simulate desktop screen
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // expect(screen.getByText(/ტურები/i)).toBeInTheDocument();
    expect(screen.getByText(/ჩვენს შესახებ/i)).toBeInTheDocument();
    expect(screen.getByText(/კონტაქტი/i)).toBeInTheDocument();
    expect(screen.queryByTestId("hamburger")).not.toBeInTheDocument();
  });
});

it("applies active styles to the correct link", () => {
  vi.mock("react-router-dom", async () => ({
    ...(await vi.importActual("react-router-dom")),
    useLocation: () => ({
      pathname: "/tours",
    }),
  }));

  const { container } = render(
    <Router>
      <Navbar />
    </Router>
  );

  const toursLink = screen
    .getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === "a" && content.includes("ტურები")
      );
    })
    .closest("li");

  expect(toursLink).toHaveStyle("borderBottom: 2px solid var(--black)");
});
