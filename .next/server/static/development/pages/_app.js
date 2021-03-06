module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

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
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"h1": "h1",
	"h2": "h2",
	"h3": "h3",
	"h4": "h4",
	"h5": "h5",
	"h6": "h6",
	"lead": "lead",
	"display-1": "display-1",
	"display-2": "display-2",
	"display-3": "display-3",
	"display-4": "display-4",
	"small": "small",
	"mark": "mark",
	"list-unstyled": "list-unstyled",
	"list-inline": "list-inline",
	"list-inline-item": "list-inline-item",
	"initialism": "initialism",
	"blockquote": "blockquote",
	"blockquote-footer": "blockquote-footer",
	"img-fluid": "img-fluid",
	"img-thumbnail": "img-thumbnail",
	"figure": "figure",
	"figure-img": "figure-img",
	"figure-caption": "figure-caption",
	"pre-scrollable": "pre-scrollable",
	"container": "container",
	"container-fluid": "container-fluid",
	"row": "row",
	"no-gutters": "no-gutters",
	"col": "col",
	"col-1": "col-1",
	"col-10": "col-10",
	"col-11": "col-11",
	"col-12": "col-12",
	"col-2": "col-2",
	"col-3": "col-3",
	"col-4": "col-4",
	"col-5": "col-5",
	"col-6": "col-6",
	"col-7": "col-7",
	"col-8": "col-8",
	"col-9": "col-9",
	"col-auto": "col-auto",
	"col-lg": "col-lg",
	"col-lg-1": "col-lg-1",
	"col-lg-10": "col-lg-10",
	"col-lg-11": "col-lg-11",
	"col-lg-12": "col-lg-12",
	"col-lg-2": "col-lg-2",
	"col-lg-3": "col-lg-3",
	"col-lg-4": "col-lg-4",
	"col-lg-5": "col-lg-5",
	"col-lg-6": "col-lg-6",
	"col-lg-7": "col-lg-7",
	"col-lg-8": "col-lg-8",
	"col-lg-9": "col-lg-9",
	"col-lg-auto": "col-lg-auto",
	"col-md": "col-md",
	"col-md-1": "col-md-1",
	"col-md-10": "col-md-10",
	"col-md-11": "col-md-11",
	"col-md-12": "col-md-12",
	"col-md-2": "col-md-2",
	"col-md-3": "col-md-3",
	"col-md-4": "col-md-4",
	"col-md-5": "col-md-5",
	"col-md-6": "col-md-6",
	"col-md-7": "col-md-7",
	"col-md-8": "col-md-8",
	"col-md-9": "col-md-9",
	"col-md-auto": "col-md-auto",
	"col-sm": "col-sm",
	"col-sm-1": "col-sm-1",
	"col-sm-10": "col-sm-10",
	"col-sm-11": "col-sm-11",
	"col-sm-12": "col-sm-12",
	"col-sm-2": "col-sm-2",
	"col-sm-3": "col-sm-3",
	"col-sm-4": "col-sm-4",
	"col-sm-5": "col-sm-5",
	"col-sm-6": "col-sm-6",
	"col-sm-7": "col-sm-7",
	"col-sm-8": "col-sm-8",
	"col-sm-9": "col-sm-9",
	"col-sm-auto": "col-sm-auto",
	"col-xl": "col-xl",
	"col-xl-1": "col-xl-1",
	"col-xl-10": "col-xl-10",
	"col-xl-11": "col-xl-11",
	"col-xl-12": "col-xl-12",
	"col-xl-2": "col-xl-2",
	"col-xl-3": "col-xl-3",
	"col-xl-4": "col-xl-4",
	"col-xl-5": "col-xl-5",
	"col-xl-6": "col-xl-6",
	"col-xl-7": "col-xl-7",
	"col-xl-8": "col-xl-8",
	"col-xl-9": "col-xl-9",
	"col-xl-auto": "col-xl-auto",
	"order-first": "order-first",
	"order-last": "order-last",
	"order-0": "order-0",
	"order-1": "order-1",
	"order-2": "order-2",
	"order-3": "order-3",
	"order-4": "order-4",
	"order-5": "order-5",
	"order-6": "order-6",
	"order-7": "order-7",
	"order-8": "order-8",
	"order-9": "order-9",
	"order-10": "order-10",
	"order-11": "order-11",
	"order-12": "order-12",
	"offset-1": "offset-1",
	"offset-2": "offset-2",
	"offset-3": "offset-3",
	"offset-4": "offset-4",
	"offset-5": "offset-5",
	"offset-6": "offset-6",
	"offset-7": "offset-7",
	"offset-8": "offset-8",
	"offset-9": "offset-9",
	"offset-10": "offset-10",
	"offset-11": "offset-11",
	"order-sm-first": "order-sm-first",
	"order-sm-last": "order-sm-last",
	"order-sm-0": "order-sm-0",
	"order-sm-1": "order-sm-1",
	"order-sm-2": "order-sm-2",
	"order-sm-3": "order-sm-3",
	"order-sm-4": "order-sm-4",
	"order-sm-5": "order-sm-5",
	"order-sm-6": "order-sm-6",
	"order-sm-7": "order-sm-7",
	"order-sm-8": "order-sm-8",
	"order-sm-9": "order-sm-9",
	"order-sm-10": "order-sm-10",
	"order-sm-11": "order-sm-11",
	"order-sm-12": "order-sm-12",
	"offset-sm-0": "offset-sm-0",
	"offset-sm-1": "offset-sm-1",
	"offset-sm-2": "offset-sm-2",
	"offset-sm-3": "offset-sm-3",
	"offset-sm-4": "offset-sm-4",
	"offset-sm-5": "offset-sm-5",
	"offset-sm-6": "offset-sm-6",
	"offset-sm-7": "offset-sm-7",
	"offset-sm-8": "offset-sm-8",
	"offset-sm-9": "offset-sm-9",
	"offset-sm-10": "offset-sm-10",
	"offset-sm-11": "offset-sm-11",
	"order-md-first": "order-md-first",
	"order-md-last": "order-md-last",
	"order-md-0": "order-md-0",
	"order-md-1": "order-md-1",
	"order-md-2": "order-md-2",
	"order-md-3": "order-md-3",
	"order-md-4": "order-md-4",
	"order-md-5": "order-md-5",
	"order-md-6": "order-md-6",
	"order-md-7": "order-md-7",
	"order-md-8": "order-md-8",
	"order-md-9": "order-md-9",
	"order-md-10": "order-md-10",
	"order-md-11": "order-md-11",
	"order-md-12": "order-md-12",
	"offset-md-0": "offset-md-0",
	"offset-md-1": "offset-md-1",
	"offset-md-2": "offset-md-2",
	"offset-md-3": "offset-md-3",
	"offset-md-4": "offset-md-4",
	"offset-md-5": "offset-md-5",
	"offset-md-6": "offset-md-6",
	"offset-md-7": "offset-md-7",
	"offset-md-8": "offset-md-8",
	"offset-md-9": "offset-md-9",
	"offset-md-10": "offset-md-10",
	"offset-md-11": "offset-md-11",
	"order-lg-first": "order-lg-first",
	"order-lg-last": "order-lg-last",
	"order-lg-0": "order-lg-0",
	"order-lg-1": "order-lg-1",
	"order-lg-2": "order-lg-2",
	"order-lg-3": "order-lg-3",
	"order-lg-4": "order-lg-4",
	"order-lg-5": "order-lg-5",
	"order-lg-6": "order-lg-6",
	"order-lg-7": "order-lg-7",
	"order-lg-8": "order-lg-8",
	"order-lg-9": "order-lg-9",
	"order-lg-10": "order-lg-10",
	"order-lg-11": "order-lg-11",
	"order-lg-12": "order-lg-12",
	"offset-lg-0": "offset-lg-0",
	"offset-lg-1": "offset-lg-1",
	"offset-lg-2": "offset-lg-2",
	"offset-lg-3": "offset-lg-3",
	"offset-lg-4": "offset-lg-4",
	"offset-lg-5": "offset-lg-5",
	"offset-lg-6": "offset-lg-6",
	"offset-lg-7": "offset-lg-7",
	"offset-lg-8": "offset-lg-8",
	"offset-lg-9": "offset-lg-9",
	"offset-lg-10": "offset-lg-10",
	"offset-lg-11": "offset-lg-11",
	"order-xl-first": "order-xl-first",
	"order-xl-last": "order-xl-last",
	"order-xl-0": "order-xl-0",
	"order-xl-1": "order-xl-1",
	"order-xl-2": "order-xl-2",
	"order-xl-3": "order-xl-3",
	"order-xl-4": "order-xl-4",
	"order-xl-5": "order-xl-5",
	"order-xl-6": "order-xl-6",
	"order-xl-7": "order-xl-7",
	"order-xl-8": "order-xl-8",
	"order-xl-9": "order-xl-9",
	"order-xl-10": "order-xl-10",
	"order-xl-11": "order-xl-11",
	"order-xl-12": "order-xl-12",
	"offset-xl-0": "offset-xl-0",
	"offset-xl-1": "offset-xl-1",
	"offset-xl-2": "offset-xl-2",
	"offset-xl-3": "offset-xl-3",
	"offset-xl-4": "offset-xl-4",
	"offset-xl-5": "offset-xl-5",
	"offset-xl-6": "offset-xl-6",
	"offset-xl-7": "offset-xl-7",
	"offset-xl-8": "offset-xl-8",
	"offset-xl-9": "offset-xl-9",
	"offset-xl-10": "offset-xl-10",
	"offset-xl-11": "offset-xl-11",
	"table": "table",
	"table-sm": "table-sm",
	"table-bordered": "table-bordered",
	"table-borderless": "table-borderless",
	"table-striped": "table-striped",
	"table-hover": "table-hover",
	"table-primary": "table-primary",
	"table-secondary": "table-secondary",
	"table-success": "table-success",
	"table-info": "table-info",
	"table-warning": "table-warning",
	"table-danger": "table-danger",
	"table-light": "table-light",
	"table-dark": "table-dark",
	"table-active": "table-active",
	"thead-dark": "thead-dark",
	"thead-light": "thead-light",
	"table-responsive-sm": "table-responsive-sm",
	"table-responsive-md": "table-responsive-md",
	"table-responsive-lg": "table-responsive-lg",
	"table-responsive-xl": "table-responsive-xl",
	"table-responsive": "table-responsive",
	"form-control": "form-control",
	"form-control-file": "form-control-file",
	"form-control-range": "form-control-range",
	"col-form-label": "col-form-label",
	"col-form-label-lg": "col-form-label-lg",
	"col-form-label-sm": "col-form-label-sm",
	"form-control-plaintext": "form-control-plaintext",
	"form-control-lg": "form-control-lg",
	"form-control-sm": "form-control-sm",
	"form-group": "form-group",
	"form-text": "form-text",
	"form-row": "form-row",
	"form-check": "form-check",
	"form-check-input": "form-check-input",
	"form-check-label": "form-check-label",
	"form-check-inline": "form-check-inline",
	"valid-feedback": "valid-feedback",
	"valid-tooltip": "valid-tooltip",
	"is-valid": "is-valid",
	"was-validated": "was-validated",
	"custom-select": "custom-select",
	"custom-control-input": "custom-control-input",
	"custom-control-label": "custom-control-label",
	"custom-file-input": "custom-file-input",
	"custom-file-label": "custom-file-label",
	"invalid-feedback": "invalid-feedback",
	"invalid-tooltip": "invalid-tooltip",
	"is-invalid": "is-invalid",
	"form-inline": "form-inline",
	"input-group": "input-group",
	"custom-control": "custom-control",
	"btn": "btn",
	"focus": "focus",
	"disabled": "disabled",
	"btn-primary": "btn-primary",
	"active": "active",
	"show": "show",
	"dropdown-toggle": "dropdown-toggle",
	"btn-secondary": "btn-secondary",
	"btn-success": "btn-success",
	"btn-info": "btn-info",
	"btn-warning": "btn-warning",
	"btn-danger": "btn-danger",
	"btn-light": "btn-light",
	"btn-dark": "btn-dark",
	"btn-outline-primary": "btn-outline-primary",
	"btn-outline-secondary": "btn-outline-secondary",
	"btn-outline-success": "btn-outline-success",
	"btn-outline-info": "btn-outline-info",
	"btn-outline-warning": "btn-outline-warning",
	"btn-outline-danger": "btn-outline-danger",
	"btn-outline-light": "btn-outline-light",
	"btn-outline-dark": "btn-outline-dark",
	"btn-link": "btn-link",
	"btn-group-lg": "btn-group-lg",
	"btn-lg": "btn-lg",
	"btn-group-sm": "btn-group-sm",
	"btn-sm": "btn-sm",
	"btn-block": "btn-block",
	"fade": "fade",
	"collapse": "collapse",
	"collapsing": "collapsing",
	"dropdown": "dropdown",
	"dropleft": "dropleft",
	"dropright": "dropright",
	"dropup": "dropup",
	"dropdown-menu": "dropdown-menu",
	"dropdown-menu-left": "dropdown-menu-left",
	"dropdown-menu-right": "dropdown-menu-right",
	"dropdown-menu-sm-left": "dropdown-menu-sm-left",
	"dropdown-menu-sm-right": "dropdown-menu-sm-right",
	"dropdown-menu-md-left": "dropdown-menu-md-left",
	"dropdown-menu-md-right": "dropdown-menu-md-right",
	"dropdown-menu-lg-left": "dropdown-menu-lg-left",
	"dropdown-menu-lg-right": "dropdown-menu-lg-right",
	"dropdown-menu-xl-left": "dropdown-menu-xl-left",
	"dropdown-menu-xl-right": "dropdown-menu-xl-right",
	"dropdown-divider": "dropdown-divider",
	"dropdown-item": "dropdown-item",
	"dropdown-header": "dropdown-header",
	"dropdown-item-text": "dropdown-item-text",
	"btn-group": "btn-group",
	"btn-group-vertical": "btn-group-vertical",
	"btn-toolbar": "btn-toolbar",
	"dropdown-toggle-split": "dropdown-toggle-split",
	"btn-group-toggle": "btn-group-toggle",
	"custom-file": "custom-file",
	"input-group-append": "input-group-append",
	"input-group-prepend": "input-group-prepend",
	"input-group-text": "input-group-text",
	"input-group-lg": "input-group-lg",
	"input-group-sm": "input-group-sm",
	"custom-control-inline": "custom-control-inline",
	"custom-checkbox": "custom-checkbox",
	"custom-radio": "custom-radio",
	"custom-switch": "custom-switch",
	"custom-select-sm": "custom-select-sm",
	"custom-select-lg": "custom-select-lg",
	"custom-range": "custom-range",
	"nav": "nav",
	"nav-link": "nav-link",
	"nav-tabs": "nav-tabs",
	"nav-item": "nav-item",
	"nav-pills": "nav-pills",
	"nav-fill": "nav-fill",
	"nav-justified": "nav-justified",
	"tab-content": "tab-content",
	"tab-pane": "tab-pane",
	"navbar": "navbar",
	"navbar-brand": "navbar-brand",
	"navbar-nav": "navbar-nav",
	"navbar-text": "navbar-text",
	"navbar-collapse": "navbar-collapse",
	"navbar-toggler": "navbar-toggler",
	"navbar-toggler-icon": "navbar-toggler-icon",
	"navbar-expand-sm": "navbar-expand-sm",
	"navbar-expand-md": "navbar-expand-md",
	"navbar-expand-lg": "navbar-expand-lg",
	"navbar-expand-xl": "navbar-expand-xl",
	"navbar-expand": "navbar-expand",
	"navbar-light": "navbar-light",
	"navbar-dark": "navbar-dark",
	"card": "card",
	"list-group": "list-group",
	"list-group-item": "list-group-item",
	"card-body": "card-body",
	"card-title": "card-title",
	"card-subtitle": "card-subtitle",
	"card-text": "card-text",
	"card-link": "card-link",
	"card-header": "card-header",
	"card-footer": "card-footer",
	"card-header-tabs": "card-header-tabs",
	"card-header-pills": "card-header-pills",
	"card-img-overlay": "card-img-overlay",
	"card-img": "card-img",
	"card-img-top": "card-img-top",
	"card-img-bottom": "card-img-bottom",
	"card-deck": "card-deck",
	"card-group": "card-group",
	"card-columns": "card-columns",
	"accordion": "accordion",
	"breadcrumb": "breadcrumb",
	"breadcrumb-item": "breadcrumb-item",
	"pagination": "pagination",
	"page-link": "page-link",
	"page-item": "page-item",
	"pagination-lg": "pagination-lg",
	"pagination-sm": "pagination-sm",
	"badge": "badge",
	"badge-pill": "badge-pill",
	"badge-primary": "badge-primary",
	"badge-secondary": "badge-secondary",
	"badge-success": "badge-success",
	"badge-info": "badge-info",
	"badge-warning": "badge-warning",
	"badge-danger": "badge-danger",
	"badge-light": "badge-light",
	"badge-dark": "badge-dark",
	"jumbotron": "jumbotron",
	"jumbotron-fluid": "jumbotron-fluid",
	"alert": "alert",
	"alert-heading": "alert-heading",
	"alert-link": "alert-link",
	"alert-dismissible": "alert-dismissible",
	"close": "close",
	"alert-primary": "alert-primary",
	"alert-secondary": "alert-secondary",
	"alert-success": "alert-success",
	"alert-info": "alert-info",
	"alert-warning": "alert-warning",
	"alert-danger": "alert-danger",
	"alert-light": "alert-light",
	"alert-dark": "alert-dark",
	"progress": "progress",
	"progress-bar": "progress-bar",
	"progress-bar-striped": "progress-bar-striped",
	"progress-bar-animated": "progress-bar-animated",
	"progress-bar-stripes": "progress-bar-stripes",
	"media": "media",
	"media-body": "media-body",
	"list-group-item-action": "list-group-item-action",
	"list-group-horizontal": "list-group-horizontal",
	"list-group-horizontal-sm": "list-group-horizontal-sm",
	"list-group-horizontal-md": "list-group-horizontal-md",
	"list-group-horizontal-lg": "list-group-horizontal-lg",
	"list-group-horizontal-xl": "list-group-horizontal-xl",
	"list-group-flush": "list-group-flush",
	"list-group-item-primary": "list-group-item-primary",
	"list-group-item-secondary": "list-group-item-secondary",
	"list-group-item-success": "list-group-item-success",
	"list-group-item-info": "list-group-item-info",
	"list-group-item-warning": "list-group-item-warning",
	"list-group-item-danger": "list-group-item-danger",
	"list-group-item-light": "list-group-item-light",
	"list-group-item-dark": "list-group-item-dark",
	"toast": "toast",
	"showing": "showing",
	"hide": "hide",
	"toast-header": "toast-header",
	"toast-body": "toast-body",
	"modal-open": "modal-open",
	"modal": "modal",
	"modal-dialog": "modal-dialog",
	"modal-dialog-scrollable": "modal-dialog-scrollable",
	"modal-content": "modal-content",
	"modal-footer": "modal-footer",
	"modal-header": "modal-header",
	"modal-body": "modal-body",
	"modal-dialog-centered": "modal-dialog-centered",
	"modal-backdrop": "modal-backdrop",
	"modal-title": "modal-title",
	"modal-scrollbar-measure": "modal-scrollbar-measure",
	"modal-sm": "modal-sm",
	"modal-lg": "modal-lg",
	"modal-xl": "modal-xl",
	"tooltip": "tooltip",
	"arrow": "arrow",
	"bs-tooltip-auto": "bs-tooltip-auto",
	"bs-tooltip-top": "bs-tooltip-top",
	"bs-tooltip-right": "bs-tooltip-right",
	"bs-tooltip-bottom": "bs-tooltip-bottom",
	"bs-tooltip-left": "bs-tooltip-left",
	"tooltip-inner": "tooltip-inner",
	"popover": "popover",
	"bs-popover-auto": "bs-popover-auto",
	"bs-popover-top": "bs-popover-top",
	"bs-popover-right": "bs-popover-right",
	"bs-popover-bottom": "bs-popover-bottom",
	"popover-header": "popover-header",
	"bs-popover-left": "bs-popover-left",
	"popover-body": "popover-body",
	"carousel": "carousel",
	"pointer-event": "pointer-event",
	"carousel-inner": "carousel-inner",
	"carousel-item": "carousel-item",
	"carousel-item-next": "carousel-item-next",
	"carousel-item-prev": "carousel-item-prev",
	"carousel-item-right": "carousel-item-right",
	"carousel-item-left": "carousel-item-left",
	"carousel-fade": "carousel-fade",
	"carousel-control-next": "carousel-control-next",
	"carousel-control-prev": "carousel-control-prev",
	"carousel-control-next-icon": "carousel-control-next-icon",
	"carousel-control-prev-icon": "carousel-control-prev-icon",
	"carousel-indicators": "carousel-indicators",
	"carousel-caption": "carousel-caption",
	"spinner-border": "spinner-border",
	"spinner-border-sm": "spinner-border-sm",
	"spinner-grow": "spinner-grow",
	"spinner-grow-sm": "spinner-grow-sm",
	"align-baseline": "align-baseline",
	"align-top": "align-top",
	"align-middle": "align-middle",
	"align-bottom": "align-bottom",
	"align-text-bottom": "align-text-bottom",
	"align-text-top": "align-text-top",
	"bg-primary": "bg-primary",
	"bg-secondary": "bg-secondary",
	"bg-success": "bg-success",
	"bg-info": "bg-info",
	"bg-warning": "bg-warning",
	"bg-danger": "bg-danger",
	"bg-light": "bg-light",
	"bg-dark": "bg-dark",
	"bg-white": "bg-white",
	"bg-transparent": "bg-transparent",
	"border": "border",
	"border-top": "border-top",
	"border-right": "border-right",
	"border-bottom": "border-bottom",
	"border-left": "border-left",
	"border-0": "border-0",
	"border-top-0": "border-top-0",
	"border-right-0": "border-right-0",
	"border-bottom-0": "border-bottom-0",
	"border-left-0": "border-left-0",
	"border-primary": "border-primary",
	"border-secondary": "border-secondary",
	"border-success": "border-success",
	"border-info": "border-info",
	"border-warning": "border-warning",
	"border-danger": "border-danger",
	"border-light": "border-light",
	"border-dark": "border-dark",
	"border-white": "border-white",
	"rounded-sm": "rounded-sm",
	"rounded": "rounded",
	"rounded-top": "rounded-top",
	"rounded-right": "rounded-right",
	"rounded-bottom": "rounded-bottom",
	"rounded-left": "rounded-left",
	"rounded-lg": "rounded-lg",
	"rounded-circle": "rounded-circle",
	"rounded-pill": "rounded-pill",
	"rounded-0": "rounded-0",
	"clearfix": "clearfix",
	"d-none": "d-none",
	"d-inline": "d-inline",
	"d-inline-block": "d-inline-block",
	"d-block": "d-block",
	"d-table": "d-table",
	"d-table-row": "d-table-row",
	"d-table-cell": "d-table-cell",
	"d-flex": "d-flex",
	"d-inline-flex": "d-inline-flex",
	"d-sm-none": "d-sm-none",
	"d-sm-inline": "d-sm-inline",
	"d-sm-inline-block": "d-sm-inline-block",
	"d-sm-block": "d-sm-block",
	"d-sm-table": "d-sm-table",
	"d-sm-table-row": "d-sm-table-row",
	"d-sm-table-cell": "d-sm-table-cell",
	"d-sm-flex": "d-sm-flex",
	"d-sm-inline-flex": "d-sm-inline-flex",
	"d-md-none": "d-md-none",
	"d-md-inline": "d-md-inline",
	"d-md-inline-block": "d-md-inline-block",
	"d-md-block": "d-md-block",
	"d-md-table": "d-md-table",
	"d-md-table-row": "d-md-table-row",
	"d-md-table-cell": "d-md-table-cell",
	"d-md-flex": "d-md-flex",
	"d-md-inline-flex": "d-md-inline-flex",
	"d-lg-none": "d-lg-none",
	"d-lg-inline": "d-lg-inline",
	"d-lg-inline-block": "d-lg-inline-block",
	"d-lg-block": "d-lg-block",
	"d-lg-table": "d-lg-table",
	"d-lg-table-row": "d-lg-table-row",
	"d-lg-table-cell": "d-lg-table-cell",
	"d-lg-flex": "d-lg-flex",
	"d-lg-inline-flex": "d-lg-inline-flex",
	"d-xl-none": "d-xl-none",
	"d-xl-inline": "d-xl-inline",
	"d-xl-inline-block": "d-xl-inline-block",
	"d-xl-block": "d-xl-block",
	"d-xl-table": "d-xl-table",
	"d-xl-table-row": "d-xl-table-row",
	"d-xl-table-cell": "d-xl-table-cell",
	"d-xl-flex": "d-xl-flex",
	"d-xl-inline-flex": "d-xl-inline-flex",
	"d-print-none": "d-print-none",
	"d-print-inline": "d-print-inline",
	"d-print-inline-block": "d-print-inline-block",
	"d-print-block": "d-print-block",
	"d-print-table": "d-print-table",
	"d-print-table-row": "d-print-table-row",
	"d-print-table-cell": "d-print-table-cell",
	"d-print-flex": "d-print-flex",
	"d-print-inline-flex": "d-print-inline-flex",
	"embed-responsive": "embed-responsive",
	"embed-responsive-item": "embed-responsive-item",
	"embed-responsive-21by9": "embed-responsive-21by9",
	"embed-responsive-16by9": "embed-responsive-16by9",
	"embed-responsive-4by3": "embed-responsive-4by3",
	"embed-responsive-1by1": "embed-responsive-1by1",
	"flex-row": "flex-row",
	"flex-column": "flex-column",
	"flex-row-reverse": "flex-row-reverse",
	"flex-column-reverse": "flex-column-reverse",
	"flex-wrap": "flex-wrap",
	"flex-nowrap": "flex-nowrap",
	"flex-wrap-reverse": "flex-wrap-reverse",
	"flex-fill": "flex-fill",
	"flex-grow-0": "flex-grow-0",
	"flex-grow-1": "flex-grow-1",
	"flex-shrink-0": "flex-shrink-0",
	"flex-shrink-1": "flex-shrink-1",
	"justify-content-start": "justify-content-start",
	"justify-content-end": "justify-content-end",
	"justify-content-center": "justify-content-center",
	"justify-content-between": "justify-content-between",
	"justify-content-around": "justify-content-around",
	"align-items-start": "align-items-start",
	"align-items-end": "align-items-end",
	"align-items-center": "align-items-center",
	"align-items-baseline": "align-items-baseline",
	"align-items-stretch": "align-items-stretch",
	"align-content-start": "align-content-start",
	"align-content-end": "align-content-end",
	"align-content-center": "align-content-center",
	"align-content-between": "align-content-between",
	"align-content-around": "align-content-around",
	"align-content-stretch": "align-content-stretch",
	"align-self-auto": "align-self-auto",
	"align-self-start": "align-self-start",
	"align-self-end": "align-self-end",
	"align-self-center": "align-self-center",
	"align-self-baseline": "align-self-baseline",
	"align-self-stretch": "align-self-stretch",
	"flex-sm-row": "flex-sm-row",
	"flex-sm-column": "flex-sm-column",
	"flex-sm-row-reverse": "flex-sm-row-reverse",
	"flex-sm-column-reverse": "flex-sm-column-reverse",
	"flex-sm-wrap": "flex-sm-wrap",
	"flex-sm-nowrap": "flex-sm-nowrap",
	"flex-sm-wrap-reverse": "flex-sm-wrap-reverse",
	"flex-sm-fill": "flex-sm-fill",
	"flex-sm-grow-0": "flex-sm-grow-0",
	"flex-sm-grow-1": "flex-sm-grow-1",
	"flex-sm-shrink-0": "flex-sm-shrink-0",
	"flex-sm-shrink-1": "flex-sm-shrink-1",
	"justify-content-sm-start": "justify-content-sm-start",
	"justify-content-sm-end": "justify-content-sm-end",
	"justify-content-sm-center": "justify-content-sm-center",
	"justify-content-sm-between": "justify-content-sm-between",
	"justify-content-sm-around": "justify-content-sm-around",
	"align-items-sm-start": "align-items-sm-start",
	"align-items-sm-end": "align-items-sm-end",
	"align-items-sm-center": "align-items-sm-center",
	"align-items-sm-baseline": "align-items-sm-baseline",
	"align-items-sm-stretch": "align-items-sm-stretch",
	"align-content-sm-start": "align-content-sm-start",
	"align-content-sm-end": "align-content-sm-end",
	"align-content-sm-center": "align-content-sm-center",
	"align-content-sm-between": "align-content-sm-between",
	"align-content-sm-around": "align-content-sm-around",
	"align-content-sm-stretch": "align-content-sm-stretch",
	"align-self-sm-auto": "align-self-sm-auto",
	"align-self-sm-start": "align-self-sm-start",
	"align-self-sm-end": "align-self-sm-end",
	"align-self-sm-center": "align-self-sm-center",
	"align-self-sm-baseline": "align-self-sm-baseline",
	"align-self-sm-stretch": "align-self-sm-stretch",
	"flex-md-row": "flex-md-row",
	"flex-md-column": "flex-md-column",
	"flex-md-row-reverse": "flex-md-row-reverse",
	"flex-md-column-reverse": "flex-md-column-reverse",
	"flex-md-wrap": "flex-md-wrap",
	"flex-md-nowrap": "flex-md-nowrap",
	"flex-md-wrap-reverse": "flex-md-wrap-reverse",
	"flex-md-fill": "flex-md-fill",
	"flex-md-grow-0": "flex-md-grow-0",
	"flex-md-grow-1": "flex-md-grow-1",
	"flex-md-shrink-0": "flex-md-shrink-0",
	"flex-md-shrink-1": "flex-md-shrink-1",
	"justify-content-md-start": "justify-content-md-start",
	"justify-content-md-end": "justify-content-md-end",
	"justify-content-md-center": "justify-content-md-center",
	"justify-content-md-between": "justify-content-md-between",
	"justify-content-md-around": "justify-content-md-around",
	"align-items-md-start": "align-items-md-start",
	"align-items-md-end": "align-items-md-end",
	"align-items-md-center": "align-items-md-center",
	"align-items-md-baseline": "align-items-md-baseline",
	"align-items-md-stretch": "align-items-md-stretch",
	"align-content-md-start": "align-content-md-start",
	"align-content-md-end": "align-content-md-end",
	"align-content-md-center": "align-content-md-center",
	"align-content-md-between": "align-content-md-between",
	"align-content-md-around": "align-content-md-around",
	"align-content-md-stretch": "align-content-md-stretch",
	"align-self-md-auto": "align-self-md-auto",
	"align-self-md-start": "align-self-md-start",
	"align-self-md-end": "align-self-md-end",
	"align-self-md-center": "align-self-md-center",
	"align-self-md-baseline": "align-self-md-baseline",
	"align-self-md-stretch": "align-self-md-stretch",
	"flex-lg-row": "flex-lg-row",
	"flex-lg-column": "flex-lg-column",
	"flex-lg-row-reverse": "flex-lg-row-reverse",
	"flex-lg-column-reverse": "flex-lg-column-reverse",
	"flex-lg-wrap": "flex-lg-wrap",
	"flex-lg-nowrap": "flex-lg-nowrap",
	"flex-lg-wrap-reverse": "flex-lg-wrap-reverse",
	"flex-lg-fill": "flex-lg-fill",
	"flex-lg-grow-0": "flex-lg-grow-0",
	"flex-lg-grow-1": "flex-lg-grow-1",
	"flex-lg-shrink-0": "flex-lg-shrink-0",
	"flex-lg-shrink-1": "flex-lg-shrink-1",
	"justify-content-lg-start": "justify-content-lg-start",
	"justify-content-lg-end": "justify-content-lg-end",
	"justify-content-lg-center": "justify-content-lg-center",
	"justify-content-lg-between": "justify-content-lg-between",
	"justify-content-lg-around": "justify-content-lg-around",
	"align-items-lg-start": "align-items-lg-start",
	"align-items-lg-end": "align-items-lg-end",
	"align-items-lg-center": "align-items-lg-center",
	"align-items-lg-baseline": "align-items-lg-baseline",
	"align-items-lg-stretch": "align-items-lg-stretch",
	"align-content-lg-start": "align-content-lg-start",
	"align-content-lg-end": "align-content-lg-end",
	"align-content-lg-center": "align-content-lg-center",
	"align-content-lg-between": "align-content-lg-between",
	"align-content-lg-around": "align-content-lg-around",
	"align-content-lg-stretch": "align-content-lg-stretch",
	"align-self-lg-auto": "align-self-lg-auto",
	"align-self-lg-start": "align-self-lg-start",
	"align-self-lg-end": "align-self-lg-end",
	"align-self-lg-center": "align-self-lg-center",
	"align-self-lg-baseline": "align-self-lg-baseline",
	"align-self-lg-stretch": "align-self-lg-stretch",
	"flex-xl-row": "flex-xl-row",
	"flex-xl-column": "flex-xl-column",
	"flex-xl-row-reverse": "flex-xl-row-reverse",
	"flex-xl-column-reverse": "flex-xl-column-reverse",
	"flex-xl-wrap": "flex-xl-wrap",
	"flex-xl-nowrap": "flex-xl-nowrap",
	"flex-xl-wrap-reverse": "flex-xl-wrap-reverse",
	"flex-xl-fill": "flex-xl-fill",
	"flex-xl-grow-0": "flex-xl-grow-0",
	"flex-xl-grow-1": "flex-xl-grow-1",
	"flex-xl-shrink-0": "flex-xl-shrink-0",
	"flex-xl-shrink-1": "flex-xl-shrink-1",
	"justify-content-xl-start": "justify-content-xl-start",
	"justify-content-xl-end": "justify-content-xl-end",
	"justify-content-xl-center": "justify-content-xl-center",
	"justify-content-xl-between": "justify-content-xl-between",
	"justify-content-xl-around": "justify-content-xl-around",
	"align-items-xl-start": "align-items-xl-start",
	"align-items-xl-end": "align-items-xl-end",
	"align-items-xl-center": "align-items-xl-center",
	"align-items-xl-baseline": "align-items-xl-baseline",
	"align-items-xl-stretch": "align-items-xl-stretch",
	"align-content-xl-start": "align-content-xl-start",
	"align-content-xl-end": "align-content-xl-end",
	"align-content-xl-center": "align-content-xl-center",
	"align-content-xl-between": "align-content-xl-between",
	"align-content-xl-around": "align-content-xl-around",
	"align-content-xl-stretch": "align-content-xl-stretch",
	"align-self-xl-auto": "align-self-xl-auto",
	"align-self-xl-start": "align-self-xl-start",
	"align-self-xl-end": "align-self-xl-end",
	"align-self-xl-center": "align-self-xl-center",
	"align-self-xl-baseline": "align-self-xl-baseline",
	"align-self-xl-stretch": "align-self-xl-stretch",
	"float-left": "float-left",
	"float-right": "float-right",
	"float-none": "float-none",
	"float-sm-left": "float-sm-left",
	"float-sm-right": "float-sm-right",
	"float-sm-none": "float-sm-none",
	"float-md-left": "float-md-left",
	"float-md-right": "float-md-right",
	"float-md-none": "float-md-none",
	"float-lg-left": "float-lg-left",
	"float-lg-right": "float-lg-right",
	"float-lg-none": "float-lg-none",
	"float-xl-left": "float-xl-left",
	"float-xl-right": "float-xl-right",
	"float-xl-none": "float-xl-none",
	"overflow-auto": "overflow-auto",
	"overflow-hidden": "overflow-hidden",
	"position-static": "position-static",
	"position-relative": "position-relative",
	"position-absolute": "position-absolute",
	"position-fixed": "position-fixed",
	"position-sticky": "position-sticky",
	"fixed-top": "fixed-top",
	"fixed-bottom": "fixed-bottom",
	"sticky-top": "sticky-top",
	"sr-only": "sr-only",
	"sr-only-focusable": "sr-only-focusable",
	"shadow-sm": "shadow-sm",
	"shadow": "shadow",
	"shadow-lg": "shadow-lg",
	"shadow-none": "shadow-none",
	"w-25": "w-25",
	"w-50": "w-50",
	"w-75": "w-75",
	"w-100": "w-100",
	"w-auto": "w-auto",
	"h-25": "h-25",
	"h-50": "h-50",
	"h-75": "h-75",
	"h-100": "h-100",
	"h-auto": "h-auto",
	"mw-100": "mw-100",
	"mh-100": "mh-100",
	"min-vw-100": "min-vw-100",
	"min-vh-100": "min-vh-100",
	"vw-100": "vw-100",
	"vh-100": "vh-100",
	"stretched-link": "stretched-link",
	"m-0": "m-0",
	"mt-0": "mt-0",
	"my-0": "my-0",
	"mr-0": "mr-0",
	"mx-0": "mx-0",
	"mb-0": "mb-0",
	"ml-0": "ml-0",
	"m-1": "m-1",
	"mt-1": "mt-1",
	"my-1": "my-1",
	"mr-1": "mr-1",
	"mx-1": "mx-1",
	"mb-1": "mb-1",
	"ml-1": "ml-1",
	"m-2": "m-2",
	"mt-2": "mt-2",
	"my-2": "my-2",
	"mr-2": "mr-2",
	"mx-2": "mx-2",
	"mb-2": "mb-2",
	"ml-2": "ml-2",
	"m-3": "m-3",
	"mt-3": "mt-3",
	"my-3": "my-3",
	"mr-3": "mr-3",
	"mx-3": "mx-3",
	"mb-3": "mb-3",
	"ml-3": "ml-3",
	"m-4": "m-4",
	"mt-4": "mt-4",
	"my-4": "my-4",
	"mr-4": "mr-4",
	"mx-4": "mx-4",
	"mb-4": "mb-4",
	"ml-4": "ml-4",
	"m-5": "m-5",
	"mt-5": "mt-5",
	"my-5": "my-5",
	"mr-5": "mr-5",
	"mx-5": "mx-5",
	"mb-5": "mb-5",
	"ml-5": "ml-5",
	"p-0": "p-0",
	"pt-0": "pt-0",
	"py-0": "py-0",
	"pr-0": "pr-0",
	"px-0": "px-0",
	"pb-0": "pb-0",
	"pl-0": "pl-0",
	"p-1": "p-1",
	"pt-1": "pt-1",
	"py-1": "py-1",
	"pr-1": "pr-1",
	"px-1": "px-1",
	"pb-1": "pb-1",
	"pl-1": "pl-1",
	"p-2": "p-2",
	"pt-2": "pt-2",
	"py-2": "py-2",
	"pr-2": "pr-2",
	"px-2": "px-2",
	"pb-2": "pb-2",
	"pl-2": "pl-2",
	"p-3": "p-3",
	"pt-3": "pt-3",
	"py-3": "py-3",
	"pr-3": "pr-3",
	"px-3": "px-3",
	"pb-3": "pb-3",
	"pl-3": "pl-3",
	"p-4": "p-4",
	"pt-4": "pt-4",
	"py-4": "py-4",
	"pr-4": "pr-4",
	"px-4": "px-4",
	"pb-4": "pb-4",
	"pl-4": "pl-4",
	"p-5": "p-5",
	"pt-5": "pt-5",
	"py-5": "py-5",
	"pr-5": "pr-5",
	"px-5": "px-5",
	"pb-5": "pb-5",
	"pl-5": "pl-5",
	"m-n1": "m-n1",
	"mt-n1": "mt-n1",
	"my-n1": "my-n1",
	"mr-n1": "mr-n1",
	"mx-n1": "mx-n1",
	"mb-n1": "mb-n1",
	"ml-n1": "ml-n1",
	"m-n2": "m-n2",
	"mt-n2": "mt-n2",
	"my-n2": "my-n2",
	"mr-n2": "mr-n2",
	"mx-n2": "mx-n2",
	"mb-n2": "mb-n2",
	"ml-n2": "ml-n2",
	"m-n3": "m-n3",
	"mt-n3": "mt-n3",
	"my-n3": "my-n3",
	"mr-n3": "mr-n3",
	"mx-n3": "mx-n3",
	"mb-n3": "mb-n3",
	"ml-n3": "ml-n3",
	"m-n4": "m-n4",
	"mt-n4": "mt-n4",
	"my-n4": "my-n4",
	"mr-n4": "mr-n4",
	"mx-n4": "mx-n4",
	"mb-n4": "mb-n4",
	"ml-n4": "ml-n4",
	"m-n5": "m-n5",
	"mt-n5": "mt-n5",
	"my-n5": "my-n5",
	"mr-n5": "mr-n5",
	"mx-n5": "mx-n5",
	"mb-n5": "mb-n5",
	"ml-n5": "ml-n5",
	"m-auto": "m-auto",
	"mt-auto": "mt-auto",
	"my-auto": "my-auto",
	"mr-auto": "mr-auto",
	"mx-auto": "mx-auto",
	"mb-auto": "mb-auto",
	"ml-auto": "ml-auto",
	"m-sm-0": "m-sm-0",
	"mt-sm-0": "mt-sm-0",
	"my-sm-0": "my-sm-0",
	"mr-sm-0": "mr-sm-0",
	"mx-sm-0": "mx-sm-0",
	"mb-sm-0": "mb-sm-0",
	"ml-sm-0": "ml-sm-0",
	"m-sm-1": "m-sm-1",
	"mt-sm-1": "mt-sm-1",
	"my-sm-1": "my-sm-1",
	"mr-sm-1": "mr-sm-1",
	"mx-sm-1": "mx-sm-1",
	"mb-sm-1": "mb-sm-1",
	"ml-sm-1": "ml-sm-1",
	"m-sm-2": "m-sm-2",
	"mt-sm-2": "mt-sm-2",
	"my-sm-2": "my-sm-2",
	"mr-sm-2": "mr-sm-2",
	"mx-sm-2": "mx-sm-2",
	"mb-sm-2": "mb-sm-2",
	"ml-sm-2": "ml-sm-2",
	"m-sm-3": "m-sm-3",
	"mt-sm-3": "mt-sm-3",
	"my-sm-3": "my-sm-3",
	"mr-sm-3": "mr-sm-3",
	"mx-sm-3": "mx-sm-3",
	"mb-sm-3": "mb-sm-3",
	"ml-sm-3": "ml-sm-3",
	"m-sm-4": "m-sm-4",
	"mt-sm-4": "mt-sm-4",
	"my-sm-4": "my-sm-4",
	"mr-sm-4": "mr-sm-4",
	"mx-sm-4": "mx-sm-4",
	"mb-sm-4": "mb-sm-4",
	"ml-sm-4": "ml-sm-4",
	"m-sm-5": "m-sm-5",
	"mt-sm-5": "mt-sm-5",
	"my-sm-5": "my-sm-5",
	"mr-sm-5": "mr-sm-5",
	"mx-sm-5": "mx-sm-5",
	"mb-sm-5": "mb-sm-5",
	"ml-sm-5": "ml-sm-5",
	"p-sm-0": "p-sm-0",
	"pt-sm-0": "pt-sm-0",
	"py-sm-0": "py-sm-0",
	"pr-sm-0": "pr-sm-0",
	"px-sm-0": "px-sm-0",
	"pb-sm-0": "pb-sm-0",
	"pl-sm-0": "pl-sm-0",
	"p-sm-1": "p-sm-1",
	"pt-sm-1": "pt-sm-1",
	"py-sm-1": "py-sm-1",
	"pr-sm-1": "pr-sm-1",
	"px-sm-1": "px-sm-1",
	"pb-sm-1": "pb-sm-1",
	"pl-sm-1": "pl-sm-1",
	"p-sm-2": "p-sm-2",
	"pt-sm-2": "pt-sm-2",
	"py-sm-2": "py-sm-2",
	"pr-sm-2": "pr-sm-2",
	"px-sm-2": "px-sm-2",
	"pb-sm-2": "pb-sm-2",
	"pl-sm-2": "pl-sm-2",
	"p-sm-3": "p-sm-3",
	"pt-sm-3": "pt-sm-3",
	"py-sm-3": "py-sm-3",
	"pr-sm-3": "pr-sm-3",
	"px-sm-3": "px-sm-3",
	"pb-sm-3": "pb-sm-3",
	"pl-sm-3": "pl-sm-3",
	"p-sm-4": "p-sm-4",
	"pt-sm-4": "pt-sm-4",
	"py-sm-4": "py-sm-4",
	"pr-sm-4": "pr-sm-4",
	"px-sm-4": "px-sm-4",
	"pb-sm-4": "pb-sm-4",
	"pl-sm-4": "pl-sm-4",
	"p-sm-5": "p-sm-5",
	"pt-sm-5": "pt-sm-5",
	"py-sm-5": "py-sm-5",
	"pr-sm-5": "pr-sm-5",
	"px-sm-5": "px-sm-5",
	"pb-sm-5": "pb-sm-5",
	"pl-sm-5": "pl-sm-5",
	"m-sm-n1": "m-sm-n1",
	"mt-sm-n1": "mt-sm-n1",
	"my-sm-n1": "my-sm-n1",
	"mr-sm-n1": "mr-sm-n1",
	"mx-sm-n1": "mx-sm-n1",
	"mb-sm-n1": "mb-sm-n1",
	"ml-sm-n1": "ml-sm-n1",
	"m-sm-n2": "m-sm-n2",
	"mt-sm-n2": "mt-sm-n2",
	"my-sm-n2": "my-sm-n2",
	"mr-sm-n2": "mr-sm-n2",
	"mx-sm-n2": "mx-sm-n2",
	"mb-sm-n2": "mb-sm-n2",
	"ml-sm-n2": "ml-sm-n2",
	"m-sm-n3": "m-sm-n3",
	"mt-sm-n3": "mt-sm-n3",
	"my-sm-n3": "my-sm-n3",
	"mr-sm-n3": "mr-sm-n3",
	"mx-sm-n3": "mx-sm-n3",
	"mb-sm-n3": "mb-sm-n3",
	"ml-sm-n3": "ml-sm-n3",
	"m-sm-n4": "m-sm-n4",
	"mt-sm-n4": "mt-sm-n4",
	"my-sm-n4": "my-sm-n4",
	"mr-sm-n4": "mr-sm-n4",
	"mx-sm-n4": "mx-sm-n4",
	"mb-sm-n4": "mb-sm-n4",
	"ml-sm-n4": "ml-sm-n4",
	"m-sm-n5": "m-sm-n5",
	"mt-sm-n5": "mt-sm-n5",
	"my-sm-n5": "my-sm-n5",
	"mr-sm-n5": "mr-sm-n5",
	"mx-sm-n5": "mx-sm-n5",
	"mb-sm-n5": "mb-sm-n5",
	"ml-sm-n5": "ml-sm-n5",
	"m-sm-auto": "m-sm-auto",
	"mt-sm-auto": "mt-sm-auto",
	"my-sm-auto": "my-sm-auto",
	"mr-sm-auto": "mr-sm-auto",
	"mx-sm-auto": "mx-sm-auto",
	"mb-sm-auto": "mb-sm-auto",
	"ml-sm-auto": "ml-sm-auto",
	"m-md-0": "m-md-0",
	"mt-md-0": "mt-md-0",
	"my-md-0": "my-md-0",
	"mr-md-0": "mr-md-0",
	"mx-md-0": "mx-md-0",
	"mb-md-0": "mb-md-0",
	"ml-md-0": "ml-md-0",
	"m-md-1": "m-md-1",
	"mt-md-1": "mt-md-1",
	"my-md-1": "my-md-1",
	"mr-md-1": "mr-md-1",
	"mx-md-1": "mx-md-1",
	"mb-md-1": "mb-md-1",
	"ml-md-1": "ml-md-1",
	"m-md-2": "m-md-2",
	"mt-md-2": "mt-md-2",
	"my-md-2": "my-md-2",
	"mr-md-2": "mr-md-2",
	"mx-md-2": "mx-md-2",
	"mb-md-2": "mb-md-2",
	"ml-md-2": "ml-md-2",
	"m-md-3": "m-md-3",
	"mt-md-3": "mt-md-3",
	"my-md-3": "my-md-3",
	"mr-md-3": "mr-md-3",
	"mx-md-3": "mx-md-3",
	"mb-md-3": "mb-md-3",
	"ml-md-3": "ml-md-3",
	"m-md-4": "m-md-4",
	"mt-md-4": "mt-md-4",
	"my-md-4": "my-md-4",
	"mr-md-4": "mr-md-4",
	"mx-md-4": "mx-md-4",
	"mb-md-4": "mb-md-4",
	"ml-md-4": "ml-md-4",
	"m-md-5": "m-md-5",
	"mt-md-5": "mt-md-5",
	"my-md-5": "my-md-5",
	"mr-md-5": "mr-md-5",
	"mx-md-5": "mx-md-5",
	"mb-md-5": "mb-md-5",
	"ml-md-5": "ml-md-5",
	"p-md-0": "p-md-0",
	"pt-md-0": "pt-md-0",
	"py-md-0": "py-md-0",
	"pr-md-0": "pr-md-0",
	"px-md-0": "px-md-0",
	"pb-md-0": "pb-md-0",
	"pl-md-0": "pl-md-0",
	"p-md-1": "p-md-1",
	"pt-md-1": "pt-md-1",
	"py-md-1": "py-md-1",
	"pr-md-1": "pr-md-1",
	"px-md-1": "px-md-1",
	"pb-md-1": "pb-md-1",
	"pl-md-1": "pl-md-1",
	"p-md-2": "p-md-2",
	"pt-md-2": "pt-md-2",
	"py-md-2": "py-md-2",
	"pr-md-2": "pr-md-2",
	"px-md-2": "px-md-2",
	"pb-md-2": "pb-md-2",
	"pl-md-2": "pl-md-2",
	"p-md-3": "p-md-3",
	"pt-md-3": "pt-md-3",
	"py-md-3": "py-md-3",
	"pr-md-3": "pr-md-3",
	"px-md-3": "px-md-3",
	"pb-md-3": "pb-md-3",
	"pl-md-3": "pl-md-3",
	"p-md-4": "p-md-4",
	"pt-md-4": "pt-md-4",
	"py-md-4": "py-md-4",
	"pr-md-4": "pr-md-4",
	"px-md-4": "px-md-4",
	"pb-md-4": "pb-md-4",
	"pl-md-4": "pl-md-4",
	"p-md-5": "p-md-5",
	"pt-md-5": "pt-md-5",
	"py-md-5": "py-md-5",
	"pr-md-5": "pr-md-5",
	"px-md-5": "px-md-5",
	"pb-md-5": "pb-md-5",
	"pl-md-5": "pl-md-5",
	"m-md-n1": "m-md-n1",
	"mt-md-n1": "mt-md-n1",
	"my-md-n1": "my-md-n1",
	"mr-md-n1": "mr-md-n1",
	"mx-md-n1": "mx-md-n1",
	"mb-md-n1": "mb-md-n1",
	"ml-md-n1": "ml-md-n1",
	"m-md-n2": "m-md-n2",
	"mt-md-n2": "mt-md-n2",
	"my-md-n2": "my-md-n2",
	"mr-md-n2": "mr-md-n2",
	"mx-md-n2": "mx-md-n2",
	"mb-md-n2": "mb-md-n2",
	"ml-md-n2": "ml-md-n2",
	"m-md-n3": "m-md-n3",
	"mt-md-n3": "mt-md-n3",
	"my-md-n3": "my-md-n3",
	"mr-md-n3": "mr-md-n3",
	"mx-md-n3": "mx-md-n3",
	"mb-md-n3": "mb-md-n3",
	"ml-md-n3": "ml-md-n3",
	"m-md-n4": "m-md-n4",
	"mt-md-n4": "mt-md-n4",
	"my-md-n4": "my-md-n4",
	"mr-md-n4": "mr-md-n4",
	"mx-md-n4": "mx-md-n4",
	"mb-md-n4": "mb-md-n4",
	"ml-md-n4": "ml-md-n4",
	"m-md-n5": "m-md-n5",
	"mt-md-n5": "mt-md-n5",
	"my-md-n5": "my-md-n5",
	"mr-md-n5": "mr-md-n5",
	"mx-md-n5": "mx-md-n5",
	"mb-md-n5": "mb-md-n5",
	"ml-md-n5": "ml-md-n5",
	"m-md-auto": "m-md-auto",
	"mt-md-auto": "mt-md-auto",
	"my-md-auto": "my-md-auto",
	"mr-md-auto": "mr-md-auto",
	"mx-md-auto": "mx-md-auto",
	"mb-md-auto": "mb-md-auto",
	"ml-md-auto": "ml-md-auto",
	"m-lg-0": "m-lg-0",
	"mt-lg-0": "mt-lg-0",
	"my-lg-0": "my-lg-0",
	"mr-lg-0": "mr-lg-0",
	"mx-lg-0": "mx-lg-0",
	"mb-lg-0": "mb-lg-0",
	"ml-lg-0": "ml-lg-0",
	"m-lg-1": "m-lg-1",
	"mt-lg-1": "mt-lg-1",
	"my-lg-1": "my-lg-1",
	"mr-lg-1": "mr-lg-1",
	"mx-lg-1": "mx-lg-1",
	"mb-lg-1": "mb-lg-1",
	"ml-lg-1": "ml-lg-1",
	"m-lg-2": "m-lg-2",
	"mt-lg-2": "mt-lg-2",
	"my-lg-2": "my-lg-2",
	"mr-lg-2": "mr-lg-2",
	"mx-lg-2": "mx-lg-2",
	"mb-lg-2": "mb-lg-2",
	"ml-lg-2": "ml-lg-2",
	"m-lg-3": "m-lg-3",
	"mt-lg-3": "mt-lg-3",
	"my-lg-3": "my-lg-3",
	"mr-lg-3": "mr-lg-3",
	"mx-lg-3": "mx-lg-3",
	"mb-lg-3": "mb-lg-3",
	"ml-lg-3": "ml-lg-3",
	"m-lg-4": "m-lg-4",
	"mt-lg-4": "mt-lg-4",
	"my-lg-4": "my-lg-4",
	"mr-lg-4": "mr-lg-4",
	"mx-lg-4": "mx-lg-4",
	"mb-lg-4": "mb-lg-4",
	"ml-lg-4": "ml-lg-4",
	"m-lg-5": "m-lg-5",
	"mt-lg-5": "mt-lg-5",
	"my-lg-5": "my-lg-5",
	"mr-lg-5": "mr-lg-5",
	"mx-lg-5": "mx-lg-5",
	"mb-lg-5": "mb-lg-5",
	"ml-lg-5": "ml-lg-5",
	"p-lg-0": "p-lg-0",
	"pt-lg-0": "pt-lg-0",
	"py-lg-0": "py-lg-0",
	"pr-lg-0": "pr-lg-0",
	"px-lg-0": "px-lg-0",
	"pb-lg-0": "pb-lg-0",
	"pl-lg-0": "pl-lg-0",
	"p-lg-1": "p-lg-1",
	"pt-lg-1": "pt-lg-1",
	"py-lg-1": "py-lg-1",
	"pr-lg-1": "pr-lg-1",
	"px-lg-1": "px-lg-1",
	"pb-lg-1": "pb-lg-1",
	"pl-lg-1": "pl-lg-1",
	"p-lg-2": "p-lg-2",
	"pt-lg-2": "pt-lg-2",
	"py-lg-2": "py-lg-2",
	"pr-lg-2": "pr-lg-2",
	"px-lg-2": "px-lg-2",
	"pb-lg-2": "pb-lg-2",
	"pl-lg-2": "pl-lg-2",
	"p-lg-3": "p-lg-3",
	"pt-lg-3": "pt-lg-3",
	"py-lg-3": "py-lg-3",
	"pr-lg-3": "pr-lg-3",
	"px-lg-3": "px-lg-3",
	"pb-lg-3": "pb-lg-3",
	"pl-lg-3": "pl-lg-3",
	"p-lg-4": "p-lg-4",
	"pt-lg-4": "pt-lg-4",
	"py-lg-4": "py-lg-4",
	"pr-lg-4": "pr-lg-4",
	"px-lg-4": "px-lg-4",
	"pb-lg-4": "pb-lg-4",
	"pl-lg-4": "pl-lg-4",
	"p-lg-5": "p-lg-5",
	"pt-lg-5": "pt-lg-5",
	"py-lg-5": "py-lg-5",
	"pr-lg-5": "pr-lg-5",
	"px-lg-5": "px-lg-5",
	"pb-lg-5": "pb-lg-5",
	"pl-lg-5": "pl-lg-5",
	"m-lg-n1": "m-lg-n1",
	"mt-lg-n1": "mt-lg-n1",
	"my-lg-n1": "my-lg-n1",
	"mr-lg-n1": "mr-lg-n1",
	"mx-lg-n1": "mx-lg-n1",
	"mb-lg-n1": "mb-lg-n1",
	"ml-lg-n1": "ml-lg-n1",
	"m-lg-n2": "m-lg-n2",
	"mt-lg-n2": "mt-lg-n2",
	"my-lg-n2": "my-lg-n2",
	"mr-lg-n2": "mr-lg-n2",
	"mx-lg-n2": "mx-lg-n2",
	"mb-lg-n2": "mb-lg-n2",
	"ml-lg-n2": "ml-lg-n2",
	"m-lg-n3": "m-lg-n3",
	"mt-lg-n3": "mt-lg-n3",
	"my-lg-n3": "my-lg-n3",
	"mr-lg-n3": "mr-lg-n3",
	"mx-lg-n3": "mx-lg-n3",
	"mb-lg-n3": "mb-lg-n3",
	"ml-lg-n3": "ml-lg-n3",
	"m-lg-n4": "m-lg-n4",
	"mt-lg-n4": "mt-lg-n4",
	"my-lg-n4": "my-lg-n4",
	"mr-lg-n4": "mr-lg-n4",
	"mx-lg-n4": "mx-lg-n4",
	"mb-lg-n4": "mb-lg-n4",
	"ml-lg-n4": "ml-lg-n4",
	"m-lg-n5": "m-lg-n5",
	"mt-lg-n5": "mt-lg-n5",
	"my-lg-n5": "my-lg-n5",
	"mr-lg-n5": "mr-lg-n5",
	"mx-lg-n5": "mx-lg-n5",
	"mb-lg-n5": "mb-lg-n5",
	"ml-lg-n5": "ml-lg-n5",
	"m-lg-auto": "m-lg-auto",
	"mt-lg-auto": "mt-lg-auto",
	"my-lg-auto": "my-lg-auto",
	"mr-lg-auto": "mr-lg-auto",
	"mx-lg-auto": "mx-lg-auto",
	"mb-lg-auto": "mb-lg-auto",
	"ml-lg-auto": "ml-lg-auto",
	"m-xl-0": "m-xl-0",
	"mt-xl-0": "mt-xl-0",
	"my-xl-0": "my-xl-0",
	"mr-xl-0": "mr-xl-0",
	"mx-xl-0": "mx-xl-0",
	"mb-xl-0": "mb-xl-0",
	"ml-xl-0": "ml-xl-0",
	"m-xl-1": "m-xl-1",
	"mt-xl-1": "mt-xl-1",
	"my-xl-1": "my-xl-1",
	"mr-xl-1": "mr-xl-1",
	"mx-xl-1": "mx-xl-1",
	"mb-xl-1": "mb-xl-1",
	"ml-xl-1": "ml-xl-1",
	"m-xl-2": "m-xl-2",
	"mt-xl-2": "mt-xl-2",
	"my-xl-2": "my-xl-2",
	"mr-xl-2": "mr-xl-2",
	"mx-xl-2": "mx-xl-2",
	"mb-xl-2": "mb-xl-2",
	"ml-xl-2": "ml-xl-2",
	"m-xl-3": "m-xl-3",
	"mt-xl-3": "mt-xl-3",
	"my-xl-3": "my-xl-3",
	"mr-xl-3": "mr-xl-3",
	"mx-xl-3": "mx-xl-3",
	"mb-xl-3": "mb-xl-3",
	"ml-xl-3": "ml-xl-3",
	"m-xl-4": "m-xl-4",
	"mt-xl-4": "mt-xl-4",
	"my-xl-4": "my-xl-4",
	"mr-xl-4": "mr-xl-4",
	"mx-xl-4": "mx-xl-4",
	"mb-xl-4": "mb-xl-4",
	"ml-xl-4": "ml-xl-4",
	"m-xl-5": "m-xl-5",
	"mt-xl-5": "mt-xl-5",
	"my-xl-5": "my-xl-5",
	"mr-xl-5": "mr-xl-5",
	"mx-xl-5": "mx-xl-5",
	"mb-xl-5": "mb-xl-5",
	"ml-xl-5": "ml-xl-5",
	"p-xl-0": "p-xl-0",
	"pt-xl-0": "pt-xl-0",
	"py-xl-0": "py-xl-0",
	"pr-xl-0": "pr-xl-0",
	"px-xl-0": "px-xl-0",
	"pb-xl-0": "pb-xl-0",
	"pl-xl-0": "pl-xl-0",
	"p-xl-1": "p-xl-1",
	"pt-xl-1": "pt-xl-1",
	"py-xl-1": "py-xl-1",
	"pr-xl-1": "pr-xl-1",
	"px-xl-1": "px-xl-1",
	"pb-xl-1": "pb-xl-1",
	"pl-xl-1": "pl-xl-1",
	"p-xl-2": "p-xl-2",
	"pt-xl-2": "pt-xl-2",
	"py-xl-2": "py-xl-2",
	"pr-xl-2": "pr-xl-2",
	"px-xl-2": "px-xl-2",
	"pb-xl-2": "pb-xl-2",
	"pl-xl-2": "pl-xl-2",
	"p-xl-3": "p-xl-3",
	"pt-xl-3": "pt-xl-3",
	"py-xl-3": "py-xl-3",
	"pr-xl-3": "pr-xl-3",
	"px-xl-3": "px-xl-3",
	"pb-xl-3": "pb-xl-3",
	"pl-xl-3": "pl-xl-3",
	"p-xl-4": "p-xl-4",
	"pt-xl-4": "pt-xl-4",
	"py-xl-4": "py-xl-4",
	"pr-xl-4": "pr-xl-4",
	"px-xl-4": "px-xl-4",
	"pb-xl-4": "pb-xl-4",
	"pl-xl-4": "pl-xl-4",
	"p-xl-5": "p-xl-5",
	"pt-xl-5": "pt-xl-5",
	"py-xl-5": "py-xl-5",
	"pr-xl-5": "pr-xl-5",
	"px-xl-5": "px-xl-5",
	"pb-xl-5": "pb-xl-5",
	"pl-xl-5": "pl-xl-5",
	"m-xl-n1": "m-xl-n1",
	"mt-xl-n1": "mt-xl-n1",
	"my-xl-n1": "my-xl-n1",
	"mr-xl-n1": "mr-xl-n1",
	"mx-xl-n1": "mx-xl-n1",
	"mb-xl-n1": "mb-xl-n1",
	"ml-xl-n1": "ml-xl-n1",
	"m-xl-n2": "m-xl-n2",
	"mt-xl-n2": "mt-xl-n2",
	"my-xl-n2": "my-xl-n2",
	"mr-xl-n2": "mr-xl-n2",
	"mx-xl-n2": "mx-xl-n2",
	"mb-xl-n2": "mb-xl-n2",
	"ml-xl-n2": "ml-xl-n2",
	"m-xl-n3": "m-xl-n3",
	"mt-xl-n3": "mt-xl-n3",
	"my-xl-n3": "my-xl-n3",
	"mr-xl-n3": "mr-xl-n3",
	"mx-xl-n3": "mx-xl-n3",
	"mb-xl-n3": "mb-xl-n3",
	"ml-xl-n3": "ml-xl-n3",
	"m-xl-n4": "m-xl-n4",
	"mt-xl-n4": "mt-xl-n4",
	"my-xl-n4": "my-xl-n4",
	"mr-xl-n4": "mr-xl-n4",
	"mx-xl-n4": "mx-xl-n4",
	"mb-xl-n4": "mb-xl-n4",
	"ml-xl-n4": "ml-xl-n4",
	"m-xl-n5": "m-xl-n5",
	"mt-xl-n5": "mt-xl-n5",
	"my-xl-n5": "my-xl-n5",
	"mr-xl-n5": "mr-xl-n5",
	"mx-xl-n5": "mx-xl-n5",
	"mb-xl-n5": "mb-xl-n5",
	"ml-xl-n5": "ml-xl-n5",
	"m-xl-auto": "m-xl-auto",
	"mt-xl-auto": "mt-xl-auto",
	"my-xl-auto": "my-xl-auto",
	"mr-xl-auto": "mr-xl-auto",
	"mx-xl-auto": "mx-xl-auto",
	"mb-xl-auto": "mb-xl-auto",
	"ml-xl-auto": "ml-xl-auto",
	"text-monospace": "text-monospace",
	"text-justify": "text-justify",
	"text-wrap": "text-wrap",
	"text-nowrap": "text-nowrap",
	"text-truncate": "text-truncate",
	"text-left": "text-left",
	"text-right": "text-right",
	"text-center": "text-center",
	"text-sm-left": "text-sm-left",
	"text-sm-right": "text-sm-right",
	"text-sm-center": "text-sm-center",
	"text-md-left": "text-md-left",
	"text-md-right": "text-md-right",
	"text-md-center": "text-md-center",
	"text-lg-left": "text-lg-left",
	"text-lg-right": "text-lg-right",
	"text-lg-center": "text-lg-center",
	"text-xl-left": "text-xl-left",
	"text-xl-right": "text-xl-right",
	"text-xl-center": "text-xl-center",
	"text-lowercase": "text-lowercase",
	"text-uppercase": "text-uppercase",
	"text-capitalize": "text-capitalize",
	"font-weight-light": "font-weight-light",
	"font-weight-lighter": "font-weight-lighter",
	"font-weight-normal": "font-weight-normal",
	"font-weight-bold": "font-weight-bold",
	"font-weight-bolder": "font-weight-bolder",
	"font-italic": "font-italic",
	"text-white": "text-white",
	"text-primary": "text-primary",
	"text-secondary": "text-secondary",
	"text-success": "text-success",
	"text-info": "text-info",
	"text-warning": "text-warning",
	"text-danger": "text-danger",
	"text-light": "text-light",
	"text-dark": "text-dark",
	"text-body": "text-body",
	"text-muted": "text-muted",
	"text-black-50": "text-black-50",
	"text-white-50": "text-white-50",
	"text-hide": "text-hide",
	"text-decoration-none": "text-decoration-none",
	"text-break": "text-break",
	"text-reset": "text-reset",
	"visible": "visible",
	"invisible": "invisible"
};

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_libs_redux_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/libs/redux/store */ "./src/libs/redux/store.js");
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/Layout */ "./src/components/Layout.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../static/style.css */ "./static/style.css");
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_style_css__WEBPACK_IMPORTED_MODULE_14__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }










