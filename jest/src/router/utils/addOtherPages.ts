import { OptionsRoutesPagesType } from 'pages/optionsRoutesPagesTypes';
import { CustomeRouteObject } from 'router/RouterTypes';
import { GroupByKeyType } from './groupByKey';

export const addOtherPages = (
  pagesGroupByKey: GroupByKeyType,
  otherPages: OptionsRoutesPagesType,
  keyname: keyof CustomeRouteObject,
): GroupByKeyType => {
  Object.keys(pagesGroupByKey).forEach(key => {
    otherPages.forEach(pages => {
      if (pages[keyname] && pages[keyname][0] === key) {
        pages[keyname].shift();
        if (pages[keyname].length === 0) {
          delete pages[keyname];
        }
        pagesGroupByKey[key].push(pages);
      }
    });
  });

  return pagesGroupByKey;
};
