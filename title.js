const h11 = document.createElement("h1");

h11.textContent = `Yifan's Pre-Flatiron Personal Website`;
document.querySelector("body").appendChild(h11);

const h12 = document.createElement("h1");

h12.textContent = `A Simple Soccer Game Below`;
document.querySelector("body").appendChild(h12);

const h21 = document.createElement("h2");

h21.textContent = `The striker (blue) uses 'WASD' to move (cannot move too close to the goal) and 'X' to shoot the ball (golden) into the net (white). The goalkeeper (red) uses left and right arrows to block the shot.`;
document.querySelector("body").appendChild(h21);

const h22 = document.createElement("h2");

h22.textContent = `The striker moves faster than the goalkeeper.`
document.querySelector("body").appendChild(h22);

const h3 = document.createElement("h3");

let score = 0;
let miss = 0;
let block = 0;

h3.textContent = `The striker has scored ${score} times and missed ${miss} times, while the goalkeeper have made ${block} saves.`;
document.querySelector("body").appendChild(h3);