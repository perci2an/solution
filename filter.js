function solution(my_string, letter) {
  const character = my_string.split(""); // split를 이용하여 문자열을 문자 단위로 구분
  const filteredCharacter = character.filter((ch) => ch != letter); // filter를 사용하여 letter문자를 제외시킴
  // ch가 letter와 다를 경우 true를 반환
  const result = filteredCharacter.join(""); // 원하는 문자를 제외한 나머지 문자들을 join으로 합침
  return result;
}
