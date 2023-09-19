import { DefaultProps } from 'utils/components/nesting-container/NestingContainerType';
import { IWrapperProps } from 'wrapper/listWrapperTypes';

const WrapperScroll = ({ idRoute, children }: DefaultProps<IWrapperProps>): JSX.Element => {
  return (
    <>
      <h3>WrapperScroll</h3>
      <p>{idRoute}</p>
      {children}
    </>
  );
};

export default WrapperScroll;
