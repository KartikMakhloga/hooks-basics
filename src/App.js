import { useState } from "react";

function App() {

  //here count is a variable and setCount is function to change the count variable.
  //useState(0) is declaring the count variable with 0.
  //after changing the definition of variable using setCount function component re-render fully
  
  let [count, setCount] = useState(0);
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
