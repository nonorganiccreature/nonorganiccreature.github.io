/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Palette+Mosaic&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
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
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game/Animation/Animation.ts":
/*!*****************************************!*\
  !*** ./src/game/Animation/Animation.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityAnimation": () => (/* binding */ EntityAnimation)
/* harmony export */ });
var EntityAnimation = /** @class */ (function () {
    function EntityAnimation(ends, timingFunction, scaleParams) {
        if (scaleParams === void 0) { scaleParams = 1; }
        this.starts = performance.now();
        this.current = this.starts + 1;
        this.ends = ends;
        this.timingFunction = timingFunction;
        this.scaleParams = scaleParams;
    }
    EntityAnimation.prototype.progress = function () {
        return (this.current - this.starts) / (this.ends - this.starts);
    };
    return EntityAnimation;
}());



/***/ }),

/***/ "./src/game/Animation/BotDesctrutionParticleAnimation.ts":
/*!***************************************************************!*\
  !*** ./src/game/Animation/BotDesctrutionParticleAnimation.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BotDestructionParticleAnimation": () => (/* binding */ BotDestructionParticleAnimation)
/* harmony export */ });
/* harmony import */ var _Model_Position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Position */ "./src/game/Model/Position.ts");
/* harmony import */ var _ViewModel_BotDestructionViewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ViewModel/BotDestructionViewModel */ "./src/game/ViewModel/BotDestructionViewModel.ts");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Animation */ "./src/game/Animation/Animation.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var BotDestructionParticleAnimation = /** @class */ (function (_super) {
    __extends(BotDestructionParticleAnimation, _super);
    function BotDestructionParticleAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BotDestructionParticleAnimation.prototype.animate = function (currentViewModel) {
        if (!this.startViewModel) {
            this.startViewModel = new _ViewModel_BotDestructionViewModel__WEBPACK_IMPORTED_MODULE_1__.BotDestructionViewModel(currentViewModel.radius, currentViewModel.color, currentViewModel.position);
        }
        this.current = performance.now();
        var newPosition = new _Model_Position__WEBPACK_IMPORTED_MODULE_0__.Position(0, 0, this.startViewModel.position.directionX, this.startViewModel.position.directionY);
        newPosition.x =
            this.startViewModel.position.x +
                this.startViewModel.position.directionX *
                    this.timingFunction(this.progress()) *
                    this.scaleParams;
        newPosition.y =
            this.startViewModel.position.y +
                this.startViewModel.position.directionY *
                    this.timingFunction(this.progress()) *
                    this.scaleParams;
        var opacity = (1 - this.progress()) *
            this.startViewModel.opacity;
        return { newPosition: newPosition, opacity: opacity < 0 ? 0 : opacity };
    };
    return BotDestructionParticleAnimation;
}(_Animation__WEBPACK_IMPORTED_MODULE_2__.EntityAnimation));



/***/ }),

/***/ "./src/game/Animation/PlayerAttackAnimation.ts":
/*!*****************************************************!*\
  !*** ./src/game/Animation/PlayerAttackAnimation.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerAttackAnimation": () => (/* binding */ PlayerAttackAnimation)
/* harmony export */ });
/* harmony import */ var _ViewModel_PlayerAttackViewModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ViewModel/PlayerAttackViewModel */ "./src/game/ViewModel/PlayerAttackViewModel.ts");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Animation */ "./src/game/Animation/Animation.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PlayerAttackAnimation = /** @class */ (function (_super) {
    __extends(PlayerAttackAnimation, _super);
    function PlayerAttackAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayerAttackAnimation.prototype.animate = function (currentViewModel) {
        if (!this.startViewModel) {
            this.startViewModel = new _ViewModel_PlayerAttackViewModel__WEBPACK_IMPORTED_MODULE_0__.PlayerAttackViewModel(currentViewModel.radius, currentViewModel.color, currentViewModel.position);
        }
        this.current = performance.now();
        var radius = this.scaleParams *
            this.startViewModel.radius *
            this.timingFunction(this.progress());
        return radius;
    };
    return PlayerAttackAnimation;
}(_Animation__WEBPACK_IMPORTED_MODULE_1__.EntityAnimation));



/***/ }),

/***/ "./src/game/Animation/TimingFunctions.ts":
/*!***********************************************!*\
  !*** ./src/game/Animation/TimingFunctions.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimingFunctions": () => (/* binding */ TimingFunctions)
/* harmony export */ });
var TimingFunctions;
(function (TimingFunctions) {
    TimingFunctions.quad = function (progress) {
        return Math.pow(progress, 2);
    };
    TimingFunctions.bow = function (progress, elastic) {
        if (elastic === void 0) { elastic = 0.5; }
        return Math.pow(progress, 2) * ((elastic + 1) * progress - elastic);
    };
})(TimingFunctions || (TimingFunctions = {}));



/***/ }),

/***/ "./src/game/Collisions/CircleCollider.ts":
/*!***********************************************!*\
  !*** ./src/game/Collisions/CircleCollider.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircleCollider": () => (/* binding */ CircleCollider)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils */ "./src/game/Utils/index.ts");
/* harmony import */ var _Collider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collider */ "./src/game/Collisions/Collider.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CircleCollider = /** @class */ (function (_super) {
    __extends(CircleCollider, _super);
    function CircleCollider(entity, radius) {
        var _this = _super.call(this, entity) || this;
        _this.radius = 0;
        _this.radius = radius;
        _this.entity.viewModel.registerObserver(_this);
        return _this;
    }
    CircleCollider.prototype.collided = function (target) {
        if (target instanceof CircleCollider) {
            return (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.distanceBetween)(this.entity.viewModel.position, target.entity.viewModel.position) <= (target.entity.viewModel.radius + this.radius);
        }
        return false;
    };
    CircleCollider.prototype.onNotifyCallback = function (params) {
        this.radius = params.radius;
    };
    return CircleCollider;
}(_Collider__WEBPACK_IMPORTED_MODULE_1__.Collider));



/***/ }),

/***/ "./src/game/Collisions/Collider.ts":
/*!*****************************************!*\
  !*** ./src/game/Collisions/Collider.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Collider": () => (/* binding */ Collider)
/* harmony export */ });
/* harmony import */ var _Observing_Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observing/Observer */ "./src/game/Observing/Observer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Collider = /** @class */ (function (_super) {
    __extends(Collider, _super);
    function Collider(entity) {
        var _this = _super.call(this) || this;
        _this.entity = entity;
        return _this;
    }
    return Collider;
}(_Observing_Observer__WEBPACK_IMPORTED_MODULE_0__.Observer));



/***/ }),

/***/ "./src/game/Controller/BotController.ts":
/*!**********************************************!*\
  !*** ./src/game/Controller/BotController.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BotController": () => (/* binding */ BotController)
/* harmony export */ });
/* harmony import */ var _Decorators_InputableController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Decorators/InputableController */ "./src/game/Decorators/InputableController.ts");
/* harmony import */ var _Enum_EntityState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Enum/EntityState */ "./src/game/Enum/EntityState.ts");
/* harmony import */ var _Model_Entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/Entity */ "./src/game/Model/Entity.ts");
/* harmony import */ var _Model_Position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Model/Position */ "./src/game/Model/Position.ts");
/* harmony import */ var _EntityController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EntityController */ "./src/game/Controller/EntityController.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BotController = /** @class */ (function (_super) {
    __extends(BotController, _super);
    function BotController(botEntity) {
        return _super.call(this, botEntity) || this;
    }
    BotController.prototype.performAction = function () {
        switch (this.entity.state) {
            case _Enum_EntityState__WEBPACK_IMPORTED_MODULE_1__.EntityState.Idle:
                {
                    // binding this.entity param cause in is only one controller and this.entity changes every frame 
                    setTimeout((function (entity) {
                        entity.state = _Enum_EntityState__WEBPACK_IMPORTED_MODULE_1__.EntityState.Moving;
                    }).bind(this, this.entity), 1000);
                    return;
                }
                break;
            case _Enum_EntityState__WEBPACK_IMPORTED_MODULE_1__.EntityState.Moving:
                {
                    var x = this.entity.viewModel.position.x;
                    var y = this.entity.viewModel.position.y;
                    this.entity.viewModel.position = new _Model_Position__WEBPACK_IMPORTED_MODULE_3__.Position(x + 1 * this.entity.viewModel.position.directionX, y + 1 * this.entity.viewModel.position.directionY, this.entity.viewModel.position.directionX, this.entity.viewModel.position.directionY);
                }
                break;
        }
    };
    BotController.prototype.inputEventHandler = function (event) {
    };
    BotController = __decorate([
        _Decorators_InputableController__WEBPACK_IMPORTED_MODULE_0__.inputable,
        __metadata("design:paramtypes", [_Model_Entity__WEBPACK_IMPORTED_MODULE_2__.Entity])
    ], BotController);
    return BotController;
}(_EntityController__WEBPACK_IMPORTED_MODULE_4__.EntityController));



/***/ }),

/***/ "./src/game/Controller/EntityController.ts":
/*!*************************************************!*\
  !*** ./src/game/Controller/EntityController.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityController": () => (/* binding */ EntityController)
/* harmony export */ });
var EntityController = /** @class */ (function () {
    function EntityController(e) {
        this._entity = e;
    }
    Object.defineProperty(EntityController.prototype, "entity", {
        get: function () {
            return this._entity;
        },
        set: function (value) {
            this._entity = value;
        },
        enumerable: false,
        configurable: true
    });
    return EntityController;
}());



/***/ }),

/***/ "./src/game/Controller/ParticleController.ts":
/*!***************************************************!*\
  !*** ./src/game/Controller/ParticleController.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParticleController": () => (/* binding */ ParticleController)
/* harmony export */ });
/* harmony import */ var _Model_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Player */ "./src/game/Model/Player.ts");
/* harmony import */ var _Model_PlayerAttackParticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Model/PlayerAttackParticle */ "./src/game/Model/PlayerAttackParticle.ts");
/* harmony import */ var _EntityController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EntityController */ "./src/game/Controller/EntityController.ts");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Store */ "./src/game/Store/index.ts");
/* harmony import */ var _Model_Bot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Model/Bot */ "./src/game/Model/Bot.ts");
/* harmony import */ var _Model_BotDestructionParticle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Model/BotDestructionParticle */ "./src/game/Model/BotDestructionParticle.ts");
/* harmony import */ var _View_BotDestructionView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../View/BotDestructionView */ "./src/game/View/BotDestructionView.ts");
/* harmony import */ var _ViewModel_BotDestructionViewModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ViewModel/BotDestructionViewModel */ "./src/game/ViewModel/BotDestructionViewModel.ts");
/* harmony import */ var _Animation_BotDesctrutionParticleAnimation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Animation/BotDesctrutionParticleAnimation */ "./src/game/Animation/BotDesctrutionParticleAnimation.ts");
/* harmony import */ var _Animation_TimingFunctions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Animation/TimingFunctions */ "./src/game/Animation/TimingFunctions.ts");
/* harmony import */ var _Model_Score__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Model/Score */ "./src/game/Model/Score.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};











var ParticleController = /** @class */ (function (_super) {
    __extends(ParticleController, _super);
    function ParticleController(ctx) {
        var _this = _super.call(this, null) || this;
        _this.ctx = ctx;
        return _this;
    }
    ParticleController.prototype.performAction = function () {
        var _this = this;
        // delete expired particles
        _Store__WEBPACK_IMPORTED_MODULE_3__.store.particles = _Store__WEBPACK_IMPORTED_MODULE_3__.store.particles.filter(function (particle) { return !!particle.animation; });
        // transform particles
        _Store__WEBPACK_IMPORTED_MODULE_3__.store.particles.forEach(function (particle) {
            if (particle.animation) {
                if (particle instanceof _Model_PlayerAttackParticle__WEBPACK_IMPORTED_MODULE_1__.PlayerAttackParticle) {
                    particle.viewModel.radius = particle.animation.animate(particle.viewModel);
                }
                if (particle instanceof _Model_BotDestructionParticle__WEBPACK_IMPORTED_MODULE_5__.BotDestructionParticle) {
                    var animationParams = particle.animation.animate(particle.viewModel);
                    particle.viewModel.position = animationParams.newPosition;
                    particle.viewModel.opacity = animationParams.opacity;
                }
                if (particle.animation.progress() >= 1) {
                    particle.animation = null;
                }
            }
        });
        // check collisions
        _Store__WEBPACK_IMPORTED_MODULE_3__.store.particles.forEach(function (particle) {
            _Store__WEBPACK_IMPORTED_MODULE_3__.store.entities.forEach(function (entity) {
                if (particle.collider.collided(entity.collider)) {
                    if (particle instanceof _Model_PlayerAttackParticle__WEBPACK_IMPORTED_MODULE_1__.PlayerAttackParticle) {
                        if (entity instanceof _Model_Player__WEBPACK_IMPORTED_MODULE_0__.Player) {
                            return;
                        }
                        if (entity instanceof _Model_Bot__WEBPACK_IMPORTED_MODULE_4__.Bot) {
                            var BOT_DESTRUCTION_PARTICLE_COUNT = 7;
                            for (var i = 0; i < BOT_DESTRUCTION_PARTICLE_COUNT; i++) {
                                var randomDirection = __assign({}, entity.viewModel.position);
                                randomDirection.directionX =
                                    -1 + 2 * Math.random();
                                randomDirection.directionY =
                                    -1 + 2 * Math.random();
                                var botDestructionParticle = new _Model_BotDestructionParticle__WEBPACK_IMPORTED_MODULE_5__.BotDestructionParticle(new _ViewModel_BotDestructionViewModel__WEBPACK_IMPORTED_MODULE_7__.BotDestructionViewModel(5, "#fff", randomDirection));
                                botDestructionParticle.animation =
                                    new _Animation_BotDesctrutionParticleAnimation__WEBPACK_IMPORTED_MODULE_8__.BotDestructionParticleAnimation(performance.now() + 300, _Animation_TimingFunctions__WEBPACK_IMPORTED_MODULE_9__.TimingFunctions.quad, 45);
                                botDestructionParticle.viewModel.registerObserver(new _View_BotDestructionView__WEBPACK_IMPORTED_MODULE_6__.BotDestructionView(_this.ctx));
                                _Store__WEBPACK_IMPORTED_MODULE_3__.store.particles.push(botDestructionParticle);
                            }
                            _Store__WEBPACK_IMPORTED_MODULE_3__.store.entities = _Store__WEBPACK_IMPORTED_MODULE_3__.store.entities.filter(function (tEntity) { return tEntity !== entity; });
                            (_Store__WEBPACK_IMPORTED_MODULE_3__.store.entities.filter(function (tEntity) { return tEntity instanceof _Model_Score__WEBPACK_IMPORTED_MODULE_10__.Score; })[0].viewModel).scoreValue += 1;
                        }
                    }
                }
            });
        });
    };
    ParticleController.prototype.inputEventHandler = function (event) { };
    return ParticleController;
}(_EntityController__WEBPACK_IMPORTED_MODULE_2__.EntityController));



/***/ }),

/***/ "./src/game/Controller/PlayerController.ts":
/*!*************************************************!*\
  !*** ./src/game/Controller/PlayerController.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerController": () => (/* binding */ PlayerController)
