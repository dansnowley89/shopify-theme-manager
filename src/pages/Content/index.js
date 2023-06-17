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
            previewLink[0].addEventListener('click', (e) => {
              addToExtension(e.currentTarget.getAttribute('href'), themeCount, themes);
              themeCount++;
            });

            previewLink[0].addEventListener('contextmenu', (e) => {
              addToExtension(e.currentTarget.getAttribute('href'), themeCount, themes);
              themeCount++;
            })

          }, 500);
        });

      }

      return;
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
          chrome.storage.local.set({ themes: combinedThemeArray }).then(() => {
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


console.log('here')