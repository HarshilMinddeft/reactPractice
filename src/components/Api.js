// import { response } from "express";
import React from "react";
import { useEffect, useState } from "react";
const Api = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("response", json);
        setData(json);
      });
  }, []);

  const postPutEvent = () => {
    const data = {
      name: "hhhh",
      mno: "45678998765",
      email: "abc@gmail.com",
    };
    const url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("response", json);
        setData(json);
      });
  };

  return (
    <div className="app">
      <h6>Data from api</h6>
      {data.map((item) => {
        return <div>{item.email}</div>;
      })}
      <button onClick={postPutEvent}>submit</button>
    </div>
  );
};

export default Api;
