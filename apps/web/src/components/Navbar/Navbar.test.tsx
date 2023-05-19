import { render, screen } from "@testing-library/react";

import Navbar from ".";
import "@testing-library/jest-dom";

describe("Navbar", () => {
  it("should", () => {
    render(<Navbar />);

    const heading = screen.getByText("Podcaster");
    expect(heading).toBeInTheDocument();
  });
});
