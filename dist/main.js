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

/***/ "./src/components/TagList/TagList.js":
/*!*******************************************!*\
  !*** ./src/components/TagList/TagList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TagList)\n/* harmony export */ });\n﻿class TagList {\r\n// class TagList {\r\n    constructor() {\r\n        this.data = [\r\n            {label: 'Going to learn React', id: 1},\r\n            {label: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam voluptatem laudantium, ea omnis ut atque culpa! Laudantium veniam reiciendis quia optio veritatis consequatur ut, ab, aliquid beatae maiores dolore possimus?', id: 2},\r\n            {label: 'Hello brother', id: 3},\r\n            {label: 'Hello mother', id: 4},\r\n        ];\r\n        this.readOnlyMode = false;\r\n        this.maxId = this.data.length;\r\n\r\n        this.separator = \" \";\r\n\r\n        this.tagList = document.querySelector('.tag-list');\r\n        this.headerInput = document.querySelector('.header__input');\r\n        this.btnAdd = document.querySelector('.header__button');\r\n        this.readOnlyModeCheckbox = document.querySelector('.readonly__checkbox');\r\n\r\n        // нужно было наверное формой делать и вешать сабмит на форму, но..\r\n        this.btnAdd.addEventListener('click', (event) => {\r\n            if (event.target && this.headerInput.value != \"\" && !this.readOnlyMode) {\r\n                event.preventDefault();\r\n                this.headerInput.value.split(this.separator).forEach(item => {\r\n                    this.addListItem(item);\r\n                });\r\n                // addListItem(headerInput.value);\r\n                this.headerInput.value = \"\";\r\n        \r\n                console.log(this.data);\r\n            }\r\n        });\r\n        this.tagList.addEventListener('click', (event) => {\r\n            if (event.target && (event.target.tagName == \"BUTTON\" || event.target.tagName == \"IMG\")) {\r\n                event.preventDefault();\r\n        \r\n                if (event.target.tagName == \"BUTTON\") {\r\n                    this.deleteListItem(event.target.parentElement.parentElement.getAttribute(\"id\"));\r\n                } else {\r\n                    this.deleteListItem(event.target.parentElement.parentElement.parentElement.getAttribute(\"id\"));\r\n                }\r\n            }\r\n        });\r\n    }\r\n\r\n    updateIdAfterDelete = (id) => {\r\n        const listItems = document.querySelectorAll('.list-item');\r\n        for (let i = id-1; i < listItems.length; i++) {\r\n            listItems[i].setAttribute(\"id\", i+1);\r\n        }\r\n    }\r\n\r\n    deleteListItem = (id) => {\r\n        const listItems = document.querySelectorAll('.list-item');\r\n    \r\n        if (this.readOnlyMode) { return }\r\n    \r\n        listItems[id-1].remove();\r\n    \r\n        // console.log('delete item  id = ',id);\r\n        // console.log('before delete item', data);\r\n        this.data = [...this.data.slice(0, id-1), ...this.data.slice(id)];\r\n        // not deep clone\r\n        this.maxId--;\r\n        for (let i = id - 1; i < this.maxId; i++) {\r\n            this.data[i].id = i + 1;\r\n        }\r\n        console.log('after delete item',this.data);\r\n        this.updateIdAfterDelete(id);\r\n    }\r\n\r\n    addListItem = (text) => {\r\n        const element = document.createElement(\"li\");\r\n        \r\n        element.classList.add('list-item');\r\n        element.setAttribute(\"id\", ++this.maxId);\r\n    \r\n        this.data.push({label: text, id: this.maxId});\r\n    \r\n        element.innerHTML = `\r\n        <div class=\"list-item__row\">\r\n            <span class=\"list-item__text\">${text}</span>\r\n            <button type=\"button\" class=\"list-item__trash\">\r\n            <img src=\"img/trash_delete_icon.svg\">\r\n            </button>\r\n        </div>\r\n        `\r\n        this.tagList.append(element);\r\n    }\r\n\r\n    get List() {\r\n        return this.data;\r\n    }\r\n\r\n    // объект в сеттер - массив объектов (структуры массива data)\r\n    set List(obj) {\r\n        this.data = obj;\r\n    }\r\n\r\n    onReadOnlyMode = () => {\r\n        this.readOnlyMode = true;\r\n        this.readOnlyModeCheckbox.checked = this.readOnlyMode;\r\n    }\r\n\r\n    offReadOnlyMode = () =>  {\r\n        this.readOnlyMode = false;\r\n        this.readOnlyModeCheckbox.checked = this.readOnlyMode;\r\n    }\r\n\r\n    toggleReadOnlyMode = () => {\r\n        this.readOnlyModeCheckbox.checked = !this.readOnlyMode;\r\n    }\r\n\r\n    writeToLocalStorage = (data) => {\r\n        localStorage.clear();\r\n        const dataSt = JSON.stringify(data);\r\n        // data.forEach((i, item) => {\r\n        //     localStorage.setItem(list, item.label);\r\n        // });\r\n        localStorage.setItem('list', dataSt);\r\n    }\r\n\r\n    readFromLocalStorage = () => {\r\n        return JSON.parse(localStorage.getItem('label'));\r\n    }\r\n}\n\n//# sourceURL=webpack://testtuskwa/./src/components/TagList/TagList.js?");

/***/ }),

/***/ "./src/components/TagList/index.js":
/*!*****************************************!*\
  !*** ./src/components/TagList/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TagList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagList */ \"./src/components/TagList/TagList.js\");\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TagList__WEBPACK_IMPORTED_MODULE_0__.default);\n\n//# sourceURL=webpack://testtuskwa/./src/components/TagList/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_TagList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TagList */ \"./src/components/TagList/index.js\");\n\r\n\r\nconst data2 = [\r\n    {label: 'Hello brother', id: 1},\r\n    {label: 'Hello mother', id: 2},\r\n    {label: 'Hello first', id: 3},\r\n    {label: 'Hello third', id: 4},\r\n]\r\n\r\ntagListEx = new _components_TagList__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\r\n// tagListEx.onReadOnlyMode();\r\n\r\n// tagListEx.List = data2;\r\n\r\nconsole.log(tagListEx.List);\r\n\r\nconsole.log('from localStorage');\r\ntagListEx.writeToLocalStorage(tagListEx.data);\r\ntagListEx.readFromLocalStorage();\r\n// localStorage.clear();\n\n//# sourceURL=webpack://testtuskwa/./src/index.js?");

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