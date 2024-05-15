function solution(my_string) {
  var container = []; // 빈 배열 생성(뒤집힌 순서로 원소 저장)
  for (var i = my_string.length - 1; i >= 0; i--) {
    // (my_string의 원소 갯수-1)번 부터 0번까지의 반복횟수 지정
    container.push(my_string[i]); // (my_string의 가장 끝에있는 원소를 시작으로 하나씩 집어넣음)
  }
  return container.join(""); // container 배열의 모든 요소들을 하나의 문자열로 합쳐서 반환
}
