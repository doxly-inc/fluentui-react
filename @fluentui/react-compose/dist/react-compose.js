var FluentCompose =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/tslib/tslib.es6.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "../set-version/lib/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setVersion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../set-version/lib/setVersion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setVersion", function() { return _setVersion__WEBPACK_IMPORTED_MODULE_0__["setVersion"]; });



Object(_setVersion__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@uifabric/set-version', '6.0.0');


/***/ }),

/***/ "../set-version/lib/setVersion.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVersion", function() { return setVersion; });
// A packages cache that makes sure that we don't inject the same packageName twice in the same bundle -
// this cache is local to the module closure inside this bundle
var packagesCache = {};
// Cache access to window to avoid IE11 memory leak.
var _win = undefined;
try {
    _win = window;
}
catch (e) {
    /* no-op */
}
function setVersion(packageName, packageVersion) {
    if (typeof _win !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var packages = (_win.__packages__ = _win.__packages__ || {});
        // We allow either the global packages or local packages caches to invalidate so testing can
        // just clear the global to set this state
        if (!packages[packageName] || !packagesCache[packageName]) {
            packagesCache[packageName] = packageVersion;
            var versions = (packages[packageName] = packages[packageName] || []);
            versions.push(packageVersion);
        }
    }
}


/***/ }),

/***/ "./lib/appendClasses.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendClasses", function() { return appendClasses; });
function appendClasses() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    var result = '';
    for (var _a = 0, classes_1 = classes; _a < classes_1.length; _a++) {
        var className = classes_1[_a];
        if (className) {
            result = (result ? result + " " : '') + className;
        }
    }
    return result;
}


/***/ }),

/***/ "./lib/compose.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wasComposedPreviously__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./lib/wasComposedPreviously.js");
/* harmony import */ var _mergeComposeOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./lib/mergeComposeOptions.js");




function compose(input, inputOptions) {
    if (inputOptions === void 0) { inputOptions = {}; }
    var composeOptions = Object(_mergeComposeOptions__WEBPACK_IMPORTED_MODULE_3__["mergeComposeOptions"])(input, inputOptions, Object(_wasComposedPreviously__WEBPACK_IMPORTED_MODULE_2__["wasComposedPreviously"])(input) ? input.fluentComposeConfig : undefined);
    var Component = react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, ref) {
        return composeOptions.render(props, ref, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, composeOptions), { state: composeOptions.state(props, ref, composeOptions), slots: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, composeOptions.slots), { __self: Component }) }));
    });
    Component.displayName = composeOptions.displayName;
    if (input.defaultProps) {
        Component.defaultProps = input.defaultProps;
    }
    Component.fluentComposeConfig = composeOptions;
    return Component;
}
/* harmony default export */ __webpack_exports__["default"] = (compose);


/***/ }),

/***/ "./lib/computeDisplayNames.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeDisplayNames", function() { return computeDisplayNames; });
/**
 * Given input/parent options, which are both assumed to be defined and populated with
 * displayNames array, return a string array of display names.
 */
function computeDisplayNames(inputOptions, parentOptions) {
    if (inputOptions.overrideStyles) {
        return [inputOptions.displayName].filter(Boolean);
    }
    // To support styles composition we need to properly pick up display names
    return inputOptions.displayName
        ? parentOptions.displayNames.concat(inputOptions.displayName)
        : parentOptions.displayNames;
}


/***/ }),

