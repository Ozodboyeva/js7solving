function createString(N, character) {
  let result = "";

  for (let i = 0; i < N; i++) {
    result += character;
  }

  return result;
}

console.log(createString(5, "A")); // Output: "AAAAA"
