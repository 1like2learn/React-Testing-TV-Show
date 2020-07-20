import React from "react";
import { render, screen } from "@testing-library/react"

import Episodes from "./Episodes"
import { showData } from "../utils/ShowData"
// console.log('showData', showData);

test("Episodes renders", () => {
  render(<Episodes episodes={showData.data._embedded.episodes}/>)
})