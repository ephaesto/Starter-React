import { ContainerType } from 'utils/nesting-container/NestingContainerType';

export type ISetupProps = {
  children: React.ReactNode;
};

export type ListSetupType = {
  fakeServer: ContainerType<ISetupProps>;
  query: ContainerType<ISetupProps>;
};
