import { RouteObject } from "react-router-dom"
import { OptionsRoutesLayoutsType } from "../layouts/optionsRoutesLayouts"
import { OptionsRoutesSwitchesType } from "../switches/optionsRoutesSwitches"

export type OmitChildrenRouteObject = Omit<RouteObject, "children">

export type CustomeRouteObject = RouteObject & {
  layout?: keyof OptionsRoutesLayoutsType,
  switch?: (keyof OptionsRoutesSwitchesType)[],
}
