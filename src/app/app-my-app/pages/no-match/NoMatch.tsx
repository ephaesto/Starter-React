import { useState } from 'react';
import './NoMatch.css';

const NoMatch = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>NoMatch</h1>
      <div className="card">
        <button type="button" onClick={() => setCount(oldCount => oldCount + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
};

export default NoMatch;
