import { ListWrapperType } from './listWrapperTypes';
import WrapperScroll from './wrapper-scroll/WrapperScroll';
import WrapperTracking from './wrapper-tracking/WrapperTracking';

export const listWrapper: ListWrapperType = {
  tracking: WrapperTracking,
  scroll: WrapperScroll,
};
