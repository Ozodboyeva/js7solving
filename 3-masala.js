function UTF16(string) {
  const firstCharacter = string.charCodeAt(0);
  const lastCharacter = string.charCodeAt(string.length - 1);

  return {
    firstCharacter: String.fromCharCode(firstCharacter),
    lastCharacter: String.fromCharCode(lastCharacter),
  };
}

console.log(UTF16("Muharram"));
