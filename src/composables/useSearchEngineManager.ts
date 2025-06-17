import { onMounted, ref, toRaw } from "vue";
import { useRoute } from "vue-router";
import browser from "webextension-polyfill";
import router from "../router";

import { useSearchEngineList } from "./useSearchEngineList";
import { SearchEngine } from "../interfaces/search-engine.interface";

const useSearchEngineManager = () => {
  const { searchEngineList, initSearchEngineList } = useSearchEngineList();

  // Methods for search engines crud
  const route = useRoute();
  const searchEngine = ref<SearchEngine>({} as SearchEngine);

  const initSearchEngine = () => {
    if (typeof route.params.searchEngineId != "undefined") {
      const searchEngineId = parseInt(route.params.searchEngineId as string);
      searchEngineList.value.forEach(searchEngineItem => {
        if (searchEngineItem.id == searchEngineId) {
          searchEngine.value = searchEngineItem;
          return;
        }
      });
    } else {
      const index = searchEngineList.value.length - 1;
      searchEngine.value = {
        id: searchEngineList.value[index].id + 1,
        name: "",
        iconName: "",
        nickname: "",
        url: "",
        selected: 0
      };
    }
  }


  const addSearchEngine = (/*searchEngineParam: SearchEngine*/) => {
    deleteWhiteSpaces();
    if (searchEngine.value.selected == 1) {
      searchEngineList.value.forEach(searchEngineParam => {
        searchEngineParam.selected = 0;
      });
    }
    searchEngineList.value.push(searchEngine.value);
    browser.storage.local.set({ searchEngines: toRaw(searchEngineList.value) })
      .then(() => router.push("/search-engines"));
  }

  const updateSearchEngine = () => {
    let index = 0;
    searchEngineList.value.forEach((searchEngineParam, indexParam) => {
      if(searchEngineParam.id == searchEngine.value.id)
        index = indexParam;
      else if(searchEngine.value.selected == 1)
        searchEngineParam.selected = 0;
    });
    deleteWhiteSpaces();
    searchEngineList.value[index] = { ...searchEngine.value };
    browser.storage.local.set({ searchEngines: toRaw(searchEngineList.value) })
      .then(() => router.push("/search-engines"));
  }

  const deleteSearchEngine = (searchEngineParam: SearchEngine) => {
    if (searchEngineParam.selected == 1)
      searchEngineList.value[0].selected = 1;
    searchEngineList.value = searchEngineList.value.filter(
      searchEngine => searchEngine.id != searchEngineParam.id
    );
    browser.storage.local.set({ searchEngines: JSON.parse(JSON.stringify(searchEngineList.value)) });
    //console.log(JSON.parse(JSON.stringify(searchEngineList.value)));
  }

  const selectSearchEngine = (searchEngineParam: SearchEngine) => {
    searchEngineList.value = searchEngineList.value.map(searchEngine => {
      if (searchEngine.id == searchEngineParam.id)
        searchEngine.selected = 1;
      else
        searchEngine.selected = 0;
      return searchEngine;
    });
    browser.storage.local.set({ searchEngines: JSON.parse(JSON.stringify(searchEngineList.value)) });
  }

  const deleteWhiteSpaces = () => {
    searchEngine.value.name = searchEngine.value.name.trim();
    searchEngine.value.url = searchEngine.value.url.trim();
    searchEngine.value.iconName = searchEngine.value.iconName.trim();
    searchEngine.value.nickname = searchEngine.value.nickname.trim();
    
  }

  onMounted(async () => {
    await initSearchEngineList();
    initSearchEngine();
  })

  return {
    searchEngineList,
    searchEngine,
    addSearchEngine,
    updateSearchEngine,
    deleteSearchEngine,
    selectSearchEngine,
  }
}

export { useSearchEngineManager };
