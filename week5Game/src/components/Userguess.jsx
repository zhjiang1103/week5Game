import { useState } from 'react'
import CoinFlip from './CoinFlip';

function Userguess() {
    const [userGuess, setUserGuess] = useState('');
    
  return (
    
    <label>
      Your Guess:
      <input
        type="text"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
      />
    </label>

  )
}

export default Userguess