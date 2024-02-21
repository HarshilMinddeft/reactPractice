import React from "react";
import { useState } from "react";

const Footer = (props) => {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />
      <h2>{name}</h2>
      {/* <h3>{colour}</h3> */}
      <h5>this is second line {props.title}</h5>
    </div>
  );
};
export default Footer;
