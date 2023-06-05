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
  item.addEventListener('click', (e) => {
    e.preventDefault();

    // Get items from within current element.
    const container = e.target.parentNode;

    console.log('container');
    console.log(container);

    console.log(container.querySelectorAll('.js-test-link'));

    // Get links
    const links = container.querySelectorAll('.js-test-link');


    for (const link of links) {
      console.log(link.getAttribute('href'));
      // links.push()
    }


    chrome.storage.local.set({ links: links }).then(() => {
      console.log("Value is set");
    });
  });
}







