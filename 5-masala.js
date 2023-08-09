function ReverseString(str) {
  return [...str].reduce((x, y) => y.concat(x));
}

console.log(ReverseString("Hello world"));
