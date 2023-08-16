import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //const [decrement,setDecrement] = useState(0)

  return (
 

      <p>Let's start the coin flip game!</p>
      

        
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </div>
   
  )
}

export default App
