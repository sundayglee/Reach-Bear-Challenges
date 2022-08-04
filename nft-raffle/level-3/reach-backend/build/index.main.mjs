// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Data({
    None: ctc8,
    Some: ctc2
    });
  const map0_ctc = ctc9;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc3, ctc6],
      2: [ctc0, ctc1, ctc2, ctc3, ctc6],
      4: [ctc0, ctc1, ctc2, ctc3, ctc2, ctc6],
      7: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc6, ctc2],
      8: [ctc0, ctc1, ctc2, ctc3, ctc2, ctc7, ctc6, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Object({
    deadline: ctc1,
    nftId: ctc3,
    numTickets: ctc1
    });
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Data({
    Bobs_seeOutcome0_228: ctc13,
    Winner_showWinner0_228: ctc13
    });
  const ctc15 = stdlib.T_Tuple([ctc2]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v434 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v435 = [v434];
  const v441 = stdlib.protect(ctc4, await interact.startRaffle(), {
    at: './index.rsh:40:76:application',
    fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:13:function exp)'],
    msg: 'startRaffle',
    who: 'Alice'
    });
  const v442 = v441.deadline;
  const v443 = v441.nftId;
  const v444 = v441.numTickets;
  const v448 = stdlib.protect(ctc1, await interact.getNum(v444), {
    at: './index.rsh:41:40:application',
    fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:13:function exp)'],
    msg: 'getNum',
    who: 'Alice'
    });
  const v449 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:42:46:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:13:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v450 = stdlib.digest(ctc5, [v449, v448]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v443, v444, v442, v450],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc1, ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:46:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v453, v454, v455, v456], secs: v458, time: v457, didSend: v42, from: v452 } = txn1;
      
      const v459 = v435[stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, '0')];
      const v461 = v459[stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, '1')];
      const v462 = v459[stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, '2')];
      const v463 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v461, v462];
      const v464 = stdlib.Array_set(v435, stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, '0'), v463);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v453
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v453, v454, v455, v456], secs: v458, time: v457, didSend: v42, from: v452 } = txn1;
  const v459 = v435[stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, '0')];
  const v461 = v459[stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, '1')];
  const v462 = v459[stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, '2')];
  const v463 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v461, v462];
  const v464 = stdlib.Array_set(v435, stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, '0'), v463);
  ;
  ;
  stdlib.protect(ctc0, await interact.seeHash(v456), {
    at: './index.rsh:48:21:application',
    fs: ['at ./index.rsh:48:21:application call to [unknown function] (defined at: ./index.rsh:48:21:function exp)', 'at ./index.rsh:48:21:application call to "liftedInteract" (defined at: ./index.rsh:48:21:application)'],
    msg: 'seeHash',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v452, v453, v455, v456, v464],
    evt_cnt: 0,
    funcNum: 1,
    lct: v457,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'), v453]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v469, time: v468, didSend: v53, from: v467 } = txn2;
      
      ;
      const v470 = v464[stdlib.checkedBigNumberify('./index.rsh:51:5:dot', stdlib.UInt_max, '0')];
      const v471 = v470[stdlib.checkedBigNumberify('./index.rsh:51:5:dot', stdlib.UInt_max, '0')];
      const v472 = stdlib.add(v471, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'));
      const v475 = v470[stdlib.checkedBigNumberify('./index.rsh:51:5:dot', stdlib.UInt_max, '1')];
      const v476 = v470[stdlib.checkedBigNumberify('./index.rsh:51:5:dot', stdlib.UInt_max, '2')];
      const v477 = [v472, v475, v476];
      const v478 = stdlib.Array_set(v464, stdlib.checkedBigNumberify('./index.rsh:51:5:dot', stdlib.UInt_max, '0'), v477);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v453
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc3, ctc1, ctc6, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v469, time: v468, didSend: v53, from: v467 } = txn2;
  ;
  const v470 = v464[stdlib.checkedBigNumberify('./index.rsh:51:5:dot', stdlib.UInt_max, '0')];
  const v471 = v470[stdlib.checkedBigNumberify('./index.rsh:51:5:dot', stdlib.UInt_max, '0')];
  const v472 = stdlib.add(v471, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'));
  const v475 = v470[stdlib.checkedBigNumberify('./index.rsh:51:5:dot', stdlib.UInt_max, '1')];
  const v476 = v470[stdlib.checkedBigNumberify('./index.rsh:51:5:dot', stdlib.UInt_max, '2')];
  const v477 = [v472, v475, v476];
  const v478 = stdlib.Array_set(v464, stdlib.checkedBigNumberify('./index.rsh:51:5:dot', stdlib.UInt_max, '0'), v477);
  ;
  const v479 = stdlib.addressEq(v452, v467);
  stdlib.assert(v479, {
    at: './index.rsh:51:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn3 = await (ctc.sendrecv({
    args: [v452, v453, v455, v456, v478],
    evt_cnt: 0,
    funcNum: 2,
    lct: v468,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:53:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v482, time: v481, didSend: v58, from: v480 } = txn3;
      
      ;
      const v485 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v487 = stdlib.checkedBigNumberify('./index.rsh:59:61:decimal', stdlib.UInt_max, '0');
      const v488 = true;
      const v489 = v485;
      const v490 = v481;
      const v496 = v478;
      
      if (await (async () => {
        
        return v488;})()) {
        const v506 = stdlib.add(v490, v455);
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc3, ctc1, ctc6, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v482, time: v481, didSend: v58, from: v480 } = txn3;
  ;
  const v483 = stdlib.addressEq(v452, v480);
  stdlib.assert(v483, {
    at: './index.rsh:53:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v485 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  let v487 = stdlib.checkedBigNumberify('./index.rsh:59:61:decimal', stdlib.UInt_max, '0');
  let v488 = true;
  let v489 = v485;
  let v490 = v481;
  let v496 = v478;
  
  while (await (async () => {
    
    return v488;})()) {
    const v506 = stdlib.add(v490, v455);
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc7],
      timeoutAt: ['time', v506],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v452, v453, v455, v456, v487, v489, v496, v506],
        evt_cnt: 0,
        funcNum: 9,
        lct: v490,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:97:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v573, time: v572, didSend: v200, from: v571 } = txn5;
          
          ;
          const cv487 = v487;
          const cv488 = false;
          const cv489 = v489;
          const cv490 = v572;
          const cv496 = v496;
          
          await (async () => {
            const v487 = cv487;
            const v488 = cv488;
            const v489 = cv489;
            const v490 = cv490;
            const v496 = cv496;
            
            if (await (async () => {
              
              return v488;})()) {
              const v506 = stdlib.add(v490, v455);
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc9, ctc3, ctc1, ctc6, ctc1, ctc10, ctc12, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v573, time: v572, didSend: v200, from: v571 } = txn5;
      ;
      const v574 = stdlib.addressEq(v452, v571);
      stdlib.assert(v574, {
        at: './index.rsh:97:15:dot',
        fs: ['at ./index.rsh:96:41:application call to [unknown function] (defined at: ./index.rsh:96:41:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      const cv487 = v487;
      const cv488 = false;
      const cv489 = v489;
      const cv490 = v572;
      const cv496 = v496;
      
      v487 = cv487;
      v488 = cv488;
      v489 = cv489;
      v490 = cv490;
      v496 = cv496;
      
      continue;
      }
    else {
      const {data: [v523], secs: v525, time: v524, didSend: v136, from: v522 } = txn4;
      undefined /* setApiDetails */;
      const v527 = v523[stdlib.checkedBigNumberify('./index.rsh:62:9:spread', stdlib.UInt_max, '0')];
      ;
      const v529 = stdlib.addressEq(v522, v452);
      const v530 = v529 ? false : true;
      stdlib.assert(v530, {
        at: './index.rsh:73:16:application',
        fs: ['at ./index.rsh:72:7:application call to [unknown function] (defined at: ./index.rsh:72:7:function exp)'],
        msg: 'A deployer cannot participate',
        who: 'Alice'
        });
      const v531 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v522), null);
      let v532;
      switch (v531[0]) {
        case 'None': {
          const v533 = v531[1];
          v532 = true;
          
          break;
          }
        case 'Some': {
          const v534 = v531[1];
          v532 = false;
          
          break;
          }
        }
      stdlib.assert(v532, {
        at: './index.rsh:74:16:application',
        fs: ['at ./index.rsh:72:7:application call to [unknown function] (defined at: ./index.rsh:72:7:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v535 = stdlib.lt(v487, stdlib.checkedBigNumberify('./index.rsh:6:22:decimal', stdlib.UInt_max, '3'));
      const v537 = stdlib.mod(v487, stdlib.checkedBigNumberify('./index.rsh:7:24:decimal', stdlib.UInt_max, '10'));
      const v538 = await stdlib.Array_asyncReduce([v489], false, async([v540], v539, v541) => {
        const v542 = stdlib.eq(v527, v540);
        const v544 = v539 ? v539 : v542;
        
        return v544;})
      if (v538) {
        const v545 = false;
        await txn4.getOutput('Bobs_playNum', 'v545', ctc8, v545);
        const v553 = stdlib.Array_set(v489, v537, v527);
        const cv487 = v487;
        const cv488 = v535;
        const cv489 = v553;
        const cv490 = v524;
        const cv496 = v496;
        
        v487 = cv487;
        v488 = cv488;
        v489 = cv489;
        v490 = cv490;
        v496 = cv496;
        
        continue;}
      else {
        await stdlib.mapSet(map0, v522, v527);
        const v558 = true;
        await txn4.getOutput('Bobs_playNum', 'v558', ctc8, v558);
        const v566 = stdlib.Array_set(v489, v537, v527);
        const v568 = stdlib.add(v487, stdlib.checkedBigNumberify('./index.rsh:93:50:decimal', stdlib.UInt_max, '1'));
        const cv487 = v568;
        const cv488 = v535;
        const cv489 = v566;
        const cv490 = v524;
        const cv496 = v496;
        
        v487 = cv487;
        v488 = cv488;
        v489 = cv489;
        v490 = cv490;
        v496 = cv496;
        
        continue;}}
    
    }
  const txn4 = await (ctc.sendrecv({
    args: [v452, v453, v455, v456, v487, v496, v449, v448],
    evt_cnt: 2,
    funcNum: 4,
    lct: v490,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:108:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v580, v581], secs: v583, time: v582, didSend: v211, from: v579 } = txn4;
      
      ;
      
      const v588 = stdlib.checkedBigNumberify('./index.rsh:115:42:decimal', stdlib.UInt_max, '0');
      const v589 = true;
      const v590 = v582;
      const v596 = v496;
      
      if (await (async () => {
        
        return v589;})()) {
        const v606 = stdlib.add(v590, v455);
        sim_r.isHalt = false;
        }
      else {
        const v745 = v596[stdlib.checkedBigNumberify('./index.rsh:155:19:application', stdlib.UInt_max, '0')];
        const v746 = v745[stdlib.checkedBigNumberify('./index.rsh:155:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v452,
          tok: v453
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v453
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc3, ctc1, ctc6, ctc1, ctc12, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v580, v581], secs: v583, time: v582, didSend: v211, from: v579 } = txn4;
  ;
  const v584 = stdlib.addressEq(v452, v579);
  stdlib.assert(v584, {
    at: './index.rsh:108:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v585 = stdlib.digest(ctc5, [v580, v581]);
  const v586 = stdlib.digestEq(v456, v585);
  stdlib.assert(v586, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:109:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.playingOver(v581), {
    at: './index.rsh:111:25:application',
    fs: ['at ./index.rsh:111:25:application call to [unknown function] (defined at: ./index.rsh:111:25:function exp)', 'at ./index.rsh:111:25:application call to "liftedInteract" (defined at: ./index.rsh:111:25:application)'],
    msg: 'playingOver',
    who: 'Alice'
    });
  
  let v588 = stdlib.checkedBigNumberify('./index.rsh:115:42:decimal', stdlib.UInt_max, '0');
  let v589 = true;
  let v590 = v582;
  let v596 = v496;
  
  while (await (async () => {
    
    return v589;})()) {
    const v606 = stdlib.add(v590, v455);
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc14],
      timeoutAt: ['time', v606],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v452, v453, v455, v487, v581, v588, v596, v606],
        evt_cnt: 0,
        funcNum: 7,
        lct: v590,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:150:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v741, time: v740, didSend: v355, from: v739 } = txn6;
          
          ;
          const cv588 = v588;
          const cv589 = false;
          const cv590 = v740;
          const cv596 = v596;
          
          await (async () => {
            const v588 = cv588;
            const v589 = cv589;
            const v590 = cv590;
            const v596 = cv596;
            
            if (await (async () => {
              
              return v589;})()) {
              const v606 = stdlib.add(v590, v455);
              sim_r.isHalt = false;
              }
            else {
              const v745 = v596[stdlib.checkedBigNumberify('./index.rsh:155:19:application', stdlib.UInt_max, '0')];
              const v746 = v745[stdlib.checkedBigNumberify('./index.rsh:155:19:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v452,
                tok: v453
                });
              
              sim_r.txns.push({
                kind: 'halt',
                tok: v453
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc9, ctc3, ctc1, ctc1, ctc1, ctc1, ctc12, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v741, time: v740, didSend: v355, from: v739 } = txn6;
      ;
      const v742 = stdlib.addressEq(v452, v739);
      stdlib.assert(v742, {
        at: './index.rsh:150:15:dot',
        fs: ['at ./index.rsh:149:42:application call to [unknown function] (defined at: ./index.rsh:149:42:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      const cv588 = v588;
      const cv589 = false;
      const cv590 = v740;
      const cv596 = v596;
      
      v588 = cv588;
      v589 = cv589;
      v590 = cv590;
      v596 = cv596;
      
      continue;
      }
    else {
      const {data: [v632], secs: v634, time: v633, didSend: v299, from: v631 } = txn5;
      switch (v632[0]) {
        case 'Bobs_seeOutcome0_228': {
          const v635 = v632[1];
          undefined /* setApiDetails */;
          ;
          const v642 = stdlib.addressEq(v631, v452);
          const v643 = v642 ? false : true;
          stdlib.assert(v643, {
            at: './index.rsh:130:16:application',
            fs: ['at ./index.rsh:129:7:application call to [unknown function] (defined at: ./index.rsh:129:7:function exp)'],
            msg: 'A deployer cannot participate',
            who: 'Alice'
            });
          const v644 = v596[stdlib.checkedBigNumberify('./index.rsh:132:24:application', stdlib.UInt_max, '0')];
          const v645 = v644[stdlib.checkedBigNumberify('./index.rsh:132:24:application', stdlib.UInt_max, '0')];
          const v646 = stdlib.gt(v645, stdlib.checkedBigNumberify('./index.rsh:132:34:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v646, {
            at: './index.rsh:132:16:application',
            fs: ['at ./index.rsh:129:7:application call to [unknown function] (defined at: ./index.rsh:129:7:function exp)'],
            msg: 'NFT Balance insufficient for transfer',
            who: 'Alice'
            });
          const v647 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v631), null);
          const v648 = ['Some', v581];
          const v649 = stdlib.digest(ctc15, [v647]);
          const v651 = stdlib.digest(ctc15, [v648]);
          const v652 = stdlib.digestEq(v649, v651);
          const v653 = v652 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          await txn5.getOutput('Bobs_seeOutcome', 'v653', ctc1, v653);
          const v659 = stdlib.eq(v653, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v659) {
            const v665 = stdlib.sub(v645, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'));
            const v668 = v644[stdlib.checkedBigNumberify('./index.rsh:137:41:application', stdlib.UInt_max, '1')];
            const v669 = v644[stdlib.checkedBigNumberify('./index.rsh:137:41:application', stdlib.UInt_max, '2')];
            const v670 = [v665, v668, v669];
            const v671 = stdlib.Array_set(v596, stdlib.checkedBigNumberify('./index.rsh:137:41:application', stdlib.UInt_max, '0'), v670);
            ;
            const v672 = stdlib.lt(v588, v487);
            const v674 = stdlib.add(v588, stdlib.checkedBigNumberify('./index.rsh:141:28:decimal', stdlib.UInt_max, '1'));
            const cv588 = v674;
            const cv589 = v672;
            const cv590 = v633;
            const cv596 = v671;
            
            v588 = cv588;
            v589 = cv589;
            v590 = cv590;
            v596 = cv596;
            
            continue;}
          else {
            const v676 = stdlib.lt(v588, v487);
            const v678 = stdlib.add(v588, stdlib.checkedBigNumberify('./index.rsh:141:28:decimal', stdlib.UInt_max, '1'));
            const cv588 = v678;
            const cv589 = v676;
            const cv590 = v633;
            const cv596 = v596;
            
            v588 = cv588;
            v589 = cv589;
            v590 = cv590;
            v596 = cv596;
            
            continue;}
          break;
          }
        case 'Winner_showWinner0_228': {
          const v687 = v632[1];
          undefined /* setApiDetails */;
          ;
          await txn5.getOutput('Winner_showWinner', 'v581', ctc1, v581);
          const cv588 = v588;
          const cv589 = true;
          const cv590 = v633;
          const cv596 = v596;
          
          v588 = cv588;
          v589 = cv589;
          v590 = cv590;
          v596 = cv596;
          
          continue;
          break;
          }
        }}
    
    }
  const v745 = v596[stdlib.checkedBigNumberify('./index.rsh:155:19:application', stdlib.UInt_max, '0')];
  const v746 = v745[stdlib.checkedBigNumberify('./index.rsh:155:19:application', stdlib.UInt_max, '0')];
  ;
  stdlib.protect(ctc0, await interact.seeOutcome(), {
    at: './index.rsh:157:24:application',
    fs: ['at ./index.rsh:157:24:application call to [unknown function] (defined at: ./index.rsh:157:24:function exp)', 'at ./index.rsh:157:24:application call to "liftedInteract" (defined at: ./index.rsh:157:24:application)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  
  
  };
export async function _Bobs_playNum8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bobs_playNum8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bobs_playNum8 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v452, v453, v455, v456, v487, v489, v496, v506] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc3, ctc4, ctc1, ctc5, ctc1, ctc6, ctc9, ctc1]);
  const v508 = ctc.selfAddress();
  const v510 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:65:7:application call to [unknown function] (defined at: ./index.rsh:65:7:function exp)', 'at ./index.rsh:65:7:application call to [unknown function] (defined at: ./index.rsh:65:7:function exp)'],
    msg: 'in',
    who: 'Bobs_playNum'
    });
  const v514 = stdlib.addressEq(v508, v452);
  const v515 = v514 ? false : true;
  stdlib.assert(v515, {
    at: './index.rsh:66:15:application',
    fs: ['at ./index.rsh:65:7:application call to [unknown function] (defined at: ./index.rsh:65:14:function exp)', 'at ./index.rsh:65:7:application call to [unknown function] (defined at: ./index.rsh:65:7:function exp)', 'at ./index.rsh:65:7:application call to [unknown function] (defined at: ./index.rsh:65:7:function exp)'],
    msg: 'A deployer cannot participate',
    who: 'Bobs_playNum'
    });
  const v516 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v508), null);
  let v517;
  switch (v516[0]) {
    case 'None': {
      const v518 = v516[1];
      v517 = true;
      
      break;
      }
    case 'Some': {
      const v519 = v516[1];
      v517 = false;
      
      break;
      }
    }
  stdlib.assert(v517, {
    at: './index.rsh:67:15:application',
    fs: ['at ./index.rsh:65:7:application call to [unknown function] (defined at: ./index.rsh:65:14:function exp)', 'at ./index.rsh:65:7:application call to [unknown function] (defined at: ./index.rsh:65:7:function exp)', 'at ./index.rsh:65:7:application call to [unknown function] (defined at: ./index.rsh:65:7:function exp)'],
    msg: null,
    who: 'Bobs_playNum'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v452, v453, v455, v456, v487, v489, v496, v506, v510],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:70:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v523], secs: v525, time: v524, didSend: v136, from: v522 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bobs_playNum"
        });
      const v527 = v523[stdlib.checkedBigNumberify('./index.rsh:62:9:spread', stdlib.UInt_max, '0')];
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v522), null);
      const v535 = stdlib.lt(v487, stdlib.checkedBigNumberify('./index.rsh:6:22:decimal', stdlib.UInt_max, '3'));
      const v537 = stdlib.mod(v487, stdlib.checkedBigNumberify('./index.rsh:7:24:decimal', stdlib.UInt_max, '10'));
      const v538 = await stdlib.Array_asyncReduce([v489], false, async([v540], v539, v541) => {
        const v542 = stdlib.eq(v527, v540);
        const v544 = v539 ? v539 : v542;
        
        return v544;})
      if (v538) {
        const v545 = false;
        const v546 = await txn1.getOutput('Bobs_playNum', 'v545', ctc7, v545);
        
        const v553 = stdlib.Array_set(v489, v537, v527);
        const v1208 = v487;
        const v1210 = v553;
        const v1212 = v496;
        if (v535) {
          const v1213 = stdlib.add(v524, v455);
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      else {
        await stdlib.simMapSet(sim_r, 0, v522, v527);
        const v558 = true;
        const v559 = await txn1.getOutput('Bobs_playNum', 'v558', ctc7, v558);
        
        const v566 = stdlib.Array_set(v489, v537, v527);
        const v568 = stdlib.add(v487, stdlib.checkedBigNumberify('./index.rsh:93:50:decimal', stdlib.UInt_max, '1'));
        const v1265 = v568;
        const v1267 = v566;
        const v1269 = v496;
        if (v535) {
          const v1270 = stdlib.add(v524, v455);
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc5, ctc1, ctc6, ctc9, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v523], secs: v525, time: v524, didSend: v136, from: v522 } = txn1;
  undefined /* setApiDetails */;
  const v527 = v523[stdlib.checkedBigNumberify('./index.rsh:62:9:spread', stdlib.UInt_max, '0')];
  ;
  const v529 = stdlib.addressEq(v522, v452);
  const v530 = v529 ? false : true;
  stdlib.assert(v530, {
    at: './index.rsh:73:16:application',
    fs: ['at ./index.rsh:72:7:application call to [unknown function] (defined at: ./index.rsh:72:7:function exp)'],
    msg: 'A deployer cannot participate',
    who: 'Bobs_playNum'
    });
  const v531 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v522), null);
  let v532;
  switch (v531[0]) {
    case 'None': {
      const v533 = v531[1];
      v532 = true;
      
      break;
      }
    case 'Some': {
      const v534 = v531[1];
      v532 = false;
      
      break;
      }
    }
  stdlib.assert(v532, {
    at: './index.rsh:74:16:application',
    fs: ['at ./index.rsh:72:7:application call to [unknown function] (defined at: ./index.rsh:72:7:function exp)'],
    msg: null,
    who: 'Bobs_playNum'
    });
  const v535 = stdlib.lt(v487, stdlib.checkedBigNumberify('./index.rsh:6:22:decimal', stdlib.UInt_max, '3'));
  const v537 = stdlib.mod(v487, stdlib.checkedBigNumberify('./index.rsh:7:24:decimal', stdlib.UInt_max, '10'));
  const v538 = await stdlib.Array_asyncReduce([v489], false, async([v540], v539, v541) => {
    const v542 = stdlib.eq(v527, v540);
    const v544 = v539 ? v539 : v542;
    
    return v544;})
  if (v538) {
    const v545 = false;
    const v546 = await txn1.getOutput('Bobs_playNum', 'v545', ctc7, v545);
    if (v136) {
      stdlib.protect(ctc0, await interact.out(v523, v546), {
        at: './index.rsh:63:7:application',
        fs: ['at ./index.rsh:63:7:application call to [unknown function] (defined at: ./index.rsh:63:7:function exp)', 'at ./index.rsh:84:16:application call to "reply" (defined at: ./index.rsh:72:7:function exp)', 'at ./index.rsh:72:7:application call to [unknown function] (defined at: ./index.rsh:72:7:function exp)'],
        msg: 'out',
        who: 'Bobs_playNum'
        });
      }
    else {
      }
    
    const v553 = stdlib.Array_set(v489, v537, v527);
    const v1208 = v487;
    const v1210 = v553;
    const v1212 = v496;
    if (v535) {
      const v1213 = stdlib.add(v524, v455);
      return;
      }
    else {
      return;
      }}
  else {
    await stdlib.mapSet(map0, v522, v527);
    const v558 = true;
    const v559 = await txn1.getOutput('Bobs_playNum', 'v558', ctc7, v558);
    if (v136) {
      stdlib.protect(ctc0, await interact.out(v523, v559), {
        at: './index.rsh:63:7:application',
        fs: ['at ./index.rsh:63:7:application call to [unknown function] (defined at: ./index.rsh:63:7:function exp)', 'at ./index.rsh:88:16:application call to "reply" (defined at: ./index.rsh:72:7:function exp)', 'at ./index.rsh:72:7:application call to [unknown function] (defined at: ./index.rsh:72:7:function exp)'],
        msg: 'out',
        who: 'Bobs_playNum'
        });
      }
    else {
      }
    
    const v566 = stdlib.Array_set(v489, v537, v527);
    const v568 = stdlib.add(v487, stdlib.checkedBigNumberify('./index.rsh:93:50:decimal', stdlib.UInt_max, '1'));
    const v1265 = v568;
    const v1267 = v566;
    const v1269 = v496;
    if (v535) {
      const v1270 = stdlib.add(v524, v455);
      return;
      }
    else {
      return;
      }}
  
  
  };
export async function _Bobs_seeOutcome7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bobs_seeOutcome7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bobs_seeOutcome7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Bobs_seeOutcome0_228: ctc8,
    Winner_showWinner0_228: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc2]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v452, v453, v455, v487, v581, v588, v596, v606] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1]);
  const v608 = ctc.selfAddress();
  const v610 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:121:7:application call to [unknown function] (defined at: ./index.rsh:121:7:function exp)', 'at ./index.rsh:115:34:application call to "runBobs_seeOutcome0_228" (defined at: ./index.rsh:118:9:function exp)', 'at ./index.rsh:115:34:application call to [unknown function] (defined at: ./index.rsh:115:34:function exp)'],
    msg: 'in',
    who: 'Bobs_seeOutcome'
    });
  const v612 = stdlib.addressEq(v608, v452);
  const v613 = v612 ? false : true;
  stdlib.assert(v613, {
    at: './index.rsh:122:15:application',
    fs: ['at ./index.rsh:121:7:application call to [unknown function] (defined at: ./index.rsh:121:11:function exp)', 'at ./index.rsh:121:7:application call to [unknown function] (defined at: ./index.rsh:121:7:function exp)', 'at ./index.rsh:115:34:application call to "runBobs_seeOutcome0_228" (defined at: ./index.rsh:118:9:function exp)', 'at ./index.rsh:115:34:application call to [unknown function] (defined at: ./index.rsh:115:34:function exp)'],
    msg: 'A deployer cannot participate',
    who: 'Bobs_seeOutcome'
    });
  const v614 = v596[stdlib.checkedBigNumberify('./index.rsh:124:23:application', stdlib.UInt_max, '0')];
  const v615 = v614[stdlib.checkedBigNumberify('./index.rsh:124:23:application', stdlib.UInt_max, '0')];
  const v616 = stdlib.gt(v615, stdlib.checkedBigNumberify('./index.rsh:124:33:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v616, {
    at: './index.rsh:124:15:application',
    fs: ['at ./index.rsh:121:7:application call to [unknown function] (defined at: ./index.rsh:121:11:function exp)', 'at ./index.rsh:121:7:application call to [unknown function] (defined at: ./index.rsh:121:7:function exp)', 'at ./index.rsh:115:34:application call to "runBobs_seeOutcome0_228" (defined at: ./index.rsh:118:9:function exp)', 'at ./index.rsh:115:34:application call to [unknown function] (defined at: ./index.rsh:115:34:function exp)'],
    msg: 'NFT Balance insufficient for transfer',
    who: 'Bobs_seeOutcome'
    });
  const v619 = ['Bobs_seeOutcome0_228', v610];
  
  const txn1 = await (ctc.sendrecv({
    args: [v452, v453, v455, v487, v581, v588, v596, v606, v619],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:127:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v632], secs: v634, time: v633, didSend: v299, from: v631 } = txn1;
      
      switch (v632[0]) {
        case 'Bobs_seeOutcome0_228': {
          const v635 = v632[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bobs_seeOutcome"
            });
          ;
          const v644 = v596[stdlib.checkedBigNumberify('./index.rsh:132:24:application', stdlib.UInt_max, '0')];
          const v645 = v644[stdlib.checkedBigNumberify('./index.rsh:132:24:application', stdlib.UInt_max, '0')];
          const v647 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v631), null);
          const v648 = ['Some', v581];
          const v649 = stdlib.digest(ctc10, [v647]);
          const v651 = stdlib.digest(ctc10, [v648]);
          const v652 = stdlib.digestEq(v649, v651);
          const v653 = v652 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v654 = await txn1.getOutput('Bobs_seeOutcome', 'v653', ctc1, v653);
          
          const v659 = stdlib.eq(v653, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v659) {
            const v665 = stdlib.sub(v645, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'));
            const v668 = v644[stdlib.checkedBigNumberify('./index.rsh:137:41:application', stdlib.UInt_max, '1')];
            const v669 = v644[stdlib.checkedBigNumberify('./index.rsh:137:41:application', stdlib.UInt_max, '2')];
            const v670 = [v665, v668, v669];
            const v671 = stdlib.Array_set(v596, stdlib.checkedBigNumberify('./index.rsh:137:41:application', stdlib.UInt_max, '0'), v670);
            sim_r.txns.push({
              kind: 'from',
              to: v631,
              tok: v453
              });
            const v672 = stdlib.lt(v588, v487);
            const v674 = stdlib.add(v588, stdlib.checkedBigNumberify('./index.rsh:141:28:decimal', stdlib.UInt_max, '1'));
            const v1322 = v674;
            const v1325 = v671;
            if (v672) {
              const v1326 = stdlib.add(v633, v455);
              sim_r.isHalt = false;
              }
            else {
              const v1327 = v671[stdlib.checkedBigNumberify('./index.rsh:155:19:application', stdlib.UInt_max, '0')];
              const v1328 = v1327[stdlib.checkedBigNumberify('./index.rsh:155:19:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v452,
                tok: v453
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v453
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v676 = stdlib.lt(v588, v487);
            const v678 = stdlib.add(v588, stdlib.checkedBigNumberify('./index.rsh:141:28:decimal', stdlib.UInt_max, '1'));
            const v1329 = v678;
            const v1332 = v596;
            if (v676) {
              const v1333 = stdlib.add(v633, v455);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v452,
                tok: v453
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v453
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'Winner_showWinner0_228': {
          const v687 = v632[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v632], secs: v634, time: v633, didSend: v299, from: v631 } = txn1;
  switch (v632[0]) {
    case 'Bobs_seeOutcome0_228': {
      const v635 = v632[1];
      undefined /* setApiDetails */;
      ;
      const v642 = stdlib.addressEq(v631, v452);
      const v643 = v642 ? false : true;
      stdlib.assert(v643, {
        at: './index.rsh:130:16:application',
        fs: ['at ./index.rsh:129:7:application call to [unknown function] (defined at: ./index.rsh:129:7:function exp)'],
        msg: 'A deployer cannot participate',
        who: 'Bobs_seeOutcome'
        });
      const v644 = v596[stdlib.checkedBigNumberify('./index.rsh:132:24:application', stdlib.UInt_max, '0')];
      const v645 = v644[stdlib.checkedBigNumberify('./index.rsh:132:24:application', stdlib.UInt_max, '0')];
      const v646 = stdlib.gt(v645, stdlib.checkedBigNumberify('./index.rsh:132:34:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v646, {
        at: './index.rsh:132:16:application',
        fs: ['at ./index.rsh:129:7:application call to [unknown function] (defined at: ./index.rsh:129:7:function exp)'],
        msg: 'NFT Balance insufficient for transfer',
        who: 'Bobs_seeOutcome'
        });
      const v647 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v631), null);
      const v648 = ['Some', v581];
      const v649 = stdlib.digest(ctc10, [v647]);
      const v651 = stdlib.digest(ctc10, [v648]);
      const v652 = stdlib.digestEq(v649, v651);
      const v653 = v652 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v654 = await txn1.getOutput('Bobs_seeOutcome', 'v653', ctc1, v653);
      if (v299) {
        stdlib.protect(ctc0, await interact.out(v635, v654), {
          at: './index.rsh:119:7:application',
          fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:7:function exp)', 'at ./index.rsh:134:14:application call to "reply" (defined at: ./index.rsh:129:7:function exp)', 'at ./index.rsh:129:7:application call to [unknown function] (defined at: ./index.rsh:129:7:function exp)'],
          msg: 'out',
          who: 'Bobs_seeOutcome'
          });
        }
      else {
        }
      
      const v659 = stdlib.eq(v653, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v659) {
        const v665 = stdlib.sub(v645, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'));
        const v668 = v644[stdlib.checkedBigNumberify('./index.rsh:137:41:application', stdlib.UInt_max, '1')];
        const v669 = v644[stdlib.checkedBigNumberify('./index.rsh:137:41:application', stdlib.UInt_max, '2')];
        const v670 = [v665, v668, v669];
        const v671 = stdlib.Array_set(v596, stdlib.checkedBigNumberify('./index.rsh:137:41:application', stdlib.UInt_max, '0'), v670);
        ;
        const v672 = stdlib.lt(v588, v487);
        const v674 = stdlib.add(v588, stdlib.checkedBigNumberify('./index.rsh:141:28:decimal', stdlib.UInt_max, '1'));
        const v1322 = v674;
        const v1325 = v671;
        if (v672) {
          const v1326 = stdlib.add(v633, v455);
          return;
          }
        else {
          const v1327 = v671[stdlib.checkedBigNumberify('./index.rsh:155:19:application', stdlib.UInt_max, '0')];
          const v1328 = v1327[stdlib.checkedBigNumberify('./index.rsh:155:19:application', stdlib.UInt_max, '0')];
          ;
          return;
          }}
      else {
        const v676 = stdlib.lt(v588, v487);
        const v678 = stdlib.add(v588, stdlib.checkedBigNumberify('./index.rsh:141:28:decimal', stdlib.UInt_max, '1'));
        const v1329 = v678;
        const v1332 = v596;
        if (v676) {
          const v1333 = stdlib.add(v633, v455);
          return;
          }
        else {
          ;
          return;
          }}
      break;
      }
    case 'Winner_showWinner0_228': {
      const v687 = v632[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Winner_showWinner7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Winner_showWinner7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Winner_showWinner7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Bobs_seeOutcome0_228: ctc8,
    Winner_showWinner0_228: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v452, v453, v455, v487, v581, v588, v596, v606] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1]);
  const v623 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:143:29:application call to [unknown function] (defined at: ./index.rsh:143:29:function exp)', 'at ./index.rsh:115:34:application call to "runWinner_showWinner0_228" (defined at: ./index.rsh:143:11:function exp)', 'at ./index.rsh:115:34:application call to [unknown function] (defined at: ./index.rsh:115:34:function exp)'],
    msg: 'in',
    who: 'Winner_showWinner'
    });
  const v627 = ['Winner_showWinner0_228', v623];
  
  const txn1 = await (ctc.sendrecv({
    args: [v452, v453, v455, v487, v581, v588, v596, v606, v627],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:144:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v632], secs: v634, time: v633, didSend: v299, from: v631 } = txn1;
      
      switch (v632[0]) {
        case 'Bobs_seeOutcome0_228': {
          const v635 = v632[1];
          
          break;
          }
        case 'Winner_showWinner0_228': {
          const v687 = v632[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Winner_showWinner"
            });
          ;
          const v733 = await txn1.getOutput('Winner_showWinner', 'v581', ctc1, v581);
          
          const v1357 = v588;
          const v1360 = v596;
          const v1361 = stdlib.add(v633, v455);
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v632], secs: v634, time: v633, didSend: v299, from: v631 } = txn1;
  switch (v632[0]) {
    case 'Bobs_seeOutcome0_228': {
      const v635 = v632[1];
      return;
      break;
      }
    case 'Winner_showWinner0_228': {
      const v687 = v632[1];
      undefined /* setApiDetails */;
      ;
      const v733 = await txn1.getOutput('Winner_showWinner', 'v581', ctc1, v581);
      if (v299) {
        stdlib.protect(ctc0, await interact.out(v687, v733), {
          at: './index.rsh:143:12:application',
          fs: ['at ./index.rsh:143:12:application call to [unknown function] (defined at: ./index.rsh:143:12:function exp)', 'at ./index.rsh:145:10:application call to "k" (defined at: ./index.rsh:144:22:function exp)', 'at ./index.rsh:144:22:application call to [unknown function] (defined at: ./index.rsh:144:22:function exp)'],
          msg: 'out',
          who: 'Winner_showWinner'
          });
        }
      else {
        }
      
      const v1357 = v588;
      const v1360 = v596;
      const v1361 = stdlib.add(v633, v455);
      return;
      
      break;
      }
    }
  
  
  };
export async function Bobs_playNum(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bobs_playNum expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bobs_playNum expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 8) {return _Bobs_playNum8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bobs_seeOutcome(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bobs_seeOutcome expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bobs_seeOutcome expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bobs_seeOutcome7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Winner_showWinner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Winner_showWinner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Winner_showWinner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Winner_showWinner7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bobs_playNum(uint64)byte`, `Bobs_seeOutcome()uint64`, `Winner_showWinner()uint64`],
    pure: [],
    sigs: [`Bobs_playNum(uint64)byte`, `Bobs_seeOutcome()uint64`, `Winner_showWinner()uint64`]
    },
  appApproval: `BiAUAAEIBCAoUAkHAtfGrKEL4sL8xgy5AQMKWTA4QKCNBiYDAQABAQAiNQAxGEEGxipkSSJbNQEkWzUCMRkjEkEACjEAKCEHr2ZCBpM2GgAXSUEAPiI1BCM1BkkhCgxAACNJIQsMQAAOIQsSRCo1/yk0/1BCAjQhChJEKjX/KDT/UEICJoGt75nIBhJENhoBQgB/NhoCFzUENhoDNhoBF0mBBgxAAyFJJAxAAZ5JIQcMQABdIQcSRCQ0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gASiBWaOsDIGNAMhDFsPRDT/MQASRDT/NAMhBFs0AyEFWzQDVzAgNAMhBlsiNANXWFAyBjQDV6gRQgSdSCQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yEEWzX+IQVbNf1XMCA1/CEGWzX7V1hQNfpXqBE1+Uk1BTX4gARmH+7WNPhQsDIGNAMhDFsMRDT4FzX3MQA0/xNEMQCIBZxJNfUiVUAABiM19kIABiI19kIAADT2RDT7IQ0MNfU0+yEOGDX0IjXzIjXyNPokNPILJFgXNfE09zTxEjTzSU018zTyIwhJNfIhDgxA/90080EAOoAJAAAAAAAAAiEAsCg1BzT/NP40/TT8NPs09TT6IiQ09AtSNPcWUDT6JEk09AsIIQZSUDIGNPlCA6gxACgpNPcWUGaACQAAAAAAAAIuAbApNQc0/zT+NP00/DT7Iwg09TT6IiQ09AtSNPcWUDT6JEk09AsIIQZSUDIGNPlCA2NJIQgMQABYSCEINAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AE4huzqbAyBjQDIQ9bD0Q0/zEAEkQ0/zQDIQRbNAMhBVs0AyEQWzQDIRFbNAMhElsiMgY0A1dIEUIDfEghCDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSVcAIDX/IQRbNf4hBVs1/SEQWzX8IRFbNfshEls1+ldIETX5STUFNfiABJBPZEk0+FCwMgY0AyEPWwxENPgiVUAAmTEANP8TRDT5VwARSTX3IltJNfYiDUQjIjEAiAPxASk0+xZQARJNNfWACAAAAAAAAAKNNPUWULA09RY1BzT1IhJBADyxIrIBI7ISJbIQMQCyFDT+shGzNP80/jT9NPw0+zT6Iwg0+jT8DDIGNPYjCRY091cICFA091cQAVBCAqA0/zT+NP00/DT7NPojCDT6NPwMMgY0+UIChoAIAAAAAAAAAkU0+xZQsDT7FjUHNP80/jT9NPw0+zT6IzIGNPlCAl5JIQkMQAC+SSUMQABsJRJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQVJIls1/iRbNf2ABBBGrXM0/hZQNP0WULA0/zEAEkQ0A1cwIDT+FjT9FlABEkQ0/zQDIQRbNAMhBVs0AyEGWzT9IiMyBjQDV1gRQgHlIQkSRCEJNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEQbFATbA0/zEAEkQ0/zQDIQRbNAMhBVs0A1cwICIjIQavMgY0A1dQEUIBIUkjDEAAg0gjNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEEWzX+IQVbNf1XMCA1/FdQETX7gASai5F0sDT7VwARSTX6IlsjCBY0+lcICFA0+lcQAVA1+SM0/ogCTzT/MQASRDT/NP4WUDT9FlA0/FA0+VAoSwFXAGFnSCEJNQEyBjUCQgGtSCETiAIIIjQBEkQ0BEkiEkw0AhIRREk1BUlKIls1/yRbNf6BEFs1/VcYIDX8gASjiaHBNP8WUDT+FlA0/RZQNPxQsIERr0k1+1cAETX6JK80+lcICFA0+lcQAVA1+SETiAGrsSKyASKyEiWyEDIKshQ0/7IRszEANP8WUDT9FlA0/FA0+VAoSwFXAGFnSCM1ATIGNQJCARU1/zX+Nf01/DX7Nfo1+TX4Nfc0/EEAOzT+NPkINfY09zT4FlA0+RZQNPpQNPsWUDT9UDT/UDT2FlAoSwFXAH9nKUsBV39CZ0gkNQEyBjUCQgDDNPc0+BZQNPkWUDT6UDT7FlA0/1AoSwFXAGlnSCU1ATIGNQJCAJ01/zX+Nf01/DX7Nfo1+TX4Nfc0/UEANzT+NPkINfY09zT4FlA0+RZQNPoWUDT7FlA0/BZQNP9QNPYWUChLAVcAYWdIIQg1ATIGNQJCAE+xIrIBNP9XABEiW7ISJbIQNPeyFDT4shGzsSKyASKyEiWyEDIJshUyCrIUNPiyEbNCAAAxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQ0xNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAAVIIQeviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 2,
  stateSize: 193,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v453",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v454",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v455",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v456",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v453",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v454",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v455",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v456",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v580",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v581",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T22",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bobs_seeOutcome0_228",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Winner_showWinner0_228",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T22",
                "name": "v632",
                "type": "tuple"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T25",
                "name": "v523",
                "type": "tuple"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v545",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v558",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v581",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v653",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bobs_playNum",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bobs_seeOutcome",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Winner_showWinner",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v580",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v581",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T22",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bobs_seeOutcome0_228",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Winner_showWinner0_228",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T22",
                "name": "v632",
                "type": "tuple"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T25",
                "name": "v523",
                "type": "tuple"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200334138038062003341833981016040819052620000269162000423565b6000805543600355620000386200024f565b6040805133815283516020808301919091528085015180516001600160a01b03168385015290810151606080840191909152818401516080840152015160a082015290517f112545cf4cc4ef4cc46259a35cf4621d5a4b14828a08081bb8649d32a39f1bd99181900360c00190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620001049290620001a2565b6060820152620001173415600762000225565b62000121620002b6565b33815260208084018051516001600160a01b031682840152805160409081015181850152905160609081015181850152840151608084015260016000819055439055516200017291839101620004f3565b6040516020818303038152906040526002908051906020019062000198929190620002f9565b50505050620005da565b620001ac62000388565b60005b60018110156200020257848160018110620001ce57620001ce620004dd565b6020020151828260018110620001e857620001e8620004dd565b602002015280620001f98162000573565b915050620001af565b5081818460018110620002195762000219620004dd565b60200201529392505050565b816200024b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528152602081016200028262000388565b81526040805160608101825260008082526020828101829052928201529101908152602001620002b162000388565b905290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001620002b162000388565b82805462000307906200059d565b90600052602060002090601f0160209004810192826200032b576000855562000376565b82601f106200034657805160ff191683800117855562000376565b8280016001018555821562000376579182015b828111156200037657825182559160200191906001019062000359565b5062000384929150620003d5565b5090565b60405180602001604052806001905b620003be604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003975790505090565b5b80821115620003845760008155600101620003d6565b604051608081016001600160401b03811182821017156200041d57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360a08112156200043757600080fd5b604080519081016001600160401b03811182821017156200046857634e487b7160e01b600052604160045260246000fd5b604052835181526080601f19830112156200048257600080fd5b6200048c620003ec565b60208501519092506001600160a01b0381168114620004aa57600080fd5b80835250604084015160208301526060840151604083015260808401516060830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b03908116825260208084015190911681830152604080840151818401526060808501518185015260808086015160e08601949291860160005b600181101562000567578251805183528581015186840152860151151586830152918401919083019060010162000535565b50505050505092915050565b60006000198214156200059657634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c90821680620005b257607f821691505b60208210811415620005d457634e487b7160e01b600052602260045260246000fd5b50919050565b612d5780620005ea6000396000f3fe6080604052600436106100d55760003560e01c806383aab11a11610079578063ab53f2c611610056578063ab53f2c6146101c3578063bf2c5b24146101e6578063de736998146101f9578063ebdbfdcc1461020c57005b806383aab11a146101a0578063852dc7cf146101a8578063a2ac7bdf146101b057005b80633bc5b7bf116100b25780633bc5b7bf1461012857806364f351ea146101555780637eea518c14610178578063832307571461018b57005b80630ca328e4146100de5780631e93b0f1146100f15780632c10a1591461011557005b366100dc57005b005b6100dc6100ec3660046122ed565b61021f565b3480156100fd57600080fd5b506003545b6040519081526020015b60405180910390f35b6100dc6101233660046122ed565b610261565b34801561013457600080fd5b5061014861014336600461231e565b61029f565b60405161010c919061236f565b61016861016336600461239f565b6102cb565b604051901515815260200161010c565b6100dc6101863660046122ed565b610316565b34801561019757600080fd5b50600154610102565b610102610354565b610102610395565b6100dc6101be3660046123b8565b6103da565b3480156101cf57600080fd5b506101d8610418565b60405161010c9291906123f6565b6100dc6101f43660046122ed565b6104b5565b6100dc6102073660046122ed565b6104f3565b6100dc61021a366004612430565b610531565b610245604051806060016040528060001515815260200160008152602001600081525090565b61025d610257368490038401846124eb565b8261056f565b5050565b610287604051806060016040528060001515815260200160008152602001600081525090565b61025d61029936849003840184612550565b826109f0565b60408051606081018252600080825260208201819052918101919091526102c582610c14565b92915050565b60006102d5611edd565b602081015151839052610304604051806060016040528060001515815260200160008152602001600081525090565b61030e828261056f565b519392505050565b61033c604051806060016040528060001515815260200160008152602001600081525090565b61025d61034e36849003840184612550565b82610ce7565b600061035e611f0f565b602081810151516000908190526040805160608101825282815292830182905282015261038b8282610ee3565b6020015192915050565b600061039f611f0f565b6020818101515160019052604080516060810182526000808252928101839052908101919091526103d08282610ee3565b6040015192915050565b610400604051806060016040528060001515815260200160008152602001600081525090565b61025d61041236849003840184612588565b82610ee3565b60006060600054600280805461042d90612616565b80601f016020809104026020016040519081016040528092919081815260200182805461045990612616565b80156104a65780601f1061047b576101008083540402835291602001916104a6565b820191906000526020600020905b81548152906001019060200180831161048957829003601f168201915b50505050509050915091509091565b6104db604051806060016040528060001515815260200160008152602001600081525090565b61025d6104ed36849003840184612550565b826113ff565b610519604051806060016040528060001515815260200160008152602001600081525090565b61025d61052b36849003840184612550565b826115bd565b610557604051806060016040528060001515815260200160008152602001600081525090565b61025d6105693684900384018461264b565b8261177b565b61057f6008600054146025611992565b815161059a90158061059357508251600154145b6026611992565b6000808055600280546105ac90612616565b80601f01602080910402602001604051908101604052809291908181526020018280546105d890612616565b80156106255780601f106105fa57610100808354040283529160200191610625565b820191906000526020600020905b81548152906001019060200180831161060857829003601f168201915b505050505080602001905181019061063d91906127a7565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091529091506106838260e0015143106027611992565b60408051338152855160208083019190915286015151518183015290517f0d0c50c34bf538d7a3a69bc85bb10bcfe23f8f46c119741a7807a8319a6ae2489181900360600190a16106d634156022611992565b81516106fc906001600160a01b031633146106f25760016106f5565b60005b6023611992565b600061070733610c14565b5160018111156107195761071961233b565b14156107285760018152610750565b600161073333610c14565b5160018111156107455761074561233b565b141561075057600081525b805161075d906024611992565b60808201805160031160208301525161077890600a90612834565b60408201526000608082018190525b600a8110156107ea578260a0015181600a81106107a6576107a6612856565b602002015160a083015260808201516107cb5760a082015160208601515151146107d1565b81608001515b15156080830152806107e281612882565b915050610787565b50608081015115801560608301526108d957604051600081527f6ac37dc15dffd3d7cb809ccaeb66cbab8f739901e2bf8aa8e15b72d8e106a7d59060200160405180910390a16000835261083c611f48565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835182015260608086015184519091015260808501518284018051919091528483015190519015159083015260a0850151908401519187015151516108a992906119b8565b6020820180516040019190915280514360609091015260c08401519051608001526108d381611a2c565b506109ea565b33600090815260046020908152604091829020805460ff1916600190811782558783015151519181019190915591519182527ff22d4bd31b95774e7176e2cf9afb7e6ce606e291b6500c722763e69bf3d7c1e7910160405180910390a160018352610942611f48565b825181516001600160a01b0391821690526020808501518351921691015260408084015182519091015260608084015182519091015260808301516109899060019061289d565b60208083018051929092528381015191519115159181019190915260a084015160408401519187015151516109be92906119b8565b6020820180516040019190915280514360609091015260c08401519051608001526109e881611a2c565b505b50505050565b610a00600160005414600b611992565b8151610a1b901580610a1457508251600154145b600c611992565b600080805560028054610a2d90612616565b80601f0160208091040260200160405190810160405280929190818152602001828054610a5990612616565b8015610aa65780601f10610a7b57610100808354040283529160200191610aa6565b820191906000526020600020905b815481529060010190602001808311610a8957829003601f168201915b5050505050806020019051810190610abe9190612941565b9050610ac8611f7f565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13385604051610af992919061295d565b60405180910390a1610b0d34156008611992565b60808201515151610b209060019061289d565b815152608082018051516020908101518351909101528051516040908101518351901515910152518151610b579190600090611b73565b8160200181905250610b79610b723384602001516001611bdb565b6009611992565b8151610b91906001600160a01b03163314600a611992565b610b99611faf565b82516001600160a01b03908116825260208085015190911681830152604080850151818401526060808601519084015283820151608084015260026000554360015551610be8918391016129c3565b60405160208183030381529060405260029080519060200190610c0c929190611ff0565b505050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610c6057610c6061233b565b1415610cd7576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610ca157610ca161233b565b6001811115610cb257610cb261233b565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b610cf7600260005414600f611992565b8151610d12901580610d0b57508251600154145b6010611992565b600080805560028054610d2490612616565b80601f0160208091040260200160405190810160405280929190818152602001828054610d5090612616565b8015610d9d5780601f10610d7257610100808354040283529160200191610d9d565b820191906000526020600020905b815481529060010190602001808311610d8057829003601f168201915b5050505050806020019051810190610db59190612941565b9050610dbf612074565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503385604051610df092919061295d565b60405180910390a1610e043415600d611992565b8151610e1c906001600160a01b03163314600e611992565b80516000908190528151602001819052815160400181905281516060018190528151608001819052815160a001819052815160c001819052815160e00181905281516101000181905281516101200152610e74611f48565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201526060808601518451820152828401805160009052805160019401939093528451835190920191909152815143910152608080850151915101526109e881611a2c565b610ef3600760005414601a611992565b8151610f0e901580610f0757508251600154145b601b611992565b600080805560028054610f2090612616565b80601f0160208091040260200160405190810160405280929190818152602001828054610f4c90612616565b8015610f995780601f10610f6e57610100808354040283529160200191610f99565b820191906000526020600020905b815481529060010190602001808311610f7c57829003601f168201915b5050505050806020019051810190610fb19190612a11565b90506110006040805160c081018252600060608083018281526080840183905260a084018390528352602080840183905284519182018552828252810182905280840191909152909182015290565b6110118260e001514310601c611992565b7fcb93ca3d7dcbece2320bd6a96f50eaa8eba4e5546e6a4b957804c0c185adc9623385604051611042929190612a97565b60405180910390a160006020850151515160018111156110645761106461233b565b141561130d5761107634156016611992565b815161109c906001600160a01b03163314611092576001611095565b60005b6017611992565b60c082015151516110b09015156018611992565b80516001905260808201518151604090810191909152815190516110d7919060200161236f565b6040516020818303038152906040528051906020012060001c6110f933610c14565b604051602001611109919061236f565b6040516020818303038152906040528051906020012060001c1461112e576001611131565b60005b60208281018290526040519182527ff36b5d3e8b3fec90aabccd1ccc6cefe6f234add5473f96cf59ded02d9349ebc0910160405180910390a16020808201805191850191909152516112765760c0820151515161119090600190612aea565b604082810180519290925260c084018051516020908101518451820152905151820151925192151592909101919091528201516111cf90336001611bf3565b6111d7612087565b825181516001600160a01b0391821690526020808501518351921691015260408084015182519091015260608084015182519091015260808084015182519091015260a083015161122a9060019061289d565b6020808301805192909252606085015160a086015183519111910152514360409182015260c0840151908301516112649190600090611b73565b6020820151606001526108d381611c0c565b61127e612087565b825181516001600160a01b0391821690526020808501518351921691015260408084015182519091015260608084015182519091015260808084015182519091015260a08301516112d19060019061289d565b602080830180519290925260608086015160a0870151845191119201919091528151436040919091015260c0850151915101526108d381611c0c565b60016020850151515160018111156113275761132761233b565b14156109ea5761133934156019611992565b7f2061c7e0d9425afb61b04eba96019e996b3a6022f2b0099ab65241ba74851516826080015160405161136e91815260200190565b60405180910390a160808201516040840152611388612087565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152606080860151845182015260808087015185519091015260a08601518385018051919091528051600194019390935282514392019190915260c0850151915101526108d381611c0c565b61140f600760005414601f611992565b815161142a90158061142357508251600154145b6020611992565b60008080556002805461143c90612616565b80601f016020809104026020016040519081016040528092919081815260200182805461146890612616565b80156114b55780601f1061148a576101008083540402835291602001916114b5565b820191906000526020600020905b81548152906001019060200180831161149857829003601f168201915b50505050508060200190518101906114cd9190612a11565b90506114e18160e001514310156021611992565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb338460405161151292919061295d565b60405180910390a16115263415601d611992565b805161153e906001600160a01b03163314601e611992565b611546612087565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518351820152606080850151845182015260808086015185519091015260a08501518385018051919091528051600094019390935282514392019190915260c0840151915101526109ea81611c0c565b6115cd600860005414602a611992565b81516115e89015806115e157508251600154145b602b611992565b6000808055600280546115fa90612616565b80601f016020809104026020016040519081016040528092919081815260200182805461162690612616565b80156116735780601f1061164857610100808354040283529160200191611673565b820191906000526020600020905b81548152906001019060200180831161165657829003601f168201915b505050505080602001905181019061168b91906127a7565b905061169f8160e00151431015602c611992565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33846040516116d092919061295d565b60405180910390a16116e434156028611992565b80516116fc906001600160a01b031633146029611992565b611704611f48565b815181516001600160a01b0391821690526020808401518351921691810191909152604080840151835182015260608085015184518201526080808601518486018051919091528051600095019490945260a086015184519093019290925282514391015260c0840151915101526109ea81611a2c565b61178b6004600054146014611992565b81516117a690158061179f57508251600154145b6015611992565b6000808055600280546117b890612616565b80601f01602080910402602001604051908101604052809291908181526020018280546117e490612616565b80156118315780601f1061180657610100808354040283529160200191611831565b820191906000526020600020905b81548152906001019060200180831161181457829003601f168201915b50505050508060200190518101906118499190612b01565b604080513381528551602080830191909152808701518051838501520151606082015290519192507fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a919081900360800190a16118a834156011611992565b80516118c0906001600160a01b031633146012611992565b60208084015180519082015160405161190e936118e893929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260600151146013611992565b611916612087565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183518201526080808501518451606090810191909152878401518401518551909201919091528284018051600090528051600194019390935282514392019190915260a0840151915101526109ea81611c0c565b8161025d5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6119c06120c5565b60005b600a811015611a0c578481600a81106119de576119de612856565b60200201518282600a81106119f5576119f5612856565b602002015280611a0481612882565b9150506119c3565b50818184600a8110611a2057611a20612856565b60200201529392505050565b60408051602081019091526000815281602001516020015115611b0657815160400151602083015160600151611a62919061289d565b8152611a6c6120e4565b8251516001600160a01b039081168252835160209081015190911681830152835160409081015181840152845160609081015190840152818501805151608080860191909152815183015160a08601529051015160c0840152835160e084015260086000554360015551611ae291839101612b93565b604051602081830303815290604052600290805190602001906109ea929190611ff0565b611b0e612147565b8251516001600160a01b0390811682528351602090810151909116818301528351604090810151818401528451606090810151908401528185018051516080808601919091529051015160a084015260046000554360015551611ae291839101612c26565b611b7b61218b565b60005b6001811015611bc757848160018110611b9957611b99612856565b6020020151828260018110611bb057611bb0612856565b602002015280611bbf81612882565b915050611b7e565b5081818460018110611a2057611a20612856565b6000611be983853085611cf7565b90505b9392505050565b611bfe838383611dd1565b611c0757600080fd5b505050565b60408051602081019091526000815281602001516020015115611cc257816000015160400151826020015160400151611c45919061289d565b8152611c4f6121d6565b8251516001600160a01b03908116825283516020908101519091168183015283516040908101518184015284516060908101518185015285516080908101519085015282860180515160a086015251015160c0840152835160e084015260076000554360015551611ae291839101612c79565b8151602080820151915190840151606001515151611ce1929190611bf3565b6000808055600181905561025d90600290612226565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611d5e91612ce8565b60006040518083038185875af1925050503d8060008114611d9b576040519150601f19603f3d011682016040523d82523d6000602084013e611da0565b606091505b5091509150611db182826001611ea2565b5080806020019051810190611dc69190612d04565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611e3091612ce8565b60006040518083038185875af1925050503d8060008114611e6d576040519150601f19603f3d011682016040523d82523d6000602084013e611e72565b606091505b5091509150611e8382826002611ea2565b5080806020019051810190611e989190612d04565b9695505050505050565b60608315611eb1575081611bec565b825115611ec15782518084602001fd5b60405163100960cb60e01b8152600481018390526024016119af565b604051806040016040528060008152602001611f0a60408051808201909152600060208201908152815290565b905290565b604051806040016040528060008152602001611f0a60408051608081018252600060208201818152928201819052606082015290815290565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290815260208101611f0a612263565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101611f0a61218b565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001611f0a61218b565b828054611ffc90612616565b90600052602060002090601f01602090048101928261201e5760008555612064565b82601f1061203757805160ff1916838001178555612064565b82800160010185558215612064579182015b82811115612064578251825591602001919060010190612049565b50612070929150612296565b5090565b6040518060200160405280611f0a6120c5565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c082019290925290815260208101611f0a6122ab565b604051806101400160405280600a906020820280368337509192915050565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200161212d6120c5565b815260200161213a61218b565b8152602001600081525090565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001611f0a5b60405180602001604052806001905b6121c0604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161219a5790505090565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200161213a61218b565b50805461223290612616565b6000825580601f10612242575050565b601f0160209004906000526020600020908101906122609190612296565b50565b6040805160a081018252600080825260208201529081016122826120c5565b815260200160008152602001611f0a61218b565b5b808211156120705760008155600101612297565b60405180608001604052806000815260200160001515815260200160008152602001611f0a61218b565b6000604082840312156122e757600080fd5b50919050565b6000604082840312156122ff57600080fd5b611bec83836122d5565b6001600160a01b038116811461226057600080fd5b60006020828403121561233057600080fd5b8135611bec81612309565b634e487b7160e01b600052602160045260246000fd5b6002811061226057634e487b7160e01b600052602160045260246000fd5b8151606082019061237f81612351565b808352506020830151151560208301526040830151604083015292915050565b6000602082840312156123b157600080fd5b5035919050565b6000608082840312156122e757600080fd5b60005b838110156123e55781810151838201526020016123cd565b838111156109ea5750506000910152565b828152604060208201526000825180604084015261241b8160608501602087016123ca565b601f01601f1916919091016060019392505050565b6000606082840312156122e757600080fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561247b5761247b612442565b60405290565b6040516020810167ffffffffffffffff8111828210171561247b5761247b612442565b6040516060810167ffffffffffffffff8111828210171561247b5761247b612442565b604051610100810167ffffffffffffffff8111828210171561247b5761247b612442565b600081830360408112156124fe57600080fd5b612506612458565b833581526020601f198301121561251c57600080fd5b612524612481565b915061252e612481565b602094850135815282529283015250919050565b801515811461226057600080fd5b60006040828403121561256257600080fd5b61256a612458565b82358152602083013561257c81612542565b60208201529392505050565b6000818303608081121561259b57600080fd5b6125a3612458565b833581526060601f19830112156125b957600080fd5b6125c1612481565b91506125cb6124a4565b6020850135600281106125dd57600080fd5b815260408501356125ed81612542565b6020820152606085013561260081612542565b6040820152825260208101919091529392505050565b600181811c9082168061262a57607f821691505b602082108114156122e757634e487b7160e01b600052602260045260246000fd5b6000818303606081121561265e57600080fd5b612666612458565b833581526040601f198301121561267c57600080fd5b612684612458565b60208581013582526040909501358582015293810193909352509092915050565b8051610ce281612309565b600082601f8301126126c157600080fd5b60405161014080820182811067ffffffffffffffff821117156126e6576126e6612442565b604052830181858211156126f957600080fd5b845b828110156127135780518252602091820191016126fb565b509195945050505050565b600082601f83011261272f57600080fd5b612737612481565b8060608085018681111561274a57600080fd5b855b8181101561279b578281890312156127645760008081fd5b61276c6124a4565b815181526020808301518183015260408084015161278981612542565b9083015290865290940193820161274c565b50919695505050505050565b600061026082840312156127ba57600080fd5b6127c26124c7565b6127cb836126a5565b81526127d9602084016126a5565b60208201526040830151604082015260608301516060820152608083015160808201526128098460a085016126b0565b60a082015261281c846101e0850161271e565b60c0820152610240929092015160e083015250919050565b60008261285157634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006000198214156128965761289661286c565b5060010190565b600082198211156128b0576128b061286c565b500190565b600060e082840312156128c757600080fd5b60405160a0810181811067ffffffffffffffff821117156128ea576128ea612442565b806040525080915082516128fd81612309565b8152602083015161290d81612309565b806020830152506040830151604082015260608301516060820152612935846080850161271e565b60808201525092915050565b600060e0828403121561295357600080fd5b611bec83836128b5565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b8060005b60018110156109ea578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101612989565b81516001600160a01b03908116825260208084015190911690820152604080830151908201526060808301519082015260808083015160e0830191612a0a90840182612985565b5092915050565b60006101408284031215612a2457600080fd5b612a2c6124c7565b8251612a3781612309565b8152612a45602084016126a5565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a0820152612a7f8460c0850161271e565b60c0820152610120929092015160e083015250919050565b6001600160a01b0383168152815160208083019190915282015151805160a083019190612ac381612351565b80604085015250602081015115156060840152604081015115156080840152509392505050565b600082821015612afc57612afc61286c565b500390565b60006101008284031215612b1457600080fd5b60405160c0810181811067ffffffffffffffff82111715612b3757612b37612442565b6040528251612b4581612309565b81526020830151612b5581612309565b80602083015250604083015160408201526060830151606082015260808301516080820152612b878460a0850161271e565b60a08201529392505050565b81516001600160a01b0390811682526020808401519091168183015260408084015190830152606080840151908301526080808401519083015260a0838101516102608401929091840160005b600a811015612bfd57835182529282019290820190600101612be0565b5050505060c0830151612c146101e0840182612985565b5060e083015161024083015292915050565b60006101008201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a0830151612a0a60a0840182612985565b60006101408201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c0830151612cd660c0840182612985565b5060e083015161012083015292915050565b60008251612cfa8184602087016123ca565b9190910192915050565b600060208284031215612d1657600080fd5b8151611bec8161254256fea2646970667358221220d90640bd7d6c487c15947c11f34e872c0dfb52c7af17e6b11d9b91628889232b64736f6c634300080c0033`,
  BytecodeLen: 13121,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:49:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:52:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:101:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:159:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:115:34:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:59:49:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bobs_playNum": Bobs_playNum,
  "Bobs_seeOutcome": Bobs_seeOutcome,
  "Winner_showWinner": Winner_showWinner
  };
export const _APIs = {
  Bobs: {
    playNum: Bobs_playNum,
    seeOutcome: Bobs_seeOutcome
    },
  Winner: {
    showWinner: Winner_showWinner
    }
  };
