import { ContainerType } from 'utils/components/nesting-container/NestingContainerType';

export type IWrapperProps = {
  children: React.ReactNode;
  idRoute: string;
};

export type ListWrapperType = {
  tracking: ContainerType<IWrapperProps>;
  scroll: ContainerType<IWrapperProps>;
};
