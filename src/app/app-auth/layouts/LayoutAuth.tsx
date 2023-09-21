import { Outlet } from 'react-router-dom';

const LayoutAuth = (): JSX.Element => {
  return (
    <>
      <p>layout Auth</p>
      <Outlet />
    </>
  );
};

export default LayoutAuth;
