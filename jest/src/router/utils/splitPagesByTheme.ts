import { RouteObject } from "react-router-dom";
import { OptionsRoutesPagesType } from "../../pages/optionsRoutesPages";

type SplitPagesByThemeReturnTypes = {
    pagesList: RouteObject[];
    layoutsList: OptionsRoutesPagesType;
    switchesList: OptionsRoutesPagesType;
    otherPages: OptionsRoutesPagesType;
}

export const splitPagesByTheme =  (pages: OptionsRoutesPagesType):SplitPagesByThemeReturnTypes => {

    const pagesList: RouteObject[] = []
    const layoutsList: OptionsRoutesPagesType = []
    const switchesList: OptionsRoutesPagesType = []
    const otherPages = pages.reduce((otherPages, page )=> {
        
        if(!('layout' in page) && !('switch' in page)){
            pagesList.push({...page})
            return otherPages
        }

        if('layout' in page && !('switch' in page)){
            layoutsList.push({...page})
            return otherPages
        }

        if(page.switch?.length === 1){
            switchesList.push({...page})
            return otherPages
        }

        otherPages.push({...page})
        return otherPages

    },[] as OptionsRoutesPagesType)

    return {
        pagesList,
        layoutsList,
        switchesList,
        otherPages,
    };
}


