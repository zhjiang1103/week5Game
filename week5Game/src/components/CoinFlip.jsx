import {useState} from 'react'

function CoinFlip() {
    const [coinSide, setcoinSide] = useState(null);
    const flipCoin = () => {
        const randomSide = Math.random() < 0.5 ? 'Heads' : 'Tails';
        setcoinSide(randomSide);
      };
  return (
    <div>
        <button onClick={() => {flipCoin()}}>Flip Coin</button>
        <input/>
        <p>The coin landed on: {coinSide}</p>
    </div>
  )
}

export default CoinFlip