self["webpackHotUpdatechrome_extension_boilerplate_react"]("contentScript",{

/***/ "./src/pages/Content/index.js":
/*!************************************!*\
  !*** ./src/pages/Content/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

// TODO: 
// 1. Testing
// 2. check to see if the theme already exists in tab - if it is remove previous one.

init();
function init() {
  // Use regex on document to test for a Shopify site - https://github.com/Shopify/shopify-theme-inspector/blob/master/src/detectShopify.ts
  const scripts = document.querySelectorAll('script');
  for (let i = 0; i < scripts.length; i++) {
    const content = scripts[i].textContent;
    if (typeof content === 'string') {
      if (/Shopify\.shop\s*=/.test(content)) {
        console.log(content);

        // eval(content)

        const jsonString = content;

        // Regular expression to match JSON objects from contents of script tag.
        const regex = /{[^}]*}/g;
        const objectsArray = jsonString.match(regex);
        if (objectsArray) {
          const parsedObjects = objectsArray.map(objectString => JSON.parse(objectString));
          console.log(parsedObjects);
          console.log(parsedObjects.filter(item => item.id));
          const theme = parsedObjects.filter(item => item.id)[0];
          const hostDomain = `https://${window.location.host}`;
          const customiserUrl = `${hostDomain}/admin/themes/${theme.id}/editor`;
          const previewUrl = `${hostDomain}/?preview_theme_id=${theme.id}`;
          const themeData = [theme.name, previewUrl, customiserUrl, hostDomain];
          addToExtension(themeData, 0, []);
        } else {
          console.log("No objects found in the string.");
        }
        break;
      }
    }
  }
}
function addToExtension(theme, themeCount, themeArr) {
  // Get currently locally stored themes.
  chrome.storage.local.get(["themes"]).then(result => {
    themeArr[themeCount] = {
      themeHeading: theme[0],
      previewLink: theme[1],
      customiserLink: theme[2],
      storeDomain: theme[3]
    };
    let combinedThemeArray;
    let storedThemes = [];
    if (result.themes) {
      storedThemes = result.themes;
    }
    combinedThemeArray = [themeArr[themeCount], ...storedThemes];
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
/******/ 	__webpack_require__.h = () => ("f445dbb6d2c1be3dae2a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=contentScript.7375dd1891a49b8ef9eb.hot-update.js.map