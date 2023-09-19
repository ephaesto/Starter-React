import { CustomRouteObject } from 'router/RouterTypes';
import { GroupByKeyType } from './groupByKey';
import { copyPages } from './copyPages';
import { PagesObjectType } from './types/SwitchRouteObjectType';

export const addOtherPages = (
  pagesGroupByKey: GroupByKeyType,
  otherPages: Omit<PagesObjectType, 'wrapper' | 'idRoute'>,
  keyName: keyof CustomRouteObject,
): GroupByKeyType => {
  const copiedOtherPages = copyPages(otherPages);
  Object.keys(pagesGroupByKey).forEach(key => {
    copiedOtherPages.forEach(pages => {
      if (pages[keyName] && Array.isArray(pages[keyName]) && pages[keyName][0] === key) {
        pages[keyName].shift();
        if (pages[keyName].length === 0) {
          delete pages[keyName];
        }
        pagesGroupByKey[key].push(pages);
      }
    });
  });

  return pagesGroupByKey;
};
