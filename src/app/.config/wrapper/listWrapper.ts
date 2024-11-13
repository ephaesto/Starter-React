import WrapperScroll from 'app/wrapper/wrapper-scroll/WrapperScroll';
import WrapperTracking from 'app/wrapper/wrapper-tracking/WrapperTracking';
import { CustomRouteObject } from 'router/RouterTypes';
import { setupContainers } from 'utils/components/nesting-container/setupContainers';


export const listWrapper = {
  tracking: WrapperTracking,
  scroll: WrapperScroll,
};

export const [ wrappers ] = setupContainers<typeof listWrapper, CustomRouteObject >(listWrapper)
