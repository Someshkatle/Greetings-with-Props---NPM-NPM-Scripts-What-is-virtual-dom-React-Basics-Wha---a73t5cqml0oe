import React from "react";
import '../styles/App.css';
import Welcome from './Welcome';
import { useState } from "react";

const App = () => {

  const [name, setName] = useState("")

  function getData(val)
  {
    setName(val.target.value)
  }

  return (
    <>
    <Welcome name={name} />
    <input type="text" value={name} onChange={getData}/>
    </>
  )
}


export default App;
