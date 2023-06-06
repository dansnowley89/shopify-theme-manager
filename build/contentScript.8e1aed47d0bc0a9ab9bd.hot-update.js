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
// const links = [{
//   link1: 'www.previewlink.com',
//   link2: 'www.customiserlink.com'
// },
// {
//   link1: 'www.previewlink.com',
//   link2: 'www.customiserlink.com'
// }];

const links = [];
for (const item of themeLinks) {
  // eslint-disable-next-line no-loop-func
  item.addEventListener('click', e => {
    e.preventDefault();

    // Get items from within current element.
    const container = e.target.parentNode;

    // Get links
    const linksSelect = container.querySelectorAll('.js-test-link');
    for (const link of linksSelect) {
      console.log(link.getAttribute('href'));
      const newLink = link.getAttribute('href');
      links.push(newLink);
    }
    console.log('links!!!');
    console.log(links);
    chrome.storage.local.set({
      links: links
    }).then(() => {
      console.log("Links set");
    });
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
/******/ 	__webpack_require__.h = () => ("2838d7f6064e1ddcac9f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=contentScript.8e1aed47d0bc0a9ab9bd.hot-update.js.map