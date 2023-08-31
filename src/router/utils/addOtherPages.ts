import { CustomeRouteObject } from 'router/RouterTypes';
import { GroupByKeyType } from './groupByKey';
import { copiePages } from './copiePages';
import { PagesObjectType } from './types/SwitchRouteObjectType';

export const addOtherPages = (
  pagesGroupByKey: GroupByKeyType,
  otherPages: Omit<PagesObjectType, 'wrapper' | 'idRoute'>,
  keyname: keyof CustomeRouteObject,
): GroupByKeyType => {
  const copiedOtherPages = copiePages(otherPages);
  Object.keys(pagesGroupByKey).forEach(key => {
    copiedOtherPages.forEach(pages => {
      if (pages[keyname] && Array.isArray(pages[keyname]) && pages[keyname][0] === key) {
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
