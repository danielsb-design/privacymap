import React, { useState } from "react";
//import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import "./styles.css";
import Header from "./Header";
import MapChart from "./MapChart";

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <Header/>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default App;
