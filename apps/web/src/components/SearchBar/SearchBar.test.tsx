import { fireEvent, render } from "@testing-library/react";

import "@testing-library/jest-dom";
import SearchBar from ".";

describe("SearchBar component", () => {
  test("should call onChange handler with the entered value", () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar onChange={handleChange} />
    );
    const inputElement = getByPlaceholderText("Filter podcasts...");

    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(handleChange).toHaveBeenCalledWith("test");
  });
});
