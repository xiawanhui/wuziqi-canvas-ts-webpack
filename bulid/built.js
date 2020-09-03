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

/***/ "../../node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*****************************************************************!*\
  !*** E:/代码/node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".qipan {\r\n    margin: auto;\r\n    display: block;\r\n}\r\n.btn{\r\n    margin: auto;\r\n    width: 100px;\r\n    height: 500px;\r\n}\r\n\r\n.btnhui,\r\n.btnche,\r\n.btncz{\r\n    margin: 10px;\r\n    border: 1px solid black;\r\n    text-align: center;\r\n}", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,cAAc;AAClB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;AACjB;;AAEA;;;IAGI,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;AACtB","sourcesContent":[".qipan {\r\n    margin: auto;\r\n    display: block;\r\n}\r\n.btn{\r\n    margin: auto;\r\n    width: 100px;\r\n    height: 500px;\r\n}\r\n\r\n.btnhui,\r\n.btnche,\r\n.btncz{\r\n    margin: 10px;\r\n    border: 1px solid black;\r\n    text-align: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** E:/代码/node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
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

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** E:/代码/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
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

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./index.css */ "../../node_modules/css-loader/dist/cjs.js!./src/index.css");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vRTov5Luj56CBL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vL0U6L+S7o+eggS9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcz8zYjUxIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQytGO0FBQy9GLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxXQUFXLHFCQUFxQix1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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0ZBQWdGLEVBQUU7QUFDdEg7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtNWIiLCJmaWxlIjoiYnVpbHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5xaXBhbiB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5idG57XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuaHVpLFxcclxcbi5idG5jaGUsXFxyXFxuLmJ0bmN6e1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTs7O0lBR0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnFpcGFuIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLmJ0bntcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG5odWksXFxyXFxuLmJ0bmNoZSxcXHJcXG4uYnRuY3p7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2luZGV4LmNzc1wiKTtcclxudmFyIG15Q2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnFpcGFuJyk7XHJcbnZhciBidG5odWkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuaHVpJyk7XHJcbnZhciBidG5jaGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuY2hlJyk7XHJcbnZhciBidG5jeiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5jeicpO1xyXG52YXIgY2hlcWkgPSBmYWxzZTtcclxudmFyIGh1aXFpID0gZmFsc2U7XHJcbnZhciBzaXplID0gMjU7XHJcbnZhciBzaXplTnVtYmVyID0gMjE7XHJcbnZhciByID0gMTA7XHJcbnZhciB3ZWl6aSA9IFswLCAwXTtcclxudmFyIHFpemlDb2xvciA9IDE7XHJcbnZhciBxaXppQ29sb3JEYXRhID0gbmV3IEFycmF5KHNpemVOdW1iZXIpO1xyXG5mb3IgKHZhciBpID0gMDsgaSA8IHNpemVOdW1iZXI7IGkrKykge1xyXG4gICAgcWl6aUNvbG9yRGF0YVtpXSA9IG5ldyBBcnJheShzaXplTnVtYmVyKTtcclxufVxyXG5mb3IgKHZhciBuID0gMDsgbiA8IHNpemVOdW1iZXI7IG4rKykge1xyXG4gICAgZm9yICh2YXIgbSA9IDA7IG0gPCBzaXplTnVtYmVyOyBtKyspIHtcclxuICAgICAgICBxaXppQ29sb3JEYXRhW25dW21dID0gMztcclxuICAgIH1cclxufVxyXG52YXIgY3R4ID0gbXlDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuZnVuY3Rpb24gcWlwYW4oKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemVOdW1iZXI7IGkrKykge1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubW92ZVRvKDAsIHNpemUgKiBpKTtcclxuICAgICAgICBjdHgubGluZVRvKDUwMCwgc2l6ZSAqIGkpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8oc2l6ZSAqIGksIDApO1xyXG4gICAgICAgIGN0eC5saW5lVG8oc2l6ZSAqIGksIDUwMCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIH1cclxufVxyXG5xaXBhbigpO1xyXG5mdW5jdGlvbiBxaXppKHJvdywgY29sLCBjb2xvcikge1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmFyYyhyb3csIGNvbCwgciwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxufVxyXG5teUNhbnZhcy5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciB4ID0gZS5jbGllbnRYIC0gbXlDYW52YXMub2Zmc2V0TGVmdDtcclxuICAgIHZhciB5ID0gZS5jbGllbnRZIC0gbXlDYW52YXMub2Zmc2V0VG9wO1xyXG4gICAgdmFyIGkgPSBNYXRoLnJvdW5kKHggLyBzaXplKTtcclxuICAgIHZhciBqID0gTWF0aC5yb3VuZCh5IC8gc2l6ZSk7XHJcbiAgICB3ZWl6aSA9IFtpLCBqXTtcclxuICAgIGlmIChxaXppQ29sb3JEYXRhW2ldW2pdID09IDMpIHtcclxuICAgICAgICBpZiAocWl6aUNvbG9yKSB7XHJcbiAgICAgICAgICAgIHFpemkoaSAqIHNpemUsIGogKiBzaXplLCAncmVkJyk7XHJcbiAgICAgICAgICAgIHFpemlDb2xvciA9IDA7XHJcbiAgICAgICAgICAgIHFpemlDb2xvckRhdGFbaV1bal0gPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcWl6aShpICogc2l6ZSwgaiAqIHNpemUsICdibGFjaycpO1xyXG4gICAgICAgICAgICBxaXppQ29sb3IgPSAxO1xyXG4gICAgICAgICAgICBxaXppQ29sb3JEYXRhW2ldW2pdID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBqdWRnZShpLCBqKTtcclxuICAgIGNoZXFpID0gZmFsc2U7XHJcbiAgICBodWlxaSA9IHRydWU7XHJcbn07XHJcbmJ0bmh1aS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGh1aXFpID09IHRydWUpIHtcclxuICAgICAgICBjdHguY2xlYXJSZWN0KHdlaXppWzBdICogc2l6ZSAtIHIsIHdlaXppWzFdICogc2l6ZSAtIHIsIHNpemUsIHNpemUpO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubW92ZVRvKCh3ZWl6aVswXSAtIDEpICogc2l6ZSwgd2VpemlbMV0gKiBzaXplKTtcclxuICAgICAgICBjdHgubGluZVRvKCh3ZWl6aVswXSArIDEpICogc2l6ZSwgd2VpemlbMV0gKiBzaXplKTtcclxuICAgICAgICBjdHgubW92ZVRvKHdlaXppWzBdICogc2l6ZSwgKHdlaXppWzFdIC0gMSkgKiBzaXplKTtcclxuICAgICAgICBjdHgubGluZVRvKHdlaXppWzBdICogc2l6ZSwgKHdlaXppWzFdICsgMSkgKiBzaXplKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aDtcclxuICAgICAgICBxaXppQ29sb3IgPSBxaXppQ29sb3IgPT0gMSA/IDAgOiAxO1xyXG4gICAgICAgIGNoZXFpID0gdHJ1ZTtcclxuICAgICAgICBxaXppQ29sb3JEYXRhW3dlaXppWzBdXVt3ZWl6aVsxXV0gPSAzO1xyXG4gICAgfVxyXG59O1xyXG5idG5jaGUub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChjaGVxaSA9PSB0cnVlKSB7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5hcmMod2VpemlbMF0gKiBzaXplLCB3ZWl6aVsxXSAqIHNpemUsIHIsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICBpZiAocWl6aUNvbG9yID09IDEpIHtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIHFpemlDb2xvckRhdGFbd2VpemlbMF1dW3dlaXppWzFdXSA9IHFpemlDb2xvcjtcclxuICAgICAgICBxaXppQ29sb3IgPSBxaXppQ29sb3IgPT0gMSA/IDAgOiAxO1xyXG4gICAgICAgIGNoZXFpID0gZmFsc2U7XHJcbiAgICB9XHJcbn07XHJcbmJ0bmN6Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDUwMCwgNTAwKTtcclxuICAgIHFpcGFuKCk7XHJcbn07XHJcbmZ1bmN0aW9uIGp1ZGdlKHJvdywgY29sKSB7XHJcbiAgICB2YXIgZGlyZWN0aW9uRGF0YSA9IFtcclxuICAgICAgICBbLTEsIDBdLCBbMSwgMF0sXHJcbiAgICAgICAgWzAsIC0xXSwgWzAsIDFdLFxyXG4gICAgICAgIFstMSwgMV0sIFsxLCAtMV0sXHJcbiAgICAgICAgWy0xLCAtMV0sIFsxLCAxXVxyXG4gICAgXTtcclxuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdmFyIGNvbG9yID0gcWl6aUNvbG9yRGF0YVtyb3ddW2NvbF07XHJcbiAgICAgICAgdmFyIG5leHRYID0gMCwgbmV4dFkgPSAwLCBvZmZzZXRYID0gMCwgb2Zmc2V0WSA9IDA7XHJcbiAgICAgICAgdmFyIGNvdW50ID0gMTtcclxuICAgICAgICBpZiAoaSAlIDIgPT0gMCkge1xyXG4gICAgICAgICAgICBjb3VudCA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9hID0gZGlyZWN0aW9uRGF0YS5wb3AoKSwgb2Zmc2V0WCA9IF9hWzBdLCBvZmZzZXRZID0gX2FbMV07XHJcbiAgICAgICAgbmV4dFggPSByb3c7XHJcbiAgICAgICAgbmV4dFkgPSBjb2w7XHJcbiAgICAgICAgd2hpbGUgKG5leHRYICsgb2Zmc2V0WCA+PSAwICYmIG5leHRYICsgb2Zmc2V0WCA8IDIxICYmXHJcbiAgICAgICAgICAgIG5leHRZICsgb2Zmc2V0WSA+PSAwICYmIG5leHRZICsgb2Zmc2V0WSA8IDIxICYmXHJcbiAgICAgICAgICAgIHFpemlDb2xvckRhdGFbbmV4dFggKz0gb2Zmc2V0WF1bbmV4dFkgKz0gb2Zmc2V0WV0gPT0gY29sb3IpIHtcclxuICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvdW50ID49IDUpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBhbGVydChcIlxcdTYwNkRcXHU1NTlDXCIgKyAn6buR57qiJ1tjb2xvcl0gKyBcIlxcdTgyNzJcXHU2OENCXFx1NUI1MFxcdTgzQjdcXHU4MERDIVwiKTsgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBcImJyZWFrXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgdmFyIHN0YXRlXzEgPSBfbG9vcF8xKGkpO1xyXG4gICAgICAgIGlmIChzdGF0ZV8xID09PSBcImJyZWFrXCIpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEhWQ1FVRnhRanRCUVVkeVFpeEpRVUZKTEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExGRkJRVkVzUTBGQmMwSXNRMEZCUXp0QlFVVnlSU3hKUVVGSkxFMUJRVTBzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRk5CUVZNc1EwRkJiVUlzUTBGQlF6dEJRVVZxUlN4SlFVRkpMRTFCUVUwc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEZOQlFWTXNRMEZCYlVJc1EwRkJRenRCUVVWcVJTeEpRVUZKTEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExGRkJRVkVzUTBGQmJVSXNRMEZCUXp0QlFVVXZSQ3hKUVVGSkxFdEJRVXNzUjBGQldTeExRVUZMTEVOQlFVVTdRVUZGTlVJc1NVRkJTU3hMUVVGTExFZEJRVmtzUzBGQlN5eERRVUZGTzBGQlJUVkNMRWxCUVUwc1NVRkJTU3hIUVVGWExFVkJRVVVzUTBGQlF6dEJRVVY0UWl4SlFVRk5MRlZCUVZVc1IwRkJWeXhGUVVGRkxFTkJRVU03UVVGRk9VSXNTVUZCVFN4RFFVRkRMRWRCUVZjc1JVRkJSU3hEUVVGRE8wRkJSWEpDTEVsQlFVa3NTMEZCU3l4SFFVRmhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlNUZENMRWxCUVVrc1UwRkJVeXhIUVVGVExFTkJRVU1zUTBGQlF6dEJRVVY0UWl4SlFVRkpMR0ZCUVdFc1IwRkJZU3hKUVVGSkxFdEJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0QlFVTndSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBsQlEycERMR0ZCUVdFc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEV0QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenREUVVNMVF6dEJRVU5FTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1NVRkRha01zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0UlFVTnFReXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wdEJRek5DTzBOQlEwbzdRVUZEUkN4SlFVRkpMRWRCUVVjc1IwRkJSeXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCTmtJc1EwRkJRenRCUVVsb1JTeFRRVUZUTEV0QlFVczdTVUZEVml4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xRkJRMnBETEVkQlFVY3NRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRSUVVOb1FpeEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZUVJc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRekZDTEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjRRaXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRE1VSXNSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8xRkJRMklzUjBGQlJ5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRPMHRCUTI1Q08wRkJRMHdzUTBGQlF6dEJRVU5FTEV0QlFVc3NSVUZCUlN4RFFVRkRPMEZCVDFJc1UwRkJVeXhKUVVGSkxFTkJRVU1zUjBGQlZ5eEZRVUZGTEVkQlFWY3NSVUZCUlN4TFFVRmhPMGxCUTJwRUxFZEJRVWNzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0SlFVTm9RaXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGQk8wbEJRM0JETEVkQlFVY3NRMEZCUXl4VFFVRlRMRWRCUVVjc1MwRkJTeXhEUVVGRE8wbEJRM1JDTEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRKUVVOWUxFZEJRVWNzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0QlFVTndRaXhEUVVGRE8wRkJTMFFzVVVGQlVTeERRVUZETEU5QlFVOHNSMEZCUnl4VlFVRlZMRU5CUVdFN1NVRkRkRU1zU1VGQlNTeERRVUZETEVkQlFWY3NRMEZCUXl4RFFVRkRMRTlCUVU4c1IwRkJSeXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETzBsQlEyaEVMRWxCUVVrc1EwRkJReXhIUVVGWExFTkJRVU1zUTBGQlF5eFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJRenRKUVVNdlF5eEpRVUZKTEVOQlFVTXNSMEZCVnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTnlReXhKUVVGSkxFTkJRVU1zUjBGQlZ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU55UXl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEWml4SlFVRkpMR0ZCUVdFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1VVRkRNVUlzU1VGQlNTeFRRVUZUTEVWQlFVVTdXVUZEV0N4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJRMmhETEZOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRaQ3hoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRek5DTzJGQlFVMDdXVUZEU0N4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xbEJRMnhETEZOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRaQ3hoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRek5DTzB0QlEwbzdTVUZEUkN4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZCTzBsQlExZ3NTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVOa0xFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZEYWtJc1EwRkJReXhEUVVGQk8wRkJTVVFzVFVGQlRTeERRVUZETEU5QlFVOHNSMEZCUnp0SlFVTmlMRWxCUVVrc1MwRkJTeXhKUVVGSkxFbEJRVWtzUlVGQlJUdFJRVU5tTEVkQlFVY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NSMEZCUnl4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NSMEZCUnl4RFFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEzQkZMRWRCUVVjc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF6dFJRVVZvUWl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVUU3VVVGRGJFUXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGQk8xRkJSV3hFTEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRVHRSUVVOc1JDeEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVFN1VVRkZiRVFzUjBGQlJ5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUTJJc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF6dFJRVU5rTEZOQlFWTXNSMEZCUnl4VFFVRlRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOdVF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTJJc1lVRkJZU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0TFFVTjZRenRCUVVWTUxFTkJRVU1zUTBGQlFUdEJRVWxFTEUxQlFVMHNRMEZCUXl4UFFVRlBMRWRCUVVjN1NVRkRZaXhKUVVGSkxFdEJRVXNzU1VGQlNTeEpRVUZKTEVWQlFVVTdVVUZEWml4SFFVRkhMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU03VVVGRGFFSXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkJPMUZCUXpWRUxFbEJRVWtzVTBGQlV5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTm9RaXhIUVVGSExFTkJRVU1zVTBGQlV5eEhRVUZITEV0QlFVc3NRMEZCUXp0VFFVTjZRanRoUVVGTk8xbEJRMGdzUjBGQlJ5eERRVUZETEZOQlFWTXNSMEZCUnl4UFFVRlBMRU5CUVVNN1UwRkRNMEk3VVVGRFJDeEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRXQ3hIUVVGSExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdVVUZEYUVJc1lVRkJZU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXp0UlFVTTVReXhUUVVGVExFZEJRVWNzVTBGQlV5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVRTdVVUZEYkVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dExRVU5xUWp0QlFVTk1MRU5CUVVNc1EwRkJRVHRCUVVORUxFdEJRVXNzUTBGQlF5eFBRVUZQTEVkQlFVYzdTVUZEV2l4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRemxDTEV0QlFVc3NSVUZCUlN4RFFVRkRPMEZCUTFvc1EwRkJReXhEUVVGQk8wRkJUMFFzVTBGQlV5eExRVUZMTEVOQlFVTXNSMEZCVnl4RlFVRkZMRWRCUVZjN1NVRkRia01zU1VGQlRTeGhRVUZoTEVkQlFXVTdVVUZET1VJc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRFppeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTm1MRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFFSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRMUVVOdVFpeERRVUZCT3pSQ1FVTlJMRU5CUVVNN08xRkJRMDRzU1VGQlNTeExRVUZMTEVkQlFVY3NZVUZCWVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzQkRMRWxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU1zUlVGQlJTeExRVUZMTEVkQlFVY3NRMEZCUXl4RlFVRkZMRTlCUVU4c1IwRkJSeXhEUVVGRExFVkJRVVVzVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTnVSQ3hKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlExb3NTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJRenRUUVVOaU8xRkJRMFFzUzBGQmNVSXNZVUZCWVN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGMlF5eFBRVUZQTEZGQlFVRXNSVUZCUlN4UFFVRlBMRkZCUVVFc1EwRkJkMEk3VVVGRGVrTXNTMEZCU3l4SFFVRkhMRWRCUVVjc1EwRkJRenRSUVVOYUxFdEJRVXNzUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZEV2l4UFFVRlBMRXRCUVVzc1IwRkJSeXhQUVVGUExFbEJRVWtzUTBGQlF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4UFFVRlBMRWRCUVVjc1JVRkJSVHRaUVVNdlF5eExRVUZMTEVkQlFVY3NUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hMUVVGTExFZEJRVWNzVDBGQlR5eEhRVUZITEVWQlFVVTdXVUZETlVNc1lVRkJZU3hEUVVGRExFdEJRVXNzU1VGQlNTeFBRVUZQTEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1QwRkJUeXhEUVVGRExFbEJRVWtzUzBGQlN5eEZRVUZGTzFsQlF6VkVMRXRCUVVzc1JVRkJSU3hEUVVGRE8xTkJRMWc3VVVGRFJDeEpRVUZKTEV0QlFVc3NTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkRXaXhWUVVGVkxFTkJRVU1zWTBGQlRTeFBRVUZCTEV0QlFVc3NRMEZCUXl4cFFrRkJTeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEc5RFFVRlJMRU5CUVVNc1JVRkJMMElzUTBGQkswSXNRMEZCUXl4RFFVRkRPenRUUVVWeVJEczdTVUZzUWt3c1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVU3T0VKQlFXcENMRU5CUVVNN096dExRVzFDVkR0QlFVTk1MRU5CUVVNaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ0p5NHZhVzVrWlhndVkzTnpKenRjY2x4dWFXMXdiM0owSUNvZ1lYTWdYeUJtY205dElDZHNiMlJoYzJnbk8xeHlYRzR2S2lybmxMdmx1SU1nS2k5Y2NseHViR1YwSUcxNVEyRnVkbUZ6SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG5GcGNHRnVKeWtnWVhNZ1NGUk5URU5oYm5aaGMwVnNaVzFsYm5RN1hISmNiaThxS3VhQ2xPYWppK2FNaWVtU3JpQXFMMXh5WEc1c1pYUWdZblJ1YUhWcElEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtSjBibWgxYVNjcElHRnpJRWhVVFV4RWFYWkZiR1Z0Wlc1ME8xeHlYRzR2S2lybWtxVHBsSURtaklucGtxNGdLaTljY2x4dWJHVjBJR0owYm1Ob1pTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NWlkRzVqYUdVbktTQmhjeUJJVkUxTVJHbDJSV3hsYldWdWREdGNjbHh1THlvcTZZZU41NzJ1NW95SjZaS3VJQ292WEhKY2JteGxkQ0JpZEc1amVpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NWlkRzVqZWljcElHRnpJRWhVVFV4RWFYWkZiR1Z0Wlc1ME8xeHlYRzR2S2lybWtxVG1vNHZuaXJibWdJSHZ2SnNnS2k5Y2NseHViR1YwSUdOb1pYRnBPaUJpYjI5c1pXRnVJRDBnWm1Gc2MyVWdPMXh5WEc0dktpcm1ncFRtbzR2bmlyYm1nSUh2dkpzZ0tpOWNjbHh1YkdWMElHaDFhWEZwT2lCaWIyOXNaV0Z1SUQwZ1ptRnNjMlVnTzF4eVhHNHZLaXJtb0x6bHJaRG5tb1Rsc0xybHI3amxwS2Zsc0k4Z0tpOWNjbHh1WTI5dWMzUWdjMmw2WlRvZ2JuVnRZbVZ5SUQwZ01qVTdYSEpjYmk4cUt1aWhqT1dJbCthVnNDQXFMMXh5WEc1amIyNXpkQ0J6YVhwbFRuVnRZbVZ5T2lCdWRXMWlaWElnUFNBeU1UdGNjbHh1THlvcTVaeUc1NXFFNVkySzViNkVJQ292WEhKY2JtTnZibk4wSUhJNklHNTFiV0psY2lBOUlERXdPMXh5WEc0dktpcm1uSURsa0k3a3VJRG1yYVhubW9Ua3ZZM252YTdrdjZIbWdhOGdLaTljY2x4dWJHVjBJSGRsYVhwcE9pQnVkVzFpWlhKYlhTQTlJRnN3TENBd1hUdGNjbHh1THlvcTVxT0w1YTJRNmFLYzZJbXk1N0c3NVo2TElDb3ZYSEpjYm5SNWNHVWdVR0YzYmlBOUlEQjhNWHd6T3lCY2NseHVMeW9xNUxpTDVxT0w2YUtjNklteTc3eU1NZWFZcitlNm91aUpzdSs4akREbW1LL3B1NUhvaWJJcUwxeHlYRzVzWlhRZ2NXbDZhVU52Ykc5eU9pQlFZWGR1SUQwZ01UdGNjbHh1THlvcTVxT0w1NXVZNUxpSzVMMk41NzJ1NTVxRTZhS2M2SW15NUwraDVvR3ZJQ292WEhKY2JteGxkQ0J4YVhwcFEyOXNiM0pFWVhSaE9pQlFZWGR1VzExYlhTQTlJRzVsZHlCQmNuSmhlU2h6YVhwbFRuVnRZbVZ5S1R0Y2NseHVabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J6YVhwbFRuVnRZbVZ5T3lCcEt5c3BJSHRjY2x4dUlDQWdJSEZwZW1sRGIyeHZja1JoZEdGYmFWMGdQU0J1WlhjZ1FYSnlZWGtvYzJsNlpVNTFiV0psY2lrN1hISmNibjFjY2x4dVptOXlJQ2hzWlhRZ2JpQTlJREE3SUc0Z1BDQnphWHBsVG5WdFltVnlPeUJ1S3lzcElIdGNjbHh1SUNBZ0lHWnZjaUFvYkdWMElHMGdQU0F3T3lCdElEd2djMmw2WlU1MWJXSmxjanNnYlNzcktTQjdYSEpjYmlBZ0lDQWdJQ0FnY1dsNmFVTnZiRzl5UkdGMFlWdHVYVnR0WFNBOUlETTdYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHViR1YwSUdOMGVDQTlJRzE1UTJGdWRtRnpMbWRsZEVOdmJuUmxlSFFvSnpKa0p5a2dZWE1nUTJGdWRtRnpVbVZ1WkdWeWFXNW5RMjl1ZEdWNGRESkVPMXh5WEc0dktpcGNjbHh1SUNvZzU3dVk1WWkyNXFPTDU1dVlYSEpjYmlBcUwxeHlYRzVtZFc1amRHbHZiaUJ4YVhCaGJpZ3BPaUIyYjJsa0lIdGNjbHh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2djMmw2WlU1MWJXSmxjanNnYVNzcktTQjdYSEpjYmlBZ0lDQWdJQ0FnWTNSNExtSmxaMmx1VUdGMGFDZ3BPMXh5WEc0Z0lDQWdJQ0FnSUdOMGVDNXRiM1psVkc4b01Dd2djMmw2WlNBcUlHa3BPMXh5WEc0Z0lDQWdJQ0FnSUdOMGVDNXNhVzVsVkc4b05UQXdMQ0J6YVhwbElDb2dhU2s3WEhKY2JpQWdJQ0FnSUNBZ1kzUjRMbTF2ZG1WVWJ5aHphWHBsSUNvZ2FTd2dNQ2s3WEhKY2JpQWdJQ0FnSUNBZ1kzUjRMbXhwYm1WVWJ5aHphWHBsSUNvZ2FTd2dOVEF3S1R0Y2NseHVJQ0FnSUNBZ0lDQmpkSGd1YzNSeWIydGxLQ2s3WEhKY2JpQWdJQ0FnSUNBZ1kzUjRMbU5zYjNObFVHRjBhQ2dwTzF4eVhHNGdJQ0FnZlZ4eVhHNTlYSEpjYm5GcGNHRnVLQ2s3WEhKY2JpOHFLbHh5WEc0Z0t1ZTdtT1dJdHVhamkrV3RrRnh5WEc0Z0tpQkFjR0Z5WVcwZ2NtOTNJSGpvdmJUbG5aRG1vSWRjY2x4dUlDb2dRSEJoY21GdElHTnZiQ0I1NkwyMDVaMlE1cUNIWEhKY2JpQXFJRUJ3WVhKaGJTQmpiMnh2Y2lEbW80dmxyWkRwb3B6b2liSWdYSEpjYmlBcUwxeHlYRzVtZFc1amRHbHZiaUJ4YVhwcEtISnZkem9nYm5WdFltVnlMQ0JqYjJ3NklHNTFiV0psY2l3Z1kyOXNiM0k2SUhOMGNtbHVaeWs2SUhadmFXUWdlMXh5WEc0Z0lDQWdZM1I0TG1KbFoybHVVR0YwYUNncE8xeHlYRzRnSUNBZ1kzUjRMbUZ5WXloeWIzY3NJR052YkN3Z2Npd2dNQ3dnTWlBcUlFMWhkR2d1VUVrcFhISmNiaUFnSUNCamRIZ3VabWxzYkZOMGVXeGxJRDBnWTI5c2IzSTdYSEpjYmlBZ0lDQmpkSGd1Wm1sc2JDZ3BPMXh5WEc0Z0lDQWdZM1I0TG1Oc2IzTmxVR0YwYUNncE8xeHlYRzU5WEhKY2JpOHFLbHh5WEc0Z0tpRGt1SXZtbzR0Y2NseHVJQ29nUUhCaGNtRnRJR1VnNUxxTDVMdTJYSEpjYmlBcUwxeHlYRzV0ZVVOaGJuWmhjeTV2Ym1Oc2FXTnJJRDBnWm5WdVkzUnBiMjRnS0dVNklFMXZkWE5sUlhabGJuUXBPaUIyYjJsa0lIdGNjbHh1SUNBZ0lHeGxkQ0I0T2lCdWRXMWlaWElnUFNCbExtTnNhV1Z1ZEZnZ0xTQnRlVU5oYm5aaGN5NXZabVp6WlhSTVpXWjBPMXh5WEc0Z0lDQWdiR1YwSUhrNklHNTFiV0psY2lBOUlHVXVZMnhwWlc1MFdTQXRJRzE1UTJGdWRtRnpMbTltWm5ObGRGUnZjRHRjY2x4dUlDQWdJR3hsZENCcE9pQnVkVzFpWlhJZ1BTQk5ZWFJvTG5KdmRXNWtLSGdnTHlCemFYcGxLVHRjY2x4dUlDQWdJR3hsZENCcU9pQnVkVzFpWlhJZ1BTQk5ZWFJvTG5KdmRXNWtLSGtnTHlCemFYcGxLVHRjY2x4dUlDQWdJSGRsYVhwcElEMGdXMmtzSUdwZE8xeHlYRzRnSUNBZ2FXWWdLSEZwZW1sRGIyeHZja1JoZEdGYmFWMWJhbDBnUFQwZ015a2dlMXh5WEc0Z0lDQWdJQ0FnSUdsbUlDaHhhWHBwUTI5c2IzSXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjV2w2YVNocElDb2djMmw2WlN3Z2FpQXFJSE5wZW1Vc0lDZHlaV1FuS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY1dsNmFVTnZiRzl5SUQwZ01EdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NXbDZhVU52Ykc5eVJHRjBZVnRwWFZ0cVhTQTlJREU3WEhKY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY1dsNmFTaHBJQ29nYzJsNlpTd2dhaUFxSUhOcGVtVXNJQ2RpYkdGamF5Y3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnhhWHBwUTI5c2IzSWdQU0F4TzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J4YVhwcFEyOXNiM0pFWVhSaFcybGRXMnBkSUQwZ01EdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0JxZFdSblpTaHBMQ0JxS1NBdkwrV0lwT2FXcmVpK2sraTFvbHh5WEc0Z0lDQWdZMmhsY1drZ1BTQm1ZV3h6WlR0Y2NseHVJQ0FnSUdoMWFYRnBJRDBnZEhKMVpUdGNjbHh1ZlZ4eVhHNHZLaXBjY2x4dUlDb2c1b0tVNXFPTFhISmNiaUFxTDF4eVhHNWlkRzVvZFdrdWIyNWpiR2xqYXlBOUlHWjFibU4wYVc5dUlDZ3BPaUIyYjJsa0lIdGNjbHh1SUNBZ0lHbG1JQ2hvZFdseGFTQTlQU0IwY25WbEtTQjdYSEpjYmlBZ0lDQWdJQ0FnWTNSNExtTnNaV0Z5VW1WamRDaDNaV2w2YVZzd1hTQXFJSE5wZW1VZ0xTQnlMQ0IzWldsNmFWc3hYU0FxSUhOcGVtVWdMU0J5TENCemFYcGxMQ0J6YVhwbEtUdGNjbHh1SUNBZ0lDQWdJQ0JqZEhndVltVm5hVzVRWVhSb0tDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHTjBlQzV0YjNabFZHOG9LSGRsYVhwcFd6QmRJQzBnTVNrZ0tpQnphWHBsTENCM1pXbDZhVnN4WFNBcUlITnBlbVVwWEhKY2JpQWdJQ0FnSUNBZ1kzUjRMbXhwYm1WVWJ5Z29kMlZwZW1sYk1GMGdLeUF4S1NBcUlITnBlbVVzSUhkbGFYcHBXekZkSUNvZ2MybDZaU2xjY2x4dVhISmNiaUFnSUNBZ0lDQWdZM1I0TG0xdmRtVlVieWgzWldsNmFWc3dYU0FxSUhOcGVtVXNJQ2gzWldsNmFWc3hYU0F0SURFcElDb2djMmw2WlNsY2NseHVJQ0FnSUNBZ0lDQmpkSGd1YkdsdVpWUnZLSGRsYVhwcFd6QmRJQ29nYzJsNlpTd2dLSGRsYVhwcFd6RmRJQ3NnTVNrZ0tpQnphWHBsS1Z4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JqZEhndWMzUnliMnRsS0NrN1hISmNiaUFnSUNBZ0lDQWdZM1I0TG1Oc2IzTmxVR0YwYUR0Y2NseHVJQ0FnSUNBZ0lDQnhhWHBwUTI5c2IzSWdQU0J4YVhwcFEyOXNiM0lnUFQwZ01TQS9JREFnT2lBeE8xeHlYRzRnSUNBZ0lDQWdJR05vWlhGcElEMGdkSEoxWlR0Y2NseHVJQ0FnSUNBZ0lDQnhhWHBwUTI5c2IzSkVZWFJoVzNkbGFYcHBXekJkWFZ0M1pXbDZhVnN4WFYwZ1BTQXpPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVmVnh5WEc0dktpcGNjbHh1SUNvZzVwS2s2WlNBNW9LVTVxT0xYSEpjYmlBcUwxeHlYRzVpZEc1amFHVXViMjVqYkdsamF5QTlJR1oxYm1OMGFXOXVJQ2dwT2lCMmIybGtJSHRjY2x4dUlDQWdJR2xtSUNoamFHVnhhU0E5UFNCMGNuVmxLU0I3WEhKY2JpQWdJQ0FnSUNBZ1kzUjRMbUpsWjJsdVVHRjBhQ2dwTzF4eVhHNGdJQ0FnSUNBZ0lHTjBlQzVoY21Nb2QyVnBlbWxiTUYwZ0tpQnphWHBsTENCM1pXbDZhVnN4WFNBcUlITnBlbVVzSUhJc0lEQXNJRElnS2lCTllYUm9MbEJKS1Z4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2h4YVhwcFEyOXNiM0lnUFQwZ01Ta2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpkSGd1Wm1sc2JGTjBlV3hsSUQwZ0ozSmxaQ2M3WEhKY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTNSNExtWnBiR3hUZEhsc1pTQTlJQ2RpYkdGamF5YzdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lHTjBlQzVtYVd4c0tDazdYSEpjYmlBZ0lDQWdJQ0FnWTNSNExtTnNiM05sVUdGMGFDZ3BPMXh5WEc0Z0lDQWdJQ0FnSUhGcGVtbERiMnh2Y2tSaGRHRmJkMlZwZW1sYk1GMWRXM2RsYVhwcFd6RmRYU0E5SUhGcGVtbERiMnh2Y2p0Y2NseHVJQ0FnSUNBZ0lDQnhhWHBwUTI5c2IzSWdQU0J4YVhwcFEyOXNiM0lnUFQwZ01TQS9JREFnT2lBeFhISmNiaUFnSUNBZ0lDQWdZMmhsY1drZ1BTQm1ZV3h6WlR0Y2NseHVJQ0FnSUgxY2NseHVmVnh5WEc1aWRHNWplaTV2Ym1Oc2FXTnJJRDBnWm5WdVkzUnBiMjRnS0NrNklIWnZhV1FnZTF4eVhHNGdJQ0FnWTNSNExtTnNaV0Z5VW1WamRDZ3dMQ0F3TENBMU1EQXNJRFV3TUNrN1hISmNiaUFnSUNCeGFYQmhiaWdwTzF4eVhHNTlYSEpjYmk4cUtseHlYRzRnS2lEb3ZwUG90YUxubW9UcGdMdm92cEZjY2x4dUlDb2dRSEJoY21GdElISnZkeUI0NkwyMElGeHlYRzRnS2lCQWNHRnlZVzBnWTI5c0lIbm92YlFnWEhKY2JpQXFMMXh5WEc1Y2NseHVablZ1WTNScGIyNGdhblZrWjJVb2NtOTNPaUJ1ZFcxaVpYSXNJR052YkRvZ2JuVnRZbVZ5S1RvZ2RtOXBaQ0I3WEhKY2JpQWdJQ0JqYjI1emRDQmthWEpsWTNScGIyNUVZWFJoT2lCQmNuSmhlVHhoYm5rK0lEMGdXMXh5WEc0Z0lDQWdJQ0FnSUZzdE1Td2dNRjBzSUZzeExDQXdYU3d2TDNqb3ZiUmNjbHh1SUNBZ0lDQWdJQ0JiTUN3Z0xURmRMQ0JiTUN3Z01WMHNMeTk1NkwyMFhISmNiaUFnSUNBZ0lDQWdXeTB4TENBeFhTd2dXekVzSUMweFhTd3ZMK1czcHVTNGl1V0lzT1dQcytTNGkxeHlYRzRnSUNBZ0lDQWdJRnN0TVN3Z0xURmRMQ0JiTVN3Z01WMHZMK1czcHVTNGkrV0lzT1dQcytTNGlseHlYRzRnSUNBZ1hWeHlYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQTRPeUJwS3lzcElIdGNjbHh1SUNBZ0lDQWdJQ0JzWlhRZ1kyOXNiM0lnUFNCeGFYcHBRMjlzYjNKRVlYUmhXM0p2ZDExYlkyOXNYVHRjY2x4dUlDQWdJQ0FnSUNCc1pYUWdibVY0ZEZnZ1BTQXdMQ0J1WlhoMFdTQTlJREFzSUc5bVpuTmxkRmdnUFNBd0xDQnZabVp6WlhSWklEMGdNRHRjY2x4dUlDQWdJQ0FnSUNCc1pYUWdZMjkxYm5RZ1BTQXhPMXh5WEc0Z0lDQWdJQ0FnSUdsbUlDaHBJQ1VnTWlBOVBTQXdLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR052ZFc1MElEMGdNVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdXMjltWm5ObGRGZ3NJRzltWm5ObGRGbGRJRDBnWkdseVpXTjBhVzl1UkdGMFlTNXdiM0FvS1R0Y2NseHVJQ0FnSUNBZ0lDQnVaWGgwV0NBOUlISnZkenRjY2x4dUlDQWdJQ0FnSUNCdVpYaDBXU0E5SUdOdmJEdGNjbHh1SUNBZ0lDQWdJQ0IzYUdsc1pTQW9ibVY0ZEZnZ0t5QnZabVp6WlhSWUlENDlJREFnSmlZZ2JtVjRkRmdnS3lCdlptWnpaWFJZSUR3Z01qRWdKaVpjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdibVY0ZEZrZ0t5QnZabVp6WlhSWklENDlJREFnSmlZZ2JtVjRkRmtnS3lCdlptWnpaWFJaSUR3Z01qRWdKaVpjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjV2w2YVVOdmJHOXlSR0YwWVZ0dVpYaDBXQ0FyUFNCdlptWnpaWFJZWFZ0dVpYaDBXU0FyUFNCdlptWnpaWFJaWFNBOVBTQmpiMnh2Y2lrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamIzVnVkQ3NyTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0JwWmlBb1kyOTFiblFnUGowZ05Ta2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpaWFJVYVcxbGIzVjBLQ2dwSUQwK0lHRnNaWEowS0dEbWdhM2xscHdrZXlmcHU1SG51cUluVzJOdmJHOXlYWDNvaWJMbW80dmxyWkRvanJmb2c1d2hZQ2twTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JuMGlYWDA9Il0sInNvdXJjZVJvb3QiOiIifQ==