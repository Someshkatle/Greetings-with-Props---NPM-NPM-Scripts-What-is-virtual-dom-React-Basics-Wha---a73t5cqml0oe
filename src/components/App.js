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
    <input type="text" value={name} placeholder="Enter Your Name" onChange={getData}/>
    <h2>Welcome to Newton School.</h2>
    </>
  )
}


export default App;