/***/ "./lib/createClassResolver.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClassResolver", function() { return createClassResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResolvedMap", function() { return createResolvedMap; });
/* harmony import */ var _appendClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./lib/appendClasses.js");

/**
 * `createClassResolver` is a factory function which creates a state to classmap resolver for
 * slot specific class names. It can be used in conjunction with the `compose` option `classes` to
 * inject css modules without writing cx(...) logic manually distributing classnames.
 *
 * Class names which map to slots are automatically distributed to correct slot props.
 *
 * Class names with an underscore are interpretted as enum matchable classes. For example,
 * the class "size_large" would be applied to the `root` slot when the component's state contains
 * a prop `size` with a value `large`.
 *
 * Remaining class names would be interpretted as modifiers, applied to the `root` slot when
 * the component `state` contains a truthy matching prop name.
 */
var createClassResolver = function (classes) {
    // This is in creation time, so this will happen once per css file.
    var _a = createResolvedMap(classes), slots = _a.slots, modifiers = _a.modifiers, enums = _a.enums;
    // Everything in the function below will happen at runtime, so it's very critical that this
    // code is as minimal as possible.
    return function classResolver(state) {
        var resolvedClasses = {};
        var modifierClasses = '';
        for (var _i = 0, _a = Object.keys(modifiers); _i < _a.length; _i++) {
            var modifierName = _a[_i];
            if (state[modifierName]) {
                modifierClasses = Object(_appendClasses__WEBPACK_IMPORTED_MODULE_0__["appendClasses"])(modifierClasses, modifiers[modifierName]);
            }
        }
        var enumClasses = '';
        for (var _b = 0, _c = Object.keys(enums); _b < _c.length; _b++) {
            var enumName = _c[_b];
            var enumValues = enums[enumName];
            // if we have a class which matches the enumName and current state value, add it.
            if (enumValues[state[enumName]]) {
                enumClasses = Object(_appendClasses__WEBPACK_IMPORTED_MODULE_0__["appendClasses"])(enumClasses, enumValues[state[enumName]]);
            }
        }
        for (var _d = 0, _e = Object.keys(slots); _d < _e.length; _d++) {
            var slotName = _e[_d];
            resolvedClasses[slotName] = Object(_appendClasses__WEBPACK_IMPORTED_MODULE_0__["appendClasses"])(slots[slotName], modifierClasses, enumClasses);
        }
        return resolvedClasses;
    };
};
/**
 * Helper to take a css module map and translate it into { slots, modifiers, enums } where
 * slots are a matched name in the slotNames array, enums have underscores splitting the matched
 * name/value, and modifiers are everything else. Creating this split definition keeps runtime
 * resolution work to a minimum.
 */
function createResolvedMap(classes) {
    var resolvedMap = {
        slots: {},
        modifiers: {},
        enums: {},
    };
    var slots = resolvedMap.slots, modifiers = resolvedMap.modifiers, enums = resolvedMap.enums;
    // Iterate through classes
    Object.keys(classes).forEach(function (key) {
        var classValue = classes[key];
        if (classValue) {
            var classParts = key.split('_');
            // If the class is named the same as a slot, add it to the slot.
            switch (classParts.length) {
                case 2: // modifier (_modifierName)
                    modifiers[classParts[1]] = classValue;
                    break;
                case 3: // enum (_enumName_enumValue)
                    var enumName = classParts[1];
                    var enumValue = classParts[2];
                    var enumValues = (enums[enumName] = enums[enumName] || {});
                    enumValues[enumValue] = classValue;
                    break;
                default:
                    // slot (root)
                    slots[key] = classValue;
            }
        }
    });
    return resolvedMap;
}


/***/ }),

/***/ "./lib/defaultComposeOptions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultComposeOptions", function() { return defaultComposeOptions; });
var defaultComposeOptions = {
    className:  false ? undefined : 'no-classname-????',
    classes: [],
    displayName: '',
    displayNames: [],
    mapPropsToStylesPropsChain: [],
    render: function () { return null; },
    handledProps: [],
    overrideStyles: false,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    slots: { __self: function () { return null; } },
    slotProps: [],
    state: function (props) { return props; },
    resolveSlotProps: function () { return ({}); },
    shorthandConfig: {},
};


/***/ }),

/***/ "./lib/defaultMappedProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMappedProps", function() { return defaultMappedProps; });
/**
 * A set of mapped props for intrinsic element types.
 */
var defaultMappedProps = {
    iframe: 'src',
    img: 'src',
    input: 'type',
};


/***/ }),

/***/ "./lib/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./lib/compose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createClassResolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./lib/createClassResolver.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createClassResolver", function() { return _createClassResolver__WEBPACK_IMPORTED_MODULE_1__["createClassResolver"]; });

/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./lib/mergeProps.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return _mergeProps__WEBPACK_IMPORTED_MODULE_2__["mergeProps"]; });

/* harmony import */ var _mergeSlotProp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./lib/mergeSlotProp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeSlotProp", function() { return _mergeSlotProp__WEBPACK_IMPORTED_MODULE_3__["mergeSlotProp"]; });

/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./lib/version.js");







/***/ }),

