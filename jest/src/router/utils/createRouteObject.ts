import { OptionsRoutesLayoutsType } from 'layouts/optionsRoutesLayoutsTypes';
import { OptionsRoutesPagesType } from 'pages/optionsRoutesPagesTypes';
import { RouteObject } from 'react-router-dom';
import { OmitChildrenRouteObject } from 'router/RouterTypes';
import { OptionsRoutesSwitchesType } from 'switches/optionsRoutesSwitchesTypes';
import { nestingRouteObject } from './nestingRouteObject';

type CreateRouteObjectType = {
  root: OmitChildrenRouteObject;
  pages: OptionsRoutesPagesType;
  layouts?: OptionsRoutesLayoutsType;
  switches?: OptionsRoutesSwitchesType;
};

export const createRouteObject = ({ root, pages, layouts, switches }: CreateRouteObjectType): RouteObject[] => {
  return nestingRouteObject({ pages, parent: root, layouts, switches });
};
