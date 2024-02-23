import React from "react";
import Count from "./utils/count";
import { useDispatch } from "react-redux";
const Reduxee = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={(e) => dispatch({ type: "Increment" })}>Increase</button>
      <Count />
      <button onClick={(e) => dispatch({ type: "Decrement" })}>Decrease</button>
    </div>
  );                                         
};

export default Reduxee;