/* harmony export */ });
/* harmony import */ var _Decorators_InputableController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Decorators/InputableController */ "./src/game/Decorators/InputableController.ts");
/* harmony import */ var _Enum_EntityState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Enum/EntityState */ "./src/game/Enum/EntityState.ts");
/* harmony import */ var _Model_Entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/Entity */ "./src/game/Model/Entity.ts");
/* harmony import */ var _Model_Position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Model/Position */ "./src/game/Model/Position.ts");
/* harmony import */ var _EntityController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EntityController */ "./src/game/Controller/EntityController.ts");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Store */ "./src/game/Store/index.ts");
/* harmony import */ var _Model_PlayerAttackParticle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Model/PlayerAttackParticle */ "./src/game/Model/PlayerAttackParticle.ts");
/* harmony import */ var _Animation_PlayerAttackAnimation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Animation/PlayerAttackAnimation */ "./src/game/Animation/PlayerAttackAnimation.ts");
/* harmony import */ var _Animation_TimingFunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Animation/TimingFunctions */ "./src/game/Animation/TimingFunctions.ts");
/* harmony import */ var _View_PlayerAttackParticleView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../View/PlayerAttackParticleView */ "./src/game/View/PlayerAttackParticleView.ts");
/* harmony import */ var _ViewModel_PlayerAttackViewModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ViewModel/PlayerAttackViewModel */ "./src/game/ViewModel/PlayerAttackViewModel.ts");
/* harmony import */ var _pageWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pageWrapper */ "./src/pageWrapper.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController(playerEntity) {
        var _this = _super.call(this, playerEntity) || this;
        _this.keysPressed = {};
        return _this;
    }
    PlayerController.prototype.performAction = function () {
        var _this = this;
        switch (this.entity.state) {
            case _Enum_EntityState__WEBPACK_IMPORTED_MODULE_1__.EntityState.Idle:
                {
                    this.entity.viewModel.position =
                        this.entity.viewModel.position;
                    return;
                }
                break;
            case _Enum_EntityState__WEBPACK_IMPORTED_MODULE_1__.EntityState.Moving:
                {
                    var x = this.entity.viewModel.position.x;
                    var y = this.entity.viewModel.position.y;
                    var dX = this.entity.viewModel.position.directionX;
                    var dY = this.entity.viewModel.position.directionY;
                    this.entity.viewModel.position = __assign(__assign({}, this.entity.viewModel.position), { x: x + 5 * dX, y: y + 5 * dY });
                    _Store__WEBPACK_IMPORTED_MODULE_5__.store.particles.forEach(function (particle) {
                        if (particle instanceof _Model_PlayerAttackParticle__WEBPACK_IMPORTED_MODULE_6__.PlayerAttackParticle) {
                            particle.viewModel.position = __assign({}, _this.entity.viewModel.position);
                        }
                    });
                }
                break;
        }
    };
    PlayerController.prototype.inputEventHandler = function (event) {
        var _this = this;
        // change direction on arrow keys pressed
        var currentPosition = new _Model_Position__WEBPACK_IMPORTED_MODULE_3__.Position(this.entity.viewModel.position.x, this.entity.viewModel.position.y, 0, 0);
        if (event.type === "keydown") {
            this.entity.state = _Enum_EntityState__WEBPACK_IMPORTED_MODULE_1__.EntityState.Moving;
            this.keysPressed[event.key] = true;
        }
        if (event.type === "keyup") {
            this.keysPressed[event.key] = false;
            this.entity.viewModel.position = currentPosition;
        }
        Object.keys(this.keysPressed).forEach(function (keyName) {
            if (_this.keysPressed[keyName]) {
                switch (keyName) {
                    case "ArrowUp":
                        {
                            currentPosition.directionY = -1;
                        }
                        break;
                    case "ArrowDown":
                        {
                            currentPosition.directionY = 1;
                        }
                        break;
                    case "ArrowLeft":
                        {
                            currentPosition.directionX = -1;
                        }
                        break;
                    case "ArrowRight":
                        {
                            currentPosition.directionX = 1;
                        }
                        break;
                    case " ":
                        {
                            if (_Store__WEBPACK_IMPORTED_MODULE_5__.store.particles.filter(function (particle) {
                                return particle instanceof _Model_PlayerAttackParticle__WEBPACK_IMPORTED_MODULE_6__.PlayerAttackParticle;
                            })[0]) {
                                return;
                            }
                            var playerAttackParticle = new _Model_PlayerAttackParticle__WEBPACK_IMPORTED_MODULE_6__.PlayerAttackParticle(new _ViewModel_PlayerAttackViewModel__WEBPACK_IMPORTED_MODULE_10__.PlayerAttackViewModel(10, "#00f", _Store__WEBPACK_IMPORTED_MODULE_5__.store.playerEntity.viewModel.position));
                            playerAttackParticle.animation =
                                new _Animation_PlayerAttackAnimation__WEBPACK_IMPORTED_MODULE_7__.PlayerAttackAnimation(performance.now() + 200, _Animation_TimingFunctions__WEBPACK_IMPORTED_MODULE_8__.TimingFunctions.quad, 3);
                            playerAttackParticle.viewModel.registerObserver(new _View_PlayerAttackParticleView__WEBPACK_IMPORTED_MODULE_9__.PlayerAttackParticleView((0,_pageWrapper__WEBPACK_IMPORTED_MODULE_11__.getCanvasContext)()));
                            _Store__WEBPACK_IMPORTED_MODULE_5__.store.particles.push(playerAttackParticle);
                        }
                        break;
                }
            }
        });
        this.entity.viewModel.position = currentPosition;
    };
    PlayerController = __decorate([
        _Decorators_InputableController__WEBPACK_IMPORTED_MODULE_0__.inputable,
        __metadata("design:paramtypes", [_Model_Entity__WEBPACK_IMPORTED_MODULE_2__.Entity])
    ], PlayerController);
    return PlayerController;
}(_EntityController__WEBPACK_IMPORTED_MODULE_4__.EntityController));



/***/ }),

/***/ "./src/game/Controller/SpawnController.ts":
/*!************************************************!*\
  !*** ./src/game/Controller/SpawnController.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpawnController": () => (/* binding */ SpawnController)
/* harmony export */ });
/* harmony import */ var _EntityController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntityController */ "./src/game/Controller/EntityController.ts");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Store */ "./src/game/Store/index.ts");
/* harmony import */ var _Model_Bot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/Bot */ "./src/game/Model/Bot.ts");
/* harmony import */ var _View_BotView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../View/BotView */ "./src/game/View/BotView.ts");
/* harmony import */ var _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Collisions/CircleCollider */ "./src/game/Collisions/CircleCollider.ts");
/* harmony import */ var _ViewModel_BotViewModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ViewModel/BotViewModel */ "./src/game/ViewModel/BotViewModel.ts");
/* harmony import */ var _Model_Position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Model/Position */ "./src/game/Model/Position.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var SpawnController = /** @class */ (function (_super) {
    __extends(SpawnController, _super);
    function SpawnController(ctx) {
        var _this = _super.call(this, null) || this;
        _this.lastSpawnTime = 0;
        _this.ctx = ctx;
        return _this;
    }
    SpawnController.prototype.performAction = function () {
        if (this.lastSpawnTime === 0) {
            this.lastSpawnTime = performance.now();
        }
        var currentTime = performance.now();
        if (currentTime - this.lastSpawnTime >= 200) {
            var randomX = this.ctx.canvas.width * Math.random();
            var randomY = this.ctx.canvas.height * Math.random();
            var randomDirectionX = -1 + 2 * Math.random();
            var randomDirectionY = -1 + 2 * Math.random();
            var botEntity = new _Model_Bot__WEBPACK_IMPORTED_MODULE_2__.Bot(new _ViewModel_BotViewModel__WEBPACK_IMPORTED_MODULE_5__.BotViewModel(10, '#fff', new _Model_Position__WEBPACK_IMPORTED_MODULE_6__.Position(randomX, randomY, randomDirectionX, randomDirectionY)));
            botEntity.collider = new _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_4__.CircleCollider(botEntity, botEntity.viewModel.radius);
            var botEntityView = new _View_BotView__WEBPACK_IMPORTED_MODULE_3__.BotView(this.ctx);
            botEntity.viewModel.registerObserver(botEntityView);
            _Store__WEBPACK_IMPORTED_MODULE_1__.store.entities.push(botEntity);
            this.lastSpawnTime = currentTime;
        }
    };
    SpawnController.prototype.inputEventHandler = function (event) { };
    return SpawnController;
}(_EntityController__WEBPACK_IMPORTED_MODULE_0__.EntityController));



/***/ }),

/***/ "./src/game/Decorators/InputableController.ts":
/*!****************************************************!*\
  !*** ./src/game/Decorators/InputableController.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputable": () => (/* binding */ inputable)
/* harmony export */ });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var inputable = function (target) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            window.addEventListener('keydown', target.prototype.inputEventHandler.bind(_this));
            window.addEventListener('keyup', target.prototype.inputEventHandler.bind(_this));
            window.addEventListener('keypress', target.prototype.inputEventHandler.bind(_this));
            return _this;
        }
        return class_1;
    }(target));
};



/***/ }),

/***/ "./src/game/Enum/EntityState.ts":
/*!**************************************!*\
  !*** ./src/game/Enum/EntityState.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityState": () => (/* binding */ EntityState)
/* harmony export */ });
var EntityState;
(function (EntityState) {
    EntityState[EntityState["Idle"] = 0] = "Idle";
    EntityState[EntityState["Moving"] = 1] = "Moving";
    EntityState[EntityState["Attack"] = 2] = "Attack";
    EntityState[EntityState["Dead"] = 3] = "Dead";
})(EntityState || (EntityState = {}));



/***/ }),

/***/ "./src/game/Model/Bot.ts":
/*!*******************************!*\
  !*** ./src/game/Model/Bot.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bot": () => (/* binding */ Bot)
/* harmony export */ });
/* harmony import */ var _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Collisions/CircleCollider */ "./src/game/Collisions/CircleCollider.ts");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ "./src/game/Model/Entity.ts");
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stats */ "./src/game/Model/Stats.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Bot = /** @class */ (function (_super) {
    __extends(Bot, _super);
    function Bot(viewModel) {
        var _this = _super.call(this, viewModel) || this;
        _this._stats = new _Stats__WEBPACK_IMPORTED_MODULE_2__.Stats(2, 100);
        _this.collider = new _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__.CircleCollider(_this, _this.viewModel.radius);
        return _this;
    }
    Object.defineProperty(Bot.prototype, "stats", {
        get: function () {
            return this._stats;
        },
        set: function (value) {
            this._stats = value;
        },
        enumerable: false,
        configurable: true
    });
    return Bot;
}(_Entity__WEBPACK_IMPORTED_MODULE_1__.Entity));



/***/ }),

/***/ "./src/game/Model/BotDestructionParticle.ts":
/*!**************************************************!*\
  !*** ./src/game/Model/BotDestructionParticle.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BotDestructionParticle": () => (/* binding */ BotDestructionParticle)
/* harmony export */ });
/* harmony import */ var _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Collisions/CircleCollider */ "./src/game/Collisions/CircleCollider.ts");
/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Particle */ "./src/game/Model/Particle.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var BotDestructionParticle = /** @class */ (function (_super) {
    __extends(BotDestructionParticle, _super);
    function BotDestructionParticle(viewModel) {
        var _this = _super.call(this, viewModel) || this;
        _this.collider = new _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__.CircleCollider(_this, _this.viewModel.radius);
        return _this;
    }
    return BotDestructionParticle;
}(_Particle__WEBPACK_IMPORTED_MODULE_1__.Particle));



/***/ }),

/***/ "./src/game/Model/Entity.ts":
/*!**********************************!*\
  !*** ./src/game/Model/Entity.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Entity": () => (/* binding */ Entity)
/* harmony export */ });
/* harmony import */ var _Enum_EntityState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Enum/EntityState */ "./src/game/Enum/EntityState.ts");

var Entity = /** @class */ (function () {
    function Entity(viewModel) {
        this._currentTarget = null;
        this._state = _Enum_EntityState__WEBPACK_IMPORTED_MODULE_0__.EntityState.Idle;
        this._viewModel = viewModel;
    }
    Object.defineProperty(Entity.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "currentTarget", {
        get: function () {
            return this._currentTarget;
        },
        set: function (value) {
            this._currentTarget = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "collider", {
        get: function () {
            return this._collider;
        },
        set: function (value) {
            this._collider = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "animation", {
        get: function () {
            return this._animation;
        },
        set: function (value) {
            this._animation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "viewModel", {
        get: function () {
            return this._viewModel;
        },
        set: function (value) {
            this._viewModel = value;
        },
        enumerable: false,
        configurable: true
    });
    return Entity;
}());



/***/ }),

/***/ "./src/game/Model/Particle.ts":
/*!************************************!*\
  !*** ./src/game/Model/Particle.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Particle": () => (/* binding */ Particle)
/* harmony export */ });
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ "./src/game/Model/Entity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Particle = /** @class */ (function (_super) {
    __extends(Particle, _super);
    function Particle(viewModel) {
        return _super.call(this, viewModel) || this;
    }
    return Particle;
}(_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity));



/***/ }),

/***/ "./src/game/Model/Player.ts":
/*!**********************************!*\
  !*** ./src/game/Model/Player.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Collisions/CircleCollider */ "./src/game/Collisions/CircleCollider.ts");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ "./src/game/Model/Entity.ts");
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stats */ "./src/game/Model/Stats.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(viewModel) {
        var _this = _super.call(this, viewModel) || this;
        _this._stats = new _Stats__WEBPACK_IMPORTED_MODULE_2__.Stats(2, 100);
        _this.collider = new _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__.CircleCollider(_this, 0);
        return _this;
    }
    Object.defineProperty(Player.prototype, "stats", {
        get: function () {
            return this._stats;
        },
        set: function (value) {
            this._stats = value;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}(_Entity__WEBPACK_IMPORTED_MODULE_1__.Entity));



/***/ }),

/***/ "./src/game/Model/PlayerAttackParticle.ts":
/*!************************************************!*\
  !*** ./src/game/Model/PlayerAttackParticle.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerAttackParticle": () => (/* binding */ PlayerAttackParticle)
/* harmony export */ });
/* harmony import */ var _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Collisions/CircleCollider */ "./src/game/Collisions/CircleCollider.ts");
/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Particle */ "./src/game/Model/Particle.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PlayerAttackParticle = /** @class */ (function (_super) {
    __extends(PlayerAttackParticle, _super);
    function PlayerAttackParticle(viewModel) {
        var _this = _super.call(this, viewModel) || this;
        _this.collider = new _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__.CircleCollider(_this, _this.viewModel.radius);
        return _this;
    }
    return PlayerAttackParticle;
}(_Particle__WEBPACK_IMPORTED_MODULE_1__.Particle));



/***/ }),

/***/ "./src/game/Model/Position.ts":
/*!************************************!*\
  !*** ./src/game/Model/Position.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Position": () => (/* binding */ Position)
/* harmony export */ });
var Position = /** @class */ (function () {
    function Position(x, y, directionX, directionY) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
    }
    return Position;
}());



/***/ }),

/***/ "./src/game/Model/Score.ts":
/*!*********************************!*\
  !*** ./src/game/Model/Score.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Score": () => (/* binding */ Score)
/* harmony export */ });
/* harmony import */ var _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Collisions/CircleCollider */ "./src/game/Collisions/CircleCollider.ts");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ "./src/game/Model/Entity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Score = /** @class */ (function (_super) {
    __extends(Score, _super);
    function Score(viewModel) {
        var _this = _super.call(this, viewModel) || this;
        _this.collider = new _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__.CircleCollider(_this, 0);
        return _this;
    }
    return Score;
}(_Entity__WEBPACK_IMPORTED_MODULE_1__.Entity));



/***/ }),

/***/ "./src/game/Model/Stats.ts":
/*!*********************************!*\
  !*** ./src/game/Model/Stats.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stats": () => (/* binding */ Stats)
/* harmony export */ });
var Stats = /** @class */ (function () {
    function Stats(speed, health) {
        this.speed = speed;
        this.health = health;
        this.score = 0;
    }
    return Stats;
}());



/***/ }),

/***/ "./src/game/Observing/Observable.ts":
/*!******************************************!*\
  !*** ./src/game/Observing/Observable.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observable": () => (/* binding */ Observable)
/* harmony export */ });
var Observable = /** @class */ (function () {
    function Observable() {
        this.observers = [];
    }
    Observable.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    Observable.prototype.notifyObservers = function (params) {
        this.observers.forEach(function (observer) { return observer.onNotifyCallback(params); });
    };
    return Observable;
}());



/***/ }),

/***/ "./src/game/Observing/Observer.ts":
/*!****************************************!*\
  !*** ./src/game/Observing/Observer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observer": () => (/* binding */ Observer)
/* harmony export */ });
var Observer = /** @class */ (function () {
    function Observer() {
    }
    return Observer;
}());



/***/ }),

/***/ "./src/game/Store/index.ts":
/*!*********************************!*\
  !*** ./src/game/Store/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Collisions/CircleCollider */ "./src/game/Collisions/CircleCollider.ts");
