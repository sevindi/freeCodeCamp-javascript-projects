const MONEYLIST = [{
    type: "ONE HUNDRED",
    val: 100
  },
  {
    type: "TWENTY",
    val: 20
  },
  {
    type: "TEN",
    val: 10
  },
  {
    type: "FIVE",
    val: 5
  },
  {
    type: "ONE",
    val: 1
  },
  {
    type: "QUARTER",
    val: 0.25
  },
  {
    type: "DIME",
    val: 0.10
  },
  {
    type: "NICKEL",
    val: 0.05
  },
  {
    type: "PENNY",
    val: 0.01
  }
];

const checkCashRegister = (price, cash, cid) => {
  let change = cash - price;
  let cidSum = 0;

  for (let i = 0; i < cid.length; i++) {
    cidSum += cid[i][1];
  }
  if (cidSum < change) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  } else if (cidSum === change) {
    return {
      status: "CLOSED",
      change: [...cid]
    };
  }

  let reversedCid = cid.reverse();

  let result = MONEYLIST.reduce((acc, next, i) => {
    if (change >= next.val) {
      let currVal = 0;
      while (change >= next.val && reversedCid[i][1] >= next.val) {
        currVal += next.val;
        change -= next.val;
        change = Math.round(change * 100) / 100;
        reversedCid[i][1] -= next.val;
      }
      acc.push([next.type, currVal]);
      return acc;
    } else {
      return acc;
    }
  }, []);

  if (result.length > 0 && change === 0) {
    return {
      status: "OPEN",
      change: result
    };
  } else {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  }

}


checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);
