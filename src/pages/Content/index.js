import { printLine } from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.......');

console.log('ok?!!?!?!?!?.?!');

printLine("Using the 'printLine' function from the Print Module");


const themeLinks = document.querySelectorAll('.js-test-link');

console.log(themeLinks);

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

    //TODO: Move this to pop up.
    // chrome.storage.local.get(["links"]).then((result) => {
    //   console.log(result);
    //   console.log("Value currently is " + result.links);
    // });
  });

}







