import './App.css'
import CoinFlip from './components/CoinFlip'
import Userguess from './components/Userguess'

function App() {
  

  return (
 
<>
    <div>
      <h1>Let's start the coin flip game!</h1> 
      <CoinFlip/>
    </div>

    <div>
      <h2>Guess the Coin Flip</h2>
      <p>Can you guess the result of the coin flip?</p>
      <Userguess/>
    </div>
</>
  )
}

export default App
