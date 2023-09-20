import { ListWrapperType } from './listWrapperTypes';
import WrapperScroll from 'app/wrapper/wrapper-scroll/WrapperScroll';
import WrapperTracking from 'app/wrapper/wrapper-tracking/WrapperTracking';

export const listWrapper: ListWrapperType = {
  tracking: WrapperTracking,
  scroll: WrapperScroll,
};
