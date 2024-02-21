import axios from "axios";
import React, { useState } from "react";

const Postapi = () => {
  const data = { fname: "", lname: "" };
  const [inputdata, setInputdata] = useState(data);
  const handelData = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/comments", inputdata)
      .then((response) => {
        console.log("response", response);
      });
  };
  const handelUpdate = (e) => {
    e.preventDefault();
    axios
      .put("https://jsonplaceholder.typicode.com/comments/1", inputdata)
      .then((response) => {
        console.log("response", response);
      });
  };
  const handelDelete = (e) => {
    e.preventDefault();
    axios
      .delete("https://jsonplaceholder.typicode.com/comments/1", inputdata)
      .then((response) => {
        console.log("response", response);
      });
  };
  return (
    <>
      <label>Firstname</label>
      <input
        type="text"
        name="fname"
        value={inputdata.fname}
        onChange={handelData}
      ></input>
      <label>Lastname</label>
      <input
        type="text"
        name="lname"
        value={inputdata.lname}
        onChange={handelData}
      ></input>
      <button onClick={handelSubmit}>submit</button>
      <button onClick={handelUpdate}>Upadte</button>
      <button onClick={handelDelete}>Delete</button>
    </>
  );
};

export default Postapi;
