import { Outlet } from 'react-router-dom';

const LayoutDefault = (): JSX.Element => {
  return (
    <>
      <p>layout default</p>
      <Outlet />
    </>
  );
};

export default LayoutDefault;
