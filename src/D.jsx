import { SomeContext } from "./A";

function D() {
  return (
    // here we will get consumer component which expects a function where we can pass the value as
    // a parameter
    <div>
      <SomeContext.Consumer>
        {(value) => {
          return <h1>{value}</h1>;
        }}
      </SomeContext.Consumer>
    </div>
  );
}

export default D;
