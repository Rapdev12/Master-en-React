import { useEffect, useRef, useState } from 'react'

function Example() {

    const [numberGreetingsSent, setNumberGreetingsSent] = useState(0);
    const greetingsQueue = useRef(numberGreetingsSent);

    useEffect(() =>{
        greetingsQueue.current = numberGreetingsSent;
        setTimeout(()=>{
            console.log("Greetings in the queue:"+greetingsQueue.current)
        },2000)
    },[numberGreetingsSent])
    
    const sendGreetings = e =>{
        e.preventDefault()

        setNumberGreetingsSent(numberGreetingsSent + 1);
    }


  return (
    <div> 
        <h1>Example for useRef</h1>

         <h2>Hello !!!!:{numberGreetingsSent}</h2>
        <button onClick={sendGreetings}>Greetings Send</button>
    </div>
  )
}

export default Example