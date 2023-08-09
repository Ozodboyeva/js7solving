function countNumbers(line) {
  let count = 0;

  for (let char of line) {
    if (!isNaN(char)) {
      count++;
    }
  }

  return count;
}

console.log(countNumbers("Hello5890hfssknafnASK6733LSAFJAKL"));
