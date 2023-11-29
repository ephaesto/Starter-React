import { useGetCounter } from 'api/bff/counter/counterEndpoints';
import { ICounter } from 'api/bff/counter/counterTypes';
import { useEffect, useState } from 'react';
import For from 'utils/components/For';
import Show from 'utils/components/Show';
import Switch from 'utils/components/Switch';


type TestType = {test: string, ru: string};

const arrayTest: TestType[] =  [
  {test: 'yyyy', ru: 'ssss'},
  {test: 'yuu', ru: 's234sss'},
  {test: 'yyi', ru: 'sess'},
]

const HelperPage = (): JSX.Element => {
  const [myArray, setMyArray] = useState<TestType[]>()
  const { data, isLoading, isError, error } = useGetCounter({ name: 'usain' });
  useEffect(()=>{
    setMyArray(arrayTest)
  }, [])

  return (
    <div className="App">
        <Show is={myArray} show={ <p>{myArray?.[0].test}</p>}/>
        <Switch>
          <p data-caseswitch={Boolean(data)} >{`${data?.name} count ${(data as ICounter).count} times`}</p>
          <p data-caseswitch={isLoading}>isLoading ...</p>
          <p data-caseswitch={isError} >{error?.toString()}</p>
        </Switch>
        <For inValues={myArray}>{({test, ru}) =><p>{test+ru}</p>}</For>
    </div>
  );
};

export default HelperPage;
