/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/main/components/checkbox/checkbox.scss":
/*!********************************************************!*\
  !*** ./src/app/main/components/checkbox/checkbox.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/main/components/base-component/base-component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/components/base-component/base-component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseComponent = void 0;
class BaseComponent {
    constructor(props) {
        const { tagName = 'div', classList = [], content = '' } = props;
        const el = document.createElement(tagName);
        el.classList.add(...classList);
        el.textContent = content;
        this.node = el;
        if (props) {
            for (let key of Object.keys(props)) {
                let customAtts = key.match(/^data([A-Z]\w+)$/);
                if (customAtts) {
                    let customAttName = customAtts[0].slice('data'.length);
                    customAttName = customAttName[0].toLowerCase() + customAttName.slice(1);
                    const customAttValue = props[key];
                    if (typeof customAttValue === 'string') {
                        this.node.dataset[customAttName] = customAttValue;
                    }
                }
            }
        }
    }
}
exports.BaseComponent = BaseComponent;


/***/ }),

/***/ "./src/app/main/components/checkbox/checkbox.ts":
/*!******************************************************!*\
  !*** ./src/app/main/components/checkbox/checkbox.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckBox = void 0;
__webpack_require__(/*! ./checkbox.scss */ "./src/app/main/components/checkbox/checkbox.scss");
const base_component_1 = __webpack_require__(/*! ../base-component/base-component */ "./src/app/main/components/base-component/base-component.ts");
class CheckBox extends base_component_1.BaseComponent {
    constructor(props) {
        props.tagName = 'label';
        super(props);
        const { name, value, content } = props;
        if (!(name && value && content)) {
            throw new Error('must enter name, value, content properties');
        }
        ;
        const html = `
    <input class="checkbox__input visually-hidden" type="checkbox" name="${name}" value="${value}">
      <svg class="checkbox__input-icon-check-off" height="24" width="24" aria-hidden="true"><use xlink:href="#check-off"></use></svg>
      <svg class="checkbox__input-icon-check-on" height="24" width="24" aria-hidden="true"><use xlink:href="#check-on"></use></svg>
    <span class="checkbox__label">${content}</span>`;
        this.node.innerHTML = html;
        this.node.classList.add('checkbox');
    }
}
exports.CheckBox = CheckBox;


/***/ }),

/***/ "./src/app/main/hash-router.ts":
/*!*************************************!*\
  !*** ./src/app/main/hash-router.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const render_1 = __webpack_require__(/*! ./render */ "./src/app/main/render.ts");
const ploytaryElems = (0, render_1.render)(render_1.renderListPloytary);
const mrdmitrijElems = (0, render_1.render)(render_1.renderListmrdmitrij);
const routes = {
    404: {
        template: 'page not found',
    },
    "/": {
        template: 'home template',
    },
    catalog: {
        template: 'catalog template',
    },
    cart: {
        template: 'cart template',
    },
    productPage: {
        template: 'product page template',
    },
    modal: {
        template: 'modal template',
    },
    ploytary: {
        template: ploytaryElems,
    },
    mrdmitrij: {
        template: mrdmitrijElems,
    },
};
const locationHandler = () => __awaiter(void 0, void 0, void 0, function* () {
    var location = window.location.hash.replace("#", "");
    if (location.length == 0) {
        location = "/";
    }
    const route = routes[location] || routes["404"];
    const CONTENT_CONRAINER = '.dev-container';
    const contentContainer = document.querySelector(CONTENT_CONRAINER);
    if (!contentContainer) {
        throw new Error('cant find dev-container');
    }
    contentContainer.innerHTML = '';
    contentContainer.append(route.template);
});
window.addEventListener("hashchange", locationHandler);
locationHandler();


/***/ }),

/***/ "./src/app/main/render.ts":
/*!********************************!*\
  !*** ./src/app/main/render.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.render = exports.renderListmrdmitrij = exports.renderListPloytary = void 0;
const checkbox_1 = __webpack_require__(/*! ./components/checkbox/checkbox */ "./src/app/main/components/checkbox/checkbox.ts");
exports.renderListPloytary = [
    new checkbox_1.CheckBox({ name: 'check1', value: 'checkvalue', content: 'шоколадница', dataItemId: 'custom-data' }),
];
exports.renderListmrdmitrij = [
    new checkbox_1.CheckBox({ name: 'просрал', value: 'всё', content: 'на свете', dataItemId: 'downgrade' }),
];
function render(elementList) {
    let el = document.createElement('div');
    if (!Array.isArray(elementList)) {
        throw new Error('param is not array');
    }
    ;
    const nodes = elementList.map((element) => element.node);
    nodes.forEach((node) => el.append(node));
    return el;
}
exports.render = render;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./index.scss */ "./src/index.scss");
__webpack_require__(/*! ./app/main/render */ "./src/app/main/render.ts");
__webpack_require__(/*! ./app/main/hash-router */ "./src/app/main/hash-router.ts");

})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map