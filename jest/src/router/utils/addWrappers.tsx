import { OptionsRoutesPagesType } from 'pages/optionsRoutesPagesTypes';
import { CustomeRouteObject } from 'router/RouterTypes';
import NestingContainer from 'utils/nesting-container/NestingContainer';
import { IWrapperProps, ListWrapperType } from 'wrapper/listWrapperTypes';
import { copiePages } from './copiePages';

export const addWrappers = (
  pages: OptionsRoutesPagesType,
  wrapper?: ListWrapperType,
): Omit<OptionsRoutesPagesType, 'wrapper' | 'idRoute'> => {
  const copiedPages = copiePages(pages);
  const pagesWrapperLess = copiedPages.map(page => {
    const globalProps = { idRoute: page.idRoute } as Partial<IWrapperProps>;
    const internalPages: Partial<CustomeRouteObject> = { ...page };
    if (internalPages.wrapper && wrapper) {
      let arrayWrapper = internalPages.wrapper;
      if (!Array.isArray(internalPages.wrapper)) {
        arrayWrapper = [internalPages.wrapper];
      }
      if (arrayWrapper.length) {
        const Element = internalPages.element;
        const containersList = arrayWrapper as (keyof ListWrapperType)[];
        internalPages.element = (
          <NestingContainer globalProps={globalProps} containers={wrapper} containersList={containersList}>
            {Element}
          </NestingContainer>
        );
        delete internalPages.wrapper;
      }
    }
    if (internalPages.idRoute) {
      delete internalPages.idRoute;
    }

    return internalPages;
  });

  return pagesWrapperLess as Omit<OptionsRoutesPagesType, 'wrapper' | 'idRoute'>;
};
