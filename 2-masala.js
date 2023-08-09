function strDigitAndLatin(n) {
  if (typeof n !== "string" || n.length !== 1) {
    return 0;
  }
  let str = "";
  for (let i = 65; i <= 90; i++) {
    str += String.fromCharCode(i);
    if (n >= "a" && n <= "z") {
      return "Lotin";
    }
  }
  if (n >= "0" && n <= "9") {
    return "Digit";
  }

  return 0;
}
let res = strDigitAndLatin("1");
console.log(res);
