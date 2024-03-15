import './Advice.css';
import { useState ,useEffect} from 'react';
const Advice = () => {
    const [advice, setAdvice] = useState('Please click the button to get some advice.');
    const [count, setCount] = useState(0);
    async function getAdvice() {
       const res = await fetch('https://api.adviceslip.com/advice' )
       const data = await res.json();
       setAdvice(data.slip.advice);
       setCount(count + 1);
    }
    useEffect(function(){
        getAdvice();
    },[])
  return (
    <div>
        <h3>{advice}</h3>
        <button onClick={getAdvice}>Get Advice</button>
        <Counter count={count}/>

    </div>
  )
}

export default Advice


function Counter(props){
    return(        <h2>You have read <b>{props.count}</b> pieces of advice</h2>)
}