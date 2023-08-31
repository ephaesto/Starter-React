import { DefaultProps } from 'utils/nesting-container/NestingContainerType';
import { IWrapperProps } from 'wrapper/listWrapperTypes';

const WrapperTraking = ({ idRoute, children }: DefaultProps<IWrapperProps>): JSX.Element => {
  return (
    <>
      <h3> WrapperTraking </h3>
      <p>{idRoute}</p>
      {children}
    </>
  );
};

export default WrapperTraking;
