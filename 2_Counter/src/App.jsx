import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(7);

  const addValue = () => {
    if (count === 20) {
      alert("Reached Maximum limit!")
    } else {
      setCount(count + 1);
    }
  };

  const reduceValue = () => {
    if (count === 0) {
      alert("Reached Minimum Limit!")
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Number Counter</h1>
      <h2>Counter Value: {count}</h2>
      <br />
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={reduceValue}>Reduce Value</button>
    </>
  );
}

export default App;
