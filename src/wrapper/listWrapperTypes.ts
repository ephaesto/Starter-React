import { ContainerType } from 'utils/nesting-container/NestingContainerType';

export type IWrapperProps = {
  children: React.ReactNode;
  idRoute: string;
};

export type ListWrapperType = {
  traking: ContainerType<IWrapperProps>;
  scroll: ContainerType<IWrapperProps>;
};
