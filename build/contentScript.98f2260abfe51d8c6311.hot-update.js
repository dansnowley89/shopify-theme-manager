self["webpackHotUpdatechrome_extension_boilerplate_react"]("contentScript",{

/***/ "./src/pages/Content/index.js":
/*!************************************!*\
  !*** ./src/pages/Content/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function checkIframeLoaded() {
  // Get a handle to the iframe element
  var iframeContainer = document.getElementById('AppFrameMain');
  const iframe = iframeContainer.querySelectorAll('iframe');
  if (iframe.length === 1) {
    const iframeDoc = iframe[0].contentWindow.document;
    if (iframeDoc.readyState === 'complete') {
      const themes = [];
      let themeCount = 0;

      // Listener for when '...' is clicked
      const ddMenu = iframeDoc.querySelectorAll('[aria-label="Click for more theme actions"]');
      for (let i = 0; i < ddMenu.length; i++) {
        // eslint-disable-next-line no-loop-func
        ddMenu[i].addEventListener('click', () => {
          setTimeout(() => {
            const previewLink = iframeDoc.querySelectorAll('[aria-label="Preview (opens in a new window)"]');

            // TODO: Add to extension for when left and right mouse button(context menu) is clicked.
            previewLink[0].addEventListener('click', e => {
              addToExtension(e.currentTarget.getAttribute('href'), themeCount, themes);
              themeCount++;
            });
            previewLink[0].addEventListener('contextmenu', e => {
              addToExtension(e.currentTarget.getAttribute('href'), themeCount, themes);
              themeCount++;
            });
          }, 500);
        });
      }
      return;
    }
    function addToExtension(theme, themeCount, themeArr) {
      // Get currently locally stored themes.
      chrome.storage.local.get(["themes"]).then(result => {
        themeArr[themeCount] = {
          previewLink: theme
          // TODO: Take the 'theme' var, take the preview theme id and assemble it to customiser url.
          // customiserLink: linksSelect[1].getAttribute('href')
        };

        let combinedThemeArray;
        if (result.themes) {
          const storedThemes = result.themes;
          combinedThemeArray = [themeArr[themeCount], ...storedThemes];
        } else {
          combinedThemeArray = [...themeArr];
        }
        chrome.storage.local.clear(function () {
          var error = chrome.runtime.lastError;
          if (error) {
            console.error(error);
          }
          // Set storage after clearing existing.
          chrome.storage.local.set({
            themes: combinedThemeArray
          }).then(() => {
            console.log("Links set");
          });
        });
        chrome.storage.sync.clear(); // callback is optional
      });
    }
  }

  // Keep checking unless found iframe
  window.setTimeout(checkIframeLoaded, 5000);
}
window.addEventListener("load", () => {
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
/******/ 	__webpack_require__.h = () => ("eb498f724f6a7189a986")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=contentScript.98f2260abfe51d8c6311.hot-update.js.map