"use strict";
(self["webpackChunkproductionproject"] = self["webpackChunkproductionproject"] || []).push([["src_features_addCommentForm_ui_AddCommentForm_AddCommentForm_tsx"],{

/***/ "./src/features/addCommentForm/model/selectors/addCommentFormSelectors.ts":
/*!********************************************************************************!*\
  !*** ./src/features/addCommentForm/model/selectors/addCommentFormSelectors.ts ***!
  \********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAddCommentFromError": function() { return /* binding */ getAddCommentFromError; },
/* harmony export */   "getAddCommentFromText": function() { return /* binding */ getAddCommentFromText; }
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

const getAddCommentFromText = state => state.addCommentForm?.text;
const getAddCommentFromError = state => state.addCommentForm?.error;

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

/***/ "./src/features/addCommentForm/model/slices/addCommentFormSlice.ts":
/*!*************************************************************************!*\
  !*** ./src/features/addCommentForm/model/slices/addCommentFormSlice.ts ***!
  \*************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCommentFormAction": function() { return /* binding */ addCommentFormAction; },
/* harmony export */   "addCommentFormReducer": function() { return /* binding */ addCommentFormReducer; },
/* harmony export */   "addCommentFormSlice": function() { return /* binding */ addCommentFormSlice; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const initialState = {};
const addCommentFormSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginByUsername.pending, (state, action) => {
  //       state.error = undefined
  //       state.isLoading = true
  //     })
  //     .addCase(loginByUsername.fulfilled, (state, action) => {
  //       state.isLoading = false
  //     })
  //     .addCase(loginByUsername.rejected, (state, action) => {
  //       state.isLoading = false
  //       state.error = action.payload
  //     })
  // }
});

const {
  actions: addCommentFormAction
} = addCommentFormSlice;
const {
  reducer: addCommentFormReducer
} = addCommentFormSlice;

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

/***/ "./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.tsx":
/*!**************************************************************************!*\
  !*** ./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.tsx ***!
  \**************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/ui/Input/Input */ "./src/shared/ui/Input/Input.tsx");
/* harmony import */ var _shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/ui/Button/Button */ "./src/shared/ui/Button/Button.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _model_selectors_addCommentFormSelectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/selectors/addCommentFormSelectors */ "./src/features/addCommentForm/model/selectors/addCommentFormSelectors.ts");
/* harmony import */ var _shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* harmony import */ var _model_slices_addCommentFormSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/slices/addCommentFormSlice */ "./src/features/addCommentForm/model/slices/addCommentFormSlice.ts");
/* harmony import */ var _shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader */ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx");
/* harmony import */ var _shared_ui_Stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/shared/ui/Stack */ "./src/shared/ui/Stack/index.ts");
/* harmony import */ var _AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AddCommentForm.module.scss */ "./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();














