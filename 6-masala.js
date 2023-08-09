function getStringStars(N, str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += str[i];

    if (i !== str.length - 1) {
      result += "*".repeat(N);
    }
  }

  return result;
}

console.log(getStringStars(1, "Hello")); // Output: "H*E*L*L*O"
