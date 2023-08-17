import {useState} from 'react'


function CoinFlip() {
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
    <div>
        <button onClick={() => {flipCoin()}}>Flip Coin</button>
        <p>The coin landed on: {coinSide}</p>
        <p>Count: {count}</p>

    </div>
   
    

</>
  )
}

export default CoinFlip