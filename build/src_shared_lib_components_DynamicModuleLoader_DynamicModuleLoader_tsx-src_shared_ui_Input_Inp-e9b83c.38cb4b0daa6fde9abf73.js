"use strict";
(self["webpackChunkproductionproject"] = self["webpackChunkproductionproject"] || []).push([["src_shared_lib_components_DynamicModuleLoader_DynamicModuleLoader_tsx-src_shared_ui_Input_Inp-e9b83c"],{

/***/ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx":
/*!*******************************************************************************!*\
  !*** ./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicModuleLoader": () => (/* binding */ DynamicModuleLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();



var DynamicModuleLoader = function DynamicModuleLoader(props) {
  _s();
  var children = props.children,
    reducers = props.reducers,
    removeAfterUnmount = props.removeAfterUnmount;
  var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useStore)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    Object.entries(reducers).forEach(function (_a) {
      var name = _a[0],
        reducer = _a[1];
      store.reducerManager.add(name, reducer);
      dispatch({
        type: "@INIT ".concat(name, " reducer")
      });
    });
    return function () {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(function (_a) {
          var name = _a[0],
            reducer = _a[1];
          store.reducerManager.remove(name);
          dispatch({
            type: "@DESTROY ".concat(name, " reducer")
          });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: children
  }, void 0);
};
_s(DynamicModuleLoader, "as0TxbPzkR8qMmsNaB537Pq5S7M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useStore, react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch];
});
_c = DynamicModuleLoader;
var _c;
__webpack_require__.$Refresh$.register(_c, "DynamicModuleLoader");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/shared/ui/Input/Input.tsx":
/*!***************************************!*\
  !*** ./src/shared/ui/Input/Input.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input.module.scss */ "./src/shared/ui/Input/Input.module.scss");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var Input = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(_c2 = _s(function (props) {
  _s();
  var _a;
  var className = props.className,
    value = props.value,
    onChange = props.onChange,
    _b = props.type,
    type = _b === void 0 ? 'text' : _b,
    placeholder = props.placeholder,
    autofocus = props.autofocus,
    readonly = props.readonly,
    otherProps = __rest(props, ["className", "value", "onChange", "type", "placeholder", "autofocus", "readonly"]);
  var _c = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    isFocused = _c[0],
    setIsFocused = _c[1];
  var _d = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    caretPosition = _d[0],
    setCaretPosition = _d[1];
  // For autofocus
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var isCaretVisible = isFocused && !readonly;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var _a;
    if (autofocus) {
      setIsFocused(true);
      (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
    }
  }, [autofocus]);
  var onChangeHandler = function onChangeHandler(e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
    setCaretPosition(e.target.value.length);
  };
  var onBlur = function onBlur() {
    setIsFocused(false);
  };
  var onFocus = function onFocus() {
    setIsFocused(true);
  };
  var onSelect = function onSelect(e) {
    var _a;
    setCaretPosition(((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.selectionStart) || 0);
  };
  var mods = (_a = {}, _a[_Input_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].readonly] = readonly, _a);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Input_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].inputWrapper, {}, [className])
  }, {
    children: [placeholder && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
      className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].placeholder
    }, {
      children: "".concat(placeholder, ">")
    }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
      className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].caretWrapper
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", __assign({
        ref: ref,
        type: type,
        value: value,
        onChange: onChangeHandler,
        className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].input,
        onFocus: onFocus,
        onBlur: onBlur,
        onSelect: onSelect,
        readOnly: readonly
      }, otherProps), void 0), isCaretVisible && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].caret,
        style: {
          left: "".concat(caretPosition * 9, "px")
        }
      }, void 0)]
    }), void 0)]
  }), void 0);
}, "L3X2lDrCur8meWH2ld5A3Ro37jw=")), "L3X2lDrCur8meWH2ld5A3Ro37jw=");
_c3 = Input;
var _c2, _c3;
__webpack_require__.$Refresh$.register(_c2, "Input$memo");
__webpack_require__.$Refresh$.register(_c3, "Input");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/shared/ui/Text/Text.tsx":
/*!*************************************!*\
  !*** ./src/shared/ui/Text/Text.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "TextAlign": () => (/* binding */ TextAlign),
