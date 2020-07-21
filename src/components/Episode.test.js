import React from "react";
import { render, screen } from "@testing-library/react"

import Episodes from "./Episodes"
import { showData } from "../utils/ShowData"
// console.log('showData', showData);

test("Episodes renders", () => {
  render(<Episodes episodes={showData.data._embedded.episodes}/>)
  // screen.debug()
})
test("data renders on page", async () => {
  render(<Episodes episodes={showData.data._embedded.episodes}/>)
  
  expect( await screen.findByText(/season 1, episode 1/i)).toBeInTheDocument()
  expect( await screen.findByText(/Chapter One: The Vanishing of Will Byers/i)).toBeInTheDocument()
  expect( await screen.findByText(
    /A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest./i
    )).toBeInTheDocument()
  expect( await screen.findAllByText(/60 minutes/i)).toHaveLength(showData.data._embedded.episodes.length)
  expect( await screen.findByText(/season 1, episode 3/i)).toBeInTheDocument()
  expect( await screen.findByText(/Chapter Three: Holly, Jolly/i)).toBeInTheDocument()
  expect( await screen.findByText(
    /While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab./i
    )).toBeInTheDocument()

})