/***/ "./lib/mergeComposeOptions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeComposeOptions", function() { return mergeComposeOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _computeDisplayNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./lib/computeDisplayNames.js");
/* harmony import */ var _defaultComposeOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./lib/defaultComposeOptions.js");



function mergeComposeOptions(input, inputOptions, parentOptions) {
    if (parentOptions === void 0) { parentOptions = _defaultComposeOptions__WEBPACK_IMPORTED_MODULE_2__["defaultComposeOptions"]; }
    var mapPropsToSlotPropsChain = inputOptions.slotProps
        ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(parentOptions.slotProps, [inputOptions.slotProps]) : parentOptions.slotProps;
    var resolveSlotProps = function (props) {
        return mapPropsToSlotPropsChain.reduce(function (acc, definition) {
            var nextProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, definition(props));
            var slots = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(Object.keys(acc), Object.keys(nextProps));
            var mergedSlotProps = {};
            slots.forEach(function (slot) {
                if (!mergedSlotProps[slot]) {
                    mergedSlotProps[slot] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, acc[slot]), nextProps[slot]);
                }
            });
            return mergedSlotProps;
        }, {});
    };
    var inputClasses = Array.isArray(inputOptions.classes) ? inputOptions.classes : [inputOptions.classes];
    var state = function (props, ref, options) {
        if (inputOptions.state) {
            return inputOptions.state(parentOptions.state(props, ref, options), ref, options);
        }
        return parentOptions.state(props, ref, options);
    };
    return {
        className: inputOptions.className || parentOptions.className,
        classes: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(parentOptions.classes, inputClasses),
        displayName: inputOptions.displayName || parentOptions.displayName,
        displayNames: Object(_computeDisplayNames__WEBPACK_IMPORTED_MODULE_1__["computeDisplayNames"])(inputOptions, parentOptions),
        mapPropsToStylesPropsChain: inputOptions.mapPropsToStylesProps
            ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(parentOptions.mapPropsToStylesPropsChain, [inputOptions.mapPropsToStylesProps]) : parentOptions.mapPropsToStylesPropsChain,
        render: typeof input === 'function' ? input : parentOptions.render,
        handledProps: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(parentOptions.handledProps, (inputOptions.handledProps || [])),
        overrideStyles: inputOptions.overrideStyles || false,
        slots: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, parentOptions.slots), inputOptions.slots),
        slotProps: mapPropsToSlotPropsChain,
        state: state,
        resolveSlotProps: resolveSlotProps,
        shorthandConfig: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, parentOptions.shorthandConfig), inputOptions.shorthandConfig),
    };
}


/***/ }),

/***/ "./lib/mergeProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return mergeProps; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _resolveClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./lib/resolveClasses.js");
/* harmony import */ var _resolveSlotProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./lib/resolveSlotProps.js");



/**
 * Merge props takes in state and compose options, and resolves slots and slotProps.
 * It's expected that the component will call mergeProps(state, options) from within
 * render; after resolving state and before rendering slots and slotProps.
 */
function mergeProps(state, options) {
    var result = {
        state: state,
        slots: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.slots), { 
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            root: state.as || options.slots.root || 'div' }),
        slotProps: {},
    };
    // Resolve classes.
    Object(_resolveClasses__WEBPACK_IMPORTED_MODULE_1__["resolveClasses"])(result, options.classes);
    // Resolve slotProps/slots from state.
    Object(_resolveSlotProps__WEBPACK_IMPORTED_MODULE_2__["resolveSlotProps"])(result, options);
    // TODO: Resolve inline styles.
    return result;
}


/***/ }),

/***/ "./lib/mergeSlotProp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeSlotProp", function() { return mergeSlotProp; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Merge props for a slot to a slot prop.
 * @param slotProp - Slot prop.
 * @param slotProps - Props for the slot.
 * @param mappedProp - Optional mapped prop name for the slotProp after merging.
 */
function mergeSlotProp(slotProp, slotProps, mappedProp) {
    var _a;
    if (mappedProp === void 0) { mappedProp = 'children'; }
    if (typeof slotProp === 'object' && !react__WEBPACK_IMPORTED_MODULE_1__["isValidElement"](slotProp)) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, slotProp), slotProps);
    }
    else {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_a = {}, _a[mappedProp] = slotProp, _a), slotProps);
    }
}


/***/ }),

