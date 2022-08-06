## NFT Raffle - Reach Bear Challenge Level 3

### Introduction

This is a repo of level 3 submission of the NFT Raffle Challenge.

The requirement for the challenge can be found here: [NFT Raffle - The Tip Board Challenge ](https://drive.google.com/file/d/17ZNHSf4liJAGuadIGwy36FGayCI4O9uL/view)

It is kinda long, but since we learn from examples, i had to write all these to help all those comming to reach.

### Building and Running

The challenge contains 3 parts

1. [A Backend](./reach-app/index.rsh) - Written in Reach Lang
2. [A Test Script](./reach-app/index.mjs) - Written in Javascript
3. [A GUI Front End](./) - Written in NextJS

Each one of them can be run independently depending on what you want to achieve.

#### Reach Contract

1. To Compile only the Reach Lang Contract, navigate to the `reach-app` folder.
2. Download the Reach startup script, instructions can be found here: [Reach Docs](https://docs.reach.sh/quickstart/)
3. Run `./reach compile` to compile the contract into respective blockchain code. Note that you must have the `reach` script inside the `reach-app` directory.
4. The contract output will be found inside the build folder at `reach-app/build`

#### Run the test script

The test script is used just to verify all the logic of the contract are working correctly.
To run it do the following:

1. Ensure you are inside the `reach-app` folder
2. Run the command `REACH_CONNECTOR_MODE=ALGO ./reach run`. Here the ALGO connector is used, but you could use any of the other connectors available such as ETH or CFX.
3. The `reach` script will compile the code and run the test script.
4. Output would look something like below:

```js
Hello, Alice and Bobs!
Launching...
Creator is creating the testing NFT
Starting backends...
The Raffle information is being sent to the contract
Winning number HASH is: 0xcd0ea5e4dc8d21d5e3ce884442e1743c1b7111e0ae8aab69fe3815ee42f90250
Player 1 played: 1
1 not taken yet.
Player 1 has 99.99 ALGO and 0 Mona Lisa
Player 2 played: 4
4 not taken yet.
Player 2 has 99.99 ALGO and 0 Mona Lisa
Player 3 played: 2
2 not taken yet.
Player 3 has 99.99 ALGO and 0 Mona Lisa
Winning number is: 3
Winning number is: 3
Player 1 did not Win
Player 1 has 99.99 ALGO and 0 Mona Lisa
Winning number is: 3
Player 2 did not Win
Player 2 has 99.99 ALGO and 0 Mona Lisa
Winning number is: 3
Player 3 did not Win
Player 3 has 99.99 ALGO and 0 Mona Lisa
Goodbye, Alice and Bobs!
Alice has 99.98 ALGO and 1 Mona Lisa
```

#### Run the GUI

Running the GUI locally can be done by doing the following:

1. Ensure you are inside the `level-3` directory. It will contain a `package.json` file.
2. Install the required packages using the command `npm install`
3. Run the development server using the command `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)
5. Follow the Code Overview subsection to understand how it works.

### Code overview

The GUI application was built around the Reach backend code which is this [`reach-app/index.rsh`](./reach-app/index.rsh).
All the source code for the frontend, can be found in [`pages/index.js`](./pages/index.js) file.
General logic of the application is the following:

1. Alice deploy a contract
2. Alice generate a winning ticket number and publishes it as a secret hash.
3. The hash is displayed on the frontend.
4. Alice wait for the Bobs to choose their ticket numbers
5. Upto 3 Bob can attach to the contract.
6. Each Bob submit their ticket number
7. On each submission, the backend checks whether the ticket has been used or not
8. If it has already been taken, it request for Bob to choose another ticket
9. Bob chooses another ticket, if it is successfully, Bob get the message that the ticket number has been submited
10. Alice and Bob, wait for the timeout for stage 1 to complete. Stage 1 is the round in which each Bob select their ticket number and submit to the contract.
11. After the timeout, customizable by `deadline` variable on the frontend passes, Alice is prompted to show and submit the winning number.
12. The contract transition to stage 2 which is where the Bobs can claim their NFT if they won by clicking `See Outcome` button.
13. If Bob wins, Bob receives the NFT, If all the Bobs looses, the NFT is returned to Alice and the contract ends.

### Caveats

Since this was part of the Reach challenge, there are couple of caveats that should be known:

1. A real world smart contract should not terminate in each round. If a smart contract terminate in each round, then the deployer will be required to re-create the contract each time, which could be not productive.
2. The GUI shows, both Alice and Bob sides; normal contracts shows only the attacher side.
3. There are a lot of interaction between the backend and the frontend code, that consume gas fees. Real world contract should not have as many interaction as this has, since gas fee is expensive in a long run.
4. Alice waits for the round to complete,and then gets prompted to submit the winning number and transition the contract from stage 1 to 2. It is quite impossible in production for the deployer just to sit back and wait for the round to complete in order for them to transition the contract to next stage. An automated approach is highly advisable.
5. There is an error that pops out when the connector used is ETH when querying for NFT balance. The error looks like the one below and it says that the ENS name is invalid; honestly speaking, i couldn't solve it and didn't ask either; i will follow up on it to understand how to get around it. If i get a solution, i will update this.

   ```js
   Error: invalid address or ENS name (argument="name", value=9.043528250887516e+47, code=INVALID_ARGUMENT, version=contracts/5.6.2)
      at b.makeError (reachsdk.min.js?7077:2:1023584)
      at b.throwError (reachsdk.min.js?7077:2:1023701)
      at b.throwArgumentError (reachsdk.min.js?7077:2:1023755)
      at eval (reachsdk.min.js?7077:2:1122235)
      at Generator.next (<anonymous>)
      at a (reachsdk.min.js?7077:2:1121737)
   ```

   A workaround which was done to the code, was to set the NFT ID to 0 when the network is ETH, which in turn, made the function `balancesOf` return the NFT balance as the balance of the network token which shouldn't be.

   For now, simply use ALGO connector, to get consistent results.
6. Since there was no way to find the winner during stage 1 of the contract, and also to send the NFT automatically to the winner, one must claim their NFT using `See Outcome` button. This can't be avoided, since it is part of the logic of the contract design.
7. Honestly speaking, the GUI looks awful and does not have the nice things such as showing the contract is loading, disabling some section when the contract is at another level etc. Well, i didn't put them since I wanted to see what happens if someone violate the flow of execution of the contract. Try it as well if you wish to do so.
8. It might be me, or it might be because i am using one account variable, but you should not use the same browser when using Metamask for Ethereum. Metamask locks to the current connected address, and so when stage 2 of the contract reaches, and the smart contract require Alice to issue a transaction to submit their winning number, and you have just used Metamask second account for one of the Bobs, the contract gets a different address selected and it crashes since the interact tries to connect to Bobs account, when actually Alice address is required. Short tip is, USE TWO DIFFERENT BROWSERS(Eg. Firefox for Alice , Chrome for Bobs).

### Key Learnings and Tips

This has been fun and amazing challenge, since i got to create a full GUI contract using my own logic including the frontend implimentation.
Since this was meant for learning, then here are the key learning as well:

1. Maps in Reach are not iterable.

   - The reason behind that as i read from reach discord channel is that, `Maps` can't be too large due to memory limition of a contract, and can't be highly computation and so, they can't be iterable.
   - As such you can only store values but can't iterate through them.
   - Maps constructed using `new Set()` are equivalent to `new Map(Null)` and are used to track addresses only.
   - When creating `Map(UInt)`, there is an index created as well for `Addresses` so that `Map[this] = 17`, means a value `17` was saved into the map by a user with address `this`.
   - Since Maps are cannot be iterable by `forEach` for example, you have to find another method to find who has played what. To achieve that, this is why there is a second stage where a user has to claim their rewards in which case, when the user access the contract, we use `numPlayed[this]` which will return the published number from the user, and compare it with the `winningNum`. This also has a drawback since Alice will not be able to know the winner address beforehand till the winner claim their reward. Ofcorse there might be other ways to achieve this or it is how consensus network works; but for now, i don't have that answer.
2. Don't use `useState` to track realtime data

   - I learnt this the hard way, `useState` is asynchronous. This is to say, if you want a varable to be updated immediately, it might be updated a bit later. Things like contract context that are meant to be used imediately should use `useRef` instead.
3. The Reach `BigNumber` variables

   - When developing a commandline applicaton, when you log a number from the reach contract, it logs just fine, since `console.log` automatically convert the `BigNumber` to javascript `Int`.
   - So when you try to do the same on the frontend, you will get an error concerning `BigNubmer` can't be displayed and blah blah blah.
   - You have to covert the `BigNumber` to `Int` first before using it.
   - Reach standard library has a function for that `stdlib.parseInt()` but somehow, i was not able to get it to work. Instead i used the standard javascript function `toNumber()`. It might be i am confusing the datatype formats, but if one knows, what i am doing wrong, just be the light on my way and I will appreciate it.
4. Each time you call `interact`, it invokes a transaction.

   - To avoid spending too much gas fees, combine the interact into one function, and do the `interact` only if it is highly required.
   - This app has a lot of `interact` calls, and as such it is not economical, and honestly speaking, very annoying to the user since you have to confirm a lot of dialogs.
   - To all new developer out there -> reduce the number of `interact` calls as much as possible.
   - This goes with the `api` calls as well.
   - You could use `View` or `Events` maybe to achieve some of the functionality that require calling the frontend, but well didn't go that road for this one.
5. Use `array` to track a series of data such as to check whether a number has been picked or not

   - A little backstory; One of the requirement of the challenge, was to ensure the same ticket number is not submitted twice.
   - This requirement sounds easy, but it real is not.
   - Quick thought, you might think, let me use `Map` since i used it to track addresses. You will hit a road block pretty soon since, in`Map` you cannot iterate over the values of `Maps`, and so you cannot check which value is which.
   - Best alternative i found, was to use `array`. But an `array` in Reach needs to be of fixed length.
   - When you create a fixed length `array` you hit another road block that, all variables in Reach are constants.
   - This is to say, you can create an array, but you can not edit it either and so you cannot dynamically store the numbers that have been played one after onother into that array.
   - The way to achive looping over an array, is to use a combination of `parallelReduce` and a `loop variable` that has the same signature as the constant array before the loop.
   - So, you create a fixed legth array just before a `parallelReduce` with same template as the values you wish to store inside. If its an `UInt`, then simply create an array of fixed length with your desired `UInt` replicated all over the array.
   - Then, create a `parallelReduce` loop variable, and initialize it with constant length of array from above.
   - Since loop variables can be changed during execution, such as the ones before a `while` loop, then in each iteration of `parallelReduce` you replace the initial fixed length `array`, with a new array that has same length and variables as the original fixed length array.
   - Then you simply update the loop variable accordingly by re-creating a new fixed length array with same footprint as the privious one, and just update the value at your particular index according to your requirement and do the same thing over and over in each loop.
   - Since, array has a `inludes`, `forEach`, `reduce`,etc operations, you can simply do those operation into the array copy and check the result.
   - For details, check my implimentation or the FOMO Workshop from the Reach example folder.
6. Create trust yourself through assert, require, check and assumes in your contract code

   - One of the amazing features of reach is that it does code verification during compilation thats why it is termed as the safest blockchain programing language.
   - If your code doesn't pass the theorem and verfication, it fails to compile with details of the issues.
   - There are couple of them, but notably, the following are common:
     - NO Participants are honest of theorem ...
       - These theorem aims to ensure that, a dishonest participant will not submit information that will compromise the contract.
       - Something to note on the error is that, it tells you that `of theorem assert`. This is a clue that, you need to use `assert` to satify the theorem.
     - ALL Participants are honest
       - These verification fails, normally comes with a message `Balance not zero at exit` meaning there are some funds remaining inside the contract during application exit.
       - Simply ensure the balance is transfered to someone before the application exit in order to satisfy reach linearity property.
   - There are others, but the most important thing is the following as taken from the [Reach Docs](https://docs.reach.sh/model/#p_30)
     > An assertion is either: a knowledge assertion, which is a claim that one honest participant cannot know something that another honest participant does know; a static assertion, which is an always-true formula; an assumption, which is a true formula if frontends behave honestly; a requirement, which is a true formula if participants behave honestly; or, a possibility assertion, which is a formula for which there exists some values that honest participants and frontends could submit which results in the truth of the formula. An honest participant is one that executes the steps specified by the DApp, while an honest frontend is one that only returns values which ensure that all assumptions evaluate to the boolean true
     >
   - So, if you meet such errors especially for contracts involving `parallelReduce`, `while` or `fork`, then do as the statements above says
     - If participants are not honest, add `assert` to your variables
     - If frontend are not honest, add `assume`statements for your variables
     - For each `assume` a respective `require` should be added as well
     - If you are not sure, there are some places that you can use `check` and the compiler will add appropriate actions(ie. `require` or `assume`) at the place you placed `check` statement.
   - For a beginner, do not use the short API backend notation `api_`, use the longer version `api` since it gives you more room for adding `assume`, `require`, `check`,etc and is more verbose. If you master it, then you can move to the shorter `api_` version since you will know exactly what to do if a theorem fails.
   - Lastly, read this guide on which and [How and What to verify](https://docs.reach.sh/guide/assert/) as well as [How to find loop invariant](https://docs.reach.sh/guide/loop-invs/).
7. Lastly, if you don't know yet, the deployer only should use `participant` notation, all the others should use `api`.

   - API provide a more better way for interact as it does not require a participant to stand and wait for a prompt.
   - Don't use `participantClass` since it is an old model, and people are adviced to use `api` instead.

These are just my opinion, and should not be taken as law. Do your own research and don't afraid to ask questions especially in the [Reach Discord Channel](https://discord.com/invite/enXXM8xfG7).

Again, Reach looks easy, but its not. Practice, Practice, Practice.

### Conclusion

Reach is fun and amazing! It looks simple, but it realy is not.
Advice for anyone starting in Reach, build and test, build and test; the more you build, the better you become.
Thank you Reach team as well for starting these Reach weekly challenges. Without them, i wouldn't have been able to learn so much about Reach while getting paid doing it.

Keep up the amazing work!
