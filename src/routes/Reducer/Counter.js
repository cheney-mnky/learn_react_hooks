import React, { useReducer } from "react";
import { myReducer } from "./reducer";

const Counter= ()=> {
  const [state, dispatch] = useReducer(myReducer, { count: 0 })
  return (
    <div className="App">
      <button onClick={() => dispatch({ type: 'countUp' })}>
        +1 from Reducer
      </button>
      <p>Count: {state.count}</p>
    </div>
  );
}

export default Counter;