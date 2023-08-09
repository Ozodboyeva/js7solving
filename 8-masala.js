function smallLetters(line) {
  let count = 0;

  for (let char of line) {
    if ((char >= "a" && char <= "z") || (char >= "а" && char <= "я")) {
      count++;
    }
  }

  return count;
}

// Example usage:
console.log(smallLetters("Hello World hi jzkSMLkafjNafkDSKJAJF")); // Output: 8
console.log(smallLetters("wiTHOUT REasons "));
