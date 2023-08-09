console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.tabs.query({
  active: true,
  currentWindow: true
}, function (tabs) {
  var tab = tabs[0];
  var url = tab.url;

  console.log(tabs);
  console.log(url);
});