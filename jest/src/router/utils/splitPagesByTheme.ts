import { RouteObject } from 'react-router-dom';
import { PagesObjectType } from './types/SwitchRouteObjectType';

type SplitPagesByThemeReturnTypes = {
  pagesList: RouteObject[];
  layoutsList: PagesObjectType;
  switchesList: PagesObjectType;
  otherPages: PagesObjectType;
};

export const splitPagesByTheme = (pages: PagesObjectType): SplitPagesByThemeReturnTypes => {
  const pagesList: RouteObject[] = [];
  const layoutsList: Omit<PagesObjectType, 'wrapper' | 'idRoute'> = [];
  const switchesList: Omit<PagesObjectType, 'wrapper' | 'idRoute'> = [];
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
  }, [] as Omit<PagesObjectType, 'wrapper' | 'idRoute'>);

  return {
    pagesList,
    layoutsList,
    switchesList,
    otherPages,
  };
};
