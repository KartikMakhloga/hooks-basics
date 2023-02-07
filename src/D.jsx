import { SomeContext,SomeContext2 } from "./A";
import { useContext } from "react";

function D() {
   let name = useContext(SomeContext)
   let lName = useContext(SomeContext2)

  return (
    // here we will get consumer component which expects a function where we can pass the value as
    // a parameter
   <h1>{`${name} ${lName}`}</h1>
  );
}

export default D;
