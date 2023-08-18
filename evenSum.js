//정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성하시오.

const solution = (n) => {
  evenSum = 0; // 짝수의 누적합을 보관할 변수

  for (var i = 0; i <= n; i += 2) {
    // 초기값 0에 2를 계속 더함으로 짝수만을 반복하도록 설정
    evenSum += i;
  }
  return evenSum;
};
