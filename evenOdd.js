function solution(num_list) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < num_list.length; i++) {
    // 배열의 개수 만큼 반복
    if (num_list[i] % 2 == 0) {
      // 배열 안 요소를 2로 나눴을 시 나머지가 0일 시 짝수
      even += 1;
    } else {
      // 아닐 시 홀수
      odd += 1;
    }
  }
  return [even, odd]; // 짝수와 홀수의 개수를 담은 배열 리턴
}
