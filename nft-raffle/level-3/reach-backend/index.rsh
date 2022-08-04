'reach 0.1';

const amt = 1;
const MUInt = Maybe(UInt);

const NUM_OF_USERS = 3;
const NUM_OF_TICKETS = 10;

const [isWinner, WINNER, LOOSER] = makeEnum(2);

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    ...hasRandom,
    startRaffle: Fun([], Object({
      nftId: Token,
      numTickets: UInt,
      deadline: UInt
    })),
    seeHash: Fun([Digest], Null),
    getNum: Fun([UInt], UInt),
    seeOutcome: Fun([], Null),
    playingOver: Fun([UInt], Null)
  });

  const B = API('Bobs', {
    // Specify Bob's interact interface here
    playNum: Fun([UInt], Bool),
    seeOutcome: Fun([], UInt)
  });

  const C = API('Winner', {
    showWinner: Fun([], UInt)
  });

  init();

  A.only(() => {
    const { nftId, numTickets, deadline } = declassify(interact.startRaffle());
    const _winningNum = interact.getNum(numTickets);
    const [_commitA, _saltA] = makeCommitment(interact, _winningNum);
    const commitA = declassify(_commitA);
  })
  // The first one to publish deploys the contract
  A.publish(nftId, numTickets, deadline, commitA);

  A.interact.seeHash(commitA);
  commit();

  A.pay([[amt, nftId]]);
  commit();
  A.publish()

  const v = 0;
  const p = Array.replicate(NUM_OF_TICKETS, v);
  const numPlayed = new Map(UInt);

  const [keepGoing, q, howMany] = parallelReduce([true, p,  0])
    .invariant(balance() == 0)
    .while(keepGoing)
    .api(
      B.playNum,
      // Assumes Expression
      ((num) => {
        assume(this != A, 'A deployer cannot participate');
        assume(isNone(numPlayed[this]))
      }),
      // Payments Expressinn
      ((_) => 0),
      // Consensus Expressinn
      ((num, reply) => {
        require(this != A, 'A deployer cannot participate');
        require(isNone(numPlayed[this]))
       // reply(num);
       
        const maxR = howMany < NUM_OF_USERS ? true : false

        const i = howMany % NUM_OF_TICKETS;
        const s = Foldable.includes(q, num)

        if(s) {
          // The number was taken already, so choose another one
          reply(false);
        } else {
          // The number has not being taken previously, so we save it
          numPlayed[this] = num;
          reply(true);
        }

        const pn = Array.set(q, i, num)

        return [maxR, pn, s == false ? howMany + 1 : howMany ];
      })
    )
    .timeout(relativeTime(deadline), () => {
      Anybody.publish();
      return [false, q, howMany];
    });

  commit();

  A.only(() => {
    const saltA = declassify(_saltA);
    const winningNum = declassify(_winningNum);
  });

  A.publish(saltA, winningNum);
  checkCommitment(commitA, saltA, winningNum);

  A.interact.playingOver(winningNum);

  const tP = howMany;

  const [kG, hM] = parallelReduce([true, 0])
    .invariant(balance() == 0)
    .while(kG)
    .api(
      B.seeOutcome,
      // Assumes Expression
      (() => {
        assume(this != A, 'A deployer cannot participate');
        assume(amt > 0, 'Amount insufficient for transfer');
        assume(balance(nftId) > 0, 'NFT Balance insufficient for transfer');
      }),
      // Payments Expressinn
      (() => 0),
      // Consensus Expressinn
      ((reply) => {
        require(this != A, 'A deployer cannot participate');
        require(amt > 0, 'Amount insufficient for transfer');
        require(balance(nftId) > 0, 'NFT Balance insufficient for transfer');
        const wN = (numPlayed[this] == MUInt.Some(winningNum)) ? WINNER: LOOSER;
        reply(wN);

        if (wN == WINNER) {          
          transfer([0, [amt, nftId]]).to(this);          
        } 

        const maxR = hM < tP ? true : false
        return [maxR, hM + 1];
      })
    ).api_(C.showWinner, () => {
      return [0, (k) => {
        k(winningNum);
        return [true, hM];
      }];
    }
    ).timeout(relativeTime(deadline), () => {
      Anybody.publish();
      return [false, hM];
    });


  transfer(balance(nftId), nftId).to(A);

  A.interact.seeOutcome();

  commit();
  exit();
});
