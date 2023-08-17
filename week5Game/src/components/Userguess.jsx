import { useState } from 'react'

function Userguess(props) {
    const [userGuess, setUserGuess] = useState('');
    const [result, setResult] = useState(null);
    const [hasEnteredGuess, setHasEnteredGuess] = useState(false);


    const resultMessage = () => {
      if (userGuess !=""){
        if (userGuess.toLowerCase() === props.coinSide.toLowerCase()) {
          setResult('Congratulations! You guessed correctly!');
        } else {
          setResult('Sorry, your guess was incorrect.');
        }
        setHasEnteredGuess(true); // Mark that a guess has been entered
    }
    else {setHasEnteredGuess(false)}
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
    {hasEnteredGuess && <p>Result: {result}</p>}
</>
  )
}

export default Userguess