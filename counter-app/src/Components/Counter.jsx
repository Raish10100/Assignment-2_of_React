import { useState } from 'react'
import './Counter.css'

function Counter(){

    const [count,setCount] = useState(0)

const Increment = () => {
    setCount(preValue => preValue + 1)
}
const Decrement = () => {
    setCount(preValue => preValue - 1)
}

    return (
        <div className='main-container'>
           <h1>{count}</h1> 
           <div className='buttons'>
            <button onClick={() => Increment()}>Increment</button>
            <button onClick={() => Decrement()}>Decrement</button>
           </div>
        </div>
    )
}

export default Counter;