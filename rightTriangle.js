const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
});

let tr = "";

rl.on("line", function (line) {
  for (var i = 1; i <= line; i++) {
    for (var j = 1; j <= i; j++) {
      tr += "*";
    }
    console.log(tr);
    tr = "";
  }
});
