import { OptionsRoutesPagesType } from "../../pages/optionsRoutesPages";
import { CustomeRouteObject } from "../RouterTypes";

export type GroupByKeyType = {
    [x: string]: OptionsRoutesPagesType;
}

export const groupByKey = (pages:OptionsRoutesPagesType, keyName: keyof CustomeRouteObject ):GroupByKeyType => {
    return pages.reduce<GroupByKeyType>((pages, page) => {
      const copyPage= {...page}
      let key = page[keyName];
      if(Array.isArray(key)){
        key = page[keyName][0];
      }

      if(!pages[key]){
        pages[key] = [];
      }

      if(Array.isArray(copyPage[keyName])){
        const copyArray = [...copyPage[keyName]]
        copyArray.shift();
        copyPage[keyName]= copyArray;
        if(copyPage[keyName].length === 0){
          delete copyPage[keyName]
        }
      } else {
        delete copyPage[keyName]
      }

      pages[key].push(copyPage);
      return pages;
    }, {});
  }