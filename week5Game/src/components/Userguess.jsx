import { useState } from 'react'
import { useEffect } from 'react';

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
        //setUserGuess(''); // Clear the input field
        
    }
    else {setHasEnteredGuess(false)}
  }
  const reset = () =>{
    if (userGuess !="" && hasEnteredGuess!==false){
      setUserGuess('');
      setHasEnteredGuess(false);
  }
  }
  
    const [url,setUrl] = useState("")
    useEffect(() => {
        if (props.coinSide === 'Heads') {
          setUrl('https://previews.123rf.com/images/putracetol/putracetol1805/putracetol180501964/101047084-head-coin-icon-logo-design.jpg');
        } else if (props.coinSide === 'Tails') {
          setUrl('https://www.loveyourdog.com/wp-content/uploads/2022/04/Dog-Breeds-With-Curly-Tails.jpg');
        }
      }, [props.coinSide]);
    
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
    <button onClick={reset}>Reset</button>

    {hasEnteredGuess && <p>Result: {result}</p>}
    
    
    {hasEnteredGuess && <p>The coin landed on: {props.coinSide}</p>}
     {hasEnteredGuess &&<img src={url} alt={props.coinSide} style={{ width: '400px', height: 'auto' }}/>}

  
    
</>
  )
}


export default Userguess