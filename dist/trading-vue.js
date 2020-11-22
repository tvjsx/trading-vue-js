/*!
 * TradingVue.JS - v0.10.0-alpha - Sun Nov 22 2020
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
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(34);

var iterableToArray = __webpack_require__(35);

var unsupportedIterableToArray = __webpack_require__(30);

var nonIterableSpread = __webpack_require__(36);

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

var arrayWithHoles = __webpack_require__(37);

var iterableToArrayLimit = __webpack_require__(38);

var unsupportedIterableToArray = __webpack_require__(30);

var nonIterableRest = __webpack_require__(39);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 4 */
/***/ (function(module) {

module.exports = JSON.parse("{\"extended.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAANElEQVR4nGNggABGEMEEIlhABAeI+AASF0AlHmAqA4kzKAAx8wGQuAMKwd6AoYzBAWonAwAcLwTgNfJ3RQAAAABJRU5ErkJggg==\",\"ray.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAAMklEQVR4nGNgQAJMIIIFRHCACAEQoQAiHICYvQEkjkrwYypjAIkzwk2zAREuqIQFzD4AE3kE4BEmGggAAAAASUVORK5CYII=\",\"segment.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAgMAAAC5h23wAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAlQTFRFAAAATU1NJCQkCxcHIQAAAAN0Uk5TAP8SmutI5AAAACxJREFUeJxjYMACGAMgNAsLdpoVKi8AVe8A1QblQlWRKt0AoULw2w1zGxoAABdiAviQhF/mAAAAAElFTkSuQmCC\",\"add.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAH5QTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKBgYGGxsbKioqPz8/Pj4+BQUFCQkJAQEBZGRkh4eHAgICEBAQNjY2g4ODgYGBAAAAAwMDeXl5d3d3GBgYERERgICAgICANDQ0PDw8Y2NjCAgIhYWFGhoaJycnOjo6YWFhgICAdXV14Y16sQAAACp0Uk5TAAILDxIKESEnJiYoKCgTKSkpKCAnKSkFKCkpJiDl/ycpKSA2JyYpKSkpOkQ+xgAAARdJREFUeJzllNt2gyAQRTWiRsHLoDU0GpPYmMv//2BMS+sgl6Z9bM8bi73gnJkBz/sn8lcBIUHofwtG8TpJKUuTLI6cYF7QEqRKynP71VX9AkhNXVlsbMQrLLQVGyPZLsGHWgPrCxMJwHUPlXa79NBp2et5d9f3u3m1XxatQNn7SagOXCUjCjYUDuqxcWlHj4MSfw12FDJchFViRN8+1qcQoUH6lR1L1mEMEErofB6WzEUwylzomfzOQGiOJdXiWH7mQoUyMa4WXJQWOBvLFvPCGxt6FSr5kyH0qi0YddNG2/pgCsOjff4ZTizXPNwKIzl56OoGg9d9Z/+5cs6On+CFCfevFQ3ZaTycx1YMbvDdRvjkp/lHdAcPXzokxcwfDwAAAABJRU5ErkJggg==\",\"cursor.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAgMAAAC5h23wAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAxQTFRFAAAATU1NTU1NTU1NwlMHHwAAAAR0Uk5TAOvhxbpPrUkAAAAkSURBVHicY2BgYHBggAByabxg1WoGBq2pRCk9AKUbcND43AEAufYHlSuusE4AAAAASUVORK5CYII=\",\"display_off.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAU1QTFRFAAAAh4eHh4eHAAAAAAAAAAAAAwMDAAAAAAAAhoaGGBgYgYGBAAAAPz8/AgICg4ODCQkJhISEh4eHh4eHPj4+NjY2gYGBg4ODgYGBgYGBgoKCAQEBJycngoKChYWFEBAQg4ODCAgIKioqZGRkCgoKBQUFERERd3d3gYGBGxsbNDQ0hISEgYGBPDw8gYGBgYGBh4eHh4eHhYWFh4eHgoKChYWFgYGBgYGBg4ODhoaGg4ODYWFhgoKCBgYGdXV1goKCg4ODgYGBgICAgYGBAAAAg4ODhYWFhISEh4eHgoKChYWFOjo6goKCGhoah4eHh4eHh4eHgoKCh4eHeXl5hoaGgoKChISEgYGBgYGBgoKCY2NjgYGBgoKCh4eHgoKCgYGBhoaGg4ODhoaGhYWFh4eHgYGBhoaGhoaGhoaGg4ODgoKChISEgoKChYWFh4eHfKktUwAAAG90Uk5TACn/AhEFKA8SLCbxCigoVBNKUTYoJ/lh3PyAKSaTNiBtICYpISggKSkmJ0LEKef3lGxA8rn//+pcMSkpnCcptHPJKe0LUjnx5LzKKaMnX73hl64pLnhkzNSgKeLv17LQ+liIzaLe7PfTw5tFpz3K1fXR/gAAAgBJREFUeJzllNdXwjAUxknB0lIoCKVsGTIFQRAZ7r333nuv///R3LZ4mlDQZ/0ekp7b37n5bnITk+mfyDxv5Tir3fwjaElO5BIOKZFLJS1dQVfI0Y809TtEV+elo95RpFPWG+1go4fdQ5QybI8haaNBkM2ANbM09bnrwaPY7iFKrz7EMBdu7CHdVruXIt0M1hb+GKA3LTRKkp5lTA6Dg6xIkhaHhvQ1IlW/UCouQdJNJTRIpk1qO7+wUpcfpl537oBc7VNip3Gi/AmVPBAC1UrL6HXtSGVT+k2Yz0Focad07OMRf3P5BEbd63PFQx7HN+w61JoAm+uBlV48O/0jkLSMmtPCmQ8HwlYdykFV4/LJPp7e3hVyFdapHNehLk6PSjhSkBvwu/cFyJGIYvOyhoc1jjYQFGbygD4CWjoAMla/og3YoSw+KPhjPNoFcim4iFD+pFYA8zZ9WeYU5OBjZ3ORWyCfG03E+47kKpCIJTpGO4KP8XMgtw990xG/PBNTgmPEEXwf7P42oOdFIRAoBCtqTKL6Rcwq4Xsgh5xYC/mmSs6yJKk1YbnVeTq1NaEpmlHbmVn2EORkW2trF2ZzmHGTSUMGl1a9hp4ySRpdQ8yKGURpMmRIYg9pb1YPzg6kO79cLlE6bYFjEtv91bLEUxvhwbWwjY13BxUb9l8+mn9EX8x3Nki8ff5wAAAAAElFTkSuQmCC\",\"display_on.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAR1QTFRFAAAAh4eHgYGBAAAAAAAAgYGBAAAAAwMDAAAAAAAAgYGBg4ODGBgYgYGBhISEAAAAPz8/AgIChoaGCQkJhYWFPj4+NjY2goKCgYGBAQEBJycngYGBgoKCEBAQCAgIhISEKioqZGRkCgoKBQUFERERd3d3gYGBg4ODgYGBGxsbNDQ0hISEgoKCgoKChYWFPDw8gYGBgYGBhoaGgoKCg4ODgoKCgYGBgoKCgoKCgoKCg4ODgoKChoaGgoKCgYGBhoaGg4ODYWFhBgYGdXV1gYGBg4ODgoKCgICAg4ODg4ODhISEAAAAg4ODOjo6gYGBGhoaeXl5goKCgYGBgoKChYWFgoKChISEgoKCY2NjgYGBg4ODgYGBgYGBg4ODgYGBo8n54AAAAF90Uk5TACn/AhH3BSgPEuhUJvFACigoLBM2KCeA6ykm+pMgIEkmKSEoICn9XCkmJ0u6nDop4sUypGuEzLZ6vmCYLZ/dLykpJynUYa8pcllCC1Ip2ycpisl1PadFsintbsPQZdi/bTW7AAAB4UlEQVR4nOWUZ1fCMBSGSSGWFiq0UDbIkr2XbBwMxS0b1P//M0xK9XSiftX7oel585zkvfcmMRj+SRhvzRRlthm/BU3Ry3TYzofTsajpIOjw2iNAjIiddehvHXSdA0mkXEEdG0fkE1DEKXmkSVqVIA6rBmsktUgAWLWHoGp30UNclbtLmwQgoyya91wPTbFy0mQXJ5zJQO6BgXRjfH0iSkX5stHIXr5r0bB/lu8syjR8rzsFbR2SpX+5J2eMP3csLtYsEY2K8BeTFuE2jaVCBw7bHOBuxq16AXmpbui3LtIfbRLUHMY2q4lcFo2WB4KA1SUAlWumNEKCzyxBKZxVHvYGaFguCBx1vM/x0IPzoqQoj5SdP4mns2cCGhBsrgj0uaeUBtzMyxQN8w4mYROTW8+r0oANp8W5mf6WQw5aCYJ2o7ymPaKMi2uVpmWM4TW6tdImgGo1bT4nK6DbbsCc0AZSdmLEFszzHrh6riVvRrNA3/9SE8QLWQu+Gjto9+gE9NBMwr9zi83gFeeFTe11zpm1CHE3HeyVCSknf3MIDcFTbfJKdbR1L4xX49L+/BoillV5uPJqkshD3JWSgpNMXP/lcrD8+hO84MnDr5YpFHv0Fe99VjJ0GBRs2H74aP6R+ACr+TFvZNAQ1wAAAABJRU5ErkJggg==\",\"down.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAKVQTFRFAAAAg4ODgICAAAAAAAAAAAAACAgIAAAAAAAAAAAAAAAAOTk5hYWFEBAQfHx8ODg4dnZ2NDQ0XV1dGxsbKCgogICAFBQUIiIiZGRkgICAgICAFRUVAAAAgICAgICAgICAf39/Li4ugICAcHBwgoKCgICAgoKCgICAg4ODgYGBPj4+goKCgICAhISEgYGBgICAgoKCgICAgYGBgYGBf39/gICAgICAIdPQHAAAADd0Uk5TACn/KAIRIBMFDwooKyApKSknKSYmzCcmKfL7JRCUi2L3J7IpcLUrr0VbKXntNEnkMbxrUcG56CMpi50AAAFZSURBVHic5ZRpf4MgDIeFKFatWm/tfW091u7evv9Hm1Acoujm2y0vFPH5Jf+EEE37J6bblmlatv4jaBCI4rMfR0CMXtAEJ0fccgfM7tAkQHXzArdDxggmqGETGCnJWROkNlOwOqhIhKCtgbSicw1uK/dATSK0aRatIzytA8ik4XSiyJnLSm+VPxULgeyLI3uHRJH+qcB4WZGrKb4c20WwI7b3iUt74OS6XD+xZWrXUCtme0uKTvfcJ65CZFa9VOebqwXmft+oT8yF+/VymT4XeGB+Xx8L+j4gBcoFIDT+oMz6Qp93Y74pCeBpUXaLuW0rUk6r1iv3nP322ewYkgv2nZIvgpSPQDrY5wTjRJDNg9XAE/+uSXIVX812GdKEmtvR2rtWaw+5MAOuofJy79SXu9TgBl4d9DZdI0NjgyiswNCB/qk1J5Bmvp+lQOa9IJNhW4bxm6H5R+wLQYMSQXZNzbcAAAAASUVORK5CYII=\",\"price_range.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAAIUlEQVR4nGNggAPm/w9gTA4QIQMitECEJ1yMEgLNDiAAADfgBMRu78GgAAAAAElFTkSuQmCC\",\"price_time.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAAOklEQVR4nGNggAPm/w9gTA4QIQPEClpMQMITRHCACScQoQQihBgY9P//grKgYk5wdTACYhQHFjuAAABZFAlc4e1fcQAAAABJRU5ErkJggg==\",\"remove.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAK5QTFRFAAAAh4eHgICAAAAAAAAAh4eHAAAAAwMDAAAAAAAAgICAGBgYAAAAPz8/AgICgICACQkJhoaGhoaGgICAPj4+NjY2gYGBg4ODgYGBAQEBJycngoKCEBAQgICAgICACAgIKioqZGRkCgoKBQUFERERd3d3gYGBGxsbNDQ0gICAPDw8YWFhBgYGdXV1gICAg4ODgICAAAAAOjo6GhoaeXl5gICAhYWFY2NjhYWFgICA9O0oCgAAADp0Uk5TACn/AhErBSgPEvEmCigowxMuMcgoJ7hWrCkmdCD6vSAmKSEoICkpJie6KSknKSkp0wspJynCMik11rrLte8AAAFwSURBVHic5ZTXkoIwFIZNAAPSpKkoRQV7Wcva3v/FFiRmEwise7t7bs7MP98k/ylJq/VPQjjKiiJrwo+gON0uxro7XiRTsRHs+voE4JjoRrf+6sD7AFTMvaDGRht9glLMUJtLqmUwD5XDCohHAmBUPQSV27GHtFK7xycBWJab5uPaR+Hlmue7GfZxHwyWFHVMQghXFgD2A8IOZtfssdNJIXcyFEaSfchzp9BuMVP+Fhvr5Qh0nGfqYTGhm3BcYFUaQBKOhMWzRqHyGFRY03ppQ5lCFZ30RloVZGQTaa3QqEt0OyrQnkSkk8I1YJkvAwPCMgY0UpbzXRZhVbosIWGbZTLNQszGMCM42FJEjWDDjIAMtp+xj6x2K+/DqNDc0r4Yc8yGl3uer2aIyT1iyd8sYSuY8cldZbVrH4zPebTvP8OMNSoedj6XzDyk3pwG98u0/ufqGu7tBW5c1PxriXFyHq5PQxXFzeDThvbmp/lH4gt6WxfZ03H8DwAAAABJRU5ErkJggg==\",\"settings.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAW5QTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKBgYGGxsbKioqQEBAPj4+BQUFCAgIAQEBPz8/ZWVlh4eHZGRkAgICCQkJDw8PNjY2g4ODgoKCNTU1EBAQAAAAAwMDeXl5d3d3AAAAGBgYAAAAERERioqKgoKCgoKCgoKCgYGBgoKChISEhoaGNDQ0g4ODgICAgICAgICAgYGBgYGBhYWFgICAgICAPT09AAAAgYGBgICAgICAgICAgICAY2NjCAgIgICAgICAhYWFhYWFgYGBHBwcgICAhYWFGhoagYGBgYGBg4ODhoaGJycnAAAAhISEgICAg4ODPDw8AAAAgoKCgICAhISEOjo6h4eHgoKCgYGBgICAf39/gYGBgoKCgICAGBgYgYGBg4ODg4ODgICACwsLgYGBgICAgYGBgYGBgYGBgICAgYGBYWFhf39/g4ODPj4+gYGBg4ODgICAhYWFgoKCgYGBgICAgYGBgoKCdXV1T0kC9QAAAHp0Uk5TAAILDxMKESEnJiYpKSgTKSgpKSkoEyAnKSknIAYoKSkFJQEgKl94jYVvVC4nU9f/+K8pOu71KBCi3NPq/ikg0e01Nokm1UUnsZVqQSYOT9lrKRJz5lIpK12jyu+sesgnhGVLxCG55a6Um+GaKfJCKKRgKUt8ocergymDQ9knAAABsElEQVR4nOWUV1vCMBSGg1AQpBZrcVdE3KJxo4LgnuCoe4F7orjHv7doTk3bgF7rd5OnX94nZ+SkCP0TWQqsNpuVs/wI2h2FTleR2+XkHfa8YLHgKRGJSj2SN3fosvIKkVJlVXWONGrkWtEgn1zHJP1GMCs/g7XILFIUpXoTWmaKTnIImGovh72Gxqbmlta2dvgOGpsmQO0dnfhTXd3E6JH0pN1DNnr7MFE/HDsQ0qEO6Pxg9sCh4XDkGx2J6sovBD+G8eiYuo5PxLTKeLoJBZNgT2EcnjY0YYajUKsL7Fk1gcjU3PwChcYTFGorAnsRqlpa1tAVhUbdmr+6RtjIOlgbCjMBUdzc2t7ZzbJ7zAQ4p6GSfRVNwkeKLsvCg31w2JBdjlT0GDxZNzEnpcQ+xWfnFxeXVyp6Tay07gq+L/YUOoBvbomV0V8skiq//DutWfeEfJD1JPLCED4+Pb8kX986tApNQ4iqfSJT76bRzvlgBPODQXW/foYqK5lyeBeYJEL1gaoeGnwIBhjRoQ9SZgTAdEbO/9cKRfmZ+MpGPCVHQ3nBzzS4hKIkuNyh/5g+ALiAXSSas9hwAAAAAElFTkSuQmCC\",\"time_range.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAAJElEQVR4nGNgwAsUGJhQCScQoQQihBgY9P//grKgYk4YOvACACOpBKG6Svj+AAAAAElFTkSuQmCC\",\"trash.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAALUlEQVR4nGNgAIN6ENHQACX4//9gYBBgYIESYC4LkA0lPEkmGFAI5v8PILYCAHygDJxlK0RUAAAAAElFTkSuQmCC\",\"up.png\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAMZQTFRFAAAAh4eHgICAAAAAAAAAAAAAAwMDAAAAAAAAGBgYAAAAPz8/AgICCQkJgICAh4eHPj4+NjY2AQEBJycnEBAQgICAgICACAgIKioqZGRkCgoKBQUFgYGBERERd3d3gYGBGxsbNDQ0gICAgYGBPDw8gYGBh4eHgICAYWFhBgYGgYGBdXV1goKCg4ODhYWFgICAgoKCAAAAhISEOjo6gICAGhoagYGBeXl5hoaGgICAY2Njg4ODgoKCgoKCgYGBgoKCg4ODgoKC64uw1gAAAEJ0Uk5TACn/AhEFKA8SJgooKBP7KignKSYg9c0gJikhKLQgKSkmJ7ywKY8s5SknlClxKTMpXwtFKe0neiku8ClKWmSbbFFjM5GHSgAAAW5JREFUeJzllGd/gjAQxk3AMFWWOHDvVa2rVbu//5cqhJWQQO3b9nkVjv/v7rnLKJX+iYS9JMuSKvwIiu3loKkZzYHXFgvBiqW1QKSWplfySzvmAyDUN50cG2X0DDLqoTKXVLJgIIXDCohHAqCzHhymeuShy/Ru8kkAhtmhWUTvW9fdEnPQaVLU0n8XF0L3kn5P6LTtZPKgNoK+RrUkcGtQ7S9TsgOxxinrkUPYD+LwLCIh7CTsWSVQqRmTuPqpitlZFLQlApXjrsYBc335wOw47ksmUSMMrgKi/gnAE/awCqNHmTUwDf5X34LlBuedsgbUsK15kPMxTIXzzvFSIdsSPBw7nGD1K+7bL3F9xStEnZhoCw71TbpL71GBBbUF1MZmZWTOi97PI3eIJn9zCEtOj0+umaOde2EszqW9/xr6rM54WFtc0vfQNak57Ibd/Jerohu3GFwYqPjVEhve2Z4cbQU1ikFsQ73z0fwj+ga3VBezGuggFQAAAABJRU5ErkJggg==\"}");

/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(68);


/***/ }),
/* 8 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(45);

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(10);

var assertThisInitialized = __webpack_require__(27);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("21fde573", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("68f243ea", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("9895d3a6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("5b620605", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("1db01c0b", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("12d2309d", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("1b34bfeb", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("8139036a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("604bf5ef", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("f32fd36e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("fd83689e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("550b47ab", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Indexed Array Binary Search module
 */

