(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("DropdownJS", [], factory);
	else if(typeof exports === 'object')
		exports["DropdownJS"] = factory();
	else
		root["DropdownJS"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/DropdownJS.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

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

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

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

/***/ "./src/Dropdown.ts":
/*!*************************!*\
  !*** ./src/Dropdown.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
/**
 * Defines `Dropdown` class
 */
var Dropdown = /** @class */ (function () {
    /**
     * Instanciate the Dropdown.
     * @param element Element used as a dropdown.
     */
    function Dropdown(element) {
        this.$dropdown = element;
        this.$reference = document.body;
        this.$container = document.body;
        this.id = element.id;
    }
    /**
     * Move the dropdown to an element.
     * @param element Reference element.
     */
    Dropdown.prototype.moveTo = function (element, settings) {
        this.$reference = element;
        var rectButton = this.$reference.getClientRects()[0];
        var rectDropdown = this.$dropdown.getClientRects()[0];
        var containerBox = {
            left: 5,
            top: 5,
            width: window.innerWidth - 10,
            height: window.innerHeight - 10
        };
        if (this.$container !== undefined) {
            var containerRect = this.$container.getClientRects()[0];
            containerBox.left = containerRect.left;
            containerBox.top = containerRect.top;
            containerBox.width = containerRect.width;
            containerBox.height = containerRect.height;
        }
        var left = rectButton.left, top = rectButton.top + rectButton.height;
        if (settings.align === 'right')
            left -= rectDropdown.width - rectButton.width;
        switch (settings.align) {
            case "left":
                var maxleft = containerBox.left + containerBox.width - rectDropdown.width;
                if (left > maxleft) {
                    left = maxleft;
                }
                break;
            case "right":
                if (left < containerBox.left) {
                    left = containerBox.left;
                }
                break;
        }
        this.$dropdown.style.top = top + "px";
        this.$dropdown.style.left = left + "px";
    };
    /**
     * Get if the dropdown is currently open.
     */
    Dropdown.prototype.isOpen = function () {
        return this.$dropdown.classList.contains("dd-shown");
    };
    /**
     * Show the dropdown at its current location.
     */
    Dropdown.prototype.show = function () {
        this.$dropdown.classList.add("dd-shown");
    };
    /**
     * Hide the dropdown.
     */
    Dropdown.prototype.hide = function () {
        this.$dropdown.classList.remove("dd-shown");
    };
    return Dropdown;
}());
exports.Dropdown = Dropdown;


/***/ }),

/***/ "./src/DropdownJS.ts":
/*!***************************!*\
  !*** ./src/DropdownJS.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Dropdown_1 = __webpack_require__(/*! ./Dropdown */ "./src/Dropdown.ts");
var DropdownDoesNotExistException_1 = __webpack_require__(/*! ./exceptions/DropdownDoesNotExistException */ "./src/exceptions/DropdownDoesNotExistException.ts");
__webpack_require__(/*! ./scss/app.scss */ "./src/scss/app.scss");
/**
 * Public API for DropdownJS.
 */
var DropdownJS = /** @class */ (function () {
    function DropdownJS() {
        /**
         * List of instances of dropdowns indexed by Ids.
         */
        this.dropdownInstances = [];
    }
    /**
     * Initialize DropdownJS
     */
    DropdownJS.prototype.init = function () {
        var _this = this;
        document.body.addEventListener("click", function (e) {
            var element = e.target;
            // Click a dropdown button.
            var dropdownId = element.getAttribute("dropdown-id");
            var dropdown = _this.findByElement(element);
            _this.dropdownInstances.forEach(function (d) {
                if (dropdown === null && dropdownId === null || dropdownId !== null && d.id !== dropdownId) {
                    d.hide();
                }
            });
            if (dropdownId !== null) {
                var dropdownAlign = element.getAttribute("dropdown-align");
                if (dropdownAlign === null)
                    dropdownAlign = "left";
                if (_this.isOpen(dropdownId)) {
                    _this.hide(dropdownId);
                }
                else {
                    _this.show(dropdownId, {
                        align: dropdownAlign === null ? "left" : dropdownAlign,
                        target: element
                    });
                }
            }
            // Click an a[href] tag within a dropdown.
            if (dropdown !== null && element.getAttribute("href") !== null && element.tagName === "A") {
                dropdown.hide();
            }
        });
        document.querySelectorAll("[dropdown]").forEach(function (dropdown) {
            dropdown.classList.add("dd-wrapper");
            var instance = new Dropdown_1.Dropdown(dropdown);
            var containerSelector = dropdown.getAttribute("dropdown-container");
            if (containerSelector != null) {
                var element = document.querySelector(containerSelector);
                if (element instanceof HTMLElement) {
                    instance.$container = element;
                }
            }
            _this.dropdownInstances.push(instance);
        });
    };
    /**
     * Find a dropdown by an HTML element that is part of it. If
     * the dropdown doesn't exist, then null is returned.
     * @param element HTML element which is part of a dropdown.
     */
    DropdownJS.prototype.findByElement = function (element) {
        if (element.getAttribute("dropdown") == null) {
            return element.parentElement == null ? null : this.findByElement(element.parentElement);
        }
        return this.find(element.id);
    };
    /**
     * Find a dropdown by its Id.
     */
    DropdownJS.prototype.find = function (dropdownId) {
        var dropdown = this.dropdownInstances.find(function (d) { return d.id === dropdownId; });
        return dropdown === undefined ? null : dropdown;
    };
    /**
     * Get if the dropdown is currently open.
     * @param dropdownId Id of the dropdown.
     */
    DropdownJS.prototype.isOpen = function (dropdownId) {
        var dropdown = this.find(dropdownId);
        if (dropdown === null) {
            throw new DropdownDoesNotExistException_1.DropdownDoesNotExistException(dropdownId);
        }
        return dropdown.isOpen();
    };
    /**
     * Show the dropdown.
     */
    DropdownJS.prototype.show = function (dropdownId, options) {
        var dropdown = this.find(dropdownId);
        if (dropdown === null) {
            throw new DropdownDoesNotExistException_1.DropdownDoesNotExistException(dropdownId);
        }
        var settings = Object.assign({}, {
            align: "left",
            target: document.body
        }, options);
        dropdown.moveTo(settings.target, settings);
        dropdown.show();
        return dropdown;
    };
    /**
     * Hide the dropdown.
     */
    DropdownJS.prototype.hide = function (dropdownId) {
        if (dropdownId !== undefined) {
            var dropdown = this.find(dropdownId);
            if (dropdown === null) {
                throw new DropdownDoesNotExistException_1.DropdownDoesNotExistException(dropdownId);
            }
            dropdown.$dropdown.classList.remove("dd-shown");
            dropdown.hide();
            return dropdown;
        }
        else {
            this.dropdownInstances.forEach(function (d) {
                d.hide();
            });
        }
        return null;
    };
    return DropdownJS;
}());
exports.default = new DropdownJS();


/***/ }),

/***/ "./src/exceptions/DropdownDoesNotExistException.ts":
/*!*********************************************************!*\
  !*** ./src/exceptions/DropdownDoesNotExistException.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownDoesNotExistException = void 0;
var DropdownDoesNotExistException = /** @class */ (function () {
    function DropdownDoesNotExistException(dropdownId) {
        this.message = "[DropdownJS] Dropdown Id '" + dropdownId + "' does not exist!";
    }
    return DropdownDoesNotExistException;
}());
exports.DropdownDoesNotExistException = DropdownDoesNotExistException;


/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=DropdownJS.js.map