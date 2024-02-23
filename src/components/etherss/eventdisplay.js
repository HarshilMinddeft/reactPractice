import React, { useState } from "react";
import { ethers } from "ethers";
const ABI = require("./contractABI.json");

export const Eventdisplay = () => {
  const [events, setEvents] = useState([]);

  async function getTransfer() {
    const usdcAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"; // USDC Contract
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const contract = new ethers.Contract(usdcAddress, ABI, provider);

    contract.on("Transfer", (from, to, value, event) => {
      let transferEvent = {
        from: from,
        to: to,
        value: value,
        eventData: event,
      };

      // Update the events state
      setEvents((prevEvents) => [...prevEvents, transferEvent]);
    });
  }

  const newevent = async () => {
    await getTransfer();
  };

  return (
    <div>
      <h1>Event</h1>
      {/* {events} */}
      <button onClick={newevent}>Get Transfer Events</button>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <pre>{JSON.stringify(event, null, 4)}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Eventdisplay;
