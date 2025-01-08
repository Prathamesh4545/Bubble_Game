let workArea = document.querySelector(".workArea");
let scoreCount = 0;

function createBubble() {
  let collect = "";
  for (let i = 0; i <= 150; i++) {
    let val = Math.floor(Math.random() * (60 - 1 + 1));
    collect += `<div id="bubble">${val}</div>`;
  }
  workArea.innerHTML = collect;
}
let timer = 120;
let interval;

function setTimer() {
  interval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
      if (timer % 5 === 0) {
        createBubble();
      }
    } else {
      clearInterval(interval);
      workArea.innerHTML = `<h1 id='gameOver'> Game Over </h1>`;
    }
  }, 1000);
}

let targetVal = 0;
function targetValGenerater() {
  let rand = Math.floor(Math.random() * (60 - 1 + 1));
  targetVal = Number((document.querySelector("#hitVal").textContent = rand));
}

function clickBubble() {
  workArea.addEventListener("click", (details) => {
    let hitTarget = Number(details.target.textContent);
    if (targetVal === hitTarget) {
      scoreCount += 10;
      createBubble();
      targetValGenerater();
    } else {
      clearInterval(interval);
      workArea.innerHTML = `<h1 id='gameOver'> Game Over </h1>`;
    }

    if (scoreCount === 100) {
      clearInterval(interval);
      workArea.innerHTML = `<h1 id='win'> Congratulations, you won! </h1>`;
    }

    document.querySelector("#scoreCount").innerHTML = scoreCount;
  });
}

createBubble();
setTimer();
targetValGenerater();
clickBubble();
