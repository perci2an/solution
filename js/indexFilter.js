// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때,
// numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을
// return 하도록 solution 함수를 완성해보세요.

const solution = (numbers, num1, num2) => {
  const filterNumbers = numbers.filter((arrayElement, index) => {
    // numbers의 요소와 index를 뜻하는 arrayElement, index매개변수
    return index >= num1 && index <= num2;
    // num1보다 크거나 같고, num2보다 작거나 같은 인덱스 범위를 지정
  });
  return filterNumbers;
};
