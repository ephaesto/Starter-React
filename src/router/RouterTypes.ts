import { OptionsRoutesLayoutsType } from 'app/config/layouts/optionsRoutesLayoutsTypes';
import { OptionsRoutesSwitchesType } from 'app/config/switches/optionsRoutesSwitchesTypes';
import { ListWrapperType } from 'app/config/wrapper/listWrapperTypes';
import { RouteObject } from 'react-router-dom';


export type OmitChildrenRouteObject = Omit<RouteObject, 'children'>;

export type CustomRouteObject = RouteObject & {
  layout?: (keyof OptionsRoutesLayoutsType)[] | keyof OptionsRoutesLayoutsType;
  switch?: (keyof OptionsRoutesSwitchesType)[] | keyof OptionsRoutesSwitchesType;
  wrappers?: (keyof ListWrapperType)[] | keyof ListWrapperType;
  idRoute: string;
};
