/*!
 * TradingVue.JS - v0.8.0-alpha - Fri Oct 09 2020
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
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(33);

var iterableToArray = __webpack_require__(34);

var unsupportedIterableToArray = __webpack_require__(28);

var nonIterableSpread = __webpack_require__(35);

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

var arrayWithHoles = __webpack_require__(36);

var iterableToArrayLimit = __webpack_require__(37);

var unsupportedIterableToArray = __webpack_require__(28);

var nonIterableRest = __webpack_require__(38);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ (function(module) {

module.exports = JSON.parse("{\"extended.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAANElEQVR4nGNggABGEMEEIlhABAeI+AASF0AlHmAqA4kzKAAx8wGQuAMKwd6AoYzBAWonAwAcLwTgNfJ3RQAAAABJRU5ErkJggg==\",\"segment.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAgMAAAC5h23wAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAlQTFRFAAAATU1NJCQkCxcHIQAAAAN0Uk5TAP8SmutI5AAAACxJREFUeJxjYMACGAMgNAsLdpoVKi8AVe8A1QblQlWRKt0AoULw2w1zGxoAABdiAviQhF/mAAAAAElFTkSuQmCC\",\"add.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAH5QTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKBgYGGxsbKioqPz8/Pj4+BQUFCQkJAQEBZGRkh4eHAgICEBAQNjY2g4ODgYGBAAAAAwMDeXl5d3d3GBgYERERgICAgICANDQ0PDw8Y2NjCAgIhYWFGhoaJycnOjo6YWFhgICAdXV14Y16sQAAACp0Uk5TAAILDxIKESEnJiYoKCgTKSkpKCAnKSkFKCkpJiDl/ycpKSA2JyYpKSkpOkQ+xgAAARdJREFUeJzllNt2gyAQRTWiRsHLoDU0GpPYmMv//2BMS+sgl6Z9bM8bi73gnJkBz/sn8lcBIUHofwtG8TpJKUuTLI6cYF7QEqRKynP71VX9AkhNXVlsbMQrLLQVGyPZLsGHWgPrCxMJwHUPlXa79NBp2et5d9f3u3m1XxatQNn7SagOXCUjCjYUDuqxcWlHj4MSfw12FDJchFViRN8+1qcQoUH6lR1L1mEMEErofB6WzEUwylzomfzOQGiOJdXiWH7mQoUyMa4WXJQWOBvLFvPCGxt6FSr5kyH0qi0YddNG2/pgCsOjff4ZTizXPNwKIzl56OoGg9d9Z/+5cs6On+CFCfevFQ3ZaTycx1YMbvDdRvjkp/lHdAcPXzokxcwfDwAAAABJRU5ErkJggg==\",\"cursor.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAgMAAAC5h23wAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAxQTFRFAAAATU1NTU1NTU1NwlMHHwAAAAR0Uk5TAOvhxbpPrUkAAAAkSURBVHicY2BgYHBggAByabxg1WoGBq2pRCk9AKUbcND43AEAufYHlSuusE4AAAAASUVORK5CYII=\",\"display_off.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAU1QTFRFAAAAh4eHh4eHAAAAAAAAAAAAAwMDAAAAAAAAhoaGGBgYgYGBAAAAPz8/AgICg4ODCQkJhISEh4eHh4eHPj4+NjY2gYGBg4ODgYGBgYGBgoKCAQEBJycngoKChYWFEBAQg4ODCAgIKioqZGRkCgoKBQUFERERd3d3gYGBGxsbNDQ0hISEgYGBPDw8gYGBgYGBh4eHh4eHhYWFh4eHgoKChYWFgYGBgYGBg4ODhoaGg4ODYWFhgoKCBgYGdXV1goKCg4ODgYGBgICAgYGBAAAAg4ODhYWFhISEh4eHgoKChYWFOjo6goKCGhoah4eHh4eHh4eHgoKCh4eHeXl5hoaGgoKChISEgYGBgYGBgoKCY2NjgYGBgoKCh4eHgoKCgYGBhoaGg4ODhoaGhYWFh4eHgYGBhoaGhoaGhoaGg4ODgoKChISEgoKChYWFh4eHfKktUwAAAG90Uk5TACn/AhEFKA8SLCbxCigoVBNKUTYoJ/lh3PyAKSaTNiBtICYpISggKSkmJ0LEKef3lGxA8rn//+pcMSkpnCcptHPJKe0LUjnx5LzKKaMnX73hl64pLnhkzNSgKeLv17LQ+liIzaLe7PfTw5tFpz3K1fXR/gAAAgBJREFUeJzllNdXwjAUxknB0lIoCKVsGTIFQRAZ7r333nuv///R3LZ4mlDQZ/0ekp7b37n5bnITk+mfyDxv5Tir3fwjaElO5BIOKZFLJS1dQVfI0Y809TtEV+elo95RpFPWG+1go4fdQ5QybI8haaNBkM2ANbM09bnrwaPY7iFKrz7EMBdu7CHdVruXIt0M1hb+GKA3LTRKkp5lTA6Dg6xIkhaHhvQ1IlW/UCouQdJNJTRIpk1qO7+wUpcfpl537oBc7VNip3Gi/AmVPBAC1UrL6HXtSGVT+k2Yz0Focad07OMRf3P5BEbd63PFQx7HN+w61JoAm+uBlV48O/0jkLSMmtPCmQ8HwlYdykFV4/LJPp7e3hVyFdapHNehLk6PSjhSkBvwu/cFyJGIYvOyhoc1jjYQFGbygD4CWjoAMla/og3YoSw+KPhjPNoFcim4iFD+pFYA8zZ9WeYU5OBjZ3ORWyCfG03E+47kKpCIJTpGO4KP8XMgtw990xG/PBNTgmPEEXwf7P42oOdFIRAoBCtqTKL6Rcwq4Xsgh5xYC/mmSs6yJKk1YbnVeTq1NaEpmlHbmVn2EORkW2trF2ZzmHGTSUMGl1a9hp4ySRpdQ8yKGURpMmRIYg9pb1YPzg6kO79cLlE6bYFjEtv91bLEUxvhwbWwjY13BxUb9l8+mn9EX8x3Nki8ff5wAAAAAElFTkSuQmCC\",\"display_on.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAR1QTFRFAAAAh4eHgYGBAAAAAAAAgYGBAAAAAwMDAAAAAAAAgYGBg4ODGBgYgYGBhISEAAAAPz8/AgIChoaGCQkJhYWFPj4+NjY2goKCgYGBAQEBJycngYGBgoKCEBAQCAgIhISEKioqZGRkCgoKBQUFERERd3d3gYGBg4ODgYGBGxsbNDQ0hISEgoKCgoKChYWFPDw8gYGBgYGBhoaGgoKCg4ODgoKCgYGBgoKCgoKCgoKCg4ODgoKChoaGgoKCgYGBhoaGg4ODYWFhBgYGdXV1gYGBg4ODgoKCgICAg4ODg4ODhISEAAAAg4ODOjo6gYGBGhoaeXl5goKCgYGBgoKChYWFgoKChISEgoKCY2NjgYGBg4ODgYGBgYGBg4ODgYGBo8n54AAAAF90Uk5TACn/AhH3BSgPEuhUJvFACigoLBM2KCeA6ykm+pMgIEkmKSEoICn9XCkmJ0u6nDop4sUypGuEzLZ6vmCYLZ/dLykpJynUYa8pcllCC1Ip2ycpisl1PadFsintbsPQZdi/bTW7AAAB4UlEQVR4nOWUZ1fCMBSGSSGWFiq0UDbIkr2XbBwMxS0b1P//M0xK9XSiftX7oel585zkvfcmMRj+SRhvzRRlthm/BU3Ry3TYzofTsajpIOjw2iNAjIiddehvHXSdA0mkXEEdG0fkE1DEKXmkSVqVIA6rBmsktUgAWLWHoGp30UNclbtLmwQgoyya91wPTbFy0mQXJ5zJQO6BgXRjfH0iSkX5stHIXr5r0bB/lu8syjR8rzsFbR2SpX+5J2eMP3csLtYsEY2K8BeTFuE2jaVCBw7bHOBuxq16AXmpbui3LtIfbRLUHMY2q4lcFo2WB4KA1SUAlWumNEKCzyxBKZxVHvYGaFguCBx1vM/x0IPzoqQoj5SdP4mns2cCGhBsrgj0uaeUBtzMyxQN8w4mYROTW8+r0oANp8W5mf6WQw5aCYJ2o7ymPaKMi2uVpmWM4TW6tdImgGo1bT4nK6DbbsCc0AZSdmLEFszzHrh6riVvRrNA3/9SE8QLWQu+Gjto9+gE9NBMwr9zi83gFeeFTe11zpm1CHE3HeyVCSknf3MIDcFTbfJKdbR1L4xX49L+/BoillV5uPJqkshD3JWSgpNMXP/lcrD8+hO84MnDr5YpFHv0Fe99VjJ0GBRs2H74aP6R+ACr+TFvZNAQ1wAAAABJRU5ErkJggg==\",\"down.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAKVQTFRFAAAAg4ODgICAAAAAAAAAAAAACAgIAAAAAAAAAAAAAAAAOTk5hYWFEBAQfHx8ODg4dnZ2NDQ0XV1dGxsbKCgogICAFBQUIiIiZGRkgICAgICAFRUVAAAAgICAgICAgICAf39/Li4ugICAcHBwgoKCgICAgoKCgICAg4ODgYGBPj4+goKCgICAhISEgYGBgICAgoKCgICAgYGBgYGBf39/gICAgICAIdPQHAAAADd0Uk5TACn/KAIRIBMFDwooKyApKSknKSYmzCcmKfL7JRCUi2L3J7IpcLUrr0VbKXntNEnkMbxrUcG56CMpi50AAAFZSURBVHic5ZRpf4MgDIeFKFatWm/tfW091u7evv9Hm1Acoujm2y0vFPH5Jf+EEE37J6bblmlatv4jaBCI4rMfR0CMXtAEJ0fccgfM7tAkQHXzArdDxggmqGETGCnJWROkNlOwOqhIhKCtgbSicw1uK/dATSK0aRatIzytA8ik4XSiyJnLSm+VPxULgeyLI3uHRJH+qcB4WZGrKb4c20WwI7b3iUt74OS6XD+xZWrXUCtme0uKTvfcJ65CZFa9VOebqwXmft+oT8yF+/VymT4XeGB+Xx8L+j4gBcoFIDT+oMz6Qp93Y74pCeBpUXaLuW0rUk6r1iv3nP322ewYkgv2nZIvgpSPQDrY5wTjRJDNg9XAE/+uSXIVX812GdKEmtvR2rtWaw+5MAOuofJy79SXu9TgBl4d9DZdI0NjgyiswNCB/qk1J5Bmvp+lQOa9IJNhW4bxm6H5R+wLQYMSQXZNzbcAAAAASUVORK5CYII=\",\"price_range.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAAIUlEQVR4nGNggAPm/w9gTA4QIQMitECEJ1yMEgLNDiAAADfgBMRu78GgAAAAAElFTkSuQmCC\",\"remove.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAK5QTFRFAAAAh4eHgICAAAAAAAAAh4eHAAAAAwMDAAAAAAAAgICAGBgYAAAAPz8/AgICgICACQkJhoaGhoaGgICAPj4+NjY2gYGBg4ODgYGBAQEBJycngoKCEBAQgICAgICACAgIKioqZGRkCgoKBQUFERERd3d3gYGBGxsbNDQ0gICAPDw8YWFhBgYGdXV1gICAg4ODgICAAAAAOjo6GhoaeXl5gICAhYWFY2NjhYWFgICA9O0oCgAAADp0Uk5TACn/AhErBSgPEvEmCigowxMuMcgoJ7hWrCkmdCD6vSAmKSEoICkpJie6KSknKSkp0wspJynCMik11rrLte8AAAFwSURBVHic5ZTXkoIwFIZNAAPSpKkoRQV7Wcva3v/FFiRmEwise7t7bs7MP98k/ylJq/VPQjjKiiJrwo+gON0uxro7XiRTsRHs+voE4JjoRrf+6sD7AFTMvaDGRht9glLMUJtLqmUwD5XDCohHAmBUPQSV27GHtFK7xycBWJab5uPaR+Hlmue7GfZxHwyWFHVMQghXFgD2A8IOZtfssdNJIXcyFEaSfchzp9BuMVP+Fhvr5Qh0nGfqYTGhm3BcYFUaQBKOhMWzRqHyGFRY03ppQ5lCFZ30RloVZGQTaa3QqEt0OyrQnkSkk8I1YJkvAwPCMgY0UpbzXRZhVbosIWGbZTLNQszGMCM42FJEjWDDjIAMtp+xj6x2K+/DqNDc0r4Yc8yGl3uer2aIyT1iyd8sYSuY8cldZbVrH4zPebTvP8OMNSoedj6XzDyk3pwG98u0/ufqGu7tBW5c1PxriXFyHq5PQxXFzeDThvbmp/lH4gt6WxfZ03H8DwAAAABJRU5ErkJggg==\",\"settings.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAW5QTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKBgYGGxsbKioqQEBAPj4+BQUFCAgIAQEBPz8/ZWVlh4eHZGRkAgICCQkJDw8PNjY2g4ODgoKCNTU1EBAQAAAAAwMDeXl5d3d3AAAAGBgYAAAAERERioqKgoKCgoKCgoKCgYGBgoKChISEhoaGNDQ0g4ODgICAgICAgICAgYGBgYGBhYWFgICAgICAPT09AAAAgYGBgICAgICAgICAgICAY2NjCAgIgICAgICAhYWFhYWFgYGBHBwcgICAhYWFGhoagYGBgYGBg4ODhoaGJycnAAAAhISEgICAg4ODPDw8AAAAgoKCgICAhISEOjo6h4eHgoKCgYGBgICAf39/gYGBgoKCgICAGBgYgYGBg4ODg4ODgICACwsLgYGBgICAgYGBgYGBgYGBgICAgYGBYWFhf39/g4ODPj4+gYGBg4ODgICAhYWFgoKCgYGBgICAgYGBgoKCdXV1T0kC9QAAAHp0Uk5TAAILDxMKESEnJiYpKSgTKSgpKSkoEyAnKSknIAYoKSkFJQEgKl94jYVvVC4nU9f/+K8pOu71KBCi3NPq/ikg0e01Nokm1UUnsZVqQSYOT9lrKRJz5lIpK12jyu+sesgnhGVLxCG55a6Um+GaKfJCKKRgKUt8ocergymDQ9knAAABsElEQVR4nOWUV1vCMBSGg1AQpBZrcVdE3KJxo4LgnuCoe4F7orjHv7doTk3bgF7rd5OnX94nZ+SkCP0TWQqsNpuVs/wI2h2FTleR2+XkHfa8YLHgKRGJSj2SN3fosvIKkVJlVXWONGrkWtEgn1zHJP1GMCs/g7XILFIUpXoTWmaKTnIImGovh72Gxqbmlta2dvgOGpsmQO0dnfhTXd3E6JH0pN1DNnr7MFE/HDsQ0qEO6Pxg9sCh4XDkGx2J6sovBD+G8eiYuo5PxLTKeLoJBZNgT2EcnjY0YYajUKsL7Fk1gcjU3PwChcYTFGorAnsRqlpa1tAVhUbdmr+6RtjIOlgbCjMBUdzc2t7ZzbJ7zAQ4p6GSfRVNwkeKLsvCg31w2JBdjlT0GDxZNzEnpcQ+xWfnFxeXVyp6Tay07gq+L/YUOoBvbomV0V8skiq//DutWfeEfJD1JPLCED4+Pb8kX986tApNQ4iqfSJT76bRzvlgBPODQXW/foYqK5lyeBeYJEL1gaoeGnwIBhjRoQ9SZgTAdEbO/9cKRfmZ+MpGPCVHQ3nBzzS4hKIkuNyh/5g+ALiAXSSas9hwAAAAAElFTkSuQmCC\",\"trash.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAALUlEQVR4nGNgAIN6ENHQACX4//9gYBBgYIESYC4LkA0lPEkmGFAI5v8PILYCAHygDJxlK0RUAAAAAElFTkSuQmCC\",\"up.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAMZQTFRFAAAAh4eHgICAAAAAAAAAAAAAAwMDAAAAAAAAGBgYAAAAPz8/AgICCQkJgICAh4eHPj4+NjY2AQEBJycnEBAQgICAgICACAgIKioqZGRkCgoKBQUFgYGBERERd3d3gYGBGxsbNDQ0gICAgYGBPDw8gYGBh4eHgICAYWFhBgYGgYGBdXV1goKCg4ODhYWFgICAgoKCAAAAhISEOjo6gICAGhoagYGBeXl5hoaGgICAY2Njg4ODgoKCgoKCgYGBgoKCg4ODgoKC64uw1gAAAEJ0Uk5TACn/AhEFKA8SJgooKBP7KignKSYg9c0gJikhKLQgKSkmJ7ywKY8s5SknlClxKTMpXwtFKe0neiku8ClKWmSbbFFjM5GHSgAAAW5JREFUeJzllGd/gjAQxk3AMFWWOHDvVa2rVbu//5cqhJWQQO3b9nkVjv/v7rnLKJX+iYS9JMuSKvwIiu3loKkZzYHXFgvBiqW1QKSWplfySzvmAyDUN50cG2X0DDLqoTKXVLJgIIXDCohHAqCzHhymeuShy/Ru8kkAhtmhWUTvW9fdEnPQaVLU0n8XF0L3kn5P6LTtZPKgNoK+RrUkcGtQ7S9TsgOxxinrkUPYD+LwLCIh7CTsWSVQqRmTuPqpitlZFLQlApXjrsYBc335wOw47ksmUSMMrgKi/gnAE/awCqNHmTUwDf5X34LlBuedsgbUsK15kPMxTIXzzvFSIdsSPBw7nGD1K+7bL3F9xStEnZhoCw71TbpL71GBBbUF1MZmZWTOi97PI3eIJn9zCEtOj0+umaOde2EszqW9/xr6rM54WFtc0vfQNak57Ibd/Jerohu3GFwYqPjVEhve2Z4cbQU1ikFsQ73z0fwj+ga3VBezGuggFQAAAABJRU5ErkJggg==\"}");

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(63);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(5).default
var update = add("21fde573", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(5).default
var update = add("68f243ea", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(5).default
var update = add("9895d3a6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(5).default
var update = add("5b620605", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(5).default
var update = add("1db01c0b", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(5).default
var update = add("12d2309d", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(5).default
var update = add("1b34bfeb", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(5).default
var update = add("604bf5ef", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(5).default
var update = add("f32fd36e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(5).default
var update = add("fd83689e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(62);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(10);

var assertThisInitialized = __webpack_require__(25);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Indexed Array Binary Search module
 */

