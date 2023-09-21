import { DefaultProps } from 'utils/components/nesting-container/NestingContainerType';
import { IWrapperProps } from 'app/config/wrapper/listWrapperTypes';

const WrapperTracking = ({ idRoute, children }: DefaultProps<IWrapperProps>): JSX.Element => {
  return (
    <>
      <h3> WrapperTracking </h3>
      <p>{idRoute}</p>
      {children}
    </>
  );
};

export default WrapperTracking;
