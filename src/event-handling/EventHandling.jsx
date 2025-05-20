 import React, {useState} from 'react'
 
 const EventHandling = () => {
    const [count, setCount] = useState(0);
    
    function handleIncrement() {
        setCount(count + 1);
    }

    function handleDecrement() {
        setCount(count - 1);
    }


    function handleReset() {
        setCount(0);
    }

   return (
     <div>
        <h1 className='text-2xl'>React Counter</h1>
        <button onClick={handleIncrement} className='bg-blue-400 rounded p-4 m-4'>Increment</button>

        <button onClick={handleDecrement} className='bg-blue-400 rounded p-4 m-4'>Decrement</button>

        <button onClick={handleReset} className='bg-blue-400 rounded p-4 m-4'>Reset</button>

        <h1 className='text-xl font-bold'>Count: {count}</h1>
     </div>
   )
 }
 
 export default EventHandling