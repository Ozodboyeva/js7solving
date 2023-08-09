function UppercaseLetters(n) {
  let result = [];
  let startCharCode = "A".charCodeAt(0);

  for (let i = 0; i < n; i++) {
    let letters = String.fromCharCode(startCharCode + i);
    result.push(letters);
  }

  return result;
}

console.log(UppercaseLetters(5));
console.log(UppercaseLetters(10));
