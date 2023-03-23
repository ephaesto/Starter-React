import { OptionsRoutesPagesType } from 'pages/optionsRoutesPagesTypes';
import { CustomeRouteObject } from 'router/RouterTypes';

export type GroupByKeyType = {
  [x: string]: OptionsRoutesPagesType;
};

export const groupByKey = (pages: OptionsRoutesPagesType, keyName: keyof CustomeRouteObject): GroupByKeyType => {
  return pages.reduce<GroupByKeyType>((oldPages, page) => {
    const copyPage = { ...page };
    let key = page[keyName];
    if (Array.isArray(key)) {
      const [keyInArray] = page[keyName];
      key = keyInArray;
    }

    if (!oldPages[key]) {
      oldPages[key] = [];
    }

    if (Array.isArray(copyPage[keyName])) {
      const copyArray = [...copyPage[keyName]];
      copyArray.shift();
      copyPage[keyName] = copyArray;
      if (copyPage[keyName].length === 0) {
        delete copyPage[keyName];
      }
    } else {
      delete copyPage[keyName];
    }

    oldPages[key].push(copyPage);
    return oldPages;
  }, {});
};
