import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Burgernav from "../components/Burgernav";

describe("Burgernav Component", () => {
  test("renders all links", () => {
    render(
      <BrowserRouter>
        <Burgernav setOpen={vi.fn()} />
      </BrowserRouter>
    );

    expect(screen.getByText("ტურები")).toBeInTheDocument();
    expect(screen.getByText("ჩვენს შესახებ")).toBeInTheDocument();
    expect(screen.getByText("კონტაქტი")).toBeInTheDocument();
  });

  test("calls setOpen(false) when a link is clicked", async () => {
    const setOpenMock = vi.fn();
    render(
      <BrowserRouter>
        <Burgernav setOpen={setOpenMock} />
      </BrowserRouter>
    );

    const toursLink = screen.getByText("ტურები");
    await userEvent.click(toursLink);

    expect(setOpenMock).toHaveBeenCalledTimes(1);
    expect(setOpenMock).toHaveBeenCalledWith(false);
  });

  test("links have correct navigation paths", () => {
    render(
      <BrowserRouter>
        <Burgernav setOpen={vi.fn()} />
      </BrowserRouter>
    );

    const toursLink = screen.getByText("ტურები");
    const aboutLink = screen.getByText("ჩვენს შესახებ");
    const contactLink = screen.getByText("კონტაქტი");

    expect(toursLink.closest("a")).toHaveAttribute("href", "/tours");
    expect(aboutLink.closest("a")).toHaveAttribute("href", "/about-us");
    expect(contactLink.closest("a")).toHaveAttribute("href", "/contact");
  });
});
