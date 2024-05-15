const readline = require("readline"); // 사용자로부터 텍스트를 읽고 쓰기 위한 readline모듈을 불러옴
const rl = readline.createInterface({
  // 인터페이스를 생성 (readline모듈에서 제공하는 createInterface 함수)
  input: process.stdin, // 사용자의 입력을 읽어오기 위해 process.stdin을 사용
  //output: process.stdout, // console.log를 사용할 것이기에 필요없음
});

let tr = ""; // 빈 문자열 tr 생성

rl.on("line", function (line) {
  // Enter를 누르게 되면(line) 함수 실행
  for (var i = 1; i <= line; i++) {
    // 행(row)
    for (var j = 1; j <= i; j++) {
      // 열(column)
      tr += "*";
    }
    console.log(tr); // console.log는 출력 시 자동 줄바꿈이 됨
    tr = "";
  }
});
