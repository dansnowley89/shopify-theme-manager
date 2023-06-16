

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

      const themes = [];

      let themeCount = 0;


      // Listener for when '...' is clicked
      const ddMenu = iframeDoc.querySelectorAll('[aria-label="Click for more theme actions"]');
      console.log('ddMenu>>>>>>');
      console.log(ddMenu);


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

      // Listener for customiser button click
      // for (let i = 0; i < cards.length; i++) {

      //   const buttons = cards[i].querySelectorAll('[class^="Polaris-Button"]')

      //   for (const button of buttons) {

      //     if (button.nodeName === "A") {
      //       console.log('button');
      //       console.log(button);
      //       // eslint-disable-next-line no-loop-func
      //       button.addEventListener('click', (e) => {
      //         e.preventDefault();
      //         console.log('Clicked....');
      //         console.log(e.target.innerText);
      //         //Add customise link. 
      //         if (e.target.innerText === 'Customize') {

      //           // Set theme
      //           themes[themeCount] = {
      //             previewLink: null,
      //             customiserLink: e.target.getAttribute('href')
      //           };

      //           console.log(themes);

      //           chrome.storage.local.set({ themes: themes }).then(() => {
      //             console.log("Links set");
      //           });

      //         }
      //         themeCount++;
      //       });
      //     }
      //   }

      // };

      return;
    }

    function addToExtension(theme, themeCount, themeArr) {

      // TODO: Take the 'theme' var, take the preview theme id and assemble it to customiser url.

      // Get currently locally stored themes.
      chrome.storage.local.get(["themes"]).then((result) => {
        themeArr[themeCount] = {
          previewLink: theme,
          // customiserLink: linksSelect[1].getAttribute('href')
        };

        let combinedThemeArray;

        if (result.themes && themeCount === 0) {
          combinedThemeArray = [...themeArr, ...result.themes];
        } else {
          combinedThemeArray = themeArr;
        }

        chrome.storage.local.set({ themes: combinedThemeArray }).then(() => {
          console.log("Links set");
        });
      });

    }

  }

  // Keep checking unless found iframe
  window.setTimeout(checkIframeLoaded, 5000);

}

function afterLoading() {
  alert("I am here");
}


window.addEventListener("load", () => {
  checkIframeLoaded();
});


console.log('here')