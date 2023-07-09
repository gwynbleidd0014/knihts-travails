import { buildBoard, knightTravails } from "./knightTravails.js";

const placeKnigthEl = document.querySelector(".place-knight");
const selectEndEl = document.querySelector(".endpoint");
const travailEl = document.querySelector(".travail");
const clearEl = document.querySelector(".clear");
const boardEl = document.querySelector(".board");

let knightActive = false;
let endActive = false;

let startPos = null;
let endPos = null;

function drawGrid(boardEl, n) {
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const div = document.createElement("div");
      const innerDiv = document.createElement("div");

      innerDiv.className = "inner-content";
      div.appendChild(innerDiv);

      div.className = "board-cell";
      div.dataset.pos = `${r},${c}`;

      if (c % 2 === 0) {
        div.classList.add(`${r % 2 === 0 ? "black" : "white"}`);
      } else {
        div.classList.add(`${r % 2 === 0 ? "white" : "black"}`);
      }

      boardEl.appendChild(div);
    }
  }
}

function placeKnight(e) {
  e.target.parentElement.classList.add("knight");
  startPos = e.target.parentElement.dataset.pos;
  knightActive = !knightActive;
}

function selectEnd(e) {
  e.target.parentElement.classList.add("end");
  endPos = e.target.parentElement.dataset.pos;
  endActive = !endActive;
}

function travail() {
  const board = buildBoard(8);
  return knightTravails(board, startPos, endPos);
}

function animatePath() {
  if (knightActive && endActive) {
    const [positions, moves] = travail();
    positions.forEach((position, index) => {
      if (index > 0) {
        const cell = document.querySelector(
          `[data-pos="${position}"]`,
        ).firstElementChild;
        cell.style.setProperty("--delay", `${500 * index}ms`);
        cell.textContent = index;
        cell.classList.add("visited");
      }
    });
    const startCell = document.querySelector(
      `[data-pos="${startPos}"]`,
    ).firstElementChild;
    const endCell = document.querySelector(
      `[data-pos="${endPos}"]`,
    ).firstElementChild;

    startCell.classList.add("visited");
    endCell.classList.add("knight");
  }
  knightActive = !knightActive;
  endActive = !endActive;
}

function clear() {
  boardEl.innerHTML = "";
  loadUi();
}

function activatePlaceKnight(e) {
  boardEl.addEventListener("click", placeKnight, {
    once: true,
  });
}

function activateSelectEnd(e) {
  boardEl.addEventListener("click", selectEnd, { once: true });
}

function loadUi() {
  drawGrid(boardEl, 8);
  placeKnigthEl.addEventListener("click", activatePlaceKnight, { once: true });
  selectEndEl.addEventListener("click", activateSelectEnd, { once: true });
  travailEl.addEventListener("click", animatePath);
  clearEl.addEventListener("click", clear);
}
export { drawGrid, loadUi };
