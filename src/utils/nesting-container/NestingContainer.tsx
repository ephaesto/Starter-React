import FragmentSwitch from '../FragmentSwitch';
import Switch from '../Switch';
import { ContainerType, DefaultProps } from './NestingContainerType';

type INestingContainerProps<Props, Containers> = {
  globalProps?: Partial<Props>;
  containers: Containers;
  containersList: (keyof Containers)[];
  children: React.ReactNode;
};
const NestingContainer = <Props, Containers extends Record<string, ContainerType<Props>>>({
  globalProps = {},
  containers,
  containersList,
  children,
}: INestingContainerProps<Props, Containers>): JSX.Element => {
  const [ContainerKey, ...copieContainersList] = [...containersList];
  const Container = (props: DefaultProps<Props>) => (containers[ContainerKey] as ContainerType<Props>)(props);
  return (
    <Switch>
      <FragmentSwitch data-caseswitch={!ContainerKey || !Container}>{children}</FragmentSwitch>
      <FragmentSwitch data-defaultswitch>
        <Container {...globalProps}>
          <NestingContainer globalProps={globalProps} containers={containers} containersList={copieContainersList}>
            {children}
          </NestingContainer>
        </Container>
      </FragmentSwitch>
    </Switch>
  );
};
export default NestingContainer;
