function convertToLowercase(line) {
  let result = "";

  for (let char of line) {
    if (char >= "A" && char <= "Z") {
      result += String.fromCharCode(char.charCodeAt(0) + 32);
    } else {
      result += char;
    }
  }

  return result;
}

console.log(
  convertToLowercase("Hello World HI August Welcome TO Najot ta'lim")
);
