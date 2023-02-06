// <-- interview questions -->

// Q1- how can we use useEffect as componentDidMount?
// Ans -> By passing the empty array as dependency_Array.Ans

// Q2- Should we use setState in case 2 of useEffect? If no, then what is the problem?
// Ans -> It will set the state for Infinite time


import { useEffect, useState } from "react";

function App() {

  //'hooks' -> is nothing but a 'function' -> which works only in 'function component' -> which 'add effects' to the that function

  //here count is a variable and setCount is function to change the count variable.
  //useState(0) is declaring the count variable with 0.
  //after changing the definition of variable using setCount function component re-render fully

  let [count, setCount] = useState(0); // ye line re-render mei skip hojati hai


  // Case: 1 --> after first render

  //useEffect(function,dependency_Array)
  //passing empty array in dependency_Array useEffect works like as componentDidMount works in class component
  //useEffect with empty array dependency calls only after first render 
  
  useEffect(()=>{
    console.log("useEffect case 1 was executed")
  },[]);
  
  
  // Case: 2 --> after every render including first render
  
  useEffect(()=>{
    console.log("useEffect is case 2 working")
    // setCount (count + 1) will create infinite loop problem
  });


  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
