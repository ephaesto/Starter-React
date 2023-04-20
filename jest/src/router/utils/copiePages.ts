import { OptionsRoutesPagesType } from 'pages/optionsRoutesPagesTypes';

export const copiePages = (pages: OptionsRoutesPagesType): OptionsRoutesPagesType =>
  pages.map(page => {
    const currentPage = { ...page };
    if (currentPage.switch && Array.isArray(currentPage.switch)) {
      currentPage.switch = [...currentPage.switch];
    }
    return currentPage;
  });
