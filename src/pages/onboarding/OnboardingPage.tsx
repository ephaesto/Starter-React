import { useState } from 'react';
import './Onboarding.css';

const OnboardingPage = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Onboarding</h1>
      <div className="card">
        <button type="button" onClick={() => setCount(oldCount => oldCount + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
};

export default OnboardingPage;
