import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const addCount = () =>{
    if(counter < 20 ){
      console.log("counter :",counter)
      setCounter(counter+1);
    }
  }
  const removeCount = () =>{
    if(counter > 0){
      console.log("counter :",counter)
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>counter {counter}</h1>
      <button onClick={addCount}>
          Add {counter}
      </button>
      <button onClick={removeCount}>
        Remove {counter}
      </button>
    </>
  )
}

export default App
