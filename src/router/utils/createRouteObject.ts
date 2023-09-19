import { RouteObject } from 'react-router-dom';
import { addWrappers } from './addWrappers';
import { nestingRouteObject } from './nestingRouteObject';
import {
  RootObjectType,
  PagesObjectType,
  LayoutsObjectType,
  SwitchesObjectType,
  WrappersObjectType,
} from './types/SwitchRouteObjectType';

type CreateRouteObjectType = {
  root: RootObjectType;
  pages: PagesObjectType;
  layouts?: LayoutsObjectType;
  switches?: SwitchesObjectType;
  wrappers?: WrappersObjectType;
};

export const createRouteObject = ({
  root,
  pages,
  layouts,
  switches,
  wrappers,
}: CreateRouteObjectType): RouteObject[] => {
  const pagesWithWrapper = addWrappers(pages, wrappers);
  const test = nestingRouteObject({ parent: root, pages: pagesWithWrapper, layouts, switches });
  return test;
};