/* harmony import */ var _Model_Bot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Model/Bot */ "./src/game/Model/Bot.ts");
/* harmony import */ var _Model_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/Player */ "./src/game/Model/Player.ts");
/* harmony import */ var _Model_Position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Model/Position */ "./src/game/Model/Position.ts");
/* harmony import */ var _Model_Score__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Model/Score */ "./src/game/Model/Score.ts");
/* harmony import */ var _View_BotView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../View/BotView */ "./src/game/View/BotView.ts");
/* harmony import */ var _View_PlayerScoreView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../View/PlayerScoreView */ "./src/game/View/PlayerScoreView.ts");
/* harmony import */ var _View_PlayerView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../View/PlayerView */ "./src/game/View/PlayerView.ts");
/* harmony import */ var _ViewModel_BotViewModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ViewModel/BotViewModel */ "./src/game/ViewModel/BotViewModel.ts");
/* harmony import */ var _ViewModel_PlayerScoreViewModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ViewModel/PlayerScoreViewModel */ "./src/game/ViewModel/PlayerScoreViewModel.ts");
/* harmony import */ var _ViewModel_PlayerViewModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ViewModel/PlayerViewModel */ "./src/game/ViewModel/PlayerViewModel.ts");











var Store = /** @class */ (function () {
    function Store() {
        this._entities = [];
        this._particles = [];
        this._playerEntity = new _Model_Player__WEBPACK_IMPORTED_MODULE_2__.Player(new _ViewModel_PlayerViewModel__WEBPACK_IMPORTED_MODULE_10__.PlayerViewModel(12, "#00f", new _Model_Position__WEBPACK_IMPORTED_MODULE_3__.Position(0, 0, 0, 0)));
    }
    Store.prototype.initializeDB = function (entityCount, viewsRenderContext) {
        var counter = entityCount;
        while (counter > 0) {
            var randomX_1 = viewsRenderContext.canvas.width * Math.random();
            var randomY_1 = viewsRenderContext.canvas.height * Math.random();
            var randomDirectionX_1 = -1 + 2 * Math.random();
            var randomDirectionY_1 = -1 + 2 * Math.random();
            var botEntity = new _Model_Bot__WEBPACK_IMPORTED_MODULE_1__.Bot(new _ViewModel_BotViewModel__WEBPACK_IMPORTED_MODULE_8__.BotViewModel(10, '#fff', new _Model_Position__WEBPACK_IMPORTED_MODULE_3__.Position(randomX_1, randomY_1, randomDirectionX_1, randomDirectionY_1)));
            botEntity.collider = new _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__.CircleCollider(botEntity, botEntity.viewModel.radius);
            var botEntityView = new _View_BotView__WEBPACK_IMPORTED_MODULE_5__.BotView(viewsRenderContext);
            botEntity.viewModel.registerObserver(botEntityView);
            this._entities.push(botEntity);
            counter -= 1;
        }
        var scoreEntity = new _Model_Score__WEBPACK_IMPORTED_MODULE_4__.Score(new _ViewModel_PlayerScoreViewModel__WEBPACK_IMPORTED_MODULE_9__.PlayerScoreViewModel(10, "#f00", new _Model_Position__WEBPACK_IMPORTED_MODULE_3__.Position(100, 100, 0, 0), 0));
        var scoreView = new _View_PlayerScoreView__WEBPACK_IMPORTED_MODULE_6__.PlayerScoreView(viewsRenderContext);
        scoreEntity.viewModel.registerObserver(scoreView);
        this._entities.push(scoreEntity);
        var randomX = viewsRenderContext.canvas.width * Math.random();
        var randomY = viewsRenderContext.canvas.height * Math.random();
        var randomDirectionX = -1 + 2 * Math.random();
        var randomDirectionY = -1 + 2 * Math.random();
        this._playerEntity.viewModel.position = new _Model_Position__WEBPACK_IMPORTED_MODULE_3__.Position(randomX, randomY, randomDirectionX, randomDirectionY);
        this._playerEntity.collider = new _Collisions_CircleCollider__WEBPACK_IMPORTED_MODULE_0__.CircleCollider(this._playerEntity, this._playerEntity.viewModel.radius);
        this._playerEntity.viewModel.registerObserver(new _View_PlayerView__WEBPACK_IMPORTED_MODULE_7__.PlayerView(viewsRenderContext));
    };
    Object.defineProperty(Store.prototype, "entities", {
        get: function () {
            return this._entities;
        },
        set: function (value) {
            this._entities = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "playerEntity", {
        get: function () {
            return this._playerEntity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "particles", {
        get: function () {
            return this._particles;
        },
        set: function (value) {
            this._particles = value;
        },
        enumerable: false,
        configurable: true
    });
    Store.prototype.addParticleEntity = function (particle, particleView) {
        // particle.registerObserver(particleView)
        this._entities.push(particle);
    };
    Store.prototype.deleteParticle = function (p) {
        this._entities = this.entities.filter(function (particle) { return particle === p; });
    };
    return Store;
}());
var store = new Store();



/***/ }),

/***/ "./src/game/Utils/index.ts":
/*!*********************************!*\
  !*** ./src/game/Utils/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distanceBetween": () => (/* binding */ distanceBetween)
/* harmony export */ });
var distanceBetween = function (p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
};


/***/ }),

/***/ "./src/game/ViewModel/BotDestructionViewModel.ts":
/*!*******************************************************!*\
  !*** ./src/game/ViewModel/BotDestructionViewModel.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BotDestructionViewModel": () => (/* binding */ BotDestructionViewModel)
/* harmony export */ });
/* harmony import */ var _ViewMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewMode */ "./src/game/ViewModel/ViewMode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BotDestructionViewModel = /** @class */ (function (_super) {
    __extends(BotDestructionViewModel, _super);
    function BotDestructionViewModel(radius, color, position) {
        var _this = _super.call(this, radius, color, position) || this;
        _this._angle = 0;
        _this._radius = radius;
        _this._color = color;
        _this._position = position;
        _this._angle = Math.random() * 2 * Math.PI;
        _this.notifyObservers(_this);
        return _this;
    }
    Object.defineProperty(BotDestructionViewModel.prototype, "angle", {
        get: function () {
            return this._angle;
        },
        enumerable: false,
        configurable: true
    });
    return BotDestructionViewModel;
}(_ViewMode__WEBPACK_IMPORTED_MODULE_0__.ViewModel));



/***/ }),

/***/ "./src/game/ViewModel/BotViewModel.ts":
/*!********************************************!*\
  !*** ./src/game/ViewModel/BotViewModel.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BotViewModel": () => (/* binding */ BotViewModel)
/* harmony export */ });
/* harmony import */ var _ViewMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewMode */ "./src/game/ViewModel/ViewMode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BotViewModel = /** @class */ (function (_super) {
    __extends(BotViewModel, _super);
    function BotViewModel(radius, color, position) {
        var _this = _super.call(this, radius, color, position) || this;
        _this._radius = radius;
        _this._color = color;
        _this._position = position;
        _this.notifyObservers(_this);
        return _this;
    }
    return BotViewModel;
}(_ViewMode__WEBPACK_IMPORTED_MODULE_0__.ViewModel));



/***/ }),

/***/ "./src/game/ViewModel/PlayerAttackViewModel.ts":
/*!*****************************************************!*\
  !*** ./src/game/ViewModel/PlayerAttackViewModel.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerAttackViewModel": () => (/* binding */ PlayerAttackViewModel)
/* harmony export */ });
/* harmony import */ var _ViewMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewMode */ "./src/game/ViewModel/ViewMode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PlayerAttackViewModel = /** @class */ (function (_super) {
    __extends(PlayerAttackViewModel, _super);
    function PlayerAttackViewModel(radius, color, position) {
        var _this = _super.call(this, radius, color, position) || this;
        _this._radius = radius;
        _this._color = color;
        _this._position = position;
        _this.notifyObservers(_this);
        return _this;
    }
    return PlayerAttackViewModel;
}(_ViewMode__WEBPACK_IMPORTED_MODULE_0__.ViewModel));



/***/ }),

/***/ "./src/game/ViewModel/PlayerScoreViewModel.ts":
/*!****************************************************!*\
  !*** ./src/game/ViewModel/PlayerScoreViewModel.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerScoreViewModel": () => (/* binding */ PlayerScoreViewModel)
/* harmony export */ });
/* harmony import */ var _ViewMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewMode */ "./src/game/ViewModel/ViewMode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PlayerScoreViewModel = /** @class */ (function (_super) {
    __extends(PlayerScoreViewModel, _super);
    function PlayerScoreViewModel(radius, color, position, scoreValue) {
        var _this = _super.call(this, radius, color, position) || this;
        _this._radius = radius;
        _this._color = color;
        _this._position = position;
        _this._scoreValue = scoreValue;
        _this.notifyObservers(_this);
        return _this;
    }
    Object.defineProperty(PlayerScoreViewModel.prototype, "scoreValue", {
        get: function () {
            return this._scoreValue;
        },
        set: function (value) {
            this._scoreValue = value;
            this.notifyObservers(this);
        },
        enumerable: false,
        configurable: true
    });
    return PlayerScoreViewModel;
}(_ViewMode__WEBPACK_IMPORTED_MODULE_0__.ViewModel));



/***/ }),

/***/ "./src/game/ViewModel/PlayerViewModel.ts":
/*!***********************************************!*\
  !*** ./src/game/ViewModel/PlayerViewModel.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerViewModel": () => (/* binding */ PlayerViewModel)
/* harmony export */ });
/* harmony import */ var _ViewMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewMode */ "./src/game/ViewModel/ViewMode.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PlayerViewModel = /** @class */ (function (_super) {
    __extends(PlayerViewModel, _super);
    function PlayerViewModel(radius, color, position) {
        var _this = _super.call(this, radius, color, position) || this;
        _this._radius = radius;
        _this._color = color;
        _this._position = position;
        _this.notifyObservers(_this);
        return _this;
    }
    return PlayerViewModel;
}(_ViewMode__WEBPACK_IMPORTED_MODULE_0__.ViewModel));



/***/ }),

/***/ "./src/game/ViewModel/ViewMode.ts":
/*!****************************************!*\
  !*** ./src/game/ViewModel/ViewMode.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewModel": () => (/* binding */ ViewModel)
/* harmony export */ });
/* harmony import */ var _Observing_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observing/Observable */ "./src/game/Observing/Observable.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ViewModel = /** @class */ (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel(radius, color, position) {
        var _this = _super.call(this) || this;
        _this._radius = 30;
        _this._opacity = 1;
        _this._color = "#00f";
        _this._radius = radius;
        _this._color = color;
        _this._position = position;
        _this.notifyObservers(_this);
        return _this;
    }
    Object.defineProperty(ViewModel.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
            this.notifyObservers(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewModel.prototype, "opacity", {
        get: function () {
            return this._opacity;
        },
        set: function (value) {
            this._opacity = value;
            this.notifyObservers(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewModel.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
            this.notifyObservers(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewModel.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (value) {
            this._position = value;
            this.notifyObservers(this);
        },
        enumerable: false,
        configurable: true
    });
    return ViewModel;
}(_Observing_Observable__WEBPACK_IMPORTED_MODULE_0__.Observable));



/***/ }),

/***/ "./src/game/View/BotDestructionView.ts":
/*!*********************************************!*\
  !*** ./src/game/View/BotDestructionView.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BotDestructionView": () => (/* binding */ BotDestructionView)
/* harmony export */ });
/* harmony import */ var _EntityView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntityView */ "./src/game/View/EntityView.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BotDestructionView = /** @class */ (function (_super) {
    __extends(BotDestructionView, _super);
    function BotDestructionView(ctx) {
        return _super.call(this, ctx) || this;
    }
    BotDestructionView.prototype.draw = function (params) {
        var vm = params;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.translate(vm.position.x, vm.position.y);
        this.ctx.rotate(vm.angle);
        this.ctx.fillStyle = vm.color;
        this.ctx.globalAlpha = vm.opacity;
        this.ctx.moveTo(0, 0 - vm.radius);
        this.ctx.lineTo(0 + vm.radius, 0 - vm.radius / 2);
        this.ctx.lineTo(0 - vm.radius / 2, 0 + vm.radius);
        this.ctx.lineTo(0 - vm.radius, 0 - vm.radius / 6);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.restore();
    };
    return BotDestructionView;
}(_EntityView__WEBPACK_IMPORTED_MODULE_0__.EntityView));



/***/ }),

/***/ "./src/game/View/BotView.ts":
/*!**********************************!*\
  !*** ./src/game/View/BotView.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BotView": () => (/* binding */ BotView)
/* harmony export */ });
/* harmony import */ var _EntityView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntityView */ "./src/game/View/EntityView.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BotView = /** @class */ (function (_super) {
    __extends(BotView, _super);
    function BotView(ctx) {
        return _super.call(this, ctx) || this;
    }
    BotView.prototype.draw = function (params) {
        var vm = params;
        this.ctx.beginPath();
        this.ctx.fillStyle = vm.color;
        this.ctx.arc(vm.position.x, vm.position.y, vm.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    };
    return BotView;
}(_EntityView__WEBPACK_IMPORTED_MODULE_0__.EntityView));



/***/ }),

/***/ "./src/game/View/EntityView.ts":
/*!*************************************!*\
  !*** ./src/game/View/EntityView.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityView": () => (/* binding */ EntityView)
/* harmony export */ });
/* harmony import */ var _Observing_Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observing/Observer */ "./src/game/Observing/Observer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var EntityView = /** @class */ (function (_super) {
    __extends(EntityView, _super);
    function EntityView(ctx) {
        var _this = _super.call(this) || this;
        _this.ctx = ctx;
        return _this;
    }
    EntityView.prototype.onNotifyCallback = function (params) {
        this.draw(params);
    };
    return EntityView;
}(_Observing_Observer__WEBPACK_IMPORTED_MODULE_0__.Observer));



/***/ }),

/***/ "./src/game/View/PlayerAttackParticleView.ts":
/*!***************************************************!*\
  !*** ./src/game/View/PlayerAttackParticleView.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerAttackParticleView": () => (/* binding */ PlayerAttackParticleView)
/* harmony export */ });
/* harmony import */ var _EntityView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntityView */ "./src/game/View/EntityView.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PlayerAttackParticleView = /** @class */ (function (_super) {
    __extends(PlayerAttackParticleView, _super);
    function PlayerAttackParticleView(ctx) {
        return _super.call(this, ctx) || this;
    }
    PlayerAttackParticleView.prototype.draw = function (params) {
        var vm = params;
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#000';
        this.ctx.arc(vm.position.x, vm.position.y, vm.radius - 6 < 0 ? 0 : vm.radius - 6, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#001';
        this.ctx.arc(vm.position.x, vm.position.y, vm.radius - 5 < 0 ? 0 : vm.radius - 5, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#003';
        this.ctx.arc(vm.position.x, vm.position.y, vm.radius - 4 < 0 ? 0 : vm.radius - 4, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#005';
        this.ctx.arc(vm.position.x, vm.position.y, vm.radius - 3 < 0 ? 0 : vm.radius - 3, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#007';
        this.ctx.arc(vm.position.x, vm.position.y, vm.radius - 2 < 0 ? 0 : vm.radius - 2, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#00a';
        this.ctx.arc(vm.position.x, vm.position.y, vm.radius - 1 < 0 ? 0 : vm.radius - 1, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.strokeStyle = vm.color;
        this.ctx.arc(vm.position.x, vm.position.y, vm.radius, 0, 2 * Math.PI);
        this.ctx.stroke();
    };
    return PlayerAttackParticleView;
}(_EntityView__WEBPACK_IMPORTED_MODULE_0__.EntityView));



/***/ }),

/***/ "./src/game/View/PlayerScoreView.ts":
/*!******************************************!*\
  !*** ./src/game/View/PlayerScoreView.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerScoreView": () => (/* binding */ PlayerScoreView)
/* harmony export */ });
/* harmony import */ var _EntityView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntityView */ "./src/game/View/EntityView.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PlayerScoreView = /** @class */ (function (_super) {
    __extends(PlayerScoreView, _super);
    function PlayerScoreView(ctx) {
        return _super.call(this, ctx) || this;
    }
    PlayerScoreView.prototype.draw = function (params) {
        var vm = params;
        this.ctx.font = '30px Palette Mosaic';
        this.ctx.fillStyle = vm.color;
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('Score: ' + vm.scoreValue, 100, 50);
    };
    return PlayerScoreView;
}(_EntityView__WEBPACK_IMPORTED_MODULE_0__.EntityView));



