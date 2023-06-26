# Shopify Store Theme Activity

## What does it do?

This is a browser extension that monitors your theme activity aross multiple stores and places them in a convenient Popup. The idea came from an apparent frustration in constantly having to search a store, open the relevant theme and then need to do it again 5 minutes later for a different store. The hope is that this will save a lot of time over the course of a week and minimise the number of times you find yourself returning to the same theme by always having them to hand!

By default, navigating to your stores' theme and then clicking '...' > 'Preview' or simply right clicking on preview to bring up menu options will copy the theme's preview url and customiser url to the browsers 'Popup' tab.

One of the early principles of this extension has been to only read from the DOM and to not manipulate or insert anything. Ie. Avoid the use of "Copy url" buttons etc.

## Issues

- There is a circumstance where navigating to a store via the 'quick find' menu on the left hand side causes the incoming store to load the page with an iframe that is from another domain which violates CORS policy. This is perhaps an intermittent issue though.

The current work around for this is to always navigate to the correct store from the link on the Extension's Popup.


## Roadmap

- Options page 
  - Allow the user to choose the css selectors in which document.querySelector is used for selecting the ahref. This will be useful if/when Shopify update the dom layout. Allowing for a quick way to update. 
  - Text box for useful messaging to AMs/PMs. Ie. "Please checkout the latest theme features from this url: *theme_url*"
- Read the theme url on the actual page, not just on click? Ie. after the user has landed. This could open up a wider purpose for AM/PMs to also use the extension.
- Update name?
- Update icon
