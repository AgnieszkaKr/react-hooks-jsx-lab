import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  const styleC = {color: 'firebrick'}
  return (<div id="home">
    <h1 style={styleC}>Your {name}is a Web Developer from Your {city}</h1>
    Home</div>);
}

export default Home;
