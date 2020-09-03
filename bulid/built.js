/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".qipan {\r\n    margin: auto;\r\n    display: block;\r\n}\r\n.btn{\r\n    margin: auto;\r\n    width: 100px;\r\n    height: 500px;\r\n}\r\n\r\n.btnhui,\r\n.btnche,\r\n.btncz{\r\n    margin: 10px;\r\n    border: 1px solid black;\r\n    text-align: center;\r\n}", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,cAAc;AAClB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;AACjB;;AAEA;;;IAGI,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;AACtB","sourcesContent":[".qipan {\r\n    margin: auto;\r\n    display: block;\r\n}\r\n.btn{\r\n    margin: auto;\r\n    width: 100px;\r\n    height: 500px;\r\n}\r\n\r\n.btnhui,\r\n.btnche,\r\n.btncz{\r\n    margin: 10px;\r\n    border: 1px solid black;\r\n    text-align: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
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

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./index.css */ "./src/index.css");
var myCanvas = document.querySelector('.qipan');
var btnhui = document.querySelector('.btnhui');
var btnche = document.querySelector('.btnche');
var btncz = document.querySelector('.btncz');
var cheqi = false;
var huiqi = false;
var size = 25;
var sizeNumber = 21;
var r = 10;
var weizi = [0, 0];
var qiziColor = 1;
var qiziColorData = new Array(sizeNumber);
for (var i = 0; i < sizeNumber; i++) {
    qiziColorData[i] = new Array(sizeNumber);
}
for (var n = 0; n < sizeNumber; n++) {
    for (var m = 0; m < sizeNumber; m++) {
        qiziColorData[n][m] = 3;
    }
}
var ctx = myCanvas.getContext('2d');
function qipan() {
    for (var i = 0; i < sizeNumber; i++) {
        ctx.beginPath();
        ctx.moveTo(0, size * i);
        ctx.lineTo(500, size * i);
        ctx.moveTo(size * i, 0);
        ctx.lineTo(size * i, 500);
        ctx.stroke();
        ctx.closePath();
    }
}
qipan();
function qizi(row, col, color) {
    ctx.beginPath();
    ctx.arc(row, col, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
myCanvas.onclick = function (e) {
    var x = e.clientX - myCanvas.offsetLeft;
    var y = e.clientY - myCanvas.offsetTop;
    var i = Math.round(x / size);
    var j = Math.round(y / size);
    weizi = [i, j];
    if (qiziColorData[i][j] == 3) {
        if (qiziColor) {
            qizi(i * size, j * size, 'red');
            qiziColor = 0;
            qiziColorData[i][j] = 1;
        }
        else {
            qizi(i * size, j * size, 'black');
            qiziColor = 1;
            qiziColorData[i][j] = 0;
        }
    }
    judge(i, j);
    cheqi = false;
    huiqi = true;
};
btnhui.onclick = function () {
    if (huiqi == true) {
        ctx.clearRect(weizi[0] * size - r, weizi[1] * size - r, size, size);
        ctx.beginPath();
        ctx.moveTo((weizi[0] - 1) * size, weizi[1] * size);
        ctx.lineTo((weizi[0] + 1) * size, weizi[1] * size);
        ctx.moveTo(weizi[0] * size, (weizi[1] - 1) * size);
        ctx.lineTo(weizi[0] * size, (weizi[1] + 1) * size);
        ctx.stroke();
        ctx.closePath;
        qiziColor = qiziColor == 1 ? 0 : 1;
        cheqi = true;
        qiziColorData[weizi[0]][weizi[1]] = 3;
    }
};
btnche.onclick = function () {
    if (cheqi == true) {
        ctx.beginPath();
        ctx.arc(weizi[0] * size, weizi[1] * size, r, 0, 2 * Math.PI);
        if (qiziColor == 1) {
            ctx.fillStyle = 'red';
        }
        else {
            ctx.fillStyle = 'black';
        }
        ctx.fill();
        ctx.closePath();
        qiziColorData[weizi[0]][weizi[1]] = qiziColor;
        qiziColor = qiziColor == 1 ? 0 : 1;
        cheqi = false;
    }
};
btncz.onclick = function () {
    ctx.clearRect(0, 0, 500, 500);
    qipan();
};
function judge(row, col) {
    var directionData = [
        [-1, 0], [1, 0],
        [0, -1], [0, 1],
        [-1, 1], [1, -1],
        [-1, -1], [1, 1]
    ];
    var _loop_1 = function (i) {
        var _a;
        var color = qiziColorData[row][col];
        var nextX = 0, nextY = 0, offsetX = 0, offsetY = 0;
        var count = 1;
        if (i % 2 == 0) {
            count = 1;
        }
        _a = directionData.pop(), offsetX = _a[0], offsetY = _a[1];
        nextX = row;
        nextY = col;
        while (nextX + offsetX >= 0 && nextX + offsetX < 21 &&
            nextY + offsetY >= 0 && nextY + offsetY < 21 &&
            qiziColorData[nextX += offsetX][nextY += offsetY] == color) {
            count++;
        }
        if (count >= 5) {
            setTimeout(function () { return alert("\u606D\u559C" + '黑红'[color] + "\u8272\u68CB\u5B50\u83B7\u80DC!"); });
            return "break";
        }
    };
    for (var i = 0; i < 8; i++) {
        var state_1 = _loop_1(i);
        if (state_1 === "break")
            break;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVCQUFxQjtBQUdyQixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBc0IsQ0FBQztBQUVyRSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBbUIsQ0FBQztBQUVqRSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBbUIsQ0FBQztBQUVqRSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBbUIsQ0FBQztBQUUvRCxJQUFJLEtBQUssR0FBWSxLQUFLLENBQUU7QUFFNUIsSUFBSSxLQUFLLEdBQVksS0FBSyxDQUFFO0FBRTVCLElBQU0sSUFBSSxHQUFXLEVBQUUsQ0FBQztBQUV4QixJQUFNLFVBQVUsR0FBVyxFQUFFLENBQUM7QUFFOUIsSUFBTSxDQUFDLEdBQVcsRUFBRSxDQUFDO0FBRXJCLElBQUksS0FBSyxHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBSTdCLElBQUksU0FBUyxHQUFTLENBQUMsQ0FBQztBQUV4QixJQUFJLGFBQWEsR0FBYSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNwRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ2pDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztDQUM1QztBQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFB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QUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BFLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVoQixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUE7UUFDbEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBO1FBRWxELEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQTtRQUNsRCxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUE7UUFFbEQsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2IsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUNkLFNBQVMsR0FBRyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN6QztBQUVMLENBQUMsQ0FBQTtBQUlELE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDYixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDZixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQzVELElBQUksU0FBUyxJQUFJLENBQUMsRUFBRTtZQUNoQixHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN6QjthQUFNO1lBQ0gsR0FBRyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FDM0I7UUFDRCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWCxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUM5QyxTQUFTLEdBQUcsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbEMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUNqQjtBQUNMLENBQUMsQ0FBQTtBQUNELEtBQUssQ0FBQyxPQUFPLEdBQUc7SUFDWixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLEtBQUssRUFBRSxDQUFDO0FBQ1osQ0FBQyxDQUFBO0FBT0QsU0FBUyxLQUFLLENBQUMsR0FBVyxFQUFFLEdBQVc7SUFDbkMsSUFBTSxhQUFhLEdBQWU7UUFDOUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNuQixDQUFBOzRCQUNRLENBQUM7O1FBQ04sSUFBSSxLQUFLLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNuRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1osS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNiO1FBQ0QsS0FBcUIsYUFBYSxDQUFDLEdBQUcsRUFBRSxFQUF2QyxPQUFPLFFBQUEsRUFBRSxPQUFPLFFBQUEsQ0FBd0I7UUFDekMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDWixPQUFPLEtBQUssR0FBRyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxPQUFPLEdBQUcsRUFBRTtZQUMvQyxLQUFLLEdBQUcsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUcsT0FBTyxHQUFHLEVBQUU7WUFDNUMsYUFBYSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxFQUFFO1lBQzVELEtBQUssRUFBRSxDQUFDO1NBQ1g7UUFDRCxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDWixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUssQ0FBQyxpQkFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLG9DQUFRLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDOztTQUVyRDs7SUFsQkwsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7OEJBQWpCLENBQUM7OztLQW1CVDtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vaW5kZXguY3NzJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG4vKirnlLvluIMgKi9cclxubGV0IG15Q2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnFpcGFuJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbi8qKuaClOaji+aMiemSriAqL1xyXG5sZXQgYnRuaHVpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bmh1aScpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4vKirmkqTplIDmjInpkq4gKi9cclxubGV0IGJ0bmNoZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5jaGUnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuLyoq6YeN572u5oyJ6ZKuICovXHJcbmxldCBidG5jeiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5jeicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4vKirmkqTmo4vnirbmgIHvvJsgKi9cclxubGV0IGNoZXFpOiBib29sZWFuID0gZmFsc2UgO1xyXG4vKirmgpTmo4vnirbmgIHvvJsgKi9cclxubGV0IGh1aXFpOiBib29sZWFuID0gZmFsc2UgO1xyXG4vKirmoLzlrZDnmoTlsLrlr7jlpKflsI8gKi9cclxuY29uc3Qgc2l6ZTogbnVtYmVyID0gMjU7XHJcbi8qKuihjOWIl+aVsCAqL1xyXG5jb25zdCBzaXplTnVtYmVyOiBudW1iZXIgPSAyMTtcclxuLyoq5ZyG55qE5Y2K5b6EICovXHJcbmNvbnN0IHI6IG51bWJlciA9IDEwO1xyXG4vKirmnIDlkI7kuIDmraXnmoTkvY3nva7kv6Hmga8gKi9cclxubGV0IHdlaXppOiBudW1iZXJbXSA9IFswLCAwXTtcclxuLyoq5qOL5a2Q6aKc6Imy57G75Z6LICovXHJcbnR5cGUgUGF3biA9IDB8MXwzOyBcclxuLyoq5LiL5qOL6aKc6Imy77yMMeaYr+e6ouiJsu+8jDDmmK/pu5HoibIqL1xyXG5sZXQgcWl6aUNvbG9yOiBQYXduID0gMTtcclxuLyoq5qOL55uY5LiK5L2N572u55qE6aKc6Imy5L+h5oGvICovXHJcbmxldCBxaXppQ29sb3JEYXRhOiBQYXduW11bXSA9IG5ldyBBcnJheShzaXplTnVtYmVyKTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplTnVtYmVyOyBpKyspIHtcclxuICAgIHFpemlDb2xvckRhdGFbaV0gPSBuZXcgQXJyYXkoc2l6ZU51bWJlcik7XHJcbn1cclxuZm9yIChsZXQgbiA9IDA7IG4gPCBzaXplTnVtYmVyOyBuKyspIHtcclxuICAgIGZvciAobGV0IG0gPSAwOyBtIDwgc2l6ZU51bWJlcjsgbSsrKSB7XHJcbiAgICAgICAgcWl6aUNvbG9yRGF0YVtuXVttXSA9IDM7XHJcbiAgICB9XHJcbn1cclxubGV0IGN0eCA9IG15Q2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4vKipcclxuICog57uY5Yi25qOL55uYXHJcbiAqL1xyXG5mdW5jdGlvbiBxaXBhbigpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZU51bWJlcjsgaSsrKSB7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8oMCwgc2l6ZSAqIGkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oNTAwLCBzaXplICogaSk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyhzaXplICogaSwgMCk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyhzaXplICogaSwgNTAwKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG59XHJcbnFpcGFuKCk7XHJcbi8qKlxyXG4gKue7mOWItuaji+WtkFxyXG4gKiBAcGFyYW0gcm93IHjovbTlnZDmoIdcclxuICogQHBhcmFtIGNvbCB56L205Z2Q5qCHXHJcbiAqIEBwYXJhbSBjb2xvciDmo4vlrZDpopzoibIgXHJcbiAqL1xyXG5mdW5jdGlvbiBxaXppKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgY29sb3I6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmFyYyhyb3csIGNvbCwgciwgMCwgMiAqIE1hdGguUEkpXHJcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICBjdHguZmlsbCgpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG59XHJcbi8qKlxyXG4gKiDkuIvmo4tcclxuICogQHBhcmFtIGUg5LqL5Lu2XHJcbiAqL1xyXG5teUNhbnZhcy5vbmNsaWNrID0gZnVuY3Rpb24gKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGxldCB4OiBudW1iZXIgPSBlLmNsaWVudFggLSBteUNhbnZhcy5vZmZzZXRMZWZ0O1xyXG4gICAgbGV0IHk6IG51bWJlciA9IGUuY2xpZW50WSAtIG15Q2FudmFzLm9mZnNldFRvcDtcclxuICAgIGxldCBpOiBudW1iZXIgPSBNYXRoLnJvdW5kKHggLyBzaXplKTtcclxuICAgIGxldCBqOiBudW1iZXIgPSBNYXRoLnJvdW5kKHkgLyBzaXplKTtcclxuICAgIHdlaXppID0gW2ksIGpdO1xyXG4gICAgaWYgKHFpemlDb2xvckRhdGFbaV1bal0gPT0gMykge1xyXG4gICAgICAgIGlmIChxaXppQ29sb3IpIHtcclxuICAgICAgICAgICAgcWl6aShpICogc2l6ZSwgaiAqIHNpemUsICdyZWQnKTtcclxuICAgICAgICAgICAgcWl6aUNvbG9yID0gMDtcclxuICAgICAgICAgICAgcWl6aUNvbG9yRGF0YVtpXVtqXSA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcWl6aShpICogc2l6ZSwgaiAqIHNpemUsICdibGFjaycpO1xyXG4gICAgICAgICAgICBxaXppQ29sb3IgPSAxO1xyXG4gICAgICAgICAgICBxaXppQ29sb3JEYXRhW2ldW2pdID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBqdWRnZShpLCBqKSAvL+WIpOaWrei+k+i1olxyXG4gICAgY2hlcWkgPSBmYWxzZTtcclxuICAgIGh1aXFpID0gdHJ1ZTtcclxufVxyXG4vKipcclxuICog5oKU5qOLXHJcbiAqL1xyXG5idG5odWkub25jbGljayA9IGZ1bmN0aW9uICgpOiB2b2lkIHtcclxuICAgIGlmIChodWlxaSA9PSB0cnVlKSB7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCh3ZWl6aVswXSAqIHNpemUgLSByLCB3ZWl6aVsxXSAqIHNpemUgLSByLCBzaXplLCBzaXplKTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcblxyXG4gICAgICAgIGN0eC5tb3ZlVG8oKHdlaXppWzBdIC0gMSkgKiBzaXplLCB3ZWl6aVsxXSAqIHNpemUpXHJcbiAgICAgICAgY3R4LmxpbmVUbygod2VpemlbMF0gKyAxKSAqIHNpemUsIHdlaXppWzFdICogc2l6ZSlcclxuXHJcbiAgICAgICAgY3R4Lm1vdmVUbyh3ZWl6aVswXSAqIHNpemUsICh3ZWl6aVsxXSAtIDEpICogc2l6ZSlcclxuICAgICAgICBjdHgubGluZVRvKHdlaXppWzBdICogc2l6ZSwgKHdlaXppWzFdICsgMSkgKiBzaXplKVxyXG5cclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aDtcclxuICAgICAgICBxaXppQ29sb3IgPSBxaXppQ29sb3IgPT0gMSA/IDAgOiAxO1xyXG4gICAgICAgIGNoZXFpID0gdHJ1ZTtcclxuICAgICAgICBxaXppQ29sb3JEYXRhW3dlaXppWzBdXVt3ZWl6aVsxXV0gPSAzO1xyXG4gICAgfVxyXG5cclxufVxyXG4vKipcclxuICog5pKk6ZSA5oKU5qOLXHJcbiAqL1xyXG5idG5jaGUub25jbGljayA9IGZ1bmN0aW9uICgpOiB2b2lkIHtcclxuICAgIGlmIChjaGVxaSA9PSB0cnVlKSB7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5hcmMod2VpemlbMF0gKiBzaXplLCB3ZWl6aVsxXSAqIHNpemUsIHIsIDAsIDIgKiBNYXRoLlBJKVxyXG4gICAgICAgIGlmIChxaXppQ29sb3IgPT0gMSkge1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIHFpemlDb2xvckRhdGFbd2VpemlbMF1dW3dlaXppWzFdXSA9IHFpemlDb2xvcjtcclxuICAgICAgICBxaXppQ29sb3IgPSBxaXppQ29sb3IgPT0gMSA/IDAgOiAxXHJcbiAgICAgICAgY2hlcWkgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5idG5jei5vbmNsaWNrID0gZnVuY3Rpb24gKCk6IHZvaWQge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCA1MDAsIDUwMCk7XHJcbiAgICBxaXBhbigpO1xyXG59XHJcbi8qKlxyXG4gKiDovpPotaLnmoTpgLvovpFcclxuICogQHBhcmFtIHJvdyB46L20IFxyXG4gKiBAcGFyYW0gY29sIHnovbQgXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24ganVkZ2Uocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBkaXJlY3Rpb25EYXRhOiBBcnJheTxhbnk+ID0gW1xyXG4gICAgICAgIFstMSwgMF0sIFsxLCAwXSwvL3jovbRcclxuICAgICAgICBbMCwgLTFdLCBbMCwgMV0sLy956L20XHJcbiAgICAgICAgWy0xLCAxXSwgWzEsIC0xXSwvL+W3puS4iuWIsOWPs+S4i1xyXG4gICAgICAgIFstMSwgLTFdLCBbMSwgMV0vL+W3puS4i+WIsOWPs+S4ilxyXG4gICAgXVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgICBsZXQgY29sb3IgPSBxaXppQ29sb3JEYXRhW3Jvd11bY29sXTtcclxuICAgICAgICBsZXQgbmV4dFggPSAwLCBuZXh0WSA9IDAsIG9mZnNldFggPSAwLCBvZmZzZXRZID0gMDtcclxuICAgICAgICBsZXQgY291bnQgPSAxO1xyXG4gICAgICAgIGlmIChpICUgMiA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvdW50ID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgW29mZnNldFgsIG9mZnNldFldID0gZGlyZWN0aW9uRGF0YS5wb3AoKTtcclxuICAgICAgICBuZXh0WCA9IHJvdztcclxuICAgICAgICBuZXh0WSA9IGNvbDtcclxuICAgICAgICB3aGlsZSAobmV4dFggKyBvZmZzZXRYID49IDAgJiYgbmV4dFggKyBvZmZzZXRYIDwgMjEgJiZcclxuICAgICAgICAgICAgbmV4dFkgKyBvZmZzZXRZID49IDAgJiYgbmV4dFkgKyBvZmZzZXRZIDwgMjEgJiZcclxuICAgICAgICAgICAgcWl6aUNvbG9yRGF0YVtuZXh0WCArPSBvZmZzZXRYXVtuZXh0WSArPSBvZmZzZXRZXSA9PSBjb2xvcikge1xyXG4gICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY291bnQgPj0gNSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGFsZXJ0KGDmga3llpwkeyfpu5HnuqInW2NvbG9yXX3oibLmo4vlrZDojrfog5whYCkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDeUY7QUFDekYsOEJBQThCLG1GQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLFdBQVcscUJBQXFCLHVCQUF1QixLQUFLLFNBQVMs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnRkFBZ0YsRUFBRTtBQUN0SDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG01YiIsImZpbGUiOiJidWlsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnFpcGFuIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLmJ0bntcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG5odWksXFxyXFxuLmJ0bmNoZSxcXHJcXG4uYnRuY3p7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBOzs7SUFHSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucWlwYW4ge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG4uYnRue1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bmh1aSxcXHJcXG4uYnRuY2hlLFxcclxcbi5idG5jentcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vaW5kZXguY3NzXCIpO1xyXG52YXIgbXlDYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucWlwYW4nKTtcclxudmFyIGJ0bmh1aSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5odWknKTtcclxudmFyIGJ0bmNoZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5jaGUnKTtcclxudmFyIGJ0bmN6ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bmN6Jyk7XHJcbnZhciBjaGVxaSA9IGZhbHNlO1xyXG52YXIgaHVpcWkgPSBmYWxzZTtcclxudmFyIHNpemUgPSAyNTtcclxudmFyIHNpemVOdW1iZXIgPSAyMTtcclxudmFyIHIgPSAxMDtcclxudmFyIHdlaXppID0gWzAsIDBdO1xyXG52YXIgcWl6aUNvbG9yID0gMTtcclxudmFyIHFpemlDb2xvckRhdGEgPSBuZXcgQXJyYXkoc2l6ZU51bWJlcik7XHJcbmZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZU51bWJlcjsgaSsrKSB7XHJcbiAgICBxaXppQ29sb3JEYXRhW2ldID0gbmV3IEFycmF5KHNpemVOdW1iZXIpO1xyXG59XHJcbmZvciAodmFyIG4gPSAwOyBuIDwgc2l6ZU51bWJlcjsgbisrKSB7XHJcbiAgICBmb3IgKHZhciBtID0gMDsgbSA8IHNpemVOdW1iZXI7IG0rKykge1xyXG4gICAgICAgIHFpemlDb2xvckRhdGFbbl1bbV0gPSAzO1xyXG4gICAgfVxyXG59XHJcbnZhciBjdHggPSBteUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5mdW5jdGlvbiBxaXBhbigpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZU51bWJlcjsgaSsrKSB7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8oMCwgc2l6ZSAqIGkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oNTAwLCBzaXplICogaSk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyhzaXplICogaSwgMCk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyhzaXplICogaSwgNTAwKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG59XHJcbnFpcGFuKCk7XHJcbmZ1bmN0aW9uIHFpemkocm93LCBjb2wsIGNvbG9yKSB7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKHJvdywgY29sLCByLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICBjdHguZmlsbCgpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG59XHJcbm15Q2FudmFzLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHggPSBlLmNsaWVudFggLSBteUNhbnZhcy5vZmZzZXRMZWZ0O1xyXG4gICAgdmFyIHkgPSBlLmNsaWVudFkgLSBteUNhbnZhcy5vZmZzZXRUb3A7XHJcbiAgICB2YXIgaSA9IE1hdGgucm91bmQoeCAvIHNpemUpO1xyXG4gICAgdmFyIGogPSBNYXRoLnJvdW5kKHkgLyBzaXplKTtcclxuICAgIHdlaXppID0gW2ksIGpdO1xyXG4gICAgaWYgKHFpemlDb2xvckRhdGFbaV1bal0gPT0gMykge1xyXG4gICAgICAgIGlmIChxaXppQ29sb3IpIHtcclxuICAgICAgICAgICAgcWl6aShpICogc2l6ZSwgaiAqIHNpemUsICdyZWQnKTtcclxuICAgICAgICAgICAgcWl6aUNvbG9yID0gMDtcclxuICAgICAgICAgICAgcWl6aUNvbG9yRGF0YVtpXVtqXSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBxaXppKGkgKiBzaXplLCBqICogc2l6ZSwgJ2JsYWNrJyk7XHJcbiAgICAgICAgICAgIHFpemlDb2xvciA9IDE7XHJcbiAgICAgICAgICAgIHFpemlDb2xvckRhdGFbaV1bal0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGp1ZGdlKGksIGopO1xyXG4gICAgY2hlcWkgPSBmYWxzZTtcclxuICAgIGh1aXFpID0gdHJ1ZTtcclxufTtcclxuYnRuaHVpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoaHVpcWkgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGN0eC5jbGVhclJlY3Qod2VpemlbMF0gKiBzaXplIC0gciwgd2VpemlbMV0gKiBzaXplIC0gciwgc2l6ZSwgc2l6ZSk7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8oKHdlaXppWzBdIC0gMSkgKiBzaXplLCB3ZWl6aVsxXSAqIHNpemUpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oKHdlaXppWzBdICsgMSkgKiBzaXplLCB3ZWl6aVsxXSAqIHNpemUpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8od2VpemlbMF0gKiBzaXplLCAod2VpemlbMV0gLSAxKSAqIHNpemUpO1xyXG4gICAgICAgIGN0eC5saW5lVG8od2VpemlbMF0gKiBzaXplLCAod2VpemlbMV0gKyAxKSAqIHNpemUpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHguY2xvc2VQYXRoO1xyXG4gICAgICAgIHFpemlDb2xvciA9IHFpemlDb2xvciA9PSAxID8gMCA6IDE7XHJcbiAgICAgICAgY2hlcWkgPSB0cnVlO1xyXG4gICAgICAgIHFpemlDb2xvckRhdGFbd2VpemlbMF1dW3dlaXppWzFdXSA9IDM7XHJcbiAgICB9XHJcbn07XHJcbmJ0bmNoZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGNoZXFpID09IHRydWUpIHtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmFyYyh3ZWl6aVswXSAqIHNpemUsIHdlaXppWzFdICogc2l6ZSwgciwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIGlmIChxaXppQ29sb3IgPT0gMSkge1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgcWl6aUNvbG9yRGF0YVt3ZWl6aVswXV1bd2VpemlbMV1dID0gcWl6aUNvbG9yO1xyXG4gICAgICAgIHFpemlDb2xvciA9IHFpemlDb2xvciA9PSAxID8gMCA6IDE7XHJcbiAgICAgICAgY2hlcWkgPSBmYWxzZTtcclxuICAgIH1cclxufTtcclxuYnRuY3oub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgNTAwLCA1MDApO1xyXG4gICAgcWlwYW4oKTtcclxufTtcclxuZnVuY3Rpb24ganVkZ2Uocm93LCBjb2wpIHtcclxuICAgIHZhciBkaXJlY3Rpb25EYXRhID0gW1xyXG4gICAgICAgIFstMSwgMF0sIFsxLCAwXSxcclxuICAgICAgICBbMCwgLTFdLCBbMCwgMV0sXHJcbiAgICAgICAgWy0xLCAxXSwgWzEsIC0xXSxcclxuICAgICAgICBbLTEsIC0xXSwgWzEsIDFdXHJcbiAgICBdO1xyXG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICB2YXIgY29sb3IgPSBxaXppQ29sb3JEYXRhW3Jvd11bY29sXTtcclxuICAgICAgICB2YXIgbmV4dFggPSAwLCBuZXh0WSA9IDAsIG9mZnNldFggPSAwLCBvZmZzZXRZID0gMDtcclxuICAgICAgICB2YXIgY291bnQgPSAxO1xyXG4gICAgICAgIGlmIChpICUgMiA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvdW50ID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX2EgPSBkaXJlY3Rpb25EYXRhLnBvcCgpLCBvZmZzZXRYID0gX2FbMF0sIG9mZnNldFkgPSBfYVsxXTtcclxuICAgICAgICBuZXh0WCA9IHJvdztcclxuICAgICAgICBuZXh0WSA9IGNvbDtcclxuICAgICAgICB3aGlsZSAobmV4dFggKyBvZmZzZXRYID49IDAgJiYgbmV4dFggKyBvZmZzZXRYIDwgMjEgJiZcclxuICAgICAgICAgICAgbmV4dFkgKyBvZmZzZXRZID49IDAgJiYgbmV4dFkgKyBvZmZzZXRZIDwgMjEgJiZcclxuICAgICAgICAgICAgcWl6aUNvbG9yRGF0YVtuZXh0WCArPSBvZmZzZXRYXVtuZXh0WSArPSBvZmZzZXRZXSA9PSBjb2xvcikge1xyXG4gICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY291bnQgPj0gNSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFsZXJ0KFwiXFx1NjA2RFxcdTU1OUNcIiArICfpu5HnuqInW2NvbG9yXSArIFwiXFx1ODI3MlxcdTY4Q0JcXHU1QjUwXFx1ODNCN1xcdTgwREMhXCIpOyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgICB2YXIgc3RhdGVfMSA9IF9sb29wXzEoaSk7XHJcbiAgICAgICAgaWYgKHN0YXRlXzEgPT09IFwiYnJlYWtcIilcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMSFZDUVVGeFFqdEJRVWR5UWl4SlFVRkpMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEZGQlFWRXNRMEZCYzBJc1EwRkJRenRCUVVWeVJTeEpRVUZKTEUxQlFVMHNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExGTkJRVk1zUTBGQmJVSXNRMEZCUXp0QlFVVnFSU3hKUVVGSkxFMUJRVTBzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRk5CUVZNc1EwRkJiVUlzUTBGQlF6dEJRVVZxUlN4SlFVRkpMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEZGQlFWRXNRMEZCYlVJc1EwRkJRenRCUVVVdlJDeEpRVUZKTEV0QlFVc3NSMEZCV1N4TFFVRkxMRU5CUVVVN1FVRkZOVUlzU1VGQlNTeExRVUZMTEVkQlFWa3NTMEZCU3l4RFFVRkZPMEZCUlRWQ0xFbEJRVTBzU1VGQlNTeEhRVUZYTEVWQlFVVXNRMEZCUXp0QlFVVjRRaXhKUVVGTkxGVkJRVlVzUjBGQlZ5eEZRVUZGTEVOQlFVTTdRVUZGT1VJc1NVRkJUU3hEUVVGRExFZEJRVmNzUlVGQlJTeERRVUZETzBGQlJYSkNMRWxCUVVrc1MwRkJTeXhIUVVGaExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCU1RkQ0xFbEJRVWtzVTBGQlV5eEhRVUZUTEVOQlFVTXNRMEZCUXp0QlFVVjRRaXhKUVVGSkxHRkJRV0VzUjBGQllTeEpRVUZKTEV0QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRCUVVOd1JDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMGxCUTJwRExHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRXRCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dERRVU0xUXp0QlFVTkVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3U1VGRGFrTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRSUVVOcVF5eGhRVUZoTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzB0QlF6TkNPME5CUTBvN1FVRkRSQ3hKUVVGSkxFZEJRVWNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJOa0lzUTBGQlF6dEJRVWxvUlN4VFFVRlRMRXRCUVVzN1NVRkRWaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFGQlEycERMRWRCUVVjc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF6dFJRVU5vUWl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRlRUlzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6RkNMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVONFFpeEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZETVVJc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFGQlEySXNSMEZCUnl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRE8wdEJRMjVDTzBGQlEwd3NRMEZCUXp0QlFVTkVMRXRCUVVzc1JVRkJSU3hEUVVGRE8wRkJUMUlzVTBGQlV5eEpRVUZKTEVOQlFVTXNSMEZCVnl4RlFVRkZMRWRCUVZjc1JVRkJSU3hMUVVGaE8wbEJRMnBFTEVkQlFVY3NRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRKUVVOb1FpeEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZCTzBsQlEzQkRMRWRCUVVjc1EwRkJReXhUUVVGVExFZEJRVWNzUzBGQlN5eERRVUZETzBsQlEzUkNMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEVkQlFVY3NRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRCUVVOd1FpeERRVUZETzBGQlMwUXNVVUZCVVN4RFFVRkRMRTlCUVU4c1IwRkJSeXhWUVVGVkxFTkJRV0U3U1VGRGRFTXNTVUZCU1N4RFFVRkRMRWRCUVZjc1EwRkJReXhEUVVGRExFOUJRVThzUjBGQlJ5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRPMGxCUTJoRUxFbEJRVWtzUTBGQlF5eEhRVUZYTEVOQlFVTXNRMEZCUXl4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF6dEpRVU12UXl4SlFVRkpMRU5CUVVNc1IwRkJWeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOeVF5eEpRVUZKTEVOQlFVTXNSMEZCVnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTnlReXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRaaXhKUVVGSkxHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3VVVGRE1VSXNTVUZCU1N4VFFVRlRMRVZCUVVVN1dVRkRXQ3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFsQlEyaERMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRFpDeGhRVUZoTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFOQlF6TkNPMkZCUVUwN1dVRkRTQ3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFsQlEyeERMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRFpDeGhRVUZoTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFOQlF6TkNPMHRCUTBvN1NVRkRSQ3hMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkJPMGxCUTFnc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU5rTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRha0lzUTBGQlF5eERRVUZCTzBGQlNVUXNUVUZCVFN4RFFVRkRMRTlCUVU4c1IwRkJSenRKUVVOaUxFbEJRVWtzUzBGQlN5eEpRVUZKTEVsQlFVa3NSVUZCUlR0UlFVTm1MRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNCRkxFZEJRVWNzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0UlFVVm9RaXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVRTdVVUZEYkVRc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZCTzFGQlJXeEVMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlFUdFJRVU5zUkN4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVUU3VVVGRmJFUXNSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8xRkJRMklzUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXp0UlFVTmtMRk5CUVZNc1IwRkJSeXhUUVVGVExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU51UXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMklzWVVGQllTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRMUVVONlF6dEJRVVZNTEVOQlFVTXNRMEZCUVR0QlFVbEVMRTFCUVUwc1EwRkJReXhQUVVGUExFZEJRVWM3U1VGRFlpeEpRVUZKTEV0QlFVc3NTVUZCU1N4SlFVRkpMRVZCUVVVN1VVRkRaaXhIUVVGSExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdVVUZEYUVJc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGQk8xRkJRelZFTEVsQlFVa3NVMEZCVXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOb1FpeEhRVUZITEVOQlFVTXNVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJRenRUUVVONlFqdGhRVUZOTzFsQlEwZ3NSMEZCUnl4RFFVRkRMRk5CUVZNc1IwRkJSeXhQUVVGUExFTkJRVU03VTBGRE0wSTdVVUZEUkN4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRFdDeEhRVUZITEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1VVRkRhRUlzWVVGQllTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJRenRSUVVNNVF5eFRRVUZUTEVkQlFVY3NVMEZCVXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVFN1VVRkRiRU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0TFFVTnFRanRCUVVOTUxFTkJRVU1zUTBGQlFUdEJRVU5FTEV0QlFVc3NRMEZCUXl4UFFVRlBMRWRCUVVjN1NVRkRXaXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzBsQlF6bENMRXRCUVVzc1JVRkJSU3hEUVVGRE8wRkJRMW9zUTBGQlF5eERRVUZCTzBGQlQwUXNVMEZCVXl4TFFVRkxMRU5CUVVNc1IwRkJWeXhGUVVGRkxFZEJRVmM3U1VGRGJrTXNTVUZCVFN4aFFVRmhMRWRCUVdVN1VVRkRPVUlzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEWml4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVObUxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYUVJc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dExRVU51UWl4RFFVRkJPelJDUVVOUkxFTkJRVU03TzFGQlEwNHNTVUZCU1N4TFFVRkxMRWRCUVVjc1lVRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNCRExFbEJRVWtzUzBGQlN5eEhRVUZITEVOQlFVTXNSVUZCUlN4TFFVRkxMRWRCUVVjc1EwRkJReXhGUVVGRkxFOUJRVThzUjBGQlJ5eERRVUZETEVWQlFVVXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOdVJDeEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRaQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUTFvc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF6dFRRVU5pTzFGQlEwUXNTMEZCY1VJc1lVRkJZU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUYyUXl4UFFVRlBMRkZCUVVFc1JVRkJSU3hQUVVGUExGRkJRVUVzUTBGQmQwSTdVVUZEZWtNc1MwRkJTeXhIUVVGSExFZEJRVWNzUTBGQlF6dFJRVU5hTEV0QlFVc3NSMEZCUnl4SFFVRkhMRU5CUVVNN1VVRkRXaXhQUVVGUExFdEJRVXNzUjBGQlJ5eFBRVUZQTEVsQlFVa3NRMEZCUXl4SlFVRkpMRXRCUVVzc1IwRkJSeXhQUVVGUExFZEJRVWNzUlVGQlJUdFpRVU12UXl4TFFVRkxMRWRCUVVjc1QwRkJUeXhKUVVGSkxFTkJRVU1zU1VGQlNTeExRVUZMTEVkQlFVY3NUMEZCVHl4SFFVRkhMRVZCUVVVN1dVRkROVU1zWVVGQllTeERRVUZETEV0QlFVc3NTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzVDBGQlR5eERRVUZETEVsQlFVa3NTMEZCU3l4RlFVRkZPMWxCUXpWRUxFdEJRVXNzUlVGQlJTeERRVUZETzFOQlExZzdVVUZEUkN4SlFVRkpMRXRCUVVzc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRFdpeFZRVUZWTEVOQlFVTXNZMEZCVFN4UFFVRkJMRXRCUVVzc1EwRkJReXhwUWtGQlN5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRzlEUVVGUkxFTkJRVU1zUlVGQkwwSXNRMEZCSzBJc1EwRkJReXhEUVVGRE96dFRRVVZ5UkRzN1NVRnNRa3dzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVTdPRUpCUVdwQ0xFTkJRVU03T3p0TFFXMUNWRHRCUVVOTUxFTkJRVU1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnSnk0dmFXNWtaWGd1WTNOekp6dGNjbHh1YVcxd2IzSjBJQ29nWVhNZ1h5Qm1jbTl0SUNkc2IyUmhjMmduTzF4eVhHNHZLaXJubEx2bHVJTWdLaTljY2x4dWJHVjBJRzE1UTJGdWRtRnpJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbkZwY0dGdUp5a2dZWE1nU0ZSTlRFTmhiblpoYzBWc1pXMWxiblE3WEhKY2JpOHFLdWFDbE9hamkrYU1pZW1TcmlBcUwxeHlYRzVzWlhRZ1luUnVhSFZwSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG1KMGJtaDFhU2NwSUdGeklFaFVUVXhFYVhaRmJHVnRaVzUwTzF4eVhHNHZLaXJta3FUcGxJRG1qSW5wa3E0Z0tpOWNjbHh1YkdWMElHSjBibU5vWlNBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1aWRHNWphR1VuS1NCaGN5QklWRTFNUkdsMlJXeGxiV1Z1ZER0Y2NseHVMeW9xNlllTjU3MnU1b3lKNlpLdUlDb3ZYSEpjYm14bGRDQmlkRzVqZWlBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1aWRHNWplaWNwSUdGeklFaFVUVXhFYVhaRmJHVnRaVzUwTzF4eVhHNHZLaXJta3FUbW80dm5pcmJtZ0lIdnZKc2dLaTljY2x4dWJHVjBJR05vWlhGcE9pQmliMjlzWldGdUlEMGdabUZzYzJVZ08xeHlYRzR2S2lybWdwVG1vNHZuaXJibWdJSHZ2SnNnS2k5Y2NseHViR1YwSUdoMWFYRnBPaUJpYjI5c1pXRnVJRDBnWm1Gc2MyVWdPMXh5WEc0dktpcm1vTHpsclpEbm1vVGxzTHJscjdqbHBLZmxzSThnS2k5Y2NseHVZMjl1YzNRZ2MybDZaVG9nYm5WdFltVnlJRDBnTWpVN1hISmNiaThxS3VpaGpPV0lsK2FWc0NBcUwxeHlYRzVqYjI1emRDQnphWHBsVG5WdFltVnlPaUJ1ZFcxaVpYSWdQU0F5TVR0Y2NseHVMeW9xNVp5RzU1cUU1WTJLNWI2RUlDb3ZYSEpjYm1OdmJuTjBJSEk2SUc1MWJXSmxjaUE5SURFd08xeHlYRzR2S2lybW5JRGxrSTdrdUlEbXJhWG5tb1RrdlkzbnZhN2t2NkhtZ2E4Z0tpOWNjbHh1YkdWMElIZGxhWHBwT2lCdWRXMWlaWEpiWFNBOUlGc3dMQ0F3WFR0Y2NseHVMeW9xNXFPTDVhMlE2YUtjNklteTU3Rzc1WjZMSUNvdlhISmNiblI1Y0dVZ1VHRjNiaUE5SURCOE1Yd3pPeUJjY2x4dUx5b3E1TGlMNXFPTDZhS2M2SW15Nzd5TU1lYVlyK2U2b3VpSnN1KzhqRERtbUsvcHU1SG9pYklxTDF4eVhHNXNaWFFnY1dsNmFVTnZiRzl5T2lCUVlYZHVJRDBnTVR0Y2NseHVMeW9xNXFPTDU1dVk1TGlLNUwyTjU3MnU1NXFFNmFLYzZJbXk1TCtoNW9HdklDb3ZYSEpjYm14bGRDQnhhWHBwUTI5c2IzSkVZWFJoT2lCUVlYZHVXMTFiWFNBOUlHNWxkeUJCY25KaGVTaHphWHBsVG5WdFltVnlLVHRjY2x4dVptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnphWHBsVG5WdFltVnlPeUJwS3lzcElIdGNjbHh1SUNBZ0lIRnBlbWxEYjJ4dmNrUmhkR0ZiYVYwZ1BTQnVaWGNnUVhKeVlYa29jMmw2WlU1MWJXSmxjaWs3WEhKY2JuMWNjbHh1Wm05eUlDaHNaWFFnYmlBOUlEQTdJRzRnUENCemFYcGxUblZ0WW1WeU95QnVLeXNwSUh0Y2NseHVJQ0FnSUdadmNpQW9iR1YwSUcwZ1BTQXdPeUJ0SUR3Z2MybDZaVTUxYldKbGNqc2diU3NyS1NCN1hISmNiaUFnSUNBZ0lDQWdjV2w2YVVOdmJHOXlSR0YwWVZ0dVhWdHRYU0E5SURNN1hISmNiaUFnSUNCOVhISmNibjFjY2x4dWJHVjBJR04wZUNBOUlHMTVRMkZ1ZG1GekxtZGxkRU52Ym5SbGVIUW9KekprSnlrZ1lYTWdRMkZ1ZG1GelVtVnVaR1Z5YVc1blEyOXVkR1Y0ZERKRU8xeHlYRzR2S2lwY2NseHVJQ29nNTd1WTVZaTI1cU9MNTV1WVhISmNiaUFxTDF4eVhHNW1kVzVqZEdsdmJpQnhhWEJoYmlncE9pQjJiMmxrSUh0Y2NseHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2MybDZaVTUxYldKbGNqc2dhU3NyS1NCN1hISmNiaUFnSUNBZ0lDQWdZM1I0TG1KbFoybHVVR0YwYUNncE8xeHlYRzRnSUNBZ0lDQWdJR04wZUM1dGIzWmxWRzhvTUN3Z2MybDZaU0FxSUdrcE8xeHlYRzRnSUNBZ0lDQWdJR04wZUM1c2FXNWxWRzhvTlRBd0xDQnphWHBsSUNvZ2FTazdYSEpjYmlBZ0lDQWdJQ0FnWTNSNExtMXZkbVZVYnloemFYcGxJQ29nYVN3Z01DazdYSEpjYmlBZ0lDQWdJQ0FnWTNSNExteHBibVZVYnloemFYcGxJQ29nYVN3Z05UQXdLVHRjY2x4dUlDQWdJQ0FnSUNCamRIZ3VjM1J5YjJ0bEtDazdYSEpjYmlBZ0lDQWdJQ0FnWTNSNExtTnNiM05sVUdGMGFDZ3BPMXh5WEc0Z0lDQWdmVnh5WEc1OVhISmNibkZwY0dGdUtDazdYSEpjYmk4cUtseHlYRzRnS3VlN21PV0l0dWFqaStXdGtGeHlYRzRnS2lCQWNHRnlZVzBnY205M0lIam92YlRsblpEbW9JZGNjbHh1SUNvZ1FIQmhjbUZ0SUdOdmJDQjU2TDIwNVoyUTVxQ0hYSEpjYmlBcUlFQndZWEpoYlNCamIyeHZjaURtbzR2bHJaRHBvcHpvaWJJZ1hISmNiaUFxTDF4eVhHNW1kVzVqZEdsdmJpQnhhWHBwS0hKdmR6b2diblZ0WW1WeUxDQmpiMnc2SUc1MWJXSmxjaXdnWTI5c2IzSTZJSE4wY21sdVp5azZJSFp2YVdRZ2UxeHlYRzRnSUNBZ1kzUjRMbUpsWjJsdVVHRjBhQ2dwTzF4eVhHNGdJQ0FnWTNSNExtRnlZeWh5YjNjc0lHTnZiQ3dnY2l3Z01Dd2dNaUFxSUUxaGRHZ3VVRWtwWEhKY2JpQWdJQ0JqZEhndVptbHNiRk4wZVd4bElEMGdZMjlzYjNJN1hISmNiaUFnSUNCamRIZ3VabWxzYkNncE8xeHlYRzRnSUNBZ1kzUjRMbU5zYjNObFVHRjBhQ2dwTzF4eVhHNTlYSEpjYmk4cUtseHlYRzRnS2lEa3VJdm1vNHRjY2x4dUlDb2dRSEJoY21GdElHVWc1THFMNUx1MlhISmNiaUFxTDF4eVhHNXRlVU5oYm5aaGN5NXZibU5zYVdOcklEMGdablZ1WTNScGIyNGdLR1U2SUUxdmRYTmxSWFpsYm5RcE9pQjJiMmxrSUh0Y2NseHVJQ0FnSUd4bGRDQjRPaUJ1ZFcxaVpYSWdQU0JsTG1Oc2FXVnVkRmdnTFNCdGVVTmhiblpoY3k1dlptWnpaWFJNWldaME8xeHlYRzRnSUNBZ2JHVjBJSGs2SUc1MWJXSmxjaUE5SUdVdVkyeHBaVzUwV1NBdElHMTVRMkZ1ZG1GekxtOW1abk5sZEZSdmNEdGNjbHh1SUNBZ0lHeGxkQ0JwT2lCdWRXMWlaWElnUFNCTllYUm9Mbkp2ZFc1a0tIZ2dMeUJ6YVhwbEtUdGNjbHh1SUNBZ0lHeGxkQ0JxT2lCdWRXMWlaWElnUFNCTllYUm9Mbkp2ZFc1a0tIa2dMeUJ6YVhwbEtUdGNjbHh1SUNBZ0lIZGxhWHBwSUQwZ1cya3NJR3BkTzF4eVhHNGdJQ0FnYVdZZ0tIRnBlbWxEYjJ4dmNrUmhkR0ZiYVYxYmFsMGdQVDBnTXlrZ2UxeHlYRzRnSUNBZ0lDQWdJR2xtSUNoeGFYcHBRMjlzYjNJcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NXbDZhU2hwSUNvZ2MybDZaU3dnYWlBcUlITnBlbVVzSUNkeVpXUW5LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjV2w2YVVOdmJHOXlJRDBnTUR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY1dsNmFVTnZiRzl5UkdGMFlWdHBYVnRxWFNBOUlERTdYSEpjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjV2w2YVNocElDb2djMmw2WlN3Z2FpQXFJSE5wZW1Vc0lDZGliR0ZqYXljcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeGFYcHBRMjlzYjNJZ1BTQXhPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnhhWHBwUTI5c2IzSkVZWFJoVzJsZFcycGRJRDBnTUR0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQnFkV1JuWlNocExDQnFLU0F2TCtXSXBPYVdyZWkraytpMW9seHlYRzRnSUNBZ1kyaGxjV2tnUFNCbVlXeHpaVHRjY2x4dUlDQWdJR2gxYVhGcElEMGdkSEoxWlR0Y2NseHVmVnh5WEc0dktpcGNjbHh1SUNvZzVvS1U1cU9MWEhKY2JpQXFMMXh5WEc1aWRHNW9kV2t1YjI1amJHbGpheUE5SUdaMWJtTjBhVzl1SUNncE9pQjJiMmxrSUh0Y2NseHVJQ0FnSUdsbUlDaG9kV2x4YVNBOVBTQjBjblZsS1NCN1hISmNiaUFnSUNBZ0lDQWdZM1I0TG1Oc1pXRnlVbVZqZENoM1pXbDZhVnN3WFNBcUlITnBlbVVnTFNCeUxDQjNaV2w2YVZzeFhTQXFJSE5wZW1VZ0xTQnlMQ0J6YVhwbExDQnphWHBsS1R0Y2NseHVJQ0FnSUNBZ0lDQmpkSGd1WW1WbmFXNVFZWFJvS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdOMGVDNXRiM1psVkc4b0tIZGxhWHBwV3pCZElDMGdNU2tnS2lCemFYcGxMQ0IzWldsNmFWc3hYU0FxSUhOcGVtVXBYSEpjYmlBZ0lDQWdJQ0FnWTNSNExteHBibVZVYnlnb2QyVnBlbWxiTUYwZ0t5QXhLU0FxSUhOcGVtVXNJSGRsYVhwcFd6RmRJQ29nYzJsNlpTbGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1kzUjRMbTF2ZG1WVWJ5aDNaV2w2YVZzd1hTQXFJSE5wZW1Vc0lDaDNaV2w2YVZzeFhTQXRJREVwSUNvZ2MybDZaU2xjY2x4dUlDQWdJQ0FnSUNCamRIZ3ViR2x1WlZSdktIZGxhWHBwV3pCZElDb2djMmw2WlN3Z0tIZGxhWHBwV3pGZElDc2dNU2tnS2lCemFYcGxLVnh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmpkSGd1YzNSeWIydGxLQ2s3WEhKY2JpQWdJQ0FnSUNBZ1kzUjRMbU5zYjNObFVHRjBhRHRjY2x4dUlDQWdJQ0FnSUNCeGFYcHBRMjlzYjNJZ1BTQnhhWHBwUTI5c2IzSWdQVDBnTVNBL0lEQWdPaUF4TzF4eVhHNGdJQ0FnSUNBZ0lHTm9aWEZwSUQwZ2RISjFaVHRjY2x4dUlDQWdJQ0FnSUNCeGFYcHBRMjlzYjNKRVlYUmhXM2RsYVhwcFd6QmRYVnQzWldsNmFWc3hYVjBnUFNBek8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dWZWeHlYRzR2S2lwY2NseHVJQ29nNXBLazZaU0E1b0tVNXFPTFhISmNiaUFxTDF4eVhHNWlkRzVqYUdVdWIyNWpiR2xqYXlBOUlHWjFibU4wYVc5dUlDZ3BPaUIyYjJsa0lIdGNjbHh1SUNBZ0lHbG1JQ2hqYUdWeGFTQTlQU0IwY25WbEtTQjdYSEpjYmlBZ0lDQWdJQ0FnWTNSNExtSmxaMmx1VUdGMGFDZ3BPMXh5WEc0Z0lDQWdJQ0FnSUdOMGVDNWhjbU1vZDJWcGVtbGJNRjBnS2lCemFYcGxMQ0IzWldsNmFWc3hYU0FxSUhOcGVtVXNJSElzSURBc0lESWdLaUJOWVhSb0xsQkpLVnh5WEc0Z0lDQWdJQ0FnSUdsbUlDaHhhWHBwUTI5c2IzSWdQVDBnTVNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamRIZ3VabWxzYkZOMGVXeGxJRDBnSjNKbFpDYzdYSEpjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZM1I0TG1acGJHeFRkSGxzWlNBOUlDZGliR0ZqYXljN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUdOMGVDNW1hV3hzS0NrN1hISmNiaUFnSUNBZ0lDQWdZM1I0TG1Oc2IzTmxVR0YwYUNncE8xeHlYRzRnSUNBZ0lDQWdJSEZwZW1sRGIyeHZja1JoZEdGYmQyVnBlbWxiTUYxZFczZGxhWHBwV3pGZFhTQTlJSEZwZW1sRGIyeHZjanRjY2x4dUlDQWdJQ0FnSUNCeGFYcHBRMjlzYjNJZ1BTQnhhWHBwUTI5c2IzSWdQVDBnTVNBL0lEQWdPaUF4WEhKY2JpQWdJQ0FnSUNBZ1kyaGxjV2tnUFNCbVlXeHpaVHRjY2x4dUlDQWdJSDFjY2x4dWZWeHlYRzVpZEc1amVpNXZibU5zYVdOcklEMGdablZ1WTNScGIyNGdLQ2s2SUhadmFXUWdlMXh5WEc0Z0lDQWdZM1I0TG1Oc1pXRnlVbVZqZENnd0xDQXdMQ0ExTURBc0lEVXdNQ2s3WEhKY2JpQWdJQ0J4YVhCaGJpZ3BPMXh5WEc1OVhISmNiaThxS2x4eVhHNGdLaURvdnBQb3RhTG5tb1RwZ0x2b3ZwRmNjbHh1SUNvZ1FIQmhjbUZ0SUhKdmR5QjQ2TDIwSUZ4eVhHNGdLaUJBY0dGeVlXMGdZMjlzSUhub3ZiUWdYSEpjYmlBcUwxeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2FuVmtaMlVvY205M09pQnVkVzFpWlhJc0lHTnZiRG9nYm5WdFltVnlLVG9nZG05cFpDQjdYSEpjYmlBZ0lDQmpiMjV6ZENCa2FYSmxZM1JwYjI1RVlYUmhPaUJCY25KaGVUeGhibmsrSUQwZ1cxeHlYRzRnSUNBZ0lDQWdJRnN0TVN3Z01GMHNJRnN4TENBd1hTd3ZMM2pvdmJSY2NseHVJQ0FnSUNBZ0lDQmJNQ3dnTFRGZExDQmJNQ3dnTVYwc0x5OTU2TDIwWEhKY2JpQWdJQ0FnSUNBZ1d5MHhMQ0F4WFN3Z1d6RXNJQzB4WFN3dkwrVzNwdVM0aXVXSXNPV1BzK1M0aTF4eVhHNGdJQ0FnSUNBZ0lGc3RNU3dnTFRGZExDQmJNU3dnTVYwdkwrVzNwdVM0aStXSXNPV1BzK1M0aWx4eVhHNGdJQ0FnWFZ4eVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENBNE95QnBLeXNwSUh0Y2NseHVJQ0FnSUNBZ0lDQnNaWFFnWTI5c2IzSWdQU0J4YVhwcFEyOXNiM0pFWVhSaFczSnZkMTFiWTI5c1hUdGNjbHh1SUNBZ0lDQWdJQ0JzWlhRZ2JtVjRkRmdnUFNBd0xDQnVaWGgwV1NBOUlEQXNJRzltWm5ObGRGZ2dQU0F3TENCdlptWnpaWFJaSUQwZ01EdGNjbHh1SUNBZ0lDQWdJQ0JzWlhRZ1kyOTFiblFnUFNBeE8xeHlYRzRnSUNBZ0lDQWdJR2xtSUNocElDVWdNaUE5UFNBd0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZkVzUwSUQwZ01UdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ1cyOW1abk5sZEZnc0lHOW1abk5sZEZsZElEMGdaR2x5WldOMGFXOXVSR0YwWVM1d2IzQW9LVHRjY2x4dUlDQWdJQ0FnSUNCdVpYaDBXQ0E5SUhKdmR6dGNjbHh1SUNBZ0lDQWdJQ0J1WlhoMFdTQTlJR052YkR0Y2NseHVJQ0FnSUNBZ0lDQjNhR2xzWlNBb2JtVjRkRmdnS3lCdlptWnpaWFJZSUQ0OUlEQWdKaVlnYm1WNGRGZ2dLeUJ2Wm1aelpYUllJRHdnTWpFZ0ppWmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JtVjRkRmtnS3lCdlptWnpaWFJaSUQ0OUlEQWdKaVlnYm1WNGRGa2dLeUJ2Wm1aelpYUlpJRHdnTWpFZ0ppWmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NXbDZhVU52Ykc5eVJHRjBZVnR1WlhoMFdDQXJQU0J2Wm1aelpYUllYVnR1WlhoMFdTQXJQU0J2Wm1aelpYUlpYU0E5UFNCamIyeHZjaWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjNWdWRDc3JPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQnBaaUFvWTI5MWJuUWdQajBnTlNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCelpYUlVhVzFsYjNWMEtDZ3BJRDArSUdGc1pYSjBLR0RtZ2EzbGxwd2tleWZwdTVIbnVxSW5XMk52Ykc5eVhYM29pYkxtbzR2bHJaRG9qcmZvZzV3aFlDa3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYm4waVhYMD0iXSwic291cmNlUm9vdCI6IiJ9