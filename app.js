var boutons = document.getElementsByClassName("rond");
const box = document.querySelector(".box");
var numberBouton = 0;
const splash = new Audio(["./audio/1074.wav"]);
// var snd = new Audio("audio/Dexter_Britain_-_01_-_The_Time_To_Run_Finale.mp3");
// snd.play();

console.log(numberBouton);
console.log(boutons);

function addSpot() {
  const possibleCells = document.querySelectorAll(".zonevalide");
  const rand = Math.floor(Math.random() * possibleCells.length);
  const target = possibleCells[rand];
  console.log(target);
  const element = document.createElement("box");
  element.className = "rond";
  element.style.gridRow = Math.floor(Math.random() * 10);
  element.style.gridColumn = Math.floor(Math.random() * 10);
  element.onclick = listenClicks;
  target.appendChild(element);
}

function removeSpot(e) {
  console.log(e.target.parentElement);
  e.target.parentElement.removeChild(e.target);
  e.animate;

  //   box.removeChild(box.childNodes[0]);
}

function listenClicks(e) {
  // comment récupérer la source du click (cad le bouton cliqué)
  console.log("click");
  addSpot();
  removeSpot(e);
  splash.play();
  setTimeout(function() {
    splash.pause();
  }, 800);
  numberBouton++;
  // numberBouton += 1;
  // numberBouton = numberBouton + 1;
  affbuton(numberBouton);
}

for (let i = 0; i < boutons.length; i++) {
  console.log(boutons[i]);

  boutons[i].onclick = listenClicks;
}

addSpot();

console.log(".................................");

var counter = 10;
var intervalId = null;
function finish() {
  clearInterval(intervalId);
  document.getElementById("bip").innerHTML = "TERMINE!";
  box.classList.add("is-disabled");
  return (counter = 10);
}
function bip() {
  counter--;
  if (counter == 0) finish();
  else {
    document.getElementById("bip").innerHTML = counter + " secondes";
  }
}
function start() {
  box.classList.remove("is-disabled");
  intervalId = setInterval(bip, 1000);
}

document.getElementById("btn_start_countdown").onclick = start;

function affbuton(nbButton) {
  console.log(nbButton);
  document.getElementsByClassName(
    "numberBouton"
  )[0].innerHTML = `<h1>${nbButton} nombre de boutons pétés</h1>`;
}
