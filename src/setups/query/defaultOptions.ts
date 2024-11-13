import { DefaultOptions } from '@tanstack/react-query';

const defaultOptions: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
  },
  mutations: {
    retry: false,
  },
};
export default defaultOptions;
