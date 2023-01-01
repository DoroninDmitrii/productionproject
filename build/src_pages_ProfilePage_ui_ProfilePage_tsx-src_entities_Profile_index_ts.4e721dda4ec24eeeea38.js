"use strict";
(self["webpackChunkproductionproject"] = self["webpackChunkproductionproject"] || []).push([["src_pages_ProfilePage_ui_ProfilePage_tsx-src_entities_Profile_index_ts"],{

/***/ "./src/entities/Profile/ui/ProfileCard/ProfileCard.tsx":
/*!*************************************************************!*\
  !*** ./src/entities/Profile/ui/ProfileCard/ProfileCard.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileCard": () => (/* binding */ ProfileCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileCard.module.scss */ "./src/entities/Profile/ui/ProfileCard/ProfileCard.module.scss");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var entities_Profile_model_selectors_getProfileData_getProfileData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! entities/Profile/model/selectors/getProfileData/getProfileData */ "./src/entities/Profile/model/selectors/getProfileData/getProfileData.ts");
/* harmony import */ var entities_Profile_model_selectors_getProfileisLoading_getProfileisLoading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! entities/Profile/model/selectors/getProfileisLoading/getProfileisLoading */ "./src/entities/Profile/model/selectors/getProfileisLoading/getProfileisLoading.ts");
/* harmony import */ var entities_Profile_model_selectors_getProfileError_getProfileError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! entities/Profile/model/selectors/getProfileError/getProfileError */ "./src/entities/Profile/model/selectors/getProfileError/getProfileError.ts");
/* harmony import */ var shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
/* harmony import */ var shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/ui/Button/Button */ "./src/shared/ui/Button/Button.tsx");
/* harmony import */ var shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/ui/Input/Input */ "./src/shared/ui/Input/Input.tsx");
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











var ProfileCard = function ProfileCard(props) {
  var className = props.className;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)('profile').t;
  var data = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(entities_Profile_model_selectors_getProfileData_getProfileData__WEBPACK_IMPORTED_MODULE_4__.getProfileData);
  var isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(entities_Profile_model_selectors_getProfileisLoading_getProfileisLoading__WEBPACK_IMPORTED_MODULE_5__.getProfileisLoading);
  var error = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(entities_Profile_model_selectors_getProfileError_getProfileError__WEBPACK_IMPORTED_MODULE_6__.getProfileError);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].ProfileCard, {}, [className])
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
      className: _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].header
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_7__.Text, {
        title: t('Profile')
      }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_8__.Button, __assign({
        className: _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].editBtn,
        theme: shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_8__.ButtonTheme.OUTLINE
      }, {
        children: t('Edit')
      }), void 0)]
    }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
      className: _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].data
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_9__.Input, {
        value: data === null || data === void 0 ? void 0 : data.first,
        placeholder: t('Your name'),
        className: _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input
      }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_9__.Input, {
        value: data === null || data === void 0 ? void 0 : data.lastname,
        placeholder: t('Your surname'),
        className: _ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input
      }, void 0)]
    }), void 0)]
  }), void 0);
};

/***/ }),

/***/ "./src/pages/ProfilePage/ui/ProfilePage.tsx":
/*!**************************************************!*\
  !*** ./src/pages/ProfilePage/ui/ProfilePage.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var entities_Profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/Profile */ "./src/entities/Profile/index.ts");
/* harmony import */ var entities_Profile_ui_ProfileCard_ProfileCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! entities/Profile/ui/ProfileCard/ProfileCard */ "./src/entities/Profile/ui/ProfileCard/ProfileCard.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/lib/components/DynamicModuleLoader/DynamicModuleLoader */ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx");
/* harmony import */ var shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
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








