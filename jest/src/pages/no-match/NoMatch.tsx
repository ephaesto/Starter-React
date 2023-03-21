import { useState } from 'react'
import './NoMatch.css'

function NoMatch() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
      <h1>NoMatch</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default NoMatch

