import React, { useState, useContext } from 'react';
import { myContext } from "./../ContextReducer/reducer";
const AddCount = () => {
    const [ count, setCount ] = useState(0);
    const { state } = useContext(myContext);
    const addcount = () => {
      let newCount = count;
      setCount(newCount+=1);
    } 
    return (
      <>
        <p>{count}</p>
        <button onClick={addcount}>count++</button>
        <p>{state.count}</p>
      </>
    )
  }
  export default AddCount 