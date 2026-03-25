// app.js
const name = "사용자";
const currentTime = new Date().toLocaleTimeString();

console.log("--------------------------------");
console.log(`안녕하세요, ${name}님!`);
console.log(`현재 실행 시간은 ${currentTime}입니다.`);
console.log("Node.js 스크립트가 성공적으로 실행되었습니다.");
console.log("--------------------------------");

const readline = require('readline');

// 터미널 입출력 설정
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1~100 사이의 난수 생성
const answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("=== 숫자 맞추기 게임 (1~100) ===");

const playGame = () => {
  rl.question("숫자를 입력하세요: ", (input) => {
    const guess = parseInt(input);
    attempts++;

    if (isNaN(guess)) {
      console.log("숫자만 입력해 주세요!");
    } else if (guess === answer) {
      console.log(`축하합니다! 정답입니다! (${attempts}번 만에 맞춤)`);
      rl.close(); // 게임 종료
      return;
    } else if (guess > answer) {
      console.log("더 작습니다! (Down)");
    } else {
      console.log("더 큽니다! (Up)");
    }

    // 맞출 때까지 반복 실행
    playGame();
  });
};

playGame();
