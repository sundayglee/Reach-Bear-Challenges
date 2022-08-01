// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

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
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc7
    });
  const map0_ctc = ctc8;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc5, ctc6],
      4: [ctc0, ctc1, ctc2, ctc6, ctc2, ctc2, ctc5, ctc2],
      5: [ctc0, ctc1, ctc2, ctc6, ctc2, ctc2, ctc2, ctc5, ctc4, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function _A_acceptToken4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _A_acceptToken4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _A_acceptToken4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc4, ctc4, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Data({
    A_acceptToken0_58: ctc9,
    C_claimToken0_58: ctc9,
    C_depositTokens0_58: ctc10
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v621, v622, v624, v633, v640, v641, v648, v649] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc5, ctc4, ctc4, ctc8, ctc4]);
  const v691 = ctc.selfAddress();
  const v693 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:97:13:application call to [unknown function] (defined at: ./index.rsh:97:13:function exp)', 'at ./index.rsh:42:37:application call to "runA_acceptToken0_58" (defined at: ./index.rsh:94:13:function exp)', 'at ./index.rsh:42:37:application call to [unknown function] (defined at: ./index.rsh:42:37:function exp)'],
    msg: 'in',
    who: 'A_acceptToken'
    });
  const v695 = stdlib.le(v641, stdlib.checkedBigNumberify('./index.rsh:98:35:decimal', stdlib.UInt_max, '3'));
  stdlib.assert(v695, {
    at: './index.rsh:98:23:application',
    fs: ['at ./index.rsh:97:13:application call to [unknown function] (defined at: ./index.rsh:97:17:function exp)', 'at ./index.rsh:97:13:application call to [unknown function] (defined at: ./index.rsh:97:13:function exp)', 'at ./index.rsh:42:37:application call to "runA_acceptToken0_58" (defined at: ./index.rsh:94:13:function exp)', 'at ./index.rsh:42:37:application call to [unknown function] (defined at: ./index.rsh:42:37:function exp)'],
    msg: 'Max white list reached',
    who: 'A_acceptToken'
    });
  const v696 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v691), null);
  let v697;
  switch (v696[0]) {
    case 'None': {
      const v698 = v696[1];
      v697 = false;
      
      break;
      }
    case 'Some': {
      const v699 = v696[1];
      v697 = true;
      
      break;
      }
    }
  const v700 = v697 ? false : true;
  stdlib.assert(v700, {
    at: './index.rsh:99:23:application',
    fs: ['at ./index.rsh:97:13:application call to [unknown function] (defined at: ./index.rsh:97:17:function exp)', 'at ./index.rsh:97:13:application call to [unknown function] (defined at: ./index.rsh:97:13:function exp)', 'at ./index.rsh:42:37:application call to "runA_acceptToken0_58" (defined at: ./index.rsh:94:13:function exp)', 'at ./index.rsh:42:37:application call to [unknown function] (defined at: ./index.rsh:42:37:function exp)'],
    msg: 'You have already received token',
    who: 'A_acceptToken'
    });
  const v703 = ['A_acceptToken0_58', v693];
  
  const txn1 = await (ctc.sendrecv({
    args: [v621, v622, v624, v633, v640, v641, v648, v649, v703],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:36:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:102:28:decimal', stdlib.UInt_max, '0'), v622]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v734], secs: v736, time: v735, didSend: v270, from: v733 } = txn1;
      
      switch (v734[0]) {
        case 'A_acceptToken0_58': {
          const v737 = v734[1];
          sim_r.txns.push({
            kind: 'api',
            who: "A_acceptToken"
            });
          ;
          const v1264 = v633[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '0')];
          const v1270 = stdlib.tokenEq(v1264, v622);
          const v1273 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
          const v1274 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v1275 = v1270 ? v1274 : v1273;
          const v788 = v1275[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '1')];
          const v790 = v648[v788];
          const v791 = v790[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '0')];
          const v810 = v790[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '1')];
          const v811 = v790[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '2')];
          const v812 = [v791, v810, v811];
          const v813 = stdlib.Array_set(v648, v788, v812);
          ;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v733), null);
          await stdlib.simMapSet(sim_r, 0, v733, null);
          const v823 = true;
          const v824 = await txn1.getOutput('A_acceptToken', 'v823', ctc6, v823);
          
          const v829 = stdlib.add(v641, stdlib.checkedBigNumberify('./index.rsh:110:35:decimal', stdlib.UInt_max, '1'));
          const v1825 = v829;
          const v1827 = v813;
          const v1828 = v649;
          sim_r.isHalt = false;
          
          break;
          }
        case 'C_claimToken0_58': {
          const v900 = v734[1];
          
          break;
          }
        case 'C_depositTokens0_58': {
          const v1063 = v734[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc5, ctc4, ctc4, ctc8, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v734], secs: v736, time: v735, didSend: v270, from: v733 } = txn1;
  switch (v734[0]) {
    case 'A_acceptToken0_58': {
      const v737 = v734[1];
      undefined /* setApiDetails */;
      ;
      const v1264 = v633[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '0')];
      const v1270 = stdlib.tokenEq(v1264, v622);
      const v1273 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v1274 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v1275 = v1270 ? v1274 : v1273;
      const v788 = v1275[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '1')];
      const v790 = v648[v788];
      const v791 = v790[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '0')];
      const v810 = v790[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '1')];
      const v811 = v790[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '2')];
      const v812 = [v791, v810, v811];
      const v813 = stdlib.Array_set(v648, v788, v812);
      ;
      const v815 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v733), null);
      let v816;
      switch (v815[0]) {
        case 'None': {
          const v817 = v815[1];
          v816 = false;
          
          break;
          }
        case 'Some': {
          const v818 = v815[1];
          v816 = true;
          
          break;
          }
        }
      const v819 = v816 ? false : true;
      stdlib.assert(v819, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:105:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:104:13:application call to [unknown function] (defined at: ./index.rsh:104:13:function exp)'],
        msg: 'Already accepted the token',
        who: 'A_acceptToken'
        });
      const v821 = stdlib.le(v641, stdlib.checkedBigNumberify('./index.rsh:106:36:decimal', stdlib.UInt_max, '3'));
      stdlib.assert(v821, {
        at: './index.rsh:106:24:application',
        fs: ['at ./index.rsh:104:13:application call to [unknown function] (defined at: ./index.rsh:104:13:function exp)'],
        msg: 'Max white list reached',
        who: 'A_acceptToken'
        });
      await stdlib.mapSet(map0, v733, null);
      const v823 = true;
      const v824 = await txn1.getOutput('A_acceptToken', 'v823', ctc6, v823);
      if (v270) {
        stdlib.protect(ctc0, await interact.out(v737, v824), {
          at: './index.rsh:95:13:application',
          fs: ['at ./index.rsh:95:13:application call to [unknown function] (defined at: ./index.rsh:95:13:function exp)', 'at ./index.rsh:108:22:application call to "reply" (defined at: ./index.rsh:104:13:function exp)', 'at ./index.rsh:104:13:application call to [unknown function] (defined at: ./index.rsh:104:13:function exp)'],
          msg: 'out',
          who: 'A_acceptToken'
          });
        }
      else {
        }
      
      const v829 = stdlib.add(v641, stdlib.checkedBigNumberify('./index.rsh:110:35:decimal', stdlib.UInt_max, '1'));
      const v1825 = v829;
      const v1827 = v813;
      const v1828 = v649;
      return;
      
      break;
      }
    case 'C_claimToken0_58': {
      const v900 = v734[1];
      return;
      break;
      }
    case 'C_depositTokens0_58': {
      const v1063 = v734[1];
      return;
      break;
      }
    }
  
  
  };
export async function _A_timeIsOut4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _A_timeIsOut4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _A_timeIsOut4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc4, ctc4, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v621, v622, v624, v633, v640, v641, v648, v649] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc5, ctc4, ctc4, ctc8, ctc4]);
  const v1228 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:114:13:application',
    fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)', 'at ./index.rsh:113:45:application call to [unknown function] (defined at: ./index.rsh:113:45:function exp)'],
    msg: 'in',
    who: 'A_timeIsOut'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v621, v622, v624, v633, v640, v641, v648, v649, v1228],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:114:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1230], secs: v1232, time: v1231, didSend: v387, from: v1229 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "A_timeIsOut"
        });
      ;
      const v1233 = null;
      const v1234 = await txn1.getOutput('A_timeIsOut', 'v1233', ctc0, v1233);
      
      const v1837 = v641;
      const v1839 = v648;
      const v1840 = v649;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc5, ctc4, ctc4, ctc8, ctc4, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v1230], secs: v1232, time: v1231, didSend: v387, from: v1229 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1233 = null;
  const v1234 = await txn1.getOutput('A_timeIsOut', 'v1233', ctc0, v1233);
  stdlib.protect(ctc0, await interact.out(v1230, v1234), {
    at: './index.rsh:114:13:application',
    fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)', 'at ./index.rsh:116:14:application call to "k" (defined at: ./index.rsh:114:13:function exp)', 'at ./index.rsh:113:45:application call to [unknown function] (defined at: ./index.rsh:113:45:function exp)'],
    msg: 'out',
    who: 'A_timeIsOut'
    });
  
  const v1837 = v641;
  const v1839 = v648;
  const v1840 = v649;
  return;
  
  
  
  };
