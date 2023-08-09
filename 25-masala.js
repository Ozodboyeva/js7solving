function countMarks(str) {
  let marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"];

  for (let i = 0; i < str.length; i++) {
    if (marks.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(countMarks("Hello, world!"));