/***/ }),

/***/ "./src/game/View/PlayerView.ts":
/*!*************************************!*\
  !*** ./src/game/View/PlayerView.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerView": () => (/* binding */ PlayerView)
/* harmony export */ });
/* harmony import */ var _EntityView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntityView */ "./src/game/View/EntityView.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PlayerView = /** @class */ (function (_super) {
    __extends(PlayerView, _super);
    function PlayerView(ctx) {
        return _super.call(this, ctx) || this;
    }
    PlayerView.prototype.draw = function (params) {
        var vm = params;
        if (vm.position.directionY !== 0 || vm.position.directionX !== 0) {
            this.ctx.beginPath();
            this.ctx.fillStyle = "#55f";
            this.ctx.arc(vm.position.x - 14 * vm.position.directionX, vm.position.y - 14 * vm.position.directionY, vm.radius - 8, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.fillStyle = "#66f";
            this.ctx.arc(vm.position.x - 12 * vm.position.directionX, vm.position.y - 12 * vm.position.directionY, vm.radius - 6, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.fillStyle = "#77f";
            this.ctx.arc(vm.position.x - 8 * vm.position.directionX, vm.position.y - 8 * vm.position.directionY, vm.radius - 4, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.fillStyle = "#88f";
            this.ctx.arc(vm.position.x - 5 * vm.position.directionX, vm.position.y - 5 * vm.position.directionY, vm.radius - 2, 0, 2 * Math.PI);
            this.ctx.fill();
        }
        this.ctx.beginPath();
        this.ctx.fillStyle = vm.color;
        this.ctx.arc(vm.position.x, vm.position.y, vm.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    };
    return PlayerView;
}(_EntityView__WEBPACK_IMPORTED_MODULE_0__.EntityView));



/***/ }),

/***/ "./src/game/main.ts":
/*!**************************!*\
  !*** ./src/game/main.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameStart": () => (/* binding */ gameStart)
/* harmony export */ });
/* harmony import */ var _pageWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pageWrapper */ "./src/pageWrapper.ts");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ "./src/game/Store/index.ts");
/* harmony import */ var _Controller_BotController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller/BotController */ "./src/game/Controller/BotController.ts");
/* harmony import */ var _Controller_PlayerController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controller/PlayerController */ "./src/game/Controller/PlayerController.ts");
/* harmony import */ var _Controller_ParticleController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Controller/ParticleController */ "./src/game/Controller/ParticleController.ts");
/* harmony import */ var _Controller_SpawnController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Controller/SpawnController */ "./src/game/Controller/SpawnController.ts");






var c_ctx = (0,_pageWrapper__WEBPACK_IMPORTED_MODULE_0__.getCanvasContext)();
var botController = new _Controller_BotController__WEBPACK_IMPORTED_MODULE_2__.BotController(null);
var playerController = new _Controller_PlayerController__WEBPACK_IMPORTED_MODULE_3__.PlayerController(null);
var particleController = new _Controller_ParticleController__WEBPACK_IMPORTED_MODULE_4__.ParticleController(c_ctx);
var spawnController = new _Controller_SpawnController__WEBPACK_IMPORTED_MODULE_5__.SpawnController(c_ctx);
var ENTITY_TO_GENERATE = 30;
var gameStart = function () {
    _Store__WEBPACK_IMPORTED_MODULE_1__.store.initializeDB(ENTITY_TO_GENERATE, (0,_pageWrapper__WEBPACK_IMPORTED_MODULE_0__.getCanvasContext)());
    requestAnimationFrame(main);
};
var main = function () {
    c_ctx.clearRect(0, 0, c_ctx.canvas.width, c_ctx.canvas.height);
    _Store__WEBPACK_IMPORTED_MODULE_1__.store.entities.forEach(function (entity) {
        botController.entity = entity;
        botController.performAction();
    });
    particleController.performAction();
    spawnController.performAction();
    playerController.entity = _Store__WEBPACK_IMPORTED_MODULE_1__.store.playerEntity;
    playerController.performAction();
    requestAnimationFrame(main);
};



/***/ }),

/***/ "./src/pageWrapper.ts":
/*!****************************!*\
  !*** ./src/pageWrapper.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initCanvas": () => (/* binding */ initCanvas),
/* harmony export */   "getCanvasContext": () => (/* binding */ getCanvasContext),
/* harmony export */   "resetPageStyles": () => (/* binding */ resetPageStyles)
/* harmony export */ });
var c_context = document.getElementById("c_game").getContext("2d");
var initCanvas = function () {
    c_context.canvas.width = window.innerWidth;
    c_context.canvas.height = window.innerHeight;
    c_context.canvas.style.backgroundColor = "#000";
};
var getCanvasContext = function () {
    return c_context;
};
window.onresize = function () {
    getCanvasContext().canvas.width = window.innerWidth;
    getCanvasContext().canvas.height = window.innerHeight;
};
var resetPageStyles = function () {
    document.body.style.padding = "0";
    document.body.style.margin = "0";
    document.body.style.height = "100vh";
    document.body.style.width = "100vw";
    document.body.style.overflow = "hidden";
    c_context.canvas.style.width = "100%";
    c_context.canvas.style.height = "100%";
};



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
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageWrapper */ "./src/pageWrapper.ts");
/* harmony import */ var _game_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/main */ "./src/game/main.ts");



