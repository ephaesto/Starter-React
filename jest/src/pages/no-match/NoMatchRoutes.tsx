import { OptionsRoutesPagesType } from "../optionsRoutesPages"
import NoMatch from "./NoMatch"

export const NoMatchRoutes : OptionsRoutesPagesType =[
  {
    path: ":noMatch*",
    element: <NoMatch />,
    layout:'default',
    switch: ["auth","linked"],
  },
  {
    path: ":noMatch*",
    element: <NoMatch />,
    layout:'auth',
    switch: ["auth"],
  },
]
