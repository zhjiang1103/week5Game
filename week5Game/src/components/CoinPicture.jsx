import {useState} from 'react'
import { useEffect } from 'react';

function CoinPicture(props) {
    const [url,setUrl] = useState("")
    useEffect(() => {
        if (props.coinSide === 'Heads') {
          setUrl('https://previews.123rf.com/images/putracetol/putracetol1805/putracetol180501964/101047084-head-coin-icon-logo-design.jpg');
        } else if (props.coinSide === 'Tails') {
          setUrl('https://www.loveyourdog.com/wp-content/uploads/2022/04/Dog-Breeds-With-Curly-Tails.jpg');
        }
      }, [props.coinSide]);
  
      return (
    <div>
        <img src={url} alt={props.coinSide}/>
    </div>
  )
}

export default CoinPicture