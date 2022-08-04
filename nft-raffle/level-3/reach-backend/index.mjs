import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const accAlice = await stdlib.newTestAccount(startingBalance);
console.log('Hello, Alice and Bobs!');

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);

console.log(`Creator is creating the testing NFT`);
const theNFT = await stdlib.launchToken(accAlice, "Mona Lisa", "NFT", { supply: 1 });
const nftParams = {
  nftId: theNFT.id,
  numTickets: 4,
  deadline: 10
};

const OUTCOME = ['Won', 'did not Win']

const showBalances = async (acc, who) => {
  const fmt = (amt) => stdlib.formatCurrency(amt, 2);
  try {
    const [netAmnt, nftAmnt] = await stdlib.balancesOf(acc, [
      null,
      theNFT.id,
    ]);

    console.log(
      `${who} has ${fmt(netAmnt)} ${
        stdlib.standardUnit
      } and ${nftAmnt} ${theNFT.name}`
    );
  } catch (error) {
    console.log(error);
  }
};

console.log('Starting backends...');

const players = await stdlib.newTestAccounts(3, startingBalance);

let mode = 0;
let done = false;
const processBobs = async () => {
  const play = async (who, acc) => {
    await acc.tokenAccept(nftParams.nftId);
    players.push([who, acc]);
  
    const ctc = acc.contract(backend, ctcAlice.getInfo());
  
    if(mode == 0) {
        while(true) {
          try {        
            const num = Math.floor(Math.random() * nftParams.numTickets) + 1;
            console.log(`${who} played: ${num}`);
            const p = await ctc.apis.Bobs.playNum(num);
    
            if(p) {
              console.log(`${num} not taken yet.`)
              break;
            } else {
              console.log(`${num} has already being taken.`)          
            }
          //  console.log(`${who} playeddd: ${p}`)

          } catch (e) {
            console.log(e)
            console.log(`${who} failed due to error`);
          }

          stdlib.wait(1)          
        }
     
    } else {
      try {
        const winNum = await ctc.apis.Winner.showWinner();
        console.log(`Winning number is: ${winNum}`);

        const num = await ctc.apis.Bobs.seeOutcome();
        console.log(`${who} ${OUTCOME[num]}`);
      
      } catch (e) {
        console.log(`${who} failed due to error`);
      }
    }

    showBalances(acc, who);
  }

  await play('Player 1', players[0]);
  await play('Player 2', players[1]);
  await play('Player 3', players[2]);

  while ( ! done ) {
      await stdlib.wait(1);
  }
}

await ctcAlice.participants.Alice({
  ...stdlib.hasRandom,
  getNum: (numTickets) => {
    const num = (Math.floor(Math.random() * numTickets) + 1);
    return num;
  },
  seeOutcome: () => {
    showBalances(accAlice, 'Alice');
  },
  startRaffle: () => {
    console.log(`The Raffle information is being sent to the contract`);
    return nftParams;
  },
  seeHash: (value) => {
    console.log(`Winning number HASH is: ${value}`);
    processBobs();
  },
  playingOver: (winNum) => {
    console.log(`Winning number is: ${winNum}`);
    mode = 1;
    processBobs();    
  }
  // implement Alice's interact object here
});


console.log('Goodbye, Alice and Bobs!');

done = true;
