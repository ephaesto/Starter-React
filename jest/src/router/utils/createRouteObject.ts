import { RouteObject } from "react-router-dom"
import { OptionsRoutesLayoutsType } from "../../layouts/optionsRoutesLayouts"
import { OptionsRoutesPagesType } from "../../pages/optionsRoutesPages"
import { OptionsRoutesSwitchesType } from "../../switches/optionsRoutesSwitches"
import { OmitChildrenRouteObject } from "../RouterTypes"
import { nestingRouteObject } from "./nestingRouteObject"


type CreateRouteObjectType = {
    root: OmitChildrenRouteObject;
    pages: OptionsRoutesPagesType;
    layouts?: OptionsRoutesLayoutsType;
    switches?: OptionsRoutesSwitchesType;
}

export const createRouteObject = ({ root, pages, layouts, switches  }: CreateRouteObjectType): RouteObject[]  => {
    return nestingRouteObject({ pages, parent:root, layouts, switches });;
    
};
