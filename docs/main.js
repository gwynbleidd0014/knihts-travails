/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawGrid: () => (/* binding */ drawGrid),
/* harmony export */   loadUi: () => (/* binding */ loadUi)
/* harmony export */ });
/* harmony import */ var _knightTravails_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knightTravails.js */ "./src/js/knightTravails.js");

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
  const board = (0,_knightTravails_js__WEBPACK_IMPORTED_MODULE_0__.buildBoard)(8);
  return (0,_knightTravails_js__WEBPACK_IMPORTED_MODULE_0__.knightTravails)(board, startPos, endPos);
}
function animatePath() {
  if (knightActive && endActive) {
    const [positions, moves] = travail();
    positions.forEach((position, index) => {
      if (index > 0) {
        const cell = document.querySelector(`[data-pos="${position}"]`).firstElementChild;
        cell.style.setProperty("--delay", `${500 * index}ms`);
        cell.textContent = index;
        cell.classList.add("visited");
      }
    });
    const startCell = document.querySelector(`[data-pos="${startPos}"]`).firstElementChild;
    const endCell = document.querySelector(`[data-pos="${endPos}"]`).firstElementChild;
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
    once: true
  });
}
function activateSelectEnd(e) {
  boardEl.addEventListener("click", selectEnd, {
    once: true
  });
}
function loadUi() {
  drawGrid(boardEl, 8);
  placeKnigthEl.addEventListener("click", activatePlaceKnight, {
    once: true
  });
  selectEndEl.addEventListener("click", activateSelectEnd, {
    once: true
  });
  travailEl.addEventListener("click", animatePath);
  clearEl.addEventListener("click", clear);
}


/***/ }),

/***/ "./src/js/knightTravails.js":
/*!**********************************!*\
  !*** ./src/js/knightTravails.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildBoard: () => (/* binding */ buildBoard),
/* harmony export */   knightTravails: () => (/* binding */ knightTravails)
/* harmony export */ });
function buildBoard(n) {
  const arr = [];
  for (let r = 0; r < n; r++) {
    arr.push([]);
    for (let c = 0; c < n; c++) {
      arr[r].push(r + "," + c);
    }
  }
  return arr;
}
function knightTravails(board, start, end) {
  let q = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  const visited = new Set(start);
  q.push([start, start, 0]);
  while (q.length > 0) {
    const [current, path, distance] = q.shift();
    if (current === end) return [path.split(":"), distance];
    const [row, col] = current.split(",").map(s => parseInt(s));
    const possibleWays = [[row - 2, col + 1], [row - 1, col + 2], [row + 1, col + 2], [row + 2, col + 1], [row + 2, col - 1], [row + 1, col - 2], [row - 1, col - 2], [row - 2, col - 1]];
    for (let [row, col] of possibleWays) {
      const rowInbound = 0 <= row && row < board.length;
      const colInbound = 0 <= col && col < board.length;
      const position = row + "," + col;
      if (rowInbound && colInbound && !visited.has(position)) {
        visited.add(position);
        q.push([position, path + ":" + position, distance + 1]);
      }
    }
  }
  return false;
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/board.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/board.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/knight.svg */ "./src/assets/knight.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.board {
  width: 90vw;
  height: calc(90vw);
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);
  border: 1px solid black;
  margin-bottom: 2em;
}

.black {
  background-color: black;
}

.white {
  background-color: white;
}

