const UNITS = {
  "PENNY": .01,
  "NICKEL": .05,
  "DIME": .10,
  "QUARTER": .25,
  "ONE": 1.00,
  "FIVE": 5.00,
  "TEN": 10.00,
  "TWENTY": 20.00,
  "ONE HUNDRED": 100.00
  }

  // states
  const ONE = "INSUFFICIENT_FUNDS";
  const TWO = "CLOSED";
  const THREE = "OPEN";

function checkCashRegister(price, cash, cid) {
  var arr = [];
  var amountCid = 0;
  var give = cash - price;
  // total cid amount
  for (let every of cid) {
    amountCid += every[1];
  }
  // avoid rounding mistakes
  amountCid.toFixed(2);
  // change would be to higher than cid
  if (give > amountCid) {
    return { status: ONE, change: [] };
    // change is equal to cid => give change and close drawer
  } else if (give.toFixed(2) == amountCid) {
    return { status: TWO, change: cid };
    // enough change and don´t have to close draawer
  } else {
    cid.reverse();
    for (let everything of cid) {
      var any = [everything[0], 0];
      while (give >= UNITS[everything[0]] && everything[1] > 0) {
        everything[1] -= UNITS[everything[0]];
        any[1] += UNITS[everything[0]];
        give -= UNITS[everything[0]];
        // avoid rounding mistakes
        give = give.toFixed(2);
      }
      if (any[1] > 0) {
        arr.push(any);
      }
    }
  }
  // not enough change
  if (give > 0) {
    return { status: ONE, change: [] };
  }
  return { status: THREE, change: arr};
}


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);