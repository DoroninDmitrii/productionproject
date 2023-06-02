"use strict";
(self["webpackChunkproductionproject"] = self["webpackChunkproductionproject"] || []).push([["src_pages_ArticlesPage_ui_ArticlesPage_ArticlesPage_tsx"],{

/***/ "./src/shared/assets/icons/list-24-24.svg":
/*!************************************************!*\
  !*** ./src/shared/assets/icons/list-24-24.svg ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgList2424 = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  width: 24,
  height: 24,
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M3.75 18a.75.75 0 0 1 .75-.75h15a.75.75 0 1 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0-6a.75.75 0 0 1 .75-.75h15a.75.75 0 1 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0-6a.75.75 0 0 1 .75-.75h15a.75.75 0 1 1 0 1.5h-15A.75.75 0 0 1 3.75 6Z"
})));
/* harmony default export */ __webpack_exports__["default"] = (SvgList2424);

/***/ }),

/***/ "./src/shared/assets/icons/tiled-24-24.svg":
/*!*************************************************!*\
  !*** ./src/shared/assets/icons/tiled-24-24.svg ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgTiled2424 = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  width: 24,
  height: 24,
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm7 9v5h5v-5h-5Zm-7 0v5h5v-5H6Zm7-7v5h5V6h-5ZM6 6v5h5V6H6Z"
})));
/* harmony default export */ __webpack_exports__["default"] = (SvgTiled2424);

/***/ }),

/***/ "./src/features/ArticleViewSelector/index.ts":
/*!***************************************************!*\
  !*** ./src/features/ArticleViewSelector/index.ts ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleViewSelector": function() { return /* reexport safe */ _ui_ArticleViewSelector__WEBPACK_IMPORTED_MODULE_0__.ArticleViewSelector; }
/* harmony export */ });
/* harmony import */ var _ui_ArticleViewSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/ArticleViewSelector */ "./src/features/ArticleViewSelector/ui/ArticleViewSelector.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



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

/***/ "./src/pages/ArticlesPage/model/selectors/articlesPageSelectors.ts":
/*!*************************************************************************!*\
  !*** ./src/pages/ArticlesPage/model/selectors/articlesPageSelectors.ts ***!
  \*************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getArticlesPageError": function() { return /* binding */ getArticlesPageError; },
/* harmony export */   "getArticlesPageHasMore": function() { return /* binding */ getArticlesPageHasMore; },
/* harmony export */   "getArticlesPageInited": function() { return /* binding */ getArticlesPageInited; },
/* harmony export */   "getArticlesPageIsLoading": function() { return /* binding */ getArticlesPageIsLoading; },
/* harmony export */   "getArticlesPageLimit": function() { return /* binding */ getArticlesPageLimit; },
/* harmony export */   "getArticlesPageNum": function() { return /* binding */ getArticlesPageNum; },
/* harmony export */   "getArticlesPageOrder": function() { return /* binding */ getArticlesPageOrder; },
/* harmony export */   "getArticlesPageSearch": function() { return /* binding */ getArticlesPageSearch; },
/* harmony export */   "getArticlesPageSort": function() { return /* binding */ getArticlesPageSort; },
/* harmony export */   "getArticlesPageType": function() { return /* binding */ getArticlesPageType; },
/* harmony export */   "getArticlesPageView": function() { return /* binding */ getArticlesPageView; }
/* harmony export */ });
/* harmony import */ var _entities_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/entities/Article */ "./src/entities/Article/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const getArticlesPageIsLoading = state => state.articlePage?.isLoading;
const getArticlesPageError = state => state.articlePage?.error;
const getArticlesPageView = state => state.articlePage?.view || _entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleView.SMALL;
const getArticlesPageNum = state => state.articlePage?.page || 1;
const getArticlesPageLimit = state => state.articlePage?.limit || 9;
const getArticlesPageHasMore = state => state.articlePage?.hasMore;
const getArticlesPageInited = state => state.articlePage?._inited;
const getArticlesPageOrder = state => state.articlePage?.order ?? 'asc';
const getArticlesPageSort = state => state.articlePage?.sort ?? _entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleSortField.CREATED;
const getArticlesPageSearch = state => state.articlePage?.search ?? '';
const getArticlesPageType = state => state.articlePage?.type ?? _entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleType.ALL;

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

/***/ "./src/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList.ts":
/*!**************************************************************************************!*\
  !*** ./src/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList.ts ***!
  \**************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchArticlesList": function() { return /* binding */ fetchArticlesList; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _entities_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var _shared_lib_url_addQueryParams_addQueryParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/lib/url/addQueryParams/addQueryParams */ "./src/shared/lib/url/addQueryParams/addQueryParams.ts");
/* harmony import */ var _selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selectors/articlesPageSelectors */ "./src/pages/ArticlesPage/model/selectors/articlesPageSelectors.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

/* eslint-disable @typescript-eslint/no-invalid-void-type */




const fetchArticlesList = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('articlePage/fetchArticlesList', async (props, thunkApi) => {
  const {
    extra,
    rejectWithValue,
    getState
  } = thunkApi;
  const limit = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_2__.getArticlesPageLimit)(getState());
  const sort = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_2__.getArticlesPageSort)(getState());
  const order = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_2__.getArticlesPageOrder)(getState());
  const search = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_2__.getArticlesPageSearch)(getState());
  const page = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_2__.getArticlesPageNum)(getState());
  const type = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_2__.getArticlesPageType)(getState());
  try {
    (0,_shared_lib_url_addQueryParams_addQueryParams__WEBPACK_IMPORTED_MODULE_1__.addQueryParams)({
      sort,
      order,
      search,
      type
    });
    const response = await extra.api.get('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        q: search,
        type: type === _entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleType.ALL ? undefined : type
      }
    });
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('Error');
  }
});

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

/***/ "./src/pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage.ts":
/*!**********************************************************************************************!*\
  !*** ./src/pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage.ts ***!
  \**********************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchNextArticlesPage": function() { return /* binding */ fetchNextArticlesPage; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../selectors/articlesPageSelectors */ "./src/pages/ArticlesPage/model/selectors/articlesPageSelectors.ts");
/* harmony import */ var _slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../slices/articlePageSlice */ "./src/pages/ArticlesPage/model/slices/articlePageSlice.ts");
/* harmony import */ var _services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/fetchArticlesList/fetchArticlesList */ "./src/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

/* eslint-disable @typescript-eslint/no-invalid-void-type */




const fetchNextArticlesPage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('articlePage/fetchNextArticlesPage', async (_, thunkApi) => {
  const {
    getState,
    dispatch
  } = thunkApi;
  const hasMore = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_0__.getArticlesPageHasMore)(getState());
  const page = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_0__.getArticlesPageNum)(getState());
  const isLoading = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_0__.getArticlesPageIsLoading)(getState());
  if (hasMore && !isLoading) {
    dispatch(_slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_1__.articlePageActions.setPage(page + 1));
    dispatch((0,_services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__.fetchArticlesList)({}));
  }
});

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

/***/ "./src/pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage.ts":
/*!************************************************************************************!*\
  !*** ./src/pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage.ts ***!
  \************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initArticlesPage": function() { return /* binding */ initArticlesPage; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../selectors/articlesPageSelectors */ "./src/pages/ArticlesPage/model/selectors/articlesPageSelectors.ts");
/* harmony import */ var _slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../slices/articlePageSlice */ "./src/pages/ArticlesPage/model/slices/articlePageSlice.ts");
/* harmony import */ var _services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/fetchArticlesList/fetchArticlesList */ "./src/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

/* eslint-disable @typescript-eslint/no-invalid-void-type */




const initArticlesPage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('articlePage/initArticlesPage', async (searchParams, thunkApi) => {
  const {
    getState,
    dispatch
  } = thunkApi;
  const inited = (0,_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_0__.getArticlesPageInited)(getState());
  if (!inited) {
    const orderFromUrl = searchParams.get('order');
    const sortFromUrl = searchParams.get('sort');
    const searchFromUrl = searchParams.get('search');
    const typeFromUrl = searchParams.get('type');
    if (orderFromUrl) {
      dispatch(_slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_1__.articlePageActions.setOrder(orderFromUrl));
    }
    if (sortFromUrl) {
      dispatch(_slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_1__.articlePageActions.setSort(sortFromUrl));
    }
    if (searchFromUrl) {
      dispatch(_slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_1__.articlePageActions.setSearch(searchFromUrl));
    }
    if (typeFromUrl) {
      dispatch(_slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_1__.articlePageActions.setType(typeFromUrl));
    }
    dispatch(_slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_1__.articlePageActions.initState());
    dispatch((0,_services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__.fetchArticlesList)({}));
  }
});

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

/***/ "./src/pages/ArticlesPage/model/slices/articlePageSlice.ts":
/*!*****************************************************************!*\
  !*** ./src/pages/ArticlesPage/model/slices/articlePageSlice.ts ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "articlePageActions": function() { return /* binding */ articlePageActions; },
/* harmony export */   "articlePageReducer": function() { return /* binding */ articlePageReducer; },
/* harmony export */   "getArticles": function() { return /* binding */ getArticles; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _entities_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var _shared_const_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/const/localstorage */ "./src/shared/const/localstorage.ts");
/* harmony import */ var _model_services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/services/fetchArticlesList/fetchArticlesList */ "./src/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





const articlesAdapter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createEntityAdapter)({
  selectId: article => article.id
});
const getArticles = articlesAdapter.getSelectors(state => state.articlePage || articlesAdapter.getInitialState());
const articlePageSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createSlice)({
  name: 'articlePageSlice',
  initialState: articlesAdapter.getInitialState({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: _entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleView.SMALL,
    page: 1,
    hasMore: true,
    _inited: false,
    limit: 9,
    sort: _entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleSortField.CREATED,
    search: '',
    order: 'asc',
    type: _entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleType.ALL
  }),
  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
      localStorage.setItem(_shared_const_localstorage__WEBPACK_IMPORTED_MODULE_1__.ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    initState: state => {
      const view = localStorage.getItem(_shared_const_localstorage__WEBPACK_IMPORTED_MODULE_1__.ARTICLES_VIEW_LOCALSTORAGE_KEY);
      state.view = view;
      state.limit = view === _entities_Article__WEBPACK_IMPORTED_MODULE_0__.ArticleView.BIG ? 4 : 9;
      state._inited = true;
    }
  },
  extraReducers: builder => {
    builder.addCase(_model_services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__.fetchArticlesList.pending, (state, action) => {
      state.error = undefined;
      state.isLoading = true;
      if (action.meta.arg.replace) {
        articlesAdapter.removeAll(state);
      }
    }).addCase(_model_services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__.fetchArticlesList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasMore = action.payload.length >= state.limit;
      if (action.meta.arg.replace) {
        articlesAdapter.setAll(state, action.payload);
      } else {
        articlesAdapter.addMany(state, action.payload);
      }
    }).addCase(_model_services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_2__.fetchArticlesList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});
const {
  reducer: articlePageReducer,
  actions: articlePageActions
} = articlePageSlice;

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

/***/ "./src/shared/lib/hooks/useDebounce/useDebounce.ts":
/*!*********************************************************!*\
  !*** ./src/shared/lib/hooks/useDebounce/useDebounce.ts ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDebounce": function() { return /* binding */ useDebounce; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();

function useDebounce(callback, delay) {
  _s();
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const timer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      // eslint-disable-next-line n/no-callback-literal
      callback(...args);
    }, delay);
  }, [callback, delay]);
}
_s(useDebounce, "lLYre6vcaFN7EL5FPP62CugvHwU=");

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

