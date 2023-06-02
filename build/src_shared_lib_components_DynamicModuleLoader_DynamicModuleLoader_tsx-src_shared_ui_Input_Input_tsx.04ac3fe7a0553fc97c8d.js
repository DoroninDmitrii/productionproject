"use strict";
(self["webpackChunkproductionproject"] = self["webpackChunkproductionproject"] || []).push([["src_shared_lib_components_DynamicModuleLoader_DynamicModuleLoader_tsx-src_shared_ui_Input_Input_tsx"],{

/***/ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx":
/*!*******************************************************************************!*\
  !*** ./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx ***!
  \*******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicModuleLoader": function() { return /* binding */ DynamicModuleLoader; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();



// for many reducers


const DynamicModuleLoader = props => {
  _s();
  const {
    children,
    reducers,
    removeAfterUnmount
  } = props;
  const store = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useStore)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();
    Object.entries(reducers).forEach(_ref => {
      let [name, reducer] = _ref;
      const mounted = mountedReducers[name];
      if (!mounted) {
        store.reducerManager.add(name, reducer);
        dispatch({
          type: `@INIT ${name} reducer`
        });
      }
    });
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(_ref2 => {
          let [name, reducer] = _ref2;
          store.reducerManager.remove(name);
          dispatch({
            type: `@DESTROY ${name} reducer`
          });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: children
  });
};
_s(DynamicModuleLoader, "j6y1L3V28Lz+G4YWjxEKJZPXaDs=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__.useStore, react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch];
});
_c = DynamicModuleLoader;
var _c;
__webpack_require__.$Refresh$.register(_c, "DynamicModuleLoader");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": function() { return /* binding */ Input; }
/* harmony export */ });
/* harmony import */ var _shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input.module.scss */ "./src/shared/ui/Input/Input.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();





