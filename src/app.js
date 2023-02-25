/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let switchCardButton = document.querySelector("#button");
  switchCardButton.addEventListener("click", function() {
    let values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A"
    ];
    let suits = [
      { name: "♦", color: "red" },
      { name: "♥", color: "red" },
      { name: "♠", color: "black" },
      { name: "♣", color: "black" }
    ];

    const randomSuitIndex = Math.floor(Math.random() * suits.length);
    const randomSuit = suits[randomSuitIndex].name;
    const randomColor = suits[randomSuitIndex].color;
    const randomValue = Math.floor(Math.random() * values.length);

    let cardHTML = `
  <div id="card-symbol-top" class="cardSymbol ${randomColor}">${randomSuit}</div>
  <div class="card-number">
    <h2 style="color: ${randomColor};">${values[randomValue]}</h2>
  </div>
  <div id="card-symbol-bottom" class="cardSymbol ${randomColor}">${randomSuit}</div>
`;

    let cardContainer = document.querySelector("#card");
    cardContainer.innerHTML = cardHTML;
  });
};
