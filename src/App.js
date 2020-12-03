import React from 'react';
import AddCount from './routes/count';
import { ContextProvider } from "./routes/ContextReducer/reducer";
import Counter from "./routes/ContextReducer/Counter";
import CounterTest from "./routes/ContextReducer/CounterTest";
const App = ()=> {
  return (
    <>
      <ContextProvider>
        <AddCount/>
        <Counter />
        <CounterTest />
      </ContextProvider>
    </>
  );
};

  

export default App;
