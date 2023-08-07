function solution(my_string, n) {
  let repeatedString = "";
  for (let char of my_string) {
    repeatedString += char.repeat(n);
  }
  return repeatedString;
}
