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
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Data({
    Bobs_optIn0_86: ctc7,
    Bobs_playNum0_86: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc10]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Data({
    Bobs_seeOutcome0_312: ctc7,
    Winner_showWinner0_312: ctc7
    });
  const ctc16 = stdlib.T_Tuple([ctc2]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v518 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v519 = [v518];
  const v525 = stdlib.protect(ctc4, await interact.startRaffle(), {
    at: './index.rsh:41:76:application',
    fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:13:function exp)'],
    msg: 'startRaffle',
    who: 'Alice'
    });
  const v526 = v525.deadline;
  const v527 = v525.nftId;
  const v528 = v525.numTickets;
  const v532 = stdlib.protect(ctc1, await interact.getNum(v528), {
    at: './index.rsh:42:40:application',
    fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:13:function exp)'],
    msg: 'getNum',
    who: 'Alice'
    });
  const v533 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:43:46:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:13:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v534 = stdlib.digest(ctc5, [v533, v532]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v527, v528, v526, v534],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc1, ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v537, v538, v539, v540], secs: v542, time: v541, didSend: v42, from: v536 } = txn1;
      
      const v543 = v519[stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0')];
      const v545 = v543[stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '1')];
      const v546 = v543[stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '2')];
      const v547 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v545, v546];
      const v548 = stdlib.Array_set(v519, stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0'), v547);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v537
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
  const {data: [v537, v538, v539, v540], secs: v542, time: v541, didSend: v42, from: v536 } = txn1;
  const v543 = v519[stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0')];
  const v545 = v543[stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '1')];
  const v546 = v543[stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '2')];
  const v547 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v545, v546];
  const v548 = stdlib.Array_set(v519, stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0'), v547);
  ;
  ;
  stdlib.protect(ctc0, await interact.seeHash(v540), {
    at: './index.rsh:49:21:application',
    fs: ['at ./index.rsh:49:21:application call to [unknown function] (defined at: ./index.rsh:49:21:function exp)', 'at ./index.rsh:49:21:application call to "liftedInteract" (defined at: ./index.rsh:49:21:application)'],
    msg: 'seeHash',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v536, v537, v539, v540, v548],
    evt_cnt: 0,
    funcNum: 1,
    lct: v541,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'), v537]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v553, time: v552, didSend: v53, from: v551 } = txn2;
      
      ;
      const v554 = v548[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '0')];
      const v555 = v554[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '0')];
      const v556 = stdlib.add(v555, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'));
      const v559 = v554[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '1')];
      const v560 = v554[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '2')];
      const v561 = [v556, v559, v560];
      const v562 = stdlib.Array_set(v548, stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '0'), v561);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v537
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc3, ctc1, ctc6, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v553, time: v552, didSend: v53, from: v551 } = txn2;
  ;
  const v554 = v548[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '0')];
  const v555 = v554[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '0')];
  const v556 = stdlib.add(v555, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'));
  const v559 = v554[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '1')];
  const v560 = v554[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '2')];
  const v561 = [v556, v559, v560];
  const v562 = stdlib.Array_set(v548, stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '0'), v561);
  ;
  const v563 = stdlib.addressEq(v536, v551);
  stdlib.assert(v563, {
    at: './index.rsh:52:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn3 = await (ctc.sendrecv({
    args: [v536, v537, v539, v540, v562],
    evt_cnt: 0,
    funcNum: 2,
    lct: v552,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:54:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v566, time: v565, didSend: v58, from: v564 } = txn3;
      
      ;
      const v569 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v571 = stdlib.checkedBigNumberify('./index.rsh:62:60:decimal', stdlib.UInt_max, '0');
      const v572 = true;
      const v573 = v569;
      const v574 = v565;
      const v580 = v562;
      
      if (await (async () => {
        
        return v572;})()) {
        const v590 = stdlib.add(v574, v539);
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc3, ctc1, ctc6, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v566, time: v565, didSend: v58, from: v564 } = txn3;
  ;
  const v567 = stdlib.addressEq(v536, v564);
  stdlib.assert(v567, {
    at: './index.rsh:54:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v569 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  let v571 = stdlib.checkedBigNumberify('./index.rsh:62:60:decimal', stdlib.UInt_max, '0');
  let v572 = true;
  let v573 = v569;
  let v574 = v565;
  let v580 = v562;
  
  while (await (async () => {
    
    return v572;})()) {
    const v590 = stdlib.add(v574, v539);
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc9],
      timeoutAt: ['time', v590],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v536, v537, v539, v540, v571, v573, v580, v590],
        evt_cnt: 0,
        funcNum: 9,
        lct: v574,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:107:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v790, time: v789, didSend: v284, from: v788 } = txn5;
          
          ;
          const cv571 = v571;
          const cv572 = false;
          const cv573 = v573;
          const cv574 = v789;
          const cv580 = v580;
          
          await (async () => {
            const v571 = cv571;
            const v572 = cv572;
            const v573 = cv573;
            const v574 = cv574;
            const v580 = cv580;
            
            if (await (async () => {
              
              return v572;})()) {
              const v590 = stdlib.add(v574, v539);
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc11, ctc3, ctc1, ctc6, ctc1, ctc12, ctc14, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v790, time: v789, didSend: v284, from: v788 } = txn5;
      ;
      const v791 = stdlib.addressEq(v536, v788);
      stdlib.assert(v791, {
        at: './index.rsh:107:15:dot',
        fs: ['at ./index.rsh:106:41:application call to [unknown function] (defined at: ./index.rsh:106:41:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      const cv571 = v571;
      const cv572 = false;
      const cv573 = v573;
      const cv574 = v789;
      const cv580 = v580;
      
      v571 = cv571;
      v572 = cv572;
      v573 = cv573;
      v574 = cv574;
      v580 = cv580;
      
      continue;
      }
    else {
      const {data: [v637], secs: v639, time: v638, didSend: v210, from: v636 } = txn4;
      switch (v637[0]) {
        case 'Bobs_optIn0_86': {
          const v640 = v637[1];
          undefined /* setApiDetails */;
          ;
          ;
          await txn4.getOutput('Bobs_optIn', 'v537', ctc3, v537);
          const cv571 = v571;
          const cv572 = true;
          const cv573 = v573;
          const cv574 = v638;
          const cv580 = v580;
          
          v571 = cv571;
          v572 = cv572;
          v573 = cv573;
          v574 = cv574;
          v580 = cv580;
          
          continue;
          break;
          }
        case 'Bobs_playNum0_86': {
          const v714 = v637[1];
          undefined /* setApiDetails */;
          ;
          ;
          const v745 = v714[stdlib.checkedBigNumberify('./index.rsh:65:9:spread', stdlib.UInt_max, '0')];
          const v746 = stdlib.addressEq(v636, v536);
          const v747 = v746 ? false : true;
          stdlib.assert(v747, {
            at: './index.rsh:76:16:application',
            fs: ['at ./index.rsh:75:7:application call to [unknown function] (defined at: ./index.rsh:75:7:function exp)'],
            msg: 'A deployer cannot participate',
            who: 'Alice'
            });
          const v748 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v636), null);
          let v749;
          switch (v748[0]) {
            case 'None': {
              const v750 = v748[1];
              v749 = true;
              
              break;
              }
            case 'Some': {
              const v751 = v748[1];
              v749 = false;
              
              break;
              }
            }
          stdlib.assert(v749, {
            at: './index.rsh:77:16:application',
            fs: ['at ./index.rsh:75:7:application call to [unknown function] (defined at: ./index.rsh:75:7:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const v752 = stdlib.lt(v571, stdlib.checkedBigNumberify('./index.rsh:6:22:decimal', stdlib.UInt_max, '3'));
          const v754 = stdlib.mod(v571, stdlib.checkedBigNumberify('./index.rsh:7:24:decimal', stdlib.UInt_max, '10'));
          const v755 = await stdlib.Array_asyncReduce([v573], false, async([v757], v756, v758) => {
            const v759 = stdlib.eq(v745, v757);
            const v761 = v756 ? v756 : v759;
            
            return v761;})
          if (v755) {
            const v762 = false;
            await txn4.getOutput('Bobs_playNum', 'v762', ctc10, v762);
            const v770 = stdlib.Array_set(v573, v754, v745);
            const cv571 = v571;
            const cv572 = v752;
            const cv573 = v770;
            const cv574 = v638;
            const cv580 = v580;
            
            v571 = cv571;
            v572 = cv572;
            v573 = cv573;
            v574 = cv574;
            v580 = cv580;
            
            continue;}
          else {
            await stdlib.mapSet(map0, v636, v745);
            const v775 = true;
            await txn4.getOutput('Bobs_playNum', 'v775', ctc10, v775);
            const v783 = stdlib.Array_set(v573, v754, v745);
            const v785 = stdlib.add(v571, stdlib.checkedBigNumberify('./index.rsh:96:50:decimal', stdlib.UInt_max, '1'));
            const cv571 = v785;
            const cv572 = v752;
            const cv573 = v783;
            const cv574 = v638;
            const cv580 = v580;
            
            v571 = cv571;
            v572 = cv572;
            v573 = cv573;
            v574 = cv574;
            v580 = cv580;
            
            continue;}
          break;
          }
        }}
    
    }
  const txn4 = await (ctc.sendrecv({
    args: [v536, v537, v539, v540, v571, v580, v533, v532],
    evt_cnt: 2,
    funcNum: 4,
    lct: v574,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:118:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v797, v798], secs: v800, time: v799, didSend: v295, from: v796 } = txn4;
      
      ;
      
      const v805 = stdlib.checkedBigNumberify('./index.rsh:125:42:decimal', stdlib.UInt_max, '0');
      const v806 = true;
      const v807 = v799;
      const v813 = v580;
      
      if (await (async () => {
        
        return v806;})()) {
        const v823 = stdlib.add(v807, v539);
        sim_r.isHalt = false;
        }
      else {
        const v962 = v813[stdlib.checkedBigNumberify('./index.rsh:165:19:application', stdlib.UInt_max, '0')];
        const v963 = v962[stdlib.checkedBigNumberify('./index.rsh:165:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v536,
          tok: v537
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v537
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
    tys: [ctc11, ctc3, ctc1, ctc6, ctc1, ctc14, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v797, v798], secs: v800, time: v799, didSend: v295, from: v796 } = txn4;
  ;
  const v801 = stdlib.addressEq(v536, v796);
  stdlib.assert(v801, {
    at: './index.rsh:118:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v802 = stdlib.digest(ctc5, [v797, v798]);
  const v803 = stdlib.digestEq(v540, v802);
  stdlib.assert(v803, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:119:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.playingOver(v798), {
    at: './index.rsh:121:25:application',
    fs: ['at ./index.rsh:121:25:application call to [unknown function] (defined at: ./index.rsh:121:25:function exp)', 'at ./index.rsh:121:25:application call to "liftedInteract" (defined at: ./index.rsh:121:25:application)'],
    msg: 'playingOver',
    who: 'Alice'
    });
  
  let v805 = stdlib.checkedBigNumberify('./index.rsh:125:42:decimal', stdlib.UInt_max, '0');
  let v806 = true;
  let v807 = v799;
  let v813 = v580;
  
  while (await (async () => {
    
    return v806;})()) {
    const v823 = stdlib.add(v807, v539);
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc15],
      timeoutAt: ['time', v823],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v536, v537, v539, v571, v798, v805, v813, v823],
        evt_cnt: 0,
        funcNum: 7,
        lct: v807,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:160:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v958, time: v957, didSend: v439, from: v956 } = txn6;
          
          ;
          const cv805 = v805;
          const cv806 = false;
          const cv807 = v957;
          const cv813 = v813;
          
          await (async () => {
            const v805 = cv805;
            const v806 = cv806;
            const v807 = cv807;
            const v813 = cv813;
            
            if (await (async () => {
              
              return v806;})()) {
              const v823 = stdlib.add(v807, v539);
              sim_r.isHalt = false;
              }
            else {
              const v962 = v813[stdlib.checkedBigNumberify('./index.rsh:165:19:application', stdlib.UInt_max, '0')];
              const v963 = v962[stdlib.checkedBigNumberify('./index.rsh:165:19:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v536,
                tok: v537
                });
              
              sim_r.txns.push({
                kind: 'halt',
                tok: v537
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
        tys: [ctc11, ctc3, ctc1, ctc1, ctc1, ctc1, ctc14, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v958, time: v957, didSend: v439, from: v956 } = txn6;
      ;
      const v959 = stdlib.addressEq(v536, v956);
      stdlib.assert(v959, {
        at: './index.rsh:160:15:dot',
        fs: ['at ./index.rsh:159:42:application call to [unknown function] (defined at: ./index.rsh:159:42:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      const cv805 = v805;
      const cv806 = false;
      const cv807 = v957;
      const cv813 = v813;
      
      v805 = cv805;
      v806 = cv806;
      v807 = cv807;
      v813 = cv813;
      
      continue;
      }
    else {
      const {data: [v849], secs: v851, time: v850, didSend: v383, from: v848 } = txn5;
      switch (v849[0]) {
        case 'Bobs_seeOutcome0_312': {
          const v852 = v849[1];
          undefined /* setApiDetails */;
          ;
          const v859 = stdlib.addressEq(v848, v536);
          const v860 = v859 ? false : true;
          stdlib.assert(v860, {
            at: './index.rsh:140:16:application',
            fs: ['at ./index.rsh:139:7:application call to [unknown function] (defined at: ./index.rsh:139:7:function exp)'],
            msg: 'A deployer cannot participate',
            who: 'Alice'
            });
          const v861 = v813[stdlib.checkedBigNumberify('./index.rsh:142:24:application', stdlib.UInt_max, '0')];
          const v862 = v861[stdlib.checkedBigNumberify('./index.rsh:142:24:application', stdlib.UInt_max, '0')];
          const v863 = stdlib.gt(v862, stdlib.checkedBigNumberify('./index.rsh:142:34:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v863, {
            at: './index.rsh:142:16:application',
            fs: ['at ./index.rsh:139:7:application call to [unknown function] (defined at: ./index.rsh:139:7:function exp)'],
            msg: 'NFT Balance insufficient for transfer',
            who: 'Alice'
            });
          const v864 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v848), null);
          const v865 = ['Some', v798];
          const v866 = stdlib.digest(ctc16, [v864]);
          const v868 = stdlib.digest(ctc16, [v865]);
          const v869 = stdlib.digestEq(v866, v868);
          const v870 = v869 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          await txn5.getOutput('Bobs_seeOutcome', 'v870', ctc1, v870);
          const v876 = stdlib.eq(v870, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v876) {
            const v882 = stdlib.sub(v862, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'));
            const v885 = v861[stdlib.checkedBigNumberify('./index.rsh:147:41:application', stdlib.UInt_max, '1')];
            const v886 = v861[stdlib.checkedBigNumberify('./index.rsh:147:41:application', stdlib.UInt_max, '2')];
            const v887 = [v882, v885, v886];
            const v888 = stdlib.Array_set(v813, stdlib.checkedBigNumberify('./index.rsh:147:41:application', stdlib.UInt_max, '0'), v887);
            ;
            const v889 = stdlib.lt(v805, v571);
            const v891 = stdlib.add(v805, stdlib.checkedBigNumberify('./index.rsh:151:28:decimal', stdlib.UInt_max, '1'));
            const cv805 = v891;
            const cv806 = v889;
            const cv807 = v850;
            const cv813 = v888;
            
            v805 = cv805;
            v806 = cv806;
            v807 = cv807;
            v813 = cv813;
            
            continue;}
          else {
            const v893 = stdlib.lt(v805, v571);
            const v895 = stdlib.add(v805, stdlib.checkedBigNumberify('./index.rsh:151:28:decimal', stdlib.UInt_max, '1'));
            const cv805 = v895;
            const cv806 = v893;
            const cv807 = v850;
            const cv813 = v813;
            
            v805 = cv805;
            v806 = cv806;
            v807 = cv807;
            v813 = cv813;
            
            continue;}
          break;
          }
        case 'Winner_showWinner0_312': {
          const v904 = v849[1];
          undefined /* setApiDetails */;
          ;
          await txn5.getOutput('Winner_showWinner', 'v798', ctc1, v798);
          const cv805 = v805;
          const cv806 = true;
          const cv807 = v850;
          const cv813 = v813;
          
          v805 = cv805;
          v806 = cv806;
          v807 = cv807;
          v813 = cv813;
          
          continue;
          break;
          }
        }}
    
    }
  const v962 = v813[stdlib.checkedBigNumberify('./index.rsh:165:19:application', stdlib.UInt_max, '0')];
  const v963 = v962[stdlib.checkedBigNumberify('./index.rsh:165:19:application', stdlib.UInt_max, '0')];
  ;
  stdlib.protect(ctc0, await interact.seeOutcome(), {
    at: './index.rsh:167:24:application',
    fs: ['at ./index.rsh:167:24:application call to [unknown function] (defined at: ./index.rsh:167:24:function exp)', 'at ./index.rsh:167:24:application call to "liftedInteract" (defined at: ./index.rsh:167:24:application)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  
  
  };
export async function _Bobs_optIn8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bobs_optIn8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bobs_optIn8 expects to receive an interact object as its second argument.`));}
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
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Data({
    Bobs_optIn0_86: ctc10,
    Bobs_playNum0_86: ctc11
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v536, v537, v539, v540, v571, v573, v580, v590] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc3, ctc4, ctc1, ctc5, ctc1, ctc6, ctc9, ctc1]);
  const v611 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:99:23:application call to [unknown function] (defined at: ./index.rsh:99:23:function exp)', 'at ./index.rsh:62:49:application call to "runBobs_optIn0_86" (defined at: ./index.rsh:99:10:function exp)', 'at ./index.rsh:62:49:application call to [unknown function] (defined at: ./index.rsh:62:49:function exp)'],
    msg: 'in',
    who: 'Bobs_optIn'
    });
  const v615 = ['Bobs_optIn0_86', v611];
  
  const txn1 = await (ctc.sendrecv({
    args: [v536, v537, v539, v540, v571, v573, v580, v590, v615],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:60:27:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:100:24:decimal', stdlib.UInt_max, '0'), v537]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v637], secs: v639, time: v638, didSend: v210, from: v636 } = txn1;
      
      switch (v637[0]) {
        case 'Bobs_optIn0_86': {
          const v640 = v637[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bobs_optIn"
            });
          ;
          ;
          const v664 = await txn1.getOutput('Bobs_optIn', 'v537', ctc4, v537);
          
          const v1559 = v571;
          const v1561 = v573;
          const v1563 = v580;
          const v1564 = stdlib.add(v638, v539);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Bobs_playNum0_86': {
          const v714 = v637[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc5, ctc1, ctc6, ctc9, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v637], secs: v639, time: v638, didSend: v210, from: v636 } = txn1;
  switch (v637[0]) {
    case 'Bobs_optIn0_86': {
      const v640 = v637[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v664 = await txn1.getOutput('Bobs_optIn', 'v537', ctc4, v537);
      if (v210) {
        stdlib.protect(ctc0, await interact.out(v640, v664), {
          at: './index.rsh:99:11:application',
          fs: ['at ./index.rsh:99:11:application call to [unknown function] (defined at: ./index.rsh:99:11:function exp)', 'at ./index.rsh:101:10:application call to "k" (defined at: ./index.rsh:100:32:function exp)', 'at ./index.rsh:100:32:application call to [unknown function] (defined at: ./index.rsh:100:32:function exp)'],
          msg: 'out',
          who: 'Bobs_optIn'
          });
        }
      else {
        }
      
      const v1559 = v571;
      const v1561 = v573;
      const v1563 = v580;
      const v1564 = stdlib.add(v638, v539);
      return;
      
      break;
      }
    case 'Bobs_playNum0_86': {
      const v714 = v637[1];
      return;
      break;
      }
    }
  
  
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
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    Bobs_optIn0_86: ctc11,
    Bobs_playNum0_86: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v536, v537, v539, v540, v571, v573, v580, v590] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc3, ctc4, ctc1, ctc5, ctc1, ctc6, ctc9, ctc1]);
  const v592 = ctc.selfAddress();
  const v594 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:68:7:application call to [unknown function] (defined at: ./index.rsh:68:7:function exp)', 'at ./index.rsh:62:49:application call to "runBobs_playNum0_86" (defined at: ./index.rsh:65:9:function exp)', 'at ./index.rsh:62:49:application call to [unknown function] (defined at: ./index.rsh:62:49:function exp)'],
    msg: 'in',
    who: 'Bobs_playNum'
    });
  const v598 = stdlib.addressEq(v592, v536);
  const v599 = v598 ? false : true;
  stdlib.assert(v599, {
    at: './index.rsh:69:15:application',
    fs: ['at ./index.rsh:68:7:application call to [unknown function] (defined at: ./index.rsh:68:14:function exp)', 'at ./index.rsh:68:7:application call to [unknown function] (defined at: ./index.rsh:68:7:function exp)', 'at ./index.rsh:62:49:application call to "runBobs_playNum0_86" (defined at: ./index.rsh:65:9:function exp)', 'at ./index.rsh:62:49:application call to [unknown function] (defined at: ./index.rsh:62:49:function exp)'],
    msg: 'A deployer cannot participate',
    who: 'Bobs_playNum'
    });
  const v600 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v592), null);
  let v601;
  switch (v600[0]) {
    case 'None': {
      const v602 = v600[1];
      v601 = true;
      
      break;
      }
    case 'Some': {
      const v603 = v600[1];
      v601 = false;
      
      break;
      }
    }
  stdlib.assert(v601, {
    at: './index.rsh:70:15:application',
    fs: ['at ./index.rsh:68:7:application call to [unknown function] (defined at: ./index.rsh:68:14:function exp)', 'at ./index.rsh:68:7:application call to [unknown function] (defined at: ./index.rsh:68:7:function exp)', 'at ./index.rsh:62:49:application call to "runBobs_playNum0_86" (defined at: ./index.rsh:65:9:function exp)', 'at ./index.rsh:62:49:application call to [unknown function] (defined at: ./index.rsh:62:49:function exp)'],
    msg: null,
    who: 'Bobs_playNum'
    });
  const v607 = ['Bobs_playNum0_86', v594];
  
  const txn1 = await (ctc.sendrecv({
    args: [v536, v537, v539, v540, v571, v573, v580, v590, v607],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:60:27:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:73:23:decimal', stdlib.UInt_max, '0'), v537]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v637], secs: v639, time: v638, didSend: v210, from: v636 } = txn1;
      
      switch (v637[0]) {
        case 'Bobs_optIn0_86': {
          const v640 = v637[1];
          
          break;
          }
        case 'Bobs_playNum0_86': {
          const v714 = v637[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bobs_playNum"
            });
          ;
          ;
          const v745 = v714[stdlib.checkedBigNumberify('./index.rsh:65:9:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v636), null);
          const v752 = stdlib.lt(v571, stdlib.checkedBigNumberify('./index.rsh:6:22:decimal', stdlib.UInt_max, '3'));
          const v754 = stdlib.mod(v571, stdlib.checkedBigNumberify('./index.rsh:7:24:decimal', stdlib.UInt_max, '10'));
          const v755 = await stdlib.Array_asyncReduce([v573], false, async([v757], v756, v758) => {
            const v759 = stdlib.eq(v745, v757);
            const v761 = v756 ? v756 : v759;
            
            return v761;})
          if (v755) {
            const v762 = false;
            const v763 = await txn1.getOutput('Bobs_playNum', 'v762', ctc7, v762);
            
            const v770 = stdlib.Array_set(v573, v754, v745);
            const v1787 = v571;
            const v1789 = v770;
            const v1791 = v580;
            if (v752) {
              const v1792 = stdlib.add(v638, v539);
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }}
          else {
            await stdlib.simMapSet(sim_r, 0, v636, v745);
            const v775 = true;
            const v776 = await txn1.getOutput('Bobs_playNum', 'v775', ctc7, v775);
            
            const v783 = stdlib.Array_set(v573, v754, v745);
            const v785 = stdlib.add(v571, stdlib.checkedBigNumberify('./index.rsh:96:50:decimal', stdlib.UInt_max, '1'));
            const v1844 = v785;
            const v1846 = v783;
            const v1848 = v580;
            if (v752) {
              const v1849 = stdlib.add(v638, v539);
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc5, ctc1, ctc6, ctc9, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v637], secs: v639, time: v638, didSend: v210, from: v636 } = txn1;
  switch (v637[0]) {
    case 'Bobs_optIn0_86': {
      const v640 = v637[1];
      return;
      break;
      }
    case 'Bobs_playNum0_86': {
      const v714 = v637[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v745 = v714[stdlib.checkedBigNumberify('./index.rsh:65:9:spread', stdlib.UInt_max, '0')];
      const v746 = stdlib.addressEq(v636, v536);
      const v747 = v746 ? false : true;
      stdlib.assert(v747, {
        at: './index.rsh:76:16:application',
        fs: ['at ./index.rsh:75:7:application call to [unknown function] (defined at: ./index.rsh:75:7:function exp)'],
        msg: 'A deployer cannot participate',
        who: 'Bobs_playNum'
        });
      const v748 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v636), null);
      let v749;
      switch (v748[0]) {
        case 'None': {
          const v750 = v748[1];
          v749 = true;
          
          break;
          }
        case 'Some': {
          const v751 = v748[1];
          v749 = false;
          
          break;
          }
        }
      stdlib.assert(v749, {
        at: './index.rsh:77:16:application',
        fs: ['at ./index.rsh:75:7:application call to [unknown function] (defined at: ./index.rsh:75:7:function exp)'],
        msg: null,
        who: 'Bobs_playNum'
        });
      const v752 = stdlib.lt(v571, stdlib.checkedBigNumberify('./index.rsh:6:22:decimal', stdlib.UInt_max, '3'));
      const v754 = stdlib.mod(v571, stdlib.checkedBigNumberify('./index.rsh:7:24:decimal', stdlib.UInt_max, '10'));
      const v755 = await stdlib.Array_asyncReduce([v573], false, async([v757], v756, v758) => {
        const v759 = stdlib.eq(v745, v757);
        const v761 = v756 ? v756 : v759;
        
        return v761;})
      if (v755) {
        const v762 = false;
        const v763 = await txn1.getOutput('Bobs_playNum', 'v762', ctc7, v762);
        if (v210) {
          stdlib.protect(ctc0, await interact.out(v714, v763), {
            at: './index.rsh:66:7:application',
            fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:7:function exp)', 'at ./index.rsh:87:16:application call to "reply" (defined at: ./index.rsh:75:7:function exp)', 'at ./index.rsh:75:7:application call to [unknown function] (defined at: ./index.rsh:75:7:function exp)'],
            msg: 'out',
            who: 'Bobs_playNum'
            });
          }
        else {
          }
        
        const v770 = stdlib.Array_set(v573, v754, v745);
        const v1787 = v571;
        const v1789 = v770;
        const v1791 = v580;
        if (v752) {
          const v1792 = stdlib.add(v638, v539);
          return;
          }
        else {
          return;
          }}
      else {
        await stdlib.mapSet(map0, v636, v745);
        const v775 = true;
        const v776 = await txn1.getOutput('Bobs_playNum', 'v775', ctc7, v775);
        if (v210) {
          stdlib.protect(ctc0, await interact.out(v714, v776), {
            at: './index.rsh:66:7:application',
            fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:7:function exp)', 'at ./index.rsh:91:16:application call to "reply" (defined at: ./index.rsh:75:7:function exp)', 'at ./index.rsh:75:7:application call to [unknown function] (defined at: ./index.rsh:75:7:function exp)'],
            msg: 'out',
            who: 'Bobs_playNum'
            });
          }
        else {
          }
        
        const v783 = stdlib.Array_set(v573, v754, v745);
        const v785 = stdlib.add(v571, stdlib.checkedBigNumberify('./index.rsh:96:50:decimal', stdlib.UInt_max, '1'));
        const v1844 = v785;
        const v1846 = v783;
        const v1848 = v580;
        if (v752) {
          const v1849 = stdlib.add(v638, v539);
          return;
          }
        else {
          return;
          }}
      break;
      }
    }
  
  
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
    Bobs_seeOutcome0_312: ctc8,
    Winner_showWinner0_312: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc2]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v536, v537, v539, v571, v798, v805, v813, v823] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1]);
  const v825 = ctc.selfAddress();
  const v827 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:131:7:application call to [unknown function] (defined at: ./index.rsh:131:7:function exp)', 'at ./index.rsh:125:34:application call to "runBobs_seeOutcome0_312" (defined at: ./index.rsh:128:9:function exp)', 'at ./index.rsh:125:34:application call to [unknown function] (defined at: ./index.rsh:125:34:function exp)'],
    msg: 'in',
    who: 'Bobs_seeOutcome'
    });
  const v829 = stdlib.addressEq(v825, v536);
  const v830 = v829 ? false : true;
  stdlib.assert(v830, {
    at: './index.rsh:132:15:application',
    fs: ['at ./index.rsh:131:7:application call to [unknown function] (defined at: ./index.rsh:131:11:function exp)', 'at ./index.rsh:131:7:application call to [unknown function] (defined at: ./index.rsh:131:7:function exp)', 'at ./index.rsh:125:34:application call to "runBobs_seeOutcome0_312" (defined at: ./index.rsh:128:9:function exp)', 'at ./index.rsh:125:34:application call to [unknown function] (defined at: ./index.rsh:125:34:function exp)'],
    msg: 'A deployer cannot participate',
    who: 'Bobs_seeOutcome'
    });
  const v831 = v813[stdlib.checkedBigNumberify('./index.rsh:134:23:application', stdlib.UInt_max, '0')];
  const v832 = v831[stdlib.checkedBigNumberify('./index.rsh:134:23:application', stdlib.UInt_max, '0')];
  const v833 = stdlib.gt(v832, stdlib.checkedBigNumberify('./index.rsh:134:33:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v833, {
    at: './index.rsh:134:15:application',
    fs: ['at ./index.rsh:131:7:application call to [unknown function] (defined at: ./index.rsh:131:11:function exp)', 'at ./index.rsh:131:7:application call to [unknown function] (defined at: ./index.rsh:131:7:function exp)', 'at ./index.rsh:125:34:application call to "runBobs_seeOutcome0_312" (defined at: ./index.rsh:128:9:function exp)', 'at ./index.rsh:125:34:application call to [unknown function] (defined at: ./index.rsh:125:34:function exp)'],
    msg: 'NFT Balance insufficient for transfer',
    who: 'Bobs_seeOutcome'
    });
  const v836 = ['Bobs_seeOutcome0_312', v827];
  
  const txn1 = await (ctc.sendrecv({
    args: [v536, v537, v539, v571, v798, v805, v813, v823, v836],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:137:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v849], secs: v851, time: v850, didSend: v383, from: v848 } = txn1;
      
      switch (v849[0]) {
        case 'Bobs_seeOutcome0_312': {
          const v852 = v849[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bobs_seeOutcome"
            });
          ;
          const v861 = v813[stdlib.checkedBigNumberify('./index.rsh:142:24:application', stdlib.UInt_max, '0')];
          const v862 = v861[stdlib.checkedBigNumberify('./index.rsh:142:24:application', stdlib.UInt_max, '0')];
          const v864 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v848), null);
          const v865 = ['Some', v798];
          const v866 = stdlib.digest(ctc10, [v864]);
          const v868 = stdlib.digest(ctc10, [v865]);
          const v869 = stdlib.digestEq(v866, v868);
          const v870 = v869 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v871 = await txn1.getOutput('Bobs_seeOutcome', 'v870', ctc1, v870);
          
          const v876 = stdlib.eq(v870, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v876) {
            const v882 = stdlib.sub(v862, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'));
            const v885 = v861[stdlib.checkedBigNumberify('./index.rsh:147:41:application', stdlib.UInt_max, '1')];
            const v886 = v861[stdlib.checkedBigNumberify('./index.rsh:147:41:application', stdlib.UInt_max, '2')];
            const v887 = [v882, v885, v886];
            const v888 = stdlib.Array_set(v813, stdlib.checkedBigNumberify('./index.rsh:147:41:application', stdlib.UInt_max, '0'), v887);
            sim_r.txns.push({
              kind: 'from',
              to: v848,
              tok: v537
              });
            const v889 = stdlib.lt(v805, v571);
            const v891 = stdlib.add(v805, stdlib.checkedBigNumberify('./index.rsh:151:28:decimal', stdlib.UInt_max, '1'));
            const v1901 = v891;
            const v1904 = v888;
            if (v889) {
              const v1905 = stdlib.add(v850, v539);
              sim_r.isHalt = false;
              }
            else {
              const v1906 = v888[stdlib.checkedBigNumberify('./index.rsh:165:19:application', stdlib.UInt_max, '0')];
              const v1907 = v1906[stdlib.checkedBigNumberify('./index.rsh:165:19:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v536,
                tok: v537
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v537
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v893 = stdlib.lt(v805, v571);
            const v895 = stdlib.add(v805, stdlib.checkedBigNumberify('./index.rsh:151:28:decimal', stdlib.UInt_max, '1'));
            const v1908 = v895;
            const v1911 = v813;
            if (v893) {
              const v1912 = stdlib.add(v850, v539);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v536,
                tok: v537
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v537
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'Winner_showWinner0_312': {
          const v904 = v849[1];
          
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
  const {data: [v849], secs: v851, time: v850, didSend: v383, from: v848 } = txn1;
  switch (v849[0]) {
    case 'Bobs_seeOutcome0_312': {
      const v852 = v849[1];
      undefined /* setApiDetails */;
      ;
      const v859 = stdlib.addressEq(v848, v536);
      const v860 = v859 ? false : true;
      stdlib.assert(v860, {
        at: './index.rsh:140:16:application',
        fs: ['at ./index.rsh:139:7:application call to [unknown function] (defined at: ./index.rsh:139:7:function exp)'],
        msg: 'A deployer cannot participate',
        who: 'Bobs_seeOutcome'
        });
      const v861 = v813[stdlib.checkedBigNumberify('./index.rsh:142:24:application', stdlib.UInt_max, '0')];
      const v862 = v861[stdlib.checkedBigNumberify('./index.rsh:142:24:application', stdlib.UInt_max, '0')];
      const v863 = stdlib.gt(v862, stdlib.checkedBigNumberify('./index.rsh:142:34:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v863, {
        at: './index.rsh:142:16:application',
        fs: ['at ./index.rsh:139:7:application call to [unknown function] (defined at: ./index.rsh:139:7:function exp)'],
        msg: 'NFT Balance insufficient for transfer',
        who: 'Bobs_seeOutcome'
        });
      const v864 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v848), null);
      const v865 = ['Some', v798];
      const v866 = stdlib.digest(ctc10, [v864]);
      const v868 = stdlib.digest(ctc10, [v865]);
      const v869 = stdlib.digestEq(v866, v868);
      const v870 = v869 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v871 = await txn1.getOutput('Bobs_seeOutcome', 'v870', ctc1, v870);
      if (v383) {
        stdlib.protect(ctc0, await interact.out(v852, v871), {
          at: './index.rsh:129:7:application',
          fs: ['at ./index.rsh:129:7:application call to [unknown function] (defined at: ./index.rsh:129:7:function exp)', 'at ./index.rsh:144:14:application call to "reply" (defined at: ./index.rsh:139:7:function exp)', 'at ./index.rsh:139:7:application call to [unknown function] (defined at: ./index.rsh:139:7:function exp)'],
          msg: 'out',
          who: 'Bobs_seeOutcome'
          });
        }
      else {
        }
      
      const v876 = stdlib.eq(v870, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v876) {
        const v882 = stdlib.sub(v862, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'));
        const v885 = v861[stdlib.checkedBigNumberify('./index.rsh:147:41:application', stdlib.UInt_max, '1')];
        const v886 = v861[stdlib.checkedBigNumberify('./index.rsh:147:41:application', stdlib.UInt_max, '2')];
        const v887 = [v882, v885, v886];
        const v888 = stdlib.Array_set(v813, stdlib.checkedBigNumberify('./index.rsh:147:41:application', stdlib.UInt_max, '0'), v887);
        ;
        const v889 = stdlib.lt(v805, v571);
        const v891 = stdlib.add(v805, stdlib.checkedBigNumberify('./index.rsh:151:28:decimal', stdlib.UInt_max, '1'));
        const v1901 = v891;
        const v1904 = v888;
        if (v889) {
          const v1905 = stdlib.add(v850, v539);
          return;
          }
        else {
          const v1906 = v888[stdlib.checkedBigNumberify('./index.rsh:165:19:application', stdlib.UInt_max, '0')];
          const v1907 = v1906[stdlib.checkedBigNumberify('./index.rsh:165:19:application', stdlib.UInt_max, '0')];
          ;
          return;
          }}
      else {
        const v893 = stdlib.lt(v805, v571);
        const v895 = stdlib.add(v805, stdlib.checkedBigNumberify('./index.rsh:151:28:decimal', stdlib.UInt_max, '1'));
        const v1908 = v895;
        const v1911 = v813;
        if (v893) {
          const v1912 = stdlib.add(v850, v539);
          return;
          }
        else {
          ;
          return;
          }}
      break;
      }
    case 'Winner_showWinner0_312': {
      const v904 = v849[1];
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
    Bobs_seeOutcome0_312: ctc8,
    Winner_showWinner0_312: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v536, v537, v539, v571, v798, v805, v813, v823] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1]);
  const v840 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:153:29:application call to [unknown function] (defined at: ./index.rsh:153:29:function exp)', 'at ./index.rsh:125:34:application call to "runWinner_showWinner0_312" (defined at: ./index.rsh:153:11:function exp)', 'at ./index.rsh:125:34:application call to [unknown function] (defined at: ./index.rsh:125:34:function exp)'],
    msg: 'in',
    who: 'Winner_showWinner'
    });
  const v844 = ['Winner_showWinner0_312', v840];
  
  const txn1 = await (ctc.sendrecv({
    args: [v536, v537, v539, v571, v798, v805, v813, v823, v844],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:154:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v849], secs: v851, time: v850, didSend: v383, from: v848 } = txn1;
      
      switch (v849[0]) {
        case 'Bobs_seeOutcome0_312': {
          const v852 = v849[1];
          
          break;
          }
        case 'Winner_showWinner0_312': {
          const v904 = v849[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Winner_showWinner"
            });
          ;
          const v950 = await txn1.getOutput('Winner_showWinner', 'v798', ctc1, v798);
          
          const v1936 = v805;
          const v1939 = v813;
          const v1940 = stdlib.add(v850, v539);
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
  const {data: [v849], secs: v851, time: v850, didSend: v383, from: v848 } = txn1;
  switch (v849[0]) {
    case 'Bobs_seeOutcome0_312': {
      const v852 = v849[1];
      return;
      break;
      }
    case 'Winner_showWinner0_312': {
      const v904 = v849[1];
      undefined /* setApiDetails */;
      ;
      const v950 = await txn1.getOutput('Winner_showWinner', 'v798', ctc1, v798);
      if (v383) {
        stdlib.protect(ctc0, await interact.out(v904, v950), {
          at: './index.rsh:153:12:application',
          fs: ['at ./index.rsh:153:12:application call to [unknown function] (defined at: ./index.rsh:153:12:function exp)', 'at ./index.rsh:155:10:application call to "k" (defined at: ./index.rsh:154:22:function exp)', 'at ./index.rsh:154:22:application call to [unknown function] (defined at: ./index.rsh:154:22:function exp)'],
          msg: 'out',
          who: 'Winner_showWinner'
          });
        }
      else {
        }
      
      const v1936 = v805;
      const v1939 = v813;
      const v1940 = stdlib.add(v850, v539);
      return;
      
      break;
      }
    }
  
  
  };
export async function Bobs_optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bobs_optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bobs_optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 8) {return _Bobs_optIn8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
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
    impure: [`Bobs_optIn()uint64`, `Bobs_playNum(uint64)byte`, `Bobs_seeOutcome()uint64`, `Winner_showWinner()uint64`],
    pure: [],
    sigs: [`Bobs_optIn()uint64`, `Bobs_playNum(uint64)byte`, `Bobs_seeOutcome()uint64`, `Winner_showWinner()uint64`]
    },
  appApproval: `BiAVAAEIBCAoUAkHAuLC/MYM/MTQwQ3XxqyhC7kBAwpZMDhAoI0GJgMBAAEBACI1ADEYQQcaKmRJIls1ASRbNQIxGSMSQQAKMQAoIQevZkIG5zYaABdJQQBcIjUEIzUGSSEKDEAAJkkhCwxAABEhCxJEKjX/KDT/UCSvUEIAtiEKEkQqNf8pNP9QQgJ3SSEMDEAADiEMEkQqNf8oNP9QQgJiga3vmcgGEkQ2GgE1/yk0/1BCAH82GgIXNQQ2GgM2GgEXSYEGDEADV0kkDEAB1EkhBwxAAF0hBxJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABKIFZo6wMgY0AyENWw9ENP8xABJENP80AyEEWzQDIQVbNANXMCA0AyEGWyI0A1dYUDIGNANXqBFCBNNIJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/IQRbNf4hBVs1/VcwIDX8IQZbNftXWFA1+leoETX5STUFNfiABOOwEkw0+FCwMgY0AyENWwxENPgiVUAAKIAIAAAAAAAAAhk0/hZQsDT+FjUHNP80/jT9NPw0+yM0+jIGNPlCBEw0+FcBCDX3NPcXNfYxADT/E0QxAIgFnEk19CJVQAAGIzX1QgAGIjX1QgAANPVENPshDgw19DT7IQ8YNfMiNfIiNfE0+iQ08QskWBc18DT2NPASNPJJTTXyNPEjCEk18SEPDED/3TTyQQA6gAkAAAAAAAAC+gCwKDUHNP80/jT9NPw0+zT0NPoiJDTzC1I09hZQNPokSTTzCwghBlJQMgY0+UIDqDEAKCk09hZQZoAJAAAAAAAAAwcBsCk1BzT/NP40/TT8NPsjCDT0NPoiJDTzC1I09hZQNPokSTTzCwghBlJQMgY0+UIDY0khCAxAAFhIIQg0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gATiG7OpsDIGNAMhEFsPRDT/MQASRDT/NAMhBFs0AyEFWzQDIRFbNAMhEls0AyETWyIyBjQDV0gRQgN8SCEINAESRDQESSISTDQCEhFEKGRJNQNJSkpJVwAgNf8hBFs1/iEFWzX9IRFbNfwhEls1+yETWzX6V0gRNflJNQU1+IAEkE9kSTT4ULAyBjQDIRBbDEQ0+CJVQACZMQA0/xNENPlXABFJNfciW0k19iINRCMiMQCIA/EBKTT7FlABEk019YAIAAAAAAAAA2Y09RZQsDT1FjUHNPUiEkEAPLEisgEjshIlshAxALIUNP6yEbM0/zT+NP00/DT7NPojCDT6NPwMMgY09iMJFjT3VwgIUDT3VxABUEICoDT/NP40/TT8NPs0+iMINPo0/AwyBjT5QgKGgAgAAAAAAAADHjT7FlCwNPsWNQc0/zT+NP00/DT7NPojMgY0+UICXkkhCQxAAL5JJQxAAGwlEkQlNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BUkiWzX+JFs1/YAEEEatczT+FlA0/RZQsDT/MQASRDQDVzAgNP4WNP0WUAESRDT/NAMhBFs0AyEFWzQDIQZbNP0iIzIGNANXWBFCAeUhCRJEIQk0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gARBsUBNsDT/MQASRDT/NAMhBFs0AyEFWzQDVzAgIiMhBq8yBjQDV1ARQgEhSSMMQACDSCM0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQRbNf4hBVs1/VcwIDX8V1ARNfuABJqLkXSwNPtXABFJNfoiWyMIFjT6VwgIUDT6VxABUDX5IzT+iAJPNP8xABJENP80/hZQNP0WUDT8UDT5UChLAVcAYWdIIQk1ATIGNQJCAa1IIRSIAggiNAESRDQESSISTDQCEhFESTUFSUoiWzX/JFs1/oEQWzX9VxggNfyABKOJocE0/xZQNP4WUDT9FlA0/FCwgRGvSTX7VwARNfokrzT6VwgIUDT6VxABUDX5IRSIAauxIrIBIrISJbIQMgqyFDT/shGzMQA0/xZQNP0WUDT8UDT5UChLAVcAYWdIIzUBMgY1AkIBFTX/Nf41/TX8Nfs1+jX5Nfg19zT8QQA7NP40+Qg19jT3NPgWUDT5FlA0+lA0+xZQNP1QNP9QNPYWUChLAVcAf2cpSwFXf0JnSCQ1ATIGNQJCAMM09zT4FlA0+RZQNPpQNPsWUDT/UChLAVcAaWdIJTUBMgY1AkIAnTX/Nf41/TX8Nfs1+jX5Nfg19zT9QQA3NP40+Qg19jT3NPgWUDT5FlA0+hZQNPsWUDT8FlA0/1A09hZQKEsBVwBhZ0ghCDUBMgY1AkIAT7EisgE0/1cAESJbshIlshA097IUNPiyEbOxIrIBIrISJbIQMgmyFTIKshQ0+LIRs0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhDjE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghB6+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAlEkQ4EU8CEkQ4EhJEiQ==`,
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
                "name": "v537",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v538",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v539",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v540",
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
                "name": "v537",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v538",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v539",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v540",
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
                "name": "v797",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v798",
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
                    "name": "_Bobs_seeOutcome0_312",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Winner_showWinner0_312",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T22",
                "name": "v849",
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
                    "internalType": "enum _enum_T26",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bobs_optIn0_86",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T25",
                    "name": "_Bobs_playNum0_86",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T26",
                "name": "v637",
                "type": "tuple"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
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
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v537",
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
    "name": "_reach_oe_v762",
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
    "name": "_reach_oe_v775",
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
    "name": "_reach_oe_v798",
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
    "name": "_reach_oe_v870",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Bobs_optIn",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
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
                "name": "v797",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v798",
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
                    "name": "_Bobs_seeOutcome0_312",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Winner_showWinner0_312",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T22",
                "name": "v849",
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
                    "internalType": "enum _enum_T26",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bobs_optIn0_86",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T25",
                    "name": "_Bobs_playNum0_86",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T26",
                "name": "v637",
                "type": "tuple"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
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
  Bytecode: `0x6080604052604051620034df380380620034df833981016040819052620000269162000423565b6000805543600355620000386200024f565b6040805133815283516020808301919091528085015180516001600160a01b03168385015290810151606080840191909152818401516080840152015160a082015290517f112545cf4cc4ef4cc46259a35cf4621d5a4b14828a08081bb8649d32a39f1bd99181900360c00190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620001049290620001a2565b6060820152620001173415600762000225565b62000121620002b6565b33815260208084018051516001600160a01b031682840152805160409081015181850152905160609081015181850152840151608084015260016000819055439055516200017291839101620004f3565b6040516020818303038152906040526002908051906020019062000198929190620002f9565b50505050620005da565b620001ac62000388565b60005b60018110156200020257848160018110620001ce57620001ce620004dd565b6020020151828260018110620001e857620001e8620004dd565b602002015280620001f98162000573565b915050620001af565b5081818460018110620002195762000219620004dd565b60200201529392505050565b816200024b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528152602081016200028262000388565b81526040805160608101825260008082526020828101829052928201529101908152602001620002b162000388565b905290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001620002b162000388565b82805462000307906200059d565b90600052602060002090601f0160209004810192826200032b576000855562000376565b82601f106200034657805160ff191683800117855562000376565b8280016001018555821562000376579182015b828111156200037657825182559160200191906001019062000359565b5062000384929150620003d5565b5090565b60405180602001604052806001905b620003be604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003975790505090565b5b80821115620003845760008155600101620003d6565b604051608081016001600160401b03811182821017156200041d57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360a08112156200043757600080fd5b604080519081016001600160401b03811182821017156200046857634e487b7160e01b600052604160045260246000fd5b604052835181526080601f19830112156200048257600080fd5b6200048c620003ec565b60208501519092506001600160a01b0381168114620004aa57600080fd5b80835250604084015160208301526060840151604083015260808401516060830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b03908116825260208084015190911681830152604080840151818401526060808501518185015260808086015160e08601949291860160005b600181101562000567578251805183528581015186840152860151151586830152918401919083019060010162000535565b50505050505092915050565b60006000198214156200059657634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c90821680620005b257607f821691505b60208210811415620005d457634e487b7160e01b600052602260045260246000fd5b50919050565b612ef580620005ea6000396000f3fe6080604052600436106100e05760003560e01c806383aab11a11610084578063bf2c5b2411610056578063bf2c5b24146101f1578063de73699814610204578063ebdbfdcc14610217578063eda1b3931461022a57005b806383aab11a146101ab578063852dc7cf146101b3578063a2ac7bdf146101bb578063ab53f2c6146101ce57005b806364f351ea116100bd57806364f351ea1461014d5780637eea518c14610170578063821d5f8414610183578063832307571461019657005b80631e93b0f1146100e95780632c10a1591461010d5780633bc5b7bf1461012057005b366100e757005b005b3480156100f557600080fd5b506003545b6040519081526020015b60405180910390f35b6100e761011b3660046123ad565b61024a565b34801561012c57600080fd5b5061014061013b3660046123da565b61026e565b604051610104919061242b565b61016061015b36600461245b565b61029a565b6040519015158152602001610104565b6100e761017e3660046123ad565b6102d5565b6100e7610191366004612486565b6102f5565b3480156101a257600080fd5b506001546100fa565b6100fa610315565b6100fa610345565b6100e76101c9366004612486565b610375565b3480156101da57600080fd5b506101e3610395565b6040516101049291906124ce565b6100e76101ff3660046123ad565b610432565b6100e76102123660046123ad565b610452565b6100e7610225366004612508565b610472565b610232610492565b6040516001600160a01b039091168152602001610104565b610252611f66565b61026a610264368490038401846125d1565b826104bf565b5050565b6040805160608101825260008082526020820181905291810191909152610294826106e3565b92915050565b60006102a4611f99565b60208101805151600190525151604001518390526102c0611f66565b6102ca82826107b6565b602001519392505050565b6102dd611f66565b61026a6102ef368490038401846125d1565b82610d6c565b6102fd611f66565b61026a61030f36849003840184612634565b826107b6565b600061031f611fe3565b60208101515160009052610331611f66565b61033b8282610f6f565b6040015192915050565b600061034f611fe3565b60208101515160019052610361611f66565b61036b8282610f6f565b6060015192915050565b61037d611f66565b61026a61038f368490038401846126d8565b82610f6f565b6000606060005460028080546103aa90612762565b80601f01602080910402602001604051908101604052809291908181526020018280546103d690612762565b80156104235780601f106103f857610100808354040283529160200191610423565b820191906000526020600020905b81548152906001019060200180831161040657829003601f168201915b50505050509050915091509091565b61043a611f66565b61026a61044c368490038401846125d1565b82611488565b61045a611f66565b61026a61046c368490038401846125d1565b82611646565b61047a611f66565b61026a61048c36849003840184612797565b82611804565b600061049c611f99565b602081015151600090526104ae611f66565b6104b882826107b6565b5192915050565b6104cf600160005414600b611a1b565b81516104ea9015806104e357508251600154145b600c611a1b565b6000808055600280546104fc90612762565b80601f016020809104026020016040519081016040528092919081815260200182805461052890612762565b80156105755780601f1061054a57610100808354040283529160200191610575565b820191906000526020600020905b81548152906001019060200180831161055857829003601f168201915b505050505080602001905181019061058d9190612911565b905061059761201c565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133856040516105c892919061292d565b60405180910390a16105dc34156008611a1b565b608082015151516105ef90600190612981565b8151526080820180515160209081015183519091015280515160409081015183519015159101525181516106269190600090611a41565b81602001819052506106486106413384602001516001611ab5565b6009611a1b565b8151610660906001600160a01b03163314600a611a1b565b61066861204c565b82516001600160a01b039081168252602080850151909116818301526040808501518184015260608086015190840152838201516080840152600260005543600155516106b7918391016129d7565b604051602081830303815290604052600290805190602001906106db92919061208d565b505050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561072f5761072f6123f7565b14156107a6576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610770576107706123f7565b6001811115610781576107816123f7565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b6107c66008600054146028611a1b565b81516107e19015806107da57508251600154145b6029611a1b565b6000808055600280546107f390612762565b80601f016020809104026020016040519081016040528092919081815260200182805461081f90612762565b801561086c5780601f106108415761010080835404028352916020019161086c565b820191906000526020600020905b81548152906001019060200180831161084f57829003601f168201915b50505050508060200190518101906108849190612a93565b90506108cc6040805161010081018252600060e08201818152825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915290565b6108dd8260e001514310602a611a1b565b7f56826bb63c02948efe9b1cf0100ab0c5ab4e6b1c941416ebf47a3437725f6b36338560405161090e929190612b20565b60405180910390a16000602085015151516001811115610930576109306123f7565b1415610a325761094234156022611a1b565b61095c6109553384602001516000611ab5565b6023611a1b565b6020808301516040516001600160a01b0390911681527fd777ede7ba9e3952319f689cb56268cf97f018f9adacc84500f57bdfe617a4bc910160405180910390a160208201516001600160a01b031683526109b5612111565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835182015260608086015184518201526080808701518486018051919091528051600195019490945260a087015184519093019290925282514391015260c085015191510152610a2c81611acd565b50610d66565b6001602085015151516001811115610a4c57610a4c6123f7565b1415610d6657602084015151604001518152610a6a34156024611a1b565b610a84610a7d3384602001516000611ab5565b6025611a1b565b8151610aaa906001600160a01b03163314610aa0576001610aa3565b60005b6026611a1b565b6000610ab5336106e3565b516001811115610ac757610ac76123f7565b1415610ad95760016020820152610b04565b6001610ae4336106e3565b516001811115610af657610af66123f7565b1415610b0457600060208201525b610b1381602001516027611a1b565b608082018051600311604083015251610b2e90600a90612b72565b6060820152600060a082018190525b600a811015610b9c578260a0015181600a8110610b5c57610b5c612955565b602002015160c083015260a0820151610b7d5760c082015182515114610b83565b8160a001515b151560a083015280610b9481612b94565b915050610b3d565b5060a08101511580156080830152610c8657604051600081527f8c6aa5697c80084d5e4346421055a1b4f5dd0ef9bf1f1ab024666605860d4e669060200160405180910390a160006020840152610bf1612111565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835182015260608086015184518201526080860151838501805191909152918501519151911515919092015260a084015190830151835151610c5c929190611c14565b6020820180516040019190915280514360609091015260c0840151905160800152610a2c81611acd565b33600090815260046020908152604091829020805460ff1916600190811782558451519181019190915591519182527fdfc658289aadc38cb720d949aaa497bdd1f06ef30d41d144dab3b3b8e8ae9721910160405180910390a160016020840152610cef612111565b825181516001600160a01b039182169052602080850151835192169101526040808401518251909101526060808401518251909101526080830151610d3690600190612981565b60208083018051929092526040840151915191151591015260a08301516060830151835151610c5c929190611c14565b50505050565b610d7c600260005414600f611a1b565b8151610d97901580610d9057508251600154145b6010611a1b565b600080805560028054610da990612762565b80601f0160208091040260200160405190810160405280929190818152602001828054610dd590612762565b8015610e225780601f10610df757610100808354040283529160200191610e22565b820191906000526020600020905b815481529060010190602001808311610e0557829003601f168201915b5050505050806020019051810190610e3a9190612911565b9050610e44612148565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503385604051610e7592919061292d565b60405180910390a1610e893415600d611a1b565b8151610ea1906001600160a01b03163314600e611a1b565b80516000908190528151602001819052815160400181905281516060018190528151608001819052815160a001819052815160c001819052815160e00181905281516101000181905281516101200152610ef9612111565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152606080860151845182015282840180516000905280516001940193909352845183519092019190915281514391015260808085015191510152610f6881611acd565b5050505050565b610f7f600760005414601a611a1b565b8151610f9a901580610f9357508251600154145b601b611a1b565b600080805560028054610fac90612762565b80601f0160208091040260200160405190810160405280929190818152602001828054610fd890612762565b80156110255780601f10610ffa57610100808354040283529160200191611025565b820191906000526020600020905b81548152906001019060200180831161100857829003601f168201915b505050505080602001905181019061103d9190612baf565b905061108c6040805160c081018252600060608083018281526080840183905260a084018390528352602080840183905284519182018552828252810182905280840191909152909182015290565b61109d8260e001514310601c611a1b565b7fcb93ca3d7dcbece2320bd6a96f50eaa8eba4e5546e6a4b957804c0c185adc96233856040516110ce929190612c35565b60405180910390a160006020850151515160018111156110f0576110f06123f7565b14156113965761110234156016611a1b565b8151611128906001600160a01b0316331461111e576001611121565b60005b6017611a1b565b60c0820151515161113c9015156018611a1b565b8051600190526080820151815160409081019190915281519051611163919060200161242b565b6040516020818303038152906040528051906020012060001c611185336106e3565b604051602001611195919061242b565b6040516020818303038152906040528051906020012060001c146111ba5760016111bd565b60005b60208281018290526040519182527f800d3a60e2447d6d198ae145d197444c00f965546f713d47525d0e9f1000c1aa910160405180910390a16020810180516040850152516112ff5760c0820151515161121990600190612c88565b604082810180519290925260c0840180515160209081015184518201529051518201519251921515929091019190915282015161125890336001611c7c565b61126061215b565b825181516001600160a01b0391821690526020808501518351921691015260408084015182519091015260608084015182519091015260808084015182519091015260a08301516112b390600190612981565b6020808301805192909252606085015160a086015183519111910152514360409182015260c0840151908301516112ed9190600090611a41565b602082015160600152610a2c81611c95565b61130761215b565b825181516001600160a01b0391821690526020808501518351921691015260408084015182519091015260608084015182519091015260808084015182519091015260a083015161135a90600190612981565b602080830180519290925260608086015160a0870151845191119201919091528151436040919091015260c085015191510152610a2c81611c95565b60016020850151515160018111156113b0576113b06123f7565b1415610d66576113c234156019611a1b565b7f0a25f1ea3080eff70c4a96a8cb18539ed86505bfb005380de4e2e65673ef9dba82608001516040516113f791815260200190565b60405180910390a16080820151606084015261141161215b565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152606080860151845182015260808087015185519091015260a08601518385018051919091528051600194019390935282514392019190915260c085015191510152610a2c81611c95565b611498600760005414601f611a1b565b81516114b39015806114ac57508251600154145b6020611a1b565b6000808055600280546114c590612762565b80601f01602080910402602001604051908101604052809291908181526020018280546114f190612762565b801561153e5780601f106115135761010080835404028352916020019161153e565b820191906000526020600020905b81548152906001019060200180831161152157829003601f168201915b50505050508060200190518101906115569190612baf565b905061156a8160e001514310156021611a1b565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb338460405161159b92919061292d565b60405180910390a16115af3415601d611a1b565b80516115c7906001600160a01b03163314601e611a1b565b6115cf61215b565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518351820152606080850151845182015260808086015185519091015260a08501518385018051919091528051600094019390935282514392019190915260c084015191510152610d6681611c95565b611656600860005414602d611a1b565b815161167190158061166a57508251600154145b602e611a1b565b60008080556002805461168390612762565b80601f01602080910402602001604051908101604052809291908181526020018280546116af90612762565b80156116fc5780601f106116d1576101008083540402835291602001916116fc565b820191906000526020600020905b8154815290600101906020018083116116df57829003601f168201915b50505050508060200190518101906117149190612a93565b90506117288160e00151431015602f611a1b565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd338460405161175992919061292d565b60405180910390a161176d3415602b611a1b565b8051611785906001600160a01b03163314602c611a1b565b61178d612111565b815181516001600160a01b0391821690526020808401518351921691810191909152604080840151835182015260608085015184518201526080808601518486018051919091528051600095019490945260a086015184519093019290925282514391015260c084015191510152610d6681611acd565b6118146004600054146014611a1b565b815161182f90158061182857508251600154145b6015611a1b565b60008080556002805461184190612762565b80601f016020809104026020016040519081016040528092919081815260200182805461186d90612762565b80156118ba5780601f1061188f576101008083540402835291602001916118ba565b820191906000526020600020905b81548152906001019060200180831161189d57829003601f168201915b50505050508060200190518101906118d29190612c9f565b604080513381528551602080830191909152808701518051838501520151606082015290519192507fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a919081900360800190a161193134156011611a1b565b8051611949906001600160a01b031633146012611a1b565b6020808401518051908201516040516119979361197193929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260600151146013611a1b565b61199f61215b565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183518201526080808501518451606090810191909152878401518401518551909201919091528284018051600090528051600194019390935282514392019190915260a084015191510152610d6681611c95565b8161026a5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b611a49612199565b60005b6001811015611a9557848160018110611a6757611a67612955565b6020020151828260018110611a7e57611a7e612955565b602002015280611a8d81612b94565b915050611a4c565b5081818460018110611aa957611aa9612955565b60200201529392505050565b6000611ac383853085611d80565b90505b9392505050565b60408051602081019091526000815281602001516020015115611ba757815160400151602083015160600151611b039190612981565b8152611b0d6121e4565b8251516001600160a01b039081168252835160209081015190911681830152835160409081015181840152845160609081015190840152818501805151608080860191909152815183015160a08601529051015160c0840152835160e084015260086000554360015551611b8391839101612d31565b60405160208183030381529060405260029080519060200190610d6692919061208d565b611baf612247565b8251516001600160a01b0390811682528351602090810151909116818301528351604090810151818401528451606090810151908401528185018051516080808601919091529051015160a084015260046000554360015551611b8391839101612dc4565b611c1c61228f565b60005b600a811015611c68578481600a8110611c3a57611c3a612955565b60200201518282600a8110611c5157611c51612955565b602002015280611c6081612b94565b915050611c1f565b50818184600a8110611aa957611aa9612955565b611c87838383611e5a565b611c9057600080fd5b505050565b60408051602081019091526000815281602001516020015115611d4b57816000015160400151826020015160400151611cce9190612981565b8152611cd86122ae565b8251516001600160a01b03908116825283516020908101519091168183015283516040908101518184015284516060908101518185015285516080908101519085015282860180515160a086015251015160c0840152835160e084015260076000554360015551611b8391839101612e17565b8151602080820151915190840151606001515151611d6a929190611c7c565b6000808055600181905561026a906002906122fe565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611de791612e86565b60006040518083038185875af1925050503d8060008114611e24576040519150601f19603f3d011682016040523d82523d6000602084013e611e29565b606091505b5091509150611e3a82826001611f2b565b5080806020019051810190611e4f9190612ea2565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611eb991612e86565b60006040518083038185875af1925050503d8060008114611ef6576040519150601f19603f3d011682016040523d82523d6000602084013e611efb565b606091505b5091509150611f0c82826002611f2b565b5080806020019051810190611f219190612ea2565b9695505050505050565b60608315611f3a575081611ac6565b825115611f4a5782518084602001fd5b60405163100960cb60e01b815260048101839052602401611a38565b604051806080016040528060006001600160a01b0316815260200160001515815260200160008152602001600081525090565b604051806040016040528060008152602001611fde60408051608081018252600060208083018281528385018390528451918201909452908152606082015290815290565b905290565b604051806040016040528060008152602001611fde60408051608081018252600060208201818152928201819052606082015290815290565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101611fde612199565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001611fde612199565b82805461209990612762565b90600052602060002090601f0160209004810192826120bb5760008555612101565b82601f106120d457805160ff1916838001178555612101565b82800160010185558215612101579182015b828111156121015782518255916020019190600101906120e6565b5061210d92915061233b565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290815260208101611fde612350565b6040518060200160405280611fde61228f565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c082019290925290815260208101611fde612383565b60405180602001604052806001905b6121ce604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816121a85790505090565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200161222d61228f565b815260200161223a612199565b8152602001600081525090565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001611fde612199565b604051806101400160405280600a906020820280368337509192915050565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200161223a612199565b50805461230a90612762565b6000825580601f1061231a575050565b601f016020900490600052602060002090810190612338919061233b565b50565b5b8082111561210d576000815560010161233c565b6040805160a0810182526000808252602082015290810161236f61228f565b815260200160008152602001611fde612199565b60405180608001604052806000815260200160001515815260200160008152602001611fde612199565b6000604082840312156123bf57600080fd5b50919050565b6001600160a01b038116811461233857600080fd5b6000602082840312156123ec57600080fd5b8135611ac6816123c5565b634e487b7160e01b600052602160045260246000fd5b6002811061233857634e487b7160e01b600052602160045260246000fd5b8151606082019061243b8161240d565b808352506020830151151560208301526040830151604083015292915050565b60006020828403121561246d57600080fd5b5035919050565b6000608082840312156123bf57600080fd5b60006080828403121561249857600080fd5b611ac68383612474565b60005b838110156124bd5781810151838201526020016124a5565b83811115610d665750506000910152565b82815260406020820152600082518060408401526124f38160608501602087016124a2565b601f01601f1916919091016060019392505050565b6000606082840312156123bf57600080fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156125535761255361251a565b60405290565b6040516020810167ffffffffffffffff811182821017156125535761255361251a565b6040516060810167ffffffffffffffff811182821017156125535761255361251a565b604051610100810167ffffffffffffffff811182821017156125535761255361251a565b801515811461233857600080fd5b6000604082840312156125e357600080fd5b6040516040810181811067ffffffffffffffff821117156126065761260661251a565b60405282358152602083013561261b816125c3565b60208201529392505050565b6002811061233857600080fd5b6000818303608081121561264757600080fd5b61264f612530565b833581526060601f198301121561266557600080fd5b61266d612559565b61267561257c565b602086013561268381612627565b81526040860135612693816125c3565b806020830152506020605f19850112156126ac57600080fd5b6126b4612559565b60609690960135865260408101959095529384526020810193909352509092915050565b600081830360808112156126eb57600080fd5b6126f3612530565b833581526060601f198301121561270957600080fd5b612711612559565b915061271b61257c565b602085013561272981612627565b81526040850135612739816125c3565b6020820152606085013561274c816125c3565b6040820152825260208101919091529392505050565b600181811c9082168061277657607f821691505b602082108114156123bf57634e487b7160e01b600052602260045260246000fd5b600081830360608112156127aa57600080fd5b6127b2612530565b833581526040601f19830112156127c857600080fd5b6127d0612530565b60208581013582526040909501358582015293810193909352509092915050565b80516107b1816123c5565b600082601f83011261280d57600080fd5b612815612559565b8060608085018681111561282857600080fd5b855b81811015612879578281890312156128425760008081fd5b61284a61257c565b8151815260208083015181830152604080840151612867816125c3565b9083015290865290940193820161282a565b50919695505050505050565b600060e0828403121561289757600080fd5b60405160a0810181811067ffffffffffffffff821117156128ba576128ba61251a565b806040525080915082516128cd816123c5565b815260208301516128dd816123c5565b80602083015250604083015160408201526060830151606082015261290584608085016127fc565b60808201525092915050565b600060e0828403121561292357600080fd5b611ac68383612885565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156129945761299461296b565b500190565b8060005b6001811015610d6657815180518552602080820151818701526040918201511515918601919091526060909401939091019060010161299d565b81516001600160a01b03908116825260208084015190911690820152604080830151908201526060808301519082015260808083015160e0830191612a1e90840182612999565b5092915050565b600082601f830112612a3657600080fd5b60405161014080820182811067ffffffffffffffff82111715612a5b57612a5b61251a565b60405283018185821115612a6e57600080fd5b845b82811015612a88578051825260209182019101612a70565b509195945050505050565b60006102608284031215612aa657600080fd5b612aae61259f565b612ab7836127f1565b8152612ac5602084016127f1565b6020820152604083015160408201526060830151606082015260808301516080820152612af58460a08501612a25565b60a0820152612b08846101e085016127fc565b60c0820152610240929092015160e083015250919050565b6001600160a01b0383168152815160208083019190915282015151805160a083019190612b4c8161240d565b806040850152506020810151151560608401526040810151516080840152509392505050565b600082612b8f57634e487b7160e01b600052601260045260246000fd5b500690565b6000600019821415612ba857612ba861296b565b5060010190565b60006101408284031215612bc257600080fd5b612bca61259f565b8251612bd5816123c5565b8152612be3602084016127f1565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a0820152612c1d8460c085016127fc565b60c0820152610120929092015160e083015250919050565b6001600160a01b0383168152815160208083019190915282015151805160a083019190612c618161240d565b80604085015250602081015115156060840152604081015115156080840152509392505050565b600082821015612c9a57612c9a61296b565b500390565b60006101008284031215612cb257600080fd5b60405160c0810181811067ffffffffffffffff82111715612cd557612cd561251a565b6040528251612ce3816123c5565b81526020830151612cf3816123c5565b80602083015250604083015160408201526060830151606082015260808301516080820152612d258460a085016127fc565b60a08201529392505050565b81516001600160a01b0390811682526020808401519091168183015260408084015190830152606080840151908301526080808401519083015260a0838101516102608401929091840160005b600a811015612d9b57835182529282019290820190600101612d7e565b5050505060c0830151612db26101e0840182612999565b5060e083015161024083015292915050565b60006101008201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a0830151612a1e60a0840182612999565b60006101408201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c0830151612e7460c0840182612999565b5060e083015161012083015292915050565b60008251612e988184602087016124a2565b9190910192915050565b600060208284031215612eb457600080fd5b8151611ac6816125c356fea26469706673582212204dc034ba8539188acce478cf9e2195024b11fee45a9926da5d9add6854c50bc064736f6c634300080c0033`,
  BytecodeLen: 13535,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:50:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:53:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:111:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:169:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:125:34:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:62:49:after expr stmt semicolon',
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
  "Bobs_optIn": Bobs_optIn,
  "Bobs_playNum": Bobs_playNum,
  "Bobs_seeOutcome": Bobs_seeOutcome,
  "Winner_showWinner": Winner_showWinner
  };
export const _APIs = {
  Bobs: {
    optIn: Bobs_optIn,
    playNum: Bobs_playNum,
    seeOutcome: Bobs_seeOutcome
    },
  Winner: {
    showWinner: Winner_showWinner
    }
  };
