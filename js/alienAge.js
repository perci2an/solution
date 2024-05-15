// 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 되었다.
// 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있다.
// a는 0, b는 1, c는 2, ..., j는 9이다. 예를 들어 23살은 cd, 51살은 fb로 표현한다.
//나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성하시오.

const solution = (age) => {
  let newLanguage = ""; // 결과를 저장할 빈 문자열 선언

  while (age > 0) {
    const divideAge = age % 10; // age를 10으로 나눈 나머지를 통해 나이를 한 자리씩 구한다.

    newLanguage = String.fromCharCode(97 + divideAge) + newLanguage;
    // a의 유니코드는 97인 것을 활용하여 나머지를 더함으로 알파벳을 증가시킨다.
    // String.fromCharCode(97+divideAge)에 newLanguage를 더하는 것은 빈 문자열에 뒤를 우선으로 집어넣기 때문이다.

    age = Math.floor(age / 10);
    // 구한 마지막 뒷자리 수는 제외시키려는 목적으로 age에 10을 나누어 몫만 남긴다.
  }
  return newLanguage;
};