export async function _C_claimToken4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _C_claimToken4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _C_claimToken4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc4, ctc4, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Data({
    A_acceptToken0_58: ctc9,
    C_claimToken0_58: ctc9,
    C_depositTokens0_58: ctc10
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v621, v622, v624, v633, v640, v641, v648, v649] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc5, ctc4, ctc4, ctc8, ctc4]);
  const v670 = ctc.selfAddress();
  const v672 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:13:function exp)', 'at ./index.rsh:42:37:application call to "runC_claimToken0_58" (defined at: ./index.rsh:61:14:function exp)', 'at ./index.rsh:42:37:application call to [unknown function] (defined at: ./index.rsh:42:37:function exp)'],
    msg: 'in',
    who: 'C_claimToken'
    });
  const v674 = stdlib.gt(v624, stdlib.checkedBigNumberify('./index.rsh:65:41:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v674, {
    at: './index.rsh:65:23:application',
    fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:17:function exp)', 'at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:13:function exp)', 'at ./index.rsh:42:37:application call to "runC_claimToken0_58" (defined at: ./index.rsh:61:14:function exp)', 'at ./index.rsh:42:37:application call to [unknown function] (defined at: ./index.rsh:42:37:function exp)'],
    msg: 'Not enough tokens to distribute',
    who: 'C_claimToken'
    });
  const v675 = v648[stdlib.checkedBigNumberify('./index.rsh:66:31:application', stdlib.UInt_max, '0')];
  const v676 = v675[stdlib.checkedBigNumberify('./index.rsh:66:31:application', stdlib.UInt_max, '0')];
  const v677 = stdlib.gt(v676, stdlib.checkedBigNumberify('./index.rsh:66:41:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v677, {
    at: './index.rsh:66:23:application',
    fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:17:function exp)', 'at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:13:function exp)', 'at ./index.rsh:42:37:application call to "runC_claimToken0_58" (defined at: ./index.rsh:61:14:function exp)', 'at ./index.rsh:42:37:application call to [unknown function] (defined at: ./index.rsh:42:37:function exp)'],
    msg: 'Zero balance of token',
    who: 'C_claimToken'
    });
  const v680 = stdlib.div(v624, stdlib.checkedBigNumberify('./index.rsh:67:59:decimal', stdlib.UInt_max, '3'));
  const v681 = stdlib.ge(v676, v680);
  stdlib.assert(v681, {
    at: './index.rsh:67:23:application',
    fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:17:function exp)', 'at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:13:function exp)', 'at ./index.rsh:42:37:application call to "runC_claimToken0_58" (defined at: ./index.rsh:61:14:function exp)', 'at ./index.rsh:42:37:application call to [unknown function] (defined at: ./index.rsh:42:37:function exp)'],
    msg: 'not enough tokens to distribute',
    who: 'C_claimToken'
    });
  const v682 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v670), null);
  let v683;
  switch (v682[0]) {
    case 'None': {
      const v684 = v682[1];
      v683 = false;
      
      break;
      }
    case 'Some': {
      const v685 = v682[1];
      v683 = true;
      
      break;
      }
    }
  stdlib.assert(v683, {
    at: './index.rsh:68:23:application',
    fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:17:function exp)', 'at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:13:function exp)', 'at ./index.rsh:42:37:application call to "runC_claimToken0_58" (defined at: ./index.rsh:61:14:function exp)', 'at ./index.rsh:42:37:application call to [unknown function] (defined at: ./index.rsh:42:37:function exp)'],
    msg: 'YOu already received tokens',
    who: 'C_claimToken'
    });
  const v689 = ['C_claimToken0_58', v672];
  
  const txn1 = await (ctc.sendrecv({
    args: [v621, v622, v624, v633, v640, v641, v648, v649, v689],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:36:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:71:28:decimal', stdlib.UInt_max, '0'), v622]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v734], secs: v736, time: v735, didSend: v270, from: v733 } = txn1;
      
      switch (v734[0]) {
        case 'A_acceptToken0_58': {
          const v737 = v734[1];
          
          break;
          }
        case 'C_claimToken0_58': {
          const v900 = v734[1];
          sim_r.txns.push({
            kind: 'api',
            who: "C_claimToken"
            });
          ;
          const v1288 = v633[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '0')];
          const v1294 = stdlib.tokenEq(v1288, v622);
          const v1297 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
          const v1298 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v1299 = v1294 ? v1298 : v1297;
          const v951 = v1299[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '1')];
          const v953 = v648[v951];
          const v954 = v953[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '0')];
          const v973 = v953[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '1')];
          const v974 = v953[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '2')];
          const v975 = [v954, v973, v974];
          const v976 = stdlib.Array_set(v648, v951, v975);
          ;
          const v996 = v976[stdlib.checkedBigNumberify('./index.rsh:75:32:application', stdlib.UInt_max, '0')];
          const v997 = v996[stdlib.checkedBigNumberify('./index.rsh:75:32:application', stdlib.UInt_max, '0')];
          const v1001 = stdlib.div(v624, stdlib.checkedBigNumberify('./index.rsh:76:60:decimal', stdlib.UInt_max, '3'));
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v733), null);
          const v1008 = true;
          const v1009 = await txn1.getOutput('C_claimToken', 'v1008', ctc6, v1008);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'C_depositTokens0_58': {
          const v1063 = v734[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc5, ctc4, ctc4, ctc8, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v734], secs: v736, time: v735, didSend: v270, from: v733 } = txn1;
  switch (v734[0]) {
    case 'A_acceptToken0_58': {
      const v737 = v734[1];
      return;
      break;
      }
    case 'C_claimToken0_58': {
      const v900 = v734[1];
      undefined /* setApiDetails */;
      ;
      const v1288 = v633[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '0')];
      const v1294 = stdlib.tokenEq(v1288, v622);
      const v1297 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v1298 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v1299 = v1294 ? v1298 : v1297;
      const v951 = v1299[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '1')];
      const v953 = v648[v951];
      const v954 = v953[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '0')];
      const v973 = v953[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '1')];
      const v974 = v953[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '2')];
      const v975 = [v954, v973, v974];
      const v976 = stdlib.Array_set(v648, v951, v975);
      ;
      const v995 = stdlib.gt(v624, stdlib.checkedBigNumberify('./index.rsh:74:42:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v995, {
        at: './index.rsh:74:24:application',
        fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
        msg: 'Not enough tokens to distribute',
        who: 'C_claimToken'
        });
      const v996 = v976[stdlib.checkedBigNumberify('./index.rsh:75:32:application', stdlib.UInt_max, '0')];
      const v997 = v996[stdlib.checkedBigNumberify('./index.rsh:75:32:application', stdlib.UInt_max, '0')];
      const v998 = stdlib.gt(v997, stdlib.checkedBigNumberify('./index.rsh:75:42:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v998, {
        at: './index.rsh:75:24:application',
        fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
        msg: 'Zero balance of token',
        who: 'C_claimToken'
        });
      const v1001 = stdlib.div(v624, stdlib.checkedBigNumberify('./index.rsh:76:60:decimal', stdlib.UInt_max, '3'));
      const v1002 = stdlib.ge(v997, v1001);
      stdlib.assert(v1002, {
        at: './index.rsh:76:24:application',
        fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
        msg: 'not enough tokens to distribute',
        who: 'C_claimToken'
        });
      const v1003 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v733), null);
      let v1004;
      switch (v1003[0]) {
        case 'None': {
          const v1005 = v1003[1];
          v1004 = false;
          
          break;
          }
        case 'Some': {
          const v1006 = v1003[1];
          v1004 = true;
          
          break;
          }
        }
      stdlib.assert(v1004, {
        at: './index.rsh:77:24:application',
        fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
        msg: 'You are have not accepted token offer',
        who: 'C_claimToken'
        });
      const v1008 = true;
      const v1009 = await txn1.getOutput('C_claimToken', 'v1008', ctc6, v1008);
      if (v270) {
        stdlib.protect(ctc0, await interact.out(v900, v1009), {
          at: './index.rsh:62:13:application',
          fs: ['at ./index.rsh:62:13:application call to [unknown function] (defined at: ./index.rsh:62:13:function exp)', 'at ./index.rsh:78:22:application call to "reply" (defined at: ./index.rsh:73:13:function exp)', 'at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
          msg: 'out',
          who: 'C_claimToken'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'C_depositTokens0_58': {
      const v1063 = v734[1];
      return;
      break;
      }
    }
  
  
  };
export async function _C_depositTokens4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _C_depositTokens4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _C_depositTokens4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc4, ctc4, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    A_acceptToken0_58: ctc10,
    C_claimToken0_58: ctc10,
    C_depositTokens0_58: ctc9
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v621, v622, v624, v633, v640, v641, v648, v649] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc5, ctc4, ctc4, ctc8, ctc4]);
  const v657 = ctc.selfAddress();
  const v659 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:13:function exp)', 'at ./index.rsh:42:37:application call to "runC_depositTokens0_58" (defined at: ./index.rsh:45:13:function exp)', 'at ./index.rsh:42:37:application call to [unknown function] (defined at: ./index.rsh:42:37:function exp)'],
    msg: 'in',
    who: 'C_depositTokens'
    });
  const v660 = v659[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v663 = stdlib.addressEq(v657, v621);
  stdlib.assert(v663, {
    at: './index.rsh:49:23:application',
    fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:20:function exp)', 'at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:13:function exp)', 'at ./index.rsh:42:37:application call to "runC_depositTokens0_58" (defined at: ./index.rsh:45:13:function exp)', 'at ./index.rsh:42:37:application call to [unknown function] (defined at: ./index.rsh:42:37:function exp)'],
    msg: 'Only the deployer is allowed to run this',
    who: 'C_depositTokens'
    });
  const v664 = stdlib.gt(v660, stdlib.checkedBigNumberify('./index.rsh:50:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v664, {
    at: './index.rsh:50:23:application',
    fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:20:function exp)', 'at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:13:function exp)', 'at ./index.rsh:42:37:application call to "runC_depositTokens0_58" (defined at: ./index.rsh:45:13:function exp)', 'at ./index.rsh:42:37:application call to [unknown function] (defined at: ./index.rsh:42:37:function exp)'],
    msg: 'Amount to deposit should be greater than 0',
    who: 'C_depositTokens'
    });
  const v668 = ['C_depositTokens0_58', v659];
  
  const txn1 = await (ctc.sendrecv({
    args: [v621, v622, v624, v633, v640, v641, v648, v649, v668],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:36:29:decimal', stdlib.UInt_max, '0'), [[v660, v622]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v734], secs: v736, time: v735, didSend: v270, from: v733 } = txn1;
      
      switch (v734[0]) {
        case 'A_acceptToken0_58': {
          const v737 = v734[1];
          
          break;
          }
        case 'C_claimToken0_58': {
          const v900 = v734[1];
          
          break;
          }
        case 'C_depositTokens0_58': {
          const v1063 = v734[1];
          sim_r.txns.push({
            kind: 'api',
            who: "C_depositTokens"
            });
          const v1086 = v1063[stdlib.checkedBigNumberify('./index.rsh:45:13:spread', stdlib.UInt_max, '0')];
          ;
          const v1312 = v633[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '0')];
          const v1318 = stdlib.tokenEq(v1312, v622);
          const v1321 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
          const v1322 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v1323 = v1318 ? v1322 : v1321;
          const v1114 = v1323[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '1')];
          const v1116 = v648[v1114];
          const v1117 = v1116[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '0')];
          const v1118 = stdlib.add(v1117, v1086);
          const v1136 = v1116[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '1')];
          const v1137 = v1116[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '2')];
          const v1138 = [v1118, v1136, v1137];
          const v1139 = stdlib.Array_set(v648, v1114, v1138);
          sim_r.txns.push({
            amt: v1086,
            kind: 'to',
            tok: v622
            });
          const v1218 = true;
          const v1219 = await txn1.getOutput('C_depositTokens', 'v1218', ctc6, v1218);
          
          const v1861 = v641;
          const v1863 = v1139;
          const v1864 = v649;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc5, ctc4, ctc4, ctc8, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v734], secs: v736, time: v735, didSend: v270, from: v733 } = txn1;
  switch (v734[0]) {
    case 'A_acceptToken0_58': {
      const v737 = v734[1];
      return;
      break;
      }
    case 'C_claimToken0_58': {
      const v900 = v734[1];
      return;
      break;
      }
    case 'C_depositTokens0_58': {
      const v1063 = v734[1];
      undefined /* setApiDetails */;
      const v1086 = v1063[stdlib.checkedBigNumberify('./index.rsh:45:13:spread', stdlib.UInt_max, '0')];
      ;
      const v1312 = v633[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '0')];
      const v1318 = stdlib.tokenEq(v1312, v622);
      const v1321 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v1322 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v1323 = v1318 ? v1322 : v1321;
      const v1114 = v1323[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '1')];
      const v1116 = v648[v1114];
      const v1117 = v1116[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '0')];
      const v1118 = stdlib.add(v1117, v1086);
      const v1136 = v1116[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '1')];
      const v1137 = v1116[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '2')];
      const v1138 = [v1118, v1136, v1137];
      const v1139 = stdlib.Array_set(v648, v1114, v1138);
      ;
      const v1216 = stdlib.addressEq(v733, v621);
      stdlib.assert(v1216, {
        at: './index.rsh:56:24:application',
        fs: ['at ./index.rsh:55:13:application call to [unknown function] (defined at: ./index.rsh:55:13:function exp)'],
        msg: 'Only the deployer is allowed to run this',
        who: 'C_depositTokens'
        });
      const v1217 = stdlib.gt(v1086, stdlib.checkedBigNumberify('./index.rsh:57:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v1217, {
        at: './index.rsh:57:24:application',
        fs: ['at ./index.rsh:55:13:application call to [unknown function] (defined at: ./index.rsh:55:13:function exp)'],
        msg: 'Amount to deposit should be greater than 0',
        who: 'C_depositTokens'
        });
      const v1218 = true;
      const v1219 = await txn1.getOutput('C_depositTokens', 'v1218', ctc6, v1218);
      if (v270) {
        stdlib.protect(ctc0, await interact.out(v1063, v1219), {
          at: './index.rsh:46:13:application',
          fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:13:function exp)', 'at ./index.rsh:58:22:application call to "reply" (defined at: ./index.rsh:55:13:function exp)', 'at ./index.rsh:55:13:application call to [unknown function] (defined at: ./index.rsh:55:13:function exp)'],
          msg: 'out',
          who: 'C_depositTokens'
          });
        }
      else {
        }
      
      const v1861 = v641;
      const v1863 = v1139;
      const v1864 = v649;
      return;
      
      break;
      }
    }
  
  
  };
