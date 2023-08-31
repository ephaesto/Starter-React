import { RouteObject } from 'react-router-dom';
import { groupByKey } from './groupByKey';
import { splitPagesByTheme } from './splitPagesByTheme';
import { addOtherPages } from './addOtherPages';
import { copiePages } from './copiePages';
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

  const { pagesList, layoutsList, switchesList, otherPages } = splitPagesByTheme(copiePages(pages));

  if (switchesList.length && switches) {
    const switchesGroupByKey = groupByKey(switchesList, 'switch');
    const switchesGroupByKeyWithOtherPages = addOtherPages(switchesGroupByKey, otherPages, 'switch');
    Object.entries(switchesGroupByKeyWithOtherPages).forEach(([keySwitch, pagesSwitch]) => {
      if (keySwitch in switches) {
        const parentSwitch = switches[keySwitch as keyof SwitchesObjectType];
        if (!routes.children) {
          routes.children = [];
        }
        const [currentSwitch] = nestingRouteObject({ parent: parentSwitch, pages: pagesSwitch, layouts, switches });
        if (currentSwitch) {
          routes.children.push(currentSwitch);
        }
      }
    });
  }

  if (layoutsList.length && layouts) {
    const layoutsGroupByKey = groupByKey(layoutsList, 'layout');
    const layoutsGroupByKeyWithOtherPages = addOtherPages(layoutsGroupByKey, otherPages, 'layout');
    Object.entries(layoutsGroupByKeyWithOtherPages).forEach(([keyLayout, pagesLayout]) => {
      if (keyLayout in layouts) {
        const parentLayout = layouts[keyLayout as keyof LayoutsObjectType];

        if (!routes.children) {
          routes.children = [];
        }
        const [currentLayout] = nestingRouteObject({ parent: parentLayout, pages: pagesLayout, layouts, switches });

        if (currentLayout) {
          routes.children.push(currentLayout);
        }
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
