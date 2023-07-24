// TODO:
// Add message for AM/PMs
// Options Page - 2 query selectors for dropdown menu & preview link (incase shopify should update these).

function checkIframeLoaded() {

  console.log('checkiframeloaded...');

  // Get a handle to the iframe element
  var iframeContainer = document.getElementById('AppFrameMain');

  const iframe = iframeContainer && iframeContainer.querySelectorAll('iframe');

  if (iframe && iframe.length === 1) {
    const iframeDoc = iframe[0].contentWindow.document;
    console.log('Iframe ready');

    const themes = [];

    let themeCount = 0;

    // Listener for when '...' is clicked
    const ddMenu = iframeDoc.querySelectorAll('[aria-label="Click for more theme actions"]');

    // Check that not just the first theme (published one) has loaded.
    if (ddMenu && ddMenu.length > 1) {
      for (let i = 0; i < ddMenu.length; i++) {
        // eslint-disable-next-line no-loop-func
        ddMenu[i].addEventListener('click', () => {
          setTimeout(() => {
            const previewLink = iframeDoc.querySelectorAll('[aria-label="Preview (opens in a new window)"]');
            const themeData = [];

            // Get the heading based on the parent li of ddMenu h3.
            const themeHeading = ddMenu[i].closest('li').querySelector('h3').innerText;

            themeData.push(themeHeading);

            // Consider left & right mouse btn click.
            previewLink[0].addEventListener('click', (e) => {
              const previewUrl = e.currentTarget.getAttribute('href');
              themeData.push(previewUrl);

              // Grab theme id to construct customiser url
              const domainUrl = previewUrl.split('/')[2];
              const urlArr = previewUrl.split('&');
              const arrItem = urlArr.find(a => a.includes("preview_theme_id"));
              const previewThemeId = arrItem.split('=')[1];
              const customiserUrl = `https://${domainUrl}/admin/themes/${previewThemeId}/editor`;
              themeData.push(customiserUrl);
              themeData.push(domainUrl);

              addToExtension(themeData, themeCount, themes);
              themeCount++;
            });

            previewLink[0].addEventListener('contextmenu', (e) => {
              themeData.push(e.currentTarget.getAttribute('href'));

              addToExtension(themeData, themeCount, themes);
              themeCount++;
            })

          }, 300);
        });
      }
      return;
    }

    function addToExtension(theme, themeCount, themeArr) {
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

  }

  // Keep checking unless found iframe
  window.setTimeout(checkIframeLoaded, 500);

}

window.addEventListener("load", () => {
  checkIframeLoaded();
});