/**
 * Dependencies
 */
var util = __webpack_require__(40),
    cmp = __webpack_require__(41),
    bin = __webpack_require__(42);

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
/* 29 */
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(29);

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
/* 31 */
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
/* 32 */
/***/ (function(module) {

module.exports = JSON.parse("[\"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=\"]");

/***/ }),
/* 33 */
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(29);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 38 */
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
/* 39 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 40 */
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
/* 41 */
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
/* 42 */
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
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UxWrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UxWrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UxWrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UxWrapper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.trading-vue-ux-wrapper {\n    position: absolute;\n    display: flex;\n}\n.tvjs-ux-wrapper-pin {\n    position: absolute;\n    width: 9px;\n    height: 9px;\n    z-index: 100;\n    background-color: #23a776;\n    border-radius: 10px;\n    margin-left: -6px;\n    margin-top: -6px;\n    pointer-events: none;\n}\n.tvjs-ux-wrapper-head {\n    position: absolute;\n    height: 23px;\n    width: 100%;\n}\n.tvjs-ux-wrapper-close {\n    position: absolute;\n    width: 11px;\n    height: 11px;\n    font-size: 1.5em;\n    line-height: 0.5em;\n    padding: 1px 0px 1px 2px;\n    border-radius: 10px;\n    right: 5px;\n    top: 5px;\n    user-select: none;\n}\n.tvjs-ux-wrapper-close-hb {\n}\n.tvjs-ux-wrapper-close:hover {\n    background-color: #FF605C !important;\n    color: #692324 !important;\n}\n.tvjs-ux-wrapper-full {\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 45 */
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
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LegendButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LegendButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LegendButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LegendButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.t-vue-lbtn {\n    z-index: 100;\n    pointer-events: all;\n    cursor: pointer;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.t-vue-lbtn-grp {\n    margin-left: 0.5em;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.tvjs-spinner {\n    display: inline-block;\n    position: relative;\n    width: 20px;\n    height: 16px;\n    margin: -4px 0px -1px 0px;\n    opacity: 0.7;\n}\n.tvjs-spinner div {\n    position: absolute;\n    top: 8px;\n    width: 4px;\n    height: 4px;\n    border-radius: 50%;\n    animation-timing-function: cubic-bezier(1, 1, 1, 1);\n}\n.tvjs-spinner div:nth-child(1) {\n    left: 2px;\n    animation: tvjs-spinner1 0.6s infinite;\n    opacity: 0.9;\n}\n.tvjs-spinner div:nth-child(2) {\n    left: 2px;\n    animation: tvjs-spinner2 0.6s infinite;\n}\n.tvjs-spinner div:nth-child(3) {\n    left: 9px;\n    animation: tvjs-spinner2 0.6s infinite;\n}\n.tvjs-spinner div:nth-child(4) {\n    left: 16px;\n    animation: tvjs-spinner3 0.6s infinite;\n    opacity: 0.9;\n}\n@keyframes tvjs-spinner1 {\n0% {\n        transform: scale(0);\n}\n100% {\n        transform: scale(1);\n}\n}\n@keyframes tvjs-spinner3 {\n0% {\n        transform: scale(1);\n}\n100% {\n        transform: scale(0);\n}\n}\n@keyframes tvjs-spinner2 {\n0% {\n        transform: translate(0, 0);\n}\n100% {\n        transform: translate(7px, 0);\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Legend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Legend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Legend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Legend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.trading-vue-legend {\n    position: relative;\n    z-index: 100;\n    font-size: 1.25em;\n    margin-left: 10px;\n    pointer-events: none;\n    text-align: left;\n    user-select: none;\n}\n.trading-vue-ohlcv {\n    pointer-events: none;\n    margin-bottom: 0.5em;\n}\n.t-vue-lspan {\n    font-variant-numeric: tabular-nums;\n    font-weight: 100;\n    font-size: 0.95em;\n    color: #999999; /* TODO: move => params */\n    margin-left: 0.1em;\n    margin-right: 0.2em;\n}\n.t-vue-title {\n    margin-right: 0.25em;\n    font-size: 1.45em;\n    font-weight: 200;\n}\n.t-vue-ind {\n    margin-left: 0.2em;\n    margin-bottom: 0.5em;\n    font-weight: 200;\n    font-size: 1.0em;\n    margin-top: 0.3em;\n}\n.t-vue-ivalue {\n    margin-left: 0.5em;\n}\n.t-vue-unknown {\n    color: #999999; /* TODO: move => params */\n}\n.tvjs-appear-enter-active,\n.tvjs-appear-leave-active\n{\n    transition: all .25s ease;\n}\n.tvjs-appear-enter, .tvjs-appear-leave-to\n{\n    opacity: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.trading-vue-section {\n    height: 0;\n    position: absolute;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Botbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Botbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Botbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Botbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.trading-vue-botbar {\n    position: relative !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.tvjs-item-list {\n    position: absolute;\n    user-select: none;\n    margin-top: -5px;\n}\n.tvjs-item-list-item {\n    display: flex;\n    align-items: center;\n    padding-right: 20px;\n    font-size: 1.15em;\n    letter-spacing: 0.05em;\n}\n.tvjs-item-list-item:hover {\n    background-color: #76878319;\n}\n.tvjs-item-list-item * {\n    position: relative !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.trading-vue-tbitem {\n}\n.trading-vue-tbitem:hover {\n    background-color: #76878319;\n}\n.trading-vue-tbitem-exp {\n    position: absolute;\n    right: -3px;\n    padding: 18.5px 5px;\n    font-stretch: extra-condensed;\n    transform: scaleX(0.6);\n    font-size: 0.6em;\n    opacity: 0.0;\n    user-select: none;\n    line-height: 0;\n}\n.trading-vue-tbitem:hover\n.trading-vue-tbitem-exp {\n    opacity: 0.5;\n}\n.trading-vue-tbitem-exp:hover {\n    background-color: #76878330;\n    opacity: 0.9 !important;\n}\n.trading-vue-tbicon {\n    position: absolute;\n}\n.trading-vue-tbitem.selected-item > .trading-vue-tbicon,\n.tvjs-item-list-item.selected-item > .trading-vue-tbicon {\n     filter: brightness(1.45) sepia(1) hue-rotate(90deg) saturate(4.5) !important;\n}\n.tvjs-pixelated {\n    -ms-interpolation-mode: nearest-neighbor;\n    image-rendering: -webkit-optimize-contrast;\n    image-rendering: -webkit-crisp-edges;\n    image-rendering: -moz-crisp-edges;\n    image-rendering: -o-crisp-edges;\n    image-rendering: pixelated;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toolbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toolbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toolbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toolbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.trading-vue-toolbar {\n    position: absolute;\n    border-right: 1px solid black;\n    z-index: 101;\n    padding-top: 3px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Widgets_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Widgets_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Widgets_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Widgets_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.tvjs-widgets {\n    position: absolute;\n    z-index: 1000;\n    pointer-events: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TradingVue_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TradingVue_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TradingVue_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TradingVue_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Anit-boostrap tactix */\n.trading-vue *, ::after, ::before {\n    box-sizing: content-box;\n}\n.trading-vue img {\n    vertical-align: initial;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 68 */
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
/* 69 */
/***/ (function(module, exports) {



/***/ }),
/* 70 */
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
        font: this.font_comp,
        width: this.width + "px",
        height: this.height + "px"
      },
      attrs: { id: _vm.id },
      on: { mousedown: _vm.mousedown, mouseleave: _vm.mouseleave }
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
      _vm.controllers.length
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
  SBMAX: Infinity,
  // Max sidebar, px
  TOOLBAR: 57,
  // Toolbar width px
  TB_ICON: 25,
  // Toolbar icon size px
  TB_ITEM_M: 6,
  // Toolbar item margin px
  TB_ICON_BRI: 1,
  // Toolbar icon brightness
  TB_ICON_HOLD: 420,
  // ms, wait to expand
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
  ZOOM_MODE: 'tv',
  // 'tv' or 'tl'
  L_BTN_SIZE: 21,
  // Legend Button size, px
  L_BTN_MARGIN: '-6px 0 -6px 0',
  // css margin
  SCROLL_WHEEL: 'prevent' // 'pass', 'click'

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
          ref: "sec",
          refInFor: true,
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
          { attrs: { shaders: _vm.shaders, timezone: _vm.timezone } },
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
var lib = __webpack_require__(28);
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
    if (!v.script || !v.script.execInterval) return true;
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
    grid_maker_YEAR = constants.YEAR,
    grid_maker_HOUR = constants.HOUR,
    grid_maker_DAY = constants.DAY;
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
      grid = params.grid,
      timezone = params.timezone;
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
    }); // The first y_range() determines the range 

    if (yrs.length) y_range_fn = yrs[0].y_range;
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
        var _y_range_fn3 = y_range_fn(hi, lo),
            _y_range_fn4 = slicedToArray_default()(_y_range_fn3, 3),
            hi = _y_range_fn4[0],
            lo = _y_range_fn4[1],
            exp = _y_range_fn4[2];
      }
    } // Fixed y-range in non-auto mode


    if (y_t && !y_t.auto && y_t.range) {
      self.$_hi = y_t.range[0];
      self.$_lo = y_t.range[1];
    } else {
      if (!ls) {
        exp = exp === false ? 0 : 1;
        self.$_hi = hi + (hi - lo) * $p.config.EXPAND * exp;
        self.$_lo = lo - (hi - lo) * $p.config.EXPAND * exp;
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
    self.sb = Math.min(self.sb, $p.config.SBMAX);
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
    var p_t = ti_map.ib ? ti_map.i2t(p[0]) : p[0];

    if (ti_map.tf < grid_maker_DAY) {
      prev_t += timezone * grid_maker_HOUR;
      p_t += timezone * grid_maker_HOUR;
    }

    var d = timezone * grid_maker_HOUR; // TODO: take this block =========> (see below)

    if ((prev[0] || interval === grid_maker_YEAR) && utils.get_year(p_t) !== utils.get_year(prev_t)) {
      self.xs.push([x, p, grid_maker_YEAR]); // [px, [...], rank]
    } else if (prev[0] && utils.get_month(p_t) !== utils.get_month(prev_t)) {
      self.xs.push([x, p, grid_maker_MONTH]);
    } // TODO: should be added if this day !== prev day
    // And the same for 'botbar.js', TODO(*)
    else if (utils.day_start(p_t) === p_t) {
        self.xs.push([x, p, grid_maker_DAY]);
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
    grid: mgrid,
    timezone: $p.timezone
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
        ref: "legend",
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
            ref: "grid",
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
            ref: "sb-" + _vm.grid_id,
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
var hammer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/hamsterjs/hamster.js
var hamster = __webpack_require__(31);
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

    this.wmode = this.$p.config.SCROLL_WHEEL;
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
        args: [this.id, event]
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
      if (this.$p.shaders.length) this.apply_shaders();
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
      if (this.wmode !== 'pass') {
        if (this.wmode === 'click' && !this.$p.meta.activated) {
          return;
        }

        event.originalEvent.preventDefault();
        event.preventDefault();
      }

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
    // Remove all UXs for a given overlay id
    remove_all_ux: function remove_all_ux(id) {
      this.uxs = this.uxs.filter(function (x) {
        return x.overlay.id !== id;
      });
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
var UxWrappervue_type_style_index_0_lang_css_ = __webpack_require__(43);

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
    this.meta_info(); // TODO(1): quick fix for vue2, in vue3 we use 3rd party emit

    try {
      new Function('return ' + this.$emit)();
      this._$emit = this.$emit;
      this.$emit = this.custom_event;
    } catch (e) {
      return;
    }

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
        version: '1.0.1'
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
      ctx.fillStyle = p[3] || this.flag_color;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 10 * side, y - 10 * side);
      ctx.lineTo(x + (w + 10) * side, y - 10 * side);
      ctx.lineTo(x + (w + 10) * side, y + 10 * side);
      ctx.lineTo(x + 10 * side, y + 10 * side);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = this.label_color;
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
    flag_color: function flag_color() {
      return this.sett.flagColor || '#4285f4';
    },
    label_color: function label_color() {
      return this.sett.labelColor || '#fff';
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
var icons = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(14);
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
    this.hidden = params.hidden || false;
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
      if (this.hidden) return;

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
          if (this.hidden) return;

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

      if (!this.ray) {
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x1 - dx, y1 - dy);
      }

      this.comp.collisions.push(this.make([x1, y1], [x2, y2]));
    } // Collision function. x, y - mouse coord.

  }, {
    key: "make",
    value: function make(p1, p2) {
      var _this = this;

      var f = this.ray ? math.point2ray.bind(math) : math.point2line.bind(math);
      return function (x, y) {
        return f([x, y], p1, p2) < _this.T;
      };
    }
  }]);

  return Line;
}();


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(12);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(13);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// CONCATENATED MODULE: ./src/components/primitives/ray.js





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// Draws a ray, adds corresponding collision f-n


