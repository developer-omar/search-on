import browser from "webextension-polyfill";
import searchEngines from './data/search-engines';
import extensionOptions from './data/extension-options';

browser.runtime.onInstalled.addListener(async (details) => {
  // console.log("Extension installed:", details);
  await browser.storage.local.set({
    searchEngines: searchEngines
  });

  await browser.storage.local.set({
    extensionOptions: extensionOptions
  });
});