/***/ "./src/shared/lib/url/addQueryParams/addQueryParams.ts":
/*!*************************************************************!*\
  !*** ./src/shared/lib/url/addQueryParams/addQueryParams.ts ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addQueryParams": function() { return /* binding */ addQueryParams; },
/* harmony export */   "getQueryParams": function() { return /* binding */ getQueryParams; }
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function getQueryParams(params) {
  const searchParams = new URLSearchParams(window.location.search);
  Object.entries(params).forEach(_ref => {
    let [name, value] = _ref;
    if (value !== undefined) {
      searchParams.set(name, value);
    }
  });
  return `?${searchParams.toString()}`;
}

// Function for adding params in URL

function addQueryParams(params) {
  window.history.pushState(null, '', getQueryParams(params));
}

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

/***/ "./src/features/ArticleViewSelector/ui/ArticleViewSelector.tsx":
/*!*********************************************************************!*\
  !*** ./src/features/ArticleViewSelector/ui/ArticleViewSelector.tsx ***!
  \*********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleViewSelector": function() { return /* binding */ ArticleViewSelector; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _entities_Article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var _shared_assets_icons_list_24_24_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/assets/icons/list-24-24.svg */ "./src/shared/assets/icons/list-24-24.svg");
/* harmony import */ var _shared_assets_icons_tiled_24_24_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/shared/assets/icons/tiled-24-24.svg */ "./src/shared/assets/icons/tiled-24-24.svg");
/* harmony import */ var _shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shared/ui/Button/Button */ "./src/shared/ui/Button/Button.tsx");
/* harmony import */ var _shared_ui_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/shared/ui/Icon/Icon */ "./src/shared/ui/Icon/Icon.tsx");
/* harmony import */ var _ArticleViewSelector_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ArticleViewSelector.module.scss */ "./src/features/ArticleViewSelector/ui/ArticleViewSelector.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();










const viewTypes = [{
  view: _entities_Article__WEBPACK_IMPORTED_MODULE_2__.ArticleView.SMALL,
  icon: _shared_assets_icons_tiled_24_24_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  view: _entities_Article__WEBPACK_IMPORTED_MODULE_2__.ArticleView.BIG,
  icon: _shared_assets_icons_list_24_24_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
}];
const ArticleViewSelector = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_c = _s(props => {
  _s();
  const {
    className,
    view,
    onViewClick
  } = props;
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
  const onClick = newView => () => {
    onViewClick?.(newView);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: (0,_shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_ArticleViewSelector_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].ArticleViewSelector, {}, [className]),
    children: viewTypes.map(viewType => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_5__.Button, {
      theme: _shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_5__.ButtonTheme.CLEAR,
      onClick: onClick(viewType.view),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_shared_ui_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__.Icon, {
        Svg: viewType.icon,
        className: (0,_shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)('', {
          [_ArticleViewSelector_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].notSelected]: viewType.view !== view
        })
      })
    }, viewType.view))
  });
}, "OZwazanA59tbNDUkc8lMSmTHj9Q=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation];
})), "OZwazanA59tbNDUkc8lMSmTHj9Q=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation];
});
_c2 = ArticleViewSelector;
/* harmony default export */ __webpack_exports__["default"] = (ArticleViewSelector);
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticleViewSelector$memo");
__webpack_require__.$Refresh$.register(_c2, "ArticleViewSelector");

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

/***/ "./src/pages/ArticlesPage/ui/ArticleInfiniteList/ArticleInfiniteList.tsx":
/*!*******************************************************************************!*\
  !*** ./src/pages/ArticlesPage/ui/ArticleInfiniteList/ArticleInfiniteList.tsx ***!
  \*******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleInfiniteList": function() { return /* binding */ ArticleInfiniteList; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* harmony import */ var _entities_Article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var _model_slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/slices/articlePageSlice */ "./src/pages/ArticlesPage/model/slices/articlePageSlice.ts");
/* harmony import */ var _model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/selectors/articlesPageSelectors */ "./src/pages/ArticlesPage/model/selectors/articlesPageSelectors.ts");
/* harmony import */ var _shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/shared/ui/Text/Text */ "./src/shared/ui/Text/Text.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();









const ArticleInfiniteList = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_c = _s(props => {
  _s();
  const {
    className
  } = props;
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)('article');
  const dispatch = (0,_shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();
  const articles = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_model_slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_4__.getArticles.selectAll);
  const isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_5__.getArticlesPageIsLoading);
  const view = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_5__.getArticlesPageView);
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_5__.getArticlesPageError);
  const page = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_5__.getArticlesPageNum);
  const hasMore = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_5__.getArticlesPageHasMore);
  const inited = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_5__.getArticlesPageInited);
  if (error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_shared_ui_Text_Text__WEBPACK_IMPORTED_MODULE_6__.Text, {
      text: t('Mistake is happened')
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_entities_Article__WEBPACK_IMPORTED_MODULE_3__.ArticleList, {
    isLoading: isLoading,
    view: view,
    articles: articles,
    className: className
  });
}, "Twc+n9WAd0jvXWV/cCzYWGaNkjw=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation, _shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector];
})), "Twc+n9WAd0jvXWV/cCzYWGaNkjw=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation, _shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector];
});
_c2 = ArticleInfiniteList;
/* harmony default export */ __webpack_exports__["default"] = (ArticleInfiniteList);
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticleInfiniteList$memo");
__webpack_require__.$Refresh$.register(_c2, "ArticleInfiniteList");

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

/***/ "./src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.tsx":
/*!*****************************************************************!*\
  !*** ./src/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.tsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlesPage": function() { return /* binding */ ArticlesPage; }
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader */ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx");
/* harmony import */ var _shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* harmony import */ var _shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/shared/lib/hooks/useInitialEffect/useInitialEffect */ "./src/shared/lib/hooks/useInitialEffect/useInitialEffect.ts");
/* harmony import */ var _widgets_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/widgets/Page/Page */ "./src/widgets/Page/Page.tsx");
/* harmony import */ var _model_slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/slices/articlePageSlice */ "./src/pages/ArticlesPage/model/slices/articlePageSlice.ts");
/* harmony import */ var _model_services_fetchNextArticlesPage_fetchNextArticlesPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/services/fetchNextArticlesPage/fetchNextArticlesPage */ "./src/pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage.ts");
/* harmony import */ var _model_services_initArticlesPage_initArticlesPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/services/initArticlesPage/initArticlesPage */ "./src/pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage.ts");
/* harmony import */ var _ArticlesPageFilters_ArticlesPageFilters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ArticlesPageFilters/ArticlesPageFilters */ "./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.tsx");
/* harmony import */ var _ArticleInfiniteList_ArticleInfiniteList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ArticleInfiniteList/ArticleInfiniteList */ "./src/pages/ArticlesPage/ui/ArticleInfiniteList/ArticleInfiniteList.tsx");
/* harmony import */ var _ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ArticlePage.module.scss */ "./src/pages/ArticlesPage/ui/ArticlesPage/ArticlePage.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();
















const reducers = {
  articlePage: _model_slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_6__.articlePageReducer
};
const ArticlesPage = _ref => {
  _s();
  let {
    className
  } = _ref;
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)('article');
  const dispatch = (0,_shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
  const [searchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useSearchParams)();
  const onLoadNextPart = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch((0,_model_services_fetchNextArticlesPage_fetchNextArticlesPage__WEBPACK_IMPORTED_MODULE_7__.fetchNextArticlesPage)());
  }, [dispatch]);
  (0,_shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_4__.useInitialEffect)(() => {
    dispatch((0,_model_services_initArticlesPage_initArticlesPage__WEBPACK_IMPORTED_MODULE_8__.initArticlesPage)(searchParams));
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_2__.DynamicModuleLoader, {
    reducers: reducers,
    removeAfterUnmount: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_widgets_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onScrollEnd: onLoadNextPart,
      className: (0,_shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)('', {}, [className]),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ArticlesPageFilters_ArticlesPageFilters__WEBPACK_IMPORTED_MODULE_9__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ArticleInfiniteList_ArticleInfiniteList__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: _ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].list
      })]
    })
  });
};
_s(ArticlesPage, "yNQLkgQIT8pBJgc+UAn9Vrkiujw=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation, _shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch, react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useSearchParams, _shared_lib_hooks_useInitialEffect_useInitialEffect__WEBPACK_IMPORTED_MODULE_4__.useInitialEffect];
});
_c = ArticlesPage;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(ArticlesPage));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticlesPage");
__webpack_require__.$Refresh$.register(_c2, "%default%");

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

/***/ "./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.tsx":
/*!*******************************************************************************!*\
  !*** ./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.tsx ***!
  \*******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlesPageFilters": function() { return /* binding */ ArticlesPageFilters; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
/* harmony import */ var _model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/selectors/articlesPageSelectors */ "./src/pages/ArticlesPage/model/selectors/articlesPageSelectors.ts");
/* harmony import */ var _model_slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/slices/articlePageSlice */ "./src/pages/ArticlesPage/model/slices/articlePageSlice.ts");
/* harmony import */ var _features_ArticleViewSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/features/ArticleViewSelector */ "./src/features/ArticleViewSelector/index.ts");
/* harmony import */ var _entities_Article__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/entities/Article */ "./src/entities/Article/index.ts");
/* harmony import */ var _shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/shared/ui/Card/Card */ "./src/shared/ui/Card/Card.tsx");
/* harmony import */ var _shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/shared/ui/Input/Input */ "./src/shared/ui/Input/Input.tsx");
/* harmony import */ var _model_services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/services/fetchArticlesList/fetchArticlesList */ "./src/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList.ts");
/* harmony import */ var _shared_lib_hooks_useDebounce_useDebounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/shared/lib/hooks/useDebounce/useDebounce */ "./src/shared/lib/hooks/useDebounce/useDebounce.ts");
/* harmony import */ var _ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ArticlesPageFilters.module.scss */ "./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();
















