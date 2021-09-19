// alphabet twice cause it counts 13 and could get over z
const LETTERS = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"];

function rot13(str) {
  var transformed = "";
  for (var i = 0; i < str.length; i++) {
    // if it is a letter (==\w) => transofrm
    if (/\w/i.test(str[i])) {
      transformed += LETTERS[LETTERS.indexOf(str[i]) + 13];
      // if it is not a letter just copy without transforming it
    } else {
      transformed += str[i];
    }
  }
  return transformed;
}

rot13("SERR PBQR PNZC");