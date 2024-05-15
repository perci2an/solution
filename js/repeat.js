function solution(my_string, n) {
  // 매개변수 'my_string'과 'n'을 입력받음
  let repeatedString = ""; // 빈 문자열 생성
  for (let char of my_string) {
    // my_string의 요소들을 순서대로 가져와 char에 할당
    repeatedString += char.repeat(n); // 현재 할당된 알파벳을 n번만큼 반복하여 repeatedString에 할당
  }
  return repeatedString;
}