(0,_pageWrapper__WEBPACK_IMPORTED_MODULE_1__.resetPageStyles)();
(0,_pageWrapper__WEBPACK_IMPORTED_MODULE_1__.initCanvas)();
(0,_game_main__WEBPACK_IMPORTED_MODULE_2__.gameStart)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90c212Yy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RzbXZjLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RzbXZjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RzbXZjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RzbXZjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL0FuaW1hdGlvbi9BbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9BbmltYXRpb24vQm90RGVzY3RydXRpb25QYXJ0aWNsZUFuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL0FuaW1hdGlvbi9QbGF5ZXJBdHRhY2tBbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9BbmltYXRpb24vVGltaW5nRnVuY3Rpb25zLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvQ29sbGlzaW9ucy9DaXJjbGVDb2xsaWRlci50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL0NvbGxpc2lvbnMvQ29sbGlkZXIudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9Db250cm9sbGVyL0JvdENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9Db250cm9sbGVyL0VudGl0eUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9Db250cm9sbGVyL1BhcnRpY2xlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL0NvbnRyb2xsZXIvUGxheWVyQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL0NvbnRyb2xsZXIvU3Bhd25Db250cm9sbGVyLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvRGVjb3JhdG9ycy9JbnB1dGFibGVDb250cm9sbGVyLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvRW51bS9FbnRpdHlTdGF0ZS50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL01vZGVsL0JvdC50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL01vZGVsL0JvdERlc3RydWN0aW9uUGFydGljbGUudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9Nb2RlbC9FbnRpdHkudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9Nb2RlbC9QYXJ0aWNsZS50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL01vZGVsL1BsYXllci50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL01vZGVsL1BsYXllckF0dGFja1BhcnRpY2xlLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvTW9kZWwvUG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9Nb2RlbC9TY29yZS50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL01vZGVsL1N0YXRzLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvT2JzZXJ2aW5nL09ic2VydmFibGUudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9PYnNlcnZpbmcvT2JzZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9TdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL1V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvVmlld01vZGVsL0JvdERlc3RydWN0aW9uVmlld01vZGVsLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvVmlld01vZGVsL0JvdFZpZXdNb2RlbC50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL1ZpZXdNb2RlbC9QbGF5ZXJBdHRhY2tWaWV3TW9kZWwudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9WaWV3TW9kZWwvUGxheWVyU2NvcmVWaWV3TW9kZWwudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9WaWV3TW9kZWwvUGxheWVyVmlld01vZGVsLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvVmlld01vZGVsL1ZpZXdNb2RlLnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvVmlldy9Cb3REZXN0cnVjdGlvblZpZXcudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9WaWV3L0JvdFZpZXcudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9WaWV3L0VudGl0eVZpZXcudHMiLCJ3ZWJwYWNrOi8vdHNtdmMvLi9zcmMvZ2FtZS9WaWV3L1BsYXllckF0dGFja1BhcnRpY2xlVmlldy50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9nYW1lL1ZpZXcvUGxheWVyU2NvcmVWaWV3LnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvVmlldy9QbGF5ZXJWaWV3LnRzIiwid2VicGFjazovL3RzbXZjLy4vc3JjL2dhbWUvbWFpbi50cyIsIndlYnBhY2s6Ly90c212Yy8uL3NyYy9wYWdlV3JhcHBlci50cyIsIndlYnBhY2s6Ly90c212Yy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90c212Yy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90c212Yy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHNtdmMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90c212Yy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RzbXZjLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YsNEhBQTRIO0FBQzVIO0FBQ0EscURBQXFELGtFQUFrRTtBQUN2SDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pD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QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3JDLENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FDZCxDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7UUFFakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQ1IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2IsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNyQyxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQ2QsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQ1IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2IsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNyQyxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQ2QsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQ1IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2IsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNyQyxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQ2QsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQ1IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2IsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNyQyxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQ2QsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUNSLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNiLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNiLEVBQUUsQ0FBQyxNQUFNLEVBQ1QsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUNkLENBQUM7UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDTCwrQkFBQztBQUFELENBQUMsQ0FyRnNDLG1EQUFVLEdBcUZoRDtBQUVtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGTTtBQUUxQztJQUE4QixtQ0FBVTtJQUNwQyx5QkFBWSxHQUE2QjtlQUNyQyxrQkFBTSxHQUFHLENBQUM7SUFDZCxDQUFDO0lBRUQsOEJBQUksR0FBSixVQUFLLE1BQWlCO1FBQ2xCLElBQU0sRUFBRSxHQUF5QixNQUFNLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQ0FaNkIsbURBQVUsR0FZdkM7QUFFMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQmU7QUFFMUM7SUFBeUIsOEJBQVU7SUFDL0Isb0JBQVksR0FBNkI7ZUFDckMsa0JBQU0sR0FBRyxDQUFDO0lBQ2QsQ0FBQztJQUVELHlCQUFJLEdBQUosVUFBSyxNQUFpQjtRQUNsQixJQUFNLEVBQUUsR0FBb0IsTUFBTSxDQUFDO1FBRW5DLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtZQUM5RCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FDUixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQzNDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFDM0MsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ2IsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUNkLENBQUM7WUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUNSLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFDM0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUMzQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDYixDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQ2QsQ0FBQztZQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQ1IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUMxQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQzFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNiLENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FDZCxDQUFDO1lBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FDUixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQzFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFDMUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ2IsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUNkLENBQUM7WUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVB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TSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0lBQ3RDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDM0MsQ0FBQyxDQUFDO0FBQ3VEOzs7Ozs7O1VDMUJ6RDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNOb0I7QUFDdUM7QUFDcEI7QUFFdkMsNkRBQWUsRUFBRTtBQUNqQix3REFBVSxFQUFFO0FBRVoscURBQVMsRUFBRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhbGV0dGUrTW9zYWljJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuLi9Nb2RlbC9Qb3NpdGlvblwiO1xyXG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tIFwiLi4vVmlld01vZGVsL1ZpZXdNb2RlXCI7XHJcbmltcG9ydCB7IFRpbWluZ0Z1bmN0aW9ucyB9IGZyb20gXCIuL1RpbWluZ0Z1bmN0aW9uc1wiO1xyXG5cclxuYWJzdHJhY3QgY2xhc3MgRW50aXR5QW5pbWF0aW9uIHtcclxuICAgIHN0YXJ0czogbnVtYmVyO1xyXG4gICAgZW5kczogbnVtYmVyO1xyXG4gICAgY3VycmVudDogbnVtYmVyO1xyXG4gICAgdGltaW5nRnVuY3Rpb246IFRpbWluZ0Z1bmN0aW9ucy5UaW1pbmdGdW5jdGlvbjtcclxuXHJcbiAgICBzdGFydFZpZXdNb2RlbDogVmlld01vZGVsXHJcbiAgICBzY2FsZVBhcmFtczogbnVtYmVyXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGVuZHM6IG51bWJlciwgdGltaW5nRnVuY3Rpb246IFRpbWluZ0Z1bmN0aW9ucy5UaW1pbmdGdW5jdGlvbiwgc2NhbGVQYXJhbXM6IG51bWJlciA9IDEpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0cyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuc3RhcnRzICsgMTtcclxuICAgICAgICB0aGlzLmVuZHMgPSBlbmRzO1xyXG4gICAgICAgIHRoaXMudGltaW5nRnVuY3Rpb24gPSB0aW1pbmdGdW5jdGlvbjtcclxuICAgICAgICB0aGlzLnNjYWxlUGFyYW1zID0gc2NhbGVQYXJhbXNcclxuICAgIH1cclxuXHJcbiAgICBwcm9ncmVzcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5jdXJyZW50IC0gdGhpcy5zdGFydHMpIC8gKHRoaXMuZW5kcyAtIHRoaXMuc3RhcnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBhbmltYXRlKGN1cnJlbnRWaWV3TW9kZWw6IFZpZXdNb2RlbCk6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IHsgRW50aXR5QW5pbWF0aW9uIH07XHJcbiIsImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4uL01vZGVsL1Bvc2l0aW9uXCI7XHJcbmltcG9ydCB7IEJvdERlc3RydWN0aW9uVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9Cb3REZXN0cnVjdGlvblZpZXdNb2RlbFwiO1xyXG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tIFwiLi4vVmlld01vZGVsL1ZpZXdNb2RlXCI7XHJcbmltcG9ydCB7IEVudGl0eUFuaW1hdGlvbiB9IGZyb20gXCIuL0FuaW1hdGlvblwiO1xyXG5cclxuY2xhc3MgQm90RGVzdHJ1Y3Rpb25QYXJ0aWNsZUFuaW1hdGlvbiBleHRlbmRzIEVudGl0eUFuaW1hdGlvbiB7XHJcbiAgICBhbmltYXRlKGN1cnJlbnRWaWV3TW9kZWw6IFZpZXdNb2RlbCk6IGFueSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0Vmlld01vZGVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRWaWV3TW9kZWwgPSBuZXcgQm90RGVzdHJ1Y3Rpb25WaWV3TW9kZWwoXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Vmlld01vZGVsLnJhZGl1cyxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRWaWV3TW9kZWwuY29sb3IsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Vmlld01vZGVsLnBvc2l0aW9uXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gbmV3IFBvc2l0aW9uKFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Vmlld01vZGVsLnBvc2l0aW9uLmRpcmVjdGlvblgsXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRWaWV3TW9kZWwucG9zaXRpb24uZGlyZWN0aW9uWVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIG5ld1Bvc2l0aW9uLnggPVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Vmlld01vZGVsLnBvc2l0aW9uLnggK1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Vmlld01vZGVsLnBvc2l0aW9uLmRpcmVjdGlvblggKlxyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1pbmdGdW5jdGlvbih0aGlzLnByb2dyZXNzKCkpICpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NhbGVQYXJhbXM7XHJcbiAgICAgICAgbmV3UG9zaXRpb24ueSA9XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRWaWV3TW9kZWwucG9zaXRpb24ueSArXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRWaWV3TW9kZWwucG9zaXRpb24uZGlyZWN0aW9uWSAqXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWluZ0Z1bmN0aW9uKHRoaXMucHJvZ3Jlc3MoKSkgKlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZVBhcmFtcztcclxuICAgICAgICBjb25zdCBvcGFjaXR5ID1cclxuICAgICAgICAgICAgKDEgLSB0aGlzLnByb2dyZXNzKCkpICpcclxuICAgICAgICAgICAgdGhpcy5zdGFydFZpZXdNb2RlbC5vcGFjaXR5O1xyXG4gICAgICAgIHJldHVybiB7IG5ld1Bvc2l0aW9uLCBvcGFjaXR5OiBvcGFjaXR5IDwgMCA/IDAgOiBvcGFjaXR5IH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJvdERlc3RydWN0aW9uUGFydGljbGVBbmltYXRpb24gfTtcclxuIiwiaW1wb3J0IHsgUGxheWVyQXR0YWNrVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9QbGF5ZXJBdHRhY2tWaWV3TW9kZWxcIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiO1xyXG5pbXBvcnQgeyBFbnRpdHlBbmltYXRpb24gfSBmcm9tIFwiLi9BbmltYXRpb25cIjtcclxuXHJcbmNsYXNzIFBsYXllckF0dGFja0FuaW1hdGlvbiBleHRlbmRzIEVudGl0eUFuaW1hdGlvbiB7XHJcbiAgICBhbmltYXRlKGN1cnJlbnRWaWV3TW9kZWw6IFZpZXdNb2RlbCk6IGFueSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0Vmlld01vZGVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRWaWV3TW9kZWwgPSBuZXcgUGxheWVyQXR0YWNrVmlld01vZGVsKFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFZpZXdNb2RlbC5yYWRpdXMsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Vmlld01vZGVsLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFZpZXdNb2RlbC5wb3NpdGlvblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBjb25zdCByYWRpdXMgPVxyXG4gICAgICAgICAgICB0aGlzLnNjYWxlUGFyYW1zICpcclxuICAgICAgICAgICAgKDxQbGF5ZXJBdHRhY2tWaWV3TW9kZWw+dGhpcy5zdGFydFZpZXdNb2RlbCkucmFkaXVzICpcclxuICAgICAgICAgICAgdGhpcy50aW1pbmdGdW5jdGlvbih0aGlzLnByb2dyZXNzKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmFkaXVzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQbGF5ZXJBdHRhY2tBbmltYXRpb24gfTtcclxuIiwibmFtZXNwYWNlIFRpbWluZ0Z1bmN0aW9ucyB7XHJcbiAgICBleHBvcnQgdHlwZSBUaW1pbmdGdW5jdGlvbiA9IChwcm9ncmVzczogbnVtYmVyKSA9PiBudW1iZXJcclxuXHJcbiAgICBleHBvcnQgY29uc3QgcXVhZDogVGltaW5nRnVuY3Rpb24gPSAocHJvZ3Jlc3M6IG51bWJlcik6IG51bWJlciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCAyKVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjb25zdCBib3c6IFRpbWluZ0Z1bmN0aW9uID0gKHByb2dyZXNzOiBudW1iZXIsIGVsYXN0aWM6IG51bWJlciA9IDAuNSk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCAyKSAqICgoZWxhc3RpYyArIDEpICogcHJvZ3Jlc3MgLSBlbGFzdGljKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBUaW1pbmdGdW5jdGlvbnMgfSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuLi9Nb2RlbC9FbnRpdHlcIlxyXG5pbXBvcnQgeyBkaXN0YW5jZUJldHdlZW4gfSBmcm9tIFwiLi4vVXRpbHNcIlxyXG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tIFwiLi4vVmlld01vZGVsL1ZpZXdNb2RlXCJcclxuaW1wb3J0IHsgQ29sbGlkZXIgfSBmcm9tIFwiLi9Db2xsaWRlclwiXHJcblxyXG5jbGFzcyBDaXJjbGVDb2xsaWRlciBleHRlbmRzIENvbGxpZGVyIHtcclxuXHJcbiAgICBwcml2YXRlIHJhZGl1czogbnVtYmVyID0gMFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVudGl0eTogRW50aXR5LCByYWRpdXM6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKGVudGl0eSlcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1c1xyXG4gICAgICAgIHRoaXMuZW50aXR5LnZpZXdNb2RlbC5yZWdpc3Rlck9ic2VydmVyKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlkZWQodGFyZ2V0OiBDb2xsaWRlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBDaXJjbGVDb2xsaWRlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZGlzdGFuY2VCZXR3ZWVuKHRoaXMuZW50aXR5LnZpZXdNb2RlbC5wb3NpdGlvbiwgdGFyZ2V0LmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24pIDw9ICh0YXJnZXQuZW50aXR5LnZpZXdNb2RlbC5yYWRpdXMgKyB0aGlzLnJhZGl1cylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgb25Ob3RpZnlDYWxsYmFjayhwYXJhbXM6IFZpZXdNb2RlbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gcGFyYW1zLnJhZGl1c1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgQ2lyY2xlQ29sbGlkZXIgfSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuLi9Nb2RlbC9FbnRpdHlcIjtcclxuaW1wb3J0IHsgT2JzZXJ2ZXIgfSBmcm9tIFwiLi4vT2JzZXJ2aW5nL09ic2VydmVyXCI7XHJcblxyXG5hYnN0cmFjdCBjbGFzcyBDb2xsaWRlciBleHRlbmRzIE9ic2VydmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGVudGl0eTogRW50aXR5KSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuZW50aXR5ID0gZW50aXR5XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZW50aXR5OiBFbnRpdHk7XHJcbiAgICBhYnN0cmFjdCBjb2xsaWRlZCh0YXJnZXQ6IENvbGxpZGVyKTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IHsgQ29sbGlkZXIgfSIsImltcG9ydCB7IGlucHV0YWJsZSB9IGZyb20gXCIuLi9EZWNvcmF0b3JzL0lucHV0YWJsZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgRW50aXR5U3RhdGUgfSBmcm9tIFwiLi4vRW51bS9FbnRpdHlTdGF0ZVwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi4vTW9kZWwvRW50aXR5XCI7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4uL01vZGVsL1Bvc2l0aW9uXCI7XHJcbmltcG9ydCB7IEVudGl0eUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9FbnRpdHlDb250cm9sbGVyXCI7XHJcblxyXG5AaW5wdXRhYmxlXHJcbmNsYXNzIEJvdENvbnRyb2xsZXIgZXh0ZW5kcyBFbnRpdHlDb250cm9sbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihib3RFbnRpdHk6IEVudGl0eSkge1xyXG4gICAgICAgIHN1cGVyKGJvdEVudGl0eSlcclxuICAgIH1cclxuXHJcbiAgICBwZXJmb3JtQWN0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5lbnRpdHkuc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBFbnRpdHlTdGF0ZS5JZGxlOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBiaW5kaW5nIHRoaXMuZW50aXR5IHBhcmFtIGNhdXNlIGluIGlzIG9ubHkgb25lIGNvbnRyb2xsZXIgYW5kIHRoaXMuZW50aXR5IGNoYW5nZXMgZXZlcnkgZnJhbWUgXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgoZW50aXR5OiBFbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkuc3RhdGUgPSBFbnRpdHlTdGF0ZS5Nb3ZpbmdcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pLmJpbmQodGhpcywgdGhpcy5lbnRpdHkpLCAxMDAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH0gYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEVudGl0eVN0YXRlLk1vdmluZzoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeDogbnVtYmVyID0gdGhpcy5lbnRpdHkudmlld01vZGVsLnBvc2l0aW9uLnhcclxuICAgICAgICAgICAgICAgIGNvbnN0IHk6IG51bWJlciA9IHRoaXMuZW50aXR5LnZpZXdNb2RlbC5wb3NpdGlvbi55XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24gPSBuZXcgUG9zaXRpb24oeCArIDEgKiB0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24uZGlyZWN0aW9uWCxcclxuICAgICAgICAgICAgICAgICAgICB5ICsgMSAqIHRoaXMuZW50aXR5LnZpZXdNb2RlbC5wb3NpdGlvbi5kaXJlY3Rpb25ZLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW50aXR5LnZpZXdNb2RlbC5wb3NpdGlvbi5kaXJlY3Rpb25YLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW50aXR5LnZpZXdNb2RlbC5wb3NpdGlvbi5kaXJlY3Rpb25ZKVxyXG4gICAgICAgICAgICB9IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnB1dEV2ZW50SGFuZGxlcihldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBCb3RDb250cm9sbGVyIH0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuLi9Nb2RlbC9FbnRpdHknXHJcbmFic3RyYWN0IGNsYXNzIEVudGl0eUNvbnRyb2xsZXIge1xyXG4gICAgcHJpdmF0ZSBfZW50aXR5OiBFbnRpdHlcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlOiBFbnRpdHkpIHtcclxuICAgICAgICB0aGlzLl9lbnRpdHkgPSBlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVudGl0eSgpOiBFbnRpdHkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZW50aXR5KHZhbHVlOiBFbnRpdHkpIHtcclxuICAgICAgICB0aGlzLl9lbnRpdHkgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IHBlcmZvcm1BY3Rpb24oKTogdm9pZDtcclxuICAgIGFic3RyYWN0IGlucHV0RXZlbnRIYW5kbGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IHsgRW50aXR5Q29udHJvbGxlciB9IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL01vZGVsL1BsYXllclwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJBdHRhY2tQYXJ0aWNsZSB9IGZyb20gXCIuLi9Nb2RlbC9QbGF5ZXJBdHRhY2tQYXJ0aWNsZVwiO1xyXG5pbXBvcnQgeyBFbnRpdHlDb250cm9sbGVyIH0gZnJvbSBcIi4vRW50aXR5Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9TdG9yZVwiO1xyXG5pbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vTW9kZWwvQm90XCI7XHJcbmltcG9ydCB7IEJvdERlc3RydWN0aW9uUGFydGljbGUgfSBmcm9tIFwiLi4vTW9kZWwvQm90RGVzdHJ1Y3Rpb25QYXJ0aWNsZVwiO1xyXG5pbXBvcnQgeyBCb3REZXN0cnVjdGlvblZpZXcgfSBmcm9tIFwiLi4vVmlldy9Cb3REZXN0cnVjdGlvblZpZXdcIjtcclxuaW1wb3J0IHsgQm90RGVzdHJ1Y3Rpb25WaWV3TW9kZWwgfSBmcm9tIFwiLi4vVmlld01vZGVsL0JvdERlc3RydWN0aW9uVmlld01vZGVsXCI7XHJcbmltcG9ydCB7IEJvdERlc3RydWN0aW9uUGFydGljbGVBbmltYXRpb24gfSBmcm9tIFwiLi4vQW5pbWF0aW9uL0JvdERlc2N0cnV0aW9uUGFydGljbGVBbmltYXRpb25cIjtcclxuaW1wb3J0IHsgVGltaW5nRnVuY3Rpb25zIH0gZnJvbSBcIi4uL0FuaW1hdGlvbi9UaW1pbmdGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgUGxheWVyU2NvcmVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vVmlld01vZGVsL1BsYXllclNjb3JlVmlld01vZGVsXCI7XHJcbmltcG9ydCB7IFNjb3JlIH0gZnJvbSBcIi4uL01vZGVsL1Njb3JlXCI7XHJcblxyXG5jbGFzcyBQYXJ0aWNsZUNvbnRyb2xsZXIgZXh0ZW5kcyBFbnRpdHlDb250cm9sbGVyIHtcclxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBzdXBlcihudWxsKTtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIH1cclxuXHJcbiAgICBwZXJmb3JtQWN0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGRlbGV0ZSBleHBpcmVkIHBhcnRpY2xlc1xyXG4gICAgICAgIHN0b3JlLnBhcnRpY2xlcyA9IHN0b3JlLnBhcnRpY2xlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgIChwYXJ0aWNsZSkgPT4gISFwYXJ0aWNsZS5hbmltYXRpb25cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyB0cmFuc2Zvcm0gcGFydGljbGVzXHJcbiAgICAgICAgc3RvcmUucGFydGljbGVzLmZvckVhY2goKHBhcnRpY2xlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYXJ0aWNsZS5hbmltYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJ0aWNsZSBpbnN0YW5jZW9mIFBsYXllckF0dGFja1BhcnRpY2xlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGUudmlld01vZGVsLnJhZGl1cyA9IHBhcnRpY2xlLmFuaW1hdGlvbi5hbmltYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZS52aWV3TW9kZWxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwYXJ0aWNsZSBpbnN0YW5jZW9mIEJvdERlc3RydWN0aW9uUGFydGljbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25QYXJhbXMgPSBwYXJ0aWNsZS5hbmltYXRpb24uYW5pbWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGUudmlld01vZGVsXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZS52aWV3TW9kZWwucG9zaXRpb24gPSBhbmltYXRpb25QYXJhbXMubmV3UG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGUudmlld01vZGVsLm9wYWNpdHkgPSBhbmltYXRpb25QYXJhbXMub3BhY2l0eTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwYXJ0aWNsZS5hbmltYXRpb24ucHJvZ3Jlc3MoKSA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGUuYW5pbWF0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjaGVjayBjb2xsaXNpb25zXHJcbiAgICAgICAgc3RvcmUucGFydGljbGVzLmZvckVhY2goKHBhcnRpY2xlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0b3JlLmVudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnRpY2xlLmNvbGxpZGVyLmNvbGxpZGVkKGVudGl0eS5jb2xsaWRlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFydGljbGUgaW5zdGFuY2VvZiBQbGF5ZXJBdHRhY2tQYXJ0aWNsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50aXR5IGluc3RhbmNlb2YgUGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudGl0eSBpbnN0YW5jZW9mIEJvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgQk9UX0RFU1RSVUNUSU9OX1BBUlRJQ0xFX0NPVU5UID0gNztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPCBCT1RfREVTVFJVQ1RJT05fUEFSVElDTEVfQ09VTlQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5kb21EaXJlY3Rpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21EaXJlY3Rpb24uZGlyZWN0aW9uWCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0xICsgMiAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tRGlyZWN0aW9uLmRpcmVjdGlvblkgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMSArIDIgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvdERlc3RydWN0aW9uUGFydGljbGUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQm90RGVzdHJ1Y3Rpb25QYXJ0aWNsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBCb3REZXN0cnVjdGlvblZpZXdNb2RlbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbURpcmVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3REZXN0cnVjdGlvblBhcnRpY2xlLmFuaW1hdGlvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBCb3REZXN0cnVjdGlvblBhcnRpY2xlQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyZm9ybWFuY2Uubm93KCkgKyAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaW1pbmdGdW5jdGlvbnMucXVhZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQ1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdERlc3RydWN0aW9uUGFydGljbGUudmlld01vZGVsLnJlZ2lzdGVyT2JzZXJ2ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBCb3REZXN0cnVjdGlvblZpZXcodGhpcy5jdHgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUucGFydGljbGVzLnB1c2goYm90RGVzdHJ1Y3Rpb25QYXJ0aWNsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5lbnRpdGllcyA9IHN0b3JlLmVudGl0aWVzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodEVudGl0eSkgPT4gdEVudGl0eSAhPT0gZW50aXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8UGxheWVyU2NvcmVWaWV3TW9kZWw+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLmVudGl0aWVzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRFbnRpdHkpID0+IHRFbnRpdHkgaW5zdGFuY2VvZiBTY29yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClbMF0udmlld01vZGVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKS5zY29yZVZhbHVlICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0RXZlbnRIYW5kbGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7fVxyXG59XHJcblxyXG5leHBvcnQgeyBQYXJ0aWNsZUNvbnRyb2xsZXIgfTtcclxuIiwiaW1wb3J0IHsgaW5wdXRhYmxlIH0gZnJvbSBcIi4uL0RlY29yYXRvcnMvSW5wdXRhYmxlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBFbnRpdHlTdGF0ZSB9IGZyb20gXCIuLi9FbnVtL0VudGl0eVN0YXRlXCI7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuLi9Nb2RlbC9FbnRpdHlcIjtcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi4vTW9kZWwvUG9zaXRpb25cIjtcclxuaW1wb3J0IHsgRW50aXR5Q29udHJvbGxlciB9IGZyb20gXCIuL0VudGl0eUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vU3RvcmVcIjtcclxuaW1wb3J0IHsgUGxheWVyQXR0YWNrUGFydGljbGUgfSBmcm9tIFwiLi4vTW9kZWwvUGxheWVyQXR0YWNrUGFydGljbGVcIjtcclxuaW1wb3J0IHsgUGxheWVyQXR0YWNrQW5pbWF0aW9uIH0gZnJvbSBcIi4uL0FuaW1hdGlvbi9QbGF5ZXJBdHRhY2tBbmltYXRpb25cIjtcclxuaW1wb3J0IHsgVGltaW5nRnVuY3Rpb25zIH0gZnJvbSBcIi4uL0FuaW1hdGlvbi9UaW1pbmdGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgUGxheWVyQXR0YWNrUGFydGljbGVWaWV3IH0gZnJvbSBcIi4uL1ZpZXcvUGxheWVyQXR0YWNrUGFydGljbGVWaWV3XCI7XHJcbmltcG9ydCB7IFBsYXllckF0dGFja1ZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvUGxheWVyQXR0YWNrVmlld01vZGVsXCI7XHJcbmltcG9ydCB7IGdldENhbnZhc0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGFnZVdyYXBwZXJcIjtcclxuQGlucHV0YWJsZVxyXG5jbGFzcyBQbGF5ZXJDb250cm9sbGVyIGV4dGVuZHMgRW50aXR5Q29udHJvbGxlciB7XHJcbiAgICBwcml2YXRlIGtleXNQcmVzc2VkOiBhbnkgPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXJFbnRpdHk6IEVudGl0eSkge1xyXG4gICAgICAgIHN1cGVyKHBsYXllckVudGl0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGVyZm9ybUFjdGlvbigpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZW50aXR5LnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRW50aXR5U3RhdGUuSWRsZTpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEVudGl0eVN0YXRlLk1vdmluZzpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4OiBudW1iZXIgPSB0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24ueDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB5OiBudW1iZXIgPSB0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24ueTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkWCA9IHRoaXMuZW50aXR5LnZpZXdNb2RlbC5wb3NpdGlvbi5kaXJlY3Rpb25YO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRZID0gdGhpcy5lbnRpdHkudmlld01vZGVsLnBvc2l0aW9uLmRpcmVjdGlvblk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnRpdHkudmlld01vZGVsLnBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHggKyA1ICogZFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHkgKyA1ICogZFksXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUucGFydGljbGVzLmZvckVhY2gocGFydGljbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFydGljbGUgaW5zdGFuY2VvZiBQbGF5ZXJBdHRhY2tQYXJ0aWNsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGUudmlld01vZGVsLnBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuZW50aXR5LnZpZXdNb2RlbC5wb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0RXZlbnRIYW5kbGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gY2hhbmdlIGRpcmVjdGlvbiBvbiBhcnJvdyBrZXlzIHByZXNzZWRcclxuICAgICAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBuZXcgUG9zaXRpb24oXHJcbiAgICAgICAgICAgIHRoaXMuZW50aXR5LnZpZXdNb2RlbC5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB0aGlzLmVudGl0eS52aWV3TW9kZWwucG9zaXRpb24ueSxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBcImtleWRvd25cIikge1xyXG4gICAgICAgICAgICB0aGlzLmVudGl0eS5zdGF0ZSA9IEVudGl0eVN0YXRlLk1vdmluZztcclxuICAgICAgICAgICAgdGhpcy5rZXlzUHJlc3NlZFtldmVudC5rZXldID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBcImtleXVwXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5rZXlzUHJlc3NlZFtldmVudC5rZXldID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZW50aXR5LnZpZXdNb2RlbC5wb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5rZXlzUHJlc3NlZCkuZm9yRWFjaCgoa2V5TmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5rZXlzUHJlc3NlZFtrZXlOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChrZXlOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uLmRpcmVjdGlvblkgPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5kaXJlY3Rpb25ZID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5kaXJlY3Rpb25YID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uLmRpcmVjdGlvblggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUucGFydGljbGVzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBhcnRpY2xlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGUgaW5zdGFuY2VvZiBQbGF5ZXJBdHRhY2tQYXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllckF0dGFja1BhcnRpY2xlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgUGxheWVyQXR0YWNrUGFydGljbGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQbGF5ZXJBdHRhY2tWaWV3TW9kZWwoMTAsIFwiIzAwZlwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLnBsYXllckVudGl0eS52aWV3TW9kZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyQXR0YWNrUGFydGljbGUuYW5pbWF0aW9uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgUGxheWVyQXR0YWNrQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5ub3coKSArIDIwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGltaW5nRnVuY3Rpb25zLnF1YWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyQXR0YWNrUGFydGljbGUudmlld01vZGVsLnJlZ2lzdGVyT2JzZXJ2ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBsYXllckF0dGFja1BhcnRpY2xlVmlldyhnZXRDYW52YXNDb250ZXh0KCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUucGFydGljbGVzLnB1c2gocGxheWVyQXR0YWNrUGFydGljbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZW50aXR5LnZpZXdNb2RlbC5wb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUGxheWVyQ29udHJvbGxlciB9O1xyXG4iLCJpbXBvcnQgeyBFbnRpdHlDb250cm9sbGVyIH0gZnJvbSBcIi4vRW50aXR5Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9TdG9yZVwiO1xyXG5pbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vTW9kZWwvQm90XCI7XHJcbmltcG9ydCB7IEJvdFZpZXcgfSBmcm9tIFwiLi4vVmlldy9Cb3RWaWV3XCI7XHJcbmltcG9ydCB7IENpcmNsZUNvbGxpZGVyIH0gZnJvbSBcIi4uL0NvbGxpc2lvbnMvQ2lyY2xlQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgQm90Vmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9Cb3RWaWV3TW9kZWxcIjtcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi4vTW9kZWwvUG9zaXRpb25cIjtcclxuXHJcbmNsYXNzIFNwYXduQ29udHJvbGxlciBleHRlbmRzIEVudGl0eUNvbnRyb2xsZXIge1xyXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwcml2YXRlIGxhc3RTcGF3blRpbWU6IG51bWJlciA9IDBcclxuICAgIGNvbnN0cnVjdG9yKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgc3VwZXIobnVsbCk7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB9XHJcblxyXG4gICAgcGVyZm9ybUFjdGlvbigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5sYXN0U3Bhd25UaW1lID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFNwYXduVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpXHJcbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lIC0gdGhpcy5sYXN0U3Bhd25UaW1lID49IDIwMCkge1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21YOiBudW1iZXIgPSB0aGlzLmN0eC5jYW52YXMud2lkdGggKiBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVk6IG51bWJlciA9IHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQgKiBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbURpcmVjdGlvblg6IG51bWJlciA9IC0xICsgMiAqIE1hdGgucmFuZG9tKClcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tRGlyZWN0aW9uWTogbnVtYmVyID0gLTEgKyAyICogTWF0aC5yYW5kb20oKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgYm90RW50aXR5ID0gbmV3IEJvdChuZXcgQm90Vmlld01vZGVsKDEwLCAnI2ZmZicsIG5ldyBQb3NpdGlvbihyYW5kb21YLCByYW5kb21ZLCByYW5kb21EaXJlY3Rpb25YLCByYW5kb21EaXJlY3Rpb25ZKSkpXHJcbiAgICAgICAgICAgIGJvdEVudGl0eS5jb2xsaWRlciA9IG5ldyBDaXJjbGVDb2xsaWRlcihib3RFbnRpdHksIGJvdEVudGl0eS52aWV3TW9kZWwucmFkaXVzKVxyXG4gICAgICAgICAgICBjb25zdCBib3RFbnRpdHlWaWV3ID0gbmV3IEJvdFZpZXcodGhpcy5jdHgpXHJcbiAgICAgICAgICAgIGJvdEVudGl0eS52aWV3TW9kZWwucmVnaXN0ZXJPYnNlcnZlcihib3RFbnRpdHlWaWV3KVxyXG5cclxuICAgICAgICAgICAgc3RvcmUuZW50aXRpZXMucHVzaChib3RFbnRpdHkpXHJcbiAgICAgICAgICAgIHRoaXMubGFzdFNwYXduVGltZSA9IGN1cnJlbnRUaW1lXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0RXZlbnRIYW5kbGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7fVxyXG59XHJcblxyXG5leHBvcnQgeyBTcGF3bkNvbnRyb2xsZXIgfTtcclxuIiwiY29uc3QgaW5wdXRhYmxlID0gPFQgZXh0ZW5kcyB7IG5ldyAoLi4uYXJnczogYW55W10pOiB7fX0+KHRhcmdldDogVCkgPT4ge1xyXG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgdGFyZ2V0IHtcclxuICAgICAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoLi4uYXJncylcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0YXJnZXQucHJvdG90eXBlLmlucHV0RXZlbnRIYW5kbGVyLmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRhcmdldC5wcm90b3R5cGUuaW5wdXRFdmVudEhhbmRsZXIuYmluZCh0aGlzKSlcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgdGFyZ2V0LnByb3RvdHlwZS5pbnB1dEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGlucHV0YWJsZVxyXG59IiwiZW51bSBFbnRpdHlTdGF0ZSB7XHJcbiAgICBJZGxlLFxyXG4gICAgTW92aW5nLFxyXG4gICAgQXR0YWNrLFxyXG4gICAgRGVhZFxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgRW50aXR5U3RhdGVcclxufSIsImltcG9ydCB7IENpcmNsZUNvbGxpZGVyIH0gZnJvbSBcIi4uL0NvbGxpc2lvbnMvQ2lyY2xlQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi9FbnRpdHlcIjtcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi9Qb3NpdGlvblwiO1xyXG5pbXBvcnQgeyBTdGF0cyB9IGZyb20gXCIuL1N0YXRzXCI7XHJcblxyXG5jbGFzcyBCb3QgZXh0ZW5kcyBFbnRpdHkge1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXRzOiBTdGF0c1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZpZXdNb2RlbDogVmlld01vZGVsKSB7XHJcbiAgICAgICAgc3VwZXIodmlld01vZGVsKVxyXG4gICAgICAgIHRoaXMuX3N0YXRzID0gbmV3IFN0YXRzKDIsIDEwMClcclxuICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IENpcmNsZUNvbGxpZGVyKHRoaXMsIHRoaXMudmlld01vZGVsLnJhZGl1cylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhdHMoKTogU3RhdHMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0c1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0cyh2YWx1ZTogU3RhdHMpIHtcclxuICAgICAgICB0aGlzLl9zdGF0cyA9IHZhbHVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBCb3RcclxufSIsImltcG9ydCB7IENpcmNsZUNvbGxpZGVyIH0gZnJvbSBcIi4uL0NvbGxpc2lvbnMvQ2lyY2xlQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZSB9IGZyb20gXCIuL1BhcnRpY2xlXCI7XHJcblxyXG5jbGFzcyBCb3REZXN0cnVjdGlvblBhcnRpY2xlIGV4dGVuZHMgUGFydGljbGUge1xyXG4gICAgY29uc3RydWN0b3Iodmlld01vZGVsOiBWaWV3TW9kZWwpIHtcclxuICAgICAgICBzdXBlcih2aWV3TW9kZWwpXHJcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG5ldyBDaXJjbGVDb2xsaWRlcih0aGlzLCB0aGlzLnZpZXdNb2RlbC5yYWRpdXMpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJvdERlc3RydWN0aW9uUGFydGljbGUgfSIsImltcG9ydCB7IEVudGl0eUFuaW1hdGlvbiB9IGZyb20gJy4uL0FuaW1hdGlvbi9BbmltYXRpb24nXHJcbmltcG9ydCB7IENvbGxpZGVyIH0gZnJvbSAnLi4vQ29sbGlzaW9ucy9Db2xsaWRlcidcclxuaW1wb3J0IHsgRW50aXR5U3RhdGUgfSBmcm9tICcuLi9FbnVtL0VudGl0eVN0YXRlJ1xyXG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tICcuLi9WaWV3TW9kZWwvVmlld01vZGUnXHJcbmFic3RyYWN0IGNsYXNzIEVudGl0eSB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgX2N1cnJlbnRUYXJnZXQ6IEVudGl0eVxyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IEVudGl0eVN0YXRlXHJcbiAgICBwcml2YXRlIF9jb2xsaWRlcjogQ29sbGlkZXJcclxuICAgIHByaXZhdGUgX2FuaW1hdGlvbjogRW50aXR5QW5pbWF0aW9uXHJcbiAgICBwcml2YXRlIF92aWV3TW9kZWw6IFZpZXdNb2RlbFxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3TW9kZWw6IFZpZXdNb2RlbCkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRUYXJnZXQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBFbnRpdHlTdGF0ZS5JZGxlXHJcbiAgICAgICAgdGhpcy5fdmlld01vZGVsID0gdmlld01vZGVsXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0YXRlKCk6IEVudGl0eVN0YXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGVcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3RhdGUodmFsdWU6IEVudGl0eVN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50VGFyZ2V0KCk6IEVudGl0eSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRUYXJnZXRcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY3VycmVudFRhcmdldCh2YWx1ZTogRW50aXR5KSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFRhcmdldCA9IHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbGxpZGVyKCk6IENvbGxpZGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sbGlkZXJcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY29sbGlkZXIodmFsdWU6IENvbGxpZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fY29sbGlkZXIgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbmltYXRpb24oKTogRW50aXR5QW5pbWF0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGFuaW1hdGlvbih2YWx1ZTogRW50aXR5QW5pbWF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmlld01vZGVsKCk6IFZpZXdNb2RlbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdNb2RlbFxyXG4gICAgfVxyXG5cclxuICAgIHNldCB2aWV3TW9kZWwodmFsdWU6IFZpZXdNb2RlbCkge1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNb2RlbCA9IHZhbHVlXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBFbnRpdHlcclxufSIsImltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvVmlld01vZGVcIjtcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vRW50aXR5XCI7XHJcblxyXG5jbGFzcyBQYXJ0aWNsZSBleHRlbmRzIEVudGl0eSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3TW9kZWw6IFZpZXdNb2RlbCkge1xyXG4gICAgICAgIHN1cGVyKHZpZXdNb2RlbClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUGFydGljbGUgfSIsImltcG9ydCB7IENpcmNsZUNvbGxpZGVyIH0gZnJvbSBcIi4uL0NvbGxpc2lvbnMvQ2lyY2xlQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi9FbnRpdHlcIjtcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi9Qb3NpdGlvblwiO1xyXG5pbXBvcnQgeyBTdGF0cyB9IGZyb20gXCIuL1N0YXRzXCI7XHJcblxyXG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBFbnRpdHkge1xyXG4gICAgcHJpdmF0ZSBfc3RhdHM6IFN0YXRzXHJcblxyXG4gICAgY29uc3RydWN0b3Iodmlld01vZGVsOiBWaWV3TW9kZWwpIHtcclxuICAgICAgICBzdXBlcih2aWV3TW9kZWwpXHJcbiAgICAgICAgdGhpcy5fc3RhdHMgPSBuZXcgU3RhdHMoMiwgMTAwKVxyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ2lyY2xlQ29sbGlkZXIodGhpcywgMClcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhdHMoKTogU3RhdHMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0c1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0cyh2YWx1ZTogU3RhdHMpIHtcclxuICAgICAgICB0aGlzLl9zdGF0cyA9IHZhbHVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBQbGF5ZXJcclxufSIsImltcG9ydCB7IENpcmNsZUNvbGxpZGVyIH0gZnJvbSBcIi4uL0NvbGxpc2lvbnMvQ2lyY2xlQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZSB9IGZyb20gXCIuL1BhcnRpY2xlXCI7XHJcblxyXG5jbGFzcyBQbGF5ZXJBdHRhY2tQYXJ0aWNsZSBleHRlbmRzIFBhcnRpY2xlIHtcclxuICAgIGNvbnN0cnVjdG9yKHZpZXdNb2RlbDogVmlld01vZGVsKSB7XHJcbiAgICAgICAgc3VwZXIodmlld01vZGVsKVxyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ2lyY2xlQ29sbGlkZXIodGhpcywgdGhpcy52aWV3TW9kZWwucmFkaXVzKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQbGF5ZXJBdHRhY2tQYXJ0aWNsZSB9IiwiY2xhc3MgUG9zaXRpb24ge1xyXG4gICAgeDogbnVtYmVyXHJcbiAgICB5OiBudW1iZXJcclxuICAgIGRpcmVjdGlvblg6IG51bWJlclxyXG4gICAgZGlyZWN0aW9uWTogbnVtYmVyXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgZGlyZWN0aW9uWDogbnVtYmVyLCBkaXJlY3Rpb25ZOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4XHJcbiAgICAgICAgdGhpcy55ID0geVxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uWCA9IGRpcmVjdGlvblhcclxuICAgICAgICB0aGlzLmRpcmVjdGlvblkgPSBkaXJlY3Rpb25ZXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIFBvc2l0aW9uXHJcbn0iLCJpbXBvcnQgeyBDaXJjbGVDb2xsaWRlciB9IGZyb20gXCIuLi9Db2xsaXNpb25zL0NpcmNsZUNvbGxpZGVyXCI7XHJcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvVmlld01vZGVcIjtcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vRW50aXR5XCI7XHJcblxyXG5jbGFzcyBTY29yZSBleHRlbmRzIEVudGl0eSB7XHJcblxyXG4gICAgY29uc3RydWN0b3Iodmlld01vZGVsOiBWaWV3TW9kZWwpIHtcclxuICAgICAgICBzdXBlcih2aWV3TW9kZWwpXHJcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG5ldyBDaXJjbGVDb2xsaWRlcih0aGlzLCAwKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgU2NvcmVcclxufSIsImNsYXNzIFN0YXRzIHtcclxuICAgIHNwZWVkOiBudW1iZXJcclxuICAgIGhlYWx0aDogbnVtYmVyIFxyXG4gICAgc2NvcmU6IG51bWJlclxyXG4gICAgY29uc3RydWN0b3Ioc3BlZWQ6IG51bWJlciwgaGVhbHRoOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWRcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aFxyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBTdGF0c1xyXG59IiwiaW1wb3J0IHsgT2JzZXJ2ZXIgfSBmcm9tICcuL09ic2VydmVyJ1xyXG5hYnN0cmFjdCBjbGFzcyBPYnNlcnZhYmxlIHtcclxuICAgIG9ic2VydmVyczogQXJyYXk8T2JzZXJ2ZXI+XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW11cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9ic2VydmVyKG9ic2VydmVyOiBPYnNlcnZlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG5vdGlmeU9ic2VydmVycyhwYXJhbXM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4gb2JzZXJ2ZXIub25Ob3RpZnlDYWxsYmFjayhwYXJhbXMpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgT2JzZXJ2YWJsZVxyXG59IiwiYWJzdHJhY3QgY2xhc3MgT2JzZXJ2ZXIge1xyXG4gICAgYWJzdHJhY3Qgb25Ob3RpZnlDYWxsYmFjayhwYXJhbXM6IGFueSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBPYnNlcnZlclxyXG59IiwiaW1wb3J0IHsgQ2lyY2xlQ29sbGlkZXIgfSBmcm9tICcuLi9Db2xsaXNpb25zL0NpcmNsZUNvbGxpZGVyJ1xyXG5pbXBvcnQgeyBCb3QgfSBmcm9tICcuLi9Nb2RlbC9Cb3QnXHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uL01vZGVsL0VudGl0eSdcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vTW9kZWwvUGxheWVyJ1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uL01vZGVsL1Bvc2l0aW9uJ1xyXG5pbXBvcnQgeyBTY29yZSB9IGZyb20gJy4uL01vZGVsL1Njb3JlJ1xyXG5pbXBvcnQgeyBCb3RWaWV3IH0gZnJvbSAnLi4vVmlldy9Cb3RWaWV3J1xyXG5pbXBvcnQgeyBFbnRpdHlWaWV3IH0gZnJvbSAnLi4vVmlldy9FbnRpdHlWaWV3J1xyXG5pbXBvcnQgeyBQbGF5ZXJTY29yZVZpZXcgfSBmcm9tICcuLi9WaWV3L1BsYXllclNjb3JlVmlldydcclxuaW1wb3J0IHsgUGxheWVyVmlldyB9IGZyb20gJy4uL1ZpZXcvUGxheWVyVmlldydcclxuaW1wb3J0IHsgQm90Vmlld01vZGVsIH0gZnJvbSAnLi4vVmlld01vZGVsL0JvdFZpZXdNb2RlbCdcclxuaW1wb3J0IHsgUGxheWVyU2NvcmVWaWV3TW9kZWwgfSBmcm9tICcuLi9WaWV3TW9kZWwvUGxheWVyU2NvcmVWaWV3TW9kZWwnXHJcbmltcG9ydCB7IFBsYXllclZpZXdNb2RlbCB9IGZyb20gJy4uL1ZpZXdNb2RlbC9QbGF5ZXJWaWV3TW9kZWwnXHJcblxyXG5jbGFzcyBTdG9yZSB7XHJcbiAgICBfZW50aXRpZXM6IEFycmF5PEVudGl0eT5cclxuICAgIF9wbGF5ZXJFbnRpdHk6IEVudGl0eVxyXG4gICAgX3BhcnRpY2xlczogRW50aXR5W11cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9lbnRpdGllcyA9IFtdXHJcbiAgICAgICAgdGhpcy5fcGFydGljbGVzID0gW11cclxuICAgICAgICB0aGlzLl9wbGF5ZXJFbnRpdHkgPSBuZXcgUGxheWVyKG5ldyBQbGF5ZXJWaWV3TW9kZWwoMTIsIFwiIzAwZlwiLCBuZXcgUG9zaXRpb24oMCwgMCwgMCwgMCkpKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemVEQihlbnRpdHlDb3VudDogbnVtYmVyLCB2aWV3c1JlbmRlckNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjb3VudGVyOiBudW1iZXIgPSBlbnRpdHlDb3VudFxyXG4gICAgICAgIHdoaWxlIChjb3VudGVyID4gMCkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tWDogbnVtYmVyID0gdmlld3NSZW5kZXJDb250ZXh0LmNhbnZhcy53aWR0aCAqIE1hdGgucmFuZG9tKClcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tWTogbnVtYmVyID0gdmlld3NSZW5kZXJDb250ZXh0LmNhbnZhcy5oZWlnaHQgKiBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbURpcmVjdGlvblg6IG51bWJlciA9IC0xICsgMiAqIE1hdGgucmFuZG9tKClcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tRGlyZWN0aW9uWTogbnVtYmVyID0gLTEgKyAyICogTWF0aC5yYW5kb20oKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgYm90RW50aXR5ID0gbmV3IEJvdChuZXcgQm90Vmlld01vZGVsKDEwLCAnI2ZmZicsIG5ldyBQb3NpdGlvbihyYW5kb21YLCByYW5kb21ZLCByYW5kb21EaXJlY3Rpb25YLCByYW5kb21EaXJlY3Rpb25ZKSkpXHJcbiAgICAgICAgICAgIGJvdEVudGl0eS5jb2xsaWRlciA9IG5ldyBDaXJjbGVDb2xsaWRlcihib3RFbnRpdHksIGJvdEVudGl0eS52aWV3TW9kZWwucmFkaXVzKVxyXG4gICAgICAgICAgICBjb25zdCBib3RFbnRpdHlWaWV3ID0gbmV3IEJvdFZpZXcodmlld3NSZW5kZXJDb250ZXh0KVxyXG4gICAgICAgICAgICBib3RFbnRpdHkudmlld01vZGVsLnJlZ2lzdGVyT2JzZXJ2ZXIoYm90RW50aXR5VmlldylcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2VudGl0aWVzLnB1c2goYm90RW50aXR5KVxyXG4gICAgICAgICAgICBjb3VudGVyIC09IDFcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNjb3JlRW50aXR5ID0gbmV3IFNjb3JlKG5ldyBQbGF5ZXJTY29yZVZpZXdNb2RlbCgxMCwgXCIjZjAwXCIsIG5ldyBQb3NpdGlvbigxMDAsIDEwMCwgMCwgMCksIDApKTtcclxuICAgICAgICBjb25zdCBzY29yZVZpZXcgPSBuZXcgUGxheWVyU2NvcmVWaWV3KHZpZXdzUmVuZGVyQ29udGV4dClcclxuICAgICAgICBzY29yZUVudGl0eS52aWV3TW9kZWwucmVnaXN0ZXJPYnNlcnZlcihzY29yZVZpZXcpXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fZW50aXRpZXMucHVzaChzY29yZUVudGl0eSlcclxuICAgICAgICBjb25zdCByYW5kb21YOiBudW1iZXIgPSB2aWV3c1JlbmRlckNvbnRleHQuY2FudmFzLndpZHRoICogTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIGNvbnN0IHJhbmRvbVk6IG51bWJlciA9IHZpZXdzUmVuZGVyQ29udGV4dC5jYW52YXMuaGVpZ2h0ICogTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIGNvbnN0IHJhbmRvbURpcmVjdGlvblg6IG51bWJlciA9IC0xICsgMiAqIE1hdGgucmFuZG9tKClcclxuICAgICAgICBjb25zdCByYW5kb21EaXJlY3Rpb25ZOiBudW1iZXIgPSAtMSArIDIgKiBNYXRoLnJhbmRvbSgpXHJcblxyXG4gICAgICAgIHRoaXMuX3BsYXllckVudGl0eS52aWV3TW9kZWwucG9zaXRpb24gPSBuZXcgUG9zaXRpb24ocmFuZG9tWCwgcmFuZG9tWSwgcmFuZG9tRGlyZWN0aW9uWCwgcmFuZG9tRGlyZWN0aW9uWSkgXHJcbiAgICAgICAgdGhpcy5fcGxheWVyRW50aXR5LmNvbGxpZGVyID0gbmV3IENpcmNsZUNvbGxpZGVyKHRoaXMuX3BsYXllckVudGl0eSwgdGhpcy5fcGxheWVyRW50aXR5LnZpZXdNb2RlbC5yYWRpdXMpXHJcbiAgICAgICAgdGhpcy5fcGxheWVyRW50aXR5LnZpZXdNb2RlbC5yZWdpc3Rlck9ic2VydmVyKG5ldyBQbGF5ZXJWaWV3KHZpZXdzUmVuZGVyQ29udGV4dCkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbnRpdGllcygpOiBBcnJheTxFbnRpdHk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZW50aXRpZXNcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZW50aXRpZXModmFsdWU6IEVudGl0eVtdKSB7XHJcbiAgICAgICAgdGhpcy5fZW50aXRpZXMgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBwbGF5ZXJFbnRpdHkoKTogRW50aXR5IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVyRW50aXR5XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBhcnRpY2xlcygpOiBFbnRpdHlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnRpY2xlc1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwYXJ0aWNsZXModmFsdWU6IEVudGl0eVtdKSB7XHJcbiAgICAgICAgdGhpcy5fcGFydGljbGVzID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBhZGRQYXJ0aWNsZUVudGl0eShwYXJ0aWNsZTogRW50aXR5LCBwYXJ0aWNsZVZpZXc6IEVudGl0eVZpZXcpIHtcclxuICAgICAgICAvLyBwYXJ0aWNsZS5yZWdpc3Rlck9ic2VydmVyKHBhcnRpY2xlVmlldylcclxuICAgICAgICB0aGlzLl9lbnRpdGllcy5wdXNoKHBhcnRpY2xlKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVBhcnRpY2xlKHA6IEVudGl0eSkge1xyXG4gICAgICAgIHRoaXMuX2VudGl0aWVzID0gdGhpcy5lbnRpdGllcy5maWx0ZXIocGFydGljbGUgPT4gcGFydGljbGUgPT09IHApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuY29uc3Qgc3RvcmU6IFN0b3JlID0gbmV3IFN0b3JlKCk7XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICAgIHN0b3JlXHJcbn0iLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuLi9Nb2RlbC9Qb3NpdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRpc3RhbmNlQmV0d2VlbiA9IChwMTogUG9zaXRpb24sIHAyOiBQb3NpdGlvbik6IG51bWJlciA9PiB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAxLnggLSBwMi54LCAyKSArIE1hdGgucG93KHAxLnkgLSBwMi55LCAyKSlcclxufSIsImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4uL01vZGVsL1Bvc2l0aW9uXCI7XHJcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuL1ZpZXdNb2RlXCI7XHJcblxyXG5jbGFzcyBCb3REZXN0cnVjdGlvblZpZXdNb2RlbCBleHRlbmRzIFZpZXdNb2RlbCB7XHJcbiAgICBwcml2YXRlIF9hbmdsZSA9IDBcclxuICAgIGNvbnN0cnVjdG9yKHJhZGl1czogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBwb3NpdGlvbjogUG9zaXRpb24pIHtcclxuICAgICAgICBzdXBlcihyYWRpdXMsIGNvbG9yLCBwb3NpdGlvbilcclxuICAgICAgICB0aGlzLl9yYWRpdXMgPSByYWRpdXNcclxuICAgICAgICB0aGlzLl9jb2xvciA9IGNvbG9yXHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMuX2FuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDIgKiBNYXRoLlBJXHJcbiAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnModGhpcylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYW5nbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuZ2xlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJvdERlc3RydWN0aW9uVmlld01vZGVsIH07IiwiaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi4vTW9kZWwvUG9zaXRpb25cIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4vVmlld01vZGVcIjtcclxuXHJcbmNsYXNzIEJvdFZpZXdNb2RlbCBleHRlbmRzIFZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihyYWRpdXM6IG51bWJlciwgY29sb3I6IHN0cmluZywgcG9zaXRpb246IFBvc2l0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIocmFkaXVzLCBjb2xvciwgcG9zaXRpb24pXHJcbiAgICAgICAgdGhpcy5fcmFkaXVzID0gcmFkaXVzXHJcbiAgICAgICAgdGhpcy5fY29sb3IgPSBjb2xvclxyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb25cclxuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyh0aGlzKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBCb3RWaWV3TW9kZWwgfTtcclxuIiwiaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi4vTW9kZWwvUG9zaXRpb25cIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4vVmlld01vZGVcIjtcclxuXHJcbmNsYXNzIFBsYXllckF0dGFja1ZpZXdNb2RlbCBleHRlbmRzIFZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihyYWRpdXM6IG51bWJlciwgY29sb3I6IHN0cmluZywgcG9zaXRpb246IFBvc2l0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIocmFkaXVzLCBjb2xvciwgcG9zaXRpb24pXHJcbiAgICAgICAgdGhpcy5fcmFkaXVzID0gcmFkaXVzXHJcbiAgICAgICAgdGhpcy5fY29sb3IgPSBjb2xvclxyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb25cclxuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyh0aGlzKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQbGF5ZXJBdHRhY2tWaWV3TW9kZWwgfTtcclxuIiwiaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi4vTW9kZWwvUG9zaXRpb25cIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4vVmlld01vZGVcIjtcclxuXHJcbmNsYXNzIFBsYXllclNjb3JlVmlld01vZGVsIGV4dGVuZHMgVmlld01vZGVsIHtcclxuICAgIF9zY29yZVZhbHVlOiBudW1iZXJcclxuICAgIGNvbnN0cnVjdG9yKHJhZGl1czogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBwb3NpdGlvbjogUG9zaXRpb24sIHNjb3JlVmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKHJhZGl1cywgY29sb3IsIHBvc2l0aW9uKVxyXG4gICAgICAgIHRoaXMuX3JhZGl1cyA9IHJhZGl1c1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gY29sb3JcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5fc2NvcmVWYWx1ZSA9IHNjb3JlVmFsdWVcclxuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBzY29yZVZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY29yZVZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNjb3JlVmFsdWUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3Njb3JlVmFsdWUgPSB2YWx1ZVxyXG4gICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzKHRoaXMpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBsYXllclNjb3JlVmlld01vZGVsIH07XHJcbiIsImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4uL01vZGVsL1Bvc2l0aW9uXCI7XHJcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuL1ZpZXdNb2RlXCI7XHJcblxyXG5jbGFzcyBQbGF5ZXJWaWV3TW9kZWwgZXh0ZW5kcyBWaWV3TW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IocmFkaXVzOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIHBvc2l0aW9uOiBQb3NpdGlvbikge1xyXG4gICAgICAgIHN1cGVyKHJhZGl1cywgY29sb3IsIHBvc2l0aW9uKVxyXG4gICAgICAgIHRoaXMuX3JhZGl1cyA9IHJhZGl1c1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gY29sb3JcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnModGhpcylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUGxheWVyVmlld01vZGVsIH07XHJcbiIsImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4uL01vZGVsL1Bvc2l0aW9uXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi4vT2JzZXJ2aW5nL09ic2VydmFibGVcIjtcclxuXHJcbmNsYXNzIFZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xyXG4gICAgX3JhZGl1czogbnVtYmVyID0gMzA7XHJcbiAgICBfb3BhY2l0eTogbnVtYmVyID0gMTtcclxuICAgIF9jb2xvcjogc3RyaW5nID0gXCIjMDBmXCI7XHJcbiAgICBfcG9zaXRpb246IFBvc2l0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJhZGl1czogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBwb3NpdGlvbjogUG9zaXRpb24pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3JhZGl1cyA9IHJhZGl1cztcclxuICAgICAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnModGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHJhZGl1cyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcmFkaXVzID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnModGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9wYWNpdHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3BhY2l0eTtcclxuICAgIH1cclxuICAgIHNldCBvcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9vcGFjaXR5ID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnModGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJhZGl1cygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yYWRpdXM7XHJcbiAgICB9XHJcbiAgICBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnModGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwb3NpdGlvbigpOiBQb3NpdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwb3NpdGlvbih2YWx1ZTogUG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBWaWV3TW9kZWwgfTtcclxuIiwiaW1wb3J0IHsgQm90RGVzdHJ1Y3Rpb25WaWV3TW9kZWwgfSBmcm9tIFwiLi4vVmlld01vZGVsL0JvdERlc3RydWN0aW9uVmlld01vZGVsXCI7XHJcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvVmlld01vZGVcIjtcclxuaW1wb3J0IHsgRW50aXR5VmlldyB9IGZyb20gXCIuL0VudGl0eVZpZXdcIjtcclxuXHJcbmNsYXNzIEJvdERlc3RydWN0aW9uVmlldyBleHRlbmRzIEVudGl0eVZpZXcge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIHN1cGVyKGN0eClcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KHBhcmFtczogVmlld01vZGVsKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgdm0gPSAoPEJvdERlc3RydWN0aW9uVmlld01vZGVsPnBhcmFtcylcclxuICAgICAgICB0aGlzLmN0eC5zYXZlKClcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKVxyXG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh2bS5wb3NpdGlvbi54LCB2bS5wb3NpdGlvbi55KVxyXG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSh2bS5hbmdsZSlcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB2bS5jb2xvclxyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gdm0ub3BhY2l0eVxyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbygwLCAwIC0gdm0ucmFkaXVzKVxyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbygwICsgdm0ucmFkaXVzLCAwICAtIHZtLnJhZGl1cyAvIDIpXHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKDAgLSB2bS5yYWRpdXMgLyAyLCAwICArIHZtLnJhZGl1cylcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oMCAtIHZtLnJhZGl1cywgMCAtIHZtLnJhZGl1cyAvIDYpXHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKClcclxuICAgICAgICB0aGlzLmN0eC5maWxsKClcclxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQm90RGVzdHJ1Y3Rpb25WaWV3IH0iLCJpbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vTW9kZWwvQm90XCI7XHJcbmltcG9ydCB7IEJvdFZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvQm90Vmlld01vZGVsXCI7XHJcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvVmlld01vZGVcIjtcclxuaW1wb3J0IHsgRW50aXR5VmlldyB9IGZyb20gXCIuL0VudGl0eVZpZXdcIjtcclxuXHJcbmNsYXNzIEJvdFZpZXcgZXh0ZW5kcyBFbnRpdHlWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgc3VwZXIoY3R4KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KHBhcmFtczogVmlld01vZGVsKSB7XHJcbiAgICAgICAgY29uc3Qgdm0gPSA8Qm90Vmlld01vZGVsPnBhcmFtcztcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB2bS5jb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5hcmModm0ucG9zaXRpb24ueCwgdm0ucG9zaXRpb24ueSwgdm0ucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBCb3RWaWV3IH07XHJcbiIsImltcG9ydCB7IE9ic2VydmVyIH0gZnJvbSBcIi4uL09ic2VydmluZy9PYnNlcnZlclwiXHJcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvVmlld01vZGVcIlxyXG5cclxuYWJzdHJhY3QgY2xhc3MgRW50aXR5VmlldyBleHRlbmRzIE9ic2VydmVyIHtcclxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XHJcbiAgICB9XHJcblxyXG4gICAgb25Ob3RpZnlDYWxsYmFjayhwYXJhbXM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZHJhdyhwYXJhbXMpXHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgZHJhdyhwYXJhbXM6IFZpZXdNb2RlbCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBFbnRpdHlWaWV3XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi4vTW9kZWwvRW50aXR5XCI7XHJcbmltcG9ydCB7IFBsYXllckF0dGFja1ZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvUGxheWVyQXR0YWNrVmlld01vZGVsXCI7XHJcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvVmlld01vZGVcIjtcclxuaW1wb3J0IHsgRW50aXR5VmlldyB9IGZyb20gXCIuL0VudGl0eVZpZXdcIjtcclxuXHJcbmNsYXNzIFBsYXllckF0dGFja1BhcnRpY2xlVmlldyBleHRlbmRzIEVudGl0eVZpZXcge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgc3VwZXIoY3R4KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KHBhcmFtczogVmlld01vZGVsKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgdm0gPSAoPFBsYXllckF0dGFja1ZpZXdNb2RlbD5wYXJhbXMpXHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzAwMCc7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICB2bS5yYWRpdXMgLSA2IDwgMCA/IDAgOiB2bS5yYWRpdXMgLSA2LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAyICogTWF0aC5QSVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKClcclxuXHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzAwMSc7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICB2bS5yYWRpdXMgLSA1IDwgMCA/IDAgOiB2bS5yYWRpdXMgLSA1LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAyICogTWF0aC5QSVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKClcclxuXHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzAwMyc7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICB2bS5yYWRpdXMgLSA0IDwgMCA/IDAgOiB2bS5yYWRpdXMgLSA0LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAyICogTWF0aC5QSVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyMwMDUnO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyhcclxuICAgICAgICAgICAgdm0ucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgdm0ucG9zaXRpb24ueSxcclxuICAgICAgICAgICAgdm0ucmFkaXVzIC0gMyA8IDAgPyAwIDogdm0ucmFkaXVzIC0gMyxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMiAqIE1hdGguUElcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjMDA3JztcclxuICAgICAgICB0aGlzLmN0eC5hcmMoXHJcbiAgICAgICAgICAgIHZtLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHZtLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIHZtLnJhZGl1cyAtIDIgPCAwID8gMCA6IHZtLnJhZGl1cyAtIDIsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDIgKiBNYXRoLlBJXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzAwYSc7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICB2bS5yYWRpdXMgLSAxIDwgMCA/IDAgOiB2bS5yYWRpdXMgLSAxLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAyICogTWF0aC5QSVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdm0uY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB2bS5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICB2bS5yYWRpdXMsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDIgKiBNYXRoLlBJXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUGxheWVyQXR0YWNrUGFydGljbGVWaWV3IH07XHJcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9Nb2RlbC9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vU3RvcmVcIjtcclxuaW1wb3J0IHsgUGxheWVyU2NvcmVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vVmlld01vZGVsL1BsYXllclNjb3JlVmlld01vZGVsXCI7XHJcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuLi9WaWV3TW9kZWwvVmlld01vZGVcIjtcclxuaW1wb3J0IHsgRW50aXR5VmlldyB9IGZyb20gXCIuL0VudGl0eVZpZXdcIjtcclxuXHJcbmNsYXNzIFBsYXllclNjb3JlVmlldyBleHRlbmRzIEVudGl0eVZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBzdXBlcihjdHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcocGFyYW1zOiBWaWV3TW9kZWwpIHtcclxuICAgICAgICBjb25zdCB2bSA9IDxQbGF5ZXJTY29yZVZpZXdNb2RlbD5wYXJhbXM7XHJcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICczMHB4IFBhbGV0dGUgTW9zYWljJztcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB2bS5jb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC50ZXh0QmFzZWxpbmUgPSAndG9wJztcclxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnU2NvcmU6ICcgKyB2bS5zY29yZVZhbHVlLCAxMDAsIDUwKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUGxheWVyU2NvcmVWaWV3IH07XHJcbiIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuLi9Nb2RlbC9FbnRpdHlcIjtcclxuaW1wb3J0IHsgUGxheWVyVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9QbGF5ZXJWaWV3TW9kZWxcIjtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL1ZpZXdNb2RlbC9WaWV3TW9kZVwiO1xyXG5pbXBvcnQgeyBFbnRpdHlWaWV3IH0gZnJvbSBcIi4vRW50aXR5Vmlld1wiO1xyXG5cclxuY2xhc3MgUGxheWVyVmlldyBleHRlbmRzIEVudGl0eVZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBzdXBlcihjdHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcocGFyYW1zOiBWaWV3TW9kZWwpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB2bSA9IDxQbGF5ZXJWaWV3TW9kZWw+cGFyYW1zO1xyXG5cclxuICAgICAgICBpZiAodm0ucG9zaXRpb24uZGlyZWN0aW9uWSAhPT0gMCB8fCB2bS5wb3NpdGlvbi5kaXJlY3Rpb25YICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiM1NWZcIjtcclxuICAgICAgICAgICAgdGhpcy5jdHguYXJjKFxyXG4gICAgICAgICAgICAgICAgdm0ucG9zaXRpb24ueCAtIDE0ICogdm0ucG9zaXRpb24uZGlyZWN0aW9uWCxcclxuICAgICAgICAgICAgICAgIHZtLnBvc2l0aW9uLnkgLSAxNCAqIHZtLnBvc2l0aW9uLmRpcmVjdGlvblksXHJcbiAgICAgICAgICAgICAgICB2bS5yYWRpdXMgLSA4LFxyXG4gICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgIDIgKiBNYXRoLlBJXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzY2ZlwiO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5hcmMoXHJcbiAgICAgICAgICAgICAgICB2bS5wb3NpdGlvbi54IC0gMTIgKiB2bS5wb3NpdGlvbi5kaXJlY3Rpb25YLFxyXG4gICAgICAgICAgICAgICAgdm0ucG9zaXRpb24ueSAtIDEyICogdm0ucG9zaXRpb24uZGlyZWN0aW9uWSxcclxuICAgICAgICAgICAgICAgIHZtLnJhZGl1cyAtIDYsXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgMiAqIE1hdGguUElcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjNzdmXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmFyYyhcclxuICAgICAgICAgICAgICAgIHZtLnBvc2l0aW9uLnggLSA4ICogdm0ucG9zaXRpb24uZGlyZWN0aW9uWCxcclxuICAgICAgICAgICAgICAgIHZtLnBvc2l0aW9uLnkgLSA4ICogdm0ucG9zaXRpb24uZGlyZWN0aW9uWSxcclxuICAgICAgICAgICAgICAgIHZtLnJhZGl1cyAtIDQsXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgMiAqIE1hdGguUElcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjODhmXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmFyYyhcclxuICAgICAgICAgICAgICAgIHZtLnBvc2l0aW9uLnggLSA1ICogdm0ucG9zaXRpb24uZGlyZWN0aW9uWCxcclxuICAgICAgICAgICAgICAgIHZtLnBvc2l0aW9uLnkgLSA1ICogdm0ucG9zaXRpb24uZGlyZWN0aW9uWSxcclxuICAgICAgICAgICAgICAgIHZtLnJhZGl1cyAtIDIsXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgMiAqIE1hdGguUElcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB2bS5jb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5hcmModm0ucG9zaXRpb24ueCwgdm0ucG9zaXRpb24ueSwgdm0ucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQbGF5ZXJWaWV3IH07XHJcbiIsImltcG9ydCB7IGdldENhbnZhc0NvbnRleHQgfSBmcm9tIFwiLi4vcGFnZVdyYXBwZXJcIjtcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi9TdG9yZVwiO1xyXG5pbXBvcnQgeyBCb3RDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlci9Cb3RDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFBsYXllckNvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVyL1BsYXllckNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgRW50aXR5Q29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXIvRW50aXR5Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVyL1BhcnRpY2xlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBTcGF3bkNvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVyL1NwYXduQ29udHJvbGxlclwiO1xyXG5cclxuXHJcbmNvbnN0IGNfY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBnZXRDYW52YXNDb250ZXh0KCk7XHJcbmNvbnN0IGJvdENvbnRyb2xsZXI6IEVudGl0eUNvbnRyb2xsZXIgPSBuZXcgQm90Q29udHJvbGxlcihudWxsKTtcclxuY29uc3QgcGxheWVyQ29udHJvbGxlcjogRW50aXR5Q29udHJvbGxlciA9IG5ldyBQbGF5ZXJDb250cm9sbGVyKG51bGwpO1xyXG5jb25zdCBwYXJ0aWNsZUNvbnRyb2xsZXI6IEVudGl0eUNvbnRyb2xsZXIgPSBuZXcgUGFydGljbGVDb250cm9sbGVyKGNfY3R4KTtcclxuY29uc3Qgc3Bhd25Db250cm9sbGVyOiBFbnRpdHlDb250cm9sbGVyID0gbmV3IFNwYXduQ29udHJvbGxlcihjX2N0eCk7XHJcblxyXG5cclxuY29uc3QgRU5USVRZX1RPX0dFTkVSQVRFOiBudW1iZXIgPSAzMDtcclxuXHJcbmNvbnN0IGdhbWVTdGFydCA9ICgpOiB2b2lkID0+IHtcclxuICAgIHN0b3JlLmluaXRpYWxpemVEQihFTlRJVFlfVE9fR0VORVJBVEUsIGdldENhbnZhc0NvbnRleHQoKSlcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShtYWluKTtcclxufTtcclxuXHJcbmNvbnN0IG1haW4gPSAoKTogdm9pZCA9PiB7XHJcbiAgICBjX2N0eC5jbGVhclJlY3QoMCwgMCwgY19jdHguY2FudmFzLndpZHRoLCBjX2N0eC5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICBzdG9yZS5lbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcclxuICAgICAgICBib3RDb250cm9sbGVyLmVudGl0eSA9IGVudGl0eTtcclxuICAgICAgICBib3RDb250cm9sbGVyLnBlcmZvcm1BY3Rpb24oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHBhcnRpY2xlQ29udHJvbGxlci5wZXJmb3JtQWN0aW9uKClcclxuICAgIHNwYXduQ29udHJvbGxlci5wZXJmb3JtQWN0aW9uKClcclxuXHJcbiAgICBwbGF5ZXJDb250cm9sbGVyLmVudGl0eSA9IHN0b3JlLnBsYXllckVudGl0eTtcclxuICAgIHBsYXllckNvbnRyb2xsZXIucGVyZm9ybUFjdGlvbigpO1xyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShtYWluKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGdhbWVTdGFydCB9O1xyXG4iLCJjb25zdCBjX2NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IChcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY19nYW1lXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50XHJcbikuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5jb25zdCBpbml0Q2FudmFzID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgY19jb250ZXh0LmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgY19jb250ZXh0LmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBjX2NvbnRleHQuY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzAwMFwiO1xyXG59O1xyXG5jb25zdCBnZXRDYW52YXNDb250ZXh0ID0gKCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9PiB7XHJcbiAgICByZXR1cm4gY19jb250ZXh0O1xyXG59O1xyXG5cclxud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG4gICAgZ2V0Q2FudmFzQ29udGV4dCgpLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgZ2V0Q2FudmFzQ29udGV4dCgpLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbn07XHJcblxyXG5jb25zdCByZXNldFBhZ2VTdHlsZXMgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gXCIwXCI7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9IFwiMTAwdmhcIjtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUud2lkdGggPSBcIjEwMHZ3XCI7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgIGNfY29udGV4dC5jYW52YXMuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIGNfY29udGV4dC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbn07XHJcbmV4cG9ydCB7IGluaXRDYW52YXMsIGdldENhbnZhc0NvbnRleHQsIHJlc2V0UGFnZVN0eWxlcyB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuaW1wb3J0IHsgaW5pdENhbnZhcywgcmVzZXRQYWdlU3R5bGVzIH0gZnJvbSBcIi4vcGFnZVdyYXBwZXJcIlxyXG5pbXBvcnQgeyBnYW1lU3RhcnQgfSBmcm9tICcuL2dhbWUvbWFpbidcclxuXHJcbnJlc2V0UGFnZVN0eWxlcygpXHJcbmluaXRDYW52YXMoKVxyXG5cclxuZ2FtZVN0YXJ0KCkiXSwic291cmNlUm9vdCI6IiJ9