import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Reach Imports
import loadStdlib from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import * as rApp from "../reach-app/build/index.main.mjs";

// React Imports
import React from "react";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  // const contractInfoStr = {"type":"BigNumber","hex":"0x061a8a5c"};
  const stdlib = useRef();
  const connectedCtc = useRef();
  const nftParams = useRef({
    name: "Mona Lisa",
    symbol: "NFT",
    id: 103268963, // Just a sample Token ID for Algorand
    opt: { supply: 1 }
  });
  const raffleParams = useRef({
    nftId: nftParams.current.id,
    numTickets: 4,
    deadline: 10
  });
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState("Not Connected to Wallet");
  const [accConnected, setAccConnected] = useState();
  const [balance, setBalance] = useState(0.0);
  const [tokenAmnt, setTokenAmnt] = useState(0.0);
  const [contractAddress, setContractAddress] = useState("");
  const [selectedNumber, setSelectNumber] = useState(1);
  const [selectedMsg, setSelectedMsg] = useState("Please select a number above");
  const [status, setStatus] = useState("Not Connected to Contract");
  const [contractInfoStr, setContractInfoStr] = useState(JSON.stringify())
  const [deadlineInput, setDeadlineInput] = React.useState(10);
  const [winningNum, setWinningNum] = React.useState();
  const [winningNumHash, setWinningNumHash] = React.useState();
  const [raffleStage, setRaffleStage] = React.useState(1)
  const [sayIfWon, setSayIfWon] = React.useState("N/A")

  const handleDeadlineFld = (e) => {
    const { value } = e.target;
    setDeadlineInput(value);
  };

  const hndlDeployedContractFld = (e) => {
    const { value } = e.target;
    setContractInfoStr(value);
  };

  const showBalances = async (acc) => {
    const fmt = (amt) => stdlib.current.formatCurrency(amt, 2);
    try {

      let nftId = nftParams.current.id
      const conn = stdlib.current.connector;
      if (conn == "ETH") {
        nftId = 0
      }

      const [netAmnt, tokAmnt] = await stdlib.current.balancesOf(acc, [
        null,
        nftId,
      ]);

      console.log(tokAmnt)

      setBalance(fmt(netAmnt));
      setTokenAmnt(tokAmnt.toNumber());

      console.log(
        `${acc.getAddress()} has ${fmt(netAmnt)} ${stdlib.current.standardUnit
        } and ${tokAmnt} ${nftParams.current.name}`
      );
    } catch (error) {
      console.log(error)
      console.log("An error occured");
    }
  };

  // Connect your wallet
  const connectWallet = async () => {
    try {
      console.log("Connecting to your Wallet");
      stdlib.current = loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ETH" });
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
    // Lets create our NFT First 
    const theNFT = await stdlib.current.launchToken(accConnected, "Mona Lisa", "NFT", { supply: 1 });
    const nId = theNFT.id
    console.log(`The NFT ID is: ${nId}`)
    nftParams.current = {
      name: theNFT.name,
      symbol: theNFT.symbol,
      supply: "1",
      id: theNFT.id
    };

    raffleParams.current = {
      nftId: nftParams.current.id,
      numTickets: 4,
      deadline: deadlineInput
    }

    console.log(`The NFT Params are: ${nftParams.current}`);

    console.log(`The Raffle Params are: ${JSON.stringify(raffleParams.current)}`)

    const deployerInteract = {
      ...stdlib.current.hasRandom,
      getNum: (numTickets) => {
        const num = (Math.floor(Math.random() * numTickets) + 1);
        return num;
      },
      seeOutcome: () => {
        showBalances(accConnected, 'Alice');
      },
      startRaffle: () => {
        console.log(`The Raffle information is being sent to the contract`);
        return raffleParams.current;
      },
      seeHash: async (value) => {
        setWinningNumHash(value);
        console.log(`Winning number HASH is: ${value}`);

        const cInfo = await connectedCtc.current.getInfo();
        console.log(JSON.stringify(cInfo));

        setContractInfoStr(JSON.stringify(cInfo))

        // processBobs();
      },
      playingOver: (winNum) => {
        console.log(`Winning number is: ${winNum}`);
        setWinningNum(winNum.toNumber());
        setRaffleStage(2);
        console.log(`Raffle is transitioning to stage 2`);
        // processBobs();
      }
      // implement Alice's interact object here
    };

    connectedCtc.current = await accConnected.contract(rApp);

    await connectedCtc.current.participants.Alice(deployerInteract);

    // await rApp.D(connectedCtc.current, deployerInteract);
    await showBalances(accConnected);
  };

  const attachContract = async () => {
    try {
      connectedCtc.current = await accConnected.contract(
        rApp,
        JSON.parse(contractInfoStr)
      );

      setStatus("Connected To Contract");

      const conn = stdlib.current.connector;

      const nftId = await connectedCtc.current.apis.Bobs.optIn();
      await accConnected.tokenAccept(nftId);


      //  await connectedCtc.current.apis.C.claimToken(address);
      await showBalances(accConnected);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  const submitSelectedNumber = async () => {
    if (raffleStage == 1) {
      // const nftId = await ctc.apis.Bobs.optIn();
      // await acc.tokenAccept(nftId);
      // stdlib.wait(1)

      try {
        const num = selectedNumber;
        console.log(`${address} played: ${num}`);
        const p = await connectedCtc.current.apis.Bobs.playNum(num);

        if (p) {
          setSelectedMsg("Number submitted, wait raffle to reach stage 2 then click SEE OUTCOME")
          console.log(`${num} not taken yet.`)
        } else {
          setSelectedMsg("Number already taken, select another and submit")
          console.log(`${num} has already being taken.`)
        }
        //  console.log(`${who} playeddd: ${p}`)

      } catch (e) {
        console.log(e)
        console.log(`${address} failed due to error`);
      }

    }
  };

  const seeOutcomeOfRaffle = async () => {
    try {
      const winNum = await connectedCtc.current.apis.Winner.showWinner();
      setWinningNum(winNum.toNumber());
      console.log(`Winning number is: ${winNum}`);
      setRaffleStage(2);

      const OUTCOME = ['Won', 'not Win']
      const num = await connectedCtc.current.apis.Bobs.seeOutcome();
      console.log(`${address} ${OUTCOME[num.toNumber()]}`);
      setSayIfWon(OUTCOME[num.toNumber()]);
      await showBalances(accConnected);

    } catch (e) {
      console.log(e)
      console.log(`${address} failed due to error`);
    }

    await showBalances(accConnected);
  }

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
              {nftParams.current.name} : {tokenAmnt.toString()}
              <br />
              Status: {status}
            </p>
          </div>
        )}

        <div className="mw9 ph3-ns">
          <div className="cf ph2-ns">
            <div className="fl w-100 w-50-ns pa2">
              <div className="outline pa2">
                <h3>Deploy A Contract</h3>
                <hr></hr>
                <div className="w-100 w-50-ns mt-2">
                  <span>Deadline: </span>
                  <input
                    type="number"
                    value={`${deadlineInput}`}
                    onChange={handleDeadlineFld}
                  />
                </div>
                <div className="w-100 w-50-ns mt-2">
                  <span>NFT Name is: {nftParams.name}</span>
                </div>
                <hr></hr>
                <button className="f5 pa8 mb3 mt3" onClick={deployContract}>
                  Deploy A Contract
                </button>

                <br></br>

                <div className="w-100 w-50-ns mb3">
                  <label className="">Contract Information: </label>
                  <textarea
                    value={contractInfoStr}
                    onChange={hndlDeployedContractFld}
                    rows={5}
                    cols={22}
                  />
                </div>
                <hr></hr>
                <div className="w-100 w-50-ns mb3">
                  <span>Raffle is in Stage: {raffleStage} of 2</span>
                </div>
                <div className="w-100 w-50-ns mb3">
                  <span>The winning Number HASH is: {winningNumHash}</span>
                </div>
                <div className="w-100 w-50-ns mb3">
                  <span>The winning Number is: {winningNum}</span>
                </div>

              </div>
            </div>
            <div className="fl w-100 w-50-ns pa2">
              <div className="outline pa2">
                <h3 className="ma2">Attach to a Contract</h3>
                <hr></hr>
                <div className="w-100 w-50-ns pa2">
                  <label className="">Contract Information: </label>
                  <textarea
                    value={contractInfoStr}
                    onChange={hndlDeployedContractFld}
                    rows={5}
                    cols={22}
                  />
                </div>
                <button className="ma2" onClick={attachContract}>
                  Connect To the contract
                </button>
                <hr></hr>
                <div className="w-100 w-50-ns mt-2 ma2">
                  <span>Select Number: </span>
                  <select
                    id="role-select"
                    value={selectedNumber}
                    onChange={(e) => setSelectNumber(e.target.value)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  <button className="ma2" onClick={submitSelectedNumber}>
                    Submit Selected
                  </button>
                </div>
                <div className="w-100 w-50-ns mb3 ma2">
                  <span>{selectedMsg}</span>
                </div>
                <hr></hr>
                <div className="w-100 w-50-ns mb3 ma2">
                  <span>Raffle is in Stage: {raffleStage} of 2</span>
                </div>
                <button className="ma2" onClick={seeOutcomeOfRaffle}>
                  See Outcome
                </button>
                <span>The Winning Number is: {winningNum} </span>
                <br></br>
                <span className="ma2">You did: {sayIfWon}</span>
                <br />
              </div>
            </div>
            {/* 
            <div className="fl w-100 w-50-ns pa2">
              <div className="outline pa2">
                <h3 className="ma2">Mint Token</h3>
                <span className="ma2">
                  This will mint a token with name: {nftParams.name}, symbol:{" "}
                  {nftParams.symbol} and supply of: {nftParams.supply}:{" "}
                </span>
                <button className="ma2" onClick={mintToken}>
                  Mint Token
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
