import React, { useState } from "react";
import "./App.css";
//import components
import Nav from "./components/Nav";
import Tweets from "./components/Tweets";
import Footer from "./components/Footer";
import Video from "./components/Video";

function App() {
  //State
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  //Functions
  const incrementer = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const clear = () => {
    setCounter(counter == 0);
  };

  const toggler = () => {
    setToggle((prev) => !prev);
  };

  //Render
  return (
    <div className="App">
      <h1 className={toggle ? "active" : ""}>Hello React</h1>
      <h2>Counter {counter}</h2>
      <button onClick={incrementer}>Add</button>
      <button onClick={clear}>Clear</button>
      <button onClick={toggler}>Toggle</button>
      <div className="home">
        <Nav />
        <Tweets />
      </div>
      <Video num={counter} setToggle={toggler} />
      <Footer toggle={toggle} />
    </div>
  );
}

export default App;