const ArticlesPageFilters = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_c = _s(props => {
  _s();
  const {
    className
  } = props;
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation)('article');
  const dispatch = (0,_shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
  const view = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_4__.getArticlesPageView);
  const sort = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_4__.getArticlesPageSort);
  const order = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_4__.getArticlesPageOrder);
  const search = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_4__.getArticlesPageSearch);
  const type = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_model_selectors_articlesPageSelectors__WEBPACK_IMPORTED_MODULE_4__.getArticlesPageType);
  const fetchData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch((0,_model_services_fetchArticlesList_fetchArticlesList__WEBPACK_IMPORTED_MODULE_10__.fetchArticlesList)({
      replace: true
    }));
  }, [dispatch]);
  const debouncedFetchData = (0,_shared_lib_hooks_useDebounce_useDebounce__WEBPACK_IMPORTED_MODULE_11__.useDebounce)(fetchData, 500);
  const onChangeView = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(view => {
    dispatch(_model_slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_5__.articlePageActions.setView(view));
    dispatch(_model_slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_5__.articlePageActions.setPage(1));
  }, [dispatch]);
  const onChangeSort = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newSort => {
    dispatch(_model_slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_5__.articlePageActions.setSort(newSort));
    dispatch(_model_slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_5__.articlePageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);
  const onChangeOrder = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newOrder => {
    dispatch(_model_slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_5__.articlePageActions.setOrder(newOrder));
    dispatch(_model_slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_5__.articlePageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);
  const onChangeSearch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(search => {
    dispatch(_model_slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_5__.articlePageActions.setSearch(search));
    dispatch(_model_slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_5__.articlePageActions.setPage(1));
    debouncedFetchData();
  }, [dispatch, debouncedFetchData]);
  const onChangeType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(value => {
    dispatch(_model_slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_5__.articlePageActions.setType(value));
    dispatch(_model_slices_articlePageSlice__WEBPACK_IMPORTED_MODULE_5__.articlePageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: (0,_shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__.classNames)(_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].ArticlesPageFilters, {}, [className]),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: _ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].sortWrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_entities_Article__WEBPACK_IMPORTED_MODULE_7__.ArticleSortSelector, {
        order: order,
        sort: sort,
        onChangeOrder: onChangeOrder,
        onChangeSort: onChangeSort
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_features_ArticleViewSelector__WEBPACK_IMPORTED_MODULE_6__.ArticleViewSelector, {
        view: view,
        onViewClick: onChangeView
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: _ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].search,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_9__.Input, {
        value: search,
        onChange: onChangeSearch,
        placeholder: t('Search')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_entities_Article__WEBPACK_IMPORTED_MODULE_7__.ArticleTypeTabs, {
      className: _ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].tabs,
      value: type,
      onChangeType: onChangeType
    })]
  });
}, "nCEYAoM2RdOwWEqVUR6Pr0N6gCc=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation, _shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, _shared_lib_hooks_useDebounce_useDebounce__WEBPACK_IMPORTED_MODULE_11__.useDebounce];
})), "nCEYAoM2RdOwWEqVUR6Pr0N6gCc=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation, _shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, _shared_lib_hooks_useDebounce_useDebounce__WEBPACK_IMPORTED_MODULE_11__.useDebounce];
});
_c2 = ArticlesPageFilters;
/* harmony default export */ __webpack_exports__["default"] = (ArticlesPageFilters);
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ArticlesPageFilters$memo");
__webpack_require__.$Refresh$.register(_c2, "ArticlesPageFilters");

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/ArticleViewSelector/ui/ArticleViewSelector.module.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/ArticleViewSelector/ui/ArticleViewSelector.module.scss ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".src-features-ArticleViewSelector-ui-ArticleViewSelector-module__notSelected--daqv5 {\n  fill: var(--secondary-color);\n}", "",{"version":3,"sources":["webpack://./src/features/ArticleViewSelector/ui/ArticleViewSelector.module.scss"],"names":[],"mappings":"AAAA;EACI,4BAAA;AACJ","sourcesContent":[".notSelected {\n    fill: var(--secondary-color);\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"notSelected": "src-features-ArticleViewSelector-ui-ArticleViewSelector-module__notSelected--daqv5"
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPage/ArticlePage.module.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPage/ArticlePage.module.scss ***!
  \*********************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".src-pages-ArticlesPage-ui-ArticlesPage-ArticlePage-module__ArticlePage--G5j3N {\n  min-height: 100%;\n}\n\n.src-pages-ArticlesPage-ui-ArticlesPage-ArticlePage-module__list--Qvnph {\n  margin-top: 30px;\n}", "",{"version":3,"sources":["webpack://./src/pages/ArticlesPage/ui/ArticlesPage/ArticlePage.module.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;AACJ;;AAEA;EACI,gBAAA;AACJ","sourcesContent":[".ArticlePage {\n    min-height: 100%;\n}\n\n.list {\n    margin-top: 30px;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ArticlePage": "src-pages-ArticlesPage-ui-ArticlesPage-ArticlePage-module__ArticlePage--G5j3N",
	"list": "src-pages-ArticlesPage-ui-ArticlesPage-ArticlePage-module__list--Qvnph"
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".src-pages-ArticlesPage-ui-ArticlesPageFilters-ArticlesPageFilters-module__sortWrapper--pyOjo {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.src-pages-ArticlesPage-ui-ArticlesPageFilters-ArticlesPageFilters-module__search--QkNSe {\n  margin-top: 16px;\n}\n\n.src-pages-ArticlesPage-ui-ArticlesPageFilters-ArticlesPageFilters-module__tabs--JHbc4 {\n  margin-top: 16px;\n}", "",{"version":3,"sources":["webpack://./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;AACJ;;AAEA;EACI,gBAAA;AACJ;;AAEA;EACI,gBAAA;AACJ","sourcesContent":[".sortWrapper {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.search {\n    margin-top: 16px;\n}\n\n.tabs {\n    margin-top: 16px;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sortWrapper": "src-pages-ArticlesPage-ui-ArticlesPageFilters-ArticlesPageFilters-module__sortWrapper--pyOjo",
	"search": "src-pages-ArticlesPage-ui-ArticlesPageFilters-ArticlesPageFilters-module__search--QkNSe",
	"tabs": "src-pages-ArticlesPage-ui-ArticlesPageFilters-ArticlesPageFilters-module__tabs--JHbc4"
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/features/ArticleViewSelector/ui/ArticleViewSelector.module.scss":
/*!*****************************************************************************!*\
  !*** ./src/features/ArticleViewSelector/ui/ArticleViewSelector.module.scss ***!
  \*****************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleViewSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./ArticleViewSelector.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/ArticleViewSelector/ui/ArticleViewSelector.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleViewSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleViewSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleViewSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleViewSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleViewSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./ArticleViewSelector.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/ArticleViewSelector/ui/ArticleViewSelector.module.scss",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleViewSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./ArticleViewSelector.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/ArticleViewSelector/ui/ArticleViewSelector.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleViewSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleViewSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleViewSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleViewSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleViewSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleViewSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleViewSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleViewSelector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ArticlesPage/ui/ArticlesPage/ArticlePage.module.scss":
/*!************************************************************************!*\
  !*** ./src/pages/ArticlesPage/ui/ArticlesPage/ArticlePage.module.scss ***!
  \************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPage/ArticlePage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPage/ArticlePage.module.scss",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPage/ArticlePage.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss":
/*!***************************************************************************************!*\
  !*** ./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss ***!
  \***************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlesPageFilters.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlesPageFilters.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlesPageFilters.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlesPageFilters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0FydGljbGVzUGFnZV91aV9BcnRpY2xlc1BhZ2VfQXJ0aWNsZXNQYWdlX3RzeC40ZWYyM2ZjMGZhOWJmMmYyYmJiZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLHNCQUFzQixzRUFBc0UsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELGlDQUFpQyxrQkFBa0I7QUFDM1E7QUFDL0IsMENBQTBDLGdEQUFtQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMseUNBQXlDLGdEQUFtQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsK0RBQWUsV0FBVzs7Ozs7Ozs7Ozs7OztBQ2IxQjtBQUNBLHNCQUFzQixzRUFBc0UsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELGlDQUFpQyxrQkFBa0I7QUFDM1E7QUFDL0IsMkNBQTJDLGdEQUFtQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMseUNBQXlDLGdEQUFtQjtBQUM3RDtBQUNBLENBQUM7QUFDRCwrREFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFVm9EO0FBRXhFLE1BQU1JLHdCQUF3QixHQUFJQyxLQUFrQixJQUFLQSxLQUFLLENBQUNDLFdBQVcsRUFBRUMsU0FBUztBQUNyRixNQUFNQyxvQkFBb0IsR0FBSUgsS0FBa0IsSUFBS0EsS0FBSyxDQUFDQyxXQUFXLEVBQUVHLEtBQUs7QUFDN0UsTUFBTUMsbUJBQW1CLEdBQUlMLEtBQWtCLElBQUtBLEtBQUssQ0FBQ0MsV0FBVyxFQUFFSyxJQUFJLElBQUlWLGdFQUFpQjtBQUVoRyxNQUFNWSxrQkFBa0IsR0FBSVIsS0FBa0IsSUFBS0EsS0FBSyxDQUFDQyxXQUFXLEVBQUVRLElBQUksSUFBSSxDQUFDO0FBQy9FLE1BQU1DLG9CQUFvQixHQUFJVixL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QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx5S0FBTzs7O0FBR3hCLElBQUksSUFBVTtBQUNkLE9BQU8sZ0xBQWMsSUFBSSxVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLGdMQUFjO0FBQ3ZDLG9DQUFvQyw4SkFBVyxHQUFHLGdMQUFjOztBQUVoRSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLHdXQUF3SztBQUM5SyxNQUFNO0FBQUE7QUFDTixzREFBc0QsOEpBQVcsR0FBRyxnTEFBYztBQUNsRixnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMsOEpBQVcsR0FBRyxnTEFBYzs7QUFFdEUscUJBQXFCLHlLQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHdUw7QUFDdkwsT0FBTywrREFBZSx5S0FBTyxJQUFJLGdMQUFjLEdBQUcsZ0xBQWMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdGlvbnByb2plY3QvLi9zcmMvc2hhcmVkL2Fzc2V0cy9pY29ucy9saXN0LTI0LTI0LnN2ZyIsIndlYnBhY2s6Ly9wcm9kdWN0aW9ucHJvamVjdC8uL3NyYy9zaGFyZWQvYXNzZXRzL2ljb25zL3RpbGVkLTI0LTI0LnN2ZyIsIndlYnBhY2s6Ly9wcm9kdWN0aW9ucHJvamVjdC8uL3NyYy9mZWF0dXJlcy9BcnRpY2xlVmlld1NlbGVjdG9yL2luZGV4LnRzIiwid2VicGFjazovL3Byb2R1Y3Rpb25wcm9qZWN0Ly4vc3JjL3BhZ2VzL0FydGljbGVzUGFnZS9tb2RlbC9zZWxlY3RvcnMvYXJ0aWNsZXNQYWdlU2VsZWN0b3JzLnRzIiwid2VicGFjazovL3Byb2R1Y3Rpb25wcm9qZWN0Ly4vc3JjL3BhZ2VzL0FydGljbGVzUGFnZS9tb2RlbC9zZXJ2aWNlcy9mZXRjaEFydGljbGVzTGlzdC9mZXRjaEFydGljbGVzTGlzdC50cyIsIndlYnBhY2s6Ly9wcm9kdWN0aW9ucHJvamVjdC8uL3NyYy9wYWdlcy9BcnRpY2xlc1BhZ2UvbW9kZWwvc2VydmljZXMvZmV0Y2hOZXh0QXJ0aWNsZXNQYWdlL2ZldGNoTmV4dEFydGljbGVzUGFnZS50cyIsIndlYnBhY2s6Ly9wcm9kdWN0aW9ucHJvamVjdC8uL3NyYy9wYWdlcy9BcnRpY2xlc1BhZ2UvbW9kZWwvc2VydmljZXMvaW5pdEFydGljbGVzUGFnZS9pbml0QXJ0aWNsZXNQYWdlLnRzIiwid2VicGFjazovL3Byb2R1Y3Rpb25wcm9qZWN0Ly4vc3JjL3BhZ2VzL0FydGljbGVzUGFnZS9tb2RlbC9zbGljZXMvYXJ0aWNsZVBhZ2VTbGljZS50cyIsIndlYnBhY2s6Ly9wcm9kdWN0aW9ucHJvamVjdC8uL3NyYy9zaGFyZWQvbGliL2hvb2tzL3VzZURlYm91bmNlL3VzZURlYm91bmNlLnRzIiwid2VicGFjazovL3Byb2R1Y3Rpb25wcm9qZWN0Ly4vc3JjL3NoYXJlZC9saWIvdXJsL2FkZFF1ZXJ5UGFyYW1zL2FkZFF1ZXJ5UGFyYW1zLnRzIiwid2VicGFjazovL3Byb2R1Y3Rpb25wcm9qZWN0Ly4vc3JjL2ZlYXR1cmVzL0FydGljbGVWaWV3U2VsZWN0b3IvdWkvQXJ0aWNsZVZpZXdTZWxlY3Rvci50c3giLCJ3ZWJwYWNrOi8vcHJvZHVjdGlvbnByb2plY3QvLi9zcmMvcGFnZXMvQXJ0aWNsZXNQYWdlL3VpL0FydGljbGVJbmZpbml0ZUxpc3QvQXJ0aWNsZUluZmluaXRlTGlzdC50c3giLCJ3ZWJwYWNrOi8vcHJvZHVjdGlvbnByb2plY3QvLi9zcmMvcGFnZXMvQXJ0aWNsZXNQYWdlL3VpL0FydGljbGVzUGFnZS9BcnRpY2xlc1BhZ2UudHN4Iiwid2VicGFjazovL3Byb2R1Y3Rpb25wcm9qZWN0Ly4vc3JjL3BhZ2VzL0FydGljbGVzUGFnZS91aS9BcnRpY2xlc1BhZ2VGaWx0ZXJzL0FydGljbGVzUGFnZUZpbHRlcnMudHN4Iiwid2VicGFjazovL3Byb2R1Y3Rpb25wcm9qZWN0Ly4vc3JjL2ZlYXR1cmVzL0FydGljbGVWaWV3U2VsZWN0b3IvdWkvQXJ0aWNsZVZpZXdTZWxlY3Rvci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9wcm9kdWN0aW9ucHJvamVjdC8uL3NyYy9wYWdlcy9BcnRpY2xlc1BhZ2UvdWkvQXJ0aWNsZXNQYWdlL0FydGljbGVQYWdlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3Byb2R1Y3Rpb25wcm9qZWN0Ly4vc3JjL3BhZ2VzL0FydGljbGVzUGFnZS91aS9BcnRpY2xlc1BhZ2VGaWx0ZXJzL0FydGljbGVzUGFnZUZpbHRlcnMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcHJvZHVjdGlvbnByb2plY3QvLi9zcmMvZmVhdHVyZXMvQXJ0aWNsZVZpZXdTZWxlY3Rvci91aS9BcnRpY2xlVmlld1NlbGVjdG9yLm1vZHVsZS5zY3NzPzQ2OTMiLCJ3ZWJwYWNrOi8vcHJvZHVjdGlvbnByb2plY3QvLi9zcmMvcGFnZXMvQXJ0aWNsZXNQYWdlL3VpL0FydGljbGVzUGFnZS9BcnRpY2xlUGFnZS5tb2R1bGUuc2Nzcz8zMmM0Iiwid2VicGFjazovL3Byb2R1Y3Rpb25wcm9qZWN0Ly4vc3JjL3BhZ2VzL0FydGljbGVzUGFnZS91aS9BcnRpY2xlc1BhZ2VGaWx0ZXJzL0FydGljbGVzUGFnZUZpbHRlcnMubW9kdWxlLnNjc3M/ZmIwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX3BhdGg7XG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgU3ZnTGlzdDI0MjQgPSBwcm9wcyA9PiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gIHdpZHRoOiAyNCxcbiAgaGVpZ2h0OiAyNCxcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgcm9sZTogXCJpbWdcIlxufSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBmaWxsUnVsZTogXCJldmVub2RkXCIsXG4gIGNsaXBSdWxlOiBcImV2ZW5vZGRcIixcbiAgZDogXCJNMy43NSAxOGEuNzUuNzUgMCAwIDEgLjc1LS43NWgxNWEuNzUuNzUgMCAxIDEgMCAxLjVoLTE1YS43NS43NSAwIDAgMS0uNzUtLjc1Wm0wLTZhLjc1Ljc1IDAgMCAxIC43NS0uNzVoMTVhLjc1Ljc1IDAgMSAxIDAgMS41aC0xNWEuNzUuNzUgMCAwIDEtLjc1LS43NVptMC02YS43NS43NSAwIDAgMSAuNzUtLjc1aDE1YS43NS43NSAwIDEgMSAwIDEuNWgtMTVBLjc1Ljc1IDAgMCAxIDMuNzUgNlpcIlxufSkpKTtcbmV4cG9ydCBkZWZhdWx0IFN2Z0xpc3QyNDI0OyIsInZhciBfcGF0aDtcbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5jb25zdCBTdmdUaWxlZDI0MjQgPSBwcm9wcyA9PiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gIHdpZHRoOiAyNCxcbiAgaGVpZ2h0OiAyNCxcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgcm9sZTogXCJpbWdcIlxufSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk02IDRoMTJhMiAyIDAgMCAxIDIgMnYxMmEyIDIgMCAwIDEtMiAySDZhMiAyIDAgMCAxLTItMlY2YTIgMiAwIDAgMSAyLTJabTcgOXY1aDV2LTVoLTVabS03IDB2NWg1di01SDZabTctN3Y1aDVWNmgtNVpNNiA2djVoNVY2SDZaXCJcbn0pKSk7XG5leHBvcnQgZGVmYXVsdCBTdmdUaWxlZDI0MjQ7IiwiZXhwb3J0IHsgQXJ0aWNsZVZpZXdTZWxlY3RvciB9IGZyb20gJy4vdWkvQXJ0aWNsZVZpZXdTZWxlY3RvcidcbiIsImltcG9ydCB7IFN0YXRlU2NoZW1hIH0gZnJvbSAnQC9hcHAvcHJvdmlkZXJzL1N0b3JlUHJvdmlkZXInXG5pbXBvcnQgeyBBcnRpY2xlVmlldywgQXJ0aWNsZVNvcnRGaWVsZCwgQXJ0aWNsZVR5cGUgfSBmcm9tICdAL2VudGl0aWVzL0FydGljbGUnXG5cbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlc1BhZ2VJc0xvYWRpbmcgPSAoc3RhdGU6IFN0YXRlU2NoZW1hKSA9PiBzdGF0ZS5hcnRpY2xlUGFnZT8uaXNMb2FkaW5nXG5leHBvcnQgY29uc3QgZ2V0QXJ0aWNsZXNQYWdlRXJyb3IgPSAoc3RhdGU6IFN0YXRlU2NoZW1hKSA9PiBzdGF0ZS5hcnRpY2xlUGFnZT8uZXJyb3JcbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlc1BhZ2VWaWV3ID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGUuYXJ0aWNsZVBhZ2U/LnZpZXcgfHwgQXJ0aWNsZVZpZXcuU01BTExcblxuZXhwb3J0IGNvbnN0IGdldEFydGljbGVzUGFnZU51bSA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlLmFydGljbGVQYWdlPy5wYWdlIHx8IDFcbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlc1BhZ2VMaW1pdCA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlLmFydGljbGVQYWdlPy5saW1pdCB8fCA5XG5leHBvcnQgY29uc3QgZ2V0QXJ0aWNsZXNQYWdlSGFzTW9yZSA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlLmFydGljbGVQYWdlPy5oYXNNb3JlXG5leHBvcnQgY29uc3QgZ2V0QXJ0aWNsZXNQYWdlSW5pdGVkID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGUuYXJ0aWNsZVBhZ2U/Ll9pbml0ZWRcblxuZXhwb3J0IGNvbnN0IGdldEFydGljbGVzUGFnZU9yZGVyID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGUuYXJ0aWNsZVBhZ2U/Lm9yZGVyID8/ICdhc2MnXG5leHBvcnQgY29uc3QgZ2V0QXJ0aWNsZXNQYWdlU29ydCA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlLmFydGljbGVQYWdlPy5zb3J0ID8/IEFydGljbGVTb3J0RmllbGQuQ1JFQVRFRFxuZXhwb3J0IGNvbnN0IGdldEFydGljbGVzUGFnZVNlYXJjaCA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlLmFydGljbGVQYWdlPy5zZWFyY2ggPz8gJydcbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlc1BhZ2VUeXBlID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGUuYXJ0aWNsZVBhZ2U/LnR5cGUgPz8gQXJ0aWNsZVR5cGUuQUxMXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8taW52YWxpZC12b2lkLXR5cGUgKi9cbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IHsgVGh1bmtDb25maWcgfSBmcm9tICdAL2FwcC9wcm92aWRlcnMvU3RvcmVQcm92aWRlcidcbmltcG9ydCB7IEFydGljbGUsIEFydGljbGVUeXBlIH0gZnJvbSAnQC9lbnRpdGllcy9BcnRpY2xlJ1xuaW1wb3J0IHsgYWRkUXVlcnlQYXJhbXMgfSBmcm9tICdAL3NoYXJlZC9saWIvdXJsL2FkZFF1ZXJ5UGFyYW1zL2FkZFF1ZXJ5UGFyYW1zJ1xuaW1wb3J0IHsgZ2V0QXJ0aWNsZXNQYWdlTGltaXQsIGdldEFydGljbGVzUGFnZVNvcnQsIGdldEFydGljbGVzUGFnZU9yZGVyLCBnZXRBcnRpY2xlc1BhZ2VTZWFyY2gsIGdldEFydGljbGVzUGFnZU51bSwgZ2V0QXJ0aWNsZXNQYWdlVHlwZSB9IGZyb20gJy4uLy4uL3NlbGVjdG9ycy9hcnRpY2xlc1BhZ2VTZWxlY3RvcnMnXG5cbmludGVyZmFjZSBGZXRjaEFydGljbGVzTGlzdFByb3BzIHtcbiAgcmVwbGFjZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoQXJ0aWNsZXNMaXN0ID0gY3JlYXRlQXN5bmNUaHVuazxcbkFydGljbGVbXSxcbkZldGNoQXJ0aWNsZXNMaXN0UHJvcHMsXG5UaHVua0NvbmZpZzxzdHJpbmc+PihcbiAgJ2FydGljbGVQYWdlL2ZldGNoQXJ0aWNsZXNMaXN0JyxcbiAgYXN5bmMgKHByb3BzLCB0aHVua0FwaSkgPT4ge1xuICAgIGNvbnN0IHsgZXh0cmEsIHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSA9IHRodW5rQXBpXG4gICAgY29uc3QgbGltaXQgPSBnZXRBcnRpY2xlc1BhZ2VMaW1pdChnZXRTdGF0ZSgpKVxuICAgIGNvbnN0IHNvcnQgPSBnZXRBcnRpY2xlc1BhZ2VTb3J0KGdldFN0YXRlKCkpXG4gICAgY29uc3Qgb3JkZXIgPSBnZXRBcnRpY2xlc1BhZ2VPcmRlcihnZXRTdGF0ZSgpKVxuICAgIGNvbnN0IHNlYXJjaCA9IGdldEFydGljbGVzUGFnZVNlYXJjaChnZXRTdGF0ZSgpKVxuICAgIGNvbnN0IHBhZ2UgPSBnZXRBcnRpY2xlc1BhZ2VOdW0oZ2V0U3RhdGUoKSlcbiAgICBjb25zdCB0eXBlID0gZ2V0QXJ0aWNsZXNQYWdlVHlwZShnZXRTdGF0ZSgpKVxuXG4gICAgdHJ5IHtcbiAgICAgIGFkZFF1ZXJ5UGFyYW1zKHsgc29ydCwgb3JkZXIsIHNlYXJjaCwgdHlwZSB9KVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBleHRyYS5hcGkuZ2V0PEFydGljbGVbXT4oJy9hcnRpY2xlcycsIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgX2V4cGFuZDogJ3VzZXInLFxuICAgICAgICAgIF9saW1pdDogbGltaXQsXG4gICAgICAgICAgX3BhZ2U6IHBhZ2UsXG4gICAgICAgICAgX3NvcnQ6IHNvcnQsXG4gICAgICAgICAgX29yZGVyOiBvcmRlcixcbiAgICAgICAgICBxOiBzZWFyY2gsXG4gICAgICAgICAgdHlwZTogdHlwZSA9PT0gQXJ0aWNsZVR5cGUuQUxMID8gdW5kZWZpbmVkIDogdHlwZVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAoIXJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZSgnRXJyb3InKVxuICAgIH1cbiAgfVxuKVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWludmFsaWQtdm9pZC10eXBlICovXG5pbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7IFRodW5rQ29uZmlnIH0gZnJvbSAnQC9hcHAvcHJvdmlkZXJzL1N0b3JlUHJvdmlkZXInXG5pbXBvcnQge1xuICBnZXRBcnRpY2xlc1BhZ2VIYXNNb3JlLFxuICBnZXRBcnRpY2xlc1BhZ2VJc0xvYWRpbmcsXG4gIGdldEFydGljbGVzUGFnZU51bVxufSBmcm9tICcuLi8uLi9zZWxlY3RvcnMvYXJ0aWNsZXNQYWdlU2VsZWN0b3JzJ1xuaW1wb3J0IHsgYXJ0aWNsZVBhZ2VBY3Rpb25zIH0gZnJvbSAnLi4vLi4vc2xpY2VzL2FydGljbGVQYWdlU2xpY2UnXG5pbXBvcnQgeyBmZXRjaEFydGljbGVzTGlzdCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZldGNoQXJ0aWNsZXNMaXN0L2ZldGNoQXJ0aWNsZXNMaXN0J1xuXG5leHBvcnQgY29uc3QgZmV0Y2hOZXh0QXJ0aWNsZXNQYWdlID0gY3JlYXRlQXN5bmNUaHVuazxcbnZvaWQsXG52b2lkLFxuVGh1bmtDb25maWc8c3RyaW5nPj4oXG4gICdhcnRpY2xlUGFnZS9mZXRjaE5leHRBcnRpY2xlc1BhZ2UnLFxuICBhc3luYyAoXywgdGh1bmtBcGkpID0+IHtcbiAgICBjb25zdCB7IGdldFN0YXRlLCBkaXNwYXRjaCB9ID0gdGh1bmtBcGlcbiAgICBjb25zdCBoYXNNb3JlID0gZ2V0QXJ0aWNsZXNQYWdlSGFzTW9yZShnZXRTdGF0ZSgpKVxuICAgIGNvbnN0IHBhZ2UgPSBnZXRBcnRpY2xlc1BhZ2VOdW0oZ2V0U3RhdGUoKSlcbiAgICBjb25zdCBpc0xvYWRpbmcgPSBnZXRBcnRpY2xlc1BhZ2VJc0xvYWRpbmcoZ2V0U3RhdGUoKSlcblxuICAgIGlmIChoYXNNb3JlICYmICFpc0xvYWRpbmcpIHtcbiAgICAgIGRpc3BhdGNoKGFydGljbGVQYWdlQWN0aW9ucy5zZXRQYWdlKHBhZ2UgKyAxKSlcbiAgICAgIGRpc3BhdGNoKGZldGNoQXJ0aWNsZXNMaXN0KHt9KSlcbiAgICB9XG4gIH1cbilcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1pbnZhbGlkLXZvaWQtdHlwZSAqL1xuaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgeyBUaHVua0NvbmZpZyB9IGZyb20gJ0AvYXBwL3Byb3ZpZGVycy9TdG9yZVByb3ZpZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0QXJ0aWNsZXNQYWdlSW5pdGVkXG59IGZyb20gJy4uLy4uL3NlbGVjdG9ycy9hcnRpY2xlc1BhZ2VTZWxlY3RvcnMnXG5pbXBvcnQgeyBhcnRpY2xlUGFnZUFjdGlvbnMgfSBmcm9tICcuLi8uLi9zbGljZXMvYXJ0aWNsZVBhZ2VTbGljZSdcbmltcG9ydCB7IGZldGNoQXJ0aWNsZXNMaXN0IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmV0Y2hBcnRpY2xlc0xpc3QvZmV0Y2hBcnRpY2xlc0xpc3QnXG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICdAL3NoYXJlZC90eXBlcydcbmltcG9ydCB7IEFydGljbGVTb3J0RmllbGQsIEFydGljbGVUeXBlIH0gZnJvbSAnQC9lbnRpdGllcy9BcnRpY2xlJ1xuXG5leHBvcnQgY29uc3QgaW5pdEFydGljbGVzUGFnZSA9IGNyZWF0ZUFzeW5jVGh1bms8XG52b2lkLFxuVVJMU2VhcmNoUGFyYW1zLFxuVGh1bmtDb25maWc8c3RyaW5nPj4oXG4gICdhcnRpY2xlUGFnZS9pbml0QXJ0aWNsZXNQYWdlJyxcbiAgYXN5bmMgKHNlYXJjaFBhcmFtcywgdGh1bmtBcGkpID0+IHtcbiAgICBjb25zdCB7IGdldFN0YXRlLCBkaXNwYXRjaCB9ID0gdGh1bmtBcGlcbiAgICBjb25zdCBpbml0ZWQgPSBnZXRBcnRpY2xlc1BhZ2VJbml0ZWQoZ2V0U3RhdGUoKSlcblxuICAgIGlmICghaW5pdGVkKSB7XG4gICAgICBjb25zdCBvcmRlckZyb21VcmwgPSBzZWFyY2hQYXJhbXMuZ2V0KCdvcmRlcicpXG4gICAgICBjb25zdCBzb3J0RnJvbVVybCA9IHNlYXJjaFBhcmFtcy5nZXQoJ3NvcnQnKVxuICAgICAgY29uc3Qgc2VhcmNoRnJvbVVybCA9IHNlYXJjaFBhcmFtcy5nZXQoJ3NlYXJjaCcpXG4gICAgICBjb25zdCB0eXBlRnJvbVVybCA9IHNlYXJjaFBhcmFtcy5nZXQoJ3R5cGUnKVxuXG4gICAgICBpZiAob3JkZXJGcm9tVXJsKSB7XG4gICAgICAgIGRpc3BhdGNoKGFydGljbGVQYWdlQWN0aW9ucy5zZXRPcmRlcihvcmRlckZyb21VcmwgYXMgU29ydE9yZGVyKSlcbiAgICAgIH1cbiAgICAgIGlmIChzb3J0RnJvbVVybCkge1xuICAgICAgICBkaXNwYXRjaChhcnRpY2xlUGFnZUFjdGlvbnMuc2V0U29ydChzb3J0RnJvbVVybCBhcyBBcnRpY2xlU29ydEZpZWxkKSlcbiAgICAgIH1cbiAgICAgIGlmIChzZWFyY2hGcm9tVXJsKSB7XG4gICAgICAgIGRpc3BhdGNoKGFydGljbGVQYWdlQWN0aW9ucy5zZXRTZWFyY2goc2VhcmNoRnJvbVVybCkpXG4gICAgICB9XG4gICAgICBpZiAodHlwZUZyb21VcmwpIHtcbiAgICAgICAgZGlzcGF0Y2goYXJ0aWNsZVBhZ2VBY3Rpb25zLnNldFR5cGUodHlwZUZyb21VcmwgYXMgQXJ0aWNsZVR5cGUpKVxuICAgICAgfVxuXG4gICAgICBkaXNwYXRjaChhcnRpY2xlUGFnZUFjdGlvbnMuaW5pdFN0YXRlKCkpXG4gICAgICBkaXNwYXRjaChmZXRjaEFydGljbGVzTGlzdCh7fSkpXG4gICAgfVxuICB9XG4pXG4iLCJpbXBvcnQge1xuICBjcmVhdGVFbnRpdHlBZGFwdGVyLFxuICBjcmVhdGVTbGljZSxcbiAgUGF5bG9hZEFjdGlvblxufSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IHsgU3RhdGVTY2hlbWEgfSBmcm9tICdAL2FwcC9wcm92aWRlcnMvU3RvcmVQcm92aWRlcidcbmltcG9ydCB7IEFydGljbGUsIEFydGljbGVWaWV3LCBBcnRpY2xlVHlwZSwgQXJ0aWNsZVNvcnRGaWVsZCB9IGZyb20gJ0AvZW50aXRpZXMvQXJ0aWNsZSdcbmltcG9ydCB7IEFSVElDTEVTX1ZJRVdfTE9DQUxTVE9SQUdFX0tFWSB9IGZyb20gJ0Avc2hhcmVkL2NvbnN0L2xvY2Fsc3RvcmFnZSdcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJ0Avc2hhcmVkL3R5cGVzJ1xuaW1wb3J0IHsgZmV0Y2hBcnRpY2xlc0xpc3QgfSBmcm9tICcuLi8uLi9tb2RlbC9zZXJ2aWNlcy9mZXRjaEFydGljbGVzTGlzdC9mZXRjaEFydGljbGVzTGlzdCdcbmltcG9ydCB7IEFydGljbGVQYWdlU2NoZW1hIH0gZnJvbSAnLi4vdHlwZXMvYXJ0aWNsZVBhZ2VTY2hlbWEnXG5cbmNvbnN0IGFydGljbGVzQWRhcHRlciA9IGNyZWF0ZUVudGl0eUFkYXB0ZXI8QXJ0aWNsZT4oe1xuICBzZWxlY3RJZDogKGFydGljbGUpID0+IGFydGljbGUuaWRcbn0pXG5cbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlcyA9IGFydGljbGVzQWRhcHRlci5nZXRTZWxlY3RvcnM8U3RhdGVTY2hlbWE+KFxuICAoc3RhdGUpID0+IHN0YXRlLmFydGljbGVQYWdlIHx8IGFydGljbGVzQWRhcHRlci5nZXRJbml0aWFsU3RhdGUoKVxuKVxuXG5jb25zdCBhcnRpY2xlUGFnZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnYXJ0aWNsZVBhZ2VTbGljZScsXG4gIGluaXRpYWxTdGF0ZTogYXJ0aWNsZXNBZGFwdGVyLmdldEluaXRpYWxTdGF0ZTxBcnRpY2xlUGFnZVNjaGVtYT4oe1xuICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgICBpZHM6IFtdLFxuICAgIGVudGl0aWVzOiB7fSxcbiAgICB2aWV3OiBBcnRpY2xlVmlldy5TTUFMTCxcbiAgICBwYWdlOiAxLFxuICAgIGhhc01vcmU6IHRydWUsXG4gICAgX2luaXRlZDogZmFsc2UsXG4gICAgbGltaXQ6IDksXG4gICAgc29ydDogQXJ0aWNsZVNvcnRGaWVsZC5DUkVBVEVELFxuICAgIHNlYXJjaDogJycsXG4gICAgb3JkZXI6ICdhc2MnLFxuICAgIHR5cGU6IEFydGljbGVUeXBlLkFMTFxuICB9KSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRWaWV3OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxBcnRpY2xlVmlldz4pID0+IHtcbiAgICAgIHN0YXRlLnZpZXcgPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQVJUSUNMRVNfVklFV19MT0NBTFNUT1JBR0VfS0VZLCBhY3Rpb24ucGF5bG9hZClcbiAgICB9LFxuICAgIHNldFBhZ2U6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pID0+IHtcbiAgICAgIHN0YXRlLnBhZ2UgPSBhY3Rpb24ucGF5bG9hZFxuICAgIH0sXG4gICAgc2V0T3JkZXI6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFNvcnRPcmRlcj4pID0+IHtcbiAgICAgIHN0YXRlLm9yZGVyID0gYWN0aW9uLnBheWxvYWRcbiAgICB9LFxuICAgIHNldFNvcnQ6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEFydGljbGVTb3J0RmllbGQ+KSA9PiB7XG4gICAgICBzdGF0ZS5zb3J0ID0gYWN0aW9uLnBheWxvYWRcbiAgICB9LFxuICAgIHNldFR5cGU6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEFydGljbGVUeXBlPikgPT4ge1xuICAgICAgc3RhdGUudHlwZSA9IGFjdGlvbi5wYXlsb2FkXG4gICAgfSxcbiAgICBzZXRTZWFyY2g6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pID0+IHtcbiAgICAgIHN0YXRlLnNlYXJjaCA9IGFjdGlvbi5wYXlsb2FkXG4gICAgfSxcbiAgICBpbml0U3RhdGU6IHN0YXRlID0+IHtcbiAgICAgIGNvbnN0IHZpZXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShBUlRJQ0xFU19WSUVXX0xPQ0FMU1RPUkFHRV9LRVkpIGFzIEFydGljbGVWaWV3XG4gICAgICBzdGF0ZS52aWV3ID0gdmlld1xuICAgICAgc3RhdGUubGltaXQgPSB2aWV3ID09PSBBcnRpY2xlVmlldy5CSUcgPyA0IDogOVxuICAgICAgc3RhdGUuX2luaXRlZCA9IHRydWVcbiAgICB9XG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlclxuICAgICAgLmFkZENhc2UoZmV0Y2hBcnRpY2xlc0xpc3QucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSB1bmRlZmluZWRcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZVxuXG4gICAgICAgIGlmIChhY3Rpb24ubWV0YS5hcmcucmVwbGFjZSkge1xuICAgICAgICAgIGFydGljbGVzQWRhcHRlci5yZW1vdmVBbGwoc3RhdGUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuYWRkQ2FzZShmZXRjaEFydGljbGVzTGlzdC5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgIHN0YXRlLmhhc01vcmUgPSBhY3Rpb24ucGF5bG9hZC5sZW5ndGggPj0gc3RhdGUubGltaXRcblxuICAgICAgICBpZiAoYWN0aW9uLm1ldGEuYXJnLnJlcGxhY2UpIHtcbiAgICAgICAgICBhcnRpY2xlc0FkYXB0ZXIuc2V0QWxsKHN0YXRlLCBhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcnRpY2xlc0FkYXB0ZXIuYWRkTWFueShzdGF0ZSwgYWN0aW9uLnBheWxvYWQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuYWRkQ2FzZShmZXRjaEFydGljbGVzTGlzdC5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2VcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgfSlcbiAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHtcbiAgcmVkdWNlcjogYXJ0aWNsZVBhZ2VSZWR1Y2VyLFxuICBhY3Rpb25zOiBhcnRpY2xlUGFnZUFjdGlvbnNcbn0gPSBhcnRpY2xlUGFnZVNsaWNlXG4iLCJpbXBvcnQgeyBNdXRhYmxlUmVmT2JqZWN0LCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VEZWJvdW5jZSAoY2FsbGJhY2s6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCwgZGVsYXk6IG51bWJlcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVubmVjZXNzYXJ5LXR5cGUtYXNzZXJ0aW9uXG4gIGNvbnN0IHRpbWVyID0gdXNlUmVmKCkgYXMgTXV0YWJsZVJlZk9iamVjdDxhbnk+XG5cbiAgcmV0dXJuIHVzZUNhbGxiYWNrKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICh0aW1lci5jdXJyZW50KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIuY3VycmVudClcbiAgICB9XG4gICAgdGltZXIuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG4vbm8tY2FsbGJhY2stbGl0ZXJhbFxuICAgICAgY2FsbGJhY2soLi4uYXJncylcbiAgICB9LCBkZWxheSlcbiAgfSwgW2NhbGxiYWNrLCBkZWxheV0pXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0UXVlcnlQYXJhbXMgKHBhcmFtczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikge1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG4gIE9iamVjdC5lbnRyaWVzKHBhcmFtcykuZm9yRWFjaCgoW25hbWUsIHZhbHVlXSkgPT4ge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWFyY2hQYXJhbXMuc2V0KG5hbWUsIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGA/JHtzZWFyY2hQYXJhbXMudG9TdHJpbmcoKX1gXG59XG5cbi8vIEZ1bmN0aW9uIGZvciBhZGRpbmcgcGFyYW1zIGluIFVSTFxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUXVlcnlQYXJhbXMgKHBhcmFtczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikge1xuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIGdldFF1ZXJ5UGFyYW1zKHBhcmFtcykpXG59XG4iLCJpbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnQC9zaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcydcbmltcG9ydCB7IEFydGljbGVWaWV3IH0gZnJvbSAnQC9lbnRpdGllcy9BcnRpY2xlJ1xuaW1wb3J0IExpc3RJY29uIGZyb20gJ0Avc2hhcmVkL2Fzc2V0cy9pY29ucy9saXN0LTI0LTI0LnN2ZydcbmltcG9ydCBUaWxlZEljb24gZnJvbSAnQC9zaGFyZWQvYXNzZXRzL2ljb25zL3RpbGVkLTI0LTI0LnN2ZydcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uVGhlbWUgfSBmcm9tICdAL3NoYXJlZC91aS9CdXR0b24vQnV0dG9uJ1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0Avc2hhcmVkL3VpL0ljb24vSWNvbidcbmltcG9ydCBjbHMgZnJvbSAnLi9BcnRpY2xlVmlld1NlbGVjdG9yLm1vZHVsZS5zY3NzJ1xuXG5pbnRlcmZhY2UgQXJ0aWNsZVZpZXdTZWxlY3RvclByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHZpZXc6IEFydGljbGVWaWV3XG4gIG9uVmlld0NsaWNrPzogKHZpZXc6IEFydGljbGVWaWV3KSA9PiB2b2lkXG59XG5cbmNvbnN0IHZpZXdUeXBlcyA9IFtcbiAge1xuICAgIHZpZXc6IEFydGljbGVWaWV3LlNNQUxMLFxuICAgIGljb246IFRpbGVkSWNvblxuICB9LFxuICB7XG4gICAgdmlldzogQXJ0aWNsZVZpZXcuQklHLFxuICAgIGljb246IExpc3RJY29uXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IEFydGljbGVWaWV3U2VsZWN0b3IgPSBtZW1vKChwcm9wczogQXJ0aWNsZVZpZXdTZWxlY3RvclByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCB2aWV3LCBvblZpZXdDbGljayB9ID0gcHJvcHNcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgY29uc3Qgb25DbGljayA9IChuZXdWaWV3OiBBcnRpY2xlVmlldykgPT4gKCkgPT4ge1xuICAgIG9uVmlld0NsaWNrPy4obmV3VmlldylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuQXJ0aWNsZVZpZXdTZWxlY3Rvciwge30sIFtjbGFzc05hbWVdKX0+XG4gICAgICAgICAge3ZpZXdUeXBlcy5tYXAoKHZpZXdUeXBlKSA9PiAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e3ZpZXdUeXBlLnZpZXd9XG4gICAgICAgICAgICAgICAgdGhlbWU9e0J1dHRvblRoZW1lLkNMRUFSfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2sodmlld1R5cGUudmlldyl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgIFN2Zz17dmlld1R5cGUuaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCcnLCB7IFtjbHMubm90U2VsZWN0ZWRdOiB2aWV3VHlwZS52aWV3ICE9PSB2aWV3IH0pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVZpZXdTZWxlY3RvclxuIiwiaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnQC9zaGFyZWQvbGliL2hvb2tzL3VzZUFwcERpc3BhdGNoL3VzZUFwcERpc3BhdGNoJ1xuaW1wb3J0IHsgQXJ0aWNsZUxpc3QgfSBmcm9tICdAL2VudGl0aWVzL0FydGljbGUnXG5pbXBvcnQgeyBnZXRBcnRpY2xlcyB9IGZyb20gJy4uLy4uL21vZGVsL3NsaWNlcy9hcnRpY2xlUGFnZVNsaWNlJ1xuaW1wb3J0IHtcbiAgZ2V0QXJ0aWNsZXNQYWdlRXJyb3IsXG4gIGdldEFydGljbGVzUGFnZUhhc01vcmUsXG4gIGdldEFydGljbGVzUGFnZUluaXRlZCxcbiAgZ2V0QXJ0aWNsZXNQYWdlSXNMb2FkaW5nLFxuICBnZXRBcnRpY2xlc1BhZ2VOdW0sXG4gIGdldEFydGljbGVzUGFnZVZpZXdcbn0gZnJvbSAnLi4vLi4vbW9kZWwvc2VsZWN0b3JzL2FydGljbGVzUGFnZVNlbGVjdG9ycydcbmltcG9ydCB7IFRleHQgfSBmcm9tICdAL3NoYXJlZC91aS9UZXh0L1RleHQnXG5cbmludGVyZmFjZSBBcnRpY2xlSW5maW5pdGVMaXN0UHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IEFydGljbGVJbmZpbml0ZUxpc3QgPSBtZW1vKChwcm9wczogQXJ0aWNsZUluZmluaXRlTGlzdFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wc1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdhcnRpY2xlJylcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKClcblxuICBjb25zdCBhcnRpY2xlcyA9IHVzZVNlbGVjdG9yKGdldEFydGljbGVzLnNlbGVjdEFsbClcbiAgY29uc3QgaXNMb2FkaW5nID0gdXNlU2VsZWN0b3IoZ2V0QXJ0aWNsZXNQYWdlSXNMb2FkaW5nKVxuICBjb25zdCB2aWV3ID0gdXNlU2VsZWN0b3IoZ2V0QXJ0aWNsZXNQYWdlVmlldylcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihnZXRBcnRpY2xlc1BhZ2VFcnJvcilcbiAgY29uc3QgcGFnZSA9IHVzZVNlbGVjdG9yKGdldEFydGljbGVzUGFnZU51bSlcbiAgY29uc3QgaGFzTW9yZSA9IHVzZVNlbGVjdG9yKGdldEFydGljbGVzUGFnZUhhc01vcmUpXG4gIGNvbnN0IGluaXRlZCA9IHVzZVNlbGVjdG9yKGdldEFydGljbGVzUGFnZUluaXRlZClcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPFRleHQgdGV4dD17dCgnTWlzdGFrZSBpcyBoYXBwZW5lZCcpfSAvPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICAgIDxBcnRpY2xlTGlzdFxuICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgIHZpZXc9e3ZpZXd9XG4gICAgICAgICAgYXJ0aWNsZXM9e2FydGljbGVzfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgLz5cbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUluZmluaXRlTGlzdFxuIiwiaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IG1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnQC9zaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcydcbmltcG9ydCB7IER5bmFtaWNNb2R1bGVMb2FkZXIsIFJlZHVjZXJMaXN0IH0gZnJvbSAnQC9zaGFyZWQvbGliL2NvbXBvbmVudHMvRHluYW1pY01vZHVsZUxvYWRlci9EeW5hbWljTW9kdWxlTG9hZGVyJ1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdAL3NoYXJlZC9saWIvaG9va3MvdXNlQXBwRGlzcGF0Y2gvdXNlQXBwRGlzcGF0Y2gnXG5pbXBvcnQgeyB1c2VJbml0aWFsRWZmZWN0IH0gZnJvbSAnQC9zaGFyZWQvbGliL2hvb2tzL3VzZUluaXRpYWxFZmZlY3QvdXNlSW5pdGlhbEVmZmVjdCdcbmltcG9ydCBQYWdlIGZyb20gJ0Avd2lkZ2V0cy9QYWdlL1BhZ2UnXG5pbXBvcnQgeyBhcnRpY2xlUGFnZVJlZHVjZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9zbGljZXMvYXJ0aWNsZVBhZ2VTbGljZSdcbmltcG9ydCB7IGZldGNoTmV4dEFydGljbGVzUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3NlcnZpY2VzL2ZldGNoTmV4dEFydGljbGVzUGFnZS9mZXRjaE5leHRBcnRpY2xlc1BhZ2UnXG5pbXBvcnQgeyBpbml0QXJ0aWNsZXNQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VydmljZXMvaW5pdEFydGljbGVzUGFnZS9pbml0QXJ0aWNsZXNQYWdlJ1xuaW1wb3J0IEFydGljbGVzUGFnZUZpbHRlcnMgZnJvbSAnLi4vQXJ0aWNsZXNQYWdlRmlsdGVycy9BcnRpY2xlc1BhZ2VGaWx0ZXJzJ1xuaW1wb3J0IEFydGljbGVJbmZpbml0ZUxpc3QgZnJvbSAnLi4vQXJ0aWNsZUluZmluaXRlTGlzdC9BcnRpY2xlSW5maW5pdGVMaXN0J1xuaW1wb3J0IGNscyBmcm9tICcuL0FydGljbGVQYWdlLm1vZHVsZS5zY3NzJ1xuXG5pbnRlcmZhY2UgQXJ0aWNsZVBhZ2VQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xufVxuXG5jb25zdCByZWR1Y2VyczogUmVkdWNlckxpc3QgPSB7XG4gIGFydGljbGVQYWdlOiBhcnRpY2xlUGFnZVJlZHVjZXJcbn1cblxuZXhwb3J0IGNvbnN0IEFydGljbGVzUGFnZSA9ICh7IGNsYXNzTmFtZSB9OiBBcnRpY2xlUGFnZVByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2FydGljbGUnKVxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKClcblxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpXG5cbiAgY29uc3Qgb25Mb2FkTmV4dFBhcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hOZXh0QXJ0aWNsZXNQYWdlKCkpXG4gIH0sIFtkaXNwYXRjaF0pXG5cbiAgdXNlSW5pdGlhbEVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goaW5pdEFydGljbGVzUGFnZShzZWFyY2hQYXJhbXMpKVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgICA8RHluYW1pY01vZHVsZUxvYWRlciByZWR1Y2Vycz17cmVkdWNlcnN9IHJlbW92ZUFmdGVyVW5tb3VudD17ZmFsc2V9PlxuICAgICAgICAgIDxQYWdlXG4gICAgICAgICAgICAgIG9uU2Nyb2xsRW5kPXtvbkxvYWROZXh0UGFydH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCcnLCB7fSwgW2NsYXNzTmFtZV0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFydGljbGVzUGFnZUZpbHRlcnMgLz5cbiAgICAgICAgICAgICAgPEFydGljbGVJbmZpbml0ZUxpc3QgY2xhc3NOYW1lPXtjbHMubGlzdH0gLz5cbiAgICAgICAgICA8L1BhZ2U+XG4gICAgICA8L0R5bmFtaWNNb2R1bGVMb2FkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhBcnRpY2xlc1BhZ2UpXG4iLCJpbXBvcnQgeyBtZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdAL3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJ1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdAL3NoYXJlZC9saWIvaG9va3MvdXNlQXBwRGlzcGF0Y2gvdXNlQXBwRGlzcGF0Y2gnXG5pbXBvcnQgeyBnZXRBcnRpY2xlc1BhZ2VPcmRlciwgZ2V0QXJ0aWNsZXNQYWdlU2VhcmNoLCBnZXRBcnRpY2xlc1BhZ2VTb3J0LCBnZXRBcnRpY2xlc1BhZ2VUeXBlLCBnZXRBcnRpY2xlc1BhZ2VWaWV3IH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VsZWN0b3JzL2FydGljbGVzUGFnZVNlbGVjdG9ycydcbmltcG9ydCB7IGFydGljbGVQYWdlQWN0aW9ucyB9IGZyb20gJy4uLy4uL21vZGVsL3NsaWNlcy9hcnRpY2xlUGFnZVNsaWNlJ1xuaW1wb3J0IHsgQXJ0aWNsZVZpZXdTZWxlY3RvciB9IGZyb20gJ0AvZmVhdHVyZXMvQXJ0aWNsZVZpZXdTZWxlY3RvcidcbmltcG9ydCB7IEFydGljbGVTb3J0U2VsZWN0b3IsIEFydGljbGVUeXBlVGFicywgQXJ0aWNsZVZpZXcgfSBmcm9tICdAL2VudGl0aWVzL0FydGljbGUnXG5pbXBvcnQgQ2FyZCBmcm9tICdAL3NoYXJlZC91aS9DYXJkL0NhcmQnXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Avc2hhcmVkL3VpL0lucHV0L0lucHV0J1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnQC9zaGFyZWQvdHlwZXMnXG5pbXBvcnQgeyBBcnRpY2xlU29ydEZpZWxkLCBBcnRpY2xlVHlwZSB9IGZyb20gJ0AvZW50aXRpZXMvQXJ0aWNsZS9pbmRleCdcbmltcG9ydCB7IGZldGNoQXJ0aWNsZXNMaXN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VydmljZXMvZmV0Y2hBcnRpY2xlc0xpc3QvZmV0Y2hBcnRpY2xlc0xpc3QnXG5pbXBvcnQgeyB1c2VEZWJvdW5jZSB9IGZyb20gJ0Avc2hhcmVkL2xpYi9ob29rcy91c2VEZWJvdW5jZS91c2VEZWJvdW5jZSdcbmltcG9ydCBjbHMgZnJvbSAnLi9BcnRpY2xlc1BhZ2VGaWx0ZXJzLm1vZHVsZS5zY3NzJ1xuXG5pbnRlcmZhY2UgQXJ0aWNsZXNQYWdlRmlsdGVyc1Byb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBBcnRpY2xlc1BhZ2VGaWx0ZXJzID0gbWVtbygocHJvcHM6IEFydGljbGVzUGFnZUZpbHRlcnNQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcHNcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbignYXJ0aWNsZScpXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxuICBjb25zdCB2aWV3ID0gdXNlU2VsZWN0b3IoZ2V0QXJ0aWNsZXNQYWdlVmlldylcbiAgY29uc3Qgc29ydCA9IHVzZVNlbGVjdG9yKGdldEFydGljbGVzUGFnZVNvcnQpXG4gIGNvbnN0IG9yZGVyID0gdXNlU2VsZWN0b3IoZ2V0QXJ0aWNsZXNQYWdlT3JkZXIpXG4gIGNvbnN0IHNlYXJjaCA9IHVzZVNlbGVjdG9yKGdldEFydGljbGVzUGFnZVNlYXJjaClcbiAgY29uc3QgdHlwZSA9IHVzZVNlbGVjdG9yKGdldEFydGljbGVzUGFnZVR5cGUpXG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoQXJ0aWNsZXNMaXN0KHsgcmVwbGFjZTogdHJ1ZSB9KSlcbiAgfSwgW2Rpc3BhdGNoXSlcblxuICBjb25zdCBkZWJvdW5jZWRGZXRjaERhdGEgPSB1c2VEZWJvdW5jZShmZXRjaERhdGEsIDUwMClcblxuICBjb25zdCBvbkNoYW5nZVZpZXcgPSB1c2VDYWxsYmFjaygodmlldzogQXJ0aWNsZVZpZXcpID0+IHtcbiAgICBkaXNwYXRjaChhcnRpY2xlUGFnZUFjdGlvbnMuc2V0Vmlldyh2aWV3KSlcbiAgICBkaXNwYXRjaChhcnRpY2xlUGFnZUFjdGlvbnMuc2V0UGFnZSgxKSlcbiAgfSwgW2Rpc3BhdGNoXSlcblxuICBjb25zdCBvbkNoYW5nZVNvcnQgPSB1c2VDYWxsYmFjaygobmV3U29ydDogQXJ0aWNsZVNvcnRGaWVsZCkgPT4ge1xuICAgIGRpc3BhdGNoKGFydGljbGVQYWdlQWN0aW9ucy5zZXRTb3J0KG5ld1NvcnQpKVxuICAgIGRpc3BhdGNoKGFydGljbGVQYWdlQWN0aW9ucy5zZXRQYWdlKDEpKVxuICAgIGZldGNoRGF0YSgpXG4gIH0sIFtkaXNwYXRjaCwgZmV0Y2hEYXRhXSlcblxuICBjb25zdCBvbkNoYW5nZU9yZGVyID0gdXNlQ2FsbGJhY2soKG5ld09yZGVyOiBTb3J0T3JkZXIpID0+IHtcbiAgICBkaXNwYXRjaChhcnRpY2xlUGFnZUFjdGlvbnMuc2V0T3JkZXIobmV3T3JkZXIpKVxuICAgIGRpc3BhdGNoKGFydGljbGVQYWdlQWN0aW9ucy5zZXRQYWdlKDEpKVxuICAgIGZldGNoRGF0YSgpXG4gIH0sIFtkaXNwYXRjaCwgZmV0Y2hEYXRhXSlcblxuICBjb25zdCBvbkNoYW5nZVNlYXJjaCA9IHVzZUNhbGxiYWNrKChzZWFyY2g6IHN0cmluZykgPT4ge1xuICAgIGRpc3BhdGNoKGFydGljbGVQYWdlQWN0aW9ucy5zZXRTZWFyY2goc2VhcmNoKSlcbiAgICBkaXNwYXRjaChhcnRpY2xlUGFnZUFjdGlvbnMuc2V0UGFnZSgxKSlcbiAgICBkZWJvdW5jZWRGZXRjaERhdGEoKVxuICB9LCBbZGlzcGF0Y2gsIGRlYm91bmNlZEZldGNoRGF0YV0pXG5cbiAgY29uc3Qgb25DaGFuZ2VUeXBlID0gdXNlQ2FsbGJhY2soKHZhbHVlOiBBcnRpY2xlVHlwZSkgPT4ge1xuICAgIGRpc3BhdGNoKGFydGljbGVQYWdlQWN0aW9ucy5zZXRUeXBlKHZhbHVlKSlcbiAgICBkaXNwYXRjaChhcnRpY2xlUGFnZUFjdGlvbnMuc2V0UGFnZSgxKSlcbiAgICBmZXRjaERhdGEoKVxuICB9LCBbZGlzcGF0Y2gsIGZldGNoRGF0YV0pXG5cbiAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5BcnRpY2xlc1BhZ2VGaWx0ZXJzLCB7fSwgW2NsYXNzTmFtZV0pfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzLnNvcnRXcmFwcGVyfT5cbiAgICAgICAgICAgICAgPEFydGljbGVTb3J0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICBvcmRlcj17b3JkZXJ9XG4gICAgICAgICAgICAgICAgc29ydD17c29ydH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZU9yZGVyPXtvbkNoYW5nZU9yZGVyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlU29ydD17b25DaGFuZ2VTb3J0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QXJ0aWNsZVZpZXdTZWxlY3RvciB2aWV3PXt2aWV3fSBvblZpZXdDbGljaz17b25DaGFuZ2VWaWV3fS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbHMuc2VhcmNofT5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VTZWFyY2h9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ1NlYXJjaCcpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8QXJ0aWNsZVR5cGVUYWJzXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nscy50YWJzfVxuICAgICAgICAgICAgdmFsdWU9e3R5cGV9XG4gICAgICAgICAgICBvbkNoYW5nZVR5cGU9e29uQ2hhbmdlVHlwZX1cbiAgICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzUGFnZUZpbHRlcnNcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNyYy1mZWF0dXJlcy1BcnRpY2xlVmlld1NlbGVjdG9yLXVpLUFydGljbGVWaWV3U2VsZWN0b3ItbW9kdWxlX19ub3RTZWxlY3RlZC0tZGFxdjUge1xcbiAgZmlsbDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2ZlYXR1cmVzL0FydGljbGVWaWV3U2VsZWN0b3IvdWkvQXJ0aWNsZVZpZXdTZWxlY3Rvci5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLDRCQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5vdFNlbGVjdGVkIHtcXG4gICAgZmlsbDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibm90U2VsZWN0ZWRcIjogXCJzcmMtZmVhdHVyZXMtQXJ0aWNsZVZpZXdTZWxlY3Rvci11aS1BcnRpY2xlVmlld1NlbGVjdG9yLW1vZHVsZV9fbm90U2VsZWN0ZWQtLWRhcXY1XCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNyYy1wYWdlcy1BcnRpY2xlc1BhZ2UtdWktQXJ0aWNsZXNQYWdlLUFydGljbGVQYWdlLW1vZHVsZV9fQXJ0aWNsZVBhZ2UtLUc1ajNOIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zcmMtcGFnZXMtQXJ0aWNsZXNQYWdlLXVpLUFydGljbGVzUGFnZS1BcnRpY2xlUGFnZS1tb2R1bGVfX2xpc3QtLVF2bnBoIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9BcnRpY2xlc1BhZ2UvdWkvQXJ0aWNsZXNQYWdlL0FydGljbGVQYWdlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkFydGljbGVQYWdlIHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJBcnRpY2xlUGFnZVwiOiBcInNyYy1wYWdlcy1BcnRpY2xlc1BhZ2UtdWktQXJ0aWNsZXNQYWdlLUFydGljbGVQYWdlLW1vZHVsZV9fQXJ0aWNsZVBhZ2UtLUc1ajNOXCIsXG5cdFwibGlzdFwiOiBcInNyYy1wYWdlcy1BcnRpY2xlc1BhZ2UtdWktQXJ0aWNsZXNQYWdlLUFydGljbGVQYWdlLW1vZHVsZV9fbGlzdC0tUXZucGhcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3JjLXBhZ2VzLUFydGljbGVzUGFnZS11aS1BcnRpY2xlc1BhZ2VGaWx0ZXJzLUFydGljbGVzUGFnZUZpbHRlcnMtbW9kdWxlX19zb3J0V3JhcHBlci0tcHlPam8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zcmMtcGFnZXMtQXJ0aWNsZXNQYWdlLXVpLUFydGljbGVzUGFnZUZpbHRlcnMtQXJ0aWNsZXNQYWdlRmlsdGVycy1tb2R1bGVfX3NlYXJjaC0tUWtOU2Uge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLnNyYy1wYWdlcy1BcnRpY2xlc1BhZ2UtdWktQXJ0aWNsZXNQYWdlRmlsdGVycy1BcnRpY2xlc1BhZ2VGaWx0ZXJzLW1vZHVsZV9fdGFicy0tSkhiYzQge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL0FydGljbGVzUGFnZS91aS9BcnRpY2xlc1BhZ2VGaWx0ZXJzL0FydGljbGVzUGFnZUZpbHRlcnMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNvcnRXcmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2VhcmNoIHtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLnRhYnMge1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzb3J0V3JhcHBlclwiOiBcInNyYy1wYWdlcy1BcnRpY2xlc1BhZ2UtdWktQXJ0aWNsZXNQYWdlRmlsdGVycy1BcnRpY2xlc1BhZ2VGaWx0ZXJzLW1vZHVsZV9fc29ydFdyYXBwZXItLXB5T2pvXCIsXG5cdFwic2VhcmNoXCI6IFwic3JjLXBhZ2VzLUFydGljbGVzUGFnZS11aS1BcnRpY2xlc1BhZ2VGaWx0ZXJzLUFydGljbGVzUGFnZUZpbHRlcnMtbW9kdWxlX19zZWFyY2gtLVFrTlNlXCIsXG5cdFwidGFic1wiOiBcInNyYy1wYWdlcy1BcnRpY2xlc1BhZ2UtdWktQXJ0aWNsZXNQYWdlRmlsdGVycy1BcnRpY2xlc1BhZ2VGaWx0ZXJzLW1vZHVsZV9fdGFicy0tSkhiYzRcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZVZpZXdTZWxlY3Rvci5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVWaWV3U2VsZWN0b3IubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZVZpZXdTZWxlY3Rvci5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVQYWdlLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZVBhZ2UubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZVBhZ2UubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcnRpY2xlc1BhZ2VGaWx0ZXJzLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZXNQYWdlRmlsdGVycy5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcnRpY2xlc1BhZ2VGaWx0ZXJzLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbIkFydGljbGVWaWV3U2VsZWN0b3IiLCJBcnRpY2xlVmlldyIsIkFydGljbGVTb3J0RmllbGQiLCJBcnRpY2xlVHlwZSIsImdldEFydGljbGVzUGFnZUlzTG9hZGluZyIsInN0YXRlIiwiYXJ0aWNsZVBhZ2UiLCJpc0xvYWRpbmciLCJnZXRBcnRpY2xlc1BhZ2VFcnJvciIsImVycm9yIiwiZ2V0QXJ0aWNsZXNQYWdlVmlldyIsInZpZXciLCJTTUFMTCIsImdldEFydGljbGVzUGFnZU51bSIsInBhZ2UiLCJnZXRBcnRpY2xlc1BhZ2VMaW1pdCIsImxpbWl0IiwiZ2V0QXJ0aWNsZXNQYWdlSGFzTW9yZSIsImhhc01vcmUiLCJnZXRBcnRpY2xlc1BhZ2VJbml0ZWQiLCJfaW5pdGVkIiwiZ2V0QXJ0aWNsZXNQYWdlT3JkZXIiLCJvcmRlciIsImdldEFydGljbGVzUGFnZVNvcnQiLCJzb3J0IiwiQ1JFQVRFRCIsImdldEFydGljbGVzUGFnZVNlYXJjaCIsInNlYXJjaCIsImdldEFydGljbGVzUGFnZVR5cGUiLCJ0eXBlIiwiQUxMIiwiY3JlYXRlQXN5bmNUaHVuayIsImFkZFF1ZXJ5UGFyYW1zIiwiZmV0Y2hBcnRpY2xlc0xpc3QiLCJwcm9wcyIsInRodW5rQXBpIiwiZXh0cmEiLCJyZWplY3RXaXRoVmFsdWUiLCJnZXRTdGF0ZSIsInJlc3BvbnNlIiwiYXBpIiwiZ2V0IiwicGFyYW1zIiwiX2V4cGFuZCIsIl9saW1pdCIsIl9wYWdlIiwiX3NvcnQiLCJfb3JkZXIiLCJxIiwidW5kZWZpbmVkIiwiZGF0YSIsIkVycm9yIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJhcnRpY2xlUGFnZUFjdGlvbnMiLCJmZXRjaE5leHRBcnRpY2xlc1BhZ2UiLCJfIiwiZGlzcGF0Y2giLCJzZXRQYWdlIiwiaW5pdEFydGljbGVzUGFnZSIsInNlYXJjaFBhcmFtcyIsImluaXRlZCIsIm9yZGVyRnJvbVVybCIsInNvcnRGcm9tVXJsIiwic2VhcmNoRnJvbVVybCIsInR5cGVGcm9tVXJsIiwic2V0T3JkZXIiLCJzZXRTb3J0Iiwic2V0U2VhcmNoIiwic2V0VHlwZSIsImluaXRTdGF0ZSIsImNyZWF0ZUVudGl0eUFkYXB0ZXIiLCJjcmVhdGVTbGljZSIsIkFSVElDTEVTX1ZJRVdfTE9DQUxTVE9SQUdFX0tFWSIsImFydGljbGVzQWRhcHRlciIsInNlbGVjdElkIiwiYXJ0aWNsZSIsImlkIiwiZ2V0QXJ0aWNsZXMiLCJnZXRTZWxlY3RvcnMiLCJnZXRJbml0aWFsU3RhdGUiLCJhcnRpY2xlUGFnZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsImlkcyIsImVudGl0aWVzIiwicmVkdWNlcnMiLCJzZXRWaWV3IiwiYWN0aW9uIiwicGF5bG9hZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwiQklHIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsIm1ldGEiLCJhcmciLCJyZXBsYWNlIiwicmVtb3ZlQWxsIiwiZnVsZmlsbGVkIiwibGVuZ3RoIiwic2V0QWxsIiwiYWRkTWFueSIsInJlamVjdGVkIiwicmVkdWNlciIsImFydGljbGVQYWdlUmVkdWNlciIsImFjdGlvbnMiLCJ1c2VDYWxsYmFjayIsInVzZVJlZiIsInVzZURlYm91bmNlIiwiY2FsbGJhY2siLCJkZWxheSIsIl9zIiwidGltZXIiLCJfbGVuIiwiYXJndW1lbnRzIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImN1cnJlbnQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZ2V0UXVlcnlQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwiX3JlZiIsInZhbHVlIiwic2V0IiwidG9TdHJpbmciLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwibWVtbyIsInVzZVRyYW5zbGF0aW9uIiwiY2xhc3NOYW1lcyIsIkxpc3RJY29uIiwiVGlsZWRJY29uIiwiQnV0dG9uIiwiQnV0dG9uVGhlbWUiLCJJY29uIiwiY2xzIiwianN4IiwiX2pzeCIsInZpZXdUeXBlcyIsImljb24iLCJfYyIsImNsYXNzTmFtZSIsIm9uVmlld0NsaWNrIiwidCIsImkxOG4iLCJvbkNsaWNrIiwibmV3VmlldyIsImNoaWxkcmVuIiwibWFwIiwidmlld1R5cGUiLCJ0aGVtZSIsIkNMRUFSIiwiU3ZnIiwibm90U2VsZWN0ZWQiLCJfYzIiLCIkUmVmcmVzaFJlZyQiLCJ1c2VTZWxlY3RvciIsInVzZUFwcERpc3BhdGNoIiwiQXJ0aWNsZUxpc3QiLCJUZXh0IiwiQXJ0aWNsZUluZmluaXRlTGlzdCIsImFydGljbGVzIiwic2VsZWN0QWxsIiwidGV4dCIsInVzZVNlYXJjaFBhcmFtcyIsIkR5bmFtaWNNb2R1bGVMb2FkZXIiLCJ1c2VJbml0aWFsRWZmZWN0IiwiUGFnZSIsIkFydGljbGVzUGFnZUZpbHRlcnMiLCJqc3hzIiwiX2pzeHMiLCJBcnRpY2xlc1BhZ2UiLCJvbkxvYWROZXh0UGFydCIsInJlbW92ZUFmdGVyVW5tb3VudCIsIm9uU2Nyb2xsRW5kIiwibGlzdCIsIkFydGljbGVTb3J0U2VsZWN0b3IiLCJBcnRpY2xlVHlwZVRhYnMiLCJDYXJkIiwiSW5wdXQiLCJmZXRjaERhdGEiLCJkZWJvdW5jZWRGZXRjaERhdGEiLCJvbkNoYW5nZVZpZXciLCJvbkNoYW5nZVNvcnQiLCJuZXdTb3J0Iiwib25DaGFuZ2VPcmRlciIsIm5ld09yZGVyIiwib25DaGFuZ2VTZWFyY2giLCJvbkNoYW5nZVR5cGUiLCJzb3J0V3JhcHBlciIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ0YWJzIl0sInNvdXJjZVJvb3QiOiIifQ==