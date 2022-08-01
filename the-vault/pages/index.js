import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Reach Imports
import loadStdlib from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import * as reachBackend from "../reach-backend/build/index.main.mjs";

// React Imports
import React from "react";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const contractInfo = {"type":"BigNumber","hex":"0x061a8a5c"};
  const stdlib = useRef();
  const connectedCtc = useRef();
  const [tokParams, setTokParams] = useState({
    name: "shilingi",
    symbol: "TSHT",
    supply: "1000000",
    tokId: "101845165",
  });
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState("Not Connected to Wallet");
  const [accConnected, setAccConnected] = useState();
  const [balance, setBalance] = useState(0.0);
  const [tokenAmnt, setTokenAmnt] = useState(0.0);
  const [contractAddress, setContractAddress] = useState("");
  const [isAlive, setIsAlive] = useState(true);
  const [status, setStatus] = useState("Not Connected to Contract");

  const showBalances = async (acc) => {
    const fmt = (amt) => stdlib.current.formatCurrency(amt, 2);
    try {
      const [netAmnt, tokAmnt] = await stdlib.current.balancesOf(acc, [
        null,
        tokParams.tokId,
      ]);

      setBalance(fmt(netAmnt));
      setTokenAmnt(tokAmnt);

      console.log(
        `${acc.getAddress()} has ${fmt(netAmnt)} ${
          stdlib.current.standardUnit
        } and ${tokAmnt} ${tokParams.name}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  // Connect your wallet
  const connectWallet = async () => {
    try {
      console.log("Connecting to your Wallet");
      stdlib.current = loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
      console.log(`The consensus network is ${stdlib.current.connector}.`);
      //  const reach = loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
      stdlib.current.setWalletFallback(
        stdlib.current.walletFallback({
          providerEnv: "TestNet",
          MyAlgoConnect,
        })
      );

      try {
        const acc = await stdlib.current.getDefaultAccount();
        setAccConnected(acc);
        const addr = stdlib.current.formatAddress(acc.getAddress());

        setAddress(addr.toString());

        setWalletConnected(true);

        await showBalances(acc);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  // Deploy the contract
  const deployContract = async () => {
    const deployerInteract = {
      ready: async () => {
        setStatus("Connected To Contract");
        console.log(
          `Contract deployed with info: ${JSON.stringify(
            await connectedCtc.current.getInfo()
          )}`
        );
        await connectedCtc.current.apis.C.depositTokens(
          stdlib.current.parseCurrency(3000)
        );
        await showBalances(accConnected);
      },
      getParams: async () => {
        return {
          tokId: tokParams.tokId,
          blockLength: 8000000,
          amntToTransfer: 3000,
        };
      },
      deadManSwitch: isAlive      
    };

    connectedCtc.current = await accConnected.contract(reachBackend);

    await connectedCtc.current.participants.D(deployerInteract);

    // await reachBackend.D(connectedCtc.current, deployerInteract);
    await showBalances(accConnected);
  };

  const attachContract = async () => {
    try {
      connectedCtc.current = await accConnected.contract(
        reachBackend,
        contractInfo
      );

      setStatus("Connected To Contract");

      const conn = stdlib.current.connector;
      if (conn == "ALGO") {
        await stdlib.current.transfer(
          accConnected,
          accConnected,
          0,
          tokParams.tokId
        );
      }

      //  await connectedCtc.current.apis.C.claimToken(address);
      await showBalances(accConnected);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  const acceptTokenOffer = async () => {
    await connectedCtc.current.apis.A.acceptToken();
    await showBalances(accConnected);
  };

  const claimTokenOffer = async () => {
    await connectedCtc.current.apis.C.claimToken();
    await showBalances(accConnected);
  };

  const mintToken = async () => {
    const tok = await stdlib.current.launchToken(
      accConnected,
      tokParams.name,
      tokParams.symbol,
      {
        supply: stdlib.current.parseCurrency(tokParams.supply),
        clawback: address,
      }
    );

    console.log(`The token was minted with ID ${tok.id}`);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Reach Bear Challenge - The Vault" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title> The Vault </title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/tachyons/css/tachyons.min.css"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {!walletConnected ? (
          <div className="flex items-center justify-center pa2">
            <button className="f5 pa2" onClick={connectWallet}>
              CONNECT YOUR WALLET
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center pa2">
            <p className="w-100  w-50-ns pa2">
              Your Wallet Address is: {address}
              <br />
              {stdlib.current.standardUnit} : {balance}
              <br />
              {tokParams.symbol} : {tokenAmnt.toString()}
              <br />
              Status: {status}
            </p>
          </div>
        )}

        <div className="mw9 ph3-ns">
          <div className="cf ph2-ns">
            <div className="fl w-100 w-50-ns pa2">
              <div className="outline pa2">
                <h3>Deployer</h3>
                <button className="f5 pa8 mb3" onClick={deployContract}>
                  Deploy Contract
                </button>

                <br></br>

                <div className="w-100 w-50-ns mb3">
                  <label className="">Contract Information: </label>
                  <textarea
                    value={JSON.stringify(contractInfo)}
                    // onChange={this.handleChange}
                    rows={5}
                    cols={22}
                  />
                </div>

                <div className="w-100 w-50-ns mt-2">
                  <span>Still Alive: </span>
                  <select
                    id="role-select"
                    value={isAlive}
                    onChange={(e) => setIsAlive(e.target.value)}
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="fl w-100 w-50-ns pa2">
              <div className="outline pa2">
                <h3 className="ma2">Attacher</h3>
                <div className="w-100 w-50-ns pa2">
                  <label className="">Contract Information: </label>
                  <textarea
                    value={JSON.stringify(contractInfo)}
                    // onChange={this.handleChange}
                    rows={5}
                    cols={22}
                  />
                </div>
                <button className="ma2" onClick={attachContract}>
                  Connect To the contract
                </button>
                <br />
                <button className="ma2" onClick={acceptTokenOffer}>
                  Accept Token Offer
                </button>
                <br />
                <button className="ma2" onClick={claimTokenOffer}>
                  Claim Your Token
                </button>
              </div>
            </div>

            <div className="fl w-100 w-50-ns pa2">
              <div className="outline pa2">
                <h3 className="ma2">Mint Token</h3>
                <span className="ma2">
                  This will mint a token with name: {tokParams.name}, symbol:{" "}
                  {tokParams.symbol} and supply of: {tokParams.supply}:{" "}
                </span>
                <button className="ma2" onClick={mintToken}>
                  Mint Token
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
