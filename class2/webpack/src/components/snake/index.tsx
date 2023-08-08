import React, { useEffect } from "react";
import "./index.less";
import GaneControl from "./utils";
interface SneckProps {}
const SneckComponent: React.FC<SneckProps> = (props) => {
  useEffect(() => {
    const c = new GaneControl();
    
  }, []);
  return (
    <div id="main">
      <div id="stage">
        <div id="snake">
          <div id="head"></div>
        </div>
        <div id="food">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div id="score-panel">
        <div>
          SCORE:<span id="score">0</span>
        </div>
        <div>
          LEVEL:<span id="level">1</span>
        </div>
      </div>
    </div>
  );
};
export default SneckComponent;
