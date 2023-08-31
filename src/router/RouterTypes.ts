import { OptionsRoutesLayoutsType } from 'layouts/optionsRoutesLayoutsTypes';
import { RouteObject } from 'react-router-dom';
import { OptionsRoutesSwitchesType } from 'switches/optionsRoutesSwitchesTypes';
import { ListWrapperType } from 'wrapper/listWrapperTypes';

export type OmitChildrenRouteObject = Omit<RouteObject, 'children'>;

export type CustomeRouteObject = RouteObject & {
  layout?: (keyof OptionsRoutesLayoutsType)[] | keyof OptionsRoutesLayoutsType;
  switch?: (keyof OptionsRoutesSwitchesType)[] | keyof OptionsRoutesSwitchesType;
  wrappers?: (keyof ListWrapperType)[] | keyof ListWrapperType;
  idRoute: string;
};
