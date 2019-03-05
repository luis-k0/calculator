import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

// class App extends React.Component {
const app = props => {
  // state = {
  //   total: null,
  //   next: null,
  //   operation: null,
  // };
  const [memo, setMemo] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    // console.log(this.state);
    // this.setState(calculate(this.state, buttonName));
    // console.log(this.state);

    console.log("buttonName", buttonName);
    console.log("memo", memo);
    setMemo(calculate(memo, buttonName));
    console.log("memo", memo);
  };

  // render() {
  return (
    <div className="component-app">
      <Display value={memo.next || memo.total || "0"} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
  // }
};
export default app;
