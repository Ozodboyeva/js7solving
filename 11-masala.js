function checkNumberType(inputString) {
  if (Number.isInteger(Number(inputString))) {
    return 1;
  } else if (!isNaN(parseFloat(inputString))) {
    return 2;
  } else {
    return 0;
  }
}
console.log(checkNumberType("65"));
