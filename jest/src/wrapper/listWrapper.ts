import { ListWrapperType } from './listWrapperTypes';
import WrapperScroll from './wrapper-scroll/WrapperScroll';
import WrapperTraking from './wrapper-traking/WrapperTraking';

export const listWrapper: ListWrapperType = {
  traking: WrapperTraking,
  scroll: WrapperScroll,
};
