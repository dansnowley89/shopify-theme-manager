// TODO: 
// 1. Testing

init();

function init() {
  // Use regex on document to test for a Shopify site - https://github.com/Shopify/shopify-theme-inspector/blob/master/src/detectShopify.ts
  const scripts = document.querySelectorAll('script');
  for (let i = 0; i < scripts.length; i++) {
    const content = scripts[i].textContent;

    if (typeof content === 'string') {

      if (/Shopify\.shop\s*=/.test(content)) {
        const jsonString = content;

        // Regular expression to match JSON objects from contents of script tag.
        const regex = /{[^}]*}/g;
        const objectsArray = jsonString.match(regex);

        if (objectsArray) {
          const parsedObjects = objectsArray.map(objectString => JSON.parse(objectString));

          const theme = parsedObjects.filter((item) => item.id)[0]
          const hostDomain = `https://${window.location.host}`;
          const customiserUrl = `${hostDomain}/admin/themes/${theme.id}/editor`;
          const previewUrl = `${hostDomain}/?preview_theme_id=${theme.id}`;
          const themeData = [theme.name, previewUrl, customiserUrl, hostDomain];

          addToExtension(themeData, 0)

        } else {
          console.log("No objects found in the string.");
        }

        break;
      }
    }
  }
}

function addToExtension(theme, themeCount) {
  const themeArr = [];
  // Get currently locally stored themes.
  chrome.storage.local.get(["themes"]).then((result) => {
    themeArr[themeCount] = {
      themeHeading: theme[0],
      previewLink: theme[1],
      customiserLink: theme[2],
      storeDomain: theme[3]
    };

    let combinedThemeArray;
    let storedThemes = [];

    if (result.themes) {
      // Clear any identical themes
      let i = 0;
      for (const theme of result.themes) {
        if (theme.previewLink === themeArr[themeCount].previewLink) {
          result.themes.splice(i, 1);
        }

        i++;
      }

      storedThemes = result.themes;
    }

    combinedThemeArray = [themeArr[themeCount], ...storedThemes];

    chrome.storage.local.clear(function () {
      var error = chrome.runtime.lastError;
      if (error) {
        console.error(error);
      }
      // Set storage after clearing existing.
      chrome.storage.local.set({ themes: combinedThemeArray }).then(() => {
        console.log("Links set");
      });

    });
    chrome.storage.sync.clear(); // callback is optional

  });
}