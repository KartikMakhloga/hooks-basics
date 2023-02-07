import { createContext, useState } from "react";
import B from "./B";

// lamen terms - (Indirect props or) Context ek jagah hai to store some data to pass to child props in any level of component tree

// context has three steps: 1- creation -> using createContext
//                          2- provider -> here someContext is a provider component and it will be a children of A and parent of B now
//                          3- consumer -> we have to export the context component like we did below

// here i have created context

// let SomeContext = createContext("default value");   // we can also pass value like this without provider
//                                                        but it will be static we will not re-render

let SomeContext = createContext();
let SomeContext2 = createContext();

function A() {
  let [name, setName] = useState("Jack");
  let [LName, setLname] = useState("Ryan");

  return (
    <SomeContext.Provider value={name}>
      <SomeContext2.Provider value={LName}>
        <B />
      </SomeContext2.Provider>
    </SomeContext.Provider>
  );
}

export default A;

export { SomeContext , SomeContext2 };

