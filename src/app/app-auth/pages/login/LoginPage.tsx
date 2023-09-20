import { useState } from 'react';
import './Login.css';

const LoginPage = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Login</h1>
      <div className="card">
        <button type="button" onClick={() => setCount(oldCount => oldCount + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
