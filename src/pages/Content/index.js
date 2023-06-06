const themeLinks = document.querySelectorAll('.js-test-link');

// Structure of links for localstorage
// const links = [{
//   link1: 'www.previewlink.com',
//   link2: 'www.customiserlink.com'
// },
// {
//   link1: 'www.previewlink.com',
//   link2: 'www.customiserlink.com'
// }];

const links = [];

for (const item of themeLinks) {
  // eslint-disable-next-line no-loop-func
  item.addEventListener('click', (e) => {
    e.preventDefault();

    // Get items from within current element.
    const container = e.target.parentNode;

    // Get links
    const linksSelect = container.querySelectorAll('.js-test-link');

    for (const link of linksSelect) {
      console.log(link.getAttribute('href'));

      const newLink = link.getAttribute('href');
      links.push(newLink);
    }

    console.log('links!!!');
    console.log(links);

    chrome.storage.local.set({ links: links }).then(() => {
      console.log("Links set");
    });
  });
}







