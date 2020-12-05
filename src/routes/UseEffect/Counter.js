import React, { useState, useEffect } from 'react'

const AsyncPage = ({name}) => {
const [loading, setLoading] = useState(true);
const [person, setPerson] = useState('');

  useEffect(() => {
    setLoading(true);
    setTimeout(()=> {
      setLoading(false);
      setPerson(name);
    },1000);
  },[name]);
  return [loading,person];
};

const PersonPage = () =>{
  const [state, setState] = useState('xxx')
  const changeName = (name) => {
    setState(name)
  };
  const [loading, person] = AsyncPage({name:state});
  return (
    <>
      {loading?<p>Loading...</p>:<p>{person}</p>}
      <button onClick={() => {changeName('名字1')}}>名字1</button>
      <button onClick={() => {changeName('名字2')}}>名字2</button>
    </>
  );
}

export default PersonPage 