var reducers = {
  profile: entities_Profile__WEBPACK_IMPORTED_MODULE_1__.profileReducer
};
var ProfilePage = function ProfilePage(_a) {
  var className = _a.className;
  var _b = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)(),
    t = _b.t,
    i18n = _b.i18n;
  var dispatch = (0,shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    dispatch((0,entities_Profile__WEBPACK_IMPORTED_MODULE_1__.fetchProfileData)());
  }, [dispatch]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_5__.DynamicModuleLoader, __assign({
    reducers: reducers,
    removeAfterUnmount: true
  }, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
      className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_4__.classNames)('', {}, [className])
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Profile_ui_ProfileCard_ProfileCard__WEBPACK_IMPORTED_MODULE_2__.ProfileCard, {}, void 0)
    }), void 0)
  }), void 0);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Profile/ui/ProfileCard/ProfileCard.module.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Profile/ui/ProfileCard/ProfileCard.module.scss ***!
  \******************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".src-entities-Profile-ui-ProfileCard-ProfileCard-module__ProfileCard--wW9jg {\n  padding: 20px;\n  border: 2px solid var(--inverted-bg-color);\n}\n\n.src-entities-Profile-ui-ProfileCard-ProfileCard-module__header--nP7J5 {\n  display: flex;\n}\n\n.src-entities-Profile-ui-ProfileCard-ProfileCard-module__editBtn--LGXZA {\n  margin-left: auto;\n}\n\n.src-entities-Profile-ui-ProfileCard-ProfileCard-module__data--mem1n {\n  margin-top: 30px;\n}\n\n.src-entities-Profile-ui-ProfileCard-ProfileCard-module__input--ZTyX8 {\n  margin-top: 10px;\n}", "",{"version":3,"sources":["webpack://./src/entities/Profile/ui/ProfileCard/ProfileCard.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,0CAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA;EACI,iBAAA;AACJ;;AAEA;EACI,gBAAA;AACJ;;AAEA;EACI,gBAAA;AACJ","sourcesContent":[".ProfileCard {\n    padding: 20px;\n    border: 2px solid var(--inverted-bg-color);\n}\n\n.header {\n    display: flex;\n}\n\n.editBtn {\n    margin-left: auto;\n}\n\n.data {\n    margin-top: 30px;\n}\n\n.input {\n    margin-top: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ProfileCard": "src-entities-Profile-ui-ProfileCard-ProfileCard-module__ProfileCard--wW9jg",
	"header": "src-entities-Profile-ui-ProfileCard-ProfileCard-module__header--nP7J5",
	"editBtn": "src-entities-Profile-ui-ProfileCard-ProfileCard-module__editBtn--LGXZA",
	"data": "src-entities-Profile-ui-ProfileCard-ProfileCard-module__data--mem1n",
	"input": "src-entities-Profile-ui-ProfileCard-ProfileCard-module__input--ZTyX8"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/entities/Profile/ui/ProfileCard/ProfileCard.module.scss":
/*!*********************************************************************!*\
  !*** ./src/entities/Profile/ui/ProfileCard/ProfileCard.module.scss ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ProfileCard.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Profile/ui/ProfileCard/ProfileCard.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ProfileCard.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Profile/ui/ProfileCard/ProfileCard.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ProfileCard.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Profile/ui/ProfileCard/ProfileCard.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ProfileCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/entities/Profile/index.ts":
/*!***************************************!*\
  !*** ./src/entities/Profile/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* reexport safe */ pages_ProfilePage_ui_ProfilePage__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "fetchProfileData": () => (/* reexport safe */ _model_services_fetchProfileData_fetchProfileData__WEBPACK_IMPORTED_MODULE_1__.fetchProfileData),
/* harmony export */   "profileAction": () => (/* reexport safe */ _model_slice_profileSlice__WEBPACK_IMPORTED_MODULE_0__.profileAction),
/* harmony export */   "profileReducer": () => (/* reexport safe */ _model_slice_profileSlice__WEBPACK_IMPORTED_MODULE_0__.profileReducer)
/* harmony export */ });
/* harmony import */ var _model_slice_profileSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/slice/profileSlice */ "./src/entities/Profile/model/slice/profileSlice.ts");
/* harmony import */ var _model_services_fetchProfileData_fetchProfileData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/services/fetchProfileData/fetchProfileData */ "./src/entities/Profile/model/services/fetchProfileData/fetchProfileData.ts");
/* harmony import */ var pages_ProfilePage_ui_ProfilePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pages/ProfilePage/ui/ProfilePage */ "./src/pages/ProfilePage/ui/ProfilePage.tsx");








