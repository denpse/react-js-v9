import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(1); // init state

  //function for increment state (count)
  const inCrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1 className="text-red-900 font-bold text-xl">This is count</h1>
      <h1 className="text-red-500">{count}</h1>
      <button onClick={inCrement}>Increment</button>
    </div>
  );
};

export default App;
