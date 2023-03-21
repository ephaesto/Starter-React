import { OptionsRoutesPagesType } from "../optionsRoutesPages"
import HomePage from "./HomePage"

export const HomeRoutes : OptionsRoutesPagesType =[
  {
    path: "teste",
    element: <HomePage />,
    layout:'auth',
    switch: ["auth","linked"],
  },
  {
    index:true,
    element: <HomePage />,
    layout:'default',
    switch: ["auth","linked"],
  },
  {
    path: "valide",
    element: <HomePage />,
    layout:'default',
    switch: ["auth","linked"],
  },
]
