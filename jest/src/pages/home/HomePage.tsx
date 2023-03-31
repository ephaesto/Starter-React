import { useGetCounter } from 'api/bff/counterEndpoints';
import reactLogo from 'assets/react.svg';
import { atom, useAtom } from 'jotai';
import './Home.css';

const counterAtom = atom(0);
const HomePage = (): JSX.Element => {
  const [count, setCount] = useAtom(counterAtom);
  const { data, isLoading, isError, error } = useGetCounter({ name: 'usain' });

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount(oldCount => oldCount + 1)}>
          count is {count}
        </button>
        <p>{data && `${data?.name} count ${data?.count} times`}</p>
        <p>{isLoading && 'isLoading ...'}</p>
        <p>{isError && error.toString()}</p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
};

export default HomePage;
