import { PagesObjectType } from './types/SwitchRouteObjectType';

export const copyPages = (pages: PagesObjectType): PagesObjectType =>
  pages.map(page => {
    const currentPage = { ...page };
    if (currentPage.switch && Array.isArray(currentPage.switch)) {
      currentPage.switch = [...currentPage.switch];
    }
    return currentPage;
  });
