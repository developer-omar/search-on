import {  ref } from "vue";
import browser from "webextension-polyfill";

import { SearchEngine } from "../interfaces/search-engine.interface";

const useSearchEngineList = () => {
  const searchEngineList = ref<SearchEngine[]>([]);

  const initSearchEngineList = async () => {
    const { searchEngines } = await browser.storage.local.get("searchEngines");
    searchEngineList.value = searchEngines;
  };

  return {
    initSearchEngineList,
    searchEngineList,
  };
}

export { useSearchEngineList };