.knight {
  background:
    url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center/80% no-repeat,
    linear-gradient(#b8b2b2, #b8b2b2);
}

.end {
  background: red;
}

.inner-content {
  transform: none;
  opacity: 0;
  background-color: #b8b2b2;
  transition: opacity 300ms ease-in var(--delay);
  font-size: 2rem;
  line-height: 9vw;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.visited {
  background-color: #b8b2b2;
  opacity: 1;
}

.active-knight:hover {
  background: #b8b2b2;
}

.active-end:hover {
  background: red;
}

@media screen and (min-width: 768px) {
  .board {
    width: 80vw;
    height: calc(80vw);
  }
  .inner-content {
    line-height: 8vw;
  }
}

@media screen and (min-width: 1200px) {
  .board {
    width: 50vw;
    height: calc(50vw);
  }

  .inner-content {
    line-height: 5vw;
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/board.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,kCAAkC;EAClC,qCAAqC;EACrC,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE;;qCAEmC;AACrC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,UAAU;EACV,yBAAyB;EACzB,8CAA8C;EAC9C,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,UAAU;AACZ;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;IACE,WAAW;IACX,kBAAkB;EACpB;EACA;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,WAAW;IACX,kBAAkB;EACpB;;EAEA;IACE,gBAAgB;EAClB;AACF","sourcesContent":[".board {\n  width: 90vw;\n  height: calc(90vw);\n  margin: 0 auto;\n  display: grid;\n  grid-template-rows: repeat(8, 1fr);\n  grid-template-columns: repeat(8, 1fr);\n  border: 1px solid black;\n  margin-bottom: 2em;\n}\n\n.black {\n  background-color: black;\n}\n\n.white {\n  background-color: white;\n}\n\n.knight {\n  background:\n    url(\"../assets/knight.svg\") center/80% no-repeat,\n    linear-gradient(#b8b2b2, #b8b2b2);\n}\n\n.end {\n  background: red;\n}\n\n.inner-content {\n  transform: none;\n  opacity: 0;\n  background-color: #b8b2b2;\n  transition: opacity 300ms ease-in var(--delay);\n  font-size: 2rem;\n  line-height: 9vw;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.visited {\n  background-color: #b8b2b2;\n  opacity: 1;\n}\n\n.active-knight:hover {\n  background: #b8b2b2;\n}\n\n.active-end:hover {\n  background: red;\n}\n\n@media screen and (min-width: 768px) {\n  .board {\n    width: 80vw;\n    height: calc(80vw);\n  }\n  .inner-content {\n    line-height: 8vw;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .board {\n    width: 50vw;\n    height: calc(50vw);\n  }\n\n  .inner-content {\n    line-height: 5vw;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/buttons.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/buttons.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.btn {
  background: black;
  color: white;
  padding: 0.7em 0.5em;
  width: 120px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 1em;
}

.buttons {
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-wrap: wrap;
  margin-bottom: 2em;
}

.btn {
  flex-basis: 45%;
  transform: scale(1);
}

.btn:hover {
  cursor: pointer;
}

@media screen and (min-width: 1200px) {
  .buttons {
    display: flex;
    width: 70%;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 2em;
  }
  .btn {
    flex: 1;
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/buttons.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,YAAY;EACZ,oBAAoB;EACpB,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,cAAc;EACd,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;IACE,aAAa;IACb,UAAU;IACV,cAAc;IACd,eAAe;IACf,QAAQ;EACV;EACA;IACE,OAAO;EACT;AACF","sourcesContent":[".btn {\n  background: black;\n  color: white;\n  padding: 0.7em 0.5em;\n  width: 120px;\n  text-align: center;\n  margin: 0 auto;\n  margin-bottom: 1em;\n}\n\n.buttons {\n  display: flex;\n  width: 80%;\n  margin: 0 auto;\n  flex-wrap: wrap;\n  margin-bottom: 2em;\n}\n\n.btn {\n  flex-basis: 45%;\n  transform: scale(1);\n}\n\n.btn:hover {\n  cursor: pointer;\n}\n\n@media screen and (min-width: 1200px) {\n  .buttons {\n    display: flex;\n    width: 70%;\n    margin: 0 auto;\n    flex-wrap: wrap;\n    gap: 2em;\n  }\n  .btn {\n    flex: 1;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./board.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/board.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_buttons_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./buttons.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/buttons.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_wrapper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./wrapper.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/wrapper.css");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_buttons_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_wrapper_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 3vw;
}

@media screen and (min-width: 768px) {
  html {
    font-size: 2vw;
  }
}

@media screen and (min-width: 1200px) {
  html {
    font-size: 1.5vw;
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAIA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;IACE,cAAc;EAChB;AACF;;AAEA;EACE;IACE,gBAAgB;EAClB;AACF","sourcesContent":["@import \"./board.css\";\n@import \"./buttons.css\";\n@import \"./wrapper.css\";\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 3vw;\n}\n\n@media screen and (min-width: 768px) {\n  html {\n    font-size: 2vw;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  html {\n    font-size: 1.5vw;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/wrapper.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/wrapper.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.wrapper {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  padding-top: 2em;
}

@media screen and (min-width: 768px) {
  .wrapper {
    padding: 2em;
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/wrapper.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE;IACE,YAAY;EACd;AACF","sourcesContent":[".wrapper {\n  width: 100vw;\n  height: 100vh;\n  overflow-x: hidden;\n  padding-top: 2em;\n}\n\n@media screen and (min-width: 768px) {\n  .wrapper {\n    padding: 2em;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/knight.svg":
/*!*******************************!*\
  !*** ./src/assets/knight.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10d1cd465eed88ebdf30.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/js/dom.js");


(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.loadUi)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQTBCO0FBQ1E7QUFFbENqQiwrQ0FBTSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWh0cy10cmF2YWlscy8uL3NyYy9qcy9kb20uanMiLCJ3ZWJwYWNrOi8va25paHRzLXRyYXZhaWxzLy4vc3JjL2pzL2tuaWdodFRyYXZhaWxzLmpzIiwid2VicGFjazovL2tuaWh0cy10cmF2YWlscy8uL3NyYy9jc3MvYm9hcmQuY3NzIiwid2VicGFjazovL2tuaWh0cy10cmF2YWlscy8uL3NyYy9jc3MvYnV0dG9ucy5jc3MiLCJ3ZWJwYWNrOi8va25paHRzLXRyYXZhaWxzLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8va25paHRzLXRyYXZhaWxzLy4vc3JjL2Nzcy93cmFwcGVyLmNzcyIsIndlYnBhY2s6Ly9rbmlodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2tuaWh0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8va25paHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8va25paHRzLXRyYXZhaWxzLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9rbmlodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8va25paHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9rbmlodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va25paHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2tuaWh0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2tuaWh0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2tuaWh0cy10cmF2YWlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rbmlodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va25paHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rbmlodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9rbmlodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rbmlodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rbmlodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8va25paHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2tuaWh0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8va25paHRzLXRyYXZhaWxzLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJ1aWxkQm9hcmQsIGtuaWdodFRyYXZhaWxzIH0gZnJvbSBcIi4va25pZ2h0VHJhdmFpbHMuanNcIjtcblxuY29uc3QgcGxhY2VLbmlndGhFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2Uta25pZ2h0XCIpO1xuY29uc3Qgc2VsZWN0RW5kRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVuZHBvaW50XCIpO1xuY29uc3QgdHJhdmFpbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmF2YWlsXCIpO1xuY29uc3QgY2xlYXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xlYXJcIik7XG5jb25zdCBib2FyZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZFwiKTtcblxubGV0IGtuaWdodEFjdGl2ZSA9IGZhbHNlO1xubGV0IGVuZEFjdGl2ZSA9IGZhbHNlO1xuXG5sZXQgc3RhcnRQb3MgPSBudWxsO1xubGV0IGVuZFBvcyA9IG51bGw7XG5cbmZ1bmN0aW9uIGRyYXdHcmlkKGJvYXJkRWwsIG4pIHtcbiAgZm9yIChsZXQgciA9IDA7IHIgPCBuOyByKyspIHtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IG47IGMrKykge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGlubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgaW5uZXJEaXYuY2xhc3NOYW1lID0gXCJpbm5lci1jb250ZW50XCI7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5uZXJEaXYpO1xuXG4gICAgICBkaXYuY2xhc3NOYW1lID0gXCJib2FyZC1jZWxsXCI7XG4gICAgICBkaXYuZGF0YXNldC5wb3MgPSBgJHtyfSwke2N9YDtcblxuICAgICAgaWYgKGMgJSAyID09PSAwKSB7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGAke3IgJSAyID09PSAwID8gXCJibGFja1wiIDogXCJ3aGl0ZVwifWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7ciAlIDIgPT09IDAgPyBcIndoaXRlXCIgOiBcImJsYWNrXCJ9YCk7XG4gICAgICB9XG5cbiAgICAgIGJvYXJkRWwuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcGxhY2VLbmlnaHQoZSkge1xuICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJrbmlnaHRcIik7XG4gIHN0YXJ0UG9zID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnBvcztcbiAga25pZ2h0QWN0aXZlID0gIWtuaWdodEFjdGl2ZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0RW5kKGUpIHtcbiAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZW5kXCIpO1xuICBlbmRQb3MgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucG9zO1xuICBlbmRBY3RpdmUgPSAhZW5kQWN0aXZlO1xufVxuXG5mdW5jdGlvbiB0cmF2YWlsKCkge1xuICBjb25zdCBib2FyZCA9IGJ1aWxkQm9hcmQoOCk7XG4gIHJldHVybiBrbmlnaHRUcmF2YWlscyhib2FyZCwgc3RhcnRQb3MsIGVuZFBvcyk7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVQYXRoKCkge1xuICBpZiAoa25pZ2h0QWN0aXZlICYmIGVuZEFjdGl2ZSkge1xuICAgIGNvbnN0IFtwb3NpdGlvbnMsIG1vdmVzXSA9IHRyYXZhaWwoKTtcbiAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9zaXRpb24sIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbZGF0YS1wb3M9XCIke3Bvc2l0aW9ufVwiXWAsXG4gICAgICAgICkuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIGNlbGwuc3R5bGUuc2V0UHJvcGVydHkoXCItLWRlbGF5XCIsIGAkezUwMCAqIGluZGV4fW1zYCk7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBpbmRleDtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwidmlzaXRlZFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBzdGFydENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLXBvcz1cIiR7c3RhcnRQb3N9XCJdYCxcbiAgICApLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGNvbnN0IGVuZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLXBvcz1cIiR7ZW5kUG9zfVwiXWAsXG4gICAgKS5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgIHN0YXJ0Q2VsbC5jbGFzc0xpc3QuYWRkKFwidmlzaXRlZFwiKTtcbiAgICBlbmRDZWxsLmNsYXNzTGlzdC5hZGQoXCJrbmlnaHRcIik7XG4gIH1cbiAga25pZ2h0QWN0aXZlID0gIWtuaWdodEFjdGl2ZTtcbiAgZW5kQWN0aXZlID0gIWVuZEFjdGl2ZTtcbn1cblxuZnVuY3Rpb24gY2xlYXIoKSB7XG4gIGJvYXJkRWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgbG9hZFVpKCk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlUGxhY2VLbmlnaHQoZSkge1xuICBib2FyZEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGFjZUtuaWdodCwge1xuICAgIG9uY2U6IHRydWUsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZVNlbGVjdEVuZChlKSB7XG4gIGJvYXJkRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGVjdEVuZCwgeyBvbmNlOiB0cnVlIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkVWkoKSB7XG4gIGRyYXdHcmlkKGJvYXJkRWwsIDgpO1xuICBwbGFjZUtuaWd0aEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY3RpdmF0ZVBsYWNlS25pZ2h0LCB7IG9uY2U6IHRydWUgfSk7XG4gIHNlbGVjdEVuZEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY3RpdmF0ZVNlbGVjdEVuZCwgeyBvbmNlOiB0cnVlIH0pO1xuICB0cmF2YWlsRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFuaW1hdGVQYXRoKTtcbiAgY2xlYXJFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXIpO1xufVxuZXhwb3J0IHsgZHJhd0dyaWQsIGxvYWRVaSB9O1xuIiwiZnVuY3Rpb24gYnVpbGRCb2FyZChuKSB7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IgKGxldCByID0gMDsgciA8IG47IHIrKykge1xuICAgIGFyci5wdXNoKFtdKTtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IG47IGMrKykge1xuICAgICAgYXJyW3JdLnB1c2gociArIFwiLFwiICsgYyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIGtuaWdodFRyYXZhaWxzKGJvYXJkLCBzdGFydCwgZW5kLCBxID0gW10pIHtcbiAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQoc3RhcnQpO1xuICBxLnB1c2goW3N0YXJ0LCBzdGFydCwgMF0pO1xuXG4gIHdoaWxlIChxLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBbY3VycmVudCwgcGF0aCwgZGlzdGFuY2VdID0gcS5zaGlmdCgpO1xuXG4gICAgaWYgKGN1cnJlbnQgPT09IGVuZCkgcmV0dXJuIFtwYXRoLnNwbGl0KFwiOlwiKSwgZGlzdGFuY2VdO1xuXG4gICAgY29uc3QgW3JvdywgY29sXSA9IGN1cnJlbnQuc3BsaXQoXCIsXCIpLm1hcCgocykgPT4gcGFyc2VJbnQocykpO1xuXG4gICAgY29uc3QgcG9zc2libGVXYXlzID0gW1xuICAgICAgW3JvdyAtIDIsIGNvbCArIDFdLFxuICAgICAgW3JvdyAtIDEsIGNvbCArIDJdLFxuICAgICAgW3JvdyArIDEsIGNvbCArIDJdLFxuICAgICAgW3JvdyArIDIsIGNvbCArIDFdLFxuICAgICAgW3JvdyArIDIsIGNvbCAtIDFdLFxuICAgICAgW3JvdyArIDEsIGNvbCAtIDJdLFxuICAgICAgW3JvdyAtIDEsIGNvbCAtIDJdLFxuICAgICAgW3JvdyAtIDIsIGNvbCAtIDFdLFxuICAgIF07XG5cbiAgICBmb3IgKGxldCBbcm93LCBjb2xdIG9mIHBvc3NpYmxlV2F5cykge1xuICAgICAgY29uc3Qgcm93SW5ib3VuZCA9IDAgPD0gcm93ICYmIHJvdyA8IGJvYXJkLmxlbmd0aDtcbiAgICAgIGNvbnN0IGNvbEluYm91bmQgPSAwIDw9IGNvbCAmJiBjb2wgPCBib2FyZC5sZW5ndGg7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHJvdyArIFwiLFwiICsgY29sO1xuXG4gICAgICBpZiAocm93SW5ib3VuZCAmJiBjb2xJbmJvdW5kICYmICF2aXNpdGVkLmhhcyhwb3NpdGlvbikpIHtcbiAgICAgICAgdmlzaXRlZC5hZGQocG9zaXRpb24pO1xuICAgICAgICBxLnB1c2goW3Bvc2l0aW9uLCBwYXRoICsgXCI6XCIgKyBwb3NpdGlvbiwgZGlzdGFuY2UgKyAxXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgeyBidWlsZEJvYXJkLCBrbmlnaHRUcmF2YWlscyB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9rbmlnaHQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYm9hcmQge1xuICB3aWR0aDogOTB2dztcbiAgaGVpZ2h0OiBjYWxjKDkwdncpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuLmJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi53aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ua25pZ2h0IHtcbiAgYmFja2dyb3VuZDpcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgY2VudGVyLzgwJSBuby1yZXBlYXQsXG4gICAgbGluZWFyLWdyYWRpZW50KCNiOGIyYjIsICNiOGIyYjIpO1xufVxuXG4uZW5kIHtcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuXG4uaW5uZXItY29udGVudCB7XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4YjJiMjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluIHZhcigtLWRlbGF5KTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogOXZ3O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udmlzaXRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGIyYjI7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5hY3RpdmUta25pZ2h0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2I4YjJiMjtcbn1cblxuLmFjdGl2ZS1lbmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5ib2FyZCB7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgaGVpZ2h0OiBjYWxjKDgwdncpO1xuICB9XG4gIC5pbm5lci1jb250ZW50IHtcbiAgICBsaW5lLWhlaWdodDogOHZ3O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuYm9hcmQge1xuICAgIHdpZHRoOiA1MHZ3O1xuICAgIGhlaWdodDogY2FsYyg1MHZ3KTtcbiAgfVxuXG4gIC5pbm5lci1jb250ZW50IHtcbiAgICBsaW5lLWhlaWdodDogNXZ3O1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYm9hcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxxQ0FBcUM7RUFDckMsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFOztxQ0FFbUM7QUFDckM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsOENBQThDO0VBQzlDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYm9hcmQge1xcbiAgd2lkdGg6IDkwdnc7XFxuICBoZWlnaHQ6IGNhbGMoOTB2dyk7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG5cXG4uYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi53aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmtuaWdodCB7XFxuICBiYWNrZ3JvdW5kOlxcbiAgICB1cmwoXFxcIi4uL2Fzc2V0cy9rbmlnaHQuc3ZnXFxcIikgY2VudGVyLzgwJSBuby1yZXBlYXQsXFxuICAgIGxpbmVhci1ncmFkaWVudCgjYjhiMmIyLCAjYjhiMmIyKTtcXG59XFxuXFxuLmVuZCB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5pbm5lci1jb250ZW50IHtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhiMmIyO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluIHZhcigtLWRlbGF5KTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiA5dnc7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi52aXNpdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGIyYjI7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uYWN0aXZlLWtuaWdodDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjYjhiMmIyO1xcbn1cXG5cXG4uYWN0aXZlLWVuZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuYm9hcmQge1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgaGVpZ2h0OiBjYWxjKDgwdncpO1xcbiAgfVxcbiAgLmlubmVyLWNvbnRlbnQge1xcbiAgICBsaW5lLWhlaWdodDogOHZ3O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5ib2FyZCB7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBoZWlnaHQ6IGNhbGMoNTB2dyk7XFxuICB9XFxuXFxuICAuaW5uZXItY29udGVudCB7XFxuICAgIGxpbmUtaGVpZ2h0OiA1dnc7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmJ0biB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuN2VtIDAuNWVtO1xuICB3aWR0aDogMTIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG5cbi5idG4ge1xuICBmbGV4LWJhc2lzOiA0NSU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5idG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDJlbTtcbiAgfVxuICAuYnRuIHtcbiAgICBmbGV4OiAxO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYnV0dG9ucy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixVQUFVO0lBQ1YsY0FBYztJQUNkLGVBQWU7SUFDZixRQUFRO0VBQ1Y7RUFDQTtJQUNFLE9BQU87RUFDVDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5idG4ge1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjdlbSAwLjVlbTtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGZsZXgtYmFzaXM6IDQ1JTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAyZW07XFxuICB9XFxuICAuYnRuIHtcXG4gICAgZmxleDogMTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JvYXJkLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbnMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd3JhcHBlci5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiAzdnc7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICBodG1sIHtcbiAgICBmb250LXNpemU6IDEuNXZ3O1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi9ib2FyZC5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vYnV0dG9ucy5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vd3JhcHBlci5jc3NcXFwiO1xcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogM3Z3O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMnZ3O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDEuNXZ3O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiAyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAyZW07XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy93cmFwcGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndyYXBwZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHBhZGRpbmctdG9wOiAyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAud3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL2Nzcy9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGxvYWRVaSB9IGZyb20gXCIuL2RvbS5qc1wiO1xuXG5sb2FkVWkoKTtcbiJdLCJuYW1lcyI6WyJidWlsZEJvYXJkIiwia25pZ2h0VHJhdmFpbHMiLCJwbGFjZUtuaWd0aEVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0RW5kRWwiLCJ0cmF2YWlsRWwiLCJjbGVhckVsIiwiYm9hcmRFbCIsImtuaWdodEFjdGl2ZSIsImVuZEFjdGl2ZSIsInN0YXJ0UG9zIiwiZW5kUG9zIiwiZHJhd0dyaWQiLCJuIiwiciIsImMiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJEaXYiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImRhdGFzZXQiLCJwb3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJwbGFjZUtuaWdodCIsImUiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50Iiwic2VsZWN0RW5kIiwidHJhdmFpbCIsImJvYXJkIiwiYW5pbWF0ZVBhdGgiLCJwb3NpdGlvbnMiLCJtb3ZlcyIsImZvckVhY2giLCJwb3NpdGlvbiIsImluZGV4IiwiY2VsbCIsImZpcnN0RWxlbWVudENoaWxkIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsInRleHRDb250ZW50Iiwic3RhcnRDZWxsIiwiZW5kQ2VsbCIsImNsZWFyIiwiaW5uZXJIVE1MIiwibG9hZFVpIiwiYWN0aXZhdGVQbGFjZUtuaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmNlIiwiYWN0aXZhdGVTZWxlY3RFbmQiLCJhcnIiLCJwdXNoIiwic3RhcnQiLCJlbmQiLCJxIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwidmlzaXRlZCIsIlNldCIsImN1cnJlbnQiLCJwYXRoIiwiZGlzdGFuY2UiLCJzaGlmdCIsInNwbGl0Iiwicm93IiwiY29sIiwibWFwIiwicyIsInBhcnNlSW50IiwicG9zc2libGVXYXlzIiwicm93SW5ib3VuZCIsImNvbEluYm91bmQiLCJoYXMiXSwic291cmNlUm9vdCI6IiJ9