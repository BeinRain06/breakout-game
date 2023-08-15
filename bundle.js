/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://breakout-game/./src/css/style.css?");

/***/ }),

/***/ "./src/Breakout.js":
/*!*************************!*\
  !*** ./src/Breakout.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Breakout() {\n  const canvas = document.getElementById(\"canvas\");\n  const ctx = canvas.getContext(\"2d\");\n\n  const rulesBtn = document.getElementById(\"rules_btn\");\n  const closeBtn = document.getElementById(\"close_btn\");\n  const rules = document.getElementById(\"rules\");\n\n  const gameOverBox = document.getElementById(\"game_over\");\n\n  const btnPlayAgain = document.getElementById(\"try_again\");\n\n  btnPlayAgain.addEventListener(\"click\", () => {\n    btnPlayAgain.classList.remove(\"show_btn_again\");\n    gameOverBox.classList.remove(\"show_end_game\");\n  });\n\n  let score = 0;\n\n  const brickRowCount = 5;\n  const brickColumnCount = 9;\n\n  //ball props\n  const ball = {\n    x: canvas.width / 2,\n    y: canvas.height / 2,\n    size: 8,\n    speed: 3,\n    dx: 3,\n    dy: 3,\n  };\n\n  //paddle props\n  const paddle = {\n    x: canvas.width / 2 - 40,\n    y: canvas.height - 10,\n    w: 80,\n    h: 10,\n    speed: 8,\n    dx: 0,\n  };\n\n  //brick props\n  const brickFeature = {\n    offsetX: 45,\n    offsetY: 60,\n    w: 70,\n    padding: 10,\n    h: 20,\n    visible: true,\n  };\n\n  //create bricks frame\n  const bricks = [];\n\n  for (let i = 0; i < brickColumnCount; i++) {\n    bricks[i] = [];\n\n    for (let j = 0; j < brickRowCount; j++) {\n      const x =\n        i * (brickFeature.w + brickFeature.padding) + brickFeature.offsetX;\n      const y =\n        j * (brickFeature.h + brickFeature.padding) + brickFeature.offsetY;\n\n      bricks[i][j] = { x, y, ...brickFeature };\n    }\n  }\n\n  //draw bricks in canvas\n  function drawBricks() {\n    bricks.forEach((column) => {\n      column.forEach((brick) => {\n        ctx.beginPath();\n        ctx.rect(brick.x, brick.y, brick.w, brick.h);\n        ctx.fillStyle = brick.visible ? \"#8a8a8a\" : \"transparent\";\n        ctx.fill();\n        ctx.closePath();\n      });\n    });\n  }\n\n  //draw Ball\n  function drawBall() {\n    ctx.beginPath();\n    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);\n    ctx.fillStyle = \"#a10f0f\";\n    ctx.fill();\n    ctx.closePath();\n  }\n\n  //draw Paddle\n  function drawPaddle() {\n    ctx.beginPath();\n    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);\n    ctx.fillStyle = \"#004\";\n    ctx.fill();\n    ctx.closePath();\n  }\n\n  // draw score\n  function drawScore() {\n    ctx.fillText(`score: ${score}`, canvas.width - 100, 30);\n    ctx.font = \"18px Lucida\";\n  }\n\n  //draw everything\n  function draw() {\n    // clear canvas\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n    drawBall();\n    drawPaddle();\n    drawBricks();\n    drawScore();\n  }\n\n  //  dynamic paddle\n  function movePaddle() {\n    paddle.x += paddle.dx;\n\n    //wall detection\n    if (paddle.x + paddle.w > canvas.width) {\n      paddle.x = canvas.width - paddle.w;\n    } else if (paddle.x < 0) {\n      paddle.x = 0;\n    }\n  }\n\n  function motionPaddle(e) {\n    if (e.key === \"Right\" || e.key === \"ArrowRight\") {\n      paddle.dx = paddle.speed;\n    } else if (e.key === \"Left\" || e.key === \"ArrowLeft\") {\n      paddle.dx = -paddle.speed;\n    }\n  }\n\n  function haltPaddle(e) {\n    if (\n      e.key === \"Right\" ||\n      e.key === \"ArrowRight\" ||\n      e.key === \"Left\" ||\n      e.key === \"ArrowRLeft\"\n    ) {\n      paddle.dx = 0;\n    }\n  }\n\n  //move Ball\n  function moveBall() {\n    ball.x = ball.x + ball.dx;\n    ball.y = ball.y + ball.dy;\n\n    //wall collision (right/left)\n    if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {\n      ball.dx = ball.dx * -1;\n    }\n    //wall collision (top/bottom)\n    if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {\n      ball.dy = ball.dy * -1;\n    }\n\n    //paddle collision\n    if (\n      ball.x + ball.size < paddle.x + paddle.w &&\n      ball.x - ball.size > paddle.x &&\n      ball.y + ball.size > paddle.y\n    ) {\n      ball.dy = -ball.speed;\n    }\n\n    //brick collision\n\n    bricks.forEach((column) =>\n      column.forEach((brick) => {\n        if (brick.visible) {\n          if (\n            ball.x + ball.size < brick.x + brick.w &&\n            //right brick side check\n            ball.x - ball.size > brick.x &&\n            //left brick side check\n            ball.y - ball.size < brick.y + brick.h &&\n            //bottom brick side check\n            ball.y + ball.size > brick.y // top brick side check\n          ) {\n            ball.dy *= -1;\n            brick.visible = false;\n            increaseScore();\n          }\n        }\n      })\n    );\n\n    //hit the bottom of canvas wall - lose\n    if (ball.y + ball.size > canvas.height) {\n      rebuildBricks();\n      score = 0;\n    }\n  }\n\n  //function end game\n  function AddEndGame() {\n    if (score === 0) {\n      gameOverBox.classList.add(\"show_end_game\");\n      btnPlayAgain.classList.add(\"show_btn_again\");\n    }\n  }\n\n  //update\n  function update() {\n    movePaddle();\n    moveBall();\n    AddEndGame();\n    //draw everything\n    draw();\n\n    requestAnimationFrame(update);\n  }\n\n  update();\n\n  //rebuild bricks\n  function rebuildBricks() {\n    bricks.forEach((column) => {\n      column.forEach((brick) => (brick.visible = true));\n    });\n  }\n\n  //increase score\n  function increaseScore() {\n    score++;\n    if (score % (brickColumnCount * brickRowCount) === 0) {\n      rebuildBricks();\n    }\n  }\n\n  // keyboard Event Listeners\n  document.addEventListener(\"keydown\", motionPaddle);\n  document.addEventListener(\"keyup\", haltPaddle);\n\n  //show and hide rule event handlers\n  rulesBtn.addEventListener(\"click\", () => {\n    rules.classList.add(\"show\");\n  });\n  closeBtn.addEventListener(\"click\", () => {\n    rules.classList.remove(\"show\");\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breakout);\n\n\n//# sourceURL=webpack://breakout-game/./src/Breakout.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Breakout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Breakout.js */ \"./src/Breakout.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n\n\n\n\n(0,_Breakout_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://breakout-game/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;