var ray_Ray = /*#__PURE__*/function (_Line) {
  inherits_default()(Ray, _Line);

  var _super = _createSuper(Ray);

  function Ray(overlay, ctx) {
    var _this;

    classCallCheck_default()(this, Ray);

    _this = _super.call(this, overlay, ctx);
    _this.ray = true;
    return _this;
  }

  return Ray;
}(line_Line);


// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/overlays/LineTool.vue?vue&type=script&lang=js&
// Line drawing tool
// TODO: make an angle-snap when "Shift" is pressed







/* harmony default export */ var LineToolvue_type_script_lang_js_ = ({
  name: 'LineTool',
  mixins: [mixins_overlay, mixins_tool],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.1.0'
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
          },
          'Ray': {
            // Rewrites the default setting fields
            settings: {
              ray: true
            },
            icon: icons['ray.png']
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

      if (this.sett.ray) {
        new ray_Ray(this, ctx).draw(this.p1, this.p2);
      } else if (this.sett.extended) {
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

// Price/Time measurment tool





/* harmony default export */ var RangeToolvue_type_script_lang_js_ = ({
  name: 'RangeTool',
  mixins: [mixins_overlay, mixins_tool],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '2.0.1'
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
        settings: {},
        // Default settings
        mods: {
          'Time': {
            // Rewrites the default setting fields
            icon: icons['time_range.png'],
            settings: {
              price: false,
              time: true
            }
          },
          'PriceTime': {
            // Rewrites the default setting fields
            icon: icons['price_time.png'],
            settings: {
              price: true,
              time: true
            }
          },
          'ShiftMode': {
            // Rewrites the default setting fields
            settings: {
              price: true,
              time: true,
              shiftMode: true
            },
            hidden: true
          }
        }
      };
    },
    // Called after overlay mounted
    init: function init() {
      var _this = this;

      // First pin is settled at the mouse position
      this.pins.push(new pin_Pin(this, 'p1', {
        hidden: this.shift
      })); // Second one is following mouse until it clicks

      this.pins.push(new pin_Pin(this, 'p2', {
        state: 'tracking',
        hidden: this.shift
      }));
      this.pins[1].on('settled', function () {
        // Call when current tool drawing is finished
        // (Optionally) reset the mode back to 'Cursor'
        _this.set_state('finished');

        _this.$emit('drawing-mode-off'); // Deselect the tool in shiftMode


        if (_this.shift) _this._$emit('custom-event', {
          event: 'object-selected',
          args: []
        });
      });
    },
    draw: function draw(ctx) {
      if (!this.p1 || !this.p2) return;
      var dir = Math.sign(this.p2[1] - this.p1[1]);
      var layout = this.$props.layout;
      var xm = layout.t2screen((this.p1[0] + this.p2[0]) * 0.5);
      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.color; // Background

      ctx.fillStyle = this.back_color;
      var x1 = layout.t2screen(this.p1[0]);
      var y1 = layout.$2screen(this.p1[1]);
      var x2 = layout.t2screen(this.p2[0]);
      var y2 = layout.$2screen(this.p2[1]);
      ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
      if (this.price) this.vertical(ctx, x1, y1, x2, y2, xm);
      if (this.time) this.horizontal(ctx, x1, y1, x2, y2, xm);
      this.draw_value(ctx, dir, xm, y2);
      this.render_pins(ctx);
    },
    vertical: function vertical(ctx, x1, y1, x2, y2, xm) {
      var layout = this.$props.layout;
      var dir = Math.sign(this.p2[1] - this.p1[1]);
      ctx.beginPath();

      if (!this.shift) {
        // Top
        new seg_Seg(this, ctx).draw([this.p1[0], this.p2[1]], [this.p2[0], this.p2[1]]); // Bottom

        new seg_Seg(this, ctx).draw([this.p1[0], this.p1[1]], [this.p2[0], this.p1[1]]);
      } // Vertical Arrow


      ctx.moveTo(xm - 4, y2 + 5 * dir);
      ctx.lineTo(xm, y2);
      ctx.lineTo(xm + 4, y2 + 5 * dir);
      ctx.stroke(); // Vertical Line

      ctx.beginPath();
      ctx.setLineDash([5, 5]);
      new seg_Seg(this, ctx).draw([(this.p1[0] + this.p2[0]) * 0.5, this.p2[1]], [(this.p1[0] + this.p2[0]) * 0.5, this.p1[1]]);
      ctx.stroke();
      ctx.setLineDash([]);
    },
    horizontal: function horizontal(ctx, x1, y1, x2, y2, xm) {
      var layout = this.$props.layout;
      var xdir = Math.sign(this.p2[0] - this.p1[0]);
      var ym = (layout.$2screen(this.p1[1]) + layout.$2screen(this.p2[1])) / 2;
      ctx.beginPath();

      if (!this.shift) {
        // Left
        new seg_Seg(this, ctx).draw([this.p1[0], this.p1[1]], [this.p1[0], this.p2[1]]); // Right

        new seg_Seg(this, ctx).draw([this.p2[0], this.p1[1]], [this.p2[0], this.p2[1]]);
      } // Horizontal Arrow


      ctx.moveTo(x2 - 5 * xdir, ym - 4);
      ctx.lineTo(x2, ym);
      ctx.lineTo(x2 - 5 * xdir, ym + 4);
      ctx.stroke(); // Horizontal Line

      ctx.beginPath();
      ctx.setLineDash([5, 5]);
      ctx.moveTo(x1, ym);
      ctx.lineTo(x2, ym);
      ctx.stroke();
      ctx.setLineDash([]);
    },
    // WTF? I know dude, a lot of shitty code here
    draw_value: function draw_value(ctx, dir, xm, y) {
      var _this2 = this;

      ctx.font = this.new_font; // Price delta (anf percent)

      var d$ = (this.p2[1] - this.p1[1]).toFixed(this.prec);
      var p = (100 * (this.p2[1] / this.p1[1] - 1)).toFixed(this.prec); // Map interval to the actual tf (in ms)

      var f = function f(t) {
        return _this2.layout.ti_map.smth2t(t);
      };

      var dt = f(this.p2[0]) - f(this.p1[0]);
      var tf = this.layout.ti_map.tf; // Bars count (through the candle index)

      var f2 = function f2(t) {
        var c = _this2.layout.c_magnet(t);

        var cn = _this2.layout.candles || _this2.layout.master_grid.candles;
        return cn.indexOf(c);
      }; // Bars count (and handling the negative values)


      var b = f2(this.p2[0]) - f2(this.p1[0]); // Format time delta
      // Format time delta

      var dtstr = this.t2str(dt);
      var text = [];
      if (this.price) text.push("".concat(d$, "  (").concat(p, "%)"));
      if (this.time) text.push("".concat(b, " bars, ").concat(dtstr));
      text = text.join('\n'); // "Multiple" fillText

      var lines = text.split('\n');
      var w = Math.max.apply(Math, toConsumableArray_default()(lines.map(function (x) {
        return ctx.measureText(x).width + 20;
      })).concat([100]));
      var n = lines.length;
      var h = 20 * n;
      ctx.fillStyle = this.value_back;
      ctx.fillRect(xm - w * 0.5, y - (10 + h) * dir, w, h * dir);
      ctx.fillStyle = this.value_color;
      ctx.textAlign = 'center';
      lines.forEach(function (l, i) {
        ctx.fillText(l, xm, y + (dir > 0 ? 20 * i - 20 * n + 5 : 20 * i + 25));
      });
    },
    // Formats time from ms to `1D 12h` for example
    t2str: function t2str(t) {
      var sign = Math.sign(t);
      var abs = Math.abs(t);
      var tfs = [[1000, 's', 60], [60000, 'm', 60], [3600000, 'h', 24], [86400000, 'D', 7], [604800000, 'W', 4], [2592000000, 'M', 12], [31536000000, 'Y', Infinity], [Infinity, 'Eternity', Infinity]];

      for (var i = 0; i < tfs.length; i++) {
        tfs[i][0] = Math.floor(abs / tfs[i][0]);

        if (tfs[i][0] === 0) {
          var p1 = tfs[i - 1];
          var p2 = tfs[i - 2];
          var txt = sign < 0 ? '-' : '';

          if (p1) {
            txt += p1.slice(0, 2).join('');
          }

          var n2 = p2 ? p2[0] - p1[0] * p2[2] : 0;

          if (p2 && n2) {
            txt += ' ';
            txt += "".concat(n2).concat(p2[1]);
          }

          return txt;
        }
      }
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
    },
    price: function price() {
      return 'price' in this.sett ? this.sett.price : true;
    },
    time: function time() {
      return 'time' in this.sett ? this.sett.time : false;
    },
    shift: function shift() {
      return this.sett.shiftMode;
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
      this.remove_all_ux(layer);
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
                config: _vm.common.config,
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
          id: b.name || b,
          tv_id: _vm.tv_id,
          ov_id: _vm.ov_id,
          grid_id: _vm.grid_id,
          index: _vm.index,
          display: _vm.display,
          icon: b.icon,
          config: _vm.config
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
    style: {
      width: _vm.config.L_BTN_SIZE + "px",
      height: _vm.config.L_BTN_SIZE + "px",
      margin: _vm.config.L_BTN_MARGIN
    },
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
//
//
//
//

/* harmony default export */ var LegendButtonvue_type_script_lang_js_ = ({
  name: 'LegendButton',
  props: ['id', 'tv_id', 'grid_id', 'ov_id', 'index', 'display', 'icon', 'config'],
  mounted: function mounted() {},
  computed: {
    base64: function base64() {
      return this.icon || icons[this.file_name];
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
//
//

/* harmony default export */ var ButtonGroupvue_type_script_lang_js_ = ({
  name: 'ButtonGroup',
  props: ['buttons', 'tv_id', 'ov_id', 'grid_id', 'index', 'display', 'config'],
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

      var prec = this.layout.prec; // TODO: main the main legend more customizable

      var id = this.main_type + '_0';
      var meta = this.$props.meta_props[id] || {};

      if (meta.legend) {
        return (meta.legend() || []).map(function (x) {
          return x.value;
        });
      }

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
    },
    main_type: function main_type() {
      var f = this.common.data.find(function (x) {
        return x.main;
      });
      return f ? f.type : undefined;
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
          } // TODO: Sort by zIndex

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
      var id = 'sb-' + event.grid_id;

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
    }
  }, {
    key: "format_date",
    value: function format_date(p) {
      var t = p[1][0];
      t = this.grid_0.ti_map.i2t(t);
      var ti = this.$p.layout.grids[0].ti_map.tf; // Enable timezones only for tf < 1D

      var k = ti < botbar_DAY ? 1 : 0;
      var tZ = t + k * this.$p.timezone * botbar_HOUR; //t += new Date(t).getTimezoneOffset() * MINUTE

      var d = new Date(tZ);

      if (p[2] === botbar_YEAR || utils.year_start(t) === t) {
        return d.getUTCFullYear();
      }

      if (p[2] === botbar_MONTH || utils.month_start(t) === t) {
        return botbar_MONTHMAP[d.getUTCMonth()];
      } // TODO(*) see grid_maker.js


      if (utils.day_start(tZ) === tZ) return d.getUTCDate();
      var h = utils.add_zero(d.getUTCHours());
      var m = utils.add_zero(d.getUTCMinutes());
      return h + ":" + m;
    }
  }, {
    key: "format_cursor_x",
    value: function format_cursor_x() {
      var t = this.$p.cursor.t;
      t = this.grid_0.ti_map.i2t(t); //let ti = this.$p.interval

      var ti = this.$p.layout.grids[0].ti_map.tf; // Enable timezones only for tf < 1D

      var k = ti < botbar_DAY ? 1 : 0; //t += new Date(t).getTimezoneOffset() * MINUTE

      var d = new Date(t + k * this.$p.timezone * botbar_HOUR);

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
  props: ['sub', 'layout', 'range', 'interval', 'cursor', 'colors', 'font', 'width', 'height', 'rerender', 'tv_id', 'config', 'shaders', 'timezone'],
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
  }, {
    key: "smth2t",
    value: function smth2t(smth) {
      if (smth < MAX_ARR) {
        return this.i2t(smth); // it was an index
      } else {
          return smth; // it was time
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
//











/* harmony default export */ var Chartvue_type_script_lang_js_ = ({
  name: 'Chart',
  props: ['title_txt', 'data', 'width', 'height', 'font', 'colors', 'overlays', 'tv_id', 'config', 'buttons', 'toolbar', 'ib', 'skin', 'timezone'],
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
        sub_start: this.sub_start,
        activated: this.activated
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
      sub_start: undefined,
      activated: false
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
    timezone: function timezone() {
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
    _vm._l(_vm.groups, function(tool, i) {
      return tool.icon && !tool.hidden
        ? _c("toolbar-item", {
            key: i,
            attrs: {
              data: tool,
              subs: _vm.sub_map,
              dc: _vm.data,
              config: _vm.config,
              colors: _vm.colors,
              selected: _vm.is_selected(tool)
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
      on: { click: _vm.emit_selected, mousedown: _vm.mousedown }
    },
    [
      _c("div", {
        staticClass: "trading-vue-tbicon tvjs-pixelated",
        style: _vm.icon_style
      }),
      _vm._v(" "),
      _vm.data.group
        ? _c(
            "div",
            {
              staticClass: "trading-vue-tbitem-exp",
              style: _vm.exp_style,
              on: {
                click: _vm.exp_click,
                mousedown: _vm.expmousedown,
                mouseover: _vm.expmouseover,
                mouseleave: _vm.expmouseleave
              }
            },
            [_vm._v("\n        ᐳ\n    ")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.show_exp_list
        ? _c("item-list", {
            attrs: {
              config: _vm.config,
              items: _vm.data.items,
              colors: _vm.colors,
              dc: _vm.dc
            },
            on: {
              "close-list": _vm.close_list,
              "item-selected": _vm.emit_selected_sub
            }
          })
        : _vm._e()
    ],
    1
  )
}
var ToolbarItemvue_type_template_id_227b3c2e_staticRenderFns = []
ToolbarItemvue_type_template_id_227b3c2e_render._withStripped = true


// CONCATENATED MODULE: ./src/components/ToolbarItem.vue?vue&type=template&id=227b3c2e&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ItemList.vue?vue&type=template&id=c50b23fe&
var ItemListvue_type_template_id_c50b23fe_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "tvjs-item-list",
      style: _vm.list_style(),
      on: { mousedown: _vm.thismousedown }
    },
    _vm._l(_vm.items, function(item) {
      return !item.hidden
        ? _c(
            "div",
            {
              class: _vm.item_class(item),
              style: _vm.item_style(item),
              on: {
                click: function(e) {
                  return _vm.item_click(e, item)
                }
              }
            },
            [
              _c("div", {
                staticClass: "trading-vue-tbicon tvjs-pixelated",
                style: _vm.icon_style(item)
              }),
              _vm._v(" "),
              _c("div", [_vm._v(_vm._s(item.type))])
            ]
          )
        : _vm._e()
    }),
    0
  )
}
var ItemListvue_type_template_id_c50b23fe_staticRenderFns = []
ItemListvue_type_template_id_c50b23fe_render._withStripped = true


// CONCATENATED MODULE: ./src/components/ItemList.vue?vue&type=template&id=c50b23fe&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ItemList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ItemListvue_type_script_lang_js_ = ({
  name: 'ItemList',
  props: ['config', 'items', 'colors', 'dc'],
  mounted: function mounted() {
    window.addEventListener('mousedown', this.onmousedown);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('mousedown', this.onmousedown);
  },
  methods: {
    list_style: function list_style() {
      var conf = this.$props.config;
      var w = conf.TOOLBAR;
      var brd = this.colors.tbListBorder || this.colors.grid;
      var bstl = "1px solid ".concat(brd);
      return {
        left: "".concat(w, "px"),
        background: this.colors.back,
        borderTop: bstl,
        borderRight: bstl,
        borderBottom: bstl
      };
    },
    item_class: function item_class(item) {
      if (this.dc.tool === item.type) {
        return "tvjs-item-list-item selected-item";
      }

      return "tvjs-item-list-item";
    },
    item_style: function item_style(item) {
      var conf = this.$props.config;
      var h = conf.TB_ICON + conf.TB_ITEM_M * 2 + 8;
      var sel = this.dc.tool === item.type;
      return {
        height: "".concat(h, "px"),
        color: sel ? undefined : "#888888"
      };
    },
    icon_style: function icon_style(data) {
      var conf = this.$props.config;
      var br = conf.TB_ICON_BRI;
      var im = conf.TB_ITEM_M;
      return {
        'background-image': "url(".concat(data.icon, ")"),
        'width': '25px',
        'height': '25px',
        'margin': "".concat(im, "px"),
        'filter': "brightness(".concat(br, ")")
      };
    },
    item_click: function item_click(e, item) {
      e.cancelBubble = true;
      this.$emit('item-selected', item);
      this.$emit('close-list');
    },
    onmousedown: function onmousedown() {
      this.$emit('close-list');
    },
    thismousedown: function thismousedown(e) {
      e.stopPropagation();
    }
  },
  computed: {},
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/components/ItemList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ItemListvue_type_script_lang_js_ = (ItemListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ItemList.vue?vue&type=style&index=0&lang=css&
var ItemListvue_type_style_index_0_lang_css_ = __webpack_require__(58);

// CONCATENATED MODULE: ./src/components/ItemList.vue






/* normalize component */

var ItemList_component = normalizeComponent(
  components_ItemListvue_type_script_lang_js_,
  ItemListvue_type_template_id_c50b23fe_render,
  ItemListvue_type_template_id_c50b23fe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var ItemList_api; }
ItemList_component.options.__file = "src/components/ItemList.vue"
/* harmony default export */ var ItemList = (ItemList_component.exports);
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
//
//
//
//
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
  props: ['data', 'selected', 'colors', 'tv_id', 'config', 'dc', 'subs'],
  components: {
    ItemList: ItemList
  },
  mounted: function mounted() {
    if (this.data.group) {
      var type = this.subs[this.data.group];
      var item = this.data.items.find(function (x) {
        return x.type === type;
      });
      if (item) this.sub_item = item;
    }
  },
  methods: {
    mousedown: function mousedown(e) {
      var _this = this;

      this.click_start = utils.now();
      this.click_id = setTimeout(function () {
        _this.show_exp_list = true;
      }, this.config.TB_ICON_HOLD);
    },
    expmouseover: function expmouseover() {
      this.exp_hover = true;
    },
    expmouseleave: function expmouseleave() {
      this.exp_hover = false;
    },
    expmousedown: function expmousedown(e) {
      if (this.show_exp_list) e.stopPropagation();
    },
    emit_selected: function emit_selected() {
      if (utils.now() - this.click_start > this.config.TB_ICON_HOLD) return;
      clearTimeout(this.click_id);

      if (!this.data.group) {
        this.$emit('item-selected', this.data);
      } else {
        var item = this.sub_item || this.data.items[0];
        this.$emit('item-selected', item);
      }
    },
    emit_selected_sub: function emit_selected_sub(item) {
      this.$emit('item-selected', item);
      this.sub_item = item;
    },
    exp_click: function exp_click(e) {
      if (!this.data.group) return;
      e.cancelBubble = true;
      this.show_exp_list = !this.show_exp_list;
    },
    close_list: function close_list() {
      this.show_exp_list = false;
    }
  },
  computed: {
    item_style: function item_style() {
      if (this.$props.data.type === 'System:Splitter') {
        return this.splitter;
      }

      var conf = this.$props.config;
      var im = conf.TB_ITEM_M;
      var m = (conf.TOOLBAR - conf.TB_ICON) * 0.5 - im;
      var s = conf.TB_ICON + im * 2;
      var b = this.exp_hover ? 0 : 3;
      return {
        'width': "".concat(s, "px"),
        'height': "".concat(s, "px"),
        'margin': "8px ".concat(m, "px 0px ").concat(m, "px"),
        'border-radius': "3px ".concat(b, "px ").concat(b, "px 3px")
      };
    },
    icon_style: function icon_style() {
      if (this.$props.data.type === 'System:Splitter') {
        return {};
      }

      var conf = this.$props.config;
      var br = conf.TB_ICON_BRI;
      var sz = conf.TB_ICON;
      var im = conf.TB_ITEM_M;
      var ic = this.sub_item ? this.sub_item.icon : this.$props.data.icon;
      return {
        'background-image': "url(".concat(ic, ")"),
        'width': "".concat(sz, "px"),
        'height': "".concat(sz, "px"),
        'margin': "".concat(im, "px"),
        'filter': "brightness(".concat(br, ")")
      };
    },
    exp_style: function exp_style() {
      var conf = this.$props.config;
      var im = conf.TB_ITEM_M;
      var s = conf.TB_ICON * 0.5 + im;
      var p = (conf.TOOLBAR - s * 2) / 4;
      return {
        padding: "".concat(s, "px ").concat(p, "px"),
        transform: this.show_exp_list ? "scale(-0.6, 1)" : "scaleX(0.6)"
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
  },
  data: function data() {
    return {
      exp_hover: false,
      show_exp_list: false,
      sub_item: null
    };
  }
});
// CONCATENATED MODULE: ./src/components/ToolbarItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ToolbarItemvue_type_script_lang_js_ = (ToolbarItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ToolbarItem.vue?vue&type=style&index=0&lang=css&
var ToolbarItemvue_type_style_index_0_lang_css_ = __webpack_require__(60);

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
function Toolbarvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = Toolbarvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Toolbarvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Toolbarvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Toolbarvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function Toolbarvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
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

      if (tool.group) {
        // TODO: emit the sub map to DC (save)
        this.sub_map[tool.group] = tool.type;
      }
    },
    is_selected: function is_selected(tool) {
      var _this = this;

      if (tool.group) {
        return !!tool.items.find(function (x) {
          return x.type === _this.data.tool;
        });
      }

      return tool.type === this.data.tool;
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
    },
    groups: function groups() {
      var arr = [];

      var _iterator = Toolbarvue_type_script_lang_js_createForOfIteratorHelper(this.data.tools || []),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tool = _step.value;

          if (!tool.group) {
            arr.push(tool);
            continue;
          }

          var g = arr.find(function (x) {
            return x.group === tool.group;
          });

          if (!g) {
            arr.push({
              group: tool.group,
              icon: tool.icon,
              items: [tool]
            });
          } else {
            g.items.push(tool);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return arr;
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
      tool_count: 0,
      sub_map: {}
    };
  }
});
// CONCATENATED MODULE: ./src/components/Toolbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Toolbarvue_type_script_lang_js_ = (Toolbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Toolbar.vue?vue&type=style&index=0&lang=css&
var Toolbarvue_type_style_index_0_lang_css_ = __webpack_require__(62);

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
var Widgetsvue_type_style_index_0_lang_css_ = __webpack_require__(64);

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
  mounted: function mounted() {
    this.ctrllist();
    this.skin_styles();
  },
  methods: {
    // Build / rebuild component list
    ctrllist: function ctrllist() {
      this.ctrl_destroy();
      this.controllers = [];

      var _iterator = xcontrol_createForOfIteratorHelper(this.$props.extensions),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var x = _step.value;
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
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return this.controllers;
    },
    // TODO: preventDefault
    pre_dc: function pre_dc(e) {
      var _iterator2 = xcontrol_createForOfIteratorHelper(this.controllers),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var ctrl = _step2.value;

          if (ctrl.update) {
            ctrl.update(e);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    },
    post_dc: function post_dc(e) {
      var _iterator3 = xcontrol_createForOfIteratorHelper(this.controllers),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var ctrl = _step3.value;

          if (ctrl.post_update) {
            ctrl.post_update(e);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    },
    ctrl_destroy: function ctrl_destroy() {
      var _iterator4 = xcontrol_createForOfIteratorHelper(this.controllers),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var ctrl = _step4.value;
          if (ctrl.destroy) ctrl.destroy();
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    },
    skin_styles: function skin_styles() {
      var id = 'tvjs-skin-styles';
      var stbr = document.getElementById(id);

      if (stbr) {
        var parent = stbr.parentNode;
        parent.removeChild(stbr);
      }

      if (this.skin_proto && this.skin_proto.styles) {
        var sheet = document.createElement('style');
        sheet.setAttribute("id", id);
        sheet.innerHTML = this.skin_proto.styles;
        this.$el.appendChild(sheet);
      }
    }
  },
  computed: {
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
      this.skin_styles();
    },
    extensions: function extensions() {
      this.ctrllist();
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

    },
    timezone: {
      type: Number,
      "default": 0
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
        font: this.font_comp,
        buttons: this.$props.legendButtons,
        toolbar: this.$props.toolbar,
        ib: this.$props.indexBased || this.index_based || false,
        colors: Object.assign({}, this.$props.colors || this.colorpack),
        skin: this.skin_proto,
        timezone: this.$props.timezone
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
    },
    font_comp: function font_comp() {
      return this.skin_proto && this.skin_proto.font ? this.skin_proto.font : this.font;
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
      if (this.onrange) this.onrange(r);
    },
    set_loader: function set_loader(dc) {
      var _this2 = this;

      this.onrange = function (r) {
        var pf = _this2.chart_props.ib ? '_ms' : '';
        var tf = _this2.$refs.chart['interval' + pf];
        dc.range_changed(r, tf);
      };
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
    },
    mousedown: function mousedown() {
      this.$refs.chart.activated = true;
    },
    mouseleave: function mouseleave() {
      this.$refs.chart.activated = false;
    }
  }
});
// CONCATENATED MODULE: ./src/TradingVue.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_TradingVuevue_type_script_lang_js_ = (TradingVuevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/TradingVue.vue?vue&type=style&index=0&lang=css&
var TradingVuevue_type_style_index_0_lang_css_ = __webpack_require__(66);

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
var assertThisInitialized = __webpack_require__(27);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(11);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/helpers/tmp/ww$$$.json
var ww$$$ = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/lz-string/libs/lz-string.js
var lz_string = __webpack_require__(33);
var lz_string_default = /*#__PURE__*/__webpack_require__.n(lz_string);

// EXTERNAL MODULE: ./src/helpers/script_ww.js
var script_ww = __webpack_require__(69);

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
} // Apply filter for all new overlays

function ovf(obj, f) {
  var nw = {};

  for (var id in obj) {
    nw[id] = {};

    for (var k in obj[id]) {
      if (k === 'data') continue;
      nw[id][k] = obj[id][k];
    }

    nw[id].data = f(obj[id].data);
  }

  return nw;
} // Return index of the next element in
// dataset (since t). Impl: simple binary search
// TODO: optimize (remember the penultimate
// iteration and start from there)

function nextt(data, t, ti) {
  if (ti === void 0) {
    ti = 0;
  }

  var i0 = 0;
  var iN = data.length - 1;

  while (i0 <= iN) {
    var mid = Math.floor((i0 + iN) / 2);

    if (data[mid][ti] === t) {
      return mid;
    } else if (data[mid][ti] < t) {
      i0 = mid + 1;
    } else {
      iN = mid - 1;
    }
  }

  return t < data[mid][ti] ? mid : mid + 1;
} // Estimated size of datasets

function size_of_dss(data) {
  var bytes = 0;

  for (var id in data) {
    if (data[id].data && data[id].data[0]) {
      var s0 = size_of(data[id].data[0]);
      bytes += s0 * data[id].data.length;
    }
  }

  return bytes;
} // Used to measure the size of dataset

function size_of(object) {
  var list = [],
      stack = [object],
      bytes = 0;

  while (stack.length) {
    var value = stack.pop();

    var type = typeof_default()(value);

    if (type === 'boolean') {
      bytes += 4;
    } else if (type === 'string') {
      bytes += value.length * 2;
    } else if (type === 'number') {
      bytes += 8;
    } else if (type === 'object' && list.indexOf(value) === -1) {
      list.push(value);

      for (var i in value) {
        stack.push(value[i]);
      }
    }
  }

  return bytes;
}
function script_utils_now() {
  return new Date().getTime();
}
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

    var proto = Object.getPrototypeOf(this);
    Object.setPrototypeOf(desc, proto);
    Object.defineProperty(desc, 'dc', {
      get: function get() {
        return dc;
      }
    });
  } // Watch for the changes of descriptors


  createClass_default()(Dataset, [{
    key: "set",
    // Set data (overwrite the whole dataset)
    value: function set(data, exec) {
      if (exec === void 0) {
        exec = true;
      }

      this.dc.ww.just('dataset-op', {
        id: this.id,
        type: 'set',
        data: data,
        exec: exec
      });
    } // Update with new data (array of data points)

  }, {
    key: "update",
    value: function update(arr) {
      this.dc.ww.just('update-data', defineProperty_default()({}, this.id, arr));
    } // Send WW a chunk to merge. The merge algo
    // here is simpler than in DC. It just adds
    // data at the beginning or/and the end of ds

  }, {
    key: "merge",
    value: function merge(data, exec) {
      if (exec === void 0) {
        exec = true;
      }

      this.dc.ww.just('dataset-op', {
        id: this.id,
        type: 'mrg',
        data: data,
        exec: exec
      });
    } // Remove the ds from WW

  }, {
    key: "remove",
    value: function remove(exec) {
      if (exec === void 0) {
        exec = true;
      }

      this.dc.del("datasets.".concat(this.id));
      this.dc.ww.just('dataset-op', {
        id: this.id,
        type: 'del',
        exec: exec
      });
      delete this.dc.dss[this.id];
    } // Fetch data from WW

  }, {
    key: "data",
    value: function () {
      var _data = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var ds;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.dc.ww.exec('get-dataset', this.id);

              case 2:
                ds = _context.sent;

                if (ds) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                return _context.abrupt("return", ds.data);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function data() {
        return _data.apply(this, arguments);
      }

      return data;
    }()
  }], [{
    key: "watcher",
    value: function watcher(n, p) {
      var nids = n.map(function (x) {
        return x.id;
      });
      var pids = p.map(function (x) {
        return x.id;
      });

      var _iterator = dataset_createForOfIteratorHelper(nids),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var id = _step.value;

          if (!pids.includes(id)) {
            var ds = n.filter(function (x) {
              return x.id === id;
            })[0];
            this.dss[id] = new Dataset(this, ds);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = dataset_createForOfIteratorHelper(pids),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var id = _step2.value;

          if (!nids.includes(id) && this.dss[id]) {
            this.dss[id].remove();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } // Make an object for data transfer

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

      /*for (var req of types) {
          let ds = Object.values(dc.dss || {})
              .find(x => x.type === req.type)
          if (ds && ds.data) {
              base[ds.id] = {
                  id: ds.id,
                  type: ds.type,
                  data: ds.data
              }
          }
      }*/
      // TODO: Data request callback ?


      return base;
    }
  }]);

  return Dataset;
}(); // Dataset reciever (created on WW)



var dataset_DatasetWW = /*#__PURE__*/function () {
  function DatasetWW(id, data) {
    classCallCheck_default()(this, DatasetWW);

    this.last_upd = script_utils_now();
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
  } // Update from 'update-data' event
  // TODO: ds size limit (in MB / data points)


  createClass_default()(DatasetWW, [{
    key: "merge",
    value: function merge(data) {
      var len = this.data.length;

      if (!len) {
        this.data = data;
        return;
      }

      var t0 = this.data[0][0];
      var tN = this.data[len - 1][0];
      var l = data.filter(function (x) {
        return x[0] < t0;
      });
      var r = data.filter(function (x) {
        return x[0] > tN;
      });
      this.data = l.concat(this.data, r);
    } // On dataset operation

  }, {
    key: "op",
    value: function op(se, _op) {
      this.last_upd = script_utils_now();

      switch (_op.type) {
        case 'set':
          this.data = _op.data;
          se.recalc_size();
          break;

        case 'del':
          delete se.data[this.id];
          se.recalc_size();
          break;

        case 'mrg':
          this.merge(_op.data);
          se.recalc_size();
          break;
      }
    }
  }], [{
    key: "update_all",
    value: function update_all(se, data) {
      for (var k in data) {
        if (k === 'ohlcv') continue;
        var id = k.split('.')[1] || k;
        if (!se.data[id]) continue;
        var arr = se.data[id].data;
        var iN = arr.length - 1;
        var last = arr[iN];

        var _iterator3 = dataset_createForOfIteratorHelper(data[k]),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var dp = _step3.value;

            if (!last || dp[0] > last[0]) {
              arr.push(dp);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        se.data[id].last_upd = script_utils_now();
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
          this.grid_mousedown(args);
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

          if (utils.is_scr_props_upd(n, prev) && utils.delayed_exec(n.p)) {
            delta[id] = n.v;
            changed = true;

            _this2.tv.$set(n.p, 'loading', true);
          }
        }
      };

      for (var i = 0; i < values.length; i++) {
        _loop();
      }

      if (changed && Object.keys(delta).length) {
        var tf = this.tv.$refs.chart.interval_ms || this.data.chart.tf;
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
        var tf = this.tv.$refs.chart.interval_ms || this.data.chart.tf;
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

      var tf = this.tv.$refs.chart.interval_ms || this.data.chart.tf;
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
      this.get('.').forEach(function (v) {
        if (v.script && v.script.execOnRange && v.settings.$uuid) {
          // TODO: execInterrupt flag?
          if (utils.delayed_exec(v)) {
            delta[v.settings.$uuid] = v.settings;
          }
        }
      });

      if (Object.keys(delta).length) {
        var tf = this.tv.$refs.chart.interval_ms || this.data.chart.tf;
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
            this.tv.$set(obj, k, upd.fields[k]);
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
      var tf = this.tv.$refs.chart.interval_ms || this.data.chart.tf;
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
    key: "grid_mousedown",
    value: function grid_mousedown(args) {
      var _this3 = this;

      // TODO: tool state finished?
      this.object_selected([]); // Remove the previous RangeTool

      var rem = function rem() {
        return _this3.get('RangeTool').filter(function (x) {
          return x.settings.shiftMode;
        }).forEach(function (x) {
          return _this3.del(x.id);
        });
      };

      if (this.data.tool && this.data.tool !== 'Cursor' && !this.data.drawingMode) {
        this.tv.$set(this.data, 'drawingMode', true);
        this.build_tool(args[0]);
      } else if (this.sett.shift_measure && args[1].shiftKey) {
        rem();
        this.tv.$nextTick(function () {
          return _this3.build_tool(args[0], 'RangeTool:ShiftMode');
        });
      } else {
        rem();
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
    value: function build_tool(grid_id, type) {
      var list = this.data.tools;
      type = type || this.data.tool;
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
      var _this4 = this;

      this.get('.').forEach(function (x) {
        if (x.settings.$synth) _this4.del("".concat(x.id));
      });

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

          if (!ov.new_ovs) continue;

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
            this.fast_merge(obj.data, ov.data, false);
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
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

function dc_core_createSuper(Derived) { var hasNativeReflectConstruct = dc_core_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function dc_core_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// DataCube "private" methods




var dc_core_DCCore = /*#__PURE__*/function (_DCEvents) {
  inherits_default()(DCCore, _DCEvents);

  var _super = dc_core_createSuper(DCCore);

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
        }); // Watch for all 'datasets' changes

        this.tv.$watch(function () {
          return _this.get('datasets');
        }, dataset_Dataset.watcher.bind(this));
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
          if (!ov.settings) this.tv.$set(ov, 'settings', {}); // grid_id,layer_id => DC id mapping

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
          if (!ov.settings) this.tv.$set(ov, 'settings', {}); // grid_id,layer_id => DC id mapping

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
      var now = data.t || utils.now();
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
      var now = data.t || utils.now();
      var t = now >= t_next ? now - now % tf : last[0];

      if (t >= t_next && tick !== undefined) {
        // And new zero-height candle
        var nc = [t, tick, tick, tick, tick, volume];
        this.agg.push('ohlcv', nc, tf);
        ohlcv.push(nc);
        this.scroll_to(t);
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
        if (k === 'price' || k === 'volume' || k === 'candle' || k === 't') {
          continue;
        }

        if (k.includes('datasets.')) {
          this.agg.push(k, data[k], tf);
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

        case 'datasets':
          result = this.query_search(query, tuple);

          var _iterator4 = dc_core_createForOfIteratorHelper(result),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var r = _step4.value;

              if (r.i === 'data') {
                r.v = this.dss[r.p.id].data();
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

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
    value: function scroll_to(t) {
      if (this.tv.$refs.chart.cursor.locked) return;
      var tl = this.tv.$refs.chart.last_candle[0];
      var d = this.tv.getRange()[1] - tl;
      if (d > 0) this.tv["goto"](t + d);
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
  function AggTool(dc, _int) {
    if (_int === void 0) {
      _int = 100;
    }

    classCallCheck_default()(this, AggTool);

    this.symbols = {};
    this["int"] = _int; // Itarval in ms

    this.dc = dc;
    this.st_id = null;
    this.data_changed = false;
  }

  createClass_default()(AggTool, [{
    key: "push",
    value: function push(sym, upd, tf) {
      var _this = this;

      // Start auto updates
      if (!this.st_id) {
        this.st_id = setTimeout(function () {
          return _this.update();
        });
      }

      tf = parseInt(tf);
      var old = this.symbols[sym];
      var t = utils.now();
      var isds = sym.includes('datasets.');
      this.data_changed = true;

      if (!old) {
        this.symbols[sym] = {
          upd: upd,
          t: t,
          data: []
        };
      } else if (upd[0] >= old.upd[0] + tf && !isds) {
        // Refine the previous data point
        this.refine(sym, old.upd.slice());
        this.symbols[sym] = {
          upd: upd,
          t: t,
          data: []
        };
      } else {
        // Tick updates the current
        this.symbols[sym].upd = upd;
        this.symbols[sym].t = t;
      }

      if (isds) {
        this.symbols[sym].data.push(upd);
      }
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      var out = {};

      for (var sym in this.symbols) {
        var upd = this.symbols[sym].upd;

        switch (sym) {
          case 'ohlcv':
            var data = this.dc.data.chart.data;
            this.dc.fast_merge(data, upd);
            out.ohlcv = data.slice(-2);
            break;

          default:
            if (sym.includes('datasets.')) {
              this.update_ds(sym, out);
              continue;
            }

            var data = this.dc.get_one("".concat(sym));
            if (!data) continue;
            this.dc.fast_merge(data, upd, false);
            break;
        }
      } // TODO: fill gaps


      if (this.data_changed) {
        this.dc.ww.just('update-data', out);
        this.data_changed = false;
      }

      setTimeout(function () {
        return _this2.update();
      }, this["int"]);
    }
  }, {
    key: "refine",
    value: function refine(sym, upd) {
      if (sym === 'ohlcv') {
        var data = this.dc.data.chart.data;
        this.dc.fast_merge(data, upd);
      } else {
        var data = this.dc.get_one("".concat(sym));
        if (!data) return;
        this.dc.fast_merge(data, upd, false);
      }
    }
  }, {
    key: "update_ds",
    value: function update_ds(sym, out) {
      var data = this.symbols[sym].data;

      if (data.length) {
        out[sym] = data;
        this.symbols[sym].data = [];
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
      // WebWorker RAM limit (MB)
      node_url: null,
      // Use node.js instead of WW
      shift_measure: true // Draw measurment shift+click

    };
    sett = Object.assign(def_sett, sett);
    _this = _super.call(this);
    _this.sett = sett;
    _this.data = data;
    _this.sett = sett_proxy(sett, _this.ww);
    _this.agg = new agg_tool_AggTool(assertThisInitialized_default()(_this), sett.aggregation);
    _this.se_state = {}; //this.agg.update = this.agg_update.bind(this)

    return _this;
  } // Add new overlay


  createClass_default()(DataCube, [{
    key: "add",
    value: function add(side, overlay) {
      if (side !== 'onchart' && side !== 'offchart' && side !== 'datasets') {
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
          var i = typeof obj.i !== 'number' ? obj.i : obj.p.indexOf(obj.v);

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
// CONCATENATED MODULE: ./src/index.js















var primitives = {
  Candle: candle_CandleExt,
  Volbar: volbar_VolbarExt,
  Line: line_Line,
  Pin: pin_Pin,
  Price: price_Price,
  Ray: ray_Ray,
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