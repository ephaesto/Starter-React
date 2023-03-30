import { OptionsRoutesLayoutsType } from 'layouts/optionsRoutesLayoutsTypes';
import { OptionsRoutesPagesType } from 'pages/optionsRoutesPagesTypes';
import { RouteObject } from 'react-router-dom';
import { OmitChildrenRouteObject } from 'router/RouterTypes';
import { OptionsRoutesSwitchesType } from 'switches/optionsRoutesSwitchesTypes';
import { ListWrapperType } from 'wrapper/listWrapperTypes';
import { addWrappers } from './addWrappers';
import { nestingRouteObject } from './nestingRouteObject';

type CreateRouteObjectType = {
  root: OmitChildrenRouteObject;
  pages: OptionsRoutesPagesType;
  layouts?: OptionsRoutesLayoutsType;
  switches?: OptionsRoutesSwitchesType;
  wrapper?: ListWrapperType;
};

export const createRouteObject = ({
  root,
  pages,
  layouts,
  switches,
  wrapper,
}: CreateRouteObjectType): RouteObject[] => {
  const pagesWithwrapper = addWrappers(pages, wrapper);
  const test = nestingRouteObject({ parent: root, pages: pagesWithwrapper, layouts, switches });
  return test;
};
