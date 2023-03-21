import { OptionsRoutesPagesType } from "../optionsRoutesPages"
import OnbordingPage from "./OnbordingPage"

export const OnbordingRoutes : OptionsRoutesPagesType = [
  {
    path: "onbording",
    element: <OnbordingPage />,
    switch: ["auth"],
  },
]