/* harmony export */   "TextTheme": () => (/* binding */ TextTheme)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _Text_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Text.module.scss */ "./src/shared/ui/Text/Text.module.scss");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }
    return t;
  };
  return __assign.apply(this, arguments);
};




var TextTheme;
(function (TextTheme) {
  TextTheme["PRIMARY"] = "primary";
  TextTheme["ERROR"] = "error";
})(TextTheme || (TextTheme = {}));
var TextAlign;
(function (TextAlign) {
  TextAlign["RIGHT"] = "right";
  TextAlign["LEFT"] = "left";
  TextAlign["CENTER"] = "center";
})(TextAlign || (TextAlign = {}));
var Text = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(_c2 = function _c2(props) {
  var _a;
  var className = props.className,
    text = props.text,
    title = props.title,
    _b = props.theme,
    theme = _b === void 0 ? TextTheme.PRIMARY : _b,
    _c = props.align,
    align = _c === void 0 ? TextAlign.LEFT : _c;
  var mods = (_a = {}, _a[_Text_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"][theme]] = true, _a[_Text_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"][align]] = true, _a);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__.classNames)(_Text_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Button, mods, [className])
  }, {
    children: [title && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({
      className: _Text_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].title
    }, {
      children: title
    }), void 0), text && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({
      className: _Text_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].text
    }, {
      children: text
    }), void 0)]
  }), void 0);
});
_c3 = Text;
var _c2, _c3;
__webpack_require__.$Refresh$.register(_c2, "Text$memo");
__webpack_require__.$Refresh$.register(_c3, "Text");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss ***!
  \********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".src-shared-ui-Input-Input-module__inputWrapper--yiPAS {\n  display: flex;\n}\n\n.src-shared-ui-Input-Input-module__placeholder--emAQQ {\n  margin-right: 5px;\n}\n\n.src-shared-ui-Input-Input-module__input--LVdIP {\n  background: transparent;\n  border: none;\n  outline: none;\n  width: 100%;\n  color: transparent;\n  text-shadow: 0 0 0 var(--primary-color);\n}\n.src-shared-ui-Input-Input-module__input--LVdIP:focus {\n  outline: none;\n}\n\n.src-shared-ui-Input-Input-module__caretWrapper--y1GiF {\n  flex-grow: 1;\n  position: relative;\n}\n\n.src-shared-ui-Input-Input-module__caret--lqMFG {\n  position: absolute;\n  height: 3px;\n  width: 9px;\n  background: var(--primary-color);\n  bottom: 0;\n  left: 0;\n  animation: src-shared-ui-Input-Input-module__blink--M7n8f 0.8s forwards infinite;\n}\n\n.src-shared-ui-Input-Input-module__readonly--fTN1P {\n  opacity: 0.7;\n}\n\n@keyframes src-shared-ui-Input-Input-module__blink--M7n8f {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.01;\n  }\n  100% {\n    opacity: 1;\n  }\n}", "",{"version":3,"sources":["webpack://./src/shared/ui/Input/Input.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ;;AAEA;EACI,iBAAA;AACJ;;AAEA;EACI,uBAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;EACA,kBAAA;EACA,uCAAA;AACJ;AACI;EACI,aAAA;AACR;;AAGA;EACI,YAAA;EACA,kBAAA;AAAJ;;AAGA;EACI,kBAAA;EACA,WAAA;EACA,UAAA;EACA,gCAAA;EACA,SAAA;EACA,OAAA;EACA,gFAAA;AAAJ;;AAGA;EACI,YAAA;AAAJ;;AAGA;EACI;IACI,UAAA;EAAN;EAGE;IACI,aAAA;EADN;EAIE;IACI,UAAA;EAFN;AACF","sourcesContent":[".inputWrapper {\n    display: flex;\n}\n\n.placeholder {\n    margin-right: 5px;\n}\n\n.input {\n    background: transparent;\n    border: none;\n    outline: none;\n    width: 100%;\n    color: transparent;\n    text-shadow: 0 0 0 var(--primary-color);\n\n    &:focus {\n        outline: none;\n    }\n}\n\n.caretWrapper {\n    flex-grow: 1;\n    position: relative;\n}\n\n.caret {\n    position: absolute;\n    height: 3px;\n    width: 9px;\n    background: var(--primary-color);\n    bottom: 0;\n    left: 0;\n    animation: blink 0.8s forwards infinite;\n}\n\n.readonly {\n    opacity: 0.7;\n}\n\n@keyframes blink {\n    0% {\n        opacity: 0;\n    }\n\n    50% {\n        opacity: 0.01;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"inputWrapper": "src-shared-ui-Input-Input-module__inputWrapper--yiPAS",
	"placeholder": "src-shared-ui-Input-Input-module__placeholder--emAQQ",
	"input": "src-shared-ui-Input-Input-module__input--LVdIP",
	"caretWrapper": "src-shared-ui-Input-Input-module__caretWrapper--y1GiF",
	"caret": "src-shared-ui-Input-Input-module__caret--lqMFG",
	"blink": "src-shared-ui-Input-Input-module__blink--M7n8f",
	"readonly": "src-shared-ui-Input-Input-module__readonly--fTN1P"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Text/Text.module.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Text/Text.module.scss ***!
  \******************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".src-shared-ui-Text-Text-module__title--ikI7V {\n  font: var(--font-l);\n  color: var(--primary-color);\n}\n\n.src-shared-ui-Text-Text-module__text--uNJee {\n  font: var(--font-m);\n  color: var(--secondary-color);\n}\n\n.src-shared-ui-Text-Text-module__error--F9oLX .src-shared-ui-Text-Text-module__title--ikI7V {\n  color: var(--red-light);\n}\n.src-shared-ui-Text-Text-module__error--F9oLX .src-shared-ui-Text-Text-module__text--uNJee {\n  color: var(--red-dark);\n}\n\n.src-shared-ui-Text-Text-module__left--dBqPI {\n  text-align: left;\n}\n\n.src-shared-ui-Text-Text-module__right--j4UBr {\n  text-align: right;\n}\n\n.src-shared-ui-Text-Text-module__center--iJw6m {\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/shared/ui/Text/Text.module.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,2BAAA;AACJ;;AAEA;EACI,mBAAA;EACA,6BAAA;AACJ;;AAGI;EACI,uBAAA;AAAR;AAGI;EACI,sBAAA;AADR;;AAKA;EACI,gBAAA;AAFJ;;AAKA;EACI,iBAAA;AAFJ;;AAKA;EACI,kBAAA;AAFJ","sourcesContent":[".title {\n    font: var(--font-l);\n    color: var(--primary-color);\n}\n\n.text {\n    font: var(--font-m);\n    color: var(--secondary-color);\n}\n\n.error {\n    .title {\n        color: var(--red-light);\n    }\n\n    .text {\n        color: var(--red-dark);\n    }\n}\n\n.left {\n    text-align: left;\n}\n\n.right {\n    text-align: right;\n}\n\n.center {\n    text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"title": "src-shared-ui-Text-Text-module__title--ikI7V",
	"text": "src-shared-ui-Text-Text-module__text--uNJee",
	"error": "src-shared-ui-Text-Text-module__error--F9oLX",
	"left": "src-shared-ui-Text-Text-module__left--dBqPI",
	"right": "src-shared-ui-Text-Text-module__right--j4UBr",
	"center": "src-shared-ui-Text-Text-module__center--iJw6m"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/shared/ui/Input/Input.module.scss":
/*!***********************************************!*\
  !*** ./src/shared/ui/Input/Input.module.scss ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Input.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Input.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Input.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/ui/Text/Text.module.scss":
/*!*********************************************!*\
  !*** ./src/shared/ui/Text/Text.module.scss ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Text.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Text/Text.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Text.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Text/Text.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Text.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Text/Text.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Text_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts":
/*!***************************************************************!*\
  !*** ./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAppDispatch": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


var useAppDispatch = function () { return (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(); };


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NoYXJlZF9saWJfY29tcG9uZW50c19EeW5hbWljTW9kdWxlTG9hZGVyX0R5bmFtaWNNb2R1bGVMb2FkZXJfdHN4LXNyY19zaGFyZWRfdWlfSW5wdXRfSW5wLWU5YjgzYy4zOGNiNGIwZGFhNmZkZTlhYmY3My5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUU7QUFDckM7QUFDa0I7QUFDN0MsSUFBSU8sbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQixDQUFhQyxLQUFLLEVBQUU7RUFBQTtFQUM5QyxJQUFJQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0MsUUFBUTtJQUFFQyxRQUFRLEdBQUdGLEtBQUssQ0FBQ0UsUUFBUTtJQUFFQyxrQkFBa0IsR0FBR0gsS0FBSyxDQUFDRyxrQkFBa0I7RUFDdkcsSUFBSUMsS0FBSyxHQUFHTixxREFBUSxFQUFFO0VBQ3RCLElBQUlPLFFBQVEsR0FBR1Isd0RBQVcsRUFBRTtFQUM1QkQsZ0RBQVMsQ0FBQyxZQUFZO0lBQ2xCVSxNQUFNLENBQUNDLE9BQU8sQ0FBQ0wsUUFBUSxDQUFDLENBQUNNLE9BQU8sQ0FBQyxVQUFVQyxFQUFFLEVBQUU7TUFDM0MsSUFBSUMsSUFBSSxHQUFHRCxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQUVFLE9BQU8sR0FBR0YsRUFBRSxDQUFDLENBQUMsQ0FBQztNQUNqQ0wsS0FBSyxDQUFDUSxjQUFjLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxFQUFFQyxPQUFPLENBQUM7TUFDdkNOLFFBQVEsQ0FBQztRQUFFUyxJQUFJLEVBQUUsUUFBUSxDQUFDQyxNQUFNLENBQUNMLElBQUksRUFBRSxVQUFVO01BQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQztJQUNGLE9BQU8sWUFBWTtNQUNmLElBQUlQLGtCQUFrQixFQUFFO1FBQ3BCRyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0wsUUFBUSxDQUFDLENBQUNNLE9BQU8sQ0FBQyxVQUFVQyxFQUFFLEVBQUU7VUFDM0MsSUFBSUMsSUFBSSxHQUFH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LFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRm5DO0FBQ25DLDBDQUEwQyx3REFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2R1Y3Rpb25wcm9qZWN0Ly4vc3JjL3NoYXJlZC9saWIvY29tcG9uZW50cy9EeW5hbWljTW9kdWxlTG9hZGVyL0R5bmFtaWNNb2R1bGVMb2FkZXIudHN4Iiwid2VicGFjazovL3Byb2R1Y3Rpb25wcm9qZWN0Ly4vc3JjL3NoYXJlZC91aS9JbnB1dC9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vcHJvZHVjdGlvbnByb2plY3QvLi9zcmMvc2hhcmVkL3VpL1RleHQvVGV4dC50c3giLCJ3ZWJwYWNrOi8vcHJvZHVjdGlvbnByb2plY3QvLi9zcmMvc2hhcmVkL3VpL0lucHV0L0lucHV0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL3Byb2R1Y3Rpb25wcm9qZWN0Ly4vc3JjL3NoYXJlZC91aS9UZXh0L1RleHQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcHJvZHVjdGlvbnByb2plY3QvLi9zcmMvc2hhcmVkL3VpL0lucHV0L0lucHV0Lm1vZHVsZS5zY3NzPzRlMjEiLCJ3ZWJwYWNrOi8vcHJvZHVjdGlvbnByb2plY3QvLi9zcmMvc2hhcmVkL3VpL1RleHQvVGV4dC5tb2R1bGUuc2Nzcz85OGI1Iiwid2VicGFjazovL3Byb2R1Y3Rpb25wcm9qZWN0Ly4vc3JjL3NoYXJlZC9saWIvaG9va3MvdXNlQXBwRGlzcGF0Y2gvdXNlQXBwRGlzcGF0Y2gudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVN0b3JlIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuZXhwb3J0IHZhciBEeW5hbWljTW9kdWxlTG9hZGVyID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sIHJlZHVjZXJzID0gcHJvcHMucmVkdWNlcnMsIHJlbW92ZUFmdGVyVW5tb3VudCA9IHByb3BzLnJlbW92ZUFmdGVyVW5tb3VudDtcbiAgICB2YXIgc3RvcmUgPSB1c2VTdG9yZSgpO1xuICAgIHZhciBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMocmVkdWNlcnMpLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9hWzBdLCByZWR1Y2VyID0gX2FbMV07XG4gICAgICAgICAgICBzdG9yZS5yZWR1Y2VyTWFuYWdlci5hZGQobmFtZSwgcmVkdWNlcik7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiQElOSVQgXCIuY29uY2F0KG5hbWUsIFwiIHJlZHVjZXJcIikgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHJlbW92ZUFmdGVyVW5tb3VudCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9hWzBdLCByZWR1Y2VyID0gX2FbMV07XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnJlZHVjZXJNYW5hZ2VyLnJlbW92ZShuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkBERVNUUk9ZIFwiLmNvbmNhdChuYW1lLCBcIiByZWR1Y2VyXCIpIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgfSwgW10pO1xuICAgIHJldHVybiAoX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IGNoaWxkcmVuIH0sIHZvaWQgMCkpO1xufTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSwgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbHMgZnJvbSAnLi9JbnB1dC5tb2R1bGUuc2Nzcyc7XG5leHBvcnQgdmFyIElucHV0ID0gbWVtbyhmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgX2E7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSwgdmFsdWUgPSBwcm9wcy52YWx1ZSwgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSwgX2IgPSBwcm9wcy50eXBlLCB0eXBlID0gX2IgPT09IHZvaWQgMCA/ICd0ZXh0JyA6IF9iLCBwbGFjZWhvbGRlciA9IHByb3BzLnBsYWNlaG9sZGVyLCBhdXRvZm9jdXMgPSBwcm9wcy5hdXRvZm9jdXMsIHJlYWRvbmx5ID0gcHJvcHMucmVhZG9ubHksIG90aGVyUHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcImNsYXNzTmFtZVwiLCBcInZhbHVlXCIsIFwib25DaGFuZ2VcIiwgXCJ0eXBlXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJhdXRvZm9jdXNcIiwgXCJyZWFkb25seVwiXSk7XG4gICAgdmFyIF9jID0gdXNlU3RhdGUoZmFsc2UpLCBpc0ZvY3VzZWQgPSBfY1swXSwgc2V0SXNGb2N1c2VkID0gX2NbMV07XG4gICAgdmFyIF9kID0gdXNlU3RhdGUoMCksIGNhcmV0UG9zaXRpb24gPSBfZFswXSwgc2V0Q2FyZXRQb3NpdGlvbiA9IF9kWzFdO1xuICAgIC8vIEZvciBhdXRvZm9jdXNcbiAgICB2YXIgcmVmID0gdXNlUmVmKG51bGwpO1xuICAgIHZhciBpc0NhcmV0VmlzaWJsZSA9IGlzRm9jdXNlZCAmJiAhcmVhZG9ubHk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoYXV0b2ZvY3VzKSB7XG4gICAgICAgICAgICBzZXRJc0ZvY3VzZWQodHJ1ZSk7XG4gICAgICAgICAgICAoX2EgPSByZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9LCBbYXV0b2ZvY3VzXSk7XG4gICAgdmFyIG9uQ2hhbmdlSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIG9uQ2hhbmdlID09PSBudWxsIHx8IG9uQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHNldENhcmV0UG9zaXRpb24oZS50YXJnZXQudmFsdWUubGVuZ3RoKTtcbiAgICB9O1xuICAgIHZhciBvbkJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldElzRm9jdXNlZChmYWxzZSk7XG4gICAgfTtcbiAgICB2YXIgb25Gb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0SXNGb2N1c2VkKHRydWUpO1xuICAgIH07XG4gICAgdmFyIG9uU2VsZWN0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzZXRDYXJldFBvc2l0aW9uKCgoX2EgPSBlID09PSBudWxsIHx8IGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGUudGFyZ2V0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2VsZWN0aW9uU3RhcnQpIHx8IDApO1xuICAgIH07XG4gICAgdmFyIG1vZHMgPSAoX2EgPSB7fSxcbiAgICAgICAgX2FbY2xzLnJlYWRvbmx5XSA9IHJlYWRvbmx5LFxuICAgICAgICBfYSk7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuaW5wdXRXcmFwcGVyLCB7fSwgW2NsYXNzTmFtZV0pIH0sIHsgY2hpbGRyZW46IFtwbGFjZWhvbGRlciAmJiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xzLnBsYWNlaG9sZGVyIH0sIHsgY2hpbGRyZW46IFwiXCIuY29uY2F0KHBsYWNlaG9sZGVyLCBcIj5cIikgfSksIHZvaWQgMCkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xzLmNhcmV0V3JhcHBlciB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlucHV0XCIsIF9fYXNzaWduKHsgcmVmOiByZWYsIHR5cGU6IHR5cGUsIHZhbHVlOiB2YWx1ZSwgb25DaGFuZ2U6IG9uQ2hhbmdlSGFuZGxlciwgY2xhc3NOYW1lOiBjbHMuaW5wdXQsIG9uRm9jdXM6IG9uRm9jdXMsIG9uQmx1cjogb25CbHVyLCBvblNlbGVjdDogb25TZWxlY3QsIHJlYWRPbmx5OiByZWFkb25seSB9LCBvdGhlclByb3BzKSwgdm9pZCAwKSwgaXNDYXJldFZpc2libGUgJiYgKF9qc3goXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBjbHMuY2FyZXQsIHN0eWxlOiB7IGxlZnQ6IFwiXCIuY29uY2F0KGNhcmV0UG9zaXRpb24gKiA5LCBcInB4XCIpIH0gfSwgdm9pZCAwKSldIH0pLCB2b2lkIDApXSB9KSwgdm9pZCAwKSk7XG59KTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vVGV4dC5tb2R1bGUuc2Nzcyc7XG5leHBvcnQgdmFyIFRleHRUaGVtZTtcbihmdW5jdGlvbiAoVGV4dFRoZW1lKSB7XG4gICAgVGV4dFRoZW1lW1wiUFJJTUFSWVwiXSA9IFwicHJpbWFyeVwiO1xuICAgIFRleHRUaGVtZVtcIkVSUk9SXCJdID0gXCJlcnJvclwiO1xufSkoVGV4dFRoZW1lIHx8IChUZXh0VGhlbWUgPSB7fSkpO1xuZXhwb3J0IHZhciBUZXh0QWxpZ247XG4oZnVuY3Rpb24gKFRleHRBbGlnbikge1xuICAgIFRleHRBbGlnbltcIlJJR0hUXCJdID0gXCJyaWdodFwiO1xuICAgIFRleHRBbGlnbltcIkxFRlRcIl0gPSBcImxlZnRcIjtcbiAgICBUZXh0QWxpZ25bXCJDRU5URVJcIl0gPSBcImNlbnRlclwiO1xufSkoVGV4dEFsaWduIHx8IChUZXh0QWxpZ24gPSB7fSkpO1xuZXhwb3J0IHZhciBUZXh0ID0gbWVtbyhmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgX2E7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSwgdGV4dCA9IHByb3BzLnRleHQsIHRpdGxlID0gcHJvcHMudGl0bGUsIF9iID0gcHJvcHMudGhlbWUsIHRoZW1lID0gX2IgPT09IHZvaWQgMCA/IFRleHRUaGVtZS5QUklNQVJZIDogX2IsIF9jID0gcHJvcHMuYWxpZ24sIGFsaWduID0gX2MgPT09IHZvaWQgMCA/IFRleHRBbGlnbi5MRUZUIDogX2M7XG4gICAgdmFyIG1vZHMgPSAoX2EgPSB7fSxcbiAgICAgICAgX2FbY2xzW3RoZW1lXV0gPSB0cnVlLFxuICAgICAgICBfYVtjbHNbYWxpZ25dXSA9IHRydWUsXG4gICAgICAgIF9hKTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5CdXR0b24sIG1vZHMsIFtjbGFzc05hbWVdKSB9LCB7IGNoaWxkcmVuOiBbdGl0bGUgJiYgX2pzeChcInBcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNscy50aXRsZSB9LCB7IGNoaWxkcmVuOiB0aXRsZSB9KSwgdm9pZCAwKSwgdGV4dCAmJiBfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xzLnRleHQgfSwgeyBjaGlsZHJlbjogdGV4dCB9KSwgdm9pZCAwKV0gfSksIHZvaWQgMCkpO1xufSk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9faW5wdXRXcmFwcGVyLS15aVBBUyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX3BsYWNlaG9sZGVyLS1lbUFRUSB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLnNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19pbnB1dC0tTFZkSVAge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDAgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9faW5wdXQtLUxWZElQOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fY2FyZXRXcmFwcGVyLS15MUdpRiB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fY2FyZXQtLWxxTUZHIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogM3B4O1xcbiAgd2lkdGg6IDlweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGFuaW1hdGlvbjogc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2JsaW5rLS1NN244ZiAwLjhzIGZvcndhcmRzIGluZmluaXRlO1xcbn1cXG5cXG4uc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX3JlYWRvbmx5LS1mVE4xUCB7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbkBrZXlmcmFtZXMgc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2JsaW5rLS1NN244ZiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAwLjAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zaGFyZWQvdWkvSW5wdXQvSW5wdXQubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7QUFDUjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxnRkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUdBO0VBQ0k7SUFDSSxVQUFBO0VBQU47RUFHRTtJQUNJLGFBQUE7RUFETjtFQUlFO0lBQ0ksVUFBQTtFQUZOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmlucHV0V3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wbGFjZWhvbGRlciB7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDAgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuXFxuICAgICY6Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG4uY2FyZXRXcmFwcGVyIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jYXJldCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIHdpZHRoOiA5cHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGFuaW1hdGlvbjogYmxpbmsgMC44cyBmb3J3YXJkcyBpbmZpbml0ZTtcXG59XFxuXFxuLnJlYWRvbmx5IHtcXG4gICAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICA1MCUge1xcbiAgICAgICAgb3BhY2l0eTogMC4wMTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaW5wdXRXcmFwcGVyXCI6IFwic3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2lucHV0V3JhcHBlci0teWlQQVNcIixcblx0XCJwbGFjZWhvbGRlclwiOiBcInNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19wbGFjZWhvbGRlci0tZW1BUVFcIixcblx0XCJpbnB1dFwiOiBcInNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19pbnB1dC0tTFZkSVBcIixcblx0XCJjYXJldFdyYXBwZXJcIjogXCJzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fY2FyZXRXcmFwcGVyLS15MUdpRlwiLFxuXHRcImNhcmV0XCI6IFwic3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2NhcmV0LS1scU1GR1wiLFxuXHRcImJsaW5rXCI6IFwic3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2JsaW5rLS1NN244ZlwiLFxuXHRcInJlYWRvbmx5XCI6IFwic3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX3JlYWRvbmx5LS1mVE4xUFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zcmMtc2hhcmVkLXVpLVRleHQtVGV4dC1tb2R1bGVfX3RpdGxlLS1pa0k3ViB7XFxuICBmb250OiB2YXIoLS1mb250LWwpO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uc3JjLXNoYXJlZC11aS1UZXh0LVRleHQtbW9kdWxlX190ZXh0LS11TkplZSB7XFxuICBmb250OiB2YXIoLS1mb250LW0pO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5zcmMtc2hhcmVkLXVpLVRleHQtVGV4dC1tb2R1bGVfX2Vycm9yLS1GOW9MWCAuc3JjLXNoYXJlZC11aS1UZXh0LVRleHQtbW9kdWxlX190aXRsZS0taWtJN1Yge1xcbiAgY29sb3I6IHZhcigtLXJlZC1saWdodCk7XFxufVxcbi5zcmMtc2hhcmVkLXVpLVRleHQtVGV4dC1tb2R1bGVfX2Vycm9yLS1GOW9MWCAuc3JjLXNoYXJlZC11aS1UZXh0LVRleHQtbW9kdWxlX190ZXh0LS11TkplZSB7XFxuICBjb2xvcjogdmFyKC0tcmVkLWRhcmspO1xcbn1cXG5cXG4uc3JjLXNoYXJlZC11aS1UZXh0LVRleHQtbW9kdWxlX19sZWZ0LS1kQnFQSSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uc3JjLXNoYXJlZC11aS1UZXh0LVRleHQtbW9kdWxlX19yaWdodC0tajRVQnIge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5zcmMtc2hhcmVkLXVpLVRleHQtVGV4dC1tb2R1bGVfX2NlbnRlci0taUp3Nm0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2hhcmVkL3VpL1RleHQvVGV4dC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFHSTtFQUNJLHVCQUFBO0FBQVI7QUFHSTtFQUNJLHNCQUFBO0FBRFI7O0FBS0E7RUFDSSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksaUJBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0FBRkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRpdGxlIHtcXG4gICAgZm9udDogdmFyKC0tZm9udC1sKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIGZvbnQ6IHZhcigtLWZvbnQtbSk7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICAudGl0bGUge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXJlZC1saWdodCk7XFxuICAgIH1cXG5cXG4gICAgLnRleHQge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXJlZC1kYXJrKTtcXG4gICAgfVxcbn1cXG5cXG4ubGVmdCB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5yaWdodCB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ0aXRsZVwiOiBcInNyYy1zaGFyZWQtdWktVGV4dC1UZXh0LW1vZHVsZV9fdGl0bGUtLWlrSTdWXCIsXG5cdFwidGV4dFwiOiBcInNyYy1zaGFyZWQtdWktVGV4dC1UZXh0LW1vZHVsZV9fdGV4dC0tdU5KZWVcIixcblx0XCJlcnJvclwiOiBcInNyYy1zaGFyZWQtdWktVGV4dC1UZXh0LW1vZHVsZV9fZXJyb3ItLUY5b0xYXCIsXG5cdFwibGVmdFwiOiBcInNyYy1zaGFyZWQtdWktVGV4dC1UZXh0LW1vZHVsZV9fbGVmdC0tZEJxUElcIixcblx0XCJyaWdodFwiOiBcInNyYy1zaGFyZWQtdWktVGV4dC1UZXh0LW1vZHVsZV9fcmlnaHQtLWo0VUJyXCIsXG5cdFwiY2VudGVyXCI6IFwic3JjLXNoYXJlZC11aS1UZXh0LVRleHQtbW9kdWxlX19jZW50ZXItLWlKdzZtXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0lucHV0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSW5wdXQubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSW5wdXQubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UZXh0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVGV4dC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UZXh0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5leHBvcnQgdmFyIHVzZUFwcERpc3BhdGNoID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdXNlRGlzcGF0Y2goKTsgfTtcbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsIl9GcmFnbWVudCIsImpzeCIsIl9qc3giLCJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsInVzZVN0b3JlIiwiRHluYW1pY01vZHVsZUxvYWRlciIsInByb3BzIiwiY2hpbGRyZW4iLCJyZWR1Y2VycyIsInJlbW92ZUFmdGVyVW5tb3VudCIsInN0b3JlIiwiZGlzcGF0Y2giLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsIl9hIiwibmFtZSIsInJlZHVjZXIiLCJyZWR1Y2VyTWFuYWdlciIsImFkZCIsInR5cGUiLCJjb25jYXQiLCJyZW1vdmUiLCJfX2Fzc2lnbiIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJfX3Jlc3QiLCJlIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwianN4cyIsIl9qc3hzIiwiY2xhc3NOYW1lcyIsInVzZVJlZiIsInVzZVN0YXRlIiwibWVtbyIsImNscyIsIklucHV0IiwiY2xhc3NOYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsIl9iIiwicGxhY2Vob2xkZXIiLCJhdXRvZm9jdXMiLCJyZWFkb25seSIsIm90aGVyUHJvcHMiLCJfYyIsImlzRm9jdXNlZCIsInNldElzRm9jdXNlZCIsIl9kIiwiY2FyZXRQb3NpdGlvbiIsInNldENhcmV0UG9zaXRpb24iLCJyZWYiLCJpc0NhcmV0VmlzaWJsZSIsImN1cnJlbnQiLCJmb2N1cyIsIm9uQ2hhbmdlSGFuZGxlciIsInRhcmdldCIsIm9uQmx1ciIsIm9uRm9jdXMiLCJvblNlbGVjdCIsInNlbGVjdGlvblN0YXJ0IiwibW9kcyIsImlucHV0V3JhcHBlciIsImNhcmV0V3JhcHBlciIsImlucHV0IiwicmVhZE9ubHkiLCJjYXJldCIsInN0eWxlIiwibGVmdCIsIlRleHRUaGVtZSIsIlRleHRBbGlnbiIsIlRleHQiLCJ0ZXh0IiwidGl0bGUiLCJ0aGVtZSIsIlBSSU1BUlkiLCJhbGlnbiIsIkxFRlQiLCJCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9