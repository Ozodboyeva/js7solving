function getMaxOfString(str) {
  var words = str.split(" ");

  var longestWord = "";

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(getMaxOfString("How to solve better its so challenging"));