const Input = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(_c = _s(props => {
  _s();
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    ...otherProps
  } = props;
  const [isFocused, setIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [caretPosition, setCaretPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  // For autofocus
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const isCaretVisible = isFocused && !readonly;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);
  const onChangeHandler = e => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };
  const onBlur = () => {
    setIsFocused(false);
  };
  const onFocus = () => {
    setIsFocused(true);
  };
  const onSelect = e => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };
  const mods = {
    [_Input_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].readonly]: readonly
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: (0,_shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_0__.classNames)(_Input_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].inputWrapper, {}, [className]),
    children: [placeholder && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].placeholder,
      children: `${placeholder}>`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].caretWrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
        ref: ref,
        type: type,
        value: value,
        onChange: onChangeHandler,
        className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
        onFocus: onFocus,
        onBlur: onBlur,
        onSelect: onSelect,
        readOnly: readonly,
        ...otherProps
      }), isCaretVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].caret,
        style: {
          left: `${caretPosition * 9}px`
        }
      })]
    })]
  });
}, "q0J5AdyKT7Yj5u15Hx0jH58lNxc=")), "q0J5AdyKT7Yj5u15Hx0jH58lNxc=");
_c2 = Input;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "Input$memo");
__webpack_require__.$Refresh$.register(_c2, "Input");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/shared/ui/Input/Input.module.scss":
/*!***********************************************!*\
  !*** ./src/shared/ui/Input/Input.module.scss ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Input.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NoYXJlZF9saWJfY29tcG9uZW50c19EeW5hbWljTW9kdWxlTG9hZGVyX0R5bmFtaWNNb2R1bGVMb2FkZXJfdHN4LXNyY19zaGFyZWRfdWlfSW5wdXRfSW5wdXRfdHN4LjA0YWMzZmU3YTA1NTNmYzk3YzhkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDRzs7QUFJbkQ7QUFBQTtBQUFBO0FBYU8sTUFBTU8sbUJBQWlELEdBQUlDLEtBQStCLElBQUs7RUFBQUMsRUFBQTtFQUNwRyxNQUFNO0lBQ0pDLFFBQVE7SUFDUkMsUUFBUTtJQUNSQztFQUNGLENBQUMsR0FBR0osS0FBSztFQUVULE1BQU1LLEtBQUssR0FBR1gscURBQVEsQ0FBQyxDQUEwQjtFQUNqRCxNQUFNWSxRQUFRLEdBQUdiLHdEQUFXLENBQUMsQ0FBQztFQUU5QkQsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsTUFBTWUsZUFBZSxHQUFHRixLQUFLLENBQUNHLGNBQWMsQ0FBQ0Msa0JBQWtCLENBQUMsQ0FBQztJQUVqRUMsTUFBTSxDQUFDQyxPQUFPLENBQUNSLFFBQVEsQ0FBQyxDQUFDUyxPQUFPLENBQUNDLElBQUEsSUFBcUI7TUFBQSxJQUFwQixDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFBRixJQUFBO01BQy9DLE1BQU1HLE9BQU8sR0FBR1QsZUFBZSxDQUFDTyxJQUFJLENBQW1CO01BQ3ZELElBQUksQ0FBQ0UsT0FBTyxFQUFFO1FBQ1pYLEtBQUssQ0FBQ0csY0FBYyxDQUFDUyxHQUFHLENBQUNILElBQUksRUFBb0JDLE9BQU8sQ0FBQztRQUN6RFQsUUFBUSxDQUFDO1VBQUVZLElBQUksRUFBRyxTQUFRSixJQUFLO1FBQVUsQ0FBQyxDQUFDO01BQzdDO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsT0FBTyxNQUFNO01BQ1gsSUFBSVYsa0JBQWtCLEVBQUU7UUFDdEJNLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDUixRQUFRLENBQUMsQ0FBQ1MsT0FBTyxDQUFDTyxL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LE9BQU8sa0tBQWMsSUFBSSxVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLGtLQUFjO0FBQ3ZDLG9DQUFvQyxnSkFBVyxHQUFHLGtLQUFjOztBQUVoRSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLDRTQUFvSjtBQUMxSixNQUFNO0FBQUE7QUFDTixzREFBc0QsZ0pBQVcsR0FBRyxrS0FBYztBQUNsRixnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMsZ0pBQVcsR0FBRyxrS0FBYzs7QUFFdEUscUJBQXFCLDJKQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHbUs7QUFDbkssT0FBTywrREFBZSwySkFBTyxJQUFJLGtLQUFjLEdBQUcsa0tBQWMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdGlvbnByb2plY3QvLi9zcmMvc2hhcmVkL2xpYi9jb21wb25lbnRzL0R5bmFtaWNNb2R1bGVMb2FkZXIvRHluYW1pY01vZHVsZUxvYWRlci50c3giLCJ3ZWJwYWNrOi8vcHJvZHVjdGlvbnByb2plY3QvLi9zcmMvc2hhcmVkL3VpL0lucHV0L0lucHV0LnRzeCIsIndlYnBhY2s6Ly9wcm9kdWN0aW9ucHJvamVjdC8uL3NyYy9zaGFyZWQvdWkvSW5wdXQvSW5wdXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcHJvZHVjdGlvbnByb2plY3QvLi9zcmMvc2hhcmVkL3VpL0lucHV0L0lucHV0Lm1vZHVsZS5zY3NzPzRlMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU3RvcmUgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IFJlZHV4U3RvcmVXaXRoTWFuYWdlciwgU3RhdGVTY2hlbWFLZXkgfSBmcm9tICdAL2FwcC9wcm92aWRlcnMvU3RvcmVQcm92aWRlci9jb25maWcvU3RhdGVTY2hlbWEnXG5pbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcblxuLy8gZm9yIG1hbnkgcmVkdWNlcnNcbmV4cG9ydCB0eXBlIFJlZHVjZXJMaXN0ID0ge1xuICBbbmFtZSBpbiBTdGF0ZVNjaGVtYUtleV0/OiBSZWR1Y2VyXG59XG5cbnR5cGUgUmVkdWNlckxpc3RFbnRyeSA9IFtTdGF0ZVNjaGVtYUtleSwgUmVkdWNlcl1cblxuaW50ZXJmYWNlIER5bmFtaWNNb2R1bGVMb2FkZXJQcm9wcyB7XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlXG4gIHJlZHVjZXJzOiBSZWR1Y2VyTGlzdFxuICByZW1vdmVBZnRlclVubW91bnQ/OiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBEeW5hbWljTW9kdWxlTG9hZGVyOiBGQzxEeW5hbWljTW9kdWxlTG9hZGVyUHJvcHM+ID0gKHByb3BzOiBEeW5hbWljTW9kdWxlTG9hZGVyUHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIHJlZHVjZXJzLFxuICAgIHJlbW92ZUFmdGVyVW5tb3VudFxuICB9ID0gcHJvcHNcblxuICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKCkgYXMgUmVkdXhTdG9yZVdpdGhNYW5hZ2VyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbW91bnRlZFJlZHVjZXJzID0gc3RvcmUucmVkdWNlck1hbmFnZXIuZ2V0TW91bnRlZFJlZHVjZXJzKClcblxuICAgIE9iamVjdC5lbnRyaWVzKHJlZHVjZXJzKS5mb3JFYWNoKChbbmFtZSwgcmVkdWNlcl0pID0+IHtcbiAgICAgIGNvbnN0IG1vdW50ZWQgPSBtb3VudGVkUmVkdWNlcnNbbmFtZSBhcyBTdGF0ZVNjaGVtYUtleV1cbiAgICAgIGlmICghbW91bnRlZCkge1xuICAgICAgICBzdG9yZS5yZWR1Y2VyTWFuYWdlci5hZGQobmFtZSBhcyBTdGF0ZVNjaGVtYUtleSwgcmVkdWNlcilcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBgQElOSVQgJHtuYW1lfSByZWR1Y2VyYCB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHJlbW92ZUFmdGVyVW5tb3VudCkge1xuICAgICAgICBPYmplY3QuZW50cmllcyhyZWR1Y2VycykuZm9yRWFjaCgoW25hbWUsIHJlZHVjZXJdKSA9PiB7XG4gICAgICAgICAgc3RvcmUucmVkdWNlck1hbmFnZXIucmVtb3ZlKG5hbWUgYXMgU3RhdGVTY2hlbWFLZXkpXG4gICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBgQERFU1RST1kgJHtuYW1lfSByZWR1Y2VyYCB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8Lz5cbiAgKVxufVxuIiwiaW1wb3J0IHsgY2xhc3NOYW1lcywgTW9kcyB9IGZyb20gJ0Avc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnXG5pbXBvcnQgUmVhY3QsIHsgSW5wdXRIVE1MQXR0cmlidXRlcywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xzIGZyb20gJy4vSW5wdXQubW9kdWxlLnNjc3MnXG5cbnR5cGUgSFRNTElucHV0UHJvcHMgPSBPbWl0PElucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4sICd2YWx1ZScgfCAnb25DaGFuZ2UnIHwgJ3JlYWRvbmx5Jz5cblxuaW50ZXJmYWNlIElucHV0UHJvcHMgZXh0ZW5kcyBIVE1MSW5wdXRQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICB2YWx1ZT86IHN0cmluZyB8IG51bWJlclxuICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIGF1dG9mb2N1cz86IGJvb2xlYW5cbiAgcmVhZG9ubHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IG1lbW8oKHByb3BzOiBJbnB1dFByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc05hbWUsXG4gICAgdmFsdWUsXG4gICAgb25DaGFuZ2UsXG4gICAgdHlwZSA9ICd0ZXh0JyxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBhdXRvZm9jdXMsXG4gICAgcmVhZG9ubHksXG4gICAgLi4ub3RoZXJQcm9wc1xuICB9ID0gcHJvcHNcblxuICBjb25zdCBbaXNGb2N1c2VkLCBzZXRJc0ZvY3VzZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjYXJldFBvc2l0aW9uLCBzZXRDYXJldFBvc2l0aW9uXSA9IHVzZVN0YXRlKDApXG4gIC8vIEZvciBhdXRvZm9jdXNcbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpXG5cbiAgY29uc3QgaXNDYXJldFZpc2libGUgPSBpc0ZvY3VzZWQgJiYgIXJlYWRvbmx5XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXV0b2ZvY3VzKSB7XG4gICAgICBzZXRJc0ZvY3VzZWQodHJ1ZSlcbiAgICAgIHJlZi5jdXJyZW50Py5mb2N1cygpXG4gICAgfVxuICB9LCBbYXV0b2ZvY3VzXSlcblxuICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBvbkNoYW5nZT8uKGUudGFyZ2V0LnZhbHVlKVxuICAgIHNldENhcmV0UG9zaXRpb24oZS50YXJnZXQudmFsdWUubGVuZ3RoKVxuICB9XG5cbiAgY29uc3Qgb25CbHVyID0gKCkgPT4ge1xuICAgIHNldElzRm9jdXNlZChmYWxzZSlcbiAgfVxuXG4gIGNvbnN0IG9uRm9jdXMgPSAoKSA9PiB7XG4gICAgc2V0SXNGb2N1c2VkKHRydWUpXG4gIH1cblxuICBjb25zdCBvblNlbGVjdCA9IChlOiBhbnkpID0+IHtcbiAgICBzZXRDYXJldFBvc2l0aW9uKGU/LnRhcmdldD8uc2VsZWN0aW9uU3RhcnQgfHwgMClcbiAgfVxuXG4gIGNvbnN0IG1vZHM6IE1vZHMgPSB7XG4gICAgW2Nscy5yZWFkb25seV06IHJlYWRvbmx5XG4gIH1cblxuICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmlucHV0V3JhcHBlciwge30sIFtjbGFzc05hbWVdKX0+XG4gICAgICAgICAge3BsYWNlaG9sZGVyICYmICg8ZGl2IGNsYXNzTmFtZT17Y2xzLnBsYWNlaG9sZGVyfT5cbiAgICAgICAgICAgICAge2Ake3BsYWNlaG9sZGVyfT5gfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzLmNhcmV0V3JhcHBlcn0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHMuaW5wdXR9XG4gICAgICAgICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICAgICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3R9XG4gICAgICAgICAgcmVhZE9ubHk9e3JlYWRvbmx5fVxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtpc0NhcmV0VmlzaWJsZSAmJiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzLmNhcmV0fVxuICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiBgJHtjYXJldFBvc2l0aW9uICogOX1weGAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICApXG59KVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2lucHV0V3JhcHBlci0teWlQQVMge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19wbGFjZWhvbGRlci0tZW1BUVEge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5zcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9faW5wdXQtLUxWZElQIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAwIHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG4uc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2lucHV0LS1MVmRJUDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2NhcmV0V3JhcHBlci0teTFHaUYge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2NhcmV0LS1scU1GRyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDNweDtcXG4gIHdpZHRoOiA5cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBhbmltYXRpb246IHNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19ibGluay0tTTduOGYgMC44cyBmb3J3YXJkcyBpbmZpbml0ZTtcXG59XFxuXFxuLnNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19yZWFkb25seS0tZlROMVAge1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19ibGluay0tTTduOGYge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMC4wMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2hhcmVkL3VpL0lucHV0L0lucHV0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0FBQ1I7O0FBR0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsZ0ZBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFHQTtFQUNJO0lBQ0ksVUFBQTtFQUFOO0VBR0U7SUFDSSxhQUFBO0VBRE47RUFJRTtJQUNJLFVBQUE7RUFGTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pbnB1dFdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucGxhY2Vob2xkZXIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLmlucHV0IHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAwIHZhcigtLXByaW1hcnktY29sb3IpO1xcblxcbiAgICAmOmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuLmNhcmV0V3JhcHBlciB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2FyZXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICB3aWR0aDogOXB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBhbmltYXRpb246IGJsaW5rIDAuOHMgZm9yd2FyZHMgaW5maW5pdGU7XFxufVxcblxcbi5yZWFkb25seSB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuQGtleWZyYW1lcyBibGluayB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG5cXG4gICAgNTAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDAuMDE7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImlucHV0V3JhcHBlclwiOiBcInNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19pbnB1dFdyYXBwZXItLXlpUEFTXCIsXG5cdFwicGxhY2Vob2xkZXJcIjogXCJzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9fcGxhY2Vob2xkZXItLWVtQVFRXCIsXG5cdFwiaW5wdXRcIjogXCJzcmMtc2hhcmVkLXVpLUlucHV0LUlucHV0LW1vZHVsZV9faW5wdXQtLUxWZElQXCIsXG5cdFwiY2FyZXRXcmFwcGVyXCI6IFwic3JjLXNoYXJlZC11aS1JbnB1dC1JbnB1dC1tb2R1bGVfX2NhcmV0V3JhcHBlci0teTFHaUZcIixcblx0XCJjYXJldFwiOiBcInNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19jYXJldC0tbHFNRkdcIixcblx0XCJibGlua1wiOiBcInNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19ibGluay0tTTduOGZcIixcblx0XCJyZWFkb25seVwiOiBcInNyYy1zaGFyZWQtdWktSW5wdXQtSW5wdXQtbW9kdWxlX19yZWFkb25seS0tZlROMVBcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSW5wdXQubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9JbnB1dC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9JbnB1dC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsInVzZVN0b3JlIiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJqc3giLCJfanN4IiwiRHluYW1pY01vZHVsZUxvYWRlciIsInByb3BzIiwiX3MiLCJjaGlsZHJlbiIsInJlZHVjZXJzIiwicmVtb3ZlQWZ0ZXJVbm1vdW50Iiwic3RvcmUiLCJkaXNwYXRjaCIsIm1vdW50ZWRSZWR1Y2VycyIsInJlZHVjZXJNYW5hZ2VyIiwiZ2V0TW91bnRlZFJlZHVjZXJzIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJfcmVmIiwibmFtZSIsInJlZHVjZXIiLCJtb3VudGVkIiwiYWRkIiwidHlwZSIsIl9yZWYyIiwicmVtb3ZlIiwiX2MiLCIkUmVmcmVzaFJlZyQiLCJjbGFzc05hbWVzIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIm1lbW8iLCJjbHMiLCJqc3hzIiwiX2pzeHMiLCJJbnB1dCIsImNsYXNzTmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImF1dG9mb2N1cyIsInJlYWRvbmx5Iiwib3RoZXJQcm9wcyIsImlzRm9jdXNlZCIsInNldElzRm9jdXNlZCIsImNhcmV0UG9zaXRpb24iLCJzZXRDYXJldFBvc2l0aW9uIiwicmVmIiwiaXNDYXJldFZpc2libGUiLCJjdXJyZW50IiwiZm9jdXMiLCJvbkNoYW5nZUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwibGVuZ3RoIiwib25CbHVyIiwib25Gb2N1cyIsIm9uU2VsZWN0Iiwic2VsZWN0aW9uU3RhcnQiLCJtb2RzIiwiaW5wdXRXcmFwcGVyIiwiY2FyZXRXcmFwcGVyIiwiaW5wdXQiLCJyZWFkT25seSIsImNhcmV0Iiwic3R5bGUiLCJsZWZ0IiwiX2MyIl0sInNvdXJjZVJvb3QiOiIifQ==