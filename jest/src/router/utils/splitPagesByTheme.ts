import { OptionsRoutesPagesType } from 'pages/optionsRoutesPagesTypes';
import { RouteObject } from 'react-router-dom';

type SplitPagesByThemeReturnTypes = {
  pagesList: RouteObject[];
  layoutsList: OptionsRoutesPagesType;
  switchesList: OptionsRoutesPagesType;
  otherPages: OptionsRoutesPagesType;
};

export const splitPagesByTheme = (pages: OptionsRoutesPagesType): SplitPagesByThemeReturnTypes => {
  const pagesList: RouteObject[] = [];
  const layoutsList: OptionsRoutesPagesType = [];
  const switchesList: OptionsRoutesPagesType = [];
  const otherPages = pages.reduce((oldOtherPages, page) => {
    if (!('layout' in page) && !('switch' in page)) {
      pagesList.push({ ...page });
      return oldOtherPages;
    }

    if ('layout' in page && !('switch' in page)) {
      layoutsList.push({ ...page });
      return oldOtherPages;
    }

    if (page.switch?.length === 1) {
      switchesList.push({ ...page });
      return oldOtherPages;
    }

    oldOtherPages.push({ ...page });
    return oldOtherPages;
  }, [] as OptionsRoutesPagesType);

  return {
    pagesList,
    layoutsList,
    switchesList,
    otherPages,
  };
};
