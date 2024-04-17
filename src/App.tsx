import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount]: any = useState(0);

  const addValue = () => {
    console.log("clicked", count);
    if (count < 10) {
      setCount(count + 1);
    } else if (count === 10) {
      alert("The upper limit is 10");
    }
  };

  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    } else if (count === 0) {
      alert("Value cant be in negative");
    }
  };

  return (
    <>
      <h1>React Counter</h1>
      <h2>Counter {count}</h2>
      <button onClick={addValue}>Increase Value</button>
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  );
}

export default App;
