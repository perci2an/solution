// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 한다.
// 정수배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로
// 진료 순서를 정한 배열을 return하도록 solution 함수를 완성하시오.

// emergency 배열의 value와 index를 한 객체로 보관하는 emergencyWithIndex 생성
// 현재 emergency 배열 요소의 위치들을 기억하기 위함
function solution(emergency) {
  const emergencyWithIndex = emergency.map((value, index) => ({
    value,
    index,
  }));

  // 배열을 내림차순으로 정렬
  emergencyWithIndex.sort((a, b) => b.value - a.value);

  // result 배열에 응급도에 따른 순서를 emergency 요소들의 원래 위치와 동일하게 집어넣음
  const result = [];
  for (let i = 0; i < emergency.length; i++) {
    result[emergencyWithIndex[i].index] = i + 1;
  }

  return result;
}
