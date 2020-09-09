/*!
 * TradingVue.JS - v0.7.0-alpha - Wed Sep 09 2020
 *     https://github.com/tvjsx/trading-vue-js
 *     Copyright (c) 2019 C451 Code's All Right;
 *     Licensed under the MIT license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TradingVueJs"] = factory();
	else
		root["TradingVueJs"] = factory();
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(35);

var iterableToArray = __webpack_require__(36);

var unsupportedIterableToArray = __webpack_require__(28);

var nonIterableSpread = __webpack_require__(37);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(64);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(38);

var iterableToArrayLimit = __webpack_require__(39);

var unsupportedIterableToArray = __webpack_require__(28);

var nonIterableRest = __webpack_require__(40);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 8 */
/***/ (function(module) {

module.exports = JSON.parse("{\"extended.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAANElEQVR4nGNggABGEMEEIlhABAeI+AASF0AlHmAqA4kzKAAx8wGQuAMKwd6AoYzBAWonAwAcLwTgNfJ3RQAAAABJRU5ErkJggg==\",\"segment.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAgMAAAC5h23wAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAlQTFRFAAAATU1NJCQkCxcHIQAAAAN0Uk5TAP8SmutI5AAAACxJREFUeJxjYMACGAMgNAsLdpoVKi8AVe8A1QblQlWRKt0AoULw2w1zGxoAABdiAviQhF/mAAAAAElFTkSuQmCC\",\"add.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAH5QTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKBgYGGxsbKioqPz8/Pj4+BQUFCQkJAQEBZGRkh4eHAgICEBAQNjY2g4ODgYGBAAAAAwMDeXl5d3d3GBgYERERgICAgICANDQ0PDw8Y2NjCAgIhYWFGhoaJycnOjo6YWFhgICAdXV14Y16sQAAACp0Uk5TAAILDxIKESEnJiYoKCgTKSkpKCAnKSkFKCkpJiDl/ycpKSA2JyYpKSkpOkQ+xgAAARdJREFUeJzllNt2gyAQRTWiRsHLoDU0GpPYmMv//2BMS+sgl6Z9bM8bi73gnJkBz/sn8lcBIUHofwtG8TpJKUuTLI6cYF7QEqRKynP71VX9AkhNXVlsbMQrLLQVGyPZLsGHWgPrCxMJwHUPlXa79NBp2et5d9f3u3m1XxatQNn7SagOXCUjCjYUDuqxcWlHj4MSfw12FDJchFViRN8+1qcQoUH6lR1L1mEMEErofB6WzEUwylzomfzOQGiOJdXiWH7mQoUyMa4WXJQWOBvLFvPCGxt6FSr5kyH0qi0YddNG2/pgCsOjff4ZTizXPNwKIzl56OoGg9d9Z/+5cs6On+CFCfevFQ3ZaTycx1YMbvDdRvjkp/lHdAcPXzokxcwfDwAAAABJRU5ErkJggg==\",\"cursor.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAgMAAAC5h23wAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAxQTFRFAAAATU1NTU1NTU1NwlMHHwAAAAR0Uk5TAOvhxbpPrUkAAAAkSURBVHicY2BgYHBggAByabxg1WoGBq2pRCk9AKUbcND43AEAufYHlSuusE4AAAAASUVORK5CYII=\",\"display_off.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAU1QTFRFAAAAh4eHh4eHAAAAAAAAAAAAAwMDAAAAAAAAhoaGGBgYgYGBAAAAPz8/AgICg4ODCQkJhISEh4eHh4eHPj4+NjY2gYGBg4ODgYGBgYGBgoKCAQEBJycngoKChYWFEBAQg4ODCAgIKioqZGRkCgoKBQUFERERd3d3gYGBGxsbNDQ0hISEgYGBPDw8gYGBgYGBh4eHh4eHhYWFh4eHgoKChYWFgYGBgYGBg4ODhoaGg4ODYWFhgoKCBgYGdXV1goKCg4ODgYGBgICAgYGBAAAAg4ODhYWFhISEh4eHgoKChYWFOjo6goKCGhoah4eHh4eHh4eHgoKCh4eHeXl5hoaGgoKChISEgYGBgYGBgoKCY2NjgYGBgoKCh4eHgoKCgYGBhoaGg4ODhoaGhYWFh4eHgYGBhoaGhoaGhoaGg4ODgoKChISEgoKChYWFh4eHfKktUwAAAG90Uk5TACn/AhEFKA8SLCbxCigoVBNKUTYoJ/lh3PyAKSaTNiBtICYpISggKSkmJ0LEKef3lGxA8rn//+pcMSkpnCcptHPJKe0LUjnx5LzKKaMnX73hl64pLnhkzNSgKeLv17LQ+liIzaLe7PfTw5tFpz3K1fXR/gAAAgBJREFUeJzllNdXwjAUxknB0lIoCKVsGTIFQRAZ7r333nuv///R3LZ4mlDQZ/0ekp7b37n5bnITk+mfyDxv5Tir3fwjaElO5BIOKZFLJS1dQVfI0Y809TtEV+elo95RpFPWG+1go4fdQ5QybI8haaNBkM2ANbM09bnrwaPY7iFKrz7EMBdu7CHdVruXIt0M1hb+GKA3LTRKkp5lTA6Dg6xIkhaHhvQ1IlW/UCouQdJNJTRIpk1qO7+wUpcfpl537oBc7VNip3Gi/AmVPBAC1UrL6HXtSGVT+k2Yz0Focad07OMRf3P5BEbd63PFQx7HN+w61JoAm+uBlV48O/0jkLSMmtPCmQ8HwlYdykFV4/LJPp7e3hVyFdapHNehLk6PSjhSkBvwu/cFyJGIYvOyhoc1jjYQFGbygD4CWjoAMla/og3YoSw+KPhjPNoFcim4iFD+pFYA8zZ9WeYU5OBjZ3ORWyCfG03E+47kKpCIJTpGO4KP8XMgtw990xG/PBNTgmPEEXwf7P42oOdFIRAoBCtqTKL6Rcwq4Xsgh5xYC/mmSs6yJKk1YbnVeTq1NaEpmlHbmVn2EORkW2trF2ZzmHGTSUMGl1a9hp4ySRpdQ8yKGURpMmRIYg9pb1YPzg6kO79cLlE6bYFjEtv91bLEUxvhwbWwjY13BxUb9l8+mn9EX8x3Nki8ff5wAAAAAElFTkSuQmCC\",\"display_on.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAR1QTFRFAAAAh4eHgYGBAAAAAAAAgYGBAAAAAwMDAAAAAAAAgYGBg4ODGBgYgYGBhISEAAAAPz8/AgIChoaGCQkJhYWFPj4+NjY2goKCgYGBAQEBJycngYGBgoKCEBAQCAgIhISEKioqZGRkCgoKBQUFERERd3d3gYGBg4ODgYGBGxsbNDQ0hISEgoKCgoKChYWFPDw8gYGBgYGBhoaGgoKCg4ODgoKCgYGBgoKCgoKCgoKCg4ODgoKChoaGgoKCgYGBhoaGg4ODYWFhBgYGdXV1gYGBg4ODgoKCgICAg4ODg4ODhISEAAAAg4ODOjo6gYGBGhoaeXl5goKCgYGBgoKChYWFgoKChISEgoKCY2NjgYGBg4ODgYGBgYGBg4ODgYGBo8n54AAAAF90Uk5TACn/AhH3BSgPEuhUJvFACigoLBM2KCeA6ykm+pMgIEkmKSEoICn9XCkmJ0u6nDop4sUypGuEzLZ6vmCYLZ/dLykpJynUYa8pcllCC1Ip2ycpisl1PadFsintbsPQZdi/bTW7AAAB4UlEQVR4nOWUZ1fCMBSGSSGWFiq0UDbIkr2XbBwMxS0b1P//M0xK9XSiftX7oel585zkvfcmMRj+SRhvzRRlthm/BU3Ry3TYzofTsajpIOjw2iNAjIiddehvHXSdA0mkXEEdG0fkE1DEKXmkSVqVIA6rBmsktUgAWLWHoGp30UNclbtLmwQgoyya91wPTbFy0mQXJ5zJQO6BgXRjfH0iSkX5stHIXr5r0bB/lu8syjR8rzsFbR2SpX+5J2eMP3csLtYsEY2K8BeTFuE2jaVCBw7bHOBuxq16AXmpbui3LtIfbRLUHMY2q4lcFo2WB4KA1SUAlWumNEKCzyxBKZxVHvYGaFguCBx1vM/x0IPzoqQoj5SdP4mns2cCGhBsrgj0uaeUBtzMyxQN8w4mYROTW8+r0oANp8W5mf6WQw5aCYJ2o7ymPaKMi2uVpmWM4TW6tdImgGo1bT4nK6DbbsCc0AZSdmLEFszzHrh6riVvRrNA3/9SE8QLWQu+Gjto9+gE9NBMwr9zi83gFeeFTe11zpm1CHE3HeyVCSknf3MIDcFTbfJKdbR1L4xX49L+/BoillV5uPJqkshD3JWSgpNMXP/lcrD8+hO84MnDr5YpFHv0Fe99VjJ0GBRs2H74aP6R+ACr+TFvZNAQ1wAAAABJRU5ErkJggg==\",\"down.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAKVQTFRFAAAAg4ODgICAAAAAAAAAAAAACAgIAAAAAAAAAAAAAAAAOTk5hYWFEBAQfHx8ODg4dnZ2NDQ0XV1dGxsbKCgogICAFBQUIiIiZGRkgICAgICAFRUVAAAAgICAgICAgICAf39/Li4ugICAcHBwgoKCgICAgoKCgICAg4ODgYGBPj4+goKCgICAhISEgYGBgICAgoKCgICAgYGBgYGBf39/gICAgICAIdPQHAAAADd0Uk5TACn/KAIRIBMFDwooKyApKSknKSYmzCcmKfL7JRCUi2L3J7IpcLUrr0VbKXntNEnkMbxrUcG56CMpi50AAAFZSURBVHic5ZRpf4MgDIeFKFatWm/tfW091u7evv9Hm1Acoujm2y0vFPH5Jf+EEE37J6bblmlatv4jaBCI4rMfR0CMXtAEJ0fccgfM7tAkQHXzArdDxggmqGETGCnJWROkNlOwOqhIhKCtgbSicw1uK/dATSK0aRatIzytA8ik4XSiyJnLSm+VPxULgeyLI3uHRJH+qcB4WZGrKb4c20WwI7b3iUt74OS6XD+xZWrXUCtme0uKTvfcJ65CZFa9VOebqwXmft+oT8yF+/VymT4XeGB+Xx8L+j4gBcoFIDT+oMz6Qp93Y74pCeBpUXaLuW0rUk6r1iv3nP322ewYkgv2nZIvgpSPQDrY5wTjRJDNg9XAE/+uSXIVX812GdKEmtvR2rtWaw+5MAOuofJy79SXu9TgBl4d9DZdI0NjgyiswNCB/qk1J5Bmvp+lQOa9IJNhW4bxm6H5R+wLQYMSQXZNzbcAAAAASUVORK5CYII=\",\"price_range.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAAIUlEQVR4nGNggAPm/w9gTA4QIQMitECEJ1yMEgLNDiAAADfgBMRu78GgAAAAAElFTkSuQmCC\",\"remove.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAK5QTFRFAAAAh4eHgICAAAAAAAAAh4eHAAAAAwMDAAAAAAAAgICAGBgYAAAAPz8/AgICgICACQkJhoaGhoaGgICAPj4+NjY2gYGBg4ODgYGBAQEBJycngoKCEBAQgICAgICACAgIKioqZGRkCgoKBQUFERERd3d3gYGBGxsbNDQ0gICAPDw8YWFhBgYGdXV1gICAg4ODgICAAAAAOjo6GhoaeXl5gICAhYWFY2NjhYWFgICA9O0oCgAAADp0Uk5TACn/AhErBSgPEvEmCigowxMuMcgoJ7hWrCkmdCD6vSAmKSEoICkpJie6KSknKSkp0wspJynCMik11rrLte8AAAFwSURBVHic5ZTXkoIwFIZNAAPSpKkoRQV7Wcva3v/FFiRmEwise7t7bs7MP98k/ylJq/VPQjjKiiJrwo+gON0uxro7XiRTsRHs+voE4JjoRrf+6sD7AFTMvaDGRht9glLMUJtLqmUwD5XDCohHAmBUPQSV27GHtFK7xycBWJab5uPaR+Hlmue7GfZxHwyWFHVMQghXFgD2A8IOZtfssdNJIXcyFEaSfchzp9BuMVP+Fhvr5Qh0nGfqYTGhm3BcYFUaQBKOhMWzRqHyGFRY03ppQ5lCFZ30RloVZGQTaa3QqEt0OyrQnkSkk8I1YJkvAwPCMgY0UpbzXRZhVbosIWGbZTLNQszGMCM42FJEjWDDjIAMtp+xj6x2K+/DqNDc0r4Yc8yGl3uer2aIyT1iyd8sYSuY8cldZbVrH4zPebTvP8OMNSoedj6XzDyk3pwG98u0/ufqGu7tBW5c1PxriXFyHq5PQxXFzeDThvbmp/lH4gt6WxfZ03H8DwAAAABJRU5ErkJggg==\",\"settings.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAW5QTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKBgYGGxsbKioqQEBAPj4+BQUFCAgIAQEBPz8/ZWVlh4eHZGRkAgICCQkJDw8PNjY2g4ODgoKCNTU1EBAQAAAAAwMDeXl5d3d3AAAAGBgYAAAAERERioqKgoKCgoKCgoKCgYGBgoKChISEhoaGNDQ0g4ODgICAgICAgICAgYGBgYGBhYWFgICAgICAPT09AAAAgYGBgICAgICAgICAgICAY2NjCAgIgICAgICAhYWFhYWFgYGBHBwcgICAhYWFGhoagYGBgYGBg4ODhoaGJycnAAAAhISEgICAg4ODPDw8AAAAgoKCgICAhISEOjo6h4eHgoKCgYGBgICAf39/gYGBgoKCgICAGBgYgYGBg4ODg4ODgICACwsLgYGBgICAgYGBgYGBgYGBgICAgYGBYWFhf39/g4ODPj4+gYGBg4ODgICAhYWFgoKCgYGBgICAgYGBgoKCdXV1T0kC9QAAAHp0Uk5TAAILDxMKESEnJiYpKSgTKSgpKSkoEyAnKSknIAYoKSkFJQEgKl94jYVvVC4nU9f/+K8pOu71KBCi3NPq/ikg0e01Nokm1UUnsZVqQSYOT9lrKRJz5lIpK12jyu+sesgnhGVLxCG55a6Um+GaKfJCKKRgKUt8ocergymDQ9knAAABsElEQVR4nOWUV1vCMBSGg1AQpBZrcVdE3KJxo4LgnuCoe4F7orjHv7doTk3bgF7rd5OnX94nZ+SkCP0TWQqsNpuVs/wI2h2FTleR2+XkHfa8YLHgKRGJSj2SN3fosvIKkVJlVXWONGrkWtEgn1zHJP1GMCs/g7XILFIUpXoTWmaKTnIImGovh72Gxqbmlta2dvgOGpsmQO0dnfhTXd3E6JH0pN1DNnr7MFE/HDsQ0qEO6Pxg9sCh4XDkGx2J6sovBD+G8eiYuo5PxLTKeLoJBZNgT2EcnjY0YYajUKsL7Fk1gcjU3PwChcYTFGorAnsRqlpa1tAVhUbdmr+6RtjIOlgbCjMBUdzc2t7ZzbJ7zAQ4p6GSfRVNwkeKLsvCg31w2JBdjlT0GDxZNzEnpcQ+xWfnFxeXVyp6Tay07gq+L/YUOoBvbomV0V8skiq//DutWfeEfJD1JPLCED4+Pb8kX986tApNQ4iqfSJT76bRzvlgBPODQXW/foYqK5lyeBeYJEL1gaoeGnwIBhjRoQ9SZgTAdEbO/9cKRfmZ+MpGPCVHQ3nBzzS4hKIkuNyh/5g+ALiAXSSas9hwAAAAAElFTkSuQmCC\",\"trash.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAALUlEQVR4nGNgAIN6ENHQACX4//9gYBBgYIESYC4LkA0lPEkmGFAI5v8PILYCAHygDJxlK0RUAAAAAElFTkSuQmCC\",\"up.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAMZQTFRFAAAAh4eHgICAAAAAAAAAAAAAAwMDAAAAAAAAGBgYAAAAPz8/AgICCQkJgICAh4eHPj4+NjY2AQEBJycnEBAQgICAgICACAgIKioqZGRkCgoKBQUFgYGBERERd3d3gYGBGxsbNDQ0gICAgYGBPDw8gYGBh4eHgICAYWFhBgYGgYGBdXV1goKCg4ODhYWFgICAgoKCAAAAhISEOjo6gICAGhoagYGBeXl5hoaGgICAY2Njg4ODgoKCgoKCgYGBgoKCg4ODgoKC64uw1gAAAEJ0Uk5TACn/AhEFKA8SJgooKBP7KignKSYg9c0gJikhKLQgKSkmJ7ywKY8s5SknlClxKTMpXwtFKe0neiku8ClKWmSbbFFjM5GHSgAAAW5JREFUeJzllGd/gjAQxk3AMFWWOHDvVa2rVbu//5cqhJWQQO3b9nkVjv/v7rnLKJX+iYS9JMuSKvwIiu3loKkZzYHXFgvBiqW1QKSWplfySzvmAyDUN50cG2X0DDLqoTKXVLJgIIXDCohHAqCzHhymeuShy/Ru8kkAhtmhWUTvW9fdEnPQaVLU0n8XF0L3kn5P6LTtZPKgNoK+RrUkcGtQ7S9TsgOxxinrkUPYD+LwLCIh7CTsWSVQqRmTuPqpitlZFLQlApXjrsYBc335wOw47ksmUSMMrgKi/gnAE/awCqNHmTUwDf5X34LlBuedsgbUsK15kPMxTIXzzvFSIdsSPBw7nGD1K+7bL3F9xStEnZhoCw71TbpL71GBBbUF1MZmZWTOi97PI3eIJn9zCEtOj0+umaOde2EszqW9/xr6rM54WFtc0vfQNak57Ibd/Jerohu3GFwYqPjVEhve2Z4cbQU1ikFsQ73z0fwj+ga3VBezGuggFQAAAABJRU5ErkJggg==\"}");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})(window, document, 'Hammer');


/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(7).default
var update = add("21fde573", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(7).default
var update = add("68f243ea", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(7).default
var update = add("9895d3a6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(7).default
var update = add("5b620605", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(7).default
var update = add("1db01c0b", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(7).default
var update = add("12d2309d", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(7).default
var update = add("1b34bfeb", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(7).default
var update = add("604bf5ef", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(7).default
var update = add("f32fd36e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(7).default
var update = add("fd83689e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(29);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(23);

var assertThisInitialized = __webpack_require__(24);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Indexed Array Binary Search module
 */

/**
 * Dependencies
 */
var util = __webpack_require__(41),
    cmp = __webpack_require__(42),
    bin = __webpack_require__(43);

/**
 * Module interface definition
 */
module.exports = IndexedArray;

/**
 * Indexed Array constructor
 *
 * It loads the array data, defines the index field and the comparison function
 * to be used.
 *
 * @param {Array} data is an array of objects
 * @param {String} index is the object's property used to search the array
 */
function IndexedArray(data, index) {

    // is data sortable array or array-like object?
    if (!util.isSortableArrayLike(data))
        throw new Error("Invalid data");

    // is index a valid property?
    if (!index || data.length > 0 && !(index in data[0]))
        throw new Error("Invalid index");

    // data array
    this.data = data;

    // name of the index property
    this.index = index;

    // set index boundary values
    this.setBoundaries();

    // default comparison function
    this.compare = typeof this.minv === "number" ? cmp.numcmp : cmp.strcmp;

    // default search function
    this.search = bin.search;

    // cache of index values to array positions
    // each value stores an object as { found: true|false, index: array-index }
    this.valpos = {};

    // cursor and adjacent positions
    this.cursor = null;
    this.nextlow = null;
    this.nexthigh = null;
}

/**
 * Set the comparison function
 *
 * @param {Function} fn to compare index values that returnes 1, 0, -1
 */
IndexedArray.prototype.setCompare = function (fn) {
    if (typeof fn !== "function")
        throw new Error("Invalid argument");

    this.compare = fn;
    return this;
};

/**
 * Set the search function
 *
 * @param {Function} fn to search index values in the array of objects
 */
IndexedArray.prototype.setSearch = function (fn) {
    if (typeof fn !== "function")
        throw new Error("Invalid argument");

    this.search = fn;
    return this;
};

/**
 * Sort the data array by its index property
 */
IndexedArray.prototype.sort = function () {
    var self = this,
        index = this.index;

    // sort the array
    this.data.sort(function (a, b) {
        return self.compare(a[index], b[index]);
    });

    // recalculate boundary values
    this.setBoundaries();

    return this;
};

/**
 * Inspect and set the boundaries of the internal data array
 */
IndexedArray.prototype.setBoundaries = function () {
    var data = this.data,
        index = this.index;

    this.minv = data.length && data[0][index];
    this.maxv = data.length && data[data.length - 1][index];

    return this;
};

/**
 * Get the position of the object corresponding to the given index
 *
 * @param {Number|String} index is the id of the requested object
 * @returns {Number} the position of the object in the array
 */
IndexedArray.prototype.fetch = function (value) {
    // check data has objects
    if (this.data.length === 0) {
        this.cursor = null;
        this.nextlow = null;
        this.nexthigh = null;
        return this;
    }

    // check the request is within range
    if (this.compare(value, this.minv) === -1) {
        this.cursor = null;
        this.nextlow = null;
        this.nexthigh = 0;
        return this;
    }
    if (this.compare(value, this.maxv) === 1) {
        this.cursor = null;
        this.nextlow = this.data.length - 1;
        this.nexthigh = null;
        return this;
    }

    var valpos = this.valpos,
        pos = valpos[value];

    // if the request is memorized, just give it back
    if (pos) {
        if (pos.found) {
            this.cursor = pos.index;
            this.nextlow = null;
            this.nexthigh = null;
        } else {
            this.cursor = null;
            this.nextlow = pos.prev;
            this.nexthigh = pos.next;
        }
        return this;
    }

    // if not, do the search
    var result = this.search.call(this, value);
    this.cursor = result.index;
    this.nextlow = result.prev;
    this.nexthigh = result.next;
    return this;
};

/**
 * Get the object corresponding to the given index
 *
 * When no value is given, the function will default to the last fetched item.
 *
 * @param {Number|String} [optional] index is the id of the requested object
 * @returns {Object} the found object or null
 */
IndexedArray.prototype.get = function (value) {
    if (value)
        this.fetch(value);

    var pos = this.cursor;
    return pos !== null ? this.data[pos] : null;
};

/**
 * Get an slice of the data array
 *
 * Boundaries have to be in order.
 *
 * @param {Number|String} begin index is the id of the requested object
 * @param {Number|String} end index is the id of the requested object
 * @returns {Object} the slice of data array or []
 */
IndexedArray.prototype.getRange = function (begin, end) {
    // check if boundaries are in order
    if (this.compare(begin, end) === 1) {
        return [];
    }

    // fetch start and default to the next index above
    this.fetch(begin);
    var start = this.cursor || this.nexthigh;

    // fetch finish and default to the next index below
    this.fetch(end);
    var finish = this.cursor || this.nextlow;

    // if any boundary is not set, return no range
    if (start === null || finish === null) {
        return [];
    }

    // return range
    return this.data.slice(start, finish + 1);
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(27);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Hamster.js v1.1.2
 * (c) 2013 Monospaced http://monospaced.com
 * License: MIT
 */

(function(window, document){
'use strict';

/**
 * Hamster
 * use this to create instances
 * @returns {Hamster.Instance}
 * @constructor
 */
var Hamster = function(element) {
  return new Hamster.Instance(element);
};

// default event name
Hamster.SUPPORT = 'wheel';

// default DOM methods
Hamster.ADD_EVENT = 'addEventListener';
Hamster.REMOVE_EVENT = 'removeEventListener';
Hamster.PREFIX = '';

// until browser inconsistencies have been fixed...
Hamster.READY = false;

Hamster.Instance = function(element){
  if (!Hamster.READY) {
    // fix browser inconsistencies
    Hamster.normalise.browser();

    // Hamster is ready...!
    Hamster.READY = true;
  }

  this.element = element;

  // store attached event handlers
  this.handlers = [];

  // return instance
  return this;
};

/**
 * create new hamster instance
 * all methods should return the instance itself, so it is chainable.
 * @param   {HTMLElement}       element
 * @returns {Hamster.Instance}
 * @constructor
 */
Hamster.Instance.prototype = {
  /**
   * bind events to the instance
   * @param   {Function}    handler
   * @param   {Boolean}     useCapture
   * @returns {Hamster.Instance}
   */
  wheel: function onEvent(handler, useCapture){
    Hamster.event.add(this, Hamster.SUPPORT, handler, useCapture);

    // handle MozMousePixelScroll in older Firefox
    if (Hamster.SUPPORT === 'DOMMouseScroll') {
      Hamster.event.add(this, 'MozMousePixelScroll', handler, useCapture);
    }

    return this;
  },

  /**
   * unbind events to the instance
   * @param   {Function}    handler
   * @param   {Boolean}     useCapture
   * @returns {Hamster.Instance}
   */
  unwheel: function offEvent(handler, useCapture){
    // if no handler argument,
    // unbind the last bound handler (if exists)
    if (handler === undefined && (handler = this.handlers.slice(-1)[0])) {
      handler = handler.original;
    }

    Hamster.event.remove(this, Hamster.SUPPORT, handler, useCapture);

    // handle MozMousePixelScroll in older Firefox
    if (Hamster.SUPPORT === 'DOMMouseScroll') {
      Hamster.event.remove(this, 'MozMousePixelScroll', handler, useCapture);
    }

    return this;
  }
};

Hamster.event = {
  /**
   * cross-browser 'addWheelListener'
   * @param   {Instance}    hamster
   * @param   {String}      eventName
   * @param   {Function}    handler
   * @param   {Boolean}     useCapture
   */
  add: function add(hamster, eventName, handler, useCapture){
    // store the original handler
    var originalHandler = handler;

    // redefine the handler
    handler = function(originalEvent){

      if (!originalEvent) {
        originalEvent = window.event;
      }

      // create a normalised event object,
      // and normalise "deltas" of the mouse wheel
      var event = Hamster.normalise.event(originalEvent),
          delta = Hamster.normalise.delta(originalEvent);

      // fire the original handler with normalised arguments
      return originalHandler(event, delta[0], delta[1], delta[2]);

    };

    // cross-browser addEventListener
    hamster.element[Hamster.ADD_EVENT](Hamster.PREFIX + eventName, handler, useCapture || false);

    // store original and normalised handlers on the instance
    hamster.handlers.push({
      original: originalHandler,
      normalised: handler
    });
  },

  /**
   * removeWheelListener
   * @param   {Instance}    hamster
   * @param   {String}      eventName
   * @param   {Function}    handler
   * @param   {Boolean}     useCapture
   */
  remove: function remove(hamster, eventName, handler, useCapture){
    // find the normalised handler on the instance
    var originalHandler = handler,
        lookup = {},
        handlers;
    for (var i = 0, len = hamster.handlers.length; i < len; ++i) {
      lookup[hamster.handlers[i].original] = hamster.handlers[i];
    }
    handlers = lookup[originalHandler];
    handler = handlers.normalised;

    // cross-browser removeEventListener
    hamster.element[Hamster.REMOVE_EVENT](Hamster.PREFIX + eventName, handler, useCapture || false);

    // remove original and normalised handlers from the instance
    for (var h in hamster.handlers) {
      if (hamster.handlers[h] == handlers) {
        hamster.handlers.splice(h, 1);
        break;
      }
    }
  }
};

/**
 * these hold the lowest deltas,
 * used to normalise the delta values
 * @type {Number}
 */
var lowestDelta,
    lowestDeltaXY;

Hamster.normalise = {
  /**
   * fix browser inconsistencies
   */
  browser: function normaliseBrowser(){
    // detect deprecated wheel events
    if (!('onwheel' in document || document.documentMode >= 9)) {
      Hamster.SUPPORT = document.onmousewheel !== undefined ?
                        'mousewheel' : // webkit and IE < 9 support at least "mousewheel"
                        'DOMMouseScroll'; // assume remaining browsers are older Firefox
    }

    // detect deprecated event model
    if (!window.addEventListener) {
      // assume IE < 9
      Hamster.ADD_EVENT = 'attachEvent';
      Hamster.REMOVE_EVENT = 'detachEvent';
      Hamster.PREFIX = 'on';
    }

  },

  /**
   * create a normalised event object
   * @param   {Function}    originalEvent
   * @returns {Object}      event
   */
   event: function normaliseEvent(originalEvent){
    var event = {
          // keep a reference to the original event object
          originalEvent: originalEvent,
          target: originalEvent.target || originalEvent.srcElement,
          type: 'wheel',
          deltaMode: originalEvent.type === 'MozMousePixelScroll' ? 0 : 1,
          deltaX: 0,
          deltaZ: 0,
          preventDefault: function(){
            if (originalEvent.preventDefault) {
              originalEvent.preventDefault();
            } else {
              originalEvent.returnValue = false;
            }
          },
          stopPropagation: function(){
            if (originalEvent.stopPropagation) {
              originalEvent.stopPropagation();
            } else {
              originalEvent.cancelBubble = false;
            }
          }
        };

    // calculate deltaY (and deltaX) according to the event

    // 'mousewheel'
    if (originalEvent.wheelDelta) {
      event.deltaY = - 1/40 * originalEvent.wheelDelta;
    }
    // webkit
    if (originalEvent.wheelDeltaX) {
      event.deltaX = - 1/40 * originalEvent.wheelDeltaX;
    }

    // 'DomMouseScroll'
    if (originalEvent.detail) {
      event.deltaY = originalEvent.detail;
    }

    return event;
  },

  /**
   * normalise 'deltas' of the mouse wheel
   * @param   {Function}    originalEvent
   * @returns {Array}       deltas
   */
  delta: function normaliseDelta(originalEvent){
    var delta = 0,
      deltaX = 0,
      deltaY = 0,
      absDelta = 0,
      absDeltaXY = 0,
      fn;

    // normalise deltas according to the event

    // 'wheel' event
    if (originalEvent.deltaY) {
      deltaY = originalEvent.deltaY * -1;
      delta  = deltaY;
    }
    if (originalEvent.deltaX) {
      deltaX = originalEvent.deltaX;
      delta  = deltaX * -1;
    }

    // 'mousewheel' event
    if (originalEvent.wheelDelta) {
      delta = originalEvent.wheelDelta;
    }
    // webkit
    if (originalEvent.wheelDeltaY) {
      deltaY = originalEvent.wheelDeltaY;
    }
    if (originalEvent.wheelDeltaX) {
      deltaX = originalEvent.wheelDeltaX * -1;
    }

    // 'DomMouseScroll' event
    if (originalEvent.detail) {
      delta = originalEvent.detail * -1;
    }

    // Don't return NaN
    if (delta === 0) {
      return [0, 0, 0];
    }

    // look for lowest delta to normalize the delta values
    absDelta = Math.abs(delta);
    if (!lowestDelta || absDelta < lowestDelta) {
      lowestDelta = absDelta;
    }
    absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
    if (!lowestDeltaXY || absDeltaXY < lowestDeltaXY) {
      lowestDeltaXY = absDeltaXY;
    }

    // convert deltas to whole numbers
    fn = delta > 0 ? 'floor' : 'ceil';
    delta  = Math[fn](delta / lowestDelta);
    deltaX = Math[fn](deltaX / lowestDeltaXY);
    deltaY = Math[fn](deltaY / lowestDeltaXY);

    return [delta, deltaX, deltaY];
  }
};

if (typeof window.define === 'function' && window.define.amd) {
  // AMD
  window.define('hamster', [], function(){
    return Hamster;
  });
} else if (true) {
  // CommonJS
  module.exports = Hamster;
} else {}

})(window, window.document);


/***/ }),
/* 31 */
/***/ (function(module) {

module.exports = JSON.parse("[\"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=\"]");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.4
var LZString = (function() {

// private property
var f = String.fromCharCode;
var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
var baseReverseDic = {};

function getBaseValue(alphabet, character) {
  if (!baseReverseDic[alphabet]) {
    baseReverseDic[alphabet] = {};
    for (var i=0 ; i<alphabet.length ; i++) {
      baseReverseDic[alphabet][alphabet.charAt(i)] = i;
    }
  }
  return baseReverseDic[alphabet][character];
}

var LZString = {
  compressToBase64 : function (input) {
    if (input == null) return "";
    var res = LZString._compress(input, 6, function(a){return keyStrBase64.charAt(a);});
    switch (res.length % 4) { // To produce valid Base64
    default: // When could this happen ?
    case 0 : return res;
    case 1 : return res+"===";
    case 2 : return res+"==";
    case 3 : return res+"=";
    }
  },

  decompressFromBase64 : function (input) {
    if (input == null) return "";
    if (input == "") return null;
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrBase64, input.charAt(index)); });
  },

  compressToUTF16 : function (input) {
    if (input == null) return "";
    return LZString._compress(input, 15, function(a){return f(a+32);}) + " ";
  },

  decompressFromUTF16: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 16384, function(index) { return compressed.charCodeAt(index) - 32; });
  },

  //compress into uint8array (UCS-2 big endian format)
  compressToUint8Array: function (uncompressed) {
    var compressed = LZString.compress(uncompressed);
    var buf=new Uint8Array(compressed.length*2); // 2 bytes per character

    for (var i=0, TotalLen=compressed.length; i<TotalLen; i++) {
      var current_value = compressed.charCodeAt(i);
      buf[i*2] = current_value >>> 8;
      buf[i*2+1] = current_value % 256;
    }
    return buf;
  },

  //decompress from uint8array (UCS-2 big endian format)
  decompressFromUint8Array:function (compressed) {
    if (compressed===null || compressed===undefined){
        return LZString.decompress(compressed);
    } else {
        var buf=new Array(compressed.length/2); // 2 bytes per character
        for (var i=0, TotalLen=buf.length; i<TotalLen; i++) {
          buf[i]=compressed[i*2]*256+compressed[i*2+1];
        }

        var result = [];
        buf.forEach(function (c) {
          result.push(f(c));
        });
        return LZString.decompress(result.join(''));

    }

  },


  //compress into a string that is already URI encoded
  compressToEncodedURIComponent: function (input) {
    if (input == null) return "";
    return LZString._compress(input, 6, function(a){return keyStrUriSafe.charAt(a);});
  },

  //decompress from an output of compressToEncodedURIComponent
  decompressFromEncodedURIComponent:function (input) {
    if (input == null) return "";
    if (input == "") return null;
    input = input.replace(/ /g, "+");
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrUriSafe, input.charAt(index)); });
  },

  compress: function (uncompressed) {
    return LZString._compress(uncompressed, 16, function(a){return f(a);});
  },
  _compress: function (uncompressed, bitsPerChar, getCharFromInt) {
    if (uncompressed == null) return "";
    var i, value,
        context_dictionary= {},
        context_dictionaryToCreate= {},
        context_c="",
        context_wc="",
        context_w="",
        context_enlargeIn= 2, // Compensate for the first entry which should not count
        context_dictSize= 3,
        context_numBits= 2,
        context_data=[],
        context_data_val=0,
        context_data_position=0,
        ii;

    for (ii = 0; ii < uncompressed.length; ii += 1) {
      context_c = uncompressed.charAt(ii);
      if (!Object.prototype.hasOwnProperty.call(context_dictionary,context_c)) {
        context_dictionary[context_c] = context_dictSize++;
        context_dictionaryToCreate[context_c] = true;
      }

      context_wc = context_w + context_c;
      if (Object.prototype.hasOwnProperty.call(context_dictionary,context_wc)) {
        context_w = context_wc;
      } else {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
          if (context_w.charCodeAt(0)<256) {
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<8 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          } else {
            value = 1;
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1) | value;
              if (context_data_position ==bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = 0;
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<16 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }
          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }


        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        // Add wc to the dictionary.
        context_dictionary[context_wc] = context_dictSize++;
        context_w = String(context_c);
      }
    }

    // Output the code for w.
    if (context_w !== "") {
      if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
        if (context_w.charCodeAt(0)<256) {
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<8 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        } else {
          value = 1;
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | value;
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = 0;
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<16 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        delete context_dictionaryToCreate[context_w];
      } else {
        value = context_dictionary[context_w];
        for (i=0 ; i<context_numBits ; i++) {
          context_data_val = (context_data_val << 1) | (value&1);
          if (context_data_position == bitsPerChar-1) {
            context_data_position = 0;
            context_data.push(getCharFromInt(context_data_val));
            context_data_val = 0;
          } else {
            context_data_position++;
          }
          value = value >> 1;
        }


      }
      context_enlargeIn--;
      if (context_enlargeIn == 0) {
        context_enlargeIn = Math.pow(2, context_numBits);
        context_numBits++;
      }
    }

    // Mark the end of the stream
    value = 2;
    for (i=0 ; i<context_numBits ; i++) {
      context_data_val = (context_data_val << 1) | (value&1);
      if (context_data_position == bitsPerChar-1) {
        context_data_position = 0;
        context_data.push(getCharFromInt(context_data_val));
        context_data_val = 0;
      } else {
        context_data_position++;
      }
      value = value >> 1;
    }

    // Flush the last char
    while (true) {
      context_data_val = (context_data_val << 1);
      if (context_data_position == bitsPerChar-1) {
        context_data.push(getCharFromInt(context_data_val));
        break;
      }
      else context_data_position++;
    }
    return context_data.join('');
  },

  decompress: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 32768, function(index) { return compressed.charCodeAt(index); });
  },

  _decompress: function (length, resetValue, getNextValue) {
    var dictionary = [],
        next,
        enlargeIn = 4,
        dictSize = 4,
        numBits = 3,
        entry = "",
        result = [],
        i,
        w,
        bits, resb, maxpower, power,
        c,
        data = {val:getNextValue(0), position:resetValue, index:1};

    for (i = 0; i < 3; i += 1) {
      dictionary[i] = i;
    }

    bits = 0;
    maxpower = Math.pow(2,2);
    power=1;
    while (power!=maxpower) {
      resb = data.val & data.position;
      data.position >>= 1;
      if (data.position == 0) {
        data.position = resetValue;
        data.val = getNextValue(data.index++);
      }
      bits |= (resb>0 ? 1 : 0) * power;
      power <<= 1;
    }

    switch (next = bits) {
      case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 2:
        return "";
    }
    dictionary[3] = c;
    w = c;
    result.push(c);
    while (true) {
      if (data.index > length) {
        return "";
      }

      bits = 0;
      maxpower = Math.pow(2,numBits);
      power=1;
      while (power!=maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;
        if (data.position == 0) {
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }
        bits |= (resb>0 ? 1 : 0) * power;
        power <<= 1;
      }

      switch (c = bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }

          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 2:
          return result.join('');
      }

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

      if (dictionary[c]) {
        entry = dictionary[c];
      } else {
        if (c === dictSize) {
          entry = w + w.charAt(0);
        } else {
          return null;
        }
      }
      result.push(entry);

      // Add w+entry[0] to the dictionary.
      dictionary[dictSize++] = w + entry.charAt(0);
      enlargeIn--;

      w = entry;

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

    }
  }
};
  return LZString;
})();

if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return LZString; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(29);

var isNativeReflectConstruct = __webpack_require__(65);

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// Draws a ray, adds corresponding collision f-n

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(27);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

/**
 * Utils module
 */

/**
 * Check if an object is an array-like object
 *
 * @credit Javascript: The Definitive Guide, O'Reilly, 2011
 */
function isArrayLike(o) {
    if (o &&                                 // o is not null, undefined, etc.
        typeof o === "object" &&             // o is an object
        isFinite(o.length) &&                // o.length is a finite number
        o.length >= 0 &&                     // o.length is non-negative
        o.length === Math.floor(o.length) && // o.length is an integer
        o.length < 4294967296)               // o.length < 2^32
        return true;                         // Then o is array-like
    else
        return false;                        // Otherwise it is not
}

/**
 * Check for the existence of the sort function in the object
 */
function isSortable(o) {
    if (o &&                                 // o is not null, undefined, etc.
        typeof o === "object" &&             // o is an object
        typeof o.sort === "function")        // o.sort is a function
        return true;                         // Then o is array-like
    else
        return false;                        // Otherwise it is not
}

/**
 * Check for sortable-array-like objects
 */
module.exports.isSortableArrayLike = function (o) {
    return isArrayLike(o) && isSortable(o);
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

/**
 * Utility compare functions
 */

module.exports = {

    /**
     * Compare two numbers.
     *
     * @param {Number} a
     * @param {Number} b
     * @returns {Number} 1 if a > b, 0 if a = b, -1 if a < b
     */
    numcmp: function (a, b) {
        return a - b;
    },

    /**
     * Compare two strings.
     *
     * @param {Number|String} a
     * @param {Number|String} b
     * @returns {Number} 1 if a > b, 0 if a = b, -1 if a < b
     */
    strcmp: function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    }

};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * Binary search implementation
 */

/**
 * Main search recursive function
 */
function loop(data, min, max, index, valpos) {

    // set current position as the middle point between min and max
    var curr = (max + min) >>> 1;

    // compare current index value with the one we are looking for
    var diff = this.compare(data[curr][this.index], index);

    // found?
    if (!diff) {
        return valpos[index] = {
            "found": true,
            "index": curr,
            "prev": null,
            "next": null
        };
    }

    // no more positions available?
    if (min >= max) {
        return valpos[index] = {
            "found": false,
            "index": null,
            "prev": (diff < 0) ? max : max - 1,
            "next": (diff < 0) ? max + 1 : max
        };
    }

    // continue looking for index in one of the remaining array halves
    // current position can be skept as index is not there...
    if (diff > 0)
        return loop.call(this, data, min, curr - 1, index, valpos);
    else
        return loop.call(this, data, curr + 1, max, index, valpos);
}

/**
 * Search bootstrap
 * The function has to be executed in the context of the IndexedArray object
 */
function search(index) {
    var data = this.data;
    return loop.call(this, data, 0, data.length - 1, index, this.valpos);
}

/**
 * Export search function
 */
module.exports.search = search;


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UxWrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UxWrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UxWrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UxWrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.trading-vue-ux-wrapper {\n    position: absolute;\n    display: flex;\n}\n.tvjs-ux-wrapper-pin {\n    position: absolute;\n    width: 9px;\n    height: 9px;\n    z-index: 100;\n    background-color: #23a776;\n    border-radius: 10px;\n    margin-left: -6px;\n    margin-top: -6px;\n    pointer-events: none;\n}\n.tvjs-ux-wrapper-head {\n    position: absolute;\n    height: 23px;\n    width: 100%;\n}\n.tvjs-ux-wrapper-close {\n    position: absolute;\n    width: 11px;\n    height: 11px;\n    font-size: 1.5em;\n    line-height: 0.5em;\n    padding: 1px 0px 1px 2px;\n    border-radius: 10px;\n    right: 5px;\n    top: 5px;\n    user-select: none;\n}\n.tvjs-ux-wrapper-close-hb {\n}\n.tvjs-ux-wrapper-close:hover {\n    background-color: #FF605C !important;\n    color: #692324 !important;\n}\n.tvjs-ux-wrapper-full {\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LegendButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LegendButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LegendButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LegendButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.t-vue-lbtn {\n    z-index: 100;\n    width: 21px;\n    height: 21px;\n    margin-bottom: -6px;\n    pointer-events: all;\n    cursor: pointer;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.t-vue-lbtn-grp {\n    margin-left: 0.5em;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.tvjs-spinner {\n    display: inline-block;\n    position: relative;\n    width: 20px;\n    height: 16px;\n    margin: -4px 0px -1px 0px;\n    opacity: 0.7;\n}\n.tvjs-spinner div {\n    position: absolute;\n    top: 8px;\n    width: 4px;\n    height: 4px;\n    border-radius: 50%;\n    animation-timing-function: cubic-bezier(1, 1, 1, 1);\n}\n.tvjs-spinner div:nth-child(1) {\n    left: 2px;\n    animation: tvjs-spinner1 0.6s infinite;\n    opacity: 0.9;\n}\n.tvjs-spinner div:nth-child(2) {\n    left: 2px;\n    animation: tvjs-spinner2 0.6s infinite;\n}\n.tvjs-spinner div:nth-child(3) {\n    left: 9px;\n    animation: tvjs-spinner2 0.6s infinite;\n}\n.tvjs-spinner div:nth-child(4) {\n    left: 16px;\n    animation: tvjs-spinner3 0.6s infinite;\n    opacity: 0.9;\n}\n@keyframes tvjs-spinner1 {\n0% {\n        transform: scale(0);\n}\n100% {\n        transform: scale(1);\n}\n}\n@keyframes tvjs-spinner3 {\n0% {\n        transform: scale(1);\n}\n100% {\n        transform: scale(0);\n}\n}\n@keyframes tvjs-spinner2 {\n0% {\n        transform: translate(0, 0);\n}\n100% {\n        transform: translate(7px, 0);\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Legend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Legend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Legend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Legend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.trading-vue-legend {\n    position: relative;\n    z-index: 100;\n    font-size: 1.25em;\n    margin-left: 10px;\n    pointer-events: none;\n}\n.trading-vue-ohlcv {\n    pointer-events: none;\n    margin-bottom: 0.5em;\n}\n.t-vue-lspan {\n    font-variant-numeric: tabular-nums;\n    font-weight: 100;\n    font-size: 0.95em;\n    color: #999999; /* TODO: move => params */\n    margin-left: 0.1em;\n    margin-right: 0.2em;\n}\n.t-vue-title {\n    margin-right: 0.25em;\n    font-size: 1.45em;\n    font-weight: 200;\n}\n.t-vue-ind {\n    margin-left: 0.2em;\n    margin-bottom: 0.5em;\n    font-weight: 200;\n    font-size: 1.0em;\n    margin-top: 0.3em;\n}\n.t-vue-ivalue {\n    margin-left: 0.5em;\n}\n.t-vue-unknown {\n    color: #999999; /* TODO: move => params */\n}\n.tvjs-appear-enter-active,\n.tvjs-appear-leave-active\n{\n    transition: all .25s ease;\n}\n.tvjs-appear-enter, .tvjs-appear-leave-to\n{\n    opacity: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.trading-vue-section {\n    height: 0;\n    position: absolute;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Botbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Botbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Botbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Botbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.trading-vue-botbar {\n    position: relative !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.trading-vue-tbitem {\n}\n.trading-vue-tbitem:hover {\n    background-color: #76878319;\n}\n.trading-vue-tbicon {\n    position: absolute;\n}\n.trading-vue-tbitem.selected-item .trading-vue-tbicon {\n     filter: brightness(1.45) sepia(1) hue-rotate(90deg) saturate(4.5) !important;\n}\n.pixelated {\n    -ms-interpolation-mode: nearest-neighbor;\n    image-rendering: -webkit-optimize-contrast;\n    image-rendering: -webkit-crisp-edges;\n    image-rendering: -moz-crisp-edges;\n    image-rendering: -o-crisp-edges;\n    image-rendering: pixelated;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toolbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toolbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toolbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toolbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.trading-vue-toolbar {\n    position: absolute;\n    border-right: 1px solid black;\n    z-index: 100;\n    padding-top: 3px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Widgets_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Widgets_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Widgets_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Widgets_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.tvjs-widgets {\n    position: absolute;\n    z-index: 1000;\n    pointer-events: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 65 */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "TradingVue", function() { return /* reexport */ TradingVue; });
__webpack_require__.d(__webpack_exports__, "Overlay", function() { return /* reexport */ mixins_overlay; });
__webpack_require__.d(__webpack_exports__, "Utils", function() { return /* reexport */ utils; });
__webpack_require__.d(__webpack_exports__, "Constants", function() { return /* reexport */ constants; });
__webpack_require__.d(__webpack_exports__, "Candle", function() { return /* reexport */ candle_CandleExt; });
__webpack_require__.d(__webpack_exports__, "Volbar", function() { return /* reexport */ volbar_VolbarExt; });
__webpack_require__.d(__webpack_exports__, "layout_cnv", function() { return /* reexport */ layout_cnv; });
__webpack_require__.d(__webpack_exports__, "layout_vol", function() { return /* reexport */ layout_vol; });
__webpack_require__.d(__webpack_exports__, "DataCube", function() { return /* reexport */ datacube_DataCube; });
__webpack_require__.d(__webpack_exports__, "Tool", function() { return /* reexport */ mixins_tool; });
__webpack_require__.d(__webpack_exports__, "Interface", function() { return /* reexport */ mixins_interface; });
__webpack_require__.d(__webpack_exports__, "primitives", function() { return /* binding */ primitives; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/TradingVue.vue?vue&type=template&id=235c0ade&
var TradingVuevue_type_template_id_235c0ade_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "trading-vue",
      style: {
        color: this.colorText,
        font: this.font,
        width: this.width + "px",
        height: this.height + "px"
      },
      attrs: { id: _vm.id }
    },
    [
      _vm.toolbar
        ? _c(
            "toolbar",
            _vm._b(
              {
                attrs: { config: _vm.chart_config },
                on: { "custom-event": _vm.custom_event }
              },
              "toolbar",
              _vm.chart_props,
              false
            )
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.ctrllist.length
        ? _c("widgets", {
            attrs: {
              map: _vm.ws,
              width: _vm.width,
              height: _vm.height,
              tv: this,
              dc: _vm.data
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "chart",
        _vm._b(
          {
            key: _vm.reset,
            ref: "chart",
            attrs: { tv_id: _vm.id, config: _vm.chart_config },
            on: {
              "custom-event": _vm.custom_event,
              "range-changed": _vm.range_changed,
              "legend-button-click": _vm.legend_button
            }
          },
          "chart",
          _vm.chart_props,
          false
        )
      )
    ],
    1
  )
}
var staticRenderFns = []
TradingVuevue_type_template_id_235c0ade_render._withStripped = true


// CONCATENATED MODULE: ./src/TradingVue.vue?vue&type=template&id=235c0ade&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(0);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./src/stuff/constants.js
var SECOND = 1000;
var MINUTE = SECOND * 60;
var MINUTE3 = MINUTE * 3;
var MINUTE5 = MINUTE * 5;
var MINUTE15 = MINUTE * 15;
var MINUTE30 = MINUTE * 30;
var HOUR = MINUTE * 60;
var HOUR4 = HOUR * 4;
var HOUR12 = HOUR * 12;
var DAY = HOUR * 24;
var WEEK = DAY * 7;
var MONTH = WEEK * 4;
var YEAR = DAY * 365;
var MONTHMAP = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; // Grid time steps

var TIMESCALES = [YEAR * 10, YEAR * 5, YEAR * 3, YEAR * 2, YEAR, MONTH * 6, MONTH * 4, MONTH * 3, MONTH * 2, MONTH, DAY * 15, DAY * 10, DAY * 7, DAY * 5, DAY * 3, DAY * 2, DAY, HOUR * 12, HOUR * 6, HOUR * 3, HOUR * 1.5, HOUR, MINUTE30, MINUTE15, MINUTE * 10, MINUTE5, MINUTE * 2, MINUTE]; // Grid $ steps

var $SCALES = [0.05, 0.1, 0.2, 0.25, 0.5, 0.8, 1, 2, 5];
var ChartConfig = {
  SBMIN: 60,
  // Minimal sidebar px
  TOOLBAR: 57,
  // Toolbar width px
  TB_ICON: 25,
  // Toolbar icon size px
  TB_ITEM_M: 6,
  // Toolbar item margin px
  TB_ICON_BRI: 1,
  // Toolbar icon brightness
  TB_BORDER: 1,
  // Toolbar border px
  TB_B_STYLE: 'dotted',
  // Toolbar border style
  TOOL_COLL: 7,
  // Tool collision threshold
  EXPAND: 0.15,
  // %/100 of range
  CANDLEW: 0.6,
  // %/100 of step
  GRIDX: 100,
  // px
  GRIDY: 47,
  // px
  BOTBAR: 28,
  // px
  PANHEIGHT: 22,
  // px
  DEFAULT_LEN: 50,
  // candles
  MINIMUM_LEN: 5,
  // candles,
  MIN_ZOOM: 25,
  // candles
  MAX_ZOOM: 1000,
  // candles,
  VOLSCALE: 0.15,
  // %/100 of height
  UX_OPACITY: 0.9,
  // Ux background opacity
  ZOOM_MODE: 'tv' // 'tv' or 'tl'

};
ChartConfig.FONT = "11px -apple-system,BlinkMacSystemFont,\n    Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,\n    Fira Sans,Droid Sans,Helvetica Neue,\n    sans-serif";
var IB_TF_WARN = "When using IB mode you should specify " + "timeframe ('tf' filed in 'chart' object)," + "otherwise you can get an unexpected behaviour";
var MAP_UNIT = {
  "1s": SECOND,
  "5s": SECOND * 5,
  "10s": SECOND * 10,
  "20s": SECOND * 20,
  "30s": SECOND * 30,
  "1m": MINUTE,
  "3m": MINUTE3,
  "5m": MINUTE5,
  "15m": MINUTE15,
  "30m": MINUTE30,
  "1H": HOUR,
  "2H": HOUR * 2,
  "3H": HOUR * 3,
  "4H": HOUR4,
  "12H": HOUR12,
  "1D": DAY,
  "1W": WEEK,
  "1M": MONTH,
  "1Y": YEAR
};
/* harmony default export */ var constants = ({
  SECOND: SECOND,
  MINUTE: MINUTE,
  MINUTE5: MINUTE5,
  MINUTE15: MINUTE15,
  MINUTE30: MINUTE30,
  HOUR: HOUR,
  HOUR4: HOUR4,
  DAY: DAY,
  WEEK: WEEK,
  MONTH: MONTH,
  YEAR: YEAR,
  MONTHMAP: MONTHMAP,
  TIMESCALES: TIMESCALES,
  $SCALES: $SCALES,
  ChartConfig: ChartConfig,
  map_unit: MAP_UNIT,
  IB_TF_WARN: IB_TF_WARN
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart.vue?vue&type=template&id=4d06a4de&
var Chartvue_type_template_id_4d06a4de_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "trading-vue-chart", style: _vm.styles },
    [
      _c("keyboard", { ref: "keyboard" }),
      _vm._v(" "),
      _vm._l(this._layout.grids, function(grid, i) {
        return _c("grid-section", {
          key: grid.id,
          attrs: { common: _vm.section_props(i), grid_id: i },
          on: {
            "register-kb-listener": _vm.register_kb,
            "remove-kb-listener": _vm.remove_kb,
            "range-changed": _vm.range_changed,
            "cursor-changed": _vm.cursor_changed,
            "cursor-locked": _vm.cursor_locked,
            "sidebar-transform": _vm.set_ytransform,
            "layer-meta-props": _vm.layer_meta_props,
            "custom-event": _vm.emit_custom_event,
            "legend-button-click": _vm.legend_button_click
          }
        })
      }),
      _vm._v(" "),
      _c(
        "botbar",
        _vm._b(
          { attrs: { shaders: _vm.shaders } },
          "botbar",
          _vm.botbar_props,
          false
        )
      )
    ],
    2
  )
}
var Chartvue_type_template_id_4d06a4de_staticRenderFns = []
Chartvue_type_template_id_4d06a4de_render._withStripped = true


// CONCATENATED MODULE: ./src/components/Chart.vue?vue&type=template&id=4d06a4de&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(4);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ./src/stuff/context.js
// Canvas context for text measurments
function Context($p) {
  var el = document.createElement('canvas');
  var ctx = el.getContext("2d");
  ctx.font = $p.font;
  return ctx;
}

/* harmony default export */ var context = (Context);
// EXTERNAL MODULE: ./node_modules/arrayslicer/lib/index.js
var arrayslicer_lib = __webpack_require__(25);
var lib_default = /*#__PURE__*/__webpack_require__.n(arrayslicer_lib);

// CONCATENATED MODULE: ./src/stuff/utils.js



/* harmony default export */ var utils = ({
  clamp: function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
  },
  add_zero: function add_zero(i) {
    if (i < 10) {
      i = "0" + i;
    }

    return i;
  },
  // Start of the day (zero millisecond)
  day_start: function day_start(t) {
    var start = new Date(t);
    return start.setUTCHours(0, 0, 0, 0);
  },
  // Start of the month
  month_start: function month_start(t) {
    var date = new Date(t);
    return Date.UTC(date.getFullYear(), date.getMonth(), 1);
  },
  // Start of the year
  year_start: function year_start(t) {
    return Date.UTC(new Date(t).getFullYear());
  },
  get_year: function get_year(t) {
    if (!t) return undefined;
    return new Date(t).getUTCFullYear();
  },
  get_month: function get_month(t) {
    if (!t) return undefined;
    return new Date(t).getUTCMonth();
  },
  // Nearest in array
  nearest_a: function nearest_a(x, array) {
    var dist = Infinity;
    var val = null;
    var index = -1;

    for (var i = 0; i < array.length; i++) {
      var xi = array[i];

      if (Math.abs(xi - x) < dist) {
        dist = Math.abs(xi - x);
        val = xi;
        index = i;
      }
    }

    return [index, val];
  },
  round: function round(num, decimals) {
    if (decimals === void 0) {
      decimals = 8;
    }

    return parseFloat(num.toFixed(decimals));
  },
  // Strip? No, it's ugly floats in js
  strip: function strip(number) {
    return parseFloat(parseFloat(number).toPrecision(12));
  },
  get_day: function get_day(t) {
    return t ? new Date(t).getDate() : null;
  },
  // Update array keeping the same reference
  overwrite: function overwrite(arr, new_arr) {
    arr.splice.apply(arr, [0, arr.length].concat(toConsumableArray_default()(new_arr)));
  },
  // Copy layout in reactive way
  copy_layout: function copy_layout(obj, new_obj) {
    for (var k in obj) {
      if (Array.isArray(obj[k])) {
        // (some offchart indicators are added/removed)
        // we need to update layout in a reactive way
        if (obj[k].length !== new_obj[k].length) {
          this.overwrite(obj[k], new_obj[k]);
          continue;
        }

        for (var m in obj[k]) {
          Object.assign(obj[k][m], new_obj[k][m]);
        }
      } else {
        Object.assign(obj[k], new_obj[k]);
      }
    }
  },
  // Detects candles interval
  detect_interval: function detect_interval(ohlcv) {
    var len = Math.min(ohlcv.length - 1, 99);
    var min = Infinity;
    ohlcv.slice(0, len).forEach(function (x, i) {
      var d = ohlcv[i + 1][0] - x[0];
      if (d === d && d < min) min = d;
    }); // This saves monthly chart from being awkward

    if (min >= constants.MONTH && min <= constants.DAY * 30) {
      return constants.DAY * 31;
    }

    return min;
  },
  // Gets numberic part of overlay id (e.g 'EMA_1' = > 1)
  get_num_id: function get_num_id(id) {
    return parseInt(id.split('_').pop());
  },
  // Fast filter. Really fast, like 10X
  fast_filter: function fast_filter(arr, t1, t2) {
    if (!arr.length) return arr;

    try {
      var ia = new lib_default.a(arr, "0");
      var res = ia.getRange(t1, t2);
      return [res];
    } catch (e) {
      // Something wrong with fancy slice lib
      // Fast fix: fallback to filter
      return [arr.filter(function (x) {
        return x[0] >= t1 && x[0] <= t2;
      })];
    }
  },
  // Fast filter (index-based)
  fast_filter_i: function fast_filter_i(arr, t1, t2) {
    if (!arr.length) return arr;
    var i1 = Math.floor(t1);
    if (i1 < 0) i1 = 0;
    var i2 = Math.floor(t2 + 1);
    var res = arr.slice(i1, i2);
    return [res, i1];
  },
  // Nearest indexes (left and right)
  fast_nearest: function fast_nearest(arr, t1) {
    var ia = new lib_default.a(arr, "0");
    ia.fetch(t1);
    return [ia.nextlow, ia.nexthigh];
  },
  now: function now() {
    return new Date().getTime();
  },
  pause: function pause(delay) {
    return new Promise(function (rs, rj) {
      return setTimeout(rs, delay);
    });
  },
  // Limit crazy wheel delta values
  smart_wheel: function smart_wheel(delta) {
    var abs = Math.abs(delta);

    if (abs > 500) {
      return (200 + Math.log(abs)) * Math.sign(delta);
    }

    return delta;
  },
  // Parse the original mouse event to find deltaX
  get_deltaX: function get_deltaX(event) {
    return event.originalEvent.deltaX / 12;
  },
  // Parse the original mouse event to find deltaY
  get_deltaY: function get_deltaY(event) {
    return event.originalEvent.deltaY / 12;
  },
  // Apply opacity to a hex color
  apply_opacity: function apply_opacity(c, op) {
    if (c.length === 7) {
      var n = Math.floor(op * 255);
      n = this.clamp(n, 0, 255);
      c += n.toString(16);
    }

    return c;
  },
  // Parse timeframe or return value in ms
  parse_tf: function parse_tf(smth) {
    if (typeof smth === 'string') {
      return constants.map_unit[smth];
    } else {
      return smth;
    }
  },
  // Detect index shift between the main data sub
  // and the overlay's sub (for IB-mode)
  index_shift: function index_shift(sub, data) {
    // Find the second timestamp (by value)
    if (!data.length) return 0;
    var first = data[0][0];
    var second;

    for (var i = 1; i < data.length; i++) {
      if (data[i][0] !== first) {
        second = data[i][0];
        break;
      }
    }

    for (var j = 0; j < sub.length; j++) {
      if (sub[j][0] === second) {
        return j - i;
      }
    }

    return 0;
  },
  // Fallback fix for Brave browser
  // https://github.com/brave/brave-browser/issues/1738
  measureText: function measureText(ctx, text, tv_id) {
    var m = ctx.measureTextOrg(text);

    if (m.width === 0) {
      var doc = document;
      var id = 'tvjs-measure-text';
      var el = doc.getElementById(id);

      if (!el) {
        var base = doc.getElementById(tv_id);
        el = doc.createElement("div");
        el.id = id;
        el.style.position = 'absolute';
        base.appendChild(el);
      }

      if (ctx.font) el.style.font = ctx.font;
      el.innerText = text.replace(/ /g, '.');
      return {
        width: el.offsetWidth
      };
    } else {
      return m;
    }
  },
  uuid: function uuid(temp) {
    if (temp === void 0) {
      temp = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    }

    return temp.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  },
  uuid2: function uuid2() {
    return this.uuid('xxxxxxxxxxxx');
  }
});
// CONCATENATED MODULE: ./src/stuff/math.js
// Math/Geometry
/* harmony default export */ var math = ({
  // Distance from point to line
  // p1 = point, (p2, p3) = line
  point2line: function point2line(p1, p2, p3) {
    var _this$tri = this.tri(p1, p2, p3),
        area = _this$tri.area,
        base = _this$tri.base;

    return Math.abs(this.tri_h(area, base));
  },
  // Distance from point to segment
  // p1 = point, (p2, p3) = segment
  point2seg: function point2seg(p1, p2, p3) {
    var _this$tri2 = this.tri(p1, p2, p3),
        area = _this$tri2.area,
        base = _this$tri2.base; // Vector projection


    var proj = this.dot_prod(p1, p2, p3) / base; // Distance from left pin

    var l1 = Math.max(-proj, 0); // Distance from right pin

    var l2 = Math.max(proj - base, 0); // Normal

    var h = Math.abs(this.tri_h(area, base));
    return Math.max(h, l1, l2);
  },
  // Distance from point to ray
  // p1 = point, (p2, p3) = ray
  point2ray: function point2ray(p1, p2, p3) {
    var _this$tri3 = this.tri(p1, p2, p3),
        area = _this$tri3.area,
        base = _this$tri3.base; // Vector projection


    var proj = this.dot_prod(p1, p2, p3) / base; // Distance from left pin

    var l1 = Math.max(-proj, 0); // Normal

    var h = Math.abs(this.tri_h(area, base));
    return Math.max(h, l1);
  },
  tri: function tri(p1, p2, p3) {
    var area = this.area(p1, p2, p3);
    var dx = p3[0] - p2[0];
    var dy = p3[1] - p2[1];
    var base = Math.sqrt(dx * dx + dy * dy);
    return {
      area: area,
      base: base
    };
  },

  /* Area of triangle:
          p1
        /    \
      p2  _  p3
  */
  area: function area(p1, p2, p3) {
    return p1[0] * (p2[1] - p3[1]) + p2[0] * (p3[1] - p1[1]) + p3[0] * (p1[1] - p2[1]);
  },
  // Triangle height
  tri_h: function tri_h(area, base) {
    return area / base;
  },
  // Dot product of (p2, p3) and (p2, p1)
  dot_prod: function dot_prod(p1, p2, p3) {
    var v1 = [p3[0] - p2[0], p3[1] - p2[1]];
    var v2 = [p1[0] - p2[0], p1[1] - p2[1]];
    return v1[0] * v2[0] + v1[1] * v2[1];
  },
  // Symmetrical log
  log: function log(x) {
    // TODO: log for small values
    return Math.sign(x) * Math.log(Math.abs(x) + 1);
  },
  // Symmetrical exp
  exp: function exp(x) {
    return Math.sign(x) * (Math.exp(Math.abs(x)) - 1);
  },
  // Middle line on log scale based on range & px height
  log_mid: function log_mid(r, h) {
    var log_hi = this.log(r[0]);
    var log_lo = this.log(r[1]);
    var px = h / 2;
    var gx = log_hi - px * (log_hi - log_lo) / h;
    return this.exp(gx);
  },
  // Return new adjusted range, based on the previous
  // range, new $_hi, target middle line
  re_range: function re_range(r1, hi2, mid) {
    var log_hi1 = this.log(r1[0]);
    var log_lo1 = this.log(r1[1]);
    var log_hi2 = this.log(hi2);
    var log_$ = this.log(mid);
    var W = (log_hi2 - log_$) * (log_hi1 - log_lo1) / (log_hi1 - log_$);
    return this.exp(log_hi2 - W);
  } // Return new adjusted range, based on the previous
  // range, new $_hi, target middle line + dy (shift)
  // WASTE

  /*range_shift(r1, hi2, mid, dy, h) {
      let log_hi1 = this.log(r1[0])
      let log_lo1 = this.log(r1[1])
      let log_hi2 = this.log(hi2)
      let log_$ = this.log(mid)
       let W = h * (log_hi2 - log_$) /
              (h * (log_hi1 - log_$) / (log_hi1 - log_lo1) + dy)
       return this.exp(log_hi2 - W)
   }*/

});
// CONCATENATED MODULE: ./src/components/js/layout_fn.js
// Layout functional interface


/* harmony default export */ var layout_fn = (function (self, range) {
  var ib = self.ti_map.ib;
  var dt = range[1] - range[0];
  var r = self.spacex / dt;
  var ls = self.grid.logScale || false;
  Object.assign(self, {
    // Time to screen coordinates
    t2screen: function t2screen(t) {
      if (ib) t = self.ti_map.smth2i(t);
      return Math.floor((t - range[0]) * r) - 0.5;
    },
    // $ to screen coordinates
    $2screen: function $2screen(y) {
      if (ls) y = math.log(y);
      return Math.floor(y * self.A + self.B) - 0.5;
    },
    // Time-axis nearest step
    t_magnet: function t_magnet(t) {
      var cn = self.candles || self.master_grid.candles;
      var arr = cn.map(function (x) {
        return x.raw[0];
      });
      var i = utils.nearest_a(t, arr)[0];
      if (!cn[i]) return;
      return Math.floor(cn[i].x) - 0.5;
    },
    // Screen-Y to dollar value (or whatever)
    screen2$: function screen2$(y) {
      if (ls) return math.exp((y - self.B) / self.A);
      return (y - self.B) / self.A;
    },
    // Screen-X to timestamp
    screen2t: function screen2t(x) {
      // TODO: most likely Math.floor not needed
      // return Math.floor(range[0] + x / r)
      return range[0] + x / r;
    },
    // $-axis nearest step
    $_magnet: function $_magnet(price) {},
    // Nearest candlestick
    c_magnet: function c_magnet(t) {
      var cn = self.candles || self.master_grid.candles;
      var arr = cn.map(function (x) {
        return x.raw[0];
      });
      var i = utils.nearest_a(t, arr)[0];
      return cn[i];
    },
    // Nearest data points
    data_magnet: function data_magnet(t) {
      /* TODO: implement */
    }
  });
  return self;
});
// CONCATENATED MODULE: ./src/components/js/log_scale.js
// Log-scale mode helpers
// TODO: all-negative numbers (sometimes wrong scaling)

/* harmony default export */ var log_scale = ({
  candle: function candle(self, mid, p, $p) {
    return {
      x: mid,
      w: self.px_step * $p.config.CANDLEW,
      o: Math.floor(math.log(p[1]) * self.A + self.B),
      h: Math.floor(math.log(p[2]) * self.A + self.B),
      l: Math.floor(math.log(p[3]) * self.A + self.B),
      c: Math.floor(math.log(p[4]) * self.A + self.B),
      raw: p
    };
  },
  expand: function expand(self, height) {
    // expand log scale
    var A = -height / (math.log(self.$_hi) - math.log(self.$_lo));
    var B = -math.log(self.$_hi) * A;
    var top = -height * 0.1;
    var bot = height * 1.1;
    self.$_hi = math.exp((top - B) / A);
    self.$_lo = math.exp((bot - B) / A);
  }
});
// CONCATENATED MODULE: ./src/components/js/grid_maker.js







var grid_maker_TIMESCALES = constants.TIMESCALES,
    grid_maker_$SCALES = constants.$SCALES,
    grid_maker_WEEK = constants.WEEK,
    grid_maker_MONTH = constants.MONTH,
    grid_maker_YEAR = constants.YEAR;
var MAX_INT = Number.MAX_SAFE_INTEGER; // master_grid - ref to the master grid

function GridMaker(id, params, master_grid) {
  if (master_grid === void 0) {
    master_grid = null;
  }

  var sub = params.sub,
      interval = params.interval,
      range = params.range,
      ctx = params.ctx,
      $p = params.$p,
      layers_meta = params.layers_meta,
      height = params.height,
      y_t = params.y_t,
      ti_map = params.ti_map,
      grid = params.grid;
  var self = {
    ti_map: ti_map
  };
  var lm = layers_meta[id];
  var y_range_fn = null;
  var ls = grid.logScale;

  if (lm && Object.keys(lm).length) {
    // Gets last y_range fn()
    var yrs = Object.values(lm).filter(function (x) {
      return x.y_range;
    });
    if (yrs.length) y_range_fn = yrs[yrs.length - 1].y_range;
  } // Calc vertical ($/₿) range


  function calc_$range() {
    if (!master_grid) {
      // $ candlestick range
      if (y_range_fn) {
        var _y_range_fn = y_range_fn(hi, lo),
            _y_range_fn2 = slicedToArray_default()(_y_range_fn, 2),
            hi = _y_range_fn2[0],
            lo = _y_range_fn2[1];
      } else {
        hi = Math.max.apply(Math, toConsumableArray_default()(sub.map(function (x) {
          return x[2];
        })));
        lo = Math.min.apply(Math, toConsumableArray_default()(sub.map(function (x) {
          return x[3];
        })));
      }
    } else {
      // Offchart indicator range
      hi = -Infinity, lo = Infinity;

      for (var i = 0; i < sub.length; i++) {
        for (var j = 1; j < sub[i].length; j++) {
          var v = sub[i][j];
          if (v > hi) hi = v;
          if (v < lo) lo = v;
        }
      }

      if (y_range_fn) {
        var _y_range_fn3 = y_range_fn(hi, lo);

        var _y_range_fn4 = slicedToArray_default()(_y_range_fn3, 2);

        hi = _y_range_fn4[0];
        lo = _y_range_fn4[1];
      }
    } // Fixed y-range in non-auto mode


    if (y_t && !y_t.auto && y_t.range) {
      self.$_hi = y_t.range[0];
      self.$_lo = y_t.range[1];
    } else {
      if (!ls) {
        self.$_hi = hi + (hi - lo) * $p.config.EXPAND;
        self.$_lo = lo - (hi - lo) * $p.config.EXPAND;
      } else {
        self.$_hi = hi;
        self.$_lo = lo;
        log_scale.expand(self, height);
      }

      if (self.$_hi === self.$_lo) {
        if (!ls) {
          self.$_hi *= 1.05; // Expand if height range === 0

          self.$_lo *= 0.95;
        } else {
          log_scale.expand(self, height);
        }
      }
    }
  }

  function calc_sidebar() {
    if (sub.length < 2) {
      self.prec = 0;
      self.sb = $p.config.SBMIN;
      return;
    } // TODO: improve sidebar width calculation
    // at transition point, when one precision is
    // replaced with another
    // Gets formated levels (their lengths),
    // calculates max and measures the sidebar length
    // from it:
    // TODO: add custom formatter f()


    self.prec = calc_precision(sub);
    var subn = sub.filter(function (x) {
      return typeof x[1] === 'number';
    });
    var lens = subn.map(function (x) {
      return x[1].toFixed(self.prec).length;
    });
    lens.push(self.$_hi.toFixed(self.prec).length);
    lens.push(self.$_lo.toFixed(self.prec).length);
    var str = '0'.repeat(Math.max.apply(Math, toConsumableArray_default()(lens))) + '    ';
    self.sb = ctx.measureText(str).width;
    self.sb = Math.max(Math.floor(self.sb), $p.config.SBMIN);
  } // Calculate $ precision for the Y-axis


  function calc_precision(data) {
    var max_r = 0,
        max_l = 0; // Get max lengths of integer and fractional parts

    data.forEach(function (x) {
      // Fix undefined bug
      var str = x[1] != null ? x[1].toString() : '';

      if (x[1] < 0.000001) {
        // Parsing the exponential form. Gosh this
        // smells trickily
        var _str$split = str.split('e-'),
            _str$split2 = slicedToArray_default()(_str$split, 2),
            ls = _str$split2[0],
            rs = _str$split2[1];

        var _ls$split = ls.split('.'),
            _ls$split2 = slicedToArray_default()(_ls$split, 2),
            l = _ls$split2[0],
            r = _ls$split2[1];

        if (!r) r = '';
        r = {
          length: r.length + parseInt(rs) || 0
        };
      } else {
        var _str$split3 = str.split('.'),
            _str$split4 = slicedToArray_default()(_str$split3, 2),
            l = _str$split4[0],
            r = _str$split4[1];
      }

      if (r && r.length > max_r) {
        max_r = r.length;
      }

      if (l && l.length > max_l) {
        max_l = l.length;
      }
    }); // Select precision scheme depending
    // on the left and right part lengths
    //

    var even = max_r - max_r % 2 + 2;

    if (max_l === 1) {
      return Math.min(8, Math.max(2, even));
    }

    if (max_l <= 2) {
      return Math.min(4, Math.max(2, even));
    }

    return 2;
  }

  function calc_positions() {
    if (sub.length < 2) return;
    var dt = range[1] - range[0]; // A pixel space available to draw on (x-axis)

    self.spacex = $p.width - self.sb; // Candle capacity

    var capacity = dt / interval;
    self.px_step = self.spacex / capacity; // px / time ratio

    var r = self.spacex / dt;
    self.startx = (sub[0][0] - range[0]) * r; // Candle Y-transform: (A = scale, B = shift)

    if (!grid.logScale) {
      self.A = -height / (self.$_hi - self.$_lo);
      self.B = -self.$_hi * self.A;
    } else {
      self.A = -height / (math.log(self.$_hi) - math.log(self.$_lo));
      self.B = -math.log(self.$_hi) * self.A;
    }
  } // Select nearest good-loking t step (m is target scale)


  function time_step() {
    var k = ti_map.ib ? 60000 : 1;
    var xrange = (range[1] - range[0]) * k;
    var m = xrange * ($p.config.GRIDX / $p.width);
    var s = grid_maker_TIMESCALES;
    return utils.nearest_a(m, s)[1] / k;
  } // Select nearest good-loking $ step (m is target scale)


  function dollar_step() {
    var yrange = self.$_hi - self.$_lo;
    var m = yrange * ($p.config.GRIDY / height);
    var p = parseInt(yrange.toExponential().split('e')[1]);
    var d = Math.pow(10, p);
    var s = grid_maker_$SCALES.map(function (x) {
      return x * d;
    }); // TODO: center the range (look at RSI for example,
    // it looks ugly when "80" is near the top)

    return utils.strip(utils.nearest_a(m, s)[1]);
  }

  function dollar_mult() {
    var mult_hi = dollar_mult_hi();
    var mult_lo = dollar_mult_lo();
    return Math.max(mult_hi, mult_lo);
  } // Price step multiplier (for the log-scale mode)


  function dollar_mult_hi() {
    var h = Math.min(self.B, height);
    if (h < $p.config.GRIDY) return 1;
    var n = h / $p.config.GRIDY; // target grid N

    var yrange = self.$_hi;

    if (self.$_lo > 0) {
      var yratio = self.$_hi / self.$_lo;
    } else {
      yratio = self.$_hi / 1; // TODO: small values
    }

    var m = yrange * ($p.config.GRIDY / h);
    var p = parseInt(yrange.toExponential().split('e')[1]);
    return Math.pow(yratio, 1 / n);
  }

  function dollar_mult_lo() {
    var h = Math.min(height - self.B, height);
    if (h < $p.config.GRIDY) return 1;
    var n = h / $p.config.GRIDY; // target grid N

    var yrange = Math.abs(self.$_lo);

    if (self.$_hi < 0 && self.$_lo < 0) {
      var yratio = Math.abs(self.$_lo / self.$_hi);
    } else {
      yratio = Math.abs(self.$_lo) / 1;
    }

    var m = yrange * ($p.config.GRIDY / h);
    var p = parseInt(yrange.toExponential().split('e')[1]);
    return Math.pow(yratio, 1 / n);
  }

  function grid_x() {
    // If this is a subgrid, no need to calc a timeline,
    // we just borrow it from the master_grid
    if (!master_grid) {
      self.t_step = time_step();
      self.xs = [];
      var dt = range[1] - range[0];
      var r = self.spacex / dt;
      /* TODO: remove the left-side glitch
       let year_0 = Utils.get_year(sub[0][0])
      for (var t0 = year_0; t0 < range[0]; t0 += self.t_step) {}
       let m0 = Utils.get_month(t0)*/

      for (var i = 0; i < sub.length; i++) {
        var p = sub[i];
        var prev = sub[i - 1] || [];
        var prev_xs = self.xs[self.xs.length - 1] || [0, []];
        var x = Math.floor((p[0] - range[0]) * r);
        insert_line(prev, p, x); // Filtering lines that are too near

        var xs = self.xs[self.xs.length - 1] || [0, []];
        if (prev_xs === xs) continue;

        if (xs[1][0] - prev_xs[1][0] < self.t_step * 0.8) {
          // prev_xs is a higher "rank" label
          if (xs[2] <= prev_xs[2]) {
            self.xs.pop();
          } else {
            // Otherwise
            self.xs.splice(self.xs.length - 2, 1);
          }
        }
      } // TODO: fix grid extention for bigger timeframes


      if (interval < grid_maker_WEEK && r > 0) {
        extend_left(dt, r);
        extend_right(dt, r);
      }
    } else {
      self.t_step = master_grid.t_step;
      self.px_step = master_grid.px_step;
      self.startx = master_grid.startx;
      self.xs = master_grid.xs;
    }
  }

  function insert_line(prev, p, x, m0) {
    var prev_t = ti_map.ib ? ti_map.i2t(prev[0]) : prev[0];
    var p_t = ti_map.ib ? ti_map.i2t(p[0]) : p[0]; // TODO: take this block =========> (see below)

    if ((prev[0] || interval === grid_maker_YEAR) && utils.get_year(p_t) !== utils.get_year(prev_t)) {
      self.xs.push([x, p, grid_maker_YEAR]); // [px, [...], rank]
    } else if (prev[0] && utils.get_month(p_t) !== utils.get_month(prev_t)) {
      self.xs.push([x, p, grid_maker_MONTH]);
    } else if (p[0] % self.t_step === 0) {
      self.xs.push([x, p, interval]);
    }
  }

  function extend_left(dt, r) {
    if (!self.xs.length || !isFinite(r)) return;
    var t = self.xs[0][1][0];

    while (true) {
      t -= self.t_step;
      var x = Math.floor((t - range[0]) * r);
      if (x < 0) break; // TODO: ==========> And insert it here somehow

      if (t % interval === 0) {
        self.xs.unshift([x, [t], interval]);
      }
    }
  }

  function extend_right(dt, r) {
    if (!self.xs.length || !isFinite(r)) return;
    var t = self.xs[self.xs.length - 1][1][0];

    while (true) {
      t += self.t_step;
      var x = Math.floor((t - range[0]) * r);
      if (x > self.spacex) break;

      if (t % interval === 0) {
        self.xs.push([x, [t], interval]);
      }
    }
  }

  function grid_y() {
    // Prevent duplicate levels
    var m = Math.pow(10, -self.prec);
    self.$_step = Math.max(m, dollar_step());
    self.ys = [];
    var y1 = self.$_lo - self.$_lo % self.$_step;

    for (var y$ = y1; y$ <= self.$_hi; y$ += self.$_step) {
      var y = Math.floor(y$ * self.A + self.B);
      if (y > height) continue;
      self.ys.push([y, utils.strip(y$)]);
    }
  }

  function grid_y_log() {
    // TODO: Prevent duplicate levels, is this even
    // a problem here ?
    self.$_mult = dollar_mult();
    self.ys = [];
    var v = Math.abs(sub[sub.length - 1][1] || 1);
    var y1 = search_start_pos(v);
    var y2 = search_start_neg(-v);
    var yp = -Infinity; // Previous y value

    var n = height / $p.config.GRIDY; // target grid N

    var q = 1 + (self.$_mult - 1) / 2; // Over 0

    for (var y$ = y1; y$ > 0; y$ /= self.$_mult) {
      y$ = log_rounder(y$, q);
      var y = Math.floor(math.log(y$) * self.A + self.B);
      self.ys.push([y, utils.strip(y$)]);
      if (y > height) break;
      if (y - yp < $p.config.GRIDY * 0.7) break;
      if (self.ys.length > n + 1) break;
      yp = y;
    } // Under 0


    yp = Infinity;

    for (var y$ = y2; y$ < 0; y$ /= self.$_mult) {
      y$ = log_rounder(y$, q);

      var _y = Math.floor(math.log(y$) * self.A + self.B);

      if (yp - _y < $p.config.GRIDY * 0.7) break;
      self.ys.push([_y, utils.strip(y$)]);
      if (_y < 0) break;
      if (self.ys.length > n * 3 + 1) break;
      yp = _y;
    } // TODO: remove lines near to 0

  } // Search a start for the top grid so that
  // the fixed value always included


  function search_start_pos(value) {
    var N = height / $p.config.GRIDY; // target grid N

    var y = Infinity,
        y$ = value,
        count = 0;

    while (y > 0) {
      y = Math.floor(math.log(y$) * self.A + self.B);
      y$ *= self.$_mult;
      if (count++ > N * 3) return 0; // Prevents deadloops
    }

    return y$;
  }

  function search_start_neg(value) {
    var N = height / $p.config.GRIDY; // target grid N

    var y = -Infinity,
        y$ = value,
        count = 0;

    while (y < height) {
      y = Math.floor(math.log(y$) * self.A + self.B);
      y$ *= self.$_mult;
      if (count++ > N * 3) break; // Prevents deadloops
    }

    return y$;
  } // Make log scale levels look great again


  function log_rounder(x, quality) {
    var s = Math.sign(x);
    x = Math.abs(x);

    if (x > 10) {
      for (var div = 10; div < MAX_INT; div *= 10) {
        var nice = Math.floor(x / div) * div;

        if (x / nice > quality) {
          // More than 10% off
          break;
        }
      }

      div /= 10;
      return s * Math.floor(x / div) * div;
    } else if (x < 1) {
      for (var ro = 10; ro >= 1; ro--) {
        var _nice = utils.round(x, ro);

        if (x / _nice > quality) {
          // More than 10% off
          break;
        }
      }

      return s * utils.round(x, ro + 1);
    } else {
      return s * Math.floor(x);
    }
  }

  function apply_sizes() {
    self.width = $p.width - self.sb;
    self.height = height;
  }

  calc_$range();
  calc_sidebar();
  return {
    // First we need to calculate max sidebar width
    // (among all grids). Then we can actually make
    // them
    create: function create() {
      calc_positions();
      grid_x();

      if (grid.logScale) {
        grid_y_log();
      } else {
        grid_y();
      }

      apply_sizes(); // Link to the master grid (candlesticks)

      if (master_grid) {
        self.master_grid = master_grid;
      }

      self.grid = grid; // Grid params
      // Here we add some helpful functions for
      // plugin creators

      return layout_fn(self, range);
    },
    get_layout: function get_layout() {
      return self;
    },
    set_sidebar: function set_sidebar(v) {
      return self.sb = v;
    },
    get_sidebar: function get_sidebar() {
      return self.sb;
    }
  };
}

/* harmony default export */ var grid_maker = (GridMaker);
// CONCATENATED MODULE: ./src/components/js/layout.js



function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Calculates all necessary s*it to build the chart
// Heights, widths, transforms, ... = everything
// Why such a mess you ask? Well, that's because
// one components size can depend on other component
// data formatting (e.g. grid width depends on sidebar precision)
// So it's better to calc all in one place.





function Layout(params) {
  var chart = params.chart,
      sub = params.sub,
      offsub = params.offsub,
      interval = params.interval,
      range = params.range,
      ctx = params.ctx,
      layers_meta = params.layers_meta,
      ti_map = params.ti_map,
      $p = params.$props,
      y_ts = params.y_transforms;
  var mgrid = chart.grid || {};
  offsub = offsub.filter(function (x, i) {
    // Skip offchart overlays with custom grid id,
    // because they will be mergred with the existing grids
    return !(x.grid && x.grid.id);
  }); // Splits space between main chart
  // and offchart indicator grids

  function grid_hs() {
    var height = $p.height - $p.config.BOTBAR; // When at least one height defined (default = 1),
    // Pxs calculated as: (sum of weights) / number

    if (mgrid.height || offsub.find(function (x) {
      return x.grid.height;
    })) {
      return weighted_hs(mgrid, height);
    }

    var n = offsub.length;
    var off_h = 2 * Math.sqrt(n) / 7 / (n || 1); // Offchart grid height

    var px = Math.floor(height * off_h); // Main grid height

    var m = height - px * n;
    return [m].concat(Array(n).fill(px));
  }

  function weighted_hs(grid, height) {
    var hs = [{
      grid: grid
    }].concat(toConsumableArray_default()(offsub)).map(function (x) {
      return x.grid.height || 1;
    });
    var sum = hs.reduce(function (a, b) {
      return a + b;
    }, 0);
    hs = hs.map(function (x) {
      return Math.floor(x / sum * height);
    }); // Refine the height if Math.floor decreased px sum

    sum = hs.reduce(function (a, b) {
      return a + b;
    }, 0);

    for (var i = 0; i < height - sum; i++) {
      hs[i % hs.length]++;
    }

    return hs;
  }

  function candles_n_vol() {
    self.candles = [];
    self.volume = [];
    var maxv = Math.max.apply(Math, toConsumableArray_default()(sub.map(function (x) {
      return x[5];
    })));
    var vs = $p.config.VOLSCALE * $p.height / maxv;
    var x1,
        x2,
        mid,
        prev = undefined;
    var splitter = self.px_step > 5 ? 1 : 0;

    for (var i = 0; i < sub.length; i++) {
      var p = sub[i];
      mid = self.t2screen(p[0]) + 0.5;
      self.candles.push(mgrid.logScale ? log_scale.candle(self, mid, p, $p) : {
        x: mid,
        w: self.px_step * $p.config.CANDLEW,
        o: Math.floor(p[1] * self.A + self.B),
        h: Math.floor(p[2] * self.A + self.B),
        l: Math.floor(p[3] * self.A + self.B),
        c: Math.floor(p[4] * self.A + self.B),
        raw: p
      }); // Clear volume bar if there is a time gap

      if (sub[i - 1] && p[0] - sub[i - 1][0] > interval) {
        prev = null;
      }

      x1 = prev || Math.floor(mid - self.px_step * 0.5);
      x2 = Math.floor(mid + self.px_step * 0.5) - 0.5;
      self.volume.push({
        x1: x1,
        x2: x2,
        h: p[5] * vs,
        green: p[4] >= p[1],
        raw: p
      });
      prev = x2 + splitter;
    }
  } // Main grid


  var hs = grid_hs();
  var specs = {
    sub: sub,
    interval: interval,
    range: range,
    ctx: ctx,
    $p: $p,
    layers_meta: layers_meta,
    ti_map: ti_map,
    height: hs[0],
    y_t: y_ts[0],
    grid: mgrid
  };
  var gms = [new grid_maker(0, specs)]; // Sub grids

  var _iterator = _createForOfIteratorHelper(offsub.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = slicedToArray_default()(_step.value, 2),
          i = _step$value[0],
          _step$value$ = _step$value[1],
          data = _step$value$.data,
          grid = _step$value$.grid;

      specs.sub = data;
      specs.height = hs[i + 1];
      specs.y_t = y_ts[i + 1];
      specs.grid = grid || {};
      gms.push(new grid_maker(i + 1, specs, gms[0].get_layout()));
    } // Max sidebar among all grinds

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var sb = Math.max.apply(Math, toConsumableArray_default()(gms.map(function (x) {
    return x.get_sidebar();
  })));
  var grids = [],
      offset = 0;

  for (i = 0; i < gms.length; i++) {
    gms[i].set_sidebar(sb);
    grids.push(gms[i].create());
    grids[i].id = i;
    grids[i].offset = offset;
    offset += grids[i].height;
  }

  var self = grids[0];
  candles_n_vol();
  return {
    grids: grids,
    botbar: {
      width: $p.width,
      height: $p.config.BOTBAR,
      offset: offset,
      xs: grids[0] ? grids[0].xs : []
    }
  };
}

/* harmony default export */ var js_layout = (Layout);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(1);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(2);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/components/js/updater.js




function updater_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = updater_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function updater_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return updater_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return updater_arrayLikeToArray(o, minLen); }

function updater_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Cursor updater: calculates current values for
// OHLCV and all other indicators


var updater_CursorUpdater = /*#__PURE__*/function () {
  function CursorUpdater(comp) {
    classCallCheck_default()(this, CursorUpdater);

    this.comp = comp, this.grids = comp._layout.grids, this.cursor = comp.cursor;
  }

  createClass_default()(CursorUpdater, [{
    key: "sync",
    value: function sync(e) {
      // TODO: values not displaying if a custom grid id is set:
      // grid: { id: N }
      this.cursor.grid_id = e.grid_id;
      var once = true;

      var _iterator = updater_createForOfIteratorHelper(this.grids),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var grid = _step.value;
          var c = this.cursor_data(grid, e);

          if (!this.cursor.locked) {
            // TODO: find a better fix to invisible cursor prob
            if (once) {
              this.cursor.t = this.cursor_time(grid, e, c);
              if (this.cursor.t) once = false;
            }

            if (c.values) {
              this.comp.$set(this.cursor.values, grid.id, c.values);
            }
          }

          if (grid.id !== e.grid_id) continue;
          this.cursor.x = grid.t2screen(this.cursor.t);
          this.cursor.y = c.y;
          this.cursor.y$ = c.y$;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "overlay_data",
    value: function overlay_data(grid, e) {
      var s = grid.id === 0 ? 'main_section' : 'sub_section';
      var data = this.comp[s].data; // Split offchart data between offchart grids

      if (grid.id > 0) {
        // Sequential grids
        var _d = data.filter(function (x) {
          return x.grid.id === undefined;
        }); // grids with custom ids (for merging)


        var m = data.filter(function (x) {
          return x.grid.id === grid.id;
        });
        data = [_d[grid.id - 1]].concat(toConsumableArray_default()(m));
      }

      var t = grid.screen2t(e.x);
      var ids = {},
          res = {};

      var _iterator2 = updater_createForOfIteratorHelper(data),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var d = _step2.value;
          var ts = d.data.map(function (x) {
            return x[0];
          });
          var i = utils.nearest_a(t, ts)[0];
          d.type in ids ? ids[d.type]++ : ids[d.type] = 0;
          res["".concat(d.type, "_").concat(ids[d.type])] = d.data[i];
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return res;
    } // Nearest datapoints

  }, {
    key: "cursor_data",
    value: function cursor_data(grid, e) {
      var data = this.comp.main_section.sub;
      var xs = data.map(function (x) {
        return grid.t2screen(x[0]) + 0.5;
      });
      var i = utils.nearest_a(e.x, xs)[0];
      if (!xs[i]) return {};
      return {
        x: Math.floor(xs[i]) - 0.5,
        y: Math.floor(e.y - 2) - 0.5 - grid.offset,
        y$: grid.screen2$(e.y - 2 - grid.offset),
        t: (data[i] || [])[0],
        values: Object.assign({
          ohlcv: grid.id === 0 ? data[i] : undefined
        }, this.overlay_data(grid, e))
      };
    } // Get cursor t-position (extended)

  }, {
    key: "cursor_time",
    value: function cursor_time(grid, mouse, candle) {
      var t = grid.screen2t(mouse.x);
      var r = Math.abs((t - candle.t) / this.comp.interval);
      var sign = Math.sign(t - candle.t);

      if (r >= 0.5) {
        // Outside the data range
        var n = Math.round(r);
        return candle.t + n * this.comp.interval * sign;
      } // Inside the data range


      return candle.t;
    }
  }]);

  return CursorUpdater;
}();

/* harmony default export */ var updater = (updater_CursorUpdater);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Section.vue?vue&type=template&id=8fbe9336&
var Sectionvue_type_template_id_8fbe9336_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "trading-vue-section" },
    [
      _c("chart-legend", {
        attrs: {
          values: _vm.section_values,
          grid_id: _vm.grid_id,
          common: _vm.legend_props,
          meta_props: _vm.get_meta_props
        },
        on: { "legend-button-click": _vm.button_click }
      }),
      _vm._v(" "),
      _c(
        "grid",
        _vm._b(
          {
            attrs: { grid_id: _vm.grid_id },
            on: {
              "register-kb-listener": _vm.register_kb,
              "remove-kb-listener": _vm.remove_kb,
              "range-changed": _vm.range_changed,
              "cursor-changed": _vm.cursor_changed,
              "cursor-locked": _vm.cursor_locked,
              "layer-meta-props": _vm.emit_meta_props,
              "custom-event": _vm.emit_custom_event,
              "sidebar-transform": _vm.sidebar_transform,
              "rezoom-range": _vm.rezoom_range
            }
          },
          "grid",
          _vm.grid_props,
          false
        )
      ),
      _vm._v(" "),
      _c(
        "sidebar",
        _vm._b(
          {
            ref: "grid-" + _vm.grid_id,
            attrs: {
              grid_id: _vm.grid_id,
              rerender: _vm.rerender,
              shaders: _vm.shaders
            },
            on: { "sidebar-transform": _vm.sidebar_transform }
          },
          "sidebar",
          _vm.sidebar_props,
          false
        )
      )
    ],
    1
  )
}
var Sectionvue_type_template_id_8fbe9336_staticRenderFns = []
Sectionvue_type_template_id_8fbe9336_render._withStripped = true


// CONCATENATED MODULE: ./src/components/Section.vue?vue&type=template&id=8fbe9336&

// EXTERNAL MODULE: ./node_modules/hammerjs/hammer.js
var hammer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/hamsterjs/hamster.js
var hamsterjs_hamster = __webpack_require__(30);
var hamster_default = /*#__PURE__*/__webpack_require__.n(hamsterjs_hamster);

// CONCATENATED MODULE: ./src/components/js/grid.js





function grid_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = grid_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function grid_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return grid_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return grid_arrayLikeToArray(o, minLen); }

function grid_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Grid.js listens to various user-generated events,
// emits Vue-events if something has changed (e.g. range)
// Think of it as an I/O system for Grid.vue



 // Grid is good.

var grid_Grid = /*#__PURE__*/function () {
  function Grid(canvas, comp) {
    classCallCheck_default()(this, Grid);

    this.MIN_ZOOM = comp.config.MIN_ZOOM;
    this.MAX_ZOOM = comp.config.MAX_ZOOM;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.comp = comp;
    this.$p = comp.$props;
    this.data = this.$p.sub;
    this.range = this.$p.range;
    this.id = this.$p.grid_id;
    this.layout = this.$p.layout.grids[this.id];
    this.interval = this.$p.interval;
    this.cursor = comp.$props.cursor;
    this.offset_x = 0;
    this.offset_y = 0;
    this.deltas = 0; // Wheel delta events

    this.listeners();
    this.overlays = [];
  }

  createClass_default()(Grid, [{
    key: "listeners",
    value: function listeners() {
      var _this = this;

      var hamster = hamster_default()(this.canvas);
      hamster.wheel(function (event, delta) {
        return _this.mousezoom(-delta * 50, event);
      });
      var mc = new hammer["Manager"](this.canvas);
      mc.add(new hammer["Pan"]({
        threshold: 0
      }));
      mc.add(new hammer["Tap"]());
      mc.add(new hammer["Pinch"]());
      mc.get('pinch').set({
        enable: true
      });
      mc.on('panstart', function (event) {
        if (_this.cursor.scroll_lock) return;
        var tfrm = _this.$p.y_transform;
        _this.drug = {
          x: event.center.x + _this.offset_x,
          y: event.center.y + _this.offset_y,
          r: _this.range.slice(),
          t: _this.range[1] - _this.range[0],
          o: tfrm ? tfrm.offset || 0 : 0,
          y_r: tfrm && tfrm.range ? tfrm.range.slice() : undefined,
          B: _this.layout.B
        };

        _this.comp.$emit('cursor-changed', {
          grid_id: _this.id,
          x: event.center.x + _this.offset_x,
          y: event.center.y + _this.offset_y
        });

        _this.comp.$emit('cursor-locked', true);
      });
      mc.on('panmove', function (event) {
        if (_this.drug) {
          _this.mousedrag(_this.drug.x + event.deltaX, _this.drug.y + event.deltaY);

          _this.comp.$emit('cursor-changed', {
            grid_id: _this.id,
            x: event.center.x + _this.offset_x,
            y: event.center.y + _this.offset_y
          });
        }
      });
      mc.on('panend', function () {
        _this.drug = null;

        _this.comp.$emit('cursor-locked', false);
      });
      mc.on('tap', function (event) {
        _this.comp.$emit('cursor-changed', {
          grid_id: _this.id,
          x: event.center.x + _this.offset_x,
          y: event.center.y + _this.offset_y
        });

        _this.update();
      });
      mc.on('pinchstart', function () {
        _this.pinch = {
          t: _this.range[1] - _this.range[0],
          r: _this.range.slice()
        };
      });
      mc.on('pinchend', function () {
        _this.pinch = null;
      });
      mc.on('pinch', function (event) {
        if (_this.pinch) _this.pinchzoom(event.scale);
      });
      window.addEventListener("gesturestart", function (event) {
        event.preventDefault();
      });
      window.addEventListener("gesturechange", function (event) {
        event.preventDefault();
      });
      window.addEventListener("gestureend", function (event) {
        event.preventDefault();
      });
    }
  }, {
    key: "mousemove",
    value: function mousemove(event) {
      this.comp.$emit('cursor-changed', {
        grid_id: this.id,
        x: event.layerX,
        y: event.layerY + this.layout.offset
      }); // TODO: Temp solution, need to implement
      // a proper way to get the chart el offset

      this.offset_x = event.layerX - event.pageX + window.scrollX;
      this.offset_y = event.layerY - event.pageY + this.layout.offset + window.scrollY;
      this.propagate('mousemove', event);
    }
  }, {
    key: "mouseout",
    value: function mouseout(event) {
      this.comp.$emit('cursor-changed', {});
      this.propagate('mouseout', event);
    }
  }, {
    key: "mouseup",
    value: function mouseup(event) {
      this.drug = null; //    this.pinch = null

      this.comp.$emit('cursor-locked', false);
      this.propagate('mouseup', event);
    }
  }, {
    key: "mousedown",
    value: function mousedown(event) {
      this.propagate('mousedown', event);
      this.comp.$emit('cursor-locked', true);
      if (event.defaultPrevented) return;
      this.comp.$emit('custom-event', {
        event: 'grid-mousedown',
        args: [this.id]
      });
    }
  }, {
    key: "click",
    value: function click(event) {
      this.propagate('click', event);
    }
  }, {
    key: "new_layer",
    value: function new_layer(layer) {
      if (layer.name === 'crosshair') {
        this.crosshair = layer;
      } else {
        this.overlays.push(layer);
      }

      this.update();
    }
  }, {
    key: "del_layer",
    value: function del_layer(id) {
      this.overlays = this.overlays.filter(function (x) {
        return x.id !== id;
      });
      this.update();
    }
  }, {
    key: "show_hide_layer",
    value: function show_hide_layer(event) {
      var l = this.overlays.filter(function (x) {
        return x.id === event.id;
      });
      if (l.length) l[0].display = event.display;
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      // Update reference to the grid
      // TODO: check what happens if data changes interval
      this.layout = this.$p.layout.grids[this.id];
      this.interval = this.$p.interval;
      if (!this.layout) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.grid();
      var overlays = [];
      overlays.push.apply(overlays, toConsumableArray_default()(this.overlays)); // z-index sorting

      overlays.sort(function (l1, l2) {
        return l1.z - l2.z;
      });
      overlays.forEach(function (l) {
        if (!l.display) return;

        _this2.ctx.save();

        var r = l.renderer;
        if (r.pre_draw) r.pre_draw(_this2.ctx);
        r.draw(_this2.ctx);
        if (r.post_draw) r.post_draw(_this2.ctx);

        _this2.ctx.restore();
      });

      if (this.crosshair) {
        this.crosshair.renderer.draw(this.ctx);
      }
    } // Actually draws the grid (for real)

  }, {
    key: "grid",
    value: function grid() {
      this.ctx.strokeStyle = this.$p.colors.colorGrid;
      this.ctx.beginPath();
      var ymax = this.layout.height;

      var _iterator = grid_createForOfIteratorHelper(this.layout.xs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = slicedToArray_default()(_step.value, 2),
              x = _step$value[0],
              p = _step$value[1];

          this.ctx.moveTo(x - 0.5, 0);
          this.ctx.lineTo(x - 0.5, ymax);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = grid_createForOfIteratorHelper(this.layout.ys),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = slicedToArray_default()(_step2.value, 2),
              y = _step2$value[0],
              y$ = _step2$value[1];

          this.ctx.moveTo(0, y - 0.5);
          this.ctx.lineTo(this.layout.width, y - 0.5);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      this.ctx.stroke();
      if (this.$p.grid_id) this.upper_border();
    }
  }, {
    key: "upper_border",
    value: function upper_border() {
      this.ctx.strokeStyle = this.$p.colors.colorScale;
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0.5);
      this.ctx.lineTo(this.layout.width, 0.5);
      this.ctx.stroke();
    }
  }, {
    key: "mousezoom",
    value: function mousezoom(delta, event) {
      event.originalEvent.preventDefault();
      event.preventDefault();
      event.deltaX = event.deltaX || utils.get_deltaX(event);
      event.deltaY = event.deltaY || utils.get_deltaY(event);

      if (Math.abs(event.deltaX) > 0) {
        this.trackpad = true;

        if (Math.abs(event.deltaX) >= Math.abs(event.deltaY)) {
          delta *= 0.1;
        }

        this.trackpad_scroll(event);
      }

      if (this.trackpad) delta *= 0.032;
      delta = utils.smart_wheel(delta); // TODO: mouse zooming is a little jerky,
      // needs to follow f(mouse_wheel_speed) and
      // if speed is low, scroll shoud be slower

      if (delta < 0 && this.data.length <= this.MIN_ZOOM) return;
      if (delta > 0 && this.data.length > this.MAX_ZOOM) return;
      var k = this.interval / 1000;
      var diff = delta * k * this.data.length;
      var tl = this.comp.config.ZOOM_MODE === 'tl';

      if (event.originalEvent.ctrlKey || tl) {
        var offset = event.originalEvent.offsetX;
        var diff1 = offset / (this.canvas.width - 1) * diff;
        var diff2 = diff - diff1;
        this.range[0] -= diff1;
        this.range[1] += diff2;
      } else {
        this.range[0] -= diff;
      }

      if (tl) {
        var _offset = event.originalEvent.offsetY;

        var _diff = _offset / (this.canvas.height - 1) * 2;

        var _diff2 = 2 - _diff;

        var z = diff / (this.range[1] - this.range[0]); //rezoom_range(z, diff_x, diff_y)

        this.comp.$emit('rezoom-range', {
          grid_id: this.id,
          z: z,
          diff1: _diff,
          diff2: _diff2
        });
      }

      this.change_range();
    }
  }, {
    key: "mousedrag",
    value: function mousedrag(x, y) {
      var dt = this.drug.t * (this.drug.x - x) / this.layout.width;
      var d$ = this.layout.$_hi - this.layout.$_lo;
      d$ *= (this.drug.y - y) / this.layout.height;
      var offset = this.drug.o + d$;
      var ls = this.layout.grid.logScale;

      if (ls && this.drug.y_r) {
        var dy = this.drug.y - y;
        var range = this.drug.y_r.slice();
        range[0] = math.exp((0 - this.drug.B + dy) / this.layout.A);
        range[1] = math.exp((this.layout.height - this.drug.B + dy) / this.layout.A);
      }

      if (this.drug.y_r && this.$p.y_transform && !this.$p.y_transform.auto) {
        this.comp.$emit('sidebar-transform', {
          grid_id: this.id,
          range: ls ? range || this.drug.y_r : [this.drug.y_r[0] - offset, this.drug.y_r[1] - offset]
        });
      }

      this.range[0] = this.drug.r[0] + dt;
      this.range[1] = this.drug.r[1] + dt;
      this.change_range();
    }
  }, {
    key: "pinchzoom",
    value: function pinchzoom(scale) {
      if (scale > 1 && this.data.length <= this.MIN_ZOOM) return;
      if (scale < 1 && this.data.length > this.MAX_ZOOM) return;
      var t = this.pinch.t;
      var nt = t * 1 / scale;
      this.range[0] = this.pinch.r[0] - (nt - t) * 0.5;
      this.range[1] = this.pinch.r[1] + (nt - t) * 0.5;
      this.change_range();
    }
  }, {
    key: "trackpad_scroll",
    value: function trackpad_scroll(event) {
      var dt = this.range[1] - this.range[0];
      this.range[0] += event.deltaX * dt * 0.011;
      this.range[1] += event.deltaX * dt * 0.011;
      this.change_range();
    }
  }, {
    key: "change_range",
    value: function change_range() {
      // TODO: better way to limit the view. Problem:
      // when you are at the dead end of the data,
      // and keep scrolling,
      // the chart continues to scale down a little.
      // Solution: I don't know yet
      if (!this.range.length || this.data.length < 2) return;
      var l = this.data.length - 1;
      var data = this.data;
      var range = this.range;
      range[0] = utils.clamp(range[0], -Infinity, data[l][0] - this.interval * 5.5);
      range[1] = utils.clamp(range[1], data[0][0] + this.interval * 5.5, Infinity); // TODO: IMPORTANT scrolling is jerky The Problem caused
      // by the long round trip of 'range-changed' event.
      // First it propagates up to update layout in Chart.vue,
      // then it moves back as watch() update. It takes 1-5 ms.
      // And because the delay is different each time we see
      // the lag. No smooth movement and it's annoying.
      // Solution: we could try to calc the layout immediatly
      // somewhere here. Still will hurt the sidebar & bottombar

      this.comp.$emit('range-changed', range);
    } // Propagate mouse event to overlays

  }, {
    key: "propagate",
    value: function propagate(name, event) {
      var _iterator3 = grid_createForOfIteratorHelper(this.overlays),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var layer = _step3.value;

          if (layer.renderer[name]) {
            layer.renderer[name](event);
          }

          var mouse = layer.renderer.mouse;
          var keys = layer.renderer.keys;

          if (mouse.listeners) {
            mouse.emit(name, event);
          }

          if (keys && keys.listeners) {
            keys.emit(name, event);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }]);

  return Grid;
}();


// CONCATENATED MODULE: ./src/mixins/canvas.js
// Interactive canvas-based component
// Should implement: mousemove, mouseout, mouseup, mousedown, click

/* harmony default export */ var mixins_canvas = ({
  methods: {
    setup: function setup() {
      var _this = this;

      var id = "".concat(this.$props.tv_id, "-").concat(this._id, "-canvas");
      var canvas = document.getElementById(id);
      var dpr = window.devicePixelRatio || 1;
      canvas.style.width = "".concat(this._attrs.width, "px");
      canvas.style.height = "".concat(this._attrs.height, "px");
      if (dpr < 1) dpr = 1; // Realy ? That's it? Issue #63

      this.$nextTick(function () {
        var rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        var ctx = canvas.getContext('2d', {// TODO: test the boost:
          //alpha: false,
          //desynchronized: true,
          //preserveDrawingBuffer: false
        });
        ctx.scale(dpr, dpr);

        _this.redraw(); // Fallback fix for Brave browser
        // https://github.com/brave/brave-browser/issues/1738


        if (!ctx.measureTextOrg) {
          ctx.measureTextOrg = ctx.measureText;
        }

        ctx.measureText = function (text) {
          return utils.measureText(ctx, text, _this.$props.tv_id);
        };
      });
    },
    create_canvas: function create_canvas(h, id, props) {
      var _this2 = this;

      this._id = id;
      this._attrs = props.attrs;
      return h('div', {
        "class": "trading-vue-".concat(id),
        style: {
          left: props.position.x + 'px',
          top: props.position.y + 'px',
          position: 'absolute'
        }
      }, [h('canvas', {
        on: {
          mousemove: function mousemove(e) {
            return _this2.renderer.mousemove(e);
          },
          mouseout: function mouseout(e) {
            return _this2.renderer.mouseout(e);
          },
          mouseup: function mouseup(e) {
            return _this2.renderer.mouseup(e);
          },
          mousedown: function mousedown(e) {
            return _this2.renderer.mousedown(e);
          }
        },
        attrs: Object.assign({
          id: "".concat(this.$props.tv_id, "-").concat(id, "-canvas")
        }, props.attrs),
        ref: 'canvas',
        style: props.style
      })].concat(props.hs || []));
    },
    redraw: function redraw() {
      if (!this.renderer) return;
      this.renderer.update();
    }
  },
  watch: {
    width: function width(val) {
      this._attrs.width = val;
      this.setup();
    },
    height: function height(val) {
      this._attrs.height = val;
      this.setup();
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/uxlist.js
// Manager for Inteerface objects
/* harmony default export */ var uxlist = ({
  methods: {
    on_ux_event: function on_ux_event(d, target) {
      if (d.event === 'new-interface') {
        if (d.args[0].target === target) {
          d.args[0].vars = d.args[0].vars || {};
          d.args[0].grid_id = d.args[1];
          d.args[0].overlay_id = d.args[2];
          this.uxs.push(d.args[0]); // this.rerender++
        }
      } else if (d.event === 'close-interface') {
        this.uxs = this.uxs.filter(function (x) {
          return x.uuid !== d.args[0];
        });
      } else if (d.event === 'modify-interface') {
        var ux = this.uxs.filter(function (x) {
          return x.uuid === d.args[0];
        });

        if (ux.length) {
          this.modify(ux[0], d.args[1]);
        }
      } else if (d.event === 'hide-interface') {
        var _ux = this.uxs.filter(function (x) {
          return x.uuid === d.args[0];
        });

        if (_ux.length) {
          _ux[0].hidden = true;
          this.modify(_ux[0], {
            hidden: true
          });
        }
      } else if (d.event === 'show-interface') {
        var _ux2 = this.uxs.filter(function (x) {
          return x.uuid === d.args[0];
        });

        if (_ux2.length) {
          this.modify(_ux2[0], {
            hidden: false
          });
        }
      } else {
        return d;
      }
    },
    modify: function modify(ux, obj) {
      if (obj === void 0) {
        obj = {};
      }

      for (var k in obj) {
        if (k in ux) {
          this.$set(ux, k, obj[k]);
        }
      }
    },
    remove_all_ux: function remove_all_ux() {
      this.uxs = [];
    }
  },
  data: function data() {
    return {
      uxs: []
    };
  }
});
// CONCATENATED MODULE: ./src/components/js/crosshair.js



var crosshair_Crosshair = /*#__PURE__*/function () {
  function Crosshair(comp) {
    classCallCheck_default()(this, Crosshair);

    this.comp = comp;
    this.$p = comp.$props;
    this.data = this.$p.sub;
    this._visible = false;
    this.locked = false;
    this.layout = this.$p.layout;
  }

  createClass_default()(Crosshair, [{
    key: "update",
    value: function update(x, y) {
      this.x = this.$p.cursor.x;
      this.y = y;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      // Update reference to the grid
      this.layout = this.$p.layout;
      if (!this.visible) return; // Adjust x here cuz there is a delay between
      // update() and draw()

      this.x = this.$p.cursor.x;
      ctx.save();
      ctx.strokeStyle = this.$p.colors.colorCross;
      ctx.beginPath();
      ctx.setLineDash([5]); // H

      if (this.$p.cursor.grid_id === this.layout.id) {
        ctx.moveTo(0, this.y);
        ctx.lineTo(this.layout.width - 0.5, this.y);
      } // V


      ctx.moveTo(this.x, 0);
      ctx.lineTo(this.x, this.layout.height);
      ctx.stroke();
      ctx.restore();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.visible = false;
      this.x = undefined;
      this.y = undefined;
    }
  }, {
    key: "visible",
    get: function get() {
      return this._visible;
    },
    set: function set(val) {
      this._visible = val;
    }
  }]);

  return Crosshair;
}();


// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Crosshair.vue?vue&type=script&lang=js&

/* harmony default export */ var Crosshairvue_type_script_lang_js_ = ({
  name: 'Crosshair',
  props: ['cursor', 'colors', 'layout', 'sub'],
  methods: {
    create: function create() {
      this.ch = new crosshair_Crosshair(this); // New grid overlay-renderer descriptor.
      // Should implement draw() (see Spline.vue)

      this.$emit('new-grid-layer', {
        name: 'crosshair',
        renderer: this.ch
      });
    }
  },
  watch: {
    cursor: {
      handler: function handler() {
        if (!this.ch) this.create();
        var cursor = this.$props.cursor;

        if (!cursor.x || !cursor.y) {
          this.ch.hide();
          this.$emit('redraw-grid');
          return;
        }

        this.ch.visible = true;
        this.ch.update(cursor.x, cursor.y);
      },
      deep: true
    }
  },
  render: function render(h) {
    return h();
  }
});
// CONCATENATED MODULE: ./src/components/Crosshair.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Crosshairvue_type_script_lang_js_ = (Crosshairvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Crosshair.vue
var Crosshair_render, Crosshair_staticRenderFns




/* normalize component */

var component = normalizeComponent(
  components_Crosshairvue_type_script_lang_js_,
  Crosshair_render,
  Crosshair_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Crosshair.vue"
/* harmony default export */ var components_Crosshair = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/KeyboardListener.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var KeyboardListenervue_type_script_lang_js_ = ({
  name: 'KeyboardListener',
  render: function render(h) {
    return h();
  },
  created: function created() {
    this.$emit('register-kb-listener', {
      id: this._uid,
      keydown: this.keydown,
      keyup: this.keyup,
      keypress: this.keypress
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.$emit('remove-kb-listener', {
      id: this._uid
    });
  },
  methods: {
    keydown: function keydown(event) {
      this.$emit('keydown', event);
    },
    keyup: function keyup(event) {
      this.$emit('keyup', event);
    },
    keypress: function keypress(event) {
      this.$emit('keypress', event);
    }
  }
});
// CONCATENATED MODULE: ./src/components/KeyboardListener.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_KeyboardListenervue_type_script_lang_js_ = (KeyboardListenervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/KeyboardListener.vue
var KeyboardListener_render, KeyboardListener_staticRenderFns




/* normalize component */

var KeyboardListener_component = normalizeComponent(
  components_KeyboardListenervue_type_script_lang_js_,
  KeyboardListener_render,
  KeyboardListener_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var KeyboardListener_api; }
KeyboardListener_component.options.__file = "src/components/KeyboardListener.vue"
/* harmony default export */ var KeyboardListener = (KeyboardListener_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UxLayer.vue?vue&type=template&id=390ccf6e&
var UxLayervue_type_template_id_390ccf6e_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    { class: "trading-vue-grid-ux-" + _vm.id, style: _vm.style },
    _vm._l(_vm.uxs, function(ux) {
      return _c("ux-wrapper", {
        key: ux.uuid,
        attrs: {
          ux: ux,
          updater: _vm.updater,
          colors: _vm.colors,
          config: _vm.config
        },
        on: { "custom-event": _vm.on_custom_event }
      })
    }),
    1
  )
}
var UxLayervue_type_template_id_390ccf6e_staticRenderFns = []
UxLayervue_type_template_id_390ccf6e_render._withStripped = true


// CONCATENATED MODULE: ./src/components/UxLayer.vue?vue&type=template&id=390ccf6e&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UxWrapper.vue?vue&type=template&id=4bc32070&
var UxWrappervue_type_template_id_4bc32070_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.visible
    ? _c(
        "div",
        {
          staticClass: "trading-vue-ux-wrapper",
          style: _vm.style,
          attrs: { id: "tvjs-ux-wrapper-" + _vm.ux.uuid }
        },
        [
          _c(_vm.ux.component, {
            tag: "component",
            attrs: {
              ux: _vm.ux,
              updater: _vm.updater,
              wrapper: _vm.wrapper,
              colors: _vm.colors
            },
            on: { "custom-event": _vm.on_custom_event }
          }),
          _vm._v(" "),
          _vm.ux.show_pin
            ? _c("div", {
                staticClass: "tvjs-ux-wrapper-pin",
                style: _vm.pin_style
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.ux.win_header !== false
            ? _c("div", { staticClass: "tvjs-ux-wrapper-head" }, [
                _c(
                  "div",
                  {
                    staticClass: "tvjs-ux-wrapper-close",
                    style: _vm.btn_style,
                    on: { click: _vm.close }
                  },
                  [_vm._v("×")]
                )
              ])
            : _vm._e()
        ],
        1
      )
    : _vm._e()
}
var UxWrappervue_type_template_id_4bc32070_staticRenderFns = []
UxWrappervue_type_template_id_4bc32070_render._withStripped = true


// CONCATENATED MODULE: ./src/components/UxWrapper.vue?vue&type=template&id=4bc32070&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UxWrapper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var UxWrappervue_type_script_lang_js_ = ({
  name: 'UxWrapper',
  props: ['ux', 'updater', 'colors', 'config'],
  mounted: function mounted() {
    this.self = document.getElementById(this.uuid);
    this.w = this.self.offsetWidth; // TODO: => width: "content"

    this.h = this.self.offsetHeight; // TODO: => height: "content"

    this.update_position();
  },
  created: function created() {
    this.mouse.on('mousemove', this.mousemove);
    this.mouse.on('mouseout', this.mouseout);
  },
  beforeDestroy: function beforeDestroy() {
    this.mouse.off('mousemove', this.mousemove);
    this.mouse.off('mouseout', this.mouseout);
  },
  methods: {
    update_position: function update_position() {
      if (this.uxr.hidden) return;
      var lw = this.layout.width;
      var lh = this.layout.height;
      var pin = this.uxr.pin;

      switch (pin[0]) {
        case 'cursor':
          var x = this.uxr.overlay.cursor.x;
          break;

        case 'mouse':
          x = this.mouse.x;
          break;

        default:
          if (typeof pin[0] === 'string') {
            x = this.parse_coord(pin[0], lw);
          } else {
            x = this.layout.t2screen(pin[0]);
          }

      }

      switch (pin[1]) {
        case 'cursor':
          var y = this.uxr.overlay.cursor.y;
          break;

        case 'mouse':
          y = this.mouse.y;
          break;

        default:
          if (typeof pin[1] === 'string') {
            y = this.parse_coord(pin[1], lh);
          } else {
            y = this.layout.$2screen(pin[1]);
          }

      }

      this.x = x + this.ox;
      this.y = y + this.oy;
    },
    parse_coord: function parse_coord(str, scale) {
      if (str === '0' || str === '') return 0;
      var plus = str.split('+');

      if (plus.length === 2) {
        return this.parse_coord(plus[0], scale) + this.parse_coord(plus[1], scale);
      }

      var minus = str.split('-');

      if (minus.length === 2) {
        return this.parse_coord(minus[0], scale) - this.parse_coord(minus[1], scale);
      }

      var per = str.split('%');

      if (per.length === 2) {
        return scale * parseInt(per[0]) / 100;
      }

      var px = str.split('px');

      if (px.length === 2) {
        return parseInt(px[0]);
      }

      return undefined;
    },
    mousemove: function mousemove() {
      this.update_position();
      this.visible = true;
    },
    mouseout: function mouseout() {
      if (this.uxr.pin.includes('cursor') || this.uxr.pin.includes('mouse')) this.visible = false;
    },
    on_custom_event: function on_custom_event(event) {
      this.$emit('custom-event', event);

      if (event.event === 'modify-interface') {
        if (this.self) {
          this.w = this.self.offsetWidth;
          this.h = this.self.offsetHeight;
        }

        this.update_position();
      }
    },
    close: function close() {
      this.$emit('custom-event', {
        event: 'close-interface',
        args: [this.$props.ux.uuid]
      });
    }
  },
  computed: {
    uxr: function uxr() {
      return this.$props.ux; // just a ref
    },
    layout: function layout() {
      return this.$props.ux.overlay.layout;
    },
    settings: function settings() {
      return this.$props.ux.overlay.settings;
    },
    uuid: function uuid() {
      return "tvjs-ux-wrapper-".concat(this.uxr.uuid);
    },
    mouse: function mouse() {
      return this.uxr.overlay.mouse;
    },
    style: function style() {
      var st = {
        'display': this.uxr.hidden ? 'none' : undefined,
        'left': "".concat(this.x, "px"),
        'top': "".concat(this.y, "px"),
        'pointer-events': this.uxr.pointer_events || 'all',
        'z-index': this.z_index
      };
      if (this.uxr.win_styling !== false) st = Object.assign(st, {
        'border': "1px solid ".concat(this.$props.colors.colorGrid),
        'border-radius': '3px',
        'background': "".concat(this.background)
      });
      return st;
    },
    pin_style: function pin_style() {
      return {
        'left': "".concat(-this.ox, "px"),
        'top': "".concat(-this.oy, "px"),
        'background-color': this.uxr.pin_color
      };
    },
    btn_style: function btn_style() {
      return {
        'background': "".concat(this.inactive_btn_color),
        'color': "".concat(this.inactive_btn_color)
      };
    },
    pin_pos: function pin_pos() {
      return this.uxr.pin_position ? this.uxr.pin_position.split(',') : ['0', '0'];
    },
    // Offset x
    ox: function ox() {
      if (this.pin_pos.length !== 2) return undefined;
      var x = this.parse_coord(this.pin_pos[0], this.w);
      return -x;
    },
    // Offset y
    oy: function oy() {
      if (this.pin_pos.length !== 2) return undefined;
      var y = this.parse_coord(this.pin_pos[1], this.h);
      return -y;
    },
    z_index: function z_index() {
      var base_index = this.settings['z-index'] || this.settings['zIndex'] || 0;
      var ux_index = this.uxr['z_index'] || 0;
      return base_index + ux_index;
    },
    background: function background() {
      var c = this.uxr.background || this.$props.colors.colorBack;
      return utils.apply_opacity(c, this.uxr.background_opacity || this.$props.config.UX_OPACITY);
    },
    inactive_btn_color: function inactive_btn_color() {
      return this.uxr.inactive_btn_color || this.$props.colors.colorGrid;
    },
    wrapper: function wrapper() {
      return {
        x: this.x,
        y: this.y,
        pin_x: this.x - this.ox,
        pin_y: this.y - this.oy
      };
    }
  },
  watch: {
    updater: function updater() {
      this.update_position();
    }
  },
  data: function data() {
    return {
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      visible: true
    };
  }
});
// CONCATENATED MODULE: ./src/components/UxWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UxWrappervue_type_script_lang_js_ = (UxWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/UxWrapper.vue?vue&type=style&index=0&lang=css&
var UxWrappervue_type_style_index_0_lang_css_ = __webpack_require__(44);

// CONCATENATED MODULE: ./src/components/UxWrapper.vue






/* normalize component */

var UxWrapper_component = normalizeComponent(
  components_UxWrappervue_type_script_lang_js_,
  UxWrappervue_type_template_id_4bc32070_render,
  UxWrappervue_type_template_id_4bc32070_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var UxWrapper_api; }
UxWrapper_component.options.__file = "src/components/UxWrapper.vue"
/* harmony default export */ var UxWrapper = (UxWrapper_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UxLayer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var UxLayervue_type_script_lang_js_ = ({
  name: 'UxLayer',
  props: ['tv_id', 'id', 'uxs', 'updater', 'colors', 'config'],
  components: {
    UxWrapper: UxWrapper
  },
  created: function created() {},
  mounted: function mounted() {},
  beforeDestroy: function beforeDestroy() {},
  methods: {
    on_custom_event: function on_custom_event(event) {
      this.$emit('custom-event', event);
    }
  },
  computed: {
    style: function style() {
      return {
        'top': this.$props.id !== 0 ? '1px' : 0,
        'left': 0,
        'width': '100%',
        'height': 'calc(100% - 2px)',
        'position': 'absolute',
        'z-index': '1',
        'pointer-events': 'none',
        'overflow': 'hidden'
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/UxLayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UxLayervue_type_script_lang_js_ = (UxLayervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/UxLayer.vue





/* normalize component */

var UxLayer_component = normalizeComponent(
  components_UxLayervue_type_script_lang_js_,
  UxLayervue_type_template_id_390ccf6e_render,
  UxLayervue_type_template_id_390ccf6e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var UxLayer_api; }
UxLayer_component.options.__file = "src/components/UxLayer.vue"
/* harmony default export */ var UxLayer = (UxLayer_component.exports);
// CONCATENATED MODULE: ./src/stuff/mouse.js



function mouse_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = mouse_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function mouse_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return mouse_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return mouse_arrayLikeToArray(o, minLen); }

function mouse_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Mouse event handler for overlay
var mouse_Mouse = /*#__PURE__*/function () {
  function Mouse(comp) {
    classCallCheck_default()(this, Mouse);

    this.comp = comp;
    this.map = {};
    this.listeners = 0;
    this.pressed = false;
    this.x = comp.$props.cursor.x;
    this.y = comp.$props.cursor.y;
    this.t = comp.$props.cursor.t;
    this.y$ = comp.$props.cursor.y$;
  } // You can choose where to place the handler
  // (beginning or end of the queue)


  createClass_default()(Mouse, [{
    key: "on",
    value: function on(name, handler, dir) {
      if (dir === void 0) {
        dir = "unshift";
      }

      if (!handler) return;
      this.map[name] = this.map[name] || [];
      this.map[name][dir](handler);
      this.listeners++;
    }
  }, {
    key: "off",
    value: function off(name, handler) {
      if (!this.map[name]) return;
      var i = this.map[name].indexOf(handler);
      if (i < 0) return;
      this.map[name].splice(i, 1);
      this.listeners--;
    } // Called by grid.js

  }, {
    key: "emit",
    value: function emit(name, event) {
      var l = this.comp.layout;

      if (name in this.map) {
        var _iterator = mouse_createForOfIteratorHelper(this.map[name]),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var f = _step.value;
            f(event);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      if (name === 'mousemove') {
        this.x = event.layerX;
        this.y = event.layerY;
        this.t = l.screen2t(this.x);
        this.y$ = l.screen2$(this.y);
      }

      if (name === 'mousedown') {
        this.pressed = true;
      }

      if (name === 'mouseup') {
        this.pressed = false;
      }
    }
  }]);

  return Mouse;
}();


// CONCATENATED MODULE: ./src/mixins/overlay.js
// Usuful stuff for creating overlays. Include as mixin

/* harmony default export */ var mixins_overlay = ({
  props: ['id', 'num', 'interval', 'cursor', 'colors', 'layout', 'sub', 'data', 'settings', 'grid_id', 'font', 'config', 'meta', 'tf'],
  mounted: function mounted() {
    // TODO: when hot reloading, dynamicaly changed mixins
    // dissapear (cuz it's a hack), the only way for now
    // is to reload the browser
    if (!this.draw) {
      this.draw = function (ctx) {
        var text = 'EARLY ADOPTER BUG: reload the browser & enjoy';
        console.warn(text);
      };
    } // Main chart?


    var main = this.$props.sub === this.$props.data;
    this.meta_info();
    this._$emit = this.$emit;
    this.$emit = this.custom_event;

    this._$emit('new-grid-layer', {
      name: this.$options.name,
      id: this.$props.id,
      renderer: this,
      display: 'display' in this.$props.settings ? this.$props.settings['display'] : true,
      z: this.$props.settings['z-index'] || this.$props.settings['zIndex'] || (main ? 0 : -1)
    }); // Overlay meta-props (adjusting behaviour)


    this._$emit('layer-meta-props', {
      grid_id: this.$props.grid_id,
      layer_id: this.$props.id,
      legend: this.legend,
      data_colors: this.data_colors,
      y_range: this.y_range
    });

    this.exec_script();
    this.mouse = new mouse_Mouse(this);
    if (this.init_tool) this.init_tool();
    if (this.init) this.init();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.destroy) this.destroy();

    this._$emit('delete-grid-layer', this.$props.id);
  },
  methods: {
    use_for: function use_for() {
      /* override it (mandatory) */
      console.warn('use_for() should be implemented');
      console.warn("Format: use_for() {\n                  return ['type1', 'type2', ...]\n            }");
    },
    meta_info: function meta_info() {
      /* override it (optional) */
      var id = this.$props.id;
      console.warn("".concat(id, " meta_info() is req. for publishing"));
      console.warn("Format: meta_info() {\n                author: 'Satoshi Smith',\n                version: '1.0.0',\n                contact (opt) '<email>'\n                github: (opt) '<GitHub Page>',\n            }");
    },
    custom_event: function custom_event(event) {
      if (event.split(':')[0] === 'hook') return;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (event === 'change-settings' || event === 'object-selected' || event === 'new-shader' || event === 'new-interface' || event === 'remove-tool') {
        args.push(this.grid_id, this.id);

        if (this.$props.settings.$uuid) {
          args.push(this.$props.settings.$uuid);
        }
      }

      if (event === 'new-interface') {
        args[0].overlay = this;
        args[0].uuid = this.last_ux_id = "".concat(this.grid_id, "-").concat(this.id, "-").concat(this.uxs_count++);
      } // TODO: add a namespace to the event name


      this._$emit('custom-event', {
        event: event,
        args: args
      });
    },
    exec_script: function exec_script() {
      if (this.calc) this.$emit('exec-script', {
        grid_id: this.$props.grid_id,
        layer_id: this.$props.id,
        src: this.calc(),
        use_for: this.use_for()
      });
    }
  },
  watch: {
    settings: {
      handler: function handler(n, p) {
        if (this.watch_uuid) this.watch_uuid(n, p);

        this._$emit('show-grid-layer', {
          id: this.$props.id,
          display: 'display' in this.$props.settings ? this.$props.settings['display'] : true
        });
      },
      deep: true
    }
  },
  data: function data() {
    return {
      uxs_count: 0,
      last_ux_id: null
    };
  },
  render: function render(h) {
    return h();
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/overlays/Spline.vue?vue&type=script&lang=js&
function Splinevue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = Splinevue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Splinevue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Splinevue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Splinevue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function Splinevue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Spline renderer. (SMAs, EMAs, TEMAs...
// you know what I mean)
// TODO: make a real spline, not a bunch of lines...
// Adds all necessary stuff for you.

/* harmony default export */ var Splinevue_type_script_lang_js_ = ({
  name: 'Spline',
  mixins: [mixins_overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.1.0'
      };
    },
    // Here goes your code. You are provided with:
    // { All stuff is reactive }
    // $props.layout -> positions of all chart elements +
    //  some helper functions (see layout_fn.js)
    // $props.interval -> candlestick time interval
    // $props.sub -> current subset of candlestick data
    // $props.data -> your indicator's data subset.
    //  Comes "as is", should have the following format:
    //  [[<timestamp>, ... ], ... ]
    // $props.colors -> colors (see TradingVue.vue)
    // $props.cursor -> current position of crosshair
    // $props.settings -> indicator's custom settings
    //  E.g. colors, line thickness, etc. You define it.
    // $props.num -> indicator's layer number (of All
    // layers in the current grid)
    // $props.id -> indicator's id (e.g. EMA_0)
    // ~
    // Finally, let's make the canvas dirty!
    draw: function draw(ctx) {
      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.color;
      ctx.beginPath();
      var layout = this.$props.layout;
      var i = this.data_index;

      if (!this.skip_nan) {
        var _iterator = Splinevue_type_script_lang_js_createForOfIteratorHelper(this.$props.data),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var p = _step.value;
            var x = layout.t2screen(p[0]);
            var y = layout.$2screen(p[i]);
            ctx.lineTo(x, y);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        var _iterator2 = Splinevue_type_script_lang_js_createForOfIteratorHelper(this.$props.data),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var p = _step2.value;

            var _x = layout.t2screen(p[0]);

            var _y = layout.$2screen(p[i]);

            if (_y == null || _y !== _y) {
              this._skip = true;
            } else {
              if (this._skip) ctx.moveTo(_x, _y);
              ctx.lineTo(_x, _y);
              this._skip = false;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      ctx.stroke();
    },
    // For all data with these types overlay will be
    // added to the renderer list. And '$props.data'
    // will have the corresponding values. If you want to
    // redefine the default behviour for a prticular
    // indicator (let's say EMA),
    // just create a new overlay with the same type:
    // e.g. use_for() { return ['EMA'] }.
    use_for: function use_for() {
      return ['Spline', 'EMA', 'SMA'];
    },
    // Colors for the legend, should have the
    // same dimention as a data point (excl. timestamp)
    data_colors: function data_colors() {
      return [this.color];
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    line_width: function line_width() {
      return this.sett.lineWidth || 0.75;
    },
    color: function color() {
      var n = this.$props.num % 5;
      return this.sett.color || this.COLORS[n];
    },
    data_index: function data_index() {
      return this.sett.dataIndex || 1;
    },
    skip_nan: function skip_nan() {
      return this.sett.skipNaN;
    }
  },
  data: function data() {
    return {
      COLORS: ['#42b28a', '#5691ce', '#612ff9', '#d50b90', '#ff2316']
    };
  }
});
// CONCATENATED MODULE: ./src/components/overlays/Spline.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlays_Splinevue_type_script_lang_js_ = (Splinevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/overlays/Spline.vue
var Spline_render, Spline_staticRenderFns




/* normalize component */

var Spline_component = normalizeComponent(
  overlays_Splinevue_type_script_lang_js_,
  Spline_render,
  Spline_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Spline_api; }
Spline_component.options.__file = "src/components/overlays/Spline.vue"
/* harmony default export */ var Spline = (Spline_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/overlays/Splines.vue?vue&type=script&lang=js&
function Splinesvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = Splinesvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Splinesvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Splinesvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Splinesvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function Splinesvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Channel renderer. (Keltner, Bollinger)

/* harmony default export */ var Splinesvue_type_script_lang_js_ = ({
  name: 'Splines',
  mixins: [mixins_overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.0.1'
      };
    },
    draw: function draw(ctx) {
      var layout = this.$props.layout;

      for (var i = 0; i < this.lines_num; i++) {
        var _i = i % this.clrx.length;

        ctx.strokeStyle = this.clrx[_i];
        ctx.lineWidth = this.widths[i] || this.line_width;
        ctx.beginPath();

        var _iterator = Splinesvue_type_script_lang_js_createForOfIteratorHelper(this.$props.data),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var p = _step.value;
            var x = layout.t2screen(p[0]);
            var y = layout.$2screen(p[i + 1]);
            ctx.lineTo(x, y);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        ctx.stroke();
      }
    },
    use_for: function use_for() {
      return ['Splines', 'DMI'];
    },
    data_colors: function data_colors() {
      return this.clrx;
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    line_width: function line_width() {
      return this.sett.lineWidth || 0.75;
    },
    widths: function widths() {
      return this.sett.lineWidths || [];
    },
    clrx: function clrx() {
      var colors = this.sett.colors || [];
      var n = this.$props.num;

      if (!colors.length) {
        for (var i = 0; i < this.lines_num; i++) {
          colors.push(this.COLORS[(n + i) % 5]);
        }
      }

      return colors;
    },
    lines_num: function lines_num() {
      if (!this.$props.data[0]) return 0;
      return this.$props.data[0].length - 1;
    }
  },
  data: function data() {
    return {
      COLORS: ['#42b28a', '#5691ce', '#612ff9', '#d50b90', '#ff2316']
    };
  }
});
// CONCATENATED MODULE: ./src/components/overlays/Splines.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlays_Splinesvue_type_script_lang_js_ = (Splinesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/overlays/Splines.vue
var Splines_render, Splines_staticRenderFns




/* normalize component */

var Splines_component = normalizeComponent(
  overlays_Splinesvue_type_script_lang_js_,
  Splines_render,
  Splines_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Splines_api; }
Splines_component.options.__file = "src/components/overlays/Splines.vue"
/* harmony default export */ var Splines = (Splines_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/overlays/Range.vue?vue&type=script&lang=js&
function Rangevue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = Rangevue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Rangevue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Rangevue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Rangevue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function Rangevue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// R S I . Because we love it
// Adds all necessary stuff for you.

/* harmony default export */ var Rangevue_type_script_lang_js_ = ({
  name: 'Range',
  mixins: [mixins_overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.0.0'
      };
    },
    // Here goes your code. You are provided with:
    // { All stuff is reactive }
    // $props.layout -> positions of all chart elements +
    //  some helper functions (see layout_fn.js)
    // $props.interval -> candlestick time interval
    // $props.sub -> current subset of candlestick data
    // $props.data -> your indicator's data subset.
    //  Comes "as is", should have the following format:
    //  [[<timestamp>, ... ], ... ]
    // $props.colors -> colors (see TradingVue.vue)
    // $props.cursor -> current position of crosshair
    // $props.settings -> indicator's custom settings
    //  E.g. colors, line thickness, etc. You define it.
    // $props.num -> indicator's layer number (of All
    // layers in the current grid)
    // $props.id -> indicator's id (e.g. EMA_0)
    // ~
    // Finally, let's make the canvas dirty!
    draw: function draw(ctx) {
      var layout = this.$props.layout;
      var upper = layout.$2screen(this.sett.upper || 70);
      var lower = layout.$2screen(this.sett.lower || 30); // RSI values

      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.color;
      ctx.beginPath();

      var _iterator = Rangevue_type_script_lang_js_createForOfIteratorHelper(this.$props.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          var x = layout.t2screen(p[0]);
          var y = layout.$2screen(p[1]);
          ctx.lineTo(x, y);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      ctx.stroke();
      ctx.strokeStyle = this.band_color;
      ctx.setLineDash([5]); // Will be removed after draw()

      ctx.beginPath(); // Fill the area between the bands

      ctx.fillStyle = this.back_color;
      ctx.fillRect(0, upper, layout.width, lower - upper); // Upper band

      ctx.moveTo(0, upper);
      ctx.lineTo(layout.width, upper); // Lower band

      ctx.moveTo(0, lower);
      ctx.lineTo(layout.width, lower);
      ctx.stroke();
    },
    // For all data with these types overlay will be
    // added to the renderer list. And '$props.data'
    // will have the corresponding values. If you want to
    // redefine the default behviour for a prticular
    // indicator (let's say EMA),
    // just create a new overlay with the same type:
    // e.g. use_for() { return ['EMA'] }.
    use_for: function use_for() {
      return ['Range', 'RSI'];
    },
    // Colors for the legend, should have the
    // same dimention as a data point (excl. timestamp)
    data_colors: function data_colors() {
      return [this.color];
    },
    // Y-Range tansform. For example you need a fixed
    // Y-range for an indicator, you can do it here!
    // Gets estimated range, @return you favorite range
    y_range: function y_range(hi, lo) {
      return [Math.max(hi, this.sett.upper || 70), Math.min(lo, this.sett.lower || 30)];
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    line_width: function line_width() {
      return this.sett.lineWidth || 0.75;
    },
    color: function color() {
      return this.sett.color || '#ec206e';
    },
    band_color: function band_color() {
      return this.sett.bandColor || '#ddd';
    },
    back_color: function back_color() {
      return this.sett.backColor || '#381e9c16';
    }
  }
});
// CONCATENATED MODULE: ./src/components/overlays/Range.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlays_Rangevue_type_script_lang_js_ = (Rangevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/overlays/Range.vue
var Range_render, Range_staticRenderFns




/* normalize component */

var Range_component = normalizeComponent(
  overlays_Rangevue_type_script_lang_js_,
  Range_render,
  Range_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Range_api; }
Range_component.options.__file = "src/components/overlays/Range.vue"
/* harmony default export */ var Range = (Range_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/overlays/Trades.vue?vue&type=script&lang=js&
function Tradesvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = Tradesvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Tradesvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Tradesvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Tradesvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function Tradesvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ var Tradesvue_type_script_lang_js_ = ({
  name: 'Trades',
  mixins: [mixins_overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.0.1'
      };
    },
    draw: function draw(ctx) {
      var layout = this.$props.layout;
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'black';

      var _iterator = Tradesvue_type_script_lang_js_createForOfIteratorHelper(this.$props.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          ctx.fillStyle = p[1] ? this.buy_color : this.sell_color;
          ctx.beginPath();
          var x = layout.t2screen(p[0]); // x - Mapping

          var y = layout.$2screen(p[2]); // y - Mapping

          ctx.arc(x, y, this.marker_size + 0.5, 0, Math.PI * 2, true);
          ctx.fill();
          ctx.stroke();

          if (this.show_label && p[3]) {
            this.draw_label(ctx, x, y, p);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    draw_label: function draw_label(ctx, x, y, p) {
      ctx.fillStyle = this.label_color;
      ctx.font = this.new_font;
      ctx.textAlign = 'center';
      ctx.fillText(p[3], x, y - 25);
    },
    use_for: function use_for() {
      return ['Trades'];
    },
    // Defines legend format (values & colors)
    legend: function legend(values) {
      switch (values[1]) {
        case 0:
          var pos = 'Sell';
          break;

        case 1:
          pos = 'Buy';
          break;

        default:
          pos = 'Unknown';
      }

      return [{
        value: pos
      }, {
        value: values[2].toFixed(4),
        color: this.$props.colors.colorText
      }].concat(values[3] ? [{
        value: values[3]
      }] : []);
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    default_font: function default_font() {
      return '12px ' + this.$props.font.split('px').pop();
    },
    buy_color: function buy_color() {
      return this.sett.buyColor || '#63df89';
    },
    sell_color: function sell_color() {
      return this.sett.sellColor || '#ec4662';
    },
    label_color: function label_color() {
      return this.sett.labelColor || '#333';
    },
    marker_size: function marker_size() {
      return this.sett.markerSize || 5;
    },
    show_label: function show_label() {
      return this.sett.showLabel !== false;
    },
    new_font: function new_font() {
      return this.sett.font || this.default_font;
    }
  }
});
// CONCATENATED MODULE: ./src/components/overlays/Trades.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlays_Tradesvue_type_script_lang_js_ = (Tradesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/overlays/Trades.vue
var Trades_render, Trades_staticRenderFns




/* normalize component */

var Trades_component = normalizeComponent(
  overlays_Tradesvue_type_script_lang_js_,
  Trades_render,
  Trades_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Trades_api; }
Trades_component.options.__file = "src/components/overlays/Trades.vue"
/* harmony default export */ var Trades = (Trades_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/overlays/Channel.vue?vue&type=script&lang=js&
// Channel renderer. (Keltner, Bollinger)
// TODO: allow color transparency
// TODO: improve performance: draw in one solid chunk

/* harmony default export */ var Channelvue_type_script_lang_js_ = ({
  name: 'Channel',
  mixins: [mixins_overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.0.0'
      };
    },
    draw: function draw(ctx) {
      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.color;
      ctx.fillStyle = this.back_color;

      for (var i = 0; i < this.$props.data.length - 1; i++) {
        var p1 = this.mapp(this.$props.data[i]);
        var p2 = this.mapp(this.$props.data[i + 1]);
        if (!p2) continue; // Background

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y1);
        ctx.lineTo(p2.x + 0.1, p2.y1);
        ctx.lineTo(p2.x + 0.1, p2.y3);
        ctx.lineTo(p1.x, p1.y3);
        ctx.fill(); // Lines

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y1);
        ctx.lineTo(p2.x, p2.y1);

        if (this.show_mid) {
          ctx.moveTo(p1.x, p1.y2);
          ctx.lineTo(p2.x, p2.y2);
        }

        ctx.moveTo(p1.x, p1.y3);
        ctx.lineTo(p2.x, p2.y3);
        ctx.stroke();
      }
    },
    mapp: function mapp(p) {
      var layout = this.$props.layout;
      return p && {
        x: layout.t2screen(p[0]),
        y1: layout.$2screen(p[1]),
        y2: layout.$2screen(p[2]),
        y3: layout.$2screen(p[3])
      };
    },
    use_for: function use_for() {
      return ['Channel', 'KC', 'BB'];
    },
    data_colors: function data_colors() {
      return [this.color, this.color, this.color];
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    line_width: function line_width() {
      return this.sett.lineWidth || 0.75;
    },
    color: function color() {
      var n = this.$props.num % 5;
      return this.sett.color || this.COLORS[n];
    },
    show_mid: function show_mid() {
      return 'showMid' in this.sett ? this.sett.showMid : true;
    },
    back_color: function back_color() {
      return this.sett.backColor || this.color + '11';
    }
  },
  data: function data() {
    return {
      COLORS: ['#42b28a', '#5691ce', '#612ff9', '#d50b90', '#ff2316']
    };
  }
});
// CONCATENATED MODULE: ./src/components/overlays/Channel.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlays_Channelvue_type_script_lang_js_ = (Channelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/overlays/Channel.vue
var Channel_render, Channel_staticRenderFns




/* normalize component */

var Channel_component = normalizeComponent(
  overlays_Channelvue_type_script_lang_js_,
  Channel_render,
  Channel_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Channel_api; }
Channel_component.options.__file = "src/components/overlays/Channel.vue"
/* harmony default export */ var Channel = (Channel_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/overlays/Segment.vue?vue&type=script&lang=js&
// Segment renderer.

/* harmony default export */ var Segmentvue_type_script_lang_js_ = ({
  name: 'Segment',
  mixins: [mixins_overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.0.0'
      };
    },
    draw: function draw(ctx) {
      if (!this.p1 || !this.p2) return;
      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.color;
      ctx.beginPath();
      var layout = this.$props.layout;
      var x1 = layout.t2screen(this.p1[0]);
      var y1 = layout.$2screen(this.p1[1]);
      ctx.moveTo(x1, y1);
      var x2 = layout.t2screen(this.p2[0]);
      var y2 = layout.$2screen(this.p2[1]);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    },
    use_for: function use_for() {
      return ['Segment'];
    },
    data_colors: function data_colors() {
      return [this.color];
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    p1: function p1() {
      return this.$props.settings.p1;
    },
    p2: function p2() {
      return this.$props.settings.p2;
    },
    line_width: function line_width() {
      return this.sett.lineWidth || 0.9;
    },
    color: function color() {
      var n = this.$props.num % 5;
      return this.sett.color || this.COLORS[n];
    }
  },
  data: function data() {
    return {
      COLORS: ['#42b28a', '#5691ce', '#612ff9', '#d50b90', '#ff2316']
    };
  }
});
// CONCATENATED MODULE: ./src/components/overlays/Segment.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlays_Segmentvue_type_script_lang_js_ = (Segmentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/overlays/Segment.vue
var Segment_render, Segment_staticRenderFns




/* normalize component */

var Segment_component = normalizeComponent(
  overlays_Segmentvue_type_script_lang_js_,
  Segment_render,
  Segment_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Segment_api; }
Segment_component.options.__file = "src/components/overlays/Segment.vue"
/* harmony default export */ var Segment = (Segment_component.exports);
// CONCATENATED MODULE: ./src/components/js/layout_cnv.js


// Claculates postions and sizes for candlestick
// and volume bars for the given subset of data

function layout_cnv(self) {
  var $p = self.$props;
  var sub = $p.data;
  var t2screen = $p.layout.t2screen;
  var layout = $p.layout;
  var candles = [];
  var volume = []; // The volume bar height is determined as a percentage of
  // the chart's height (VOLSCALE)

  var maxv = Math.max.apply(Math, toConsumableArray_default()(sub.map(function (x) {
    return x[5];
  })));
  var vs = $p.config.VOLSCALE * layout.height / maxv;
  var x1,
      x2,
      w,
      avg_w,
      mid,
      prev = undefined; // Subset interval against main interval

  var _new_interval = new_interval(layout, $p, sub),
      _new_interval2 = slicedToArray_default()(_new_interval, 2),
      interval2 = _new_interval2[0],
      ratio = _new_interval2[1];

  var px_step2 = layout.px_step * ratio;
  var splitter = px_step2 > 5 ? 1 : 0; // A & B are current chart tranformations:
  // A === scale,  B === Y-axis shift

  for (var i = 0; i < sub.length; i++) {
    var p = sub[i];
    mid = t2screen(p[0]) + 1; // Clear volume bar if there is a time gap

    if (sub[i - 1] && p[0] - sub[i - 1][0] > interval2) {
      prev = null;
    }

    x1 = prev || Math.floor(mid - px_step2 * 0.5);
    x2 = Math.floor(mid + px_step2 * 0.5) - 0.5; // TODO: add log scale support

    candles.push({
      x: mid,
      w: layout.px_step * $p.config.CANDLEW * ratio,
      o: Math.floor(p[1] * layout.A + layout.B),
      h: Math.floor(p[2] * layout.A + layout.B),
      l: Math.floor(p[3] * layout.A + layout.B),
      c: Math.floor(p[4] * layout.A + layout.B),
      raw: p
    });
    volume.push({
      x1: x1,
      x2: x2,
      h: p[5] * vs,
      green: p[4] >= p[1],
      raw: p
    });
    prev = x2 + splitter;
  }

  return {
    candles: candles,
    volume: volume
  };
}
function layout_vol(self) {
  var $p = self.$props;
  var sub = $p.data;
  var t2screen = $p.layout.t2screen;
  var layout = $p.layout;
  var volume = []; // Detect data second dimention size:

  var dim = sub[0] ? sub[0].length : 0; // Support special volume data (see API book), or OHLCV
  // Data indices:

  self._i1 = dim < 6 ? 1 : 5;
  self._i2 = dim < 6 ? function (p) {
    return p[2];
  } : function (p) {
    return p[4] >= p[1];
  };
  var maxv = Math.max.apply(Math, toConsumableArray_default()(sub.map(function (x) {
    return x[self._i1];
  })));
  var volscale = self.volscale || $p.config.VOLSCALE;
  var vs = volscale * layout.height / maxv;
  var x1,
      x2,
      mid,
      prev = undefined; // Subset interval against main interval

  var _new_interval3 = new_interval(layout, $p, sub),
      _new_interval4 = slicedToArray_default()(_new_interval3, 2),
      interval2 = _new_interval4[0],
      ratio = _new_interval4[1];

  var px_step2 = layout.px_step * ratio;
  var splitter = px_step2 > 5 ? 1 : 0; // A & B are current chart tranformations:
  // A === scale,  B === Y-axis shift

  for (var i = 0; i < sub.length; i++) {
    var p = sub[i];
    mid = t2screen(p[0]) + 1; // Clear volume bar if there is a time gap

    if (sub[i - 1] && p[0] - sub[i - 1][0] > interval2) {
      prev = null;
    }

    x1 = prev || Math.floor(mid - px_step2 * 0.5);
    x2 = Math.floor(mid + px_step2 * 0.5) - 0.5;
    volume.push({
      x1: x1,
      x2: x2,
      h: p[self._i1] * vs,
      green: self._i2(p),
      raw: p
    });
    prev = x2 + splitter;
  }

  return volume;
}

function new_interval(layout, $p, sub) {
  // Subset interval against main interval
  if (!layout.ti_map.ib) {
    var interval2 = $p.tf || utils.detect_interval(sub);
    var ratio = interval2 / $p.interval;
  } else {
    if ($p.tf) {
      var ratio = $p.tf / layout.ti_map.tf;
      var interval2 = ratio;
    } else {
      var interval2 = utils.detect_interval(sub);
      var ratio = interval2 / $p.interval;
    }
  }

  return [interval2, ratio];
}
// CONCATENATED MODULE: ./src/components/primitives/candle.js



// Candle object for Candles overlay
var candle_CandleExt = /*#__PURE__*/function () {
  function CandleExt(overlay, ctx, data) {
    classCallCheck_default()(this, CandleExt);

    this.ctx = ctx;
    this.self = overlay;
    this.style = data.raw[6] || this.self;
    this.draw(data);
  }

  createClass_default()(CandleExt, [{
    key: "draw",
    value: function draw(data) {
      var green = data.raw[4] >= data.raw[1];
      var body_color = green ? this.style.colorCandleUp : this.style.colorCandleDw;
      var wick_color = green ? this.style.colorWickUp : this.style.colorWickDw;
      var wick_color_sm = this.style.colorWickSm;
      var w = Math.max(data.w, 1);
      var hw = Math.max(Math.floor(w * 0.5), 1);
      var h = Math.abs(data.o - data.c);
      var max_h = data.c === data.o ? 1 : 2;
      this.ctx.strokeStyle = w > 1 ? wick_color : wick_color_sm;
      this.ctx.beginPath();
      this.ctx.moveTo(Math.floor(data.x) - 0.5, Math.floor(data.h));
      this.ctx.lineTo(Math.floor(data.x) - 0.5, Math.floor(data.l));
      this.ctx.stroke();

      if (data.w > 1.5 || data.o === data.c) {
        this.ctx.fillStyle = body_color; // TODO: Move common calculations to layout.js

        var s = green ? 1 : -1;
        this.ctx.fillRect(Math.floor(data.x - hw - 1), data.c, Math.floor(hw * 2 + 1), s * Math.max(h, max_h));
      } else {
        this.ctx.strokeStyle = body_color;
        this.ctx.beginPath();
        this.ctx.moveTo(Math.floor(data.x) - 0.5, Math.floor(Math.min(data.o, data.c)));
        this.ctx.lineTo(Math.floor(data.x) - 0.5, Math.floor(Math.max(data.o, data.c)));
        this.ctx.stroke();
      }
    }
  }]);

  return CandleExt;
}();


// CONCATENATED MODULE: ./src/components/primitives/volbar.js



var volbar_VolbarExt = /*#__PURE__*/function () {
  function VolbarExt(overlay, ctx, data) {
    classCallCheck_default()(this, VolbarExt);

    this.ctx = ctx;
    this.$p = overlay.$props;
    this.self = overlay;
    this.style = data.raw[6] || this.self;
    this.draw(data);
  }

  createClass_default()(VolbarExt, [{
    key: "draw",
    value: function draw(data) {
      var y0 = this.$p.layout.height;
      var w = data.x2 - data.x1;
      var h = Math.floor(data.h);
      this.ctx.fillStyle = data.green ? this.style.colorVolUp : this.style.colorVolDw;
      this.ctx.fillRect(Math.floor(data.x1), Math.floor(y0 - h - 0.5), Math.floor(w), Math.floor(h + 1));
    }
  }]);

  return VolbarExt;
}();


// CONCATENATED MODULE: ./src/components/primitives/price.js



// Price bar & price line (shader)
var price_Price = /*#__PURE__*/function () {
  function Price(comp) {
    classCallCheck_default()(this, Price);

    this.comp = comp;
    this.data = comp.$props.data;
  } // Defines an inline shader (has access to both
  // target & overlay's contexts)


  createClass_default()(Price, [{
    key: "init_shader",
    value: function init_shader() {
      var _this = this;

      var layout = this.comp.$props.layout;
      var config = this.comp.$props.config;
      var comp = this.comp;

      var last_bar = function last_bar() {
        return _this.last_bar();
      };

      this.comp.$emit('new-shader', {
        target: 'sidebar',
        draw: function draw(ctx) {
          if (!last_bar()) return;
          var bar = last_bar();
          var w = ctx.canvas.width;
          var h = config.PANHEIGHT;
          var lbl = bar.price.toFixed(layout.prec);
          ctx.fillStyle = bar.color;
          var x = -0.5;
          var y = bar.y - h * 0.5 - 0.5;
          var a = 7;
          ctx.fillRect(x - 0.5, y, w + 1, h);
          ctx.fillStyle = comp.$props.colors.colorTextHL;
          ctx.textAlign = 'left';
          ctx.fillText(lbl, a, y + 15);
        }
      });
      this.shader = true;
    } // Regular draw call for overaly

  }, {
    key: "draw",
    value: function draw(ctx) {
      if (!this.comp.$props.meta.last) return;
      if (!this.shader) this.init_shader();
      var layout = this.comp.$props.layout;
      var last = this.comp.$props.meta.last;
      var dir = last[4] >= last[1];
      var color = dir ? this.green() : this.red();
      var y = layout.$2screen(last[4]) + (dir ? 1 : 0);
      ctx.strokeStyle = color;
      ctx.setLineDash([1, 1]);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(layout.width, y);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }, {
    key: "last_bar",
    value: function last_bar() {
      if (!this.data.length) return undefined;
      var layout = this.comp.$props.layout;
      var last = this.data[this.data.length - 1];
      var y = layout.$2screen(last[4]);
      var cndl = layout.c_magnet(last[0]);
      return {
        y: Math.floor(cndl.c) - 0.5,
        price: last[4],
        color: last[4] >= last[1] ? this.green() : this.red()
      };
    }
  }, {
    key: "last_price",
    value: function last_price() {
      return this.comp.$props.meta.last ? this.comp.$props.meta.last[4] : undefined;
    }
  }, {
    key: "green",
    value: function green() {
      return this.comp.colorCandleUp;
    }
  }, {
    key: "red",
    value: function red() {
      return this.comp.colorCandleDw;
    }
  }]);

  return Price;
}();


// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/overlays/Candles.vue?vue&type=script&lang=js&


function Candlesvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = Candlesvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Candlesvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Candlesvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Candlesvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function Candlesvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Renedrer for candlesticks + volume (optional)
// It can be used as the main chart or an indicator





/* harmony default export */ var Candlesvue_type_script_lang_js_ = ({
  name: 'Candles',
  mixins: [mixins_overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.2.0'
      };
    },
    init: function init() {
      this.price = new price_Price(this);
    },
    draw: function draw(ctx) {
      // If data === main candlestick data
      // render as main chart:
      if (this.$props.sub === this.$props.data) {
        var cnv = {
          candles: this.$props.layout.candles,
          volume: this.$props.layout.volume
        }; // Else, as offchart / onchart indicator:
      } else {
        cnv = layout_cnv(this);
      }

      if (this.show_volume) {
        var _iterator = Candlesvue_type_script_lang_js_createForOfIteratorHelper(cnv.volume),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var v = _step.value;
            new volbar_VolbarExt(this, ctx, v);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      var _iterator2 = Candlesvue_type_script_lang_js_createForOfIteratorHelper(cnv.candles),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var c = _step2.value;
          new candle_CandleExt(this, ctx, c);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (this.price_line) this.price.draw(ctx);
    },
    use_for: function use_for() {
      return ['Candles'];
    },
    // When added as offchart overlay
    y_range: function y_range() {
      return [Math.max.apply(Math, toConsumableArray_default()(this.$props.sub.map(function (x) {
        return x[2];
      }))), Math.min.apply(Math, toConsumableArray_default()(this.$props.sub.map(function (x) {
        return x[3];
      })))];
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    show_volume: function show_volume() {
      return 'showVolume' in this.sett ? this.sett.showVolume : true;
    },
    price_line: function price_line() {
      return 'priceLine' in this.sett ? this.sett.priceLine : true;
    },
    colorCandleUp: function colorCandleUp() {
      return this.sett.colorCandleUp || this.$props.colors.colorCandleUp;
    },
    colorCandleDw: function colorCandleDw() {
      return this.sett.colorCandleDw || this.$props.colors.colorCandleDw;
    },
    colorWickUp: function colorWickUp() {
      return this.sett.colorWickUp || this.$props.colors.colorWickUp;
    },
    colorWickDw: function colorWickDw() {
      return this.sett.colorWickDw || this.$props.colors.colorWickDw;
    },
    colorWickSm: function colorWickSm() {
      return this.sett.colorWickSm || this.$props.colors.colorWickSm;
    },
    colorVolUp: function colorVolUp() {
      return this.sett.colorVolUp || this.$props.colors.colorVolUp;
    },
    colorVolDw: function colorVolDw() {
      return this.sett.colorVolDw || this.$props.colors.colorVolDw;
    }
  },
  data: function data() {
    return {
      price: {}
    };
  }
});
// CONCATENATED MODULE: ./src/components/overlays/Candles.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlays_Candlesvue_type_script_lang_js_ = (Candlesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/overlays/Candles.vue
var Candles_render, Candles_staticRenderFns




/* normalize component */

var Candles_component = normalizeComponent(
  overlays_Candlesvue_type_script_lang_js_,
  Candles_render,
  Candles_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Candles_api; }
Candles_component.options.__file = "src/components/overlays/Candles.vue"
/* harmony default export */ var Candles = (Candles_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/overlays/Volume.vue?vue&type=script&lang=js&


function Volumevue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = Volumevue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Volumevue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Volumevue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Volumevue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function Volumevue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Standalone renedrer for the volume



/* harmony default export */ var Volumevue_type_script_lang_js_ = ({
  name: 'Volume',
  mixins: [mixins_overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.1.0'
      };
    },
    draw: function draw(ctx) {
      // TODO: volume average
      // TODO: Y-axis scaling
      var _iterator = Volumevue_type_script_lang_js_createForOfIteratorHelper(layout_vol(this)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var v = _step.value;
          new volbar_VolbarExt(this, ctx, v);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    use_for: function use_for() {
      return ['Volume'];
    },
    // Defines legend format (values & colors)
    // _i2 - detetected data index (see layout_cnv)
    legend: function legend(values) {
      var flag = this._i2 ? this._i2(values) : values[2];
      var color = flag ? this.colorVolUpLegend : this.colorVolDwLegend;
      return [{
        value: values[this._i1 || 1],
        color: color
      }];
    },
    // When added as offchart overlay
    // If data is OHLCV => recalc y-range
    // _i1 - detetected data index (see layout_cnv)
    y_range: function y_range(hi, lo) {
      var _this = this;

      if (this._i1 === 5) {
        var sub = this.$props.sub;
        return [Math.max.apply(Math, toConsumableArray_default()(sub.map(function (x) {
          return x[_this._i1];
        }))), Math.min.apply(Math, toConsumableArray_default()(sub.map(function (x) {
          return x[_this._i1];
        })))];
      } else {
        return [hi, lo];
      }
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    colorVolUp: function colorVolUp() {
      return this.sett.colorVolUp || this.$props.colors.colorVolUp;
    },
    colorVolDw: function colorVolDw() {
      return this.sett.colorVolDw || this.$props.colors.colorVolDw;
    },
    colorVolUpLegend: function colorVolUpLegend() {
      return this.sett.colorVolUpLegend || this.$props.colors.colorCandleUp;
    },
    colorVolDwLegend: function colorVolDwLegend() {
      return this.sett.colorVolDwLegend || this.$props.colors.colorCandleDw;
    },
    volscale: function volscale() {
      return this.sett.volscale || this.$props.grid_id > 0 ? 0.85 : this.$props.config.VOLSCALE;
    }
  },
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/components/overlays/Volume.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlays_Volumevue_type_script_lang_js_ = (Volumevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/overlays/Volume.vue
var Volume_render, Volume_staticRenderFns




/* normalize component */

var Volume_component = normalizeComponent(
  overlays_Volumevue_type_script_lang_js_,
  Volume_render,
  Volume_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Volume_api; }
Volume_component.options.__file = "src/components/overlays/Volume.vue"
/* harmony default export */ var Volume = (Volume_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/overlays/Splitters.vue?vue&type=script&lang=js&
// Data section splitters (with labels)

/* harmony default export */ var Splittersvue_type_script_lang_js_ = ({
  name: 'Splitters',
  mixins: [mixins_overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.0.0'
      };
    },
    draw: function draw(ctx) {
      var _this = this;

      var layout = this.$props.layout;
      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.line_color;
      this.$props.data.forEach(function (p, i) {
        ctx.beginPath();
        var x = layout.t2screen(p[0]); // x - Mapping

        ctx.setLineDash([10, 10]);
        ctx.moveTo(x, 0);
        ctx.lineTo(x, _this.layout.height);
        ctx.stroke();
        if (p[1]) _this.draw_label(ctx, x, p);
      });
    },
    draw_label: function draw_label(ctx, x, p) {
      var side = p[2] ? 1 : -1;
      x += 2.5 * side;
      ctx.font = this.new_font;
      var pos = p[4] || this.y_position;
      var w = ctx.measureText(p[1]).width + 10;
      var y = this.layout.height * (1.0 - pos);
      y = Math.floor(y);
      ctx.fillStyle = p[3] || this.label_color;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 10 * side, y - 10 * side);
      ctx.lineTo(x + (w + 10) * side, y - 10 * side);
      ctx.lineTo(x + (w + 10) * side, y + 10 * side);
      ctx.lineTo(x + 10 * side, y + 10 * side);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.textAlign = side < 0 ? 'right' : 'left';
      ctx.fillText(p[1], x + 15 * side, y + 4);
    },
    use_for: function use_for() {
      return ['Splitters'];
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    new_font: function new_font() {
      return this.sett.font || '12px ' + this.$props.font.split('px').pop();
    },
    label_color: function label_color() {
      return this.sett.labelColor || '#4285f4';
    },
    line_color: function line_color() {
      return this.sett.lineColor || '#4285f4';
    },
    line_width: function line_width() {
      return this.sett.lineWidth || 1.0;
    },
    y_position: function y_position() {
      return this.sett.yPosition || 0.9;
    }
  },
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/components/overlays/Splitters.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlays_Splittersvue_type_script_lang_js_ = (Splittersvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/overlays/Splitters.vue
var Splitters_render, Splitters_staticRenderFns




/* normalize component */

var Splitters_component = normalizeComponent(
  overlays_Splittersvue_type_script_lang_js_,
  Splitters_render,
  Splitters_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Splitters_api; }
Splitters_component.options.__file = "src/components/overlays/Splitters.vue"
/* harmony default export */ var Splitters = (Splitters_component.exports);
// CONCATENATED MODULE: ./src/stuff/keys.js



function keys_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = keys_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function keys_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return keys_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return keys_arrayLikeToArray(o, minLen); }

function keys_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Keyboard event handler for overlay
var keys_Keys = /*#__PURE__*/function () {
  function Keys(comp) {
    classCallCheck_default()(this, Keys);

    this.comp = comp;
    this.map = {};
    this.listeners = 0;
    this.keymap = {};
  }

  createClass_default()(Keys, [{
    key: "on",
    value: function on(name, handler) {
      if (!handler) return;
      this.map[name] = this.map[name] || [];
      this.map[name].push(handler);
      this.listeners++;
    } // Called by grid.js

  }, {
    key: "emit",
    value: function emit(name, event) {
      if (name in this.map) {
        var _iterator = keys_createForOfIteratorHelper(this.map[name]),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var f = _step.value;
            f(event);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      if (name === 'keydown') {
        if (!this.keymap[event.key]) {
          this.emit(event.key);
        }

        this.keymap[event.key] = true;
      }

      if (name === 'keyup') {
        this.keymap[event.key] = false;
      }
    }
  }, {
    key: "pressed",
    value: function pressed(key) {
      return this.keymap[key];
    }
  }]);

  return Keys;
}();


// CONCATENATED MODULE: ./src/mixins/tool.js
function tool_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = tool_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function tool_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return tool_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tool_arrayLikeToArray(o, minLen); }

function tool_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Usuful stuff for creating tools. Include as mixin

/* harmony default export */ var mixins_tool = ({
  methods: {
    init_tool: function init_tool() {
      var _this = this;

      // Collision functions (float, float) => bool,
      this.collisions = [];
      this.pins = [];
      this.mouse.on('mousemove', function (e) {
        if (_this.collisions.some(function (f) {
          return f(_this.mouse.x, _this.mouse.y);
        })) {
          _this.show_pins = true;
        } else {
          _this.show_pins = false;
        }

        if (_this.drag) _this.drag_update();
      });
      this.mouse.on('mousedown', function (e) {
        if (e.defaultPrevented) return;

        if (_this.collisions.some(function (f) {
          return f(_this.mouse.x, _this.mouse.y);
        })) {
          if (!_this.selected) {
            _this.$emit('object-selected');
          }

          _this.start_drag();

          e.preventDefault();

          _this.pins.forEach(function (x) {
            return x.mousedown(e, true);
          });
        }
      });
      this.mouse.on('mouseup', function (e) {
        _this.drag = null;

        _this.$emit('scroll-lock', false);
      });
      this.keys = new keys_Keys(this);
      this.keys.on('Delete', this.remove_tool);
      this.keys.on('Backspace', this.remove_tool);
      this.show_pins = false;
      this.drag = null;
    },
    render_pins: function render_pins(ctx) {
      if (this.selected || this.show_pins) {
        this.pins.forEach(function (x) {
          return x.draw(ctx);
        });
      }
    },
    set_state: function set_state(name) {
      this.$emit('change-settings', {
        $state: name
      });
    },
    watch_uuid: function watch_uuid(n, p) {
      // If layer $uuid is changed, then re-init
      // pins & collisions
      if (n.$uuid !== p.$uuid) {
        var _iterator = tool_createForOfIteratorHelper(this.pins),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var p = _step.value;
            p.re_init();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        this.collisions = [];
        this.show_pins = false;
        this.drag = null;
      }
    },
    pre_draw: function pre_draw() {
      // Delete all collision functions before
      // the draw() call and let primitives set
      // them again
      this.collisions = [];
    },
    remove_tool: function remove_tool() {
      if (this.selected) this.$emit('remove-tool');
    },
    start_drag: function start_drag() {
      this.$emit('scroll-lock', true);
      var cursor = this.$props.cursor;
      this.drag = {
        t: cursor.t,
        y$: cursor.y$
      };
      this.pins.forEach(function (x) {
        return x.rec_position();
      });
    },
    drag_update: function drag_update() {
      var dt = this.$props.cursor.t - this.drag.t;
      var dy = this.$props.cursor.y$ - this.drag.y$;
      this.pins.forEach(function (x) {
        return x.update_from([x.t1 + dt, x.y$1 + dy], true);
      });
    }
  },
  computed: {
    // Settings starting with $ are reserved
    selected: function selected() {
      return this.$props.settings.$selected;
    },
    state: function state() {
      return this.$props.settings.$state;
    }
  }
});
// EXTERNAL MODULE: ./src/stuff/icons.json
var icons = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(26);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./src/components/primitives/pin.js




// Semi-automatic pin object. For stretching things.
var pin_Pin = /*#__PURE__*/function () {
  // (Comp reference, a name in overlay settings,
  // pin parameters)
  function Pin(comp, name, params) {
    var _this = this;

    if (params === void 0) {
      params = {};
    }

    classCallCheck_default()(this, Pin);

    this.RADIUS = comp.$props.config.PIN_RADIUS || 5.5;
    this.RADIUS_SQ = Math.pow(this.RADIUS + 7, 2);
    this.COLOR_BACK = comp.$props.colors.colorBack;
    this.COLOR_BR = comp.$props.colors.colorText;
    this.comp = comp;
    this.layout = comp.layout;
    this.mouse = comp.mouse;
    this.name = name;
    this.state = params.state || 'settled';
    this.mouse.on('mousemove', function (e) {
      return _this.mousemove(e);
    });
    this.mouse.on('mousedown', function (e) {
      return _this.mousedown(e);
    });
    this.mouse.on('mouseup', function (e) {
      return _this.mouseup(e);
    });

    if (comp.state === 'finished') {
      this.state = 'settled';
      this.update_from(comp.$props.settings[name]);
    } else {
      this.update();
    }

    if (this.state !== 'settled') {
      this.comp.$emit('scroll-lock', true);
    }
  }

  createClass_default()(Pin, [{
    key: "re_init",
    value: function re_init() {
      this.update_from(this.comp.$props.settings[this.name]);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      switch (this.state) {
        case 'tracking':
          break;

        case 'dragging':
          if (!this.moved) this.draw_circle(ctx);
          break;

        case 'settled':
          this.draw_circle(ctx);
          break;
      }
    }
  }, {
    key: "draw_circle",
    value: function draw_circle(ctx) {
      this.layout = this.comp.layout;

      if (this.comp.selected) {
        var r = this.RADIUS,
            lw = 1.5;
      } else {
        var r = this.RADIUS * 0.95,
            lw = 1;
      }

      ctx.lineWidth = lw;
      ctx.strokeStyle = this.COLOR_BR;
      ctx.fillStyle = this.COLOR_BACK;
      ctx.beginPath();
      ctx.arc(this.x = this.layout.t2screen(this.t), this.y = this.layout.$2screen(this.y$), r + 0.5, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.stroke();
    }
  }, {
    key: "update",
    value: function update() {
      this.y$ = this.comp.$props.cursor.y$;
      this.y = this.comp.$props.cursor.y;
      this.t = this.comp.$props.cursor.t;
      this.x = this.comp.$props.cursor.x; // Save pin as time in IB mode
      //if (this.layout.ti_map.ib) {
      //    this.t = this.layout.ti_map.i2t(this.t )
      //}
      // Reset the settings attahed to the pin (position)

      this.comp.$emit('change-settings', defineProperty_default()({}, this.name, [this.t, this.y$]));
    }
  }, {
    key: "update_from",
    value: function update_from(data, emit) {
      if (emit === void 0) {
        emit = false;
      }

      if (!data) return;
      this.layout = this.comp.layout;
      this.y$ = data[1];
      this.y = this.layout.$2screen(this.y$);
      this.t = data[0];
      this.x = this.layout.t2screen(this.t); // TODO: Save pin as time in IB mode
      //if (this.layout.ti_map.ib) {
      //    this.t = this.layout.ti_map.i2t(this.t )
      //}

      if (emit) this.comp.$emit('change-settings', defineProperty_default()({}, this.name, [this.t, this.y$]));
    }
  }, {
    key: "rec_position",
    value: function rec_position() {
      this.t1 = this.t;
      this.y$1 = this.y$;
    }
  }, {
    key: "mousemove",
    value: function mousemove(event) {
      switch (this.state) {
        case 'tracking':
        case 'dragging':
          this.moved = true;
          this.update();
          break;
      }
    }
  }, {
    key: "mousedown",
    value: function mousedown(event, force) {
      if (force === void 0) {
        force = false;
      }

      if (event.defaultPrevented && !force) return;

      switch (this.state) {
        case 'tracking':
          this.state = 'settled';
          if (this.on_settled) this.on_settled();
          this.comp.$emit('scroll-lock', false);
          break;

        case 'settled':
          if (this.hover()) {
            this.state = 'dragging';
            this.moved = false;
            this.comp.$emit('scroll-lock', true);
            this.comp.$emit('object-selected');
          }

          break;
      }

      if (this.hover()) {
        event.preventDefault();
      }
    }
  }, {
    key: "mouseup",
    value: function mouseup(event) {
      switch (this.state) {
        case 'dragging':
          this.state = 'settled';
          if (this.on_settled) this.on_settled();
          this.comp.$emit('scroll-lock', false);
          break;
      }
    }
  }, {
    key: "on",
    value: function on(name, handler) {
      switch (name) {
        case 'settled':
          this.on_settled = handler;
          break;
      }
    }
  }, {
    key: "hover",
    value: function hover() {
      var x = this.x;
      var y = this.y;
      return (x - this.mouse.x) * (x - this.mouse.x) + (y - this.mouse.y) * (y - this.mouse.y) < this.RADIUS_SQ;
    }
  }]);

  return Pin;
}();


// CONCATENATED MODULE: ./src/components/primitives/seg.js


// Draws a segment, adds corresponding collision f-n


var seg_Seg = /*#__PURE__*/function () {
  // Overlay ref, canvas ctx
  function Seg(overlay, ctx) {
    classCallCheck_default()(this, Seg);

    this.ctx = ctx;
    this.comp = overlay;
    this.T = overlay.$props.config.TOOL_COLL;
  } // p1[t, $], p2[t, $] (time-price coordinates)


  createClass_default()(Seg, [{
    key: "draw",
    value: function draw(p1, p2) {
      var layout = this.comp.$props.layout;
      var x1 = layout.t2screen(p1[0]);
      var y1 = layout.$2screen(p1[1]);
      var x2 = layout.t2screen(p2[0]);
      var y2 = layout.$2screen(p2[1]);
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.comp.collisions.push(this.make([x1, y1], [x2, y2]));
    } // Collision function. x, y - mouse coord.

  }, {
    key: "make",
    value: function make(p1, p2) {
      var _this = this;

      return function (x, y) {
        return math.point2seg([x, y], p1, p2) < _this.T;
      };
    }
  }]);

  return Seg;
}();


// CONCATENATED MODULE: ./src/components/primitives/line.js


// Draws a line, adds corresponding collision f-n


var line_Line = /*#__PURE__*/function () {
  // Overlay ref, canvas ctx
  function Line(overlay, ctx) {
    classCallCheck_default()(this, Line);

    this.ctx = ctx;
    this.comp = overlay;
    this.T = overlay.$props.config.TOOL_COLL;
  } // p1[t, $], p2[t, $] (time-price coordinates)


  createClass_default()(Line, [{
    key: "draw",
    value: function draw(p1, p2) {
      var layout = this.comp.$props.layout;
      var x1 = layout.t2screen(p1[0]);
      var y1 = layout.$2screen(p1[1]);
      var x2 = layout.t2screen(p2[0]);
      var y2 = layout.$2screen(p2[1]);
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      var w = layout.width;
      var h = layout.height; // TODO: transform k (angle) to screen ratio
      // (this requires a new a2screen function)

      var k = (y2 - y1) / (x2 - x1);
      var s = Math.sign(x2 - x1 || y2 - y1);
      var dx = w * s * 2;
      var dy = w * k * s * 2;

      if (dy === Infinity) {
        dx = 0, dy = h * s;
      }

      this.ctx.moveTo(x2, y2);
      this.ctx.lineTo(x2 + dx, y2 + dy);
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x1 - dx, y1 - dy);
      this.comp.collisions.push(this.make([x1, y1], [x2, y2]));
    } // Collision function. x, y - mouse coord.

  }, {
    key: "make",
    value: function make(p1, p2) {
      var _this = this;

      return function (x, y) {
        return math.point2line([x, y], p1, p2) < _this.T;
      };
    }
  }]);

  return Line;
}();


// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/overlays/LineTool.vue?vue&type=script&lang=js&
// Line drawing tool






/* harmony default export */ var LineToolvue_type_script_lang_js_ = ({
  name: 'LineTool',
  mixins: [mixins_overlay, mixins_tool],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.0.0'
      };
    },
    tool: function tool() {
      return {
        // Descriptor for the tool
        group: 'Lines',
        icon: icons['segment.png'],
        type: 'Segment',
        hint: 'This hint will be shown on hover',
        data: [],
        // Default data
        settings: {},
        // Default settings
        // Modifications
        mods: {
          'Extended': {
            // Rewrites the default setting fields
            settings: {
              extended: true
            },
            icon: icons['extended.png']
          }
        }
      };
    },
    // Called after overlay mounted
    init: function init() {
      var _this = this;

      // First pin is settled at the mouse position
      this.pins.push(new pin_Pin(this, 'p1')); // Second one is following mouse until it clicks

      this.pins.push(new pin_Pin(this, 'p2', {
        state: 'tracking'
      }));
      this.pins[1].on('settled', function () {
        // Call when current tool drawing is finished
        // (Optionally) reset the mode back to 'Cursor'
        _this.set_state('finished');

        _this.$emit('drawing-mode-off');
      });
    },
    draw: function draw(ctx) {
      if (!this.p1 || !this.p2) return;
      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.color;
      ctx.beginPath();

      if (this.sett.extended) {
        new line_Line(this, ctx).draw(this.p1, this.p2);
      } else {
        new seg_Seg(this, ctx).draw(this.p1, this.p2);
      }

      ctx.stroke();
      this.render_pins(ctx);
    },
    use_for: function use_for() {
      return ['LineTool'];
    },
    data_colors: function data_colors() {
      return [this.color];
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    p1: function p1() {
      return this.$props.settings.p1;
    },
    p2: function p2() {
      return this.$props.settings.p2;
    },
    line_width: function line_width() {
      return this.sett.lineWidth || 0.9;
    },
    color: function color() {
      return this.sett.color || '#42b28a';
    }
  },
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/components/overlays/LineTool.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlays_LineToolvue_type_script_lang_js_ = (LineToolvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/overlays/LineTool.vue
var LineTool_render, LineTool_staticRenderFns




/* normalize component */

var LineTool_component = normalizeComponent(
  overlays_LineToolvue_type_script_lang_js_,
  LineTool_render,
  LineTool_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var LineTool_api; }
LineTool_component.options.__file = "src/components/overlays/LineTool.vue"
/* harmony default export */ var LineTool = (LineTool_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/overlays/RangeTool.vue?vue&type=script&lang=js&
// Line drawing tool





/* harmony default export */ var RangeToolvue_type_script_lang_js_ = ({
  name: 'RangeTool',
  mixins: [mixins_overlay, mixins_tool],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.0.0'
      };
    },
    tool: function tool() {
      return {
        // Descriptor for the tool
        group: 'Measurements',
        icon: icons['price_range.png'],
        type: 'Price',
        hint: 'Price Range',
        data: [],
        // Default data
        settings: {} // Default settings

      };
    },
    // Called after overlay mounted
    init: function init() {
      var _this = this;

      // First pin is settled at the mouse position
      this.pins.push(new pin_Pin(this, 'p1')); // Second one is following mouse until it clicks

      this.pins.push(new pin_Pin(this, 'p2', {
        state: 'tracking'
      }));
      this.pins[1].on('settled', function () {
        // Call when current tool drawing is finished
        // (Optionally) reset the mode back to 'Cursor'
        _this.set_state('finished');

        _this.$emit('drawing-mode-off');
      });
    },
    draw: function draw(ctx) {
      if (!this.p1 || !this.p2) return;
      var dir = Math.sign(this.p2[1] - this.p1[1]);
      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.color;
      ctx.beginPath(); // Background

      ctx.fillStyle = this.back_color;
      var layout = this.$props.layout;
      var x1 = layout.t2screen(this.p1[0]);
      var y1 = layout.$2screen(this.p1[1]);
      var x2 = layout.t2screen(this.p2[0]);
      var y2 = layout.$2screen(this.p2[1]);
      ctx.fillRect(x1, y1, x2 - x1, y2 - y1); // Top

      new seg_Seg(this, ctx).draw([this.p1[0], this.p2[1]], [this.p2[0], this.p2[1]]); // Bottom

      new seg_Seg(this, ctx).draw([this.p1[0], this.p1[1]], [this.p2[0], this.p1[1]]); // Arrow

      var xm = layout.t2screen((this.p1[0] + this.p2[0]) * 0.5);
      ctx.moveTo(xm - 4, y2 + 5 * dir);
      ctx.lineTo(xm, y2);
      ctx.lineTo(xm + 4, y2 + 5 * dir);
      ctx.stroke(); // Vertical

      ctx.beginPath();
      ctx.setLineDash([5, 5]);
      new seg_Seg(this, ctx).draw([(this.p1[0] + this.p2[0]) * 0.5, this.p2[1]], [(this.p1[0] + this.p2[0]) * 0.5, this.p1[1]]);
      ctx.stroke();
      ctx.setLineDash([]);
      this.draw_value(ctx, dir, xm, y2);
      this.render_pins(ctx);
    },
    draw_value: function draw_value(ctx, dir, xm, y) {
      ctx.font = this.new_font;
      var d$ = (this.p2[1] - this.p1[1]).toFixed(this.prec);
      var p = (100 * (this.p2[1] / this.p1[1] - 1)).toFixed(this.prec);
      var text = "".concat(d$, "  (").concat(p, "%)");
      var w = Math.max(ctx.measureText(text).width + 20, 100);
      ctx.fillStyle = this.value_back;
      ctx.fillRect(xm - w * 0.5, y - 30 * dir, w, 20 * dir);
      ctx.fillStyle = this.value_color;
      ctx.textAlign = 'center';
      ctx.fillText(text, xm, y + (dir > 0 ? -15 : 25));
    },
    use_for: function use_for() {
      return ['RangeTool'];
    },
    data_colors: function data_colors() {
      return [this.color];
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    p1: function p1() {
      return this.$props.settings.p1;
    },
    p2: function p2() {
      return this.$props.settings.p2;
    },
    line_width: function line_width() {
      return this.sett.lineWidth || 0.9;
    },
    color: function color() {
      return this.sett.color || this.$props.colors.colorCross;
    },
    back_color: function back_color() {
      return this.sett.backColor || '#9b9ba316';
    },
    value_back: function value_back() {
      return this.sett.valueBack || '#9b9ba316';
    },
    value_color: function value_color() {
      return this.sett.valueColor || this.$props.colors.colorText;
    },
    prec: function prec() {
      return this.sett.precision || 2;
    },
    new_font: function new_font() {
      return '12px ' + this.$props.font.split('px').pop();
    }
  },
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/components/overlays/RangeTool.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlays_RangeToolvue_type_script_lang_js_ = (RangeToolvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/overlays/RangeTool.vue
var RangeTool_render, RangeTool_staticRenderFns




/* normalize component */

var RangeTool_component = normalizeComponent(
  overlays_RangeToolvue_type_script_lang_js_,
  RangeTool_render,
  RangeTool_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var RangeTool_api; }
RangeTool_component.options.__file = "src/components/overlays/RangeTool.vue"
/* harmony default export */ var RangeTool = (RangeTool_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Grid.vue?vue&type=script&lang=js&
function Gridvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = Gridvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Gridvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Gridvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Gridvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function Gridvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Sets up all layers/overlays for the grid with 'grid_id'

















/* harmony default export */ var Gridvue_type_script_lang_js_ = ({
  name: 'Grid',
  props: ['sub', 'layout', 'range', 'interval', 'cursor', 'colors', 'overlays', 'width', 'height', 'data', 'grid_id', 'y_transform', 'font', 'tv_id', 'config', 'meta'],
  mixins: [mixins_canvas, uxlist],
  components: {
    Crosshair: components_Crosshair,
    KeyboardListener: KeyboardListener
  },
  created: function created() {
    var _this = this;

    // List of all possible overlays (builtin + custom)
    this._list = [Spline, Splines, Range, Trades, Channel, Segment, Candles, Volume, Splitters, LineTool, RangeTool].concat(this.$props.overlays);
    this._registry = {}; // We need to know which components we will use.
    // Custom overlay components overwrite built-ins:

    var tools = [];

    this._list.forEach(function (x, i) {
      var use_for = x.methods.use_for();
      if (x.methods.tool) tools.push({
        use_for: use_for,
        info: x.methods.tool()
      });
      use_for.forEach(function (indicator) {
        _this._registry[indicator] = i;
      });
    });

    this.$emit('custom-event', {
      event: 'register-tools',
      args: tools
    });
    this.$on('custom-event', function (e) {
      return _this.on_ux_event(e, 'grid');
    });
  },
  mounted: function mounted() {
    var _this2 = this;

    var el = this.$refs['canvas'];
    this.renderer = new grid_Grid(el, this);
    this.setup();
    this.$nextTick(function () {
      return _this2.redraw();
    });
  },
  render: function render(h) {
    var id = this.$props.grid_id;
    var layout = this.$props.layout.grids[id];
    return this.create_canvas(h, "grid-".concat(id), {
      position: {
        x: 0,
        y: layout.offset || 0
      },
      attrs: {
        width: layout.width,
        height: layout.height,
        overflow: 'hidden'
      },
      style: {
        backgroundColor: this.$props.colors.colorBack
      },
      hs: [h(components_Crosshair, {
        props: this.common_props(),
        on: this.layer_events
      }), h(KeyboardListener, {
        on: this.keyboard_events
      }), h(UxLayer, {
        props: {
          id: id,
          tv_id: this.$props.tv_id,
          uxs: this.uxs,
          colors: this.$props.colors,
          config: this.$props.config,
          updater: Math.random()
        },
        on: {
          'custom-event': this.emit_ux_event
        }
      })].concat(this.get_overlays(h))
    });
  },
  methods: {
    new_layer: function new_layer(layer) {
      var _this3 = this;

      this.$nextTick(function () {
        return _this3.renderer.new_layer(layer);
      });
    },
    del_layer: function del_layer(layer) {
      var _this4 = this;

      this.$nextTick(function () {
        return _this4.renderer.del_layer(layer);
      });
      var grid_id = this.$props.grid_id;
      this.$emit('custom-event', {
        event: 'remove-shaders',
        args: [grid_id, layer]
      }); // TODO: close all interfaces

      this.$emit('custom-event', {
        event: 'remove-layer-meta',
        args: [grid_id, layer]
      });
      this.remove_all_ux();
    },
    get_overlays: function get_overlays(h) {
      var _this5 = this;

      // Distributes overlay data & settings according
      // to this._registry; returns compo list
      var comp_list = [],
          count = {};

      var _iterator = Gridvue_type_script_lang_js_createForOfIteratorHelper(this.$props.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var d = _step.value;
          var comp = this._list[this._registry[d.type]];

          if (comp) {
            if (comp.methods.calc) {
              comp = this.inject_renderer(comp);
            }

            comp_list.push({
              cls: comp,
              type: d.type,
              data: d.data,
              settings: d.settings,
              tf: d.tf
            });
            count[d.type] = 0;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return comp_list.map(function (x, i) {
        return h(x.cls, {
          on: _this5.layer_events,
          attrs: Object.assign(_this5.common_props(), {
            id: "".concat(x.type, "_").concat(count[x.type]++),
            type: x.type,
            data: x.data,
            settings: x.settings,
            tf: x.tf,
            num: i,
            grid_id: _this5.$props.grid_id,
            meta: _this5.$props.meta
          })
        });
      });
    },
    common_props: function common_props() {
      return {
        cursor: this.$props.cursor,
        colors: this.$props.colors,
        layout: this.$props.layout.grids[this.$props.grid_id],
        interval: this.$props.interval,
        sub: this.$props.sub,
        font: this.$props.font,
        config: this.$props.config
      };
    },
    emit_ux_event: function emit_ux_event(e) {
      var e_pass = this.on_ux_event(e, 'grid');
      if (e_pass) this.$emit('custom-event', e);
    },
    // Replace the current comp with 'renderer'
    inject_renderer: function inject_renderer(comp) {
      var src = comp.methods.calc();

      if (!src.conf || !src.conf.renderer || comp.__renderer__) {
        return comp;
      } // Search for an overlay with the target 'name'


      var f = this._list.find(function (x) {
        return x.name === src.conf.renderer;
      });

      if (!f) return comp;
      comp.mixins.push(f);
      comp.__renderer__ = src.conf.renderer;
      return comp;
    }
  },
  computed: {
    is_active: function is_active() {
      return this.$props.cursor.t !== undefined && this.$props.cursor.grid_id === this.$props.grid_id;
    }
  },
  watch: {
    range: {
      handler: function handler() {
        var _this6 = this;

        // TODO: Left-side render lag fix:
        // Overlay data is updated one tick later than
        // the main sub. Fast fix is to delay redraw()
        // call. It will be a solution until a better
        // one comes by.
        this.$nextTick(function () {
          return _this6.redraw();
        });
      },
      deep: true
    },
    cursor: {
      handler: function handler() {
        if (!this.$props.cursor.locked) this.redraw();
      },
      deep: true
    },
    overlays: {
      // Track changes in calc() functions
      handler: function handler(ovs) {
        var _iterator2 = Gridvue_type_script_lang_js_createForOfIteratorHelper(ovs),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var ov = _step2.value;

            var _iterator3 = Gridvue_type_script_lang_js_createForOfIteratorHelper(this.$children),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var comp = _step3.value;
                if (typeof comp.id !== 'string') continue;
                var tuple = comp.id.split('_');
                tuple.pop();

                if (tuple.join('_') === ov.name) {
                  comp.calc = ov.methods.calc;
                  comp.exec_script();
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      },
      deep: true
    }
  },
  data: function data() {
    var _this7 = this;

    return {
      layer_events: {
        'new-grid-layer': this.new_layer,
        'delete-grid-layer': this.del_layer,
        'show-grid-layer': function showGridLayer(d) {
          _this7.renderer.show_hide_layer(d);

          _this7.redraw();
        },
        'redraw-grid': this.redraw,
        'layer-meta-props': function layerMetaProps(d) {
          return _this7.$emit('layer-meta-props', d);
        },
        'custom-event': function customEvent(d) {
          return _this7.$emit('custom-event', d);
        }
      },
      keyboard_events: {
        'register-kb-listener': function registerKbListener(event) {
          _this7.$emit('register-kb-listener', event);
        },
        'remove-kb-listener': function removeKbListener(event) {
          _this7.$emit('remove-kb-listener', event);
        },
        'keyup': function keyup(event) {
          if (!_this7.is_active) return;

          _this7.renderer.propagate('keyup', event);
        },
        'keydown': function keydown(event) {
          if (!_this7.is_active) return; // TODO: is this neeeded?

          _this7.renderer.propagate('keydown', event);
        },
        'keypress': function keypress(event) {
          if (!_this7.is_active) return;

          _this7.renderer.propagate('keypress', event);
        }
      }
    };
  }
});
// CONCATENATED MODULE: ./src/components/Grid.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Gridvue_type_script_lang_js_ = (Gridvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Grid.vue
var Grid_render, Grid_staticRenderFns




/* normalize component */

var Grid_component = normalizeComponent(
  components_Gridvue_type_script_lang_js_,
  Grid_render,
  Grid_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Grid_api; }
Grid_component.options.__file = "src/components/Grid.vue"
/* harmony default export */ var components_Grid = (Grid_component.exports);
// CONCATENATED MODULE: ./src/components/js/sidebar.js



function sidebar_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = sidebar_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function sidebar_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return sidebar_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return sidebar_arrayLikeToArray(o, minLen); }

function sidebar_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var PANHEIGHT;

var sidebar_Sidebar = /*#__PURE__*/function () {
  function Sidebar(canvas, comp, side) {
    if (side === void 0) {
      side = 'right';
    }

    classCallCheck_default()(this, Sidebar);

    PANHEIGHT = comp.config.PANHEIGHT;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.comp = comp;
    this.$p = comp.$props;
    this.data = this.$p.sub;
    this.range = this.$p.range;
    this.id = this.$p.grid_id;
    this.layout = this.$p.layout.grids[this.id];
    this.side = side;
    this.listeners();
  }

  createClass_default()(Sidebar, [{
    key: "listeners",
    value: function listeners() {
      var _this = this;

      var mc = new hammer["Manager"](this.canvas);
      mc.add(new hammer["Pan"]({
        direction: hammer["DIRECTION_VERTICAL"],
        threshold: 1
      }));
      mc.add(new hammer["Tap"]({
        event: 'doubletap',
        taps: 2
      }));
      mc.on('panstart', function (event) {
        if (_this.$p.y_transform) {
          _this.zoom = _this.$p.y_transform.zoom;
        } else {
          _this.zoom = 1.0;
        }

        _this.y_range = [_this.layout.$_hi, _this.layout.$_lo];
        _this.drug = {
          y: event.center.y,
          z: _this.zoom,
          mid: math.log_mid(_this.y_range, _this.layout.height),
          A: _this.layout.A,
          B: _this.layout.B
        };
      });
      mc.on('panmove', function (event) {
        if (_this.drug) {
          _this.zoom = _this.calc_zoom(event);

          _this.comp.$emit('sidebar-transform', {
            grid_id: _this.id,
            zoom: _this.zoom,
            auto: false,
            range: _this.calc_range(),
            drugging: true
          });

          _this.update();
        }
      });
      mc.on('panend', function () {
        _this.drug = null;

        _this.comp.$emit('sidebar-transform', {
          grid_id: _this.id,
          drugging: false
        });
      });
      mc.on('doubletap', function () {
        _this.comp.$emit('sidebar-transform', {
          grid_id: _this.id,
          zoom: 1.0,
          auto: true
        });

        _this.zoom = 1.0;

        _this.update();
      }); // TODO: Do later for mobile version
    }
  }, {
    key: "update",
    value: function update() {
      // Update reference to the grid
      this.layout = this.$p.layout.grids[this.id];
      var points = this.layout.ys;
      var x,
          y,
          w,
          h,
          side = this.side;
      var sb = this.layout.sb;
      this.ctx.fillStyle = this.$p.colors.colorBack;
      this.ctx.font = this.$p.font;

      switch (side) {
        case 'left':
          x = 0;
          y = 0;
          w = Math.floor(sb);
          h = this.layout.height;
          this.ctx.fillRect(x, y, w, h);
          this.ctx.strokeStyle = this.$p.colors.colorScale;
          this.ctx.beginPath();
          this.ctx.moveTo(x + 0.5, 0);
          this.ctx.lineTo(x + 0.5, h);
          this.ctx.stroke();
          break;

        case 'right':
          x = 0;
          y = 0;
          w = Math.floor(sb);
          h = this.layout.height;
          this.ctx.fillRect(x, y, w, h);
          this.ctx.strokeStyle = this.$p.colors.colorScale;
          this.ctx.beginPath();
          this.ctx.moveTo(x + 0.5, 0);
          this.ctx.lineTo(x + 0.5, h);
          this.ctx.stroke();
          break;
      }

      this.ctx.fillStyle = this.$p.colors.colorText;
      this.ctx.beginPath();

      var _iterator = sidebar_createForOfIteratorHelper(points),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          if (p[0] > this.layout.height) continue;
          var x1 = side === 'left' ? w - 0.5 : x - 0.5;
          var x2 = side === 'left' ? x1 - 4.5 : x1 + 4.5;
          this.ctx.moveTo(x1, p[0] - 0.5);
          this.ctx.lineTo(x2, p[0] - 0.5);
          var offst = side === 'left' ? -10 : 10;
          this.ctx.textAlign = side === 'left' ? 'end' : 'start';
          var d = this.layout.prec;
          this.ctx.fillText(p[1].toFixed(d), x1 + offst, p[0] + 4);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.ctx.stroke();
      if (this.$p.grid_id) this.upper_border();
      this.apply_shaders();
      if (this.$p.cursor.y && this.$p.cursor.y$) this.panel();
    }
  }, {
    key: "apply_shaders",
    value: function apply_shaders() {
      var _iterator2 = sidebar_createForOfIteratorHelper(this.$p.shaders),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var s = _step2.value;
          this.ctx.save();
          s.draw(this.ctx);
          this.ctx.restore();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "upper_border",
    value: function upper_border() {
      this.ctx.strokeStyle = this.$p.colors.colorScale;
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0.5);
      this.ctx.lineTo(this.layout.width, 0.5);
      this.ctx.stroke();
    } // A gray bar behind the current price

  }, {
    key: "panel",
    value: function panel() {
      if (this.$p.cursor.grid_id !== this.layout.id) {
        return;
      }

      var lbl = this.$p.cursor.y$.toFixed(this.layout.prec);
      this.ctx.fillStyle = this.$p.colors.colorPanel;
      var panwidth = this.layout.sb + 1;
      var x = -0.5;
      var y = this.$p.cursor.y - PANHEIGHT * 0.5 - 0.5;
      var a = 7;
      this.ctx.fillRect(x - 0.5, y, panwidth, PANHEIGHT);
      this.ctx.fillStyle = this.$p.colors.colorTextHL;
      this.ctx.textAlign = 'left';
      this.ctx.fillText(lbl, a, y + 15);
    }
  }, {
    key: "calc_zoom",
    value: function calc_zoom(event) {
      var d = this.drug.y - event.center.y;
      var speed = d > 0 ? 3 : 1;
      var k = 1 + speed * d / this.layout.height;
      return utils.clamp(this.drug.z * k, 0.005, 100);
    } // Not the best place to calculate y-range but
    // this is the simplest solution I found up to
    // date

  }, {
    key: "calc_range",
    value: function calc_range(diff1, diff2) {
      var _this2 = this;

      if (diff1 === void 0) {
        diff1 = 1;
      }

      if (diff2 === void 0) {
        diff2 = 1;
      }

      var z = this.zoom / this.drug.z;
      var zk = (1 / z - 1) / 2;
      var range = this.y_range.slice();
      var delta = range[0] - range[1];

      if (!this.layout.grid.logScale) {
        range[0] = range[0] + delta * zk * diff1;
        range[1] = range[1] - delta * zk * diff2;
      } else {
        var px_mid = this.layout.height / 2;
        var new_hi = px_mid - px_mid * (1 / z);
        var new_lo = px_mid + px_mid * (1 / z); // Use old mapping to get a new range

        var f = function f(y) {
          return math.exp((y - _this2.drug.B) / _this2.drug.A);
        };

        var copy = range.slice();
        range[0] = f(new_hi);
        range[1] = f(new_lo);
      }

      return range;
    }
  }, {
    key: "rezoom_range",
    value: function rezoom_range(delta, diff1, diff2) {
      if (!this.$p.y_transform || this.$p.y_transform.auto) return;
      this.zoom = 1.0; // TODO: further work (improve scaling ratio)

      if (delta < 0) delta /= 3.75; // Btw, idk why 3.75, but it works

      delta *= 0.25;
      this.y_range = [this.layout.$_hi, this.layout.$_lo];
      this.drug = {
        y: 0,
        z: this.zoom,
        mid: math.log_mid(this.y_range, this.layout.height),
        A: this.layout.A,
        B: this.layout.B
      };
      this.zoom = this.calc_zoom({
        center: {
          y: delta * this.layout.height
        }
      });
      this.comp.$emit('sidebar-transform', {
        grid_id: this.id,
        zoom: this.zoom,
        auto: false,
        range: this.calc_range(diff1, diff2),
        drugging: true
      });
      this.drug = null;
      this.comp.$emit('sidebar-transform', {
        grid_id: this.id,
        drugging: false
      });
    }
  }, {
    key: "mousemove",
    value: function mousemove() {}
  }, {
    key: "mouseout",
    value: function mouseout() {}
  }, {
    key: "mouseup",
    value: function mouseup() {}
  }, {
    key: "mousedown",
    value: function mousedown() {}
  }]);

  return Sidebar;
}();


// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Sidebar.vue?vue&type=script&lang=js&
// The side bar (yep, that thing with a bunch of $$$)


/* harmony default export */ var Sidebarvue_type_script_lang_js_ = ({
  name: 'Sidebar',
  props: ['sub', 'layout', 'range', 'interval', 'cursor', 'colors', 'font', 'width', 'height', 'grid_id', 'rerender', 'y_transform', 'tv_id', 'config', 'shaders'],
  mixins: [mixins_canvas],
  mounted: function mounted() {
    var el = this.$refs['canvas'];
    this.renderer = new sidebar_Sidebar(el, this);
    this.setup();
    this.redraw();
  },
  render: function render(h) {
    var id = this.$props.grid_id;
    var layout = this.$props.layout.grids[id];
    return this.create_canvas(h, "sidebar-".concat(id), {
      position: {
        x: layout.width,
        y: layout.offset || 0
      },
      attrs: {
        rerender: this.$props.rerender,
        width: this.$props.width,
        height: layout.height
      },
      style: {
        backgroundColor: this.$props.colors.colorBack
      }
    });
  },
  watch: {
    range: {
      handler: function handler() {
        this.redraw();
      },
      deep: true
    },
    cursor: {
      handler: function handler() {
        this.redraw();
      },
      deep: true
    },
    rerender: function rerender() {
      var _this = this;

      this.$nextTick(function () {
        return _this.redraw();
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Sidebar.vue
var Sidebar_render, Sidebar_staticRenderFns




/* normalize component */

var Sidebar_component = normalizeComponent(
  components_Sidebarvue_type_script_lang_js_,
  Sidebar_render,
  Sidebar_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Sidebar_api; }
Sidebar_component.options.__file = "src/components/Sidebar.vue"
/* harmony default export */ var components_Sidebar = (Sidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Legend.vue?vue&type=template&id=34724886&
var Legendvue_type_template_id_34724886_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "trading-vue-legend", style: _vm.calc_style },
    [
      _vm.grid_id === 0
        ? _c(
            "div",
            {
              staticClass: "trading-vue-ohlcv",
              style: { "max-width": _vm.common.width + "px" }
            },
            [
              _c(
                "span",
                {
                  staticClass: "t-vue-title",
                  style: { color: _vm.common.colors.colorTitle }
                },
                [
                  _vm._v(
                    "\n              " +
                      _vm._s(_vm.common.title_txt) +
                      "\n        "
                  )
                ]
              ),
              _vm._v("\n        O"),
              _c("span", { staticClass: "t-vue-lspan" }, [
                _vm._v(_vm._s(_vm.ohlcv[0]))
              ]),
              _vm._v("\n        H"),
              _c("span", { staticClass: "t-vue-lspan" }, [
                _vm._v(_vm._s(_vm.ohlcv[1]))
              ]),
              _vm._v("\n        L"),
              _c("span", { staticClass: "t-vue-lspan" }, [
                _vm._v(_vm._s(_vm.ohlcv[2]))
              ]),
              _vm._v("\n        C"),
              _c("span", { staticClass: "t-vue-lspan" }, [
                _vm._v(_vm._s(_vm.ohlcv[3]))
              ]),
              _vm._v("\n        V"),
              _c("span", { staticClass: "t-vue-lspan" }, [
                _vm._v(_vm._s(_vm.ohlcv[4]))
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._l(this.indicators, function(ind) {
        return _c(
          "div",
          { staticClass: "t-vue-ind" },
          [
            _c("span", { staticClass: "t-vue-iname" }, [
              _vm._v(_vm._s(ind.name))
            ]),
            _vm._v(" "),
            _c("button-group", {
              attrs: {
                buttons: _vm.common.buttons,
                ov_id: ind.id,
                grid_id: _vm.grid_id,
                index: ind.index,
                tv_id: _vm.common.tv_id,
                display: ind.v
              },
              on: { "legend-button-click": _vm.button_click }
            }),
            _vm._v(" "),
            ind.v
              ? _c(
                  "span",
                  { staticClass: "t-vue-ivalues" },
                  _vm._l(ind.values, function(v) {
                    return _c(
                      "span",
                      {
                        staticClass: "t-vue-lspan t-vue-ivalue",
                        style: { color: v.color }
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(v.value) +
                            "\n            "
                        )
                      ]
                    )
                  }),
                  0
                )
              : _vm._e(),
            _vm._v(" "),
            ind.unk
              ? _c("span", { staticClass: "t-vue-unknown" }, [
                  _vm._v("\n            (Unknown type)\n        ")
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "transition",
              { attrs: { name: "tvjs-appear" } },
              [
                ind.loading
                  ? _c("spinner", { attrs: { colors: _vm.common.colors } })
                  : _vm._e()
              ],
              1
            )
          ],
          1
        )
      })
    ],
    2
  )
}
var Legendvue_type_template_id_34724886_staticRenderFns = []
Legendvue_type_template_id_34724886_render._withStripped = true


// CONCATENATED MODULE: ./src/components/Legend.vue?vue&type=template&id=34724886&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ButtonGroup.vue?vue&type=template&id=6f826426&
var ButtonGroupvue_type_template_id_6f826426_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    { staticClass: "t-vue-lbtn-grp" },
    _vm._l(_vm.buttons, function(b, i) {
      return _c("legend-button", {
        key: i,
        attrs: {
          id: b,
          tv_id: _vm.tv_id,
          ov_id: _vm.ov_id,
          grid_id: _vm.grid_id,
          index: _vm.index,
          display: _vm.display
        },
        on: { "legend-button-click": _vm.button_click }
      })
    }),
    1
  )
}
var ButtonGroupvue_type_template_id_6f826426_staticRenderFns = []
ButtonGroupvue_type_template_id_6f826426_render._withStripped = true


// CONCATENATED MODULE: ./src/components/ButtonGroup.vue?vue&type=template&id=6f826426&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LegendButton.vue?vue&type=template&id=1ad87362&
var LegendButtonvue_type_template_id_1ad87362_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("img", {
    staticClass: "t-vue-lbtn",
    attrs: { src: _vm.base64, id: _vm.uuid },
    on: { click: _vm.onclick }
  })
}
var LegendButtonvue_type_template_id_1ad87362_staticRenderFns = []
LegendButtonvue_type_template_id_1ad87362_render._withStripped = true


// CONCATENATED MODULE: ./src/components/LegendButton.vue?vue&type=template&id=1ad87362&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LegendButton.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var LegendButtonvue_type_script_lang_js_ = ({
  name: 'LegendButton',
  props: ['id', 'tv_id', 'grid_id', 'ov_id', 'index', 'display'],
  mounted: function mounted() {},
  computed: {
    base64: function base64() {
      return icons[this.file_name];
    },
    file_name: function file_name() {
      var id = this.$props.id;

      if (this.$props.id === 'display') {
        id = this.$props.display ? 'display_on' : 'display_off';
      }

      return id + '.png';
    },
    uuid: function uuid() {
      var tv = this.$props.tv_id;
      var gr = this.$props.grid_id;
      var ov = this.$props.ov_id;
      return "".concat(tv, "-btn-g").concat(gr, "-").concat(ov);
    },
    data_type: function data_type() {
      return this.$props.grid_id === 0 ? "onchart" : "offchart";
    },
    data_index: function data_index() {
      return this.$props.index;
    }
  },
  methods: {
    onclick: function onclick() {
      this.$emit('legend-button-click', {
        button: this.$props.id,
        type: this.data_type,
        dataIndex: this.data_index,
        grid: this.$props.grid_id,
        overlay: this.$props.ov_id
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/LegendButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LegendButtonvue_type_script_lang_js_ = (LegendButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/LegendButton.vue?vue&type=style&index=0&lang=css&
var LegendButtonvue_type_style_index_0_lang_css_ = __webpack_require__(46);

// CONCATENATED MODULE: ./src/components/LegendButton.vue






/* normalize component */

var LegendButton_component = normalizeComponent(
  components_LegendButtonvue_type_script_lang_js_,
  LegendButtonvue_type_template_id_1ad87362_render,
  LegendButtonvue_type_template_id_1ad87362_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var LegendButton_api; }
LegendButton_component.options.__file = "src/components/LegendButton.vue"
/* harmony default export */ var LegendButton = (LegendButton_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ButtonGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ButtonGroupvue_type_script_lang_js_ = ({
  name: 'ButtonGroup',
  props: ['buttons', 'tv_id', 'ov_id', 'grid_id', 'index', 'display'],
  components: {
    LegendButton: LegendButton
  },
  methods: {
    button_click: function button_click(event) {
      this.$emit('legend-button-click', event);
    }
  }
});
// CONCATENATED MODULE: ./src/components/ButtonGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ButtonGroupvue_type_script_lang_js_ = (ButtonGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ButtonGroup.vue?vue&type=style&index=0&lang=css&
var ButtonGroupvue_type_style_index_0_lang_css_ = __webpack_require__(48);

// CONCATENATED MODULE: ./src/components/ButtonGroup.vue






/* normalize component */

var ButtonGroup_component = normalizeComponent(
  components_ButtonGroupvue_type_script_lang_js_,
  ButtonGroupvue_type_template_id_6f826426_render,
  ButtonGroupvue_type_template_id_6f826426_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var ButtonGroup_api; }
ButtonGroup_component.options.__file = "src/components/ButtonGroup.vue"
/* harmony default export */ var ButtonGroup = (ButtonGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Spinner.vue?vue&type=template&id=39432f99&
var Spinnervue_type_template_id_39432f99_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tvjs-spinner" },
    _vm._l(4, function(i) {
      return _c("div", { style: { background: _vm.colors.colorText } })
    }),
    0
  )
}
var Spinnervue_type_template_id_39432f99_staticRenderFns = []
Spinnervue_type_template_id_39432f99_render._withStripped = true


// CONCATENATED MODULE: ./src/components/Spinner.vue?vue&type=template&id=39432f99&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Spinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var Spinnervue_type_script_lang_js_ = ({
  name: 'Spinner',
  props: ['colors']
});
// CONCATENATED MODULE: ./src/components/Spinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Spinnervue_type_script_lang_js_ = (Spinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Spinner.vue?vue&type=style&index=0&lang=css&
var Spinnervue_type_style_index_0_lang_css_ = __webpack_require__(50);

// CONCATENATED MODULE: ./src/components/Spinner.vue






/* normalize component */

var Spinner_component = normalizeComponent(
  components_Spinnervue_type_script_lang_js_,
  Spinnervue_type_template_id_39432f99_render,
  Spinnervue_type_template_id_39432f99_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Spinner_api; }
Spinner_component.options.__file = "src/components/Spinner.vue"
/* harmony default export */ var Spinner = (Spinner_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Legend.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Legendvue_type_script_lang_js_ = ({
  name: 'ChartLegend',
  props: ['common', 'values', 'grid_id', 'meta_props'],
  components: {
    ButtonGroup: ButtonGroup,
    Spinner: Spinner
  },
  computed: {
    ohlcv: function ohlcv() {
      if (!this.$props.values || !this.$props.values.ohlcv) {
        return Array(6).fill('n/a');
      }

      var prec = this.layout.prec;
      return [this.$props.values.ohlcv[1].toFixed(prec), this.$props.values.ohlcv[2].toFixed(prec), this.$props.values.ohlcv[3].toFixed(prec), this.$props.values.ohlcv[4].toFixed(prec), this.$props.values.ohlcv[5] ? this.$props.values.ohlcv[5].toFixed(2) : 'n/a'];
    },
    // TODO: add support for { grid: { id : N }}
    indicators: function indicators() {
      var _this = this;

      var values = this.$props.values;
      var f = this.format;
      var types = {};
      return this.json_data.filter(function (x) {
        return x.settings.legend !== false && !x.main;
      }).map(function (x) {
        if (!(x.type in types)) types[x.type] = 0;
        var id = x.type + "_".concat(types[x.type]++);
        return {
          v: 'display' in x.settings ? x.settings.display : true,
          name: x.name || id,
          index: (_this.off_data || _this.json_data).indexOf(x),
          id: id,
          values: values ? f(id, values) : _this.n_a(1),
          unk: !(id in (_this.$props.meta_props || {})),
          loading: x.loading
        };
      });
    },
    calc_style: function calc_style() {
      var top = this.layout.height > 150 ? 10 : 5;
      var grids = this.$props.common.layout.grids;
      var w = grids[0] ? grids[0].width : undefined;
      return {
        top: "".concat(this.layout.offset + top, "px"),
        width: "".concat(w - 20, "px")
      };
    },
    layout: function layout() {
      var id = this.$props.grid_id;
      return this.$props.common.layout.grids[id];
    },
    json_data: function json_data() {
      return this.$props.common.data;
    },
    off_data: function off_data() {
      return this.$props.common.offchart;
    }
  },
  methods: {
    format: function format(id, values) {
      var meta = this.$props.meta_props[id] || {}; // Matches Overlay.data_colors with the data values
      // (see Spline.vue)

      if (!values[id]) return this.n_a(1); // Custom formatter

      if (meta.legend) return meta.legend(values[id]);
      return values[id].slice(1).map(function (x, i) {
        var cs = meta.data_colors ? meta.data_colors() : [];

        if (typeof x == 'number') {
          // Show 8 digits for small values
          x = x.toFixed(Math.abs(x) > 0.001 ? 4 : 8);
        }

        return {
          value: x,
          color: cs ? cs[i % cs.length] : undefined
        };
      });
    },
    n_a: function n_a(len) {
      return Array(len).fill({
        value: 'n/a'
      });
    },
    button_click: function button_click(event) {
      this.$emit('legend-button-click', event);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Legend.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Legendvue_type_script_lang_js_ = (Legendvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Legend.vue?vue&type=style&index=0&lang=css&
var Legendvue_type_style_index_0_lang_css_ = __webpack_require__(52);

// CONCATENATED MODULE: ./src/components/Legend.vue






/* normalize component */

var Legend_component = normalizeComponent(
  components_Legendvue_type_script_lang_js_,
  Legendvue_type_template_id_34724886_render,
  Legendvue_type_template_id_34724886_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Legend_api; }
Legend_component.options.__file = "src/components/Legend.vue"
/* harmony default export */ var Legend = (Legend_component.exports);
// CONCATENATED MODULE: ./src/mixins/shaders.js
// Parser for shader events
/* harmony default export */ var shaders = ({
  methods: {
    on_shader_event: function on_shader_event(d, target) {
      if (d.event === 'new-shader') {
        if (d.args[0].target === target) {
          d.args[0].id = "".concat(d.args[1], "-").concat(d.args[2]);
          this.shaders.push(d.args[0]);
          this.rerender++;
        }
      }

      if (d.event === 'remove-shaders') {
        var id = d.args.join('-');
        this.shaders = this.shaders.filter(function (x) {
          return x.id !== id;
        });
      }
    }
  },
  data: function data() {
    return {
      shaders: []
    };
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Section.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Sectionvue_type_script_lang_js_ = ({
  name: 'GridSection',
  props: ['common', 'grid_id'],
  mixins: [shaders],
  components: {
    Grid: components_Grid,
    Sidebar: components_Sidebar,
    ChartLegend: Legend
  },
  methods: {
    range_changed: function range_changed(r) {
      this.$emit('range-changed', r);
    },
    cursor_changed: function cursor_changed(c) {
      c.grid_id = this.$props.grid_id;
      this.$emit('cursor-changed', c);
    },
    cursor_locked: function cursor_locked(state) {
      this.$emit('cursor-locked', state);
    },
    sidebar_transform: function sidebar_transform(s) {
      this.$emit('sidebar-transform', s);
    },
    emit_meta_props: function emit_meta_props(d) {
      this.$set(this.meta_props, d.layer_id, d);
      this.$emit('layer-meta-props', d);
    },
    emit_custom_event: function emit_custom_event(d) {
      this.on_shader_event(d, 'sidebar');
      this.$emit('custom-event', d);
    },
    button_click: function button_click(event) {
      this.$emit('legend-button-click', event);
    },
    register_kb: function register_kb(event) {
      this.$emit('register-kb-listener', event);
    },
    remove_kb: function remove_kb(event) {
      this.$emit('remove-kb-listener', event);
    },
    rezoom_range: function rezoom_range(event) {
      var id = 'grid-' + event.grid_id;

      if (this.$refs[id]) {
        this.$refs[id].renderer.rezoom_range(event.z, event.diff1, event.diff2);
      }
    }
  },
  computed: {
    // Component-specific props subsets:
    grid_props: function grid_props() {
      var id = this.$props.grid_id;
      var p = Object.assign({}, this.$props.common); // Split offchart data between offchart grids

      if (id > 0) {
        var _p$data;

        var all = p.data;
        p.data = [p.data[id - 1]]; // Merge offchart overlays with custom ids with
        // the existing onse (by comparing the grid ids)

        (_p$data = p.data).push.apply(_p$data, toConsumableArray_default()(all.filter(function (x) {
          return x.grid && x.grid.id === id;
        })));
      }

      p.width = p.layout.grids[id].width;
      p.height = p.layout.grids[id].height;
      p.y_transform = p.y_ts[id];
      return p;
    },
    sidebar_props: function sidebar_props() {
      var id = this.$props.grid_id;
      var p = Object.assign({}, this.$props.common);
      p.width = p.layout.grids[id].sb;
      p.height = p.layout.grids[id].height;
      p.y_transform = p.y_ts[id];
      return p;
    },
    section_values: function section_values() {
      var id = this.$props.grid_id;
      var p = Object.assign({}, this.$props.common);
      p.width = p.layout.grids[id].width;
      return p.cursor.values[id];
    },
    legend_props: function legend_props() {
      var id = this.$props.grid_id;
      var p = Object.assign({}, this.$props.common); // Split offchart data between offchart grids

      if (id > 0) {
        var _p$data2;

        var all = p.data;
        p.offchart = all;
        p.data = [p.data[id - 1]];

        (_p$data2 = p.data).push.apply(_p$data2, toConsumableArray_default()(all.filter(function (x) {
          return x.grid && x.grid.id === id;
        })));
      }

      return p;
    },
    get_meta_props: function get_meta_props() {
      return this.meta_props;
    }
  },
  watch: {
    common: {
      handler: function handler(val, old_val) {
        if (val.data.length !== old_val.data.length) {
          // Look at this nasty trick!
          this.rerender++;
        }
      },
      deep: true
    }
  },
  data: function data() {
    return {
      meta_props: {},
      shaders: [],
      rerender: 0
    };
  }
});
// CONCATENATED MODULE: ./src/components/Section.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Sectionvue_type_script_lang_js_ = (Sectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Section.vue?vue&type=style&index=0&lang=css&
var Sectionvue_type_style_index_0_lang_css_ = __webpack_require__(54);

// CONCATENATED MODULE: ./src/components/Section.vue






/* normalize component */

var Section_component = normalizeComponent(
  components_Sectionvue_type_script_lang_js_,
  Sectionvue_type_template_id_8fbe9336_render,
  Sectionvue_type_template_id_8fbe9336_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Section_api; }
Section_component.options.__file = "src/components/Section.vue"
/* harmony default export */ var Section = (Section_component.exports);
// CONCATENATED MODULE: ./src/components/js/botbar.js



function botbar_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = botbar_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function botbar_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return botbar_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return botbar_arrayLikeToArray(o, minLen); }

function botbar_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var botbar_MINUTE15 = constants.MINUTE15,
    botbar_MINUTE = constants.MINUTE,
    botbar_HOUR = constants.HOUR,
    botbar_DAY = constants.DAY,
    botbar_WEEK = constants.WEEK,
    botbar_MONTH = constants.MONTH,
    botbar_YEAR = constants.YEAR,
    botbar_MONTHMAP = constants.MONTHMAP;

var botbar_Botbar = /*#__PURE__*/function () {
  function Botbar(canvas, comp) {
    classCallCheck_default()(this, Botbar);

    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.comp = comp;
    this.$p = comp.$props;
    this.data = this.$p.sub;
    this.range = this.$p.range;
    this.layout = this.$p.layout;
  }

  createClass_default()(Botbar, [{
    key: "update",
    value: function update() {
      this.grid_0 = this.layout.grids[0];
      var width = this.layout.botbar.width;
      var height = this.layout.botbar.height;
      var sb = this.layout.grids[0].sb;
      this.ctx.fillStyle = this.$p.colors.colorBack;
      this.ctx.font = this.$p.font;
      this.ctx.fillRect(0, 0, width, height);
      this.ctx.strokeStyle = this.$p.colors.colorScale;
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0.5);
      this.ctx.lineTo(Math.floor(width + 1), 0.5);
      this.ctx.stroke();
      this.ctx.fillStyle = this.$p.colors.colorText;
      this.ctx.beginPath();

      var _iterator = botbar_createForOfIteratorHelper(this.layout.botbar.xs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          var lbl = this.format_date(p);
          if (p[0] > width - sb) continue;
          this.ctx.moveTo(p[0] - 0.5, 0);
          this.ctx.lineTo(p[0] - 0.5, 4.5);

          if (!this.lbl_highlight(p[1][0])) {
            this.ctx.globalAlpha = 0.85;
          }

          this.ctx.textAlign = 'center';
          this.ctx.fillText(lbl, p[0], 18);
          this.ctx.globalAlpha = 1;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.ctx.stroke();
      this.apply_shaders();
      if (this.$p.cursor.x && this.$p.cursor.t !== undefined) this.panel();
    }
  }, {
    key: "apply_shaders",
    value: function apply_shaders() {
      var _iterator2 = botbar_createForOfIteratorHelper(this.$p.shaders),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var s = _step2.value;
          this.ctx.save();
          s.draw(this.ctx);
          this.ctx.restore();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "panel",
    value: function panel() {
      var lbl = this.format_cursor_x();
      this.ctx.fillStyle = this.$p.colors.colorPanel;
      var measure = this.ctx.measureText(lbl + '    ');
      var panwidth = Math.floor(measure.width);
      var cursor = this.$p.cursor.x;
      var x = Math.floor(cursor - panwidth * 0.5);
      var y = -0.5;
      var panheight = this.comp.config.PANHEIGHT;
      this.ctx.fillRect(x, y, panwidth, panheight + 0.5);
      this.ctx.fillStyle = this.$p.colors.colorTextHL;
      this.ctx.textAlign = 'center';
      this.ctx.fillText(lbl, cursor, y + 16);
    } // TODO: implement time zones

  }, {
    key: "format_date",
    value: function format_date(p) {
      var t = p[1][0];
      t = this.grid_0.ti_map.i2t(t); //t += new Date(t).getTimezoneOffset() * MINUTE

      var d = new Date(t);

      if (p[2] === botbar_YEAR || utils.year_start(t) === t) {
        return d.getUTCFullYear();
      }

      if (p[2] === botbar_MONTH || utils.month_start(t) === t) {
        return botbar_MONTHMAP[d.getUTCMonth()];
      }

      if (utils.day_start(t) === t) return d.getDate();
      var h = utils.add_zero(d.getUTCHours());
      var m = utils.add_zero(d.getUTCMinutes());
      return h + ":" + m;
    }
  }, {
    key: "format_cursor_x",
    value: function format_cursor_x() {
      var t = this.$p.cursor.t;
      t = this.grid_0.ti_map.i2t(t);
      var ti = this.$p.interval; //t += new Date(t).getTimezoneOffset() * MINUTE

      var d = new Date(t);

      if (ti === botbar_YEAR) {
        return d.getUTCFullYear();
      }

      if (ti < botbar_YEAR) {
        var yr = '`' + "".concat(d.getUTCFullYear()).slice(-2);
        var mo = botbar_MONTHMAP[d.getUTCMonth()];
        var dd = '01';
      }

      if (ti <= botbar_WEEK) dd = d.getUTCDate();
      var date = "".concat(dd, " ").concat(mo, " ").concat(yr);
      var time = '';

      if (ti < botbar_DAY) {
        var h = utils.add_zero(d.getUTCHours());
        var m = utils.add_zero(d.getUTCMinutes());
        time = h + ":" + m;
      }

      return "".concat(date, "  ").concat(time);
    } // Highlights the begining of a time interval
    // TODO: improve. Problem: let's say we have a new month,
    // but if there is no grid line in place, there
    // will be no month name on t-axis. Sad.
    // Solution: manipulate the grid, skew it, you know

  }, {
    key: "lbl_highlight",
    value: function lbl_highlight(t) {
      var ti = this.$p.interval;
      if (t === 0) return true;
      if (utils.month_start(t) === t) return true;
      if (utils.day_start(t) === t) return true;
      if (ti <= botbar_MINUTE15 && t % botbar_HOUR === 0) return true;
      return false;
    }
  }, {
    key: "mousemove",
    value: function mousemove() {}
  }, {
    key: "mouseout",
    value: function mouseout() {}
  }, {
    key: "mouseup",
    value: function mouseup() {}
  }, {
    key: "mousedown",
    value: function mousedown() {}
  }]);

  return Botbar;
}();


// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Botbar.vue?vue&type=script&lang=js&
// The bottom bar (yep, that thing with a bunch of dates)


/* harmony default export */ var Botbarvue_type_script_lang_js_ = ({
  name: 'Botbar',
  props: ['sub', 'layout', 'range', 'interval', 'cursor', 'colors', 'font', 'width', 'height', 'rerender', 'tv_id', 'config', 'shaders'],
  mixins: [mixins_canvas],
  mounted: function mounted() {
    var el = this.$refs['canvas'];
    this.renderer = new botbar_Botbar(el, this);
    this.setup();
    this.redraw();
  },
  render: function render(h) {
    var sett = this.$props.layout.botbar;
    return this.create_canvas(h, 'botbar', {
      position: {
        x: 0,
        y: sett.offset || 0
      },
      attrs: {
        rerender: this.$props.rerender,
        width: sett.width,
        height: sett.height
      },
      style: {
        backgroundColor: this.$props.colors.colorBack
      }
    });
  },
  watch: {
    range: {
      handler: function handler() {
        this.redraw();
      },
      deep: true
    },
    cursor: {
      handler: function handler() {
        this.redraw();
      },
      deep: true
    },
    rerender: function rerender() {
      var _this = this;

      this.$nextTick(function () {
        return _this.redraw();
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Botbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Botbarvue_type_script_lang_js_ = (Botbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Botbar.vue?vue&type=style&index=0&lang=css&
var Botbarvue_type_style_index_0_lang_css_ = __webpack_require__(56);

// CONCATENATED MODULE: ./src/components/Botbar.vue
var Botbar_render, Botbar_staticRenderFns





/* normalize component */

var Botbar_component = normalizeComponent(
  components_Botbarvue_type_script_lang_js_,
  Botbar_render,
  Botbar_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Botbar_api; }
Botbar_component.options.__file = "src/components/Botbar.vue"
/* harmony default export */ var components_Botbar = (Botbar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Keyboard.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var Keyboardvue_type_script_lang_js_ = ({
  name: 'Keyboard',
  created: function created() {
    window.addEventListener('keydown', this.keydown);
    window.addEventListener('keyup', this.keyup);
    window.addEventListener('keypress', this.keypress);
    this._listeners = {};
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('keydown', this.keydown);
    window.removeEventListener('keyup', this.keyup);
    window.removeEventListener('keypress', this.keypress);
  },
  render: function render(h) {
    return h();
  },
  methods: {
    keydown: function keydown(event) {
      for (var id in this._listeners) {
        var l = this._listeners[id];

        if (l && l.keydown) {
          l.keydown(event);
        } else {
          console.warn("No 'keydown' listener for ".concat(id));
        }
      }
    },
    keyup: function keyup(event) {
      for (var id in this._listeners) {
        var l = this._listeners[id];

        if (l && l.keyup) {
          l.keyup(event);
        } else {
          console.warn("No 'keyup' listener for ".concat(id));
        }
      }
    },
    keypress: function keypress(event) {
      for (var id in this._listeners) {
        var l = this._listeners[id];

        if (l && l.keypress) {
          l.keypress(event);
        } else {
          console.warn("No 'keypress' listener for ".concat(id));
        }
      }
    },
    register: function register(listener) {
      this._listeners[listener.id] = listener;
    },
    remove: function remove(listener) {
      delete this._listeners[listener.id];
    }
  }
});
// CONCATENATED MODULE: ./src/components/Keyboard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Keyboardvue_type_script_lang_js_ = (Keyboardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Keyboard.vue
var Keyboard_render, Keyboard_staticRenderFns




/* normalize component */

var Keyboard_component = normalizeComponent(
  components_Keyboardvue_type_script_lang_js_,
  Keyboard_render,
  Keyboard_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Keyboard_api; }
Keyboard_component.options.__file = "src/components/Keyboard.vue"
/* harmony default export */ var Keyboard = (Keyboard_component.exports);
// CONCATENATED MODULE: ./src/mixins/datatrack.js
// Data tracker/watcher

/* harmony default export */ var datatrack = ({
  methods: {
    data_changed: function data_changed() {
      var n = this.ohlcv;
      var changed = false;

      if (this._data_n0 !== n[0] && this._data_len !== n.length) {
        changed = true;
      }

      this.check_all_data(changed);

      if (this.ti_map.ib) {
        this.reindex_delta(n[0], this._data_n0);
      }

      this._data_n0 = n[0];
      this._data_len = n.length;
      this.save_data_t();
      return changed;
    },
    check_all_data: function check_all_data(changed) {
      // If length of data in the Structure changed by > 1 point
      // emit a special event for DC to recalc the scripts
      // TODO: check overlays data too
      var len = this._data_len || 0;

      if (Math.abs(this.ohlcv.length - len) > 1 || this._data_n0 !== this.ohlcv[0]) {
        this.$emit('custom-event', {
          event: 'data-len-changed',
          args: []
        });
      }
    },
    reindex_delta: function reindex_delta(n, p) {
      n = n || [[0]];
      p = p || [[0]];
      var dt = n[0] - p[0];

      if (dt !== 0 && this._data_t) {
        // Convert t back to index
        try {
          // More precise method first
          var nt = this._data_t + 0.01; // fix for the filter lib

          var res = utils.fast_nearest(this.ohlcv, nt);
          var cndl = this.ohlcv[res[0]];
          var off = (nt - cndl[0]) / this.interval_ms;
          this["goto"](res[0] + off);
        } catch (e) {
          this["goto"](this.ti_map.t2i(this._data_t));
        }
      }
    },
    save_data_t: function save_data_t() {
      this._data_t = this.ti_map.i2t(this.range[1]); // save as t
    }
  },
  data: function data() {
    return {
      _data_n0: null,
      _data_len: 0,
      _data_t: 0
    };
  }
});
// CONCATENATED MODULE: ./src/components/js/ti_mapping.js



// Time-index mapping (for non-linear t-axis)

var MAX_ARR = Math.pow(2, 32); // 3 MODES of index calculation for overlays/subcharts:
// ::: indexSrc :::
// * "map"      -> use TI mapping functions to detect index
//                 (slowest, for stocks only. DEFAULT)
//
// * "calc"     -> calculate shift between sub & data
//                 (faster, but overlay data should be perfectly
//                  align with the main chart,
//                  1-1 candle/data point. Supports Renko)
//
// * "data"     -> overlay data should come with candle index
//                 (fastest, supports Renko)

var ti_mapping_TI = /*#__PURE__*/function () {
  function TI() {
    classCallCheck_default()(this, TI);

    this.ib = false;
  }

  createClass_default()(TI, [{
    key: "init",
    value: function init(params, res) {
      var sub = params.sub,
          interval = params.interval,
          meta = params.meta,
          $p = params.$props,
          interval_ms = params.interval_ms,
          sub_start = params.sub_start,
          ib = params.ib;
      this.ti_map = [];
      this.it_map = [];
      this.sub_i = [];
      this.ib = ib;
      this.sub = res;
      this.ss = sub_start;
      this.tf = interval_ms;
      var start = meta.sub_start; // Skip mapping for the regular mode

      if (this.ib) {
        this.map_sub(res);
      }
    } // Make maps for the main subset

  }, {
    key: "map_sub",
    value: function map_sub(res) {
      for (var i = 0; i < res.length; i++) {
        var t = res[i][0];

        var _i = this.ss + i;

        this.ti_map[t] = _i;
        this.it_map[_i] = t; // Overwrite t with i

        var copy = toConsumableArray_default()(res[i]);

        copy[0] = _i;
        this.sub_i.push(copy);
      }
    } // Map overlay data
    // TODO: parse() called 3 times instead of 2 for 'spx_sample.json'

  }, {
    key: "parse",
    value: function parse(data, mode) {
      if (!this.ib || !this.sub[0] || mode === 'data') return data;
      var res = [];
      var k = 0; // Candlestick index

      if (mode === 'calc') {
        var shift = utils.index_shift(this.sub, data);

        for (var i = 0; i < data.length; i++) {
          var _i = this.ss + i;

          var copy = toConsumableArray_default()(data[i]);

          copy[0] = _i + shift;
          res.push(copy);
        }

        return res;
      } // If indicator data starts after ohlcv, calc the first index


      if (data.length) {
        try {
          var k1 = utils.fast_nearest(this.sub, data[0][0])[0];
          if (k1 !== null && k1 >= 0) k = k1;
        } catch (e) {}
      }

      var t0 = this.sub[0][0];
      var tN = this.sub[this.sub.length - 1][0];

      for (var i = 0; i < data.length; i++) {
        var _copy = toConsumableArray_default()(data[i]);

        var tk = this.sub[k][0];
        var t = data[i][0];
        var index = this.ti_map[t];

        if (index === undefined) {
          // Linear extrapolation
          if (t < t0 || t > tN) {
            index = this.ss + k - (tk - t) / this.tf;
            t = data[i + 1] ? data[i + 1][0] : undefined;
          } // Linear interpolation
          else {
              var tk2 = this.sub[k + 1][0];
              index = tk === tk2 ? this.ss + k : this.ss + k + (t - tk) / (tk2 - tk);
              t = data[i + 1] ? data[i + 1][0] : undefined;
            }
        } // Race of data points & sub points (ohlcv)
        // (like turn based increments)


        while (k + 1 < this.sub.length - 1 && t > this.sub[k + 1][0]) {
          k++;
          tk = this.sub[k][0];
        }

        _copy[0] = index;
        res.push(_copy);
      }

      return res;
    } // index => time

  }, {
    key: "i2t",
    value: function i2t(i) {
      if (!this.ib || !this.sub.length) return i; // Regular mode
      // Discrete mapping

      var res = this.it_map[i];
      if (res !== undefined) return res; // Linear extrapolation
      else if (i >= this.ss + this.sub_i.length) {
          var di = i - (this.ss + this.sub_i.length) + 1;
          var last = this.sub[this.sub.length - 1];
          return last[0] + di * this.tf;
        } else if (i < this.ss) {
          var _di = i - this.ss;

          return this.sub[0][0] + _di * this.tf;
        } // Linear Interpolation

      var i1 = Math.floor(i) - this.ss;
      var i2 = i1 + 1;
      var len = this.sub.length;
      if (i2 >= len) i2 = len - 1;
      var sub1 = this.sub[i1];
      var sub2 = this.sub[i2];

      if (sub1 && sub2) {
        var t1 = sub1[0];
        var t2 = sub2[0];
        return t1 + (t2 - t1) * (i - i1 - this.ss);
      }

      return undefined;
    } // Map or bypass depending on the mode

  }, {
    key: "i2t_mode",
    value: function i2t_mode(i, mode) {
      return mode === 'data' ? i : this.i2t(i);
    } // time => index
    // TODO: when switch from IB mode to regular tools
    // disappear (bc there is no more mapping)

  }, {
    key: "t2i",
    value: function t2i(t) {
      if (!this.sub.length) return undefined; // Discrete mapping

      var res = this.ti_map[t];
      if (res !== undefined) return res;
      var t0 = this.sub[0][0];
      var tN = this.sub[this.sub.length - 1][0]; // Linear extrapolation

      if (t < t0) {
        return this.ss - (t0 - t) / this.tf;
      } else if (t > tN) {
        var k = this.sub.length - 1;
        return this.ss + k - (tN - t) / this.tf;
      }

      try {
        // Linear Interpolation
        var i = utils.fast_nearest(this.sub, t);
        var tk = this.sub[i[0]][0];
        var tk2 = this.sub[i[1]][0];

        var _k = (t - tk) / (tk2 - tk);

        return this.ss + i[0] + _k * (i[1] - i[0]);
      } catch (e) {}

      return undefined;
    } // Auto detect: is it time or index?
    // Assuming that index-based mode is ON

  }, {
    key: "smth2i",
    value: function smth2i(smth) {
      if (smth > MAX_ARR) {
        return this.t2i(smth); // it was time
      } else {
          return smth; // it was an index
        }
    }
  }]);

  return TI;
}();


// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











/* harmony default export */ var Chartvue_type_script_lang_js_ = ({
  name: 'Chart',
  props: ['title_txt', 'data', 'width', 'height', 'font', 'colors', 'overlays', 'tv_id', 'config', 'buttons', 'toolbar', 'ib'],
  mixins: [shaders, datatrack],
  components: {
    GridSection: Section,
    Botbar: components_Botbar,
    Keyboard: Keyboard
  },
  created: function created() {
    // Context for text measurements
    this.ctx = new context(this.$props); // Initial layout (All measurments for the chart)

    this.init_range();
    this.sub = this.subset();
    utils.overwrite(this.range, this.range); // Fix for IB mode

    this._layout = new js_layout(this); // Updates current cursor values

    this.updater = new updater(this);
    this.update_last_candle();

    if (this.$props.ib && !this.chart.tf) {
      console.warn(constants.IB_TF_WARN);
    }
  },
  methods: {
    range_changed: function range_changed(r) {
      // Overwite & keep the original references
      // Quick fix for IB mode (switch 2 next lines)
      // TODO: wtf?
      var sub = this.subset(r);
      utils.overwrite(this.range, r);
      utils.overwrite(this.sub, sub);
      this.update_layout();
      this.$emit('range-changed', r);
      if (this.$props.ib) this.save_data_t();
    },
    "goto": function goto(t) {
      var dt = this.range[1] - this.range[0];
      this.range_changed([t - dt, t]);
    },
    setRange: function setRange(t1, t2) {
      this.range_changed([t1, t2]);
    },
    cursor_changed: function cursor_changed(e) {
      this.updater.sync(e);
    },
    cursor_locked: function cursor_locked(state) {
      if (this.cursor.scroll_lock && state) return;
      this.cursor.locked = state;
    },
    calc_interval: function calc_interval() {
      if (this.ohlcv.length < 2) return;
      var tf = utils.parse_tf(this.chart.tf);
      this.interval_ms = tf || utils.detect_interval(this.ohlcv);
      this.interval = this.$props.ib ? 1 : this.interval_ms;
    },
    set_ytransform: function set_ytransform(s) {
      var obj = this.y_transforms[s.grid_id] || {};
      Object.assign(obj, s);
      this.$set(this.y_transforms, s.grid_id, obj);
      this.update_layout();
      utils.overwrite(this.range, this.range);
    },
    default_range: function default_range() {
      var dl = this.$props.config.DEFAULT_LEN;
      var ml = this.$props.config.MINIMUM_LEN + 0.5;
      var l = this.ohlcv.length - 1;
      if (this.ohlcv.length < 2) return;

      if (this.ohlcv.length <= dl) {
        var s = 0,
            d = ml;
      } else {
        s = l - dl, d = 0.5;
      }

      if (!this.$props.ib) {
        utils.overwrite(this.range, [this.ohlcv[s][0] - this.interval * d, this.ohlcv[l][0] + this.interval * ml]);
      } else {
        utils.overwrite(this.range, [s - this.interval * d, l + this.interval * ml]);
      }
    },
    subset: function subset(range) {
      if (range === void 0) {
        range = this.range;
      }

      var _this$filter = this.filter(this.ohlcv, range[0] - this.interval, range[1]),
          _this$filter2 = slicedToArray_default()(_this$filter, 2),
          res = _this$filter2[0],
          index = _this$filter2[1];

      this.ti_map = new ti_mapping_TI();

      if (res) {
        this.sub_start = index;
        this.ti_map.init(this, res);
        if (!this.$props.ib) return res || [];
        return this.ti_map.sub_i;
      }

      return [];
    },
    common_props: function common_props() {
      return {
        title_txt: this.chart.name || this.$props.title_txt,
        layout: this._layout,
        sub: this.sub,
        range: this.range,
        interval: this.interval,
        cursor: this.cursor,
        colors: this.$props.colors,
        font: this.$props.font,
        y_ts: this.y_transforms,
        tv_id: this.$props.tv_id,
        config: this.$props.config,
        buttons: this.$props.buttons,
        meta: this.meta
      };
    },
    overlay_subset: function overlay_subset(source) {
      var _this = this;

      return source.map(function (d) {
        return {
          type: d.type,
          name: d.name,
          data: _this.ti_map.parse(utils.fast_filter(d.data, _this.ti_map.i2t_mode(_this.range[0] - _this.interval, d.indexSrc), _this.ti_map.i2t_mode(_this.range[1], d.indexSrc))[0] || [], d.indexSrc || 'map'),
          settings: d.settings || _this.settings_ov,
          grid: d.grid || {},
          tf: utils.parse_tf(d.tf),
          loading: d.loading
        };
      });
    },
    section_props: function section_props(i) {
      return i === 0 ? this.main_section : this.sub_section;
    },
    init_range: function init_range() {
      this.calc_interval();
      this.default_range();
    },
    layer_meta_props: function layer_meta_props(d) {
      // TODO: check reactivity when layout is changed
      if (!(d.grid_id in this.layers_meta)) {
        this.$set(this.layers_meta, d.grid_id, {});
      }

      this.$set(this.layers_meta[d.grid_id], d.layer_id, d); // Rerender

      this.update_layout();
    },
    remove_meta_props: function remove_meta_props(grid_id, layer_id) {
      if (grid_id in this.layers_meta) {
        this.$delete(this.layers_meta[grid_id], layer_id);
      }
    },
    emit_custom_event: function emit_custom_event(d) {
      this.on_shader_event(d, 'botbar');
      this.$emit('custom-event', d);

      if (d.event === 'remove-layer-meta') {
        this.remove_meta_props.apply(this, toConsumableArray_default()(d.args));
      }
    },
    update_layout: function update_layout(clac_tf) {
      if (clac_tf) this.calc_interval();
      var lay = new js_layout(this);
      utils.copy_layout(this._layout, lay);
    },
    legend_button_click: function legend_button_click(event) {
      this.$emit('legend-button-click', event);
    },
    register_kb: function register_kb(event) {
      if (!this.$refs.keyboard) return;
      this.$refs.keyboard.register(event);
    },
    remove_kb: function remove_kb(event) {
      if (!this.$refs.keyboard) return;
      this.$refs.keyboard.remove(event);
    },
    update_last_candle: function update_last_candle() {
      // TODO: add last values for all overlays
      this.last_candle = this.ohlcv ? this.ohlcv[this.ohlcv.length - 1] : undefined;
    }
  },
  computed: {
    // Component-specific props subsets:
    main_section: function main_section() {
      var p = Object.assign({}, this.common_props());
      p.data = this.overlay_subset(this.onchart);
      p.data.push({
        type: this.chart.type || 'Candles',
        main: true,
        data: this.sub,
        settings: this.chart.settings || this.settings_ohlcv,
        grid: this.chart.grid || {}
      });
      p.overlays = this.$props.overlays;
      return p;
    },
    sub_section: function sub_section() {
      var p = Object.assign({}, this.common_props());
      p.data = this.overlay_subset(this.offchart);
      p.overlays = this.$props.overlays;
      return p;
    },
    botbar_props: function botbar_props() {
      var p = Object.assign({}, this.common_props());
      p.width = p.layout.botbar.width;
      p.height = p.layout.botbar.height;
      p.rerender = this.rerender;
      return p;
    },
    offsub: function offsub() {
      return this.overlay_subset(this.offchart);
    },
    // Datasets: candles, onchart, offchart indicators
    ohlcv: function ohlcv() {
      return this.$props.data.ohlcv || this.chart.data || [];
    },
    chart: function chart() {
      return this.$props.data.chart || {
        grid: {}
      };
    },
    onchart: function onchart() {
      return this.$props.data.onchart || [];
    },
    offchart: function offchart() {
      return this.$props.data.offchart || [];
    },
    filter: function filter() {
      return this.$props.ib ? utils.fast_filter_i : utils.fast_filter;
    },
    styles: function styles() {
      var w = this.$props.toolbar ? this.$props.config.TOOLBAR : 0;
      return {
        'margin-left': "".concat(w, "px")
      };
    },
    meta: function meta() {
      return {
        last: this.last_candle,
        sub_start: this.sub_start
      };
    }
  },
  data: function data() {
    return {
      // Current data slice
      sub: [],
      // Time range
      range: [],
      // Candlestick interval
      interval: 0,
      // Crosshair states
      cursor: {
        x: null,
        y: null,
        t: null,
        y$: null,
        grid_id: null,
        locked: false,
        values: {},
        scroll_lock: false
      },
      // A trick to re-render botbar
      rerender: 0,
      // Layers meta-props (changing behaviour)
      layers_meta: {},
      // Y-transforms (for y-zoom and -shift)
      y_transforms: {},
      // Default OHLCV settings (when using DataStructure v1.0)
      settings_ohlcv: {},
      // Default overlay settings
      settings_ov: {},
      // Meta data
      last_candle: [],
      sub_start: undefined
    };
  },
  watch: {
    width: function width() {
      this.update_layout();
    },
    height: function height() {
      this.update_layout();
    },
    ib: function ib(nw) {
      if (!nw) {
        // Change range index => time
        var t1 = this.ti_map.i2t(this.range[0]);
        var t2 = this.ti_map.i2t(this.range[1]);
        utils.overwrite(this.range, [t1, t2]);
        this.interval = this.interval_ms;
      } else {
        this.init_range(); // TODO: calc index range instead

        utils.overwrite(this.range, this.range);
        this.interval = 1;
      }

      var sub = this.subset();
      utils.overwrite(this.sub, sub);
      this.update_layout();
    },
    colors: function colors() {
      utils.overwrite(this.range, this.range);
    },
    data: {
      handler: function handler(n, p) {
        if (!this.sub.length) this.init_range();
        var sub = this.subset(); // Fix Infinite loop warn, when the subset is empty
        // TODO: Consider removing 'sub' from data entirely

        if (this.sub.length || sub.length) {
          utils.overwrite(this.sub, sub);
        }

        this.update_layout();
        utils.overwrite(this.range, this.range);
        this.cursor.scroll_lock = !!n.scrollLock;

        if (n.scrollLock && this.cursor.locked) {
          this.cursor.locked = false;
        }

        this.data_changed();
        this.update_last_candle(); // TODO: update legend values for overalys

        this.rerender++;
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Chartvue_type_script_lang_js_ = (Chartvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Chart.vue





/* normalize component */

var Chart_component = normalizeComponent(
  components_Chartvue_type_script_lang_js_,
  Chartvue_type_template_id_4d06a4de_render,
  Chartvue_type_template_id_4d06a4de_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Chart_api; }
Chart_component.options.__file = "src/components/Chart.vue"
/* harmony default export */ var Chart = (Chart_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Toolbar.vue?vue&type=template&id=021887fb&
var Toolbarvue_type_template_id_021887fb_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      key: _vm.tool_count,
      staticClass: "trading-vue-toolbar",
      style: _vm.styles
    },
    _vm._l(_vm.data.tools, function(tool, i) {
      return tool.icon
        ? _c("toolbar-item", {
            key: i,
            attrs: {
              data: tool,
              config: _vm.config,
              colors: _vm.colors,
              selected: tool.type === _vm.data.tool
            },
            on: { "item-selected": _vm.selected }
          })
        : _vm._e()
    }),
    1
  )
}
var Toolbarvue_type_template_id_021887fb_staticRenderFns = []
Toolbarvue_type_template_id_021887fb_render._withStripped = true


// CONCATENATED MODULE: ./src/components/Toolbar.vue?vue&type=template&id=021887fb&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ToolbarItem.vue?vue&type=template&id=227b3c2e&
var ToolbarItemvue_type_template_id_227b3c2e_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: ["trading-vue-tbitem", _vm.selected ? "selected-item" : ""],
      style: _vm.item_style,
      on: {
        click: function($event) {
          return _vm.$emit("item-selected", _vm.data)
        }
      }
    },
    [
      _c("div", {
        staticClass: "trading-vue-tbicon pixelated",
        style: _vm.icon_style
      })
    ]
  )
}
var ToolbarItemvue_type_template_id_227b3c2e_staticRenderFns = []
ToolbarItemvue_type_template_id_227b3c2e_render._withStripped = true


// CONCATENATED MODULE: ./src/components/ToolbarItem.vue?vue&type=template&id=227b3c2e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ToolbarItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ToolbarItemvue_type_script_lang_js_ = ({
  name: 'ToolbarItem',
  props: ['data', 'selected', 'colors', 'tv_id', 'config'],
  mounted: function mounted() {},
  computed: {
    item_style: function item_style() {
      if (this.$props.data.type === 'System:Splitter') {
        return this.splitter;
      }

      var conf = this.$props.config;
      var im = conf.TB_ITEM_M;
      var m = (conf.TOOLBAR - conf.TB_ICON) * 0.5 - im;
      var s = conf.TB_ICON + im * 2;
      return {
        'width': "".concat(s, "px"),
        'height': "".concat(s, "px"),
        'margin': "8px ".concat(m, "px 0px ").concat(m, "px"),
        'border-radius': '3px'
      };
    },
    icon_style: function icon_style() {
      if (this.$props.data.type === 'System:Splitter') {
        return {};
      }

      var conf = this.$props.config;
      var br = conf.TB_ICON_BRI;
      var im = conf.TB_ITEM_M;
      return {
        'background-image': "url(".concat(this.$props.data.icon, ")"),
        'width': '25px',
        'height': '25px',
        'margin': "".concat(im, "px"),
        'filter': "brightness(".concat(br, ")")
      };
    },
    splitter: function splitter() {
      var conf = this.$props.config;
      var colors = this.$props.colors;
      var c = colors.colorGrid;
      var im = conf.TB_ITEM_M;
      var m = (conf.TOOLBAR - conf.TB_ICON) * 0.5 - im;
      var s = conf.TB_ICON + im * 2;
      return {
        'width': "".concat(s, "px"),
        'height': '1px',
        'margin': "8px ".concat(m, "px 8px ").concat(m, "px"),
        'background-color': c
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/ToolbarItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ToolbarItemvue_type_script_lang_js_ = (ToolbarItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ToolbarItem.vue?vue&type=style&index=0&lang=css&
var ToolbarItemvue_type_style_index_0_lang_css_ = __webpack_require__(58);

// CONCATENATED MODULE: ./src/components/ToolbarItem.vue






/* normalize component */

var ToolbarItem_component = normalizeComponent(
  components_ToolbarItemvue_type_script_lang_js_,
  ToolbarItemvue_type_template_id_227b3c2e_render,
  ToolbarItemvue_type_template_id_227b3c2e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var ToolbarItem_api; }
ToolbarItem_component.options.__file = "src/components/ToolbarItem.vue"
/* harmony default export */ var ToolbarItem = (ToolbarItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Toolbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Toolbarvue_type_script_lang_js_ = ({
  name: 'Toolbar',
  props: ['data', 'height', 'colors', 'tv_id', 'config'],
  components: {
    ToolbarItem: ToolbarItem
  },
  mounted: function mounted() {},
  methods: {
    selected: function selected(tool) {
      this.$emit('custom-event', {
        event: 'tool-selected',
        args: [tool.type]
      });
    }
  },
  computed: {
    styles: function styles() {
      var colors = this.$props.colors;
      var b = this.$props.config.TB_BORDER;
      var w = this.$props.config.TOOLBAR - b;
      var c = colors.colorGrid;
      var cb = colors.colorTbBack || colors.colorBack;
      var brd = colors.colorTbBorder || colors.colorScale;
      var st = this.$props.config.TB_B_STYLE;
      return {
        'width': "".concat(w, "px"),
        'height': "".concat(this.$props.height - 3, "px"),
        'background-color': cb,
        'border-right': "".concat(b, "px ").concat(st, " ").concat(brd)
      };
    }
  },
  watch: {
    data: {
      handler: function handler(n) {
        // For some reason Vue.js doesn't want to
        // update 'tools' automatically when new item
        // is pushed/removed. Yo, Vue, I herd you
        // you want more dirty tricks?
        if (n.tools) this.tool_count = n.tools.length;
      },
      deep: true
    }
  },
  data: function data() {
    return {
      tool_count: 0
    };
  }
});
// CONCATENATED MODULE: ./src/components/Toolbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Toolbarvue_type_script_lang_js_ = (Toolbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Toolbar.vue?vue&type=style&index=0&lang=css&
var Toolbarvue_type_style_index_0_lang_css_ = __webpack_require__(60);

// CONCATENATED MODULE: ./src/components/Toolbar.vue






/* normalize component */

var Toolbar_component = normalizeComponent(
  components_Toolbarvue_type_script_lang_js_,
  Toolbarvue_type_template_id_021887fb_render,
  Toolbarvue_type_template_id_021887fb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Toolbar_api; }
Toolbar_component.options.__file = "src/components/Toolbar.vue"
/* harmony default export */ var Toolbar = (Toolbar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Widgets.vue?vue&type=template&id=5fe4312f&
var Widgetsvue_type_template_id_5fe4312f_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "tvjs-widgets",
      style: { width: _vm.width + "px", height: _vm.height + "px" }
    },
    _vm._l(Object.keys(_vm.map), function(id) {
      return _c(_vm.initw(id), {
        key: id,
        tag: "component",
        attrs: {
          id: id,
          main: _vm.map[id].ctrl,
          data: _vm.map[id].data,
          tv: _vm.tv,
          dc: _vm.dc
        }
      })
    }),
    1
  )
}
var Widgetsvue_type_template_id_5fe4312f_staticRenderFns = []
Widgetsvue_type_template_id_5fe4312f_render._withStripped = true


// CONCATENATED MODULE: ./src/components/Widgets.vue?vue&type=template&id=5fe4312f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Widgets.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Widgetsvue_type_script_lang_js_ = ({
  name: 'Widgets',
  props: ['width', 'height', 'map', 'tv', 'dc'],
  methods: {
    initw: function initw(id) {
      return this.$props.map[id].cls;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Widgets.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Widgetsvue_type_script_lang_js_ = (Widgetsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Widgets.vue?vue&type=style&index=0&lang=css&
var Widgetsvue_type_style_index_0_lang_css_ = __webpack_require__(62);

// CONCATENATED MODULE: ./src/components/Widgets.vue






/* normalize component */

var Widgets_component = normalizeComponent(
  components_Widgetsvue_type_script_lang_js_,
  Widgetsvue_type_template_id_5fe4312f_render,
  Widgetsvue_type_template_id_5fe4312f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Widgets_api; }
Widgets_component.options.__file = "src/components/Widgets.vue"
/* harmony default export */ var Widgets = (Widgets_component.exports);
// CONCATENATED MODULE: ./src/mixins/xcontrol.js
function xcontrol_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = xcontrol_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function xcontrol_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return xcontrol_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return xcontrol_arrayLikeToArray(o, minLen); }

function xcontrol_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// extensions control
/* harmony default export */ var xcontrol = ({
  methods: {
    // TODO: preventDefault
    pre_dc: function pre_dc(e) {
      var _iterator = xcontrol_createForOfIteratorHelper(this.controllers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ctrl = _step.value;

          if (ctrl.update) {
            ctrl.update(e);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    post_dc: function post_dc(e) {
      var _iterator2 = xcontrol_createForOfIteratorHelper(this.controllers),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var ctrl = _step2.value;

          if (ctrl.post_update) {
            ctrl.post_update(e);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  },
  computed: {
    ctrllist: function ctrllist() {
      var _iterator3 = xcontrol_createForOfIteratorHelper(this.controllers),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var ctrl = _step3.value;
          if (ctrl.destroy) ctrl.destroy();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      this.controllers = [];

      var _iterator4 = xcontrol_createForOfIteratorHelper(this.$props.extensions),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var x = _step4.value;
          this.controllers.push(new x.Main(this, // tv inst
          this.data // dc
          ));
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return this.controllers;
    },
    ws: function ws() {
      var ws = {};

      var _iterator5 = xcontrol_createForOfIteratorHelper(this.controllers),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var ctrl = _step5.value;

          if (ctrl.widgets) {
            for (var id in ctrl.widgets) {
              ws[id] = ctrl.widgets[id];
              ws[id].ctrl = ctrl;
            }
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return ws;
    }
  },
  data: function data() {
    return {
      controllers: []
    };
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/TradingVue.vue?vue&type=script&lang=js&


function TradingVuevue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = TradingVuevue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function TradingVuevue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TradingVuevue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TradingVuevue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function TradingVuevue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var TradingVuevue_type_script_lang_js_ = ({
  name: 'TradingVue',
  components: {
    Chart: Chart,
    Toolbar: Toolbar,
    Widgets: Widgets
  },
  mixins: [xcontrol],
  props: {
    titleTxt: {
      type: String,
      "default": 'TradingVue.js'
    },
    id: {
      type: String,
      "default": 'trading-vue-js'
    },
    width: {
      type: Number,
      "default": 800
    },
    height: {
      type: Number,
      "default": 421
    },
    colorTitle: {
      type: String,
      "default": '#42b883'
    },
    colorBack: {
      type: String,
      "default": '#121826'
    },
    colorGrid: {
      type: String,
      "default": '#2f3240'
    },
    colorText: {
      type: String,
      "default": '#dedddd'
    },
    colorTextHL: {
      type: String,
      "default": '#fff'
    },
    colorScale: {
      type: String,
      "default": '#838383'
    },
    colorCross: {
      type: String,
      "default": '#8091a0'
    },
    colorCandleUp: {
      type: String,
      "default": '#23a776'
    },
    colorCandleDw: {
      type: String,
      "default": '#e54150'
    },
    colorWickUp: {
      type: String,
      "default": '#23a77688'
    },
    colorWickDw: {
      type: String,
      "default": '#e5415088'
    },
    colorWickSm: {
      type: String,
      "default": '#bdbec0'
    },
    colorVolUp: {
      type: String,
      "default": '#79999e42'
    },
    colorVolDw: {
      type: String,
      "default": '#ef535042'
    },
    colorPanel: {
      type: String,
      "default": '#565c68'
    },
    colorTbBack: {
      type: String
    },
    colorTbBorder: {
      type: String,
      "default": '#8282827d'
    },
    font: {
      type: String,
      "default": constants.ChartConfig.FONT
    },
    toolbar: {
      type: Boolean,
      "default": false
    },
    data: {
      type: Object,
      required: true
    },
    // Your overlay classes here
    overlays: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    // Overwrites ChartConfig values,
    // see constants.js
    chartConfig: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    legendButtons: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    indexBased: {
      type: Boolean,
      "default": false
    },
    extensions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  computed: {
    // Copy a subset of TradingVue props
    chart_props: function chart_props() {
      var offset = this.$props.toolbar ? this.chart_config.TOOLBAR : 0;
      var chart_props = {
        title_txt: this.$props.titleTxt,
        overlays: this.$props.overlays.concat(this.mod_ovs),
        data: this.decubed,
        width: this.$props.width - offset,
        height: this.$props.height,
        font: this.$props.font,
        buttons: this.$props.legendButtons,
        toolbar: this.$props.toolbar,
        ib: this.$props.indexBased || this.index_based || false,
        colors: {}
      };

      for (var k in this.$props) {
        if (k.indexOf('color') === 0) {
          chart_props.colors[k] = this.$props[k];
        }
      }

      return chart_props;
    },
    chart_config: function chart_config() {
      return Object.assign({}, constants.ChartConfig, this.$props.chartConfig);
    },
    decubed: function decubed() {
      var data = this.$props.data;

      if (data.data !== undefined) {
        // DataCube detected
        data.init_tvjs(this);
        return data.data;
      } else {
        return data;
      }
    },
    index_based: function index_based() {
      var base = this.$props.data;

      if (base.chart) {
        return base.chart.indexBased;
      } else if (base.data) {
        return base.data.chart.indexBased;
      }

      return false;
    },
    mod_ovs: function mod_ovs() {
      var arr = [];

      var _iterator = TradingVuevue_type_script_lang_js_createForOfIteratorHelper(this.$props.extensions),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var x = _step.value;
          arr.push.apply(arr, toConsumableArray_default()(x.overlays));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return arr;
    }
  },
  data: function data() {
    return {
      reset: 0
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.custom_event({
      event: 'before-destroy'
    });
  },
  methods: {
    resetChart: function resetChart(resetRange) {
      var _this = this;

      if (resetRange === void 0) {
        resetRange = true;
      }

      this.reset++;
      var range = this.getRange();

      if (!resetRange && range[0] && range[1]) {
        this.$nextTick(function () {
          return _this.setRange.apply(_this, toConsumableArray_default()(range));
        });
      }
    },
    "goto": function goto(t) {
      // TODO: limit goto & setRange (out of data error)
      if (this.chart_props.ib) {
        var ti_map = this.$refs.chart.ti_map;
        t = ti_map.smth2i(t);
      }

      this.$refs.chart["goto"](t);
    },
    setRange: function setRange(t1, t2) {
      if (this.chart_props.ib) {
        var ti_map = this.$refs.chart.ti_map;
        t1 = ti_map.smth2i(t1);
        t2 = ti_map.smth2i(t2);
      }

      this.$refs.chart.setRange(t1, t2);
    },
    getRange: function getRange() {
      if (this.chart_props.ib) {
        var ti_map = this.$refs.chart.ti_map; // Time range => index range

        return this.$refs.chart.range.map(function (x) {
          return ti_map.i2t(x);
        });
      }

      return this.$refs.chart.range;
    },
    getCursor: function getCursor() {
      var cursor = this.$refs.chart.cursor;

      if (this.chart_props.ib) {
        var ti_map = this.$refs.chart.ti_map;
        var copy = Object.assign({}, cursor);
        copy.i = copy.t;
        copy.t = ti_map.i2t(copy.t);
        return copy;
      }

      return cursor;
    },
    legend_button: function legend_button(event) {
      this.custom_event({
        event: 'legend-button-click',
        args: [event]
      });
    },
    custom_event: function custom_event(d) {
      if ('args' in d) {
        this.$emit.apply(this, [d.event].concat(toConsumableArray_default()(d.args)));
      } else {
        this.$emit(d.event);
      }

      var data = this.$props.data;
      var ctrl = this.controllers.length !== 0;
      if (ctrl) this.pre_dc(d);

      if (data.tv) {
        // If the data object is DataCube
        data.on_custom_event(d.event, d.args);
      }

      if (ctrl) this.post_dc(d);
    },
    range_changed: function range_changed(r) {
      if (this.chart_props.ib) {
        var ti_map = this.$refs.chart.ti_map;
        r = r.map(function (x) {
          return ti_map.i2t(x);
        });
      }

      this.$emit('range-changed', r);
    },
    set_loader: function set_loader(dc) {
      var _this2 = this;

      var self = this;
      this.$refs.chart.$off('range-changed');
      if (dc) this.$refs.chart.$on('range-changed', function (r) {
        var tf = _this2.$refs.chart.interval;

        if (self.chart_props.ib) {
          var ti_map = _this2.$refs.chart.ti_map;
          r = r.map(function (x) {
            return ti_map.i2t(x);
          });
          tf = _this2.$refs.chart.interval_ms;
        }

        dc.range_changed(r, tf);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/TradingVue.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_TradingVuevue_type_script_lang_js_ = (TradingVuevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/TradingVue.vue





/* normalize component */

var TradingVue_component = normalizeComponent(
  src_TradingVuevue_type_script_lang_js_,
  TradingVuevue_type_template_id_235c0ade_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var TradingVue_api; }
TradingVue_component.options.__file = "src/TradingVue.vue"
/* harmony default export */ var TradingVue = (TradingVue_component.exports);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(23);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(24);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(21);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(22);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(10);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(3);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/helpers/tmp/ww$$$.json
var ww$$$ = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/lz-string/libs/lz-string.js
var lz_string = __webpack_require__(32);
var lz_string_default = /*#__PURE__*/__webpack_require__.n(lz_string);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/construct.js
var construct = __webpack_require__(33);
var construct_default = /*#__PURE__*/__webpack_require__.n(construct);

// CONCATENATED MODULE: ./src/stuff/linreg.js
/**
 * Simple linear regression
 *
 * @param {Array.<number>} data
 * @return {Function}
 */
function regression(data, len, offset) {
  data = data.slice(0, len).reverse().map(function (x, i) {
    return [i, x];
  });
  var sum_x = 0,
      sum_y = 0,
      sum_xy = 0,
      sum_xx = 0,
      count = 0,
      m,
      b; // calculate sums

  for (var i = 0, len = data.length; i < len; i++) {
    if (!data[i]) return NaN;
    var point = data[i];
    sum_x += point[0];
    sum_y += point[1];
    sum_xx += point[0] * point[0];
    sum_xy += point[0] * point[1];
    count++;
  } // calculate slope (m) and y-intercept (b) for f(x) = m * x + b


  m = (count * sum_xy - sum_x * sum_y) / (count * sum_xx - sum_x * sum_x);
  b = sum_y / count - m * sum_x / count;
  return m * (data.length - 1 - offset) + b;
}
// CONCATENATED MODULE: ./src/helpers/script_utils.js

var FDEFS = /(function |)([$A-Z_][0-9A-Z_$\.]*)[\s]*?\((.*?)\)/gmi;
var SBRACKETS = /([$A-Z_][0-9A-Z_$\.]*)[\s]*?\[([^"^\[^\]]+?)\]/gmi;
var TFSTR = /(\d+)(\w*)/gm;
var BUF_INC = 5;
var tf_cache = {};
function f_args(src) {
  FDEFS.lastIndex = 0;
  var m = FDEFS.exec(src);

  if (m) {
    var fkeyword = m[1].trim();
    var fname = m[2].trim();
    var fargs = m[3].trim();
    return fargs.split(',').map(function (x) {
      return x.trim();
    });
  }

  return [];
}
function f_body(src) {
  return src.slice(src.indexOf("{") + 1, src.lastIndexOf("}"));
}
function wrap_idxs(src, pre) {
  if (pre === void 0) {
    pre = '';
  }

  SBRACKETS.lastIndex = 0;
  var changed = false;

  do {
    var m = SBRACKETS.exec(src);

    if (m) {
      var vname = m[1].trim();
      var vindex = m[2].trim();

      if (vindex === '0' || parseInt(vindex) < BUF_INC) {
        continue;
      }

      switch (vname) {
        case 'let':
        case 'var':
        case 'return':
          continue;
      } //let wrap = `${pre}_v(${vname}, ${vindex})[${vindex}]`


      var wrap = "".concat(vname, "[").concat(pre, "_i(").concat(vindex, ", ").concat(vname, ")]");
      src = src.replace(m[0], wrap);
      changed = true;
    }
  } while (m);

  return changed ? src : src;
} // Get all module helper classes

function make_module_lib(mod) {
  var lib = {};

  for (var k in mod) {
    if (k === 'main' || k === 'id') continue;
    var a = f_args(mod[k]);
    lib[k] = new Function(a, f_body(mod[k]));
  }

  return lib;
}
function get_raw_src(f) {
  if (typeof f === 'string') return f;
  var src = f.toString();
  return src.slice(src.indexOf("{") + 1, src.lastIndexOf("}"));
} // Get tf in ms from pairs such (`15`, `m`)

function tf_from_pair(num, pf) {
  var mult = 1;

  switch (pf) {
    case 's':
      mult = constants.SECOND;
      break;

    case 'm':
      mult = constants.MINUTE;
      break;

    case 'H':
      mult = constants.HOUR;
      break;

    case 'D':
      mult = constants.DAY;
      break;

    case 'W':
      mult = constants.WEEK;
      break;

    case 'M':
      mult = constants.MONTH;
      break;

    case 'Y':
      mult = constants.YEAR;
      break;
  }

  return parseInt(num) * mult;
}
function tf_from_str(str) {
  if (typeof str === 'number') return str;
  if (tf_cache[str]) return tf_cache[str];
  TFSTR.lastIndex = 0;
  var m = TFSTR.exec(str);

  if (m) {
    tf_cache[str] = tf_from_pair(m[1], m[2]);
    return tf_cache[str];
  }

  return undefined;
}
function get_fn_id(pre, id) {
  return pre + '-' + id.split('<-').pop();
}
// CONCATENATED MODULE: ./src/helpers/sampler.js
// Resamples candles

var DEF_LIMIT = 5; // default buff length

/* harmony default export */ var sampler = (function (T) {
  // Define a TS type (part of the candle)
  var Ti = ['high', 'low', 'close', 'vol'].indexOf(T);
  return function (x) {
    var tf = this.__tf__;
    var id = this.__id__;
    var val = x !== undefined ? x : script_engine[T][0];

    if (!this.__t0__ || script_engine.t >= this.__t0__ + tf) {
      this.unshift(val);
      this.__t0__ = script_engine.t - script_engine.t % tf; // TODO: new candle signal
    } // Update prices


    switch (Ti) {
      case 0:
        if (val > this[0]) this[0] = val;
        break;

      case 1:
        if (val < this[0]) this[0] = val;
        break;

      case 2:
        this[0] = val;
        break;

      case 3:
        this[0] += val;
    } // Limit size of vector


    this.length = this.__len__ || DEF_LIMIT;
  };
});
// CONCATENATED MODULE: ./src/helpers/script_std.js





function script_std_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = script_std_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function script_std_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return script_std_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return script_std_arrayLikeToArray(o, minLen); }

function script_std_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Script std-lib (built-in functions)




var script_std_BUF_INC = 5;

var script_std_ScriptStd = /*#__PURE__*/function () {
  function ScriptStd(env) {
    classCallCheck_default()(this, ScriptStd);

    this.env = env;
    this.SWMA = [1 / 6, 2 / 6, 2 / 6, 1 / 6];
    this.STDEV_EPS = 1e-10;
    this.STDEV_Z = 1e-4;

    this._index_tracking();
  } // Wrap every index with index-tracking function
  // That way we will know exact index ranges


  createClass_default()(ScriptStd, [{
    key: "_index_tracking",
    value: function _index_tracking() {
      var proto = Object.getPrototypeOf(this);
      var std = "";

      var _iterator = script_std_createForOfIteratorHelper(Object.getOwnPropertyNames(proto)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var k = _step.value;

          switch (k) {
            case 'constructor':
            case 'ts':
            case 'tstf':
            case '_index_tracking':
            case '_tsid':
            case '_i':
            case '_v':
            case '_add_i':
            case 'onchart':
            case 'offchart':
              continue;
          }

          var f = this._add_i(k, this[k].toString());

          if (f) this[k] = f;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } // Add index tracking to the function

  }, {
    key: "_add_i",
    value: function _add_i(name, src) {
      var args = f_args(src);
      src = f_body(src);
      var src2 = wrap_idxs(src, 'this.');

      if (src2 !== src) {
        return construct_default()(Function, toConsumableArray_default()(args).concat([src2]));
      }

      return null;
    } // Generate the next timeseries id

  }, {
    key: "_tsid",
    value: function _tsid(prev, next) {
      // TODO: prev presence check
      return "".concat(prev, "<-").concat(next);
    } // Index-tracker

  }, {
    key: "_i",
    value: function _i(i, x) {
      // If an object is actually a timeseries
      if (x != undefined && x === x && x.__id__) {
        // Increase TS buff length
        if (!x.__len__ || i >= x.__len__) {
          x.__len__ = i + script_std_BUF_INC;
        }
      }

      return i;
    } // Index-tracker (object-based)

  }, {
    key: "_v",
    value: function _v(x, i) {
      // If an object is actually a timeseries
      if (x != undefined && x === x && x.__id__) {
        // Increase TS buff length
        if (!x.__len__ || i >= x.__len__) {
          x.__len__ = i + script_std_BUF_INC;
        }
      }

      return x;
    } // Creates a new time-series & records each x.
    // Return the an array. Id is auto-genrated

  }, {
    key: "ts",
    value: function ts(x, _id, _tf) {
      if (_tf) return this.tstf(x, _tf, _id);
      var ts = this.env.tss[_id];

      if (!ts) {
        ts = this.env.tss[_id] = [x];
        ts.__id__ = _id;
      } else {
        ts[0] = x;
      }

      return ts;
    } // Creates a new time-series & records each x.
    // Uses Sampler to aggregate the values
    // Return the an array. Id is auto-genrated

  }, {
    key: "tstf",
    value: function tstf(x, tf, _id) {
      var ts = this.env.tss[_id];

      if (!ts) {
        ts = this.env.tss[_id] = [x];
        ts.__id__ = _id;
        ts.__tf__ = tf_from_str(tf);
        ts.__fn__ = sampler('close').bind(ts);
      } else {
        ts.__fn__(x);
      }

      return ts;
    } // Wait for a value !== undefined

  }, {
    key: "nw",
    value: function nw(x) {
      /*if (x == undefined || x !== x) {
          // Skip a dependend indicators + don't
          // add the current value to the final output
          // TODO: only when ts starts?
          se.skip = true
      }
      return x*/
    } // Skip undefined values

  }, {
    key: "ns",
    value: function ns(x) {
      if (x == undefined || x !== x) {
        // Skip a dependend indicators + don't
        // add the current value to the final output
        script_engine.skip = true;
      }

      return x;
    } // Replace if NaN

  }, {
    key: "nz",
    value: function nz(x, v) {
      if (x == undefined || x !== x) {
        return v || 0;
      }

      return x;
    } // Is NaN ?

  }, {
    key: "na",
    value: function na(x) {
      return x == undefined || x !== x;
    } // Replace with NaN if Infinite

  }, {
    key: "nf",
    value: function nf(x, v) {
      if (!isFinite(x)) {
        return v !== undefined ? v : NaN;
      }

      return x;
    } // Math operators on t-series and numbers

  }, {
    key: "add",
    value: function add(x, y, _id) {
      // __id__ means this is a time-series
      var id = this._tsid(_id, "add");

      var x0 = this.na(x) ? NaN : x.__id__ ? x[0] : x;
      var y0 = this.na(y) ? NaN : y.__id__ ? y[0] : y;
      return this.ts(x0 + y0, id, x.__tf__);
    }
  }, {
    key: "sub",
    value: function sub(x, y, _id) {
      var id = this._tsid(_id, "sub");

      var x0 = this.na(x) ? NaN : x.__id__ ? x[0] : x;
      var y0 = this.na(y) ? NaN : y.__id__ ? y[0] : y;
      return this.ts(x0 - y0, id, x.__tf__);
    }
  }, {
    key: "mult",
    value: function mult(x, y, _id) {
      var id = this._tsid(_id, "mult");

      var x0 = this.na(x) ? NaN : x.__id__ ? x[0] : x;
      var y0 = this.na(y) ? NaN : y.__id__ ? y[0] : y;
      return this.ts(x0 * y0, id, x.__tf__);
    }
  }, {
    key: "div",
    value: function div(x, y, _id) {
      var id = this._tsid(_id, "div");

      var x0 = this.na(x) ? NaN : x.__id__ ? x[0] : x;
      var y0 = this.na(y) ? NaN : y.__id__ ? y[0] : y;
      return this.ts(x0 / y0, id, x.__tf__);
    }
  }, {
    key: "neg",
    value: function neg(x, _id) {
      var id = this._tsid(_id, "neg");

      var x0 = this.na(x) ? NaN : x.__id__ ? x[0] : x;
      return this.ts(-x0, id, x.__tf__);
    }
  }, {
    key: "abs",
    value: function abs(x) {
      return Math.abs(x);
    }
  }, {
    key: "acos",
    value: function acos(x) {
      return Math.acos(x);
    } // Emits an event

  }, {
    key: "signal",
    value: function signal(type, data) {// TODO: this

      if (data === void 0) {
        data = {};
      }
    } // Emits an event if cond === true

  }, {
    key: "signalif",
    value: function signalif(cond, type, data) {
      if (data === void 0) {
        data = {};
      }

      if (cond) {// TODO: this
      }
    } // Arnaud Legoux Moving Average

  }, {
    key: "alma",
    value: function alma(src, len, offset, sigma, _id) {
      var id = this._tsid(_id, "alma(".concat(len, ",").concat(offset, ",").concat(sigma, ")"));

      var m = Math.floor(offset * (len - 1));
      var s = len / sigma;
      var norm = 0;
      var sum = 0;

      for (var i = 0; i < len; i++) {
        var w = Math.exp(-1 * Math.pow(i - m, 2) / (2 * Math.pow(s, 2)));
        norm = norm + w;
        sum = sum + src[len - i - 1] * w;
      }

      return this.ts(sum / norm, id, src.__tf__);
    }
  }, {
    key: "asin",
    value: function asin(x) {
      return Math.asin(x);
    }
  }, {
    key: "atan",
    value: function atan(x) {
      return Math.atan(x);
    } // Average True Range

  }, {
    key: "atr",
    value: function atr(len, _id, _tf) {
      var tfs = _tf || '';

      var id = this._tsid(_id, "atr(".concat(len, ")"));

      var high = this.env.shared["high".concat(tfs)];
      var low = this.env.shared["low".concat(tfs)];
      var close = this.env.shared["close".concat(tfs)];
      var tr = this.ts(0, id, _tf);
      tr[0] = this.na(high[1]) ? high[0] - low[0] : Math.max(Math.max(high[0] - low[0], Math.abs(high[0] - close[1])), Math.abs(low[0] - close[1]));
      return this.rma(tr, len, id);
    }
  }, {
    key: "avg",
    value: function avg() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      args.pop(); // Remove _id

      var sum = 0;

      for (var i = 0; i < args.length; i++) {
        sum += args[i];
      }

      return sum / args.length;
    } // Candles since the event occured (cond === true)

  }, {
    key: "since",
    value: function since(cond) {// TODO: this
    } // Bollinger Bands

  }, {
    key: "bb",
    value: function bb(src, len, mult, _id) {
      var id = this._tsid(_id, "bb(".concat(len, ",").concat(mult, ")"));

      var basis = this.sma(src, len, id);
      var dev = this.stdev(src, len, id)[0] * mult;
      return [basis, this.ts(basis[0] + dev, id + '1', src.__tf__), this.ts(basis[0] - dev, id + '2', src.__tf__)];
    } // Bollinger Bands Width

  }, {
    key: "bbw",
    value: function bbw(src, len, mult, _id) {
      var id = this._tsid(_id, "bbw(".concat(len, ",").concat(mult, ")"));

      var basis = this.sma(src, len, id)[0];
      var dev = this.stdev(src, len, id)[0] * mult;
      return this.ts(2 * dev / basis, id, src.__tf__);
    }
  }, {
    key: "bool",
    value: function bool(x) {
      return !!x;
    } // Commodity Channel Index

  }, {
    key: "cci",
    value: function cci(src, len, _id) {
      // TODO: Not exactly precise, but pretty damn close
      var id = this._tsid(_id, "cci(".concat(len, ")"));

      var ma = this.sma(src, len, id);
      var dev = this.dev(src, len, id);
      var cci = (src[0] - ma[0]) / (0.015 * dev[0]);
      return this.ts(cci, id, src.__tf__);
    }
  }, {
    key: "ceil",
    value: function ceil(x) {
      return Math.ceil(x);
    } // x[0] - x[len]

  }, {
    key: "change",
    value: function change(src, len, _id) {
      if (len === void 0) {
        len = 1;
      }

      var id = this._tsid(_id, "change(".concat(len, ")"));

      return this.ts(src[0] - src[len], id, src.__tf__);
    } // Chande Momentum Oscillator

  }, {
    key: "cmo",
    value: function cmo(src, len, _id) {
      var id = this._tsid(_id, "cmo(".concat(len, ")"));

      var mom = this.change(src, 1, id);
      var g = this.ts(mom[0] >= 0 ? mom[0] : 0.0, id + "g", src.__tf__);
      var l = this.ts(mom[0] >= 0 ? 0.0 : -mom[0], id + "l", src.__tf__);
      var sm1 = this.sum(g, len, id + '1')[0];
      var sm2 = this.sum(l, len, id + '2')[0];
      return this.ts(100 * (sm1 - sm2) / (sm1 + sm2), id, src.__tf__);
    } // Center of Gravity

  }, {
    key: "cog",
    value: function cog(src, len, _id) {
      var id = this._tsid(_id, "cmo(".concat(len, ")"));

      var sum = this.sum(src, len, id)[0];
      var num = 0;

      for (var i = 0; i < len; i++) {
        num += src[i] * (i + 1);
      }

      return this.ts(-num / sum, id, src.__tf__);
    } // Correlation

  }, {
    key: "corr",
    value: function corr() {// TODO: this
    }
  }, {
    key: "cos",
    value: function cos(x) {
      return Math.cos(x);
    }
  }, {
    key: "cross",
    value: function cross(src1, src2, _id) {
      var id = this._tsid(_id, "cross");

      var x = src1[0] > src2[0] !== src1[1] > src2[1];
      return this.ts(x, id, src1.__tf__);
    }
  }, {
    key: "crossover",
    value: function crossover(src1, src2, _id) {
      var id = this._tsid(_id, "crossover");

      var x = src1[0] > src2[0] && src1[1] <= src2[1];
      return this.ts(x, id, src1.__tf__);
    }
  }, {
    key: "crossunder",
    value: function crossunder(src1, src2, _id) {
      var id = this._tsid(_id, "crossunder");

      var x = src1[0] < src2[0] && src1[1] >= src2[1];
      return this.ts(x, id, src1.__tf__);
    }
  }, {
    key: "cum",
    value: function cum(src, _id) {
      var id = this._tsid(_id, "cum");

      var res = this.ts(0, id, src.__tf__);
      res[0] = this.nz(src[0]) + this.nz(res[1]);
      return res;
    }
  }, {
    key: "dayofmonth",
    value: function dayofmonth(time) {
      return new Date(time || script_engine.t).getUTCDate();
    }
  }, {
    key: "dayofweek",
    value: function dayofweek(time) {
      return new Date(time || script_engine.t).getUTCDay() + 1;
    } // Deviation from SMA

  }, {
    key: "dev",
    value: function dev(src, len, _id) {
      var id = this._tsid(_id, "dev(".concat(len, ")"));

      var mean = this.sma(src, len, id)[0];
      var sum = 0;

      for (var i = 0; i < len; i++) {
        sum += Math.abs(src[i] - mean);
      }

      return this.ts(sum / len, id, src.__tf__);
    } // Directional Movement Index ADX, +DI, -DI

  }, {
    key: "dmi",
    value: function dmi(len, smooth, _id, _tf) {
      var id = this._tsid(_id, "dmi(".concat(len, ",").concat(smooth, ")"));

      var tfs = _tf || '';
      var high = this.env.shared["high".concat(tfs)];
      var low = this.env.shared["low".concat(tfs)];
      var up = this.change(high, 1, id + '1')[0];
      var down = this.neg(this.change(low, 1, id + '2'), id)[0];
      var plusDM = this.ts(100 * (this.na(up) ? NaN : up > down && up > 0 ? up : 0), id + '3', _tf);
      var minusDM = this.ts(100 * (this.na(down) ? NaN : down > up && down > 0 ? down : 0), id + '4', _tf);
      var trur = this.rma(this.tr(false, id, _tf), len, id + '5');
      var plus = this.div(this.rma(plusDM, len, id + '6'), trur, id + '8');
      var minus = this.div(this.rma(minusDM, len, id + '7'), trur, id + '9');
      var sum = this.add(plus, minus, id + '10')[0];
      var adx = this.rma(this.ts(100 * Math.abs(plus[0] - minus[0]) / (sum === 0 ? 1 : sum), id + '11', _tf), smooth, id + '12');
      return [adx, plus, minus];
    } // Exponential Moving Average with alpha = 2 / (y + 1)

  }, {
    key: "ema",
    value: function ema(src, len, _id) {
      var id = this._tsid(_id, "ema(".concat(len, ")"));

      var a = 2 / (len + 1);
      var ema = this.ts(0, id, src.__tf__);
      ema[0] = this.na(ema[1]) ? this.sma(src, len, id)[0] : a * src[0] + (1 - a) * this.nz(ema[1]);
      return ema;
    }
  }, {
    key: "exp",
    value: function exp(x) {
      return Math.exp(x);
    }
  }, {
    key: "falling",
    value: function falling(src, len, _id) {
      var id = this._tsid(_id, "falling(".concat(len, ")"));

      var bot = src[0];

      for (var i = 1; i < len + 1; i++) {
        if (bot >= src[i]) {
          return this.ts(false, id, src.__tf__);
        }
      }

      return this.ts(true, id, src.__tf__);
    }
  }, {
    key: "fixnan",
    value: function fixnan(x) {// TODO: this
    }
  }, {
    key: "floor",
    value: function floor(x) {
      Math.floor(x);
    }
  }, {
    key: "highest",
    value: function highest(src, len, _id) {
      var id = this._tsid(_id, "highest(".concat(len, ")"));

      var high = -Infinity;

      for (var i = 0; i < len; i++) {
        if (src[i] > high) high = src[i];
      }

      return this.ts(high, id, src.__tf__);
    }
  }, {
    key: "highestbars",
    value: function highestbars(src, len) {// TODO: this
    } // Hull Moving Average

  }, {
    key: "hma",
    value: function hma(src, len, _id) {
      var id = this._tsid(_id, "hma(".concat(len, ")"));

      var len2 = Math.floor(len / 2);
      var len3 = Math.round(Math.sqrt(len));
      var a = this.mult(this.wma(src, len2, id + '1'), 2, id);
      var b = this.wma(src, len, id + '2');
      var delt = this.sub(a, b, id + '3');
      return this.wma(delt, len3, id + '4');
    }
  }, {
    key: "hour",
    value: function hour(time) {
      return new Date(time || t).getUTCHours();
    }
  }, {
    key: "iff",
    value: function iff(cond, x, y) {
      return cond ? x : z;
    } // Keltner Channels

  }, {
    key: "kc",
    value: function kc(src, len, mult, use_tr, _id, _tf) {
      if (use_tr === void 0) {
        use_tr = true;
      }

      var id = this._tsid(_id, "kc(".concat(len, ",").concat(mult, ",").concat(use_tr, ")"));

      var tfs = _tf || '';
      var high = this.env.shared["high".concat(tfs)];
      var low = this.env.shared["low".concat(tfs)];
      var basis = this.ema(src, len, id + '1');
      var range = use_tr ? this.tr(false, id + '2', _tf) : this.ts(high[0] - low[0], id + '3', src.__tf__);
      var ema = this.ema(range, len, id + '4');
      return [basis, this.ts(basis[0] + ema[0] * mult, id + '5', src.__tf__), this.ts(basis[0] - ema[0] * mult, id + '6', src.__tf__)];
    } // Keltner Channels Width

  }, {
    key: "kcw",
    value: function kcw(src, len, mult, use_tr, _id, _tf) {
      if (use_tr === void 0) {
        use_tr = true;
      }

      var id = this._tsid(_id, "kcw(".concat(len, ",").concat(mult, ",").concat(use_tr, ")"));

      var kc = this.kc(src, len, mult, use_tr, "kcw", _tf);
      return this.ts((kc[1][0] - kc[2][0]) / kc[0][0], id, src.__tf__);
    } // Linear Regression

  }, {
    key: "linreg",
    value: function linreg(src, len, offset, _id) {
      if (offset === void 0) {
        offset = 0;
      }

      var id = this._tsid(_id, "linreg(".concat(len, ")"));

      src.__len__ = Math.max(src.__len__ || 0, len);

      var lr = regression(src, len, offset);

      return this.ts(lr, id, src.__tf__);
    }
  }, {
    key: "log",
    value: function log(x) {
      return Math.log(x);
    }
  }, {
    key: "log10",
    value: function log10(x) {
      return Math.log10(x);
    }
  }, {
    key: "lowest",
    value: function lowest(src, len, _id) {
      var id = this._tsid(_id, "lowest(".concat(len, ")"));

      var low = Infinity;

      for (var i = 0; i < len; i++) {
        if (src[i] < low) low = src[i];
      }

      return this.ts(low, id, src.__tf__);
    }
  }, {
    key: "lowestbars",
    value: function lowestbars(src, len) {// TODO: this
    } // Moving Average Convergence/Divergence

  }, {
    key: "macd",
    value: function macd(src, fast, slow, sig, _id) {
      var id = this._tsid(_id, "macd(".concat(fast).concat(slow).concat(sig, ")"));

      var fast_ma = this.ema(src, fast, id + '1');
      var slow_ma = this.ema(src, slow, id + '2');
      var macd = this.sub(fast_ma, slow_ma, id + '3');
      var signal = this.ema(macd, sig, id + '4');
      var hist = this.sub(macd, signal, id + '5');
      return [macd, signal, hist];
    }
  }, {
    key: "max",
    value: function max() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      args.pop(); // Remove _id

      return Math.max.apply(Math, args);
    } // max_bars_back

  }, {
    key: "buffsize",
    value: function buffsize(src, len) {// TODO: this
    } // Money Flow Index

  }, {
    key: "mfi",
    value: function mfi(src, len, _id) {
      var id = this._tsid(_id, "mfi(".concat(len, ")"));

      var vol = this.env.shared.vol;
      var ch = this.change(src, 1, id + '1')[0];
      var ts1 = this.mult(vol, ch <= 0.0 ? 0.0 : src[0], id + '2');
      var ts2 = this.mult(vol, ch >= 0.0 ? 0.0 : src[0], id + '3');
      var upper = this.sum(ts1, len, id + '4');
      var lower = this.sum(ts2, len, id + '5');
      var res = undefined;

      if (!this.na(lower)) {
        res = this.rsi(upper, lower, id + '6')[0];
      }

      return this.ts(res, id, src.__tf__);
    }
  }, {
    key: "min",
    value: function min() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      args.pop(); // Remove _id

      return Math.min.apply(Math, args);
    }
  }, {
    key: "minute",
    value: function minute() {
      return new Date(time || script_engine.t).getUTCMinutes();
    } // Momentum

  }, {
    key: "mom",
    value: function mom(src, len, _id) {
      var id = this._tsid(_id, "mom(".concat(len, ")"));

      return this.ts(src[0] - src[len], id, src.__tf__);
    }
  }, {
    key: "month",
    value: function month(time) {
      return new Date(time || script_engine.t).getUTCMonth();
    } // Display data point on the main chart

  }, {
    key: "onchart",
    value: function onchart(x, name, sett, _id) {
      if (sett === void 0) {
        sett = {};
      }

      name = name || get_fn_id('Onchart', _id);
      if (x && x.__id__) x = x[0];

      if (Array.isArray(x) && x[0] && x[0].__id__) {
        x = x.map(function (x) {
          return x[0];
        });
      }

      if (!this.env.onchart[name]) {
        var type = sett.type;
        delete sett.type;
        sett.$synth = true;
        sett.skipNaN = true;
        var post = Array.isArray(x) ? 's' : '';
        this.env.onchart[name] = Object.assign({
          name: name,
          type: type || 'Spline' + post,
          data: [],
          settings: sett
        }, sett);
      }

      var v = Array.isArray(x) ? [script_engine.t].concat(toConsumableArray_default()(x)) : [script_engine.t, x];
      this.env.onchart[name].data.push(v);
    } // Create a new offchart overlay and put
    // the point there

  }, {
    key: "offchart",
    value: function offchart(x, name, sett, _id) {
      if (sett === void 0) {
        sett = {};
      }

      name = name || get_fn_id('Offchart', _id);
      if (x && x.__id__) x = x[0];

      if (Array.isArray(x) && x[0] && x[0].__id__) {
        x = x.map(function (x) {
          return x[0];
        });
      }

      if (!this.env.offchart[name]) {
        var type = sett.type;
        delete sett.type;
        sett.$synth = true;
        sett.skipNaN = true;
        var post = Array.isArray(x) ? 's' : '';
        this.env.offchart[name] = Object.assign({
          name: name,
          type: type || 'Spline' + post,
          data: [],
          settings: sett
        }, sett);
      }

      var v = Array.isArray(x) ? [script_engine.t].concat(toConsumableArray_default()(x)) : [script_engine.t, x];
      this.env.offchart[name].data.push(v);
    }
  }, {
    key: "offset",
    value: function offset() {// TODO: this
    } // percentile_linear_interpolation

  }, {
    key: "linearint",
    value: function linearint() {// TODO: this
    } // percentile_nearest_rank

  }, {
    key: "nearestrank",
    value: function nearestrank() {// TODO: this
    }
  }, {
    key: "percentrank",
    value: function percentrank() {// TODO: this
    }
  }, {
    key: "pivothigh",
    value: function pivothigh(src, left, right, _id) {
      var id = this._tsid(_id, "pivothigh(".concat(left, ",").concat(right, ")"));

      var len = left + right + 1;
      var top = src[right];

      for (var i = 0; i < len; i++) {
        if (top <= src[i] && i !== right) {
          return this.ts(NaN, id, src.__tf__);
        }
      }

      return this.ts(top, id, src.__tf__);
    }
  }, {
    key: "pivotlow",
    value: function pivotlow(src, left, right, _id) {
      var id = this._tsid(_id, "pivotlow(".concat(left, ",").concat(right, ")"));

      var len = left + right + 1;
      var bot = src[right];

      for (var i = 0; i < len; i++) {
        if (bot >= src[i] && i !== right) {
          return this.ts(NaN, id, src.__tf__);
        }
      }

      return this.ts(bot, id, src.__tf__);
    }
  }, {
    key: "pow",
    value: function pow(x) {
      return Math.pow(x);
    }
  }, {
    key: "rising",
    value: function rising(src, len, _id) {
      var id = this._tsid(_id, "rising(".concat(len, ")"));

      var top = src[0];

      for (var i = 1; i < len + 1; i++) {
        if (top <= src[i]) {
          return this.ts(false, id, src.__tf__);
        }
      }

      return this.ts(true, id, src.__tf__);
    } // Exponentially MA with alpha = 1 / length
    // Used in RSI

  }, {
    key: "rma",
    value: function rma(src, len, _id) {
      var id = this._tsid(_id, "rma(".concat(len, ")"));

      var a = len;
      var sum = this.ts(0, id, src.__tf__);
      sum[0] = this.na(sum[1]) ? this.sma(src, len, id)[0] : (src[0] + (a - 1) * this.nz(sum[1])) / a;
      return sum;
    } // Rate of Change

  }, {
    key: "roc",
    value: function roc(src, len, _id) {
      var id = this._tsid(_id, "roc(".concat(len, ")"));

      return this.ts(100 * (src[0] - src[len]) / src[len], id, src.__tf__);
    }
  }, {
    key: "round",
    value: function round(x) {
      return Math.round(x);
    } // Relative Strength Index

  }, {
    key: "rsi",
    value: function rsi(x, y, _id) {
      // Check if y is a timeseries
      if (!this.na(y) && y.__id__) {
        var id = this._tsid(_id, "rsi(x,y)");

        var rsi = 100 - 100 / (1 + this.div(x, y, id)[0]);
      } else {
        var id = this._tsid(_id, "rsi(".concat(y, ")"));

        var ch = this.change(x, 1, _id)[0];
        var pc = this.ts(Math.max(ch, 0), id + '1', x.__tf__);
        var nc = this.ts(-Math.min(ch, 0), id + '2', x.__tf__);
        var up = this.rma(pc, y, id + '3')[0];
        var down = this.rma(nc, y, id + '4')[0];
        var rsi = down === 0 ? 100 : up === 0 ? 0 : 100 - 100 / (1 + up / down);
      }

      return this.ts(rsi, id + '5', x.__tf__);
    } // Parabolic SAR

  }, {
    key: "sar",
    value: function sar(start, inc, max, _id, _tf) {
      // Source: Parabolic SAR by imuradyan
      // TODO: simplify the code
      // TODO: fix the custom TF mode
      var id = this._tsid(_id, "sar(".concat(start, ",").concat(inc, ",").concat(max, ")"));

      var tfs = _tf || '';
      var high = this.env.shared["high".concat(tfs)];
      var low = this.env.shared["low".concat(tfs)];
      var close = this.env.shared["close".concat(tfs)];
      var minTick = 0; //1e-7

      var out = this.ts(undefined, id + '1', _tf);
      var pos = this.ts(undefined, id + '2', _tf);
      var maxMin = this.ts(undefined, id + '3', _tf);
      var acc = this.ts(undefined, id + '4', _tf);
      var n = _tf ? out.__len__ - 1 : script_engine.iter;
      var prev;
      var outSet = false;

      if (n >= 1) {
        prev = out[1];

        if (n === 1) {
          if (close[0] > close[1]) {
            pos[0] = 1;
            maxMin[0] = Math.max(high[0], high[1]);
            prev = Math.min(low[0], low[1]);
          } else {
            pos[0] = -1;
            maxMin[0] = Math.min(low[0], low[1]);
            prev = Math.max(high[0], high[1]);
          }

          acc[0] = start;
        } else {
          pos[0] = pos[1];
          acc[0] = acc[1];
          maxMin[0] = maxMin[1];
        }

        if (pos[0] === 1) {
          if (high[0] > maxMin[0]) {
            maxMin[0] = high[0];
            acc[0] = Math.min(acc[0] + inc, max);
          }

          if (low[0] <= prev) {
            pos[0] = -1;
            out[0] = maxMin[0];
            maxMin[0] = low[0];
            acc[0] = start;
            outSet = true;
          }
        } else {
          if (low[0] < maxMin[0]) {
            maxMin[0] = low[0];
            acc[0] = Math.min(acc[0] + inc, max);
          }

          if (high[0] >= prev) {
            pos[0] = 1;
            out[0] = maxMin[0];
            maxMin[0] = high[0];
            acc[0] = start;
            outSet = true;
          }
        }

        if (!outSet) {
          out[0] = prev + acc[0] * (maxMin[0] - prev);
          if (pos[0] === 1) if (out[0] >= low[0]) out[0] = low[0] - minTick;
          if (pos[0] === -1) if (out[0] <= high[0]) out[0] = high[0] + minTick;
        }
      }

      return out;
    }
  }, {
    key: "second",
    value: function second(time) {
      return new Date(time || script_engine.t).getUTCSeconds();
    }
  }, {
    key: "sign",
    value: function sign(x) {
      return Math.sign(x);
    }
  }, {
    key: "sin",
    value: function sin(x) {
      return Math.sin(x);
    } // Simple Moving Average

  }, {
    key: "sma",
    value: function sma(src, len, _id) {
      var id = this._tsid(_id, "sma(".concat(len, ")"));

      var sum = 0;

      for (var i = 0; i < len; i++) {
        sum = sum + src[i];
      }

      return this.ts(sum / len, id, src.__tf__);
    }
  }, {
    key: "sqrt",
    value: function sqrt(x) {
      return Math.sqrt(x);
    }
  }, {
    key: "stdev",
    value: function stdev(src, len, _id) {
      var _this = this;

      var sumf = function sumf(x, y) {
        var res = x + y;

        if (Math.abs(res) <= _this.STDEV_EPS) {
          return 0;
        } else if (Math.abs(res) > _this.STDEV_Z) {
          return res;
        } else {
          return 15; // wtf?
        }
      };

      var id = this._tsid(_id, "stdev(".concat(len, ")"));

      var avg = this.sma(src, len, id);
      var sqd = 0;

      for (var i = 0; i < len; i++) {
        var sum = sumf(src[i], -avg[0]);
        sqd += sum * sum;
      }

      return this.ts(Math.sqrt(sqd / len), id, src.__tf__);
    } // Stochastic

  }, {
    key: "stoch",
    value: function stoch(src, high, low, len, _id) {
      var id = this._tsid(_id, "sum(".concat(len, ")"));

      var x = 100 * (src[0] - this.lowest(low, len)[0]);
      var y = this.highest(high, len)[0] - this.lowest(low, len)[0];
      return this.ts(x / y, id, src.__tf__);
    }
  }, {
    key: "sum",
    value: function sum(src, len, _id) {
      var id = this._tsid(_id, "sum(".concat(len, ")"));

      var sum = 0;

      for (var i = 0; i < len; i++) {
        sum = sum + src[i];
      }

      return this.ts(sum, id, src.__tf__);
    } // Supertrend

  }, {
    key: "supertrend",
    value: function supertrend(factor, atrlen, _id, _tf) {
      var id = this._tsid(_id, "supertrend(".concat(factor, ",").concat(atrlen, ")"));

      var tfs = _tf || '';
      var high = this.env.shared["high".concat(tfs)];
      var low = this.env.shared["low".concat(tfs)];
      var close = this.env.shared["close".concat(tfs)];
      var hl2 = (high[0] + low[0]) * 0.5;
      var atr = factor * this.atr(atrlen, id + '1', _tf)[0];
      var ls = this.ts(hl2 - atr, id + '2', _tf);
      var ls1 = this.nz(ls[1], ls[0]);
      ls[0] = close[1] > ls1 ? Math.max(ls[0], ls1) : ls[0];
      var ss = this.ts(hl2 + atr, id + '3', _tf);
      var ss1 = this.nz(ss[1], ss);
      ss[0] = close[1] < ss1 ? Math.min(ss[0], ss1) : ss[0];
      var dir = this.ts(1, id + '4', _tf);
      dir[0] = this.nz(dir[1], dir[0]);
      dir[0] = dir[0] === -1 && close[0] > ss1 ? 1 : dir[0] === 1 && close[0] < ls1 ? -1 : dir[0];
      var plot = this.ts(dir[0] === 1 ? ls[0] : ss[0], id + '5', _tf);
      return [plot, this.neg(dir, id + '6')];
    } // Symmetrically Weighted Moving Average

  }, {
    key: "swma",
    value: function swma(src, _id) {
      var id = this._tsid(_id, "swma");

      var sum = src[3] * this.SWMA[0] + src[2] * this.SWMA[1] + src[1] * this.SWMA[2] + src[0] * this.SWMA[3];
      return this.ts(sum, id, src.__tf__);
    }
  }, {
    key: "tan",
    value: function tan(x) {
      return Math.tan(x);
    }
  }, {
    key: "time",
    value: function time(res, sesh) {// TODO: this
    }
  }, {
    key: "timestamp",
    value: function timestamp() {// TODO: this
    } // True Range

  }, {
    key: "tr",
    value: function tr(fixnan, _id, _tf) {
      if (fixnan === void 0) {
        fixnan = false;
      }

      var id = this._tsid(_id, "tr(".concat(fixnan, ")"));

      var tfs = _tf || '';
      var high = this.env.shared["high".concat(tfs)];
      var low = this.env.shared["low".concat(tfs)];
      var close = this.env.shared["close".concat(tfs)];
      var res = 0;

      if (this.na(close[1]) && fixnan) {
        res = high[0] - low[0];
      } else {
        res = Math.max(high[0] - low[0], Math.abs(high[0] - close[1]), Math.abs(low[0] - close[1]));
      }

      return this.ts(res, id, _tf);
    } // True strength index

  }, {
    key: "tsi",
    value: function tsi(src, _short, _long, _id) {
      var id = this._tsid(_id, "tsi(".concat(_short, ",").concat(_long, ")"));

      var m = this.change(src, 1, id + '0');
      var m_abs = this.ts(Math.abs(m[0]), id + '1', src.__tf__);
      var tsi = this.ema(this.ema(m, _long, id + '1'), _short, id + '2')[0] / this.ema(this.ema(m_abs, _long, id + '3'), _short, id + '4')[0];
      return this.ts(tsi, id, src.__tf__);
    }
  }, {
    key: "valuewhen",
    value: function valuewhen() {// TODO: this
    }
  }, {
    key: "variance",
    value: function variance(src, len) {// TODO: this
    }
  }, {
    key: "vwap",
    value: function vwap(src) {// TODO: this
    } // Volume Weighted Moving Average

  }, {
    key: "vwma",
    value: function vwma(src, len, _id) {
      var id = this._tsid(_id, "vwma(".concat(len, ")"));

      var vol = this.env.shared.vol;
      var sxv = this.ts(src[0] * vol[0], id + '1', src.__tf__);
      var res = this.sma(sxv, len, id + '2')[0] / this.sma(vol, len, id + '3')[0];
      return this.ts(res, id + '4', src.__tf__);
    }
  }, {
    key: "weekofyear",
    value: function weekofyear() {// TODO: this
    }
  }, {
    key: "wma",
    value: function wma(src, len, _id) {
      var id = this._tsid(_id, "wma(".concat(len, ")"));

      var norm = 0;
      var sum = 0;

      for (var i = 0; i < len; i++) {
        var w = (len - i) * len;
        norm += w;
        sum += src[i] * w;
      }

      return this.ts(sum / norm, id, src.__tf__);
    } // Williams %R

  }, {
    key: "wpr",
    value: function wpr(len, _id, _tf) {
      var id = this._tsid(_id, "wpr(".concat(len, ")"));

      var tfs = _tf || '';
      var high = this.env.shared["high".concat(tfs)];
      var low = this.env.shared["low".concat(tfs)];
      var close = this.env.shared["close".concat(tfs)];
      var hh = this.highest(high, len, id);
      var ll = this.lowest(low, len, id);
      var res = (hh[0] - close[0]) / (hh[0] - ll[0]);
      return this.ts(-res * 100, id, _tf);
    }
  }, {
    key: "year",
    value: function year(time) {
      return new Date(time || script_engine.t).getUTCFullYear();
    }
  }]);

  return ScriptStd;
}();


// CONCATENATED MODULE: ./src/helpers/script_ts.js
// Timeseries for scripts
function TS(id, arr, len) {
  arr.__id__ = id;
  arr.__len__ = len;
  return arr;
}
// CONCATENATED MODULE: ./src/helpers/script_env.js




function script_env_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = script_env_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function script_env_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return script_env_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return script_env_arrayLikeToArray(o, minLen); }

function script_env_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Script environment. Packs everything that
// needed for a script execution together:
// script src, standart functions, input data,
// other overlays & dependencies




var FDEFS1 = /(function |)([$A-Z_][0-9A-Z_$\.]*)[\s]*?\((.*\s*)\)/gmi;
var FDEFS2 = /(function |)([\$A-Z_][\$\.0-9A-Z_]*)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*?\(([\s\S]*[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)\)/gmi;
var script_env_DEF_LIMIT = 5;

var script_env_ScriptEnv = /*#__PURE__*/function () {
  function ScriptEnv(s, data) {
    classCallCheck_default()(this, ScriptEnv);

    this.std = script_engine.std_inject(new script_std_ScriptStd(this));
    this.id = s.uuid;
    this.src = s;
    this.output = TS('output', []);
    this.data = [];
    this.tss = {};
    this.shared = data;
    this.output.box_maker = this.make_box(s.src);
    this.onchart = {};
    this.offchart = {};
  }

  createClass_default()(ScriptEnv, [{
    key: "build",
    value: function build() {
      this.output.box_maker(this, this.shared, script_engine);
      delete this.output.box_maker;
    }
  }, {
    key: "init",
    value: function init() {
      this.output.init();
    }
  }, {
    key: "step",
    value: function step(unshift) {
      if (unshift === void 0) {
        unshift = true;
      }

      if (unshift) this.unshift();
      var v = this.output.update();

      if (this.skip) {
        this.skip = false;
        return;
      }

      this.copy(v, unshift);
      this.limit();
    }
  }, {
    key: "unshift",
    value: function unshift() {
      this.output.unshift(undefined); // Update all temp symbols

      for (var id in this.tss) {
        if (this.tss[id].__tf__) continue;
        this.tss[id].unshift(undefined);
      }
    } // Limit env.output length

  }, {
    key: "limit",
    value: function limit() {
      var out = this.output;
      out.length = out.__len__ || script_env_DEF_LIMIT;

      for (var id in this.tss) {
        var ts = this.tss[id]; //console.log(ts.__id__, ts.__len__)

        ts.length = ts.__len__ || script_env_DEF_LIMIT;
      }
    } // Copy the recent value to the direct buff

  }, {
    key: "copy",
    value: function copy(v, unshift) {
      if (unshift === void 0) {
        unshift = true;
      }

      if (v !== undefined) {
        this.output[0] = v.__id__ ? v[0] : v;
      }

      var val = this.output[0];

      if (val == null || !val.length) {
        // Number / object
        var point = [script_engine.t, val];
      } else {
        // Array
        point = [script_engine.t].concat(toConsumableArray_default()(val));
      }

      if (unshift) {
        this.data.push(point);
      } else {
        this.data[this.data.length - 1] = point;
      }
    } // A small sandbox for a particular script
    // TODO: add support of 'Source' prop type (open, high, hl2 ...)

  }, {
    key: "make_box",
    value: function make_box(src) {
      var proto = Object.getPrototypeOf(this.std);
      var std = "";

      var _iterator = script_env_createForOfIteratorHelper(Object.getOwnPropertyNames(proto)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var k = _step.value;
          if (k === 'constructor') continue;
          std += "const std_".concat(k, " = self.std.").concat(k, ".bind(self.std)\n");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var props = "";

      for (var k in src.props) {
        var val = JSON.stringify(src.props[k].val);
        props += "var ".concat(k, " = ").concat(val, "\n");
      } // TODO: add argument values to _id
      // TODO: prefix all function by ns, e.g std_nz()


      var tss = "";

      for (var k in this.shared) {
        if (this.shared[k].__id__) {
          tss += "const ".concat(k, " = shared.").concat(k, "\n");
        }
      }

      try {
        return Function('self,shared,se', "\n                'use strict';\n\n                // Built-in functions (aliases)\n                ".concat(std, "\n\n                // Modules (API / interfaces)\n                ").concat(this.make_modules(), "\n\n                // Timeseries\n                ").concat(tss, "\n\n                // Direct data ts\n                const data = self.data\n                const ohlcv = shared.ohlcv\n\n                // Script's properties (init)\n                ").concat(props, "\n\n                this.init = () => {\n                    ").concat(src.init_src, "\n                }\n\n                this.update = (_id = 'root') => {\n                    const t = shared.t()\n                    const iter = shared.iter()\n                    ").concat(this.prep(src.upd_src), "\n                }\n\n                this.post = () => {\n                    ").concat(src.post_src, "\n                }\n            "));
      } catch (e) {
        return Function('self,shared', "\n                'use strict';\n                this.init = () => {}\n                this.update = () => {}\n                this.post = () => {}\n            ");
      }
    } // Make definitions for modules

  }, {
    key: "make_modules",
    value: function make_modules() {
      var s = "";

      for (var id in script_engine.mods) {
        if (!script_engine.mods[id].api) continue;
        s += "const ".concat(id, " = se.mods['").concat(id, "'].api[self.id]");
        s += '\n';
      }

      return s;
    } // Preprocess the update function.
    // Replace functions with the full arguments list +
    // generate & add tsid
    // TODO: implement recursive prepping (with js syntax parser)

  }, {
    key: "prep",
    value: function prep(src) {
      // console.log('Before -----> \n', src)
      var h = this.src.use_for[0]; // TODO: add props here

      src = '\t\t  let _pref = `${_id}<-' + h + '<-`\n' + src;
      FDEFS2.lastIndex = 0;
      var call_id = 0; // Function call id (to make each call unique)

      do {
        var m = FDEFS2.exec(src);

        if (m) {
          var fkeyword = m[1].trim();
          var fname = m[2];
          var fargs = m[3];

          if (fkeyword === 'function') {// TODO: add _ids to inline functions
          } else {
            var off = m.index + m[0].indexOf('(');

            if (this.std[fname]) {
              src = this.postfix(src, m, ++call_id); //console.log(src)

              off += 4; // 'std_'
            } // Quick fix


            FDEFS2.lastIndex = off;
          }
        }
      } while (m); // console.log('After ----->\n', u.wrap_idxs(src))


      return wrap_idxs(src, 'std_');
    } // Postfix function calls with ts _ids

  }, {
    key: "postfix",
    value: function postfix(src, m, call_id) {
      var target = this.get_args(this.fdef(m[2])).length;
      var m0 = this.parentheses(m[0]); // First closed pair

      var args = this.get_args_2(m0);

      for (var i = args.length; i < target; i++) {
        args.push('void 0');
      } // Add an unique time-series id


      args.push("_pref+\"f".concat(call_id, "\""));
      return src.replace(m0, "std_".concat(m[2], "(").concat(args.join(', '), ")"));
    }
  }, {
    key: "parentheses",
    value: function parentheses(str) {
      var count = 0,
          first = false;

      for (var i = 0; i < str.length; i++) {
        if (str[i] === '(') {
          count++;
          first = true;
        } else if (str[i] === ')') {
          count--;
        }

        if (first && count === 0) {
          return str.substr(0, i + 1);
        }
      }

      return str;
    } // Get the function definition
    // TODO: add support of modules

  }, {
    key: "fdef",
    value: function fdef(fname) {
      return this.std[fname].toString();
    } // Get args in the function's definition

  }, {
    key: "get_args",
    value: function get_args(src) {
      var reg = this.regex_clone(FDEFS1);
      reg.lastIndex = 0;
      var m = reg.exec(src);
      if (!m[3].trim().length) return [];
      var arr = m[3].split(',').map(function (x) {
        return x.trim();
      }).filter(function (x) {
        return x !== '_id' && x !== '_tf';
      });
      return arr;
    }
  }, {
    key: "get_args_2",
    value: function get_args_2(str) {
      var parts = [];
      var c = 0;
      var s = 0;
      var q1 = false,
          q2 = false,
          q3 = false;
      var part;

      for (var i = 0; i < str.length; i++) {
        if (str[i] === '(') {
          c++;
          if (!part) part = [i + 1];
        }

        if (str[i] === ')') c--;
        if (str[i] === '[') s++;
        if (str[i] === ']') s--;
        if (str[i] === "'") q1 = !q1;
        if (str[i] === '"') q2 = !q2;
        if (str[i] === '`') q3 = !q3;

        if (str[i] === ',' && c === 1 && !s && !q1 && !q2 && !q3) {
          if (part) {
            part[1] = i;
            parts.push(part);
            part = [i + 1];
          }
        }

        if (c === 0 && part) {
          part[1] = i;
          parts.push(part);
          part = null;
        }
      }

      return parts.map(function (x) {
        return str.slice.apply(str, toConsumableArray_default()(x));
      }).filter(function (x) {
        return /[^\s]+/.exec(x);
      });
    }
  }, {
    key: "regex_clone",
    value: function regex_clone(rex) {
      return new RegExp(rex.source, rex.flags);
    }
  }]);

  return ScriptEnv;
}();


// CONCATENATED MODULE: ./src/helpers/symstd.js
function symstd_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = symstd_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function symstd_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return symstd_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return symstd_arrayLikeToArray(o, minLen); }

function symstd_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Parse non-default symbols, e.g. close1D, hlc3
// & inject the corresponding TSs or samplers





var SYMTF = /(open|high|low|close|vol)(\d+)(\w*)/gm;
var FNSTD = /(a?tr|kcw?|dmi|sar|supertrend|wpr)(\d+?\w*)\s*\(/gm;
var SYMSTD = /(?:hl2|hlc3|ohlc4)/gm;
/* harmony default export */ var symstd = ({
  parse: function parse(s) {
    var _this = this;

    var ss = s.src;
    var all = "".concat(ss.init_src, "\n").concat(ss.upd_src, "\n").concat(ss.post_src);
    SYMTF.lastIndex = 0;
    FNSTD.lastIndex = 0;
    SYMSTD.lastIndex = 0;

    do {
      var m = SYMTF.exec(all);

      if (m) {
        if (m[0] in script_engine.tss) continue;
        var ts = script_engine.tss[m[0]] = TS(m[0], []);
        ts.__tf__ = tf_from_pair(m[2], m[3]);
        ts.__fn__ = sampler(m[1]).bind(ts);
      }
    } while (m);

    do {
      var m = SYMSTD.exec(all);

      if (m) {
        if (m[0] in script_engine.tss) continue;
        this.parse_ts_sym(m[0]);
      }
    } while (m);

    do {
      var m = FNSTD.exec(all);

      if (m) {
        var _ret = function () {
          var fn = m[1] + m[2];
          var tf = m[2];
          if (fn in script_engine.std_plus) return "continue";

          switch (m[1]) {
            case 'tr':
              _this.deps(['high', 'low', 'close'], m[2]);

              script_engine.std_plus[fn] = function (fixnan, _id) {
                if (fixnan === void 0) {
                  fixnan = false;
                }

                return this.tr(fixnan, _id, tf);
              };

              break;

            case 'atr':
              _this.deps(['high', 'low', 'close'], m[2]);

              script_engine.std_plus[fn] = function (len, _id) {
                return this.atr(len, _id, tf);
              };

              break;

            case 'kc':
              _this.deps(['high', 'low', 'close'], m[2]);

              script_engine.std_plus[fn] = function (src, len, mult, use_tr, _id) {
                if (use_tr === void 0) {
                  use_tr = true;
                }

                return this.kc(src, len, mult, use_tr, _id, tf);
              };

              break;

            case 'kcw':
              _this.deps(['high', 'low', 'close'], m[2]);

              script_engine.std_plus[fn] = function (src, len, mult, use_tr, _id) {
                if (use_tr === void 0) {
                  use_tr = true;
                }

                return this.kcw(src, len, mult, use_tr, _id, tf);
              };

              break;

            case 'dmi':
              _this.deps(['high', 'low', 'close'], m[2]);

              script_engine.std_plus[fn] = function (len, smooth, _id) {
                return this.dmi(len, smooth, _id, tf);
              };

              break;

            case 'sar':
              _this.deps(['high', 'low', 'close'], m[2]);

              script_engine.std_plus[fn] = function (start, inc, max, _id) {
                return this.sar(start, inc, max, _id, tf);
              };

              break;

            case 'supertrend':
              _this.deps(['high', 'low', 'close'], m[2]);

              script_engine.std_plus[fn] = function (factor, atrlen, _id) {
                return this.supertrend(factor, atrlen, _id, tf);
              };

              break;

            case 'wpr':
              _this.deps(['high', 'low', 'close'], m[2]);

              script_engine.std_plus[fn] = function (len, _id) {
                return this.wpr(len, _id, tf);
              };

              break;
          }
        }();

        if (_ret === "continue") continue;
      }
    } while (m);
  },
  parse_ts_sym: function parse_ts_sym(sym, tf) {
    switch (sym) {
      // Timeseries
      case 'hl2':
        script_engine.tss['hl2'] = TS('hl2', []);

        script_engine.tss['hl2'].__fn__ = function () {
          return (script_engine.high[0] + script_engine.low[0]) * 0.5;
        };

        break;

      case 'hlc3':
        script_engine.tss['hlc3'] = TS('hlc3', []);

        script_engine.tss['hlc3'].__fn__ = function () {
          return (script_engine.high[0] + script_engine.low[0] + script_engine.close[0]) / 3;
        };

        break;

      case 'ohlc4':
        script_engine.tss['ohlc4'] = TS('ohlc4', []);

        script_engine.tss['ohlc4'].__fn__ = function () {
          return (script_engine.open[0] + script_engine.high[0] + script_engine.low[0] + script_engine.close[0]) * 0.25;
        };

        break;
    }
  },
  deps: function deps(types, tf) {
    var _iterator = symstd_createForOfIteratorHelper(types),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var type = _step.value;
        var sym = type + tf;
        if (sym in script_engine.tss) continue;
        var ts = script_engine.tss[sym] = TS(sym, []);
        ts.__tf__ = tf_from_str(tf);
        ts.__fn__ = sampler(type).bind(ts);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
});
// CONCATENATED MODULE: ./src/helpers/script_engine.js





function script_engine_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = script_engine_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function script_engine_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return script_engine_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return script_engine_arrayLikeToArray(o, minLen); }

function script_engine_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Script engine, Fuck yeah





var script_engine_DEF_LIMIT = 5; // default buff length

var WAIT_EXEC = 10; // merge script execs, ms

var script_engine_ScriptEngine = /*#__PURE__*/function () {
  function ScriptEngine() {
    classCallCheck_default()(this, ScriptEngine);

    this.map = {};
    this.data = {};
    this.exec_id = null;
    this.queue = []; // Script exec queue

    this.delta_queue = []; // Settings queue

    this.update_queue = []; // Live update queue

    this.sett = {};
    this.state = {};
    this.mods = {}; // Modules (extensions)

    this.std_plus = {}; // Functions to inject
  }

  createClass_default()(ScriptEngine, [{
    key: "exec_all",
    value: function exec_all() {
      var _this = this;

      clearTimeout(this.exec_id); // Wait for the data

      if (!this.data.ohlcv) return; // Execute queue after all scripts & data are loaded

      this.exec_id = setTimeout( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.init_state(Object.keys(_this.map))) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _this.re_init_map();

                while (_this.queue.length) {
                  _this.exec(_this.queue.shift());
                }

                if (!Object.keys(_this.map).length) {
                  _context.next = 8;
                  break;
                }

                _context.next = 7;
                return _this.run();

              case 7:
                _this.drain_queues();

              case 8:
                _this.send_state();

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })), WAIT_EXEC);
    } // Exec selected

  }, {
    key: "exec_sel",
    value: function () {
      var _exec_sel = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(delta) {
        var _this2 = this;

        var sel, id, props, k;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.data.ohlcv) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                sel = Object.keys(delta).filter(function (x) {
                  return x in _this2.map;
                });

                if (this.init_state(sel)) {
                  _context2.next = 6;
                  break;
                }

                this.delta_queue.push(delta);
                return _context2.abrupt("return");

              case 6:
                _context2.t0 = regenerator_default.a.keys(delta);

              case 7:
                if ((_context2.t1 = _context2.t0()).done) {
                  _context2.next = 16;
                  break;
                }

                id = _context2.t1.value;

                if (this.map[id]) {
                  _context2.next = 11;
                  break;
                }

                return _context2.abrupt("continue", 7);

              case 11:
                props = this.map[id].src.props;

                for (k in props) {
                  if (k in delta[id]) {
                    props[k].val = delta[id][k];
                  }
                }

                this.exec(this.map[id]);
                _context2.next = 7;
                break;

              case 16:
                _context2.next = 18;
                return this.run(sel);

              case 18:
                this.drain_queues();
                this.send_state();

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function exec_sel(_x) {
        return _exec_sel.apply(this, arguments);
      }

      return exec_sel;
    }() // Exec script (create a new ScriptEnv, add to the map)

  }, {
    key: "exec",
    value: function exec(s) {
      var _this3 = this;

      if (!s.src.conf) s.src.conf = {};

      if (s.src.init) {
        s.src.init_src = get_raw_src(s.src.init);
      }

      if (s.src.update) {
        s.src.upd_src = get_raw_src(s.src.update);
      }

      if (s.src.post) {
        s.src.post_src = get_raw_src(s.src.post);
      } // Parse non-default symbols


      symstd.parse(s);

      for (var id in this.mods) {
        if (this.mods[id].pre_env) {
          this.mods[id].pre_env(s.uuid, s);
        }
      }

      s.env = new script_env_ScriptEnv(s, Object.assign({
        open: this.open,
        high: this.high,
        low: this.low,
        close: this.close,
        vol: this.vol,
        ohlcv: this.data.ohlcv,
        t: function t() {
          return _this3.t;
        },
        iter: function iter() {
          return _this3.iter;
        }
      }, this.tss));
      this.map[s.uuid] = s;

      for (var id in this.mods) {
        if (this.mods[id].new_env) {
          this.mods[id].new_env(s.uuid, s);
        }
      } // Build te box after mod's interfaces injected


      s.env.build();
    } // Live update

  }, {
    key: "update",
    value: function update(candle) {
      if (!this.data.ohlcv || !this.data.ohlcv.length) {
        return;
      }

      if (this.running) {
        this.update_queue.push(candle);
        return;
      }

      var mfs1 = this.make_mods_hooks('pre_step');
      var mfs2 = this.make_mods_hooks('post_step');

      try {
        var ohlcv = this.data.ohlcv;
        var i = ohlcv.length - 1;
        var last = ohlcv[i];
        var sel = Object.keys(this.map);
        var unshift = false;

        if (candle[0] > last[0]) {
          ohlcv.push(candle);
          unshift = true;
          i++;
        } else if (candle[0] < last[0]) {
          return;
        } else {
          ohlcv[i] = candle;
        }

        this.iter = i;
        this.t = ohlcv[i][0];
        this.step(ohlcv[i], unshift);

        for (var m = 0; m < mfs1.length; m++) {
          mfs1[m](sel); // pre_step
        }

        for (var _i = 0, _sel = sel; _i < _sel.length; _i++) {
          var id = _sel[_i];
          this.map[id].env.step(unshift);
        }

        for (var m = 0; m < mfs2.length; m++) {
          mfs2[m](sel); // post_step
        }

        this.limit();
        this.send_update();
        this.send_state();
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: "init_state",
    value: function init_state(sel) {
      var task = sel.join(','); // Stop previous run only if the task is the same

      if (this.running) {
        this._restart = task === this.task;
        return false;
      } // Inverted arrays


      this.open = TS('open', []);
      this.high = TS('high', []);
      this.low = TS('low', []);
      this.close = TS('close', []);
      this.vol = TS('vol', []); // Shared TSs

      this.tss = {};
      this.std_plus = {}; // Engine state

      this.iter = 0;
      this.t = 0;
      this.skip = false; // skip the step

      this.running = true;
      this.task = task;
      return true;
    } // Inject/override functions in the std lib object

  }, {
    key: "std_inject",
    value: function std_inject(std) {
      var proto = Object.getPrototypeOf(std);
      Object.assign(proto, this.std_plus);
      return std;
    }
  }, {
    key: "send_state",
    value: function send_state() {
      this.send('engine-state', {
        scripts: Object.keys(this.map).length,
        last_perf: this.perf,
        iter: this.iter,
        last_t: this.t,
        running: false
      });
    }
  }, {
    key: "send_update",
    value: function send_update() {
      this.send('overlay-update', this.format_update());
    }
  }, {
    key: "re_init_map",
    value: function re_init_map() {
      for (var id in this.map) {
        this.exec(this.map[id]);
      }
    }
  }, {
    key: "run",
    value: function () {
      var _run = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3(sel) {
        var t1, mfs1, mfs2, _iterator, _step, id, ohlcv, start, i, m, _iterator2, _step2, _iterator3, _step3;

        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.send('engine-state', {
                  running: true
                });
                t1 = utils.now();
                sel = sel || Object.keys(this.map);
                this.pre_run_mods(sel);
                mfs1 = this.make_mods_hooks('pre_step');
                mfs2 = this.make_mods_hooks('post_step');
                _context3.prev = 6;
                _iterator = script_engine_createForOfIteratorHelper(sel);

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    id = _step.value;
                    this.map[id].env.init();
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                ohlcv = this.data.ohlcv;
                start = this.start(ohlcv);
                i = start;

              case 12:
                if (!(i < ohlcv.length)) {
                  _context3.next = 29;
                  break;
                }

                if (!(i % 5000 === 0)) {
                  _context3.next = 16;
                  break;
                }

                _context3.next = 16;
                return utils.pause(0);

              case 16:
                if (!this.restarted()) {
                  _context3.next = 18;
                  break;
                }

                return _context3.abrupt("return");

              case 18:
                this.iter = i - start;
                this.t = ohlcv[i][0];
                this.step(ohlcv[i]); // SLOW DOWN TEST:
                //for (var k = 1; k < 1000000; k++) {}

                for (m = 0; m < mfs1.length; m++) {
                  mfs1[m](sel); // pre_step
                }

                _iterator2 = script_engine_createForOfIteratorHelper(sel);

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    id = _step2.value;
                    this.map[id].env.step();
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                for (m = 0; m < mfs2.length; m++) {
                  mfs2[m](sel); // post_step
                }

                this.limit();

              case 26:
                i++;
                _context3.next = 12;
                break;

              case 29:
                _iterator3 = script_engine_createForOfIteratorHelper(sel);

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    id = _step3.value;
                    this.map[id].env.output.post();
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                _context3.next = 36;
                break;

              case 33:
                _context3.prev = 33;
                _context3.t0 = _context3["catch"](6);
                console.log(_context3.t0);

              case 36:
                this.post_run_mods(sel);
                this.perf = utils.now() - t1; //console.log('Perf',  this.perf)

                this.running = false;
                this.send('overlay-data', this.format_map(sel));

              case 40:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[6, 33]]);
      }));

      function run(_x2) {
        return _run.apply(this, arguments);
      }

      return run;
    }()
  }, {
    key: "step",
    value: function step(data, unshift) {
      if (unshift === void 0) {
        unshift = true;
      }

      if (unshift) {
        this.open.unshift(data[1]);
        this.high.unshift(data[2]);
        this.low.unshift(data[3]);
        this.close.unshift(data[4]);
        this.vol.unshift(data[5]);

        for (var id in this.tss) {
          if (this.tss[id].__tf__) this.tss[id].__fn__();else this.tss[id].unshift(this.tss[id].__fn__());
        }
      } else {
        this.open[0] = data[1];
        this.high[0] = data[2];
        this.low[0] = data[3];
        this.close[0] = data[4];
        this.vol[0] = data[5];

        for (var id in this.tss) {
          this.tss[id] = this.tss[id].__fn__();
        }
      }
    }
  }, {
    key: "limit",
    value: function limit() {
      this.open.length = this.open.__len__ || script_engine_DEF_LIMIT;
      this.high.length = this.high.__len__ || script_engine_DEF_LIMIT;
      this.low.length = this.low.__len__ || script_engine_DEF_LIMIT;
      this.close.length = this.close.__len__ || script_engine_DEF_LIMIT;
      this.vol.length = this.vol.__len__ || script_engine_DEF_LIMIT;
    }
  }, {
    key: "start",
    value: function start(ohlcv) {
      var depth = this.sett.script_depth;
      return depth ? Math.max(ohlcv.length - depth, 0) : 0;
    }
  }, {
    key: "drain_queues",
    value: function drain_queues() {
      // Check if there are any new scripts (recieved during
      // the current run)
      if (this.queue.length) {
        this.exec_all();
      } // Check if there are any new settings deltas (...)
      else if (this.delta_queue.length) {
          this.exec_sel(this.delta_queue.pop());
          this.delta_queue = [];
        } else {
          while (this.update_queue.length) {
            var c = this.update_queue.shift();
            this.update(c);
          }
        }
    }
  }, {
    key: "format_map",
    value: function format_map(sel) {
      sel = sel || Object.keys(this.map);
      var res = [];

      var _iterator4 = script_engine_createForOfIteratorHelper(sel),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var id = _step4.value;
          var x = this.map[id];
          res.push({
            id: id,
            data: x.env.data,
            new_ovs: {
              onchart: x.env.onchart,
              offchart: x.env.offchart
            }
          });
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return res;
    }
  }, {
    key: "format_update",
    value: function format_update() {
      var res = [];

      for (var id in this.map) {
        var x = this.map[id];
        res.push({
          id: id,
          data: x.env.data[x.env.data.length - 1]
        });
      }

      return res;
    }
  }, {
    key: "restarted",
    value: function restarted() {
      if (this._restart) {
        this._restart = false;
        this.running = false;
        this.perf = 0; //console.log('Restarted')

        return true;
      }

      return false;
    }
  }, {
    key: "remove_scripts",
    value: function remove_scripts(ids) {
      var _iterator5 = script_engine_createForOfIteratorHelper(ids),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var id = _step5.value;
          delete this.map[id];
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      this.send_state();
    }
  }, {
    key: "pre_run_mods",
    value: function pre_run_mods(sel) {
      for (var id in this.mods) {
        if (this.mods[id].pre_run) {
          this.mods[id].pre_run(sel);
        }
      }
    }
  }, {
    key: "post_run_mods",
    value: function post_run_mods(sel) {
      for (var id in this.mods) {
        if (this.mods[id].post_run) {
          this.mods[id].post_run(sel);
        }
      }
    }
  }, {
    key: "make_mods_hooks",
    value: function make_mods_hooks(name) {
      var arr = [];

      for (var id in this.mods) {
        if (this.mods[id][name]) {
          arr.push(this.mods[id][name].bind(this.mods[id]));
        }
      }

      return arr;
    }
  }]);

  return ScriptEngine;
}();

/* harmony default export */ var script_engine = (new script_engine_ScriptEngine());
// CONCATENATED MODULE: ./src/helpers/script_ww.js


// Web-worker



var data_requested = false; // DC => WW

self.onmessage = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(e) {
    var lib;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = e.data.type;
            _context.next = _context.t0 === 'update-dc-settings' ? 3 : _context.t0 === 'exec-script' ? 5 : _context.t0 === 'exec-all-scripts' ? 9 : _context.t0 === 'upload-data' ? 12 : _context.t0 === 'upload-module' ? 20 : _context.t0 === 'module-event' ? 23 : _context.t0 === 'update-data' ? 24 : _context.t0 === 'update-ov-settings' ? 26 : _context.t0 === 'remove-scripts' ? 28 : 30;
            break;

          case 3:
            script_engine.sett = e.data.data;
            return _context.abrupt("break", 30);

          case 5:
            if (!script_engine.data.ohlcv && !data_requested) {
              data_requested = true;
              self.postMessage({
                type: 'request-data'
              });
            }

            script_engine.queue.push(e.data.data);
            script_engine.exec_all();
            return _context.abrupt("break", 30);

          case 9:
            if (!script_engine.data.ohlcv && !data_requested) {
              data_requested = true;
              self.postMessage({
                type: 'request-data'
              });
            }

            script_engine.exec_all();
            return _context.abrupt("break", 30);

          case 12:
            if (!e.data.data.ohlcv) {
              _context.next = 19;
              break;
            }

            self.postMessage({
              type: 'data-uploaded'
            });
            _context.next = 16;
            return utils.pause(1);

          case 16:
            script_engine.data.ohlcv = e.data.data.ohlcv;
            data_requested = false;
            script_engine.exec_all();

          case 19:
            return _context.abrupt("break", 30);

          case 20:
            lib = make_module_lib(e.data.data);
            script_engine.mods[e.data.data.id] = new new Function('mod', 'se', 'lib', f_body(e.data.data.main))(e.data.data.id, script_engine, lib);
            return _context.abrupt("break", 30);

          case 23:
            return _context.abrupt("break", 30);

          case 24:
            if (e.data.data.ohlcv) {
              script_engine.update(e.data.data.ohlcv);
            }

            return _context.abrupt("break", 30);

          case 26:
            script_engine.exec_sel(e.data.data);
            return _context.abrupt("break", 30);

          case 28:
            script_engine.remove_scripts(e.data.data);
            return _context.abrupt("break", 30);

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(); // WW => DC


script_engine.send = function (type, data) {
  switch (type) {
    case 'overlay-data':
    case 'overlay-update':
    case 'engine-state':
    case 'change-overlay':
    case 'module-data':
      self.postMessage({
        type: type,
        data: data
      });
      break;
  }
};
// CONCATENATED MODULE: ./src/helpers/script_ww_api.js




// Webworker interface
// Compiled webworker (see webpack/ww_plugin.js)



 // For webworker-loader to find the ww

var script_ww_api_WebWork = /*#__PURE__*/function () {
  function WebWork() {
    classCallCheck_default()(this, WebWork);

    this.tasks = {};

    this.onevent = function () {};

    this.start();
  }

  createClass_default()(WebWork, [{
    key: "start",
    value: function start() {
      var _this = this;

      if (this.worker) this.worker.terminate(); // URL.createObjectURL

      window.URL = window.URL || window.webkitURL;
      var data = lz_string_default.a.decompressFromBase64(ww$$$[0]);
      var blob;

      try {
        blob = new Blob([data], {
          type: 'application/javascript'
        });
      } catch (e) {
        // Backwards-compatibility
        window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
        blob = new BlobBuilder();
        blob.append(data);
        blob = blob.getBlob();
      }

      this.worker = new Worker(URL.createObjectURL(blob));

      this.worker.onmessage = function (e) {
        return _this.onmessage(e);
      };
    }
  }, {
    key: "send",
    value: function send(msg, tx_keys) {
      if (tx_keys) {
        var tx_objs = tx_keys.map(function (k) {
          return msg.data[k];
        });
        this.worker.postMessage(msg, tx_objs);
      } else {
        this.worker.postMessage(msg);
      }
    }
  }, {
    key: "onmessage",
    value: function onmessage(e) {
      if (e.data.id in this.tasks) {
        this.tasks[e.data.id](e.data.data);
        delete this.tasks[e.data.id];
      } else {
        this.onevent(e);
      }
    } // Execute a task

  }, {
    key: "exec",
    value: function () {
      var _exec = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(type, data, tx_keys) {
        var _this2 = this;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (rs, rj) {
                  var id = utils.uuid();

                  _this2.send({
                    type: type,
                    id: id,
                    data: data
                  }, tx_keys);

                  _this2.tasks[id] = function (res) {
                    rs(res);
                  };
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function exec(_x, _x2, _x3) {
        return _exec.apply(this, arguments);
      }

      return exec;
    }() // Execute a task, but just fucking do it,
    // do not wait for the result

  }, {
    key: "just",
    value: function just(type, data, tx_keys) {
      var id = utils.uuid();
      this.send({
        type: type,
        id: id,
        data: data
      }, tx_keys);
    } // Relay an event from iframe postMessage
    // (for the future)

  }, {
    key: "relay",
    value: function () {
      var _relay = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(event, just) {
        var _this3 = this;

        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (just === void 0) {
                  just = false;
                }

                return _context2.abrupt("return", new Promise(function (rs, rj) {
                  _this3.send(event, event.tx_keys);

                  if (!just) {
                    _this3.tasks[event.id] = function (res) {
                      rs(res);
                    };
                  }
                }));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function relay(_x4, _x5) {
        return _relay.apply(this, arguments);
      }

      return relay;
    }()
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.worker) this.worker.terminate();
    }
  }]);

  return WebWork;
}();

/* harmony default export */ var script_ww_api = (script_ww_api_WebWork);
// CONCATENATED MODULE: ./src/helpers/dc_events.js



function dc_events_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = dc_events_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function dc_events_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dc_events_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dc_events_arrayLikeToArray(o, minLen); }

function dc_events_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// DataCube event handlers




var dc_events_DCEvents = /*#__PURE__*/function () {
  function DCEvents() {
    var _this = this;

    classCallCheck_default()(this, DCEvents);

    this.ww = new script_ww_api(); // Listen to the web-worker events

    this.ww.onevent = function (e) {
      var _iterator = dc_events_createForOfIteratorHelper(_this.tv.controllers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ctrl = _step.value;
          if (ctrl.ww) ctrl.ww(e.data);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      switch (e.data.type) {
        case 'request-data':
          var main = _this.data.chart.data; // TODO: DataTunnel class for smarter data transfer

          if (_this.ww._data_uploading) break;

          _this.ww.just('upload-data', {
            ohlcv: main
          });

          _this.ww._data_uploading = true;
          break;

        case 'overlay-data':
          _this.on_overlay_data(e.data.data);

          break;

        case 'overlay-update':
          _this.on_overlay_update(e.data.data);

          break;

        case 'data-uploaded':
          _this.ww._data_uploading = false;
          break;

        case 'engine-state':
          _this.se_state = Object.assign(_this.se_state || {}, e.data.data);
          break;

        case 'change-overlay':
          _this.change_overlay(e.data.data);

          break;
      }

      var _iterator2 = dc_events_createForOfIteratorHelper(_this.tv.controllers),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var ctrl = _step2.value;
          if (ctrl.post_ww) ctrl.post_ww(e.data);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    };
  } // Called when overalay/tv emits 'custom-event'


  createClass_default()(DCEvents, [{
    key: "on_custom_event",
    value: function on_custom_event(event, args) {
      switch (event) {
        case 'register-tools':
          this.register_tools(args);
          break;

        case 'exec-script':
          this.exec_script(args);
          break;

        case 'data-len-changed':
          this.data_changed(args);
          break;

        case 'tool-selected':
          if (!args[0]) break; // TODO: Quick fix, investigate

          if (args[0].split(':')[0] === 'System') {
            this.system_tool(args[0].split(':')[1]);
            break;
          }

          this.tv.$set(this.data, 'tool', args[0]);

          if (args[0] === 'Cursor') {
            this.drawing_mode_off();
          }

          break;

        case 'grid-mousedown':
          // TODO: tool state finished?
          this.object_selected([]);

          if (this.data.tool && this.data.tool !== 'Cursor' && !this.data.drawingMode) {
            this.tv.$set(this.data, 'drawingMode', true);
            this.build_tool(args[0]);
          }

          break;

        case 'drawing-mode-off':
          this.drawing_mode_off();
          break;

        case 'change-settings':
          this.change_settings(args);
          break;

        case 'scroll-lock':
          this.on_scroll_lock(args[0]);
          break;

        case 'object-selected':
          this.object_selected(args);
          break;

        case 'remove-tool':
          this.system_tool('Remove');
          break;

        case 'before-destroy':
          this.before_destroy();
          break;
      }
    } // Triggered when one or multiple settings are changed
    // We select only the changed ones & re-exec them on the
    // web worker

  }, {
    key: "on_settings",
    value: function on_settings(values, prev) {
      var _this2 = this;

      if (!this.sett.scripts) return;
      var delta = {};
      var changed = false;

      var _loop = function _loop() {
        var n = values[i];
        var arr = prev.filter(function (x) {
          return x.v === n.v;
        });

        if (!arr.length && n.p.settings.$props) {
          var id = n.p.settings.$uuid;
          delta[id] = n.v;
          changed = true;

          _this2.tv.$set(n.p, 'loading', true);
        }
      };

      for (var i = 0; i < values.length; i++) {
        _loop();
      } // TODO: send settings only if a script prop is changed


      if (changed) {
        this.ww.just('update-ov-settings', delta);
      }
    } // When the set of $uuids is changed

  }, {
    key: "on_ids_changed",
    value: function on_ids_changed(values, prev) {
      var rem = prev.filter(function (x) {
        return x !== undefined && !values.includes(x);
      });

      if (rem.length) {
        this.ww.just('remove-scripts', rem);
      }
    } // Combine all tools and their mods

  }, {
    key: "register_tools",
    value: function register_tools(tools) {
      var preset = {};

      var _iterator3 = dc_events_createForOfIteratorHelper(this.data.tools || []),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var tool = _step3.value;
          preset[tool.type] = tool;
          delete tool.type;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      this.tv.$set(this.data, 'tools', []);
      var list = [{
        type: 'Cursor',
        icon: icons['cursor.png']
      }];

      var _iterator4 = dc_events_createForOfIteratorHelper(tools),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var tool = _step4.value;
          var proto = Object.assign({}, tool.info);
          var type = tool.info.type || 'Default';
          proto.type = "".concat(tool.use_for, ":").concat(type);
          this.merge_presets(proto, preset[tool.use_for]);
          this.merge_presets(proto, preset[proto.type]);
          delete proto.mods;
          list.push(proto);

          for (var mod in tool.info.mods) {
            var mp = Object.assign({}, proto);
            mp = Object.assign(mp, tool.info.mods[mod]);
            mp.type = "".concat(tool.use_for, ":").concat(mod);
            this.merge_presets(mp, preset[tool.use_for]);
            this.merge_presets(mp, preset[mp.type]);
            list.push(mp);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      this.tv.$set(this.data, 'tools', list);
      this.tv.$set(this.data, 'tool', 'Cursor');
    }
  }, {
    key: "exec_script",
    value: function exec_script(args) {
      if (args.length && this.sett.scripts) {
        var obj = this.get_overlay(args[0]);
        if (!obj || obj.scripts === false) return; // Parse script props & get the values from the ov
        // TODO: remove unnecessary script initializations

        var s = obj.settings;
        var props = args[0].src.props;
        if (!s.$uuid) s.$uuid = "".concat(obj.type, "-").concat(utils.uuid2());
        args[0].uuid = s.$uuid;

        for (var k in props || {}) {
          var proto = props[k];

          if (s[k] !== undefined) {
            proto.val = s[k]; // use the existing val

            continue;
          }

          if (proto.def === undefined) {
            // TODO: add support of info / errors to the legend
            console.error("Overlay ".concat(obj.id, ": script prop '").concat(k, "' ") + "doesn't have a default value");
            return;
          }

          s[k] = proto.val = proto.def; // set the default
        } // Remove old props (dropped by the current exec)


        if (s.$props) {
          for (var k in s) {
            if (s.$props.includes(k) && !(k in props)) {
              delete s[k];
            }
          }
        }

        s.$props = Object.keys(args[0].src.props);
        this.tv.$set(obj, 'loading', true);
        this.ww.just('exec-script', args[0]);
      }
    }
  }, {
    key: "exec_all_scripts",
    value: function exec_all_scripts() {
      if (!this.sett.scripts) return;
      this.merge('.', {
        loading: true
      });
      this.ww.just('exec-all-scripts');
    }
  }, {
    key: "change_overlay",
    value: function change_overlay(upd) {
      var obj = this.get_overlay(upd);

      if (obj) {
        for (var k in upd.fileds || {}) {
          this.tv.$set(obj, k, upd.fileds[k]);
        }
      }
    }
  }, {
    key: "data_changed",
    value: function data_changed(args) {
      if (!this.sett.scripts) return;
      var main = this.data.chart.data;
      if (this.ww._data_uploading) return;
      if (!this.se_state.scripts) return;
      this.ww.just('upload-data', {
        ohlcv: main
      });
      this.ww._data_uploading = true;
      this.merge('.', {
        loading: true
      });
    }
  }, {
    key: "merge_presets",
    value: function merge_presets(proto, preset) {
      if (!preset) return;

      for (var k in preset) {
        if (k === 'settings') {
          Object.assign(proto[k], preset[k]);
        } else {
          proto[k] = preset[k];
        }
      }
    }
  }, {
    key: "drawing_mode_off",
    value: function drawing_mode_off() {
      this.tv.$set(this.data, 'drawingMode', false);
      this.tv.$set(this.data, 'tool', 'Cursor');
    } // Place a new tool

  }, {
    key: "build_tool",
    value: function build_tool(grid_id) {
      var list = this.data.tools;
      var type = this.data.tool;
      var proto = list.find(function (x) {
        return x.type === type;
      });
      if (!proto) return;
      var sett = Object.assign({}, proto.settings || {});
      var data = (proto.data || []).slice();
      if (!('legend' in sett)) sett.legend = false;
      if (!('z-index' in sett)) sett['z-index'] = 100;
      sett.$selected = true;
      sett.$state = 'wip';
      var side = grid_id ? 'offchart' : 'onchart';
      var id = this.add(side, {
        name: proto.name,
        type: type.split(':')[0],
        settings: sett,
        data: data,
        grid: {
          id: grid_id
        }
      });
      sett.$uuid = "".concat(id, "-").concat(utils.now());
      this.tv.$set(this.data, 'selected', sett.$uuid);
      this.add_trash_icon();
    } // Remove selected / Remove all, etc

  }, {
    key: "system_tool",
    value: function system_tool(type) {
      switch (type) {
        case 'Remove':
          if (this.data.selected) {
            this.del(this.data.selected);
            this.remove_trash_icon();
            this.drawing_mode_off();
            this.on_scroll_lock(false);
          }

          break;
      }
    } // Apply new overlay settings

  }, {
    key: "change_settings",
    value: function change_settings(args) {
      var settings = args[0];
      delete settings.id;
      var grid_id = args[1];
      this.merge("".concat(args[3], ".settings"), settings);
    } // Lock the scrolling mechanism

  }, {
    key: "on_scroll_lock",
    value: function on_scroll_lock(flag) {
      this.tv.$set(this.data, 'scrollLock', flag);
    } // When new object is selected / unselected

  }, {
    key: "object_selected",
    value: function object_selected(args) {
      var q = this.data.selected;

      if (q) {
        // Check if current drawing is finished
        //let res = this.get_one(`${q}.settings`)
        //if (res && res.$state !== 'finished') return
        this.merge("".concat(q, ".settings"), {
          $selected: false
        });
        this.remove_trash_icon();
      }

      this.tv.$set(this.data, 'selected', null);
      if (!args.length) return;
      this.tv.$set(this.data, 'selected', args[2]);
      this.merge("".concat(args[2], ".settings"), {
        $selected: true
      });
      this.add_trash_icon();
    }
  }, {
    key: "add_trash_icon",
    value: function add_trash_icon() {
      var type = 'System:Remove';

      if (this.data.tools.find(function (x) {
        return x.type === type;
      })) {
        return;
      }

      this.data.tools.push({
        type: type,
        icon: icons['trash.png']
      });
    }
  }, {
    key: "remove_trash_icon",
    value: function remove_trash_icon() {
      // TODO: Does not call Toolbar render (distr version)
      var type = 'System:Remove';
      utils.overwrite(this.data.tools, this.data.tools.filter(function (x) {
        return x.type !== type;
      }));
    } // Set overlay data from the web-worker

  }, {
    key: "on_overlay_data",
    value: function on_overlay_data(data) {
      var _this3 = this;

      var _iterator5 = dc_events_createForOfIteratorHelper(data),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var ov = _step5.value;
          var obj = this.get_one("".concat(ov.id));

          if (obj) {
            obj.data = ov.data;
            this.tv.$set(obj, 'loading', false);
          }

          this.get('.').forEach(function (x) {
            if (x.settings.$synth) _this3.del("".concat(x.id));
          });

          for (var id in ov.new_ovs.onchart) {
            if (!this.get_one("onchart.".concat(id))) {
              this.add('onchart', ov.new_ovs.onchart[id]);
            }
          }

          for (var id in ov.new_ovs.offchart) {
            if (!this.get_one("offchart.".concat(id))) {
              this.add('offchart', ov.new_ovs.offchart[id]);
            }
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    } // Push overlay updates from the web-worker

  }, {
    key: "on_overlay_update",
    value: function on_overlay_update(data) {
      var _iterator6 = dc_events_createForOfIteratorHelper(data),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var ov = _step6.value;
          var obj = this.get_one("".concat(ov.id));

          if (obj) {
            this.fast_merge(obj.data, ov.data);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    } // Aggregation handler

  }, {
    key: "agg_update",
    value: function agg_update(sym, upd) {
      switch (sym) {
        case 'ohlcv':
          var data = this.data.chart.data;
          this.fast_merge(data, upd);
          this.ww.just('update-data', {
            ohlcv: upd
          });
          break;

        default:
          var data = this.get("".concat(sym));
          this.fast_merge(data[0], upd, false);
          break;
      }
    } // Clean-up unfinished business (tools)

  }, {
    key: "before_destroy",
    value: function before_destroy() {
      var f = function f(x) {
        return !x.settings.$state || x.settings.$state === 'finished';
      };

      this.data.onchart = this.data.onchart.filter(f);
      this.data.offchart = this.data.offchart.filter(f);
      this.drawing_mode_off();
      this.on_scroll_lock(false);
      this.object_selected([]);
      this.ww.destroy();
    } // Get overlay by grid-layer id

  }, {
    key: "get_overlay",
    value: function get_overlay(obj) {
      var id = obj.id || "g".concat(obj.grid_id, "_").concat(obj.layer_id);
      var dcid = this.gldc[id];
      return this.get_one("".concat(dcid));
    }
  }]);

  return DCEvents;
}();


// CONCATENATED MODULE: ./src/helpers/dc_core.js









function dc_core_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = dc_core_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function dc_core_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dc_core_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dc_core_arrayLikeToArray(o, minLen); }

function dc_core_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// DataCube private methods



var dc_core_DCCore = /*#__PURE__*/function (_DCEvents) {
  inherits_default()(DCCore, _DCEvents);

  var _super = _createSuper(DCCore);

  function DCCore() {
    classCallCheck_default()(this, DCCore);

    return _super.apply(this, arguments);
  }

  createClass_default()(DCCore, [{
    key: "init_tvjs",
    // Set TV instance (once). Called by TradingVue itself
    value: function init_tvjs($root) {
      var _this = this;

      if (!this.tv) {
        this.tv = $root;
        this.init_data();
        this.update_ids(); // Listen to all setting changes
        // TODO: works only with merge()

        this.tv.$watch(function () {
          return _this.get_by_query('.settings');
        }, function (n, p) {
          return _this.on_settings(n, p);
        }); // Listen to all indices changes

        this.tv.$watch(function () {
          return _this.get('.').map(function (x) {
            return x.settings.$uuid;
          });
        }, function (n, p) {
          return _this.on_ids_changed(n, p);
        });
      }
    } // Init Data Structure v1.1

  }, {
    key: "init_data",
    value: function init_data($root) {
      if (!('chart' in this.data)) {
        this.tv.$set(this.data, 'chart', {
          type: 'Candles',
          data: this.data.ohlcv || []
        });
      }

      if (!('onchart' in this.data)) {
        this.tv.$set(this.data, 'onchart', []);
      }

      if (!('offchart' in this.data)) {
        this.tv.$set(this.data, 'offchart', []);
      }

      if (!this.data.chart.settings) {
        this.tv.$set(this.data.chart, 'settings', {});
      } // Remove ohlcv cuz we have Data v1.1^


      delete this.data.ohlcv;
    } // Range change callback (called by TradingVue)
    // TODO: improve (reliablity + chunk with limited size)

  }, {
    key: "range_changed",
    value: function () {
      var _range_changed = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(range, tf, check) {
        var _this2 = this;

        var first, prom;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (check === void 0) {
                  check = false;
                }

                if (this.loader) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                if (this.loading) {
                  _context.next = 19;
                  break;
                }

                first = this.data.chart.data[0][0];

                if (!(range[0] < first)) {
                  _context.next = 19;
                  break;
                }

                this.loading = true;
                _context.next = 9;
                return utils.pause(250);

              case 9:
                // Load bigger chunks
                range = range.slice(); // copy

                range[0] = Math.floor(range[0]);
                range[1] = Math.floor(first);
                prom = this.loader(range, tf, function (d) {
                  // Callback way
                  _this2.chunk_loaded(d);
                });

                if (!(prom && prom.then)) {
                  _context.next = 19;
                  break;
                }

                _context.t0 = this;
                _context.next = 17;
                return prom;

              case 17:
                _context.t1 = _context.sent;

                _context.t0.chunk_loaded.call(_context.t0, _context.t1);

              case 19:
                if (!check) this.last_chunk = [range, tf];

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function range_changed(_x, _x2, _x3) {
        return _range_changed.apply(this, arguments);
      }

      return range_changed;
    }() // A new chunk of data is loaded
    // TODO: bulletproof fetch

  }, {
    key: "chunk_loaded",
    value: function chunk_loaded(data) {
      // Updates only candlestick data, or
      if (Array.isArray(data)) {
        this.merge('chart.data', data);
      } else {
        // Bunch of overlays, including chart.data
        for (var k in data) {
          this.merge(k, data[k]);
        }
      }

      this.loading = false;

      if (this.last_chunk) {
        this.range_changed.apply(this, toConsumableArray_default()(this.last_chunk).concat([true]));
        this.last_chunk = null;
      }
    } // Update ids for all overlays

  }, {
    key: "update_ids",
    value: function update_ids() {
      this.data.chart.id = "chart.".concat(this.data.chart.type);
      var count = {}; // grid_id,layer_id => DC id mapping

      this.gldc = {}, this.dcgl = {};

      var _iterator = dc_core_createForOfIteratorHelper(this.data.onchart),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ov = _step.value;

          if (count[ov.type] === undefined) {
            count[ov.type] = 0;
          }

          var i = count[ov.type]++;
          ov.id = "onchart.".concat(ov.type).concat(i);
          if (!ov.name) ov.name = ov.type + " ".concat(i);
          if (!ov.settings) ov.settings = {}; // grid_id,layer_id => DC id mapping

          this.gldc["g0_".concat(ov.type, "_").concat(i)] = ov.id;
          this.dcgl[ov.id] = "g0_".concat(ov.type, "_").concat(i);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      count = {};
      var grids = [{}];
      var gid = 0;

      var _iterator2 = dc_core_createForOfIteratorHelper(this.data.offchart),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var ov = _step2.value;

          if (count[ov.type] === undefined) {
            count[ov.type] = 0;
          }

          var _i = count[ov.type]++;

          ov.id = "offchart.".concat(ov.type).concat(_i);
          if (!ov.name) ov.name = ov.type + " ".concat(_i);
          if (!ov.settings) ov.settings = {}; // grid_id,layer_id => DC id mapping

          gid++;
          var rgid = (ov.grid || {}).id || gid; // real grid_id
          // When we merge grid, skip ++

          if ((ov.grid || {}).id) gid--;
          if (!grids[rgid]) grids[rgid] = {};

          if (grids[rgid][ov.type] === undefined) {
            grids[rgid][ov.type] = 0;
          }

          var ri = grids[rgid][ov.type]++;
          this.gldc["g".concat(rgid, "_").concat(ov.type, "_").concat(ri)] = ov.id;
          this.dcgl[ov.id] = "g".concat(rgid, "_").concat(ov.type, "_").concat(ri);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } // TODO: chart refine (from the exchange chart)

  }, {
    key: "update_candle",
    value: function update_candle(data) {
      var ohlcv = this.data.chart.data;
      var last = ohlcv[ohlcv.length - 1];
      var candle = data['candle'];
      var tf = this.tv.$refs.chart.interval_ms;
      var t_next = last[0] + tf;
      var now = utils.now();
      var t = now >= t_next ? now - now % tf : last[0]; // Update the entire candle

      if (candle.length >= 6) {
        t = candle[0];
      } else {
        candle = [t].concat(toConsumableArray_default()(candle));
      }

      this.agg.push('ohlcv', candle);
      this.update_overlays(data, t, tf);
      return t >= t_next;
    }
  }, {
    key: "update_tick",
    value: function update_tick(data) {
      var ohlcv = this.data.chart.data;
      var last = ohlcv[ohlcv.length - 1];
      var tick = data['price'];
      var volume = data['volume'] || 0;
      var tf = this.tv.$refs.chart.interval_ms;
      var t_next = last[0] + tf;
      var now = utils.now();
      var t = now >= t_next ? now - now % tf : last[0];

      if (t >= t_next && tick !== undefined) {
        // And new zero-height candle
        this.agg.push('ohlcv', [t, tick, tick, tick, tick, volume], tf);
      } else if (tick !== undefined) {
        // Update an existing one
        // TODO: make a separate class Sampler
        last[2] = Math.max(tick, last[2]);
        last[3] = Math.min(tick, last[3]);
        last[4] = tick;
        last[5] += volume;
        this.agg.push('ohlcv', last, tf);
      }

      this.update_overlays(data, t, tf);
      return t >= t_next;
    } // Updates all overlays with given values.

  }, {
    key: "update_overlays",
    value: function update_overlays(data, t, tf) {
      for (var k in data) {
        if (k === 'price' || k === 'volume' || k === 'candle') {
          continue;
        }

        if (!Array.isArray(data[k])) {
          var val = [data[k]];
        } else {
          val = data[k];
        }

        if (!k.includes('.data')) k += '.data';
        this.agg.push(k, [t].concat(toConsumableArray_default()(val)), tf);
      }
    } // Returns array of objects matching query.
    // Object contains { parent, index, value }
    // TODO: query caching

  }, {
    key: "get_by_query",
    value: function get_by_query(query, chuck) {
      var tuple = query.split('.');

      switch (tuple[0]) {
        case 'chart':
          var result = this.chart_as_piv(tuple);
          break;

        case 'onchart':
        case 'offchart':
          result = this.query_search(query, tuple);
          break;

        default:
          /* Should get('.') return also the chart? */

          /*let ch = this.chart_as_query([
              'chart',
              tuple[1]
          ])*/
          var on = this.query_search(query, ['onchart', tuple[0], tuple[1]]);
          var off = this.query_search(query, ['offchart', tuple[0], tuple[1]]);
          result = [].concat(toConsumableArray_default()(on), toConsumableArray_default()(off));
          break;
      }

      return result.filter(function (x) {
        return !x.v.locked || chuck;
      });
    }
  }, {
    key: "chart_as_piv",
    value: function chart_as_piv(tuple) {
      var field = tuple[1];
      if (field) return [{
        p: this.data.chart,
        i: field,
        v: this.data.chart[field]
      }];else return [{
        p: this.data,
        i: 'chart',
        v: this.data.chart
      }];
    }
  }, {
    key: "query_search",
    value: function query_search(query, tuple) {
      var _this3 = this;

      var side = tuple[0];
      var path = tuple[1] || '';
      var field = tuple[2];
      var arr = this.data[side].filter(function (x) {
        return x.id && x.name && x.settings && (x.id === query || x.id.includes(path) || x.name === query || x.name.includes(path) || query.includes(x.settings.$uuid));
      });

      if (field) {
        return arr.map(function (x) {
          return {
            p: x,
            i: field,
            v: x[field]
          };
        });
      }

      return arr.map(function (x, i) {
        return {
          p: _this3.data[side],
          i: _this3.data[side].indexOf(x),
          v: x
        };
      });
    }
  }, {
    key: "merge_objects",
    value: function merge_objects(obj, data, new_obj) {
      if (new_obj === void 0) {
        new_obj = {};
      }

      // The only way to get Vue to update all stuff
      // reactively is to create a brand new object.
      // TODO: Is there a simpler approach?
      Object.assign(new_obj, obj.v);
      Object.assign(new_obj, data);
      this.tv.$set(obj.p, obj.i, new_obj);
    } // Merge overlapping time series

  }, {
    key: "merge_ts",
    value: function merge_ts(obj, data) {
      // Assume that both arrays are pre-sorted
      if (!data.length) return obj.v;
      var r1 = [obj.v[0][0], obj.v[obj.v.length - 1][0]];
      var r2 = [data[0][0], data[data.length - 1][0]]; // Overlap

      var o = [Math.max(r1[0], r2[0]), Math.min(r1[1], r2[1])];

      if (o[1] >= o[0]) {
        var _obj$v, _data;

        var _this$ts_overlap = this.ts_overlap(obj.v, data, o),
            od = _this$ts_overlap.od,
            d1 = _this$ts_overlap.d1,
            d2 = _this$ts_overlap.d2;

        (_obj$v = obj.v).splice.apply(_obj$v, toConsumableArray_default()(d1));

        (_data = data).splice.apply(_data, toConsumableArray_default()(d2)); // Dst === Overlap === Src


        if (!obj.v.length && !data.length) {
          this.tv.$set(obj.p, obj.i, od);
          return obj.v;
        } // If src is totally contained in dst


        if (!data.length) {
          data = obj.v.splice(d1[0]);
        } // If dst is totally contained in src


        if (!obj.v.length) {
          obj.v = data.splice(d2[0]);
        }

        this.tv.$set(obj.p, obj.i, this.combine(obj.v, od, data));
      } else {
        this.tv.$set(obj.p, obj.i, this.combine(obj.v, [], data));
      }

      return obj.v;
    } // TODO: review performance, move to worker

  }, {
    key: "ts_overlap",
    value: function ts_overlap(arr1, arr2, range) {
      var t1 = range[0];
      var t2 = range[1];
      var ts = {}; // timestamp map

      var a1 = arr1.filter(function (x) {
        return x[0] >= t1 && x[0] <= t2;
      });
      var a2 = arr2.filter(function (x) {
        return x[0] >= t1 && x[0] <= t2;
      }); // Indices of segments

      var id11 = arr1.indexOf(a1[0]);
      var id12 = arr1.indexOf(a1[a1.length - 1]);
      var id21 = arr2.indexOf(a2[0]);
      var id22 = arr2.indexOf(a2[a2.length - 1]);

      for (var i = 0; i < a1.length; i++) {
        ts[a1[i][0]] = a1[i];
      }

      for (var i = 0; i < a2.length; i++) {
        ts[a2[i][0]] = a2[i];
      }

      var ts_sorted = Object.keys(ts).sort();
      return {
        od: ts_sorted.map(function (x) {
          return ts[x];
        }),
        d1: [id11, id12 - id11 + 1],
        d2: [id21, id22 - id21 + 1]
      };
    } // Combine parts together:
    // (destination, overlap, source)

  }, {
    key: "combine",
    value: function combine(dst, o, src) {
      function last(arr) {
        return arr[arr.length - 1][0];
      }

      if (!dst.length) {
        dst = o;
        o = [];
      }

      if (!src.length) {
        src = o;
        o = [];
      } // The overlap right in the middle


      if (src[0][0] >= dst[0][0] && last(src) <= last(dst)) {
        return Object.assign(dst, o); // The overlap is on the right
      } else if (last(src) > last(dst)) {
        // Psh(...) is faster but can overflow the stack
        if (o.length < 100000 && src.length < 100000) {
          var _dst;

          (_dst = dst).push.apply(_dst, toConsumableArray_default()(o).concat(toConsumableArray_default()(src)));

          return dst;
        } else {
          return dst.concat(o, src);
        } // The overlap is on the left

      } else if (src[0][0] < dst[0][0]) {
        // Push(...) is faster but can overflow the stack
        if (o.length < 100000 && src.length < 100000) {
          var _src;

          (_src = src).push.apply(_src, toConsumableArray_default()(o).concat(toConsumableArray_default()(dst)));

          return src;
        } else {
          return src.concat(o, dst);
        }
      } else {
        return [];
      }
    } // Simple data-point merge (faster)

  }, {
    key: "fast_merge",
    value: function fast_merge(data, point, main) {
      if (main === void 0) {
        main = true;
      }

      if (!data) return;
      var last_t = (data[data.length - 1] || [])[0];
      var upd_t = point[0];

      if (!data.length || upd_t > last_t) {
        data.push(point);

        if (main && this.sett.auto_scroll) {
          this.scroll_to(upd_t);
        }
      } else if (upd_t === last_t) {
        if (main) {
          this.tv.$set(data, data.length - 1, point);
        } else {
          data[data.length - 1] = point;
        }
      }
    }
  }, {
    key: "scroll_to",
    value: function scroll_to(t) {// TODO: implement
    }
  }]);

  return DCCore;
}(dc_events_DCEvents);


// CONCATENATED MODULE: ./src/helpers/sett_proxy.js
// Sends all dc.sett changes to the web-worker
/* harmony default export */ var sett_proxy = (function (sett, ww) {
  var h = {
    get: function get(sett, k) {
      return sett[k];
    },
    set: function set(sett, k, v) {
      sett[k] = v;
      ww.just('update-dc-settings', sett);
      return true;
    }
  };
  ww.just('update-dc-settings', sett);
  return new Proxy(sett, h);
});
// CONCATENATED MODULE: ./src/helpers/agg_tool.js


// Tick aggregation


var agg_tool_AggTool = /*#__PURE__*/function () {
  function AggTool(_int) {
    if (_int === void 0) {
      _int = 100;
    }

    classCallCheck_default()(this, AggTool);

    this.symbols = {};
    this["int"] = _int; // Itarval in ms

    this.update = function () {};
  }

  createClass_default()(AggTool, [{
    key: "push",
    value: function push(sym, upd, tf) {
      tf = parseInt(tf);
      var old = this.symbols[sym];
      var t = utils.now();

      if (!old) {
        this.symbols[sym] = {
          upd: upd,
          t: t
        };
        this.update(sym, upd);
      } else if (upd[0] >= old.upd[0] + tf) {
        // Refine the previous
        var refine = old.upd.slice();
        refine[0] = old.upd[0];
        this.update(sym, refine);
        this.symbols[sym] = {
          upd: upd,
          t: t
        }; // Update with the new

        this.update(sym, upd); // Tick updates the current
      } else {
        this.symbols[sym].upd = upd;
        var _t = this.symbols[sym].t;

        if (t - _t > this["int"]) {
          this.update(sym, upd);
          this.symbols[sym].t = t;
        }
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.symbols = {};
    }
  }]);

  return AggTool;
}();


// CONCATENATED MODULE: ./src/helpers/datacube.js








function datacube_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = datacube_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function datacube_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return datacube_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return datacube_arrayLikeToArray(o, minLen); }

function datacube_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function datacube_createSuper(Derived) { var hasNativeReflectConstruct = datacube_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function datacube_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// Main DataHelper class. A container for data,
// which works as a proxy and CRUD interface



 // Interface methods. Private methods in dc_core.js

var datacube_DataCube = /*#__PURE__*/function (_DCCore) {
  inherits_default()(DataCube, _DCCore);

  var _super = datacube_createSuper(DataCube);

  function DataCube(data, sett) {
    var _this;

    if (data === void 0) {
      data = {};
    }

    if (sett === void 0) {
      sett = {};
    }

    classCallCheck_default()(this, DataCube);

    var def_sett = {
      aggregation: 100,
      // Update aggregation interval
      script_depth: 0,
      // 0 === Exec on all data
      auto_scroll: true,
      // Auto scroll to a new candle
      scripts: true // Enable overlays scripts

    };
    sett = Object.assign(def_sett, sett);
    _this = _super.call(this);
    _this.data = data;
    _this.sett = sett_proxy(sett, _this.ww);
    _this.agg = new agg_tool_AggTool(sett.aggregation);
    _this.se_state = {};
    _this.agg.update = _this.agg_update.bind(assertThisInitialized_default()(_this));
    return _this;
  } // Add new overlay


  createClass_default()(DataCube, [{
    key: "add",
    value: function add(side, overlay) {
      if (side !== 'onchart' && side !== 'offchart') {
        return;
      }

      this.data[side].push(overlay);
      this.update_ids();
      return overlay.id;
    } // Get all objects matching the query

  }, {
    key: "get",
    value: function get(query) {
      return this.get_by_query(query).map(function (x) {
        return x.v;
      });
    } // Get first object matching the query

  }, {
    key: "get_one",
    value: function get_one(query) {
      return this.get_by_query(query).map(function (x) {
        return x.v;
      })[0];
    } // Set data (reactively)

  }, {
    key: "set",
    value: function set(query, data) {
      var objects = this.get_by_query(query);

      var _iterator = datacube_createForOfIteratorHelper(objects),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var obj = _step.value;
          var i = obj.i !== undefined ? obj.i : obj.p.indexOf(obj.v);

          if (i !== -1) {
            this.tv.$set(obj.p, i, data);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.update_ids();
    } // Merge object or array (reactively)

  }, {
    key: "merge",
    value: function merge(query, data) {
      var objects = this.get_by_query(query);

      var _iterator2 = datacube_createForOfIteratorHelper(objects),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var obj = _step2.value;

          if (Array.isArray(obj.v)) {
            if (!Array.isArray(data)) continue; // If array is a timeseries, merge it by timestamp
            // else merge by item index

            if (obj.v[0] && obj.v[0].length >= 2) {
              this.merge_ts(obj, data);
            } else {
              this.merge_objects(obj, data, []);
            }
          } else if (typeof_default()(obj.v) === 'object') {
            this.merge_objects(obj, data);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      this.update_ids();
    } // Remove an overlay by query (id/type/name/...)

  }, {
    key: "del",
    value: function del(query) {
      var objects = this.get_by_query(query);

      var _iterator3 = datacube_createForOfIteratorHelper(objects),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var obj = _step3.value;
          // Find current index of the field (if not defined)
          var i = obj.i !== undefined ? obj.i : obj.p.indexOf(obj.v);

          if (i !== -1) {
            this.tv.$delete(obj.p, i);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      this.update_ids();
    } // Update/append data point, depending on timestamp
    // v2.0 TODO: to web worker
    //

  }, {
    key: "update",
    value: function update(data) {
      if (data['candle']) {
        return this.update_candle(data);
      } else {
        return this.update_tick(data);
      }
    } // Lock overlays from being pulled by query_search
    // TODO: subject to review

  }, {
    key: "lock",
    value: function lock(query) {
      var objects = this.get_by_query(query);
      objects.forEach(function (x) {
        if (x.v && x.v.id && x.v.type) {
          x.v.locked = true;
        }
      });
    } // Unlock overlays from being pulled by query_search
    //

  }, {
    key: "unlock",
    value: function unlock(query) {
      var objects = this.get_by_query(query, true);
      objects.forEach(function (x) {
        if (x.v && x.v.id && x.v.type) {
          x.v.locked = false;
        }
      });
    } // Show indicator

  }, {
    key: "show",
    value: function show(query) {
      if (query === 'offchart' || query === 'onchart') {
        query += '.';
      } else if (query === '.') {
        query = '';
      }

      this.merge(query + '.settings', {
        display: true
      });
    } // Hide indicator

  }, {
    key: "hide",
    value: function hide(query) {
      if (query === 'offchart' || query === 'onchart') {
        query += '.';
      } else if (query === '.') {
        query = '';
      }

      this.merge(query + '.settings', {
        display: false
      });
    } // Set data loader callback

  }, {
    key: "onrange",
    value: function onrange(callback) {
      var _this2 = this;

      this.loader = callback;
      setTimeout(function () {
        return _this2.tv.set_loader(callback ? _this2 : null);
      }, 0);
    }
  }]);

  return DataCube;
}(dc_core_DCCore);


// CONCATENATED MODULE: ./src/mixins/interface.js
// Html interface, shown on top of the grid.
// Can be static (a tooltip) or interactive,
// e.g. a control panel.
/* harmony default export */ var mixins_interface = ({
  props: ['ux', 'updater', 'colors', 'wrapper'],
  mounted: function mounted() {
    this._$emit = this.$emit;
    this.$emit = this.custom_event;
    if (this.init) this.init();
  },
  methods: {
    close: function close() {
      this.$emit('custom-event', {
        event: 'close-interface',
        args: [this.$props.ux.uuid]
      });
    },
    // TODO: emit all the way to the uxlist
    // add apply the changes there
    modify: function modify(obj) {
      this.$emit('custom-event', {
        event: 'modify-interface',
        args: [this.$props.ux.uuid, obj]
      });
    },
    custom_event: function custom_event(event) {
      if (event.split(':')[0] === 'hook') return;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      this._$emit('custom-event', {
        event: event,
        args: args
      });
    }
  },
  computed: {
    overlay: function overlay() {
      return this.$props.ux.overlay;
    },
    layout: function layout() {
      return this.overlay.layout;
    },
    uxr: function uxr() {
      return this.$props.ux;
    }
  },
  data: function data() {
    return {};
  }
});
// EXTERNAL MODULE: ./src/components/primitives/ray.js
var ray = __webpack_require__(34);
var ray_default = /*#__PURE__*/__webpack_require__.n(ray);

// CONCATENATED MODULE: ./src/index.js















var primitives = {
  Candle: candle_CandleExt,
  Volbar: volbar_VolbarExt,
  Line: line_Line,
  Pin: pin_Pin,
  Price: price_Price,
  Ray: ray_default.a,
  Seg: seg_Seg
};

TradingVue.install = function (Vue) {
  Vue.component(TradingVue.name, TradingVue);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(TradingVue);
  window.TradingVueLib = {
    TradingVue: TradingVue,
    Overlay: mixins_overlay,
    Utils: utils,
    Constants: constants,
    Candle: candle_CandleExt,
    Volbar: volbar_VolbarExt,
    layout_cnv: layout_cnv,
    layout_vol: layout_vol,
    DataCube: datacube_DataCube,
    Tool: mixins_tool,
    Interface: mixins_interface,
    primitives: primitives
  };
}

/* harmony default export */ var src_0 = __webpack_exports__["default"] = (TradingVue);


/***/ })
/******/ ]);
});
//# sourceMappingURL=trading-vue.js.map