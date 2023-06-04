"use strict";
self["webpackHotUpdatechrome_extension_boilerplate_react"]("contentScript",{

/***/ "./src/pages/Content/index.js":
/*!************************************!*\
  !*** ./src/pages/Content/index.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/print */ "./src/pages/Content/modules/print.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.......');
console.log('ok?!!?!?!?!?.?!');
(0,_modules_print__WEBPACK_IMPORTED_MODULE_0__.printLine)("Using the 'printLine' function from the Print Module");
const themeLinks = document.querySelectorAll('.js-test-link');
console.log(themeLinks);

// Structure of links for localstorage
const links = [{
  link1: 'www.previewlink.com',
  link2: 'www.customiserlink.com'
}, {
  link1: 'www.previewlink.com',
  link2: 'www.customiserlink.com'
}];
for (const item of themeLinks) {
  item.addEventListener('click', e => {
    e.preventDefault();
    chrome.storage.local.set({
      links: links
    }).then(() => {
      console.log("Value is set");
    });

    //TODO: Move this to pop up.
    // chrome.storage.local.get(["links"]).then((result) => {
    //   console.log(result);
    //   console.log("Value currently is " + result.links);
    // });
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
/******/ 	__webpack_require__.h = () => ("1272bf38d5f399f12668")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=contentScript.3e2bd2db417ec04bf245.hot-update.js.map