import { RouteObject } from 'react-router-dom';
import { groupByKey } from './groupByKey';
import { splitPagesByTheme } from './splitPagesByTheme';
import { addOtherPages } from './addOtherPages';
import { copyPages } from './copyPages';
import { LayoutsObjectType, PagesObjectType, RootObjectType, SwitchesObjectType } from './types/SwitchRouteObjectType';

type NestingRouteObjectType = {
  parent: RootObjectType;
  pages: Omit<PagesObjectType, 'wrapper' | 'idRoute'>;
  layouts?: LayoutsObjectType;
  switches?: SwitchesObjectType;
};

export const nestingRouteObject = ({ parent, pages, layouts, switches }: NestingRouteObjectType): RouteObject[] => {
  const routes: RouteObject = {
    ...(parent && parent),
  };

  if (!pages.length) {
    return [routes];
  }

  const { pagesList, layoutsList, switchesList} = splitPagesByTheme(copyPages(pages));

  if (switchesList.length && switches) {
    const switchesGroupByKey = groupByKey(switchesList, 'switch');
    Object.entries(switchesGroupByKey).forEach(([keySwitch, pagesSwitch]) => {
      if (keySwitch in switches) {
        const parentSwitch = switches[keySwitch as keyof SwitchesObjectType];
        if (!routes.children) {
          routes.children = [];
        }
        const [currentSwitch] = nestingRouteObject({ parent: parentSwitch, pages: pagesSwitch, layouts, switches });
        if (currentSwitch) {
          routes.children.push(currentSwitch);
        }
      }else{
        console.error(`"${keySwitch}" isn't in switches` )
      }
    });
  }

  if (layoutsList.length && layouts) {
    const layoutsGroupByKey = groupByKey(layoutsList, 'layout');
    Object.entries(layoutsGroupByKey).forEach(([keyLayout, pagesLayout]) => {
      if (keyLayout in layouts) {
        const parentLayout = layouts[keyLayout as keyof LayoutsObjectType];

        if (!routes.children) {
          routes.children = [];
        }
        const [currentLayout] = nestingRouteObject({ parent: parentLayout, pages: pagesLayout, layouts, switches });

        if (currentLayout) {
          routes.children.push(currentLayout);
        }
      } else {
        console.error(`"${keyLayout}" isn't in layouts` )
      }
    });
  }

  if (pagesList.length) {
    pagesList.forEach(pageInList => {
      if (!routes.children) {
        routes.children = [];
      }
      routes.children.push({ ...pageInList });
    });
  }

  return [routes];
};
