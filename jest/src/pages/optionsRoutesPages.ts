import { HomeRoutes } from "./home/HomeRoutes"
import { CustomeRouteObject } from "../router/RouterTypes"
import { LoginRoutes } from "./login/LoginRoutes"
import { OnbordingRoutes } from "./onbording/OnbordingRoutes"
import { NoMatchRoutes } from "./no-match/NoMatchRoutes"

export type OptionsRoutesPagesType = CustomeRouteObject[]

export const optionsRoutesPages : OptionsRoutesPagesType = [ ...HomeRoutes, ...LoginRoutes, ...OnbordingRoutes,...NoMatchRoutes]