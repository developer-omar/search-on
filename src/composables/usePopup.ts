import { onMounted, ref, toRaw } from "vue";
import browser from "webextension-polyfill";

import { SearchEngine } from "../interfaces/search-engine.interface";
import { useSearchEngineList } from "./useSearchEngineList";

const usePopup = () => {
  const { initSearchEngineList, searchEngineList } = useSearchEngineList();
  // as SearchEngine is type assertion
  const selectedSearchEngine = ref<SearchEngine>({} as SearchEngine);

  const initSelectedSearchEngine = () => {
    console.log(searchEngineList.value);
    const searchEngine = searchEngineList.value.find(
      searchEngine => searchEngine.selected == 1
    );
    selectedSearchEngine.value = searchEngine!;
  }

  const selectSearchEngineByNickname = (nickname: string) => {
    searchEngineList.value.forEach(searchEngine => {
      searchEngine.selected = 0;
      if (searchEngine.nickname == nickname) {
        searchEngine.selected = 1;
        selectedSearchEngine.value = searchEngine;
      }
    });
    browser.storage.local.set({ searchEngines: toRaw(searchEngineList.value) });
  }

  onMounted(async () => {
    await initSearchEngineList();
    initSelectedSearchEngine();
  })

  return {
    selectedSearchEngine,
    selectSearchEngineByNickname,
  }
}

export { usePopup };

