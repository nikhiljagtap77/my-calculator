import "./App.css";
import Display from "./Display";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import ButtonPanel from "./ButtonPanel";

function App() {
  const [state, setState] = useState({
    Total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    console.log(buttonName + " from app.js");
  };
  return (
    <Router>
      <div className="App">
        <Display value={state.next || state.Total || "0"} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </Router>
  );
}

export default App;
