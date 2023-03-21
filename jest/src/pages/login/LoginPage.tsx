import { useState } from 'react'
import './Login.css'

function LoginPage() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
      <h1>Login</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default LoginPage
