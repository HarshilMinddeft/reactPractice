import React from "react";
import { ethers } from "ethers";
import { useState } from "react";
import "./abi.json";
const abi = require("./abi.json");

const contractAddress = "0xAc2D587E56d50CA8Cac79FC13cb77AA5728C9679";

const RW = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [defaultAccount, setdefaultAccount] = useState("");
  const [connButtonText, setconnButtonText] = useState("Connect Wallet");

  const [currentContractVal, setcurrentContractVal] = useState("");
  //   const [eths, setEths] = useState("");

  const [provider, setprovider] = useState("");
  const [signer, setSigner] = useState("");
  const [contract, setcontract] = useState("");

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          setconnButtonText("Wallet Connected");
        });
    } else {
      setErrorMessage("you dont have metamask extension on browser");
    }
  };

  const accountChangedHandler = (newAccount) => {
    setdefaultAccount(newAccount);
    updateEthers();
  };
  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  window.ethereum.on("accountsChanged", accountChangedHandler);
  window.ethereum.on("chainChanged", chainChangedHandler);

  const updateEthers = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setprovider(provider);

    const tempSigner = provider.getSigner();
    setSigner(tempSigner);

    const tempContract = new ethers.Contract(contractAddress, abi, tempSigner);
    setcontract(tempContract);
  };

  const setHandler = (event) => {
    event.preventDefault();
    contract.set(event.target.setText.value);
  };

  const getCurrentVal = async () => {
    let val = await contract.get();
    setcurrentContractVal(val);
  };

  const sendEthers = async () => {
    await contract.sendEth("0xe917e81c69Bf15238c63abd45d1c335C2fc80bDD", {
      value: ethers.utils.parseEther("0.001"),
    });
  };

  return (
    <div>
      <center>
        <button onClick={sendEthers}>sendEth</button>
        <h4> {"Etherjs contract for send matic and get and set text"} </h4>
        <button onClick={connectWalletHandler}>{connButtonText}</button>
        <div>
          <h3>Address: {defaultAccount}</h3>
        </div>
        <form onSubmit={setHandler}>
          <input id="setText" type="text" />
          <button type={"submit"}> Update Contract </button>
        </form>
        <div>
          <button onClick={getCurrentVal} style={{ marginTop: "5em" }}>
            Get Current Contract Value
          </button>
        </div>
        {currentContractVal}
        {errorMessage}
      </center>
    </div>
  );
};

export default RW;