/***/ }),

/***/ "./src/entities/Profile/model/selectors/getProfileData/getProfileData.ts":
/*!*******************************************************************************!*\
  !*** ./src/entities/Profile/model/selectors/getProfileData/getProfileData.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProfileData": () => (/* binding */ getProfileData)
/* harmony export */ });
var getProfileData = function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.profile) === null || _a === void 0 ? void 0 : _a.data; };


/***/ }),

/***/ "./src/entities/Profile/model/selectors/getProfileError/getProfileError.ts":
/*!*********************************************************************************!*\
  !*** ./src/entities/Profile/model/selectors/getProfileError/getProfileError.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProfileError": () => (/* binding */ getProfileError)
/* harmony export */ });
var getProfileError = function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.profile) === null || _a === void 0 ? void 0 : _a.error; };


/***/ }),

/***/ "./src/entities/Profile/model/selectors/getProfileisLoading/getProfileisLoading.ts":
/*!*****************************************************************************************!*\
  !*** ./src/entities/Profile/model/selectors/getProfileisLoading/getProfileisLoading.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProfileisLoading": () => (/* binding */ getProfileisLoading)
/* harmony export */ });
var getProfileisLoading = function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.profile) === null || _a === void 0 ? void 0 : _a.isLoading; };


/***/ }),

/***/ "./src/entities/Profile/model/services/fetchProfileData/fetchProfileData.ts":
/*!**********************************************************************************!*\
  !*** ./src/entities/Profile/model/services/fetchProfileData/fetchProfileData.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchProfileData": () => (/* binding */ fetchProfileData)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};

var fetchProfileData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('profile/fetchProfileData', function (_, thunkApi) { return __awaiter(void 0, void 0, void 0, function () {
    var extra, rejectWithValue, response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                extra = thunkApi.extra, rejectWithValue = thunkApi.rejectWithValue;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, extra.api.get('/profile')];
            case 2:
                response = _a.sent();
                return [2 /*return*/, response.data];
            case 3:
                e_1 = _a.sent();
                console.log(e_1);
                return [2 /*return*/, rejectWithValue('Error')];
            case 4: return [2 /*return*/];
        }
    });
}); });


/***/ }),

/***/ "./src/entities/Profile/model/slice/profileSlice.ts":
/*!**********************************************************!*\
  !*** ./src/entities/Profile/model/slice/profileSlice.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "profileAction": () => (/* binding */ profileAction),
/* harmony export */   "profileReducer": () => (/* binding */ profileReducer),
/* harmony export */   "profileSlice": () => (/* binding */ profileSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _services_fetchProfileData_fetchProfileData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/fetchProfileData/fetchProfileData */ "./src/entities/Profile/model/services/fetchProfileData/fetchProfileData.ts");


var initialState = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined
};
var profileSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: 'profile',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(_services_fetchProfileData_fetchProfileData__WEBPACK_IMPORTED_MODULE_0__.fetchProfileData.pending, function (state, action) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(_services_fetchProfileData_fetchProfileData__WEBPACK_IMPORTED_MODULE_0__.fetchProfileData.fulfilled, function (state, action) {
            state.isLoading = false;
            state.data = action.payload;
        })
            .addCase(_services_fetchProfileData_fetchProfileData__WEBPACK_IMPORTED_MODULE_0__.fetchProfileData.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});
