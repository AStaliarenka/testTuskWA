/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/TagList/TagList.js":
/*!*******************************************!*\
  !*** ./src/components/TagList/TagList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TagList)
/* harmony export */ });
﻿class TagList {
// class TagList {
    constructor() {
        this.data = [
            {label: 'Going to learn React', id: 1},
            {label: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam voluptatem laudantium, ea omnis ut atque culpa! Laudantium veniam reiciendis quia optio veritatis consequatur ut, ab, aliquid beatae maiores dolore possimus?', id: 2},
            {label: 'Hello brother', id: 3},
            {label: 'Hello mother', id: 4},
        ];
        this.readOnlyMode = false;
        this.maxId = this.data.length;

        this.separator = " ";

        this.tagList = document.querySelector('.tag-list');
        this.headerInput = document.querySelector('.header__input');
        this.btnAdd = document.querySelector('.header__button');
        this.readOnlyModeCheckbox = document.querySelector('.readonly__checkbox');

        // нужно было наверное формой делать и вешать сабмит на форму, но..
        this.btnAdd.addEventListener('click', (event) => {
            if (event.target && this.headerInput.value != "" && !this.readOnlyMode) {
                event.preventDefault();
                this.headerInput.value.split(this.separator).forEach(item => {
                    this.addListItem(item);
                });
                // addListItem(headerInput.value);
                this.headerInput.value = "";
        
                console.log(this.data);
            }
        });
        this.tagList.addEventListener('click', (event) => {
            if (event.target && (event.target.tagName == "BUTTON" || event.target.tagName == "IMG")) {
                event.preventDefault();
        
                if (event.target.tagName == "BUTTON") {
                    this.deleteListItem(event.target.parentElement.parentElement.getAttribute("id"));
                } else {
                    this.deleteListItem(event.target.parentElement.parentElement.parentElement.getAttribute("id"));
                }
            }
        });
    }

    updateIdAfterDelete = (id) => {
        const listItems = document.querySelectorAll('.list-item');
        for (let i = id-1; i < listItems.length; i++) {
            listItems[i].setAttribute("id", i+1);
        }
    }

    deleteListItem = (id) => {
        const listItems = document.querySelectorAll('.list-item');
    
        if (this.readOnlyMode) { return }
    
        listItems[id-1].remove();
    
        // console.log('delete item  id = ',id);
        // console.log('before delete item', data);
        this.data = [...this.data.slice(0, id-1), ...this.data.slice(id)];
        // not deep clone
        this.maxId--;
        for (let i = id - 1; i < this.maxId; i++) {
            this.data[i].id = i + 1;
        }
        console.log('after delete item',this.data);
        this.updateIdAfterDelete(id);
    }

    addListItem = (text) => {
        const element = document.createElement("li");
        
        element.classList.add('list-item');
        element.setAttribute("id", ++this.maxId);
    
        this.data.push({label: text, id: this.maxId});
    
        element.innerHTML = `
        <div class="list-item__row">
            <span class="list-item__text">${text}</span>
            <button type="button" class="list-item__trash">
            <img src="img/trash_delete_icon.svg">
            </button>
        </div>
        `
        this.tagList.append(element);
    }

    get List() {
        return this.data;
    }

    // объект в сеттер - массив объектов (структуры массива data)
    set List(obj) {
        this.data = obj;
    }

    onReadOnlyMode = () => {
        this.readOnlyMode = true;
        this.readOnlyModeCheckbox.checked = this.readOnlyMode;
    }

    offReadOnlyMode = () =>  {
        this.readOnlyMode = false;
        this.readOnlyModeCheckbox.checked = this.readOnlyMode;
    }

    toggleReadOnlyMode = () => {
        this.readOnlyModeCheckbox.checked = !this.readOnlyMode;
    }

    writeToLocalStorage = (data) => {
        localStorage.clear();
        const dataSt = JSON.stringify(data);
        // data.forEach((i, item) => {
        //     localStorage.setItem(list, item.label);
        // });
        localStorage.setItem('list', dataSt);
    }

    readFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem('label'));
    }
}

/***/ }),

/***/ "./src/components/TagList/index.js":
/*!*****************************************!*\
  !*** ./src/components/TagList/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TagList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagList */ "./src/components/TagList/TagList.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TagList__WEBPACK_IMPORTED_MODULE_0__.default);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TagList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TagList */ "./src/components/TagList/index.js");


// const data2 = [
//     {label: 'Hello brother', id: 1},
//     {label: 'Hello mother', id: 2},
//     {label: 'Hello first', id: 3},
//     {label: 'Hello third', id: 4},
// ]

const tagListEx = new _components_TagList__WEBPACK_IMPORTED_MODULE_0__.default();

// tagListEx.onReadOnlyMode();

// tagListEx.List = data2;

console.log(tagListEx.List);

// console.log('from localStorage');
// tagListEx.writeToLocalStorage(tagListEx.data);
// tagListEx.readFromLocalStorage();
// localStorage.clear();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map