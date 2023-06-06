self["webpackHotUpdatechrome_extension_boilerplate_react"]("contentScript",{

/***/ "./src/pages/Content/index.js":
/*!************************************!*\
  !*** ./src/pages/Content/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

const themeLinks = document.querySelectorAll('.js-test-link');

// Structure of links for localstorage
// const themes = [{}, {}];
const themes = [];
let i = 0;
for (const item of themeLinks) {
  // eslint-disable-next-line no-loop-func
  item.addEventListener('click', e => {
    e.preventDefault();

    // Get items from within current element.
    const container = e.target.parentNode;

    // Get links
    const linksSelect = container.querySelectorAll('.js-test-link');
    themes[i] = {
      previewLink: linksSelect[0].getAttribute('href'),
      customiserLink: linksSelect[1].getAttribute('href')
    };
    chrome.storage.local.set({
      themes: themes
    }).then(() => {
      console.log("Links set");
    });
    i++;
  });
}

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
/******/ 	__webpack_require__.h = () => ("773c5579e638c7d4ae7e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=contentScript.a73b31328067188372d0.hot-update.js.map