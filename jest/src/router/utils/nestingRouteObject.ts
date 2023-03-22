import { RouteObject } from 'react-router-dom';
import { OptionsRoutesLayoutsType } from 'layouts/optionsRoutesLayoutsTypes';
import { OptionsRoutesPagesType } from 'pages/optionsRoutesPagesTypes';
import { OptionsRoutesSwitchesType } from 'switches/optionsRoutesSwitchesTypes';
import { OmitChildrenRouteObject } from 'router/RouterTypes';
import { groupByKey } from './groupByKey';
import { splitPagesByTheme } from './splitPagesByTheme';
import { addOtherPages } from './addOtherPages';

type NestingRouteObjectType = {
  parent: OmitChildrenRouteObject;
  pages: OptionsRoutesPagesType;
  layouts?: OptionsRoutesLayoutsType;
  switches?: OptionsRoutesSwitchesType;
};

export const nestingRouteObject = ({ parent, pages, layouts, switches }: NestingRouteObjectType): RouteObject[] => {
  const routes: RouteObject = {
    ...(parent && parent),
  };

  if (!pages.length) {
    return [routes];
  }

  const { pagesList, layoutsList, switchesList, otherPages } = splitPagesByTheme([...pages]);

  if (switchesList.length && switches) {
    const switchesGroupByKey = groupByKey(switchesList, 'switch');
    const switchesGroupByKeyWithOtherPages = addOtherPages(switchesGroupByKey, otherPages, 'switch');
    Object.entries(switchesGroupByKeyWithOtherPages).forEach(([keySwitch, pagesSwitch]) => {
      if (keySwitch in switches) {
        const parentSwitch = switches[keySwitch as keyof OptionsRoutesSwitchesType];
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
    Object.entries(layoutsGroupByKey).forEach(([keyLayout, pagesLayout]) => {
      if (keyLayout in layouts) {
        const parentLayout = layouts[keyLayout as keyof OptionsRoutesLayoutsType];

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
      routes.children.push(pageInList);
    });
  }

  return [routes];
};
