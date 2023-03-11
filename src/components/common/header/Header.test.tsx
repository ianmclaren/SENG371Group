import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Header", () => {
  it("should render title", () => {
    render(<Header term="All" setTerm={() => {}} />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByText("DimSpace")).toBeInTheDocument();
  });
});