class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_8___default.a {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  static async getInitialProps({
    Component,
    ctx
  }) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    return {
      pageProps: _objectSpread({}, Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    };
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    console.log("this is page props : ", pageProps);
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_10__["Provider"], {
      store: Object(_src_libs_redux_store__WEBPACK_IMPORTED_MODULE_11__["initStore"])()
    }, __jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], null, __jsx(Component, pageProps)));
  }

}

const mapStateToProps = state => ({
  lang: state.lang
});

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9___default()(_src_libs_redux_store__WEBPACK_IMPORTED_MODULE_11__["initStore"], mapStateToProps)(MyApp));

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Layout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      className: "container layout"
    }, this.props.children);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/libs/redux/store.js":
/*!*********************************!*\
  !*** ./src/libs/redux/store.js ***!
  \*********************************/
/*! exports provided: actionTypes, reducer, setLanguage, initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLanguage", function() { return setLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_4__);





const initialLanguage = {
  lang: 'th'
};
const actionTypes = {
  SET_LANGUAGE: 'SET_LANGUAGE'
}; // REDUCERS

const reducer = (state = initialLanguage, action) => {
  switch (action.type) {
    case actionTypes.SET_LANGUAGE:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        lang: action.lang
      });

    default:
      return state;
  }
}; // ACTIONS

const setLanguage = lang => dispatch => {
  return dispatch({
    type: actionTypes.SET_LANGUAGE,
    lang
  });
};
const initStore = (initialState = initialLanguage) => Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a, redux_logger__WEBPACK_IMPORTED_MODULE_4___default.a)));

/***/ }),

/***/ "./static/style.css":
/*!**************************!*\
  !*** ./static/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"layout": "layout"
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map