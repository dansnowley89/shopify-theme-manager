const themeLinks = document.querySelectorAll('.js-test-link');

// Structure of links for localstorage
// const themes = [{}, {}];
const themes = [];

let i = 0;
for (const item of themeLinks) {

  // eslint-disable-next-line no-loop-func
  item.addEventListener('click', (e) => {
    e.preventDefault();

    // Get items from within current element.
    const container = e.target.parentNode;

    // Get links
    const linksSelect = container.querySelectorAll('.js-test-link');

    themes[i] = {
      previewLink: linksSelect[0].getAttribute('href'),
      customiserLink: linksSelect[1].getAttribute('href')
    };

    chrome.storage.local.set({ themes: themes }).then(() => {
      console.log("Links set");
    });

    i++;
  });

}