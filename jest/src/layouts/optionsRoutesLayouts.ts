import { OmitChildrenRouteObject } from "../router/RouterTypes"
import { LayoutAuthRoutes } from "./layout-auth/LayoutAuthRoutes"
import { LayoutDefaultRoutes } from "./layout-default/LayoutDefaultRoutes"

export type OptionsRoutesLayoutsType = {
  default: OmitChildrenRouteObject,
  auth: OmitChildrenRouteObject,
}

export const optionsRoutesLayouts : OptionsRoutesLayoutsType = {
    default: LayoutDefaultRoutes,
    auth: LayoutAuthRoutes,
}
