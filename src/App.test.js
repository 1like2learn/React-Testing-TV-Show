import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"
import App from "./App"

import { fetchShow } from "./api/fetchShow"
import { showData } from "./utils/ShowData"

jest.mock("./api/fetchShow");

test("Data is coming from the api and rendered", async () => {
  fetchShow.mockResolvedValueOnce(showData);

  render(<App />)
  
  expect(await screen.findAllByText(/stranger things/i)).toHaveLength(2)
  expect( await screen.findByText(/A love letter to the '80s classics that captivated a generation,/i)).toBeInTheDocument()
  expect( await screen.findByText(
    /is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl./i
    )).toBeInTheDocument()
  })
  
  test("Dropdown selects seasons", async () => {
    fetchShow.mockResolvedValueOnce(showData);
    
    render(<App />)
    const dropdown = await screen.findByText(/select a season/i)
    expect(dropdown).toBeInTheDocument()
    
    fireEvent.mouseOver(dropdown)
    fireEvent.mouseDown(dropdown)
    fireEvent.mouseUp(dropdown)

    const season = await screen.findByText(/season 1/i)
    expect(season).toBeInTheDocument()

    fireEvent.mouseOver(season)
    fireEvent.mouseDown(season)
    fireEvent.mouseUp(season)
    expect( await screen.findByText(/Season 1, Episode 3/i))
})