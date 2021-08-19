import React from 'react';
import MainBody from "./Components/MainBody"
// import flag from "../Images&Vedios/flag.mp4";
 import flag from "./Images&Vedios/flag.mp4"
import "./app.css"


const App = () => {
  return <>
    <video className="videoTag" autoPlay loop muted>
      <source src={flag} type="video/mp4" />
    </video>
    <MainBody />
    </>
}

export default App;
