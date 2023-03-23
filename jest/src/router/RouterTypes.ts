import { OptionsRoutesLayoutsType } from 'layouts/optionsRoutesLayoutsTypes';
import { RouteObject } from 'react-router-dom';
import { OptionsRoutesSwitchesType } from 'switches/optionsRoutesSwitchesTypes';

export type OmitChildrenRouteObject = Omit<RouteObject, 'children'>;

export type CustomeRouteObject = RouteObject & {
  layout?: keyof OptionsRoutesLayoutsType;
  switch?: (keyof OptionsRoutesSwitchesType)[];
};
