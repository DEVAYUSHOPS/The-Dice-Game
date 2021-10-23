var randomvalue1 = Math.floor(Math.random()*6) + 1;
var randomdiceimg1 = "images/dice"+ randomvalue1 + ".png";
document.querySelector(".img1").setAttribute("src", randomdiceimg1);

var randomvalue2 = Math.floor(Math.random()*6) + 1;
var randomdiceimg2 = "images/dice"+ randomvalue2 + ".png";
document.querySelector(".img2").setAttribute("src", randomdiceimg2);

if (randomvalue1 > randomvalue2) {
  document.querySelector("h1").textContent = "⛳Player 1 wins !!!";
} else if (randomvalue2 > randomvalue1) {
  document.querySelector("h1").textContent = "Player 2 wins !!!⛳";
} else if (randomvalue1 === randomvalue2) {
  document.querySelector("h1").textContent = "😅Its A Tie!!!"
}

// alternate code:
// function dice1() {
//   if (randomvalue1 === 1) {
//     document.querySelector(".img1").setAttribute("src", "images/dice1.png");
//   } else if (randomvalue1 === 2) {
//     document.querySelector(".img1").setAttribute("src", "images/dice2.png");
//   } else if (randomvalue1 === 3) {
//     document.querySelector(".img1").setAttribute("src", "images/dice3.png");
//   } else if (randomvalue1 === 4) {
//     document.querySelector(".img1").setAttribute("src", "images/dice4.png");
//   } else if (randomvalue1 === 5) {
//     document.querySelector(".img1").setAttribute("src", "images/dice5.png");
//   } else if (randomvalue1 === 6) {
//     document.querySelector(".img1").setAttribute("src", "images/dice6.png");
//   }
//
// }
//
// dice1()
//
// function dice2() {
//   if (randomvalue2 === 1) {
//     document.querySelector(".img2").setAttribute("src", "images/dice1.png");
//   } else if (randomvalue2 === 2) {
//     document.querySelector(".img2").setAttribute("src", "images/dice2.png");
//   } else if (randomvalue2 === 3) {
//     document.querySelector(".img2").setAttribute("src", "images/dice3.png");
//   } else if (randomvalue2 === 4) {
//     document.querySelector(".img2").setAttribute("src", "images/dice4.png");
//   } else if (randomvalue2 === 5) {
//     document.querySelector(".img2").setAttribute("src", "images/dice5.png");
//   } else if (randomvalue2 === 6) {
//     document.querySelector(".img2").setAttribute("src", "images/dice6.png");
//   }
//
// }
//
// dice2()