/**
 * Dependencies
 */
var util = __webpack_require__(39),
    cmp = __webpack_require__(40),
    bin = __webpack_require__(41);

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
/* 30 */
/***/ (function(module) {

module.exports = JSON.parse("[\"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\"]");

/***/ }),
/* 31 */
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
/* 32 */
/***/ (function(module, exports) {

// Draws a ray, adds corresponding collision f-n

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(27);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 37 */
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
/* 38 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UxWrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UxWrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UxWrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UxWrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.trading-vue-ux-wrapper {\n    position: absolute;\n    display: flex;\n}\n.tvjs-ux-wrapper-pin {\n    position: absolute;\n    width: 9px;\n    height: 9px;\n    z-index: 100;\n    background-color: #23a776;\n    border-radius: 10px;\n    margin-left: -6px;\n    margin-top: -6px;\n    pointer-events: none;\n}\n.tvjs-ux-wrapper-head {\n    position: absolute;\n    height: 23px;\n    width: 100%;\n}\n.tvjs-ux-wrapper-close {\n    position: absolute;\n    width: 11px;\n    height: 11px;\n    font-size: 1.5em;\n    line-height: 0.5em;\n    padding: 1px 0px 1px 2px;\n    border-radius: 10px;\n    right: 5px;\n    top: 5px;\n    user-select: none;\n}\n.tvjs-ux-wrapper-close-hb {\n}\n.tvjs-ux-wrapper-close:hover {\n    background-color: #FF605C !important;\n    color: #692324 !important;\n}\n.tvjs-ux-wrapper-full {\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LegendButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LegendButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LegendButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LegendButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.t-vue-lbtn {\n    z-index: 100;\n    width: 21px;\n    height: 21px;\n    margin-bottom: -6px;\n    pointer-events: all;\n    cursor: pointer;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.t-vue-lbtn-grp {\n    margin-left: 0.5em;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.tvjs-spinner {\n    display: inline-block;\n    position: relative;\n    width: 20px;\n    height: 16px;\n    margin: -4px 0px -1px 0px;\n    opacity: 0.7;\n}\n.tvjs-spinner div {\n    position: absolute;\n    top: 8px;\n    width: 4px;\n    height: 4px;\n    border-radius: 50%;\n    animation-timing-function: cubic-bezier(1, 1, 1, 1);\n}\n.tvjs-spinner div:nth-child(1) {\n    left: 2px;\n    animation: tvjs-spinner1 0.6s infinite;\n    opacity: 0.9;\n}\n.tvjs-spinner div:nth-child(2) {\n    left: 2px;\n    animation: tvjs-spinner2 0.6s infinite;\n}\n.tvjs-spinner div:nth-child(3) {\n    left: 9px;\n    animation: tvjs-spinner2 0.6s infinite;\n}\n.tvjs-spinner div:nth-child(4) {\n    left: 16px;\n    animation: tvjs-spinner3 0.6s infinite;\n    opacity: 0.9;\n}\n@keyframes tvjs-spinner1 {\n0% {\n        transform: scale(0);\n}\n100% {\n        transform: scale(1);\n}\n}\n@keyframes tvjs-spinner3 {\n0% {\n        transform: scale(1);\n}\n100% {\n        transform: scale(0);\n}\n}\n@keyframes tvjs-spinner2 {\n0% {\n        transform: translate(0, 0);\n}\n100% {\n        transform: translate(7px, 0);\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Legend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Legend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Legend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Legend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.trading-vue-legend {\n    position: relative;\n    z-index: 100;\n    font-size: 1.25em;\n    margin-left: 10px;\n    pointer-events: none;\n}\n.trading-vue-ohlcv {\n    pointer-events: none;\n    margin-bottom: 0.5em;\n}\n.t-vue-lspan {\n    font-variant-numeric: tabular-nums;\n    font-weight: 100;\n    font-size: 0.95em;\n    color: #999999; /* TODO: move => params */\n    margin-left: 0.1em;\n    margin-right: 0.2em;\n}\n.t-vue-title {\n    margin-right: 0.25em;\n    font-size: 1.45em;\n    font-weight: 200;\n}\n.t-vue-ind {\n    margin-left: 0.2em;\n    margin-bottom: 0.5em;\n    font-weight: 200;\n    font-size: 1.0em;\n    margin-top: 0.3em;\n}\n.t-vue-ivalue {\n    margin-left: 0.5em;\n}\n.t-vue-unknown {\n    color: #999999; /* TODO: move => params */\n}\n.tvjs-appear-enter-active,\n.tvjs-appear-leave-active\n{\n    transition: all .25s ease;\n}\n.tvjs-appear-enter, .tvjs-appear-leave-to\n{\n    opacity: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.trading-vue-section {\n    height: 0;\n    position: absolute;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Botbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Botbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Botbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Botbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.trading-vue-botbar {\n    position: relative !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.trading-vue-tbitem {\n}\n.trading-vue-tbitem:hover {\n    background-color: #76878319;\n}\n.trading-vue-tbicon {\n    position: absolute;\n}\n.trading-vue-tbitem.selected-item .trading-vue-tbicon {\n     filter: brightness(1.45) sepia(1) hue-rotate(90deg) saturate(4.5) !important;\n}\n.pixelated {\n    -ms-interpolation-mode: nearest-neighbor;\n    image-rendering: -webkit-optimize-contrast;\n    image-rendering: -webkit-crisp-edges;\n    image-rendering: -moz-crisp-edges;\n    image-rendering: -o-crisp-edges;\n    image-rendering: pixelated;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toolbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toolbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toolbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toolbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.trading-vue-toolbar {\n    position: absolute;\n    border-right: 1px solid black;\n    z-index: 100;\n    padding-top: 3px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Widgets_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Widgets_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Widgets_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Widgets_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.tvjs-widgets {\n    position: absolute;\n    z-index: 1000;\n    pointer-events: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 62 */
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
/* 63 */
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
/* 64 */
/***/ (function(module, exports) {



/***/ }),
/* 65 */
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
        color: this.chart_props.colors.text,
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
                ref: "toolbar",
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
            ref: "widgets",
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
var slicedToArray = __webpack_require__(3);
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
var lib = __webpack_require__(26);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

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
        el.style.top = '-1000px';
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
  },
  // Delayed warning, f = condition lambda fn
  warn: function warn(f, text, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    setTimeout(function () {
      if (f()) console.warn(text);
    }, delay);
  },
  // Checks if script props updated
  // (and not style settings or something else)
  is_scr_props_upd: function is_scr_props_upd(n, prev) {
    var p = prev.find(function (x) {
      return x.v.$uuid === n.v.$uuid;
    });
    if (!p) return false;
    var props = n.p.settings.$props;
    if (!props) return false;
    return props.some(function (x) {
      return n.v[x] !== p.v[x];
    });
  },
  // Checks if it's time to make a script update
  // (based on execInterval in ms)
  delayed_exec: function delayed_exec(v) {
    if (!v.script.execInterval) return true;
    var t = this.now();
    var dt = v.script.execInterval;

    if (!v.settings.$last_exec || t > v.settings.$last_exec + dt) {
      v.settings.$last_exec = t;
      return true;
    }

    return false;
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
      if (ib) t = self.ti_map.smth2i(t);
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
      } // TODO: fix grid extension for bigger timeframes


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
            attrs: { grid_id: _vm.grid_id, rerender: _vm.rerender },
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
var hammer = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/hamsterjs/hamster.js
var hamster = __webpack_require__(29);
var hamster_default = /*#__PURE__*/__webpack_require__.n(hamster);

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

      this.hm = hamster_default()(this.canvas);
      this.hm.wheel(function (event, delta) {
        return _this.mousezoom(-delta * 50, event);
      });
      var mc = this.mc = new hammer["Manager"](this.canvas);
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
      var add = addEventListener;
      add("gesturestart", this.gesturestart);
      add("gesturechange", this.gesturechange);
      add("gestureend", this.gestureend);
    }
  }, {
    key: "gesturestart",
    value: function gesturestart(event) {
      event.preventDefault();
    }
  }, {
    key: "gesturechange",
    value: function gesturechange(event) {
      event.preventDefault();
    }
  }, {
    key: "gestureend",
    value: function gestureend(event) {
      event.preventDefault();
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
      if (this.$p.shaders.length) this.apply_shaders();
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
    }
  }, {
    key: "apply_shaders",
    value: function apply_shaders() {
      var layout = this.$p.layout.grids[this.id];
      var props = {
        layout: layout,
        range: this.range,
        interval: this.interval,
        tf: layout.ti_map.tf,
        cursor: this.cursor,
        colors: this.$p.colors,
        sub: this.data,
        font: this.$p.font,
        config: this.$p.config,
        meta: this.$p.meta
      };

      var _iterator = grid_createForOfIteratorHelper(this.$p.shaders),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var s = _step.value;
          this.ctx.save();
          s.draw(this.ctx, props);
          this.ctx.restore();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } // Actually draws the grid (for real)

  }, {
    key: "grid",
    value: function grid() {
      this.ctx.strokeStyle = this.$p.colors.grid;
      this.ctx.beginPath();
      var ymax = this.layout.height;

      var _iterator2 = grid_createForOfIteratorHelper(this.layout.xs),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = slicedToArray_default()(_step2.value, 2),
              x = _step2$value[0],
              p = _step2$value[1];

          this.ctx.moveTo(x - 0.5, 0);
          this.ctx.lineTo(x - 0.5, ymax);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = grid_createForOfIteratorHelper(this.layout.ys),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = slicedToArray_default()(_step3.value, 2),
              y = _step3$value[0],
              y$ = _step3$value[1];

          this.ctx.moveTo(0, y - 0.5);
          this.ctx.lineTo(this.layout.width, y - 0.5);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      this.ctx.stroke();
      if (this.$p.grid_id) this.upper_border();
    }
  }, {
    key: "upper_border",
    value: function upper_border() {
      this.ctx.strokeStyle = this.$p.colors.scale;
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
      var _iterator4 = grid_createForOfIteratorHelper(this.overlays),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var layer = _step4.value;

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
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var rm = removeEventListener;
      rm("gesturestart", this.gesturestart);
      rm("gesturechange", this.gesturechange);
      rm("gestureend", this.gestureend);
      if (this.mc) this.mc.destroy();
      if (this.hm) this.hm.unwheel();
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
    key: "draw",
    value: function draw(ctx) {
      // Update reference to the grid
      this.layout = this.$p.layout;
      if (!this.visible) return;
      this.x = this.$p.cursor.x;
      this.y = this.$p.cursor.y;
      ctx.save();
      ctx.strokeStyle = this.$p.colors.cross;
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

        this.ch.visible = true; //this.ch.update(cursor.x, cursor.y)
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
        'border': "1px solid ".concat(this.$props.colors.grid),
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
      var c = this.uxr.background || this.$props.colors.back;
      return utils.apply_opacity(c, this.uxr.background_opacity || this.$props.config.UX_OPACITY);
    },
    inactive_btn_color: function inactive_btn_color() {
      return this.uxr.inactive_btn_color || this.$props.colors.grid;
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
var UxWrappervue_type_style_index_0_lang_css_ = __webpack_require__(42);

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
    // TODO(1): when hot reloading, dynamicaly changed mixins
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
      // TODO(2): this prevents call overflow, but
      // the root of evil is in (1)


      if (event === 'custom-event') return;

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
        version: '1.1.1'
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

            if (p[i] == null || _y !== _y) {
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
        color: this.$props.colors.text
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
        version: '1.0.1'
      };
    },
    draw: function draw(ctx) {
      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.color;
      ctx.fillStyle = this.back_color;

      for (var i = 0; i < this.$props.data.length - 1; i++) {
        var p1 = this.mapp(this.$props.data[i]);
        var p2 = this.mapp(this.$props.data[i + 1]);
        if (!p2) continue;
        if (p1.y1 !== p1.y1) continue; // Fix NaN
        // Background

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
          ctx.fillStyle = comp.$props.colors.textHL;
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
      return this.sett.colorCandleUp || this.$props.colors.candleUp;
    },
    colorCandleDw: function colorCandleDw() {
      return this.sett.colorCandleDw || this.$props.colors.candleDw;
    },
    colorWickUp: function colorWickUp() {
      return this.sett.colorWickUp || this.$props.colors.wickUp;
    },
    colorWickDw: function colorWickDw() {
      return this.sett.colorWickDw || this.$props.colors.wickDw;
    },
    colorWickSm: function colorWickSm() {
      return this.sett.colorWickSm || this.$props.colors.wickSm;
    },
    colorVolUp: function colorVolUp() {
      return this.sett.colorVolUp || this.$props.colors.volUp;
    },
    colorVolDw: function colorVolDw() {
      return this.sett.colorVolDw || this.$props.colors.volDw;
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
      return this.sett.colorVolUp || this.$props.colors.volUp;
    },
    colorVolDw: function colorVolDw() {
      return this.sett.colorVolDw || this.$props.colors.volDw;
    },
    colorVolUpLegend: function colorVolUpLegend() {
      return this.sett.colorVolUpLegend || this.$props.colors.candleUp;
    },
    colorVolDwLegend: function colorVolDwLegend() {
      return this.sett.colorVolDwLegend || this.$props.colors.candleDw;
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
var icons = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(11);
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
    this.COLOR_BACK = comp.$props.colors.back;
    this.COLOR_BR = comp.$props.colors.text;
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
      return this.sett.color || this.$props.colors.cross;
    },
    back_color: function back_color() {
      return this.sett.backColor || '#9b9ba316';
    },
    value_back: function value_back() {
      return this.sett.valueBack || '#9b9ba316';
    },
    value_color: function value_color() {
      return this.sett.valueColor || this.$props.colors.text;
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
  props: ['sub', 'layout', 'range', 'interval', 'cursor', 'colors', 'overlays', 'width', 'height', 'data', 'grid_id', 'y_transform', 'font', 'tv_id', 'config', 'meta', 'shaders'],
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
  beforeDestroy: function beforeDestroy() {
    if (this.renderer) this.renderer.destroy();
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
        backgroundColor: this.$props.colors.back
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
                  if (!comp.calc) continue;
                  var calc = comp.calc.toString();

                  if (calc !== ov.__prevscript__) {
                    comp.exec_script();
                  }

                  ov.__prevscript__ = calc;
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
    },
    // Redraw on the shader list change
    shaders: function shaders(n, p) {
      this.redraw();
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

      var mc = this.mc = new hammer["Manager"](this.canvas);
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
      this.ctx.fillStyle = this.$p.colors.back;
      this.ctx.font = this.$p.font;

      switch (side) {
        case 'left':
          x = 0;
          y = 0;
          w = Math.floor(sb);
          h = this.layout.height;
          this.ctx.fillRect(x, y, w, h);
          this.ctx.strokeStyle = this.$p.colors.scale;
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
          this.ctx.strokeStyle = this.$p.colors.scale;
          this.ctx.beginPath();
          this.ctx.moveTo(x + 0.5, 0);
          this.ctx.lineTo(x + 0.5, h);
          this.ctx.stroke();
          break;
      }

      this.ctx.fillStyle = this.$p.colors.text;
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
      var layout = this.$p.layout.grids[this.id];
      var props = {
        layout: layout,
        cursor: this.$p.cursor
      };

      var _iterator2 = sidebar_createForOfIteratorHelper(this.$p.shaders),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var s = _step2.value;
          this.ctx.save();
          s.draw(this.ctx, props);
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
      this.ctx.strokeStyle = this.$p.colors.scale;
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
      this.ctx.fillStyle = this.$p.colors.panel;
      var panwidth = this.layout.sb + 1;
      var x = -0.5;
      var y = this.$p.cursor.y - PANHEIGHT * 0.5 - 0.5;
      var a = 7;
      this.ctx.fillRect(x - 0.5, y, panwidth, PANHEIGHT);
      this.ctx.fillStyle = this.$p.colors.textHL;
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
    key: "destroy",
    value: function destroy() {
      if (this.mc) this.mc.destroy();
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
        backgroundColor: this.$props.colors.back
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
  },
  beforeDestroy: function beforeDestroy() {
    if (this.renderer) this.renderer.destroy();
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
                  style: { color: _vm.common.colors.title }
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
var LegendButtonvue_type_style_index_0_lang_css_ = __webpack_require__(44);

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
var ButtonGroupvue_type_style_index_0_lang_css_ = __webpack_require__(46);

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
      return _c("div", { style: { background: _vm.colors.text } })
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
var Spinnervue_type_style_index_0_lang_css_ = __webpack_require__(48);

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
var Legendvue_type_style_index_0_lang_css_ = __webpack_require__(50);

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
function shaders_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = shaders_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function shaders_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return shaders_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return shaders_arrayLikeToArray(o, minLen); }

function shaders_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Parser for shader events
/* harmony default export */ var shaders = ({
  methods: {
    // Init shaders from extensions
    init_shaders: function init_shaders(skin, prev) {
      if (skin !== prev) {
        if (prev) this.shaders = this.shaders.filter(function (x) {
          return x.owner !== prev.id;
        });

        var _iterator = shaders_createForOfIteratorHelper(skin.shaders),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var Shader = _step.value;
            var shader = new Shader();
            shader.owner = skin.id;
            this.shaders.push(shader);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    },
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
  watch: {
    skin: function skin(n, p) {
      this.init_shaders(n, p);
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




/* harmony default export */ var Sectionvue_type_script_lang_js_ = ({
  name: 'GridSection',
  props: ['common', 'grid_id'],
  mixins: [shaders],
  components: {
    Grid: components_Grid,
    Sidebar: components_Sidebar,
    ChartLegend: Legend
  },
  mounted: function mounted() {
    this.init_shaders(this.$props.common.skin);
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
    },
    ghash: function ghash(val) {
      // Measures grid heights configuration
      var hs = val.layout.grids.map(function (x) {
        return x.height;
      });
      return hs.reduce(function (a, b) {
        return a + b;
      }, '');
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
      p.shaders = this.grid_shaders;
      return p;
    },
    sidebar_props: function sidebar_props() {
      var id = this.$props.grid_id;
      var p = Object.assign({}, this.$props.common);
      p.width = p.layout.grids[id].sb;
      p.height = p.layout.grids[id].height;
      p.y_transform = p.y_ts[id];
      p.shaders = this.sb_shaders;
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
    },
    grid_shaders: function grid_shaders() {
      return this.shaders.filter(function (x) {
        return x.target === 'grid';
      });
    },
    sb_shaders: function sb_shaders() {
      return this.shaders.filter(function (x) {
        return x.target === 'sidebar';
      });
    }
  },
  watch: {
    common: {
      handler: function handler(val, old_val) {
        var newhash = this.ghash(val);

        if (newhash !== this.last_ghash) {
          this.rerender++;
        }

        if (val.data.length !== old_val.data.length) {
          // Look at this nasty trick!
          this.rerender++;
        }

        this.last_ghash = newhash;
      },
      deep: true
    }
  },
  data: function data() {
    return {
      meta_props: {},
      rerender: 0,
      last_ghash: ''
    };
  }
});
// CONCATENATED MODULE: ./src/components/Section.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Sectionvue_type_script_lang_js_ = (Sectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Section.vue?vue&type=style&index=0&lang=css&
var Sectionvue_type_style_index_0_lang_css_ = __webpack_require__(52);

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
      this.ctx.fillStyle = this.$p.colors.back;
      this.ctx.font = this.$p.font;
      this.ctx.fillRect(0, 0, width, height);
      this.ctx.strokeStyle = this.$p.colors.scale;
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0.5);
      this.ctx.lineTo(Math.floor(width + 1), 0.5);
      this.ctx.stroke();
      this.ctx.fillStyle = this.$p.colors.text;
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
      var layout = this.layout.grids[0];
      var props = {
        layout: layout,
        cursor: this.$p.cursor
      };

      var _iterator2 = botbar_createForOfIteratorHelper(this.comp.bot_shaders),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var s = _step2.value;
          this.ctx.save();
          s.draw(this.ctx, props);
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
      this.ctx.fillStyle = this.$p.colors.panel;
      var measure = this.ctx.measureText(lbl + '    ');
      var panwidth = Math.floor(measure.width);
      var cursor = this.$p.cursor.x;
      var x = Math.floor(cursor - panwidth * 0.5);
      var y = -0.5;
      var panheight = this.comp.config.PANHEIGHT;
      this.ctx.fillRect(x, y, panwidth, panheight + 0.5);
      this.ctx.fillStyle = this.$p.colors.textHL;
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
        backgroundColor: this.$props.colors.back
      }
    });
  },
  computed: {
    bot_shaders: function bot_shaders() {
      return this.$props.shaders.filter(function (x) {
        return x.target === 'botbar';
      });
    }
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
var Botbarvue_type_style_index_0_lang_css_ = __webpack_require__(54);

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
  props: ['title_txt', 'data', 'width', 'height', 'font', 'colors', 'overlays', 'tv_id', 'config', 'buttons', 'toolbar', 'ib', 'skin'],
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
    this.init_shaders(this.skin);
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
      if (this._hook_xchanged) this.ce('?x-changed', e);
    },
    cursor_locked: function cursor_locked(state) {
      if (this.cursor.scroll_lock && state) return;
      this.cursor.locked = state;
      if (this._hook_xlocked) this.ce('?x-locked', state);
    },
    calc_interval: function calc_interval() {
      var _this = this;

      if (this.ohlcv.length < 2) return;
      var tf = utils.parse_tf(this.forced_tf);
      this.interval_ms = tf || utils.detect_interval(this.ohlcv);
      this.interval = this.$props.ib ? 1 : this.interval_ms;
      utils.warn(function () {
        return _this.$props.ib && !_this.chart.tf;
      }, constants.IB_TF_WARN, constants.SECOND);
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
        meta: this.meta,
        skin: this.$props.skin
      };
    },
    overlay_subset: function overlay_subset(source) {
      var _this2 = this;

      return source.map(function (d) {
        return {
          type: d.type,
          name: d.name,
          data: _this2.ti_map.parse(utils.fast_filter(d.data, _this2.ti_map.i2t_mode(_this2.range[0] - _this2.interval, d.indexSrc), _this2.ti_map.i2t_mode(_this2.range[1], d.indexSrc))[0] || [], d.indexSrc || 'map'),
          settings: d.settings || _this2.settings_ov,
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
      if (this._hook_update) this.ce('?chart-update', lay);
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
    },
    // Hook events for extensions
    ce: function ce(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      this.emit_custom_event({
        event: event,
        args: args
      });
    },
    // Set hooks list (called from an extension)
    hooks: function hooks() {
      var _this3 = this;

      for (var _len2 = arguments.length, list = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        list[_key2] = arguments[_key2];
      }

      list.forEach(function (x) {
        return _this3["_hook_".concat(x)] = true;
      });
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
    },
    forced_tf: function forced_tf() {
      return this.chart.tf;
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
      if (this._hook_resize) this.ce('?chart-resize');
    },
    height: function height() {
      this.update_layout();
      if (this._hook_resize) this.ce('?chart-resize');
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
    forced_tf: function forced_tf(n, p) {
      this.update_layout(true);
      this.ce('exec-all-scripts');
    },
    data: {
      handler: function handler(n, p) {
        if (!this.sub.length) this.init_range();
        var sub = this.subset(); // Fixes Infinite loop warn, when the subset is empty
        // TODO: Consider removing 'sub' from data entirely

        if (this.sub.length || sub.length) {
          utils.overwrite(this.sub, sub);
        }

        var nw = this.data_changed();
        this.update_layout(nw);
        utils.overwrite(this.range, this.range);
        this.cursor.scroll_lock = !!n.scrollLock;

        if (n.scrollLock && this.cursor.locked) {
          this.cursor.locked = false;
        }

        if (this._hook_data) this.ce('?chart-data', nw);
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
      var c = colors.grid;
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
var ToolbarItemvue_type_style_index_0_lang_css_ = __webpack_require__(56);

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
      var c = colors.grid;
      var cb = colors.tbBack || colors.back;
      var brd = colors.tbBorder || colors.scale;
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
var Toolbarvue_type_style_index_0_lang_css_ = __webpack_require__(58);

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
var Widgetsvue_type_style_index_0_lang_css_ = __webpack_require__(60);

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
    },
    ctrl_destroy: function ctrl_destroy() {
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
    }
  },
  computed: {
    // TODO: Should the extensions be reset on a new DC?
    // Idk, but that's what happens now
    ctrllist: function ctrllist() {
      this.ctrl_destroy();
      this.controllers = [];

      var _iterator4 = xcontrol_createForOfIteratorHelper(this.$props.extensions),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var x = _step4.value;
          var name = x.Main.__name__;

          if (!this.xSettings[name]) {
            this.$set(this.xSettings, name, {});
          }

          var nc = new x.Main(this, // tv inst
          this.data, // dc
          this.xSettings[name] // settings
          );
          nc.name = name;
          this.controllers.push(nc);
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
    },
    skins: function skins() {
      var sks = {};

      var _iterator6 = xcontrol_createForOfIteratorHelper(this.$props.extensions),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var x = _step6.value;

          for (var id in x.skins || {}) {
            sks[id] = x.skins[id];
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      return sks;
    },
    skin_proto: function skin_proto() {
      return this.skins[this.$props.skin];
    },
    colorpack: function colorpack() {
      var sel = this.skins[this.$props.skin];
      return sel ? sel.colors : undefined;
    }
  },
  watch: {
    // TODO: This is fast & dirty fix, need
    // to fix the actual reactivity problem
    skin: function skin(n, p) {
      if (n !== p) this.resetChart();
    },
    xSettings: {
      handler: function handler(n, p) {
        var _iterator7 = xcontrol_createForOfIteratorHelper(this.controllers),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var ctrl = _step7.value;

            if (ctrl.onsettings) {
              ctrl.onsettings(n, p);
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      },
      deep: true
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
    colors: {
      type: Object
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
    },
    xSettings: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    skin: {
      type: String // Skin Name

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
        colors: Object.assign({}, this.$props.colors || this.colorpack),
        skin: this.skin_proto
      };
      this.parse_colors(chart_props.colors);
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
          arr.push.apply(arr, toConsumableArray_default()(Object.values(x.overlays)));
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
    this.ctrl_destroy();
  },
  methods: {
    // TODO: reset extensions?
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

      this.$nextTick(function () {
        return _this.custom_event({
          event: 'chart-reset',
          args: []
        });
      });
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
      this.custom_event({
        event: 'range-changed',
        args: [r]
      });
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
    },
    parse_colors: function parse_colors(colors) {
      for (var k in this.$props) {
        if (k.indexOf('color') === 0 && k !== 'colors') {
          var k2 = k.replace('color', '');
          k2 = k2[0].toLowerCase() + k2.slice(1);
          if (colors[k2]) continue;
          colors[k2] = this.$props[k];
        }
      }
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
var helpers_typeof = __webpack_require__(10);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(25);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(23);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(24);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(8);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(12);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/helpers/tmp/ww$$$.json
var ww$$$ = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/lz-string/libs/lz-string.js
var lz_string = __webpack_require__(31);
var lz_string_default = /*#__PURE__*/__webpack_require__.n(lz_string);

// EXTERNAL MODULE: ./src/helpers/script_ww.js
var script_ww = __webpack_require__(64);

// CONCATENATED MODULE: ./src/helpers/script_ww_api.js




// Webworker interface
// Compiled webworker (see webpack/ww_plugin.js)



 // For webworker-loader to find the ww

var script_ww_api_WebWork = /*#__PURE__*/function () {
  function WebWork(dc) {
    classCallCheck_default()(this, WebWork);

    this.dc = dc;
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
    key: "start_socket",
    value: function start_socket() {
      var _this2 = this;

      if (!this.dc.sett.node_url) return;
      this.socket = new WebSocket(this.dc.sett.node_url);
      this.socket.addEventListener('message', function (e) {
        _this2.onmessage({
          data: JSON.parse(e.data)
        });
      });
      this.msg_queue = [];
    }
  }, {
    key: "send",
    value: function send(msg, tx_keys) {
      if (this.dc.sett.node_url) {
        return this.send_node(msg, tx_keys);
      }

      if (tx_keys) {
        var tx_objs = tx_keys.map(function (k) {
          return msg.data[k];
        });
        this.worker.postMessage(msg, tx_objs);
      } else {
        this.worker.postMessage(msg);
      }
    } // Send to node.js via websocket

  }, {
    key: "send_node",
    value: function send_node(msg, tx_keys) {
      if (!this.socket) this.start_socket();

      if (this.socket && this.socket.readyState) {
        // Send the old messages first
        while (this.msg_queue.length) {
          var m = this.msg_queue.shift();
          this.socket.send(JSON.stringify(m));
        }

        this.socket.send(JSON.stringify(msg));
      } else {
        this.msg_queue.push(msg);
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
        var _this3 = this;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (rs, rj) {
                  var id = utils.uuid();

                  _this3.send({
                    type: type,
                    id: id,
                    data: data
                  }, tx_keys);

                  _this3.tasks[id] = function (res) {
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
        var _this4 = this;

        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (just === void 0) {
                  just = false;
                }

                return _context2.abrupt("return", new Promise(function (rs, rj) {
                  _this4.send(event, event.tx_keys);

                  if (!just) {
                    _this4.tasks[event.id] = function (res) {
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
// CONCATENATED MODULE: ./src/helpers/dataset.js




function dataset_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = dataset_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function dataset_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dataset_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dataset_arrayLikeToArray(o, minLen); }

function dataset_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Dataset proxy between vuejs & WebWorker
var dataset_Dataset = /*#__PURE__*/function () {
  function Dataset(dc, desc) {
    classCallCheck_default()(this, Dataset);

    // TODO: dataset url arrow fn tells WW
    // to load the ds directly from web
    this.type = desc.type;
    this.id = desc.id;
    this.dc = dc; // Send the data to WW

    if (desc.data) {
      this.dc.ww.just('upload-data', defineProperty_default()({}, this.id, desc)); // Remove the data from the descriptor

      delete desc.data;
    }
  } // Watch for the changes of descriptors


  createClass_default()(Dataset, [{
    key: "set",
    // Set data (overwrite the whole dataset)
    value: function set(data) {
      this.dc.ww.just('dataset-op', {
        id: this.id,
        type: 'set',
        data: data
      });
    } // Update with new data

  }, {
    key: "update",
    value: function update() {} // Send to WW a chunk to merge

  }, {
    key: "merge",
    value: function merge() {} // Remove the ds from WW

  }, {
    key: "remove",
    value: function remove() {}
  }], [{
    key: "watcher",
    value: function watcher(n, p) {} // Make an object for data transfer

  }, {
    key: "make_tx",
    value: function make_tx(dc, types) {
      var main = dc.data.chart.data;
      var base = {};

      if (types.find(function (x) {
        return x.type === 'OHLCV';
      })) {
        base = {
          ohlcv: main
        };
      } // TODO: add more sophisticated search
      // (using 'script.datasets' paramerter)


      var _iterator = dataset_createForOfIteratorHelper(types),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var req = _step.value;
          var ds = Object.values(dc.dss || {}).find(function (x) {
            return x.type === req.type;
          });

          if (ds && ds.data) {
            base[ds.id] = {
              id: ds.id,
              type: ds.type,
              data: ds.data
            };
          }
        } // TODO: Data request callback ?

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return base;
    }
  }]);

  return Dataset;
}(); // Dataset reciever (created on WW)



var dataset_DatasetWW = /*#__PURE__*/function () {
  function DatasetWW(id, data) {
    classCallCheck_default()(this, DatasetWW);

    this.id = id;

    if (Array.isArray(data)) {
      // Regular array
      this.data = data;
      if (id === 'ohlcv') this.type = 'OHLCV';
    } else {
      // Dataset descriptor
      this.data = data.data;
      this.type = data.type;
    }
  } // On dataset operation


  createClass_default()(DatasetWW, [{
    key: "op",
    value: function op(_op) {
      switch (_op.type) {
        case 'set':
          this.data = _op.data;
          break;
      }
    }
  }]);

  return DatasetWW;
}();
// CONCATENATED MODULE: ./src/helpers/dc_events.js





function dc_events_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = dc_events_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function dc_events_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dc_events_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dc_events_arrayLikeToArray(o, minLen); }

function dc_events_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// DataCube event handlers





var dc_events_DCEvents = /*#__PURE__*/function () {
  function DCEvents() {
    var _this = this;

    classCallCheck_default()(this, DCEvents);

    this.ww = new script_ww_api(this); // Listen to the web-worker events

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
          // TODO: DataTunnel class for smarter data transfer
          if (_this.ww._data_uploading) break;
          var data = dataset_Dataset.make_tx(_this, e.data.data);

          _this.send_meta_2_ww();

          _this.ww.just('upload-data', data);

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

        case 'modify-overlay':
          _this.modify_overlay(e.data.data);

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

        case 'exec-all-scripts':
          this.exec_all_scripts();
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

        case 'range-changed':
          this.scripts_onrange.apply(this, toConsumableArray_default()(args));
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

          if (utils.is_scr_props_upd(n, prev)) {
            delta[id] = n.v;
            changed = true;

            _this2.tv.$set(n.p, 'loading', true);
          }
        }
      };

      for (var i = 0; i < values.length; i++) {
        _loop();
      }

      if (changed) {
        var tf = this.tv.$refs.chart.interval_ms;
        var range = this.tv.getRange();
        this.ww.just('update-ov-settings', {
          delta: delta,
          tf: tf,
          range: range
        });
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
        var props = args[0].src.props || {};
        if (!s.$uuid) s.$uuid = "".concat(obj.type, "-").concat(utils.uuid2());
        args[0].uuid = s.$uuid;
        args[0].sett = s;

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

        s.$props = Object.keys(args[0].src.props || {});
        this.tv.$set(obj, 'loading', true);
        var tf = this.tv.$refs.chart.interval_ms;
        var range = this.tv.getRange();

        if (obj.script && obj.script.output != null) {
          args[0].output = obj.script.output;
        }

        this.ww.just('exec-script', {
          s: args[0],
          tf: tf,
          range: range
        });
      }
    }
  }, {
    key: "exec_all_scripts",
    value: function exec_all_scripts() {
      if (!this.sett.scripts) return;
      var skrr = dc.get('.').filter(function (x) {
        return x.settings.$props;
      });

      var _iterator5 = dc_events_createForOfIteratorHelper(skrr),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var s = _step5.value;
          this.merge("".concat(s.id), {
            loading: true
          });
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      var tf = this.tv.$refs.chart.interval_ms;
      var range = this.tv.getRange();
      this.ww.just('exec-all-scripts', {
        tf: tf,
        range: range
      });
    }
  }, {
    key: "scripts_onrange",
    value: function scripts_onrange(r) {
      if (!this.sett.scripts) return;
      var delta = {};
      var update = false;
      this.get('.').forEach(function (v) {
        if (v.script && v.script.execOnRange && v.settings.$uuid) {
          delta[v.settings.$uuid] = v.settings;
          update = utils.delayed_exec(v); // TODO: execInterrupt flag?
        }
      });

      if (update) {
        var tf = this.tv.$refs.chart.interval_ms;
        var range = this.tv.getRange();
        this.ww.just('update-ov-settings', {
          delta: delta,
          tf: tf,
          range: range
        });
      }
    } // Overlay modification from WW

  }, {
    key: "modify_overlay",
    value: function modify_overlay(upd) {
      var obj = this.get_overlay(upd);

      if (obj) {
        for (var k in upd.fields || {}) {
          if (typeof_default()(obj[k]) === 'object') {
            this.merge("".concat(upd.uuid, ".").concat(k), upd.fields[k]);
          } else {
            this.tv.$set(obj, k, upd.fileds[k]);
          }
        }
      }
    }
  }, {
    key: "data_changed",
    value: function data_changed(args) {
      if (!this.sett.scripts) return;
      if (this.sett.data_change_exec === false) return;
      var main = this.data.chart.data;
      if (this.ww._data_uploading) return;
      if (!this.se_state.scripts) return;
      this.send_meta_2_ww();
      this.ww.just('upload-data', {
        ohlcv: main
      });
      this.ww._data_uploading = true;
      this.merge('.', {
        loading: true
      });
    }
  }, {
    key: "send_meta_2_ww",
    value: function send_meta_2_ww() {
      var tf = this.tv.$refs.chart.interval_ms;
      var range = this.tv.getRange();
      this.ww.just('send-meta-info', {
        tf: tf,
        range: range
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

      var _iterator6 = dc_events_createForOfIteratorHelper(data),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var ov = _step6.value;
          var obj = this.get_one("".concat(ov.id));

          if (obj) {
            this.tv.$set(obj, 'loading', false);
            if (!ov.data) continue;
            obj.data = ov.data;
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
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    } // Push overlay updates from the web-worker

  }, {
    key: "on_overlay_update",
    value: function on_overlay_update(data) {
      var _iterator7 = dc_events_createForOfIteratorHelper(data),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var ov = _step7.value;
          if (!ov.data) continue;
          var obj = this.get_one("".concat(ov.id));

          if (obj) {
            this.fast_merge(obj.data, ov.data);
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
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
      var dcid = obj.uuid || this.gldc[id];
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

// DataCube "private" methods




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
        }); // TODO: Watch for all 'datasets' changes
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

      if (!('datasets' in this.data)) {
        this.tv.$set(this.data, 'datasets', []);
      } // Init dataset proxies


      var _iterator = dc_core_createForOfIteratorHelper(this.data.datasets),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ds = _step.value;
          if (!this.dss) this.dss = {};
          this.dss[ds.id] = new dataset_Dataset(this, ds);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
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

      var _iterator2 = dc_core_createForOfIteratorHelper(this.data.onchart),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var ov = _step2.value;

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
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      count = {};
      var grids = [{}];
      var gid = 0;

      var _iterator3 = dc_core_createForOfIteratorHelper(this.data.offchart),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var ov = _step3.value;

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
        _iterator3.e(err);
      } finally {
        _iterator3.f();
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
        case 'datasets':
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
        return !(x.v || {}).locked || chuck;
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
        return x.id === query || x.id && x.id.includes(path) || x.name === query || x.name && x.name.includes(path) || query.includes((x.settings || {}).$uuid);
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
      scripts: true,
      // Enable overlays scripts,
      ww_ram_limit: 0,
      // TODO: WebWorker RAM limit
      node_url: null // Use node.js instead of WW

    };
    sett = Object.assign(def_sett, sett);
    _this = _super.call(this);
    _this.sett = sett;
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
var ray = __webpack_require__(32);
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