const reducers = {
  addCommentForm: _model_slices_addCommentFormSlice__WEBPACK_IMPORTED_MODULE_7__.addCommentFormReducer
};
const AddCommentForm = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(_c = _s(props => {
  _s();
  const {
    className,
    onSendComment
  } = props;
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation)('comment');
  const text = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_model_selectors_addCommentFormSelectors__WEBPACK_IMPORTED_MODULE_5__.getAddCommentFromText);
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_model_selectors_addCommentFormSelectors__WEBPACK_IMPORTED_MODULE_5__.getAddCommentFromError);
  const dispatch = (0,_shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch)();
  const onCommentTextChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(value => {
    dispatch(_model_slices_addCommentFormSlice__WEBPACK_IMPORTED_MODULE_7__.addCommentFormAction.setText(value));
  }, [dispatch]);
  const onSendHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_8__.DynamicModuleLoader, {
    reducers: reducers,
    removeAfterUnmount: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_shared_ui_Stack__WEBPACK_IMPORTED_MODULE_9__.HStack, {
      justify: "between",
      max: true,
      className: (0,_shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_0__.classNames)(_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].AddCommentForm, {}, [className]),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_2__.Input, {
        className: _AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].input,
        placeholder: t('Write a comment'),
        value: text,
        onChange: onCommentTextChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {
        theme: _shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__.ButtonTheme.OUTLINE,
        onClick: onSendHandler,
        children: t('Send')
      })]
    })
  });
}, "E/v1ouQ1mYCz1jPpJsULlfHALdM=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, _shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch];
})), "E/v1ouQ1mYCz1jPpJsULlfHALdM=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, _shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch];
});
_c2 = AddCommentForm;
/* harmony default export */ __webpack_exports__["default"] = (AddCommentForm);
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "AddCommentForm$memo");
__webpack_require__.$Refresh$.register(_c2, "AddCommentForm");

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".src-features-addCommentForm-ui-AddCommentForm-AddCommentForm-module__AddCommentForm--Zrfoe {\n  border: 1px solid var(--primary-color);\n  padding: 20px;\n}\n\n.src-features-addCommentForm-ui-AddCommentForm-AddCommentForm-module__input--gxRAk {\n  flex-grow: 1;\n}", "",{"version":3,"sources":["webpack://./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss"],"names":[],"mappings":"AAAA;EACI,sCAAA;EACA,aAAA;AACJ;;AAEA;EACI,YAAA;AACJ","sourcesContent":[".AddCommentForm {\n    border: 1px solid var(--primary-color);\n    padding: 20px;\n}\n\n.input {\n    flex-grow: 1;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"AddCommentForm": "src-features-addCommentForm-ui-AddCommentForm-AddCommentForm-module__AddCommentForm--Zrfoe",
	"input": "src-features-addCommentForm-ui-AddCommentForm-AddCommentForm-module__input--gxRAk"
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss":
/*!**********************************************************************************!*\
  !*** ./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss ***!
  \**********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./AddCommentForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./AddCommentForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./AddCommentForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_AddCommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2ZlYXR1cmVzX2FkZENvbW1lbnRGb3JtX3VpX0FkZENvbW1lbnRGb3JtX0FkZENvbW1lbnRGb3JtX3RzeC5hMzEyMjcyMjcyNzY4M2NlODY5Ni5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxNQUFNQSxxQkFBcUIsR0FBSUMsS0FBa0IsSUFBS0EsS0FBSyxDQUFDQyxjQUFjLEVBQUVDLElBQUk7QUFDaEYsTUFBTUMsc0JBQXNCLEdBQUlILEtBQWtCLElBQUtBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFRyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDVCO0FBRzdELE1BQU1FLFlBQWtDLEdBQUcsQ0FBQyxDQUFDO0FBRXRDLE1BQU1DLG1CQUFtQixHQUFHRiw2REFBVyxDQUFDO0VBQzdDRyxJQUFJLEVBQUUsZ0JBQWdCO0VBQ3RCRixZQUFZO0VBQ1pHLFFBQVEsRUFBRTtJQUNSQyxPQUFPLEVBQUVBLENBQUNWLEtBQUssRUFBRVcsTUFBNkIsS0FBSztNQUNqRFgsS0FBSyxDQUFDRSxJQUFJLEdBQUdTLE1BQU0sQ0FBQ0MsT0FBTztJQUM3QjtFQUNGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNGLENBQUMsQ0FBQzs7QUFFSyxNQUFNO0VBQUVDLE9BQU8sRUFBRUM7QUFBcUIsQ0FBQyxHQUFHUCxtQkFBbUI7QUFDN0QsTUFBTTtFQUFFUSxPQUFPLEVBQUVDO0FBQXNCLENBQUMsR0FBR1QsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJOO0FBQ3RCO0FBQ0s7QUFDQztBQUNnQjtBQUN0QjtBQUNvRTtBQUM1QjtBQUNtQjtBQUNjO0FBQ3hFO0FBQ0k7QUFBQTtBQUFBO0FBTzlDLE1BQU1FLFFBQXFCLEdBQUc7RUFD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O0FDVnZDLE1BQTJHO0FBQzNHLE1BQWlHO0FBQ2pHLE1BQXdHO0FBQ3hHLE1BQTJIO0FBQzNILE1BQW9IO0FBQ3BILE1BQW9IO0FBQ3BILE1BQWdOO0FBQ2hOO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsb0tBQU87OztBQUd4QixJQUFJLElBQVU7QUFDZCxPQUFPLDJLQUFjLElBQUksVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QiwyS0FBYztBQUN2QyxvQ0FBb0MseUpBQVcsR0FBRywyS0FBYzs7QUFFaEUsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSw4VkFBbUs7QUFDekssTUFBTTtBQUFBO0FBQ04sc0RBQXNELHlKQUFXLEdBQUcsMktBQWM7QUFDbEYsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUEsMENBQTBDLHlKQUFXLEdBQUcsMktBQWM7O0FBRXRFLHFCQUFxQixvS0FBTztBQUM1QixPQUFPO0FBQ1A7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7O0FBR2tMO0FBQ2xMLE9BQU8sK0RBQWUsb0tBQU8sSUFBSSwyS0FBYyxHQUFHLDJLQUFjLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2R1Y3Rpb25wcm9qZWN0Ly4vc3JjL2ZlYXR1cmVzL2FkZENvbW1lbnRGb3JtL21vZGVsL3NlbGVjdG9ycy9hZGRDb21tZW50Rm9ybVNlbGVjdG9ycy50cyIsIndlYnBhY2s6Ly9wcm9kdWN0aW9ucHJvamVjdC8uL3NyYy9mZWF0dXJlcy9hZGRDb21tZW50Rm9ybS9tb2RlbC9zbGljZXMvYWRkQ29tbWVudEZvcm1TbGljZS50cyIsIndlYnBhY2s6Ly9wcm9kdWN0aW9ucHJvamVjdC8uL3NyYy9mZWF0dXJlcy9hZGRDb21tZW50Rm9ybS91aS9BZGRDb21tZW50Rm9ybS9BZGRDb21tZW50Rm9ybS50c3giLCJ3ZWJwYWNrOi8vcHJvZHVjdGlvbnByb2plY3QvLi9zcmMvZmVhdHVyZXMvYWRkQ29tbWVudEZvcm0vdWkvQWRkQ29tbWVudEZvcm0vQWRkQ29tbWVudEZvcm0ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcHJvZHVjdGlvbnByb2plY3QvLi9zcmMvZmVhdHVyZXMvYWRkQ29tbWVudEZvcm0vdWkvQWRkQ29tbWVudEZvcm0vQWRkQ29tbWVudEZvcm0ubW9kdWxlLnNjc3M/NmJjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZVNjaGVtYSB9IGZyb20gJ0AvYXBwL3Byb3ZpZGVycy9TdG9yZVByb3ZpZGVyJ1xuXG5leHBvcnQgY29uc3QgZ2V0QWRkQ29tbWVudEZyb21UZXh0ID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGUuYWRkQ29tbWVudEZvcm0/LnRleHRcbmV4cG9ydCBjb25zdCBnZXRBZGRDb21tZW50RnJvbUVycm9yID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGUuYWRkQ29tbWVudEZvcm0/LmVycm9yXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgeyBBZGRDb21tZW50Rm9ybVNjaGVtYSB9IGZyb20gJy4uL3R5cGVzL2FkZENvbW1lbnRGb3JtJ1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IEFkZENvbW1lbnRGb3JtU2NoZW1hID0ge31cblxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRGb3JtU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdhZGRDb21tZW50Rm9ybScsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRUZXh0OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XG4gICAgICBzdGF0ZS50ZXh0ID0gYWN0aW9uLnBheWxvYWRcbiAgICB9XG4gIH1cbiAgLy8gZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgLy8gICBidWlsZGVyXG4gIC8vICAgICAuYWRkQ2FzZShsb2dpbkJ5VXNlcm5hbWUucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgLy8gICAgICAgc3RhdGUuZXJyb3IgPSB1bmRlZmluZWRcbiAgLy8gICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZVxuICAvLyAgICAgfSlcbiAgLy8gICAgIC5hZGRDYXNlKGxvZ2luQnlVc2VybmFtZS5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIC8vICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlXG4gIC8vICAgICB9KVxuICAvLyAgICAgLmFkZENhc2UobG9naW5CeVVzZXJuYW1lLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAvLyAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZVxuICAvLyAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkXG4gIC8vICAgICB9KVxuICAvLyB9XG59KVxuXG5leHBvcnQgY29uc3QgeyBhY3Rpb25zOiBhZGRDb21tZW50Rm9ybUFjdGlvbiB9ID0gYWRkQ29tbWVudEZvcm1TbGljZVxuZXhwb3J0IGNvbnN0IHsgcmVkdWNlcjogYWRkQ29tbWVudEZvcm1SZWR1Y2VyIH0gPSBhZGRDb21tZW50Rm9ybVNsaWNlXG4iLCJpbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnQC9zaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcydcbmltcG9ydCB7IG1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Avc2hhcmVkL3VpL0lucHV0L0lucHV0J1xuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25UaGVtZSB9IGZyb20gJ0Avc2hhcmVkL3VpL0J1dHRvbi9CdXR0b24nXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZ2V0QWRkQ29tbWVudEZyb21FcnJvciwgZ2V0QWRkQ29tbWVudEZyb21UZXh0IH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VsZWN0b3JzL2FkZENvbW1lbnRGb3JtU2VsZWN0b3JzJ1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdAL3NoYXJlZC9saWIvaG9va3MvdXNlQXBwRGlzcGF0Y2gvdXNlQXBwRGlzcGF0Y2gnXG5pbXBvcnQgeyBhZGRDb21tZW50Rm9ybUFjdGlvbiwgYWRkQ29tbWVudEZvcm1SZWR1Y2VyIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2xpY2VzL2FkZENvbW1lbnRGb3JtU2xpY2UnXG5pbXBvcnQgeyBEeW5hbWljTW9kdWxlTG9hZGVyLCBSZWR1Y2VyTGlzdCB9IGZyb20gJ0Avc2hhcmVkL2xpYi9jb21wb25lbnRzL0R5bmFtaWNNb2R1bGVMb2FkZXIvRHluYW1pY01vZHVsZUxvYWRlcidcbmltcG9ydCB7IEhTdGFjayB9IGZyb20gJ0Avc2hhcmVkL3VpL1N0YWNrJ1xuaW1wb3J0IGNscyBmcm9tICcuL0FkZENvbW1lbnRGb3JtLm1vZHVsZS5zY3NzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIEFkZENvbW1lbnRGb3JtUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgb25TZW5kQ29tbWVudDogKHRleHQ6IHN0cmluZykgPT4gdm9pZFxufVxuXG5jb25zdCByZWR1Y2VyczogUmVkdWNlckxpc3QgPSB7XG4gIGFkZENvbW1lbnRGb3JtOiBhZGRDb21tZW50Rm9ybVJlZHVjZXJcbn1cblxuY29uc3QgQWRkQ29tbWVudEZvcm0gPSBtZW1vKChwcm9wczogQWRkQ29tbWVudEZvcm1Qcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgb25TZW5kQ29tbWVudCB9ID0gcHJvcHNcblxuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tZW50JylcbiAgY29uc3QgdGV4dCA9IHVzZVNlbGVjdG9yKGdldEFkZENvbW1lbnRGcm9tVGV4dClcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihnZXRBZGRDb21tZW50RnJvbUVycm9yKVxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKClcblxuICBjb25zdCBvbkNvbW1lbnRUZXh0Q2hhbmdlID0gdXNlQ2FsbGJhY2soKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBkaXNwYXRjaChhZGRDb21tZW50Rm9ybUFjdGlvbi5zZXRUZXh0KHZhbHVlKSlcbiAgfSwgW2Rpc3BhdGNoXSlcblxuICBjb25zdCBvblNlbmRIYW5kbGVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIG9uU2VuZENvbW1lbnQodGV4dCB8fCAnJylcbiAgICBvbkNvbW1lbnRUZXh0Q2hhbmdlKCcnKVxuICB9LCBbb25Db21tZW50VGV4dENoYW5nZSwgb25TZW5kQ29tbWVudCwgdGV4dF0pXG5cbiAgcmV0dXJuIChcbiAgICAgIDxEeW5hbWljTW9kdWxlTG9hZGVyIHJlZHVjZXJzPXtyZWR1Y2Vyc30gcmVtb3ZlQWZ0ZXJVbm1vdW50PlxuICAgICAgICAgIDxIU3RhY2sganVzdGlmeT0nYmV0d2VlbicgbWF4IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuQWRkQ29tbWVudEZvcm0sIHt9LCBbY2xhc3NOYW1lXSl9PlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHMuaW5wdXR9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdXcml0ZSBhIGNvbW1lbnQnKX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNvbW1lbnRUZXh0Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdGhlbWU9e0J1dHRvblRoZW1lLk9VVExJTkV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uU2VuZEhhbmRsZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3QoJ1NlbmQnKX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9IU3RhY2s+XG4gICAgICA8L0R5bmFtaWNNb2R1bGVMb2FkZXI+XG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFkZENvbW1lbnRGb3JtXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zcmMtZmVhdHVyZXMtYWRkQ29tbWVudEZvcm0tdWktQWRkQ29tbWVudEZvcm0tQWRkQ29tbWVudEZvcm0tbW9kdWxlX19BZGRDb21tZW50Rm9ybS0tWnJmb2Uge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uc3JjLWZlYXR1cmVzLWFkZENvbW1lbnRGb3JtLXVpLUFkZENvbW1lbnRGb3JtLUFkZENvbW1lbnRGb3JtLW1vZHVsZV9faW5wdXQtLWd4UkFrIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2ZlYXR1cmVzL2FkZENvbW1lbnRGb3JtL3VpL0FkZENvbW1lbnRGb3JtL0FkZENvbW1lbnRGb3JtLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksc0NBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkFkZENvbW1lbnRGb3JtIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5pbnB1dCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiQWRkQ29tbWVudEZvcm1cIjogXCJzcmMtZmVhdHVyZXMtYWRkQ29tbWVudEZvcm0tdWktQWRkQ29tbWVudEZvcm0tQWRkQ29tbWVudEZvcm0tbW9kdWxlX19BZGRDb21tZW50Rm9ybS0tWnJmb2VcIixcblx0XCJpbnB1dFwiOiBcInNyYy1mZWF0dXJlcy1hZGRDb21tZW50Rm9ybS11aS1BZGRDb21tZW50Rm9ybS1BZGRDb21tZW50Rm9ybS1tb2R1bGVfX2lucHV0LS1neFJBa1wiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BZGRDb21tZW50Rm9ybS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FkZENvbW1lbnRGb3JtLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FkZENvbW1lbnRGb3JtLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbImdldEFkZENvbW1lbnRGcm9tVGV4dCIsInN0YXRlIiwiYWRkQ29tbWVudEZvcm0iLCJ0ZXh0IiwiZ2V0QWRkQ29tbWVudEZyb21FcnJvciIsImVycm9yIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJhZGRDb21tZW50Rm9ybVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0VGV4dCIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwiYWRkQ29tbWVudEZvcm1BY3Rpb24iLCJyZWR1Y2VyIiwiYWRkQ29tbWVudEZvcm1SZWR1Y2VyIiwiY2xhc3NOYW1lcyIsIm1lbW8iLCJ1c2VDYWxsYmFjayIsInVzZVRyYW5zbGF0aW9uIiwiSW5wdXQiLCJCdXR0b24iLCJCdXR0b25UaGVtZSIsInVzZVNlbGVjdG9yIiwidXNlQXBwRGlzcGF0Y2giLCJEeW5hbWljTW9kdWxlTG9hZGVyIiwiSFN0YWNrIiwiY2xzIiwianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsIkFkZENvbW1lbnRGb3JtIiwiX3MiLCJfYyIsInByb3BzIiwiY2xhc3NOYW1lIiwib25TZW5kQ29tbWVudCIsInQiLCJpMThuIiwiZGlzcGF0Y2giLCJvbkNvbW1lbnRUZXh0Q2hhbmdlIiwidmFsdWUiLCJvblNlbmRIYW5kbGVyIiwicmVtb3ZlQWZ0ZXJVbm1vdW50IiwiY2hpbGRyZW4iLCJqdXN0aWZ5IiwibWF4IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGhlbWUiLCJPVVRMSU5FIiwib25DbGljayIsIl9jMiIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=