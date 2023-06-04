const themeLinks = document.querySelectorAll('.js-test-link');

// Structure of links for localstorage
const links = [{
  link1: 'www.previewlink.com',
  link2: 'www.customiserlink.com'
},
{
  link1: 'www.previewlink.com',
  link2: 'www.customiserlink.com'
}];

for (const item of themeLinks) {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    chrome.storage.local.set({ links: links }).then(() => {
      console.log("Value is set");
    });
  });
}







