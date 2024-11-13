import { CustomRouteObject } from 'router/RouterTypes';
import NestingContainer from 'utils/components/nesting-container/NestingContainer';
import { copyPages } from './copyPages';
import { PagesObjectType, WrapperPropsObjectType, WrappersObjectType } from './types/SwitchRouteObjectType';

export const addWrappers = (
  pages: PagesObjectType,
  wrappers: WrappersObjectType,
): Omit<PagesObjectType, 'wrapper'> => {
  const copiedPages = copyPages(pages);
  const pagesWrapperLess = copiedPages.map(page => {
    const globalProps = { idRoute: page.idRoute } as Partial<WrapperPropsObjectType>;
    const internalPages: Partial<CustomRouteObject> = { ...page };
    if (internalPages.wrappers && wrappers) {
      let arrayWrapper = internalPages.wrappers;
      if (!Array.isArray(arrayWrapper)) {
        arrayWrapper = [arrayWrapper];
      }
      if (arrayWrapper.length) {
        const Element = internalPages.element;
        const containersList = arrayWrapper as (keyof WrappersObjectType)[];
        internalPages.element = (
          <NestingContainer globalProps={globalProps} containers={wrappers} containersList={containersList}>
            {Element}
          </NestingContainer>
        );
        delete internalPages.wrappers;
      }
    }
    return internalPages;
  });

  return pagesWrapperLess as Omit<PagesObjectType, 'wrapper'>;
};
