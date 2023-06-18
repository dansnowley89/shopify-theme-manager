// TODO:
// Find a way to get name and Add name to recorded theme. 
// Add customiser links
// Options Page - 2 query selectors for dropdown menu & preview link (incase shopify should update these).

function checkIframeLoaded() {
  // Get a handle to the iframe element
  var iframeContainer = document.getElementById('AppFrameMain');

  const iframe = iframeContainer && iframeContainer.querySelectorAll('iframe');

  if (iframe && iframe.length === 1) {
    const iframeDoc = iframe[0].contentWindow.document;
    console.log('READY');

    if (iframeDoc.readyState === 'complete') {
      console.log('iframeDoc ready');

      const themes = [];

      let themeCount = 0;

      // Listener for when '...' is clicked
      const ddMenu = iframeDoc.querySelectorAll('[aria-label="Click for more theme actions"]');

      console.log('ddMenu');
      console.log(ddMenu);

      // Check that not just the first theme (published one) has loaded.
      if (ddMenu && ddMenu.length > 1) {
        console.log('in ddmenu');
        for (let i = 0; i < ddMenu.length; i++) {
          // eslint-disable-next-line no-loop-func
          ddMenu[i].addEventListener('click', () => {
            setTimeout(() => {
              const previewLink = iframeDoc.querySelectorAll('[aria-label="Preview (opens in a new window)"]');

              // TODO: Add to extension for when left and right mouse button(context menu) is clicked.
              previewLink[0].addEventListener('click', (e) => {

                console.log('CLICK !!!!!');
                addToExtension(e.currentTarget.getAttribute('href'), themeCount, themes);
                themeCount++;
              });

              previewLink[0].addEventListener('contextmenu', (e) => {
                console.log('CONTEXT !!!!!');

                addToExtension(e.currentTarget.getAttribute('href'), themeCount, themes);
                themeCount++;
              })

            }, 300);
          });
        }
        return;
      }
    }

    function addToExtension(theme, themeCount, themeArr) {
      // Get currently locally stored themes.
      chrome.storage.local.get(["themes"]).then((result) => {
        themeArr[themeCount] = {
          previewLink: theme,
          // TODO: Take the 'theme' var, take the preview theme id and assemble it to customiser url.
          // customiserLink: linksSelect[1].getAttribute('href')
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


console.log('here')