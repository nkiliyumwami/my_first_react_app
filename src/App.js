import  { useEffect, useState } from 'react';

import './App.css';


const App = () => {
  //React state 
const [counter, setCounter] = useState(0);

//React hooks 
//This code will have toa load as soon as th page load and will load once
//because of the dependency, empty array at the end.
useEffect(() => {
  alert(`You changed the counter to ${counter}`)
}, [counter])


  return(
    <div className="App">
      <button onClick={() => setCounter(prevCounter => prevCounter -1)} > - </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(prevCounter => prevCounter + 1)}> + </button>
    </div>
  )
}

export default App;
