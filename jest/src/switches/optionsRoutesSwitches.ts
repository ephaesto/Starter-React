import { OmitChildrenRouteObject } from "../router/RouterTypes"
import { SwitchAuthRoutes } from "./switch-auth/SwitchAuthRoutes"
import { SwitchLinkedRoutes } from "./switch-linked/SwitchLinkedRoutes"

export type OptionsRoutesSwitchesType = {
    auth: OmitChildrenRouteObject,
    linked: OmitChildrenRouteObject,
}

export const optionsRoutesSwitches : OptionsRoutesSwitchesType = {
    auth: SwitchAuthRoutes,
    linked: SwitchLinkedRoutes,
}
