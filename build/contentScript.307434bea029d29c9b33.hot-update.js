self["webpackHotUpdatechrome_extension_boilerplate_react"]("contentScript",{

/***/ "./src/pages/Content/index.js":
/*!************************************!*\
  !*** ./src/pages/Content/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function checkIframeLoaded() {
  console.log('test');

  // Get a handle to the iframe element
  var iframeContainer = document.getElementById('AppFrameMain');
  console.log(iframeContainer);
  const iframe = iframeContainer.querySelectorAll('iframe');
  console.log('iframe');
  console.log(iframe);
  if (iframe.length === 1) {
    console.log('"___"');
    console.log(iframe);

    // console.log(iframe);

    console.log(iframe[0].contentDocument);
    console.log(iframe[0].contentWindow.document);
    const iframeDoc = iframe[0].contentWindow.document;
    if (iframeDoc.readyState === 'complete') {
      console.log('HERE!!!!!');
      const cards = iframeDoc.querySelectorAll('[class^="Polaris-ButtonGroup__Item"]');
      const themes = [];
      let themeCount = 0;
      for (let i = 0; i < cards.length; i++) {
        const buttons = cards[i].querySelectorAll('[class^="Polaris-Button"]');
        for (const button of buttons) {
          if (button.nodeName === "A") {
            console.log('button');
            console.log(button);
            // eslint-disable-next-line no-loop-func
            button.addEventListener('click', e => {
              console.log('Clicked....');
              console.log(e.target.innerText);
              //Add customise link. 
              if (e.target.innerText === 'Customize') {
                // Set theme
                themes[themeCount] = {
                  previewLink: null,
                  customiserLink: e.target.getAttribute('href')
                };
                console.log(themes);
                chrome.storage.local.set({
                  themes: themes
                }).then(() => {
                  console.log("Links set");
                });
              }
              themeCount++;
            });
          }
        }
      }
      ;
      return;
    }
  }

  // Keep checking unless found iframe
  window.setTimeout(checkIframeLoaded, 5000);
}
function afterLoading() {
  alert("I am here");
}
window.addEventListener("load", event => {
  checkIframeLoaded();
});
console.log('here');

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
/******/ 	__webpack_require__.h = () => ("f5205d03883ac5402d6d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=contentScript.307434bea029d29c9b33.hot-update.js.map