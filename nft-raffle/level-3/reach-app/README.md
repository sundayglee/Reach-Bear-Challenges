### NFT Raffle Bear Challenge - Level 1

This is a repo for level 1 of the NFT Raffle challenge as per the video found here: [NFT Raffle | Reach [Workshops]](https://www.youtube.com/watch?v=vqZGqPtIrrohttps:/)

Go through the video to understand how the raffle works.

#### Sample Output

1. Make sure you have installed Reach compiler as per its documentation that can be found here [Reach quickstart](https://docs.reach.sh/quickstart/)

2. Run `REACH_CONNECTOR_MODE=ALGO ./reach run`


```js
Hello, Alice and Bob!
Launching...
Creator is creating the testing NFT
Starting backends...
The Raffle information is being sent to the contract
Winning number HASH is: 0xaec405ca5bde9a323d32c70c577aa4a75a4c191850f0068afe773f9ec9b91f1a
Your raffle number is: 4
The outcome is: Your number is not a match
The winning number is: 2
The outcome is: Your number is not a match
Goodbye, Alice and Bob!
```


```js
Error: invalid address or ENS name (argument="name", value=9.043528250887516e+47, code=INVALID_ARGUMENT, version=contracts/5.6.2)
    at b.makeError (reachsdk.min.js?7077:2:1023584)
    at b.throwError (reachsdk.min.js?7077:2:1023701)
    at b.throwArgumentError (reachsdk.min.js?7077:2:1023755)
    at eval (reachsdk.min.js?7077:2:1122235)
    at Generator.next (<anonymous>)
    at a (reachsdk.min.js?7077:2:1121737)
```