export async function D(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for D expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for D expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    amntToTransfer: ctc3,
    blockLength: ctc3,
    tokId: ctc4
    });
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Data({
    A_acceptToken0_58: ctc6,
    C_claimToken0_58: ctc6,
    C_depositTokens0_58: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc2]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v606 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v607 = [v606];
  const v608 = [stdlib.Token_zero];
  const v611 = stdlib.protect(ctc2, interact.deadManSwitch, 'for D\'s interact field deadManSwitch');
  
  const v614 = stdlib.protect(ctc5, await interact.getParams(), {
    at: './index.rsh:27:85:application',
    fs: ['at ./index.rsh:26:11:application call to [unknown function] (defined at: ./index.rsh:26:15:function exp)'],
    msg: 'getParams',
    who: 'D'
    });
  const v615 = v614.amntToTransfer;
  const v616 = v614.blockLength;
  const v617 = v614.tokId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v617, v616, v615],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:30:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc3, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v622, v623, v624], secs: v626, time: v625, didSend: v36, from: v621 } = txn1;
      
      const v627 = v607[stdlib.checkedBigNumberify('./index.rsh:30:7:dot', stdlib.UInt_max, '0')];
      const v629 = v627[stdlib.checkedBigNumberify('./index.rsh:30:7:dot', stdlib.UInt_max, '1')];
      const v630 = v627[stdlib.checkedBigNumberify('./index.rsh:30:7:dot', stdlib.UInt_max, '2')];
      const v631 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v629, v630];
      const v632 = stdlib.Array_set(v607, stdlib.checkedBigNumberify('./index.rsh:30:7:dot', stdlib.UInt_max, '0'), v631);
      const v633 = stdlib.Array_set(v608, stdlib.checkedBigNumberify('./index.rsh:30:7:dot', stdlib.UInt_max, '0'), v622);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v622
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v622, v623, v624], secs: v626, time: v625, didSend: v36, from: v621 } = txn1;
  const v627 = v607[stdlib.checkedBigNumberify('./index.rsh:30:7:dot', stdlib.UInt_max, '0')];
  const v629 = v627[stdlib.checkedBigNumberify('./index.rsh:30:7:dot', stdlib.UInt_max, '1')];
  const v630 = v627[stdlib.checkedBigNumberify('./index.rsh:30:7:dot', stdlib.UInt_max, '2')];
  const v631 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v629, v630];
  const v632 = stdlib.Array_set(v607, stdlib.checkedBigNumberify('./index.rsh:30:7:dot', stdlib.UInt_max, '0'), v631);
  const v633 = stdlib.Array_set(v608, stdlib.checkedBigNumberify('./index.rsh:30:7:dot', stdlib.UInt_max, '0'), v622);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v621, v622, v623, v624, v625, v632, v633],
    evt_cnt: 0,
    funcNum: 1,
    lct: v625,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:32:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v636, time: v635, didSend: v41, from: v634 } = txn2;
      
      ;
      
      const v640 = stdlib.add(v625, v623);
      const v641 = stdlib.checkedBigNumberify('./index.rsh:42:39:decimal', stdlib.UInt_max, '0');
      const v642 = v635;
      const v648 = v632;
      const v649 = stdlib.checkedBigNumberify('./index.rsh:24:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1240 = v648[stdlib.checkedBigNumberify('./index.rsh:121:21:application', stdlib.UInt_max, '0')];
        const v1241 = v1240[stdlib.checkedBigNumberify('./index.rsh:121:21:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v621,
          tok: v622
          });
        sim_r.txns.push({
          kind: 'from',
          to: v621,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v622
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
    tys: [ctc9, ctc4, ctc3, ctc3, ctc3, ctc12, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v636, time: v635, didSend: v41, from: v634 } = txn2;
  ;
  const v637 = stdlib.addressEq(v621, v634);
  stdlib.assert(v637, {
    at: './index.rsh:32:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'D'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:34:21:application',
    fs: ['at ./index.rsh:34:21:application call to [unknown function] (defined at: ./index.rsh:34:21:function exp)', 'at ./index.rsh:34:21:application call to "liftedInteract" (defined at: ./index.rsh:34:21:application)'],
    msg: 'ready',
    who: 'D'
    });
  
  const v640 = stdlib.add(v625, v623);
  let v641 = stdlib.checkedBigNumberify('./index.rsh:42:39:decimal', stdlib.UInt_max, '0');
  let v642 = v635;
  let v648 = v632;
  let v649 = stdlib.checkedBigNumberify('./index.rsh:24:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc8],
      timeoutAt: ['time', v640],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc6],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1230], secs: v1232, time: v1231, didSend: v387, from: v1229 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v1233 = null;
      await txn4.getOutput('A_timeIsOut', 'v1233', ctc0, v1233);
      const cv641 = v641;
      const cv642 = v1231;
      const cv648 = v648;
      const cv649 = v649;
      
      v641 = cv641;
      v642 = cv642;
      v648 = cv648;
      v649 = cv649;
      
      continue;
      }
    else {
      const {data: [v734], secs: v736, time: v735, didSend: v270, from: v733 } = txn3;
      switch (v734[0]) {
        case 'A_acceptToken0_58': {
          const v737 = v734[1];
          undefined /* setApiDetails */;
          ;
          const v1264 = v633[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '0')];
          const v1270 = stdlib.tokenEq(v1264, v622);
          const v1273 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
          const v1274 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v1275 = v1270 ? v1274 : v1273;
          const v788 = v1275[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '1')];
          const v790 = v648[v788];
          const v791 = v790[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '0')];
          const v810 = v790[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '1')];
          const v811 = v790[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '2')];
          const v812 = [v791, v810, v811];
          const v813 = stdlib.Array_set(v648, v788, v812);
          ;
          const v815 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v733), null);
          let v816;
          switch (v815[0]) {
            case 'None': {
              const v817 = v815[1];
              v816 = false;
              
              break;
              }
            case 'Some': {
              const v818 = v815[1];
              v816 = true;
              
              break;
              }
            }
          const v819 = v816 ? false : true;
          stdlib.assert(v819, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:105:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:104:13:application call to [unknown function] (defined at: ./index.rsh:104:13:function exp)'],
            msg: 'Already accepted the token',
            who: 'D'
            });
          const v821 = stdlib.le(v641, stdlib.checkedBigNumberify('./index.rsh:106:36:decimal', stdlib.UInt_max, '3'));
          stdlib.assert(v821, {
            at: './index.rsh:106:24:application',
            fs: ['at ./index.rsh:104:13:application call to [unknown function] (defined at: ./index.rsh:104:13:function exp)'],
            msg: 'Max white list reached',
            who: 'D'
            });
          await stdlib.mapSet(map0, v733, null);
          const v823 = true;
          await txn3.getOutput('A_acceptToken', 'v823', ctc2, v823);
          const v829 = stdlib.add(v641, stdlib.checkedBigNumberify('./index.rsh:110:35:decimal', stdlib.UInt_max, '1'));
          const cv641 = v829;
          const cv642 = v735;
          const cv648 = v813;
          const cv649 = v649;
          
          v641 = cv641;
          v642 = cv642;
          v648 = cv648;
          v649 = cv649;
          
          continue;
          break;
          }
        case 'C_claimToken0_58': {
          const v900 = v734[1];
          undefined /* setApiDetails */;
          ;
          const v1288 = v633[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '0')];
          const v1294 = stdlib.tokenEq(v1288, v622);
          const v1297 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
          const v1298 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v1299 = v1294 ? v1298 : v1297;
          const v951 = v1299[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '1')];
          const v953 = v648[v951];
          const v954 = v953[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '0')];
          const v973 = v953[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '1')];
          const v974 = v953[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '2')];
          const v975 = [v954, v973, v974];
          const v976 = stdlib.Array_set(v648, v951, v975);
          ;
          const v995 = stdlib.gt(v624, stdlib.checkedBigNumberify('./index.rsh:74:42:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v995, {
            at: './index.rsh:74:24:application',
            fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
            msg: 'Not enough tokens to distribute',
            who: 'D'
            });
          const v996 = v976[stdlib.checkedBigNumberify('./index.rsh:75:32:application', stdlib.UInt_max, '0')];
          const v997 = v996[stdlib.checkedBigNumberify('./index.rsh:75:32:application', stdlib.UInt_max, '0')];
          const v998 = stdlib.gt(v997, stdlib.checkedBigNumberify('./index.rsh:75:42:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v998, {
            at: './index.rsh:75:24:application',
            fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
            msg: 'Zero balance of token',
            who: 'D'
            });
          const v1001 = stdlib.div(v624, stdlib.checkedBigNumberify('./index.rsh:76:60:decimal', stdlib.UInt_max, '3'));
          const v1002 = stdlib.ge(v997, v1001);
          stdlib.assert(v1002, {
            at: './index.rsh:76:24:application',
            fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
            msg: 'not enough tokens to distribute',
            who: 'D'
            });
          const v1003 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v733), null);
          let v1004;
          switch (v1003[0]) {
            case 'None': {
              const v1005 = v1003[1];
              v1004 = false;
              
              break;
              }
            case 'Some': {
              const v1006 = v1003[1];
              v1004 = true;
              
              break;
              }
            }
          stdlib.assert(v1004, {
            at: './index.rsh:77:24:application',
            fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
            msg: 'You are have not accepted token offer',
            who: 'D'
            });
          const v1008 = true;
          await txn3.getOutput('C_claimToken', 'v1008', ctc2, v1008);
          const txn4 = await (ctc.sendrecv({
            args: [v621, v622, v624, v633, v640, v641, v649, v976, v996, v997, v1001, v611],
            evt_cnt: 1,
            funcNum: 5,
            lct: v735,
            onlyIf: true,
            out_tys: [ctc2],
            pay: [stdlib.checkedBigNumberify('./index.rsh:84:19:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn4) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              
              const {data: [v1017], secs: v1019, time: v1018, didSend: v341, from: v1016 } = txn4;
              
              ;
              if (v1017) {
                const v1027 = stdlib.sub(v997, v1001);
                const v1030 = v996[stdlib.checkedBigNumberify('./index.rsh:87:66:application', stdlib.UInt_max, '1')];
                const v1031 = v996[stdlib.checkedBigNumberify('./index.rsh:87:66:application', stdlib.UInt_max, '2')];
                const v1032 = [v1027, v1030, v1031];
                const v1033 = stdlib.Array_set(v976, stdlib.checkedBigNumberify('./index.rsh:87:66:application', stdlib.UInt_max, '0'), v1032);
                sim_r.txns.push({
                  kind: 'from',
                  to: v621,
                  tok: v622
                  });
                const cv641 = v641;
                const cv642 = v1018;
                const cv648 = v1033;
                const cv649 = v649;
                
                await (async () => {
                  const v641 = cv641;
                  const v642 = cv642;
                  const v648 = cv648;
                  const v649 = cv649;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v1240 = v648[stdlib.checkedBigNumberify('./index.rsh:121:21:application', stdlib.UInt_max, '0')];
                    const v1241 = v1240[stdlib.checkedBigNumberify('./index.rsh:121:21:application', stdlib.UInt_max, '0')];
                    sim_r.txns.push({
                      kind: 'from',
                      to: v621,
                      tok: v622
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v621,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v622
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }})();}
              else {
                const v1042 = stdlib.sub(v997, v1001);
                const v1045 = v996[stdlib.checkedBigNumberify('./index.rsh:89:66:application', stdlib.UInt_max, '1')];
                const v1046 = v996[stdlib.checkedBigNumberify('./index.rsh:89:66:application', stdlib.UInt_max, '2')];
                const v1047 = [v1042, v1045, v1046];
                const v1048 = stdlib.Array_set(v976, stdlib.checkedBigNumberify('./index.rsh:89:66:application', stdlib.UInt_max, '0'), v1047);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1016,
                  tok: v622
                  });
                const cv641 = v641;
                const cv642 = v1018;
                const cv648 = v1048;
                const cv649 = v649;
                
                await (async () => {
                  const v641 = cv641;
                  const v642 = cv642;
                  const v648 = cv648;
                  const v649 = cv649;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v1240 = v648[stdlib.checkedBigNumberify('./index.rsh:121:21:application', stdlib.UInt_max, '0')];
                    const v1241 = v1240[stdlib.checkedBigNumberify('./index.rsh:121:21:application', stdlib.UInt_max, '0')];
                    sim_r.txns.push({
                      kind: 'from',
                      to: v621,
                      tok: v622
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v621,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v622
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }})();}
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc9, ctc4, ctc3, ctc10, ctc3, ctc3, ctc3, ctc12, ctc11, ctc3, ctc3, ctc2],
            waitIfNotPresent: false
            }));
          const {data: [v1017], secs: v1019, time: v1018, didSend: v341, from: v1016 } = txn4;
          ;
          const v1020 = stdlib.addressEq(v621, v1016);
          stdlib.assert(v1020, {
            at: './index.rsh:84:19:dot',
            fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
            msg: 'sender correct',
            who: 'D'
            });
          if (v1017) {
            const v1027 = stdlib.sub(v997, v1001);
            const v1030 = v996[stdlib.checkedBigNumberify('./index.rsh:87:66:application', stdlib.UInt_max, '1')];
            const v1031 = v996[stdlib.checkedBigNumberify('./index.rsh:87:66:application', stdlib.UInt_max, '2')];
            const v1032 = [v1027, v1030, v1031];
            const v1033 = stdlib.Array_set(v976, stdlib.checkedBigNumberify('./index.rsh:87:66:application', stdlib.UInt_max, '0'), v1032);
            ;
            const cv641 = v641;
            const cv642 = v1018;
            const cv648 = v1033;
            const cv649 = v649;
            
            v641 = cv641;
            v642 = cv642;
            v648 = cv648;
            v649 = cv649;
            
            continue;}
          else {
            const v1042 = stdlib.sub(v997, v1001);
            const v1045 = v996[stdlib.checkedBigNumberify('./index.rsh:89:66:application', stdlib.UInt_max, '1')];
            const v1046 = v996[stdlib.checkedBigNumberify('./index.rsh:89:66:application', stdlib.UInt_max, '2')];
            const v1047 = [v1042, v1045, v1046];
            const v1048 = stdlib.Array_set(v976, stdlib.checkedBigNumberify('./index.rsh:89:66:application', stdlib.UInt_max, '0'), v1047);
            ;
            const cv641 = v641;
            const cv642 = v1018;
            const cv648 = v1048;
            const cv649 = v649;
            
            v641 = cv641;
            v642 = cv642;
            v648 = cv648;
            v649 = cv649;
            
            continue;}
          
          
          break;
          }
        case 'C_depositTokens0_58': {
          const v1063 = v734[1];
          undefined /* setApiDetails */;
          const v1086 = v1063[stdlib.checkedBigNumberify('./index.rsh:45:13:spread', stdlib.UInt_max, '0')];
          ;
          const v1312 = v633[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '0')];
          const v1318 = stdlib.tokenEq(v1312, v622);
          const v1321 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
          const v1322 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v1323 = v1318 ? v1322 : v1321;
          const v1114 = v1323[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '1')];
          const v1116 = v648[v1114];
          const v1117 = v1116[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '0')];
          const v1118 = stdlib.add(v1117, v1086);
          const v1136 = v1116[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '1')];
          const v1137 = v1116[stdlib.checkedBigNumberify('./index.rsh:42:37:dot', stdlib.UInt_max, '2')];
          const v1138 = [v1118, v1136, v1137];
          const v1139 = stdlib.Array_set(v648, v1114, v1138);
          ;
          const v1216 = stdlib.addressEq(v733, v621);
          stdlib.assert(v1216, {
            at: './index.rsh:56:24:application',
            fs: ['at ./index.rsh:55:13:application call to [unknown function] (defined at: ./index.rsh:55:13:function exp)'],
            msg: 'Only the deployer is allowed to run this',
            who: 'D'
            });
          const v1217 = stdlib.gt(v1086, stdlib.checkedBigNumberify('./index.rsh:57:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v1217, {
            at: './index.rsh:57:24:application',
            fs: ['at ./index.rsh:55:13:application call to [unknown function] (defined at: ./index.rsh:55:13:function exp)'],
            msg: 'Amount to deposit should be greater than 0',
            who: 'D'
            });
          const v1218 = true;
          await txn3.getOutput('C_depositTokens', 'v1218', ctc2, v1218);
          const cv641 = v641;
          const cv642 = v735;
          const cv648 = v1139;
          const cv649 = v649;
          
          v641 = cv641;
          v642 = cv642;
          v648 = cv648;
          v649 = cv649;
          
          continue;
          break;
          }
        }}
    
    }
  const v1240 = v648[stdlib.checkedBigNumberify('./index.rsh:121:21:application', stdlib.UInt_max, '0')];
  const v1241 = v1240[stdlib.checkedBigNumberify('./index.rsh:121:21:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  };
export async function A_acceptToken(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for A_acceptToken expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for A_acceptToken expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _A_acceptToken4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function A_timeIsOut(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for A_timeIsOut expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for A_timeIsOut expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _A_timeIsOut4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function C_claimToken(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for C_claimToken expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for C_claimToken expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _C_claimToken4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function C_depositTokens(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for C_depositTokens expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for C_depositTokens expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _C_depositTokens4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`A_acceptToken()byte`, `A_timeIsOut()byte[0]`, `C_claimToken()byte`, `C_depositTokens(uint64)byte`],
    pure: [],
    sigs: [`A_acceptToken()byte`, `A_timeIsOut()byte[0]`, `C_claimToken()byte`, `C_depositTokens(uint64)byte`]
    },
  appApproval: `BiARAAERBAgFAyAoOEDYi9CfCYPSzbELzrDkughZAqCNBiYFAQABAQAJAAAAAAAAAAABCQEAAAAAAAAAACI1ADEYQQW/KmRJIls1ASEEWzUCMRkjEkEACDEAKChmQgWNNhoAF0lBAFwiNQQjNQZJIQsMQAArSSEMDEAAEiEMEkQqNf8oNP9QIQSvUEIBqyELEkQqNf8pNP9QIQSvUEIBmUkhDQxAABIhDRJENhoBNf+AAQI0/1BCAYCBp8vUHxJEKkIBDTYaAhc1BDYaAzYaARdJIQYMQAOnSSUMQAFaSSEFDEAA6yEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSkpJVwAgNf8hB1s1/iEIWzX9VzAINfwhCVs1+yEKWzX6gUhbNflXUBE1+FdhETX3gXJbNfaBels19Uk1BRc19IAEsKWIUDT0FlEHCFCwNP8xABJENPRBADmxIrIBNPWyEiWyEDT/shQ0/rIRszT/NP40/TT8NPs0+jIGNPY09QkWNPdXCAhQNPdXEAFQNPlCA96xIrIBNPWyEiWyEDEAshQ0/rIRszT/NP40/TT8NPs0+jIGNPY09QkWNPdXCAhQNPdXEAFQNPlCA6VIJTQBEkQ0BEkiEkw0AhIRRChkSTUDIQlbNf9JNQU1/oAE1OAYLTT+ULAyBjT/D0SACAAAAAAAAATRsCo1BzQDVwAgNAMhB1s0AyEIWzQDVzAINP80AyEKWzIGNANXSBE0AyEOW0IDPUglNAESRDQESSISTDQCEhFEKGRJNQNJSkpKVwAgNf8hB1s1/iEIWzX9VzAINfwhCVs1+yEKWzX6V0gRNfkhDls1+Ek1BTX3gASR8aeaNPdQsDIGNPsMRDT3IlVJIwxAAVtJIQ8MQACFIQ8SRDT3VwEINfY09hc19SsnBDT8Ils0/hJNI1s19DT5JDT0CyRYNfM09TT+iAN3MQA0/xJENPUiDUSACQAAAAAAAATCAbApNQc0/zT+NP00/DT7NPoyBjT5IiQ09AtSNPMiWzT1CBY081cICFA081cQAVBQNPkkSTT0CwgkUlA0+EICUEgrJwQ0/CJbNP4STSNbNfY0+SQ09gskWDX1NPkiJDT2C1I09VcACDT1VwgIUDT1VxABUFA0+SRJNPYLCCRSUDX0NP0iDUQ09FcAEUk18yJbSTXyIg1ENP0hBgo18TTyNPEPRDEAiAKVSTXvIlVAAAYiNfBCAAYjNfBCAAA08ESACQAAAAAAAAPwAbApNQc0/zT+FlA0/RZQNPxQNPsWUDT6FlA0+BZQNPRQNPNQNPIWUDTxFlAoSwFXAH9nKUsBV38DZ0ghBTUBMgY1AkIB3EgrJwQ0/CJbNP4STSNbNfY0+SQ09gskWDX1MQCIAg9JNfMiVUAABiI19EIABiM19EIAADT0FEQ0+iEGDkQxACgpZoAJAAAAAAAAAzcBsCk1BzT/NP40/TT8NPs0+iMIMgY0+SIkNPYLUjT1VwAINPVXCAhQNPVXEAFQUDT5JEk09gsIJFJQNPhCAPZJIwxAAFIjEkQjNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEmouRdLA0/zEAEkQ0/zQDIQdbNAOBMFs0A1dRCDQDIQlbNAMhCFsIIjIGNANXQBEiQgCeSCEQiAFSIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yEEWzX+gRBbNf2ABPdxE000/xZQNP4WUDT9FlCwJK9JNfxXABE1+yEErzT7VwgIUDT7VxABUDX6NP8WNfkhEIgA97EisgEishIlshAyCrIUNP+yEbMxADT/FlA0/hZQNP0WUDIGFlA0+lA0+VAoSwFXAFlnSCM1ATIGNQJCAFs1/zX+Nf01/DX7Nfo1+TX4STX3NPgWUDT5FlA0+lA0+xZQNPwWUDT+UDT/FlAoSwFXAGFnSCU1ATIGNQJCABwxGSEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQYxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAANIKIkoYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECUSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 2,
  stateSize: 130,
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
                "name": "v622",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v623",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v624",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
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
                "name": "v622",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v623",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v624",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
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
        "internalType": "struct T11",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_A_acceptToken0_58",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_C_claimToken0_58",
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
                    "internalType": "struct T14",
                    "name": "_C_depositTokens0_58",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T15",
                "name": "v734",
                "type": "tuple"
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
    "name": "_reach_e3",
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
                "internalType": "bool",
                "name": "v1230",
                "type": "bool"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
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
                "internalType": "bool",
                "name": "v1017",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
    "name": "_reach_oe_v1008",
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
    "name": "_reach_oe_v1218",
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
    "name": "_reach_oe_v1233",
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
    "name": "_reach_oe_v823",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "A_acceptToken",
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
    "name": "A_timeIsOut",
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
    "name": "C_claimToken",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "C_depositTokens",
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
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
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
        "internalType": "struct T11",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_A_acceptToken0_58",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_C_claimToken0_58",
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
                    "internalType": "struct T14",
                    "name": "_C_depositTokens0_58",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T15",
                "name": "v734",
                "type": "tuple"
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
    "name": "_reach_m3",
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
                "internalType": "bool",
                "name": "v1230",
                "type": "bool"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
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
                "internalType": "bool",
                "name": "v1017",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002ffc38038062002ffc833981016040819052620000269162000535565b6000805543600355620000386200031c565b6040805133815283516020808301919091528085015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a1805160009081905281516020908101829052825160409081018390528351828501805191909152818501518490526060850180518590528151518401518151909401939093528051518201518351901515920191909152519051620001009290620001d0565b608082015260408101516020830151516200011f919060009062000253565b60a08201526200013234156007620002f2565b6200013c620003a3565b33815260208084018051516001600160a01b03168284015280518201516040808501919091529051810151606084015243608080850182905285015160a08086019190915285015160c0850152600160008190555551620001a0918391016200062b565b60405160208183030381529060405260029080519060200190620001c6929190620003ed565b5050505062000733565b620001da6200047c565b60005b60018110156200023057848160018110620001fc57620001fc620005e1565b6020020151828260018110620002165762000216620005e1565b6020020152806200022781620006cc565b915050620001dd565b5081818460018110620002475762000247620005e1565b60200201529392505050565b6200025d620004c9565b60005b6001811015620002c1578481600181106200027f576200027f620005e1565b6020020151828260018110620002995762000299620005e1565b6001600160a01b03909216602092909202015280620002b881620006cc565b91505062000260565b5081818460018110620002d857620002d8620005e1565b6001600160a01b0390921660209290920201529392505050565b81620003185760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080516101208101909152600060c0820181815260e08301829052610100830191909152815260208101620003516200047c565b815260200162000360620004c9565b815260408051606081018252600080825260208281018290529282015291019081526020016200038f6200047c565b81526020016200039e620004c9565b905290565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016200038f6200047c565b828054620003fb90620006f6565b90600052602060002090601f0160209004810192826200041f57600085556200046a565b82601f106200043a57805160ff19168380011785556200046a565b828001600101855582156200046a579182015b828111156200046a5782518255916020019190600101906200044d565b5062000478929150620004e7565b5090565b60405180602001604052806001905b620004b2604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200048b5790505090565b60405180602001604052806001906020820280368337509192915050565b5b80821115620004785760008155600101620004e8565b604051606081016001600160401b03811182821017156200052f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200054957600080fd5b604080519081016001600160401b03811182821017156200057a57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200059457600080fd5b6200059e620004fe565b60208501519092506001600160a01b0381168114620005bc57600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b634e487b7160e01b600052603260045260246000fd5b8060005b6001811015620006255781516001600160a01b0316845260209384019390910190600101620005fb565b50505050565b81516001600160a01b0390811682526020808401519091168183015260408084015181840152606080850151818501526080808601519085015260a0858101516101208601949291860160005b6001811015620006aa578251805183528581015186840152860151151586830152918401919083019060010162000678565b50505050505060c0830151620006c5610100840182620005f7565b5092915050565b6000600019821415620006ef57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200070b57607f821691505b602082108114156200072d57634e487b7160e01b600052602260045260246000fd5b50919050565b6128b980620007436000396000f3fe6080604052600436106100a55760003560e01c8063a1d68d5411610061578063a1d68d5414610152578063a63c1e9e14610165578063a98bf2231461016d578063ab53f2c614610180578063ad9fa3d8146101a3578063fb497bea146101b657005b80631e93b0f1146100ae5780632c10a159146100d25780633bc5b7bf146100e55780635a655a541461011257806364a1573d14610135578063832307571461013d57005b366100ac57005b005b3480156100ba57600080fd5b506003545b6040519081526020015b60405180910390f35b6100ac6100e0366004611e99565b6101be565b3480156100f157600080fd5b50610105610100366004611ecd565b6101e2565b6040516100c99190611f00565b610125610120366004611f39565b61020e565b60405190151581526020016100c9565b610125610249565b34801561014957600080fd5b506001546100bf565b6100ac610160366004611f52565b610279565b610125610299565b6100ac61017b366004611e99565b6102c8565b34801561018c57600080fd5b506101956102e8565b6040516100c9929190611f90565b6100ac6101b1366004611e99565b610385565b6101256103a5565b6101c6611a01565b6101de6101d836849003840184612081565b826103d2565b5050565b6040805160608101825260008082526020820181905291810191909152610208826105a1565b92915050565b6000610218611a28565b6020810180515160029052515160600151839052610234611a01565b61023e828261067a565b606001519392505050565b6000610253611a28565b60208101515160019052610265611a01565b61026f828261067a565b6040015192915050565b610281611a01565b6101de610293368490038401846120d7565b8261067a565b60006102a3611a79565b6020810151600090526102b4611a01565b6102be8282611169565b6020015192915050565b6102d0611a01565b6101de6102e236849003840184612205565b82611169565b6000606060005460028080546102fd90612221565b80601f016020809104026020016040519081016040528092919081815260200182805461032990612221565b80156103765780601f1061034b57610100808354040283529160200191610376565b820191906000526020600020905b81548152906001019060200180831161035957829003601f168201915b50505050509050915091509091565b61038d611a01565b6101de61039f36849003840184612205565b8261134e565b60006103af611a28565b602081015151600090526103c1611a01565b6103cb828261067a565b5192915050565b6103e2600160005414600a6116ae565b81516103fd9015806103f657508251600154145b600b6116ae565b60008080556002805461040f90612221565b80601f016020809104026020016040519081016040528092919081815260200182805461043b90612221565b80156104885780601f1061045d57610100808354040283529160200191610488565b820191906000526020600020905b81548152906001019060200180831161046b57829003601f168201915b50505050508060200190518101906104a09190612370565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16104f7341560086116ae565b805161050f906001600160a01b0316331460096116ae565b610517611aa3565b815181516001600160a01b03918216905260208084015183519216910152606080830151825160409081019190915260c08401518351909201919091528201516080830151610566919061242b565b8151608001526020808201805160009081905281514393019290925260a0840151815160400152516060015261059b816116d4565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156105ed576105ed611eea565b141561066a576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561062e5761062e611eea565b600181111561063f5761063f611eea565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b61068a600460005414601a6116ae565b81516106a590158061069e57508251600154145b601b6116ae565b6000808055600280546106b790612221565b80601f01602080910402602001604051908101604052809291908181526020018280546106e390612221565b80156107305780601f1061070557610100808354040283529160200191610730565b820191906000526020600020905b81548152906001019060200180831161071357829003601f168201915b50505050508060200190518101906107489190612443565b9050610752611ac3565b61076382608001514310601c6116ae565b7f05cd528dd52be10e88f3bf8ae5339ec5fa78bdfda9404d8a832f3679483fc1c433856040516107949291906124ee565b60405180910390a160006020850151515160028111156107b6576107b6611eea565b1415610ad6576107c83415600c6116ae565b6101008101805160009081905290516001602091820181905261012084018051919091525181019190915260c0830151908301516060840151516001600160a01b0390811691161461081f57816101000151610826565b8161012001515b602001516001811061083a5761083a612553565b602090810291909101515182515260c0830151908301516060840151516001600160a01b039081169116146108745781610100015161087b565b8161012001515b602001516001811061088f5761088f612553565b60209081029190910151810151825182015260c0830151908301516060840151516001600160a01b039081169116146108cd578161010001516108d4565b8161012001515b60200151600181106108e8576108e8612553565b6020020151604001518160000151604001901515908115158152505061091e610917338460200151600061177b565b600d6116ae565b6000610929336105a1565b51600181111561093b5761093b611eea565b141561094d5760006020820152610978565b6001610958336105a1565b51600181111561096a5761096a611eea565b141561097857600160208201525b610995816020015161098b57600161098e565b60005b600e6116ae565b6109a860038360a001511115600f6116ae565b33600090815260046020908152604091829020805462ff00ff1916600190811790915591519182527feb785925bcdb56f7028853321897b1e61c29154cb761d9125291fb216e3cae39910160405180910390a160018352610a07611aa3565b825181516001600160a01b0391821690526020808501518351921691015260408084015182519091015260608084015182519091015260808084015182519091015260a0830151610a5a9060019061242b565b60208281018051929092529051439082015260c084015190840151606085015151610aaf92916001600160a01b03918216911614610a9d57836101000151610aa4565b8361012001515b602001518451611793565b6020820180516040019190915260e0840151905160600152610ad0816116d4565b5061059b565b6001602085015151516002811115610af057610af0611eea565b1415610e9957610b02341560106116ae565b6101408101805160009081905290516001602091820181905261016084018051919091525181019190915260c0830151908301516060840151516001600160a01b03908116911614610b5957816101400151610b60565b8161016001515b6020015160018110610b7457610b74612553565b602090810291909101515160408301515260c0830151908301516060840151516001600160a01b03908116911614610bb157816101400151610bb8565b8161016001515b6020015160018110610bcc57610bcc612553565b602002015160200151816040015160200181815250508160c0015182602001516001600160a01b03168360600151600060018110610c0c57610c0c612553565b60200201516001600160a01b031614610c2a57816101400151610c31565b8161016001515b6020015160018110610c4557610c45612553565b60200201516040015181604001516040019015159081151581525050610cc18260c0015183602001516001600160a01b03168460600151600060018110610c8e57610c8e612553565b60200201516001600160a01b031614610cac57826101400151610cb3565b8261016001515b602001518360400151611793565b8160600181905250610ce3610cdc338460200151600061177b565b60116116ae565b610cf5600083604001511160126116ae565b60608101515151610d0990151560136116ae565b60038260400151610d1a9190612569565b6080820181905260608201515151610d3591111560146116ae565b6000610d40336105a1565b516001811115610d5257610d52611eea565b1415610d6457600060a0820152610d8f565b6001610d6f336105a1565b516001811115610d8157610d81611eea565b1415610d8f57600160a08201525b610d9e8160a0015160156116ae565b604051600181527f9aa18d836173795b84e00308d2846e0e7d6d6a1497080d2d49444dff95c142e49060200160405180910390a160016040840152610de1611c30565b82516001600160a01b0390811682526020808501519091168183015260408085015181840152606080860151818501526080808701518186015260a0808801519086015260e08088015160c08701529186018051928601929092528151516101008601529051515161012085015284015161014084015260056000554360015551610e6e918391016125fb565b60405160208183030381529060405260029080519060200190610e92929190611cc1565b505061059b565b6002602085015151516002811115610eb357610eb3611eea565b141561059b576020840151516060015160c0820152610ed4341560166116ae565b610180810180516000908190529051600160209182018190526101a084018051919091525181019190915260c0808301515190840151918401516060850151519192916001600160a01b03908116911614610f3457826101800151610f3b565b826101a001515b6020015160018110610f4f57610f4f612553565b602002015151610f5f919061242b565b60e08201515260c082015160208301516060840151516001600160a01b03908116911614610f9257816101800151610f99565b816101a001515b6020015160018110610fad57610fad612553565b6020020151602001518160e0015160200181815250508160c0015182602001516001600160a01b03168360600151600060018110610fed57610fed612553565b60200201516001600160a01b03161461100b57816101800151611012565b816101a001515b602001516001811061102657611026612553565b6020020151604001518160e00151604001901515908115158152505061106361105c3384602001518460c001516000015161177b565b60176116ae565b815161107b906001600160a01b0316331460186116ae565b60c08101515161108e90151560196116ae565b604051600181527ff3b531f3ed5771e3fcd0396e0d41ead890305c5d63df192d4df90069484272d69060200160405180910390a1600160608401526110d1611aa3565b825181516001600160a01b039182169052602080850180518451908416908301526040808701518551909101526060808701805186519092019190915260808088015186519091015260a0870151838601805191909152514393019290925260c08601519051915151610aaf93919282169116146111545783610180015161115b565b836101a001515b602001518460e00151611793565b611179600460005414601e6116ae565b815161119490158061118d57508251600154145b601f6116ae565b6000808055600280546111a690612221565b80601f01602080910402602001604051908101604052809291908181526020018280546111d290612221565b801561121f5780601f106111f45761010080835404028352916020019161121f565b820191906000526020600020905b81548152906001019060200180831161120257829003601f168201915b50505050508060200190518101906112379190612443565b905061124b816080015143101560206116ae565b7f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b94338460405161127c9291906126bf565b60405180910390a16112903415601d6116ae565b604051600081527fb6abe81cbd275f88dfe0b36b336dd68ba01c60238cedd2c8cf9313bad72ef16a9060200160405180910390a1600060208301526112d3611aa3565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518351820152606080850151845182015260808086015185519091015260a085015183850180519190915280514394019390935260c085015183519092019190915260e08401519151015261059b816116d4565b61135e60056000541460236116ae565b815161137990158061137257508251600154145b60246116ae565b60008080556002805461138b90612221565b80601f01602080910402602001604051908101604052809291908181526020018280546113b790612221565b80156114045780601f106113d957610100808354040283529160200191611404565b820191906000526020600020905b8154815290600101906020018083116113e757829003601f168201915b505050505080602001905181019061141c91906126e9565b90506114686040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b7f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c2136533856040516114999291906126bf565b60405180910390a16114ad341560216116ae565b81516114c5906001600160a01b0316331460226116ae565b602084015151156115b7578161014001518261012001516114e691906127a1565b815152610100820180516020908101518351820152905160409081015183519015159101528201518251610140840151611521929190611807565b611529611aa3565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260608085015183519091015260808085015183519091015260a0840151818301805191909152514391015260e083015182516115969190600090611793565b6020820180516040019190915260c0840151905160600152610ad0816116d4565b8161014001518261012001516115cd91906127a1565b602080830180519290925261010084018051820151835183015251604090810151925192151592019190915282015161014083015161160e91903390611807565b611616611aa3565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260608085015183519091015260808085015183519091015260a084015181830180519190915251439082015260e0840151908301516116869190600090611793565b6020820180516040019190915260c08401519051606001526116a7816116d4565b5050505050565b816101de5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6116dc611d45565b8151516001600160a01b03908116825282516020908101519091168183015282516040908101518184015283516060908101518185015284516080908101519085015282850180515160a0860152805183015160c086015251015160e084015260046000554360015551611752918391016127b8565b60405160208183030381529060405260029080519060200190611776929190611cc1565b505050565b60006117898385308561181b565b90505b9392505050565b61179b611da8565b60005b60018110156117e7578481600181106117b9576117b9612553565b60200201518282600181106117d0576117d0612553565b6020020152806117df8161282f565b91505061179e565b50818184600181106117fb576117fb612553565b60200201529392505050565b6118128383836118f5565b61177657600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916118829161284a565b60006040518083038185875af1925050503d80600081146118bf576040519150601f19603f3d011682016040523d82523d6000602084013e6118c4565b606091505b50915091506118d5828260016119c6565b50808060200190518101906118ea9190612866565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916119549161284a565b60006040518083038185875af1925050503d8060008114611991576040519150601f19603f3d011682016040523d82523d6000602084013e611996565b606091505b50915091506119a7828260026119c6565b50808060200190518101906119bc9190612866565b9695505050505050565b606083156119d557508161178c565b8251156119e55782518084602001fd5b60405163100960cb60e01b8152600481018390526024016116cb565b60408051608081018252600080825260208201819052918101829052606081019190915290565b604051806040016040528060008152602001611a746040805160a08101825260006020808301828152838501839052606084018390528451918201909452908152608082015290815290565b905290565b604051806040016040528060008152602001611a7460405180602001604052806000151581525090565b6040518060400160405280611ab6611df3565b8152602001611a74611e2d565b604080516102208101825260006101c082018181526101e083018290526102008301829052825260208083018290528351606080820186528382529181018390528085019290925292820152908101611b1a611da8565b815260200160008152602001600015158152602001611b456040518060200160405280600081525090565b815260408051606081018252600080825260208083018290528284018290528085019290925282518084018452818152918201529101908152602001611ba06040518060400160405280600015158152602001600081525090565b8152602001611bc46040518060400160405280600015158152602001600081525090565b8152602001611be86040518060400160405280600015158152602001600081525090565b8152602001611c0c6040518060400160405280600015158152602001600081525090565b8152602001611a746040518060400160405280600015158152602001600081525090565b60405180610160016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001611c6b611e4e565b8152602001600081526020016000815260200160008152602001611c8d611da8565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001600081525090565b828054611ccd90612221565b90600052602060002090601f016020900481019282611cef5760008555611d35565b82601f10611d0857805160ff1916838001178555611d35565b82800160010185558215611d35579182015b82811115611d35578251825591602001919060010190611d1a565b50611d41929150611e6c565b5090565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001611d80611e4e565b81526020016000815260200160008152602001611d9b611da8565b8152602001600081525090565b60405180602001604052806001905b611ddd604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081611db75790505090565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001611d9b611e4e565b60405180608001604052806000815260200160008152602001611d9b611da8565b60405180602001604052806001906020820280368337509192915050565b5b80821115611d415760008155600101611e6d565b600060408284031215611e9357600080fd5b50919050565b600060408284031215611eab57600080fd5b61178c8383611e81565b6001600160a01b0381168114611eca57600080fd5b50565b600060208284031215611edf57600080fd5b813561178c81611eb5565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110611f1757611f17611eea565b8083525060208301511515602083015260408301511515604083015292915050565b600060208284031215611f4b57600080fd5b5035919050565b600060a08284031215611e9357600080fd5b60005b83811015611f7f578181015183820152602001611f67565b8381111561059b5750506000910152565b8281526040602082015260008251806040840152611fb5816060850160208701611f64565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561200357612003611fca565b60405290565b6040516020810167ffffffffffffffff8111828210171561200357612003611fca565b6040516080810167ffffffffffffffff8111828210171561200357612003611fca565b604051610160810167ffffffffffffffff8111828210171561200357612003611fca565b8015158114611eca57600080fd5b60006040828403121561209357600080fd5b6040516040810181811067ffffffffffffffff821117156120b6576120b6611fca565b6040528235815260208301356120cb81612073565b60208201529392505050565b600081830360a08112156120ea57600080fd5b6120f2611fe0565b833581526080601f198301121561210857600080fd5b612110612009565b61211861202c565b60208601356003811061212a57600080fd5b8152604086013561213a81612073565b6020820152606086013561214d81612073565b60408201526020607f198501121561216457600080fd5b61216c612009565b60809690960135865260608101959095529384526020810193909352509092915050565b600081830360408112156121a357600080fd5b6121ab611fe0565b8335815291506020601f19820112156121c357600080fd5b506040516020810181811067ffffffffffffffff821117156121e7576121e7611fca565b60405260208301356121f881612073565b8152602082015292915050565b60006040828403121561221757600080fd5b61178c8383612190565b600181811c9082168061223557607f821691505b60208210811415611e9357634e487b7160e01b600052602260045260246000fd5b805161067581611eb5565b60006060828403121561227357600080fd5b6040516060810181811067ffffffffffffffff8211171561229657612296611fca565b8060405250809150825181526020830151602082015260408301516122ba81612073565b6040919091015292915050565b600082601f8301126122d857600080fd5b6122e0612009565b806060808501868111156122f357600080fd5b855b81811015612316576123078882612261565b855260209094019382016122f5565b50919695505050505050565b600082601f83011261233357600080fd5b61233b612009565b8060208085018681111561234e57600080fd5b855b8181101561231657805161236381611eb5565b8552938201938201612350565b6000610120828403121561238357600080fd5b60405160e0810181811067ffffffffffffffff821117156123a6576123a6611fca565b60405282516123b481611eb5565b815260208301516123c481611eb5565b806020830152506040830151604082015260608301516060820152608083015160808201526123f68460a085016122c7565b60a0820152612409846101008501612322565b60c08201529392505050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561243e5761243e612415565b500190565b6000610140828403121561245657600080fd5b604051610100810181811067ffffffffffffffff8211171561247a5761247a611fca565b60405261248683612256565b815261249460208401612256565b6020820152604083015160408201526124b08460608501612322565b60608201526080830151608082015260a083015160a08201526124d68460c085016122c7565b60c0820152610120929092015160e083015250919050565b6001600160a01b0383168152815160208083019190915282015151805160c0830191906003811061252157612521611eea565b8060408501525060208101511515606084015260408101511515608084015260608101515160a0840152509392505050565b634e487b7160e01b600052603260045260246000fd5b60008261258657634e487b7160e01b600052601260045260246000fd5b500490565b8060005b600181101561059b5781516001600160a01b031684526020938401939091019060010161258f565b8060005b600181101561059b576125e584835180518252602080820151908301526040908101511515910152565b60609390930192602091909101906001016125bb565b81516001600160a01b031681526101e08101602083015161262760208401826001600160a01b03169052565b50604083015160408301526060830151612644606084018261258b565b506080830151608083015260a083015160a083015260c083015160c083015260e083015161267560e08401826125b7565b506101008301516101406126a18185018380518252602080820151908301526040908101511515910152565b6101208501516101a0850152808501516101c0850152505092915050565b6001600160a01b03831681526060810161178c602083018480518252602090810151511515910152565b60006101e082840312156126fc57600080fd5b61270461204f565b61270d83612256565b815261271b60208401612256565b6020820152604083015160408201526127378460608501612322565b60608201526080830151608082015260a083015160a082015260c083015160c08201526127678460e085016122c7565b60e082015261014061277b85828601612261565b6101008301526101a08401516101208301526101c0909301519281019290925250919050565b6000828210156127b3576127b3612415565b500390565b81516001600160a01b03908116825260208084015190911690820152604080830151908201526060808301516101408301916127f69084018261258b565b506080830151608083015260a083015160a083015260c083015161281d60c08401826125b7565b5060e083015161012083015292915050565b600060001982141561284357612843612415565b5060010190565b6000825161285c818460208701611f64565b9190910192915050565b60006020828403121561287857600080fd5b815161178c8161207356fea26469706673582212204fae6b90e6e64e53406eef297de3914759c187b190b74b1129db64eb616824e064736f6c634300080c0033`,
  BytecodeLen: 12284,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:31:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:123:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:42:37:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:80:25:after expr stmt semicolon',
    fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "A_acceptToken": A_acceptToken,
  "A_timeIsOut": A_timeIsOut,
  "C_claimToken": C_claimToken,
  "C_depositTokens": C_depositTokens,
  "D": D
  };
export const _APIs = {
  A: {
    acceptToken: A_acceptToken,
    timeIsOut: A_timeIsOut
    },
  C: {
    claimToken: C_claimToken,
    depositTokens: C_depositTokens
    }
  };
