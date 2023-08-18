import './App.css'
import Userguess from './components/Userguess'
import {useState} from 'react'



function App() {
  const [coinSide, setcoinSide] = useState(null);
  const [count, setCount] = useState(0);
  const flipCoin = () => {
    const randomSide = Math.random() < 0.5 ? 'Heads' : 'Tails';
    setcoinSide(randomSide);
    if(count<10){setCount(count+1);}
    else{setCount(0)}
  };
  
  return (
 
<>
      
        <h1>Let's start the coin flip game!</h1> 
        <button onClick={() => {flipCoin()}}>Flip Coin</button>
        <p>Count: {count}</p>
        {count === 10 && <p>Count reached 10! It's resetting to 0.</p>}
        <Userguess coinSide={coinSide} />
        
        


</>
  )
}

export default App
