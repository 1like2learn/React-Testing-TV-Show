import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import App from "./App"

import { fetchShow } from "./api/fetchShow"
import { showData } from "./utils/ShowData"

jest.mock("./api/fetchShow");



test("App renders", () => {
  fetchShow.mockResolvedValueOnce(showData);

  render(<App />);
})
test("Data is coming from the api and rendered", async () => {
  fetchShow.mockResolvedValueOnce(showData);

  render(<App />);

  await expect(screen.findByText(/stranger things/i)).toBeInTheDocument
})