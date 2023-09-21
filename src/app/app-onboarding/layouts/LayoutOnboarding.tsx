import { Outlet } from 'react-router-dom';

const LayoutOnboarding = (): JSX.Element => {
  return (
    <>
      <p>layout Onboarding</p>
      <Outlet />
    </>
  );
};

export default LayoutOnboarding;