var profileAction = profileSlice.actions;
var profileReducer = profileSlice.reducer;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX1Byb2ZpbGVQYWdlX3VpX1Byb2ZpbGVQYWdlX3RzeC1zcmNfZW50aXRpZXNfUHJvZmlsZV9pbmRleF90cy40ZTcyMWRkYTRlYzI0ZWVlZWEzOC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsUUFBUSxJQUFLLFlBQVk7RUFDbERBLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLElBQUksVUFBU0MsQ0FBQyxFQUFFO0lBQ3BDLEtBQUssSUFBSUMsQ0FBQyxFQUFFQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFSCxDQUFDLEdBQUdDLENBQUMsRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDakRELENBQUMsR0FBR0csU0FBUyxDQUFDRixDQUFDLENBQUM7TUFDaEIsS0FBSyxJQUFJSSxDQUFDLElBQUlMLENBQUM7UUFBRSxJQUFJSCxNQUFNLENBQUNTLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNSLENBQUMsRUFBRUssQ0FBQyxDQUFDLEVBQzNETixDQUFDLENBQUNNLENBQUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNLLENBQUMsQ0FBQztNQUFDO0lBQ3BCO0lBQ0EsT0FBT04sQ0FBQztFQUNaLENBQUM7RUFDRCxPQUFPSCxRQUFRLENBQUNhLEtBQUssQ0FBQyxJQUFJLEVBQUVOLFNBQVMsQ0FBQztBQUMxQyxDQUFDO0FBQzhEO0FBQ0Q7QUFDbEI7QUFDRztBQUNMO0FBQ3NEO0FBQ2U7QUFDWjtBQUN4RDtBQUNtQjtBQUNoQjtBQUN2QyxJQUFJc0IsV0FBVyxHQUFHLFNBQWRBLFdBQVcsQ0FBYUMsS0FBSyxFQUFFO0VBQ3RDLElBQUlDLFNBQVMsR0FBR0QsS0FBSyxDQUFDQyxTQUFTO0VBQy9CLElBQUk1QixDQUFDLEdBQUdpQiw4REFBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDakIsQ0FBQztFQUNu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QUFnQixnQkFBZ0I7QUFDL0U7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLFVBQVUsWUFBWSxhQUFhLFNBQVMsVUFBVTtBQUN0RCxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ29EO0FBQzdDLHVCQUF1QixrRUFBZ0Isc0RBQXNEO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RDBDO0FBQ2tDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLG1CQUFtQiw2REFBVztBQUNyQztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxxQkFBcUIsaUdBQXdCO0FBQzdDO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUJBQXFCLG1HQUEwQjtBQUMvQztBQUNBO0FBQ0EsU0FBUztBQUNULHFCQUFxQixrR0FBeUI7QUFDOUM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFDTTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdGlvbnByb2plY3QvLi9zcmMvZW50aXRpZXMvUHJvZmlsZS91aS9Qcm9maWxlQ2FyZC9Qcm9maWxlQ2FyZC50c3giLCJ3ZWJwYWNrOi8vcHJvZHVjdGlvbnByb2plY3QvLi9zcmMvcGFnZXMvUHJvZmlsZVBhZ2UvdWkvUHJvZmlsZVBhZ2UudHN4Iiwid2VicGFjazovL3Byb2R1Y3Rpb25wcm9qZWN0Ly4vc3JjL2VudGl0aWVzL1Byb2ZpbGUvdWkvUHJvZmlsZUNhcmQvUHJvZmlsZUNhcmQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcHJvZHVjdGlvbnByb2plY3QvLi9zcmMvZW50aXRpZXMvUHJvZmlsZS91aS9Qcm9maWxlQ2FyZC9Qcm9maWxlQ2FyZC5tb2R1bGUuc2Nzcz82ZTEwIiwid2VicGFjazovL3Byb2R1Y3Rpb25wcm9qZWN0Ly4vc3JjL2VudGl0aWVzL1Byb2ZpbGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcHJvZHVjdGlvbnByb2plY3QvLi9zcmMvZW50aXRpZXMvUHJvZmlsZS9tb2RlbC9zZWxlY3RvcnMvZ2V0UHJvZmlsZURhdGEvZ2V0UHJvZmlsZURhdGEudHMiLCJ3ZWJwYWNrOi8vcHJvZHVjdGlvbnByb2plY3QvLi9zcmMvZW50aXRpZXMvUHJvZmlsZS9tb2RlbC9zZWxlY3RvcnMvZ2V0UHJvZmlsZUVycm9yL2dldFByb2ZpbGVFcnJvci50cyIsIndlYnBhY2s6Ly9wcm9kdWN0aW9ucHJvamVjdC8uL3NyYy9lbnRpdGllcy9Qcm9maWxlL21vZGVsL3NlbGVjdG9ycy9nZXRQcm9maWxlaXNMb2FkaW5nL2dldFByb2ZpbGVpc0xvYWRpbmcudHMiLCJ3ZWJwYWNrOi8vcHJvZHVjdGlvbnByb2plY3QvLi9zcmMvZW50aXRpZXMvUHJvZmlsZS9tb2RlbC9zZXJ2aWNlcy9mZXRjaFByb2ZpbGVEYXRhL2ZldGNoUHJvZmlsZURhdGEudHMiLCJ3ZWJwYWNrOi8vcHJvZHVjdGlvbnByb2plY3QvLi9zcmMvZW50aXRpZXMvUHJvZmlsZS9tb2RlbC9zbGljZS9wcm9maWxlU2xpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnO1xuaW1wb3J0IGNscyBmcm9tICcuL1Byb2ZpbGVDYXJkLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGdldFByb2ZpbGVEYXRhIH0gZnJvbSAnZW50aXRpZXMvUHJvZmlsZS9tb2RlbC9zZWxlY3RvcnMvZ2V0UHJvZmlsZURhdGEvZ2V0UHJvZmlsZURhdGEnO1xuaW1wb3J0IHsgZ2V0UHJvZmlsZWlzTG9hZGluZyB9IGZyb20gJ2VudGl0aWVzL1Byb2ZpbGUvbW9kZWwvc2VsZWN0b3JzL2dldFByb2ZpbGVpc0xvYWRpbmcvZ2V0UHJvZmlsZWlzTG9hZGluZyc7XG5pbXBvcnQgeyBnZXRQcm9maWxlRXJyb3IgfSBmcm9tICdlbnRpdGllcy9Qcm9maWxlL21vZGVsL3NlbGVjdG9ycy9nZXRQcm9maWxlRXJyb3IvZ2V0UHJvZmlsZUVycm9yJztcbmltcG9ydCB7IFRleHQgfSBmcm9tICdzaGFyZWQvdWkvVGV4dC9UZXh0JztcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uVGhlbWUgfSBmcm9tICdzaGFyZWQvdWkvQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ3NoYXJlZC91aS9JbnB1dC9JbnB1dCc7XG5leHBvcnQgdmFyIFByb2ZpbGVDYXJkID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcbiAgICB2YXIgdCA9IHVzZVRyYW5zbGF0aW9uKCdwcm9maWxlJykudDtcbiAgICB2YXIgZGF0YSA9IHVzZVNlbGVjdG9yKGdldFByb2ZpbGVEYXRhKTtcbiAgICB2YXIgaXNMb2FkaW5nID0gdXNlU2VsZWN0b3IoZ2V0UHJvZmlsZWlzTG9hZGluZyk7XG4gICAgdmFyIGVycm9yID0gdXNlU2VsZWN0b3IoZ2V0UHJvZmlsZUVycm9yKTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5Qcm9maWxlQ2FyZCwge30sIFtjbGFzc05hbWVdKSB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNscy5oZWFkZXIgfSwgeyBjaGlsZHJlbjogW19qc3goVGV4dCwgeyB0aXRsZTogdCgnUHJvZmlsZScpIH0sIHZvaWQgMCksIF9qc3goQnV0dG9uLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xzLmVkaXRCdG4sIHRoZW1lOiBCdXR0b25UaGVtZS5PVVRMSU5FIH0sIHsgY2hpbGRyZW46IHQoJ0VkaXQnKSB9KSwgdm9pZCAwKV0gfSksIHZvaWQgMCksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbHMuZGF0YSB9LCB7IGNoaWxkcmVuOiBbX2pzeChJbnB1dCwgeyB2YWx1ZTogZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhLmZpcnN0LCBwbGFjZWhvbGRlcjogdCgnWW91ciBuYW1lJyksIGNsYXNzTmFtZTogY2xzLmlucHV0IH0sIHZvaWQgMCksIF9qc3goSW5wdXQsIHsgdmFsdWU6IGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5sYXN0bmFtZSwgcGxhY2Vob2xkZXI6IHQoJ1lvdXIgc3VybmFtZScpLCBjbGFzc05hbWU6IGNscy5pbnB1dCB9LCB2b2lkIDApXSB9KSwgdm9pZCAwKV0gfSksIHZvaWQgMCkpO1xufTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgZmV0Y2hQcm9maWxlRGF0YSwgcHJvZmlsZVJlZHVjZXIgfSBmcm9tICdlbnRpdGllcy9Qcm9maWxlJztcbmltcG9ydCB7IFByb2ZpbGVDYXJkIH0gZnJvbSAnZW50aXRpZXMvUHJvZmlsZS91aS9Qcm9maWxlQ2FyZC9Qcm9maWxlQ2FyZCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJztcbmltcG9ydCB7IER5bmFtaWNNb2R1bGVMb2FkZXIgfSBmcm9tICdzaGFyZWQvbGliL2NvbXBvbmVudHMvRHluYW1pY01vZHVsZUxvYWRlci9EeW5hbWljTW9kdWxlTG9hZGVyJztcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnc2hhcmVkL2xpYi9ob29rcy91c2VBcHBEaXNwYXRjaC91c2VBcHBEaXNwYXRjaCc7XG52YXIgcmVkdWNlcnMgPSB7XG4gICAgcHJvZmlsZTogcHJvZmlsZVJlZHVjZXJcbn07XG52YXIgUHJvZmlsZVBhZ2UgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lO1xuICAgIHZhciBfYiA9IHVzZVRyYW5zbGF0aW9uKCksIHQgPSBfYi50LCBpMThuID0gX2IuaTE4bjtcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoUHJvZmlsZURhdGEoKSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgcmV0dXJuIChfanN4KER5bmFtaWNNb2R1bGVMb2FkZXIsIF9fYXNzaWduKHsgcmVkdWNlcnM6IHJlZHVjZXJzLCByZW1vdmVBZnRlclVubW91bnQ6IHRydWUgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lcygnJywge30sIFtjbGFzc05hbWVdKSB9LCB7IGNoaWxkcmVuOiBfanN4KFByb2ZpbGVDYXJkLCB7fSwgdm9pZCAwKSB9KSwgdm9pZCAwKSB9KSwgdm9pZCAwKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBhZ2U7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zcmMtZW50aXRpZXMtUHJvZmlsZS11aS1Qcm9maWxlQ2FyZC1Qcm9maWxlQ2FyZC1tb2R1bGVfX1Byb2ZpbGVDYXJkLS13VzlqZyB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW52ZXJ0ZWQtYmctY29sb3IpO1xcbn1cXG5cXG4uc3JjLWVudGl0aWVzLVByb2ZpbGUtdWktUHJvZmlsZUNhcmQtUHJvZmlsZUNhcmQtbW9kdWxlX19oZWFkZXItLW5QN0o1IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zcmMtZW50aXRpZXMtUHJvZmlsZS11aS1Qcm9maWxlQ2FyZC1Qcm9maWxlQ2FyZC1tb2R1bGVfX2VkaXRCdG4tLUxHWFpBIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uc3JjLWVudGl0aWVzLVByb2ZpbGUtdWktUHJvZmlsZUNhcmQtUHJvZmlsZUNhcmQtbW9kdWxlX19kYXRhLS1tZW0xbiB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4uc3JjLWVudGl0aWVzLVByb2ZpbGUtdWktUHJvZmlsZUNhcmQtUHJvZmlsZUNhcmQtbW9kdWxlX19pbnB1dC0tWlR5WDgge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2VudGl0aWVzL1Byb2ZpbGUvdWkvUHJvZmlsZUNhcmQvUHJvZmlsZUNhcmQubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuUHJvZmlsZUNhcmQge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pbnZlcnRlZC1iZy1jb2xvcik7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZWRpdEJ0biB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uZGF0YSB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbi5pbnB1dCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIlByb2ZpbGVDYXJkXCI6IFwic3JjLWVudGl0aWVzLVByb2ZpbGUtdWktUHJvZmlsZUNhcmQtUHJvZmlsZUNhcmQtbW9kdWxlX19Qcm9maWxlQ2FyZC0td1c5amdcIixcblx0XCJoZWFkZXJcIjogXCJzcmMtZW50aXRpZXMtUHJvZmlsZS11aS1Qcm9maWxlQ2FyZC1Qcm9maWxlQ2FyZC1tb2R1bGVfX2hlYWRlci0tblA3SjVcIixcblx0XCJlZGl0QnRuXCI6IFwic3JjLWVudGl0aWVzLVByb2ZpbGUtdWktUHJvZmlsZUNhcmQtUHJvZmlsZUNhcmQtbW9kdWxlX19lZGl0QnRuLS1MR1haQVwiLFxuXHRcImRhdGFcIjogXCJzcmMtZW50aXRpZXMtUHJvZmlsZS11aS1Qcm9maWxlQ2FyZC1Qcm9maWxlQ2FyZC1tb2R1bGVfX2RhdGEtLW1lbTFuXCIsXG5cdFwiaW5wdXRcIjogXCJzcmMtZW50aXRpZXMtUHJvZmlsZS11aS1Qcm9maWxlQ2FyZC1Qcm9maWxlQ2FyZC1tb2R1bGVfX2lucHV0LS1aVHlYOFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Qcm9maWxlQ2FyZC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Byb2ZpbGVDYXJkLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Byb2ZpbGVDYXJkLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgcHJvZmlsZUFjdGlvbiwgcHJvZmlsZVJlZHVjZXIgfSBmcm9tICcuL21vZGVsL3NsaWNlL3Byb2ZpbGVTbGljZSc7XG5pbXBvcnQgeyBmZXRjaFByb2ZpbGVEYXRhIH0gZnJvbSAnLi9tb2RlbC9zZXJ2aWNlcy9mZXRjaFByb2ZpbGVEYXRhL2ZldGNoUHJvZmlsZURhdGEnO1xuaW1wb3J0IFByb2ZpbGVQYWdlIGZyb20gJ3BhZ2VzL1Byb2ZpbGVQYWdlL3VpL1Byb2ZpbGVQYWdlJztcbmV4cG9ydCB7IHByb2ZpbGVBY3Rpb24sIHByb2ZpbGVSZWR1Y2VyIH07XG5leHBvcnQgeyBmZXRjaFByb2ZpbGVEYXRhIH07XG5leHBvcnQgeyBQcm9maWxlUGFnZSB9O1xuIiwiZXhwb3J0IHZhciBnZXRQcm9maWxlRGF0YSA9IGZ1bmN0aW9uIChzdGF0ZSkgeyB2YXIgX2E7IHJldHVybiAoX2EgPSBzdGF0ZSA9PT0gbnVsbCB8fCBzdGF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RhdGUucHJvZmlsZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRhdGE7IH07XG4iLCJleHBvcnQgdmFyIGdldFByb2ZpbGVFcnJvciA9IGZ1bmN0aW9uIChzdGF0ZSkgeyB2YXIgX2E7IHJldHVybiAoX2EgPSBzdGF0ZSA9PT0gbnVsbCB8fCBzdGF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RhdGUucHJvZmlsZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmVycm9yOyB9O1xuIiwiZXhwb3J0IHZhciBnZXRQcm9maWxlaXNMb2FkaW5nID0gZnVuY3Rpb24gKHN0YXRlKSB7IHZhciBfYTsgcmV0dXJuIChfYSA9IHN0YXRlID09PSBudWxsIHx8IHN0YXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdGF0ZS5wcm9maWxlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaXNMb2FkaW5nOyB9O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmV4cG9ydCB2YXIgZmV0Y2hQcm9maWxlRGF0YSA9IGNyZWF0ZUFzeW5jVGh1bmsoJ3Byb2ZpbGUvZmV0Y2hQcm9maWxlRGF0YScsIGZ1bmN0aW9uIChfLCB0aHVua0FwaSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0cmEsIHJlamVjdFdpdGhWYWx1ZSwgcmVzcG9uc2UsIGVfMTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBleHRyYSA9IHRodW5rQXBpLmV4dHJhLCByZWplY3RXaXRoVmFsdWUgPSB0aHVua0FwaS5yZWplY3RXaXRoVmFsdWU7XG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZXh0cmEuYXBpLmdldCgnL3Byb2ZpbGUnKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlLmRhdGFdO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlXzEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZWplY3RXaXRoVmFsdWUoJ0Vycm9yJyldO1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBmZXRjaFByb2ZpbGVEYXRhIH0gZnJvbSAnLi4vc2VydmljZXMvZmV0Y2hQcm9maWxlRGF0YS9mZXRjaFByb2ZpbGVEYXRhJztcbnZhciBpbml0aWFsU3RhdGUgPSB7XG4gICAgcmVhZG9ubHk6IHRydWUsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgIGRhdGE6IHVuZGVmaW5lZFxufTtcbmV4cG9ydCB2YXIgcHJvZmlsZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICdwcm9maWxlJyxcbiAgICBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge30sXG4gICAgZXh0cmFSZWR1Y2VyczogZnVuY3Rpb24gKGJ1aWxkZXIpIHtcbiAgICAgICAgYnVpbGRlclxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hQcm9maWxlRGF0YS5wZW5kaW5nLCBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hQcm9maWxlRGF0YS5mdWxmaWxsZWQsIGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHN0YXRlLmRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoUHJvZmlsZURhdGEucmVqZWN0ZWQsIGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuZXhwb3J0IHZhciBwcm9maWxlQWN0aW9uID0gcHJvZmlsZVNsaWNlLmFjdGlvbnM7XG5leHBvcnQgdmFyIHByb2ZpbGVSZWR1Y2VyID0gcHJvZmlsZVNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiX19hc3NpZ24iLCJPYmplY3QiLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsImNsYXNzTmFtZXMiLCJjbHMiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVNlbGVjdG9yIiwiZ2V0UHJvZmlsZURhdGEiLCJnZXRQcm9maWxlaXNMb2FkaW5nIiwiZ2V0UHJvZmlsZUVycm9yIiwiVGV4dCIsIkJ1dHRvbiIsIkJ1dHRvblRoZW1lIiwiSW5wdXQiLCJQcm9maWxlQ2FyZCIsInByb3BzIiwiY2xhc3NOYW1lIiwiZGF0YSIsImlzTG9hZGluZyIsImVycm9yIiwiY2hpbGRyZW4iLCJoZWFkZXIiLCJ0aXRsZSIsImVkaXRCdG4iLCJ0aGVtZSIsIk9VVExJTkUiLCJ2YWx1ZSIsImZpcnN0IiwicGxhY2Vob2xkZXIiLCJpbnB1dCIsImxhc3RuYW1lIiwiZmV0Y2hQcm9maWxlRGF0YSIsInByb2ZpbGVSZWR1Y2VyIiwidXNlRWZmZWN0IiwiRHluYW1pY01vZHVsZUxvYWRlciIsInVzZUFwcERpc3BhdGNoIiwicmVkdWNlcnMiLCJwcm9maWxlIiwiUHJvZmlsZVBhZ2UiLCJfYSIsIl9iIiwiaTE4biIsImRpc3BhdGNoIiwicmVtb3ZlQWZ0ZXJVbm1vdW50Il0sInNvdXJjZVJvb3QiOiIifQ==