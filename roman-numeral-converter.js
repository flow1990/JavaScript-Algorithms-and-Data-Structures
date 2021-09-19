// all roman numbers
const ROMANS = {
  // roman muste be KEY and go down!
  M : 1000, CM : 900, D : 500, CD : 400, C : 100, XC : 90, L : 50, XL : 40, X : 10, IX : 9, V : 5, IV : 4, I : 1
  }

function convertToRoman(num) {
// output
  var switcher = "";
// for key in object (romans)
  for(const key in ROMANS) {
    var numero = ROMANS[key];
    // go on while the value of numero is NOT equal to the number given
    while(numero <= num) {
      // add the key
      switcher = switcher + key;
      // subtract the value of numero from the current number
      num = num - numero;
    }
  }
 return switcher;
}

convertToRoman(36);