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
function updateEventListenersOnMultypleElements(type, elements, fn) {
  elements.forEach(element => {
    element.addEventListener(type, fn);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNrQjtBQUU1Q2hCLCtDQUFNLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25paHRzLXRyYXZhaWxzLy4vc3JjL2pzL2RvbS5qcyIsIndlYnBhY2s6Ly9rbmlodHMtdHJhdmFpbHMvLi9zcmMvanMva25pZ2h0VHJhdmFpbHMuanMiLCJ3ZWJwYWNrOi8va25paHRzLXRyYXZhaWxzLy4vc3JjL2Nzcy9ib2FyZC5jc3MiLCJ3ZWJwYWNrOi8va25paHRzLXRyYXZhaWxzLy4vc3JjL2Nzcy9idXR0b25zLmNzcyIsIndlYnBhY2s6Ly9rbmlodHMtdHJhdmFpbHMvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9rbmlodHMtdHJhdmFpbHMvLi9zcmMvY3NzL3dyYXBwZXIuY3NzIiwid2VicGFjazovL2tuaWh0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va25paHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9rbmlodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rbmlodHMtdHJhdmFpbHMvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL2tuaWh0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rbmlodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2tuaWh0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9rbmlodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va25paHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va25paHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8va25paHRzLXRyYXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWh0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rbmlodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tuaWh0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2tuaWh0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWh0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tuaWh0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9rbmlodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8va25paHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9rbmlodHMtdHJhdmFpbHMvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnVpbGRCb2FyZCwga25pZ2h0VHJhdmFpbHMgfSBmcm9tIFwiLi9rbmlnaHRUcmF2YWlscy5qc1wiO1xuXG5jb25zdCBwbGFjZUtuaWd0aEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFjZS1rbmlnaHRcIik7XG5jb25zdCBzZWxlY3RFbmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW5kcG9pbnRcIik7XG5jb25zdCB0cmF2YWlsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyYXZhaWxcIik7XG5jb25zdCBjbGVhckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbGVhclwiKTtcbmNvbnN0IGJvYXJkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkXCIpO1xuXG5sZXQga25pZ2h0QWN0aXZlID0gZmFsc2U7XG5sZXQgZW5kQWN0aXZlID0gZmFsc2U7XG5cbmxldCBzdGFydFBvcyA9IG51bGw7XG5sZXQgZW5kUG9zID0gbnVsbDtcblxuZnVuY3Rpb24gZHJhd0dyaWQoYm9hcmRFbCwgbikge1xuICBmb3IgKGxldCByID0gMDsgciA8IG47IHIrKykge1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgbjsgYysrKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgaW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICBpbm5lckRpdi5jbGFzc05hbWUgPSBcImlubmVyLWNvbnRlbnRcIjtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChpbm5lckRpdik7XG5cbiAgICAgIGRpdi5jbGFzc05hbWUgPSBcImJvYXJkLWNlbGxcIjtcbiAgICAgIGRpdi5kYXRhc2V0LnBvcyA9IGAke3J9LCR7Y31gO1xuXG4gICAgICBpZiAoYyAlIDIgPT09IDApIHtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7ciAlIDIgPT09IDAgPyBcImJsYWNrXCIgOiBcIndoaXRlXCJ9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChgJHtyICUgMiA9PT0gMCA/IFwid2hpdGVcIiA6IFwiYmxhY2tcIn1gKTtcbiAgICAgIH1cblxuICAgICAgYm9hcmRFbC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVFdmVudExpc3RlbmVyc09uTXVsdHlwbGVFbGVtZW50cyh0eXBlLCBlbGVtZW50cywgZm4pIHtcbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwbGFjZUtuaWdodChlKSB7XG4gIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImtuaWdodFwiKTtcbiAgc3RhcnRQb3MgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucG9zO1xuICBrbmlnaHRBY3RpdmUgPSAha25pZ2h0QWN0aXZlO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RFbmQoZSkge1xuICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlbmRcIik7XG4gIGVuZFBvcyA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wb3M7XG4gIGVuZEFjdGl2ZSA9ICFlbmRBY3RpdmU7XG59XG5cbmZ1bmN0aW9uIHRyYXZhaWwoKSB7XG4gIGNvbnN0IGJvYXJkID0gYnVpbGRCb2FyZCg4KTtcbiAgcmV0dXJuIGtuaWdodFRyYXZhaWxzKGJvYXJkLCBzdGFydFBvcywgZW5kUG9zKTtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZVBhdGgoKSB7XG4gIGlmIChrbmlnaHRBY3RpdmUgJiYgZW5kQWN0aXZlKSB7XG4gICAgY29uc3QgW3Bvc2l0aW9ucywgbW92ZXNdID0gdHJhdmFpbCgpO1xuICAgIHBvc2l0aW9ucy5mb3JFYWNoKChwb3NpdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFtkYXRhLXBvcz1cIiR7cG9zaXRpb259XCJdYCxcbiAgICAgICAgKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgY2VsbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZGVsYXlcIiwgYCR7NTAwICogaW5kZXh9bXNgKTtcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGluZGV4O1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJ2aXNpdGVkXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHN0YXJ0Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtcG9zPVwiJHtzdGFydFBvc31cIl1gLFxuICAgICkuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgY29uc3QgZW5kQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtcG9zPVwiJHtlbmRQb3N9XCJdYCxcbiAgICApLmZpcnN0RWxlbWVudENoaWxkO1xuXG4gICAgc3RhcnRDZWxsLmNsYXNzTGlzdC5hZGQoXCJ2aXNpdGVkXCIpO1xuICAgIGVuZENlbGwuY2xhc3NMaXN0LmFkZChcImtuaWdodFwiKTtcbiAgfVxuICBrbmlnaHRBY3RpdmUgPSAha25pZ2h0QWN0aXZlO1xuICBlbmRBY3RpdmUgPSAhZW5kQWN0aXZlO1xufVxuXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgYm9hcmRFbC5pbm5lckhUTUwgPSBcIlwiO1xuICBsb2FkVWkoKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVQbGFjZUtuaWdodChlKSB7XG4gIGJvYXJkRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYWNlS25pZ2h0LCB7XG4gICAgb25jZTogdHJ1ZSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlU2VsZWN0RW5kKGUpIHtcbiAgYm9hcmRFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0RW5kLCB7IG9uY2U6IHRydWUgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRVaSgpIHtcbiAgZHJhd0dyaWQoYm9hcmRFbCwgOCk7XG4gIHBsYWNlS25pZ3RoRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGl2YXRlUGxhY2VLbmlnaHQsIHsgb25jZTogdHJ1ZSB9KTtcbiAgc2VsZWN0RW5kRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGl2YXRlU2VsZWN0RW5kLCB7IG9uY2U6IHRydWUgfSk7XG4gIHRyYXZhaWxFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYW5pbWF0ZVBhdGgpO1xuICBjbGVhckVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhcik7XG59XG5leHBvcnQgeyBkcmF3R3JpZCwgbG9hZFVpIH07XG4iLCJmdW5jdGlvbiBidWlsZEJvYXJkKG4pIHtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvciAobGV0IHIgPSAwOyByIDwgbjsgcisrKSB7XG4gICAgYXJyLnB1c2goW10pO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgbjsgYysrKSB7XG4gICAgICBhcnJbcl0ucHVzaChyICsgXCIsXCIgKyBjKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24ga25pZ2h0VHJhdmFpbHMoYm9hcmQsIHN0YXJ0LCBlbmQsIHEgPSBbXSkge1xuICBjb25zdCB2aXNpdGVkID0gbmV3IFNldChzdGFydCk7XG4gIHEucHVzaChbc3RhcnQsIHN0YXJ0LCAwXSk7XG5cbiAgd2hpbGUgKHEubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IFtjdXJyZW50LCBwYXRoLCBkaXN0YW5jZV0gPSBxLnNoaWZ0KCk7XG5cbiAgICBpZiAoY3VycmVudCA9PT0gZW5kKSByZXR1cm4gW3BhdGguc3BsaXQoXCI6XCIpLCBkaXN0YW5jZV07XG5cbiAgICBjb25zdCBbcm93LCBjb2xdID0gY3VycmVudC5zcGxpdChcIixcIikubWFwKChzKSA9PiBwYXJzZUludChzKSk7XG5cbiAgICBjb25zdCBwb3NzaWJsZVdheXMgPSBbXG4gICAgICBbcm93IC0gMiwgY29sICsgMV0sXG4gICAgICBbcm93IC0gMSwgY29sICsgMl0sXG4gICAgICBbcm93ICsgMSwgY29sICsgMl0sXG4gICAgICBbcm93ICsgMiwgY29sICsgMV0sXG4gICAgICBbcm93ICsgMiwgY29sIC0gMV0sXG4gICAgICBbcm93ICsgMSwgY29sIC0gMl0sXG4gICAgICBbcm93IC0gMSwgY29sIC0gMl0sXG4gICAgICBbcm93IC0gMiwgY29sIC0gMV0sXG4gICAgXTtcblxuICAgIGZvciAobGV0IFtyb3csIGNvbF0gb2YgcG9zc2libGVXYXlzKSB7XG4gICAgICBjb25zdCByb3dJbmJvdW5kID0gMCA8PSByb3cgJiYgcm93IDwgYm9hcmQubGVuZ3RoO1xuICAgICAgY29uc3QgY29sSW5ib3VuZCA9IDAgPD0gY29sICYmIGNvbCA8IGJvYXJkLmxlbmd0aDtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gcm93ICsgXCIsXCIgKyBjb2w7XG5cbiAgICAgIGlmIChyb3dJbmJvdW5kICYmIGNvbEluYm91bmQgJiYgIXZpc2l0ZWQuaGFzKHBvc2l0aW9uKSkge1xuICAgICAgICB2aXNpdGVkLmFkZChwb3NpdGlvbik7XG4gICAgICAgIHEucHVzaChbcG9zaXRpb24sIHBhdGggKyBcIjpcIiArIHBvc2l0aW9uLCBkaXN0YW5jZSArIDFdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCB7IGJ1aWxkQm9hcmQsIGtuaWdodFRyYXZhaWxzIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2tuaWdodC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5ib2FyZCB7XG4gIHdpZHRoOiA5MHZ3O1xuICBoZWlnaHQ6IGNhbGMoOTB2dyk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuXG4uYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLndoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5rbmlnaHQge1xuICBiYWNrZ3JvdW5kOlxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBjZW50ZXIvODAlIG5vLXJlcGVhdCxcbiAgICBsaW5lYXItZ3JhZGllbnQoI2I4YjJiMiwgI2I4YjJiMik7XG59XG5cbi5lbmQge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5pbm5lci1jb250ZW50IHtcbiAgdHJhbnNmb3JtOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhiMmIyO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4gdmFyKC0tZGVsYXkpO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiA5dnc7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi52aXNpdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4YjJiMjtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmFjdGl2ZS1rbmlnaHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYjhiMmIyO1xufVxuXG4uYWN0aXZlLWVuZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmJvYXJkIHtcbiAgICB3aWR0aDogODB2dztcbiAgICBoZWlnaHQ6IGNhbGMoODB2dyk7XG4gIH1cbiAgLmlubmVyLWNvbnRlbnQge1xuICAgIGxpbmUtaGVpZ2h0OiA4dnc7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5ib2FyZCB7XG4gICAgd2lkdGg6IDUwdnc7XG4gICAgaGVpZ2h0OiBjYWxjKDUwdncpO1xuICB9XG5cbiAgLmlubmVyLWNvbnRlbnQge1xuICAgIGxpbmUtaGVpZ2h0OiA1dnc7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ib2FyZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHFDQUFxQztFQUNyQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7O3FDQUVtQztBQUNyQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLHlCQUF5QjtFQUN6Qiw4Q0FBOEM7RUFDOUMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ib2FyZCB7XFxuICB3aWR0aDogOTB2dztcXG4gIGhlaWdodDogY2FsYyg5MHZ3KTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxufVxcblxcbi5ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLndoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ua25pZ2h0IHtcXG4gIGJhY2tncm91bmQ6XFxuICAgIHVybChcXFwiLi4vYXNzZXRzL2tuaWdodC5zdmdcXFwiKSBjZW50ZXIvODAlIG5vLXJlcGVhdCxcXG4gICAgbGluZWFyLWdyYWRpZW50KCNiOGIyYjIsICNiOGIyYjIpO1xcbn1cXG5cXG4uZW5kIHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuLmlubmVyLWNvbnRlbnQge1xcbiAgdHJhbnNmb3JtOiBub25lO1xcbiAgb3BhY2l0eTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGIyYjI7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4gdmFyKC0tZGVsYXkpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbGluZS1oZWlnaHQ6IDl2dztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnZpc2l0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4YjJiMjtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5hY3RpdmUta25pZ2h0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNiOGIyYjI7XFxufVxcblxcbi5hY3RpdmUtZW5kOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5ib2FyZCB7XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBoZWlnaHQ6IGNhbGMoODB2dyk7XFxuICB9XFxuICAuaW5uZXItY29udGVudCB7XFxuICAgIGxpbmUtaGVpZ2h0OiA4dnc7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgLmJvYXJkIHtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIGhlaWdodDogY2FsYyg1MHZ3KTtcXG4gIH1cXG5cXG4gIC5pbm5lci1jb250ZW50IHtcXG4gICAgbGluZS1oZWlnaHQ6IDV2dztcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYnRuIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC43ZW0gMC41ZW07XG4gIHdpZHRoOiAxMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuLmJ0biB7XG4gIGZsZXgtYmFzaXM6IDQ1JTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMmVtO1xuICB9XG4gIC5idG4ge1xuICAgIGZsZXg6IDE7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9idXR0b25zLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLFVBQVU7SUFDVixjQUFjO0lBQ2QsZUFBZTtJQUNmLFFBQVE7RUFDVjtFQUNBO0lBQ0UsT0FBTztFQUNUO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJ0biB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuN2VtIDAuNWVtO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxufVxcblxcbi5idG4ge1xcbiAgZmxleC1iYXNpczogNDUlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgLmJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDJlbTtcXG4gIH1cXG4gIC5idG4ge1xcbiAgICBmbGV4OiAxO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9hcmQuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9ucy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93cmFwcGVyLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YWZ0ZXIsXG4qOjpiZWZvcmUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDN2dztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAydnc7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuL2JvYXJkLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9idXR0b25zLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi93cmFwcGVyLmNzc1xcXCI7XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAzdnc7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiAydnc7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMS41dnc7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLndyYXBwZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLndyYXBwZXIge1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3dyYXBwZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud3JhcHBlciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgcGFkZGluZy10b3A6IDJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC53cmFwcGVyIHtcXG4gICAgcGFkZGluZzogMmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vY3NzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgZHJhd0dyaWQsIGxvYWRVaSB9IGZyb20gXCIuL2RvbS5qc1wiO1xuXG5sb2FkVWkoKTtcbiJdLCJuYW1lcyI6WyJidWlsZEJvYXJkIiwia25pZ2h0VHJhdmFpbHMiLCJwbGFjZUtuaWd0aEVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0RW5kRWwiLCJ0cmF2YWlsRWwiLCJjbGVhckVsIiwiYm9hcmRFbCIsImtuaWdodEFjdGl2ZSIsImVuZEFjdGl2ZSIsInN0YXJ0UG9zIiwiZW5kUG9zIiwiZHJhd0dyaWQiLCJuIiwiciIsImMiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJEaXYiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImRhdGFzZXQiLCJwb3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJ1cGRhdGVFdmVudExpc3RlbmVyc09uTXVsdHlwbGVFbGVtZW50cyIsInR5cGUiLCJlbGVtZW50cyIsImZuIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicGxhY2VLbmlnaHQiLCJlIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsInNlbGVjdEVuZCIsInRyYXZhaWwiLCJib2FyZCIsImFuaW1hdGVQYXRoIiwicG9zaXRpb25zIiwibW92ZXMiLCJwb3NpdGlvbiIsImluZGV4IiwiY2VsbCIsImZpcnN0RWxlbWVudENoaWxkIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsInRleHRDb250ZW50Iiwic3RhcnRDZWxsIiwiZW5kQ2VsbCIsImNsZWFyIiwiaW5uZXJIVE1MIiwibG9hZFVpIiwiYWN0aXZhdGVQbGFjZUtuaWdodCIsIm9uY2UiLCJhY3RpdmF0ZVNlbGVjdEVuZCIsImFyciIsInB1c2giLCJzdGFydCIsImVuZCIsInEiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ2aXNpdGVkIiwiU2V0IiwiY3VycmVudCIsInBhdGgiLCJkaXN0YW5jZSIsInNoaWZ0Iiwic3BsaXQiLCJyb3ciLCJjb2wiLCJtYXAiLCJzIiwicGFyc2VJbnQiLCJwb3NzaWJsZVdheXMiLCJyb3dJbmJvdW5kIiwiY29sSW5ib3VuZCIsImhhcyJdLCJzb3VyY2VSb290IjoiIn0=