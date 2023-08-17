import { useState } from 'react'

function Userguess(props) {
    const [userGuess, setUserGuess] = useState('');
    const [result, setResult] = useState(null);

    const resultMessage = () => {
        if (userGuess.toLowerCase() === props.coinSide.toLowerCase()) {
          setResult('Congratulations! You guessed correctly!');
        } else {
          setResult('Sorry, your guess was incorrect.');
        }
    }
    return (
<>
    <label>
      Your Guess:
      <input
        type="text"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
      />
    </label>
    <button onClick={resultMessage}>Check Guess</button>
    <p>Result:{result}</p>
</>
  )
}

export default Userguess