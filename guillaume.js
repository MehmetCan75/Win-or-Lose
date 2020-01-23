const btn = document.getElementById("check-answer");
const money = document.getElementById("money");
const gobelets = document.querySelectorAll(".gobelet");
​
var isPlaying = false;
​
function start() {
  if (!isPlaying) {
    isPlaying = true;
    console.log("le jeu démarre");
    gobelets.forEach(g => (g.onclick = newGame));
  } else return;
}
​
function newGame() {
  console.log("préparation de la nouvelle manche");
  const previousMoney = Number(money.textContent);
  const currentMoney = previousMoney - 10;
  isPlaying = false;
  money.textContent = currentMoney;
​
  setTimeout(() => {
    if (currentMoney > 0) start();
    else alert("gameover");
  }, 500);
}
​
btn.onclick = start;