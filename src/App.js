import React from 'react';
import AddCount from './routes/count';
import { ContextProvider } from "./routes/ContextReducer/reducer";
import Counter from "./routes/ContextReducer/Counter";
import CounterTest from "./routes/ContextReducer/CounterTest";
import CounterReducer from "./routes/Reducer/Counter";
import UseEffect from "./routes/UseEffect/Counter";
const App = ()=> {
  return (
    <>
      <ContextProvider>
        <AddCount/>
        <Counter />
        <CounterTest />
        <CounterReducer />
        <UseEffect />
      </ContextProvider>
    </>
  );
};

  

export default App;
