"use strict";
self["webpackHotUpdatechrome_extension_boilerplate_react"]("popup",{

/***/ "./src/containers/ThemeList/ThemeList.jsx":
/*!************************************************!*\
  !*** ./src/containers/ThemeList/ThemeList.jsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_ThemeList_ThemeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/ThemeList/ThemeItem */ "./src/containers/ThemeList/ThemeItem.jsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



class ThemeList extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  state = {
    name: 'dev',
    themes: []
  };
  getStoredThemes() {
    chrome.storage.local.get(["themes"]).then(result => {
      console.log(result);
      console.log(Object.keys(result).length);
      // console.log("Value currently is " + result.themes);

      // console.log('getStoredthemes');
      // console.log([...result.themes]);
      let themes = [];
      if (Object.keys(result).length > 0) {
        themes = [...result.themes];
      }
      this.setState({
        name: 'new name!',
        themes: themes
      });
    });
  }
  clearStorage() {
    chrome.storage.local.clear(function () {
      var error = chrome.runtime.lastError;
      if (error) {
        console.error(error);
      }
    });
    // chrome.storage.sync.clear(); // callback is optional
  }

  componentDidMount() {
    this.getStoredThemes();
    chrome.storage.onChanged.addListener((changes, namespace) => {
      this.getStoredThemes();
    });
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: "divide-y divide-gray-100"
    }, this.state.themes.length > 0 && this.state.themes.map((itemData, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_ThemeList_ThemeItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: i,
      itemData: itemData
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r mt-4",
      onClick: this.clearStorage
    }, "Clear Storage"));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeList);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
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

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("af9aa4d958e9c023ee0f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.e6fe598f6cad7c440205.hot-update.js.map