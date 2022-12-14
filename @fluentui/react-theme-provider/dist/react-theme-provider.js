var FluentUIReactThemeProvider =
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

/***/ "../../node_modules/object-assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../../node_modules/prop-types/checkPropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__("../../node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../../node_modules/react/cjs/react.development.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__("../../node_modules/object-assign/index.js");
var checkPropTypes = __webpack_require__("../../node_modules/prop-types/checkPropTypes.js");

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.8.6';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;

var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function () {};

{
  validateFormat = function (format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error = void 0;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

// Relying on the `invariant()` implementation lets us
// preserve the format and params in the www builds.

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format);

      // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';
  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');
    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);
        if (match) {
          var pathBeforeSlash = match[1];
          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }
    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }
  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var Resolved = 1;


function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }
  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }
  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_CONCURRENT_MODE_TYPE:
      return 'ConcurrentMode';
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_SUSPENSE_TYPE:
      return 'Suspense';
  }
  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';
      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';
      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');
      case REACT_MEMO_TYPE:
        return getComponentName(type.type);
      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);
          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }
        }
    }
  }
  return null;
}

var ReactDebugCurrentFrame = {};

var currentlyValidatingElement = null;

function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = '';

    // Add an extra top frame while an element is being validated
    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    }

    // Delegate to the injected renderer-specific implementation
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentOwner: ReactCurrentOwner,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };

  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    };
    // $FlowFixMe: Flow complains about not setting a value, which is intentional here
    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;
            warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }
          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;
            warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }
          return context.Consumer;
        }
      }
    });
    // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps = void 0;
    var propTypes = void 0;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          defaultProps = newDefaultProps;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          propTypes = newPropTypes;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      !(
      // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
    }

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;
  !(dispatcher !== null) ? invariant(false, 'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.') : void 0;
  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();
  {
    !(unstable_observedBits === undefined) ? warning$1(false, 'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '') : void 0;

    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context;
      // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.
      if (realContext.Consumer === Context) {
        warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }
  return dispatcher.useContext(Context, unstable_observedBits);
}

function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}

function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}

function useEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, inputs);
}

function useLayoutEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, inputs);
}

function useCallback(callback, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, inputs);
}

function useMemo(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, inputs);
}

function useImperativeHandle(ref, create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, inputs);
}

function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var propTypesMisspellWarningShown = void 0;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
  }

  setCurrentlyValidatingElement(element);
  {
    warning$1(false, 'Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }
  setCurrentlyValidatingElement(null);
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var type = element.type;
  if (type === null || type === undefined || typeof type === 'string') {
    return;
  }
  var name = getComponentName(type);
  var propTypes = void 0;
  if (typeof type === 'function') {
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
  // Note: Memo only checks outer props here.
  // Inner props are checked in the reconciler.
  type.$$typeof === REACT_MEMO_TYPE)) {
    propTypes = type.propTypes;
  } else {
    return;
  }
  if (propTypes) {
    setCurrentlyValidatingElement(element);
    checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
    setCurrentlyValidatingElement(null);
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  setCurrentlyValidatingElement(fragment);

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
      break;
    }
  }

  if (fragment.ref !== null) {
    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
  }

  setCurrentlyValidatingElement(null);
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


// Gather advanced timing metrics for Profiler subtrees.


// Trace which interactions trigger each commit.


// Only used in www builds.
 // TODO: true? Here it might just be false.

// Only used in www builds.


// Only used in www builds.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties


// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
var enableStableConcurrentModeAPIs = false;

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,
  lazy: lazy,
  memo: memo,

  useCallback: useCallback,
  useContext: useContext,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useDebugValue: useDebugValue,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  unstable_ConcurrentMode: REACT_CONCURRENT_MODE_TYPE,
  unstable_Profiler: REACT_PROFILER_TYPE,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};

// Note: some APIs are added with feature flags.
// Make sure that stable builds for open source
// don't modify the React object to avoid deopts.
// Also let's not expose their names in stable builds.

if (enableStableConcurrentModeAPIs) {
  React.ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  React.Profiler = REACT_PROFILER_TYPE;
  React.unstable_ConcurrentMode = undefined;
  React.unstable_Profiler = undefined;
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3.default || React$3;

module.exports = react;
  })();
}


/***/ }),

/***/ "../../node_modules/react/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__("../../node_modules/react/cjs/react.development.js");
}


/***/ }),

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

/***/ "../dom-utilities/lib/elementContains.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementContains", function() { return elementContains; });
/* harmony import */ var _getParent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../dom-utilities/lib/getParent.js");

/**
 * Determines whether or not a parent element contains a given child element.
 * If `allowVirtualParents` is true, this method may return `true` if the child
 * has the parent in its virtual element hierarchy.
 *
 * @public
 */
function elementContains(parent, child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    var isContained = false;
    if (parent && child) {
        if (allowVirtualParents) {
            if (parent === child) {
                isContained = true;
            }
            else {
                isContained = false;
                while (child) {
                    var nextParent = Object(_getParent__WEBPACK_IMPORTED_MODULE_0__["getParent"])(child);
                    if (nextParent === parent) {
                        isContained = true;
                        break;
                    }
                    child = nextParent;
                }
            }
        }
        else if (parent.contains) {
            isContained = parent.contains(child);
        }
    }
    return isContained;
}


/***/ }),

/***/ "../dom-utilities/lib/elementContainsAttribute.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementContainsAttribute", function() { return elementContainsAttribute; });
/* harmony import */ var _findElementRecursive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../dom-utilities/lib/findElementRecursive.js");

/**
 * Determines if an element, or any of its ancestors, contain the given attribute
 * @param element - element to start searching at
 * @param attribute - the attribute to search for
 * @returns the value of the first instance found
 */
function elementContainsAttribute(element, attribute) {
    var elementMatch = Object(_findElementRecursive__WEBPACK_IMPORTED_MODULE_0__["findElementRecursive"])(element, function (testElement) { return testElement.hasAttribute(attribute); });
    return elementMatch && elementMatch.getAttribute(attribute);
}


/***/ }),

/***/ "../dom-utilities/lib/findElementRecursive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findElementRecursive", function() { return findElementRecursive; });
/* harmony import */ var _getParent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../dom-utilities/lib/getParent.js");

/**
 * Finds the first parent element where the matchFunction returns true
 * @param element - element to start searching at
 * @param matchFunction - the function that determines if the element is a match
 * @returns the matched element or null no match was found
 */
function findElementRecursive(element, matchFunction) {
    if (!element || element === document.body) {
        return null;
    }
    return matchFunction(element) ? element : findElementRecursive(Object(_getParent__WEBPACK_IMPORTED_MODULE_0__["getParent"])(element), matchFunction);
}


/***/ }),

/***/ "../dom-utilities/lib/getChildren.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return getChildren; });
/* harmony import */ var _isVirtualElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../dom-utilities/lib/isVirtualElement.js");

/**
 * Gets the elements which are child elements of the given element.
 * If `allowVirtualChildren` is `true`, this method enumerates virtual child elements
 * after the original children.
 * @param parent - The element to get the children of.
 * @param allowVirtualChildren - true if the method should enumerate virtual child elements.
 */
function getChildren(parent, allowVirtualChildren) {
    if (allowVirtualChildren === void 0) { allowVirtualChildren = true; }
    var children = [];
    if (parent) {
        for (var i = 0; i < parent.children.length; i++) {
            children.push(parent.children.item(i));
        }
        if (allowVirtualChildren && Object(_isVirtualElement__WEBPACK_IMPORTED_MODULE_0__["isVirtualElement"])(parent)) {
            children.push.apply(children, parent._virtual.children);
        }
    }
    return children;
}


/***/ }),

/***/ "../dom-utilities/lib/getParent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return getParent; });
/* harmony import */ var _getVirtualParent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../dom-utilities/lib/getVirtualParent.js");

/**
 * Gets the element which is the parent of a given element.
 * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
 * real DOM parent when present.
 *
 * @public
 */
function getParent(child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    return (child &&
        ((allowVirtualParents && Object(_getVirtualParent__WEBPACK_IMPORTED_MODULE_0__["getVirtualParent"])(child)) || (child.parentNode && child.parentNode)));
}


/***/ }),

/***/ "../dom-utilities/lib/getVirtualParent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVirtualParent", function() { return getVirtualParent; });
/* harmony import */ var _isVirtualElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../dom-utilities/lib/isVirtualElement.js");

/**
 * Gets the virtual parent given the child element, if it exists.
 *
 * @public
 */
function getVirtualParent(child) {
    var parent;
    if (child && Object(_isVirtualElement__WEBPACK_IMPORTED_MODULE_0__["isVirtualElement"])(child)) {
        parent = child._virtual.parent;
    }
    return parent;
}


/***/ }),

/***/ "../dom-utilities/lib/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elementContains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../dom-utilities/lib/elementContains.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContains", function() { return _elementContains__WEBPACK_IMPORTED_MODULE_0__["elementContains"]; });

/* harmony import */ var _elementContainsAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../dom-utilities/lib/elementContainsAttribute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContainsAttribute", function() { return _elementContainsAttribute__WEBPACK_IMPORTED_MODULE_1__["elementContainsAttribute"]; });

/* harmony import */ var _findElementRecursive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../dom-utilities/lib/findElementRecursive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findElementRecursive", function() { return _findElementRecursive__WEBPACK_IMPORTED_MODULE_2__["findElementRecursive"]; });

/* harmony import */ var _getChildren__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../dom-utilities/lib/getChildren.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return _getChildren__WEBPACK_IMPORTED_MODULE_3__["getChildren"]; });

/* harmony import */ var _getParent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../dom-utilities/lib/getParent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return _getParent__WEBPACK_IMPORTED_MODULE_4__["getParent"]; });

/* harmony import */ var _getVirtualParent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../dom-utilities/lib/getVirtualParent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVirtualParent", function() { return _getVirtualParent__WEBPACK_IMPORTED_MODULE_5__["getVirtualParent"]; });

/* harmony import */ var _isVirtualElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../dom-utilities/lib/isVirtualElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVirtualElement", function() { return _isVirtualElement__WEBPACK_IMPORTED_MODULE_6__["isVirtualElement"]; });

/* harmony import */ var _portalContainsElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../dom-utilities/lib/portalContainsElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "portalContainsElement", function() { return _portalContainsElement__WEBPACK_IMPORTED_MODULE_7__["portalContainsElement"]; });

/* harmony import */ var _setPortalAttribute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../dom-utilities/lib/setPortalAttribute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_PORTAL_ATTRIBUTE", function() { return _setPortalAttribute__WEBPACK_IMPORTED_MODULE_8__["DATA_PORTAL_ATTRIBUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPortalAttribute", function() { return _setPortalAttribute__WEBPACK_IMPORTED_MODULE_8__["setPortalAttribute"]; });

/* harmony import */ var _setVirtualParent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../dom-utilities/lib/setVirtualParent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setVirtualParent", function() { return _setVirtualParent__WEBPACK_IMPORTED_MODULE_9__["setVirtualParent"]; });













/***/ }),

/***/ "../dom-utilities/lib/isVirtualElement.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVirtualElement", function() { return isVirtualElement; });
/**
 * Determines whether or not an element has the virtual hierarchy extension.
 *
 * @public
 */
function isVirtualElement(element) {
    return element && !!element._virtual;
}


/***/ }),

/***/ "../dom-utilities/lib/portalContainsElement.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portalContainsElement", function() { return portalContainsElement; });
/* harmony import */ var _findElementRecursive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../dom-utilities/lib/findElementRecursive.js");
/* harmony import */ var _setPortalAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../dom-utilities/lib/setPortalAttribute.js");


/**
 * Determine whether a target is within a portal from perspective of root or optional parent.
 * This function only works against portal components that use the setPortalAttribute function.
 * If both parent and child are within the same portal this function will return false.
 * @param target - Element to query portal containment status of.
 * @param parent - Optional parent perspective. Search for containing portal stops at parent
 * (or root if parent is undefined or invalid.)
 */
function portalContainsElement(target, parent) {
    var elementMatch = Object(_findElementRecursive__WEBPACK_IMPORTED_MODULE_0__["findElementRecursive"])(target, function (testElement) { return parent === testElement || testElement.hasAttribute(_setPortalAttribute__WEBPACK_IMPORTED_MODULE_1__["DATA_PORTAL_ATTRIBUTE"]); });
    return elementMatch !== null && elementMatch.hasAttribute(_setPortalAttribute__WEBPACK_IMPORTED_MODULE_1__["DATA_PORTAL_ATTRIBUTE"]);
}


/***/ }),

/***/ "../dom-utilities/lib/setPortalAttribute.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_PORTAL_ATTRIBUTE", function() { return DATA_PORTAL_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPortalAttribute", function() { return setPortalAttribute; });
var DATA_PORTAL_ATTRIBUTE = 'data-portal-element';
/**
 * Identify element as a portal by setting an attribute.
 * @param element - Element to mark as a portal.
 */
function setPortalAttribute(element) {
    element.setAttribute(DATA_PORTAL_ATTRIBUTE, 'true');
}


/***/ }),

/***/ "../dom-utilities/lib/setVirtualParent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVirtualParent", function() { return setVirtualParent; });
/**
 * Sets the virtual parent of an element.
 * Pass `undefined` as the `parent` to clear the virtual parent.
 *
 * @public
 */
function setVirtualParent(child, parent) {
    var virtualChild = child;
    var virtualParent = parent;
    if (!virtualChild._virtual) {
        virtualChild._virtual = {
            children: [],
        };
    }
    var oldParent = virtualChild._virtual.parent;
    if (oldParent && oldParent !== parent) {
        // Remove the child from its old parent.
        var index = oldParent._virtual.children.indexOf(virtualChild);
        if (index > -1) {
            oldParent._virtual.children.splice(index, 1);
        }
    }
    virtualChild._virtual.parent = virtualParent || undefined;
    if (virtualParent) {
        if (!virtualParent._virtual) {
            virtualParent._virtual = {
                children: [],
            };
        }
        virtualParent._virtual.children.push(virtualChild);
    }
}


/***/ }),

/***/ "../merge-styles/lib/StyleOptionsState.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRTL", function() { return setRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRTL", function() { return getRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyleOptions", function() { return getStyleOptions; });
/**
 * Sets the current RTL value.
 */
function setRTL(isRTL) {
    if (_rtl !== isRTL) {
        _rtl = isRTL;
    }
}
/**
 * Gets the current RTL value.
 */
function getRTL() {
    if (_rtl === undefined) {
        _rtl =
            typeof document !== 'undefined' &&
                !!document.documentElement &&
                document.documentElement.getAttribute('dir') === 'rtl';
    }
    return _rtl;
}
// This has been split into 2 lines because it was working in Fabric due to the code being transpiled to es5, so this
// was converted to var while not working in Fluent that uses babel to transpile the code to be es6-like. Splitting the
// logic into two lines, however, allows it to work in both scenarios.
var _rtl;
_rtl = getRTL();
function getStyleOptions() {
    return {
        rtl: getRTL(),
    };
}


/***/ }),

/***/ "../merge-styles/lib/Stylesheet.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectionMode", function() { return InjectionMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stylesheet", function() { return Stylesheet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");

var InjectionMode = {
    /**
     * Avoids style injection, use getRules() to read the styles.
     */
    none: 0,
    /**
     * Inserts rules using the insertRule api.
     */
    insertNode: 1,
    /**
     * Appends rules using appendChild.
     */
    appendChild: 2,
};
var STYLESHEET_SETTING = '__stylesheet__';
/**
 * MSIE 11 doesn't cascade styles based on DOM ordering, but rather on the order that each style node
 * is created. As such, to maintain consistent priority, IE11 should reuse a single style node.
 */
var REUSE_STYLE_NODE = typeof navigator !== 'undefined' && /rv:11.0/.test(navigator.userAgent);
var _global = {};
// Grab window.
try {
    _global = window;
}
catch (_a) {
    /* leave as blank object */
}
var _stylesheet;
/**
 * Represents the state of styles registered in the page. Abstracts
 * the surface for adding styles to the stylesheet, exposes helpers
 * for reading the styles registered in server rendered scenarios.
 *
 * @public
 */
var Stylesheet = /** @class */ (function () {
    function Stylesheet(config) {
        this._rules = [];
        this._preservedRules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._keyToClassName = {};
        this._onResetCallbacks = [];
        this._classNameToArgs = {};
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ injectionMode: InjectionMode.insertNode, defaultPrefix: 'css', namespace: undefined, cspSettings: undefined }, config);
        this._keyToClassName = this._config.classNameCache || {};
    }
    /**
     * Gets the singleton instance.
     */
    Stylesheet.getInstance = function () {
        var _a;
        _stylesheet = _global[STYLESHEET_SETTING];
        if (!_stylesheet || (_stylesheet._lastStyleElement && _stylesheet._lastStyleElement.ownerDocument !== document)) {
            var fabricConfig = ((_a = _global) === null || _a === void 0 ? void 0 : _a.FabricConfig) || {};
            _stylesheet = _global[STYLESHEET_SETTING] = new Stylesheet(fabricConfig.mergeStyles);
        }
        return _stylesheet;
    };
    /**
     * Configures the stylesheet.
     */
    Stylesheet.prototype.setConfig = function (config) {
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._config), config);
    };
    /**
     * Configures a reset callback.
     *
     * @param callback - A callback which will be called when the Stylesheet is reset.
     */
    Stylesheet.prototype.onReset = function (callback) {
        this._onResetCallbacks.push(callback);
    };
    /**
     * Generates a unique classname.
     *
     * @param displayName - Optional value to use as a prefix.
     */
    Stylesheet.prototype.getClassName = function (displayName) {
        var namespace = this._config.namespace;
        var prefix = displayName || this._config.defaultPrefix;
        return "" + (namespace ? namespace + '-' : '') + prefix + "-" + this._counter++;
    };
    /**
     * Used internally to cache information about a class which was
     * registered with the stylesheet.
     */
    Stylesheet.prototype.cacheClassName = function (className, key, args, rules) {
        this._keyToClassName[key] = className;
        this._classNameToArgs[className] = {
            args: args,
            rules: rules,
        };
    };
    /**
     * Gets the appropriate classname given a key which was previously
     * registered using cacheClassName.
     */
    Stylesheet.prototype.classNameFromKey = function (key) {
        return this._keyToClassName[key];
    };
    /**
     * Gets all classnames cache with the stylesheet.
     */
    Stylesheet.prototype.getClassNameCache = function () {
        return this._keyToClassName;
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.argsFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.args;
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.insertedRulesFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.rules;
    };
    /**
     * Inserts a css rule into the stylesheet.
     * @param preserve - Preserves the rule beyond a reset boundary.
     */
    Stylesheet.prototype.insertRule = function (rule, preserve) {
        var injectionMode = this._config.injectionMode;
        var element = injectionMode !== InjectionMode.none ? this._getStyleElement() : undefined;
        if (preserve) {
            this._preservedRules.push(rule);
        }
        if (element) {
            switch (this._config.injectionMode) {
                case InjectionMode.insertNode:
                    var sheet = element.sheet;
                    try {
                        sheet.insertRule(rule, sheet.cssRules.length);
                    }
                    catch (e) {
                        // The browser will throw exceptions on unsupported rules (such as a moz prefix in webkit.)
                        // We need to swallow the exceptions for this scenario, otherwise we'd need to filter
                        // which could be slower and bulkier.
                    }
                    break;
                case InjectionMode.appendChild:
                    element.appendChild(document.createTextNode(rule));
                    break;
            }
        }
        else {
            this._rules.push(rule);
        }
        if (this._config.onInsertRule) {
            this._config.onInsertRule(rule);
        }
    };
    /**
     * Gets all rules registered with the stylesheet; only valid when
     * using InsertionMode.none.
     */
    Stylesheet.prototype.getRules = function (includePreservedRules) {
        return ((includePreservedRules ? this._preservedRules.join('') : '') + this._rules.join('') + this._rulesToInsert.join(''));
    };
    /**
     * Resets the internal state of the stylesheet. Only used in server
     * rendered scenarios where we're using InsertionMode.none.
     */
    Stylesheet.prototype.reset = function () {
        this._rules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._classNameToArgs = {};
        this._keyToClassName = {};
        this._onResetCallbacks.forEach(function (callback) { return callback(); });
    };
    // Forces the regeneration of incoming styles without totally resetting the stylesheet.
    Stylesheet.prototype.resetKeys = function () {
        this._keyToClassName = {};
    };
    Stylesheet.prototype._getStyleElement = function () {
        var _this = this;
        if (!this._styleElement && typeof document !== 'undefined') {
            this._styleElement = this._createStyleElement();
            if (!REUSE_STYLE_NODE) {
                // Reset the style element on the next frame.
                window.requestAnimationFrame(function () {
                    _this._styleElement = undefined;
                });
            }
        }
        return this._styleElement;
    };
    Stylesheet.prototype._createStyleElement = function () {
        var head = document.head;
        var styleElement = document.createElement('style');
        styleElement.setAttribute('data-merge-styles', 'true');
        var cspSettings = this._config.cspSettings;
        if (cspSettings) {
            if (cspSettings.nonce) {
                styleElement.setAttribute('nonce', cspSettings.nonce);
            }
        }
        if (this._lastStyleElement) {
            // If the `nextElementSibling` is null, then the insertBefore will act as a regular append.
            // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore#Syntax
            head.insertBefore(styleElement, this._lastStyleElement.nextElementSibling);
        }
        else {
            var placeholderStyleTag = this._findPlaceholderStyleTag();
            if (placeholderStyleTag) {
                head.insertBefore(styleElement, placeholderStyleTag.nextElementSibling);
            }
            else {
                head.insertBefore(styleElement, head.childNodes[0]);
            }
        }
        this._lastStyleElement = styleElement;
        return styleElement;
    };
    Stylesheet.prototype._findPlaceholderStyleTag = function () {
        var head = document.head;
        if (head) {
            return head.querySelector('style[data-merge-styles]');
        }
        return null;
    };
    return Stylesheet;
}());



/***/ }),

/***/ "../merge-styles/lib/concatStyleSets.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatStyleSets", function() { return concatStyleSets; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");

/**
 * Combine a set of styles together (but does not register css classes).
 * @param styleSets - One or more stylesets to be merged (each param can also be falsy).
 */
function concatStyleSets() {
    var styleSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styleSets[_i] = arguments[_i];
    }
    if (styleSets && styleSets.length === 1 && styleSets[0] && !styleSets[0].subComponentStyles) {
        return styleSets[0];
    }
    var mergedSet = {};
    // We process sub component styles in two phases. First we collect them, then we combine them into 1 style function.
    var workingSubcomponentStyles = {};
    for (var _a = 0, styleSets_1 = styleSets; _a < styleSets_1.length; _a++) {
        var currentSet = styleSets_1[_a];
        if (currentSet) {
            for (var prop in currentSet) {
                if (currentSet.hasOwnProperty(prop)) {
                    if (prop === 'subComponentStyles' && currentSet.subComponentStyles !== undefined) {
                        // subcomponent styles - style functions or objects
                        var currentComponentStyles = currentSet.subComponentStyles;
                        for (var subCompProp in currentComponentStyles) {
                            if (currentComponentStyles.hasOwnProperty(subCompProp)) {
                                if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
                                    workingSubcomponentStyles[subCompProp].push(currentComponentStyles[subCompProp]);
                                }
                                else {
                                    workingSubcomponentStyles[subCompProp] = [currentComponentStyles[subCompProp]];
                                }
                            }
                        }
                        continue;
                    }
                    // the as any casts below is a workaround for ts 2.8.
                    // todo: remove cast to any in ts 2.9.
                    var mergedValue = mergedSet[prop];
                    var currentValue = currentSet[prop];
                    if (mergedValue === undefined) {
                        mergedSet[prop] = currentValue;
                    }
                    else {
                        mergedSet[prop] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])((Array.isArray(mergedValue) ? mergedValue : [mergedValue]), (Array.isArray(currentValue) ? currentValue : [currentValue]));
                    }
                }
            }
        }
    }
    if (Object.keys(workingSubcomponentStyles).length > 0) {
        mergedSet.subComponentStyles = {};
        var mergedSubStyles = mergedSet.subComponentStyles;
        var _loop_1 = function (subCompProp) {
            if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
                var workingSet_1 = workingSubcomponentStyles[subCompProp];
                mergedSubStyles[subCompProp] = function (styleProps) {
                    return concatStyleSets.apply(void 0, workingSet_1.map(function (styleFunctionOrObject) {
                        return typeof styleFunctionOrObject === 'function' ? styleFunctionOrObject(styleProps) : styleFunctionOrObject;
                    }));
                };
            }
        };
        // now we process the subcomponent styles if there are any
        for (var subCompProp in workingSubcomponentStyles) {
            _loop_1(subCompProp);
        }
    }
    return mergedSet;
}


/***/ }),

/***/ "../merge-styles/lib/concatStyleSetsWithProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatStyleSetsWithProps", function() { return concatStyleSetsWithProps; });
/* harmony import */ var _concatStyleSets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../merge-styles/lib/concatStyleSets.js");

/**
 * Concatenates style sets into one, but resolves functional sets using the given props.
 * @param styleProps - Props used to resolve functional sets.
 * @param allStyles - Style sets, which can be functions or objects.
 */
function concatStyleSetsWithProps(styleProps) {
    var allStyles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        allStyles[_i - 1] = arguments[_i];
    }
    var result = [];
    for (var _a = 0, allStyles_1 = allStyles; _a < allStyles_1.length; _a++) {
        var styles = allStyles_1[_a];
        if (styles) {
            result.push(typeof styles === 'function' ? styles(styleProps) : styles);
        }
    }
    if (result.length === 1) {
        return result[0];
    }
    else if (result.length) {
        // cliffkoh: I cannot figure out how to avoid the cast to any here.
        // It is something to do with the use of Omit in IStyleSet.
        // It might not be necessary once  Omit becomes part of lib.d.ts (when we remove our own Omit and rely on
        // the official version).
        return _concatStyleSets__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"].apply(void 0, result);
    }
    return {};
}


/***/ }),

/***/ "../merge-styles/lib/extractStyleParts.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractStyleParts", function() { return extractStyleParts; });
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../merge-styles/lib/Stylesheet.js");

/**
 * Separates the classes and style objects. Any classes that are pre-registered
 * args are auto expanded into objects.
 */
function extractStyleParts() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    var objects = [];
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
    function _processArgs(argsList) {
        for (var _i = 0, argsList_1 = argsList; _i < argsList_1.length; _i++) {
            var arg = argsList_1[_i];
            if (arg) {
                if (typeof arg === 'string') {
                    if (arg.indexOf(' ') >= 0) {
                        _processArgs(arg.split(' '));
                    }
                    else {
                        var translatedArgs = stylesheet.argsFromClassName(arg);
                        if (translatedArgs) {
                            _processArgs(translatedArgs);
                        }
                        else {
                            // Avoid adding the same class twice.
                            if (classes.indexOf(arg) === -1) {
                                classes.push(arg);
                            }
                        }
                    }
                }
                else if (Array.isArray(arg)) {
                    _processArgs(arg);
                }
                else if (typeof arg === 'object') {
                    objects.push(arg);
                }
            }
        }
    }
    _processArgs(args);
    return {
        classes: classes,
        objects: objects,
    };
}


/***/ }),

/***/ "../merge-styles/lib/fontFace.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return fontFace; });
/* harmony import */ var _StyleOptionsState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../merge-styles/lib/StyleOptionsState.js");
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../merge-styles/lib/Stylesheet.js");
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../merge-styles/lib/styleToClassName.js");



/**
 * Registers a font face.
 * @public
 */
function fontFace(font) {
    _Stylesheet__WEBPACK_IMPORTED_MODULE_1__["Stylesheet"].getInstance().insertRule("@font-face{" + Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_2__["serializeRuleEntries"])(Object(_StyleOptionsState__WEBPACK_IMPORTED_MODULE_0__["getStyleOptions"])(), font) + "}", true);
}


/***/ }),

/***/ "../merge-styles/lib/getVendorSettings.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorSettings", function() { return getVendorSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVendorSettings", function() { return setVendorSettings; });
var _vendorSettings;
function getVendorSettings() {
    if (!_vendorSettings) {
        var doc = typeof document !== 'undefined' ? document : undefined;
        var nav = typeof navigator !== 'undefined' ? navigator : undefined;
        var userAgent = nav ? nav.userAgent.toLowerCase() : undefined;
        if (!doc) {
            _vendorSettings = {
                isWebkit: true,
                isMoz: true,
                isOpera: true,
                isMs: true,
            };
        }
        else {
            _vendorSettings = {
                isWebkit: !!(doc && 'WebkitAppearance' in doc.documentElement.style),
                isMoz: !!(userAgent && userAgent.indexOf('firefox') > -1),
                isOpera: !!(userAgent && userAgent.indexOf('opera') > -1),
                isMs: !!(nav && (/rv:11.0/i.test(nav.userAgent) || /Edge\/\d./i.test(navigator.userAgent))),
            };
        }
    }
    return _vendorSettings;
}
/**
 * Sets the vendor settings for prefixing and vendor specific operations.
 */
function setVendorSettings(vendorSettings) {
    _vendorSettings = vendorSettings;
}


/***/ }),

/***/ "../merge-styles/lib/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mergeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../merge-styles/lib/mergeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _mergeStyles__WEBPACK_IMPORTED_MODULE_0__["mergeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeCss", function() { return _mergeStyles__WEBPACK_IMPORTED_MODULE_0__["mergeCss"]; });

/* harmony import */ var _mergeStyleSets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../merge-styles/lib/mergeStyleSets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyleSets", function() { return _mergeStyleSets__WEBPACK_IMPORTED_MODULE_1__["mergeStyleSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeCssSets", function() { return _mergeStyleSets__WEBPACK_IMPORTED_MODULE_1__["mergeCssSets"]; });

/* harmony import */ var _concatStyleSets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../merge-styles/lib/concatStyleSets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatStyleSets", function() { return _concatStyleSets__WEBPACK_IMPORTED_MODULE_2__["concatStyleSets"]; });

/* harmony import */ var _concatStyleSetsWithProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../merge-styles/lib/concatStyleSetsWithProps.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatStyleSetsWithProps", function() { return _concatStyleSetsWithProps__WEBPACK_IMPORTED_MODULE_3__["concatStyleSetsWithProps"]; });

/* harmony import */ var _fontFace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../merge-styles/lib/fontFace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return _fontFace__WEBPACK_IMPORTED_MODULE_4__["fontFace"]; });

/* harmony import */ var _keyframes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../merge-styles/lib/keyframes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return _keyframes__WEBPACK_IMPORTED_MODULE_5__["keyframes"]; });

/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../merge-styles/lib/Stylesheet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectionMode", function() { return _Stylesheet__WEBPACK_IMPORTED_MODULE_6__["InjectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stylesheet", function() { return _Stylesheet__WEBPACK_IMPORTED_MODULE_6__["Stylesheet"]; });

/* harmony import */ var _StyleOptionsState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../merge-styles/lib/StyleOptionsState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRTL", function() { return _StyleOptionsState__WEBPACK_IMPORTED_MODULE_7__["setRTL"]; });

/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../merge-styles/lib/version.js");











/***/ }),

/***/ "../merge-styles/lib/keyframes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony import */ var _StyleOptionsState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../merge-styles/lib/StyleOptionsState.js");
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../merge-styles/lib/Stylesheet.js");
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../merge-styles/lib/styleToClassName.js");



/**
 * Registers keyframe definitions.
 *
 * @public
 */
function keyframes(timeline) {
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_1__["Stylesheet"].getInstance();
    var name = stylesheet.getClassName();
    var rulesArray = [];
    for (var prop in timeline) {
        if (timeline.hasOwnProperty(prop)) {
            rulesArray.push(prop, '{', Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_2__["serializeRuleEntries"])(Object(_StyleOptionsState__WEBPACK_IMPORTED_MODULE_0__["getStyleOptions"])(), timeline[prop]), '}');
        }
    }
    var rules = rulesArray.join('');
    stylesheet.insertRule("@keyframes " + name + "{" + rules + "}", true);
    stylesheet.cacheClassName(name, rules, [], ['keyframes', rules]);
    return name;
}


/***/ }),

/***/ "../merge-styles/lib/mergeStyleSets.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeStyleSets", function() { return mergeStyleSets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeCssSets", function() { return mergeCssSets; });
/* harmony import */ var _concatStyleSets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../merge-styles/lib/concatStyleSets.js");
/* harmony import */ var _extractStyleParts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../merge-styles/lib/extractStyleParts.js");
/* harmony import */ var _StyleOptionsState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../merge-styles/lib/StyleOptionsState.js");
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../merge-styles/lib/styleToClassName.js");




/**
 * Takes in one or more style set objects, each consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeStyles` for each property in the object, but ensures we maintain the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 */
function mergeStyleSets() {
    var styleSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styleSets[_i] = arguments[_i];
    }
    return mergeCssSets(styleSets, Object(_StyleOptionsState__WEBPACK_IMPORTED_MODULE_2__["getStyleOptions"])());
}
/**
 * Takes in one or more style set objects, each1consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeCss` for each property in the object, but ensures the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 * @param options - (optional) Options to use when creating rules.
 */
function mergeCssSets(styleSets, options) {
    var _a, _b;
    var classNameSet = { subComponentStyles: {} };
    var styleSet = styleSets[0];
    if (!styleSet && styleSets.length <= 1) {
        return { subComponentStyles: {} };
    }
    var concatenatedStyleSet = _concatStyleSets__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"].apply(void 0, styleSets);
    var registrations = [];
    for (var styleSetArea in concatenatedStyleSet) {
        if (concatenatedStyleSet.hasOwnProperty(styleSetArea)) {
            if (styleSetArea === 'subComponentStyles') {
                classNameSet.subComponentStyles = concatenatedStyleSet.subComponentStyles || {};
                continue;
            }
            var styles = concatenatedStyleSet[styleSetArea];
            var _c = Object(_extractStyleParts__WEBPACK_IMPORTED_MODULE_1__["extractStyleParts"])(styles), classes = _c.classes, objects = _c.objects;
            if ((_a = objects) === null || _a === void 0 ? void 0 : _a.length) {
                var registration = Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_3__["styleToRegistration"])(options || {}, { displayName: styleSetArea }, objects);
                if (registration) {
                    registrations.push(registration);
                    classNameSet[styleSetArea] = classes.concat([registration.className]).join(' ');
                }
            }
            else {
                classNameSet[styleSetArea] = classes.join(' ');
            }
        }
    }
    for (var _i = 0, registrations_1 = registrations; _i < registrations_1.length; _i++) {
        var registration = registrations_1[_i];
        if (registration) {
            Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_3__["applyRegistration"])(registration, (_b = options) === null || _b === void 0 ? void 0 : _b.specificityMultiplier);
        }
    }
    return classNameSet;
}


/***/ }),

/***/ "../merge-styles/lib/mergeStyles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return mergeStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeCss", function() { return mergeCss; });
/* harmony import */ var _extractStyleParts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../merge-styles/lib/extractStyleParts.js");
/* harmony import */ var _StyleOptionsState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../merge-styles/lib/StyleOptionsState.js");
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../merge-styles/lib/styleToClassName.js");



/**
 * Concatenation helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function mergeStyles() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return mergeCss(args, Object(_StyleOptionsState__WEBPACK_IMPORTED_MODULE_1__["getStyleOptions"])());
}
/**
 * Concatenation helper, which can merge class names together. Skips over falsey values.
 * Accepts a set of options that will be used when calculating styles.
 *
 * @public
 */
function mergeCss(args, options) {
    var styleArgs = args instanceof Array ? args : [args];
    var _a = Object(_extractStyleParts__WEBPACK_IMPORTED_MODULE_0__["extractStyleParts"])(styleArgs), classes = _a.classes, objects = _a.objects;
    if (objects.length) {
        classes.push(Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_2__["styleToClassName"])(options || {}, objects));
    }
    return classes.join(' ');
}


/***/ }),

/***/ "../merge-styles/lib/styleToClassName.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeRuleEntries", function() { return serializeRuleEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleToRegistration", function() { return styleToRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyRegistration", function() { return applyRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleToClassName", function() { return styleToClassName; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../merge-styles/lib/Stylesheet.js");
/* harmony import */ var _transforms_kebabRules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../merge-styles/lib/transforms/kebabRules.js");
/* harmony import */ var _transforms_prefixRules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../merge-styles/lib/transforms/prefixRules.js");
/* harmony import */ var _transforms_provideUnits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../merge-styles/lib/transforms/provideUnits.js");
/* harmony import */ var _transforms_rtlifyRules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../merge-styles/lib/transforms/rtlifyRules.js");






var DISPLAY_NAME = 'displayName';
function getDisplayName(rules) {
    var rootStyle = rules && rules['&'];
    return rootStyle ? rootStyle.displayName : undefined;
}
var globalSelectorRegExp = /\:global\((.+?)\)/g;
/**
 * Finds comma separated selectors in a :global() e.g. ":global(.class1, .class2, .class3)"
 * and wraps them each in their own global ":global(.class1), :global(.class2), :global(.class3)"
 *
 * @param selectorWithGlobals The selector to process
 * @returns The updated selector
 */
function expandCommaSeparatedGlobals(selectorWithGlobals) {
    // We the selector does not have a :global() we can shortcut
    if (!globalSelectorRegExp.test(selectorWithGlobals)) {
        return selectorWithGlobals;
    }
    var replacementInfo = [];
    var findGlobal = /\:global\((.+?)\)/g;
    var match = null;
    // Create a result list for global selectors so we can replace them.
    while ((match = findGlobal.exec(selectorWithGlobals))) {
        // Only if the found selector is a comma separated list we'll process it.
        if (match[1].indexOf(',') > -1) {
            replacementInfo.push([
                match.index,
                match.index + match[0].length,
                // Wrap each of the found selectors in :global()
                match[1]
                    .split(',')
                    .map(function (v) { return ":global(" + v.trim() + ")"; })
                    .join(', '),
            ]);
        }
    }
    // Replace the found selectors with their wrapped variants in reverse order
    return replacementInfo
        .reverse()
        .reduce(function (selector, _a) {
        var matchIndex = _a[0], matchEndIndex = _a[1], replacement = _a[2];
        var prefix = selector.slice(0, matchIndex);
        var suffix = selector.slice(matchEndIndex);
        return prefix + replacement + suffix;
    }, selectorWithGlobals);
}
function expandSelector(newSelector, currentSelector) {
    if (newSelector.indexOf(':global(') >= 0) {
        return newSelector.replace(globalSelectorRegExp, '$1');
    }
    else if (newSelector.indexOf(':') === 0) {
        return currentSelector + newSelector;
    }
    else if (newSelector.indexOf('&') < 0) {
        return currentSelector + ' ' + newSelector;
    }
    return newSelector;
}
function extractSelector(currentSelector, rules, selector, value) {
    if (rules === void 0) { rules = { __order: [] }; }
    if (selector.indexOf('@') === 0) {
        selector = selector + '{' + currentSelector;
        extractRules([value], rules, selector);
    }
    else if (selector.indexOf(',') > -1) {
        expandCommaSeparatedGlobals(selector)
            .split(',')
            .map(function (s) { return s.trim(); })
            .forEach(function (separatedSelector) {
            return extractRules([value], rules, expandSelector(separatedSelector, currentSelector));
        });
    }
    else {
        extractRules([value], rules, expandSelector(selector, currentSelector));
    }
}
function extractRules(args, rules, currentSelector) {
    if (rules === void 0) { rules = { __order: [] }; }
    if (currentSelector === void 0) { currentSelector = '&'; }
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_1__["Stylesheet"].getInstance();
    var currentRules = rules[currentSelector];
    if (!currentRules) {
        currentRules = {};
        rules[currentSelector] = currentRules;
        rules.__order.push(currentSelector);
    }
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var arg = args_1[_i];
        // If the arg is a string, we need to look up the class map and merge.
        if (typeof arg === 'string') {
            var expandedRules = stylesheet.argsFromClassName(arg);
            if (expandedRules) {
                extractRules(expandedRules, rules, currentSelector);
            }
            // Else if the arg is an array, we need to recurse in.
        }
        else if (Array.isArray(arg)) {
            extractRules(arg, rules, currentSelector);
        }
        else {
            for (var prop in arg) {
                if (arg.hasOwnProperty(prop)) {
                    var propValue = arg[prop];
                    if (prop === 'selectors') {
                        // every child is a selector.
                        var selectors = arg.selectors;
                        for (var newSelector in selectors) {
                            if (selectors.hasOwnProperty(newSelector)) {
                                extractSelector(currentSelector, rules, newSelector, selectors[newSelector]);
                            }
                        }
                    }
                    else if (typeof propValue === 'object') {
                        // prop is a selector.
                        if (propValue !== null) {
                            extractSelector(currentSelector, rules, prop, propValue);
                        }
                    }
                    else {
                        if (propValue !== undefined) {
                            // Else, add the rule to the currentSelector.
                            if (prop === 'margin' || prop === 'padding') {
                                expandQuads(currentRules, prop, propValue);
                            }
                            else {
                                currentRules[prop] = propValue;
                            }
                        }
                    }
                }
            }
        }
    }
    return rules;
}
function expandQuads(currentRules, name, value) {
    var parts = typeof value === 'string' ? value.split(' ') : [value];
    currentRules[name + 'Top'] = parts[0];
    currentRules[name + 'Right'] = parts[1] || parts[0];
    currentRules[name + 'Bottom'] = parts[2] || parts[0];
    currentRules[name + 'Left'] = parts[3] || parts[1] || parts[0];
}
function getKeyForRules(options, rules) {
    var serialized = [options.rtl ? 'rtl' : 'ltr'];
    var hasProps = false;
    for (var _i = 0, _a = rules.__order; _i < _a.length; _i++) {
        var selector = _a[_i];
        serialized.push(selector);
        var rulesForSelector = rules[selector];
        for (var propName in rulesForSelector) {
            if (rulesForSelector.hasOwnProperty(propName) && rulesForSelector[propName] !== undefined) {
                hasProps = true;
                serialized.push(propName, rulesForSelector[propName]);
            }
        }
    }
    return hasProps ? serialized.join('') : undefined;
}
function repeatString(target, count) {
    if (count <= 0) {
        return '';
    }
    if (count === 1) {
        return target;
    }
    return target + repeatString(target, count - 1);
}
function serializeRuleEntries(options, ruleEntries) {
    if (!ruleEntries) {
        return '';
    }
    var allEntries = [];
    for (var entry in ruleEntries) {
        if (ruleEntries.hasOwnProperty(entry) && entry !== DISPLAY_NAME && ruleEntries[entry] !== undefined) {
            allEntries.push(entry, ruleEntries[entry]);
        }
    }
    // Apply transforms.
    for (var i = 0; i < allEntries.length; i += 2) {
        Object(_transforms_kebabRules__WEBPACK_IMPORTED_MODULE_2__["kebabRules"])(allEntries, i);
        Object(_transforms_provideUnits__WEBPACK_IMPORTED_MODULE_4__["provideUnits"])(allEntries, i);
        Object(_transforms_rtlifyRules__WEBPACK_IMPORTED_MODULE_5__["rtlifyRules"])(options, allEntries, i);
        Object(_transforms_prefixRules__WEBPACK_IMPORTED_MODULE_3__["prefixRules"])(allEntries, i);
    }
    // Apply punctuation.
    for (var i = 1; i < allEntries.length; i += 4) {
        allEntries.splice(i, 1, ':', allEntries[i], ';');
    }
    return allEntries.join('');
}
function styleToRegistration(options) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var rules = extractRules(args);
    var key = getKeyForRules(options, rules);
    if (key) {
        var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_1__["Stylesheet"].getInstance();
        var registration = {
            className: stylesheet.classNameFromKey(key),
            key: key,
            args: args,
        };
        if (!registration.className) {
            registration.className = stylesheet.getClassName(getDisplayName(rules));
            var rulesToInsert = [];
            for (var _a = 0, _b = rules.__order; _a < _b.length; _a++) {
                var selector = _b[_a];
                rulesToInsert.push(selector, serializeRuleEntries(options, rules[selector]));
            }
            registration.rulesToInsert = rulesToInsert;
        }
        return registration;
    }
    return undefined;
}
/**
 * Insert style to stylesheet.
 * @param registration Style registration.
 * @param specificityMultiplier Number of times classname selector is repeated in the css rule.
 * This is to increase css specificity in case it's needed. Default to 1.
 */
function applyRegistration(registration, specificityMultiplier) {
    if (specificityMultiplier === void 0) { specificityMultiplier = 1; }
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_1__["Stylesheet"].getInstance();
    var className = registration.className, key = registration.key, args = registration.args, rulesToInsert = registration.rulesToInsert;
    if (rulesToInsert) {
        // rulesToInsert is an ordered array of selector/rule pairs.
        for (var i = 0; i < rulesToInsert.length; i += 2) {
            var rules = rulesToInsert[i + 1];
            if (rules) {
                var selector = rulesToInsert[i];
                selector = selector.replace(/&/g, repeatString("." + registration.className, specificityMultiplier));
                // Insert. Note if a media query, we must close the query with a final bracket.
                var processedRule = selector + "{" + rules + "}" + (selector.indexOf('@') === 0 ? '}' : '');
                stylesheet.insertRule(processedRule);
            }
        }
        stylesheet.cacheClassName(className, key, args, rulesToInsert);
    }
}
function styleToClassName(options) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var registration = styleToRegistration.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([options], args));
    if (registration) {
        applyRegistration(registration, options.specificityMultiplier);
        return registration.className;
    }
    return '';
}


/***/ }),

/***/ "../merge-styles/lib/transforms/kebabRules.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebabRules", function() { return kebabRules; });
var rules = {};
function kebabRules(rulePairs, index) {
    var rule = rulePairs[index];
    if (rule.charAt(0) !== '-') {
        rulePairs[index] = rules[rule] = rules[rule] || rule.replace(/([A-Z])/g, '-$1').toLowerCase();
    }
}


/***/ }),

/***/ "../merge-styles/lib/transforms/prefixRules.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixRules", function() { return prefixRules; });
/* harmony import */ var _getVendorSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../merge-styles/lib/getVendorSettings.js");

var autoPrefixNames = {
    'user-select': 1,
};
function prefixRules(rulePairs, index) {
    var vendorSettings = Object(_getVendorSettings__WEBPACK_IMPORTED_MODULE_0__["getVendorSettings"])();
    var name = rulePairs[index];
    if (autoPrefixNames[name]) {
        var value = rulePairs[index + 1];
        if (autoPrefixNames[name]) {
            if (vendorSettings.isWebkit) {
                rulePairs.push('-webkit-' + name, value);
            }
            if (vendorSettings.isMoz) {
                rulePairs.push('-moz-' + name, value);
            }
            if (vendorSettings.isMs) {
                rulePairs.push('-ms-' + name, value);
            }
            if (vendorSettings.isOpera) {
                rulePairs.push('-o-' + name, value);
            }
        }
    }
}


/***/ }),

/***/ "../merge-styles/lib/transforms/provideUnits.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideUnits", function() { return provideUnits; });
var NON_PIXEL_NUMBER_PROPS = [
    'column-count',
    'font-weight',
    'flex',
    'flex-grow',
    'flex-shrink',
    'fill-opacity',
    'opacity',
    'order',
    'z-index',
    'zoom',
];
function provideUnits(rulePairs, index) {
    var name = rulePairs[index];
    var value = rulePairs[index + 1];
    if (typeof value === 'number') {
        var isNonPixelProp = NON_PIXEL_NUMBER_PROPS.indexOf(name) > -1;
        var isVariableOrPrefixed = name.indexOf('--') > -1;
        var unit = isNonPixelProp || isVariableOrPrefixed ? '' : 'px';
        rulePairs[index + 1] = "" + value + unit;
    }
}


/***/ }),

/***/ "../merge-styles/lib/transforms/rtlifyRules.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rtlifyRules", function() { return rtlifyRules; });
var _a;
var LEFT = 'left';
var RIGHT = 'right';
var NO_FLIP = '@noflip';
var NAME_REPLACEMENTS = (_a = {},
    _a[LEFT] = RIGHT,
    _a[RIGHT] = LEFT,
    _a);
var VALUE_REPLACEMENTS = {
    'w-resize': 'e-resize',
    'sw-resize': 'se-resize',
    'nw-resize': 'ne-resize',
};
/**
 * RTLifies the rulePair in the array at the current index. This mutates the array for performance
 * reasons.
 */
function rtlifyRules(options, rulePairs, index) {
    if (options.rtl) {
        var name_1 = rulePairs[index];
        if (!name_1) {
            return;
        }
        var value = rulePairs[index + 1];
        if (typeof value === 'string' && value.indexOf(NO_FLIP) >= 0) {
            rulePairs[index + 1] = value.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g, '');
        }
        else if (name_1.indexOf(LEFT) >= 0) {
            rulePairs[index] = name_1.replace(LEFT, RIGHT);
        }
        else if (name_1.indexOf(RIGHT) >= 0) {
            rulePairs[index] = name_1.replace(RIGHT, LEFT);
        }
        else if (String(value).indexOf(LEFT) >= 0) {
            rulePairs[index + 1] = value.replace(LEFT, RIGHT);
        }
        else if (String(value).indexOf(RIGHT) >= 0) {
            rulePairs[index + 1] = value.replace(RIGHT, LEFT);
        }
        else if (NAME_REPLACEMENTS[name_1]) {
            rulePairs[index] = NAME_REPLACEMENTS[name_1];
        }
        else if (VALUE_REPLACEMENTS[value]) {
            rulePairs[index + 1] = VALUE_REPLACEMENTS[value];
        }
        else {
            switch (name_1) {
                case 'margin':
                case 'padding':
                    rulePairs[index + 1] = flipQuad(value);
                    break;
                case 'box-shadow':
                    rulePairs[index + 1] = negateNum(value, 0);
                    break;
            }
        }
    }
}
/**
 * Given a string value in a space delimited format (e.g. "1 2 3 4"), negates a particular value.
 */
function negateNum(value, partIndex) {
    var parts = value.split(' ');
    var numberVal = parseInt(parts[partIndex], 10);
    parts[0] = parts[0].replace(String(numberVal), String(numberVal * -1));
    return parts.join(' ');
}
/**
 * Given a string quad, flips the left and right values.
 */
function flipQuad(value) {
    if (typeof value === 'string') {
        var parts = value.split(' ');
        if (parts.length === 4) {
            return parts[0] + " " + parts[3] + " " + parts[2] + " " + parts[1];
        }
    }
    return value;
}


/***/ }),

/***/ "../merge-styles/lib/version.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../set-version/lib/index.js");
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.

Object(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@uifabric/merge-styles', '7.19.1');


/***/ }),

/***/ "../react-compose/lib/appendClasses.js":
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

/***/ "../react-compose/lib/createClassResolver.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClassResolver", function() { return createClassResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResolvedMap", function() { return createResolvedMap; });
/* harmony import */ var _appendClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../react-compose/lib/appendClasses.js");

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

/***/ "../react-compose/lib/next/getSlots.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlots", function() { return getSlots; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../utilities/lib/index.js");
/* harmony import */ var _nullRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../react-compose/lib/next/nullRender.js");



/**
 * Given the state and an array of slot names, will break out `slots` and `slotProps`
 * collections.
 *
 * The root is always derived from the `as` prop.
 *
 * Slots will render as null if they are rendered as primitives with undefined children.
 *
 * The slotProps will always omit the `as` prop within them, and for slots that are string
 * primitives, the props will be filtered according the the slot type. For example, if the
 * slot is rendered `as: 'a'`, the props will be filtered for acceptable anchor props.
 *
 * @param state - State including slot definitions
 * @param slotNames - Name of which props are slots
 * @returns An object containing the `slots` map and `slotProps` map.
 */
var getSlots = function (state, slotNames) {
    var slots = {
        root: state.as || 'div',
    };
    var slotProps = {
        root: typeof state.as === 'string' ? Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getNativeElementProps"])(state.as, state) : Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["omit"])(state, ['as']),
    };
    if (slotNames) {
        for (var _i = 0, slotNames_1 = slotNames; _i < slotNames_1.length; _i++) {
            var name_1 = slotNames_1[_i];
            var slotDefinition = state[name_1] || {};
            var _a = slotDefinition.as, slotAs = _a === void 0 ? 'span' : _a, children = slotDefinition.children;
            var isSlotPrimitive = typeof slotAs === 'string';
            var isSlotEmpty = isSlotPrimitive && slotDefinition.children === undefined;
            slots[name_1] = isSlotEmpty ? _nullRender__WEBPACK_IMPORTED_MODULE_2__["nullRender"] : slotAs;
            if (typeof children === 'function') {
                slotProps[name_1] = {
                    children: children(slots[name_1], Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["omit"])(slotDefinition, ['as', 'children'])),
                };
                slots[name_1] = react__WEBPACK_IMPORTED_MODULE_0__["Fragment"];
            }
            else if (slots[name_1] !== _nullRender__WEBPACK_IMPORTED_MODULE_2__["nullRender"]) {
                slotProps[name_1] = isSlotPrimitive
                    ? Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getNativeElementProps"])(slotAs, slotDefinition)
                    : Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["omit"])(slotDefinition, ['as']);
            }
        }
    }
    return { slots: slots, slotProps: slotProps };
};


/***/ }),

/***/ "../react-compose/lib/next/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getSlots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../react-compose/lib/next/getSlots.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSlots", function() { return _getSlots__WEBPACK_IMPORTED_MODULE_0__["getSlots"]; });

/* harmony import */ var _makeMergeProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../react-compose/lib/next/makeMergeProps.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMergeProps", function() { return _makeMergeProps__WEBPACK_IMPORTED_MODULE_1__["makeMergeProps"]; });

/* harmony import */ var _resolveShorthandProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../react-compose/lib/next/resolveShorthandProps.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveShorthandProps", function() { return _resolveShorthandProps__WEBPACK_IMPORTED_MODULE_2__["resolveShorthandProps"]; });

/* harmony import */ var _makeClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../react-compose/lib/next/makeClasses.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeClasses", function() { return _makeClasses__WEBPACK_IMPORTED_MODULE_3__["makeClasses"]; });







/***/ }),

/***/ "../react-compose/lib/next/makeClasses.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeClasses", function() { return makeClasses; });
/* harmony import */ var _appendClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../react-compose/lib/appendClasses.js");
/* harmony import */ var _createClassResolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../react-compose/lib/createClassResolver.js");


var makeClasses = function (classes) {
    // This is in creation time, so this will happen once per css file.
    var _a = Object(_createClassResolver__WEBPACK_IMPORTED_MODULE_1__["createResolvedMap"])(classes), slots = _a.slots, modifiers = _a.modifiers, enums = _a.enums;
    return function useClasses(state) {
        var _a;
        var modifierClasses = '';
        var enumClasses = '';
        for (var _i = 0, _b = Object.keys(modifiers); _i < _b.length; _i++) {
            var modifierName = _b[_i];
            if (state[modifierName]) {
                modifierClasses = Object(_appendClasses__WEBPACK_IMPORTED_MODULE_0__["appendClasses"])(modifierClasses, modifiers[modifierName]);
            }
        }
        for (var _c = 0, _d = Object.keys(enums); _c < _d.length; _c++) {
            var enumName = _d[_c];
            var enumValues = enums[enumName];
            // if we have a class which matches the enumName and current state value, add it.
            if (enumValues[state[enumName]] !== undefined) {
                enumClasses = Object(_appendClasses__WEBPACK_IMPORTED_MODULE_0__["appendClasses"])(enumClasses, enumValues[state[enumName]]);
            }
        }
        state.className = Object(_appendClasses__WEBPACK_IMPORTED_MODULE_0__["appendClasses"])(state.className, slots.root, modifierClasses, enumClasses);
        for (var _e = 0, _f = Object.keys(slots); _e < _f.length; _e++) {
            var slotName = _f[_e];
            if (slotName !== 'root') {
                state[slotName] = state[slotName] || {};
                state[slotName].className = Object(_appendClasses__WEBPACK_IMPORTED_MODULE_0__["appendClasses"])((_a = state[slotName]) === null || _a === void 0 ? void 0 : _a.className, slots[slotName]);
            }
        }
    };
};


/***/ }),

/***/ "../react-compose/lib/next/makeMergeProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMergeProps", function() { return makeMergeProps; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../utilities/lib/index.js");



/**
 * Helper which deep clones props, but respectively assigns JSX, object refs, and class names
 * appropriately.
 *
 * @param target - the target object to merge onto.
 * @param propSets - one or more prop sets to deep merge onto the target.
 */
var makeMergeProps = function (options) {
    if (options === void 0) { options = {}; }
    var deepMerge = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])((options.deepMerge || []), ['style']);
    var mergeProps = function (target) {
        var propSets = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            propSets[_i - 1] = arguments[_i];
        }
        for (var _a = 0, propSets_1 = propSets; _a < propSets_1.length; _a++) {
            var props = propSets_1[_a];
            if (props) {
                for (var _b = 0, _c = Object.keys(props); _b < _c.length; _b++) {
                    var propName = _c[_b];
                    var propValue = props[propName];
                    var propValueType = typeof propValue;
                    if (propValue !== undefined) {
                        if (propValue && propValueType === 'object') {
                            if (Array.isArray(propValue)) {
                                // for arrays, replace.
                                target[propName] = propValue;
                            }
                            else {
                                target[propName] = target[propName] || {};
                                if (typeof target[propName] !== 'object' ||
                                    react__WEBPACK_IMPORTED_MODULE_1__["isValidElement"](propValue) ||
                                    (propValue && typeof propValue === 'object' && propValue.hasOwnProperty('current')) ||
                                    deepMerge.indexOf(propName) === -1) {
                                    // if target is not an object, or value is JSX,  or a ref object, replace
                                    target[propName] = propValue;
                                }
                                else {
                                    // else deep merge.
                                    mergeProps(target[propName], propValue);
                                }
                            }
                        }
                        else if (propName === 'className') {
                            if (propValue) {
                                // for classnames, append
                                target[propName] = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(target[propName], propValue);
                            }
                        }
                        else {
                            target[propName] = propValue;
                        }
                    }
                }
            }
        }
        return target;
    };
    return mergeProps;
};


/***/ }),

/***/ "../react-compose/lib/next/nullRender.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nullRender", function() { return nullRender; });
var nullRender = function () { return null; };


/***/ }),

/***/ "../react-compose/lib/next/resolveShorthandProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveShorthandProps", function() { return resolveShorthandProps; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Ensures that the given slots are represented using object syntax. This ensures that
 * the object can be merged along with other objects.
 * @param props - The incoming props
 * @param shorthandPropNames - An array of prop names to apply simplification to
 */
var resolveShorthandProps = function (props, shorthandPropNames) {
    var newProps = props;
    if (shorthandPropNames && shorthandPropNames.length) {
        newProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props);
        for (var _i = 0, shorthandPropNames_1 = shorthandPropNames; _i < shorthandPropNames_1.length; _i++) {
            var propName = shorthandPropNames_1[_i];
            var propValue = props[propName];
            if (propValue !== undefined && (typeof propValue !== 'object' || react__WEBPACK_IMPORTED_MODULE_1__["isValidElement"](propValue))) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                newProps[propName] = { children: propValue };
            }
        }
    }
    return newProps;
};


/***/ }),

/***/ "../react-hooks/lib/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../react-hooks/lib/version.js");
/* harmony import */ var _useAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../react-hooks/lib/useAsync.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsync", function() { return _useAsync__WEBPACK_IMPORTED_MODULE_1__["useAsync"]; });

/* harmony import */ var _useBoolean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../react-hooks/lib/useBoolean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBoolean", function() { return _useBoolean__WEBPACK_IMPORTED_MODULE_2__["useBoolean"]; });

/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../react-hooks/lib/useConst.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useConst", function() { return _useConst__WEBPACK_IMPORTED_MODULE_3__["useConst"]; });

/* harmony import */ var _useConstCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../react-hooks/lib/useConstCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useConstCallback", function() { return _useConstCallback__WEBPACK_IMPORTED_MODULE_4__["useConstCallback"]; });

/* harmony import */ var _useControllableValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../react-hooks/lib/useControllableValue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useControllableValue", function() { return _useControllableValue__WEBPACK_IMPORTED_MODULE_5__["useControllableValue"]; });

/* harmony import */ var _useForceUpdate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../react-hooks/lib/useForceUpdate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useForceUpdate", function() { return _useForceUpdate__WEBPACK_IMPORTED_MODULE_6__["useForceUpdate"]; });

/* harmony import */ var _useId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../react-hooks/lib/useId.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useId", function() { return _useId__WEBPACK_IMPORTED_MODULE_7__["useId"]; });

/* harmony import */ var _useMergedRefs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../react-hooks/lib/useMergedRefs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMergedRefs", function() { return _useMergedRefs__WEBPACK_IMPORTED_MODULE_8__["useMergedRefs"]; });

/* harmony import */ var _useOnEvent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../react-hooks/lib/useOnEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOnEvent", function() { return _useOnEvent__WEBPACK_IMPORTED_MODULE_9__["useOnEvent"]; });

/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../react-hooks/lib/usePrevious.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return _usePrevious__WEBPACK_IMPORTED_MODULE_10__["usePrevious"]; });

/* harmony import */ var _useRefEffect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../react-hooks/lib/useRefEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRefEffect", function() { return _useRefEffect__WEBPACK_IMPORTED_MODULE_11__["useRefEffect"]; });

/* harmony import */ var _useSetInterval__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../react-hooks/lib/useSetInterval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetInterval", function() { return _useSetInterval__WEBPACK_IMPORTED_MODULE_12__["useSetInterval"]; });

/* harmony import */ var _useSetTimeout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../react-hooks/lib/useSetTimeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetTimeout", function() { return _useSetTimeout__WEBPACK_IMPORTED_MODULE_13__["useSetTimeout"]; });

/* harmony import */ var _useTarget__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../react-hooks/lib/useTarget.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTarget", function() { return _useTarget__WEBPACK_IMPORTED_MODULE_14__["useTarget"]; });

/* harmony import */ var _useWarnings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../react-hooks/lib/useWarnings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWarnings", function() { return _useWarnings__WEBPACK_IMPORTED_MODULE_15__["useWarnings"]; });



















/***/ }),

/***/ "../react-hooks/lib/useAsync.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAsync", function() { return useAsync; });
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../react-hooks/lib/useConst.js");



/**
 * Hook to provide an Async instance that is automatically cleaned up on dismount.
 */
function useAsync() {
    var async = Object(_useConst__WEBPACK_IMPORTED_MODULE_2__["useConst"])(function () { return new _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["Async"](); });
    // Function that returns a function in order to dispose the async instance on unmount
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () { return function () { return async.dispose(); }; }, [async]);
    return async;
}


/***/ }),

/***/ "../react-hooks/lib/useBoolean.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBoolean", function() { return useBoolean; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../react-hooks/lib/useConst.js");


/**
 * Hook to store a value and generate callbacks for setting the value to true or false.
 * The identity of the callbacks will always stay the same.
 *
 * @param initialState - Initial value
 * @returns Array with the current value and an object containing the updater callbacks.
 */
function useBoolean(initialState) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](initialState), value = _a[0], setValue = _a[1];
    // Storing the value in a ref is redundant but allows the `toggle` callback to have a
    // constant identity, which overall is probably better for consumers' perf.
    var valueRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](value);
    var setTrue = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(function () { return function () {
        setValue(true);
        valueRef.current = true;
    }; });
    var setFalse = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(function () { return function () {
        setValue(false);
        valueRef.current = false;
    }; });
    var toggle = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(function () { return function () { return (valueRef.current ? setFalse() : setTrue()); }; });
    return [value, { setTrue: setTrue, setFalse: setFalse, toggle: toggle }];
}


/***/ }),

/***/ "../react-hooks/lib/useConst.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useConst", function() { return useConst; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Hook to initialize and return a constant value. Unlike `React.useMemo`, this is guaranteed to
 * always return the same value (and if the initializer is a function, only call it once).
 * This is similar to setting a private member in a class constructor.
 *
 * If the value should ever change based on dependencies, use `React.useMemo` instead.
 *
 * @param initialValue - Initial value, or function to get the initial value. Similar to `useState`,
 * only the value/function passed in the first time this is called is respected.
 * @returns The value. The identity of this value will always be the same.
 */
function useConst(initialValue) {
    // Use useRef to store the value because it's the least expensive built-in hook that works here
    // (we could also use `const [value] = React.useState(initialValue)` but that's more expensive
    // internally due to reducer handling which we don't need)
    var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    if (ref.current === undefined) {
        // Box the value in an object so we can tell if it's initialized even if the initializer
        // returns/is undefined
        ref.current = {
            value: typeof initialValue === 'function' ? initialValue() : initialValue,
        };
    }
    return ref.current.value;
}


/***/ }),

/***/ "../react-hooks/lib/useConstCallback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useConstCallback", function() { return useConstCallback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @deprecated Deprecated due to potential for misuse (see package readme).
 * Use `React.useCallback` instead.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useConstCallback(callback) {
    var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    if (!ref.current) {
        ref.current = callback;
    }
    return ref.current;
}


/***/ }),

/***/ "../react-hooks/lib/useControllableValue.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useControllableValue", function() { return useControllableValue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../react-hooks/lib/useConst.js");


function useControllableValue(controlledValue, defaultUncontrolledValue, onChange) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](defaultUncontrolledValue), value = _a[0], setValue = _a[1];
    var isControlled = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(controlledValue !== undefined);
    var currentValue = isControlled ? controlledValue : value;
    // Duplicate the current value and onChange in refs so they're accessible from
    // setValueOrCallOnChange without creating a new callback every time
    var valueRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](currentValue);
    var onChangeRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](onChange);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        valueRef.current = currentValue;
        onChangeRef.current = onChange;
    });
    // To match the behavior of the setter returned by React.useState, this callback's identity
    // should never change. This means it MUST NOT directly reference variables that can change.
    var setValueOrCallOnChange = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(function () { return function (update, ev) {
        // Assuming here that TValue is not a function, because a controllable value will typically
        // be something a user can enter as input
        var newValue = typeof update === 'function' ? update(valueRef.current) : update;
        if (onChangeRef.current) {
            onChangeRef.current(ev, newValue);
        }
        if (!isControlled) {
            setValue(newValue);
        }
    }; });
    return [currentValue, setValueOrCallOnChange];
}


/***/ }),

/***/ "../react-hooks/lib/useForceUpdate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForceUpdate", function() { return useForceUpdate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../react-hooks/lib/useConst.js");


/**
 * Hook to force update a function component by updating a dummy state.
 */
function useForceUpdate() {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0), setValue = _a[1];
    var forceUpdate = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])(function () { return function () { return setValue(function (value) { return ++value; }); }; });
    return forceUpdate;
}


/***/ }),

/***/ "../react-hooks/lib/useId.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useId", function() { return useId; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uifabric_utilities_lib_getId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../utilities/lib/getId.js");


/**
 * Hook to generate a unique ID in the global scope (spanning across duplicate copies of the same library).
 *
 * @param prefix - Optional prefix for the ID
 * @param providedId - Optional id provided by a parent component. Defaults to the provided value if present,
 *  without conditioning the hook call
 * @returns The ID
 */
function useId(prefix, providedId) {
    // getId should only be called once since it updates the global constant for the next ID value.
    // (While an extra update isn't likely to cause problems in practice, it's better to avoid it.)
    var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](providedId);
    if (!ref.current) {
        ref.current = Object(_uifabric_utilities_lib_getId__WEBPACK_IMPORTED_MODULE_1__["getId"])(prefix);
    }
    return ref.current;
}


/***/ }),

/***/ "../react-hooks/lib/useMergedRefs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMergedRefs", function() { return useMergedRefs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * React hook to merge multiple React refs (either MutableRefObjects or ref callbacks) into a single ref callback that
 * updates all provided refs
 * @param refs - Refs to collectively update with one ref value.
 * @returns A function with an attached "current" prop, so that it can be treated like a RefObject.
 */
function useMergedRefs() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    var mergedCallback = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (value) {
        // Update the "current" prop hanging on the function.
        mergedCallback.current = value;
        for (var _i = 0, refs_1 = refs; _i < refs_1.length; _i++) {
            var ref = refs_1[_i];
            if (typeof ref === 'function') {
                ref(value);
            }
            else if (ref) {
                // work around the immutability of the React.Ref type
                ref.current = value;
            }
        }
    }, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(refs));
    return mergedCallback;
}


/***/ }),

/***/ "../react-hooks/lib/useOnEvent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOnEvent", function() { return useOnEvent; });
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Hook to attach an event handler on mount and handle cleanup.
 * @param element - Element (or ref to an element) to attach the event handler to
 * @param eventName - The event to attach a handler for
 * @param callback - The handler for the event
 * @param useCapture - Whether or not to attach the handler for the capture phase
 */
function useOnEvent(element, eventName, callback, useCapture) {
    // Use a ref for the callback to prevent repeatedly attaching/unattaching callbacks that are unstable across renders
    var callbackRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](callback);
    callbackRef.current = callback;
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        var actualElement = element && 'current' in element ? element.current : element;
        if (!actualElement) {
            return;
        }
        var dispose = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["on"])(actualElement, eventName, function (ev) { return callbackRef.current(ev); }, useCapture);
        return dispose;
    }, [element, eventName, useCapture]);
}


/***/ }),

/***/ "../react-hooks/lib/usePrevious.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return usePrevious; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Hook keeping track of a given value from a previous execution of the component the Hook is used in.
 *
 * See [React Hooks FAQ](https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state)
 */
function usePrevious(value) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        ref.current = value;
    });
    return ref.current;
}


/***/ }),

/***/ "../react-hooks/lib/useRefEffect.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRefEffect", function() { return useRefEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Creates a ref, and calls a callback whenever the ref changes to a non-null value. The callback can optionally return
 * a cleanup function that'll be called before the value changes, and when the ref is unmounted.
 *
 * This can be used to work around a limitation that useEffect cannot depend on `ref.current` (see
 * https://github.com/facebook/react/issues/14387#issuecomment-503616820).
 *
 * Usage example:
 * ```ts
 * const myRef = useRefEffect<HTMLElement>(element => {
 *  ...
 *  return () => { ... cleanup ... };
 * });
 * ```
 * ```jsx
 * <div ref={myRef} />
 * ```
 *
 * @param callback - Called whenever the ref's value changes to non-null. Can optionally return a cleanup function.
 * @param initial - (Optional) The initial value for the ref.
 *
 * @returns A function that should be called to set the ref's value. The object also has a `.current` member that can be
 * used to access the ref's value (like a normal RefObject). It can be hooked up to an element's `ref` property.
 */
function useRefEffect(callback, initial) {
    if (initial === void 0) { initial = null; }
    var data = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]({
        ref: Object.assign(function (value) {
            if (data.ref.current !== value) {
                if (data.cleanup) {
                    data.cleanup();
                    data.cleanup = undefined;
                }
                data.ref.current = value;
                if (value !== null) {
                    data.cleanup = data.callback(value);
                }
            }
        }, {
            current: initial,
        }),
        callback: callback,
    }).current;
    data.callback = callback;
    return data.ref;
}


/***/ }),

/***/ "../react-hooks/lib/useSetInterval.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSetInterval", function() { return useSetInterval; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../react-hooks/lib/useConst.js");


/**
 *  Returns a wrapper function for `setInterval` which automatically handles disposal.
 */
var useSetInterval = function () {
    var intervalIds = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])({});
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () { return function () {
        for (var _i = 0, _a = Object.keys(intervalIds); _i < _a.length; _i++) {
            var id = _a[_i];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            clearInterval(id);
        }
    }; }, 
    // useConst ensures this will never change, but react-hooks/exhaustive-deps doesn't know that
    [intervalIds]);
    return Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])({
        setInterval: function (func, duration) {
            var id = setInterval(func, duration);
            intervalIds[id] = 1;
            return id;
        },
        clearInterval: function (id) {
            delete intervalIds[id];
            clearInterval(id);
        },
    });
};


/***/ }),

/***/ "../react-hooks/lib/useSetTimeout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSetTimeout", function() { return useSetTimeout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../react-hooks/lib/useConst.js");


/**
 *  Returns a wrapper function for `setTimeout` which automatically handles disposal.
 */
var useSetTimeout = function () {
    var timeoutIds = Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])({});
    // Cleanup function.
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () { return function () {
        for (var _i = 0, _a = Object.keys(timeoutIds); _i < _a.length; _i++) {
            var id = _a[_i];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            clearTimeout(id);
        }
    }; }, 
    // useConst ensures this will never change, but react-hooks/exhaustive-deps doesn't know that
    [timeoutIds]);
    // Return wrapper which will auto cleanup.
    return Object(_useConst__WEBPACK_IMPORTED_MODULE_1__["useConst"])({
        setTimeout: function (func, duration) {
            var id = setTimeout(func, duration);
            timeoutIds[id] = 1;
            return id;
        },
        clearTimeout: function (id) {
            delete timeoutIds[id];
            clearTimeout(id);
        },
    });
};


/***/ }),

/***/ "../react-hooks/lib/useTarget.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTarget", function() { return useTarget; });
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../react-window-provider/lib/index.js");



/**
 * Hook to calculate and cache the target element specified by the given target attribute,
 * as well as the target element's (or host element's) parent window
 * @param target- Target selector passed to the component as a property, describing the element that
 * the callout should target
 * @param hostElement- The callout's host element, used for determining the parent window.
 */
function useTarget(target, hostElement) {
    var _a;
    var previousTargetProp = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
    var targetRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
    /**
     * Stores an instance of Window, used to check
     * for server side rendering and if focus was lost.
     */
    var targetWindow = Object(_fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_2__["useWindow"])();
    // If the target element changed, find the new one. If we are tracking
    // target with class name, always find element because we do not know if
    // fabric has rendered a new element and disposed the old element.
    if (!target || target !== previousTargetProp.current || typeof target === 'string') {
        var currentElement = (_a = hostElement) === null || _a === void 0 ? void 0 : _a.current;
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getDocument"])(currentElement);
                targetRef.current = currentDoc ? currentDoc.querySelector(target) : null;
            }
            else if ('stopPropagation' in target) {
                targetRef.current = target;
            }
            else if ('getBoundingClientRect' in target) {
                targetRef.current = target;
            }
            else if ('current' in target) {
                targetRef.current = target.current;
            }
            else {
                targetRef.current = target;
            }
        }
        previousTargetProp.current = target;
    }
    return [targetRef, targetWindow];
}


/***/ }),

/***/ "../react-hooks/lib/useWarnings.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWarnings", function() { return useWarnings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../utilities/lib/warn.js");
/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../react-hooks/lib/usePrevious.js");
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../react-hooks/lib/useConst.js");





var warningId = 0;
/**
 * Only in development mode, display console warnings when certain conditions are met.
 * Note that all warnings except `controlledUsage` will only be shown on first render
 * (new `controlledUsage` warnings may be shown later due to prop changes).
 */
function useWarnings(options) {
    if (true) {
        var name_1 = options.name, props = options.props, _a = options.other, other = _a === void 0 ? [] : _a, conditionallyRequired = options.conditionallyRequired, deprecations = options.deprecations, mutuallyExclusive = options.mutuallyExclusive, controlledUsage = options.controlledUsage;
        /* eslint-disable react-hooks/rules-of-hooks -- build-time conditional */
        var hasWarnedRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](false);
        var componentId = Object(_useConst__WEBPACK_IMPORTED_MODULE_4__["useConst"])(function () { return "useWarnings_" + warningId++; });
        var oldProps = Object(_usePrevious__WEBPACK_IMPORTED_MODULE_3__["usePrevious"])(props);
        /* eslint-enable react-hooks/rules-of-hooks */
        // Warn synchronously (not in useEffect) on first render to make debugging easier.
        if (!hasWarnedRef.current) {
            hasWarnedRef.current = true;
            for (var _i = 0, other_1 = other; _i < other_1.length; _i++) {
                var warning = other_1[_i];
                Object(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__["warn"])(warning);
            }
            if (conditionallyRequired) {
                for (var _b = 0, conditionallyRequired_1 = conditionallyRequired; _b < conditionallyRequired_1.length; _b++) {
                    var req = conditionallyRequired_1[_b];
                    Object(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__["warnConditionallyRequiredProps"])(name_1, props, req.requiredProps, req.conditionalPropName, req.condition);
                }
            }
            deprecations && Object(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__["warnDeprecations"])(name_1, props, deprecations);
            mutuallyExclusive && Object(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__["warnMutuallyExclusive"])(name_1, props, mutuallyExclusive);
        }
        // Controlled usage warnings may be displayed on either first or subsequent renders due to
        // prop changes. Note that it's safe to run this synchronously (not in useEffect) even in
        // concurrent mode because `warnControlledUsage` internally tracks which warnings have been
        // displayed for each component instance (so nothing will be displayed twice).
        controlledUsage && Object(_uifabric_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_2__["warnControlledUsage"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, controlledUsage), { componentId: componentId, props: props, componentName: name_1, oldProps: oldProps }));
    }
}


/***/ }),

/***/ "../react-hooks/lib/version.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../set-version/lib/index.js");
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.

Object(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@uifabric/react-hooks', '7.13.11');


/***/ }),

/***/ "../react-stylesheets/lib/StylesheetContext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerStyles", function() { return registerStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesheetContext", function() { return StylesheetContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var defaultDocument = { document: 'document' };
/**
 * Register styles can be called with a single or multiple stylesheets. Each will be evaluated
 * if they've been registered already, and then passed along to `renderStyles` if they're new
 * to the given context.
 */
var registerStyles = function (sheets, context) {
    var styleCache = context.styleCache, target = context.target;
    if (!sheets || sheets.length < 1) {
        return;
    }
    if (!Array.isArray(sheets)) {
        sheets = [sheets];
    }
    // Grab the style cache for the target document.
    var sheetsToRender = [];
    var cacheKey = target || defaultDocument;
    var targetStylesheets = styleCache.get(cacheKey);
    if (!targetStylesheets) {
        targetStylesheets = new Map();
        styleCache.set(cacheKey, targetStylesheets);
    }
    for (var _i = 0, sheets_1 = sheets; _i < sheets_1.length; _i++) {
        var sheet = sheets_1[_i];
        if (!targetStylesheets.has(sheet)) {
            sheetsToRender.push(sheet);
            targetStylesheets.set(sheet, true);
        }
    }
    if (sheetsToRender.length) {
        context.renderStyles(sheetsToRender, context);
    }
};
/**
 * Default renderStyles implementation, which will render the give sheets to the contextual
 * target.
 */
var renderStyles = function (sheets, context) {
    var target = context.target;
    if (sheets.length && target) {
        var styleElement = target.createElement('style');
        styleElement.textContent = sheets.join('');
        target.head.appendChild(styleElement);
    }
};
// Shared stylesheet context, providing the registration function and target document.
var StylesheetContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
    registerStyles: registerStyles,
    renderStyles: renderStyles,
    target: typeof window === 'object' ? window.document : undefined,
    styleCache: new WeakMap(),
});


/***/ }),

/***/ "../react-stylesheets/lib/StylesheetProvider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesheetProvider", function() { return StylesheetProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesheetConsumer", function() { return StylesheetConsumer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StylesheetContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../react-stylesheets/lib/StylesheetContext.js");



/**
 * Provider for registering stylesheets in a given target document.
 * The `register` method can be called many times and will only register once
 * per unique target document.
 */
var StylesheetProvider = function (props) {
    var context = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_StylesheetContext__WEBPACK_IMPORTED_MODULE_2__["StylesheetContext"]);
    var mergedContext = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), props)); }, 
    // Only recompute the context to pass down if the parent passes a new one. Props should not
    // be mutating dynamically for a provider, or may be doing so accidentally. Avoid recomputations.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [context]);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_StylesheetContext__WEBPACK_IMPORTED_MODULE_2__["StylesheetContext"].Provider, { value: mergedContext }, props.children);
};
var StylesheetConsumer = _StylesheetContext__WEBPACK_IMPORTED_MODULE_2__["StylesheetContext"].Consumer;


/***/ }),

/***/ "../react-stylesheets/lib/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../react-stylesheets/lib/version.js");
/* harmony import */ var _StylesheetContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../react-stylesheets/lib/StylesheetContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesheetContext", function() { return _StylesheetContext__WEBPACK_IMPORTED_MODULE_1__["StylesheetContext"]; });

/* harmony import */ var _StylesheetProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../react-stylesheets/lib/StylesheetProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesheetProvider", function() { return _StylesheetProvider__WEBPACK_IMPORTED_MODULE_2__["StylesheetProvider"]; });

/* harmony import */ var _useStylesheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../react-stylesheets/lib/useStylesheet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStylesheet", function() { return _useStylesheet__WEBPACK_IMPORTED_MODULE_3__["useStylesheet"]; });







/***/ }),

/***/ "../react-stylesheets/lib/useStylesheet.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStylesheet", function() { return useStylesheet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StylesheetContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../react-stylesheets/lib/StylesheetContext.js");


/**
 * A hook for providing a stylesheet or array of stylesheets. Can be used standalone
 * or with the `StylesheetProvider` component to direct styles to be registered to a
 * different target such as a child window or as a string in SSR scenarios.
 */
var useStylesheet = function (sheets) {
    var context = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_StylesheetContext__WEBPACK_IMPORTED_MODULE_1__["StylesheetContext"]);
    context.registerStyles(sheets, context);
};


/***/ }),

/***/ "../react-stylesheets/lib/version.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../set-version/lib/index.js");
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.

Object(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@fluentui/react-stylesheets', '0.2.4');


/***/ }),

/***/ "../react-window-provider/lib/WindowProvider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowContext", function() { return WindowContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWindow", function() { return useWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDocument", function() { return useDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowProvider", function() { return WindowProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Context for providing the window.
 */
var WindowContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
    window: typeof window === 'object' ? window : undefined,
});
/**
 * Hook to access the window object. This can be overridden contextually using the `WindowProvider`.
 */
var useWindow = function () { return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](WindowContext).window; };
/**
 * Hook to access the document object. This can be overridden contextually using the `WindowProvider`.
 */
var useDocument = function () { var _a; return (_a = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](WindowContext).window) === null || _a === void 0 ? void 0 : _a.document; };
/**
 * Component to provide the window object contextually. This is useful when rendering content to an element
 * contained within a child window or iframe element, where event handlers and styling must be projected
 * to an alternative window or document.
 */
var WindowProvider = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WindowContext.Provider, { value: props }, props.children);
};


/***/ }),

/***/ "../react-window-provider/lib/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WindowProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../react-window-provider/lib/WindowProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowContext", function() { return _WindowProvider__WEBPACK_IMPORTED_MODULE_0__["WindowContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWindow", function() { return _WindowProvider__WEBPACK_IMPORTED_MODULE_0__["useWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDocument", function() { return _WindowProvider__WEBPACK_IMPORTED_MODULE_0__["useDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowProvider", function() { return _WindowProvider__WEBPACK_IMPORTED_MODULE_0__["WindowProvider"]; });




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

/***/ "../theme/lib/FluentTheme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FluentTheme", function() { return FluentTheme; });
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../theme/lib/createTheme.js");

var FluentTheme = Object(_createTheme__WEBPACK_IMPORTED_MODULE_0__["createTheme"])({});


/***/ }),

/***/ "../theme/lib/colors/DefaultPalette.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPalette", function() { return DefaultPalette; });
// When adding or removing a color, make sure you keep this consistent with IColorClassNames
// by adding the color variants.
var DefaultPalette = {
    themeDarker: '#004578',
    themeDark: '#005a9e',
    themeDarkAlt: '#106ebe',
    themePrimary: '#0078d4',
    themeSecondary: '#2b88d8',
    themeTertiary: '#71afe5',
    themeLight: '#c7e0f4',
    themeLighter: '#deecf9',
    themeLighterAlt: '#eff6fc',
    black: '#000000',
    blackTranslucent40: 'rgba(0,0,0,.4)',
    neutralDark: '#201f1e',
    neutralPrimary: '#323130',
    neutralPrimaryAlt: '#3b3a39',
    neutralSecondary: '#605e5c',
    neutralSecondaryAlt: '#8a8886',
    neutralTertiary: '#a19f9d',
    neutralTertiaryAlt: '#c8c6c4',
    neutralQuaternary: '#d2d0ce',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralLight: '#edebe9',
    neutralLighter: '#f3f2f1',
    neutralLighterAlt: '#faf9f8',
    accent: '#0078d4',
    white: '#ffffff',
    whiteTranslucent40: 'rgba(255,255,255,.4)',
    yellowDark: '#d29200',
    yellow: '#ffb900',
    yellowLight: '#fff100',
    orange: '#d83b01',
    orangeLight: '#ea4300',
    orangeLighter: '#ff8c00',
    redDark: '#a4262c',
    red: '#e81123',
    magentaDark: '#5c005c',
    magenta: '#b4009e',
    magentaLight: '#e3008c',
    purpleDark: '#32145a',
    purple: '#5c2d91',
    purpleLight: '#b4a0ff',
    blueDark: '#002050',
    blueMid: '#00188f',
    blue: '#0078d4',
    blueLight: '#00bcf2',
    tealDark: '#004b50',
    teal: '#008272',
    tealLight: '#00b294',
    greenDark: '#004b1c',
    green: '#107c10',
    greenLight: '#bad80a',
};


/***/ }),

/***/ "../theme/lib/colors/FluentColors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationColors", function() { return CommunicationColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeutralColors", function() { return NeutralColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedColors", function() { return SharedColors; });
var CommunicationColors;
(function (CommunicationColors) {
    CommunicationColors.shade30 = '#004578';
    CommunicationColors.shade20 = '#005a9e';
    CommunicationColors.shade10 = '#106ebe';
    CommunicationColors.primary = '#0078d4';
    CommunicationColors.tint10 = '#2b88d8';
    CommunicationColors.tint20 = '#c7e0f4';
    CommunicationColors.tint30 = '#deecf9';
    CommunicationColors.tint40 = '#eff6fc';
})(CommunicationColors || (CommunicationColors = {}));
var NeutralColors;
(function (NeutralColors) {
    NeutralColors.black = '#000000';
    NeutralColors.gray220 = '#11100f';
    NeutralColors.gray210 = '#161514';
    NeutralColors.gray200 = '#1b1a19';
    NeutralColors.gray190 = '#201f1e';
    NeutralColors.gray180 = '#252423';
    NeutralColors.gray170 = '#292827';
    NeutralColors.gray160 = '#323130';
    NeutralColors.gray150 = '#3b3a39';
    NeutralColors.gray140 = '#484644';
    NeutralColors.gray130 = '#605e5c';
    NeutralColors.gray120 = '#797775';
    NeutralColors.gray110 = '#8a8886';
    NeutralColors.gray100 = '#979593';
    NeutralColors.gray90 = '#a19f9d';
    NeutralColors.gray80 = '#b3b0ad';
    NeutralColors.gray70 = '#bebbb8';
    NeutralColors.gray60 = '#c8c6c4';
    NeutralColors.gray50 = '#d2d0ce';
    NeutralColors.gray40 = '#e1dfdd';
    NeutralColors.gray30 = '#edebe9';
    NeutralColors.gray20 = '#f3f2f1';
    NeutralColors.gray10 = '#faf9f8';
    NeutralColors.white = '#ffffff';
})(NeutralColors || (NeutralColors = {}));
var SharedColors;
(function (SharedColors) {
    SharedColors.pinkRed10 = '#750b1c';
    SharedColors.red20 = '#a4262c';
    SharedColors.red10 = '#d13438';
    SharedColors.redOrange20 = '#603d30';
    SharedColors.redOrange10 = '#da3b01';
    SharedColors.orange30 = '#8e562e';
    SharedColors.orange20 = '#ca5010';
    SharedColors.orange10 = '#ffaa44';
    SharedColors.yellow10 = '#fce100';
    SharedColors.orangeYellow20 = '#986f0b';
    SharedColors.orangeYellow10 = '#c19c00';
    SharedColors.yellowGreen10 = '#8cbd18';
    SharedColors.green20 = '#0b6a0b';
    SharedColors.green10 = '#498205';
    SharedColors.greenCyan10 = '#00ad56';
    SharedColors.cyan40 = '#005e50';
    SharedColors.cyan30 = '#005b70';
    SharedColors.cyan20 = '#038387';
    SharedColors.cyan10 = '#00b7c3';
    SharedColors.cyanBlue20 = '#004e8c';
    SharedColors.cyanBlue10 = '#0078d4';
    SharedColors.blue10 = '#4f6bed';
    SharedColors.blueMagenta40 = '#373277';
    SharedColors.blueMagenta30 = '#5c2e91';
    SharedColors.blueMagenta20 = '#8764b8';
    SharedColors.blueMagenta10 = '#8378de';
    SharedColors.magenta20 = '#881798';
    SharedColors.magenta10 = '#c239b3';
    SharedColors.magentaPink20 = '#9b0062';
    SharedColors.magentaPink10 = '#e3008c';
    SharedColors.gray40 = '#393939';
    SharedColors.gray30 = '#7a7574';
    SharedColors.gray20 = '#69797e';
    SharedColors.gray10 = '#a0aeb2';
})(SharedColors || (SharedColors = {}));


/***/ }),

/***/ "../theme/lib/colors/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FluentColors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../theme/lib/colors/FluentColors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommunicationColors", function() { return _FluentColors__WEBPACK_IMPORTED_MODULE_0__["CommunicationColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NeutralColors", function() { return _FluentColors__WEBPACK_IMPORTED_MODULE_0__["NeutralColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedColors", function() { return _FluentColors__WEBPACK_IMPORTED_MODULE_0__["SharedColors"]; });

/* harmony import */ var _DefaultPalette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/lib/colors/DefaultPalette.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultPalette", function() { return _DefaultPalette__WEBPACK_IMPORTED_MODULE_1__["DefaultPalette"]; });





/***/ }),

/***/ "../theme/lib/createTheme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTheme", function() { return createTheme; });
/* harmony import */ var _colors_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../theme/lib/colors/index.js");
/* harmony import */ var _effects_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/lib/effects/index.js");
/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../theme/lib/fonts/index.js");
/* harmony import */ var _mergeThemes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../theme/lib/mergeThemes.js");
/* harmony import */ var _spacing_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../theme/lib/spacing/index.js");
/* harmony import */ var _utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../theme/lib/utilities/makeSemanticColors.js");






/**
 * Creates a custom theme definition.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function createTheme(theme, depComments) {
    if (theme === void 0) { theme = {}; }
    if (depComments === void 0) { depComments = false; }
    var isInverted = !!theme.isInverted;
    var baseTheme = {
        palette: _colors_index__WEBPACK_IMPORTED_MODULE_0__["DefaultPalette"],
        effects: _effects_index__WEBPACK_IMPORTED_MODULE_1__["DefaultEffects"],
        fonts: _fonts_index__WEBPACK_IMPORTED_MODULE_2__["DefaultFontStyles"],
        spacing: _spacing_index__WEBPACK_IMPORTED_MODULE_4__["DefaultSpacing"],
        isInverted: isInverted,
        disableGlobalClassNames: false,
        semanticColors: Object(_utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_5__["makeSemanticColors"])(_colors_index__WEBPACK_IMPORTED_MODULE_0__["DefaultPalette"], _effects_index__WEBPACK_IMPORTED_MODULE_1__["DefaultEffects"], undefined, isInverted, depComments),
        rtl: undefined,
    };
    return Object(_mergeThemes__WEBPACK_IMPORTED_MODULE_3__["mergeThemes"])(baseTheme, theme);
}


/***/ }),

/***/ "../theme/lib/effects/DefaultEffects.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultEffects", function() { return DefaultEffects; });
/* harmony import */ var _FluentDepths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../theme/lib/effects/FluentDepths.js");

var DefaultEffects = {
    elevation4: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__["Depths"].depth4,
    elevation8: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__["Depths"].depth8,
    elevation16: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__["Depths"].depth16,
    elevation64: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__["Depths"].depth64,
    roundedCorner2: '2px',
    roundedCorner4: '4px',
    roundedCorner6: '6px',
};


/***/ }),

/***/ "../theme/lib/effects/FluentDepths.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Depths", function() { return Depths; });
var Depths;
(function (Depths) {
    Depths.depth0 = '0 0 0 0 transparent';
    Depths.depth4 = '0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth8 = '0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth16 = '0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth64 = '0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18)';
})(Depths || (Depths = {}));


/***/ }),

/***/ "../theme/lib/effects/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DefaultEffects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../theme/lib/effects/DefaultEffects.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultEffects", function() { return _DefaultEffects__WEBPACK_IMPORTED_MODULE_0__["DefaultEffects"]; });

/* harmony import */ var _FluentDepths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/lib/effects/FluentDepths.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Depths", function() { return _FluentDepths__WEBPACK_IMPORTED_MODULE_1__["Depths"]; });





/***/ }),

/***/ "../theme/lib/fonts/DefaultFontStyles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFontStyles", function() { return DefaultFontStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerDefaultFontFaces", function() { return registerDefaultFontFaces; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../merge-styles/lib/index.js");
/* harmony import */ var _FluentFonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/lib/fonts/FluentFonts.js");
/* harmony import */ var _createFontStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../theme/lib/fonts/createFontStyles.js");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../utilities/lib/index.js");




// Default urls.
var DefaultBaseUrl = 'https://static2.sharepointonline.com/files/fabric/assets';
// Standard font styling.
var DefaultFontStyles = Object(_createFontStyles__WEBPACK_IMPORTED_MODULE_2__["createFontStyles"])(Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_3__["getLanguage"])('sessionStorage'));
function _registerFontFace(fontFamily, url, fontWeight, localFontName) {
    fontFamily = "'" + fontFamily + "'";
    var localFontSrc = localFontName !== undefined ? "local('" + localFontName + "')," : '';
    Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["fontFace"])({
        fontFamily: fontFamily,
        src: localFontSrc + ("url('" + url + ".woff2') format('woff2'),") + ("url('" + url + ".woff') format('woff')"),
        fontWeight: fontWeight,
        fontStyle: 'normal',
        fontDisplay: 'swap',
    });
}
function _registerFontFaceSet(baseUrl, fontFamily, cdnFolder, cdnFontName, localFontName) {
    if (cdnFontName === void 0) { cdnFontName = 'segoeui'; }
    var urlBase = baseUrl + "/" + cdnFolder + "/" + cdnFontName;
    _registerFontFace(fontFamily, urlBase + '-light', _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].light, localFontName && localFontName + ' Light');
    _registerFontFace(fontFamily, urlBase + '-semilight', _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semilight, localFontName && localFontName + ' SemiLight');
    _registerFontFace(fontFamily, urlBase + '-regular', _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].regular, localFontName);
    _registerFontFace(fontFamily, urlBase + '-semibold', _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semibold, localFontName && localFontName + ' SemiBold');
    _registerFontFace(fontFamily, urlBase + '-bold', _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].bold, localFontName && localFontName + ' Bold');
}
function registerDefaultFontFaces(baseUrl) {
    if (baseUrl) {
        var fontUrl = baseUrl + "/fonts";
        // Produce @font-face definitions for all supported web fonts.
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Thai, 'leelawadeeui-thai', 'leelawadeeui');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Arabic, 'segoeui-arabic');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Cyrillic, 'segoeui-cyrillic');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].EastEuropean, 'segoeui-easteuropean');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Greek, 'segoeui-greek');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Hebrew, 'segoeui-hebrew');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Vietnamese, 'segoeui-vietnamese');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].WestEuropean, 'segoeui-westeuropean', 'segoeui', 'Segoe UI');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontFamilies"].Selawik, 'selawik', 'selawik');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Armenian, 'segoeui-armenian');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Georgian, 'segoeui-georgian');
        // Leelawadee UI (Thai) does not have a 'light' weight, so we override
        // the font-face generated above to use the 'semilight' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-semilight", _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].light);
        // Leelawadee UI (Thai) does not have a 'semibold' weight, so we override
        // the font-face generated above to use the 'bold' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-bold", _FluentFonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semibold);
    }
}
/**
 * Reads the fontBaseUrl from window.FabricConfig.fontBaseUrl or falls back to a default.
 */
function _getFontBaseUrl() {
    var _a, _b, _c;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var fabricConfig = (_a = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_3__["getWindow"])()) === null || _a === void 0 ? void 0 : _a.FabricConfig;
    return _c = (_b = fabricConfig) === null || _b === void 0 ? void 0 : _b.fontBaseUrl, (_c !== null && _c !== void 0 ? _c : DefaultBaseUrl);
}
/**
 * Register the font faces.
 */
registerDefaultFontFaces(_getFontBaseUrl());


/***/ }),

/***/ "../theme/lib/fonts/FluentFonts.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontNames", function() { return LocalizedFontNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontFamilies", function() { return LocalizedFontFamilies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontSizes", function() { return FontSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontWeights", function() { return FontWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconFontSizes", function() { return IconFontSizes; });
// Font face names to be registered.
var LocalizedFontNames;
(function (LocalizedFontNames) {
    LocalizedFontNames.Arabic = 'Segoe UI Web (Arabic)';
    LocalizedFontNames.Cyrillic = 'Segoe UI Web (Cyrillic)';
    LocalizedFontNames.EastEuropean = 'Segoe UI Web (East European)';
    LocalizedFontNames.Greek = 'Segoe UI Web (Greek)';
    LocalizedFontNames.Hebrew = 'Segoe UI Web (Hebrew)';
    LocalizedFontNames.Thai = 'Leelawadee UI Web';
    LocalizedFontNames.Vietnamese = 'Segoe UI Web (Vietnamese)';
    LocalizedFontNames.WestEuropean = 'Segoe UI Web (West European)';
    LocalizedFontNames.Selawik = 'Selawik Web';
    LocalizedFontNames.Armenian = 'Segoe UI Web (Armenian)';
    LocalizedFontNames.Georgian = 'Segoe UI Web (Georgian)';
})(LocalizedFontNames || (LocalizedFontNames = {}));
// Font families with fallbacks, for the general regions.
var LocalizedFontFamilies;
(function (LocalizedFontFamilies) {
    LocalizedFontFamilies.Arabic = "'" + LocalizedFontNames.Arabic + "'";
    LocalizedFontFamilies.ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun";
    LocalizedFontFamilies.ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu";
    LocalizedFontFamilies.Cyrillic = "'" + LocalizedFontNames.Cyrillic + "'";
    LocalizedFontFamilies.EastEuropean = "'" + LocalizedFontNames.EastEuropean + "'";
    LocalizedFontFamilies.Greek = "'" + LocalizedFontNames.Greek + "'";
    LocalizedFontFamilies.Hebrew = "'" + LocalizedFontNames.Hebrew + "'";
    LocalizedFontFamilies.Hindi = "'Nirmala UI'";
    LocalizedFontFamilies.Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka";
    LocalizedFontFamilies.Korean = "'Malgun Gothic', Gulim";
    LocalizedFontFamilies.Selawik = "'" + LocalizedFontNames.Selawik + "'";
    LocalizedFontFamilies.Thai = "'Leelawadee UI Web', 'Kmer UI'";
    LocalizedFontFamilies.Vietnamese = "'" + LocalizedFontNames.Vietnamese + "'";
    LocalizedFontFamilies.WestEuropean = "'" + LocalizedFontNames.WestEuropean + "'";
    LocalizedFontFamilies.Armenian = "'" + LocalizedFontNames.Armenian + "'";
    LocalizedFontFamilies.Georgian = "'" + LocalizedFontNames.Georgian + "'";
})(LocalizedFontFamilies || (LocalizedFontFamilies = {}));
// Standard font sizes.
var FontSizes;
(function (FontSizes) {
    FontSizes.size10 = '10px';
    FontSizes.size12 = '12px';
    FontSizes.size14 = '14px';
    FontSizes.size16 = '16px';
    FontSizes.size18 = '18px';
    FontSizes.size20 = '20px';
    FontSizes.size24 = '24px';
    FontSizes.size28 = '28px';
    FontSizes.size32 = '32px';
    FontSizes.size42 = '42px';
    FontSizes.size68 = '68px';
    FontSizes.mini = '10px';
    FontSizes.xSmall = '10px';
    FontSizes.small = '12px';
    FontSizes.smallPlus = '12px';
    FontSizes.medium = '14px';
    FontSizes.mediumPlus = '16px';
    FontSizes.icon = '16px';
    FontSizes.large = '18px';
    FontSizes.xLarge = '20px';
    FontSizes.xLargePlus = '24px';
    FontSizes.xxLarge = '28px';
    FontSizes.xxLargePlus = '32px';
    FontSizes.superLarge = '42px';
    FontSizes.mega = '68px';
})(FontSizes || (FontSizes = {}));
// Standard font weights.
var FontWeights;
(function (FontWeights) {
    FontWeights.light = 100;
    FontWeights.semilight = 300;
    FontWeights.regular = 400;
    FontWeights.semibold = 600;
    FontWeights.bold = 700;
})(FontWeights || (FontWeights = {}));
// Standard Icon Sizes.
var IconFontSizes;
(function (IconFontSizes) {
    IconFontSizes.xSmall = '10px';
    IconFontSizes.small = '12px';
    IconFontSizes.medium = '16px';
    IconFontSizes.large = '20px';
})(IconFontSizes || (IconFontSizes = {}));


/***/ }),

/***/ "../theme/lib/fonts/createFontStyles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFontStyles", function() { return createFontStyles; });
/* harmony import */ var _FluentFonts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../theme/lib/fonts/FluentFonts.js");

// Fallback fonts, if specified system or web fonts are unavailable.
var FontFamilyFallbacks = "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif";
// By default, we favor system fonts for the default.
// All localized fonts use a web font and never use the system font.
var defaultFontFamily = "'Segoe UI', '" + _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontNames"].WestEuropean + "'";
// Mapping of language prefix to to font family.
var LanguageToFontMap = {
    ar: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Arabic,
    bg: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Cyrillic,
    cs: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    el: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Greek,
    et: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    he: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Hebrew,
    hi: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Hindi,
    hr: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    hu: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    ja: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Japanese,
    kk: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    ko: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Korean,
    lt: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    lv: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    pl: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    ru: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Cyrillic,
    sk: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    'sr-latn': _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    th: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Thai,
    tr: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].EastEuropean,
    uk: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Cyrillic,
    vi: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Vietnamese,
    'zh-hans': _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].ChineseSimplified,
    'zh-hant': _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].ChineseTraditional,
    hy: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Armenian,
    ka: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"].Georgian,
};
function _fontFamilyWithFallbacks(fontFamily) {
    return fontFamily + ", " + FontFamilyFallbacks;
}
/**
 * If there is a localized font for this language, return that.
 * Returns undefined if there is no localized font for that language.
 */
function _getLocalizedFontFamily(language) {
    for (var lang in LanguageToFontMap) {
        if (LanguageToFontMap.hasOwnProperty(lang) && language && lang.indexOf(language) === 0) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return LanguageToFontMap[lang];
        }
    }
    return defaultFontFamily;
}
function _createFont(size, weight, fontFamily) {
    return {
        fontFamily: fontFamily,
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        fontSize: size,
        fontWeight: weight,
    };
}
function createFontStyles(localeCode) {
    var localizedFont = _getLocalizedFontFamily(localeCode);
    var fontFamilyWithFallback = _fontFamilyWithFallbacks(localizedFont);
    var fontStyles = {
        tiny: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].mini, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular, fontFamilyWithFallback),
        xSmall: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].xSmall, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular, fontFamilyWithFallback),
        small: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].small, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular, fontFamilyWithFallback),
        smallPlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].smallPlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular, fontFamilyWithFallback),
        medium: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].medium, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular, fontFamilyWithFallback),
        mediumPlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].mediumPlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular, fontFamilyWithFallback),
        large: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].large, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular, fontFamilyWithFallback),
        xLarge: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].xLarge, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold, fontFamilyWithFallback),
        xLargePlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].xLargePlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold, fontFamilyWithFallback),
        xxLarge: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].xxLarge, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold, fontFamilyWithFallback),
        xxLargePlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].xxLargePlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold, fontFamilyWithFallback),
        superLarge: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].superLarge, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold, fontFamilyWithFallback),
        mega: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].mega, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold, fontFamilyWithFallback),
    };
    return fontStyles;
}


/***/ }),

/***/ "../theme/lib/fonts/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FluentFonts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../theme/lib/fonts/FluentFonts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontNames", function() { return _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontFamilies", function() { return _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["LocalizedFontFamilies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizes", function() { return _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontWeights", function() { return _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["FontWeights"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconFontSizes", function() { return _FluentFonts__WEBPACK_IMPORTED_MODULE_0__["IconFontSizes"]; });

/* harmony import */ var _createFontStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/lib/fonts/createFontStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFontStyles", function() { return _createFontStyles__WEBPACK_IMPORTED_MODULE_1__["createFontStyles"]; });

/* harmony import */ var _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../theme/lib/fonts/DefaultFontStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFontStyles", function() { return _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_2__["DefaultFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerDefaultFontFaces", function() { return _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_2__["registerDefaultFontFaces"]; });






/***/ }),

/***/ "../theme/lib/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mergeThemes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../theme/lib/mergeThemes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeThemes", function() { return _mergeThemes__WEBPACK_IMPORTED_MODULE_0__["mergeThemes"]; });

/* harmony import */ var _colors_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/lib/colors/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommunicationColors", function() { return _colors_index__WEBPACK_IMPORTED_MODULE_1__["CommunicationColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NeutralColors", function() { return _colors_index__WEBPACK_IMPORTED_MODULE_1__["NeutralColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedColors", function() { return _colors_index__WEBPACK_IMPORTED_MODULE_1__["SharedColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultPalette", function() { return _colors_index__WEBPACK_IMPORTED_MODULE_1__["DefaultPalette"]; });

/* harmony import */ var _effects_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../theme/lib/effects/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultEffects", function() { return _effects_index__WEBPACK_IMPORTED_MODULE_2__["DefaultEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Depths", function() { return _effects_index__WEBPACK_IMPORTED_MODULE_2__["Depths"]; });

/* harmony import */ var _spacing_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../theme/lib/spacing/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultSpacing", function() { return _spacing_index__WEBPACK_IMPORTED_MODULE_3__["DefaultSpacing"]; });

/* harmony import */ var _motion_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../theme/lib/motion/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionDurations", function() { return _motion_index__WEBPACK_IMPORTED_MODULE_4__["MotionDurations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionTimings", function() { return _motion_index__WEBPACK_IMPORTED_MODULE_4__["MotionTimings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionAnimations", function() { return _motion_index__WEBPACK_IMPORTED_MODULE_4__["MotionAnimations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationVariables", function() { return _motion_index__WEBPACK_IMPORTED_MODULE_4__["AnimationVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationStyles", function() { return _motion_index__WEBPACK_IMPORTED_MODULE_4__["AnimationStyles"]; });

/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../theme/lib/fonts/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontNames", function() { return _fonts_index__WEBPACK_IMPORTED_MODULE_5__["LocalizedFontNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontFamilies", function() { return _fonts_index__WEBPACK_IMPORTED_MODULE_5__["LocalizedFontFamilies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizes", function() { return _fonts_index__WEBPACK_IMPORTED_MODULE_5__["FontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontWeights", function() { return _fonts_index__WEBPACK_IMPORTED_MODULE_5__["FontWeights"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconFontSizes", function() { return _fonts_index__WEBPACK_IMPORTED_MODULE_5__["IconFontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFontStyles", function() { return _fonts_index__WEBPACK_IMPORTED_MODULE_5__["createFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFontStyles", function() { return _fonts_index__WEBPACK_IMPORTED_MODULE_5__["DefaultFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerDefaultFontFaces", function() { return _fonts_index__WEBPACK_IMPORTED_MODULE_5__["registerDefaultFontFaces"]; });

/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../theme/lib/createTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTheme", function() { return _createTheme__WEBPACK_IMPORTED_MODULE_6__["createTheme"]; });

/* harmony import */ var _FluentTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../theme/lib/FluentTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FluentTheme", function() { return _FluentTheme__WEBPACK_IMPORTED_MODULE_7__["FluentTheme"]; });











/***/ }),

/***/ "../theme/lib/mergeThemes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeThemes", function() { return mergeThemes; });
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/index.js");
/* harmony import */ var _utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/lib/utilities/makeSemanticColors.js");


/**
 * Merge a partial/full theme into a full theme and returns a merged full theme.
 */
function mergeThemes(theme, partialTheme) {
    if (partialTheme === void 0) { partialTheme = {}; }
    var _a, _b, _c, _d;
    var mergedTheme = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, theme, partialTheme, {
        semanticColors: Object(_utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_1__["getSemanticColors"])(partialTheme.palette, partialTheme.effects, partialTheme.semanticColors, partialTheme.isInverted === undefined ? theme.isInverted : partialTheme.isInverted),
    });
    if (((_a = partialTheme.palette) === null || _a === void 0 ? void 0 : _a.themePrimary) && !((_b = partialTheme.palette) === null || _b === void 0 ? void 0 : _b.accent)) {
        mergedTheme.palette.accent = partialTheme.palette.themePrimary;
    }
    if (partialTheme.defaultFontStyle) {
        for (var _i = 0, _e = Object.keys(mergedTheme.fonts); _i < _e.length; _i++) {
            var fontStyle = _e[_i];
            mergedTheme.fonts[fontStyle] = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["merge"])(mergedTheme.fonts[fontStyle], partialTheme.defaultFontStyle, (_d = (_c = partialTheme) === null || _c === void 0 ? void 0 : _c.fonts) === null || _d === void 0 ? void 0 : _d[fontStyle]);
        }
    }
    if (partialTheme.stylesheets) {
        mergedTheme.stylesheets = (theme.stylesheets || []).concat(partialTheme.stylesheets);
    }
    return mergedTheme;
}


/***/ }),

/***/ "../theme/lib/motion/AnimationStyles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationVariables", function() { return AnimationVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationStyles", function() { return AnimationStyles; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../merge-styles/lib/index.js");

/* Register the keyframes */
var EASING_FUNCTION_1 = 'cubic-bezier(.1,.9,.2,1)';
var EASING_FUNCTION_2 = 'cubic-bezier(.1,.25,.75,.9)';
var DURATION_1 = '0.167s';
var DURATION_2 = '0.267s';
var DURATION_3 = '0.367s';
var DURATION_4 = '0.467s';
var FADE_IN = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { opacity: 0 },
    to: { opacity: 1 },
});
var FADE_OUT = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { opacity: 1 },
    to: { opacity: 0, visibility: 'hidden' },
});
var SLIDE_RIGHT_IN10 = _createSlideInX(-10);
var SLIDE_RIGHT_IN20 = _createSlideInX(-20);
var SLIDE_RIGHT_IN40 = _createSlideInX(-40);
var SLIDE_RIGHT_IN400 = _createSlideInX(-400);
var SLIDE_LEFT_IN10 = _createSlideInX(10);
var SLIDE_LEFT_IN20 = _createSlideInX(20);
var SLIDE_LEFT_IN40 = _createSlideInX(40);
var SLIDE_LEFT_IN400 = _createSlideInX(400);
var SLIDE_UP_IN10 = _createSlideInY(10);
var SLIDE_UP_IN20 = _createSlideInY(20);
var SLIDE_DOWN_IN10 = _createSlideInY(-10);
var SLIDE_DOWN_IN20 = _createSlideInY(-20);
var SLIDE_RIGHT_OUT10 = _createSlideOutX(10);
var SLIDE_RIGHT_OUT20 = _createSlideOutX(20);
var SLIDE_RIGHT_OUT40 = _createSlideOutX(40);
var SLIDE_RIGHT_OUT400 = _createSlideOutX(400);
var SLIDE_LEFT_OUT10 = _createSlideOutX(-10);
var SLIDE_LEFT_OUT20 = _createSlideOutX(-20);
var SLIDE_LEFT_OUT40 = _createSlideOutX(-40);
var SLIDE_LEFT_OUT400 = _createSlideOutX(-400);
var SLIDE_UP_OUT10 = _createSlideOutY(-10);
var SLIDE_UP_OUT20 = _createSlideOutY(-20);
var SLIDE_DOWN_OUT10 = _createSlideOutY(10);
var SLIDE_DOWN_OUT20 = _createSlideOutY(20);
var SCALE_UP100 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(.98,.98,1)' },
    to: { transform: 'scale3d(1,1,1)' },
});
var SCALE_DOWN98 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(.98,.98,1)' },
});
var SCALE_DOWN100 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(1.03,1.03,1)' },
    to: { transform: 'scale3d(1,1,1)' },
});
var SCALE_UP103 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(1.03,1.03,1)' },
});
var ROTATE90 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(90deg)' },
});
var ROTATE_N90 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(-90deg)' },
});
/**
 * Exporting raw duraction values and easing functions to be used in custom animations
 */
var AnimationVariables = {
    easeFunction1: EASING_FUNCTION_1,
    easeFunction2: EASING_FUNCTION_2,
    durationValue1: DURATION_1,
    durationValue2: DURATION_2,
    durationValue3: DURATION_3,
    durationValue4: DURATION_4,
};
/**
 * All Fabric standard animations, exposed as json objects referencing predefined
 * keyframes. These objects can be mixed in with other class definitions.
 */
var AnimationStyles = {
    slideRightIn10: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideRightIn20: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightIn40: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideRightIn400: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn10: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn20: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn40: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn400: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideUpIn10: _createAnimation(FADE_IN + "," + SLIDE_UP_IN10, DURATION_3, EASING_FUNCTION_1),
    slideUpIn20: _createAnimation(FADE_IN + "," + SLIDE_UP_IN20, DURATION_3, EASING_FUNCTION_1),
    slideDownIn10: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN10, DURATION_3, EASING_FUNCTION_1),
    slideDownIn20: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut10: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideRightOut20: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut40: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideRightOut400: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut10: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut20: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut40: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut400: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideUpOut10: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideUpOut20: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideDownOut10: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideDownOut20: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT20, DURATION_3, EASING_FUNCTION_1),
    scaleUpIn100: _createAnimation(FADE_IN + "," + SCALE_UP100, DURATION_3, EASING_FUNCTION_1),
    scaleDownIn100: _createAnimation(FADE_IN + "," + SCALE_DOWN100, DURATION_3, EASING_FUNCTION_1),
    scaleUpOut103: _createAnimation(FADE_OUT + "," + SCALE_UP103, DURATION_1, EASING_FUNCTION_2),
    scaleDownOut98: _createAnimation(FADE_OUT + "," + SCALE_DOWN98, DURATION_1, EASING_FUNCTION_2),
    fadeIn100: _createAnimation(FADE_IN, DURATION_1, EASING_FUNCTION_2),
    fadeIn200: _createAnimation(FADE_IN, DURATION_2, EASING_FUNCTION_2),
    fadeIn400: _createAnimation(FADE_IN, DURATION_3, EASING_FUNCTION_2),
    fadeIn500: _createAnimation(FADE_IN, DURATION_4, EASING_FUNCTION_2),
    fadeOut100: _createAnimation(FADE_OUT, DURATION_1, EASING_FUNCTION_2),
    fadeOut200: _createAnimation(FADE_OUT, DURATION_2, EASING_FUNCTION_2),
    fadeOut400: _createAnimation(FADE_OUT, DURATION_3, EASING_FUNCTION_2),
    fadeOut500: _createAnimation(FADE_OUT, DURATION_4, EASING_FUNCTION_2),
    rotate90deg: _createAnimation(ROTATE90, '0.1s', EASING_FUNCTION_2),
    rotateN90deg: _createAnimation(ROTATE_N90, '0.1s', EASING_FUNCTION_2),
};
function _createAnimation(animationName, animationDuration, animationTimingFunction) {
    return {
        animationName: animationName,
        animationDuration: animationDuration,
        animationTimingFunction: animationTimingFunction,
        animationFillMode: 'both',
    };
}
function _createSlideInX(fromX) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        from: { transform: "translate3d(" + fromX + "px,0,0)", pointerEvents: 'none' },
        to: { transform: "translate3d(0,0,0)", pointerEvents: 'auto' },
    });
}
function _createSlideInY(fromY) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        from: { transform: "translate3d(0," + fromY + "px,0)", pointerEvents: 'none' },
        to: { transform: "translate3d(0,0,0)", pointerEvents: 'auto' },
    });
}
function _createSlideOutX(toX) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(" + toX + "px,0,0)" },
    });
}
function _createSlideOutY(toY) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(0," + toY + "px,0)" },
    });
}


/***/ }),

/***/ "../theme/lib/motion/FluentMotion.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionDurations", function() { return MotionDurations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionTimings", function() { return MotionTimings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionAnimations", function() { return MotionAnimations; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../merge-styles/lib/index.js");

var fadeInAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { opacity: 0 },
    to: { opacity: 1 },
});
var fadeOutAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { opacity: 1 },
    to: { opacity: 0 },
});
var scaleDownInAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(1.15, 1.15, 1)' },
    to: { transform: 'scale3d(1, 1, 1)' },
});
var scaleDownOutAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(1, 1, 1)' },
    to: { transform: 'scale3d(0.9, 0.9, 1)' },
});
var slideLeftOutAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'translate3d(0, 0, 0)' },
    to: { transform: 'translate3d(-48px, 0, 0)' },
});
var slideRightOutAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'translate3d(0, 0, 0)' },
    to: { transform: 'translate3d(48px, 0, 0)' },
});
var slideLeftInAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'translate3d(48px, 0, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' },
});
var slideRightInAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'translate3d(-48px, 0, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' },
});
var slideUpOutAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'translate3d(0, 0, 0)' },
    to: { transform: 'translate3d(0, -48px, 0)' },
});
var slideDownOutAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'translate3d(0, 0, 0)' },
    to: { transform: 'translate3d(0, 48px, 0)' },
});
var slideUpInAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'translate3d(0, 48px, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' },
});
var slideDownInAnimationName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'translate3d(0, -48px, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' },
});
var MotionDurations;
(function (MotionDurations) {
    MotionDurations.duration1 = '100ms';
    MotionDurations.duration2 = '200ms';
    MotionDurations.duration3 = '300ms';
    MotionDurations.duration4 = '400ms';
})(MotionDurations || (MotionDurations = {}));
var MotionTimings;
(function (MotionTimings) {
    MotionTimings.accelerate = 'cubic-bezier(0.9, 0.1, 1, 0.2)';
    MotionTimings.decelerate = 'cubic-bezier(0.1, 0.9, 0.2, 1)';
    MotionTimings.linear = 'cubic-bezier(0, 0, 1, 1)';
    MotionTimings.standard = 'cubic-bezier(0.8, 0, 0.2, 1)';
})(MotionTimings || (MotionTimings = {}));
function _createAnimation(animationName, animationDuration, animationTimingFunction) {
    return animationName + " " + animationDuration + " " + animationTimingFunction;
}
var MotionAnimations;
(function (MotionAnimations) {
    MotionAnimations.fadeIn = _createAnimation(fadeInAnimationName, MotionDurations.duration1, MotionTimings.linear);
    MotionAnimations.fadeOut = _createAnimation(fadeOutAnimationName, MotionDurations.duration1, MotionTimings.linear);
    MotionAnimations.scaleDownIn = _createAnimation(scaleDownInAnimationName, MotionDurations.duration3, MotionTimings.decelerate);
    MotionAnimations.scaleDownOut = _createAnimation(scaleDownOutAnimationName, MotionDurations.duration3, MotionTimings.decelerate);
    MotionAnimations.slideLeftOut = _createAnimation(slideLeftOutAnimationName, MotionDurations.duration1, MotionTimings.accelerate);
    MotionAnimations.slideRightOut = _createAnimation(slideRightOutAnimationName, MotionDurations.duration1, MotionTimings.accelerate);
    MotionAnimations.slideLeftIn = _createAnimation(slideLeftInAnimationName, MotionDurations.duration1, MotionTimings.decelerate);
    MotionAnimations.slideRightIn = _createAnimation(slideRightInAnimationName, MotionDurations.duration1, MotionTimings.decelerate);
    MotionAnimations.slideUpOut = _createAnimation(slideUpOutAnimationName, MotionDurations.duration1, MotionTimings.accelerate);
    MotionAnimations.slideDownOut = _createAnimation(slideDownOutAnimationName, MotionDurations.duration1, MotionTimings.accelerate);
    MotionAnimations.slideUpIn = _createAnimation(slideUpInAnimationName, MotionDurations.duration1, MotionTimings.decelerate);
    MotionAnimations.slideDownIn = _createAnimation(slideDownInAnimationName, MotionDurations.duration1, MotionTimings.decelerate);
})(MotionAnimations || (MotionAnimations = {}));


/***/ }),

/***/ "../theme/lib/motion/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FluentMotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../theme/lib/motion/FluentMotion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionDurations", function() { return _FluentMotion__WEBPACK_IMPORTED_MODULE_0__["MotionDurations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionTimings", function() { return _FluentMotion__WEBPACK_IMPORTED_MODULE_0__["MotionTimings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionAnimations", function() { return _FluentMotion__WEBPACK_IMPORTED_MODULE_0__["MotionAnimations"]; });

/* harmony import */ var _AnimationStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/lib/motion/AnimationStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationVariables", function() { return _AnimationStyles__WEBPACK_IMPORTED_MODULE_1__["AnimationVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationStyles", function() { return _AnimationStyles__WEBPACK_IMPORTED_MODULE_1__["AnimationStyles"]; });





/***/ }),

/***/ "../theme/lib/spacing/DefaultSpacing.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSpacing", function() { return DefaultSpacing; });
var DefaultSpacing = {
    s2: '4px',
    s1: '8px',
    m: '16px',
    l1: '20px',
    l2: '32px',
};


/***/ }),

/***/ "../theme/lib/spacing/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DefaultSpacing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../theme/lib/spacing/DefaultSpacing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultSpacing", function() { return _DefaultSpacing__WEBPACK_IMPORTED_MODULE_0__["DefaultSpacing"]; });




/***/ }),

/***/ "../theme/lib/utilities/makeSemanticColors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSemanticColors", function() { return makeSemanticColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSemanticColors", function() { return getSemanticColors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");

/** Generates all the semantic slot colors based on the theme so far
 * We'll use these as fallbacks for semantic slots that the passed in theme did not define.
 * The caller must still mix in the customized semantic slots at the end.
 */
function makeSemanticColors(p, e, s, isInverted, depComments) {
    if (depComments === void 0) { depComments = false; }
    var semanticColors = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ primaryButtonBorder: 'transparent', errorText: !isInverted ? '#a4262c' : '#F1707B', messageText: !isInverted ? '#323130' : '#F3F2F1', messageLink: !isInverted ? '#005A9E' : '#6CB8F6', messageLinkHovered: !isInverted ? '#004578' : '#82C7FF', infoIcon: !isInverted ? '#605e5c' : '#C8C6C4', errorIcon: !isInverted ? '#A80000' : '#F1707B', blockingIcon: !isInverted ? '#FDE7E9' : '#442726', warningIcon: !isInverted ? '#797775' : '#C8C6C4', severeWarningIcon: !isInverted ? '#D83B01' : '#FCE100', successIcon: !isInverted ? '#107C10' : '#92C353', infoBackground: !isInverted ? '#f3f2f1' : '#323130', errorBackground: !isInverted ? '#FDE7E9' : '#442726', blockingBackground: !isInverted ? '#FDE7E9' : '#442726', warningBackground: !isInverted ? '#FFF4CE' : '#433519', severeWarningBackground: !isInverted ? '#FED9CC' : '#4F2A0F', successBackground: !isInverted ? '#DFF6DD' : '#393D1B', 
        // deprecated
        warningHighlight: !isInverted ? '#ffb900' : '#fff100', successText: !isInverted ? '#107C10' : '#92c353' }, s);
    var fullSemanticColors = getSemanticColors(p, e, semanticColors, isInverted);
    return _fixDeprecatedSlots(fullSemanticColors, depComments);
}
/**
 * Map partial platte and effects to partial semantic colors.
 */
function getSemanticColors(p, e, s, isInverted, depComments) {
    if (depComments === void 0) { depComments = false; }
    var _a, _b, _c;
    var result = {};
    // map palette
    var _d = p || {}, white = _d.white, black = _d.black, themePrimary = _d.themePrimary, themeDark = _d.themeDark, themeDarker = _d.themeDarker, themeDarkAlt = _d.themeDarkAlt, themeLighter = _d.themeLighter, neutralLight = _d.neutralLight, neutralLighter = _d.neutralLighter, neutralDark = _d.neutralDark, neutralQuaternary = _d.neutralQuaternary, neutralQuaternaryAlt = _d.neutralQuaternaryAlt, neutralPrimary = _d.neutralPrimary, neutralSecondary = _d.neutralSecondary, neutralSecondaryAlt = _d.neutralSecondaryAlt, neutralTertiary = _d.neutralTertiary, neutralTertiaryAlt = _d.neutralTertiaryAlt, neutralLighterAlt = _d.neutralLighterAlt, accent = _d.accent;
    if (white) {
        result.bodyBackground = white;
        result.bodyFrameBackground = white;
        result.accentButtonText = white;
        result.buttonBackground = white;
        result.primaryButtonText = white;
        result.primaryButtonTextHovered = white;
        result.primaryButtonTextPressed = white;
        result.inputBackground = white;
        result.inputForegroundChecked = white;
        result.listBackground = white;
        result.menuBackground = white;
        result.cardStandoutBackground = white;
    }
    if (black) {
        result.bodyTextChecked = black;
        result.buttonTextCheckedHovered = black;
    }
    if (themePrimary) {
        result.link = themePrimary;
        result.primaryButtonBackground = themePrimary;
        result.inputBackgroundChecked = themePrimary;
        result.inputIcon = themePrimary;
        result.inputFocusBorderAlt = themePrimary;
        result.menuIcon = themePrimary;
        result.menuHeader = themePrimary;
        result.accentButtonBackground = themePrimary;
    }
    if (themeDark) {
        result.primaryButtonBackgroundPressed = themeDark;
        result.inputBackgroundCheckedHovered = themeDark;
        result.inputIconHovered = themeDark;
    }
    if (themeDarker) {
        result.linkHovered = themeDarker;
    }
    if (themeDarkAlt) {
        result.primaryButtonBackgroundHovered = themeDarkAlt;
    }
    if (themeLighter) {
        result.inputPlaceholderBackgroundChecked = themeLighter;
    }
    if (neutralLight) {
        result.bodyBackgroundChecked = neutralLight;
        result.bodyFrameDivider = neutralLight;
        result.bodyDivider = neutralLight;
        result.variantBorder = neutralLight;
        result.buttonBackgroundCheckedHovered = neutralLight;
        result.buttonBackgroundPressed = neutralLight;
        result.listItemBackgroundChecked = neutralLight;
        result.listHeaderBackgroundPressed = neutralLight;
        result.menuItemBackgroundPressed = neutralLight;
        // eslint-disable-next-line deprecation/deprecation
        result.menuItemBackgroundChecked = neutralLight;
    }
    if (neutralLighter) {
        result.bodyBackgroundHovered = neutralLighter;
        result.buttonBackgroundHovered = neutralLighter;
        result.buttonBackgroundDisabled = neutralLighter;
        result.buttonBorderDisabled = neutralLighter;
        result.primaryButtonBackgroundDisabled = neutralLighter;
        result.disabledBackground = neutralLighter;
        result.listItemBackgroundHovered = neutralLighter;
        result.listHeaderBackgroundHovered = neutralLighter;
        result.menuItemBackgroundHovered = neutralLighter;
    }
    if (neutralQuaternary) {
        result.primaryButtonTextDisabled = neutralQuaternary;
        result.disabledSubtext = neutralQuaternary;
    }
    if (neutralQuaternaryAlt) {
        result.listItemBackgroundCheckedHovered = neutralQuaternaryAlt;
    }
    if (neutralTertiary) {
        result.disabledBodyText = neutralTertiary;
        result.variantBorderHovered = ((_a = s) === null || _a === void 0 ? void 0 : _a.variantBorderHovered) || neutralTertiary;
        result.buttonTextDisabled = neutralTertiary;
        result.inputIconDisabled = neutralTertiary;
        result.disabledText = neutralTertiary;
    }
    if (neutralPrimary) {
        result.bodyText = neutralPrimary;
        result.actionLink = neutralPrimary;
        result.buttonText = neutralPrimary;
        result.inputBorderHovered = neutralPrimary;
        result.inputText = neutralPrimary;
        result.listText = neutralPrimary;
        result.menuItemText = neutralPrimary;
    }
    if (neutralLighterAlt) {
        result.bodyStandoutBackground = neutralLighterAlt;
        result.defaultStateBackground = neutralLighterAlt;
    }
    if (neutralDark) {
        result.actionLinkHovered = neutralDark;
        result.buttonTextHovered = neutralDark;
        result.buttonTextChecked = neutralDark;
        result.buttonTextPressed = neutralDark;
        result.inputTextHovered = neutralDark;
        result.menuItemTextHovered = neutralDark;
    }
    if (neutralSecondary) {
        result.bodySubtext = neutralSecondary;
        result.focusBorder = neutralSecondary;
        result.inputBorder = neutralSecondary;
        result.smallInputBorder = neutralSecondary;
        result.inputPlaceholderText = neutralSecondary;
    }
    if (neutralSecondaryAlt) {
        result.buttonBorder = neutralSecondaryAlt;
    }
    if (neutralTertiaryAlt) {
        result.disabledBodySubtext = neutralTertiaryAlt;
        result.disabledBorder = neutralTertiaryAlt;
        result.buttonBackgroundChecked = neutralTertiaryAlt;
        result.menuDivider = neutralTertiaryAlt;
    }
    if (accent) {
        result.accentButtonBackground = accent;
    }
    // map effects
    if ((_b = e) === null || _b === void 0 ? void 0 : _b.elevation4) {
        result.cardShadow = e.elevation4;
    }
    if (!isInverted && ((_c = e) === null || _c === void 0 ? void 0 : _c.elevation8)) {
        result.cardShadowHovered = e.elevation8;
    }
    else if (result.variantBorderHovered) {
        result.cardShadowHovered = '0 0 1px ' + result.variantBorderHovered;
    }
    result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), s);
    return result;
}
function _fixDeprecatedSlots(s, depComments) {
    // Add @deprecated tag as comment if enabled
    var dep = '';
    if (depComments === true) {
        dep = ' /* @deprecated */';
    }
    /* eslint-disable deprecation/deprecation */
    s.listTextColor = s.listText + dep;
    s.menuItemBackgroundChecked += dep;
    s.warningHighlight += dep;
    s.warningText = s.messageText + dep;
    s.successText += dep;
    /* eslint-enable deprecation/deprecation */
    return s;
}


/***/ }),

/***/ "../utilities/lib/Async.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Async", function() { return Async; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/dom/getWindow.js");

/**
 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
 *
 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
 * new instance of the class and remember to call dispose() during your code's dispose handler.
 *
 * @public
 */
var Async = /** @class */ (function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function Async(parent, onError) {
        this._timeoutIds = null;
        this._immediateIds = null;
        this._intervalIds = null;
        this._animationFrameIds = null;
        this._isDisposed = false;
        this._parent = parent || null;
        this._onErrorHandler = onError;
        this._noop = function () {
            /* do nothing */
        };
    }
    /**
     * Dispose function, clears all async operations.
     */
    Async.prototype.dispose = function () {
        var id;
        this._isDisposed = true;
        this._parent = null;
        // Clear timeouts.
        if (this._timeoutIds) {
            for (id in this._timeoutIds) {
                if (this._timeoutIds.hasOwnProperty(id)) {
                    this.clearTimeout(parseInt(id, 10));
                }
            }
            this._timeoutIds = null;
        }
        // Clear immediates.
        if (this._immediateIds) {
            for (id in this._immediateIds) {
                if (this._immediateIds.hasOwnProperty(id)) {
                    this.clearImmediate(parseInt(id, 10));
                }
            }
            this._immediateIds = null;
        }
        // Clear intervals.
        if (this._intervalIds) {
            for (id in this._intervalIds) {
                if (this._intervalIds.hasOwnProperty(id)) {
                    this.clearInterval(parseInt(id, 10));
                }
            }
            this._intervalIds = null;
        }
        // Clear animation frames.
        if (this._animationFrameIds) {
            for (id in this._animationFrameIds) {
                if (this._animationFrameIds.hasOwnProperty(id)) {
                    this.cancelAnimationFrame(parseInt(id, 10));
                }
            }
            this._animationFrameIds = null;
        }
    };
    /**
     * SetTimeout override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setTimeout = function (callback, duration) {
        var _this = this;
        var timeoutId = 0;
        if (!this._isDisposed) {
            if (!this._timeoutIds) {
                this._timeoutIds = {};
            }
            timeoutId = setTimeout(function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._timeoutIds) {
                        delete _this._timeoutIds[timeoutId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    if (_this._onErrorHandler) {
                        _this._onErrorHandler(e);
                    }
                }
            }, duration);
            this._timeoutIds[timeoutId] = true;
        }
        return timeoutId;
    };
    /**
     * Clears the timeout.
     * @param id - Id to cancel.
     */
    Async.prototype.clearTimeout = function (id) {
        if (this._timeoutIds && this._timeoutIds[id]) {
            clearTimeout(id);
            delete this._timeoutIds[id];
        }
    };
    /**
     * SetImmediate override, which will auto cancel the immediate during dispose.
     * @param callback - Callback to execute.
     * @param targetElement - Optional target element to use for identifying the correct window.
     * @returns The setTimeout id.
     */
    Async.prototype.setImmediate = function (callback, targetElement) {
        var _this = this;
        var immediateId = 0;
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(targetElement);
        if (!this._isDisposed) {
            if (!this._immediateIds) {
                this._immediateIds = {};
            }
            var setImmediateCallback = function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._immediateIds) {
                        delete _this._immediateIds[immediateId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            immediateId = win.setTimeout(setImmediateCallback, 0);
            this._immediateIds[immediateId] = true;
        }
        return immediateId;
    };
    /**
     * Clears the immediate.
     * @param id - Id to cancel.
     * @param targetElement - Optional target element to use for identifying the correct window.
     */
    Async.prototype.clearImmediate = function (id, targetElement) {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(targetElement);
        if (this._immediateIds && this._immediateIds[id]) {
            win.clearTimeout(id);
            delete this._immediateIds[id];
        }
    };
    /**
     * SetInterval override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setInterval = function (callback, duration) {
        var _this = this;
        var intervalId = 0;
        if (!this._isDisposed) {
            if (!this._intervalIds) {
                this._intervalIds = {};
            }
            intervalId = setInterval(function () {
                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
                try {
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            }, duration);
            this._intervalIds[intervalId] = true;
        }
        return intervalId;
    };
    /**
     * Clears the interval.
     * @param id - Id to cancel.
     */
    Async.prototype.clearInterval = function (id) {
        if (this._intervalIds && this._intervalIds[id]) {
            clearInterval(id);
            delete this._intervalIds[id];
        }
    };
    /**
     * Creates a function that, when executed, will only call the func function at most once per
     * every wait milliseconds. Provide an options object to indicate that func should be invoked
     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
     * function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the throttled function is invoked more than once during the wait timeout.
     *
     * @param func - The function to throttle.
     * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.
     * @param options - The options object.
     * @returns The new throttled function.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Async.prototype.throttle = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            return this._noop;
        }
        var waitMS = wait || 0;
        var leading = true;
        var trailing = true;
        var lastExecuteTime = 0;
        var lastResult;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof options.trailing === 'boolean') {
            trailing = options.trailing;
        }
        var callback = function (userCall) {
            var now = Date.now();
            var delta = now - lastExecuteTime;
            var waitLength = leading ? waitMS - delta : waitMS;
            if (delta >= waitMS && (!userCall || leading)) {
                lastExecuteTime = now;
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastResult = func.apply(_this._parent, lastArgs);
            }
            else if (timeoutId === null && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var resultFunction = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        });
        return resultFunction;
    };
    /**
     * Creates a function that will delay the execution of func until after wait milliseconds have
     * elapsed since the last time it was invoked. Provide an options object to indicate that func
     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
     * to the debounced function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the debounced function is invoked more than once during the wait
     * timeout.
     *
     * @param func - The function to debounce.
     * @param wait - The number of milliseconds to delay.
     * @param options - The options object.
     * @returns The new debounced function.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Async.prototype.debounce = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            var noOpFunction = (function () {
                /** Do nothing */
            });
            noOpFunction.cancel = function () {
                return;
            };
            noOpFunction.flush = (function () { return null; });
            noOpFunction.pending = function () { return false; };
            return noOpFunction;
        }
        var waitMS = wait || 0;
        var leading = false;
        var trailing = true;
        var maxWait = null;
        var lastCallTime = 0;
        var lastExecuteTime = Date.now();
        var lastResult;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof options.trailing === 'boolean') {
            trailing = options.trailing;
        }
        if (options && typeof options.maxWait === 'number' && !isNaN(options.maxWait)) {
            maxWait = options.maxWait;
        }
        var markExecuted = function (time) {
            if (timeoutId) {
                _this.clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastExecuteTime = time;
        };
        var invokeFunction = function (time) {
            markExecuted(time);
            lastResult = func.apply(_this._parent, lastArgs);
        };
        var callback = function (userCall) {
            var now = Date.now();
            var executeImmediately = false;
            if (userCall) {
                if (leading && now - lastCallTime >= waitMS) {
                    executeImmediately = true;
                }
                lastCallTime = now;
            }
            var delta = now - lastCallTime;
            var waitLength = waitMS - delta;
            var maxWaitDelta = now - lastExecuteTime;
            var maxWaitExpired = false;
            if (maxWait !== null) {
                // maxWait only matters when there is a pending callback
                if (maxWaitDelta >= maxWait && timeoutId) {
                    maxWaitExpired = true;
                }
                else {
                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
                }
            }
            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
                invokeFunction(now);
            }
            else if ((timeoutId === null || !userCall) && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        var pending = function () {
            return !!timeoutId;
        };
        var cancel = function () {
            if (pending()) {
                // Mark the debounced function as having executed
                markExecuted(Date.now());
            }
        };
        var flush = function () {
            if (pending()) {
                invokeFunction(Date.now());
            }
            return lastResult;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var resultFunction = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        });
        resultFunction.cancel = cancel;
        resultFunction.flush = flush;
        resultFunction.pending = pending;
        return resultFunction;
    };
    Async.prototype.requestAnimationFrame = function (callback, targetElement) {
        var _this = this;
        var animationFrameId = 0;
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(targetElement);
        if (!this._isDisposed) {
            if (!this._animationFrameIds) {
                this._animationFrameIds = {};
            }
            var animationFrameCallback = function () {
                try {
                    // Now delete the record and call the callback.
                    if (_this._animationFrameIds) {
                        delete _this._animationFrameIds[animationFrameId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            animationFrameId = win.requestAnimationFrame
                ? win.requestAnimationFrame(animationFrameCallback)
                : win.setTimeout(animationFrameCallback, 0);
            this._animationFrameIds[animationFrameId] = true;
        }
        return animationFrameId;
    };
    Async.prototype.cancelAnimationFrame = function (id, targetElement) {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(targetElement);
        if (this._animationFrameIds && this._animationFrameIds[id]) {
            win.cancelAnimationFrame ? win.cancelAnimationFrame(id) : win.clearTimeout(id);
            delete this._animationFrameIds[id];
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Async.prototype._logError = function (e) {
        if (this._onErrorHandler) {
            this._onErrorHandler(e);
        }
    };
    return Async;
}());



/***/ }),

/***/ "../utilities/lib/AutoScroll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoScroll", function() { return AutoScroll; });
/* harmony import */ var _EventGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/EventGroup.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../utilities/lib/scroll.js");
/* harmony import */ var _dom_getRect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../utilities/lib/dom/getRect.js");



var SCROLL_ITERATION_DELAY = 16;
var SCROLL_GUTTER = 100;
var MAX_SCROLL_VELOCITY = 15;
/**
 * AutoScroll simply hooks up mouse events given a parent element, and scrolls the container
 * up/down depending on how close the mouse is to the top/bottom of the container.
 *
 * Once you don't want autoscroll any more, just dispose the helper and it will unhook events.
 *
 * @public
 * {@docCategory AutoScroll}
 */
var AutoScroll = /** @class */ (function () {
    function AutoScroll(element) {
        this._events = new _EventGroup__WEBPACK_IMPORTED_MODULE_0__["EventGroup"](this);
        this._scrollableParent = Object(_scroll__WEBPACK_IMPORTED_MODULE_1__["findScrollableParent"])(element);
        this._incrementScroll = this._incrementScroll.bind(this);
        this._scrollRect = Object(_dom_getRect__WEBPACK_IMPORTED_MODULE_2__["getRect"])(this._scrollableParent);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (this._scrollableParent === window) {
            this._scrollableParent = document.body;
        }
        if (this._scrollableParent) {
            this._events.on(window, 'mousemove', this._onMouseMove, true);
            this._events.on(window, 'touchmove', this._onTouchMove, true);
        }
    }
    AutoScroll.prototype.dispose = function () {
        this._events.dispose();
        this._stopScroll();
    };
    AutoScroll.prototype._onMouseMove = function (ev) {
        this._computeScrollVelocity(ev);
    };
    AutoScroll.prototype._onTouchMove = function (ev) {
        if (ev.touches.length > 0) {
            this._computeScrollVelocity(ev);
        }
    };
    AutoScroll.prototype._computeScrollVelocity = function (ev) {
        if (!this._scrollRect) {
            return;
        }
        var clientX;
        var clientY;
        if ('clientX' in ev) {
            clientX = ev.clientX;
            clientY = ev.clientY;
        }
        else {
            clientX = ev.touches[0].clientX;
            clientY = ev.touches[0].clientY;
        }
        var scrollRectTop = this._scrollRect.top;
        var scrollRectLeft = this._scrollRect.left;
        var scrollClientBottom = scrollRectTop + this._scrollRect.height - SCROLL_GUTTER;
        var scrollClientRight = scrollRectLeft + this._scrollRect.width - SCROLL_GUTTER;
        // variables to use for alternating scroll direction
        var scrollRect;
        var clientDirection;
        var scrollClient;
        // if either of these conditions are met we are scrolling vertically else horizontally
        if (clientY < scrollRectTop + SCROLL_GUTTER || clientY > scrollClientBottom) {
            clientDirection = clientY;
            scrollRect = scrollRectTop;
            scrollClient = scrollClientBottom;
            this._isVerticalScroll = true;
        }
        else {
            clientDirection = clientX;
            scrollRect = scrollRectLeft;
            scrollClient = scrollClientRight;
            this._isVerticalScroll = false;
        }
        // calculate scroll velocity and direction
        if (clientDirection < scrollRect + SCROLL_GUTTER) {
            this._scrollVelocity = Math.max(-MAX_SCROLL_VELOCITY, -MAX_SCROLL_VELOCITY * ((SCROLL_GUTTER - (clientDirection - scrollRect)) / SCROLL_GUTTER));
        }
        else if (clientDirection > scrollClient) {
            this._scrollVelocity = Math.min(MAX_SCROLL_VELOCITY, MAX_SCROLL_VELOCITY * ((clientDirection - scrollClient) / SCROLL_GUTTER));
        }
        else {
            this._scrollVelocity = 0;
        }
        if (this._scrollVelocity) {
            this._startScroll();
        }
        else {
            this._stopScroll();
        }
    };
    AutoScroll.prototype._startScroll = function () {
        if (!this._timeoutId) {
            this._incrementScroll();
        }
    };
    AutoScroll.prototype._incrementScroll = function () {
        if (this._scrollableParent) {
            if (this._isVerticalScroll) {
                this._scrollableParent.scrollTop += Math.round(this._scrollVelocity);
            }
            else {
                this._scrollableParent.scrollLeft += Math.round(this._scrollVelocity);
            }
        }
        this._timeoutId = setTimeout(this._incrementScroll, SCROLL_ITERATION_DELAY);
    };
    AutoScroll.prototype._stopScroll = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
            delete this._timeoutId;
        }
    };
    return AutoScroll;
}());



/***/ }),

/***/ "../utilities/lib/BaseComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nullRender", function() { return nullRender; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../utilities/lib/Async.js");
/* harmony import */ var _EventGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../utilities/lib/EventGroup.js");
/* harmony import */ var _warn_warnConditionallyRequiredProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../utilities/lib/warn/warnConditionallyRequiredProps.js");
/* harmony import */ var _warn_warnMutuallyExclusive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../utilities/lib/warn/warnMutuallyExclusive.js");
/* harmony import */ var _warn_warnDeprecations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../utilities/lib/warn/warnDeprecations.js");







/**
 * BaseComponent class, which provides basic helpers for all components.
 *
 * @public
 * {@docCategory BaseComponent}
 *
 * @deprecated Do not use. We are moving away from class component.
 */
var BaseComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseComponent, _super);
    /**
     * BaseComponent constructor
     * @param props - The props for the component.
     * @param context - The context for the component.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function BaseComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        // eslint-disable-next-line deprecation/deprecation
        _makeAllSafe(_this, BaseComponent.prototype, [
            'componentDidMount',
            'shouldComponentUpdate',
            'getSnapshotBeforeUpdate',
            'render',
            'componentDidUpdate',
            'componentWillUnmount',
        ]);
        return _this;
    }
    /**
     * When the component receives props, make sure the componentRef is updated.
     */
    BaseComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._updateComponentRef(prevProps, this.props);
    };
    /**
     * When the component has mounted, update the componentRef.
     */
    BaseComponent.prototype.componentDidMount = function () {
        this._setComponentRef(this.props.componentRef, this);
    };
    /**
     * If we have disposables, dispose them automatically on unmount.
     */
    BaseComponent.prototype.componentWillUnmount = function () {
        this._setComponentRef(this.props.componentRef, null);
        if (this.__disposables) {
            for (var i = 0, len = this._disposables.length; i < len; i++) {
                var disposable = this.__disposables[i];
                if (disposable.dispose) {
                    disposable.dispose();
                }
            }
            this.__disposables = null;
        }
    };
    Object.defineProperty(BaseComponent.prototype, "className", {
        /**
         * Gets the object's class name.
         */
        get: function () {
            if (!this.__className) {
                var funcNameRegex = /function (.{1,})\(/;
                var results = funcNameRegex.exec(this.constructor.toString());
                this.__className = results && results.length > 1 ? results[1] : '';
            }
            return this.__className;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_disposables", {
        /**
         * Allows subclasses to push things to this._disposables to be auto disposed.
         */
        get: function () {
            if (!this.__disposables) {
                this.__disposables = [];
            }
            return this.__disposables;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_async", {
        /**
         * Gets the async instance associated with the component, created on demand. The async instance gives
         * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
         * will be cleared/ignored automatically after unmounting. The helpers within the async object also
         * preserve the this pointer so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__async) {
                this.__async = new _Async__WEBPACK_IMPORTED_MODULE_2__["Async"](this);
                this._disposables.push(this.__async);
            }
            return this.__async;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_events", {
        /**
         * Gets the event group instance assocaited with the component, created on demand. The event instance
         * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
         * will be automatically disconnected after unmounting. The helpers within the events object also
         * preserve the this reference so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__events) {
                this.__events = new _EventGroup__WEBPACK_IMPORTED_MODULE_3__["EventGroup"](this);
                this._disposables.push(this.__events);
            }
            return this.__events;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper to return a memoized ref resolver function.
     * @param refName - Name of the member to assign the ref to.
     * @returns A function instance keyed from the given refname.
     * @deprecated Use `createRef` from React.createRef.
     */
    BaseComponent.prototype._resolveRef = function (refName) {
        var _this = this;
        if (!this.__resolves) {
            this.__resolves = {};
        }
        if (!this.__resolves[refName]) {
            this.__resolves[refName] = function (ref) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return (_this[refName] = ref);
            };
        }
        return this.__resolves[refName];
    };
    /**
     * Updates the componentRef (by calling it with "this" when necessary.)
     */
    BaseComponent.prototype._updateComponentRef = function (currentProps, newProps) {
        if (newProps === void 0) { newProps = {}; }
        // currentProps *should* always be defined, but verify that just in case a subclass is manually
        // calling a lifecycle method with no parameters (which has happened) or other odd usage.
        if (currentProps && newProps && currentProps.componentRef !== newProps.componentRef) {
            this._setComponentRef(currentProps.componentRef, null);
            this._setComponentRef(newProps.componentRef, this);
        }
    };
    /**
     * Warns when a deprecated props are being used.
     *
     * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
     * either null or a replacement prop name.
     */
    BaseComponent.prototype._warnDeprecations = function (deprecationMap) {
        Object(_warn_warnDeprecations__WEBPACK_IMPORTED_MODULE_6__["warnDeprecations"])(this.className, this.props, deprecationMap);
    };
    /**
     * Warns when props which are mutually exclusive with each other are both used.
     *
     * @param mutuallyExclusiveMap - The map of mutually exclusive props.
     */
    BaseComponent.prototype._warnMutuallyExclusive = function (mutuallyExclusiveMap) {
        Object(_warn_warnMutuallyExclusive__WEBPACK_IMPORTED_MODULE_5__["warnMutuallyExclusive"])(this.className, this.props, mutuallyExclusiveMap);
    };
    /**
     * Warns when props are required if a condition is met.
     *
     * @param requiredProps - The name of the props that are required when the condition is met.
     * @param conditionalPropName - The name of the prop that the condition is based on.
     * @param condition - Whether the condition is met.
     */
    BaseComponent.prototype._warnConditionallyRequiredProps = function (requiredProps, conditionalPropName, condition) {
        Object(_warn_warnConditionallyRequiredProps__WEBPACK_IMPORTED_MODULE_4__["warnConditionallyRequiredProps"])(this.className, this.props, requiredProps, conditionalPropName, condition);
    };
    BaseComponent.prototype._setComponentRef = function (ref, value) {
        if (!this._skipComponentRefResolution && ref) {
            if (typeof ref === 'function') {
                ref(value);
            }
            if (typeof ref === 'object') {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ref.current = value;
            }
        }
    };
    return BaseComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

/**
 * Helper to override a given method with a wrapper method that can try/catch the original, but also
 * ensures that the BaseComponent's methods are called before the subclass's. This ensures that
 * componentWillUnmount in the base is called and that things in the _disposables array are disposed.
 */
// eslint-disable-next-line deprecation/deprecation
function _makeAllSafe(obj, prototype, methodNames) {
    for (var i = 0, len = methodNames.length; i < len; i++) {
        _makeSafe(obj, prototype, methodNames[i]);
    }
}
// eslint-disable-next-line deprecation/deprecation
function _makeSafe(obj, prototype, methodName) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    var classMethod = obj[methodName];
    var prototypeMethod = prototype[methodName];
    if (classMethod || prototypeMethod) {
        obj[methodName] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            /* eslint-enable @typescript-eslint/no-explicit-any */
            var retVal;
            if (prototypeMethod) {
                retVal = prototypeMethod.apply(this, args);
            }
            if (classMethod !== prototypeMethod) {
                retVal = classMethod.apply(this, args);
            }
            return retVal;
        };
    }
}
/**
 * Simple constant function for returning null, used to render empty templates in JSX.
 *
 * @public
 */
function nullRender() {
    return null;
}


/***/ }),

/***/ "../utilities/lib/DelayedRender.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayedRender", function() { return DelayedRender; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Utility component for delaying the render of a child component after a given delay. This component
 * requires a single child component; don't pass in many components. Wrap multiple components in a DIV
 * if necessary.
 *
 * @public
 * {@docCategory DelayedRender}
 */
var DelayedRender = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DelayedRender, _super);
    function DelayedRender(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isRendered: false,
        };
        return _this;
    }
    DelayedRender.prototype.componentDidMount = function () {
        var _this = this;
        var delay = this.props.delay;
        this._timeoutId = window.setTimeout(function () {
            _this.setState({
                isRendered: true,
            });
        }, delay);
    };
    DelayedRender.prototype.componentWillUnmount = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
        }
    };
    DelayedRender.prototype.render = function () {
        return this.state.isRendered ? react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children) : null;
    };
    DelayedRender.defaultProps = {
        delay: 0,
    };
    return DelayedRender;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "../utilities/lib/EventGroup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventGroup", function() { return EventGroup; });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/object.js");

/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
 *  If the target is an HTMLElement, the event will be attached to the element and can be
 *  triggered as usual (like clicking for onClick).
 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
 *  handled here in EventGroup, and the handler is called in the context of the parent
 *  (which is passed in in the constructor).
 *
 * @public
 * {@docCategory EventGroup}
 */
var EventGroup = /** @class */ (function () {
    /** parent: the context in which events attached to non-HTMLElements are called */
    function EventGroup(parent) {
        this._id = EventGroup._uniqueId++;
        this._parent = parent;
        this._eventRecords = [];
    }
    /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
     *  Events raised here by default have bubbling set to false and cancelable set to true.
     *  This applies also to built-in events being raised manually here on HTMLElements,
     *  which may lead to unexpected behavior if it differs from the defaults.
     *
     */
    EventGroup.raise = function (target, eventName, eventArgs, bubbleEvent) {
        var retVal;
        if (EventGroup._isElement(target)) {
            if (typeof document !== 'undefined' && document.createEvent) {
                var ev = document.createEvent('HTMLEvents');
                ev.initEvent(eventName, bubbleEvent || false, true);
                Object(_object__WEBPACK_IMPORTED_MODULE_0__["assign"])(ev, eventArgs);
                retVal = target.dispatchEvent(ev);
            }
            else if (typeof document !== 'undefined' && document.createEventObject) {
                // IE8
                var evObj = document.createEventObject(eventArgs);
                // cannot set cancelBubble on evObj, fireEvent will overwrite it
                target.fireEvent('on' + eventName, evObj);
            }
        }
        else {
            while (target && retVal !== false) {
                var events = target.__events__;
                var eventRecords = events ? events[eventName] : null;
                if (eventRecords) {
                    for (var id in eventRecords) {
                        if (eventRecords.hasOwnProperty(id)) {
                            var eventRecordList = eventRecords[id];
                            for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
                                var record = eventRecordList[listIndex];
                                if (record.objectCallback) {
                                    retVal = record.objectCallback.call(record.parent, eventArgs);
                                }
                            }
                        }
                    }
                }
                // If the target has a parent, bubble the event up.
                target = bubbleEvent ? target.parent : null;
            }
        }
        return retVal;
    };
    EventGroup.isObserved = function (target, eventName) {
        var events = target && target.__events__;
        return !!events && !!events[eventName];
    };
    /** Check to see if the target has declared support of the given event. */
    EventGroup.isDeclared = function (target, eventName) {
        var declaredEvents = target && target.__declaredEvents;
        return !!declaredEvents && !!declaredEvents[eventName];
    };
    EventGroup.stopPropagation = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else {
            // IE8
            event.cancelBubble = true;
        }
    };
    EventGroup._isElement = function (target) {
        return (!!target && (!!target.addEventListener || (typeof HTMLElement !== 'undefined' && target instanceof HTMLElement)));
    };
    EventGroup.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._isDisposed = true;
            this.off();
            this._parent = null;
        }
    };
    /** On the target, attach a set of events, where the events object is a name to function mapping. */
    EventGroup.prototype.onAll = function (target, events, useCapture) {
        for (var eventName in events) {
            if (events.hasOwnProperty(eventName)) {
                this.on(target, eventName, events[eventName], useCapture);
            }
        }
    };
    /**
     * On the target, attach an event whose handler will be called in the context of the parent
     * of this instance of EventGroup.
     */
    EventGroup.prototype.on = function (target, eventName, callback, options) {
        var _this = this;
        if (eventName.indexOf(',') > -1) {
            var events = eventName.split(/[ ,]+/);
            for (var i = 0; i < events.length; i++) {
                this.on(target, events[i], callback, options);
            }
        }
        else {
            var parent_1 = this._parent;
            var eventRecord = {
                target: target,
                eventName: eventName,
                parent: parent_1,
                callback: callback,
                options: options,
            };
            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
            var events = (target.__events__ = target.__events__ || {});
            events[eventName] =
                events[eventName] ||
                    {
                        count: 0,
                    };
            events[eventName][this._id] = events[eventName][this._id] || [];
            events[eventName][this._id].push(eventRecord);
            events[eventName].count++;
            if (EventGroup._isElement(target)) {
                var processElementEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    var result;
                    try {
                        result = callback.apply(parent_1, args);
                        if (result === false && args[0]) {
                            var e = args[0];
                            if (e.preventDefault) {
                                e.preventDefault();
                            }
                            if (e.stopPropagation) {
                                e.stopPropagation();
                            }
                            e.cancelBubble = true;
                        }
                    }
                    catch (e) {
                        // ignore
                    }
                    return result;
                };
                eventRecord.elementCallback = processElementEvent;
                if (target.addEventListener) {
                    target.addEventListener(eventName, processElementEvent, options);
                }
                else if (target.attachEvent) {
                    // IE8
                    target.attachEvent('on' + eventName, processElementEvent);
                }
            }
            else {
                var processObjectEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    return callback.apply(parent_1, args);
                };
                eventRecord.objectCallback = processObjectEvent;
            }
            // Remember the record locally, so that it can be removed.
            this._eventRecords.push(eventRecord);
        }
    };
    EventGroup.prototype.off = function (target, eventName, callback, options) {
        for (var i = 0; i < this._eventRecords.length; i++) {
            var eventRecord = this._eventRecords[i];
            if ((!target || target === eventRecord.target) &&
                (!eventName || eventName === eventRecord.eventName) &&
                (!callback || callback === eventRecord.callback) &&
                (typeof options !== 'boolean' || options === eventRecord.options)) {
                var events = eventRecord.target.__events__;
                var targetArrayLookup = events[eventRecord.eventName];
                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
                // We may have already target's entries, so check for null.
                if (targetArray) {
                    if (targetArray.length === 1 || !callback) {
                        targetArrayLookup.count -= targetArray.length;
                        delete events[eventRecord.eventName][this._id];
                    }
                    else {
                        targetArrayLookup.count--;
                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
                    }
                    if (!targetArrayLookup.count) {
                        delete events[eventRecord.eventName];
                    }
                }
                if (eventRecord.elementCallback) {
                    if (eventRecord.target.removeEventListener) {
                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.options);
                    }
                    else if (eventRecord.target.detachEvent) {
                        // IE8
                        eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
                    }
                }
                this._eventRecords.splice(i--, 1);
            }
        }
    };
    /** Trigger the given event in the context of this instance of EventGroup. */
    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
    };
    /** Declare an event as being supported by this instance of EventGroup. */
    EventGroup.prototype.declare = function (event) {
        var declaredEvents = (this._parent.__declaredEvents = this._parent.__declaredEvents || {});
        if (typeof event === 'string') {
            declaredEvents[event] = true;
        }
        else {
            for (var i = 0; i < event.length; i++) {
                declaredEvents[event[i]] = true;
            }
        }
    };
    EventGroup._uniqueId = 0;
    return EventGroup;
}());



/***/ }),

/***/ "../utilities/lib/FabricPerformance.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricPerformance", function() { return FabricPerformance; });
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
var RESET_INTERVAL = 3 * 60 * 1000; // auto reset every 3 minutes
/**
 * Performance helper class for measuring things.
 *
 * @public
 * {@docCategory FabricPerformance}
 */
var FabricPerformance = /** @class */ (function () {
    function FabricPerformance() {
    }
    /**
     * Measures execution time of the given syncronous function. If the same logic is executed multiple times,
     * each individual measurement will be collected as well the overall numbers.
     * @param name - The name of this measurement
     * @param func - The logic to be measured for execution time
     */
    FabricPerformance.measure = function (name, func) {
        if (FabricPerformance._timeoutId) {
            FabricPerformance.setPeriodicReset();
        }
        var start = now();
        func();
        var end = now();
        var measurement = FabricPerformance.summary[name] || {
            totalDuration: 0,
            count: 0,
            all: [],
        };
        var duration = end - start;
        measurement.totalDuration += duration;
        measurement.count++;
        measurement.all.push({
            duration: duration,
            timeStamp: end,
        });
        FabricPerformance.summary[name] = measurement;
    };
    FabricPerformance.reset = function () {
        FabricPerformance.summary = {};
        clearTimeout(FabricPerformance._timeoutId);
        FabricPerformance._timeoutId = NaN;
    };
    FabricPerformance.setPeriodicReset = function () {
        FabricPerformance._timeoutId = setTimeout(function () { return FabricPerformance.reset(); }, RESET_INTERVAL);
    };
    FabricPerformance.summary = {};
    return FabricPerformance;
}());



/***/ }),

/***/ "../utilities/lib/GlobalSettings.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalSettings", function() { return GlobalSettings; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/dom/getWindow.js");

/**
 * Storing global state in local module variables has issues when more than one copy
 * if the module gets loaded on the page (due to a bundling error or simply by consuming
 * a prebundled script.)
 *
 * This file contains helpers to deal with the getting and setting local state, and allows
 * callers to get called back when it mutates.
 */
var GLOBAL_SETTINGS_PROP_NAME = '__globalSettings__';
var CALLBACK_STATE_PROP_NAME = '__callbacks__';
var _counter = 0;
/**
 * Global settings helper, which stores settings in the global (window) namespace.
 * If window is not provided, it will store settings in module scope. Provides a
 * way to observe changes as well when their values change.
 *
 * @public
 * {@docCategory GlobalSettings}
 */
var GlobalSettings = /** @class */ (function () {
    function GlobalSettings() {
    }
    GlobalSettings.getValue = function (key, defaultValue) {
        var globalSettings = _getGlobalSettings();
        if (globalSettings[key] === undefined) {
            globalSettings[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        }
        return globalSettings[key];
    };
    GlobalSettings.setValue = function (key, value) {
        var globalSettings = _getGlobalSettings();
        var callbacks = globalSettings[CALLBACK_STATE_PROP_NAME];
        var oldValue = globalSettings[key];
        if (value !== oldValue) {
            globalSettings[key] = value;
            var changeDescription = {
                oldValue: oldValue,
                value: value,
                key: key,
            };
            for (var id in callbacks) {
                if (callbacks.hasOwnProperty(id)) {
                    callbacks[id](changeDescription);
                }
            }
        }
        return value;
    };
    GlobalSettings.addChangeListener = function (cb) {
        // Note: we use generated ids on the callbacks to create a map of the callbacks, which optimizes removal.
        // (It's faster to delete a key than it is to look up the index of an object and splice an array.)
        var id = cb.__id__;
        var callbacks = _getCallbacks();
        if (!id) {
            id = cb.__id__ = String(_counter++);
        }
        callbacks[id] = cb;
    };
    GlobalSettings.removeChangeListener = function (cb) {
        var callbacks = _getCallbacks();
        delete callbacks[cb.__id__];
    };
    return GlobalSettings;
}());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _getGlobalSettings() {
    var _a;
    var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var globalObj = win || {};
    if (!globalObj[GLOBAL_SETTINGS_PROP_NAME]) {
        globalObj[GLOBAL_SETTINGS_PROP_NAME] = (_a = {},
            _a[CALLBACK_STATE_PROP_NAME] = {},
            _a);
    }
    return globalObj[GLOBAL_SETTINGS_PROP_NAME];
}
function _getCallbacks() {
    var globalSettings = _getGlobalSettings();
    return globalSettings[CALLBACK_STATE_PROP_NAME];
}


/***/ }),

/***/ "../utilities/lib/KeyCodes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyCodes", function() { return KeyCodes; });
/**
 * Simulated enum for keycodes. These will get inlined by uglify when used much like an enum
 *
 * @public
 * {@docCategory KeyCodes}
 */
var KeyCodes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pauseBreak: 19,
    capslock: 20,
    escape: 27,
    space: 32,
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    del: 46,
    zero: 48,
    one: 49,
    two: 50,
    three: 51,
    four: 52,
    five: 53,
    six: 54,
    seven: 55,
    eight: 56,
    nine: 57,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftWindow: 91,
    rightWindow: 92,
    select: 93,
    /* eslint-disable @typescript-eslint/naming-convention */
    zero_numpad: 96,
    one_numpad: 97,
    two_numpad: 98,
    three_numpad: 99,
    four_numpad: 100,
    five_numpad: 101,
    six_numpad: 102,
    seven_numpad: 103,
    eight_numpad: 104,
    nine_numpad: 105,
    /* eslint-enable @typescript-eslint/naming-convention */
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalPoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrollLock: 145,
    semicolon: 186,
    equalSign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardSlash: 191,
    graveAccent: 192,
    openBracket: 219,
    backSlash: 220,
    closeBracket: 221,
    singleQuote: 222,
};


/***/ }),

/***/ "../utilities/lib/Rectangle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/**
 * Rectangle helper class.
 *
 * @public
 * {@docCategory Rectangle}
 */
var Rectangle = /** @class */ (function () {
    function Rectangle(left, right, top, bottom) {
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = 0; }
        if (top === void 0) { top = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        /**
         * Calculated automatically by subtracting the right from left
         */
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        /**
         * Calculated automatically by subtracting the bottom from top.
         */
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tests if another rect is approximately equal to this rect (within 4 decimal places.)
     */
    Rectangle.prototype.equals = function (rect) {
        // Fixing to 4 decimal places because it allows enough precision and will handle cases when something
        // should be rounded, like .999999 should round to 1.
        return (parseFloat(this.top.toFixed(4)) === parseFloat(rect.top.toFixed(4)) &&
            parseFloat(this.bottom.toFixed(4)) === parseFloat(rect.bottom.toFixed(4)) &&
            parseFloat(this.left.toFixed(4)) === parseFloat(rect.left.toFixed(4)) &&
            parseFloat(this.right.toFixed(4)) === parseFloat(rect.right.toFixed(4)));
    };
    return Rectangle;
}());



/***/ }),

/***/ "../utilities/lib/appendFunction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendFunction", function() { return appendFunction; });
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Returns a single function which will call each of the given functions in the context of the
 * parent.
 */
function appendFunction(parent) {
    var functions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        functions[_i - 1] = arguments[_i];
    }
    if (functions.length < 2) {
        return functions[0];
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        functions.forEach(function (f) { return f && f.apply(parent, args); });
    };
}


/***/ }),

/***/ "../utilities/lib/aria.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeAriaAttributeValues", function() { return mergeAriaAttributeValues; });
/**
 * ARIA helper to concatenate attributes, returning undefined if all attributes
 * are undefined. (Empty strings are not a valid ARIA attribute value.)
 *
 * @param ariaAttributes - ARIA attributes to merge
 */
function mergeAriaAttributeValues() {
    var ariaAttributes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ariaAttributes[_i] = arguments[_i];
    }
    var mergedAttribute = ariaAttributes
        .filter(function (arg) { return arg; })
        .join(' ')
        .trim();
    return mergedAttribute === '' ? undefined : mergedAttribute;
}


/***/ }),

/***/ "../utilities/lib/array.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArray", function() { return createArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMatrix", function() { return toMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeIndex", function() { return removeIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceElement", function() { return replaceElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addElementAtIndex", function() { return addElementAtIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arraysEqual", function() { return arraysEqual; });
/**
 * Helper to find the index of an item within an array, using a callback to
 * determine the match.
 *
 * @public
 * @param array - Array to search.
 * @param cb - Callback which returns true on matches.
 * @param fromIndex - Optional index to start from (defaults to 0)
 */
function findIndex(array, cb, fromIndex) {
    if (fromIndex === void 0) { fromIndex = 0; }
    var index = -1;
    for (var i = fromIndex; array && i < array.length; i++) {
        if (cb(array[i], i)) {
            index = i;
            break;
        }
    }
    return index;
}
/**
 * Helper to find the first item within an array that satisfies the callback.
 * @param array - Array to search
 * @param cb - Callback which returns true on matches
 */
function find(array, cb) {
    var index = findIndex(array, cb);
    if (index < 0) {
        return undefined;
    }
    return array[index];
}
/**
 * Creates an array of a given size and helper method to populate.
 *
 * @public
 * @param size - Size of array.
 * @param getItem - Callback to populate given cell index.
 */
function createArray(size, getItem) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(getItem(i));
    }
    return array;
}
/**
 * Convert the given array to a matrix with columnCount number
 * of columns.
 *
 * @public
 * @param items - The array to convert
 * @param columnCount - The number of columns for the resulting matrix
 * @returns A matrix of items
 */
function toMatrix(items, columnCount) {
    return items.reduce(function (rows, currentValue, index) {
        if (index % columnCount === 0) {
            rows.push([currentValue]);
        }
        else {
            rows[rows.length - 1].push(currentValue);
        }
        return rows;
    }, []);
}
/**
 * Given an array, it returns a new array that does not contain the item at the given index.
 * @param array - The array to operate on
 * @param index - The index of the element to remove
 */
function removeIndex(array, index) {
    return array.filter(function (_, i) { return index !== i; });
}
/**
 * Given an array, this function returns a new array where the element at a given index has been replaced.
 * @param array - The array to operate on
 * @param newElement - The element that will be placed in the new array
 * @param index - The index of the element that should be replaced
 */
function replaceElement(array, newElement, index) {
    var copy = array.slice();
    copy[index] = newElement;
    return copy;
}
/**
 * Given an array, this function returns a new array where an element has been inserted at the given index.
 * @param array - The array to operate on
 * @param index - The index where an element should be inserted
 * @param itemToAdd - The element to insert
 */
function addElementAtIndex(array, index, itemToAdd) {
    var copy = array.slice();
    copy.splice(index, 0, itemToAdd);
    return copy;
}
/**
 * Given an array where each element is of type T or T[], flatten it into an array of T
 * @param array - The array where each element can optionally also be an array
 */
function flatten(array) {
    var result = [];
    array.forEach(function (item) { return (result = result.concat(item)); });
    return result;
}
/**
 * Returns a boolean indicating if the two given arrays are equal in length and values.
 *
 * @param array1 - First array to compare
 * @param array2 - Second array to compare
 * @returns True if the arrays are the same length and have the same values in the same positions, false otherwise.
 */
function arraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}


/***/ }),

/***/ "../utilities/lib/asAsync.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asAsync", function() { return asAsync; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * asAsync - a HOC for async loading components.
 *
 * Usage:
 *
 * const AsyncDialog = asAsync({
 *   load: () => import('Dialog').then(result => result.default),
 * });
 *
 * React.render(domElement, <AsyncDialog asyncPlaceholder={ () => <Spinner/> } { ...dialogProps } />);
 *
 * Note the `asyncPlaceholder` prop will be respected when rendering the async component and it hasn't
 * been loaded yet.
 */


/**
 * If possible, use a WeakMap to maintain a cache of loaded components.
 * This can be used to synchronously render components that have already been loaded,
 * rather than having to wait for at least one async tick.
 */
var _syncModuleCache = typeof WeakMap !== 'undefined'
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        new WeakMap()
    : undefined;
/**
 * Produces a component which internally loads the target component before first mount.
 * The component passes all props through to the loaded component.
 *
 * This overload accepts a module with a default export for the component.
 */
function asAsync(options) {
    var Async = /** @class */ (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Async, _super);
        function Async() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                Component: _syncModuleCache ? _syncModuleCache.get(options.load) : undefined,
            };
            return _this;
        }
        Async.prototype.render = function () {
            // Typescript issue: the rest can't be pulled without the any cast, as TypeScript fails with rest on generics.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var _a = this.props, forwardedRef = _a.forwardedRef, Placeholder = _a.asyncPlaceholder, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["forwardedRef", "asyncPlaceholder"]);
            var Component = this.state.Component;
            return Component ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, rest), { ref: forwardedRef }))) : Placeholder ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Placeholder, null)) : null;
        };
        Async.prototype.componentDidMount = function () {
            var _this = this;
            var Component = this.state.Component;
            if (!Component) {
                options
                    .load()
                    .then(function (LoadedComponent) {
                    if (LoadedComponent) {
                        // Cache component for future reference.
                        _syncModuleCache && _syncModuleCache.set(options.load, LoadedComponent);
                        // Set state.
                        _this.setState({
                            Component: LoadedComponent,
                        }, options.onLoad);
                    }
                })
                    .catch(options.onError);
            }
        };
        return Async;
    }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
    return react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Async, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { forwardedRef: ref })); });
}


/***/ }),

/***/ "../utilities/lib/assertNever.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNever", function() { return assertNever; });
/**
 * AssertNever is a utility function that can be used for exhaustiveness checks in switch statements.
 *
 * @public
 */
function assertNever(x) {
    throw new Error('Unexpected object: ' + x);
}


/***/ }),

/***/ "../utilities/lib/classNamesFunction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNamesFunction", function() { return classNamesFunction; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../merge-styles/lib/index.js");
/* harmony import */ var _rtl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../utilities/lib/rtl.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../utilities/lib/dom.js");



var MAX_CACHE_COUNT = 50;
var DEFAULT_SPECIFICITY_MULTIPLIER = 5;
var _memoizedClassNames = 0;
var stylesheet = _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
if (stylesheet && stylesheet.onReset) {
    stylesheet.onReset(function () { return _memoizedClassNames++; });
}
// Note that because of the caching nature within the classNames memoization,
// I've disabled this rule to simply be able to work with any types.
/* eslint-disable @typescript-eslint/no-explicit-any */
// This represents a prop we attach to each Map to indicate the cached return value
// associated with the graph node.
var retVal = '__retval__';
/**
 * Creates a getClassNames function which calls getStyles given the props, and injects them
 * into mergeStyleSets.
 *
 * Note that the props you pass in on every render should be in the same order and
 * immutable (numbers, strings, and booleans). This will allow the results to be memoized. Violating
 * these will cause extra recalcs to occur.
 */
function classNamesFunction(options) {
    // We build a trie where each node is a Map. The map entry key represents an argument
    // value, and the entry value is another node (Map). Each node has a `__retval__`
    // property which is used to hold the cached response.
    if (options === void 0) { options = {}; }
    // To derive the response, we can simply ensure the arguments are added or already
    // exist in the trie. At the last node, if there is a `__retval__` we return that. Otherwise
    // we call the `getStyles` api to evaluate, cache on the property, and return that.
    var map = new Map();
    var styleCalcCount = 0;
    var getClassNamesCount = 0;
    var currentMemoizedClassNames = _memoizedClassNames;
    var getClassNames = function (styleFunctionOrObject, styleProps) {
        if (styleProps === void 0) { styleProps = {}; }
        var _a, _b;
        // If useStaticStyles is true, styleFunctionOrObject returns slot to classname mappings.
        // If there is also no style overrides, we can skip merge styles completely and
        // simply return the result from the style funcion.
        if (options.useStaticStyles &&
            typeof styleFunctionOrObject === 'function' &&
            styleFunctionOrObject.__noStyleOverride__) {
            return styleFunctionOrObject(styleProps);
        }
        getClassNamesCount++;
        var current = map;
        var theme = styleProps.theme;
        var rtl = theme && theme.rtl !== undefined ? theme.rtl : Object(_rtl__WEBPACK_IMPORTED_MODULE_1__["getRTL"])();
        var disableCaching = options.disableCaching;
        // On reset of our stylesheet, reset memoized cache.
        if (currentMemoizedClassNames !== _memoizedClassNames) {
            currentMemoizedClassNames = _memoizedClassNames;
            map = new Map();
            styleCalcCount = 0;
        }
        if (!options.disableCaching) {
            current = _traverseMap(map, styleFunctionOrObject);
            current = _traverseMap(current, styleProps);
        }
        if (disableCaching || !current[retVal]) {
            if (styleFunctionOrObject === undefined) {
                current[retVal] = {};
            }
            else {
                current[retVal] = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["mergeCssSets"])([
                    (typeof styleFunctionOrObject === 'function'
                        ? styleFunctionOrObject(styleProps)
                        : styleFunctionOrObject),
                ], { rtl: !!rtl, specificityMultiplier: options.useStaticStyles ? DEFAULT_SPECIFICITY_MULTIPLIER : undefined });
            }
            if (!disableCaching) {
                styleCalcCount++;
            }
        }
        if (styleCalcCount > (options.cacheSize || MAX_CACHE_COUNT)) {
            var win = Object(_dom__WEBPACK_IMPORTED_MODULE_2__["getWindow"])();
            if ((_b = (_a = win) === null || _a === void 0 ? void 0 : _a.FabricConfig) === null || _b === void 0 ? void 0 : _b.enableClassNameCacheFullWarning) {
                // eslint-disable-next-line no-console
                console.warn("Styles are being recalculated too frequently. Cache miss rate is " + styleCalcCount + "/" + getClassNamesCount + ".");
                // eslint-disable-next-line no-console
                console.trace();
            }
            map.clear();
            styleCalcCount = 0;
            // Mutate the options passed in, that's all we can do.
            options.disableCaching = true;
        }
        // Note: the retVal is an attached property on the Map; not a key in the Map. We use this attached property to
        // cache the return value for this branch of the graph.
        return current[retVal];
    };
    return getClassNames;
}
function _traverseEdge(current, value) {
    value = _normalizeValue(value);
    if (!current.has(value)) {
        current.set(value, new Map());
    }
    return current.get(value);
}
function _traverseMap(current, inputs) {
    if (typeof inputs === 'function') {
        var cachedInputsFromStyled = inputs.__cachedInputs__;
        if (cachedInputsFromStyled) {
            // The styled helper will generate the styles function and will attach the cached
            // inputs (consisting of the default styles, customzied styles, and user provided styles.)
            // These should be used as cache keys for deriving the memoized value.
            for (var _i = 0, _a = inputs.__cachedInputs__; _i < _a.length; _i++) {
                var input = _a[_i];
                current = _traverseEdge(current, input);
            }
        }
        else {
            current = _traverseEdge(current, inputs);
        }
    }
    else if (typeof inputs === 'object') {
        for (var propName in inputs) {
            if (inputs.hasOwnProperty(propName)) {
                current = _traverseEdge(current, inputs[propName]);
            }
        }
    }
    return current;
}
function _normalizeValue(value) {
    switch (value) {
        case undefined:
            return '__undefined__';
        case null:
            return '__null__';
        default:
            return value;
    }
}


/***/ }),

/***/ "../utilities/lib/componentAs/composeComponentAs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeComponentAs", function() { return composeComponentAs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../utilities/lib/memoize.js");



function createComposedComponent(outer) {
    var Outer = outer;
    var outerMemoizer = Object(_memoize__WEBPACK_IMPORTED_MODULE_2__["createMemoizer"])(function (inner) {
        if (outer === inner) {
            throw new Error('Attempted to compose a component with itself.');
        }
        var Inner = inner;
        var innerMemoizer = Object(_memoize__WEBPACK_IMPORTED_MODULE_2__["createMemoizer"])(function (defaultRender) {
            var InnerWithDefaultRender = function (innerProps) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Inner, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, innerProps, { defaultRender: defaultRender }));
            };
            return InnerWithDefaultRender;
        });
        var OuterWithDefaultRender = function (outerProps) {
            var defaultRender = outerProps.defaultRender;
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Outer, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, outerProps, { defaultRender: defaultRender ? innerMemoizer(defaultRender) : Inner }));
        };
        return OuterWithDefaultRender;
    });
    return outerMemoizer;
}
var componentAsMemoizer = Object(_memoize__WEBPACK_IMPORTED_MODULE_2__["createMemoizer"])(createComposedComponent);
/**
 * Composes two components which conform to the `IComponentAs` specification; that is, two
 * components which accept a `defaultRender` prop, which is a 'default' implementation of
 * a component which accepts the same overall props.
 *
 * @public
 */
function composeComponentAs(outer, inner) {
    return componentAsMemoizer(outer)(inner);
}


/***/ }),

/***/ "../utilities/lib/controlled.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isControlled", function() { return isControlled; });
/**
 * Determines whether a component is controlled.
 * @param props - Component props
 * @param valueProp - Prop containing the controlled value
 * @returns true if controlled, false if uncontrolled
 */
function isControlled(props, valueProp) {
    // React's built-in <input> considers a prop to be provided if its value is non-null/undefined.
    // Mirror that behavior here (rather than checking for just undefined).
    return props[valueProp] !== undefined && props[valueProp] !== null;
}


/***/ }),

/***/ "../utilities/lib/createMergedRef.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMergedRef", function() { return createMergedRef; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/array.js");

/**
 * Set up a ref resolver function given internal state managed for the ref.
 * @param local Set
 */
var createResolver = function (local) { return function (newValue) {
    for (var _i = 0, _a = local.refs; _i < _a.length; _i++) {
        var ref = _a[_i];
        if (typeof ref === 'function') {
            ref(newValue);
        }
        else if (ref) {
            // work around the immutability of the React.Ref type
            ref.current = newValue;
        }
    }
}; };
/**
 * Helper to merge refs from within class components.
 */
var createMergedRef = function (value) {
    var local = {
        refs: [],
    };
    return function () {
        var newRefs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newRefs[_i] = arguments[_i];
        }
        if (!local.resolver || !Object(_array__WEBPACK_IMPORTED_MODULE_0__["arraysEqual"])(local.refs, newRefs)) {
            local.resolver = createResolver(local);
        }
        local.refs = newRefs;
        return local.resolver;
    };
};


/***/ }),

/***/ "../utilities/lib/css.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function css() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (arg) {
            if (typeof arg === 'string') {
                classes.push(arg);
            }
            else if (arg.hasOwnProperty('toString') && typeof arg.toString === 'function') {
                classes.push(arg.toString());
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                for (var key in arg) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    if (arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
    }
    return classes.join(' ');
}


/***/ }),

/***/ "../utilities/lib/customizations/Customizations.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customizations", function() { return Customizations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _GlobalSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../utilities/lib/GlobalSettings.js");


var CustomizationsGlobalKey = 'customizations';
var NO_CUSTOMIZATIONS = { settings: {}, scopedSettings: {}, inCustomizerContext: false };
var _allSettings = _GlobalSettings__WEBPACK_IMPORTED_MODULE_1__["GlobalSettings"].getValue(CustomizationsGlobalKey, {
    settings: {},
    scopedSettings: {},
    inCustomizerContext: false,
});
var _events = [];
var Customizations = /** @class */ (function () {
    function Customizations() {
    }
    Customizations.reset = function () {
        _allSettings.settings = {};
        _allSettings.scopedSettings = {};
    };
    /** Apply global Customization settings.
     * @example Customizations.applySettings(\{ theme: \{...\} \});
     */
    Customizations.applySettings = function (settings) {
        _allSettings.settings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _allSettings.settings), settings);
        Customizations._raiseChange();
    };
    /** Apply Customizations to a particular named scope, like a component.
     * @example Customizations.applyScopedSettings('Nav', \{ styles: () =\> \{\} \});
     */
    Customizations.applyScopedSettings = function (scopeName, settings) {
        _allSettings.scopedSettings[scopeName] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _allSettings.scopedSettings[scopeName]), settings);
        Customizations._raiseChange();
    };
    Customizations.getSettings = function (properties, scopeName, localSettings) {
        if (localSettings === void 0) { localSettings = NO_CUSTOMIZATIONS; }
        var settings = {};
        var localScopedSettings = (scopeName && localSettings.scopedSettings[scopeName]) || {};
        var globalScopedSettings = (scopeName && _allSettings.scopedSettings[scopeName]) || {};
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var property = properties_1[_i];
            settings[property] =
                localScopedSettings[property] ||
                    localSettings.settings[property] ||
                    globalScopedSettings[property] ||
                    _allSettings.settings[property];
        }
        return settings;
    };
    /** Used to run some code that sets Customizations without triggering an update until the end.
     * Useful for applying Customizations that don't affect anything currently rendered, or for
     * applying many customizations at once.
     * @param suppressUpdate - Do not raise the change event at the end, preventing all updates
     */
    Customizations.applyBatchedUpdates = function (code, suppressUpdate) {
        Customizations._suppressUpdates = true;
        try {
            code();
        }
        catch (_a) {
            /* do nothing */
        }
        Customizations._suppressUpdates = false;
        if (!suppressUpdate) {
            Customizations._raiseChange();
        }
    };
    Customizations.observe = function (onChange) {
        _events.push(onChange);
    };
    Customizations.unobserve = function (onChange) {
        _events = _events.filter(function (cb) { return cb !== onChange; });
    };
    Customizations._raiseChange = function () {
        if (!Customizations._suppressUpdates) {
            _events.forEach(function (cb) { return cb(); });
        }
    };
    return Customizations;
}());



/***/ }),

/***/ "../utilities/lib/customizations/Customizer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customizer", function() { return Customizer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Customizations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../utilities/lib/customizations/Customizations.js");
/* harmony import */ var _CustomizerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../utilities/lib/customizations/CustomizerContext.js");
/* harmony import */ var _mergeCustomizations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../utilities/lib/customizations/mergeCustomizations.js");





/**
 * The Customizer component allows for default props to be mixed into components which
 * are decorated with the customizable() decorator, or use the styled HOC. This enables
 * injection scenarios like:
 *
 * 1. render svg icons instead of the icon font within all buttons
 * 2. inject a custom theme object into a component
 *
 * Props are provided via the settings prop which should be one of the following:
 * - A json map which contains 1 or more name/value pairs representing injectable props.
 * - A function that receives the current settings and returns the new ones that apply to the scope
 *
 * @public
 */
var Customizer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Customizer, _super);
    function Customizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onCustomizationChange = function () { return _this.forceUpdate(); };
        return _this;
    }
    Customizer.prototype.componentDidMount = function () {
        _Customizations__WEBPACK_IMPORTED_MODULE_2__["Customizations"].observe(this._onCustomizationChange);
    };
    Customizer.prototype.componentWillUnmount = function () {
        _Customizations__WEBPACK_IMPORTED_MODULE_2__["Customizations"].unobserve(this._onCustomizationChange);
    };
    Customizer.prototype.render = function () {
        var _this = this;
        var contextTransform = this.props.contextTransform;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CustomizerContext__WEBPACK_IMPORTED_MODULE_3__["CustomizerContext"].Consumer, null, function (parentContext) {
            var newContext = Object(_mergeCustomizations__WEBPACK_IMPORTED_MODULE_4__["mergeCustomizations"])(_this.props, parentContext);
            if (contextTransform) {
                newContext = contextTransform(newContext);
            }
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CustomizerContext__WEBPACK_IMPORTED_MODULE_3__["CustomizerContext"].Provider, { value: newContext }, _this.props.children);
        }));
    };
    return Customizer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "../utilities/lib/customizations/CustomizerContext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerContext", function() { return CustomizerContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CustomizerContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
    customizations: {
        inCustomizerContext: false,
        settings: {},
        scopedSettings: {},
    },
});


/***/ }),

/***/ "../utilities/lib/customizations/customizable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customizable", function() { return customizable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Customizations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../utilities/lib/customizations/Customizations.js");
/* harmony import */ var _hoistStatics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../utilities/lib/hoistStatics.js");
/* harmony import */ var _CustomizerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../utilities/lib/customizations/CustomizerContext.js");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../merge-styles/lib/index.js");






function customizable(scope, fields, concatStyles) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function customizableFactory(ComposedComponent) {
        var _a;
        var resultClass = (_a = /** @class */ (function (_super) {
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ComponentWithInjectedProps, _super);
                function ComponentWithInjectedProps(props) {
                    var _this = _super.call(this, props) || this;
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    _this._styleCache = {};
                    _this._onSettingChanged = _this._onSettingChanged.bind(_this);
                    return _this;
                }
                ComponentWithInjectedProps.prototype.componentDidMount = function () {
                    _Customizations__WEBPACK_IMPORTED_MODULE_2__["Customizations"].observe(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.componentWillUnmount = function () {
                    _Customizations__WEBPACK_IMPORTED_MODULE_2__["Customizations"].unobserve(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.render = function () {
                    var _this = this;
                    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CustomizerContext__WEBPACK_IMPORTED_MODULE_4__["CustomizerContext"].Consumer, null, function (context) {
                        var defaultProps = _Customizations__WEBPACK_IMPORTED_MODULE_2__["Customizations"].getSettings(fields, scope, context.customizations);
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var componentProps = _this.props;
                        // If defaultProps.styles is a function, evaluate it before calling concatStyleSets
                        if (defaultProps.styles && typeof defaultProps.styles === 'function') {
                            defaultProps.styles = defaultProps.styles(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultProps), componentProps));
                        }
                        // If concatStyles is true and custom styles have been defined compute those styles
                        if (concatStyles && defaultProps.styles) {
                            if (_this._styleCache.default !== defaultProps.styles ||
                                _this._styleCache.component !== componentProps.styles) {
                                var mergedStyles = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_5__["concatStyleSets"])(defaultProps.styles, componentProps.styles);
                                _this._styleCache.default = defaultProps.styles;
                                _this._styleCache.component = componentProps.styles;
                                _this._styleCache.merged = mergedStyles;
                            }
                            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ComposedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultProps, componentProps, { styles: _this._styleCache.merged }));
                        }
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ComposedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultProps, componentProps));
                    }));
                };
                ComponentWithInjectedProps.prototype._onSettingChanged = function () {
                    this.forceUpdate();
                };
                return ComponentWithInjectedProps;
            }(react__WEBPACK_IMPORTED_MODULE_1__["Component"])),
            _a.displayName = 'Customized' + scope,
            _a);
        return Object(_hoistStatics__WEBPACK_IMPORTED_MODULE_3__["hoistStatics"])(ComposedComponent, resultClass);
    };
}


/***/ }),

/***/ "../utilities/lib/customizations/mergeCustomizations.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeCustomizations", function() { return mergeCustomizations; });
/* harmony import */ var _mergeSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/customizations/mergeSettings.js");

/**
 * Merge props and customizations giving priority to props over context.
 * NOTE: This function will always perform multiple merge operations. Use with caution.
 * @param props - New settings to merge in.
 * @param parentContext - Context containing current settings.
 * @returns Merged customizations.
 */
function mergeCustomizations(props, parentContext) {
    var _a = (parentContext || {}).customizations, customizations = _a === void 0 ? { settings: {}, scopedSettings: {} } : _a;
    return {
        customizations: {
            settings: Object(_mergeSettings__WEBPACK_IMPORTED_MODULE_0__["mergeSettings"])(customizations.settings, props.settings),
            scopedSettings: Object(_mergeSettings__WEBPACK_IMPORTED_MODULE_0__["mergeScopedSettings"])(customizations.scopedSettings, props.scopedSettings),
            inCustomizerContext: true,
        },
    };
}


/***/ }),

/***/ "../utilities/lib/customizations/mergeSettings.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeSettings", function() { return mergeSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeScopedSettings", function() { return mergeScopedSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");

/**
 * Merge new and old settings, giving priority to new settings.
 * New settings is optional in which case oldSettings is returned as-is.
 * @param oldSettings - Old settings to fall back to.
 * @param newSettings - New settings that will be merged over oldSettings.
 * @returns Merged settings.
 */
function mergeSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = _isSettingsFunction(newSettings) ? newSettings : _settingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function mergeScopedSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = _isSettingsFunction(newSettings) ? newSettings : _scopedSettingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function _isSettingsFunction(settings) {
    return typeof settings === 'function';
}
function _settingsMergeWith(newSettings) {
    return function (settings) { return (newSettings ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, settings), newSettings) : settings); };
}
function _scopedSettingsMergeWith(scopedSettingsFromProps) {
    if (scopedSettingsFromProps === void 0) { scopedSettingsFromProps = {}; }
    return function (oldScopedSettings) {
        var newScopedSettings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, oldScopedSettings);
        for (var scopeName in scopedSettingsFromProps) {
            if (scopedSettingsFromProps.hasOwnProperty(scopeName)) {
                newScopedSettings[scopeName] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, oldScopedSettings[scopeName]), scopedSettingsFromProps[scopeName]);
            }
        }
        return newScopedSettings;
    };
}


/***/ }),

/***/ "../utilities/lib/customizations/useCustomizationSettings.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCustomizationSettings", function() { return useCustomizationSettings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Customizations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../utilities/lib/customizations/Customizations.js");
/* harmony import */ var _CustomizerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../utilities/lib/customizations/CustomizerContext.js");



/**
 * Hook to get Customizations settings from Customizations singleton or CustomizerContext.
 * It will trigger component state update on settings change observed.
 */
function useCustomizationSettings(properties, scopeName) {
    var forceUpdate = useForceUpdate();
    var customizations = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_CustomizerContext__WEBPACK_IMPORTED_MODULE_2__["CustomizerContext"]).customizations;
    var inCustomizerContext = customizations.inCustomizerContext;
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (!inCustomizerContext) {
            _Customizations__WEBPACK_IMPORTED_MODULE_1__["Customizations"].observe(forceUpdate);
        }
        return function () {
            if (!inCustomizerContext) {
                _Customizations__WEBPACK_IMPORTED_MODULE_1__["Customizations"].unobserve(forceUpdate);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps -- exclude forceUpdate
    }, [inCustomizerContext]);
    return _Customizations__WEBPACK_IMPORTED_MODULE_1__["Customizations"].getSettings(properties, scopeName, customizations);
}
function useForceUpdate() {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0), setValue = _a[1];
    return function () { return setValue(function (value) { return ++value; }); };
}


/***/ }),

/***/ "../utilities/lib/dom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_elementContains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/dom/elementContains.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContains", function() { return _dom_elementContains__WEBPACK_IMPORTED_MODULE_0__["elementContains"]; });

/* harmony import */ var _dom_elementContainsAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../utilities/lib/dom/elementContainsAttribute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContainsAttribute", function() { return _dom_elementContainsAttribute__WEBPACK_IMPORTED_MODULE_1__["elementContainsAttribute"]; });

/* harmony import */ var _dom_findElementRecursive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../utilities/lib/dom/findElementRecursive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findElementRecursive", function() { return _dom_findElementRecursive__WEBPACK_IMPORTED_MODULE_2__["findElementRecursive"]; });

/* harmony import */ var _dom_getChildren__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../utilities/lib/dom/getChildren.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return _dom_getChildren__WEBPACK_IMPORTED_MODULE_3__["getChildren"]; });

/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../utilities/lib/dom/getDocument.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return _dom_getDocument__WEBPACK_IMPORTED_MODULE_4__["getDocument"]; });

/* harmony import */ var _dom_getParent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../utilities/lib/dom/getParent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return _dom_getParent__WEBPACK_IMPORTED_MODULE_5__["getParent"]; });

/* harmony import */ var _dom_getRect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../utilities/lib/dom/getRect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRect", function() { return _dom_getRect__WEBPACK_IMPORTED_MODULE_6__["getRect"]; });

/* harmony import */ var _dom_getVirtualParent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../utilities/lib/dom/getVirtualParent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVirtualParent", function() { return _dom_getVirtualParent__WEBPACK_IMPORTED_MODULE_7__["getVirtualParent"]; });

/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../utilities/lib/dom/getWindow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return _dom_getWindow__WEBPACK_IMPORTED_MODULE_8__["getWindow"]; });

/* harmony import */ var _dom_isVirtualElement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../utilities/lib/dom/isVirtualElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVirtualElement", function() { return _dom_isVirtualElement__WEBPACK_IMPORTED_MODULE_9__["isVirtualElement"]; });

/* harmony import */ var _dom_on__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../utilities/lib/dom/on.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "on", function() { return _dom_on__WEBPACK_IMPORTED_MODULE_10__["on"]; });

/* harmony import */ var _dom_portalContainsElement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../utilities/lib/dom/portalContainsElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "portalContainsElement", function() { return _dom_portalContainsElement__WEBPACK_IMPORTED_MODULE_11__["portalContainsElement"]; });

/* harmony import */ var _dom_raiseClick__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../utilities/lib/dom/raiseClick.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "raiseClick", function() { return _dom_raiseClick__WEBPACK_IMPORTED_MODULE_12__["raiseClick"]; });

/* harmony import */ var _dom_setPortalAttribute__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../utilities/lib/dom/setPortalAttribute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_PORTAL_ATTRIBUTE", function() { return _dom_setPortalAttribute__WEBPACK_IMPORTED_MODULE_13__["DATA_PORTAL_ATTRIBUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPortalAttribute", function() { return _dom_setPortalAttribute__WEBPACK_IMPORTED_MODULE_13__["setPortalAttribute"]; });

/* harmony import */ var _dom_setVirtualParent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../utilities/lib/dom/setVirtualParent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setVirtualParent", function() { return _dom_setVirtualParent__WEBPACK_IMPORTED_MODULE_14__["setVirtualParent"]; });


















/***/ }),

/***/ "../utilities/lib/dom/elementContains.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../dom-utilities/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContains", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["elementContains"]; });




/***/ }),

/***/ "../utilities/lib/dom/elementContainsAttribute.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../dom-utilities/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContainsAttribute", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["elementContainsAttribute"]; });




/***/ }),

/***/ "../utilities/lib/dom/findElementRecursive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../dom-utilities/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findElementRecursive", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["findElementRecursive"]; });




/***/ }),

/***/ "../utilities/lib/dom/getChildren.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../dom-utilities/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["getChildren"]; });




/***/ }),

/***/ "../utilities/lib/dom/getDocument.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return getDocument; });
/* harmony import */ var _setSSR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/dom/setSSR.js");

/**
 * Helper to get the document object. Note that in popup window cases, document
 * might be the wrong document, which is why we look at ownerDocument for the
 * truth. Also note that the SSR flag is used to test ssr scenarios even if
 * document is defined (from JSDOM for example.)
 *
 * @public
 */
function getDocument(rootElement) {
    if (_setSSR__WEBPACK_IMPORTED_MODULE_0__["_isSSR"] || typeof document === 'undefined') {
        return undefined;
    }
    else {
        var el = rootElement;
        return el && el.ownerDocument ? el.ownerDocument : document;
    }
}


/***/ }),

/***/ "../utilities/lib/dom/getParent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../dom-utilities/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["getParent"]; });




/***/ }),

/***/ "../utilities/lib/dom/getRect.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRect", function() { return getRect; });
/**
 * Helper to get bounding client rect. Passing in window will get the window size.
 *
 * @public
 */
function getRect(element) {
    var rect;
    if (element) {
        if (element === window) {
            rect = {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight,
                right: window.innerWidth,
                bottom: window.innerHeight,
            };
        }
        else if (element.getBoundingClientRect) {
            rect = element.getBoundingClientRect();
        }
    }
    return rect;
}


/***/ }),

/***/ "../utilities/lib/dom/getVirtualParent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../dom-utilities/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVirtualParent", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["getVirtualParent"]; });




/***/ }),

/***/ "../utilities/lib/dom/getWindow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return getWindow; });
/* harmony import */ var _setSSR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/dom/setSSR.js");

var _window = undefined;
// Note: Accessing "window" in IE11 is somewhat expensive, and calling "typeof window"
// hits a memory leak, whereas aliasing it and calling "typeof _window" does not.
// Caching the window value at the file scope lets us minimize the impact.
try {
    _window = window;
}
catch (e) {
    /* no-op */
}
/**
 * Helper to get the window object. The helper will make sure to use a cached variable
 * of "window", to avoid overhead and memory leaks in IE11. Note that in popup scenarios the
 * window object won't match the "global" window object, and for these scenarios, you should
 * pass in an element hosted within the popup.
 *
 * @public
 */
function getWindow(rootElement) {
    if (_setSSR__WEBPACK_IMPORTED_MODULE_0__["_isSSR"] || typeof _window === 'undefined') {
        return undefined;
    }
    else {
        var el = rootElement;
        return el && el.ownerDocument && el.ownerDocument.defaultView ? el.ownerDocument.defaultView : _window;
    }
}


/***/ }),

/***/ "../utilities/lib/dom/isVirtualElement.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../dom-utilities/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVirtualElement", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["isVirtualElement"]; });




/***/ }),

/***/ "../utilities/lib/dom/on.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
function on(element, eventName, callback, options) {
    element.addEventListener(eventName, callback, options);
    return function () { return element.removeEventListener(eventName, callback, options); };
}


/***/ }),

/***/ "../utilities/lib/dom/portalContainsElement.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../dom-utilities/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "portalContainsElement", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["portalContainsElement"]; });




/***/ }),

/***/ "../utilities/lib/dom/raiseClick.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raiseClick", function() { return raiseClick; });
/** Raises a click event. */
function raiseClick(target) {
    var event = createNewEvent('MouseEvents');
    event.initEvent('click', true, true);
    target.dispatchEvent(event);
}
function createNewEvent(eventName) {
    var event;
    if (typeof Event === 'function') {
        // Chrome, Opera, Firefox
        event = new Event(eventName);
    }
    else {
        // IE
        event = document.createEvent('Event');
        event.initEvent(eventName, true, true);
    }
    return event;
}


/***/ }),

/***/ "../utilities/lib/dom/setPortalAttribute.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../dom-utilities/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_PORTAL_ATTRIBUTE", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["DATA_PORTAL_ATTRIBUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPortalAttribute", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["setPortalAttribute"]; });




/***/ }),

/***/ "../utilities/lib/dom/setSSR.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isSSR", function() { return _isSSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSSR", function() { return setSSR; });
var _isSSR = false;
/**
 * Helper to set ssr mode to simulate no window object returned from getWindow helper.
 *
 * @public
 */
function setSSR(isEnabled) {
    _isSSR = isEnabled;
}


/***/ }),

/***/ "../utilities/lib/dom/setVirtualParent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../dom-utilities/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setVirtualParent", function() { return _fluentui_dom_utilities__WEBPACK_IMPORTED_MODULE_0__["setVirtualParent"]; });




/***/ }),

/***/ "../utilities/lib/extendComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendComponent", function() { return extendComponent; });
/* harmony import */ var _appendFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/appendFunction.js");

/**
 * Extends a component's lifetime methods by appending new functions to the existing lifetime functions.
 */
function extendComponent(parent, methods) {
    for (var name_1 in methods) {
        if (methods.hasOwnProperty(name_1)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            parent[name_1] = Object(_appendFunction__WEBPACK_IMPORTED_MODULE_0__["appendFunction"])(parent, parent[name_1], methods[name_1]);
        }
    }
}


/***/ }),

/***/ "../utilities/lib/focus.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstFocusable", function() { return getFirstFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastFocusable", function() { return getLastFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstTabbable", function() { return getFirstTabbable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastTabbable", function() { return getLastTabbable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusFirstChild", function() { return focusFirstChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousElement", function() { return getPreviousElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextElement", function() { return getNextElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementVisible", function() { return isElementVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementTabbable", function() { return isElementTabbable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementFocusZone", function() { return isElementFocusZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementFocusSubZone", function() { return isElementFocusSubZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doesElementContainFocus", function() { return doesElementContainFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldWrapFocus", function() { return shouldWrapFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusAsync", function() { return focusAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusableByIndexPath", function() { return getFocusableByIndexPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementIndexPath", function() { return getElementIndexPath; });
/* harmony import */ var _dom_elementContainsAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/dom/elementContainsAttribute.js");
/* harmony import */ var _dom_elementContains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../utilities/lib/dom/elementContains.js");
/* harmony import */ var _dom_getParent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../utilities/lib/dom/getParent.js");
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../utilities/lib/dom/getWindow.js");
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../utilities/lib/dom/getDocument.js");





var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var FOCUSZONE_SUB_ATTRIBUTE = 'data-is-sub-focuszone';
/**
 * Gets the first focusable element.
 *
 * @public
 */
function getFirstFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getNextElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones);
}
/**
 * Gets the last focusable element.
 *
 * @public
 */
function getLastFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones);
}
/**
 * Gets the first tabbable element. (The difference between focusable and tabbable is that tabbable elements are
 * focusable elements that also have tabIndex != -1.)
 * @param rootElement - The parent element to search beneath.
 * @param currentElement - The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues forward.  Typical use passes rootElement.firstChild.
 * @param includeElementsInFocusZones - true if traversal should go into FocusZone descendants.
 * @param checkNode - Include currentElement in search when true. Defaults to true.
 * @public
 */
function getFirstTabbable(rootElement, currentElement, includeElementsInFocusZones, checkNode) {
    if (checkNode === void 0) { checkNode = true; }
    return getNextElement(rootElement, currentElement, checkNode, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/);
}
/**
 * Gets the last tabbable element. (The difference between focusable and tabbable is that tabbable elements are
 * focusable elements that also have tabIndex != -1.)
 * @param rootElement - The parent element to search beneath.
 * @param currentElement - The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues in reverse.  Typical use passes rootElement.lastChild.
 * @param includeElementsInFocusZones - true if traversal should go into FocusZone descendants.
 * @param checkNode - Include currentElement in search when true. Defaults to true.
 * @public
 */
function getLastTabbable(rootElement, currentElement, includeElementsInFocusZones, checkNode) {
    if (checkNode === void 0) { checkNode = true; }
    return getPreviousElement(rootElement, currentElement, checkNode, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/);
}
/**
 * Attempts to focus the first focusable element that is a child or child's child of the rootElement.
 *
 * @public
 * @param rootElement - Element to start the search for a focusable child.
 * @returns True if focus was set, false if it was not.
 */
function focusFirstChild(rootElement) {
    var element = getNextElement(rootElement, rootElement, true, false, false, true);
    if (element) {
        focusAsync(element);
        return true;
    }
    return false;
}
/**
 * Traverse to find the previous element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 */
function getPreviousElement(rootElement, currentElement, checkNode, suppressParentTraversal, traverseChildren, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement || (!allowFocusRoot && currentElement === rootElement)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check its children.
    if (traverseChildren &&
        isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getPreviousElement(rootElement, currentElement.lastElementChild, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch) {
            if ((tabbable && isElementTabbable(childMatch, true)) || !tabbable) {
                return childMatch;
            }
            var childMatchSiblingMatch = getPreviousElement(rootElement, childMatch.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
            if (childMatchSiblingMatch) {
                return childMatchSiblingMatch;
            }
            var childMatchParent = childMatch.parentElement;
            // At this point if we have not found any potential matches
            // start looking at the rest of the subtree under the currentParent.
            // NOTE: We do not want to recurse here because doing so could
            // cause elements to get skipped.
            while (childMatchParent && childMatchParent !== currentElement) {
                var childMatchParentMatch = getPreviousElement(rootElement, childMatchParent.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
                if (childMatchParentMatch) {
                    return childMatchParentMatch;
                }
                childMatchParent = childMatchParent.parentElement;
            }
        }
    }
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement, tabbable)) {
        return currentElement;
    }
    // Check its previous sibling.
    var siblingMatch = getPreviousElement(rootElement, currentElement.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    // Check its parent.
    if (!suppressParentTraversal) {
        return getPreviousElement(rootElement, currentElement.parentElement, true, false, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
/**
 * Traverse to find the next focusable element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 * @param checkNode - Include currentElement in search when true.
 */
function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement || (currentElement === rootElement && suppressChildTraversal && !allowFocusRoot)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement, tabbable)) {
        return currentElement;
    }
    // Check its children.
    if (!suppressChildTraversal &&
        isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch) {
            return childMatch;
        }
    }
    if (currentElement === rootElement) {
        return null;
    }
    // Check its sibling.
    var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    if (!suppressParentTraversal) {
        return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
/**
 * Determines if an element is visible.
 *
 * @public
 */
function isElementVisible(element) {
    // If the element is not valid, return false.
    if (!element || !element.getAttribute) {
        return false;
    }
    var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);
    // If the element is explicitly marked with the visibility attribute, return that value as boolean.
    if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
        return visibilityAttribute === 'true';
    }
    // Fallback to other methods of determining actual visibility.
    return (element.offsetHeight !== 0 ||
        element.offsetParent !== null ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        element.isVisible === true); // used as a workaround for testing.
}
/**
 * Determines if an element can receive focus programmatically or via a mouse click.
 * If checkTabIndex is true, additionally checks to ensure the element can be focused with the tab key,
 * meaning tabIndex != -1.
 *
 * @public
 */
function isElementTabbable(element, checkTabIndex) {
    // If this element is null or is disabled, it is not considered tabbable.
    if (!element || element.disabled) {
        return false;
    }
    var tabIndex = 0;
    var tabIndexAttributeValue = null;
    if (element && element.getAttribute) {
        tabIndexAttributeValue = element.getAttribute('tabIndex');
        if (tabIndexAttributeValue) {
            tabIndex = parseInt(tabIndexAttributeValue, 10);
        }
    }
    var isFocusableAttribute = element.getAttribute ? element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) : null;
    var isTabIndexSet = tabIndexAttributeValue !== null && tabIndex >= 0;
    var result = !!element &&
        isFocusableAttribute !== 'false' &&
        (element.tagName === 'A' ||
            element.tagName === 'BUTTON' ||
            element.tagName === 'INPUT' ||
            element.tagName === 'TEXTAREA' ||
            element.tagName === 'SELECT' ||
            isFocusableAttribute === 'true' ||
            isTabIndexSet);
    return checkTabIndex ? tabIndex !== -1 && result : result;
}
/**
 * Determines if a given element is a focus zone.
 *
 * @public
 */
function isElementFocusZone(element) {
    return !!(element && element.getAttribute && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE));
}
/**
 * Determines if a given element is a focus sub zone.
 *
 * @public
 */
function isElementFocusSubZone(element) {
    return !!(element && element.getAttribute && element.getAttribute(FOCUSZONE_SUB_ATTRIBUTE) === 'true');
}
/**
 * Determines if an element, or any of its children, contain focus.
 *
 * @public
 */
function doesElementContainFocus(element) {
    var document = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_4__["getDocument"])(element);
    var currentActiveElement = document && document.activeElement;
    if (currentActiveElement && Object(_dom_elementContains__WEBPACK_IMPORTED_MODULE_1__["elementContains"])(element, currentActiveElement)) {
        return true;
    }
    return false;
}
/**
 * Determines if an, or any of its ancestors, sepcificies that it doesn't want focus to wrap
 * @param element - element to start searching from
 * @param noWrapDataAttribute - the no wrap data attribute to match (either)
 * @returns true if focus should wrap, false otherwise
 */
function shouldWrapFocus(element, noWrapDataAttribute) {
    return Object(_dom_elementContainsAttribute__WEBPACK_IMPORTED_MODULE_0__["elementContainsAttribute"])(element, noWrapDataAttribute) === 'true' ? false : true;
}
var targetToFocusOnNextRepaint = undefined;
/**
 * Sets focus to an element asynchronously. The focus will be set at the next browser repaint,
 * meaning it won't cause any extra recalculations. If more than one focusAsync is called during one frame,
 * only the latest called focusAsync element will actually be focused
 * @param element - The element to focus
 */
function focusAsync(element) {
    if (element) {
        // An element was already queued to be focused, so replace that one with the new element
        if (targetToFocusOnNextRepaint) {
            targetToFocusOnNextRepaint = element;
            return;
        }
        targetToFocusOnNextRepaint = element;
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_3__["getWindow"])(element);
        if (win) {
            // element.focus() is a no-op if the element is no longer in the DOM, meaning this is always safe
            win.requestAnimationFrame(function () {
                var focusableElement = targetToFocusOnNextRepaint;
                // We are done focusing for this frame, so reset the queued focus element
                targetToFocusOnNextRepaint = undefined;
                if (focusableElement) {
                    if (focusableElement.getAttribute && focusableElement.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true') {
                        // Normally, a FocusZone would be responsible for setting the tabindex values on all its descendants.
                        // However, even this animation frame callback can pre-empt the rendering of a FocusZone's child elements,
                        // so it may be necessary to set the tabindex directly here.
                        if (!focusableElement.getAttribute('tabindex')) {
                            focusableElement.setAttribute('tabindex', '0');
                        }
                    }
                    focusableElement.focus();
                }
            });
        }
    }
}
/**
 * Finds the closest focusable element via an index path from a parent. See
 * `getElementIndexPath` for getting an index path from an element to a child.
 */
function getFocusableByIndexPath(parent, path) {
    var element = parent;
    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
        var index = path_1[_i];
        var nextChild = element.children[Math.min(index, element.children.length - 1)];
        if (!nextChild) {
            break;
        }
        element = nextChild;
    }
    element =
        isElementTabbable(element) && isElementVisible(element)
            ? element
            : getNextElement(parent, element, true) || getPreviousElement(parent, element);
    return element;
}
/**
 * Finds the element index path from a parent element to a child element.
 *
 * If you had this node structure: "A has children [B, C] and C has child D",
 * the index path from A to D would be [1, 0], or `parent.chidren[1].children[0]`.
 */
function getElementIndexPath(fromElement, toElement) {
    var path = [];
    while (toElement && fromElement && toElement !== fromElement) {
        var parent_1 = Object(_dom_getParent__WEBPACK_IMPORTED_MODULE_2__["getParent"])(toElement, true);
        if (parent_1 === null) {
            return [];
        }
        path.unshift(Array.prototype.indexOf.call(parent_1.children, toElement));
        toElement = parent_1;
    }
    return path;
}


/***/ }),

/***/ "../utilities/lib/getId.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getId", function() { return getId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetIds", function() { return resetIds; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/dom/getWindow.js");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../merge-styles/lib/index.js");


// Initialize global window id.
var CURRENT_ID_PROPERTY = '__currentId__';
var DEFAULT_ID_STRING = 'id__';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var _global = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])() || {};
if (_global[CURRENT_ID_PROPERTY] === undefined) {
    _global[CURRENT_ID_PROPERTY] = 0;
}
var _initializedStylesheetResets = false;
/**
 * Generates a unique id in the global scope (this spans across duplicate copies of the same library.)
 *
 * @public
 */
function getId(prefix) {
    if (!_initializedStylesheetResets) {
        // Configure ids to reset on stylesheet resets.
        var stylesheet = _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__["Stylesheet"].getInstance();
        if (stylesheet && stylesheet.onReset) {
            stylesheet.onReset(resetIds);
        }
        _initializedStylesheetResets = true;
    }
    var index = _global[CURRENT_ID_PROPERTY]++;
    return (prefix === undefined ? DEFAULT_ID_STRING : prefix) + index;
}
/**
 * Resets id counter to an (optional) number.
 *
 * @public
 */
function resetIds(counter) {
    if (counter === void 0) { counter = 0; }
    _global[CURRENT_ID_PROPERTY] = counter;
}


/***/ }),

/***/ "../utilities/lib/getNativeElementProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNativeElementProps", function() { return getNativeElementProps; });
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/properties.js");

var nativeElementMap = {
    label: _properties__WEBPACK_IMPORTED_MODULE_0__["labelProperties"],
    audio: _properties__WEBPACK_IMPORTED_MODULE_0__["audioProperties"],
    video: _properties__WEBPACK_IMPORTED_MODULE_0__["videoProperties"],
    ol: _properties__WEBPACK_IMPORTED_MODULE_0__["olProperties"],
    li: _properties__WEBPACK_IMPORTED_MODULE_0__["liProperties"],
    a: _properties__WEBPACK_IMPORTED_MODULE_0__["anchorProperties"],
    button: _properties__WEBPACK_IMPORTED_MODULE_0__["buttonProperties"],
    input: _properties__WEBPACK_IMPORTED_MODULE_0__["inputProperties"],
    textarea: _properties__WEBPACK_IMPORTED_MODULE_0__["textAreaProperties"],
    select: _properties__WEBPACK_IMPORTED_MODULE_0__["selectProperties"],
    option: _properties__WEBPACK_IMPORTED_MODULE_0__["optionProperties"],
    table: _properties__WEBPACK_IMPORTED_MODULE_0__["tableProperties"],
    tr: _properties__WEBPACK_IMPORTED_MODULE_0__["trProperties"],
    th: _properties__WEBPACK_IMPORTED_MODULE_0__["thProperties"],
    td: _properties__WEBPACK_IMPORTED_MODULE_0__["tdProperties"],
    colGroup: _properties__WEBPACK_IMPORTED_MODULE_0__["colGroupProperties"],
    col: _properties__WEBPACK_IMPORTED_MODULE_0__["colProperties"],
    form: _properties__WEBPACK_IMPORTED_MODULE_0__["formProperties"],
    iframe: _properties__WEBPACK_IMPORTED_MODULE_0__["iframeProperties"],
    img: _properties__WEBPACK_IMPORTED_MODULE_0__["imgProperties"],
};
/**
 * Given an element tagname and user props, filters the props to only allowed props for the given
 * element type.
 * @param tagName - Tag name (e.g. "div")
 * @param props - Props object
 * @param excludedPropNames - List of props to disallow
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNativeElementProps(tagName, props, excludedPropNames) {
    var allowedPropNames = (tagName && nativeElementMap[tagName]) || _properties__WEBPACK_IMPORTED_MODULE_0__["htmlElementProperties"];
    return Object(_properties__WEBPACK_IMPORTED_MODULE_0__["getNativeProps"])(props, allowedPropNames, excludedPropNames);
}


/***/ }),

/***/ "../utilities/lib/getPropsWithDefaults.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropsWithDefaults", function() { return getPropsWithDefaults; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");

/**
 * Function to apply default values to a component props object. This function is intended for function components,
 * to maintain parity with the `defaultProps` feature of class components. It accounts for properties that are
 * specified, but undefined.
 * @param defaultProps- An object with default values for various properties
 * @param propsWithoutDefaults- The props object passed into the component
 */
function getPropsWithDefaults(defaultProps, propsWithoutDefaults) {
    var props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, propsWithoutDefaults);
    for (var _i = 0, _a = Object.keys(defaultProps); _i < _a.length; _i++) {
        var key = _a[_i];
        if (props[key] === undefined) {
            props[key] = defaultProps[key];
        }
    }
    return props;
}


/***/ }),

/***/ "../utilities/lib/hoist.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoistMethods", function() { return hoistMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unhoistMethods", function() { return unhoistMethods; });
var REACT_LIFECYCLE_EXCLUSIONS = [
    'setState',
    'render',
    'componentWillMount',
    'UNSAFE_componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'UNSAFE_componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'getSnapshotBeforeUpdate',
    'UNSAFE_componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount',
];
/**
 * Allows you to hoist methods, except those in an exclusion set from a source object into a destination object.
 *
 * @public
 * @param destination - The instance of the object to hoist the methods onto.
 * @param source - The instance of the object where the methods are hoisted from.
 * @param exclusions - (Optional) What methods to exclude from being hoisted.
 * @returns An array of names of methods that were hoisted.
 */
function hoistMethods(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
destination, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
source, exclusions) {
    if (exclusions === void 0) { exclusions = REACT_LIFECYCLE_EXCLUSIONS; }
    var hoisted = [];
    var _loop_1 = function (methodName) {
        if (typeof source[methodName] === 'function' &&
            destination[methodName] === undefined &&
            (!exclusions || exclusions.indexOf(methodName) === -1)) {
            hoisted.push(methodName);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            destination[methodName] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                source[methodName].apply(source, args);
            };
        }
    };
    for (var methodName in source) {
        _loop_1(methodName);
    }
    return hoisted;
}
/**
 * Provides a method for convenience to unhoist hoisted methods.
 *
 * @public
 * @param source - The source object upon which methods were hoisted.
 * @param methodNames - An array of method names to unhoist.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function unhoistMethods(source, methodNames) {
    methodNames.forEach(function (methodName) { return delete source[methodName]; });
}


/***/ }),

/***/ "../utilities/lib/hoistStatics.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoistStatics", function() { return hoistStatics; });
/**
 * Allows you to hoist static functions in components.
 * Created for the purpose of fixing broken static functions in classes
 * that utilize decorators.
 *
 * @public
 * @param source - The object where the methods are hoisted from.
 * @param dest - The object to hoist the methods onto.
 * @returns The dest object with methods added
 */
function hoistStatics(source, dest) {
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            dest[name_1] = source[name_1];
        }
    }
    return dest;
}


/***/ }),

/***/ "../utilities/lib/ie11Detector.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE11", function() { return isIE11; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/dom/getWindow.js");

var isIE11 = function () {
    var _a, _b;
    var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    if (!((_b = (_a = win) === null || _a === void 0 ? void 0 : _a.navigator) === null || _b === void 0 ? void 0 : _b.userAgent)) {
        return false;
    }
    return win.navigator.userAgent.indexOf('rv:11.0') > -1;
};


/***/ }),

/***/ "../utilities/lib/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/Async.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Async", function() { return _Async__WEBPACK_IMPORTED_MODULE_0__["Async"]; });

/* harmony import */ var _AutoScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../utilities/lib/AutoScroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoScroll", function() { return _AutoScroll__WEBPACK_IMPORTED_MODULE_1__["AutoScroll"]; });

/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../utilities/lib/BaseComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return _BaseComponent__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nullRender", function() { return _BaseComponent__WEBPACK_IMPORTED_MODULE_2__["nullRender"]; });

/* harmony import */ var _DelayedRender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../utilities/lib/DelayedRender.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DelayedRender", function() { return _DelayedRender__WEBPACK_IMPORTED_MODULE_3__["DelayedRender"]; });

/* harmony import */ var _EventGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../utilities/lib/EventGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventGroup", function() { return _EventGroup__WEBPACK_IMPORTED_MODULE_4__["EventGroup"]; });

/* harmony import */ var _FabricPerformance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../utilities/lib/FabricPerformance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FabricPerformance", function() { return _FabricPerformance__WEBPACK_IMPORTED_MODULE_5__["FabricPerformance"]; });

/* harmony import */ var _GlobalSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../utilities/lib/GlobalSettings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalSettings", function() { return _GlobalSettings__WEBPACK_IMPORTED_MODULE_6__["GlobalSettings"]; });

/* harmony import */ var _KeyCodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../utilities/lib/KeyCodes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyCodes", function() { return _KeyCodes__WEBPACK_IMPORTED_MODULE_7__["KeyCodes"]; });

/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../utilities/lib/Rectangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _Rectangle__WEBPACK_IMPORTED_MODULE_8__["Rectangle"]; });

/* harmony import */ var _appendFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../utilities/lib/appendFunction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendFunction", function() { return _appendFunction__WEBPACK_IMPORTED_MODULE_9__["appendFunction"]; });

/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../utilities/lib/aria.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeAriaAttributeValues", function() { return _aria__WEBPACK_IMPORTED_MODULE_10__["mergeAriaAttributeValues"]; });

/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../utilities/lib/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _array__WEBPACK_IMPORTED_MODULE_11__["findIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _array__WEBPACK_IMPORTED_MODULE_11__["find"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createArray", function() { return _array__WEBPACK_IMPORTED_MODULE_11__["createArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toMatrix", function() { return _array__WEBPACK_IMPORTED_MODULE_11__["toMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeIndex", function() { return _array__WEBPACK_IMPORTED_MODULE_11__["removeIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceElement", function() { return _array__WEBPACK_IMPORTED_MODULE_11__["replaceElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addElementAtIndex", function() { return _array__WEBPACK_IMPORTED_MODULE_11__["addElementAtIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _array__WEBPACK_IMPORTED_MODULE_11__["flatten"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arraysEqual", function() { return _array__WEBPACK_IMPORTED_MODULE_11__["arraysEqual"]; });

/* harmony import */ var _asAsync__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../utilities/lib/asAsync.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asAsync", function() { return _asAsync__WEBPACK_IMPORTED_MODULE_12__["asAsync"]; });

/* harmony import */ var _assertNever__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../utilities/lib/assertNever.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNever", function() { return _assertNever__WEBPACK_IMPORTED_MODULE_13__["assertNever"]; });

/* harmony import */ var _classNamesFunction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../utilities/lib/classNamesFunction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classNamesFunction", function() { return _classNamesFunction__WEBPACK_IMPORTED_MODULE_14__["classNamesFunction"]; });

/* harmony import */ var _componentAs_composeComponentAs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../utilities/lib/componentAs/composeComponentAs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "composeComponentAs", function() { return _componentAs_composeComponentAs__WEBPACK_IMPORTED_MODULE_15__["composeComponentAs"]; });

/* harmony import */ var _controlled__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../utilities/lib/controlled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isControlled", function() { return _controlled__WEBPACK_IMPORTED_MODULE_16__["isControlled"]; });

/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../utilities/lib/css.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _css__WEBPACK_IMPORTED_MODULE_17__["css"]; });

/* harmony import */ var _customizations_Customizations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../utilities/lib/customizations/Customizations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Customizations", function() { return _customizations_Customizations__WEBPACK_IMPORTED_MODULE_18__["Customizations"]; });

/* harmony import */ var _customizations_Customizer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../utilities/lib/customizations/Customizer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Customizer", function() { return _customizations_Customizer__WEBPACK_IMPORTED_MODULE_19__["Customizer"]; });

/* harmony import */ var _customizations_CustomizerContext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../utilities/lib/customizations/CustomizerContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomizerContext", function() { return _customizations_CustomizerContext__WEBPACK_IMPORTED_MODULE_20__["CustomizerContext"]; });

/* harmony import */ var _customizations_customizable__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../utilities/lib/customizations/customizable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customizable", function() { return _customizations_customizable__WEBPACK_IMPORTED_MODULE_21__["customizable"]; });

/* harmony import */ var _customizations_useCustomizationSettings__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("../utilities/lib/customizations/useCustomizationSettings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCustomizationSettings", function() { return _customizations_useCustomizationSettings__WEBPACK_IMPORTED_MODULE_22__["useCustomizationSettings"]; });

/* harmony import */ var _customizations_mergeCustomizations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("../utilities/lib/customizations/mergeCustomizations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeCustomizations", function() { return _customizations_mergeCustomizations__WEBPACK_IMPORTED_MODULE_23__["mergeCustomizations"]; });

/* harmony import */ var _customizations_mergeSettings__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("../utilities/lib/customizations/mergeSettings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeSettings", function() { return _customizations_mergeSettings__WEBPACK_IMPORTED_MODULE_24__["mergeSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeScopedSettings", function() { return _customizations_mergeSettings__WEBPACK_IMPORTED_MODULE_24__["mergeScopedSettings"]; });

/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("../utilities/lib/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContains", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["elementContains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContainsAttribute", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["elementContainsAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findElementRecursive", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["findElementRecursive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["getChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["getDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["getParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRect", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["getRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVirtualParent", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["getVirtualParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["getWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVirtualElement", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["isVirtualElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "on", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["on"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "portalContainsElement", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["portalContainsElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "raiseClick", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["raiseClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_PORTAL_ATTRIBUTE", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["DATA_PORTAL_ATTRIBUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPortalAttribute", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["setPortalAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setVirtualParent", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["setVirtualParent"]; });

/* harmony import */ var _extendComponent__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("../utilities/lib/extendComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendComponent", function() { return _extendComponent__WEBPACK_IMPORTED_MODULE_26__["extendComponent"]; });

/* harmony import */ var _focus__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("../utilities/lib/focus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirstFocusable", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getFirstFocusable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLastFocusable", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getLastFocusable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirstTabbable", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getFirstTabbable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLastTabbable", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getLastTabbable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusFirstChild", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["focusFirstChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPreviousElement", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getPreviousElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNextElement", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getNextElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementVisible", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["isElementVisible"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementTabbable", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["isElementTabbable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementFocusZone", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["isElementFocusZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementFocusSubZone", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["isElementFocusSubZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doesElementContainFocus", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["doesElementContainFocus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shouldWrapFocus", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["shouldWrapFocus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusAsync", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["focusAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusableByIndexPath", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getFocusableByIndexPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementIndexPath", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getElementIndexPath"]; });

/* harmony import */ var _getId__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("../utilities/lib/getId.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getId", function() { return _getId__WEBPACK_IMPORTED_MODULE_28__["getId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetIds", function() { return _getId__WEBPACK_IMPORTED_MODULE_28__["resetIds"]; });

/* harmony import */ var _getNativeElementProps__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("../utilities/lib/getNativeElementProps.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNativeElementProps", function() { return _getNativeElementProps__WEBPACK_IMPORTED_MODULE_29__["getNativeElementProps"]; });

/* harmony import */ var _hoist__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("../utilities/lib/hoist.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hoistMethods", function() { return _hoist__WEBPACK_IMPORTED_MODULE_30__["hoistMethods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unhoistMethods", function() { return _hoist__WEBPACK_IMPORTED_MODULE_30__["unhoistMethods"]; });

/* harmony import */ var _hoistStatics__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("../utilities/lib/hoistStatics.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hoistStatics", function() { return _hoistStatics__WEBPACK_IMPORTED_MODULE_31__["hoistStatics"]; });

/* harmony import */ var _initializeComponentRef__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("../utilities/lib/initializeComponentRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeComponentRef", function() { return _initializeComponentRef__WEBPACK_IMPORTED_MODULE_32__["initializeComponentRef"]; });

/* harmony import */ var _initializeFocusRects__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("../utilities/lib/initializeFocusRects.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeFocusRects", function() { return _initializeFocusRects__WEBPACK_IMPORTED_MODULE_33__["initializeFocusRects"]; });

/* harmony import */ var _useFocusRects__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("../utilities/lib/useFocusRects.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFocusRects", function() { return _useFocusRects__WEBPACK_IMPORTED_MODULE_34__["useFocusRects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusRects", function() { return _useFocusRects__WEBPACK_IMPORTED_MODULE_34__["FocusRects"]; });

/* harmony import */ var _initials__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("../utilities/lib/initials.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitials", function() { return _initials__WEBPACK_IMPORTED_MODULE_35__["getInitials"]; });

/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("../utilities/lib/keyboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirectionalKeyCode", function() { return _keyboard__WEBPACK_IMPORTED_MODULE_36__["isDirectionalKeyCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addDirectionalKeyCode", function() { return _keyboard__WEBPACK_IMPORTED_MODULE_36__["addDirectionalKeyCode"]; });

/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("../utilities/lib/language.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLanguage", function() { return _language__WEBPACK_IMPORTED_MODULE_37__["getLanguage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLanguage", function() { return _language__WEBPACK_IMPORTED_MODULE_37__["setLanguage"]; });

/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("../utilities/lib/math.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDistanceBetweenPoints", function() { return _math__WEBPACK_IMPORTED_MODULE_38__["getDistanceBetweenPoints"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fitContentToBounds", function() { return _math__WEBPACK_IMPORTED_MODULE_38__["fitContentToBounds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculatePrecision", function() { return _math__WEBPACK_IMPORTED_MODULE_38__["calculatePrecision"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return _math__WEBPACK_IMPORTED_MODULE_38__["precisionRound"]; });

/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("../utilities/lib/memoize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMemoizeWeakMap", function() { return _memoize__WEBPACK_IMPORTED_MODULE_39__["setMemoizeWeakMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetMemoizations", function() { return _memoize__WEBPACK_IMPORTED_MODULE_39__["resetMemoizations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return _memoize__WEBPACK_IMPORTED_MODULE_39__["memoize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoizeFunction", function() { return _memoize__WEBPACK_IMPORTED_MODULE_39__["memoizeFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMemoizer", function() { return _memoize__WEBPACK_IMPORTED_MODULE_39__["createMemoizer"]; });

/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__("../utilities/lib/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _merge__WEBPACK_IMPORTED_MODULE_40__["merge"]; });

/* harmony import */ var _mobileDetector__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__("../utilities/lib/mobileDetector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return _mobileDetector__WEBPACK_IMPORTED_MODULE_41__["isIOS"]; });

/* harmony import */ var _modalize__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__("../utilities/lib/modalize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modalize", function() { return _modalize__WEBPACK_IMPORTED_MODULE_42__["modalize"]; });

/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__("../utilities/lib/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _object__WEBPACK_IMPORTED_MODULE_43__["assign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filteredAssign", function() { return _object__WEBPACK_IMPORTED_MODULE_43__["filteredAssign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapEnumByName", function() { return _object__WEBPACK_IMPORTED_MODULE_43__["mapEnumByName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowCompare", function() { return _object__WEBPACK_IMPORTED_MODULE_43__["shallowCompare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _object__WEBPACK_IMPORTED_MODULE_43__["values"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _object__WEBPACK_IMPORTED_MODULE_43__["omit"]; });

/* harmony import */ var _osDetector__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__("../utilities/lib/osDetector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMac", function() { return _osDetector__WEBPACK_IMPORTED_MODULE_44__["isMac"]; });

/* harmony import */ var _overflow__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__("../utilities/lib/overflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasHorizontalOverflow", function() { return _overflow__WEBPACK_IMPORTED_MODULE_45__["hasHorizontalOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasVerticalOverflow", function() { return _overflow__WEBPACK_IMPORTED_MODULE_45__["hasVerticalOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOverflow", function() { return _overflow__WEBPACK_IMPORTED_MODULE_45__["hasOverflow"]; });

/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__("../utilities/lib/properties.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseElementEvents", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["baseElementEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseElementProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["baseElementProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlElementProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["htmlElementProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "labelProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["labelProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["audioProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "videoProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["videoProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "olProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["olProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "liProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["liProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anchorProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["anchorProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buttonProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["buttonProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["inputProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textAreaProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["textAreaProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["selectProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optionProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["optionProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tableProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["tableProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["trProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["thProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tdProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["tdProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colGroupProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["colGroupProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["colProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["formProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iframeProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["iframeProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imgProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["imgProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imageProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["imageProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "divProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["divProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNativeProps", function() { return _properties__WEBPACK_IMPORTED_MODULE_46__["getNativeProps"]; });

/* harmony import */ var _renderFunction_composeRenderFunction__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__("../utilities/lib/renderFunction/composeRenderFunction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "composeRenderFunction", function() { return _renderFunction_composeRenderFunction__WEBPACK_IMPORTED_MODULE_47__["composeRenderFunction"]; });

/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__("../utilities/lib/resources.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getResourceUrl", function() { return _resources__WEBPACK_IMPORTED_MODULE_48__["getResourceUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBaseUrl", function() { return _resources__WEBPACK_IMPORTED_MODULE_48__["setBaseUrl"]; });

/* harmony import */ var _rtl__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__("../utilities/lib/rtl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRTL", function() { return _rtl__WEBPACK_IMPORTED_MODULE_49__["getRTL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRTL", function() { return _rtl__WEBPACK_IMPORTED_MODULE_49__["setRTL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRTLSafeKeyCode", function() { return _rtl__WEBPACK_IMPORTED_MODULE_49__["getRTLSafeKeyCode"]; });

/* harmony import */ var _safeRequestAnimationFrame__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__("../utilities/lib/safeRequestAnimationFrame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeRequestAnimationFrame", function() { return _safeRequestAnimationFrame__WEBPACK_IMPORTED_MODULE_50__["safeRequestAnimationFrame"]; });

/* harmony import */ var _safeSetTimeout__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__("../utilities/lib/safeSetTimeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeSetTimeout", function() { return _safeSetTimeout__WEBPACK_IMPORTED_MODULE_51__["safeSetTimeout"]; });

/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__("../utilities/lib/scroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_IS_SCROLLABLE_ATTRIBUTE", function() { return _scroll__WEBPACK_IMPORTED_MODULE_52__["DATA_IS_SCROLLABLE_ATTRIBUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allowScrollOnElement", function() { return _scroll__WEBPACK_IMPORTED_MODULE_52__["allowScrollOnElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allowOverscrollOnElement", function() { return _scroll__WEBPACK_IMPORTED_MODULE_52__["allowOverscrollOnElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableBodyScroll", function() { return _scroll__WEBPACK_IMPORTED_MODULE_52__["disableBodyScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableBodyScroll", function() { return _scroll__WEBPACK_IMPORTED_MODULE_52__["enableBodyScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidth", function() { return _scroll__WEBPACK_IMPORTED_MODULE_52__["getScrollbarWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findScrollableParent", function() { return _scroll__WEBPACK_IMPORTED_MODULE_52__["findScrollableParent"]; });

/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__("../utilities/lib/selection/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return _selection_index__WEBPACK_IMPORTED_MODULE_53__["SELECTION_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return _selection_index__WEBPACK_IMPORTED_MODULE_53__["SelectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return _selection_index__WEBPACK_IMPORTED_MODULE_53__["SelectionDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return _selection_index__WEBPACK_IMPORTED_MODULE_53__["Selection"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__("../utilities/lib/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _string__WEBPACK_IMPORTED_MODULE_54__["format"]; });

/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__("../utilities/lib/styled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return _styled__WEBPACK_IMPORTED_MODULE_55__["styled"]; });

/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__("../utilities/lib/warn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return _warn__WEBPACK_IMPORTED_MODULE_56__["warn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWarningCallback", function() { return _warn__WEBPACK_IMPORTED_MODULE_56__["setWarningCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnConditionallyRequiredProps", function() { return _warn__WEBPACK_IMPORTED_MODULE_56__["warnConditionallyRequiredProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetControlledWarnings", function() { return _warn__WEBPACK_IMPORTED_MODULE_56__["resetControlledWarnings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnControlledUsage", function() { return _warn__WEBPACK_IMPORTED_MODULE_56__["warnControlledUsage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnDeprecations", function() { return _warn__WEBPACK_IMPORTED_MODULE_56__["warnDeprecations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnMutuallyExclusive", function() { return _warn__WEBPACK_IMPORTED_MODULE_56__["warnMutuallyExclusive"]; });

/* harmony import */ var _ie11Detector__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__("../utilities/lib/ie11Detector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIE11", function() { return _ie11Detector__WEBPACK_IMPORTED_MODULE_57__["isIE11"]; });

/* harmony import */ var _getPropsWithDefaults__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__("../utilities/lib/getPropsWithDefaults.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPropsWithDefaults", function() { return _getPropsWithDefaults__WEBPACK_IMPORTED_MODULE_58__["getPropsWithDefaults"]; });

/* harmony import */ var _setFocusVisibility__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__("../utilities/lib/setFocusVisibility.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setFocusVisibility", function() { return _setFocusVisibility__WEBPACK_IMPORTED_MODULE_59__["setFocusVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsFocusVisibleClassName", function() { return _setFocusVisibility__WEBPACK_IMPORTED_MODULE_59__["IsFocusVisibleClassName"]; });

/* harmony import */ var _dom_setSSR__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__("../utilities/lib/dom/setSSR.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSSR", function() { return _dom_setSSR__WEBPACK_IMPORTED_MODULE_60__["setSSR"]; });

/* harmony import */ var _createMergedRef__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__("../utilities/lib/createMergedRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMergedRef", function() { return _createMergedRef__WEBPACK_IMPORTED_MODULE_61__["createMergedRef"]; });

/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__("../utilities/lib/version.js");

































































/***/ }),

/***/ "../utilities/lib/initializeComponentRef.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeComponentRef", function() { return initializeComponentRef; });
/* harmony import */ var _extendComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/extendComponent.js");

/**
 * Helper to manage componentRef resolution. Internally appends logic to
 * lifetime methods to resolve componentRef to the passed in object.
 *
 * Usage: call initializeComponentRef(this) in the constructor,
 */
function initializeComponentRef(obj) {
    Object(_extendComponent__WEBPACK_IMPORTED_MODULE_0__["extendComponent"])(obj, {
        componentDidMount: _onMount,
        componentDidUpdate: _onUpdate,
        componentWillUnmount: _onUnmount,
    });
}
function _onMount() {
    _setComponentRef(this.props.componentRef, this);
}
function _onUpdate(prevProps) {
    if (prevProps.componentRef !== this.props.componentRef) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _setComponentRef(prevProps.componentRef, null);
        _setComponentRef(this.props.componentRef, this);
    }
}
function _onUnmount() {
    _setComponentRef(this.props.componentRef, null);
}
function _setComponentRef(componentRef, value) {
    if (componentRef) {
        if (typeof componentRef === 'object') {
            componentRef.current = value;
        }
        else if (typeof componentRef === 'function') {
            componentRef(value);
        }
    }
}


/***/ }),

/***/ "../utilities/lib/initializeFocusRects.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeFocusRects", function() { return initializeFocusRects; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/dom/getWindow.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../utilities/lib/keyboard.js");
/* harmony import */ var _setFocusVisibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../utilities/lib/setFocusVisibility.js");



/**
 * Initializes the logic which:
 *
 * 1. Subscribes keydown and mousedown events. (It will only do it once per window,
 *    so it's safe to call this method multiple times.)
 * 2. When the user presses directional keyboard keys, adds the 'ms-Fabric--isFocusVisible' classname
 *    to the document body, removes the 'ms-Fabric-isFocusHidden' classname.
 * 3. When the user clicks a mouse button, adds the 'ms-Fabric-isFocusHidden' classname to the
 *    document body, removes the 'ms-Fabric--isFocusVisible' classname.
 *
 * This logic allows components on the page to conditionally render focus treatments based on
 * the existence of global classnames, which simplifies logic overall.
 *
 * @param window - the window used to add the event listeners
 * @deprecated Use useFocusRects hook or FocusRects component instead.
 */
function initializeFocusRects(window) {
    var _a;
    var win = (window || Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])());
    if (!win || ((_a = win.FabricConfig) === null || _a === void 0 ? void 0 : _a.disableFocusRects) === true) {
        return;
    }
    if (!win.__hasInitializeFocusRects__) {
        win.__hasInitializeFocusRects__ = true;
        win.addEventListener('mousedown', _onMouseDown, true);
        win.addEventListener('pointerdown', _onPointerDown, true);
        win.addEventListener('keydown', _onKeyDown, true);
    }
}
function _onMouseDown(ev) {
    Object(_setFocusVisibility__WEBPACK_IMPORTED_MODULE_2__["setFocusVisibility"])(false, ev.target);
}
function _onPointerDown(ev) {
    if (ev.pointerType !== 'mouse') {
        Object(_setFocusVisibility__WEBPACK_IMPORTED_MODULE_2__["setFocusVisibility"])(false, ev.target);
    }
}
function _onKeyDown(ev) {
    // eslint-disable-next-line deprecation/deprecation
    Object(_keyboard__WEBPACK_IMPORTED_MODULE_1__["isDirectionalKeyCode"])(ev.which) && Object(_setFocusVisibility__WEBPACK_IMPORTED_MODULE_2__["setFocusVisibility"])(true, ev.target);
}


/***/ }),

/***/ "../utilities/lib/initials.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitials", function() { return getInitials; });
/**
 * Regular expression matching characters to ignore when calculating the initials.
 */
/**
 * Regular expression matching characters within various types of enclosures, including the enclosures themselves
 *  so for example, (xyz) [xyz] {xyz} all would be ignored
 */
var UNWANTED_ENCLOSURES_REGEX = /[\(\[\{][^\)\]\}]*[\)\]\}]/g;
/**
 * Regular expression matching special ASCII characters except space, plus some unicode special characters.
 * Applies after unwanted enclosures have been removed
 */
var UNWANTED_CHARS_REGEX = /[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g;
/**
 * Regular expression matching phone numbers. Applied after chars matching UNWANTED_CHARS_REGEX have been removed
 * and number has been trimmed for whitespaces
 */
var PHONENUMBER_REGEX = /^\d+[\d\s]*(:?ext|x|)\s*\d+$/i;
/** Regular expression matching one or more spaces. */
var MULTIPLE_WHITESPACES_REGEX = /\s+/g;
/**
 * Regular expression matching languages for which we currently don't support initials.
 * Arabic:   Arabic, Arabic Supplement, Arabic Extended-A.
 * Korean:   Hangul Jamo, Hangul Compatibility Jamo, Hangul Jamo Extended-A, Hangul Syllables, Hangul Jamo Extended-B.
 * Japanese: Hiragana, Katakana.
 * CJK:      CJK Unified Ideographs Extension A, CJK Unified Ideographs, CJK Compatibility Ideographs,
 *             CJK Unified Ideographs Extension B
 */
// eslint-disable-next-line @fluentui/max-len
var UNSUPPORTED_TEXT_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;
function getInitialsLatin(displayName, isRtl) {
    var initials = '';
    var splits = displayName.split(' ');
    if (splits.length === 2) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[1].charAt(0).toUpperCase();
    }
    else if (splits.length === 3) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[2].charAt(0).toUpperCase();
    }
    else if (splits.length !== 0) {
        initials += splits[0].charAt(0).toUpperCase();
    }
    if (isRtl && initials.length > 1) {
        return initials.charAt(1) + initials.charAt(0);
    }
    return initials;
}
function cleanupDisplayName(displayName) {
    displayName = displayName.replace(UNWANTED_ENCLOSURES_REGEX, '');
    displayName = displayName.replace(UNWANTED_CHARS_REGEX, '');
    displayName = displayName.replace(MULTIPLE_WHITESPACES_REGEX, ' ');
    displayName = displayName.trim();
    return displayName;
}
/**
 * Get (up to 2 characters) initials based on display name of the persona.
 *
 * @public
 */
function getInitials(displayName, isRtl, allowPhoneInitials) {
    if (!displayName) {
        return '';
    }
    displayName = cleanupDisplayName(displayName);
    // For names containing CJK characters, and phone numbers, we don't display initials
    if (UNSUPPORTED_TEXT_REGEX.test(displayName) || (!allowPhoneInitials && PHONENUMBER_REGEX.test(displayName))) {
        return '';
    }
    return getInitialsLatin(displayName, isRtl);
}


/***/ }),

/***/ "../utilities/lib/keyboard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirectionalKeyCode", function() { return isDirectionalKeyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDirectionalKeyCode", function() { return addDirectionalKeyCode; });
/* harmony import */ var _KeyCodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/KeyCodes.js");
var _a;

var DirectionalKeyCodes = (_a = {},
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].up] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].down] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].left] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].right] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].home] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].end] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].tab] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].pageUp] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].pageDown] = 1,
    _a);
/**
 * Returns true if the keycode is a directional keyboard key.
 */
function isDirectionalKeyCode(which) {
    return !!DirectionalKeyCodes[which];
}
/**
 * Adds a keycode to the list of keys that, when pressed, should cause the focus outlines to be visible.
 * This can be used to add global shortcut keys that directionally move from section to section within
 * an app or between focus trap zones.
 */
function addDirectionalKeyCode(which) {
    DirectionalKeyCodes[which] = 1;
}


/***/ }),

/***/ "../utilities/lib/language.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLanguage", function() { return getLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLanguage", function() { return setLanguage; });
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/dom/getDocument.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../utilities/lib/localStorage.js");
/* harmony import */ var _sessionStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../utilities/lib/sessionStorage.js");



// Default to undefined so that we initialize on first read.
var _language;
var STORAGE_KEY = 'language';
/**
 * Gets the language set for the page.
 * @param persistenceType - Where to persist the value. Default is `localStorage` if available.
 * (In version 8, the default will be `sessionStorage`.)
 */
function getLanguage(persistenceType) {
    if (persistenceType === void 0) { persistenceType = 'localStorage'; }
    if (_language === undefined) {
        var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        var savedLanguage = persistenceType === 'localStorage'
            ? _localStorage__WEBPACK_IMPORTED_MODULE_1__["getItem"](STORAGE_KEY)
            : persistenceType === 'sessionStorage'
                ? _sessionStorage__WEBPACK_IMPORTED_MODULE_2__["getItem"](STORAGE_KEY)
                : undefined;
        if (savedLanguage) {
            _language = savedLanguage;
        }
        if (_language === undefined && doc) {
            _language = doc.documentElement.getAttribute('lang');
        }
        if (_language === undefined) {
            _language = 'en';
        }
    }
    return _language;
}
function setLanguage(language, persistenceParam) {
    var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    if (doc) {
        doc.documentElement.setAttribute('lang', language);
    }
    var persistenceType = persistenceParam === true ? 'none' : !persistenceParam ? 'localStorage' : persistenceParam;
    if (persistenceType === 'localStorage') {
        _localStorage__WEBPACK_IMPORTED_MODULE_1__["setItem"](STORAGE_KEY, language);
    }
    else if (persistenceType === 'sessionStorage') {
        _sessionStorage__WEBPACK_IMPORTED_MODULE_2__["setItem"](STORAGE_KEY, language);
    }
    _language = language;
}


/***/ }),

/***/ "../utilities/lib/localStorage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItem", function() { return setItem; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/dom/getWindow.js");

/**
 * Fetches an item from local storage without throwing an exception
 * @param key The key of the item to fetch from local storage
 */
function getItem(key) {
    var result = null;
    try {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        result = win ? win.localStorage.getItem(key) : null;
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into local storage without throwing an exception
 * @param key The key of the item to add to local storage
 * @param data The data to put into local storage
 */
function setItem(key, data) {
    try {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        win && win.localStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}


/***/ }),

/***/ "../utilities/lib/math.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistanceBetweenPoints", function() { return getDistanceBetweenPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitContentToBounds", function() { return fitContentToBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatePrecision", function() { return calculatePrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return precisionRound; });
/**
 * Determines the distance between two points.
 *
 * @public
 */
/* eslint-disable deprecation/deprecation */
function getDistanceBetweenPoints(point1, point2) {
    var left1 = point1.left || point1.x || 0;
    var top1 = point1.top || point1.y || 0;
    var left2 = point2.left || point2.x || 0;
    var top2 = point2.top || point2.y || 0;
    /* eslint-enable deprecation/deprecation */
    var distance = Math.sqrt(Math.pow(left1 - left2, 2) + Math.pow(top1 - top2, 2));
    return distance;
}
/**
 * Produces a proportionally-scaled version of an input content size when fit to a bounding size.
 * Given a `contentSize` and a `boundsSize`, this function scales `contentSize` proportionally
 * using either `contain` or `cover` fit behaviors.
 * Use this function to pre-calculate the layout for the CSS `object-fit` and `background-fit` behaviors.
 * With `contain`, the output size must be the largest it can be while completely within the `boundsSize`.
 * With `cover`, the output size must be the smallest it can be while completely around the `boundsSize`.
 * By default, there is a `maxScale` value of 1, which prevents the `contentSize` from being scaled larger.
 *
 * @param options - the options for the bounds fit operation
 */
function fitContentToBounds(options) {
    var contentSize = options.contentSize, boundsSize = options.boundsSize, _a = options.mode, mode = _a === void 0 ? 'contain' : _a, _b = options.maxScale, maxScale = _b === void 0 ? 1 : _b;
    var contentAspectRatio = contentSize.width / contentSize.height;
    var boundsAspectRatio = boundsSize.width / boundsSize.height;
    var scale;
    if (mode === 'contain' ? contentAspectRatio > boundsAspectRatio : contentAspectRatio < boundsAspectRatio) {
        scale = boundsSize.width / contentSize.width;
    }
    else {
        scale = boundsSize.height / contentSize.height;
    }
    var finalScale = Math.min(maxScale, scale);
    return {
        width: contentSize.width * finalScale,
        height: contentSize.height * finalScale,
    };
}
/**
 * Calculates a number's precision based on the number of trailing
 * zeros if the number does not have a decimal indicated by a negative
 * precision. Otherwise, it calculates the number of digits after
 * the decimal point indicated by a positive precision.
 * @param value - the value to determine the precision of
 */
function calculatePrecision(value) {
    /**
     * Group 1:
     * [1-9]([0]+$) matches trailing zeros
     * Group 2:
     * \.([0-9]*) matches all digits after a decimal point.
     */
    var groups = /[1-9]([0]+$)|\.([0-9]*)/.exec(String(value));
    if (!groups) {
        return 0;
    }
    if (groups[1]) {
        return -groups[1].length;
    }
    if (groups[2]) {
        return groups[2].length;
    }
    return 0;
}
/**
 * Rounds a number to a certain level of precision. Accepts negative precision.
 * @param value - The value that is being rounded.
 * @param precision - The number of decimal places to round the number to
 */
function precisionRound(value, precision, base) {
    if (base === void 0) { base = 10; }
    var exp = Math.pow(base, precision);
    return Math.round(value * exp) / exp;
}


/***/ }),

/***/ "../utilities/lib/memoize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMemoizeWeakMap", function() { return setMemoizeWeakMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetMemoizations", function() { return resetMemoizations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return memoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoizeFunction", function() { return memoizeFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMemoizer", function() { return createMemoizer; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../merge-styles/lib/index.js");

var _initializedStylesheetResets = false;
var _resetCounter = 0;
var _emptyObject = { empty: true };
var _dictionary = {};
var _weakMap = typeof WeakMap === 'undefined' ? null : WeakMap;
/**
 *  Test utility for providing a custom weakmap.
 *
 * @internal
 * */
function setMemoizeWeakMap(weakMap) {
    _weakMap = weakMap;
}
/**
 * Reset memoizations.
 */
function resetMemoizations() {
    _resetCounter++;
}
/**
 * Memoize decorator to be used on class methods. WARNING: the `this` reference
 * will be inaccessible within a memoized method, given that a cached method's `this`
 * would not be instance-specific.
 *
 * @public
 */
function memoize(target, key, descriptor) {
    // We bind to "null" to prevent people from inadvertently pulling values from "this",
    // rather than passing them in as input values which can be memoized.
    var fn = memoizeFunction(descriptor.value && descriptor.value.bind(null));
    return {
        configurable: true,
        get: function () {
            return fn;
        },
    };
}
/**
 * Memoizes a function; when you pass in the same parameters multiple times, it returns a cached result.
 * Be careful when passing in objects, you need to pass in the same INSTANCE for caching to work. Otherwise
 * it will grow the cache unnecessarily. Also avoid using default values that evaluate functions; passing in
 * undefined for a value and relying on a default function will execute it the first time, but will not
 * re-evaluate subsequent times which may have been unexpected.
 *
 * By default, the cache will reset after 100 permutations, to avoid abuse cases where the function is
 * unintendedly called with unique objects. Without a reset, the cache could grow infinitely, so we safeguard
 * by resetting. To override this behavior, pass a value of 0 to the maxCacheSize parameter.
 *
 * @public
 * @param cb - The function to memoize.
 * @param maxCacheSize - Max results to cache. If the cache exceeds this value, it will reset on the next call.
 * @param ignoreNullOrUndefinedResult - Flag to decide whether to cache callback result if it is undefined/null.
 * If the flag is set to true, the callback result is recomputed every time till the callback result is
 * not undefined/null for the first time, and then the non-undefined/null version gets cached.
 * @returns A memoized version of the function.
 */
function memoizeFunction(cb, maxCacheSize, ignoreNullOrUndefinedResult) {
    if (maxCacheSize === void 0) { maxCacheSize = 100; }
    if (ignoreNullOrUndefinedResult === void 0) { ignoreNullOrUndefinedResult = false; }
    // Avoid breaking scenarios which don't have weak map.
    if (!_weakMap) {
        return cb;
    }
    if (!_initializedStylesheetResets) {
        var stylesheet = _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
        if (stylesheet && stylesheet.onReset) {
            _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance().onReset(resetMemoizations);
        }
        _initializedStylesheetResets = true;
    }
    var rootNode;
    var cacheSize = 0;
    var localResetCounter = _resetCounter;
    return function memoizedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentNode = rootNode;
        if (rootNode === undefined ||
            localResetCounter !== _resetCounter ||
            (maxCacheSize > 0 && cacheSize > maxCacheSize)) {
            rootNode = _createNode();
            cacheSize = 0;
            localResetCounter = _resetCounter;
        }
        currentNode = rootNode;
        // Traverse the tree until we find the match.
        for (var i = 0; i < args.length; i++) {
            var arg = _normalizeArg(args[i]);
            if (!currentNode.map.has(arg)) {
                currentNode.map.set(arg, _createNode());
            }
            currentNode = currentNode.map.get(arg);
        }
        if (!currentNode.hasOwnProperty('value')) {
            currentNode.value = cb.apply(void 0, args);
            cacheSize++;
        }
        if (ignoreNullOrUndefinedResult && (currentNode.value === null || currentNode.value === undefined)) {
            currentNode.value = cb.apply(void 0, args);
        }
        return currentNode.value;
    };
}
/**
 * Creates a memoizer for a single-value function, backed by a WeakMap.
 * With a WeakMap, the memoized values are only kept as long as the source objects,
 * ensuring that there is no memory leak.
 *
 * This function assumes that the input values passed to the wrapped function will be
 * `function` or `object` types. To memoize functions which accept other inputs, use
 * `memoizeFunction`, which memoizes against arbitrary inputs using a lookup cache.
 *
 * @public
 */
function createMemoizer(getValue) {
    if (!_weakMap) {
        // Without a `WeakMap` implementation, memoization is not possible.
        return getValue;
    }
    var cache = new _weakMap();
    function memoizedGetValue(input) {
        if (!input || (typeof input !== 'function' && typeof input !== 'object')) {
            // A WeakMap can only be used to test against reference values, i.e. 'function' and 'object'.
            // All other inputs cannot be memoized against in this manner.
            return getValue(input);
        }
        if (cache.has(input)) {
            return cache.get(input);
        }
        var value = getValue(input);
        cache.set(input, value);
        return value;
    }
    return memoizedGetValue;
}
function _normalizeArg(val) {
    if (!val) {
        return _emptyObject;
    }
    else if (typeof val === 'object' || typeof val === 'function') {
        return val;
    }
    else if (!_dictionary[val]) {
        _dictionary[val] = { val: val };
    }
    return _dictionary[val];
}
function _createNode() {
    return {
        map: _weakMap ? new _weakMap() : null,
    };
}


/***/ }),

/***/ "../utilities/lib/merge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/**
 * Simple deep merge function. Takes all arguments and returns a deep copy of the objects merged
 * together in the order provided. If an object creates a circular reference, it will assign the
 * original reference.
 */
function merge(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        _merge(target || {}, arg);
    }
    return target;
}
/**
 * The _merge helper iterates through all props on source and assigns them to target.
 * When the value is an object, we will create a deep clone of the object. However if
 * there is a circular reference, the value will not be deep cloned and will persist
 * the reference.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _merge(target, source, circularReferences) {
    if (circularReferences === void 0) { circularReferences = []; }
    circularReferences.push(source);
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            if (name_1 !== '__proto__' && name_1 !== 'constructor' && name_1 !== 'prototype') {
                var value = source[name_1];
                if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                    var isCircularReference = circularReferences.indexOf(value) > -1;
                    target[name_1] = (isCircularReference
                        ? value
                        : _merge(target[name_1] || {}, value, circularReferences));
                }
                else {
                    target[name_1] = value;
                }
            }
        }
    }
    circularReferences.pop();
    return target;
}


/***/ }),

/***/ "../utilities/lib/mobileDetector.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return isIOS; });
/**
 * Returns true if and only if the user is on a iOS device.
 * Used to determine whether iOS-specific behavior should be applied.
 */
var isIOS = function () {
    if (!window || !window.navigator || !window.navigator.userAgent) {
        return false;
    }
    return /iPad|iPhone|iPod/i.test(window.navigator.userAgent);
};


/***/ }),

/***/ "../utilities/lib/modalize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalize", function() { return modalize; });
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/dom/getDocument.js");
/**
 * The helper functions here will make the target element as modal to screen readers, by placing aria-hidden on elements
 * that are siblings to the target element and the target element's ancestors (because aria-hidden gets inherited).
 * That way, all other elements on the page are hidden to the screen reader.
 */

/**
 * Call this on a target element to make it modal to screen readers.
 * Returns a function that undoes the changes it made.
 */
function modalize(target) {
    var _a;
    var affectedNodes = [];
    var targetDocument = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__["getDocument"])(target) || document;
    // start at target, then recurse and do the same for parent, until we reach <body>
    while (target !== targetDocument.body) {
        // grab all siblings of current element
        for (var _i = 0, _b = target.parentElement.children; _i < _b.length; _i++) {
            var sibling = _b[_i];
            // but ignore elements that are already aria-hidden
            if (sibling !== target && ((_a = sibling.getAttribute('aria-hidden')) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== 'true') {
                affectedNodes.push(sibling);
            }
        }
        if (!target.parentElement) {
            break;
        }
        target = target.parentElement;
    }
    // take all those elements and set aria-hidden=true on them
    affectedNodes.forEach(function (node) {
        node.setAttribute('aria-hidden', 'true');
    });
    return function () {
        unmodalize(affectedNodes);
        affectedNodes = []; // dispose
    };
}
/**
 * Undoes the changes that modalize() did.
 */
function unmodalize(affectedNodes) {
    affectedNodes.forEach(function (node) {
        // set instead of removing in case other components explicitly set aria-hidden and do =="true" or =="false"
        node.setAttribute('aria-hidden', 'false');
    });
}


/***/ }),

/***/ "../utilities/lib/object.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowCompare", function() { return shallowCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteredAssign", function() { return filteredAssign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapEnumByName", function() { return mapEnumByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return omit; });
/**
 * Compares a to b and b to a.
 *
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function shallowCompare(a, b) {
    for (var propName in a) {
        if (a.hasOwnProperty(propName)) {
            if (!b.hasOwnProperty(propName) || b[propName] !== a[propName]) {
                return false;
            }
        }
    }
    for (var propName in b) {
        if (b.hasOwnProperty(propName)) {
            if (!a.hasOwnProperty(propName)) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
 * objects as arguments and they will be merged sequentially into the target. Note that this will
 * shallow merge; it will not create new cloned values for target members.
 *
 * @public
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function assign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return filteredAssign.apply(this, [null, target].concat(args));
}
/**
 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
 * values for target members.
 *
 * @public
 * @param isAllowed - Callback to determine if the given propName is allowed in the result.
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function filteredAssign(isAllowed, target) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    target = target || {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var sourceObject = args_1[_a];
        if (sourceObject) {
            for (var propName in sourceObject) {
                if (sourceObject.hasOwnProperty(propName) && (!isAllowed || isAllowed(propName))) {
                    target[propName] = sourceObject[propName];
                }
            }
        }
    }
    return target;
}
/**
 * Takes an enum and iterates over each value of the enum (as a string), running the callback on each,
 * returning a mapped array.
 * @param theEnum - Enum to iterate over
 * @param callback - The first parameter the name of the entry, and the second parameter is the value
 * of that entry, which is the value you'd normally use when using the enum (usually a number).
 */
function mapEnumByName(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
theEnum, callback) {
    // map<any> to satisfy compiler since it doesn't realize we strip out undefineds in the .filter() call
    return Object.keys(theEnum)
        .map(function (p) {
        // map on each property name as a string
        if (String(Number(p)) !== p) {
            // if the property is not just a number (because enums in TypeScript will map both ways)
            return callback(p, theEnum[p]);
        }
        return undefined;
    })
        .filter(function (v) { return !!v; }); // only return elements with values
}
/**
 * Get all values in an object dictionary
 *
 * @param obj - The dictionary to get values for
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function values(obj) {
    return Object.keys(obj).reduce(function (arr, key) {
        arr.push(obj[key]);
        return arr;
    }, []);
}
/**
 * Tiny helper to do the minimal amount of work in duplicating an object but omitting some
 * props. This ends up faster than using object ...rest or reduce to filter.
 *
 * This behaves very much like filteredAssign, but does not merge many objects together,
 * uses an exclusion object map, and avoids spreads all for optimal performance.
 *
 * See perf test for background:
 * https://jsperf.com/omit-vs-rest-vs-reduce/1
 *
 * @param obj - The object to clone
 * @param exclusions - The array of keys to exclude
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function omit(obj, exclusions) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var result = {};
    for (var key in obj) {
        if (exclusions.indexOf(key) === -1 && obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}


/***/ }),

/***/ "../utilities/lib/osDetector.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMac", function() { return isMac; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/dom/getWindow.js");

var isMacResult;
/**
 * Returns true if the user is on a Mac. Caches the result value.
 * @param reset - Reset the cached result value (mainly for testing).
 */
function isMac(reset) {
    if (typeof isMacResult === 'undefined' || reset) {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        var userAgent = win && win.navigator.userAgent;
        isMacResult = !!userAgent && userAgent.indexOf('Macintosh') !== -1;
    }
    return !!isMacResult;
}


/***/ }),

/***/ "../utilities/lib/overflow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasHorizontalOverflow", function() { return hasHorizontalOverflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasVerticalOverflow", function() { return hasVerticalOverflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOverflow", function() { return hasOverflow; });
/**
 * Detects whether an element's content has horizontal overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasHorizontalOverflow(element) {
    return element.clientWidth < element.scrollWidth;
}
/**
 * Detects whether an element's content has vertical overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasVerticalOverflow(element) {
    return element.clientHeight < element.scrollHeight;
}
/**
 * Detects whether an element's content has overflow in any direction
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasOverflow(element) {
    return hasHorizontalOverflow(element) || hasVerticalOverflow(element);
}


/***/ }),

/***/ "../utilities/lib/properties.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseElementEvents", function() { return baseElementEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseElementProperties", function() { return baseElementProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlElementProperties", function() { return htmlElementProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labelProperties", function() { return labelProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioProperties", function() { return audioProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoProperties", function() { return videoProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "olProperties", function() { return olProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liProperties", function() { return liProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anchorProperties", function() { return anchorProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonProperties", function() { return buttonProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputProperties", function() { return inputProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textAreaProperties", function() { return textAreaProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProperties", function() { return selectProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionProperties", function() { return optionProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableProperties", function() { return tableProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trProperties", function() { return trProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thProperties", function() { return thProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tdProperties", function() { return tdProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colGroupProperties", function() { return colGroupProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colProperties", function() { return colProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formProperties", function() { return formProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iframeProperties", function() { return iframeProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgProperties", function() { return imgProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageProperties", function() { return imageProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divProperties", function() { return divProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNativeProps", function() { return getNativeProps; });
var toObjectMap = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var result = {};
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        var keys = Array.isArray(item) ? item : Object.keys(item);
        for (var _b = 0, keys_1 = keys; _b < keys_1.length; _b++) {
            var key = keys_1[_b];
            result[key] = 1;
        }
    }
    return result;
};
/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */
var baseElementEvents = toObjectMap([
    'onCopy',
    'onCut',
    'onPaste',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onInput',
    'onSubmit',
    'onLoad',
    'onError',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyUp',
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onScroll',
    'onWheel',
    'onPointerCancel',
    'onPointerDown',
    'onPointerEnter',
    'onPointerLeave',
    'onPointerMove',
    'onPointerOut',
    'onPointerOver',
    'onPointerUp',
    'onGotPointerCapture',
    'onLostPointerCapture',
]);
/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */
var baseElementProperties = toObjectMap([
    'accessKey',
    'children',
    'className',
    'contentEditable',
    'dir',
    'draggable',
    'hidden',
    'htmlFor',
    'id',
    'lang',
    'ref',
    'role',
    'style',
    'tabIndex',
    'title',
    'translate',
    'spellCheck',
    'name',
]);
/**
 * An array of HTML element properties and events.
 *
 * @public
 */
var htmlElementProperties = toObjectMap(baseElementProperties, baseElementEvents);
/**
 * An array of LABEL tag properties and events.
 *
 * @public
 */
var labelProperties = toObjectMap(htmlElementProperties, [
    'form',
]);
/**
 * An array of AUDIO tag properties and events.

 * @public
 */
var audioProperties = toObjectMap(htmlElementProperties, [
    'height',
    'loop',
    'muted',
    'preload',
    'src',
    'width',
]);
/**
 * An array of VIDEO tag properties and events.
 *
 * @public
 */
var videoProperties = toObjectMap(audioProperties, [
    'poster',
]);
/**
 * An array of OL tag properties and events.
 *
 * @public
 */
var olProperties = toObjectMap(htmlElementProperties, [
    'start',
]);
/**
 * An array of LI tag properties and events.
 *
 * @public
 */
var liProperties = toObjectMap(htmlElementProperties, [
    'value',
]);
/**
 * An array of A tag properties and events.
 *
 * @public
 */
var anchorProperties = toObjectMap(htmlElementProperties, [
    'download',
    'href',
    'hrefLang',
    'media',
    'rel',
    'target',
    'type',
]);
/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */
var buttonProperties = toObjectMap(htmlElementProperties, [
    'autoFocus',
    'disabled',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'type',
    'value',
]);
/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */
var inputProperties = toObjectMap(buttonProperties, [
    'accept',
    'alt',
    'autoCapitalize',
    'autoComplete',
    'checked',
    'dirname',
    'form',
    'height',
    'inputMode',
    'list',
    'max',
    'maxLength',
    'min',
    'multiple',
    'pattern',
    'placeholder',
    'readOnly',
    'required',
    'src',
    'step',
    'size',
    'type',
    'value',
    'width',
]);
/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */
var textAreaProperties = toObjectMap(buttonProperties, [
    'autoCapitalize',
    'cols',
    'dirname',
    'form',
    'maxLength',
    'placeholder',
    'readOnly',
    'required',
    'rows',
    'wrap',
]);
/**
 * An array of SELECT tag properties and events.
 *
 * @public
 */
var selectProperties = toObjectMap(buttonProperties, [
    'form',
    'multiple',
    'required',
]);
var optionProperties = toObjectMap(htmlElementProperties, [
    'selected',
    'value',
]);
/**
 * An array of TABLE tag properties and events.
 *
 * @public
 */
var tableProperties = toObjectMap(htmlElementProperties, [
    'cellPadding',
    'cellSpacing',
]);
/**
 * An array of TR tag properties and events.
 *
 * @public
 */
var trProperties = htmlElementProperties;
/**
 * An array of TH tag properties and events.
 *
 * @public
 */
var thProperties = toObjectMap(htmlElementProperties, [
    'rowSpan',
    'scope',
]);
/**
 * An array of TD tag properties and events.
 *
 * @public
 */
var tdProperties = toObjectMap(htmlElementProperties, [
    'colSpan',
    'headers',
    'rowSpan',
    'scope',
]);
var colGroupProperties = toObjectMap(htmlElementProperties, [
    'span',
]);
var colProperties = toObjectMap(htmlElementProperties, [
    'span',
]);
/**
 * An array of FORM tag properties and events.
 *
 * @public
 */
var formProperties = toObjectMap(htmlElementProperties, [
    'acceptCharset',
    'action',
    'encType',
    'encType',
    'method',
    'noValidate',
    'target',
]);
/**
 * An array of IFRAME tag properties and events.
 *
 * @public
 */
var iframeProperties = toObjectMap(htmlElementProperties, [
    'allow',
    'allowFullScreen',
    'allowPaymentRequest',
    'allowTransparency',
    'csp',
    'height',
    'importance',
    'referrerPolicy',
    'sandbox',
    'src',
    'srcDoc',
    'width',
]);
/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */
var imgProperties = toObjectMap(htmlElementProperties, [
    'alt',
    'crossOrigin',
    'height',
    'src',
    'srcSet',
    'useMap',
    'width',
]);
/**
 * @deprecated Use imgProperties for img elements.
 */
var imageProperties = imgProperties;
/**
 * An array of DIV tag properties and events.
 *
 * @public
 */
var divProperties = htmlElementProperties;
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropsNames - The array or record of allowed prop names.
 * @returns The filtered props
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNativeProps(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
props, allowedPropNames, excludedPropNames) {
    // It'd be great to properly type this while allowing 'aria-` and 'data-' attributes like TypeScript does for
    // JSX attributes, but that ability is hardcoded into the TS compiler with no analog in TypeScript typings.
    // Then we'd be able to enforce props extends native props (including aria- and data- attributes), and then
    // return native props.
    // We should be able to do this once this PR is merged: https://github.com/microsoft/TypeScript/pull/26797
    var _a;
    var isArray = Array.isArray(allowedPropNames);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var result = {};
    var keys = Object.keys(props);
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        var isNativeProp = (!isArray && allowedPropNames[key]) ||
            (isArray && allowedPropNames.indexOf(key) >= 0) ||
            key.indexOf('data-') === 0 ||
            key.indexOf('aria-') === 0;
        if (isNativeProp && (!excludedPropNames || ((_a = excludedPropNames) === null || _a === void 0 ? void 0 : _a.indexOf(key)) === -1)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            result[key] = props[key];
        }
    }
    return result;
}


/***/ }),

/***/ "../utilities/lib/renderFunction/composeRenderFunction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeRenderFunction", function() { return composeRenderFunction; });
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/memoize.js");

function createComposedRenderFunction(outer) {
    var outerMemoizer = Object(_memoize__WEBPACK_IMPORTED_MODULE_0__["createMemoizer"])(function (inner) {
        var innerMemoizer = Object(_memoize__WEBPACK_IMPORTED_MODULE_0__["createMemoizer"])(function (defaultRender) {
            return function (innerProps) {
                return inner(innerProps, defaultRender);
            };
        });
        return function (outerProps, defaultRender) {
            return outer(outerProps, defaultRender ? innerMemoizer(defaultRender) : inner);
        };
    });
    return outerMemoizer;
}
var memoizer = Object(_memoize__WEBPACK_IMPORTED_MODULE_0__["createMemoizer"])(createComposedRenderFunction);
/**
 * Composes two 'render functions' to produce a final render function that renders
 * the outer function, passing the inner function as 'default render'. The inner function
 * is then passed the original 'default render' prop.
 * @public
 */
function composeRenderFunction(outer, inner) {
    return memoizer(outer)(inner);
}


/***/ }),

/***/ "../utilities/lib/resources.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceUrl", function() { return getResourceUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBaseUrl", function() { return setBaseUrl; });
var _baseUrl = '';
/** Sets the current base url used for fetching images. */
function getResourceUrl(url) {
    return _baseUrl + url;
}
/** Gets the current base url used for fetching images. */
function setBaseUrl(baseUrl) {
    _baseUrl = baseUrl;
}


/***/ }),

/***/ "../utilities/lib/rtl.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRTL", function() { return getRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRTL", function() { return setRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRTLSafeKeyCode", function() { return getRTLSafeKeyCode; });
/* harmony import */ var _KeyCodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/KeyCodes.js");
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../utilities/lib/dom/getDocument.js");
/* harmony import */ var _sessionStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../utilities/lib/sessionStorage.js");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../merge-styles/lib/index.js");




var RTL_LOCAL_STORAGE_KEY = 'isRTL';
// Default to undefined so that we initialize on first read.
var _isRTL;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
function getRTL(theme) {
    if (theme === void 0) { theme = {}; }
    if (theme.rtl !== undefined) {
        return theme.rtl;
    }
    if (_isRTL === undefined) {
        // Fabric supports persisting the RTL setting between page refreshes via session storage
        var savedRTL = Object(_sessionStorage__WEBPACK_IMPORTED_MODULE_2__["getItem"])(RTL_LOCAL_STORAGE_KEY);
        if (savedRTL !== null) {
            _isRTL = savedRTL === '1';
            setRTL(_isRTL);
        }
        var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_1__["getDocument"])();
        if (_isRTL === undefined && doc) {
            _isRTL = ((doc.body && doc.body.getAttribute('dir')) || doc.documentElement.getAttribute('dir')) === 'rtl';
            Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_3__["setRTL"])(_isRTL);
        }
    }
    return !!_isRTL;
}
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 */
function setRTL(isRTL, persistSetting) {
    if (persistSetting === void 0) { persistSetting = false; }
    var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_1__["getDocument"])();
    if (doc) {
        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
    if (persistSetting) {
        Object(_sessionStorage__WEBPACK_IMPORTED_MODULE_2__["setItem"])(RTL_LOCAL_STORAGE_KEY, isRTL ? '1' : '0');
    }
    _isRTL = isRTL;
    Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_3__["setRTL"])(_isRTL);
}
/**
 * Returns the given key, but flips right/left arrows if necessary.
 */
function getRTLSafeKeyCode(key, theme) {
    if (theme === void 0) { theme = {}; }
    if (getRTL(theme)) {
        if (key === _KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].left) {
            key = _KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].right;
        }
        else if (key === _KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].right) {
            key = _KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].left;
        }
    }
    return key;
}


/***/ }),

/***/ "../utilities/lib/safeRequestAnimationFrame.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeRequestAnimationFrame", function() { return safeRequestAnimationFrame; });
/* harmony import */ var _extendComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/extendComponent.js");

/**
 * Generates a function to be attached to a React component, which can be called
 * as a replacement to RAF. In-flight async calls will be auto canceled if the component
 * is unmounting before the async code is executed, preventing bugs where code
 * accesses things within the component after being unmounted.
 */
var safeRequestAnimationFrame = function (component) {
    var activeTimeouts;
    return function (cb) {
        if (!activeTimeouts) {
            activeTimeouts = new Set();
            Object(_extendComponent__WEBPACK_IMPORTED_MODULE_0__["extendComponent"])(component, {
                componentWillUnmount: function () {
                    activeTimeouts.forEach(function (id) { return cancelAnimationFrame(id); });
                },
            });
        }
        var timeoutId = requestAnimationFrame(function () {
            activeTimeouts.delete(timeoutId);
            cb();
        });
        activeTimeouts.add(timeoutId);
    };
};


/***/ }),

/***/ "../utilities/lib/safeSetTimeout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeSetTimeout", function() { return safeSetTimeout; });
/* harmony import */ var _extendComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/extendComponent.js");

/**
 * Generates a function to be attached to a React component, which can be called
 * as a replacement to setTimeout. In-flight async calls will be auto canceled if the component
 * is unmounting before the async code is executed, preventing bugs where code
 * accesses things within the component after being unmounted.
 */
var safeSetTimeout = function (component) {
    var activeTimeouts;
    return function (cb, duration) {
        if (!activeTimeouts) {
            activeTimeouts = new Set();
            Object(_extendComponent__WEBPACK_IMPORTED_MODULE_0__["extendComponent"])(component, {
                componentWillUnmount: function () {
                    activeTimeouts.forEach(function (id) { return clearTimeout(id); });
                },
            });
        }
        var timeoutId = setTimeout(function () {
            activeTimeouts.delete(timeoutId);
            cb();
        }, duration);
        activeTimeouts.add(timeoutId);
    };
};


/***/ }),

/***/ "../utilities/lib/scroll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_IS_SCROLLABLE_ATTRIBUTE", function() { return DATA_IS_SCROLLABLE_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowScrollOnElement", function() { return allowScrollOnElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowOverscrollOnElement", function() { return allowOverscrollOnElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableBodyScroll", function() { return disableBodyScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableBodyScroll", function() { return enableBodyScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidth", function() { return getScrollbarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findScrollableParent", function() { return findScrollableParent; });
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/dom/getDocument.js");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../merge-styles/lib/index.js");
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../utilities/lib/dom/getWindow.js");



var _scrollbarWidth;
var _bodyScrollDisabledCount = 0;
var DisabledScrollClassName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])({
    overflow: 'hidden !important',
});
/**
 * Placing this attribute on scrollable divs optimizes detection to know
 * if the div is scrollable or not (given we can avoid expensive operations
 * like getComputedStyle.)
 *
 * @public
 */
var DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
/**
 * Allows the user to scroll within a element,
 * while preventing the user from scrolling the body
 */
var allowScrollOnElement = function (element, events) {
    if (!element) {
        return;
    }
    var _previousClientY = 0;
    var _element = null;
    // remember the clientY for future calls of _preventOverscrolling
    var _saveClientY = function (event) {
        if (event.targetTouches.length === 1) {
            _previousClientY = event.targetTouches[0].clientY;
        }
    };
    // prevent the body from scrolling when the user attempts
    // to scroll past the top or bottom of the element
    var _preventOverscrolling = function (event) {
        // only respond to a single-finger touch
        if (event.targetTouches.length !== 1) {
            return;
        }
        // prevent the body touchmove handler from firing
        // so that scrolling is allowed within the element
        event.stopPropagation();
        if (!_element) {
            return;
        }
        var clientY = event.targetTouches[0].clientY - _previousClientY;
        var scrollableParent = findScrollableParent(event.target);
        if (scrollableParent) {
            _element = scrollableParent;
        }
        // if the element is scrolled to the top,
        // prevent the user from scrolling up
        if (_element.scrollTop === 0 && clientY > 0) {
            event.preventDefault();
        }
        // if the element is scrolled to the bottom,
        // prevent the user from scrolling down
        if (_element.scrollHeight - Math.ceil(_element.scrollTop) <= _element.clientHeight && clientY < 0) {
            event.preventDefault();
        }
    };
    events.on(element, 'touchstart', _saveClientY, { passive: false });
    events.on(element, 'touchmove', _preventOverscrolling, { passive: false });
    _element = element;
};
/**
 * Same as allowScrollOnElement but does not prevent overscrolling.
 */
var allowOverscrollOnElement = function (element, events) {
    if (!element) {
        return;
    }
    var _allowElementScroll = function (event) {
        event.stopPropagation();
    };
    events.on(element, 'touchmove', _allowElementScroll, { passive: false });
};
var _disableIosBodyScroll = function (event) {
    event.preventDefault();
};
/**
 * Disables the body scrolling.
 *
 * @public
 */
function disableBodyScroll() {
    var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    if (doc && doc.body && !_bodyScrollDisabledCount) {
        doc.body.classList.add(DisabledScrollClassName);
        doc.body.addEventListener('touchmove', _disableIosBodyScroll, { passive: false, capture: false });
    }
    _bodyScrollDisabledCount++;
}
/**
 * Enables the body scrolling.
 *
 * @public
 */
function enableBodyScroll() {
    if (_bodyScrollDisabledCount > 0) {
        var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        if (doc && doc.body && _bodyScrollDisabledCount === 1) {
            doc.body.classList.remove(DisabledScrollClassName);
            doc.body.removeEventListener('touchmove', _disableIosBodyScroll);
        }
        _bodyScrollDisabledCount--;
    }
}
/**
 * Calculates the width of a scrollbar for the browser/os.
 *
 * @public
 */
function getScrollbarWidth() {
    if (_scrollbarWidth === undefined) {
        var scrollDiv = document.createElement('div');
        scrollDiv.style.setProperty('width', '100px');
        scrollDiv.style.setProperty('height', '100px');
        scrollDiv.style.setProperty('overflow', 'scroll');
        scrollDiv.style.setProperty('position', 'absolute');
        scrollDiv.style.setProperty('top', '-9999px');
        document.body.appendChild(scrollDiv);
        // Get the scrollbar width
        _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        // Delete the DIV
        document.body.removeChild(scrollDiv);
    }
    return _scrollbarWidth;
}
/**
 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
 * document.body.
 *
 * @public
 */
function findScrollableParent(startingElement) {
    var el = startingElement;
    var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__["getDocument"])(startingElement);
    // First do a quick scan for the scrollable attribute.
    while (el && el !== doc.body) {
        if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
            return el;
        }
        el = el.parentElement;
    }
    // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
    el = startingElement;
    while (el && el !== doc.body) {
        if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
            var computedStyles = getComputedStyle(el);
            var overflowY = computedStyles ? computedStyles.getPropertyValue('overflow-y') : '';
            if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
                return el;
            }
        }
        el = el.parentElement;
    }
    // Fall back to window scroll.
    if (!el || el === doc.body) {
        el = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_2__["getWindow"])(startingElement);
    }
    return el;
}


/***/ }),

/***/ "../utilities/lib/selection/Selection.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony import */ var _Selection_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/selection/Selection.types.js");
/* harmony import */ var _EventGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../utilities/lib/EventGroup.js");


/**
 * {@docCategory Selection}
 */
var Selection = /** @class */ (function () {
    /**
     * Create a new Selection. If `TItem` does not have a `key` property, you must provide an options
     * object with a `getKey` implementation. Providing options is optional otherwise.
     * (At most one `options` object is accepted.)
     */
    function Selection() {
        var options = []; // Otherwise, arguments require options with `getKey`.
        for (var _i = 0 // Otherwise, arguments require options with `getKey`.
        ; _i < arguments.length // Otherwise, arguments require options with `getKey`.
        ; _i++ // Otherwise, arguments require options with `getKey`.
        ) {
            options[_i] = arguments[_i]; // Otherwise, arguments require options with `getKey`.
        }
        var _a = options[0] || {}, onSelectionChanged = _a.onSelectionChanged, getKey = _a.getKey, _b = _a.canSelectItem, canSelectItem = _b === void 0 ? function () { return true; } : _b, items = _a.items, _c = _a.selectionMode, selectionMode = _c === void 0 ? _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].multiple : _c;
        this.mode = selectionMode;
        this._getKey = getKey || defaultGetKey;
        this._changeEventSuppressionCount = 0;
        this._exemptedCount = 0;
        this._anchoredIndex = 0;
        this._unselectableCount = 0;
        this._onSelectionChanged = onSelectionChanged;
        this._canSelectItem = canSelectItem;
        this._isModal = false;
        this.setItems(items || [], true);
        this.count = this.getSelectedCount();
    }
    Selection.prototype.canSelectItem = function (item, index) {
        if (typeof index === 'number' && index < 0) {
            return false;
        }
        return this._canSelectItem(item, index);
    };
    Selection.prototype.getKey = function (item, index) {
        var key = this._getKey(item, index);
        return typeof key === 'number' || key ? "" + key : '';
    };
    Selection.prototype.setChangeEvents = function (isEnabled, suppressChange) {
        this._changeEventSuppressionCount += isEnabled ? -1 : 1;
        if (this._changeEventSuppressionCount === 0 && this._hasChanged) {
            this._hasChanged = false;
            if (!suppressChange) {
                this._change();
            }
        }
    };
    Selection.prototype.isModal = function () {
        return this._isModal;
    };
    Selection.prototype.setModal = function (isModal) {
        if (this._isModal !== isModal) {
            this.setChangeEvents(false);
            this._isModal = isModal;
            if (!isModal) {
                this.setAllSelected(false);
            }
            this._change();
            this.setChangeEvents(true);
        }
    };
    /**
     * Selection needs the items, call this method to set them. If the set
     * of items is the same, this will re-evaluate selection and index maps.
     * Otherwise, shouldClear should be set to true, so that selection is
     * cleared.
     */
    Selection.prototype.setItems = function (items, shouldClear) {
        if (shouldClear === void 0) { shouldClear = true; }
        var newKeyToIndexMap = {};
        var newUnselectableIndices = {};
        var hasSelectionChanged = false;
        this.setChangeEvents(false);
        // Reset the unselectable count.
        this._unselectableCount = 0;
        // Build lookup table for quick selection evaluation.
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item) {
                var key = this.getKey(item, i);
                if (key) {
                    newKeyToIndexMap[key] = i;
                }
            }
            newUnselectableIndices[i] = item && !this.canSelectItem(item);
            if (newUnselectableIndices[i]) {
                this._unselectableCount++;
            }
        }
        if (shouldClear || items.length === 0) {
            this._setAllSelected(false, true);
        }
        // Check the exemption list for discrepencies.
        var newExemptedIndicies = {};
        var newExemptedCount = 0;
        for (var indexProperty in this._exemptedIndices) {
            if (this._exemptedIndices.hasOwnProperty(indexProperty)) {
                var index = Number(indexProperty);
                var item = this._items[index];
                var exemptKey = item ? this.getKey(item, Number(index)) : undefined;
                var newIndex = exemptKey ? newKeyToIndexMap[exemptKey] : index;
                if (newIndex === undefined) {
                    // The item has likely been replaced or removed.
                    hasSelectionChanged = true;
                }
                else {
                    // We know the new index of the item. update the existing exemption table.
                    newExemptedIndicies[newIndex] = true;
                    newExemptedCount++;
                    hasSelectionChanged = hasSelectionChanged || newIndex !== index;
                }
            }
        }
        if (this._items && this._exemptedCount === 0 && items.length !== this._items.length && this._isAllSelected) {
            // If everything was selected but the number of items has changed, selection has changed.
            hasSelectionChanged = true;
        }
        this._exemptedIndices = newExemptedIndicies;
        this._exemptedCount = newExemptedCount;
        this._keyToIndexMap = newKeyToIndexMap;
        this._unselectableIndices = newUnselectableIndices;
        this._items = items;
        this._selectedItems = null;
        if (hasSelectionChanged) {
            this._updateCount();
            this._change();
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.getItems = function () {
        return this._items;
    };
    Selection.prototype.getSelection = function () {
        if (!this._selectedItems) {
            this._selectedItems = [];
            var items = this._items;
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    if (this.isIndexSelected(i)) {
                        this._selectedItems.push(items[i]);
                    }
                }
            }
        }
        return this._selectedItems;
    };
    Selection.prototype.getSelectedCount = function () {
        return this._isAllSelected
            ? this._items.length - this._exemptedCount - this._unselectableCount
            : this._exemptedCount;
    };
    Selection.prototype.getSelectedIndices = function () {
        if (!this._selectedIndices) {
            this._selectedIndices = [];
            var items = this._items;
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    if (this.isIndexSelected(i)) {
                        this._selectedIndices.push(i);
                    }
                }
            }
        }
        return this._selectedIndices;
    };
    Selection.prototype.isRangeSelected = function (fromIndex, count) {
        if (count === 0) {
            return false;
        }
        var endIndex = fromIndex + count;
        for (var i = fromIndex; i < endIndex; i++) {
            if (!this.isIndexSelected(i)) {
                return false;
            }
        }
        return true;
    };
    Selection.prototype.isAllSelected = function () {
        var selectableCount = this._items.length - this._unselectableCount;
        // In single mode, we can only have a max of 1 item.
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].single) {
            selectableCount = Math.min(selectableCount, 1);
        }
        return ((this.count > 0 && this._isAllSelected && this._exemptedCount === 0) ||
            (!this._isAllSelected && this._exemptedCount === selectableCount && selectableCount > 0));
    };
    Selection.prototype.isKeySelected = function (key) {
        var index = this._keyToIndexMap[key];
        return this.isIndexSelected(index);
    };
    Selection.prototype.isIndexSelected = function (index) {
        return !!((this.count > 0 && this._isAllSelected && !this._exemptedIndices[index] && !this._unselectableIndices[index]) ||
            (!this._isAllSelected && this._exemptedIndices[index]));
    };
    Selection.prototype.setAllSelected = function (isAllSelected) {
        if (isAllSelected && this.mode !== _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].multiple) {
            return;
        }
        var selectableCount = this._items ? this._items.length - this._unselectableCount : 0;
        this.setChangeEvents(false);
        if (selectableCount > 0 && (this._exemptedCount > 0 || isAllSelected !== this._isAllSelected)) {
            this._exemptedIndices = {};
            if (isAllSelected !== this._isAllSelected || this._exemptedCount > 0) {
                this._exemptedCount = 0;
                this._isAllSelected = isAllSelected;
                this._change();
            }
            this._updateCount();
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.setKeySelected = function (key, isSelected, shouldAnchor) {
        var index = this._keyToIndexMap[key];
        if (index >= 0) {
            this.setIndexSelected(index, isSelected, shouldAnchor);
        }
    };
    Selection.prototype.setIndexSelected = function (index, isSelected, shouldAnchor) {
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].none) {
            return;
        }
        // Clamp the index.
        index = Math.min(Math.max(0, index), this._items.length - 1);
        // No-op on out of bounds selections.
        if (index < 0 || index >= this._items.length) {
            return;
        }
        this.setChangeEvents(false);
        var isExempt = this._exemptedIndices[index];
        var canSelect = !this._unselectableIndices[index];
        if (canSelect) {
            if (isSelected && this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].single) {
                // If this is single-select, the previous selection should be removed.
                this._setAllSelected(false, true);
            }
            // Determine if we need to remove the exemption.
            if (isExempt && ((isSelected && this._isAllSelected) || (!isSelected && !this._isAllSelected))) {
                delete this._exemptedIndices[index];
                this._exemptedCount--;
            }
            // Determine if we need to add the exemption.
            if (!isExempt && ((isSelected && !this._isAllSelected) || (!isSelected && this._isAllSelected))) {
                this._exemptedIndices[index] = true;
                this._exemptedCount++;
            }
            if (shouldAnchor) {
                this._anchoredIndex = index;
            }
        }
        this._updateCount();
        this.setChangeEvents(true);
    };
    Selection.prototype.selectToKey = function (key, clearSelection) {
        this.selectToIndex(this._keyToIndexMap[key], clearSelection);
    };
    Selection.prototype.selectToIndex = function (index, clearSelection) {
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].none) {
            return;
        }
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].single) {
            this.setIndexSelected(index, true, true);
            return;
        }
        var anchorIndex = this._anchoredIndex || 0;
        var startIndex = Math.min(index, anchorIndex);
        var endIndex = Math.max(index, anchorIndex);
        this.setChangeEvents(false);
        if (clearSelection) {
            this._setAllSelected(false, true);
        }
        for (; startIndex <= endIndex; startIndex++) {
            this.setIndexSelected(startIndex, true, false);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.toggleAllSelected = function () {
        this.setAllSelected(!this.isAllSelected());
    };
    Selection.prototype.toggleKeySelected = function (key) {
        this.setKeySelected(key, !this.isKeySelected(key), true);
    };
    Selection.prototype.toggleIndexSelected = function (index) {
        this.setIndexSelected(index, !this.isIndexSelected(index), true);
    };
    Selection.prototype.toggleRangeSelected = function (fromIndex, count) {
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].none) {
            return;
        }
        var isRangeSelected = this.isRangeSelected(fromIndex, count);
        var endIndex = fromIndex + count;
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].single && count > 1) {
            return;
        }
        this.setChangeEvents(false);
        for (var i = fromIndex; i < endIndex; i++) {
            this.setIndexSelected(i, !isRangeSelected, false);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype._updateCount = function (preserveModalState) {
        if (preserveModalState === void 0) { preserveModalState = false; }
        var count = this.getSelectedCount();
        if (count !== this.count) {
            this.count = count;
            this._change();
        }
        if (!this.count && !preserveModalState) {
            this.setModal(false);
        }
    };
    Selection.prototype._setAllSelected = function (isAllSelected, preserveModalState) {
        if (preserveModalState === void 0) { preserveModalState = false; }
        if (isAllSelected && this.mode !== _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].multiple) {
            return;
        }
        var selectableCount = this._items ? this._items.length - this._unselectableCount : 0;
        this.setChangeEvents(false);
        if (selectableCount > 0 && (this._exemptedCount > 0 || isAllSelected !== this._isAllSelected)) {
            this._exemptedIndices = {};
            if (isAllSelected !== this._isAllSelected || this._exemptedCount > 0) {
                this._exemptedCount = 0;
                this._isAllSelected = isAllSelected;
                this._change();
            }
            this._updateCount(preserveModalState);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype._change = function () {
        if (this._changeEventSuppressionCount === 0) {
            this._selectedItems = null;
            this._selectedIndices = undefined;
            _EventGroup__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SELECTION_CHANGE"]);
            if (this._onSelectionChanged) {
                this._onSelectionChanged();
            }
        }
        else {
            this._hasChanged = true;
        }
    };
    return Selection;
}());

function defaultGetKey(item, index) {
    // 0 may be used as a key
    var _a = (item || {}).key, key = _a === void 0 ? "" + index : _a;
    return key;
}


/***/ }),

/***/ "../utilities/lib/selection/Selection.types.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return SELECTION_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return SelectionMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return SelectionDirection; });
var SELECTION_CHANGE = 'change';
/**
 * {@docCategory Selection}
 */
var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["none"] = 0] = "none";
    SelectionMode[SelectionMode["single"] = 1] = "single";
    SelectionMode[SelectionMode["multiple"] = 2] = "multiple";
})(SelectionMode || (SelectionMode = {}));
/**
 * {@docCategory Selection}
 */
var SelectionDirection;
(function (SelectionDirection) {
    SelectionDirection[SelectionDirection["horizontal"] = 0] = "horizontal";
    SelectionDirection[SelectionDirection["vertical"] = 1] = "vertical";
})(SelectionDirection || (SelectionDirection = {}));


/***/ }),

/***/ "../utilities/lib/selection/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Selection_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/selection/Selection.types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SELECTION_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionDirection"]; });

/* harmony import */ var _Selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../utilities/lib/selection/Selection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return _Selection__WEBPACK_IMPORTED_MODULE_1__["Selection"]; });





/***/ }),

/***/ "../utilities/lib/sessionStorage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItem", function() { return setItem; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/dom/getWindow.js");

/**
 * Fetches an item from session storage without throwing an exception
 * @param key The key of the item to fetch from session storage
 */
function getItem(key) {
    var result = null;
    try {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        result = win ? win.sessionStorage.getItem(key) : null;
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into session storage without throwing an exception
 * @param key The key of the item to add to session storage
 * @param data The data to put into session storage
 */
function setItem(key, data) {
    var _a;
    try {
        (_a = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])()) === null || _a === void 0 ? void 0 : _a.sessionStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}


/***/ }),

/***/ "../utilities/lib/setFocusVisibility.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFocusVisibleClassName", function() { return IsFocusVisibleClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFocusHiddenClassName", function() { return IsFocusHiddenClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFocusVisibility", function() { return setFocusVisibility; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/dom/getWindow.js");

var IsFocusVisibleClassName = 'ms-Fabric--isFocusVisible';
var IsFocusHiddenClassName = 'ms-Fabric--isFocusHidden';
/**
 * Sets the visibility of focus styling.
 *
 * By default, focus styles (the box surrounding a focused Button, for example) only show up when navigational
 * keypresses occur (through Tab, arrows, PgUp/PgDn, Home and End), and are hidden when mouse interactions occur.
 * This API provides an imperative way to turn them on/off.
 *
 * A use case might be when you have a keypress like ctrl-f6 navigate to a particular region on the page,
 * and want focus to show up.
 *
 * @param enabled - whether to remove or add focus
 * @param target - optional target
 */
function setFocusVisibility(enabled, target) {
    var win = target ? Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(target) : Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    if (win) {
        var classList = win.document.body.classList;
        classList.add(enabled ? IsFocusVisibleClassName : IsFocusHiddenClassName);
        classList.remove(enabled ? IsFocusHiddenClassName : IsFocusVisibleClassName);
    }
}


/***/ }),

/***/ "../utilities/lib/string.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
// Regex that finds { and } so they can be removed on a lookup for string format
var FORMAT_ARGS_REGEX = /[\{\}]/g;
// Regex that finds {#} so it can be replaced by the arguments in string format
var FORMAT_REGEX = /\{\d+\}/g;
/**
 * String format method, used for scenarios where at runtime you
 * need to evaluate a formatted string given a tokenized string. This
 * usually only is needed in localization scenarios.

 * @example
 * ```tsx
 * "I love {0} every {1}".format("CXP")
 * ```
 * will result in a Debug Exception.
 *
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function format(s) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var args = values;
    // Callback match function
    function replaceFunc(match) {
        // looks up in the args
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var replacement = args[match.replace(FORMAT_ARGS_REGEX, '')];
        // catches undefined in nondebug and null in debug and nondebug
        if (replacement === null || replacement === undefined) {
            replacement = '';
        }
        return replacement;
    }
    return s.replace(FORMAT_REGEX, replaceFunc);
}


/***/ }),

/***/ "../utilities/lib/styled.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return styled; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../merge-styles/lib/index.js");
/* harmony import */ var _customizations_useCustomizationSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../utilities/lib/customizations/useCustomizationSettings.js");




var DefaultFields = ['theme', 'styles'];
function styled(Component, baseStyles, getProps, customizable, pure) {
    customizable = customizable || { scope: '', fields: undefined };
    var scope = customizable.scope, _a = customizable.fields, fields = _a === void 0 ? DefaultFields : _a;
    var Wrapped = react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, forwardedRef) {
        var styles = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
        var settings = Object(_customizations_useCustomizationSettings__WEBPACK_IMPORTED_MODULE_3__["useCustomizationSettings"])(fields, scope);
        var customizedStyles = settings.styles, dir = settings.dir, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(settings, ["styles", "dir"]);
        var additionalProps = getProps ? getProps(props) : undefined;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var cache = (styles.current && styles.current.__cachedInputs__) || [];
        if (!styles.current || customizedStyles !== cache[1] || props.styles !== cache[2]) {
            // Using styled components as the Component arg will result in nested styling arrays.
            var concatenatedStyles = function (styleProps) {
                return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__["concatStyleSetsWithProps"])(styleProps, baseStyles, customizedStyles, props.styles);
            };
            // The __cachedInputs__ array is attached to the function and consumed by the
            // classNamesFunction as a list of keys to include for memoizing classnames.
            concatenatedStyles.__cachedInputs__ = [
                baseStyles,
                customizedStyles,
                props.styles,
            ];
            concatenatedStyles.__noStyleOverride__ =
                !customizedStyles && !props.styles;
            styles.current = concatenatedStyles;
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: forwardedRef }, rest, additionalProps, props, { styles: styles.current }));
    });
    // Function.prototype.name is an ES6 feature, so the cast to any is required until we're
    // able to drop IE 11 support and compile with ES6 libs
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Wrapped.displayName = "Styled" + (Component.displayName || Component.name);
    // This preserves backwards compatibility.
    var pureComponent = pure ? react__WEBPACK_IMPORTED_MODULE_1__["memo"](Wrapped) : Wrapped;
    // Check if the wrapper has a displayName after it has been memoized. Then assign it to the pure component.
    if (Wrapped.displayName) {
        pureComponent.displayName = Wrapped.displayName;
    }
    return pureComponent;
}


/***/ }),

/***/ "../utilities/lib/useFocusRects.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFocusRects", function() { return useFocusRects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusRects", function() { return FocusRects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../utilities/lib/dom/getWindow.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../utilities/lib/keyboard.js");
/* harmony import */ var _setFocusVisibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../utilities/lib/setFocusVisibility.js");




/**
 * Counter for mounted component that uses focus rectangle.
 * We want to cleanup the listners before last component that uses focus rectangle unmounts.
 */
var mountCounters = new WeakMap();
function setMountCounters(key, delta) {
    var newValue;
    var currValue = mountCounters.get(key);
    if (currValue) {
        newValue = currValue + delta;
    }
    else {
        newValue = 1;
    }
    mountCounters.set(key, newValue);
    return newValue;
}
/**
 * Initializes the logic which:
 *
 * 1. Subscribes keydown and mousedown events. (It will only do it once per window,
 *    so it's safe to call this method multiple times.)
 * 2. When the user presses directional keyboard keys, adds the 'ms-Fabric--isFocusVisible' classname
 *    to the document body, removes the 'ms-Fabric-isFocusHidden' classname.
 * 3. When the user clicks a mouse button, adds the 'ms-Fabric-isFocusHidden' classname to the
 *    document body, removes the 'ms-Fabric--isFocusVisible' classname.
 *
 * This logic allows components on the page to conditionally render focus treatments based on
 * the existence of global classnames, which simplifies logic overall.
 *
 * @param rootRef - A Ref object. Focus rectangle can be applied on itself and all its children.
 */
function useFocusRects(rootRef) {
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var _a, _b;
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_1__["getWindow"])((_a = rootRef) === null || _a === void 0 ? void 0 : _a.current);
        if (!win || ((_b = win.FabricConfig) === null || _b === void 0 ? void 0 : _b.disableFocusRects) === true) {
            return undefined;
        }
        var count = setMountCounters(win, 1);
        if (count <= 1) {
            win.addEventListener('mousedown', _onMouseDown, true);
            win.addEventListener('pointerdown', _onPointerDown, true);
            win.addEventListener('keydown', _onKeyDown, true);
        }
        return function () {
            var _a;
            if (!win || ((_a = win.FabricConfig) === null || _a === void 0 ? void 0 : _a.disableFocusRects) === true) {
                return;
            }
            count = setMountCounters(win, -1);
            if (count === 0) {
                win.removeEventListener('mousedown', _onMouseDown, true);
                win.removeEventListener('pointerdown', _onPointerDown, true);
                win.removeEventListener('keydown', _onKeyDown, true);
            }
        };
    }, [rootRef]);
}
/**
 * Function Component wrapper which enables calling `useFocusRects` hook.
 * Renders nothing.
 */
var FocusRects = function (props) {
    useFocusRects(props.rootRef);
    return null;
};
function _onMouseDown(ev) {
    Object(_setFocusVisibility__WEBPACK_IMPORTED_MODULE_3__["setFocusVisibility"])(false, ev.target);
}
function _onPointerDown(ev) {
    if (ev.pointerType !== 'mouse') {
        Object(_setFocusVisibility__WEBPACK_IMPORTED_MODULE_3__["setFocusVisibility"])(false, ev.target);
    }
}
function _onKeyDown(ev) {
    // eslint-disable-next-line deprecation/deprecation
    if (Object(_keyboard__WEBPACK_IMPORTED_MODULE_2__["isDirectionalKeyCode"])(ev.which)) {
        Object(_setFocusVisibility__WEBPACK_IMPORTED_MODULE_3__["setFocusVisibility"])(true, ev.target);
    }
}


/***/ }),

/***/ "../utilities/lib/version.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../set-version/lib/index.js");
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.

Object(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@uifabric/utilities', '7.33.4');


/***/ }),

/***/ "../utilities/lib/warn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _warn_warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/warn/warn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return _warn_warn__WEBPACK_IMPORTED_MODULE_0__["warn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWarningCallback", function() { return _warn_warn__WEBPACK_IMPORTED_MODULE_0__["setWarningCallback"]; });

/* harmony import */ var _warn_warnConditionallyRequiredProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../utilities/lib/warn/warnConditionallyRequiredProps.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnConditionallyRequiredProps", function() { return _warn_warnConditionallyRequiredProps__WEBPACK_IMPORTED_MODULE_1__["warnConditionallyRequiredProps"]; });

/* harmony import */ var _warn_warnControlledUsage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../utilities/lib/warn/warnControlledUsage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetControlledWarnings", function() { return _warn_warnControlledUsage__WEBPACK_IMPORTED_MODULE_2__["resetControlledWarnings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnControlledUsage", function() { return _warn_warnControlledUsage__WEBPACK_IMPORTED_MODULE_2__["warnControlledUsage"]; });

/* harmony import */ var _warn_warnDeprecations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../utilities/lib/warn/warnDeprecations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnDeprecations", function() { return _warn_warnDeprecations__WEBPACK_IMPORTED_MODULE_3__["warnDeprecations"]; });

/* harmony import */ var _warn_warnMutuallyExclusive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../utilities/lib/warn/warnMutuallyExclusive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnMutuallyExclusive", function() { return _warn_warnMutuallyExclusive__WEBPACK_IMPORTED_MODULE_4__["warnMutuallyExclusive"]; });








/***/ }),

/***/ "../utilities/lib/warn/warn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWarningCallback", function() { return setWarningCallback; });
/* eslint-disable no-console */
var _warningCallback = undefined;
/**
 * Sends a warning to console, if the api is present.
 *
 * @public
 * @param message - Warning message.
 */
function warn(message) {
    if (_warningCallback && "development" !== 'production') {
        _warningCallback(message);
    }
    else if (console && console.warn) {
        console.warn(message);
    }
}
/**
 * Configures the warning callback. Passing in undefined will reset it to use the default
 * console.warn function.
 *
 * @public
 * @param warningCallback - Callback to override the generated warnings.
 */
function setWarningCallback(warningCallback) {
    _warningCallback = warningCallback;
}


/***/ }),

/***/ "../utilities/lib/warn/warnConditionallyRequiredProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnConditionallyRequiredProps", function() { return warnConditionallyRequiredProps; });
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/warn/warn.js");

/**
 * Warns when props are required if a condition is met.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param requiredProps - The name of the props that are required when the condition is met.
 * @param conditionalPropName - The name of the prop that the condition is based on.
 * @param condition - Whether the condition is met.
 */
function warnConditionallyRequiredProps(componentName, props, requiredProps, conditionalPropName, condition) {
    if (condition === true && "development" !== 'production') {
        for (var _i = 0, requiredProps_1 = requiredProps; _i < requiredProps_1.length; _i++) {
            var requiredPropName = requiredProps_1[_i];
            if (!(requiredPropName in props)) {
                Object(_warn__WEBPACK_IMPORTED_MODULE_0__["warn"])(componentName + " property '" + requiredPropName + "' is required when '" + conditionalPropName + "' is used.'");
            }
        }
    }
}


/***/ }),

/***/ "../utilities/lib/warn/warnControlledUsage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetControlledWarnings", function() { return resetControlledWarnings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnControlledUsage", function() { return warnControlledUsage; });
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/warn/warn.js");
/* harmony import */ var _controlled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../utilities/lib/controlled.js");


var warningsMap;
if (true) {
    warningsMap = {
        valueOnChange: {},
        valueDefaultValue: {},
        controlledToUncontrolled: {},
        uncontrolledToControlled: {},
    };
}
/** Reset controlled usage warnings for testing purposes. */
function resetControlledWarnings() {
    if (true) {
        warningsMap.valueOnChange = {};
        warningsMap.valueDefaultValue = {};
        warningsMap.controlledToUncontrolled = {};
        warningsMap.uncontrolledToControlled = {};
    }
}
/**
 * Check for and warn on the following error conditions with a form component:
 * - A value prop is provided (indicated it's being used as controlled) without a change handler,
 *    and the component is not read-only
 * - Both the value and defaultValue props are provided
 * - The component is attempting to switch between controlled and uncontrolled
 *
 * The messages mimic the warnings React gives for these error conditions on input elements.
 * The warning will only be displayed once per component ID.
 */
function warnControlledUsage(params) {
    if (true) {
        var componentId = params.componentId, componentName = params.componentName, defaultValueProp = params.defaultValueProp, props = params.props, oldProps = params.oldProps, onChangeProp = params.onChangeProp, readOnlyProp = params.readOnlyProp, valueProp = params.valueProp;
        // This warning logic closely follows what React does for native <input> elements.
        var oldIsControlled = oldProps ? Object(_controlled__WEBPACK_IMPORTED_MODULE_1__["isControlled"])(oldProps, valueProp) : undefined;
        var newIsControlled = Object(_controlled__WEBPACK_IMPORTED_MODULE_1__["isControlled"])(props, valueProp);
        if (newIsControlled) {
            // onChange (or readOnly) must be provided if value is provided
            var hasOnChange = !!props[onChangeProp];
            var isReadOnly = !!(readOnlyProp && props[readOnlyProp]);
            if (!(hasOnChange || isReadOnly) && !warningsMap.valueOnChange[componentId]) {
                warningsMap.valueOnChange[componentId] = true;
                Object(_warn__WEBPACK_IMPORTED_MODULE_0__["warn"])("Warning: You provided a '" + valueProp + "' prop to a " + componentName + " without an '" + onChangeProp + "' handler. " +
                    ("This will render a read-only field. If the field should be mutable use '" + defaultValueProp + "'. ") +
                    ("Otherwise, set '" + onChangeProp + "'" + (readOnlyProp ? " or '" + readOnlyProp + "'" : '') + "."));
            }
            // value and defaultValue are mutually exclusive
            var defaultValue = props[defaultValueProp];
            if (defaultValue !== undefined && defaultValue !== null && !warningsMap.valueDefaultValue[componentId]) {
                warningsMap.valueDefaultValue[componentId] = true;
                Object(_warn__WEBPACK_IMPORTED_MODULE_0__["warn"])("Warning: You provided both '" + valueProp + "' and '" + defaultValueProp + "' to a " + componentName + ". " +
                    ("Form fields must be either controlled or uncontrolled (specify either the '" + valueProp + "' prop, ") +
                    ("or the '" + defaultValueProp + "' prop, but not both). Decide between using a controlled or uncontrolled ") +
                    (componentName + " and remove one of these props. More info: https://fb.me/react-controlled-components"));
            }
        }
        // Warn if switching between uncontrolled and controlled. (One difference between this implementation
        // and React's <input> is that if oldIsControlled is indeterminate and newIsControlled true, we don't warn.)
        if (oldProps && newIsControlled !== oldIsControlled) {
            var oldType = oldIsControlled ? 'a controlled' : 'an uncontrolled';
            var newType = oldIsControlled ? 'uncontrolled' : 'controlled';
            var warnMap = oldIsControlled ? warningsMap.controlledToUncontrolled : warningsMap.uncontrolledToControlled;
            if (!warnMap[componentId]) {
                warnMap[componentId] = true;
                Object(_warn__WEBPACK_IMPORTED_MODULE_0__["warn"])("Warning: A component is changing " + oldType + " " + componentName + " to be " + newType + ". " +
                    (componentName + "s should not switch from controlled to uncontrolled (or vice versa). ") +
                    "Decide between using controlled or uncontrolled for the lifetime of the component. " +
                    "More info: https://fb.me/react-controlled-components");
            }
        }
    }
}


/***/ }),

/***/ "../utilities/lib/warn/warnDeprecations.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnDeprecations", function() { return warnDeprecations; });
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/warn/warn.js");

/**
 * Warns when a deprecated props are being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
 * either null or a replacement prop name.
 */
function warnDeprecations(componentName, props, deprecationMap) {
    if (true) {
        for (var propName in deprecationMap) {
            if (props && propName in props) {
                var deprecationMessage = componentName + " property '" + propName + "' was used but has been deprecated.";
                var replacementPropName = deprecationMap[propName];
                if (replacementPropName) {
                    deprecationMessage += " Use '" + replacementPropName + "' instead.";
                }
                Object(_warn__WEBPACK_IMPORTED_MODULE_0__["warn"])(deprecationMessage);
            }
        }
    }
}


/***/ }),

/***/ "../utilities/lib/warn/warnMutuallyExclusive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnMutuallyExclusive", function() { return warnMutuallyExclusive; });
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/warn/warn.js");

/**
 * Warns when two props which are mutually exclusive are both being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param exclusiveMap - A map where the key is a parameter, and the value is the other parameter.
 */
function warnMutuallyExclusive(componentName, props, exclusiveMap) {
    if (true) {
        for (var propName in exclusiveMap) {
            if (props && props[propName] !== undefined) {
                var propInExclusiveMapValue = exclusiveMap[propName];
                if (propInExclusiveMapValue && props[propInExclusiveMapValue] !== undefined) {
                    Object(_warn__WEBPACK_IMPORTED_MODULE_0__["warn"])(componentName + " property '" + propName + "' is mutually exclusive with '" + exclusiveMap[propName] + "'. " +
                        "Use one or the other.");
                }
            }
        }
    }
}


/***/ }),

/***/ "./lib/ThemeContext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ThemeContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](undefined);


/***/ }),

/***/ "./lib/ThemeProvider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useThemeProviderClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./lib/useThemeProviderClasses.js");
/* harmony import */ var _useThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./lib/useThemeProvider.js");
/* harmony import */ var _styleRenderers_mergeStylesRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./lib/styleRenderers/mergeStylesRenderer.js");
/* harmony import */ var _fluentui_react_stylesheets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../react-stylesheets/lib/index.js");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../utilities/lib/index.js");






/**
 * ThemeProvider, used for providing css variables and registering stylesheets.
 */
var ThemeProvider = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function (props, ref) {
    var _a = Object(_useThemeProvider__WEBPACK_IMPORTED_MODULE_2__["useThemeProvider"])(props, ref, {
        // The renderer default value is required to be defined, so if you're recomposing
        // this component, be sure to do so.
        renderer: _styleRenderers_mergeStylesRenderer__WEBPACK_IMPORTED_MODULE_3__["mergeStylesRenderer"],
        applyTo: 'element',
    }), render = _a.render, state = _a.state;
    // Register stylesheets as needed.
    Object(_fluentui_react_stylesheets__WEBPACK_IMPORTED_MODULE_4__["useStylesheet"])(state.theme.stylesheets);
    // Render styles.
    Object(_useThemeProviderClasses__WEBPACK_IMPORTED_MODULE_1__["useThemeProviderClasses"])(state);
    // Apply focus rect class on key presses.
    Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_5__["useFocusRects"])(state.ref);
    // Return the rendered content.
    return render(state);
});
ThemeProvider.displayName = 'ThemeProvider';


/***/ }),

/***/ "./lib/applyClasses.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyClasses", function() { return applyClasses; });
/**
 * The `applyClasses` takes in a mutable state and a class map and, given the class map
 * follows the a naming convention described below, auto-applies classes to the appropriate places
 * in the state.
 *
 * Usage:
 *
 * ```tsx
 * const useButtonClasses = makeClasses(theme => {
 *   root: { ... },
 *   _primary: { ... },
 *   _size_small: { ... }
 * });
 * ```
 *
 * The class naming convention is broken down as follows:
 *
 * * No underscores - a slot class name. (E.g. "root", "icon", etc)
 * * Prefixed with underscore - a modifier. (E.g. "_primary", "_fluid")
 * * Contains 2 underscores - a name/value matcher. (E.g. "_size_small")
 *
 * Modifier classnames are added to the root className when the state contains a truthy value
 * of the same name. For example, when the primary flag is present, the "_primary" modifier
 * class will be appended to the root className prop.
 *
 * Enum classnames are also added to the root className when teh state contains an enum value
 * which matches the value in the className. for example, when the `size` enum value is `small`,
 * the "_size_small" enum class will be appended to the root className prop.
 */
var applyClasses = function (state, classMap) {
    for (var _i = 0, _a = Object.keys(classMap); _i < _a.length; _i++) {
        var key = _a[_i];
        var value = classMap[key];
        var parts = key.split('_');
        switch (parts.length) {
            case 1:
                if (key === 'root') {
                    _setClass(state, value);
                }
                else if (key !== 'subComponentStyles') {
                    // The subComponentStyles check is an unfortunate workaround to avoid breaking partners.
                    _setClass(state, value, key);
                }
                break;
            case 2:
                var modifierName = parts[1];
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (state[modifierName] || state.variant === modifierName) {
                    _setClass(state, value);
                }
                break;
            case 3:
                var enumName = parts[1];
                var enumValue = parts[2];
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (state[enumName] === enumValue) {
                    _setClass(state, value);
                }
                break;
        }
    }
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _setClass(state, className, slot) {
    var currentSlot = slot ? (state[slot] = state[slot] || {}) : state;
    if (currentSlot.className) {
        currentSlot.className += ' ' + className;
    }
    else {
        currentSlot.className = className;
    }
}


/***/ }),

/***/ "./lib/getStyleFromPropsAndOptions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyleFromPropsAndOptions", function() { return getStyleFromPropsAndOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tokensToStyleObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./lib/tokensToStyleObject.js");


var getStyleFromPropsAndOptions = function (props, options, prefix) {
    var rootSlotStyle = {};
    options.slotProps.forEach(function (definition) {
        var _a;
        var nextSlotProps = definition(props);
        rootSlotStyle = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, rootSlotStyle), (_a = nextSlotProps.root) === null || _a === void 0 ? void 0 : _a.style);
    });
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props.style), rootSlotStyle), Object(_tokensToStyleObject__WEBPACK_IMPORTED_MODULE_1__["tokensToStyleObject"])(props.tokens, prefix));
};


/***/ }),

/***/ "./lib/getTokens.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokens", function() { return getTokens; });
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../utilities/lib/index.js");

/**
 * Get tokens from theme object.
 */
function getTokens(theme, userTokens) {
    var fonts = theme.fonts;
    var palette = theme.palette, semanticColors = theme.semanticColors;
    var preparedTokens = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["merge"])({
        color: {
            body: {
                background: semanticColors.bodyBackground,
                contentColor: semanticColors.bodyText,
            },
            // accent is currently only mapped for primary button to use.
            brand: {
                background: semanticColors.primaryButtonBackground,
                borderColor: semanticColors.primaryButtonBorder,
                contentColor: semanticColors.primaryButtonText,
                iconColor: palette.white,
                dividerColor: palette.white,
                secondaryContentColor: palette.white,
                hovered: {
                    background: semanticColors.primaryButtonBackgroundHovered,
                    contentColor: semanticColors.primaryButtonTextHovered,
                    secondaryContentColor: palette.white,
                    borderColor: 'var(--color-brand-borderColor)',
                },
                pressed: {
                    background: semanticColors.primaryButtonBackgroundPressed,
                    contentColor: semanticColors.primaryButtonTextPressed,
                    secondaryContentColor: semanticColors.primaryButtonTextPressed,
                    borderColor: 'var(--color-brand-borderColor)',
                    iconColor: 'var(--color-brand-iconColor)',
                },
                focused: {
                    background: 'var(--color-brand-background)',
                    borderColor: 'var(--color-brand-borderColor)',
                    contentColor: 'var(--color-brand-contentColor)',
                    iconColor: 'var(--color-brand-iconColor)',
                    secondaryContentColor: 'var(--color-brand-focused-contentColor)',
                },
                disabled: {
                    background: semanticColors.primaryButtonBackgroundDisabled,
                    contentColor: semanticColors.buttonTextDisabled,
                    dividerColor: palette.neutralTertiaryAlt,
                    secondaryContentColor: 'var(--color-brand-disabled-contentColor)',
                    borderColor: 'var(--color-brand-disabled-background)',
                    iconColor: 'var(--color-brand-disabled-contentColor)',
                },
                checked: {
                    background: semanticColors.primaryButtonBackgroundPressed,
                    contentColor: semanticColors.primaryButtonTextPressed,
                    iconColor: semanticColors.primaryButtonTextPressed,
                },
                checkedHovered: {
                    background: semanticColors.primaryButtonBackgroundPressed,
                    contentColor: semanticColors.primaryButtonTextPressed,
                    iconColor: semanticColors.primaryButtonTextPressed,
                },
            },
        },
        body: {
            fontFamily: fonts.medium.fontFamily,
            fontWeight: fonts.medium.fontWeight,
            fontSize: fonts.medium.fontSize,
            mozOsxFontSmoothing: fonts.medium.MozOsxFontSmoothing,
            webkitFontSmoothing: fonts.medium.WebkitFontSmoothing,
        },
        // TODO: This will be moved out as a text variant.
        text: {
            variant: {
                caption: {
                    fontSize: '12px',
                    fontWeight: '400',
                    lineHeight: '14px',
                },
                body: {
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '20px',
                },
                subHeadline: {
                    fontSize: '16px',
                    fontWeight: '600',
                    lineHeight: '22px',
                },
                headline: {
                    fontSize: '20px',
                    fontWeight: '600',
                    lineHeight: '28px',
                },
                title3: {
                    fontSize: '24px',
                    fontWeight: '600',
                    lineHeight: '32px',
                },
                title2: {
                    fontSize: '28px',
                    fontWeight: '600',
                    lineHeight: '36px',
                },
                title1: {
                    fontSize: '32px',
                    fontWeight: '600',
                    lineHeight: '40px',
                },
                largeTitle: {
                    fontSize: '40px',
                    fontWeight: '600',
                    lineHeight: '52px',
                },
                display: {
                    fontSize: '68px',
                    fontWeight: '600',
                    lineHeight: '92px',
                },
            },
        },
    }, userTokens);
    return preparedTokens;
}


/***/ }),

/***/ "./lib/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./lib/version.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./lib/ThemeProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _ThemeProvider__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"]; });

/* harmony import */ var _useThemeProviderClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./lib/useThemeProviderClasses.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useThemeProviderClasses", function() { return _useThemeProviderClasses__WEBPACK_IMPORTED_MODULE_2__["useThemeProviderClasses"]; });

/* harmony import */ var _useThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./lib/useThemeProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useThemeProvider", function() { return _useThemeProvider__WEBPACK_IMPORTED_MODULE_3__["useThemeProvider"]; });

/* harmony import */ var _useThemeProviderState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./lib/useThemeProviderState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useThemeProviderState", function() { return _useThemeProviderState__WEBPACK_IMPORTED_MODULE_4__["useThemeProviderState"]; });

/* harmony import */ var _withThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./lib/withThemeProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withThemeProvider", function() { return _withThemeProvider__WEBPACK_IMPORTED_MODULE_5__["withThemeProvider"]; });

/* harmony import */ var _applyClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./lib/applyClasses.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyClasses", function() { return _applyClasses__WEBPACK_IMPORTED_MODULE_6__["applyClasses"]; });

/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./lib/useTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return _useTheme__WEBPACK_IMPORTED_MODULE_7__["useTheme"]; });

/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./lib/ThemeContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return _ThemeContext__WEBPACK_IMPORTED_MODULE_8__["ThemeContext"]; });

/* harmony import */ var _getStyleFromPropsAndOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./lib/getStyleFromPropsAndOptions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStyleFromPropsAndOptions", function() { return _getStyleFromPropsAndOptions__WEBPACK_IMPORTED_MODULE_9__["getStyleFromPropsAndOptions"]; });

/* harmony import */ var _tokensToStyleObject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./lib/tokensToStyleObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tokensToStyleObject", function() { return _tokensToStyleObject__WEBPACK_IMPORTED_MODULE_10__["tokensToStyleObject"]; });

/* harmony import */ var _useInlineTokens__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./lib/useInlineTokens.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useInlineTokens", function() { return _useInlineTokens__WEBPACK_IMPORTED_MODULE_11__["useInlineTokens"]; });

/* harmony import */ var _makeVariantClasses__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./lib/makeVariantClasses.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeVariantClasses", function() { return _makeVariantClasses__WEBPACK_IMPORTED_MODULE_12__["makeVariantClasses"]; });

/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./lib/makeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeStyles", function() { return _makeStyles__WEBPACK_IMPORTED_MODULE_13__["makeStyles"]; });

/* harmony import */ var _makeClasses__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./lib/makeClasses.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeClasses", function() { return _makeClasses__WEBPACK_IMPORTED_MODULE_14__["makeClasses"]; });

/* harmony import */ var _styleRenderers_mergeStylesRenderer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./lib/styleRenderers/mergeStylesRenderer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStylesRenderer", function() { return _styleRenderers_mergeStylesRenderer__WEBPACK_IMPORTED_MODULE_15__["mergeStylesRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MergeStylesProvider", function() { return _styleRenderers_mergeStylesRenderer__WEBPACK_IMPORTED_MODULE_15__["MergeStylesProvider"]; });

/* harmony import */ var _styleRenderers_useStyleRenderer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./lib/styleRenderers/useStyleRenderer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleRendererContext", function() { return _styleRenderers_useStyleRenderer__WEBPACK_IMPORTED_MODULE_16__["StyleRendererContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStyleRenderer", function() { return _styleRenderers_useStyleRenderer__WEBPACK_IMPORTED_MODULE_16__["useStyleRenderer"]; });




















/***/ }),

/***/ "./lib/makeClasses.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeClasses", function() { return makeClasses; });
/* harmony import */ var _applyClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./lib/applyClasses.js");
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./lib/makeStyles.js");


/**
 * The `makeClasses` helper encapsulates `makeStyles`, and given a style map which follows
 * a specific naming convention, produces a hook function which takes in the component
 * draft state and auto distributes classes into the draft state. This removes a lot of
 * boilerplate code using `classnames` helpers to manage distributing classnames manually.
 *
 * Usage:
 *
 * ```tsx
 * const useButtonClasses makeClasses(theme => {
 *   root: { ... },
 *   _primary: { ... },
 *   _size_small: { ... }
 * });
 * ```
 *
 * The class naming convention is broken down as follows:
 *
 * * No underscores - a slot class name. (E.g. "root", "icon", etc)
 * * Prefixed with underscore - a modifier. (E.g. "_primary", "_fluid")
 * * Contains 2 underscores - a name/value matcher. (E.g. "_size_small")
 *
 * Modifier classnames are added to the root className when the state contains a truthy value
 * of the same name. For example, when the primary flag is present, the "_primary" modifier
 * class will be appended to the root className prop.
 *
 * Enum classnames are also added to the root className when teh state contains an enum value
 * which matches the value in the className. for example, when the `size` enum value is `small`,
 * the "_size_small" enum class will be appended to the root className prop.
 */
var makeClasses = function (styleOrFunction) {
    var useStyles = Object(_makeStyles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(styleOrFunction);
    return function (state, options) {
        var classes = useStyles(options);
        Object(_applyClasses__WEBPACK_IMPORTED_MODULE_0__["applyClasses"])(state, classes);
    };
};


/***/ }),

/***/ "./lib/makeStyles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStyles", function() { return makeStyles; });
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./lib/useTheme.js");
/* harmony import */ var _fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../react-window-provider/lib/index.js");
/* harmony import */ var _styleRenderers_useStyleRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./lib/styleRenderers/useStyleRenderer.js");



// eslint-disable-next-line @typescript-eslint/no-explicit-any
var graphGet = function (graphNode, path) {
    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
        var key = path_1[_i];
        graphNode = graphNode.get(key);
        if (!graphNode) {
            return;
        }
    }
    return graphNode;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var graphSet = function (graphNode, path, value) {
    for (var i = 0; i < path.length - 1; i++) {
        var key = path[i];
        var current = graphNode.get(key);
        if (!current) {
            current = new Map();
            graphNode.set(key, current);
        }
        graphNode = current;
    }
    graphNode.set(path[path.length - 1], value);
};
/**
 * Registers a css object, optionally as a function of the theme.
 *
 * @param styleOrFunction - Either a css javascript object, or a function which takes in `ITheme`
 * and returns a css javascript object.
 */
function makeStyles(styleOrFunction) {
    // Create graph of inputs to map to output.
    var graph = new Map();
    return function (options) {
        if (options === void 0) { options = {}; }
        var theme = options.theme, renderer = options.renderer;
        var win = Object(_fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_1__["useWindow"])();
        var contextualTheme = Object(_useTheme__WEBPACK_IMPORTED_MODULE_0__["useTheme"])();
        var contextualRenderer = Object(_styleRenderers_useStyleRenderer__WEBPACK_IMPORTED_MODULE_2__["useStyleRenderer"])();
        theme = theme || contextualTheme || {};
        renderer = (renderer || contextualRenderer);
        var id = renderer.getId();
        var isStyleFunction = typeof styleOrFunction === 'function';
        var path = isStyleFunction ? [id, win, theme] : [id, win];
        var value = graphGet(graph, path);
        if (!value) {
            var styles = isStyleFunction ? styleOrFunction(theme) : styleOrFunction;
            value = renderer.renderStyles(styles, { targetWindow: win, rtl: !!theme.rtl });
            graphSet(graph, path, value);
        }
        return value;
    };
}


/***/ }),

/***/ "./lib/makeVariantClasses.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeVariantClasses", function() { return makeVariantClasses; });
/* harmony import */ var _tokensToStyleObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./lib/tokensToStyleObject.js");
/* harmony import */ var _makeClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./lib/makeClasses.js");
/* eslint-disable @typescript-eslint/no-explicit-any */


/**
 * Calls a function with the argument, or returns the given object.
 * @param objOrFunc - Function or object.
 * @param argument - Argument to pass if a function is provided.
 */
var callOrReturn = function (objOrFunc, argument) {
    return typeof objOrFunc === 'function' ? objOrFunc(argument) : objOrFunc;
};
var processVariants = function (variants, theme, name, prefix) {
    var result = {};
    if (variants) {
        variants = callOrReturn(variants, theme);
        for (var _i = 0, _a = Object.keys(variants); _i < _a.length; _i++) {
            var variantName = _a[_i];
            var modifierName = variantName === 'root' ? variantName : '_' + variantName;
            var rule = (result[modifierName] = Object(_tokensToStyleObject__WEBPACK_IMPORTED_MODULE_0__["tokensToStyleObject"])(variants[variantName], prefix));
            // The display name should be tied to the unique theme object, causing the
            // renderer to treat scoped themes as sandboxed css scopes.
            if (name) {
                rule.displayName = "" + name + (theme.id || '');
                if (variantName !== 'root') {
                    rule.displayName += "--" + variantName;
                }
            }
        }
    }
    return result;
};
/**
 * Hook factory for creating a `use*Variants` helper. Variants represent a configuration of
 * token values mapped to modifiers on the component. A variant can also be referenced using
 * a variant string. Variants can be overridden through the theme of the component.
 */
var makeVariantClasses = function (options) {
    var styles = options.styles, variants = options.variants, name = options.name, prefix = options.prefix;
    // This function will only be called when styles have not been evaluated for this set for
    // the particular theme/window/direction combo.
    var styleFunction = function (theme) {
        var _a, _b, _c;
        var themeVariants = name ? (_c = (_b = (_a = theme) === null || _a === void 0 ? void 0 : _a.components) === null || _b === void 0 ? void 0 : _b[name]) === null || _c === void 0 ? void 0 : _c.variants : undefined;
        return [
            callOrReturn(styles, theme),
            processVariants(variants, theme, name, prefix),
            processVariants(themeVariants, theme, name, prefix),
        ];
    };
    return Object(_makeClasses__WEBPACK_IMPORTED_MODULE_1__["makeClasses"])(styleFunction);
};


/***/ }),

/***/ "./lib/renderThemeProvider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderThemeProvider", function() { return renderThemeProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fluentui_react_compose_lib_next_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../react-compose/lib/next/index.js");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../utilities/lib/index.js");
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./lib/ThemeContext.js");
/* harmony import */ var _styleRenderers_useStyleRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./lib/styleRenderers/useStyleRenderer.js");






var renderThemeProvider = function (state) {
    var _a = Object(_fluentui_react_compose_lib_next_index__WEBPACK_IMPORTED_MODULE_2__["getSlots"])(state), slots = _a.slots, slotProps = _a.slotProps;
    var theme = state.theme, customizerContext = state.customizerContext;
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ThemeContext__WEBPACK_IMPORTED_MODULE_4__["ThemeContext"].Provider, { value: theme },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_styleRenderers_useStyleRenderer__WEBPACK_IMPORTED_MODULE_5__["StyleRendererContext"].Provider, { value: state.renderer },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_uifabric_utilities__WEBPACK_IMPORTED_MODULE_3__["CustomizerContext"].Provider, { value: customizerContext },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](slots.root, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, slotProps.root))))));
};


/***/ }),

/***/ "./lib/styleRenderers/mergeStylesRenderer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeStylesRenderer", function() { return mergeStylesRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeStylesProvider", function() { return MergeStylesProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useStyleRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./lib/styleRenderers/useStyleRenderer.js");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../merge-styles/lib/index.js");



var _seed = 0;
var mergeStylesRenderer = {
    reset: function () {
        // If the stylesheet reset call is made, invalidate the cache keys.
        _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__["Stylesheet"].getInstance().onReset(function () { return _seed++; });
    },
    getId: function () { return _seed; },
    renderStyles: function (styleSet, options) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__["mergeCssSets"])((Array.isArray(styleSet) ? styleSet : [styleSet]), options);
    },
    renderFontFace: function (fontFace, options) {
        return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__["fontFace"])(fontFace);
    },
    renderKeyframes: function (keyframes) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(keyframes);
    },
};
var MergeStylesProvider = function (_a) {
    var children = _a.children;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_useStyleRenderer__WEBPACK_IMPORTED_MODULE_1__["StyleRendererContext"].Provider, { value: mergeStylesRenderer }, children));
};


/***/ }),

/***/ "./lib/styleRenderers/useStyleRenderer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleRendererContext", function() { return StyleRendererContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyleRenderer", function() { return useStyleRenderer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mergeStylesRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./lib/styleRenderers/mergeStylesRenderer.js");


var StyleRendererContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](_mergeStylesRenderer__WEBPACK_IMPORTED_MODULE_1__["mergeStylesRenderer"]);
var useStyleRenderer = function () { return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](StyleRendererContext); };


/***/ }),

/***/ "./lib/tokensToStyleObject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokensToStyleObject", function() { return tokensToStyleObject; });
var tokensToStyleObject = function (tokens, prefix, style) {
    if (style === void 0) { style = {}; }
    var hasCheckedObject = false;
    if (tokens) {
        for (var _i = 0, _a = Object.keys(tokens); _i < _a.length; _i++) {
            var name_1 = _a[_i];
            // On the first token property, check if this object has already been tokenized.
            if (!hasCheckedObject) {
                if (name_1.indexOf('--') === 0) {
                    return tokens;
                }
                hasCheckedObject = true;
            }
            var varName = prefix ? "" + prefix + (name_1 === 'default' ? '' : '-' + name_1) : "--" + name_1;
            var varValue = tokens[name_1];
            if (varValue && typeof varValue === 'object') {
                tokensToStyleObject(varValue, varName, style);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                style[varName] = varValue;
            }
        }
    }
    return style;
};


/***/ }),

/***/ "./lib/useInlineTokens.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInlineTokens", function() { return useInlineTokens; });
/* harmony import */ var _tokensToStyleObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./lib/tokensToStyleObject.js");

/**
 * Hook which given draftState, will ensure that tokens are spit out to inline styles.
 * @param draftState - state to read and manipulate. Expected to have `tokens` prop, will
 * transform into inline
 * @param prefix - prefix to prepend to variables (e.g. "--button")
 */
var useInlineTokens = function (draftState, prefix) {
    var tokens = draftState.tokens, style = draftState.style;
    if (tokens) {
        draftState.style = style || {};
        Object(_tokensToStyleObject__WEBPACK_IMPORTED_MODULE_0__["tokensToStyleObject"])(tokens, prefix, draftState.style);
    }
};


/***/ }),

/***/ "./lib/useTheme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../utilities/lib/index.js");
/* harmony import */ var _fluentui_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../theme/lib/index.js");
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./lib/ThemeContext.js");




/**
 * Get theme from CustomizerContext or Customizations singleton.
 */
function useCompatTheme() {
    return Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["useCustomizationSettings"])(['theme']).theme;
}
/**
 * React hook for programmatically accessing the theme.
 */
var useTheme = function () {
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_ThemeContext__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"]);
    var legacyTheme = useCompatTheme();
    return theme || legacyTheme || Object(_fluentui_theme__WEBPACK_IMPORTED_MODULE_2__["createTheme"])({});
};


/***/ }),

/***/ "./lib/useThemeProvider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useThemeProvider", function() { return useThemeProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _renderThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./lib/renderThemeProvider.js");
/* harmony import */ var _fluentui_react_compose_lib_next_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../react-compose/lib/next/index.js");
/* harmony import */ var _useThemeProviderState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./lib/useThemeProviderState.js");
/* harmony import */ var _uifabric_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../react-hooks/lib/index.js");





var mergeProps = Object(_fluentui_react_compose_lib_next_index__WEBPACK_IMPORTED_MODULE_2__["makeMergeProps"])();
/**
 * Returns the ThemeProvider render function and calculated state, given user input, ref, and
 * a set of default prop values.
 */
var useThemeProvider = function (props, ref, defaultProps) {
    var rootRef = Object(_uifabric_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMergedRefs"])(ref, react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null));
    var state = mergeProps({
        ref: rootRef,
        as: 'div',
    }, defaultProps, props);
    // Apply changes to state.
    Object(_useThemeProviderState__WEBPACK_IMPORTED_MODULE_3__["useThemeProviderState"])(state);
    return {
        state: state,
        render: _renderThemeProvider__WEBPACK_IMPORTED_MODULE_1__["renderThemeProvider"],
    };
};


/***/ }),

/***/ "./lib/useThemeProviderClasses.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useThemeProviderClasses", function() { return useThemeProviderClasses; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../utilities/lib/index.js");
/* harmony import */ var _fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../react-window-provider/lib/index.js");
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./lib/makeStyles.js");
/* harmony import */ var _tokensToStyleObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./lib/tokensToStyleObject.js");





var useThemeProviderStyles = Object(_makeStyles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    var tokens = theme.tokens;
    var tokenStyles = Object(_tokensToStyleObject__WEBPACK_IMPORTED_MODULE_4__["tokensToStyleObject"])(tokens);
    return {
        root: tokenStyles,
        body: [
            {
                color: (_c = (_b = (_a = tokens) === null || _a === void 0 ? void 0 : _a.color) === null || _b === void 0 ? void 0 : _b.body) === null || _c === void 0 ? void 0 : _c.contentColor,
                background: (_f = (_e = (_d = tokens) === null || _d === void 0 ? void 0 : _d.color) === null || _e === void 0 ? void 0 : _e.body) === null || _f === void 0 ? void 0 : _f.background,
                fontFamily: (_h = (_g = tokens) === null || _g === void 0 ? void 0 : _g.body) === null || _h === void 0 ? void 0 : _h.fontFamily,
                fontWeight: (_k = (_j = tokens) === null || _j === void 0 ? void 0 : _j.body) === null || _k === void 0 ? void 0 : _k.fontWeight,
                fontSize: (_m = (_l = tokens) === null || _l === void 0 ? void 0 : _l.body) === null || _m === void 0 ? void 0 : _m.fontSize,
                MozOsxFontSmoothing: (_p = (_o = tokens) === null || _o === void 0 ? void 0 : _o.body) === null || _p === void 0 ? void 0 : _p.mozOsxFontSmoothing,
                WebkitFontSmoothing: (_r = (_q = tokens) === null || _q === void 0 ? void 0 : _q.body) === null || _r === void 0 ? void 0 : _r.webkitFontSmoothing,
            },
        ],
    };
});
/**
 * Hook to add class to body element.
 */
function useApplyClassToBody(state, classesToApply) {
    var _a;
    var applyTo = state.applyTo;
    var applyToBody = applyTo === 'body';
    var body = (_a = Object(_fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_2__["useDocument"])()) === null || _a === void 0 ? void 0 : _a.body;
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (!applyToBody || !body) {
            return;
        }
        for (var _i = 0, classesToApply_1 = classesToApply; _i < classesToApply_1.length; _i++) {
            var classToApply = classesToApply_1[_i];
            if (classToApply) {
                body.classList.add(classToApply);
            }
        }
        return function () {
            if (!applyToBody || !body) {
                return;
            }
            for (var _i = 0, classesToApply_2 = classesToApply; _i < classesToApply_2.length; _i++) {
                var classToApply = classesToApply_2[_i];
                if (classToApply) {
                    body.classList.remove(classToApply);
                }
            }
        };
    }, [applyToBody, body, classesToApply]);
}
function useThemeProviderClasses(state) {
    var classes = useThemeProviderStyles(state);
    var className = state.className, applyTo = state.applyTo;
    useApplyClassToBody(state, [classes.root, classes.body]);
    state.className = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["css"])(className, classes.root, applyTo === 'element' && classes.body);
}


/***/ }),

/***/ "./lib/useThemeProviderState.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useThemeProviderState", function() { return useThemeProviderState; });
/* harmony import */ var _fluentui_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../theme/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./lib/useTheme.js");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../utilities/lib/index.js");
/* harmony import */ var _getTokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./lib/getTokens.js");





var themeToIdMap = new Map();
var getThemeId = function () {
    var themes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        themes[_i] = arguments[_i];
    }
    var ids = [];
    for (var _a = 0, themes_1 = themes; _a < themes_1.length; _a++) {
        var theme = themes_1[_a];
        if (theme) {
            var id = theme.id || themeToIdMap.get(theme);
            if (!id) {
                id = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_3__["getId"])('');
                themeToIdMap.set(theme, id);
            }
            ids.push(id);
        }
    }
    return ids.join('-');
};
var useThemeProviderState = function (draftState) {
    var userTheme = draftState.theme;
    // Pull contextual theme.
    var parentTheme = Object(_useTheme__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
    // Update the incoming theme with a memoized version of the merged theme.
    var theme = (draftState.theme = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        var _a;
        var mergedTheme = Object(_fluentui_theme__WEBPACK_IMPORTED_MODULE_0__["mergeThemes"])(parentTheme, userTheme);
        mergedTheme.tokens = Object(_getTokens__WEBPACK_IMPORTED_MODULE_4__["getTokens"])(mergedTheme, (_a = userTheme) === null || _a === void 0 ? void 0 : _a.tokens);
        mergedTheme.id = getThemeId(parentTheme, userTheme);
        return mergedTheme;
    }, [parentTheme, userTheme]));
    draftState.customizerContext = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () { return ({
        customizations: {
            inCustomizerContext: true,
            settings: { theme: theme },
            scopedSettings: theme.components || {},
        },
    }); }, [theme]);
    if (draftState.theme.rtl !== parentTheme.rtl) {
        draftState.dir = draftState.theme.rtl ? 'rtl' : 'ltr';
    }
};


/***/ }),

/***/ "./lib/version.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../set-version/lib/index.js");
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.

Object(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@fluentui/react-theme-provider', '0.18.4');


/***/ }),

/***/ "./lib/withThemeProvider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withThemeProvider", function() { return withThemeProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./lib/ThemeProvider.js");



var withThemeProvider = function (Component) {
    return react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, ref) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { ref: ref })))); });
};


/***/ })

/******/ });
//# sourceMappingURL=react-theme-provider.js.map