/***/ "./lib/resolveClasses.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveClasses", function() { return resolveClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendToSlotClassName", function() { return appendToSlotClassName; });
/* harmony import */ var _appendClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./lib/appendClasses.js");

/**
 * Helper utility which takes in a classes array from compose options, resolves functions,
 * merges them into a final result, and distributes classnames to slotProps within the given
 * resolver result object.
 */
function resolveClasses(result, classes) {
    var state = result.state, slots = result.slots, slotProps = result.slotProps;
    for (var _i = 0, classes_1 = classes; _i < classes_1.length; _i++) {
        var classFunctionOrObject = classes_1[_i];
        var classObj = 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typeof classFunctionOrObject === 'function' ? classFunctionOrObject(state, slots) : classFunctionOrObject;
        if (classObj) {
            for (var _a = 0, _b = Object.keys(classObj); _a < _b.length; _a++) {
                var slotName = _b[_a];
                if (classObj[slotName] && slots[slotName]) {
                    appendToSlotClassName(slotProps, slotName, classObj[slotName]);
                }
            }
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    appendToSlotClassName(slotProps, 'root', state.className);
    return result;
}
function appendToSlotClassName(slotProps, slotName, className) {
    if (className) {
        var slot = (slotProps[slotName] = slotProps[slotName] || {});
        slot.className = Object(_appendClasses__WEBPACK_IMPORTED_MODULE_0__["appendClasses"])(slot.className, className);
    }
}


/***/ }),

/***/ "./lib/resolveSlotProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullRender", function() { return NullRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveSlotProps", function() { return resolveSlotProps; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultMappedProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./lib/defaultMappedProps.js");
/* harmony import */ var _mergeSlotProp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./lib/mergeSlotProp.js");




var NullRender = function () { return null; };
/**
 * Helper utility which resolves the slots and slot props derived from user input.
 */
function resolveSlotProps(result, options) {
    var state = result.state, slots = result.slots, slotProps = result.slotProps;
    // Derive the default slot props from the config, if provided.
    options.slotProps.forEach(function (definition) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var nextSlotProps = definition(state);
        Object.keys(nextSlotProps).forEach(function (key) {
            slotProps[key] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, slotProps[key]), nextSlotProps[key]);
        });
    });
    //  Mix unrecognized props onto root, appropriate, excluding the handled props.
    assignToMapObject(slotProps, 'root', getUnhandledProps(state, options));
    // Iterate through slots and resolve shorthand values.
    Object.keys(slots).forEach(function (slotName) {
        var slot = slots[slotName];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var slotProp = state[slotName];
        if (slot && slotProp !== undefined && slotProp !== null) {
            var mergedSlotProp = Object(_mergeSlotProp__WEBPACK_IMPORTED_MODULE_3__["mergeSlotProp"])(slotProp, slotProps[slotName], (slot && slot.shorthandConfig && slot.shorthandConfig.mappedProp) || _defaultMappedProps__WEBPACK_IMPORTED_MODULE_2__["defaultMappedProps"][slot]);
            if (typeof mergedSlotProp.children === 'function') {
                var children = slotProp.children, restProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(slotProp, ["children"]);
                // If the children is a function, replace the slot.
                slots[slotName] = react__WEBPACK_IMPORTED_MODULE_1__["Fragment"];
                slotProps[slotName] = {
                    children: slotProp.children(slot, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, slotProps[slotName]), restProps)),
                };
            }
            else {
                slotProps[slotName] = mergedSlotProp;
            }
        }
        // Ensure no slots are falsey
        if (!slots[slotName] || slotProp === null) {
            slots[slotName] = NullRender;
        }
    });
    return result;
}
function assignToMapObject(map, key, value) {
    if (value) {
        if (!map[key]) {
            map[key] = {};
        }
        map[key] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, map[key]), value);
    }
}
function getUnhandledProps(props, options) {
    var unhandledProps = {};
    var slots = Object.keys(options.slots);
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        if (key !== 'className' &&
            key !== 'as' &&
            options.handledProps.indexOf(key) === -1 &&
            slots.indexOf(key) === -1) {
            unhandledProps[key] = props[key];
        }
    }
    return unhandledProps;
}


/***/ }),

/***/ "./lib/version.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../set-version/lib/index.js");
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.

Object(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@fluentui/react-compose', '0.19.14');


/***/ }),

/***/ "./lib/wasComposedPreviously.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wasComposedPreviously", function() { return wasComposedPreviously; });
/**
 * compose() allows you to pass two inputs:
 * - React.forwardRef + static fluentComposeConfig, i.e. previously composed component
 * - a function
 */
function wasComposedPreviously(input) {
    return !!input.fluentComposeConfig;
}


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = React;

/***/ })

/******/ });
//# sourceMappingURL=react-compose.js.map